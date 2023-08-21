$(document).ready(function(){
    //menu
    $(".main li").mouseover(function(){
        $(".menu-bg").stop().fadeIn();
        $(".sub").stop().fadeIn();
    });
    $(".main li").mouseout(function(){
        $(".sub").stop().fadeOut();
        $(".menu-bg").stop().fadeOut();
    });

    //slide
    let current = 0;
    $(".list").children("a:gt(0)").hide();

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