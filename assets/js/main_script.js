$(function() {
    let sup_header =$('.top_header');
    let header = $('.header');
    let logo_header = $('.menu_first_item');
    let bottom_header = $('.bottom_header');
    let menu_item = $('.menu_item');
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       logo_header.addClass('disp_block');
       sup_header.addClass('disp_none');
       bottom_header.addClass('bh_fix');
       menu_item.addClass('bh_fix_mi');
      } else {
       header.removeClass('header_fixed');
       logo_header.removeClass('disp_block');
       sup_header.removeClass('disp_none');
       bottom_header.removeClass('bh_fix');
       menu_item.removeClass('bh_fix_mi');
      }
    });
   });