$(function () {
  $(".depth1 li").mouseover(function () {
    $(this).children(".depth2").stop().slideDown();
  });
  $(".depth1 li").mouseleave(function () {
    $(this).children(".depth2").stop().slideUp(300);
  });
});
