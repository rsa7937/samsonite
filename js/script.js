$(function () {
  gsap.registerPlugin(ScrollTrigger);
  // Main Common
  // Header
  // PC
  const $header = $('header');
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

  ScrollTrigger.create({
    trigger: '.visual',
    markers: true,
    id: 'header-short',
    start: 'top 100%',
    end: 'bottom 0%',
    onLeave: () => {
      if ($(window).innerWidth() < 1024) {
        $('#header').removeClass('scroll');
      } else {
        $('#header').addClass('scroll');
      }
    },
    onEnterBack: () => $('#header').removeClass('scroll'),
  });

  // 타블렛 & 모바일 메뉴 제목 클릭했을 때 아코디언
  $('.m-gnb > li > strong').on('click', function () {
    $(this).next('.m-gnb-subwrap').stop().slideToggle(duration);
    $(this).parent('li').toggleClass('active');
  });

  // 모바일에서 가능한 동작(subcon)이 타블렛에서는 불가능하도록 조치 취하기
  // 모바일의 소메뉴 제목 클릭했을 때 아코디언
  checkViewportWidth();
  // removeScrollClass();
  // 창이 resize될때마다 함수 다시 실행
  $(window).on('resize', function () {
    checkViewportWidth();
    if ($(window).innerWidth() < 1050) {
      $('#header').removeClass('scroll');
    }
  });

  //   if ($('.visual').offset().top < $(window).scrollTop()) {
  //     $('#header').removeClass('scroll');
  //   }
  // });
  // $(window).on('scroll', function () {
  //   if ($(window).innerWidth() < 1024) {
  //     $('#header').removeClass('scroll');
  //   } else {
  //     $('#header').addClass('scroll');
  //   }

  //   if ($('.visual').offset().top < $(window).scrollTop()) {
  //     $('#header').removeClass('scroll');
  //   } else {
  //     $('#header').addClass('scroll');
  //   }
  // });
  // const Pos = $('.visual').offset().top;
  // console.log(Pos);

  function checkViewportWidth() {
    const viewportWidth = $(window).innerWidth();
    if (viewportWidth >= 450 && viewportWidth < 1024) {
      console.log('태블릿');
      $('.m-gnb-sub > li > strong').next('.m-gnb-subcon').show();
      $('.m-gnb-sub > li > strong').off('click'); //클릭 이벤트 제거
      // $('#header').removeClass('scroll');
    } else {
      console.log('태블릿 아님');
      // $('#header').removeClass('scroll');
      $('.m-gnb-sub > li > strong')
        .off('click')
        .on('click', function () {
          $(this).next('.m-gnb-subcon').stop().slideToggle(duration);
          $(this).parent('li').toggleClass('active');
        });
    }
  }
  // function removeScrollClass() {
  //   if ($(window).innerWidth() > 1200) {
  //     $('#header').addClass('scroll');
  //     console.log('스크롤 적용');
  //   } else {
  //     $('#header').removeClass('scroll');
  //     console.log('스크롤 제거');
  //   }
  // }
  // 모바일 소메뉴 콘텐츠 클릭했을 때 토글 되는 현상 방지
  // $('.m-gnb-subcon').on('click', function (e) {
  //   e.stopPropagation();
  // });

  // Main Section 001 : Visual
  const visualSlide = new Swiper('.visual-slide', {
    speed: 500,
    loop: true,
    loopedSlides: 3,

    autoplay: { delay: 5000, disableOnInteraction: false },

    // centeredSlides: true,

    slideToClickedSlide: true,

    slidesPerView: 1,
    // spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.visual-next',
      prevEl: '.visual-prev',
    },
  });

  // Weekly Best
  // 대상을 변수에 저장
  const tabMenuWB = $('.best-item .tab-menu > li');
  const tabContentWB = $('.weekly-best-wrap');

  console.log(tabMenuWB, tabContentWB);

  // 초기 세팅 - 함수의 실행
  // 공통 동작이 2번 일어나기 때문에 tabAction이라는 함수로 정의
  tabAction(0);

  function tabAction(index) {
    // 탭메뉴 활성화
    tabMenuWB.removeClass('active');
    tabMenuWB.eq(index).addClass('active');
    tabContentWB.hide();
    tabContentWB.eq(index).show();
  }

  const bestItemWhole = new Swiper('.best-item-list-whole', {
    // Optional parameters
    // loop: true,
    speed: 500,
    loopedSlides: 7,
    // autoplay: { delay: 500, disableOnInteraction: false },
    // centeredSlides: true,
    spaceBetween: 50,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    // Navigation arrows
    navigation: {
      nextEl: '.best-item-whole.btn-next',
      prevEl: '.best-item-whole.btn-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar.whole',
      // Makes the Scrollbar Draggable
      draggable: true,
      // Snaps slider position to slides when you release Scrollbar
      snapOnRelease: true,
      // Size (Length) of Scrollbar Draggable Element in px
      // dragSize: 'auto',
    },

    observer: true,
    observeParents: true,
  });
  // Weekly Best Luggage
  const bestItemLuggage = new Swiper('.best-item-list-luggage', {
    speed: 500,
    loopedSlides: 6,
    spaceBetween: 50,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.best-item-luggage.btn-next',
      prevEl: '.best-item-luggage.btn-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar.luggage',
      draggable: true,
      snapOnRelease: true,
    },
    observer: true,
    observeParents: true,
  });
  // Weekly Best BackPacks
  const bestItemBackpacks = new Swiper('.best-item-list-backpacks', {
    speed: 500,
    loopedSlides: 1,
    spaceBetween: 50,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.best-item-backpacks.btn-next',
      prevEl: '.best-item-backpacks.btn-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar.backpacks',
      draggable: true,
      snapOnRelease: true,
    },
    observer: true,
    observeParents: true,
  });

  // Weekly Best Bags
  const bestItemBags = new Swiper('.best-item-list-bags', {
    speed: 500,
    loopedSlides: 1,
    spaceBetween: 50,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.best-item-bags.btn-next',
      prevEl: '.best-item-bags.btn-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar.bags',
      draggable: true,
      snapOnRelease: true,
    },
    observer: true,
    observeParents: true,
  });

  // 탭메뉴를 클릭했을 때,
  tabMenuWB.on('click', function (e) {
    // a의 기본 동작(링크 이동)을 막자
    e.preventDefault();
    // 클릭한 놈의 인덱스를 구해서 변수에 담고
    const tabIdx = $(this).index();
    tabAction(tabIdx);
    const bestItemArr = [bestItemWhole, bestItemLuggage, bestItemBackpacks, bestItemBags];
    bestItemArr[tabIdx].slideTo(0, 0);
  });

  // New Arrival
  // 대상을 변수에 저장
  const tabMenuNA = $('.new-item .tab-menu > li');
  const tabContentNA = $('.new-arrival-wrap');
  // const bestItemList = $('.best-item .tab-contents');

  // New Arrival Luggage
  tabAction2(0);

  // 탭메뉴를 클릭했을 때,
  tabMenuNA.on('click', function (e) {
    // a의 기본 동작(링크 이동)을 막자
    e.preventDefault();
    // 클릭한 놈의 인덱스를 구해서 변수에 담고
    const tabIdx = $(this).index();
    tabAction2(tabIdx);
    const newItemArr = [newArrWhole, newArrLuggage, newArrBackpacks, newArrBags];
    newItemArr[tabIdx].slideTo(0, 0);
    // tabContentNA[tabIdx].find('.swiper').slideTo(0, 0, true);
    // console.log($(tabContentNA[tabIdx]).find('.swiper'));
    // $(tabContentNA[tabIdx]).find('.swiper').slideTo(0, 0, true);
  });

  function tabAction2(index) {
    // 탭메뉴 활성화
    tabMenuNA.removeClass('active');
    tabMenuNA.eq(index).addClass('active');
    tabContentNA.hide();
    tabContentNA.eq(index).show();
  }

  // New Arrival Whole

  const newArrWhole = new Swiper('.new-arrival-list-whole', {
    speed: 500,
    loopedSlides: 5,
    spaceBetween: 50,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.new-item-whole.btn-next',
      prevEl: '.new-item-whole.btn-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar.new-whole',
      draggable: true,
      snapOnRelease: true,
    },
    observer: true,
    observeParents: true,
  });

  const newArrLuggage = new Swiper('.new-arrival-list-luggage', {
    speed: 500,
    loopedSlides: 5,
    spaceBetween: 50,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.new-item-luggage.btn-next',
      prevEl: '.new-item-luggage.btn-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar.new-luggage',
      draggable: true,
      snapOnRelease: true,
    },
    observer: true,
    observeParents: true,
  });
  const newArrBackpacks = new Swiper('.new-arrival-list-backpacks', {
    speed: 500,
    loopedSlides: 5,
    spaceBetween: 50,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.new-item-backpacks.btn-next',
      prevEl: '.new-item-backpacks.btn-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar.new-backpacks',
      draggable: true,
      snapOnRelease: true,
    },
    observer: true,
    observeParents: true,
  });
  const newArrBags = new Swiper('.new-arrival-list-bags', {
    speed: 500,
    loopedSlides: 5,
    spaceBetween: 50,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.new-item-bags.btn-next',
      prevEl: '.new-item-bags.btn-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar.new-bags',
      draggable: true,
      snapOnRelease: true,
    },
    observer: true,
    observeParents: true,
  });

  // Theme
  const themePicList = new Swiper('.theme-pic-list', {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    loopedSlides: 6,
    spaceBetween: 0,
    slideToClickedSlide: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
  const themeItemList = new Swiper('.theme-item-list', {
    // loop: true,
    loopedSlides: 3,
    spaceBetween: 30,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
    },
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
