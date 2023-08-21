$(document).ready(function(){
    //menu
    $(".main > li").mouseover(function(){
        $(".sub, .menu-bg").stop().fadeIn();
    });
    $(".main > li").mouseout(function(){
        $(".sub, .menu-bg").stop().fadeOut();
    });


    //slide
    let current = 0;
    $(".list").children("a:gt(0)").hide();

    setInterval(function(){
        let next = (current + 1) % 3;
        $(".slide .list").find("a").eq(current).fadeOut();
        $(".slide .list").find("a").eq(next).fadeIn();
        current = next;
    },4000);



    //tab-menu
    let tabBtn = $(".tab-btn ul li");
    let tabCont = $(".tab-cont div");
    
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