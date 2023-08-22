$(function () {
  //   // nav
  $(".depth1 > li").mouseover(function () {
    $(this).find(".depth2").stop().slideDown();
  });
  $(".depth1 li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp();
  });
  //   // fade in out
  let now = 0;
  setInterval(function () {
    let next = (now + 1) % 3;
    $(".slider").eq(now).fadeOut();
    $(".slider").eq(next).fadeIn();
    now = next;
  }, 3000);

  //   // tab
  $(".tab .tab-tit").on("click", function () {
    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });

  // modal
  $(".lst-bbs .bbs-modal").on("click", function () {
    $(".modal").addClass("on");
  });
  $(".modal-wrap button").on("click", function () {
    $(".modal").removeClass("on");
  });
});
