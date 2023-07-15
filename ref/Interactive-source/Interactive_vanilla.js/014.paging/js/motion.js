
let button;
let contentWrap;
let imgArr;
let title;
let pageNum = 0;
let totalNum = 0;

window.onload = function(){
    contentWrap = document.querySelectorAll('.contentWrap');
    totalNum = contentWrap.length; //전체 페이지 갯수

    button = document.querySelectorAll('button');

    imgArr = document.querySelectorAll("img");
    title = document.querySelectorAll("h1");

    button[0].addEventListener("click", function(){
        prevFunc();
    })
    button[1].addEventListener("click", function(){
        nextFunc();
    })
    pageSetFunc();
}

function prevFunc(){
    
    if(pageNum > 0){
        //pageNum 이 0보다 크면 계속 빼줘. 
        pageNum --;
    }else{
        //0보다 작아지면 totalNum 을 넣어줘.
        pageNum = totalNum -1;
    }
    pageSetFunc();
}

function nextFunc(){
    
    if(pageNum < totalNum - 1){
        //pageNum 이 컨텐츠랩 갯수보다 작다면 계속 더해줘~!
        //pageNum 이 0부터 시작하니까 0 ~ 2 만 나와야해서 totalNum - 1을 해준겁니다.
        pageNum ++;
    }else{
        pageNum = 0;
    }
    pageSetFunc();
}

function pageSetFunc(){
    console.log(pageNum)
    //전체 리셋
    for(var i=0; i<contentWrap.length; i++){
        contentWrap[i].classList.remove("active");
    }
    //내부 이미지도 일단 전부 리셋
    for(var i=0; i<imgArr.length; i++){
        imgArr[i].classList.remove("active");
    }

    //선택된 컨텐츠랩 활성
    contentWrap[pageNum].classList.add("active");
    for(var i=0; i<4; i++){
        //활성된 컨텐츠랩 내부 이미지들 활성
        contentWrap[pageNum].getElementsByTagName("img")[i].classList.add("active");
    }
    //페이지 넘버 교체
    title[0].innerHTML = "PAGE : " + (pageNum+1) ;
}

