$(function(){



    var swiper1 = new Swiper('.swiper1', {

        spaceBetween: 30,

        pagination: {

          el: '.swiper-pagination1',

          clickable: true,

        },



        autoplay: {

          delay: 2500,

          disableOnInteraction: false,

        },

    });//변수

                //slideChange 스펠링 주의

    swiper1.on('slideChange', function() {

      var activeIdx= swiper1.activeIndex

      var bgB='bgB'+activeIdx

      var bg='bg'+activeIdx



      //모든 클래스를 다 지우기 때문에  사용자 설정은 id로 지정한다.

      $('#sliderBottom').removeClass()

      $('#sliderBottom').addClass(bgB)

      $('#sliderBg').removeClass()

      $('#sliderBg').addClass(bg)





    })//배경바뀌는거









    var swiper2 = new Swiper('.swiper2', {

      spaceBetween: 30,

      pagination: {

        el: '.swiper-pagination2',

        clickable: true,

        },

        autoplay: {

          delay: 2500,

          disableOnInteraction: false,

        },

      

    });







    

    var swiper3 = new Swiper('.swiper3', {



      navigation: {

        nextEl: '.swiper-button-next',

        prevEl: '.swiper-button-prev',

      },



      slidesPerView: 4,

      spaceBetween: 30,

      pagination: {

        el: '.swiper-pagination3',

        clickable: true,

      },



      autoplay: {

        delay: 2500,

        disableOnInteraction: false,

      },

    });





    $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});





})