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
        if ($('#inp1').val() > 0) {
            inp--
            console.log($('#inp1').val(inp))
        } else {
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

// 看了又看轮播

var lookImg = [{
    imgUrl: {
        '1001': '../img/商品详情页/kankan1.png',
        '1002': '../img/商品详情页/kankan2.png',
        '1003': '../img/商品详情页/kankan3.png',
        '1004': '../img/商品详情页/kankan4.png',
        '1005': '../img/商品详情页/kankan5.png',
        '1006': '../img/商品详情页/kankan6.png',
        '1007': '../img/商品详情页/kankan7.png',
        '1008': '../img/商品详情页/kankan8.png',
        '1009': '../img/商品详情页/kankan9.png'

    },
    textPro: {
        '1001': '￥1978.00',
        '1002': '￥1298.00',
        '1003': '￥5899.00',
        '1004': '￥3679.00',
        '1005': '￥1899.00',
        '1006': '￥7898.00',
        '1007': '￥1498.00',
        '1008': '￥8966.00',
        '1009': '￥6958.00',

    }
}]
var insertLook1 = ''
var insertLook2 = ''
var insertLook3 = ''
for (var i = 0; i < lookImg.length; i++) {
    insertLook1 += `
    <ul>
    <li><img src="${lookImg[i].imgUrl[1001]}" alt=""><span class="look-price">${lookImg[i].textPro[1001]}</span></li>
    <li><img src="${lookImg[i].imgUrl[1002]}" alt=""><span class="look-price">${lookImg[i].textPro[1002]}</span></li>
    <li><img src="${lookImg[i].imgUrl[1003]}" alt=""><span class="look-price">${lookImg[i].textPro[1003]}</span></li>
</ul>
    `
    insertLook2 += `
    <ul>
    <li><img src="${lookImg[i].imgUrl[1004]}" alt=""><span class="look-price">${lookImg[i].textPro[1004]}</span></li>
    <li><img src="${lookImg[i].imgUrl[1005]}" alt=""><span class="look-price">${lookImg[i].textPro[1005]}</span></li>
    <li><img src="${lookImg[i].imgUrl[1006]}" alt=""><span class="look-price">${lookImg[i].textPro[1006]}</span></li>
</ul>
    `
    insertLook3 += `
    <ul>
    <li><img src="${lookImg[i].imgUrl[1007]}" alt=""><span class="look-price">${lookImg[i].textPro[1007]}</span></li>
    <li><img src="${lookImg[i].imgUrl[1008]}" alt=""><span class="look-price">${lookImg[i].textPro[1008]}</span></li>
    <li><img src="${lookImg[i].imgUrl[1009]}" alt=""><span class="look-price">${lookImg[i].textPro[1009]}</span></li>
</ul>
    `
}
$('.look-one').html(insertLook1)
$('.look-two').html(insertLook2)
$('.look-three').html(insertLook3)


var similarImg = [{
    similarImgUrl: {
        '1001': '../img/商品详情页/qita1.jpg',
        '1002': '../img/商品详情页/qita2.jpg',
        '1003': '../img/商品详情页/qita3.jpg',
        '1004': '../img/商品详情页/qita4.jpg',
        '1005': '../img/商品详情页/qita5.jpg',
        '1006': '../img/商品详情页/qita6.jpg',
    },
    similarText:{
        '1001': '联想(Lenovo)MIIX 210-Z8350F 10.1英寸二合一平板笔',
        '1002': 'APPLE苹果 2019新款iPad Air3 10.5英寸平板电脑(深空',
        '1003': '华为平板电脑 C5 10.1英寸安卓平板 智能管控网课学',
        '1004': '华为平板电脑MatePad 10.4英寸学习平板麒麟810八核',
        '1005': 'APPLE苹果 2019新款iPad Air3 10.5英寸平板电脑(深空',
        '1006': '华为MatePad Pro平板电脑二合一安卓10.8英寸全面屏',
    },
    similarPrice:{
        '1001': '¥1788.00',
        '1002': '¥4258.00',
        '1003': '￥1718.00',
        '1004': '¥1899.00',
        '1005': '¥5569.00',
        '1006': '¥3999.00',
    }
}]
var insertSimilar = '';

for(var i=0;i<similarImg.length;i++){
    insertSimilar+=`
    <li><img src="${similarImg[i].similarImgUrl[1001]}" alt=""><a href="">${similarImg[i].similarText[1001]}</a><span>${similarImg[i].similarPrice[1001]}</span></li>
    <li><img src="${similarImg[i].similarImgUrl[1002]}" alt=""><a href="">${similarImg[i].similarText[1002]}</a><span>${similarImg[i].similarPrice[1002]}</span></li>
    <li><img src="${similarImg[i].similarImgUrl[1003]}" alt=""><a href="">${similarImg[i].similarText[1003]}</a><span>${similarImg[i].similarPrice[1003]}</span></li>
    <li><img src="${similarImg[i].similarImgUrl[1004]}" alt=""><a href="">${similarImg[i].similarText[1004]}</a><span>${similarImg[i].similarPrice[1004]}</span></li>
    <li><img src="${similarImg[i].similarImgUrl[1005]}" alt=""><a href="">${similarImg[i].similarText[1005]}</a><span>${similarImg[i].similarPrice[1005]}</span></li>
    <li><img src="${similarImg[i].similarImgUrl[1006]}" alt=""><a href="">${similarImg[i].similarText[1006]}</a><span>${similarImg[i].similarPrice[1006]}</span></li>

    `
}
$('.qiTa').html(insertSimilar)



// 售后服务


for(let i=0;i<6;i++){
    $('.modality'+i).click(function(){
        $(this).addClass('pitch_on').siblings().removeClass('pitch_on')
        $('.service_Main'+i).css('display','block').siblings().css('display','none')
    })
}