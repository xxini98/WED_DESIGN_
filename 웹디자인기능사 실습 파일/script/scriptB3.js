$(document).ready(function(){
    //menu
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".main > li").mouseout(function(){
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

        let position = current * (-300) + "px"

        $(".list").animate({top:position},3000);
    },3000);

    //popup
    $(".popup-btn").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
});