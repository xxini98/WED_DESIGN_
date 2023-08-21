$(document).ready(function(){
    //menu
    $(".main li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".main li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    });

    //slide
    $(".list").children("a:gt(0)").hide();
    let current = 0;

    setInterval(function(){
        let next = (current + 1) % 3;
        $(".list").find("a").eq(current).fadeOut();
        $(".list").find("a").eq(next).fadeIn();
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