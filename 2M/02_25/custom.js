$(function(){

	var mainV = $('.mainvideo video').get(0);	
        mainV.play()
        
        
    $("article").mouseenter(function(){
        mainV.pause()
       
        var v=$(this).find('video').get(0)
       
        v.play()
     
        $(this).stop().animate({'width':'30%'})
        $(this).find('video').stop().animate({'opacity':'1'})
        $(this).find('.explain').stop().animate({'right':'50px'},300)
    })


    
    $("article").mouseleave(function(){
        mainV.play()

        var v=$(this).find('video').get(0)
        
        v.pause()
        v.currentTime=0

        $(this).stop().animate({'width':'12%'})
        $(this).find('video').stop().animate({'opacity':'0'})
        $(this).find('.explain').stop().animate({'right':'-300px'},100)

     
    })

  








})