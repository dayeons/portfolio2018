$(function(){

$('.nav li a').click(function(e){
    e.preventDefault()
  
   var href=$(this).attr('href')
   var href=$(href).offset().top
                // 맨 위의 위치 값을 읽어들여    offset 시작점

    // alert(href)
   $('.nav li a').removeClass('on')
   $(this).addClass('on')

    $('html,body').animate({'scrollTop': href},1000,'easeInOutCubic')



});//nav



$('section').mousewheel(function(event, delta){
    //마우스휠 올리면 이벤트가 발생

      
  if(delta>0){
    //alert('위로') 
    //마우스를 위로 올리면 이전의 섹션 시작값을 읽어 들여 
    //html,body스크롤탑으로 애니메이션을 시킨다.
    var prev=$(this).prev().offset().top
    $('html,body').stop().animate({'scrollTop': prev},1000,'easeInOutCubic')

  }else if(delta<0){
      //alert('아래로')
      // 마우스를 아래로 올리면 다음의 섹션 시작값을 읽어들여 
      //html,body스크롤탑으로 애니메이션을 시킴
      var next=$(this).next().offset().top
      $('html,body').stop().animate({'scrollTop': next},1000,'easeInOutCubic')
  }



});//mousewheel



$(window).scroll(function(){
  var winH=$(window).height()
  var scrT=$(window).scrollTop()
  //높이가 같을 때만 변수 설정 
  //alert(winH)
   //console.log(scrT)//검사 콘솔에서 확인

  
    for(var i=0;i<6; i++){
    if(scrT>=winH*i && scrT<winH*(i+1)){
      //반복구문은 스크롤탑 윈도우 높이 보다 클때 && 윈도우 2의 높이보다 작을 때
      //  winH =< scrT < winH*(i+1)
          $('.nav li a').removeClass('on')
          $('.nav li').eq(i).find('a').addClass('on')
      }

    }

  // if(scrT>=0 && scrT<winH*1){
  //   $('.nav li a').removeClass('on')
  //   $('.nav li').eq(0).find('a').addClass('on')
  // }else if(scrT>=winH*1 && scrT<winH*2){
  //   $('.nav li a').removeClass('on')
  //   $('.nav li').eq(1).find('a').addClass('on')
  
  // }else if(scrT>=winH*2 && scrT<winH*3){
  //   $('.nav li a').removeClass('on')
  //   $('.nav li').eq(2).find('a').addClass('on')

  
  // }else if(scrT>=winH*3 && scrT<winH*4){
  //   $('.nav li a').removeClass('on')
  //   $('.nav li').eq(3).find('a').addClass('on')
  
  // }else if(scrT>=winH*4 && scrT<winH*5){
  //   $('.nav li a').removeClass('on')
  //   $('.nav li').eq(4).find('a').addClass('on')
  // }else if(scrT>=winH*5 && scrT<winH*6){
  //   $('.nav li a').removeClass('on')
  //   $('.nav li').eq(5).find('a').addClass('on')
  // }
  



  var sect1=$('#sect1').position().top
  var sect2=$('#sect2').position().top
  var sect3=$('#sect3').position().top
  var sect4=$('#sect4').position().top
  var sect5=$('#sect5').position().top
  var sect6=$('#sect6').position().top

  //console.log(sect1,sect2,sect3,sect4,sect5,sect6)

$('section').each(function(){
  if(scrT>= $(this).offset().top){
    $(this).find('.inner').animate({'opacity':'1'},300)
    $('.inner').removeClass('on')
    $(this).find('.inner').addClass('on')
  }
});


});//윈도우 펑션구문









$("button").on({
    click: function(){
        $(this).css('background','#00000000');
        $(this).css('color','#ffc61c');
        $(this).css('border','2px solid #ffc61c')
    },  

    mouseleave: function(){
      $(this).css('background','#ffed00');

    }, 
    mouseenter: function(){
      $(this).css('background','#ffc61c');

    }, 

  });



});//function

