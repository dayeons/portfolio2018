$(function(){
    var myVar = setInterval(autoslide,2000)
    var ii=0

    function autoslide(){
        if(ii<1){ii++}
        else if(ii==1){ii=0}
        $(".me li").stop().animate({"opacity":"0"},1000)
        $(".me li").eq(ii).stop().animate({"opacity":"1"},1000)
        }  


    var myVar = setInterval(autoskill,2000)
    var ski=0

    function autoskill(){
        if(ski<1){ski++}
        else if(ski==1){ski=0}
        $(".illu").delay(3000).animate({'margin-left':'-100%'},1000,function(){

            $(".illu li").first().appendTo(".illu")
            $(".illu").css({'margin-left':'0%'})
        })
      
        }  


        $('.logo').click(function(){
            $('.dim').fadeIn()
        })
        $('.dim').click(function(){
            $('.dim').fadeOut()
        })

    $(window).scroll(function(){
        var gap=-500
        var scrT= $(window).scrollTop()
        var about02=$('.skill').offset().top


        if(scrT>=about02+gap){
            $('.bar-fill-html').addClass('on')
            $('.bar-fill-jquery').addClass('on')
            $('.bar-fill-illustration').addClass('on')
            $('.bar-fill-photoshop').addClass('on')
       
        }
    });//scroll


})//function


