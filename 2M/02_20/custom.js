$(function(){
    $(".next").click(function(e){
        e.preventDefault()

        $(".bg").animate({'margin-left':'-200%'},1000,function(){
    
            $("li.bgslide").first().appendTo(".bg")
            $(".bg").css({'margin-left':'-100%'})
        })

        $(".slideWrap").animate({'margin-left':'-200%'},1000,function(){  
            
            $("li.slide").first().appendTo(".slideWrap")
            $(".slideWrap").css({'margin-left':'-100%'})
        })

        $(".slidedosirak").animate({'margin-left':'-200%'},1000,function(){    
            
            $("li.dosirak").first().appendTo(".slidedosirak")
            $(".slidedosirak").css({'margin-left':'-100%'})
        })

        $(".nav").animate({'margin-top':'-200%'},1000,function(){
            
            $("li.navslide").first().appendTo(".nav")
            $(".nav").css({'margin-top':'-100%'})
        })
    })









    $(".prev").click(function(e){
        e.preventDefault()

        $(".bg").animate({'margin-left':'0%'},1000,function(){
            
            $("li.bgslide").last().prependTo(".bg")
            $(".bg").css({'margin-left':'-100%'})
        })

        $(".slideWrap").animate({'margin-left':'0%'},1000,function(){
            
            $("li.slide").last().prependTo(".slideWrap")
            $(".slideWrap").css({'margin-left':'-100%'})
        })
        $(".slidedosirak").animate({'margin-left':'0%'},1000,function(){
  
            $("li.dosirak").last().prependTo(".slidedosirak")
            $(".slidedosirak").css({'margin-left':'-100%'})
        })
        $(".nav").animate({'margin-top':'0%'},1000,function(){
 
            $("li.navslide").last().prependTo(".nav")
            $(".nav").css({'margin-top':'-100%'})
        })
    })















});//function