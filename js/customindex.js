$(function () {
  //main=====================================================
  //main 마우스오버
  $("#main div").mouseover(function () {
    $(this).stop().animate({
      letterSpacing: "10px",
      fontSize: "13vw",
    });
  });

  $("#main-1").mouseover(function () {
    $("#main").stop().animate({ left: "20%" }, 1000);
    $("#main a,#aboutme a,h1").stop().animate({ color: "#4055B3" });
    $(".intro").stop().animate({ "background-color": "#FFE38F" });
    $("#main-1").css({ opacity: "1" });
  });

  $("#main-2").mouseover(function () {
    $("#main a,#aboutme a,h1").stop().animate({ color: "#e84644" });
    $(".intro").stop().animate({ "background-color": "#f1ede7" });
    $("#main-2").css({ opacity: "1" });
  });

  $("#main-3").mouseover(function () {
    $("#main").stop().animate({ left: "-25%" }, 1000);
    $("#main a,#aboutme a,h1").stop().animate({ color: "#d6e7d0" });
    $(".intro").stop().animate({ "background-color": "#6f97ce" });
    $("#main-3").css({ opacity: "1" });
  });
  $("#aboutme a").mouseover(function () {
    $(this).animate({ color: "#000" });
  });

  //main 마우스아웃
  $("#main div").mouseout(function () {
    $(this).stop().animate({
      letterSpacing: "0px",
      fontSize: "12vw",
      opacity: "0.7",
    });
    $("#main").stop().animate({ left: "0%" }, 1000);
    $(".intro").stop().animate({ "background-color": "#f2efe8" });
    $("#main a,#aboutme a,h1").stop().animate({ color: "#abafa0" });
  });

  $("#aboutme a").mouseout(function () {
    $(this).stop().animate({ color: "#abafa0" });
  });

  //about

  //iframe======================================================

  $("#main div a").click(function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    //alert(href)

    $("iframe").attr("src", href);
    $(".PORT").animate({ top: "0%" }, 1000, "easeOutCubic");
  });

  $("#aboutme a").click(function (e) {
    e.preventDefault();
    var href = $(this).attr("href");

    $("iframe").attr("src", href);
    $(".PORT").animate({ top: "0%" }, 1000, "easeOutCubic");
  });

  $(".closed").click(function () {
    $(".PORT").animate({ top: "100%" }, 1000, "easeOutCubic");
  });

  // graphic ================================================
  $(" #graphicwrap .grid-item ").each(function () {
    $(this).hoverdir();
  });

  $(".graphicwrap").mCustomScrollbar({
    theme: "dark",
  });

  $(".graphicnav li").click(function () {
    var idx = $(this).index();
    $(".graphicnav li").removeClass("on");
    $(".graphicnav li").eq(idx).addClass("on");
  });

  var $grid = $(".grid").imagesLoaded(function () {
    $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer",
      },
    });
  });

  $(".graphicnav li").click(function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  $(".show").colorbox({
    rel: "show",
    transition: "fade",
    width: "50%",
    height: "75%",
  });

  //MOBILE =================================================

  //mobile 마우스오버
  $("#mobile div").mouseover(function () {
    $(this).stop().animate({
      letterSpacing: "5px",
      fontSize: "5em",
    });
  });

  $(".m_project").mouseover(function () {
    $("#mobile div a").stop().animate({ color: "#4055B3" });
    $(".intro").stop().animate({ "background-color": "#FFE38F" });
    $(".m_project").css({ opacity: "1" });
  });

  $(".m_work").mouseover(function () {
    $("#mobile div a").stop().animate({ color: "#e84644" });
    $(".intro").stop().animate({ "background-color": "#f1ede7" });
    $(".m_work").css({ opacity: "1" });
  });

  $(".m_graphic").mouseover(function () {
    $("#mobile div a").stop().animate({ color: "#d6e7d0" });
    $(".intro").stop().animate({ "background-color": "#6f97ce" });
    $(".m_graphic").css({ opacity: "1" });
  });
  $(".m_about").mouseover(function () {
    $("#mobile div a").stop().animate({ color: "#e0a531" });
    $(".intro").stop().animate({ "background-color": "#c6d2d2b3" });
    $(".m_about").css({ opacity: "1" });
  });

  //mobile 마우스아웃
  $("#mobile div").mouseout(function () {
    $(this).stop().animate({
      letterSpacing: "0px",
      fontSize: "4em",
      opacity: "0.5",
    });
    $(".intro").stop().animate({ "background-color": "#f2efe8" });
    $("#mobile div a").stop().animate({ color: "#abafa0" });
  });
}); //function

//work=====================================================

var swiper = new Swiper(".work-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
  },
});
