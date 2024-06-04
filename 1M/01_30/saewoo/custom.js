$(function(){   
    $('.remote ul li a').click(function(e){
        e.preventDefault()
    
    var href=$(this).attr('href')
    var href=$(href).offset().top
                    // 맨 위의 위치 값을 읽어들여    offset 시작점

        //alert(href)

    // $('.remote ul li a').removeClass('on')
    // $(this).addClass('on') 클릭은 한번만

        $('html,body').animate({'scrollTop': href},1000)



    });//remote 클릭 시작점 읽음



        
    $(window).scroll(function(){

        
    var scrT=$(window).scrollTop()
    var gap=-400
    //시작점보다 더 빨리 빼서 나오라고 갭을 준다. 
    //그러면 마지막은 활성화가 안되던게 갭을 줌으로써 됨


    // if(scrT>=0 && scrT<sect2+gap){
    // $('.remote li a').removeClass('on')
    // $('.remote li').eq(0).find('a').addClass('on')

    // }else if(scrT>=sect2+gap && scrT<sect3+gap){
    // $('.remote li a').removeClass('on')
    // $('.remote li').eq(1).find('a').addClass('on')

    // }else if(scrT>=sect3+gap && scrT<sect4+gap){
    // $('.remote li a').removeClass('on')
    // $('.remote li').eq(2).find('a').addClass('on')

    // }else if(scrT>=sect4+gap && scrT<sect5+gap){
    // $('.remote li a').removeClass('on')
    // $('.remote li').eq(3).find('a').addClass('on')

    // }else if(scrT>=sect5+gap){
    // $('.remote li a').removeClass('on')
    // $('.remote li').eq(4).find('a').addClass('on')

    // }
    
    $('section').each(function(index){
        if(scrT>=($(this).offset().top)+gap){
            $('.remote li a').removeClass('on')
            $('.remote li').eq(index).find('a').addClass('on')

            $(this).find('.bgAni').removeClass('on')
            $(this).find('.bgAni').addClass('on')
        }
    })


    if(scrT>=120){
        $('.fixedbasic').addClass('on')
    }else{
        $('.fixedbasic').removeClass('on')
    }

});//윈도우 펑션구문
      
      
      
      
      
      
      



});