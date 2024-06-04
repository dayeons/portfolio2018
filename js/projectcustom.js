$(function(){
    var swiper = new Swiper('.project-container', {
     slidesPerView: 3,
     spaceBetween: 200,

       centeredSlides: true,
       direction: 'vertical',
       
       pagination: {
           el: '.swiper-pagination',
           type: 'fraction',
       },
       scrollbar: {
           el: '.swiper-scrollbar',
           dragSize: '50px',

       },
       mousewheel: true,  

   });
   $('.processiframe').click(function(e){
               e.preventDefault()
               var href=$(this).attr('href')
               //alert(href)

               $('iframe').attr('src',href)
               
               $('.iframe_display').animate({'top':'0%'},1000)

               $('.move').addClass('on')
           

               

           })
           $('.cancel').click(function(){
               $('.iframe_display').animate({'top':'100%'},1000)
               $('.move').removeClass('on')
           })

           $("#design1").colorbox({rel:'group1', width:"33%",});
           $("#design2").colorbox({rel:'group2'});


           
   })