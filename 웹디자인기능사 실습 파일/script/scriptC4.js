$(document).ready(function(){
    //menu
    $(".main li").mouseover(function(){
        $(this).find(".sub").stop().slideDown(600);
    });
    $(".main li").mouseout(function(){
        $(this).find(".sub").stop().slideUp(600);
    });


    //slide
    let current = 0;

    setInterval(function(){
        if(current < 2){
            current++;
        }else{
            current = 0;
        }

        let position = current * (-800) +"px"

        $(".list").animate({left:position},4000);
    },4000);


    //popup
    $(".active").click(function(){
        $(".modal").show();
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".modal").hide();
        $(".popup").hide();
    });
});