$(function () {
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
});
