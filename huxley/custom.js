$(function(){
    var swiper1 = new Swiper('.swiper1', {
        loop:'true',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    var swiper2 = new Swiper('.swiper2', {
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });



    $('.nav li').click(function(){

        var idx=$(this).index()

        $('.nav li').removeClass('on')

        $(this).addClass('on')
                                            /* index 활용 1곱-100%*/

        $('.sliderWrap').stop().animate({'marginLeft':-(idx*100)+'%'})

    });


});//function







