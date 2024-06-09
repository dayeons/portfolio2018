$(function () {
  $(" #da-thumbs .grid-item ").each(function () {
    $(this).hoverdir();
  });

  $(" #da-thumbs .grid-item a ").click(function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    //alert(href)

    $("iframe").attr("src", href);

    $(".iframe_display").animate({ left: "0%" }, 1000);

    $(".move").addClass("on");
  });
  $(".move").click(function () {
    $(".iframe_display").animate({ left: "50%" }, 1000);
    $(".move").removeClass("on");
  });
  $(".nav li").click(function () {
    var idx = $(this).index();
    $(".nav li").removeClass("on");
    $(".nav li").eq(idx).addClass("on");
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

  $(".nav li").click(function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
});
