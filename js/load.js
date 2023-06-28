/* aside */
// $(".hamburgerImg").click(function() {
//     // aside.html 파일을 .modal-content 요소에 동적으로 불러오기
//     $(".modal-content").load("./include/aside.html", function() {
//       // 모달 열기
//     $("#modal").css({ display: "block" });
//     $(".slide_menu").css({ display: "block" });
//     });
// });

// $('.aside').load('./include/aside.html');
// $('.modal-content').load('./aside.html');

function openModal() {
    $('body').css('overflow', 'hidden');
    // $('#modal').css('display', 'block');
    $('#modal').stop().slideDown('fast');
  }
  
  function closeModal() {
    $('body').css('overflow', 'auto');
    $('#modal').css('display', 'none');
    // $('#modal').stop().slideUp('fast');
  }
  
  $('.hamburgerImg').click(function() {
    $('.modal-content').load('./include/aside.html', function() {
      openModal();
      $('.header').stop().hide();
    });
  });
  
  // 모달 닫기 버튼 클릭 이벤트 핸들러
  $(document).on('click', '.modal-close', function() {
    closeModal();
    $('.header').stop().show();
  });