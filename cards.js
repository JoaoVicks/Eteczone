document.addEventListener('DOMContentLoaded', function(){
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
    el: ".swiper-pagination",
    clickable: true,

    dynamicBullets:true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
           slidesPerView:1 ,
           slidesPerGroup: 1
        },
        520:{
            slidesPerView:1,
            slidesPerGroup: 1
         },
         950:{
            slidesPerView:3,
         },
    },
});
});