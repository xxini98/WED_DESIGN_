$(function () {
  // 상하 슬라이드
  // let now = 1,
  //   $slide = $(".slide .slideWrap"),
  //   height = 100;
  // setInterval(function () {
  //   slide();
  // }, 3000);
  // function slide() {
  //   if (now < 3) {
  //     $slide.animate({
  //       top: height * now * -1 + "%",
  //     });
  //     now++;
  //   } else {
  //     $slide.animate({
  //       top: 0,
  //     });
  //     now = 1;
  //   }
  // }

  // // 좌우 슬라이드
  // let now = 1,
  //   $slide = $(".slide .slideWrap"),
  //   width = 100;
  // setInterval(function () {
  //   slide();
  // }, 3000);
  // function slide() {
  //   if (now < 3) {
  //     $slide.animate({
  //       left: width * now * -1 + "%",
  //     });
  //     now++;
  //   } else {
  //     $slide.animate({
  //       left: 0,
  //     });
  //     now = 1;
  //   }
  // }

  // fade in out
  let now = 0;
  setInterval(function () {
    let next = (now + 1) % 3;

    $(".slider").eq(now).fadeOut();
    $(".slider").eq(next).fadeIn();

    now++;
  }, 3000);

  // $(".gnb .link-depth1").mouseover(function () {
  //   $(".depth1 > li ").removeClass("on");
  //   $(this).addClass("on");
  // });
  // $("header .main_menu>ul>li")
  //   .mouseover(function () {
  //     $(this).children("ul").stop().slideDown();
  //   })
  //   .mouseout(function () {
  //     $(this).children("ul").stop().slideUp();
  //   });

  $(".depth1 .link-depth1").mouseover(function () {
    $(this).children(".depth2").stop().slideDown();
  });
  $(".depth1 .link-depth1").mouseout(function () {
    $(this).children(".depth2").stop().slideUp();
  });
});
