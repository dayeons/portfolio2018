$(function(){

    var swiperH = new Swiper('.swiper-container-h', {


        
        pagination: {
            el: '.swiper-pagination-h',
            clickable: true,
        },
    });//swiperH


    var swiperH1 = new Swiper('.swiperHfirst', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },//autoplay

        pagination: {
            el: '.swiper-pagination-h',
            clickable: true,
        },
    });//swiperH1



    var swiperV = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination-v',
            clickable: true,
        },
    });//swiperV



    $('.nav li').click(function(){
        var idx=$(this).index()
        // alert(idx)
        swiperV.slideTo(idx+1, 500, false);
        $('.nav li').removeClass('on')
        $('.nav li').eq(idx).addClass('on')

    });//nav li 클릭

    $('h1').click(function(){
        swiperV.slideTo(0, 500, false); 
    })
});