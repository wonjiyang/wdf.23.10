// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
    

//   });

// html 페이지를 로드한 후 실행
// $(document).ready(function() {})
$(function() {
  // gnb
  $('#gnb .depth1 > li').on('mouseenter', function () {
    $(this).find('.depth2').stop().slideDown(300);
  })

  // modal
  // .list-bbs li:first child 클릭했을 때
  $('.list-bbs li:first-child').on('click', function () {
    // .modal 열기
    // #modal 보이게
    $('#modal').show();
  });
  // #modal.btn-close 클릭했을 때
  $('#modal .btn-close').on('click', function () {
    // .modal 닫기
    // #modal 감추기
    $('#modal').hide();
  })
  
  // tabs
  // 기본셋팅
  // #tabs .sec-g에 있는 .active를 찾아서 삭제
  $('#tabs .sec-g').removeClass('active');
  // #tabs .sec-g:first-child에 .active를 찾아서 추가
  $('#tabs .sec-g:first-child').addClass('active');
  //#tabs .sec-tit를 클릭했을 때
  $('#tabs .sec-tit').on('click', function() {
    // #tabs .sec-g에 있는 .active를 찾아서 삭제
    $('#tabs .sec-g').removeClass('active');
    // this의 부모에게 .active를 찾아서 추가
    $(this).parent().addClass('active');
  })
})