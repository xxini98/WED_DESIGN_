$(document).ready(function(){
    //menu
    $(".main li").mouseover(function(){
        $(".sub").stop().slideDown();
        $(".menu-bg").stop().slideDown();
    });
    $(".main li").mouseout(function(){
        $(".sub").stop().slideUp();
        $(".menu-bg").stop().slideUp();
    });


    //slide
    $(".slide .list").children("img:gt(0)").hide();
    let current = 0;

    setInterval(function(){
        let next = (current + 1) % 3;
        $(".list").find("img").eq(current).fadeOut();
        $(".list").find("img").eq(next).fadeIn();
        current = next;
    },4000);


    //popup
    $(".popup-btn").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });

});