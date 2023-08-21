$(function () {
  // slide
  let now = 1,
    $slide = $(".slide .slideWrap"),
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

  // tab
  $(".tab .tab-tit").on("click", function () {
    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });

  // modal
  $(".lst-bbs .modal-bbs").on("click", function () {
    $(".modalWrap").addClass("on");
  });
  $(".modal-button button").on("click", function () {
    $(".modalWrap").removeClass("on");
  });
});
