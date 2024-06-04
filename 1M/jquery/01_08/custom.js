
$(function(){
    function mainHide(){
        $('.mainbanner').animate({'top':'5%','opacity':'0'})
        $('.btn').delay(500).animate({'bottom':'20%','opacity':'0'})
        $('.mainimg').delay(1000).animate({'right':'-300px'},1000,function(){
           
        })
    
    }
    
    $('.btn1').click(function(){
        mainHide()
        content1show() 
    })
    $('.btn2').click(function(){
        mainHide()
        content2show() 
    })

// main
    
    function content1show(){
        //         애니메이션         일처리,시간,펑션구문//
        $('p.top').delay(2000).animate({'width':'100%'},1000,function(){
            $('p.right').animate({'height':'100%'},1000,function(){
                $('p.bottom').animate({'width':'100%'},1000,function(){
                    $('p.left').animate({'height':'100%'},1000,function(){
                        $('.content1show').fadeIn()
                    })
                })
            })
        })
    }

// content1


});

