$(function(){

    $('.popup a').click(function(){
        $(this).slideUp()
        $('.popup').slideUp()
    })

    $(".mainnav").mouseenter(function(){
            $(".subnavBg").slideDown(function(){
                    $(this).mouseleave(function(){
                            $(".subnavBg").slideUp()
                    })
            })       
    })

    $(".icon1").click(function(){     
        $(".dim").delay(100).fadeIn(function(){
            $('.modal1').fadeIn(function(){
                $(this).click(function(){
                    $('.modal1').delay(100).fadeOut(function(){
                        $('.dim').fadeOut()
                    })
                })
            })
        })
    })


    $(".icon2").click(function(){
        $(".dim").delay(100).fadeIn(function(){
            $('.modal2').fadeIn(function(){
                $(this).click(function(){
                    $('.modal2').delay(100).fadeOut(function(){
                        $('.dim').fadeOut()
                    })
                })
            })
        })
    })
 



    var sw=1

    $('.click').click(function(){
        //alert()
        if(sw==1){
            $('.panelBg').animate({'height':'5px'})
            $(this).addClass('on')
            sw=0

        }else{

            $('.panelBg').animate({'height':'117px'})
            $(this).removeClass('on')

            sw=1

        }   

    })

    var idx=''
    var len=$('.sliderWrap li').length

    setInterval(move,6000)

    function move(){
        if(idx==len-1){
            idx=0
          }
    
          else {    
            idx++  
          }
          slideShow(idx)
    };

    $('.paging li').click(function(){
        idx=$(this).index()
        slideShow(idx)
    });

    function slideShow(idx){    
   
        $('.sliderWrap').animate({"margin-left":-100*idx+"%"},1000)
        
        $('.paging li').removeClass('on')
        $('.paging li').eq(idx).addClass('on')

    };


    $('.tab ul li').click(function(){
        var idx=$(this).index()

        $('.tab ul li').removeClass('on')
        $(this).addClass('on')

        $('.tabcontent ul').hide()
        $('.tabcontent ul').eq(idx).show()
    })

});//function