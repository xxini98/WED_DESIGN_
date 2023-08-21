$(document).ready(function(){
    //menu
    $(".main li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".main li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    });



    //slide
    let current = 0;

    setInterval(function(){
        if(current < 2){
            current++;
        }else{
            current = 0;
        }

        let position = current * (-400) + "px"

        $(".list").animate({top:position},4000);
    },4000);


   
    


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
    });





    //popup
    $(".popup-btn").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });



});