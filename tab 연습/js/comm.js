$(function () {
  // $("a").click(function (e) {
  //   e.preventDefault();
  // });
  // let tabBtn = $(".tab-btn > li");
  // let tabCont = $(".tab-contents > ul");
  // tabCont.hide().eq(0).show();
  // tabBtn.click(function () {
  //   let index = $(this).index();
  //   $(this).addClass("active").siblings().removeClass("active");
  //   tabCont.eq(index).show().siblings().hide();
  // });
  // $("tab-btn li").on("click", function () {
  //   $("tab-btn").removeClass("active");
  // });

  $(".tab-tit a").on("click", function () {
    $(".tab").removeClass("on");
  });
  $(".tab-tit").on("click", function () {
    $(this).parents(".tab").addClass("on");
  });
});
