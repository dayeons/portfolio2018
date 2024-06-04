$(function(){
    var swiper = new Swiper('.swiper-container', {
        // loop: true,
        // effect: 'fade',
        // mousewheel: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
            
        // },//paging
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        direction: 'vertical',
        effect: 'fade',
        mousewheel: true,
    });//swiper

    $('.nav-swiper li').click(function(){
        var idx=$(this).index()
        swiper.slideTo(idx, 500);


        $('.nav-swiper li').removeClass('on')
        $(this).addClass('on')

    })//클릭

swiper.on('slideChange', function () {
        var activeIdx= swiper.activeIndex
        $('.nav-swiper li').removeClass('on')
        $('.nav-swiper li').eq(activeIdx).addClass('on')
  
    });
    
});//function