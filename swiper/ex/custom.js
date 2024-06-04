$(function(){
    var swiper = new Swiper('.swiper-container', {
        // loop: true,
        // mousewheel: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
            
        // },//paging

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },//autoplay

    });//swiper



    $('.nav-swiper li').click(function(){
        var idx=$(this).index()
        swiper.slideTo(idx, 500);


        $('.nav-swiper li').removeClass('on')
        $(this).addClass('on')

    })//nav-swiper li 클릭하면 바뀌면서 색변함
    
    swiper.on('slideChange', function () {
        var activeIdx= swiper.activeIndex
        $('.nav-swiper li').removeClass('on')
        $('.nav-swiper li').eq(activeIdx).addClass('on')
  
    });//event 움직이면서 자동으로 li가 바뀜 
    
});//function