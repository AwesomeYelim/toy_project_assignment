$(function(){
    // menu
    var gnb = $(".gnb"),
        $menu = gnb.find("ul li");
    $menu.click(function(){
        $menu.children().removeClass("on");
        $(this).children().addClass("on");
    })
    // scroll
    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        var sec2Sct = $("#section2"),
            sec3Sct = $("#section3"),
            beginImg = $(".begin"),
            excuted = false;

        if(!excuted){
            if(sec2Sct.hasClass("active")){
                beginImg.addClass("fadeIn");
                $(".beginTxt").addClass("fadeIn");
                excuted = true;
            }
            if(sct == sec3Sct){
                $(".contLeftbg, .contLeft").addClass("on");
                excuted = true;
            }
        }
    })
    
    // carousel
    var carousel = $(".carouselList"),
        carouselItem = carousel.find("a"),
        currentIdx = 0;
        console.log(carouselItem),
        carouselCount = carouselItem.length;
    carouselItem.eq(0).show().siblings().hide();
    setInterval(function(){
        var next = (currentIdx + 1) % carouselCount;
        $(carouselItem).eq(currentIdx).fadeOut();
        $(carouselItem).eq(next).fadeIn();
        currentIdx = next;
    },6000)
    // blockquo
    var blockQuo = $(".blockquo"),
        blockQuoCont = $(".ushg_blockQuo");
        
    $(blockQuo).hover(function(){
        blockQuoCont.addClass("on")
    },function(){
        blockQuoCont.removeClass("on")
    })

    // window resize
    $(window).resize(function(){
        if($(this).width() < 769){
            $('div#fullpage').attr('id', 'nonthumb');
        }
    })
    

})