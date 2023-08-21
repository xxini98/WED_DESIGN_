$(document).ready(function(){

    //menu
    $(".main").mouseover(function(){
        $(".sub").stop().slideDown();
        $(".menu-bg").stop().slideDown();
    });
    $(".main").mouseout(function(){
        $(".sub").stop().slideUp();
        $(".menu-bg").stop().slideUp();
    });

    //slide
    let current = 0;
    setInterval(function(){
        if(current < 2){
            current++;
        }else{
            current = 0;
        }

        let position = current * (-1200) + "px"

        $(".list").animate({left:position},4000);
    },4000);

    //tab-menu
    tabBtn = $(".tab-btn > ul > li");
    tabCont = $(".tab-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
        e.preventDefault();
        let target = $(this);
        let index = target.index();
        //alert(index);
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