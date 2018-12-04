let adminUrl = window.location.href;
var params = adminUrl.split('/'); //split tại 'admin/'
var sidebar = document.getElementsByClassName("sidebar-menu"); //get element để get tag ul
var menuList = sidebar[0].getElementsByTagName('ul'); //get element để innerHTML

//hàm khởi tạo
function menuCreat(menuTitle, menuLink, menuIcon) {
  this.menuTitle = menuTitle;
  this.menuLink = menuLink;
  this.menuIcon = menuIcon;
}

//menu links array
var menu = [];
menu[0] = new menuCreat ("Home", "adminpage.html", '<i class="fa fa-home"></i>');
menu[1] = new menuCreat ("Sản phẩm", "adminpage.html?products", '<i class="fa fa-paw"></i>');
menu[2] = new menuCreat ("Đơn hàng", "adminpage.html?order", '<i class="fa fa-file-text"></i>');
menu[3] = new menuCreat ("Khách hàng", "adminpage.html?customer", '<i class="fa fa-id-card"></i>');
menu[4] = new menuCreat ("Thống kê", "adminpage.html?statistic", '<i class="fa fa-bar-chart"></i>');

//menuOptions chứa text để innerHTML đến menuList
var menuOptions = "";
for (var i = 0; i < menu.length; i++) {
  var menuActice = "";
  if (params[params.length-1] == menu[i].menuLink) {
    menuActice = "active";
    layout(i);
  }
  else
    menuActice = "";
  menuOptions += '<li><a class="' + menuActice +'" href="' + menu[i].menuLink + '">' + menu[i].menuIcon + ' ' + menu[i].menuTitle + '</a></li>';
};

menuList[0].innerHTML = menuOptions;

function layout(n) {
  switch (n) {
    case 0:
      homeLayout();
      break;
    case 1:
      productsLayout();
      break;
    case 2:
      {
        orderLayout();
        break;
      }
    case 3:
      customerLayout();
      break;
    case 4:
      statisticLayout();
      break;
    default:
      break;
  }
}

function homeLayout() {
  document.getElementById('content').innerHTML = '<div class="container">' +
    '<div class="statistic-preview shadow">' +
      '<div class="preview-container">' +
        '<div class="right-border preview">' +
          '<div class="icon bg-violet"><i class="fa fa-file-text-o"></i></div>' +
          '<div class="title">' +
            '<span>Đơn hàng</span>' +
          '</div>' +
          '<div class="number">' +
            '<strong>5000</strong>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="preview-container">' +
        '<div class="right-border preview">' +
          '<div class="icon bg-red"><i class="fa fa-users"></i></div>' +
        '  <div class="title">' +
            '<span>Khách hàng</span>' +
          '</div>' +
          '<div class="number">' +
            '<strong>6000</strong>' +
        '  </div>' +
      '  </div>' +
    '  </div>' +
      '<div class="preview-container">' +
      '  <div class="right-border preview">' +
        '  <div class="icon bg-green"><i class="fa fa-line-chart"></i></div>' +
        '  <div class="title">' +
        '    <span>Lượt truy cập</span>' +
        '  </div>' +
        '  <div class="number">' +
        '    <strong>15000</strong>' +
        '  </div>' +
      '  </div>' +
    '  </div>' +
    '  <div class="preview-container">' +
      '  <div class="preview">' +
        '  <div class="icon bg-orange"><i class="fa fa-bitcoin"></i></div>' +
      '    <div class="title">' +
      '      <span>Doanh thu</span>' +
      '    </div>' +
      '    <div class="number">' +
      '      <strong>$10 bn</strong>' +
      '    </div>' +
    '    </div>' +
    '  </div>' +
  '  </div>' +
'  </div>';
}

