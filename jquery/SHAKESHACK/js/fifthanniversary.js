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
    
})