$(function(){

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    centeredSlides:true,
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true ,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   
  });

  

  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
     








});//function