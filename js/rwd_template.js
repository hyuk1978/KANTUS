// $('.menu_toggle_btn').click(function(){
//     $('.gnb').stop().toggle();
// })
// 윈도우 로딩시
$(document).ready(() => {
    applyScrollEffect();
});

$(window).on("load", () => {
    applyScrollEffect();
});

$(window).scroll(() => {
    applyScrollEffect();
});

function applyScrollEffect() {
    const scrollPosition = $(window).scrollTop();
    const gnbMenu = $('.header');

    if (scrollPosition > 0) {
        gnbMenu.css({backgroundColor:"hsla(0,0%,100%,.8)", backdropFilter:"blur(7px)"});
        $(".gnb li").css({color:"#000"});
        if ($(".logo img").attr('src') !== './images/lemon/logo.png') {
            $(".logo img").attr('src', './images/lemon/logo.png');
            $(".container .m_gnb img").attr('src', './images/lemon/hamburger.png');
        }
    } else {
        gnbMenu.css({backgroundColor:"transparent" , backdropFilter:"none"});
        $(".gnb li").css({color:"#fff"});
        if ($(".logo img").attr('src') !== './images/lemon/logo-w.png') {
            $(".logo img").attr('src', './images/lemon/logo-w.png');
            $(".container .m_gnb img").attr('src', './images/lemon/hamburger-w.png');
        }
    }
}

function setImgHeight() {
    var imgDiv = document.querySelector('.img1');
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var imgHeight = Math.floor((viewportWidth * 0.6) / (16 / 9)); // 너비의 50%로 이미지의 높이 계산

    // imgDiv.style.height = imgHeight + 'px';
}
  // 페이지 로드 및 창 크기 변경 시 이미지 높이 설정
window.addEventListener('DOMContentLoaded', setImgHeight);
window.addEventListener('resize', setImgHeight);

// a태그 막기
$("a[href='#']").click(function(e) {
    e.preventDefault();
});