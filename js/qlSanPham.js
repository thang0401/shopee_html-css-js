var data = JSON.parse(localStorage.getItem("data"));

if (data == null || data == undefined) {
  data = [];
}
var tData = document.getElementById("showData");
var currIndex = -1;
loadData();

function loadData() {
  data.forEach((item) => {
    var row = document.createElement("tr");
    row.setAttribute("th", "rowData");
    row.setAttribute("onclick", "seleRow(this);");

    var colMa = document.createElement("td");
    colMa.innerText = item.masp;
    row.appendChild(colMa);

    var colTen = document.createElement("td");
    colTen.innerText = item.tensp;
    row.appendChild(colTen);

    var colOld = document.createElement("td");
    colOld.innerText = item.old;
    row.appendChild(colOld);

    var colNew = document.createElement("td");
    colNew.innerText = item.new;
    row.appendChild(colNew);

    var colHinh = document.createElement("td");
    colHinh.innerHTML = `<img src="${item.hinh}">
                                <input type="hidden" id="imgName" value = "${item.hinh}"/>`;
    row.appendChild(colHinh);
    tData.appendChild(row);
  });
}

function ThemDS() {
  var objsp = {};
  let error1 = document.querySelector(".error1");
  let error2 = document.querySelector(".error2");
  let error3 = document.querySelector(".error3");
  let error4 = document.querySelector(".error4");
  let error5 = document.querySelector(".error5");

  objsp.hinh = document.getElementById("txtHinh").value;
  objsp.masp = document.getElementById("txtMaSP").value;
  objsp.tensp = document.getElementById("txtTenSP").value;
  objsp.new = document.getElementById("txtPriceNew").value;
  objsp.old = document.getElementById("txtPriceOld").value;

  if (objsp.masp.length === 0) {
    error1.innerHTML = "không được để trống";
  } else {
    error1.innerHTML = "";
  }
  if (objsp.tensp.length === 0) {
    error2.innerHTML = "không được để trống";
  } else {
    error2.innerHTML = "";
  }
  if (objsp.old.length === 0) {
    error3.innerHTML = "không được để trống";
  } else {
    error3.innerHTML = "";
  }
  if (objsp.new.length === 0) {
    error4.innerHTML = "không được để trống";
  } else {
    error4.innerHTML = "";
  }
  if (objsp.hinh.length === 0) {
    error5.innerHTML = "không được để trống";
  } else {
    error5.innerHTML = "";
  }

  if (
    objsp.masp.length > 0 &&
    objsp.tensp.length > 0 &&
    objsp.new.length > 0 &&
    objsp.old.length > 0 &&
    objsp.hinh.length > 0
  ) {
    data.push(objsp);
    document.getElementById("formSP").reset();
    tData.innerHTML = "";
    loadData();
    localStorage.setItem("data", null);
    SaveData();
  }
}
function CapNhap() {
  var objsp = {};
  objsp.hinh = document.getElementById("txtHinh").value;
  objsp.masp = document.getElementById("txtMaSP").value;
  objsp.tensp = document.getElementById("txtTenSP").value;
  objsp.new = document.getElementById("txtPriceNew").value;
  objsp.old = document.getElementById("txtPriceOld").value;
  data[currIndex] = objsp;

  tData.innerHTML = "";
  loadData();
  localStorage.setItem("data", null);
  SaveData();
}
function XoaDS() {
  data.splice(currIndex, 1);

  tData.innerHTML = "";
  loadData();
  localStorage.setItem("data", null);
  SaveData();
}
function SaveData() {
  var newData = JSON.stringify(data);
  localStorage.setItem("data", newData);
}
function seleRow(objRow) {
  var ma = objRow.children[0].innerText;
  var ten = objRow.children[1].innerText;
  var old = objRow.children[2].innerText;
  var news = objRow.children[3].innerText;
  var hinh = objRow.children[4].children[1].value;

  currIndex = data.findIndex((item) => item.masp == ma);

  document.getElementById("txtMaSP").value = ma;
  document.getElementById("txtTenSP").value = ten;
  document.getElementById("txtPriceNew").value = news;
  document.getElementById("txtPriceOld").value = old;
  document.getElementById("txtHinh").value = hinh;
}
