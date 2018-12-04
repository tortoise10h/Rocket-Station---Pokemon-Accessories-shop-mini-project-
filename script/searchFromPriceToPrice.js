function setLinkAndGoToSearch() {
  var priceFrom = document.getElementById('priceFrom').value;
  var priceTo = document.getElementById('priceTo').value;
  if (priceFrom == '' || priceFrom < 0)
    priceFrom = 0;
  if (priceTo == '' || priceTo <0)
    priceTo = 0;
  var currentURL = location.href;
  var baseURL = currentURL.split('?')[0];
  var categoryURL = (currentURL.split('?')[1]).split('&')[0];
  var setURL = baseURL + '?' + categoryURL + '&search=price' + priceFrom + 'to' + priceTo + '&' + '0';
  location.href = setURL;
  searchFromPriceToPrice();
}

function searchFromPriceToPrice() {
  var searchURL = location.href;
  if (searchURL.indexOf('search') != -1) {
    var productType = (searchURL.split('?')[1]).split('&')[0];
    var priceFrom = (searchURL.split('price')[1]).split('to')[0];
    var priceTo = ((searchURL.split('price')[1]).split('to')[1]).split('&')[0]; //split để lấy giá đến nhé
    var position = (searchURL.split('price')[1]).split('&')[1];
    var productList = [];
    priceFrom = parseInt(priceFrom);
    priceTo = parseInt(priceTo);
    switch (productType) {
      case 'plu':
        productList = plushList;
        break;
      case 'hat':
        productList = hatList;
        break;
      case 'fig':
        productList = figureList;
        break;
      case 'shi':
        productList = shirtList;
        break;
      default:
        break;
    }

    // console.log("priceF " + priceFrom);
    // console.log("priceT " + priceTo);
    // console.log("position " + position);

    var indexOfTempList = 0;
    var found = false;
    var tempList = [];
    var indexOfTempArr = 0;
    var tempArr = [];
    console.log(productList.length);
    for (var i=0; i<productList.length; i++) {
      var productPrice = parseInt(productList[i].fixPrice);
      if (productPrice >= priceFrom && productPrice <= priceTo) {
        found = true;
        let productLink = "index.html" + "?"  + productType + "#" + productList[i].id;
        tempList[indexOfTempList++] = "<div class='product'>" +
        "<div class='product-img'>"+
        "<a href='" + productLink + "' target='_blank'>" +
        "<img src='" + productList[i].imgLink + "' alt='" + productList[i].alternateText + "'>" +
        "</a>"+
        "</div>" +
        "<hr>" +
        "<div class='product-name'>"+
        "<a href='#' target='_blank'>" +
        "<p>" + productList[i].name + "</p>" +
        "</a>"+
        "</div>" +
        "<div class='product-price'>" +
        "<p>"  + "<span class='fix-price-highlight'>" + productList[i].fixPrice + "₫" + "</span>" + "<span class='price-deco'>" + productList[i].firstPrice + "₫" + "</span>"  +"</p>" +
        "</div>"+
        '</div>';
        tempArr[indexOfTempArr++] = productList[i];
      }
    }
    console.log(tempList);
    console.log(found);
    if (found) {
      let displayZone = document.createElement('div');
      displayZone.className = "product-display-zone";
      mainZone.appendChild(displayZone);

      var count = 0;
      var productText = "";
      for(let i = position; i < tempList.length; i++){
          // console.log("product " + productList[i].color);
          // console.log("ele " + eleUrl[0]);
              count++;
              productText += tempList[i];
              if(count == 8){
                  break;
              }
          }

          var tempPosition = 'search&' + position;
          addPagination(tempArr,tempPosition,displayZone);
          document.getElementsByClassName('products')[0].innerHTML = productText;
      }

    else {
      document.getElementsByClassName('products')[0].innerHTML = "Không tìm thấy sản phẩm";
      document.getElementsByClassName('pagination')[0].style.display = "none";
    }
  }
}