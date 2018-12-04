
function displaySearchResult(){
	let searchUrlPage = url.split("?")[1];
	if(searchUrlPage.indexOf("main-search") > -1){
		let searchList = getAllProductMatch();
                //if search value doesn't match anything
		if(searchList.length === 0){
			mainZone.innerHTML = "<p class='not-found-alert'>Không tìm thấy sản phẩm phù hợp</p>"
		}else{
			if(searchUrlPage.indexOf("&") > -1){
				mainZone.innerHTML = addPageSearch(searchList,searchUrlPage.split('&')[1]);
				console.log(searchUrlPage.split('&')[1]);
			}else{
				mainZone.innerHTML = addPageSearch(searchList, -1);
			}

			let searchPagin = document.getElementById('search-pagination');
			searchPagin.innerHTML = searchPagination(searchList);
		}
	}
}

function addPageSearch(searchList, position){
	let searchUrlPage = url.split("?")[1];
	let count = 0;
	let searchPage = "<div class='search-page-title'>" +
	"<h1>Kết quả tìm kiếm</h1>" +
	"</div>" +
	"<div class='products'>";
        //position = -1 mean page 1 and in else block mean rest of page 2,3,...
	if(position === -1){
		for(let i = 0; i < searchList.length; i++){
			count++;
			searchPage += layoutForEachProduct(searchList[i]);
			if(count === 10){
				break;
			}
		}
	}else{
		console.log(position);
		console.log(searchList.length);
		for(let i = position; i < searchList.length; i++){
			count++;
			searchPage += layoutForEachProduct(searchList[i]);
			console.log(searchList[i]);
			if(count === 10){
				break;
			}
		}
	}
	searchPage += "</div><div id='search-pagination' class='pagination'></div>";
	return searchPage;
}

function searchPagination(searchList){
	let searchUrlPage = url.split("?")[1];
	let numOfPage = Math.ceil(searchList.length / 10);
        //store all pagin tag
	let pages = "";
        //store main-search=value - value from user input
	let temp;
        //position of each page to active that page on
	let position;
        //if indexOf('&') > -1 mean page 2,3,4,... and else mean page 1
	if(searchUrlPage.indexOf("&") > -1){
		temp = searchUrlPage.split("&")[0];
		position = searchUrlPage.split("&")[1];
	}else{
		temp = searchUrlPage;
		position = -1;
	}
        //add default link for page 1 
	if(position === -1){
		pages += "<a class='active' href='index.html?" + temp + "'>1</a>";
	}else{
		pages += "<a href='index.html?" + temp + "'>1</a>";
	}
	let pageIndex;
        //dynamic link for page 2,3,4...
	for(let i = 2; i <= numOfPage; i++){
		pageIndex = (i-1)*10;
		pages += "<a href='index.html?" + temp + "&" + pageIndex + "'";
		if(pageIndex == position){
			pages += "class='active'>" + i + "</a>";
		}else{
			pages += ">" + i + "</a>";
		}
	}
	return pages;
}

//get all product which is match with search value
function getAllProductMatch(){
	let searchUrlPage = url.split("?")[1];
	let result = [];
	let searchValue = searchUrlPage.split("=")[1];
	if(searchValue.indexOf("&") > -1){
		searchValue = searchValue.split("&")[0];
	}
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
    	let searchUrlPage = url.split("?")[1];
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

