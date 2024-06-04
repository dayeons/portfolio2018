$(function(){
    $('a.view').click(function(e){
        e.preventDefault()

        var href=$(this).attr('href')
        var h=$(href).height()
            //alert(href)
            //자식이 absolute 높이가 잡히지 않으니 지정해 줘야한다,href 값을 찾아서
        $('a.view').removeClass('on')
        $(this).addClass('on')


        $('.productDetail li').animate({'opacity':'0'})
        $('.productDetail').stop().animate({'height':'0'})
        //첨엔 안보이다가  (view)현재의 productList(부모= closest)의 옆에 find(productDetail)를 찾아서

        //animate를 시켜준다
        
        $(this).closest('.productList').next().find('.productDetail').stop().animate({'height':h})
        $(this).closest('.productList').next().find(href).stop().animate({'opacity':'1'})
    
          
        
    });//view 클릭


    $(".close").click(function(){
        $('.productDetail').stop().animate({'height':'0'})
        $('a.view').removeClass('on')

    });//close 클릭



    
    var h=$(window).height()
    //alert(h)
    //윈도우의 탑의 위치를 설정 윈도우(화면 창)를 따라가면서 움직이니까
    $('.top').css({'top':h-50})

    $(window).scroll(function(e){
        e.preventDefault()

        var h=$(window).height()
        var scrT=$(window).scrollTop()
        //console.log(scrT)  

        if(scrT<h){           
            $('.top').stop().animate({'top':h-50})
    
        }else if(scrT>h){
            $('.top').stop().animate({'top':scrT+(h/2)})
          
        }

    })

// 


var myVar = setInterval(automain,4000)
var main=0

function automain(){
    if(main<1){main++}
    else if(main==1){main=0}

    $(".slideWrap").delay(2000).animate({'margin-left':'-100%'},1000,function(){

        $(".slideWrap li").first().appendTo(".slideWrap")
        $(".slideWrap").css({'margin-left':'0%'})
    })
  
}   
//메인 셋인터벌=======================================================
  

$(".nav").mouseenter(function(){
        $(".sub").slideDown()
    })
    $(".sub").mouseleave(function(){
        $(".sub").slideUp()
    })

//

});;
