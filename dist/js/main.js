$(function () {
  //htmlの読み込みが終了してからjQueryの操作を開始

  /* ドロワー  */
  // ドロワーメニューの利用宣言 
  $(document).ready(function () {
    $('.drawer').drawer();

    $('.drawer-menu-item').click(function(){
      $('.drawer').drawer('close');
    });
  });

  /* アコーディオン  */
  $(".qa").on("click", function () {

    $(this).find(".qa-a").slideToggle();

    $icon = $(this).find(".qa-q-icon");

    if ($icon.hasClass('open')) {
      $icon.removeClass('open');
    } else {
      $icon.addClass('open');
    }
  });

   /* スライダー  */
  var mySwiper = new Swiper('.swiper-container', {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
    slidesPerView: 1.27,// 何枚のスライドを表示するか
    spaceBetween: 24,// スライド間の余白サイズ(ピクセル)

    // レスポンシブ化条件
    breakpoints: {
      // 768ピクセル幅以上になったら
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      // 980ピクセル幅以上になったら
      980: {
        slidesPerView: 2.6,
        spaceBetween: 40,
      },
      // 1337ピクセル幅以上になったら
      1500: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    },

    // スライダーの自動再生
    // autoplay: true  のみなら既定値での自動再生
    autoplay: {
      delay: 2500, // スライドが切り替わるまでの表示時間(ミリ秒)
      stopOnLast: true, // 最後のスライドまで表示されたら自動再生を中止するか
      disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    },

    // ページネーションを表示する場合
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  /* トップへ戻る  */
  var pagetop = $('#totop');  
  //隠す
  pagetop.hide();
  $(window).scroll(function () {
    //100pxスクロールしたら表示
      if ($(this).scrollTop() > 100) {  
          pagetop.fadeIn();
    //100px以下の場合非表示
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });

  
/* ページ内ジャンプ */
$('.hmenu-item a, .drawer-menu-item').click(function(){
  //href属性を取得(セクションのidと一致)
  let id = $(this).attr('href');

  //該当idのセクションのスクロール位置を取得
  let position = $(id).offset().top - 100;

  $('html, body').animate({
    'scrollTop' : position
  },500);
});






});

