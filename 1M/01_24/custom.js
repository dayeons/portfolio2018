$(function(){

    $(".level1").on({
        mouseenter: function(){
          $('.level2').find('li').stop().slideDown(500)
        },  
        mouseleave: function(){
          $('.level2').find('li').stop().slideUp(500)
        },  

    });
// headernav===============================================

    $('.close').click(function(){
      $('.clickmenu ul').slideToggle()   
    })

//close ===================================================

  $(window).scroll(function(){
    var h=$(this).scrollTop()
    if(h>=900){
        $('.tabfixed').css({'position':'fixed','top':'0px','left':'13%'})
    }
    else{ 
        $('.tabfixed').css({'position':'absolute','top':'92%','left': '13%'})
    }    
  });
//따라다니는 탭메뉴 ==========================================================



    var bg = ['#ffffff','#9fd6f5','#d3c4aa','#e76e66','#fecc09','#d4d4d4','#e7b8b0','#d6b8f5']
     
    for (var i = 0; i < bg.length; i++) {
        $('.headerbg').eq(i).css({'background': bg[i]})
    }     
    $('.nav-banner li').click(function(){
        var idx=$(this).index()
        $('.nav-banner li').removeClass('on')
        $(this).addClass('on')
        $('.banner').css({'background':'url(img/mainimg'+(idx+1)+'.jpg)'})
                                                  //+(idx+1)+
        $('.headerbg').animate({'backgroundColor': bg[idx]})
    });

//nav-banner 클릭시 headerbg 변환================================================================   


    var swiper1 = new Swiper('.swiper1', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
    });
    
    var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
    });
 
    


    $('.tabmenu li').click(function(){
      $('.tabmenu li').removeClass('on').css({'border':'none'})
      $(this).addClass('on').css({'border':'1px solid #000','border-bottom':'none'})

      var idx=$(this).index()
      // alert()
            $('.tabcontent').fadeOut('on')
            $('.tabcontent').eq(idx).stop().fadeIn('on')

  });

    $('.tabarea li').click(function(){
      $('.tabarea li').removeClass('on')
      $(this).addClass('on')

      var idx=$(this).index()
          // alert()
            $('.areacontent').removeClass('on')
            $('.areacontent').eq(idx).stop().addClass('on')

  });

    $('.tabplay li').click(function(){
      $('.tabplay li').removeClass('on')
      $(this).addClass('on')

      var idx=$(this).index()
      // alert()
            $('.playcontent').removeClass('on')
            $('.playcontent').eq(idx).stop().addClass('on')

  });
    



// tabView('.tab1')
// tabView('.tab2')
//호출 값 설정 
//tab1 값을 전달해서 tab2실핼시킨다  


// function tabView(tabName){
//       $(tabName+' .tabNav li').click(function(){
  //변수에 기억되어있는  띄어쓰기 중요
//         $(tabName+' .tabNav li').removeClass('on')
//         $(this).addClass('on')

//         var idx=$(this).index()
//         $(tabName+' .tabContent li').addClass()
//         $(tabName+' .tabContent li').eq(idx).addClass('on')


//       })





//   }
// //클릭하면 같이 내용이 바뀜
 


//별로안중요
  var timer=setInterval(move,70)
//사용자가 저장한 무브로 실행시킨다.
  var mleft=-125
  //시작점을 돌아가는 게 보이니까 뒤집는 게 안보이게 하려고
  
  function move(){
      mleft-=2
      //누적하면서 움직임
      $('.footernav').css({'margin-left': mleft })

      if(mleft==-270){
        $('.footernav li').first().appendTo('.footernav')
      }
      else if(mleft<-1500){
        mleft=-125
      }
  }



  // ** 중요
  $('.footernav').on({
    mouseenter: function(){
      clearInterval(timer)
    },
    mouseleave: function(){
      timer=setInterval(move,70)
    },

  })

  $('.next').click(function(e){
    e.preventDefault()
    $('.footernav li').first().appendTo('.footernav')
})
$('.prev').click(function(e){
    e.preventDefault()
    $('.footernav li').last().prependTo('.footernav')
})
});