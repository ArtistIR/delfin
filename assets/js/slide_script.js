$(document).ready(function(){
    $('.intro_slider').slick({
        asNavFor: ".intro_slider_info",
        speed: 1500,
        infinite: false,
    });
    $('.intro_slider_info').slick({
        asNavFor: ".intro_slider",
        prevArrow: '.btn_slide.prev_slide',
        nextArrow: '.btn_slide.next_slide',
        speed: 1500,
        infinite: false,
    });
    $('.product_slider').slick({
        dots: true,
        appendDots: 'dots_list',
        prevArrow: '.product_btn_slide.prev_slide',
        nextArrow: '.product_btn_slide.next_slide',
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1500,
        infinite: false,
        responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1
              }
            }
          ]
    });
});