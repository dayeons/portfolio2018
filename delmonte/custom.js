$(function(){

	
	
    $('.tabmenu li a').click(function(){
        var target= $(this).attr('href')
        //alert(target)
        $('.tabcontents .content').stop().fadeOut()
        $(target).stop().fadeIn(1000)
            
        $('.tabmenu li').removeClass('on')
        $(this).parent('li').addClass('on') 

        $()
    })

    	
    // $(function(){
    //     $('.content').eq(0).addClass('on')    

    //  $('.tabmenu li').click(function(){
    //     $('.tabmenu li').removeClass('on')
    //     $(this).addClass('on')

    //     var idx=$(this).index()
    //     $('.content').removeClass('on')
    //     $('.content').eq(idx).addClass('on')    
  
    //  })
  










});