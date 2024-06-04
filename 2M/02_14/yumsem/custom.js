$(function(){

    var idx1=''
    var len1=$('.topslide').length
    
    var idx2=''
    var len2=$('.subslide').length
 
                //length(갯수)는 ()필요 없어

    $('.topPointer li').click(function(e){
        e.preventDefault()
        idx1=$(this).index()

        slideShow(idx1)//인수 전달 호출
        // alert(idx)
     
    })

    function slideShow(index){//전달되는 인수


        $('.topPointer li').removeClass('on')
        $('.topPointer li').eq(idx1).addClass('on')

        $('.topWrap').animate({'margin-left':-100*idx1+'%'},1000)
      
    }

    $('.sect1 .next').click(function(e){
        e.preventDefault()

        if(idx1==len1-1){
            idx1=0
        }else{
            idx1++
        } 
        slideShow(idx1)
    })


    $('.sect1 .prev').click(function(e){
        e.preventDefault()

        if(idx1==0){
            idx1=len1-1
        }else{
            idx1--
        } 
        slideShow(idx1)
    
    })

//sect1==========================================================

    $('.subPointer li').click(function(e){
        e.preventDefault()
        idx2=$(this).index()

        $('.subPointer li.on').eq(idx2).animate({'opacity':'1'})

            slide2Show(idx2)//인수 전달 호출
            //alert(idx2)
            
    })

        function slide2Show(index){//전달되는 인수

            $('.subPointer li').removeClass('on')
            $('.subPointer li').eq(idx2).addClass('on')

            $('.subslide').fadeOut(100)
            $('.subslide').eq(idx2).fadeIn(500)
        }



    $('.sect2 .next').click(function(e){
        e.preventDefault()

       if(idx2==len2-1){
           idx2=0
       }else{
            idx2++
       } 
       slide2Show(idx2)
    })


    $('.sect2 .prev').click(function(e){
        e.preventDefault()
        if(idx2==0){
           idx2=len2-1
       }else{
            idx2--
       } 
       slide2Show(idx2)
    
    })

// sect2==============================================================






$(window).scroll(function(){
    var gap=-200
    var scrT= $(window).scrollTop()
    var rotate=$('.rotate').offset().top

    var menu1=$('.menu1').offset().top
    var menu2=$('.menu2').offset().top
    


    if(scrT>=rotate && scrT<menu1){
        $('.rotate').delay(1000).transition({rotate:"+=30deg"})
    }
    else{
        $('.rotate').stop(1,0)
    }
    


    if(scrT>=menu1+gap && scrT<menu2+gap){
        $('.contentnav li').removeClass('on')
        $('.contentnav li').eq(0).addClass('on')

        }
    else if(scrT>=menu2+gap){
        $('.contentnav li').removeClass('on')
        $('.contentnav li').eq(1).addClass('on')

        }
        
});




function scrollAni(){
    var scrT=$(window).scrollTop()
    var winH=$(window).height()
    var scrB =parseInt(scrT + winH)
    var scene=$('section')

    for (var i=0; i < scene.length; i++)
        var section = $(scene[i])

        var scrHalf = section.position().top + section.height() / 2;

        if(scrHalf < scrB){
            section.animate({'opacity':'1'},1000)
        }


  
    if(scrT >=3700){
        $('.contentnav').addClass('on')
    }else{
        $('.contentnav').removeClass('on')
    }

}




$(window).on('scroll', scrollAni);


$('.contentnav li a').click(function(e){
    e.preventDefault()
    var href=$(this).attr('href')
    var scrT=$(href).offset().top

    
    $('.contentnav li').removeClass('on')
    $(this).parent('li').addClass('on')

    $('html,body').animate({'scrollTop':scrT})
})





var hh=$(document).height()
//alert(hh) 6251






    
});//function