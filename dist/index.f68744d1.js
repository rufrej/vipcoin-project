const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        720: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    },
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});

//# sourceMappingURL=index.f68744d1.js.map
