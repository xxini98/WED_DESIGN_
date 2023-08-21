$(document).ready(function(){

    //menu
    $("nav > ul > li").mouseover(function(){
        $(".sub").stop().slideDown(200);
    });
    $("nav > ul > li").mouseout(function(){
        $(".sub").stop().slideUp(200);
    });


    //slide
    current = 0;

    setInterval(function(){
        if(current < 2){
            current++;
        }else{
            current = 0;
        }

        let position = current * (-300)+"px"

        $(".list").animate({top:position},3000);
    },3000);  

    
    //tab-menu
    tabBtn = $(".tab-btn > ul > li");
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
    })


    //pop-up
    $(".popup-btn").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });

});