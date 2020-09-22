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

// 放大镜
// 当鼠标进入原图时
var objImg = [
    { imgUrl: '../img/商品详情页/shangpin1.jpg' },
    { imgUrl: '../img/商品详情页/shangpin2.jpg' },
    { imgUrl: '../img/商品详情页/shangpin3.jpg' },
    { imgUrl: '../img/商品详情页/shangpin4.jpg' },
    { imgUrl: '../img/商品详情页/shangpin5.jpg' },
]
var serImg = ''
for (let i = 0; i < objImg.length; i++) {
    serImg += `<li class="bod${i}"><img src="${objImg[i].imgUrl}" alt=""></li>`
}
$('.img-pasI').html(serImg)


//  商品滑过更换图片
function active() {
    insertImg = `<img src="../img/商品详情页/shangpin1.jpg" alt="" width="360">`
    insertFImg = `<img src="../img/商品详情页/shangpin1.jpg" alt="" style="position: absolute;" width="1200">
    `
    $('.magnifying-lens').html(insertImg)
    $('.particulars-left-top-amplification').html(insertFImg)
    for (let j = 1; j <= 5; j++) {
        $('.bod' + (j - 1)).hover(function () {
            $(this).addClass('bor').siblings().removeClass('bor')
            var insertImg = ''
            var insertFImg = ''
            insertImg = `<img src="../img/商品详情页/shangpin${j}.jpg" alt="" width="360">`
            insertFImg = `<img src="../img/商品详情页/shangpin${j}.jpg" alt="" style="position: absolute;" width="1200">
            `
            $('.magnifying-lens').html(insertImg)
            $('.particulars-left-top-amplification').html(insertFImg)
        })
    }
}
active();


$('.particulars-left-top').mouseover(
    function (e) {
        $('.grabble').css('display', 'none')
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
    $('.grabble').css('display', 'block')
    $('.particulars-left-top-amplification').css('display', 'none');
    $('.magnifier').css('display', 'none');
})


// 送至

function deliver() {
    $('.deliver-to-steward').focus(function () {
        $('.arrowhead-bottom').css('display', 'none')
        $('.arrowhead-top').css('display', 'block')
    })
    $('.deliver-to-steward').blur(function () {
        $('.arrowhead-bottom').css('display', 'none')
        $('.arrowhead-top').css('display', 'block')
    })
    console.log(111)

}
deliver()

$('.phone-orders').hover(function () {
    $('.scan-a-QR-code').css('display', 'block')
}, function () {
    $('.scan-a-QR-code').css('display', 'none')

})
// var inp = ''
// var inp2= $('.inp1').val(inp)
// $('.count-wrapper-minus1').click(function(){
//     inp++
//     console.log(inp2)
// })

//     if(inp2>=0){
//         $('.count-wrapper-minus2').click(function(){
//             inp--
//         })
//     }else{

//     }
function fInp() {
    var inp = ''
    $('.count-wrapper-minus1').click(function () {
        inp++
        console.log($('#inp1').val(inp))
        console.log($('#inp1').val())
    })
    $('.count-wrapper-minus2').click(function () {
        if($('#inp1').val()>0){
            inp--
            console.log($('#inp1').val(inp))
        }else{
            return inp
        }
    })

}
fInp()


// 禁止复制
function disableselect(e) {
    return false
}
function reEnable() {
    return true
}
file://if IE4+
document.onselectstart = new Function("return false")
file://if NS6
if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
}