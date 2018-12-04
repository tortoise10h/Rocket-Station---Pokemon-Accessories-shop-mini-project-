function setLinkAndGoToSearch() {
  var priceFrom = document.getElementById('priceFrom').value;
  var priceTo = document.getElementById('priceTo').value;
  var currentURL = location.href;
  var baseURL = currentURL.split('?')[0];
  var categoryURL = (currentURL.split('?')[1]).split('&')[0];
  var setURL = baseURL + '?' + categoryURL + '&search=price' + priceFrom + 'to' + priceTo + '&' + '0';
  location.href = setURL;
  searchFromPriceToPrice();
}

function searchFromPriceToPrice() {
  var searchURL = location.href;
  var productType = (searchURL.split('?')[1]).split('&')[0];
  var priceFrom = (searchURL.split('price')[1]).split('to')[0];
  var priceTo = ((searchURL.split('price')[1]).split('to')[1]).split('&')[0]; //split để lấy giá đến nhé, VD là số 300k trong link kia
  var position = (searchURL.split('price')[1]).split('&')[1];
  var productList = [];
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
  for (var i=0; i<productList.length; i++) {
    if (productList[i].fixPrice >= priceFrom && productList[i].fixPrice <= priceTo) {
      found = true;
      tempList[indexOfTempList++] = productList[i];
    }
  }
  // console.log(tempList);
  // console.log(found);
  if (found) {
    let displayZone = document.createElement('div');
    displayZone.className = "product-display-zone";
    mainZone.appendChild(displayZone);
    addProductDisplayZone(position,tempList,productType,searchURL.split('?')[0]);
    var tempPosition = 'search&' + position;
    addPagination(tempList,tempPosition,displayZone);
  }
  else {
    document.getElementsByClassName('products')[0].innerHTML = "Không tìm thấy sản phẩm";
    document.getElementsByClassName('pagination')[0].style.display = "none";
  }
}
