let urlPara = url.split("?");
if(urlPara[1] === "cart"){
	slideZone.style.display = "none";
	mainZone.innerHTML = shoppingCartLayout();
	let productCartArr = JSON.parse(localStorage.getItem('productCartArr'));
	let cartListZone = document.querySelector('.cart-list-zone');
	let payBox = document.querySelector('.pay-box');
        let totalPrice = 0;
        let cartList = "";
	for(let i = 0; i < productCartArr.length; i++){
		totalPrice += parseInt(productCartArr[i].lastPrice);


		cartList += "<div class='product-cart-box'>" +
                "<div class='product-cart-img'>" +
		"<img src ='" + productCartArr[i].imgLink + "'>" +
		"</div>" +
		"<div class='product-cart-detail'>" +
		"<h1>" + productCartArr[i].name + "</h1>" +
		"<div>" +
                "<button class='cart-del-btn'>Xóa</button>" +
                "</div>" +
		"</div>" +
		"<div class='cart-price'>" +
		"<div class='cart-last-price'>" +
		productCartArr[i].lastPrice + "₫" +
		"</div>" +
                "<div class='cart-first-price'>" +
                productCartArr[i].price + "₫" +
                "</div>" +
		"</div>" +
		"<div class='cart-quantity'>"+
                	"Quantity : <input type='number' min='0' max='100' step='1' value='1'>" +
		"</div>" +
                "</div>";
	}
       	let payBoxChild = "<div class='total-price'>" + 
       		"<div class='left-price'>" +
                	"Thành tiền: "+
       		"</div>" +
       		"<div class='right-price'>" +
                	totalPrice + "₫" +
       		"</div>" +
       	"</div>" +
        "<div class='pay-box-btn'>" +
        	"<button class='order-btn'>Tiến hành đặt hàng</button>" +
        "</div>";

        cartListZone.innerHTML = cartList;
        payBox.innerHTML = payBoxChild;
}
function shoppingCartLayout(){
	let text ="<section id='shopping-cart-zone'>" +
        "<h1> Giỏ hàng </h1>" +
        "<hr style='border:2px solid black;margin:0 0.5em 0.2em'>" +
	"<div id='user-product-zone'>" +
        "<div class='cart-list-zone'>" +

        "</div>" +
        "<div class='pay-box'>" +

        "</div>" +
        "</div>" +
        "</section>";
	return text;
}