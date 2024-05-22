// DOM 구조가 파악 되면 실행
$(function () {
  // 대상을 변수에 저장
  // Main Common
  // Header
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $gnbDropdownWrap = $('.gnb-dropdown-wrap');

  const duration = 300;

  $menu.on('mouseenter', function () {
    $(this).find($gnbDropdownWrap).stop().slideDown(duration);
    $header.addClass('active');
  });

  $menu.on('mouseleave', function () {
    $(this).find($gnbDropdownWrap).stop().slideUp(duration);

    $header.removeClass('active');
  });

  // Sub
  // Luggage Filter
  const $filterTitle = $('.filter-con .filter-item .filter-sub-title');

  $filterTitle.on('click', function () {
    // console.log($faqQ, $(this));
    // 클릭한 질문의 답변이 보여지게
    // console.log('제발');
    $(this).siblings().stop().slideToggle(duration);

    $(this).toggleClass('active');
  });

  // 필터 요소 누르면 색 활성화
  const $filterItem = $('.filter-con .filter-item .filter-option-list li a');
  $filterItem.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
});