function productsLayout() {
  document.getElementById('content').innerHTML = '<div class="table shadow">' +
  '  <div class="tbl-header">' +
  '    <table class="bg-green">' +
  '      <tr>' +
  '        <th>Mã</th>' +
  '        <th>Tên</th>' +
  '        <th>Giá</th>' +
  '        <th>Giá giảm</th>' +
  '        <th>Hành động</th>' +
  '      </tr>' +
  '    </table>' +
  '  </div>' +
  '  <div class="tbl-content">' +
        /* table here */
  '  </div>' +
  '  <div class="tbl-searchbar">' +
  '    <form>' +
  '      <select id="filterType" onchange="showItem()">' +
  '        <option value="0">Tìm theo mã</option>' +
  '        <option value="1">Tìm theo tên</option>' +
  '      </select>' +
  '      <input type="text" id="tbl-searchbar" onkeyup="showItem()" placeholder="Search...">' +
    '  </form>' +
  '  </div>' +
  '<button onclick="addProductToTempArr()">Thêm Sản Phẩm</button>' +
  '</div>';
}
function orderLayout() {
  document.getElementById('content').innerHTML = '<div id="ad-order-zone" class="date-selector">' +
  '  <div class="wrapper">' +
  '      <div class="from-date">' +
  '        Từ ngày:' +
  '        <input id="from-date-value" type="date">' +
  '      </div>' +
  '      <div class="to-date">' +
  '        Đến ngày:' +
  '        <input id="to-date-value" type="date">' +
  '      </div>' +
  '      <div class="select-btn">' +
  '        <button class="button bg-violet" onclick="dateFilter()">Chọn</button>' +
  '      </div>' + "</div>" +
  '  <div id="order-searchbar" class="tbl-searchbar">' +
  '    <form>' +
  '      <select id="order-filter" onchange="displayBySelect()">' +
  '        <option value="0">Tìm theo mã đơn</option>' +
  '        <option value="1">Tìm theo tên khách hàng</option>' +
  '        <option value="5.2">Đơn hàng chưa xử lý</option>' +
  '        <option value="5.4">Đơn hàng đã xử lý</option>' +
  '        <option value="5.6">Đơn hàng đã hủy</option>' +
  '      </select>' +
  '      <input type="text" id="order-search" onkeyup="showItem()" placeholder="Search...">' +
    '  </form>' +
  '  </div>' +
  '  </div>' +
  '</div>'+
  '<div class="table shadow">' +
  '  <div class="tbl-header">' +
  '    <table class="bg-violet">' +
  '      <tr>' +
  '        <th>Mã đơn hàng</th>' +
  '        <th>Tên khách hàng</th>' +
  '        <th>Sản phẩm</th>' +
  '        <th>Tổng tiền</th>' +
  '        <th>Ngày giờ</th>' +
  '        <th>Trạng thái</th>' +
  '        <th>Hành động</th>' +
  '      </tr>' +
  '    </table>' +
  '  </div>' +
  '  <div class="tbl-order">' +
  '    <!-- table here -->' +
  '  </div>' +
  '</div>';
  
}

function customerLayout() {
  document.getElementById('content').innerHTML = '<div  class="table shadow">' +
  '  <div class="tbl-header">' +
  '    <table class="bg-blue">' +
  '      <tr>' +
  '        <th>Họ Tên</th>' +
  '        <th>Email</th>' +
  '        <th>Tài khoản</th>' +
  '        <th>Mật khẩu</th>' +
  '        <th style="text-align:center">Hành động</th>' +
  '      </tr>' +
  '    </table>' +
  '  </div>' +
  '  <div class="tbl-account">' +
  '    <!-- table here -->' +
  '  </div>' +
  '  <div class="tbl-searchbar">' +
  '    <form>' +
  '      <select id="account-filter" onchange="accountSearch()">' +
  '        <option value="2">Tìm theo tên tài khoản</option>' +
  '        <option value="0">Tìm theo họ tên</option>' +
  '      </select>' +
  '      <input type="text" id="user-search" placeholder="Tìm theo tên tài khoản">' +
    '  </form>' +
  '  </div>' +
  '</div>';
}

function statisticLayout() {
  document.getElementById('content').innerHTML = '<dl class="shadow">' +
'    <dt>' +
'      Doanh thu của năm 2018 (tỉ VND)' +
'    </dt>' +
'    <dd class="percentage percentage-50"><span class="text">Tháng 1: 500</span></dd>' +
'    <dd class="percentage percentage-70"><span class="text">Tháng 2: 700</span></dd>' +
'    <dd class="percentage percentage-80"><span class="text">Tháng 3: 800</span></dd>' +
'    <dd class="percentage percentage-70"><span class="text">Tháng 4: 700</span></dd>' +
'    <dd class="percentage percentage-90"><span class="text">Tháng 5: 900</span></dd>' +
'    <dd class="percentage percentage-80"><span class="text">Tháng 6: 800</span></dd>' +
'    <dd class="percentage percentage-70"><span class="text">Tháng 7: 700</span></dd>' +
'    <dd class="percentage percentage-50"><span class="text">Tháng 8: 500</span></dd>' +
'    <dd class="percentage percentage-40"><span class="text">Tháng 9: 400</span></dd>' +
'    <dd class="percentage percentage-30"><span class="text">Tháng 10: 300</span></dd>' +
'    <dd class="percentage percentage-50"><span class="text">Tháng 11: 500</span></dd>' +
'    <dd class="percentage percentage-80"><span class="text">Tháng 12: 800</span></dd>' +
'  </dl>';
}
