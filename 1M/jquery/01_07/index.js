
$(function(){

    function mainHide(){
        $('.mainbanner').animate({'top':'-30%','opacity':'0'})
        $('.btn').animate({'bottom':'-20%','opacity':'0'},1000)
        $('.mainimg').delay(1000).animate({'right':'-400px'},1000,function(){
           
        }) 
    }; // mainhide 


    function mainShow(){
        $('.mainbanner').delay(2000).animate({'top':'1%','opacity':'1'},1000)
        $('.btn').delay(2000).animate({'bottom':'8%','opacity':'1'},1000)
        $('.mainimg').delay(2000).animate({'right':'-200px'},1000,function(){

            })

    };// mainshow


    $('.btn1').click(function(){
        mainHide()
        content1show() 
    });

    $('.btn2').click(function(){
        mainHide()
        content2show()  
    });
    // btn1 ,2 클릭 



    function content1hide(){
                $('.content1').fadeOut()
    };//content1 hide
    function content2hide(){
                $('.content2').delay(1000).fadeOut()
    };//content2 hide



    $('.close1').click(function(){
        mainShow()
        content1hide()   
    })

    $('.close2').click(function(){
        mainShow()
        content2hide()
        
    })
    //close1 ,2 클릭시 메인 생김



    function content1show(){
        //         애니메이션         일처리,시간,펑션구문//
        $('p.top').delay(1000).animate({'width':'100%'},1000,function(){
            $('p.right').animate({'height':'100%'},1000,function(){
                $('p.bottom').animate({'width':'100%'},1000,function(){
                    $('p.left').animate({'height':'100%'},1000,function(){
                        $('.content1show').fadeIn()
                    })
                })
            })
        })
    }

    function content1hide(){
        //         애니메이션         일처리,시간,펑션구문//
        $('p.top').animate({'width':'0%'},function(){
            $('p.right').animate({'height':'0%'},function(){
                $('p.bottom').animate({'width':'0%'},function(){
                    $('p.left').animate({'height':'0%'},function(){
                        $('.content1show').fadeOut()
                    })
                })
            })
        })
    }
    

// content1


function content2show(){
    //         애니메이션         일처리,시간,펑션구문//

            $('.content2show').delay(2000).animate({'height':'397px'})

}

function content2hide(){
    //         애니메이션         일처리,시간,펑션구문//

            $('.content2show').delay(1000).animate({'height':'0px'})
  
}


// content2
});




