$(function(){
    // menu
    var gnb = $(".gnb"),
        $menu = gnb.find("ul li");
    $menu.click(function(){
        $menu.children().removeClass("on");
        $(this).children().addClass("on");
    })
    // 컨텐츠
    var $greenBtn = $(".greenbox a"),
        $contents = $("#main").find("article");
    $contents.eq(0).show().siblings().hide();
    $contents.find(".productList").hide();

    $greenBtn.each(function(){
        var idx = $(this).index() + 1;
        $(this).find("img").attr({src:"images/food&drink/" + idx + ".png"});
    })
    $greenBtn.on({
        mouseover:function(){
            var idx = $(this).index() + 1;
            $(this).find("img").attr({src:"images/food&drink/" + idx + "_1.png"});
        },
        mouseout:function(){
            var idx = $(this).index() + 1;
            $(this).find("img").attr({src:"images/food&drink/" + idx + ".png"});
        },
        click:function(e){
            e.preventDefault();
            var idx = $(this).index();
            $(this).find("img").attr({src:"images/food&drink/" + (idx + 1) + "_1.png"});
            $contents.eq(idx).show().siblings().hide();
        }
    })
    var $detailBtn = $(".button");
    $detailBtn.click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on").siblings(".productList").slideUp();
        }else {
            $(this).addClass("on").siblings(".productList").slideDown();
        }
        
    })
    // topBtn
    var topBtn = $(".top");
    topBtn.hide();
    topBtn.click(function(e){
        e.preventDefault;
        if($(window).scrollTop() != 0){
            $('html, body').stop().animate({"scrollTop":0},500);
        }
    })
    $(window).scroll(function(){
        var docElem = $(document),
            docElemHeight = docElem.height(),
            sct,
            offset;
        if(docElem){
            sct = $(this).scrollTop();
            offset = docElemHeight / 8;
            if(sct >= offset){
                topBtn.fadeIn();
            }else {
                topBtn.fadeOut();
            }
        }
        
    })
});