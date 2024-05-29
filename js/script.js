// DOM 구조가 파악 되면 실행
$(function () {
  // 대상을 변수에 저장
  // Main Common
  // Header
  const $header = $('header');
  // const $menu = $('.gnb > li');
  const $menu = $(
    '.gnb > li:nth-child(1), .gnb > li:nth-child(2), .gnb > li:nth-child(3), .gnb > li:nth-child(4), .gnb > li:nth-child(5) '
  );
  const $menuShort = $('.gnb > li:nth-child(6)');

  const $menu1 = $('.gnb > li:nth-child(1)');
  const $menu2 = $('.gnb > li:nth-child(2)');
  const $menu3 = $('.gnb > li:nth-child(3)');
  const $menu4 = $('.gnb > li:nth-child(4)');
  const $menu5 = $('.gnb > li:nth-child(5)');
  const $gnbDropdownWrap = $('.gnb-dropdown-wrap');

  const duration = 300;

  // Luggage 부터 Brand까지
  // $menu1
  //   .add($menu2)
  //   .add($menu3)
  //   .add($menu4)
  //   .add($menu5)
  //   .on('mouseenter', function () {
  //     $(this).find($gnbDropdownWrap).stop().fadeIn(duration);
  //     $header.addClass('active');
  //   });

  // $menu1
  //   .add($menu2)
  //   .add($menu3)
  //   .add($menu4)
  //   .add($menu5)
  //   .on('mouseleave', function () {
  //     $(this).find($gnbDropdownWrap).stop().fadeOut(duration);

  //     $header.removeClass('active');
  //   });

  $menu.on('mouseenter', function () {
    $(this).find($gnbDropdownWrap).stop().fadeIn(duration);
    $header.addClass('active');
  });

  $menu.on('mouseleave', function () {
    $(this).find($gnbDropdownWrap).stop().fadeOut(duration);

    $header.removeClass('active');
  });

  $menuShort.on('mouseenter', function () {
    $(this).find($gnbDropdownWrap).stop().fadeIn(duration);
    $header.addClass('active1');
  });
  $menuShort.on('mouseleave', function () {
    $(this).find($gnbDropdownWrap).stop().fadeOut(duration);
    $header.removeClass('active1');
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

  // 필터 초기화 버튼 누르면 필터 색 다 초기화
  const $btnReset = $('.btn-reset');
  $btnReset.on('click', function () {
    $filterItem.removeClass('active');
  });

  // 정렬 팝업 on / off
  $('.item-sort-btn').on('click', function () {
    $(this).find('.item-sort-list').stop().toggle();
  });

  $('.item-sort-list > li').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $('.item-sort-list').stop().hide();
  });
});
