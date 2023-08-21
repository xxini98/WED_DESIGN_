$(function () {
  // 상하 슬라이드
  // let now = 1,
  //   $slide = $(".slide .slideWrap"),
  //   height = 100;
  // setInterval(function () {
  //   slide();
  // }, 3000);
  // function slide() {
  //   if (now < 3) {
  //     $slide.animate({
  //       top: height * now * -1 + "%",
  //     });
  //     now++;
  //   } else {
  //     $slide.animate({
  //       top: 0,
  //     });
  //     now = 1;
  //   }
  // }
  // let now = 1,
  //   $slide = $(".slide .slideWrap"),
  //   height = 100;
  // setInterval(function () {
  //   slide();
  // }, 3000);
  // function slide() {
  //   if (now < 3) {
  //     $slide.animate({
  //       top: height * now * -1 + "%",
  //     });
  //     now++;
  //   } else {
  //     $slide.animate({
  //       top: 0,
  //     });
  //     now = 1;
  //   }
  // }
  // 죄우 슬라이드
  // let now = 1,
  //   $slide = $(".slide .slideWrap"),
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
  // let now = 1,
  //   $slide = $(".slide .slideWrap"),
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

  // fade in & out
  // let now = 0;
  // setInterval(function () {
  //   let next = (now + 1) % 3;

  //   $(".slider").eq(now).fadeOut();
  //   $(".slider").eq(next).fadeIn();

  //   now++;
  // }, 3000);

  let now = 0;
  setInterval(function () {
    let next = (now + 1) % 3;

    $(".slider").eq(now).fadeOut();
    $(".slider").eq(next).fadeIn();

    now++;
  }, 3000);
});
