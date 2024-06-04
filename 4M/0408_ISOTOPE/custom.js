$(function(){
    $('.nav li').click(function(){
       var idx=$(this).index()
        $('.nav li').removeClass('on')
        $('.nav li').eq(idx).addClass('on')
    })


    var $grid = $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
        
            itemSelector: '.grid-item',
 
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
                        }
        })
    });


    $('.nav li').click(function(){


        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });


    })



    $(".next").click(function(e){
        e.preventDefault()
        $(".main ul").animate({'margin-left':'-200%'},1000,function(){
            $(".main ul li").first().appendTo(".main ul")
            $(".main ul").css({'margin-left':'-100%'})
        })
      
    });

    $(".prev").click(function(e){
        e.preventDefault()
        $(".main ul").animate({'margin-left':'0%'},1000,function(){
            $(".main ul li").last().prependTo(".main ul")
            $(".main ul").css({'margin-left':'-100%'})
        })
    });


});//function