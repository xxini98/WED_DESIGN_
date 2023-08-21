$(function () {
  // tab
  $(".gnb .link-depth1").on("click", function () {
    $(".depth1 > li").removeClass("active");
    $(this).parent().addClass("active");
  });
  // modal
  $(".modal-wrap").removeClass("on");
  $(".lst-bbs .modal-bbs").on("click", function () {
    $(".modal-wrap").addClass("on");
  });
  $(".modal button").on("click", function () {
    $(".modal-wrap").removeClass("on");
  });
  // slide
  // let now = 1,
  //   $slide = $(".slide .slide-wrap"),
  //   width = 100;
  // setInterval(function () {
  //   slide();
  // }, 3000);

  // function slide() {
  //   if (now < 3) {
  //     $slide.animate({
  //       left: width * now * -1 + "%",
  //     });
  //     now++;
  //   } else {
  //     $slide.animate({
  //       left: 0,
  //     });
  //     now = 1;
  //   }
  // }

  let now = 1,
    $slide = $(".slide .slide-wrap"),
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
});
