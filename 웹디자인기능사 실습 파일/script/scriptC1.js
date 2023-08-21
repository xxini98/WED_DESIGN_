$(document).ready(function(){
    //menu
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".main > li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    });

    //slide
    $(".slide").children("img:gt(0)").hide();
    let current = 0;

    setInterval(function(){
        let next = (current + 1) % 3;
        $(".slide").find("img").eq(current).fadeOut();
        $(".slide").find("img").eq(next).fadeIn();
        current = next;
    },4000);


    //tab-menu
    tabBtn = $(".tab-btn > li");
    tabCont = $(".tab-cont > div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
        e.preventDefault();
        let target = $(this);
        let index = target.index();
        
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.hide();
        tabCont.eq(index).show();
    });

    //popup
    $(".popup-btn").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
});