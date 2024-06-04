$(function(){

    
//navigation

    $('.menu ul li a').click(function(e){
        e.preventDefault()

        var href=$(this).attr('href')
        //alert(href)

        $('iframe').attr('src',href) 
        $('.dim').fadeOut(600)
        $('.navimenu').animate({"margin-left":"-30%"},600,function(){
          
              $('.PORT').animate({'top':'0%'},600)
        })


    })
    $('.closed').click(function(){
        $('.PORT').animate({'top':'100%'},600)
        $('.hamburger').fadeIn(600)
     
    })

    $('.hamburger').click(function(){
        $('.navimenu').animate({'margin-left':'0%'},600)
        $('.dim').fadeIn(600)
        $('.hamburger').fadeOut(600)
      })

    $('.close').click(function(){
        $('.navimenu').animate({'margin-left':'-30%'},600)
        $('.dim').fadeOut(600)
        $('.hamburger').fadeIn(600)

      })



//work

    $('.workwrap').mousewheel(function(event, deltaX){


                                
        if(deltaX>0){
            // alert('위로오른') 
            $(".work_slidewrap").stop().animate({'margin-left':'0%'},1000,function(){
                $(".work_slidewrap li").last().prependTo(".work_slidewrap")
                $(".work_slidewrap").css({'margin-left':'-40.5%'})
            })

            $('.work_slidewrap li:nth-child(1)').stop().animate({'width':'4%'},500)
            $('.work_slidewrap li:nth-child(2)').stop().animate({'width':'2%'},500)
            $('.work_slidewrap li:nth-child(1) .workimage a').stop().animate({'height':'60%'},500)
            $('.work_slidewrap li:nth-child(2) .workimage a').stop().animate({'height':'30%'},500)


        }else 
        if(deltaX<0){
            //alert('아래왼')
            $(".work_slidewrap").stop().animate({'margin-left':'-81%'},1000,function(){             
                $(".work_slidewrap li").first().appendTo(".work_slidewrap")
                $(".work_slidewrap").css({'margin-left':'-40.5%'})
            })

        $('.work_slidewrap li:nth-child(3)').stop().animate({'width':'4%'},500)
        $('.work_slidewrap li:nth-child(2)').stop().animate({'width':'2%'},500)

        $('.work_slidewrap li:nth-child(3) .workimage a').stop().animate({'height':'60%'},500)
        $('.work_slidewrap li:nth-child(2) .workimage a').stop().animate({'height':'30%'},500)
       
        }
    })










// project
    $(".nav ul li a").click(function(e){
        e.preventDefault()
        var href=$(this).attr('href')
     
        var left=$(href).offset().left
       // alert(left)
        $('html,body').animate({'scrollLeft': left},800)
  
        
    })

    $('.project').mousewheel(function(event, delta){   

        if(delta>0){
        var prev=$(this).prev().offset().left
        $('html,body').stop().animate({'scrollLeft': prev},800)

        }else if(delta<0){
         var next=$(this).next().offset().left
         $('html,body').stop().animate({'scrollLeft': next},800)
        }

    });//mousewheel


    $(window).scroll(function(){
        $('.project').each(function(i){
            var scrT=$(window).scrollLeft()
           var left=parseInt($(this).offset().left)

           //console.log(scrT,left)

           if(scrT>=left){
            $(".nav ul li a").removeClass('on')
            $(".nav ul li").eq(i).find("a").addClass('on')


  
            $('.project_title ul li').stop().animate({"opacity":"0","left":"50%"})
            $('.project_title ul li').eq(i).stop().animate({"opacity":"1","left":"0%"})
      
            $('.project_text ul li').stop().animate({"opacity":"0","top":"90%"})
            $('.project_text ul li').eq(i).stop().animate({"opacity":"1","top":"60%"})

           }
        })


    })




// graphic


            $('.graphicwrap').mCustomScrollbar({
                theme:"dark"

            });


})//function