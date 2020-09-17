$('.nav-main').children().hover(function () {
    $(this).addClass('nav-bag').siblings().removeClass('nav-bag')
}, function () {
    $(this).removeClass('nav-bag')
})

$('.monopoly-right').hover(function () {
    $('.pop-box').css('display', 'block')
    $('.downward').css('transform', 'rotate(180deg)')
}, function () {
    $('.pop-box').css('display', 'none')
    $('.downward').css('transform', 'rotate(0deg)')
})
$('.pop-box').hover(function () {
    $('.pop-box').css('display', 'block')
}, function () {
    $('.pop-box').css('display', 'none')
})
$('.par-arrows1').hover(function () {
    $('.left-arrows1').css('display', 'block')
    $('.left-arrows').css('display', 'none')
}, function () {
    $('.left-arrows1').css('display', 'none')
    $('.left-arrows').css('display', 'block')

})
$('.par-arrows2').hover(function () {
    $('.right-arrows1').css('display', 'block')
    $('.right-arrows').css('display', 'none')
}, function () {
    $('.right-arrows1').css('display', 'none')
    $('.right-arrows').css('display', 'block')

})

//  商品滑过更换图片
function active() {
    for (let i = 1; i <= 5; i++) {
        $(".bod").hover(
            function () {
                $(this).addClass('bor').siblings().removeClass('bor')
                $(".particulars-left-top").html('');
                $(".bor").children().clone().prependTo(".particulars-left-top");
                $(".bor").children().clone().prependTo(".particulars-left-top-amplification");
                console.log($(".bor").children())
            },
            function () {
                $(".bod").removeClass('bor')
            }
        )
    }
}
active()

// 当鼠标进入原图时
$('.particulars-left-top').mouseover(
    function (e) {
        $('.particulars-left-top-amplification').css('display', 'block');
        $('.magnifier').css('display', 'block');
    })

// 当鼠标在原图窗口中移动时
$('.particulars-left-top').mousemove(function (e) {

    // 获取鼠标当前的位置
    var pageX = e.pageX;
    var pageY = e.pageY;
    // 获取原图窗口在整个文档中的偏移位置
    var offsetX = $('.particulars-left-top').offset().left;
    var offsetY = $('.particulars-left-top').offset().top;
    // 计算鼠标在原图中的相对位置
    var relativeX = pageX - offsetX;
    var relativeY = pageY - offsetY;

    // 计算鼠标在放大镜框中的位置
    var magOffsetX = $('.magnifier').width() / 2;
    var magOffsetY = $('.magnifier').height() / 2;
    $('.magnifier').css({
        left: relativeX - magOffsetX + 'px',
        top: relativeY - magOffsetY + 'px'
    })

    // 获取放大镜框的新的位置
    var magX = $('.magnifier').position().left;
    var magY = $('.magnifier').position().top;

    // 处理越界情况

    // 确定边界

    var maxMagX = $('.particulars-left-top').width() - $('.magnifier').width()
    var maxMagY = $('.particulars-left-top').height() - $('.magnifier').height()
    // 左边界
    if (magX <= 0) {
        $('.magnifier').css('left', '0px')
    }
    // 右边界
    if (magX >= maxMagX) { $('.magnifier').css('left', maxMagX + 'px'); }

    // 上边界
    if (magY <= 0) { $('.magnifier').css('top', '0px') }

    // 下边界
    if (magY >= maxMagY) { $('.magnifier').css('top', maxMagY + 'px'); }

    // 按照之前确定的缩放比例移动“原图”窗口中的图片
    // 注意：图片的移动方向与鼠标的移动方向是相反的！
    var originX = magX * 3;
    var originY = magY * 3;
    $('.particulars-left-top-amplification img').css({ left: -originX + 'px', top: -originY + 'px' })
})
// 当鼠标离开“缩略图”窗口时，隐藏“原图”窗口和“放大镜”框
$('.particulars-left-top').mouseout(function () {
    $('.particulars-left-top-amplification').css('display', 'none');
    $('.magnifier').css('display', 'none');
})







