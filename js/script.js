let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    serchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let serchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    serchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    serchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    serchForm.classList.remove('active');
    cartItem.classList.remove('active');
}