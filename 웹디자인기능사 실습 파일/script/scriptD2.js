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

        let slideWidth = $(window).width() - 430;
        let position = current * slideWidth * (-1) + "px";

        $(".slide .list").animate({left:position},4000);

    },4000);



    //popup
    $(".popup-btn").click(function(){
        $(".modal").show();
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".modal").hide();
        $(".popup").hide();
    });
});