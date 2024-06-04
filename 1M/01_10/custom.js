$(function(){

    $(".content").eq(0).addClass('on')

    $(".nav ul li").click(function(){
        var idx=$(this).index()

        $(".nav ul li a").removeClass('on')
        $(".nav ul li a").eq(idx).addClass('on')

        
        $(".content").removeClass('on')
        $(".content").eq(idx).addClass('on')
    });

   
   })