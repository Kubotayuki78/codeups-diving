jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  jQuery(function ($) {
    // この中であればWordpressでも「$」が使用可能になる

    let topBtn = $(".c-to-top");
    topBtn.hide();

    // ボタンの表示設定
    $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
      }
    });
    //  ヘッダークラス名付与
    let header = $(".p-header");
    let headerHeight = $(".p-header").height();
    let height = $(".js-mv-height").height();

    console.log("ヘッダー高さ " + headerHeight);
    console.log("mv高さ " + height);

    $(window).scroll(function () {
      if ($(this).scrollTop() > height - headerHeight) {
        header.addClass("is-color");
      } else {
        header.removeClass("is-color");
      }
    });

    // ボタンをクリックしたらスクロールして上に戻る
    topBtn.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        300,
        "swing"
      );
      return false;
    });

    //ドロワーメニュー
    $(".js-drawer").click(function () {
      if ($(".js-drawer").hasClass("is-checked")) {
        $(".js-drawer").removeClass("is-checked");
        // $("html").toggleClass("is-fixed");
        $(".js-sp-nav").fadeOut(300);
      } else {
        $(".js-drawer").addClass("is-checked");
        // $("html").toggleClass("is-fixed");
        $(".js-sp-nav").fadeIn(300);
      }
    });

    // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

    $(document).on("click", 'a[href*="#"]', function () {
      let time = 400;
      let header = $("header").innerHeight();
      let target = $(this.hash);
      if (!target.length) return;
      let targetY = target.offset().top - header;
      $("html,body").animate({ sscrollTop: targetY }, time, "swing");
      return false;
    });

    var swiper = new Swiper(".fvSwiper", {
      loop: true,
      // clickable: true,
      // autoplay: {
      //   delay: 3000,
      // },
    });

    var swiper = new Swiper(".cardSwiper", {
      slidesPerView: "auto",
      spaceBetween: 40,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
});
