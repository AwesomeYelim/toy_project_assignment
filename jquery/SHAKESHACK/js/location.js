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

    $(".main a").click(function(){
      $(".sec1").fadeOut();
      $(".sec2").fadeIn(2000);
    });
    
    // 상세보기
    var detailBtn = $(".box"),
        sec3 = $(".sec3"),
        maps = $(".maps"),
        detailPage = $(".sec3 > div");
        sec3.hide()
    detailBtn.click(function(){
        sec3.show();
        var idx = $(this).index();
        maps.eq(idx).show().siblings().hide();
        detailPage.eq(idx).show().siblings().hide();
    })

    // top
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



