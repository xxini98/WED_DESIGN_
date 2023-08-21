$(function () {
  // tab
  let currentIndex = 0;
  setInterval(function () {
    let nextIndex = (currentIndex + 1) % 3;

    $(".slider").eq(currentIndex).fadeOut();
    $(".slider").eq(nextIndex).fadeIn();

    // currentIndex++;

    currentIndex = nextIndex
  }, 3000);
});
