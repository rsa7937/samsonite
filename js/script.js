// DOM 구조가 파악 되면 실행
$(function () {
  // 대상을 변수에 저장
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
});
