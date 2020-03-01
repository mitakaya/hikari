$('a[href^="#"]').click(function(){
    var headerHight = $("header").height(); //ヘッダの高さ
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, 200, "swing");　//この数値は移動スピード
    return false;
  });