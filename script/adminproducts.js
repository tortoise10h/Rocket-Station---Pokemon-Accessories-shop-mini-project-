reloadArr();

function removeItem(n) {
  var temp = document.getElementsByClassName('tbl-content')[0];
  temp = temp.getElementsByTagName('tr');
  if (confirm('Bạn có muốn xóa?') == true) {
    deleteArr(n,productArr);
    reloadArr();
  }
}
function deleteArr(position, arr) {
  var arrLength = arr.length;
  for (var i=position; i<arrLength; i++) {
    arr[i] = arr[i+1];
  }
  arr.pop();
}
function reloadArr() {
  var arrLength = productArr.length;
  var productToShowOnScreen = '<table>';
  for (var i=0; i<arrLength; i++) {
    productToShowOnScreen += '<tr>' +
      '<td>' + productArr[i].id + '</td>' +
      '<td>' + productArr[i].name + '</td>' +
      '<td>' + productArr[i].firstPrice + '</td>' +
      '<td>' + productArr[i].fixPrice + '</td>' +
      '<td>' +
        '<button onclick="loadProductInformToForm(' + i + ')">Sửa</button>' +
        '<button onclick="removeItem(' + i + ')">Xóa</button>' +
      '</td>' +
    '</tr>';
  }
  productToShowOnScreen += '</table>';
  document.getElementsByClassName('tbl-content')[0].innerHTML = productToShowOnScreen;
}

//use to search by id or name
function showItem() {
  var input, filter, table, tr, td, i, txtValue, trLength, filterType;
  input = document.getElementById("tbl-searchbar");
  filter = input.value.toUpperCase();
  table = document.getElementsByClassName('tbl-content')[0];
  tr = table.getElementsByTagName("tr");
  trLength = tr.length;
  filterType = document.getElementById("filterType").value; // search by id or name
  for (i=0; i<trLength; i++) {
    td = tr[i].getElementsByTagName("td")[filterType];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function loadProductInformToForm(n) {
  document.getElementsByClassName('product-editor-form')[0].style.display = "block";
  var productName = productArr[n].name;
  var productId = productArr[n].id;
  var productFirstPrice = productArr[n].firstPrice;
  var productFixPrice = productArr[n].fixPrice;
  document.forms["productEditor"]["productName"].value = productName;
  document.forms["productEditor"]["productId"].value = productId;
  document.forms["productEditor"]["productFirstPrice"].value = productFirstPrice;
  document.forms["productEditor"]["productFixPrice"].value = productFixPrice;

  var editBtn = document.getElementsByClassName("edit-btn")[0];
  editBtn.addEventListener('click', function changeProductInform() {
    if (confirm("Bạn có muốn thay đổi thông tin sản phẩm " + productArr[n].id + "?")) {
      if (document.forms["productEditor"]["productName"].value == "" || document.forms["productEditor"]["productId"].value == "" || document.forms["productEditor"]["productFirstPrice"].value == "" || document.forms["productEditor"]["productFixPrice"].value == "") {
          alert("Vui lòng điền đầy đủ thông tin");
          return;
      }
      productArr[n].name = document.forms["productEditor"]["productName"].value;
      productArr[n].id = document.forms["productEditor"]["productId"].value;
      productArr[n].firstPrice = document.forms["productEditor"]["productFirstPrice"].value;
      productArr[n].fixPrice = document.forms["productEditor"]["productFixPrice"].value;
      console.log(productArr[n].name);
      reloadArr();
      closeEditForm();
      this.removeEventListener('click', changeProductInform);
    }
  });
}

function closeEditForm() {
  document.getElementsByClassName('product-editor-form')[0].style.display = "none";
  document.getElementsByClassName('product-add-form')[0].style.display = "none";
}

function addProductToTempArr() {
  document.getElementsByClassName('product-add-form')[0].style.display = "block";
  var addBtn = document.getElementsByClassName("add-btn")[0];
  addBtn.addEventListener('click', function addAproduct() {
    if (confirm("Bạn có muốn thêm sản phẩm?")) {
      if (document.forms["productAdder"]["productName"].value == "" || document.forms["productAdder"]["productId"].value == "" || document.forms["productAdder"]["productFirstPrice"].value == "" || document.forms["productAdder"]["productFixPrice"].value == "") {
          alert("Vui lòng điền đầy đủ thông tin");
          return;
      }
      productArr[productArr.length] = new products (
        document.forms["productAdder"]["productId"].value, document.forms["productAdder"]["productName"].value, document.forms["productAdder"]["productFirstPrice"].value, document.forms["productAdder"]["productFixPrice"].value, "a", "a", "a", "a", "a");
      reloadArr();
      this.removeEventListener('click', addAproduct);
      document.forms["productAdder"].reset();
      closeEditForm();
    }
  });
}