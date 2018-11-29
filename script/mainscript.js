
/**SLIDE SHOW**/
//get all slide
let slides = document.getElementsByClassName('slide');

//get all dot
let dots = document.getElementsByClassName('dot');

//get slide zone
let slideZone = document.getElementById('slide-zone');

//get left and right arrow
let pre = document.getElementById('leftarrow');
let next = document.getElementById('rightarrow');

let current = 0; //current slide index

//reset all slides
function slideReset(){
        //for slide image
        for(let i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        //for dots
        for(let i = 0; i < dots.length; i++){
            dots[i].style.backgroundColor = "#fff";
        }
    }

//start slide
function startSlide(){
    slideReset();
        //set default slide
        slides[0].style.display = "block";
        //set default dot
        dots[0].style.backgroundColor = "#ff5959";
    }
    startSlide();

//when click pre button
function leftSlide(){
    slideReset();
    slides[current - 1].style.display = "block";
    dots[current - 1].style.backgroundColor = "#ff5959";
    current--;
}
pre.addEventListener('click',previousSlide);

function previousSlide(){
    if(current === 0){
        current = slides.length;
    }
    leftSlide();
}
//when click next button
function rightSlide(){
    slideReset();
    slides[current + 1].style.display = "block";
    dots[current + 1].style.backgroundColor = "#ff5959";
    current++;
}
next.addEventListener('click',nextSlide);
function nextSlide(){
    if(current === slides.length - 1){
        current = -1;
    }
    rightSlide();
}

//for dot click
function gotoSlide(index){
    slideReset();
    slides[index].style.display = "block";
    dots[index].style.backgroundColor = "#ff5959";
    current = index;
}

/**CATEGORY PAGINATION**/
let mainZone = document.getElementById('main-id');  //get main tag for display
let url = window.location.href; //this is.... url

function urlHandle(){
    let checkHomePage = false;
    if(url.indexOf("?") < 0){
        checkHomePage = true;
    }
    if(checkHomePage == true){
        //Best seller zone
        let bestSellerBox = document.createElement('div');
        bestSellerBox.className = "best-box";
        bestSellerBox.id = "best-seller-box";

        let bestSaleBox = document.createElement('div');
        bestSaleBox.className = "best-box";
        bestSaleBox.id = "best-sale-box";

        mainZone.appendChild(bestSellerBox);
        mainZone.appendChild(bestSaleBox);

        let bestSellerTitle = "<div class='best-title'>" +
        "<h1>Best <span class='highlight'>Seller</span></h1>" +
        "<i class='fas fa-grip-horizontal'></i>" +
        "</div>";

        let bestSellerText = bestSellerTitle +  "<div class='products'>";
        for(let i = 0; i < bestSellerArr.length; i++){
            let filter = bestSellerArr[i].id.substr(0,3);
            let productLink = url + "?" + filter + "#" + bestSellerArr[i].id;
            bestSellerText += "<div class='product'>" +
            "<div class='product-img'>"+
            "<a href='" + productLink + "' target='_blank'>" + 
            "<img src='" + bestSellerArr[i].imgLink + "' alt='" + bestSellerArr[i].alternateText + "'>" +
            "</a>"+
            "</div>" +
            "<hr>" +
            "<div class='product-name'>"+
            "<a href='#' target='_blank'>" +
            "<p>" + bestSellerArr[i].name + "</p>" +
            "</a>"+
            "</div>" +
            "<div class='product-price'>" +
            "<p>"  + "<span class='fix-price-highlight'>" + bestSellerArr[i].fixPrice + "₫" + "</span>" + "<span class='price-deco'>" + bestSellerArr[i].firstPrice + "₫" + "</span>"  +"</p>" +
            "</div>"+
            "<div class='add-cart-zone'>"+
            "<button class='add-cart-btn' value='" + bestSellerArr[i].id + "'>Thêm vào giỏ</button>" + 
            "</div>" +
            '</div>';
        }
        bestSellerText += "</div>";
        bestSellerBox.innerHTML = bestSellerText;

        //Best sale zone
        
        let bestSaleTitle = "<div class='best-title'>" +
        "<h1>Best <span class='highlight'>Sale</span></h1>" +
        "<i class='fas fa-grip-horizontal'></i>" +
        "</div>";

        let bestSaleText = bestSaleTitle +  "<div class='products'>";
        for(let i = 0; i < bestSaleArr.length; i++){
            let filter = bestSaleArr[i].id.substr(0,3);
            let productLink = url + "?" + filter + "#" + bestSaleArr[i].id;
            bestSaleText += "<div class='product'>" +
            "<div class='product-img'>"+
            "<a href='" + productLink + "' target='_blank'>" + 
            "<img src='" + bestSaleArr[i].imgLink + "' alt='" + bestSaleArr[i].alternateText + "'>" +
            "</a>"+
            "</div>" +
            "<hr>" +
            "<div class='product-name'>"+
            "<a href='#' target='_blank'>" +
            "<p>" + bestSaleArr[i].name + "</p>" +
            "</a>"+
            "</div>" +
            "<div class='product-price'>" +
            "<p>"  + "<span class='fix-price-highlight'>" + bestSaleArr[i].fixPrice + "₫" + "</span>" + "<span class='price-deco'>" + bestSaleArr[i].firstPrice + "₫" + "</span>"  +"</p>" +
            "</div>"+
            "<div class='add-cart-zone'>"+
            "<button class='add-cart-btn' value='" + bestSaleArr[i].id + "'>Thêm vào giỏ</button>" + 
            "</div>" +
            '</div>';
        }
        bestSaleText += "</div>";
        bestSaleBox.innerHTML = bestSaleText;

        

        //If user login true => can add product to cart
        //get all add to cart button
        let homeAddCartBtn = document.getElementsByClassName('add-cart-btn');
        //add event listener for each button
        for(let i = 0; i < homeAddCartBtn.length; i++){
            let productId = homeAddCartBtn[i].value;
            homeAddCartBtn[i].addEventListener('click', function(){
                saveProduct(productId);
            });
        }

    }else{
        let urlParams = url.split("?"); 
        let categoryUrl = urlParams[1];
        categoryUrl = categoryUrl.split('&');
        let position = categoryUrl[1];
        switch(categoryUrl[0]){

            case 'hat' :{
                addLeftMenu();
                addProductDisplayZone(position,hatList, categoryUrl[0], urlParams[0]);
                break;
            }
            case 'shi' :{
                addLeftMenu();
                addProductDisplayZone(position,shirtList, categoryUrl[0], urlParams[0]);
                break;
            }
            case 'plu' :{
                addLeftMenu();
                addProductDisplayZone(position,plushList, categoryUrl[0], urlParams[0]);
                break;
            }
            case 'fig' :{
                addLeftMenu();
                addProductDisplayZone(position,figureList, categoryUrl[0], urlParams[0]);
                break;
            }

        }
    }
}
//Save product to shopping cart
function saveProduct(productId){
            //variable for check user login
            let check = JSON.parse(localStorage.getItem('check'));
            let checkUserLogin = check.isLogin;
            if(checkUserLogin === null){
                alert("Cần phải đăng nhập trước khi mua hàng!!!");
            }else{
                //variable to get information of product
                let produId;
                let productImgLink;
                let productName;
                let productQuantity;
                let productFirstPrice;
                let productLastPrice;
                let productOfUser;
                //get product infomation
                //find product out
                for(let i = 0; i < productArr.length; i++){
                    if(productArr[i].id == productId){
                        produId = productArr[i].id;
                        productImgLink = productArr[i].imgLink;
                        productName = productArr[i].name;
                        productFirstPrice = productArr[i].firstPrice;
                        productLastPrice = productArr[i].fixPrice;
                        productOfUser = check.currentUsername;
                        productQuantity = 1;
                        break;
                    }
                }
                //object for product in cart
                let productCart = {
                    prodId: produId,
                    imgLink: productImgLink,
                    name: productName,
                    quantity: productQuantity,
                    price: productFirstPrice,
                    lastPrice: productLastPrice,
                    user: productOfUser
                }


                //check exists of product in cart array
                if(localStorage.getItem('productCartArr') === null){
                    let productCartArr = [];
                    productCartArr.push(productCart);
                    //re-set to local storage
                    localStorage.setItem('productCartArr', JSON.stringify(productCartArr));
                    alert("Thêm vào giỏ thành công!!!");
                }else{
                    let productCartArr = JSON.parse(localStorage.getItem('productCartArr'));
                    //check the exists of product in shopping cart
                    let position = findProduct(productId, productCartArr);
                    //if product isn't exists in shopping cart
                    if(position === -1){
                        productCartArr.push(productCart);
                    }else{
                        //handle quantity of product in shopping cart
                        productCartArr[position].quantity = checkProductQuantity(productId, productCartArr);
                    }
                    
                    //re-set to local storage
                    localStorage.setItem('productCartArr',JSON.stringify(productCartArr));
                    alert("Thêm vào giỏ thành công!!!");
                }
            }
        }
//find position of product in productCartArr array
function findProduct(productId, productCartArr){
    let pos = -1;
    for(let i = 0; i < productCartArr.length; i++){
        if(productId === productCartArr[i].prodId){
            pos = i;
            break;
        }
    }
    return pos;
}
//handle quantity of product in shopping cart
function checkProductQuantity(productId, productCartArr){
    let endQuantity = 1;
    for(let i = 0; i < productCartArr.length; i++){
        if(productId === productCartArr[i].prodId){
            endQuantity += productCartArr[i].quantity;
            break;
        }
    }
    return endQuantity;
}
function addLeftMenu(){

    /*CREATE LEFT MENU*/
    let leftMenu = document.createElement('div');
    leftMenu.className = "left-menu";
    mainZone.appendChild(leftMenu);
    //add Inpage search zone
    leftMenu.appendChild(addSearchInpage());
    //add Filter 
    let filterZone = document.createElement('div');
    filterZone.className = "filter";
    leftMenu.appendChild(filterZone);
    
    document.querySelector('.filter').appendChild(filterList());
}

function addSearchInpage(){
    let searchZone = document.createElement('div');
    searchZone.className = "inpage-search";
    let searchForm = document.createElement('form');
    let input = document.createElement('input');
    //add attribute for input box
    input.setAttribute("type","text");
    input.setAttribute("size","36");
    input.setAttribute("placeholder","Tìm kiếm...");
    input.setAttribute("name","inpage-search");
    searchForm.appendChild(input);
    searchZone.appendChild(searchForm);
    return searchZone;
}
function filterList(){
    let text = document.createElement('ul');

    let li1 = document.createElement('li');
    li1.id = 'asc-price';
    li1.appendChild(document.createTextNode('Giá từ thấp đến cao'));
    text.appendChild(li1);

    let li2 = document.createElement('li');
    li2.id = 'des-price';
    li2.appendChild(document.createTextNode('Giá từ cao đến thấp'));
    text.appendChild(li2);

    let li3 = document.createElement('li');
    li3.id = 'fire-ele';
    li3.appendChild(document.createTextNode('Hệ lửa'));
    text.appendChild(li3);

    let li4 = document.createElement('li');
    li4.id = 'elec-ele';
    li4.appendChild(document.createTextNode('Hệ điện'));
    text.appendChild(li4);

    let li5 = document.createElement('li');
    li5.id = 'water-ele';
    li5.appendChild(document.createTextNode('Hệ nước'));
    text.appendChild(li5);

    let li6 = document.createElement('li');
    li6.id = 'grass-ele';
    li6.appendChild(document.createTextNode('Hệ cây'));
    text.appendChild(li6);

    let li7 = document.createElement('li');
    li7.id = 'rock-ele';
    li7.appendChild(document.createTextNode('Hệ đá'));
    text.appendChild(li7);
    return text;
}   

function addProductDisplayZone(position,productList,categoryUrl,baseUrl){
    //Create product display zone
    let displayZone = document.createElement('div');
    displayZone.className = "product-display-zone";
    mainZone.appendChild(displayZone); 
    //create main frame of product display zone
    if(categoryUrl === 'fig'){
        addProductZoneMain("Pokemon Figure",displayZone);
    }else if(categoryUrl === 'plu'){
        addProductZoneMain("Thú nhồi bông",displayZone);
    }else if(categoryUrl === 'hat'){
        addProductZoneMain("Nón",displayZone);
    }else{
        addProductZoneMain("Áo thun",displayZone);
    }
    //display product list 
    document.querySelector('.product-zone').innerHTML = addProduct(position,productList,categoryUrl,baseUrl);
    //display pagination
    addPagination(productList,position,displayZone);
    //hide slide show
    slideZone.style.display = "none";
    
}
function addProduct(position,productList,categoryUrl,baseUrl){
    let count = 0;
    let productText = "<div class='products'>";
    for(let i = position; i < productList.length; i++){
        count++;
        let productLink = baseUrl + "?"  + categoryUrl + "#" + productList[i].id;
        productText += "<div class='product'>" +
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
        if(count == 8){
            break;
        }
    }
    productText += "</div>";
    return productText;
}
function addPagination(productList, position,displayZone){
    //take product id
        //take product filter
        let filter = productList[0].id;
        let filterId = filter.substr(0,3);
    //create pagination div
    let pagination = document.createElement('div');
    pagination.className = "pagination";
    displayZone.appendChild(pagination);
    //calculate length of given product list
    let numOfPage = Math.ceil(productList.length / 8);
    let pages = "";
    let pageIndex;
    //create pages
    for(let i = 1; i <= numOfPage; i++){
        pageIndex = (i-1)*8;
        pages += "<a href='index.html?" + filterId + "&" + pageIndex + "'";
        if(pageIndex == position){
            pages += "class='active'>" + i + "</a>";
        }else{
            pages += ">" + i + "</a>";
        }
    }

    document.querySelector('.pagination').innerHTML = pages;

}

function addProductZoneMain(categoryName, displayZone){
    //category title
    let categoryTitle = document.createElement('h1');
    categoryTitle.className = 'category-title';
    displayZone.appendChild(categoryTitle);
    categoryTitle.appendChild(document.createTextNode(categoryName));
    //hr uderline category title
    let hr = document.createElement('hr');
    displayZone.appendChild(hr);
    //Place for product display
    let productZone = document.createElement('div');
    productZone.className = 'product-zone';
    displayZone.appendChild(productZone);
}


function getProduct() {
    var i;
    var url = window.location.href;
    var params = url.split('?');
    var chuoicon = params[1];
    if (chuoicon.indexOf('#') != -1) {
        chuoicon = chuoicon.split('#');
        document.getElementById("main-id").innerHTML = defaultProductPageLayout();
        for (i=0; i<productArr.length; i++) {
            if (productArr[i].id == chuoicon[1]) {
                var productThumbnail = document.getElementsByClassName('product-thumbnail');
                var productImage = document.getElementsByClassName('product-image');
                let addToCart = document.getElementsByClassName('add-to-cart');
                var s1 = ''; //chuỗi s1 chứa các tag <img> để in ra product-thumbnail
                var s2 = ''; //chuỗi s1 chứa các tag <img> để in ra product-image
                var s3; //chuỗi s3 chứa button và trong button có id từng sản phẩm để phục vụ cho bỏ vào giỏ hàng
                //mỗi sp 4 hình -> i chạy từ 1 đến 4
                var j;
                s3 = "<button class='prod-detail-add-cart' value='" + productArr[i].id + "'><i class='fa fa-shopping-cart'></i>&nbsp;Thêm vào giỏ</button>"
                //../img/fig/fig08/fig08_1.jpg
                for (j=1; j<=4; j++) {
                  var filter = productArr[i].id.substr(0,3);
                  s1 += '<img src="../img/' +
                  filter +
                  '/' +
                  productArr[i].id +
                  '/' +
                  productArr[i].id + '_' + j + '.jpg" alt="' + productArr[i].id + '_' + j + '.jpg"' +
                  'class="demo cursor" onclick="currentSlide(' + j + ')">';
                  //alert(s1);
                  s2 += '<div class="my-slides"><img src="../img/' +
                  filter +
                  '/' +
                  productArr[i].id +
                  '/' +
                  productArr[i].id + '_' + j + '.jpg" alt="' + productArr[i].id + '_' + j + '.jpg">' +
                  '</div>';
                  //alert(s2);
                  document.title = productArr[i].name;
                }
                productThumbnail[0].innerHTML = s1; //do dùng getElementsByClassName nên phải ghi là productThumbnail[0]
                productImage[0].innerHTML = s2; //do dùng getElementsByClassName nên phải ghi là productImage[0]
                addToCart[0].innerHTML = s3; //do ... như trên luôn

                //get all add to cart button and give them save product function when click
                let addCartBtn = document.getElementsByClassName('prod-detail-add-cart');
                //add event listener for each button
                for(let i = 0; i < addCartBtn.length; i++){
                    let productId = addCartBtn[i].value;
                    addCartBtn[i].addEventListener('click', function(){
                        saveProduct2(productId);
                    });
                }
            }
        }
        showSlides(slideIndex);
        slideZone.style.display = "none";
    }
}
//this function for add product to cart for product detail page
//because in product detail page has "quantity"
function saveProduct2(productId){
    //variable for check user login
    let check = JSON.parse(localStorage.getItem('check'));
    let checkUserLogin = check.isLogin;
    if(checkUserLogin === null){
        alert("Cần phải đăng nhập trước khi mua hàng!!!");
    }else{
        //variable to get information of product
        let produId;
        let productImgLink;
        let productName;
        let productQuantity;
        let productFirstPrice;
        let productLastPrice;
        let productOfUser;
        //get product infomation
        //find product out
        for(let i = 0; i < productArr.length; i++){
            if(productArr[i].id == productId){
                produId = productArr[i].id;
                productImgLink = productArr[i].imgLink;
                productName = productArr[i].name;
                productFirstPrice = productArr[i].firstPrice;
                productLastPrice = productArr[i].fixPrice;
                productOfUser = check.currentUsername;
                break;
            }
        }
        //get product from quantity box
        let quantityBox = document.querySelector('input[name="quantity"]');
        productQuantity = quantityBox.value;

        //object for product in cart
        let productCart = {
            prodId: produId,
            imgLink: productImgLink,
            name: productName,
            quantity: productQuantity,
            price: productFirstPrice,
            lastPrice: productLastPrice,
            user: productOfUser
        }


        //check exists of product in cart array
        if(localStorage.getItem('productCartArr') === null){
            let productCartArr = [];
            productCartArr.push(productCart);
            //re-set to local storage
            localStorage.setItem('productCartArr', JSON.stringify(productCartArr));
            alert("Thêm vào giỏ thành công!!!");
        }else{
            let productCartArr = JSON.parse(localStorage.getItem('productCartArr'));
            //check the exists of product in shopping cart
            let position = findProduct(productId, productCartArr);
            //if product isn't exists in shopping cart
            if(position === -1){
                productCartArr.push(productCart);
            }else{
                //handle quantity of product in shopping cart
                productCartArr[position].quantity = checkProductQuantity(productId, productCartArr);
            }
            
            //re-set to local storage
            localStorage.setItem('productCartArr',JSON.stringify(productCartArr));
            alert("Thêm vào giỏ thành công!!!");
        }
    }
}
//default layout for product page
function defaultProductPageLayout(){
    let defaultLayout = '<div class="product-container">' +
    '<div class="product-gallery">' +
    '<div class="product-thumbnail">' +
    '</div>' + //end of product-thumbnail
    '<div class="product-image">' +
    '</div>' + //end of product-image
    '</div>' + //end of product-gallery
    '<div class="product-info">' +
    '<div class="product-title">' +
    '</div>' + //end of product-title
    '<hr>' +
    '<div class="product-preview">' +
    '</div>' + //end of product-preview
    '<hr>' +
    '<div class="product-price">' +
    '</div>' + //end of product-price
    '<form>' +
    '<div class="quantity-selection">' +
    'Số lượng: <input type="number" name="quantity" min="1" max="99" value="1">' +
    '</div>' + //end of quantity-selection
    '<div class="buy-now-and-cart">' +
    '<div class="buy-now-button">' +
    '</div>' +
    '<div class="add-to-cart">' +
    '</div>' +
    '</div>' + //end of buy-now-and-cart
    '</form>' +
    '</div>' + //end of product-info
    '</div>' + //end of product-container
    '<div class="description">' +
    '<div class="warning">' +
    '</div>' +
    '</div>';
    return defaultLayout;
}

//script để show ảnh khi click vào
var slideIndex = 1;

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  //alert(slideIndex);
  //alert(slides[0]);
  if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
  //alert(slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";
}
//kết thúc phần script show ảnh

