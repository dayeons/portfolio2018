$(function(){



      

    $('.headernav li').click(function(e){
        e.preventDefault()

        var idx=$('.headernav li').index()

        $('.headernav li').removeClass('on')
        $('.headernav li').eq(idx).find('a').addClass('on')

    })


    $(".mainBanner .next").click(function(e){
        e.preventDefault()
        $(".slideWrap").animate({'margin-left':'-100%'},1000,function(){
      
            
            $("li.slide").first().appendTo(".slideWrap")
            $(".slideWrap").css({'margin-left':'-0%'})
        })
      
    });

    $(".mainBanner .prev").click(function(e){
        e.preventDefault()
        $(".slideWrap").animate({'margin-left':'0%'},1000,function(){
            $("li.slide").last().prependTo(".slideWrap")
            $(".slideWrap").css({'margin-left':'-100%'})
        })
    });

 
    $(".overview_bottom .next").click(function(e){
        e.preventDefault()
        $(".aboutWrap").animate({'margin-left':'-50%'},1000,function(){
        
            $("li.aboutSlide").first().appendTo(".aboutWrap")
            $(".aboutWrap").css({'margin-left':'-0%'})
        })
      
    });

    $(".overview_bottom .prev").click(function(e){
        e.preventDefault()
        $(".aboutWrap").animate({'margin-left':'0%'},1000,function(){
            $("li.aboutSlide").last().prependTo(".aboutWrap")
            $(".aboutWrap").css({'margin-left':'-50%'})
        })
    });



    $(".preview").colorbox({iframe:true, innerWidth:1200, innerHeight:700,transition:"fade"});




$('.btn1').click(function(){

    $('.redline').addClass('on')

    $('.blueline').removeClass('on')

    $(this).addClass('on')

    $('.btn2').removeClass('on')

})

$('.btn2').click(function(){

    $('.redline').removeClass('on')

    $('.blueline').addClass('on')

    $(this).addClass('on')

    $('.btn1').removeClass('on')

})






$('.map a').click(function(e){

    e.preventDefault()


    var href=$(this).attr('href')

    var scrT=$(href).offset().top

    $('html,body').animate({'scrollTop':scrT},1800,'easeOutCubic')

    });

// =================================================================================

$(window).scroll(function(){
    var gap=-300
    var list1=$('#world').offset().top
    var list2=$('#award').offset().top
    var list3=$('#concert').offset().top
    
    var time=$('.time').offset().top
    var Benefit=$('.Benefits').offset().top
    var dangaward=$('#dangaward').offset().top
    var run=$('.run').offset().top

    var scroT= $(window).scrollTop()
    //console.log(scroT)

    var winH=$(window).height()
 


    

    $('section').each(function(){
        
        for(var i=0;i<7; i++){
            if(scroT>=winH*i && scroT<winH*(i+1)){

              //반복구문은 스크롤탑 윈도우 높이 보다 클때 && 윈도우 2의 높이보다 작을 때
              //  winH =< scrT < winH*(i+1)

                  $('.headernav li a').removeClass('on')
                  $('.headernav li').eq(i).find('a').addClass('on')
              }
        
            }
        
    });



    if(scroT>=list1+gap && scroT<list2+gap){
        $('.text1').animate({opacity:1},1000)
        }
    else if(scroT>=list2+gap && scroT<list3+gap){

        $('.text2').animate({opacity:1},1000)
        }       
    else if(scroT>=list3+gap){

        $('.text3').animate({opacity:1},1000)
        
        }



    if(scroT>=time+gap){

        $('.time ul li').each(function(i){

            //alert(i)

            $(this).delay(i*300).animate({'opacity':'1'},1000)

            })

    }
    if(scroT>=Benefit+gap){

        $('.benefitimg').animate({'opacity':'1'})

    }


    if(scroT>=dangaward+gap){

        $('#dangaward div').animate({'opacity':'1'},1000)
        $('.dog01').addClass('on')
        $('.dog02').addClass('on')
        $('.dog03').addClass('on')

    }
    if(scroT>=run+gap){

        $('.runani').animate({'opacity':'1'},1000)
        $('.dog1').addClass('on')
        $('.dog2').addClass('on')
        $('.girl').addClass('on')

    }


});


// =================================================================================


$('.map a').mouseenter(function(e){
    e.preventDefault()

    $(this).children('img').stop().transition({
                 scale: '1.12',
                 x: '-50%', y: '-50%'
             });

    $(this).find('.name').stop().animate({opacity:1})
})

$('.map a').mouseleave(function(e){
    e.preventDefault()

    $(this).children('img').stop().transition({
                 scale: '1',
                 x: '-50%', y: '-50%'
             });
    $(this).find('.name').stop().animate({opacity:0})
})


// =================================================================================


$('.dotli').find('img').mouseenter(function(){

    var idx = $(this).index()

    $('.dotcontents').find('h3').eq(idx).stop().animate({opacity:1})

})

$('.dotli').find('img').mouseleave(function(){

    var idx = $(this).index()

    $('.dotcontents').find('h3').eq(idx).stop().animate({opacity:0})
})


// =================================================================================







});//function


