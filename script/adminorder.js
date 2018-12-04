reloadOrderList();

function reloadOrderList() {
  var arrLength = orderArr.length;
  var orderShow = '<table>';
  for (var i=0; i < arrLength; i++) {
    if(orderArr[i].user !== "ad"){
      //calculate order price
      let orderPrice = 0;
      for(let j = 0; j < orderArr[i]["productList"].length; j++){
        orderPrice += parseInt(orderArr[i]["productList"][j].price);
      }
      orderShow += '<tr>' +
      '<td style="text-align:left">' + orderArr[i].id + '</td>' +
      '<td  style="text-align:center">' + orderArr[i].user + '</td>' +
      '<td style="padding:5px">';
      for(let j = 0; j < orderArr[i]["productList"].length; j++){
        orderShow += '<p>'+ "-&nbsp;" +
        orderArr[i]["productList"][j].name + "[" + "<span style='font-weight:bold'>" +
        orderArr[i]["productList"][j].quantity + "</span>" + "]:" +
        "&nbsp;" + "<span>" + orderArr[i]["productList"][j].price + "₫" +
        "</span>" +
        '</p>'
      } 
      orderShow += '</td>' +
      '</td>'+
      '<td style="text-align:right;color:#ff5959;font-weight:bold;padding:0 10px">' + orderPrice + "₫" +'</td>' +
      '<td  style="text-align:right">' + 
      '<p>' + orderArr[i].orderDate.substr(0,2) + "/" + orderArr[i].orderDate.substr(2,2) + "/" + orderArr[i].orderDate.substr(4,4) + '</p>' +
      '<p>' + orderArr[i].orderTime.substr(0,2) + ":" + orderArr[i].orderTime.substr(2,2) + ":" + orderArr[i].orderTime.substr(4,2) + '</p>' + 
      '</td>' +
      '<td  style="text-align:center">' + orderArr[i].status + '</td>' +
      '<td>' +
      '<button class="table-btn" onclick="confirmOrder(' + i + ')">Xác nhận đơn</button>' +  
      '<button class="table-btn" onclick="cancelOrder(' + i + ')">Hủy đơn</button>' +
      '</td>' +
      '</tr>';
    }
  }
  orderShow += '</table>';
  document.getElementsByClassName('tbl-order')[0].innerHTML = orderShow;
}

function confirmOrder(num){
  if(confirm("Bạn có muốn xác nhận đơn hàng này không?")){
    if(orderArr[num].status.toLowerCase().indexOf('đã giao hàng') > -1){
      alert("Đơn hàng này đã được xác nhận rồi!!!");
    }else{
      orderArr[num].status = "Đã giao hàng";
      localStorage.setItem('orderArr', JSON.stringify(orderArr));
      alert("Xác nhận đơn hàng thành công!!!");
    }
  }
  window.location.reload();
}
function cancelOrder(num){
  if(confirm("Bạn có muốn hủy đơn hàng này không?")){
    if(orderArr[num].status.toLowerCase().indexOf('đã giao hàng') > -1){
      alert("Đơn hàng này đã được giao, bạn không thể hủy đơn!!!");
    }else{
      orderArr[num].status = "Đã bị hủy";
      localStorage.setItem('orderArr', JSON.stringify(orderArr));
      alert("Hủy đơn hàng thành công!!!");
    }
  }
  window.location.reload();
}

//search in order
let orderSearchBox = document.getElementById('order-search');
orderSearchBox.addEventListener('keyup', orderSearch);
function orderSearch(){
  //get value from username input box
  let orderValue = orderSearchBox.value;
  //shortcut get each tr of table
  let tr = document.getElementsByClassName('tbl-order')[0].getElementsByTagName('tr');
  //get filter of search: search by full name or search by username
  let orderFilter = document.getElementById('order-filter').value;
  for(let i = 0; i < tr.length; i++){
    //value of account filter same to index of td in td array
    //line in if for get all td tag in each tr tag class="table-btn"
    if(tr[i].getElementsByTagName('td')[orderFilter].textContent.toLowerCase().indexOf(orderValue) > -1){
      tr[i].style.display = "";
    }else{
      tr[i].style.display = "none";
    }
  }
  
}

function displayBySelect(){
  let tr = document.getElementsByClassName('tbl-order')[0].getElementsByTagName('tr');
  //get filter of search: search by full name or search by username
  let orderFilter = document.getElementById('order-filter').value;
  //if admin select "đơn hàng đã xử lý"
  if(orderFilter == 5.4){
    for(let i = 0; i < tr.length; i++){
      //value of account filter same to index of td in td array
      //line in if for get all td tag in each tr tag class="table-btn"
      if(tr[i].getElementsByTagName('td')[5].textContent.toLowerCase().indexOf("đã giao hàng") > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }else if(orderFilter == 5.2){ //if admin select "đơn hàng chưa xử lý"
    for(let i = 0; i < tr.length; i++){
      //value of account filter same to index of td in td array
      //line in if for get all td tag in each tr tag class="table-btn"
      if(tr[i].getElementsByTagName('td')[5].textContent.toLowerCase().indexOf("đang xử lý") > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }else if(orderFilter == 5.6){ //if admin select "đơn hàng đã hủy"
    for(let i = 0; i < tr.length; i++){
      //value of account filter same to index of td in td array
      //line in if for get all td tag in each tr tag class="table-btn"
      if(tr[i].getElementsByTagName('td')[5].textContent.toLowerCase().indexOf("đã bị hủy") > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}

//from date to date
function dateFilter(){
  let fromDate = document.querySelector('.from-date inp');
  let toDate = document.querySelector('.to-date inp');
  console.log(fromDate);
  console.log(toDate);
}