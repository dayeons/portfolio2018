$(function(){
    $('.level1').click(function(e){
      e.preventDefault()
        $('.level2').slideUp()
        // $(this).find('.level2').stop().slideDown()

        $(this).find('.level2:not(:animated)').slideDown()
                               //: 상태연산자  슬라이드 애니메이션 
                               //내려온게 아닌가만 슬라이드 다운해라
                               //두번 걸떡대게 안하게
    })












});