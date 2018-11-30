let oderListTag = document.getElementById('order-list');
let orderListPageUrl = url.split("?");
function createOrderListPage(){
        if(orderListPageUrl[1] === "orderlist"){
                let check = JSON.parse(localStorage.getItem('check'));
                mainZone.style.background = "#f0f0f0";
                mainZone.style.padding = "1em 0 2em";
        //create default layout of order list page
        slideZone.style.display = "none";
        mainZone.innerHTML = orderListPageLayout();
        let orderArr = JSON.parse(localStorage.getItem('orderArr'));
        //if orderArr empty
        if(orderArr === null){
                let orderDisplay = document.getElementById('order-list-display-zone');
                orderDisplay.innerHTML = "<div style='margin-left:0.8em'><p><i>Bạn chưa mua hàng ở website chúng tôi, hãy trải nghiệm ngay để nhận nhiều ưu đãi!!!</i></p></div>";
        }else{
                let orderDisplay = document.getElementById('order-list-display-zone');
            //to store all order of user
            let orderList = "";
            //calculate total price of each order
            let totalPrice = 0;
            if(orderArr.length === 0){
                orderDisplay.innerHTML = "<div class='empty-oder-announce'><p><i>Bạn chưa mua hàng ở website chúng tôi, hãy trải nghiệm ngay để nhận nhiều ưu đãi!!!</i></p></div>";
            }else{
                //loop for order list
                let isOrderEmpty = true;
                for(let i = orderArr.length - 1; i >= 0; i--){
                        if(check.currentUsername === orderArr[i].user){
                                isOrderEmpty = false;
                                orderList += "<div class='order-box'>" +
                                "<div class='order-detail'>" +
                                "<div class='order-name'>" +
                                "Mã đơn hàng: " + "<span class='highlight2'>" + orderArr[i].id + "</span>" +
                                "</div>" +
                                "<div class='order-date'>" +
                                "Ngày: " + "<span class='highlight2' style='padding-right:8px'>" + orderArr[i]["orderDate"].substr(0,2) + "/" + orderArr[i]["orderDate"].substr(2,2) + "/" + orderArr[i]["orderDate"].substr(4,4)  + "</span>" +
                                "Vào lúc: " + "<span class='highlight2'>" + orderArr[i]["orderTime"].substr(0,2) + ":" + orderArr[i]["orderTime"].substr(2,2) + ":" + orderArr[i]["orderTime"].substr(4,2) + "</span>" +                                
                                "</div>" +
                                "</div>";
                                let totalPrice = 0;
                                for(let j = 0; j < orderArr[i]["productList"].length; j++){
                                        totalPrice += parseInt(orderArr[i]["productList"][j].price) * parseInt(orderArr[i]["productList"][j].quantity);
                                }
                                orderList += "<div class='order-price'>" +
                                "Tổng tiền: " + "<span class='highlight'>" + totalPrice + "₫" + "</span>" +
                                "</div>";
                                for(let j = 0; j < orderArr[i]["productList"].length; j++){
                                        let detailPageUrl = "index.html?" + orderArr[i]["productList"][j].prodId.substr(0,3) + "#" + orderArr[i]["productList"][j].prodId;
                                        orderList += "<div class='order-product'>" +
                                        "<div class='order-product-img'>" +
                                        "<img src='" + orderArr[i]["productList"][j].img + "'>" +
                                        "</div>" +
                                        "<div class='order-product-name'>" +
                                        "<a href='" + detailPageUrl + "' target='_blank'>" +
                                        "<h3>" + orderArr[i]["productList"][j].name + "</h3>" +
                                        "</a>" +
                                        "</div>" +
                                        "<div class='order-product-quantity'>" +
                                        "Số lượng: " + orderArr[i]["productList"][j].quantity +
                                        "</div>" +
                                        "<div class='order-product-price'>" + "Đơn giá: " + 
                                        "<span class='highlight'>" + orderArr[i]["productList"][j].price + "₫" + "</span>" +
                                        "</div>" +
                                        "</div>";
                                }
                        }
                        orderList += "</div>";
                }
                if(isOrderEmpty === true){
                        orderDisplay.innerHTML = "<div style='margin-left:0.8em'><p><i>Bạn chưa mua hàng ở website chúng tôi, hãy trải nghiệm ngay để nhận nhiều ưu đãi!!!</i></p></div>";
                }else{
                        orderDisplay.innerHTML = orderList;
                }
            }
        }
    }
}

function orderListPageLayout(){
        let text = "<section id='order-list-zone'>" +
        "<h1 class='order-list-title'><span>Đơn hàng của tôi</span></h1>"+
        "<div id='order-list-display-zone'>" +
        "</div>" +
        "</section>";
        return text;
}
