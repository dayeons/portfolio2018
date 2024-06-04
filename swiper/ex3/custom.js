$(function(){
    var swiper = new Swiper('.swiper-container', {
       
        
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


        var attrimg=$(this).find('img').attr('src')
        //li의 자식의 img의 src속성 중에 8글자 값을 읽어 들어
        //attr img
        //+_over.jpg
        //substr(몇번째, 글자수)
        var hoverimg=attrimg.substr(0,8) 
        hoverimg=hoverimg+'_over.jpg'
        // alert(hoverimg)
        $(this).find('img').attr({'src':hoverimg});

    })





    swiper.on('slideChange', function () {
        var activeIdx= swiper.activeIndex
        $('.nav-swiper li').removeClass('on')
        $('.nav-swiper li').eq(activeIdx).addClass('on')
  
    });
    




});//function