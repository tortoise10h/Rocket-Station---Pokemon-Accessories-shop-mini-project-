//get account list form local storage
reloadCustomerList();

//delete selected customer
function removeCustomer(num) {
  var temp = document.getElementsByClassName('tbl-account')[0];
  temp = temp.getElementsByTagName('tr');
  if (confirm('Bạn có muốn xóa tài khoản này ra khỏi danh sách tài khoản của website?') == true) {
    accountList.splice(num,1);
    localStorage.setItem('accounts',JSON.stringify(accountList));
    reloadCustomerList();
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
      '<td style="text-align:center">' +
        '<button class="table-btn" onclick="removeCustomer(' + i + ')">Xóa</button>' +
      '</td>' +
    '</tr>';
    }
  }
  customerShow += '</table>';
  document.getElementsByClassName('tbl-account')[0].innerHTML = customerShow;
}

//search username
//get user name input box
let userSearchBox = document.getElementById('user-search');
userSearchBox.addEventListener('keyup', userSearch);
function userSearch(){
  //get value from username input box
  let userValue = userSearchBox.value;
  //shortcut get each tr of table
  let tr = document.getElementsByClassName('tbl-account')[0].getElementsByTagName('tr');
  //get filter of search: search by full name or search by username
  let accountFilter = document.getElementById('account-filter').value;
  for(let i = 0; i < tr.length; i++){
    //value of account filter same to index of td in td array
    //line in if for get all td tag in each tr tag class="table-btn"
    if(tr[i].getElementsByTagName('td')[accountFilter].textContent.toLowerCase().indexOf(userValue) > -1){
      tr[i].style.display = "";
    }else{
      tr[i].style.display = "none";
    }
  }
  
}
