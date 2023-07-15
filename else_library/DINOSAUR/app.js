const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const menu = intro.querySelector('ul li');

//섹션 끝
const section = document.querySelector('section');
const end = section.querySelector('h1');

//스크롤 매직~
const controller = new ScrollMagic.Controller();

//비디오
let scene = new ScrollMagic.Scene({
    duration: 5100,// 비디오 길이설정
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

 

//텍스트 애니메이션
const textAnim = TweenMax.fromTo(text, 1.5, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 1500,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);




//비디오 애니메이션
let accelamount = 0.4;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay);
    video.currentTime = delay;
}, 50); //프레임수에 따라 찍히는 기준

// 공룡 클릭시


let dinosaur1 = document.querySelector('.dinosaur1')
let d_text1 = document.querySelector('.d_text1')
let video_d1 = document.querySelector('.v_dino1')

let dinosaur2 = document.querySelector('.dinosaur2')
let d_text2 = document.querySelector('.d_text2')
let video_d2 = document.querySelector('.v_dino2')

let dinosaur3 = document.querySelector('.dinosaur3')
let d_text3 = document.querySelector('.d_text3')
let video_d3 = document.querySelector('.v_dino3')

function Click1(){
    video_d1.classList.toggle('on')
    d_text1.classList.toggle('on')
    d_text2.classList.remove('on')
    d_text3.classList.remove('on')
    video_d2.classList.remove('on')
    video_d3.classList.remove('on')
};
function Click2(){
    video_d2.classList.toggle('on')
    d_text2.classList.toggle('on')
    d_text1.classList.remove('on')
    d_text3.classList.remove('on')
    video_d1.classList.remove('on')
    video_d3.classList.remove('on')
};
function Click3(){
    video_d3.classList.toggle('on')
    d_text3.classList.toggle('on')
    d_text1.classList.remove('on')
    d_text2.classList.remove('on')
    video_d1.classList.remove('on')
    video_d2.classList.remove('on')
};

dinosaur1.addEventListener('click', Click1 )
dinosaur2.addEventListener('click', Click2 )
dinosaur3.addEventListener('click', Click3 )
