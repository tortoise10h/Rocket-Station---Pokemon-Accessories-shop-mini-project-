//get string after "?" to check shopping cart url
let urlPara = url.split("?");
function createShoppingCart(){
	if(urlPara[1] === "cart"){
		let loginCheck = JSON.parse(localStorage.getItem('check'));
        //have to login to see shopping cart (obviously:)) )
        if(loginCheck === true){
        	slideZone.style.display = "none";
        	mainZone.innerHTML = shoppingCartLayout();
                //take all product which was added to local storage
                let productCartArr = JSON.parse(localStorage.getItem('productCartArr'));
                if(productCartArr === null){
                	let cartListZone = document.querySelector('.cart-list-zone');
                	cartListZone.innerHTML = "<p style='margin-left:8px'><i>Bạn chưa có món hàng nào trong giỏ hàng, mua hàng ngay và nhận nhiều ưu đãi từ chúng tôi</i></p>";
                }else{
                	//get 2 zone to inner HTML
                //list of product in shopping cart
                let cartListZone = document.querySelector('.cart-list-zone');
                //pay and order
                let payBox = document.querySelector('.pay-box');
                //total price of all product
                let totalPrice = 0;
                let cartList = "";
                if(productCartArr.length == 0){
                	cartList = "<p style='margin-left:8px'><i>Bạn chưa có món hàng nào trong giỏ hàng, mua hàng ngay và nhận nhiều ưu đãi từ chúng tôi</i></p>";
                }else{
                	for(let i = 0; i < productCartArr.length; i++){
                		totalPrice += parseInt(productCartArr[i].lastPrice) * parseInt(productCartArr[i].quantity);
                        //create list of product in shopping cart
                        cartList += "<div class='product-cart-box'>" +
                        "<div class='product-cart-img'>" +
                        "<img src ='" + productCartArr[i].imgLink + "'>" +
                        "</div>" +
                        "<div class='product-cart-detail'>" +
                        "<h1>" + productCartArr[i].name + "</h1>" +
                        "<div>" +
                        "<button class='cart-del-btn' value='" + productCartArr[i].prodId + "'>Xóa</button>" +
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
                        "Số lượng: " + productCartArr[i].quantity + 
                        "</div>" +
                        "</div>";
                    }
                }
                //create text to inner to pay box zone
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
                //just inner 
                cartListZone.innerHTML = cartList;
                payBox.innerHTML = payBoxChild;
            }
        }
        deleteCartProduct();
    }
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
//create delete button in shopping cart
function deleteCartProduct(){
	delBtn = document.getElementsByClassName('cart-del-btn');
	for(let i = 0; i < delBtn.length; i++){
		delBtn[i].addEventListener('click', function(){
			delProduct(delBtn[i].value);
		});
	}

}
function delProduct(productId){
	let checkDel = confirm("Bạn có chắc muốn xóa sản phẩm này ra khỏi giỏ hàng?");
	if(checkDel){
		let productCartArr = JSON.parse(localStorage.getItem('productCartArr'));
		//get position of that product in array
		let pos;
		for(let i = 0; i < productCartArr.length; i++){
                	if(productCartArr[i].prodId === productId){
                		pos = i;
                		break;
                	}
		}
		//delete that product
		productCartArr.splice(pos,1);
		//re-set to local storage
		localStorage.setItem('productCartArr', JSON.stringify(productCartArr));
                window.location.reload();
            }
        }