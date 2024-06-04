$(function(){
    var swiper1 = new Swiper('.swiper1', {
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
   
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


    var swiper2 = new Swiper('.swiper2', {

        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });


         
    $('.swiper1 .swiper-button-next').mouseenter(function(e){
        e.preventDefault()
 
        $(this).addClass('on')
        $('.swiper1 .swiper-button-prev').fadeIn()


       
    });
});