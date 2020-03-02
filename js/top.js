/* navのスクロール */
$('a[href^="#"]').click(function () {
    var headerHight = $("header").height(); //ヘッダの高さ
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, 200, "swing");　//この数値は移動スピード
    return false;
});


/* ハンバーガーメニュー */
$(".menu-open-close").on("click", function () {
    var rightWidth = $("#nav").width();
    var rightVal = 0;
    if ($("#nav").hasClass("open")) {
        // 位置を移動させメニューを開いた状態にする
        rightVal -= rightWidth;
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $("#nav").removeClass("open");
        $(".nav-background").removeClass("open");
    } else {
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $("#nav").addClass("open");
        $(".nav-background").addClass("open");
    }

    $("#nav").stop().animate({
        right: rightVal
    }, 200);
});

$("#nav a").on("click", function () {
    if ($("#nav").hasClass("open")) {
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $("#nav").removeClass("open");
        $(".nav-background").removeClass("open");
        $("#nav").css({
            right: 0 - $("#nav").width()
        });
    }
});