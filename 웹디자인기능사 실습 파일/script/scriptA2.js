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
    current = 0;
    
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
        $(".modal").show();
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".modal").hide();
        $(".popup").hide();
    });

});