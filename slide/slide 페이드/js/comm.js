$(function () {
  let now = 0;
  setInterval(function () {
    let next = (now + 1) % 3;

    $(".slider").eq(now).fadeOut();
    $(".slider").eq(next).fadeIn();

    now = next;
  }, 3000);
});
