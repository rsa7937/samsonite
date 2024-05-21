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
    $header.removeClass('active');
  });

  $menu.on('mouseleave', function () {
    $(this).find($gnbDropdownWrap).stop().slideUp(duration);

    $header.addClass('active');
  });

  // Sub
  // Luggage Filter
  const $filterTitle = $('.filter-item');
  const $filterCon = $('.filter-inner');

  $filterTitle.on('click', function () {
    // console.log($faqQ, $(this));
    // 클릭한 질문의 답변이 보여지게
    $(this).find($filterCon).stop().slideToggle(duration);

    $(this).toggleClass('active');
    // 클릭한 놈한테 on클래스 부여
  });
});
