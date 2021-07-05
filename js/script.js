let searchButton = document.querySelector('#search-button');
let searchBar = document.querySelector('.search-bar-container');
let formButton = document.querySelector('#login-button');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoButton = document.querySelectorAll('.video-button');

window.onscroll = () =>{
    searchButton.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchButton.addEventListener('click',() =>{
    searchButton.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formButton.addEventListener('click',() =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});

videoButton.forEach(button =>{
    button.addEventListener('click',() =>{
        document.querySelector('.controls .active').classList.remove('active');
        button.classList.add('active');
        let src = button.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 5,
        },
    },

});