$(function(){
    // 메뉴 클릭시 on클래스 상태를 유지
    $("#menu li").click(function(){
        $("#menu li").removeClass();
        $(this).addClass("on");
    
        var hg = $(window).height();//"section" 높이값 구하기
        var i = $(this).index();    //"li" 인덱스 번호 구하기
        var nowtop = hg * i;        //section 페이지 top위치를 계산
        
    
        
        $("html, body").animate({ "scrollTop" : nowtop }, 700);
    
        });
    
        // 윈도우 창 높이값 구하기
    
        var hg = $(window).height();
        $("section").height(hg);
    
        // 윈도우 창 자동 높이값 구하기
        $(window).resize(function(){
            var hg = $(window).height();
            $("section").height(hg);
            
           
        }); 
    
    
        //마우스 움직임에 반응하는 이미지
        $("section").mousemove(function (e) {
            // 마우스 가로와 세로의 좌표값을 추출
            var posx = e.pageX;
            var posy = e.pageY;
    
            //첫번째 section 이미지를 반응
            $(".p11").css({ "bottom": 0 - (posy / 20), "right" : 0 - (posx / 20) });
            $(".p12").css({ "bottom": 10 + (posy / 20), "left" : 100 + (posx / 20) });
            
            //두번째 section 이미지를 반응
            $(".p21").css({ "bottom": -60 - (posy / 20), "left" : 0 - (posx / 20) });
            $(".p22").css({ "bottom": -120 + (posy / 20), "right" : 30 + (posx / 20) });
    
             //세번째 section 이미지를 반응
             $(".p31").css({ "bottom": 30 - (posy / 20), "right" : 10 - (posx / 20) });
           
             //네번째 section 이미지를 반응
             $(".p42").css({ "bottom": -170 + (posy / 20), "left" : 20 + (posx / 20) });
        });
    });