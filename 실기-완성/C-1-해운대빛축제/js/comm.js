$(function () {
  // submenu
  $(".depth1 .link-depth1").mouseover(function () {
    $(this).children(".depth2").stop().slideDown();
  });
  $(".depth1 .link-depth1").mouseleave(function () {
    $(this).children(".depth2").stop().slideUp();
  });
  // // slide
  let now = 0;
  setInterval(function () {
    let next = (now + 1) % 3;
    $(".slider").eq(now).fadeOut();
    $(".slider").eq(next).fadeIn();
    now = next;
  }, 3000);
  // // tab
  $(".tab .tab-tit").on("click", function () {
    $(".tab").removeClass("on");
    $(this).parents(".tab").addClass("on");
  });
  // // modal
  $(".lst-bbs .bbs-modal").on("click", function () {
    $(".modalwrap").addClass("active");
  });
  $(".modal button").on("click", function () {
    $(".modalwrap").removeClass("active");
  });
});
