var data = JSON.parse(localStorage.getItem("data"));

if (data == null || data == undefined) {
  data = [];
}
var myPro = document.querySelector(".showData");
var str = "";
data.forEach((el) => {
  str += `<div class="grid__column-2-4">
          <div class="home-product-item">
              <div class="home-product-item__img"
                  style="background-image: url(${el.hinh});">
              </div>
              <h4 class="home-product-item__name">${el.tensp}</h4>
              <div class="home-product-item__price">
                  <span class="home-product-item__price-old">${el.old}</span>
                  <span class="home-product-item__price-current">${el.new}</span>
              </div>
  
            <div class="icon-item">
                  <a href="nhanh.html"><i class="icon fas fa-add"></i></a>
                  <i class="icon fas fa-heart"></i>
                  <i class="icon fas fa-cart-shopping"></i>
                  <i class="icon fas fa-sliders"></i>
              </div>
          </div>
      </div>`;
});
myPro.innerHTML = str;


const items = document.querySelectorAll('.home-product-item');
const icons = document.querySelectorAll('.icon-item');

items.forEach(function(item, index) {
  item.addEventListener('mouseover', function() {
    icons[index].style.display = 'block';
  });
  item.addEventListener('mouseout', function() {
    icons[index].style.display = 'none';
  });
});
