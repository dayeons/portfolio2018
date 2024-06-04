$(function(){

    $('.material-icons').click(function(){
        $(this).fadeOut()
        $('.nav').addClass('on')
        $('section').addClass('on')

    })

    $('.nav li').click(function(){
        $('section').removeClass('on')   
        var idx=$(this).index() 
        $('.material-icons').fadeIn()
        $('.nav').removeClass('on')
    
        $('section div').removeClass('on')  
        $('section div').eq(idx).addClass('on')
      
    })















});//function