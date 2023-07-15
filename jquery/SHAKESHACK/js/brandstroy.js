$(function(){
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
    //애니메이션 추가
    $(window).scroll(function(){
        var sct = $(this).scrollTop(),
            cont1Amount = $(".cont1").offset().top - 500,
            cont2Amount = $(".cont2").offset().top - 500,
            cont3Amount = $(".goodnSect").offset().top - 500,
            cont4Amount = $(".goodNeighCont").offset().top - 500;
        if(sct >= cont1Amount){
            $(".cont1").find("img,h4,p").addClass("on")
        }
        if(sct >= cont2Amount){
            $(".cont2").find("img,h4,p").addClass("on")
        }
        if(sct >= cont3Amount){
            $(".goodnSect").find(".goodnConItem").addClass("on")
        }
        if(sct >= cont4Amount){
            $(".goodNeighCont").find(".box").addClass("on")
        }
    })
}) // end