let adminUrl = window.location.href;
var params = adminUrl.split('html/'); //split tại 'admin/'
var sidebar = document.getElementsByClassName("sidebar-menu"); //get element để get tag ul
var menuList = sidebar[0].getElementsByTagName('ul'); //get element để innerHTML

//hàm khởi tạo
function menuCreat(menuTitle, menuLink) {
  this.menuTitle = menuTitle;
  this.menuLink = menuLink;
}

//menu links array
var menu = [];
menu[0] = new menuCreat ("Home", "adminpage.html");
menu[1] = new menuCreat ("Sản phẩm", "adminpage.html?products");
menu[2] = new menuCreat ("Đơn hàng", "adminpage.html?order");
menu[3] = new menuCreat ("Khách hàng", "adminpage.html?customer");
menu[4] = new menuCreat ("Thống kê", "adminpage.html?statistic");

//menuOptions chứa text để innerHTML đến menuList
var menuOptions = "";
for (var i = 0; i < menu.length; i++) {
  var menuActice = "";
  if (params[1] == menu[i].menuLink) {
    menuActice = "active";
    layout(i);
  }
  else
    menuActice = "";
  menuOptions += '<li><a class="' + menuActice +'" href="' + menu[i].menuLink + '">' + menu[i].menuTitle + '</a></li>';
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
      orderLayout();
      break;
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
  '    <!-- table here -->' +
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
  '</div>';
}

function orderLayout() {
  document.getElementById('content').innerHTML = '<div class="date-selector">' +
  '  <div class="wrapper">' +
  '      <div class="from-date">' +
  '        Từ ngày:' +
  '        <input type="date">' +
  '      </div>' +
  '      <div class="to-date">' +
  '        Đến ngày:' +
  '        <input type="date">' +
  '      </div>' +
  '      <div class="select-btn">' +
  '        <button class="button bg-violet" onclick="">Chọn</button>' +
  '      </div>' +
  '  </div>' +
  '</div>';
}

function customerLayout() {
  document.getElementById('content').innerHTML = 'Nothing to show';
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