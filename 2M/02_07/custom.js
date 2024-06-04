$(function(){

    $('.nav1').click(function(e){
        e.preventDefault()
        $('.bar').stop().animate({'left':'5px'},500)
        
        $('.obj img').animate({'opacity':'0','left':'-300px'})

            $('.obj img:nth-child(1)').stop().delay(0).animate({'opacity':'1','left':'100px'},800,'easeInOutCubic')
            $('.obj img:nth-child(2)').stop().delay(200).animate({'opacity':'1','left':'207px'},800,'easeInOutCubic')


        $('.txt > *').stop().animate({'opacity':'0','top':'-50px'})

            $('.t1').stop().delay(400).animate({'opacity':'1','top':'30px'},800)
            $('.s1').stop().delay(200).animate({'opacity':'1','top':'90px'},800)
            $('.ex1').stop().delay(0).animate({'opacity':'1','top':'130px'},800)
    })

    $('.nav2').click(function(e){
        e.preventDefault()
        
        $('.bar').stop().animate({'left':'165px'},500)

        $('.obj img').animate({'opacity':'0','left':'-300px'})

            $('.obj img:nth-child(3)').stop().delay(0).animate({'opacity':'1','left':'260px'},1000,'easeInOutCubic')
            $('.obj img:nth-child(4)').stop().delay(200).animate({'opacity':'1','left':'30px'},1000,'easeInOutCubic')

        $('.txt > *').stop().animate({'opacity':'0','top':'-50px'})

            $('.t2').stop().delay(400).animate({'opacity':'1','top':'30px'},800)
            $('.s2').stop().delay(200).animate({'opacity':'1','top':'90px'},800)
            $('.ex2').stop().delay(0).animate({'opacity':'1','top':'130px'},800)
    })


    $('.nav3').click(function(e){
        e.preventDefault()
        
        $('.bar').stop().animate({'left':'325px'},500)

        $('.obj img').animate({'opacity':'0','left':'-300px'})

            $('.obj img:nth-child(5)').stop().delay(0).animate({'opacity':'1','left':'10px'},1000,'easeInOutCubic')
            $('.obj img:nth-child(6)').stop().delay(200).animate({'opacity':'1','left':'150px'},1000,'easeInOutCubic')
            $('.obj img:nth-child(7)').stop().delay(400).animate({'opacity':'1','left':'300px'},1000,'easeInOutCubic')
            
        $('.txt > *').stop().animate({'opacity':'0','top':'-50px'})

            $('.t3').stop().delay(400).animate({'opacity':'1','top':'30px'},800)
            $('.s3').stop().delay(200).animate({'opacity':'1','top':'90px'},800)
            $('.ex3').stop().delay(0).animate({'opacity':'1','top':'130px'},800)
    })

    $('.btn').mouseenter(function(){
        $(this).find('img').attr({'src':'mememi/mememi22.png'})
        $(this).find('img').animate({'left':'50px'})
    })
    
    $('.btn').mouseleave(function(){
        $(this).find('img').attr({'src':'mememi/mememi.png'})
        $(this).find('img').animate({'left':'0px'})
    })
});