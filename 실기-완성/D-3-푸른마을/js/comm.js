$(function () {
  let now = 0;
  setInterval(function () {
    let next = (now + 1) % 3;
    $(".slider").eq(now).fadeOut();
    $(".slider").eq(next).fadeIn();
    now = next;
  }, 3000);

  $(".depth1").mouseover(function () {
    $(".depth2").stop().slideDown();
    $(".depth-bg").stop().slideDown();
  });
  $(".depth1").mouseleave(function () {
    $(".depth2").stop().slideUp();
    $(".depth-bg").stop().slideUp();
  });

  $(".tab-tit a").on("click", function () {
    $(".tab").removeClass("on");
  });
  $(".tab .tab-tit").on("click", function () {
    $(this).parent().addClass("on");
  });

  $(".modal-bbs").on("click", function () {
    $(".modalwarp").addClass("active");
  });
  $(".modalbx button").on("click", function () {
    $(".modalwarp").removeClass("active");
  });
});
