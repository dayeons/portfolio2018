$(function(){

    var cnt=0//변수
    $('.next').click(function(e){
        e.preventDefault()

        $(this).addClass('on')
        $('.prev').fadeIn()


            $('.wrap').stop().animate({'left':'-=380px'})
            cnt++;//클릭을 누적 체크한다.(5번) 그러러면 변수를 준다
            // alert(cnt)
                if(cnt==5){
                    $('.wrap').stop().animate({'left':'0'})
                    cnt=0
                }

                if(cnt==0){
                    $('.prev').fadeOut()
                }

    });
    //next

    $('.prev').click(function(e){
        e.preventDefault()

        $(this).addClass('on')
        $('.next').removeClass('on')

            $('.wrap').stop().animate({'left':'+=380px'})
            cnt--;//클릭을 감소 체크한다.(0번)
                if(cnt==0){
                    $('.prev').fadeOut()
                }
    
 
    });
    //prev




//substr() 문자열가져오기
    $('.nav li').mouseenter(function(){
        var attrimg=$(this).find('img').attr('src')
        //li의 자식의 img의 src속성 중에 4글자 값을 읽어 들어
        //attr img
        //off->on
        //substr(몇번째, 글자수)
        var hoverimg=attrimg.substr(0,8) 
        hoverimg=hoverimg+'on.gif'
        // alert(hoverimg)
        $(this).find('img').attr({'src':hoverimg});
            $('.nav li span').removeClass('on')
            $(this).find('span').addClass('on') 
    })

   

    $('.nav li').mouseleave(function(){
        var attrimg=$(this).find('img').attr('src')

        var hoverimg=attrimg.substr(0,8)
        hoverimg=hoverimg+'off.gif'
        $(this).find('img').attr({'src':hoverimg})  
        $('.nav li span').removeClass('on')

    })

 
    $(".slide").mCustomScrollbar({
        theme:"minimal-dark"
    });
    //mCustomScrollbar

});//function