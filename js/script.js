// DOM 구조가 파악 되면 실행
$(function () {
  // 대상을 변수에 저장
  // Main Common
  // Header
  // PC
  const $header = $('header');
  // const $menu = $('.gnb > li');
  const $menu = $(
    '.gnb > li:nth-child(1), .gnb > li:nth-child(2), .gnb > li:nth-child(3), .gnb > li:nth-child(4), .gnb > li:nth-child(5) '
  );
  const $menuShort = $('.gnb > li:nth-child(6)');
  const $gnbDropdownWrap = $('.gnb-dropdown-wrap');
  const duration = 300;

  // 긴메뉴 : Luggage, Backapacks 등
  $menu.on('mouseenter', function () {
    $(this).find($gnbDropdownWrap).stop().fadeIn(duration);
    $header.addClass('active');
  });

  $menu.on('mouseleave', function () {
    $(this).find($gnbDropdownWrap).stop().fadeOut(duration);

    $header.removeClass('active');
  });

  // 짧은 메뉴 : explore
  $menuShort.on('mouseenter', function () {
    $(this).find($gnbDropdownWrap).stop().fadeIn(duration);
    $header.addClass('active1');
  });
  $menuShort.on('mouseleave', function () {
    $(this).find($gnbDropdownWrap).stop().fadeOut(duration);
    $header.removeClass('active1');
  });

  // Tablet, Mobile menu
  const $btnMenu = $('.btn-menu');
  const $btnClose = $('.btn-close');
  const $mMenu = $('.m-gnb-wrap');

  $btnMenu.on('click', function () {
    $mMenu.addClass('active');
  });
  $btnClose.on('click', function () {
    $mMenu.removeClass('active');
  });

  // 모바일 메뉴 제목 클릭했을 때 아코디언
  const $mGbnTitle = $('.m-gnb > li');
  $mGbnTitle.on('click', function () {
    $(this).find('strong').siblings().stop().slideToggle(duration);
    $(this).toggleClass('active');
  });

  $('.m-gnb-sub > li > strong').on('click', function (e) {
    e.stopPropagation();
  });

  // Main footer
  $('.btn-family-site').on('click', function () {
    $('.family-site-list').toggle();
  });
  $('.family-site-list > li').on('click', function () {
    $('.family-site-list').hide();
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
    $(this).find('.item-sort-list').toggle();
    $('.item-sort-btn > button').toggleClass('active');
  });

  $('.item-sort-list > li').on('click', function (e) {
    // $(this).siblings().removeClass('active');
    // $(this).addClass('active');
    e.preventDefault();
    const filterValue = $(this).text();
    $('.item-sort-btn > button').text(filterValue);

    $('.item-sort-list').fadeOut();
  });
});
