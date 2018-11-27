
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


/**OUR PRODUCT**/
function products(id, name, firstPrice, fixPrice, imgLink, element, alternateText, detail, moreDetails){
    this.id = id;
    this.name = name;
    this.firstPrice = firstPrice;
    this.fixPrice = fixPrice;
    this.imgLink = imgLink;
    this.element = element;
    this.alternateText = alternateText;
    this.detail = detail;
    this.moreDetails = moreDetails;
}

let productArr = [];
productArr[0] = new products(
    'hat00', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat00/hat00_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[1] = new products(
    'hat01', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat01/hat01_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[2] = new products(
    'hat02', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat02/hat02_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[3] = new products(
    'hat03', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat03/hat03_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[4] = new products(
    'hat04', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat04/hat04_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[5] = new products(
    'hat05', 'Pikachu Poké Plush Hat', '400000', '200000', '../img/hat/hat05/hat05_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[6] = new products(
    'hat06', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat06/hat06_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[7] = new products(
    'hat07', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat07/hat07_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[8] = new products(
    'hat08', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat08/hat08_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[9] = new products(
    'hat09', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat09/hat09_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[10] = new products(
    'hat10', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat10/hat10_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[11] = new products(
    'hat11', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat11/hat11_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[12] = new products(
    'hat12', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat12/hat12_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[13] = new products(
    'hat13', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat13/hat13_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[14] = new products(
    'hat14', 'Pikachu Poké Plush Hat', '400000', '250000', '../img/hat/hat14/hat14_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[15] = new products(
    'hat15', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat15/hat15_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[16] = new products(
    'hat16', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat16/hat16_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[17] = new products(
    'hat17', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat17/hat17_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[18] = new products(
    'hat18', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat18/hat18_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[19] = new products(
    'hat19', 'Pikachu Poké Plush Hat', '400000', '350000', '../img/hat/hat19/hat19_1.jpg', 'co', 'Pikachu Poké Plush Hat picture', 'Con xai duoc', 'chua hu' 
    )
productArr[20] = new products(
    'shi00', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi00/shi00_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[21] = new products(
    'shi01', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi01/shi01_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[22] = new products(
    'shi02', 'Super Printed Shirt', '400000', '200000', '../img/shi/shi02/shi02_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[23] = new products(
    'shi03', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi03/shi03_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[24] = new products(
    'shi04', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi04/shi04_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[25] = new products(
    'shi05', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi05/shi05_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[26] = new products(
    'shi06', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi06/shi06_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[27] = new products(
    'shi07', 'Super Printed Shirt', '400000', '380000', '../img/shi/shi07/shi07_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[28] = new products(
    'shi08', 'Super Printed Shirt', '400000', '390000', '../img/shi/shi08/shi08_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[29] = new products(
    'shi09', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi09/shi09_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[30] = new products(
    'shi10', 'Super Printed Shirt', '400000', '220000', '../img/shi/shi10/shi10_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[31] = new products(
    'shi11', 'Super Printed Shirt', '400000', '200000', '../img/shi/shi11/shi11_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[32] = new products(
    'shi12', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi12/shi12_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[33] = new products(
    'shi13', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi13/shi13_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[34] = new products(
    'shi14', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi14/shi14_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[35] = new products(
    'shi15', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi15/shi15_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[36] = new products(
    'shi16', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi16/shi16_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[37] = new products(
    'shi17', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi17/shi17_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[38] = new products(
    'shi18', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi18/shi18_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[39] = new products(
    'shi19', 'Super Printed Shirt', '400000', '300000', '../img/shi/shi19/shi19_1.jpg', 'co', 'Super Printed Shirt picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[40] = new products(
    'plu00', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu00/plu00_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[41] = new products(
    'plu01', 'Super Cute Suffed Animal', '400000', '180000', '../img/plu/plu01/plu01_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[42] = new products(
    'plu02', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu02/plu02_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[43] = new products(
    'plu03', 'Super Cute Suffed Animal', '400000', '280000', '../img/plu/plu03/plu03_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[44] = new products(
    'plu04', 'Super Cute Suffed Animal', '400000', '300000', '../img/plu/plu04/plu04_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[45] = new products(
    'plu05', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu05/plu05_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[46] = new products(
    'plu06', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu06/plu06_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[47] = new products(
    'plu07', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu07/plu07_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[48] = new products(
    'plu08', 'Super Cute Suffed Animal', '400000', '230000', '../img/plu/plu08/plu08_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[49] = new products(
    'plu09', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu09/plu09_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[50] = new products(
    'plu10', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu10/plu10_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[51] = new products(
    'plu11', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu11/plu11_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[52] = new products(
    'plu12', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu12/plu12_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[53] = new products(
    'plu13', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu13/plu13_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[54] = new products(
    'plu14', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu14/plu14_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[55] = new products(
    'plu15', 'Super Cute Suffed Animal', '400000', '270000', '../img/plu/plu15/plu15_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[56] = new products(
    'plu16', 'Super Cute Suffed Animal', '400000', '320000', '../img/plu/plu16/plu16_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[57] = new products(
    'plu17', 'Super Cute Suffed Animal', '400000', '150000', '../img/plu/plu17/plu17_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[58] = new products(
    'plu18', 'Super Cute Suffed Animal', '400000', '380000', '../img/plu/plu18/plu18_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[59] = new products(
    'plu19', 'Super Cute Suffed Animal', '400000', '140000', '../img/plu/plu19/plu19_1.jpg', 'co', 'Super Cute Suffed Animal picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[60] = new products(
    'fig00', 'Amazing Figure', '460000', '290000', '../img/fig/fig00/fig00_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[61] = new products(
    'fig01', 'Amazing Figure', '460000', '330000', '../img/fig/fig01/fig01_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[62] = new products(
    'fig02', 'Amazing Figure', '460000', '330000', '../img/fig/fig02/fig02_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[63] = new products(
    'fig03', 'Amazing Figure', '460000', '330000', '../img/fig/fig03/fig03_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[64] = new products(
    'fig19', 'Amazing Figure', '460000', '330000', '../img/fig/fig19/fig19_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[65] = new products(
    'fig04', 'Amazing Figure', '460000', '330000', '../img/fig/fig04/fig04_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[66] = new products(
    'fig05', 'Amazing Figure', '460000', '330000', '../img/fig/fig05/fig05_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[67] = new products(
    'fig06', 'Amazing Figure', '460000', '330000', '../img/fig/fig06/fig06_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[68] = new products(
    'fig07', 'Amazing Figure', '460000', '150000', '../img/fig/fig07/fig07_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[69] = new products(
    'fig08', 'Amazing Figure', '460000', '330000', '../img/fig/fig08/fig08_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[70] = new products(
    'fig09', 'Amazing Figure', '460000', '330000', '../img/fig/fig09/fig09_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[71] = new products(
    'fig10', 'Amazing Figure', '460000', '330000', '../img/fig/fig10/fig10_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[72] = new products(
    'fig11', 'Amazing Figure', '460000', '330000', '../img/fig/fig11/fig11_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[73] = new products(
    'fig12', 'Amazing Figure', '460000', '160000', '../img/fig/fig12/fig12_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[74] = new products(
    'fig13', 'Amazing Figure', '460000', '330000', '../img/fig/fig13/fig13_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[75] = new products(
    'fig14', 'Amazing Figure', '460000', '330000', '../img/fig/fig14/fig14_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[76] = new products(
    'fig15', 'Amazing Figure', '460000', '330000', '../img/fig/fig15/fig15_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[77] = new products(
    'fig16', 'Amazing Figure', '460000', '350000', '../img/fig/fig16/fig16_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[78] = new products(
    'fig17', 'Amazing Figure', '460000', '310000', '../img/fig/fig17/fig17_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )
productArr[79] = new products(
    'fig18', 'Amazing Figure', '460000', '330000', '../img/fig/fig18/fig18_1.jpg', 'co', 'Amazing Figure picture', 'Con xai duoc', 'van chua hu' 
    )



//Find figure products in products list
//find hat prodcuts in products list
let hatList = [];
let hatIndex = 0;
for(let i = 0; i < productArr.length; i++){
    let hatFilter = productArr[i].id.substr(0,3);
    if(hatFilter == "hat"){
        hatList[hatIndex] = productArr[i];
        hatIndex++;
    }
}
//find shirt prodcuts in products list
let shirtList = [];
let shirtIndex = 0;
for(let i = 0; i < productArr.length; i++){
    let shirtFilter = productArr[i].id.substr(0,3);
    if(shirtFilter == "shi"){
        shirtList[shirtIndex] = productArr[i];
        shirtIndex++;
    }
}
//find plush prodcuts in products list
let plushList = [];
let plushIndex = 0;
for(let i = 0; i < productArr.length; i++){
    let plushFilter = productArr[i].id.substr(0,3);
    if(plushFilter == "plu"){
        plushList[plushIndex] = productArr[i];
        plushIndex++;
    }
}
//find figure prodcuts in products list
let figureList = [];
let figureIndex = 0;
for(let i = 0; i < productArr.length; i++){
    let figureFilter = productArr[i].id.substr(0,3);
    if(figureFilter == "fig"){
        figureList[figureIndex] = productArr[i];
        figureIndex++;
    }
}
//find best sale products
//sort by fix price ascending
function sortByFixPrice(){
    let tempArr = productArr;
    for(let i = 0; i < tempArr.length-1; i++){
        for(let j = i+1; j < tempArr.length; j++){
            if(tempArr[i].fixPrice > tempArr[j].fixPrice){
               let temp = tempArr[i];
               tempArr[i] = tempArr[j];
               tempArr[j] = temp;
           }
       }
   }
   return tempArr;
}
let bestSaleArr = [];
function findBestSale(){
    let tempBestSale = sortByFixPrice();
    for(let i = 0; i < 10; i++){
        bestSaleArr[i] = tempBestSale[i];
    }
}
findBestSale();
//Find best seller products
let bestSellerArr = [];
bestSellerArr[0] = productArr[0];
bestSellerArr[1] = productArr[7];
bestSellerArr[2] = productArr[23];
bestSellerArr[3] = productArr[35];
bestSellerArr[4] = productArr[42];
bestSellerArr[5] = productArr[20];
bestSellerArr[6] = productArr[72];
bestSellerArr[7] = productArr[79];
bestSellerArr[8] = productArr[33];
bestSellerArr[9] = productArr[15];
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
            let checkUserLogin = JSON.parse(localStorage.getItem('check'));
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
                //get product infomation
                //find product out
                for(let i = 0; i < productArr.length; i++){
                    if(productArr[i].id == productId){
                        produId = productArr[i].id;
                        productImgLink = productArr[i].imgLink;
                        productName = productArr[i].name;
                        productFirstPrice = productArr[i].firstPrice;
                        productLastPrice = productArr[i].fixPrice;
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
                    lastPrice: productLastPrice
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
        s3 = "<button value='" + productArr[i].id + "'><i class='fa fa-shopping-cart'></i>&nbsp;Thêm vào giỏ</button>"
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
    }
}
showSlides(slideIndex);
slideZone.style.display = "none";
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
    'Quantity: <input type="number" name="quantity" min="1" max="99" value="1">' +
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
    let loginCheck  = JSON.parse(localStorage.getItem('check'));
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

window.onload = function(){
    checkLoginStatus();
    urlHandle();
    getProduct();
    sortByFixPrice();
    createShoppingCart();
}
