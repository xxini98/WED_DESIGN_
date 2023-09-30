$(function () {
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
