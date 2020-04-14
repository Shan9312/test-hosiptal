$(window).resize(function() {
    let width = $(window).width();

    // let html = document.documentElement;
    // let width = html.getBoundingClientRect().width;

    let fontSize = width / 76.9;

    // html.style.fontSize = fontSize.toFixed(4) + 'px';


    // 设计图的大小 / 50px   = 屏幕的大小 / 当前屏的fontSize
    $('html').css('fontSize', fontSize.toFixed(4) + 'px')
});
// 页面一加载，就触发resize事件
$(window).resize();