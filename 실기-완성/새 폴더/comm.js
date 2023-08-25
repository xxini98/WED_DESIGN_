$(function () {
  // up down

  //   let now = 1,
  //     $slide = $(".slide .slidewrap"),
  //     height = 100;

  //   setInterval(function () {
  //     if (now < 3) {
  //       $slide.animate({
  //         top: height * now * -1 + "%",
  //       });
  //       now++;
  //     } else {
  //       $slide.animate({
  //         top: 0,
  //       });
  //       now = 1;
  //     }
  //   }, 3000);

  // // up down

  // let now = 1,
  //   $slide = $(".slide .slidewrap"),
  //   height = 100;

  // setInterval(function () {
  //   if (now < 3) {
  //     $slide.animate({
  //       top: height * now * -1 + "%",
  //     });
  //     now++;
  //   } else {
  //     $slide.animate({
  //       top: 0,
  //     });
  //     now = 1
  //   }
  // }, 3000);

  // fade in out

  // let now = 0;
  // setInterval(function () {
  //   let next = (now + 1) % 3;

  //   $(".slider").eq(now).fadeOut();
  //   $(".slider").eq(next).fadeIn();

  //   now = next;
  // }, 3000);

  let now = 1,
    $slide = $(".slide .slidewrap"),
    height = 100;

  setInterval(function () {
    if (now < 3) {
      $slide.animate({
        top: height * now * -1 + "%",
      });
      now++;
    } else {
      $slide.animate({
        top: 0,
      });
      now = 1;
    }
  }, 3000);
});
