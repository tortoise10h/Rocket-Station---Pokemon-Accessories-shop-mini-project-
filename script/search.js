let searchUrlPage = url.split("?")[1];

function displaySearchResult(){
	if(searchUrlPage.indexOf("main-search") > -1){
		let searchList = getAllProductMatch();
		if(searchList.length === 0){
			mainZone.innerHTML = "<p class='not-found-alert'>Không tìm thấy sản phẩm</p>"
		}else{
			 let searchPage = "<div class='search-page-title'>" +
	        "<h1>Kết quả tìm kiếm</h1>" +
	        "</div>" +
	        "<div class='products'>";
			for(let i = 0; i < searchList.length; i++){
				searchPage += layoutForEachProduct(searchList[i]);
			}
			searchPage += "</div>";
			mainZone.innerHTML = searchPage;
		}
	}
}
//get all product which is match with search value
function getAllProductMatch(){
	let result = [];
	let searchValue = searchUrlPage.split("=")[1];
	//change "+"" from result url to " " because space in url is encoded to +
	searchValue = searchValue.split("+").join(" ").toLowerCase();

	for(let i = 0; i < productArr.length; i++){
		if(productArr[i].name.toLowerCase().indexOf(searchValue) > -1){
			result.push(productArr[i]);
		}
	}

	return result;
}

function layoutForEachProduct(product){
	let text = "";
	let filter = product.id.substr(0,3);
    let productLink =  "index.html?" + filter + "#" + product.id;
    text += "<div class='product'>" +
    "<div class='product-img'>"+
    "<a href='" + productLink + "' target='_blank'>" + 
    "<img src='" + product.imgLink + "' alt='" + product.alternateText + "'>" +
    "</a>"+
    "</div>" +
    "<hr>" +
    "<div class='product-name'>"+
    "<a href='" + productLink + "' target='_blank'>" + 
    "<p>" + product.name + "</p>" +
    "</a>"+
    "</div>" +
    "<div class='product-price'>" +
    "<p>"  + "<span class='fix-price-highlight'>" + product.fixPrice + "₫" + "</span>" + "<span class='price-deco'>" + product.firstPrice + "₫" + "</span>"  +"</p>" +
    "</div>"+
    '</div>';
    return text;
}

