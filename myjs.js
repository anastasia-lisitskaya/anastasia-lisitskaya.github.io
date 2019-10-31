    $("#myslidergg").slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
