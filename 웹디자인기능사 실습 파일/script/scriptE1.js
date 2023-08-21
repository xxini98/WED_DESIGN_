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

        let position = current * (-100) + "%"
        $(".list").animate({left:position}, 4000);
        
    }, 4000);


    //popup
    $(".popup-btn").click(function(){
        $(".modal, .popup").show();
    });
    $(".close").click(function(){
        $(".modal, .popup").hide();
    });
});