$(function(){

    $('.nav .menubtn').click(function(){
        $('.subnav').slideDown()
        $(this).addClass('on')     
    })

    $('.nav .loginbtn').click(function(){
        $('form').slideDown()
        $(this).addClass('on')     
    })

    $('.nav').mouseleave(function(){
        $('.subnav').stop().slideUp()
        $('form').stop().slideUp()
        $('.menubtn').removeClass('on')
        $('.loginbtn').removeClass('on')
    })



//더보기버튼을 클릭하면
    $('.right').click(function(){
        //alert()
        $('.bottom').stop().slideUp()
        $(this).closest('.details').next().stop().slideDown()
        //this 현재에서 가장 인접한 부모 .details
        //this 현재에서 하위 자식을 find해서 찾는다,
  

        $('.sizena li').removeClass('on')
        $('.cart').removeClass('on')

    })


    $('.sizenav li').click(function(){
        $('.sizenav li').removeClass('on')
        $(this).addClass('on')
      
        $('p.cart').addClass('on')
    })


})