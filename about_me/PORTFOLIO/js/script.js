

$(function(){
    //2d
    var mySwiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        slidesPerView: "auto",
        // centeredSlides: true,
        freeMode: true,
        scrollbar: {
			draggable: true,
		},
        speed: 5000,
        autoplay: {
            delay: 100,
            disableOnInteraction: false,
          },
    })


    //3d
    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 0,
        slidesPerView: "auto",
        // centeredSlides: true,
        freeMode: true,
        scrollbar: {
			draggable: true,
		},
        direction: "vertical",
        speed: 5000,
        autoplay: {
            delay: 100,
            disableOnInteraction: false,
          },
    })

})

