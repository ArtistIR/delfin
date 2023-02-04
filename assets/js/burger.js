$('.burger_btn.btn').on('click',function(e){
    e.preventDefault;
    $(this).toggleClass('burger_btn_active');
    $('.burger_nav').toggleClass('burger_nav_active');
});