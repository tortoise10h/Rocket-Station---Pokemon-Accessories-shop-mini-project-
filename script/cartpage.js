//get string after "?" to check shopping cart url
let urlPara = url.split("?");
function createShoppingCart(){
    if(urlPara[1] === "cart"){
        let check = JSON.parse(localStorage.getItem('check'));
        //have to login to see shopping cart (obviously:)) )
        if(check.isLogin === true){
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
            //this variable hold all product in shopping cart
            let cartList = "";
            //length of array == 0 mean there is no product
            if(productCartArr.length == 0){
                cartList = "<p style='margin-left:8px'><i>Bạn chưa có món hàng nào trong giỏ hàng, mua hàng ngay và nhận nhiều ưu đãi từ chúng tôi</i></p>";
            }else{
                for(let i = 0; i < productCartArr.length; i++){
                //if user login match with their product in product cart array
            	if(check.currentUsername === productCartArr[i].user){
        		totalPrice += parseInt(productCartArr[i].lastPrice) * parseInt(productCartArr[i].quantity);
                        //create list of product in shopping cart
                        cartList += "<div class='product-cart-box'>" +
                        //product image
                        "<div class='product-cart-img'>" +
                        "<img src ='" + productCartArr[i].imgLink + "'>" +
                        "</div>" +
                        //detail of product
                        "<div class='product-cart-detail'>" +
                        "<h1>" + productCartArr[i].name + "</h1>" +
                        //delete button
                        "<div>" +
                        "<button class='cart-del-btn' value='" + productCartArr[i].prodId + "'>Xóa</button>" +
                        "</div>" +
                        "</div>" +
                        //price of product
                        "<div class='cart-price'>" +
                        "<div class='cart-last-price'>" +
                        productCartArr[i].lastPrice + "₫" +
                        "</div>" +
                        "<div class='cart-first-price'>" +
                        productCartArr[i].price + "₫" +
                        "</div>" +
                        "</div>" +
                        "<div class='cart-quantity'>"+
                        "Số lượng: " + 
                        //for quantity button zone 
                        "<span class='quantity-btn-group'>" +
                        "<span class='change-quantity'>" +
                        '<button class="sub-quantity change-quantity-btn" onclick="' + "decreaseQuantity(" + "'" + productCartArr[i].prodId + "'" + ")" + '">-</button>' +
                        "</span>" +
                        "<span class='quantity-box-display'>" +
                        "<input type='tel' name='quantity-box' style='width:30px;text-align:center' value='" + productCartArr[i].quantity + "'>" +
                        "</span" +
                        "<span class='change-quantity'>" +
                        '<button class="add-quantity change-quantity-btn" onclick="' + "increaseQuantity(" + "'" + productCartArr[i].prodId + "'" + ")" + '">+</button>' +
                        "</span" +
                        "</span>" + 
                        "</div>" +
                        "</div>";
	        	}
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
//delete function for each product in shopping cart
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

//increase product quantity in shopping cart
function increaseQuantity(productId){
    let productCartArr = JSON.parse(localStorage.getItem('productCartArr'));
    for(let i = 0; i < productCartArr.length; i++){
        if(productCartArr[i].prodId === productId){
            productCartArr[i].quantity += 1;
            break;
        }
    }
    localStorage.setItem('productCartArr',JSON.stringify(productCartArr));
    window.location.reload();
}
//decrease product quantity in shopping cart
function decreaseQuantity(productId){
    let productCartArr = JSON.parse(localStorage.getItem('productCartArr'));
    for(let i = 0; i < productCartArr.length; i++){
        if(productCartArr[i].prodId === productId){
        	//can't decrease quantity of product if it just has 1
            if(productCartArr[i].quantity > 1){
            	productCartArr[i].quantity -= 1;
                break;
            }
        }
    }
    localStorage.setItem('productCartArr',JSON.stringify(productCartArr));
    window.location.reload();
}
