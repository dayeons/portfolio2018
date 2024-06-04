$(function(){
    $('.next').click(function(e){
        e.preventDefault()
        $('.slideWrap').animate({'margin-left':'-200%'},1000,function(){
            $("li.slide").first().appendTo(".slideWrap");
            $(".slideWrap").css({'margin-left':'-100%'})
        })
   
    })
    $('.prev').click(function(e){
        e.preventDefault()
        $('.slideWrap').animate({'margin-left':'0'},1000,function(){
            $("li.slide").last().prependTo(".slideWrap");
            $(".slideWrap").css({'margin-left':'-100%'})
        })

    })
    



    $('.slideContainer').mousewheel(function(event, deltaX){
        //마우스휠 올리면 이벤트가 발생
    
          
      if(deltaX>0){
        //alert('왼쪽') 
        $('.slideWrap').stop().animate({'margin-left':'0'},1000,function(){
            $("li.slide").last().prependTo(".slideWrap");
            $(".slideWrap").css({'margin-left':'-100%'})

        })
    


      }else if(deltaX<0){
          //alert('오른쪽')
          $('.slideWrap').stop().animate({'margin-left':'-200%'},1000,function(){
            $("li.slide").first().appendTo(".slideWrap");
            $(".slideWrap").css({'margin-left':'-100%'})

        })
      }
    
    
    
    });//mousewheel
    



    $(".show").colorbox({iframe:true, innerWidth:1200, innerHeight:700});


    $(".read").mCustomScrollbar({
        theme: "dark"
    });


     

})//function
    
