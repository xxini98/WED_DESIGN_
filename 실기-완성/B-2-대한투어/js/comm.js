$(function () {
  let now = 1,
    $slide = $(".slide .slideWrap"),
    height = 100;
  setInterval(function () {
    slide();
  }, 3000);
  function slide() {
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
  }
  // $(".lst-bbs .modal-bbs").on("click",function(){
  //   $(".modalWrap").addClass("on")
  // })
  // $(".modal-button button").on("click",function(){
  //   $(".modalWrap").removeClass("on")
  // })

  // $("nav > ul > li, .sub_back ").mouseenter(function () {
  //   $(".submenu, .sub_back ").stop().slideDown(400);
  // });
  // $("nav > ul > li, .sub_back ").mouseleave(function () {
  //   $(".submenu, .sub_back ").stop().slideUp(100);
  // });

  $(".link-depth1").mouseenter(function () {
    $(".depth2, .subBg").stop().slideDown(200);
  });
  $(".link-depth1").mouseleave(function () {
    $(".depth2, .subBg").stop().slideUp(400);
  });
});
