//get string after "?" to check shopping cart url
let urlPara = url.split("?");
function createShoppingCart(){
    if(urlPara[1] === "cart"){
        let check = JSON.parse(localStorage.getItem('check'));
        if(check === null){
            mainZone.innerHTML = "<section id='shopping-cart-zone'>" +
            "<h1> Giỏ hàng </h1>" +
            "<hr style='border:2px solid black;margin:0 0.5em 0.2em'>" +
            "<h1 class='login-alert'>Bạn chưa đăng nhập tài khoản!!!</h1>"
            "</section>";
            return false;
        }
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
                        let detailPageUrl = "index.html?" + productCartArr[i].prodId.substr(0,3) + "#" + productCartArr[i].prodId;
                        totalPrice += parseInt(productCartArr[i].lastPrice) * parseInt(productCartArr[i].quantity);
                        //create list of product in shopping cart
                        cartList += "<div class='product-cart-box'>" +
                        //product image
                        "<div class='product-cart-img'>" +
                        "<img src ='" + productCartArr[i].imgLink + "'>" +
                        "</div>" +
                        //detail of product
                        //name of product
                        "<div class='product-cart-detail'>" +
                        "<a class='product-cart-name' href='" + detailPageUrl + "' target='_blank'>" +
                        "<h1>" + productCartArr[i].name + "</h1>" +
                        "</a>" +
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
        //for pay product in shopping cart
        let payBtn = document.getElementsByClassName('order-btn');
        payBtn[0].addEventListener('click', function(){
                payCart(check.currentUsername);
        });
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

//for pay shopping cart

function payCart(username){
    let payConfirm = window.confirm("Bạn có muốn đặt hàng các sản phẩm trong giỏ không?");
    if(payConfirm){
        //Get date time when user pays the cart
        let thisDate = new Date();
        let thisYear = thisDate.getFullYear().toString();
        let thisMonth = (thisDate.getMonth() + 1).toString();
        let thisDay = thisDate.getDate().toString();
        let thisHours = thisDate.getHours().toString();
        let thisMinutes = thisDate.getMinutes().toString();
        let thisSeconds = thisDate.getSeconds().toString();
        //handle length of those day time if its length = 1, for ex thisSeconds = 7 => 07
        if(thisMonth.length < 2){
                thisMonth = "0" + thisMonth;
        }
        if(thisDay.length < 2){
                thisDay = "0" + thisDay;
        }
        if(thisHours.length < 2){
                thisHours = "0" + thisHours;
        }
        if(thisMinutes.length < 2){
                thisMinutes = "0" + thisMinutes;
        }
        if(thisSeconds.length < 2){
                thisSeconds = "0" + thisSeconds;
        }


        /*Create orderArr*/
        //for orderArr instance var
        let payDate = "";
        payDate += thisDay + thisMonth + thisYear;
        let payTime = "";
        payTime +=  thisHours + thisMinutes + thisSeconds;
        let orderId = thisDay + thisSeconds + thisMonth + thisMinutes + thisYear.substr(2,2) + thisHours;
        let orderProductList = [];
        
        
        //get productCartArr
        let productCartArr = JSON.parse(localStorage.getItem('productCartArr'));

        for(let i = 0; i < productCartArr.length; i++){
            if(productCartArr[i].user === username){
                //for instance var of element of orderProductList 
                let productName = productCartArr[i].name;
                let productPrice = productCartArr[i].lastPrice;
                let productQuantity = productCartArr[i].quantity;
                let productImage = productCartArr[i].imgLink;
                let productId = productCartArr[i].prodId;
                //orderProduct object
                var orderProduct = {
                    prodId: productId,
                    name: productName,
                    price: productPrice,
                    quantity: productQuantity,
                    img: productImage
                };

                orderProductList.push(orderProduct);
            }
        }

        var order = {
            id: orderId,
            user: username,
            orderDate: payDate,
            orderTime: payTime,
            productList: orderProductList
        };

        //check the exists of orderArr
        if(localStorage.getItem('orderArr') === null){
            let orderArr = [];
            //add new order to order array
            orderArr.push(order);
            //re-set to local storage
            localStorage.setItem('orderArr', JSON.stringify(orderArr));
        }else{
            let orderArr = JSON.parse(localStorage.getItem('orderArr'));
            //add new order to order array
            orderArr.push(order);
            //re-set to local storage
            localStorage.setItem('orderArr',JSON.stringify(orderArr));
        }

        //delete shopping cart arr
        productCartArr.splice(0,productCartArr.length);
        //set productCartArr back to local storage
        localStorage.setItem('productCartArr', JSON.stringify(productCartArr));
        window.location.reload();
        alert("Đặt hàng thành công!!!");
    }
}
