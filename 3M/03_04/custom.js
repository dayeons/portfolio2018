$(function(){


    $(window).scroll(function(){


        var scrT=$(window).scrollTop()
        //console.log(scrT)

        $('#headernav li a').removeClass('on')
        $('#headernav li').first().find('a').addClass('on')



        $('.wrap section').each(function(){
            var idx=$(this).index()
            
            var secT=$(this).offset().top
            //console.log(scrT,secT,idx)

        
            
            if(scrT>=secT){
                $('#headernav').removeClass()        
                $('#headernav').addClass('on'+idx)

                $('#headernav li a').removeClass('on')
                $('#headernav li').eq(idx+1).find('a').addClass('on')

                $('.wrap section .tt').removeClass('on')
                $(this).find('.tt').addClass('on')

            }
    
             
              

        });//each


    });//scroll












    

});//function