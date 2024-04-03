const btn = document.querySelector('.login');
const modelAll = document.querySelector('.modal__body')
const model = document.querySelector('.modal')
const model_over = document.querySelector('.modal__overlay')
const btnRegin = document.querySelector('.register');
const formRegin = document.querySelector('.form-regin');
const formLogin = document.querySelector('.form-login');
const product_img = document.querySelector('.home-product-item__img')


btn.addEventListener('click', ()=>{
    modelAll.style = 'display: block';
    formLogin.style = 'display: block';
    model.style= 'z-index: 1';
    model_over.style = 'background-color: rgba(0, 0, 0, 0.4);';
    register.style = 'display: block';

}
)




btnRegin.addEventListener('click', ()=>{
    modelAll.style = 'display: block';
    formRegin.style = 'display: block';
    model.style= 'z-index: 1';
    model_over.style = 'background-color: rgba(0, 0, 0, 0.4);';
    register.style = 'display: block';

}
)

model_over.addEventListener('click', ()=>{
    model_over.style = 'display: none';
    modelAll.style='display: none';
}
)
product_img.addEventListener('onmouseove', ()=>{
    const divBai1 = document.createElement('div');
    newElement.textContent 
});