    $("#myslidergg").slick({
        dots: true,
        dotsClass: 'slick-dots slider__dots',
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
        infinite: true,
        arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
