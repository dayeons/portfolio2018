$(function(){
  $('.mainNav,.Synopsis').mCustomScrollbar({
      theme: "light-3"
  }); // custom scroll


    $('.mainNav li a').click(function(e){
      e.preventDefault()
          var href= $(this).attr('href')
          $('.mainImg li').stop().fadeOut()
          $(href).fadeIn()

          $('.mainNav li').removeClass('on')
          $(this).parent('li').addClass('on')  
    })//메인 탭메뉴 예고편

    $('.tabmenu li a').click(function(e){
        e.preventDefault()
          var href= $(this).attr('href')
          $('.ultab .poster').stop().fadeOut()
          $(href).fadeIn()

          $('.tabmenu li a').removeClass('on')
          $(this).addClass('on')
    
    })//상영작 탭메뉴


    $('.best li').click(function(){
          var idx=$(this).index()-1
      // alert(idx)
      $('.best li').removeClass('on')
      $(this).addClass('on')

      $('.boximg li').fadeOut()
      $('.boximg li').eq(idx).stop().fadeIn()

    })


    $('.steelnav li a').click(function(){
      var target= $(this).attr('href')
      //alert(target)
      $('.steelcontents li').stop().fadeOut()
      $(target).stop().fadeIn(1000)
          
      $('.steelnav li').removeClass('on')
      $(this).parent('li').addClass('on')
      })

  $(".preview").colorbox({iframe:true, innerWidth:640, innerHeight:390});
})