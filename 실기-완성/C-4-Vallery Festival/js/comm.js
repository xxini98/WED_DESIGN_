$(function () {
  //   // sub menu
  $(".link-depth1").mouseover(function () {
    $(this).find(".depth2").stop().slideDown(400);
  });
  $(".link-depth1").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp(100);
  });

  //   // slide
  let now = 1,
    $slide = $(".slide .slidewrap"),
    width = 100;

  setInterval(function () {
    slide();
  }, 3000);

  function slide() {
    if (now < 3) {
      $slide.animate({
        left: width * now * -1 + "%",
      });
      now++;
    } else {
      $slide.animate({
        left: 0,
      });
      now = 1;
    }
  }

  //   // modal
  $(".lst-bbs .bbs-modal").on("click", function () {
    $(".modal").addClass("active");
  });
  $(".modalbox button").on("click", function () {
    $(".modal").removeClass("active");
  });
});
