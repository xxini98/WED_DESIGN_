$(function () {
  // sub
  $(".depth1 .link-depth1").mouseover("click", function () {
    $(this).find(".depth2").stop().slideDown();
  });
  $(".depth1 .link-depth1").mouseleave("click", function () {
    $(this).find(".depth2").stop().slideUp();
  });
  // // slide
  let now = 1,
    $slide = $(".slide .slidewrap"),
    width = 100;
  setInterval(function () {
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
  }, 3000);
  $(".lst-bbs .modal-bbs").on("click", function () {
    $(".modalwrap").addClass("on");
  });
  $(".modalbx button").on("click", function () {
    $(".modalwrap").removeClass("on");
  });
});