let userCategory = document.getElementsByClassName('user-category');
userCategory[0].style.display = "none";
userCategory[1].style.display = "none";
userCategory[2].style.display = "none";

function checkLoginStatus(){
    let signZone = document.getElementById('sign-zone');
    let check  = JSON.parse(localStorage.getItem('check'));
    let loginCheck;
    if(check !== null){
        loginCheck = check.isLogin;
    }
    if(loginCheck ==  true){
        signZone.style.display = "none";
        userCategory[0].style.display = "inline-block";
        userCategory[1].style.display = "inline-block";
        userCategory[2].style.display = "inline-block";
    }
}
userCategory[2].addEventListener('click',logout);

function logout(){
    let checkLogout = confirm("Bạn có muốn đăng xuất không?");
    if(checkLogout){
        localStorage.removeItem('check');
        document.location.reload();
    }
}
//display user name when login
function displayUser(){
    let userTag = document.getElementById('user-profile');
    let check  = JSON.parse(localStorage.getItem('check'));
    if(check !== null){
        let userLogin = check.currentUsername;
        let loginCheck = check.isLogin;
        if(loginCheck == true){
            let text =  "<i class='fas fa-user-alt'></i>" + userLogin;
            userTag.innerHTML = text;
        }
    }
}

window.onload = function(){
    checkLoginStatus();
    displayUser(); 
    urlHandle();
    getProduct();
    sortByFixPrice();
    createShoppingCart();
}
