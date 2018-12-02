//get account list form local storage
reloadCustomerList();
console.log(accountList);
function removeCustomer(num) {
  var temp = document.getElementsByClassName('tbl-content')[0];
  temp = temp.getElementsByTagName('tr');
  if (confirm('Bạn có muốn xóa tài khoản này ra khỏi danh sách tài khoản của website?') == true) {
    deleteArr(num, accountList);
    reloadCustomerList();
    showItem();
  }
}

function reloadCustomerList() {
  var arrLength = accountList.length;
  var customerShow = '<table>';
  for (var i=0; i < arrLength; i++) {
    if(accountList[i].username !== "ad"){
      customerShow += '<tr>' +
      '<td>' + accountList[i].ho + " " + accountList[i].ten + '</td>' +
      '<td>' + accountList[i].email + '</td>' +
      '<td>' + accountList[i].username + '</td>' +
      '<td>' + accountList[i].password + '</td>' +
      '<td>' +
        '<button onclick="editCustomer(' + i + ')">Sửa</button>' +  
        '<button onclick="removeCustomer(' + i + ')">Xóa</button>' +
      '</td>' +
    '</tr>';
    }
  }
  customerShow += '</table>';
  document.getElementsByClassName('tbl-account')[0].innerHTML = customerShow;
}

function editCustomer(){
  alert("hello man");
}