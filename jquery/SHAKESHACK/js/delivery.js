$(function(){
    // menu
    var gnb = $(".gnb"),
        $menu = gnb.find("ul li");
    $menu.click(function(){
        $menu.children().removeClass("on");
        $(this).children().addClass("on");
    })
    
    $(".image").ready(function(){
        $(".preload").fadeIn(2000);
  });
    //   topBtn
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
  
})