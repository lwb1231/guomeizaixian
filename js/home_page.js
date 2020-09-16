
var userName = {
    user: {
        '1001': '手机'
        , '1002': '充值'
        , '1003': '相机'
        , '1004': '智能数码'
        , '1005': '电脑'
        , '1006': '办公配件'
        , '1007': '电视'
        , '1008': '影音'
        , '1009': '智能'
        , '1010': '空调'
        , '1011': '冰箱'
        , '1012': '洗衣机'
        , '1013': '厨房卫浴'
        , '1014': ' 生活电器'
        , '1015': ' 环境'
        , '1016': '家具'
        , '1017': ' 建材 '
        , '1018': '欧洲厨房'
        , '1019': '家居家纺'
        , '1020': ' 家居家装'
        , '1021': '食品酒水'
        , '1022': '母婴玩具'
        , '1023': '美妆个护'
        , '1024': '服饰鞋帽'
        , '1025': '箱包奢品'
        , '1026': '运动户外'
        , '1027': '钟表首饰'
        , '1028': '汽车整车'
        , '1029': '汽车用品'
        , '1030': '国美金融'
        , '1031': '国美管家'
    }

}
for (var item in userName.user) {
    var nameA = `
    <div class="name_opj1">
    <span>${userName.user[1001]}</span><span>${userName.user[1002]}</span>
</div>
<div class="name_opj2">
    <span>${userName.user[1003]}</span><span>${userName.user[1004]}</span>
</div>
<div class="name_opj3">
    <span>${userName.user[1005]}</span><span>${userName.user[1006]}</span>
</div>
<div class="name_opj4">
    <span>${userName.user[1007]}</span><span>${userName.user[1008]}</span><span>${userName.user[1009]}</span>
</div>
<div class="name_opj5">
    <span>${userName.user[1010]}</span><span>${userName.user[1011]}</span><span>${userName.user[1012]}</span>
</div>
<div class="name_opj6">
    <span>${userName.user[1013]}</span><span>${userName.user[1014]}</span></span><span>${userName.user[1015]}</span>
</div>
<div class="name_opj7">
    <span>${userName.user[1016]}</span><span>${userName.user[1017]}</span><span>${userName.user[1018]}</span>
</div>
<div class="name_opj8">
    <span>${userName.user[1019]}</span><span>${userName.user[1020]}</span>
</div>
<div class="name_opj9">
    <span>${userName.user[1021]}</span><span>${userName.user[1022]}</span>
</div>
<div class="name_opj10">
    <span>${userName.user[1023]}</span>
</div>
<div class="name_opj12">
    <span>${userName.user[1024]}</span><span>${userName.user[1025]}</span>
</div>
<div class="name_opj12">
    <span>${userName.user[1026]}</span><span>${userName.user[1027]}</span>
</div>
<div class="name_opj13">
    <span>${userName.user[1028]}</span><span>${userName.user[1029]}</span>
</div>
<div class="name_opj14">
    <span>${userName.user[1030]}</span>
</div>
<div class="name_opj15">
    <span>${userName.user[1031]}</span>
</div>
<div class="content_opj">
    <div class="content_opj_transcript">
        <div class="content_opj_left">
            <div class="content_opj_left_top">
                <ul>
                    <li>潮3C ></li>
                    <li>手机 ></li>
                    <li>数码 ></li>
                    <li>以旧换新 ></li>
                    <li>手机充值 ></li>
                    <li>延保服务 ></li>
                    <li>智享生活 ></li>
                </ul>
            </div>
            <div class="content_opj_left_bottom">
                <ul class="content_opj_left_bottom_left">
                    <li>手机通讯</li>
                    <li>运营商</li>
                    <li>手机配件</li>
                    <li>充话费</li>
                    <li>充流量</li>
                </ul>
                <ul class="content_opj_left_bottom_right">
                    <li><span>手机</span><span class='Red'>phone</span><span>华为</span><span>小米</span><span>荣耀</span><span>三星</span><span>OPPO</span><span>vivo</span>
                    </li>
                    <li><span>中国移动</span><span>中国联通</span></li>
                    <li><span>手机壳</span><span>贴膜</span><span>手机储蓄卡</span><span class='Red'>数据线</span><span>充电器</span><span>手机耳机</span><span class='Red'>移动电源</span><span>蓝牙耳机</span><span>手机电池</span><span>苹果周边</span><span>车载配件</span>
                    </li>
                    <li><span>移动/联通/电信/极信</span></li>
                    <li><span>移动/联通/电信</span></li>
                </ul>
            </div>
        </div>
            <div class="content_opj_right">
                <div class="content_opj_right_top">
                    <ul>
                        <li><img src="../img/首页/tanchu2.jpg" alt=""></li>
                        <li><img src="../img/首页/tanchu3.jpg" alt=""></li>
                    </ul>
                    <ul>
                    <li><img src="../img/首页/tanchu4.jpg" alt=""></li>
                    <li><img src="../img/首页/tanchu5.jpg" alt=""></li>
                    </ul>
                    <ul>
                    <li><img src="../img/首页/tanchu6.jpg" alt=""></li>
                    <li><img src="../img/首页/tanchu7.jpg" alt=""></li>
                </ul>
                </div>
                <div class="content_opj_right_bottom"><img src="../img/首页/tanchu1.jpg" alt=""></div>
            </div>
    </div>
</div>

`
}

$('.navigation_bar2').html(nameA)


$('.name_opj1').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj2').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj3').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj4').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj5').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj6').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj7').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj8').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj9').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj10').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj11').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj12').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj13').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj14').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})

$('.name_opj15').hover(function () {
    $(this).addClass('bag').siblings().removeClass('bag')
    $('.content_opj').css('display', 'block')
}, function () {
    $(this).removeClass('bag')
    $('.content_opj').css('display', 'none')
})


var live = [
    { imgUrl: '../img/首页/guomeimiaosha.jpg', imgUrl1: '../img/首页/guomeimiaosha2.jpg', imgUrl2: '../img/首页/guomeimiaosha3.jpg', textNone: 'BARGAINS', class: 'H2' },
    { imgUrl: '../img/首页/new_product1.jpg', imgUrl1: '../img/首页/new_product2.jpg', imgUrl2: '../img/首页/new_product3.jpg', textNone: 'FASHION', class: 'H3' },
]
var liveHtml = '';
for (var i = 0; i < live.length; i++) {
    liveHtml += `
      <div class="fashion1">
      <div class="fashion1_1">
      <h2 class='${live[i].class}'></h2>
      <span>${live[i].textNone}</span>
  </div>
  <div class="fashion1_2">
      <div class="fashion1_2_1"><img src="${live[i].imgUrl}" alt=""></div>
      <div class="fashion1_2_2">
          <div class="fashion1_2_2_1"><img src="${live[i].imgUrl1}" alt=""></div>
          <div class="fashion1_2_2_2"><img src="${live[i].imgUrl2}" alt=""></div>
      </div>
      </div>
  </div>`

}
var newBrand = [
    { img: '../img/首页/brand1.jpg', imgUrl1: '../img/首页/brand2.jpg', imgUrl2: '../img/首页/brand3.jpg', imgUrl3: '../img/首页/brand4.jpg', imgUrl4: '../img/首页/brand5.jpg', imgUrl5: '../img/首页/brand6.jpg', imgUrl6: '../img/首页/brand7.jpg', imgUrl7: '../img/首页/brand8.jpg', imgUrl8: '../img/首页/brand9.jpg', textNone: 'BRANDS', class: 'H3' }
]
for (var j = 0; j < newBrand.length; j++) {
    var liveHtml1 = `
       <div class="fashion2">
        <div class="fashion1_1">
            <h2 class="H4"></h2>
            <span>BARGAINS</span>
        </div>
        <div class="fashion2_2">
            <div class="fashion2_2_1">
                <div class="fashion2_2_1_1"><img src="${newBrand[j].img}" alt=""></div>
                <div class="fashion2_2_1_2"><img src="${newBrand[j].imgUrl1}" alt=""></div>
            </div>
            <div class="fashion2_2_2">
                <div class="fashion2_2_2_1"><img src="${newBrand[j].imgUrl2}" alt=""></div>
                <div class="fashion2_2_2_1"><img src="${newBrand[j].imgUrl3}" alt=""></div>
                <div class="fashion2_2_2_1"><img src="${newBrand[j].imgUrl4}" alt=""></div>
                <div class="fashion2_2_2_1"><img src="${newBrand[j].imgUrl5}" alt=""></div>
                <div class="fashion2_2_2_1"><img src="${newBrand[j].imgUrl6}" alt=""></div>
                <div class="fashion2_2_2_1"><img src="${newBrand[j].imgUrl7}" alt=""></div>
                <div class="fashion2_2_2_1"><img src="${newBrand[j].imgUrl8}" alt=""></div>
            </div>
        </div>
      </div>`
}
$(".fashion_1").html(liveHtml + liveHtml1)

// 领卷中心
var Bring_stock = [
    { imgUrl1: '../img/首页/lingjuan1.jpg', imgUrl2: '../img/首页/lingjuan2.jpg', imgUrl3: '../img/首页/lingjuan3.jpg', imgUrl4: '../img/首页/lingjuan4.jpg', imgUrl5: '../img/首页/lingjuan5.jpg', imgUrl6: '../img/首页/lingjuan6.jpg', imgUrl7: '../img/首页/lingjuan7.jpg' }]
var Bring_stock_content = ''
for (var i = 0; i < Bring_stock.length; i++) {
    Bring_stock_content += `
        <img src="${Bring_stock[i].imgUrl1}" alt="">
        <img src="${Bring_stock[i].imgUrl2}" alt="">
        <img src="${Bring_stock[i].imgUrl3}" alt="">
        <img src="${Bring_stock[i].imgUrl4}" alt="">
        <img src="${Bring_stock[i].imgUrl5}" alt="">
        <img src="${Bring_stock[i].imgUrl6}" alt="">
        <img src="${Bring_stock[i].imgUrl7}" alt="">
        `
}
$('.Bring_stock').html(Bring_stock_content)



// 猜你喜欢
var Guess = [
    { imgUrl: "../img/首页/cainixihuan1.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥789.00' },
    { imgUrl: "../img/首页/cainixihuan2.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥20.00' },
    { imgUrl: "../img/首页/cainixihuan3.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥4666.00' },
    { imgUrl: "../img/首页/cainixihuan4.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥555.00' },
    { imgUrl: "../img/首页/cainixihuan5.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥99.00' },
    { imgUrl: "../img/首页/cainixihuan6.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥19.00' },
]
var guess = '';
for (var i = 0; i < Guess.length; i++) {
    guess += `
   <li>
     <img src="${Guess[i].imgUrl}">
    <span>${Guess[i].text1}</span>
     <p><span>${Guess[i].text2}</span></p>
  </li>
        `
}
$('.guess_bottom_1_1').html(guess)
var Guess = [
    { imgUrl: "../img/首页/cainixihuan7.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥9.00' },
    { imgUrl: "../img/首页/cainixihuan8.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥1.00' },
    { imgUrl: "../img/首页/cainixihuan9.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥416.00' },
    { imgUrl: "../img/首页/cainixihuan10.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥15.00' },
    { imgUrl: "../img/首页/cainixihuan11.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥199.00' },
    { imgUrl: "../img/首页/cainixihuan12.jpg", text1: '木巴现代中式实木床高箱床1.8米 橡胶木双人床硬', text2: '￥139.00' },
]
var guess = '';
for (var i = 0; i < Guess.length; i++) {
    guess += `
   <li>
     <img src="${Guess[i].imgUrl}">
    <span>${Guess[i].text1}</span>
     <p><span>${Guess[i].text2}</span></p>
  </li>
        `
}
$('.guess_bottom_1_2').html(guess)




// 主卖场
var main_stores = [
    {
        imgUrl: {
            1001: '../img/首页/1F.jpg', 1002: '../img/首页/phone_type1.jpg', 1003: '../img/首页/phone_type2.jpg', 1004: '../img/首页/phone_type3.jpg', 1005: '../img/首页/phone_type4.jpg', 1006: '../img/首页/phone_type5.jpg', 1007: '../img/首页/phone_type6.jpg'
            ,
            1008: '../img/首页/iqoo3_1.jpg', 1009: '../img/首页/iqoo3_2.jpg', 1010: '../img/首页/iqoo3_3.jpg', 1011: '../img/首页/iqoo3_4.jpg', 1012: '../img/首页/iqoo3_5.jpg', 1013: '../img/首页/iqoo3_6.jpg', 1014: '../img/首页/5Gshouji_1.jpg',
            1015: '../img/首页/5Gshouji_2.jpg', 1016: '../img/首页/5Gshouji_3.jpg', 1017: '../img/首页/5Gshouji_4.jpg', 1018: '../img/首页/5Gshouji_5.jpg', 1019: '../img/首页/5Gshouji_6.jpg'
            ,
            1020: '../img/首页/shouji1.jpg', 1021: '../img/首页/shouji2.jpg', 1022: '../img/首页/shouji3.jpg', 1023: '../img/首页/shouji4.jpg', 1024: '../img/首页/shouji5.jpg', 1025: '../img/首页/shouji6.jpg', 1026: '../img/首页/shouji7.jpg', 1027: '../img/首页/shouji8.jpg', 1028: '../img/首页/shouji9.jpg', 1029: '../img/首页/shouji10.jpg', 1030: '../img/首页/shouji11.jpg', 1031: '../img/首页/shouji12.jpg', 1032: '../img/首页/shouji13.jpg', 1033: '../img/首页/shouji14.jpg', 1034: '../img/首页/shouji15.jpg', 1035: '../img/首页/shouji16.jpg', 1036: '../img/首页/shouji17.jpg', 1037: '../img/首页/shouji18.jpg', 1038: '../img/首页/shouji19.jpg', 1039: '../img/首页/shouji20.jpg', 1040: '../img/首页/shouji21.jpg', 1041: '../img/首页/shouji22.jpg', 1042: '../img/首页/shouji23.jpg', 1043: '../img/首页/shouji24.jpg', 1044: '../img/首页/shouji25.jpg', 1045: '../img/首页/shouji26.jpg'
        }

        , Head1: '1F', Head2: '手机通讯'
        , text: { 1001: '手机', 1002: '充值', 1003: '/', 1005: '电器城', 1006: '荣耀手机', 1007: '潮3C', 1008: 'iPhone XR', 1009: 'iQOO', 1010: '配件', 1011: '淘实惠', 1012: '华为手机', 1013: '全面屏', 1014: '飞利浦', 1015: '热销推荐', 1016: '保护套', 1017: '中兴', 1018: '以旧换新', 1019: '小米', 1020: '诺基亚', 1021: '华为畅享10 plus 8 128G', 1022: '￥1899.00' }
    },
    {
        imgUrl: {
            1001: '../img/首页/1F.jpg', 1002: '../img/首页/phone_type1.jpg', 1003: '../img/首页/phone_type2.jpg', 1004: '../img/首页/phone_type3.jpg', 1005: '../img/首页/phone_type4.jpg', 1006: '../img/首页/phone_type5.jpg', 1007: '../img/首页/phone_type6.jpg'
            ,
            1008: '../img/首页/iqoo3_1.jpg', 1009: '../img/首页/iqoo3_2.jpg', 1010: '../img/首页/iqoo3_3.jpg', 1011: '../img/首页/iqoo3_4.jpg', 1012: '../img/首页/iqoo3_5.jpg', 1013: '../img/首页/iqoo3_6.jpg', 1014: '../img/首页/5Gshouji_1.jpg',
            1015: '../img/首页/5Gshouji_2.jpg', 1016: '../img/首页/5Gshouji_3.jpg', 1017: '../img/首页/5Gshouji_4.jpg', 1018: '../img/首页/5Gshouji_5.jpg', 1019: '../img/首页/5Gshouji_6.jpg'
            ,
            1020: '../img/首页/shouji1.jpg', 1021: '../img/首页/shouji2.jpg', 1022: '../img/首页/shouji3.jpg', 1023: '../img/首页/shouji4.jpg', 1024: '../img/首页/shouji5.jpg', 1025: '../img/首页/shouji6.jpg', 1026: '../img/首页/shouji7.jpg', 1027: '../img/首页/shouji8.jpg', 1028: '../img/首页/shouji9.jpg', 1029: '../img/首页/shouji10.jpg', 1030: '../img/首页/shouji11.jpg', 1031: '../img/首页/shouji12.jpg', 1032: '../img/首页/shouji13.jpg', 1033: '../img/首页/shouji14.jpg', 1034: '../img/首页/shouji15.jpg', 1035: '../img/首页/shouji16.jpg', 1036: '../img/首页/shouji17.jpg', 1037: '../img/首页/shouji18.jpg', 1038: '../img/首页/shouji19.jpg', 1039: '../img/首页/shouji20.jpg', 1040: '../img/首页/shouji21.jpg', 1041: '../img/首页/shouji22.jpg', 1042: '../img/首页/shouji23.jpg', 1043: '../img/首页/shouji24.jpg', 1044: '../img/首页/shouji25.jpg', 1045: '../img/首页/shouji26.jpg'
        }

        , Head1: '2F', Head2: '电脑数码'
        , text: { 1001: '手机', 1002: '充值', 1003: '/', 1005: '电器城', 1006: '荣耀手机', 1007: '潮3C', 1008: 'iPhone XR', 1009: 'iQOO', 1010: '配件', 1011: '淘实惠', 1012: '华为手机', 1013: '全面屏', 1014: '飞利浦', 1015: '热销推荐', 1016: '保护套', 1017: '中兴', 1018: '以旧换新', 1019: '小米', 1020: '诺基亚', 1021: '华为畅享10 plus 8 128G', 1022: '￥1899.00' }
    },
    {
        imgUrl: {
            1001: '../img/首页/1F.jpg', 1002: '../img/首页/phone_type1.jpg', 1003: '../img/首页/phone_type2.jpg', 1004: '../img/首页/phone_type3.jpg', 1005: '../img/首页/phone_type4.jpg', 1006: '../img/首页/phone_type5.jpg', 1007: '../img/首页/phone_type6.jpg'
            ,
            1008: '../img/首页/iqoo3_1.jpg', 1009: '../img/首页/iqoo3_2.jpg', 1010: '../img/首页/iqoo3_3.jpg', 1011: '../img/首页/iqoo3_4.jpg', 1012: '../img/首页/iqoo3_5.jpg', 1013: '../img/首页/iqoo3_6.jpg', 1014: '../img/首页/5Gshouji_1.jpg',
            1015: '../img/首页/5Gshouji_2.jpg', 1016: '../img/首页/5Gshouji_3.jpg', 1017: '../img/首页/5Gshouji_4.jpg', 1018: '../img/首页/5Gshouji_5.jpg', 1019: '../img/首页/5Gshouji_6.jpg'
            ,
            1020: '../img/首页/shouji1.jpg', 1021: '../img/首页/shouji2.jpg', 1022: '../img/首页/shouji3.jpg', 1023: '../img/首页/shouji4.jpg', 1024: '../img/首页/shouji5.jpg', 1025: '../img/首页/shouji6.jpg', 1026: '../img/首页/shouji7.jpg', 1027: '../img/首页/shouji8.jpg', 1028: '../img/首页/shouji9.jpg', 1029: '../img/首页/shouji10.jpg', 1030: '../img/首页/shouji11.jpg', 1031: '../img/首页/shouji12.jpg', 1032: '../img/首页/shouji13.jpg', 1033: '../img/首页/shouji14.jpg', 1034: '../img/首页/shouji15.jpg', 1035: '../img/首页/shouji16.jpg', 1036: '../img/首页/shouji17.jpg', 1037: '../img/首页/shouji18.jpg', 1038: '../img/首页/shouji19.jpg', 1039: '../img/首页/shouji20.jpg', 1040: '../img/首页/shouji21.jpg', 1041: '../img/首页/shouji22.jpg', 1042: '../img/首页/shouji23.jpg', 1043: '../img/首页/shouji24.jpg', 1044: '../img/首页/shouji25.jpg', 1045: '../img/首页/shouji26.jpg'
        }

        , Head1: '3F', Head2: '家用电器'
        , text: { 1001: '手机', 1002: '充值', 1003: '/', 1005: '电器城', 1006: '荣耀手机', 1007: '潮3C', 1008: 'iPhone XR', 1009: 'iQOO', 1010: '配件', 1011: '淘实惠', 1012: '华为手机', 1013: '全面屏', 1014: '飞利浦', 1015: '热销推荐', 1016: '保护套', 1017: '中兴', 1018: '以旧换新', 1019: '小米', 1020: '诺基亚', 1021: '华为畅享10 plus 8 128G', 1022: '￥1899.00' }
    },

    {
        imgUrl: {
            1001: '../img/首页/1F.jpg', 1002: '../img/首页/phone_type1.jpg', 1003: '../img/首页/phone_type2.jpg', 1004: '../img/首页/phone_type3.jpg', 1005: '../img/首页/phone_type4.jpg', 1006: '../img/首页/phone_type5.jpg', 1007: '../img/首页/phone_type6.jpg'
            ,
            1008: '../img/首页/iqoo3_1.jpg', 1009: '../img/首页/iqoo3_2.jpg', 1010: '../img/首页/iqoo3_3.jpg', 1011: '../img/首页/iqoo3_4.jpg', 1012: '../img/首页/iqoo3_5.jpg', 1013: '../img/首页/iqoo3_6.jpg', 1014: '../img/首页/5Gshouji_1.jpg',
            1015: '../img/首页/5Gshouji_2.jpg', 1016: '../img/首页/5Gshouji_3.jpg', 1017: '../img/首页/5Gshouji_4.jpg', 1018: '../img/首页/5Gshouji_5.jpg', 1019: '../img/首页/5Gshouji_6.jpg'
            ,
            1020: '../img/首页/shouji1.jpg', 1021: '../img/首页/shouji2.jpg', 1022: '../img/首页/shouji3.jpg', 1023: '../img/首页/shouji4.jpg', 1024: '../img/首页/shouji5.jpg', 1025: '../img/首页/shouji6.jpg', 1026: '../img/首页/shouji7.jpg', 1027: '../img/首页/shouji8.jpg', 1028: '../img/首页/shouji9.jpg', 1029: '../img/首页/shouji10.jpg', 1030: '../img/首页/shouji11.jpg', 1031: '../img/首页/shouji12.jpg', 1032: '../img/首页/shouji13.jpg', 1033: '../img/首页/shouji14.jpg', 1034: '../img/首页/shouji15.jpg', 1035: '../img/首页/shouji16.jpg', 1036: '../img/首页/shouji17.jpg', 1037: '../img/首页/shouji18.jpg', 1038: '../img/首页/shouji19.jpg', 1039: '../img/首页/shouji20.jpg', 1040: '../img/首页/shouji21.jpg', 1041: '../img/首页/shouji22.jpg', 1042: '../img/首页/shouji23.jpg', 1043: '../img/首页/shouji24.jpg', 1044: '../img/首页/shouji25.jpg', 1045: '../img/首页/shouji26.jpg'
        }

        , Head1: '4F', Head2: '厨房卫浴'
        , text: { 1001: '手机', 1002: '充值', 1003: '/', 1005: '电器城', 1006: '荣耀手机', 1007: '潮3C', 1008: 'iPhone XR', 1009: 'iQOO', 1010: '配件', 1011: '淘实惠', 1012: '华为手机', 1013: '全面屏', 1014: '飞利浦', 1015: '热销推荐', 1016: '保护套', 1017: '中兴', 1018: '以旧换新', 1019: '小米', 1020: '诺基亚', 1021: '华为畅享10 plus 8 128G', 1022: '￥1899.00' }
    },

    {
        imgUrl: {
            1001: '../img/首页/1F.jpg', 1002: '../img/首页/phone_type1.jpg', 1003: '../img/首页/phone_type2.jpg', 1004: '../img/首页/phone_type3.jpg', 1005: '../img/首页/phone_type4.jpg', 1006: '../img/首页/phone_type5.jpg', 1007: '../img/首页/phone_type6.jpg'
            ,
            1008: '../img/首页/iqoo3_1.jpg', 1009: '../img/首页/iqoo3_2.jpg', 1010: '../img/首页/iqoo3_3.jpg', 1011: '../img/首页/iqoo3_4.jpg', 1012: '../img/首页/iqoo3_5.jpg', 1013: '../img/首页/iqoo3_6.jpg', 1014: '../img/首页/5Gshouji_1.jpg',
            1015: '../img/首页/5Gshouji_2.jpg', 1016: '../img/首页/5Gshouji_3.jpg', 1017: '../img/首页/5Gshouji_4.jpg', 1018: '../img/首页/5Gshouji_5.jpg', 1019: '../img/首页/5Gshouji_6.jpg'
            ,
            1020: '../img/首页/shouji1.jpg', 1021: '../img/首页/shouji2.jpg', 1022: '../img/首页/shouji3.jpg', 1023: '../img/首页/shouji4.jpg', 1024: '../img/首页/shouji5.jpg', 1025: '../img/首页/shouji6.jpg', 1026: '../img/首页/shouji7.jpg', 1027: '../img/首页/shouji8.jpg', 1028: '../img/首页/shouji9.jpg', 1029: '../img/首页/shouji10.jpg', 1030: '../img/首页/shouji11.jpg', 1031: '../img/首页/shouji12.jpg', 1032: '../img/首页/shouji13.jpg', 1033: '../img/首页/shouji14.jpg', 1034: '../img/首页/shouji15.jpg', 1035: '../img/首页/shouji16.jpg', 1036: '../img/首页/shouji17.jpg', 1037: '../img/首页/shouji18.jpg', 1038: '../img/首页/shouji19.jpg', 1039: '../img/首页/shouji20.jpg', 1040: '../img/首页/shouji21.jpg', 1041: '../img/首页/shouji22.jpg', 1042: '../img/首页/shouji23.jpg', 1043: '../img/首页/shouji24.jpg', 1044: '../img/首页/shouji25.jpg', 1045: '../img/首页/shouji26.jpg'
        }

        , Head1: '5F', Head2: '国美超市'
        , text: { 1001: '手机', 1002: '充值', 1003: '/', 1005: '电器城', 1006: '荣耀手机', 1007: '潮3C', 1008: 'iPhone XR', 1009: 'iQOO', 1010: '配件', 1011: '淘实惠', 1012: '华为手机', 1013: '全面屏', 1014: '飞利浦', 1015: '热销推荐', 1016: '保护套', 1017: '中兴', 1018: '以旧换新', 1019: '小米', 1020: '诺基亚', 1021: '华为畅享10 plus 8 128G', 1022: '￥1899.00' }
    },

    {
        imgUrl: {
            1001: '../img/首页/1F.jpg', 1002: '../img/首页/phone_type1.jpg', 1003: '../img/首页/phone_type2.jpg', 1004: '../img/首页/phone_type3.jpg', 1005: '../img/首页/phone_type4.jpg', 1006: '../img/首页/phone_type5.jpg', 1007: '../img/首页/phone_type6.jpg'
            ,
            1008: '../img/首页/iqoo3_1.jpg', 1009: '../img/首页/iqoo3_2.jpg', 1010: '../img/首页/iqoo3_3.jpg', 1011: '../img/首页/iqoo3_4.jpg', 1012: '../img/首页/iqoo3_5.jpg', 1013: '../img/首页/iqoo3_6.jpg', 1014: '../img/首页/5Gshouji_1.jpg',
            1015: '../img/首页/5Gshouji_2.jpg', 1016: '../img/首页/5Gshouji_3.jpg', 1017: '../img/首页/5Gshouji_4.jpg', 1018: '../img/首页/5Gshouji_5.jpg', 1019: '../img/首页/5Gshouji_6.jpg'
            ,
            1020: '../img/首页/shouji1.jpg', 1021: '../img/首页/shouji2.jpg', 1022: '../img/首页/shouji3.jpg', 1023: '../img/首页/shouji4.jpg', 1024: '../img/首页/shouji5.jpg', 1025: '../img/首页/shouji6.jpg', 1026: '../img/首页/shouji7.jpg', 1027: '../img/首页/shouji8.jpg', 1028: '../img/首页/shouji9.jpg', 1029: '../img/首页/shouji10.jpg', 1030: '../img/首页/shouji11.jpg', 1031: '../img/首页/shouji12.jpg', 1032: '../img/首页/shouji13.jpg', 1033: '../img/首页/shouji14.jpg', 1034: '../img/首页/shouji15.jpg', 1035: '../img/首页/shouji16.jpg', 1036: '../img/首页/shouji17.jpg', 1037: '../img/首页/shouji18.jpg', 1038: '../img/首页/shouji19.jpg', 1039: '../img/首页/shouji20.jpg', 1040: '../img/首页/shouji21.jpg', 1041: '../img/首页/shouji22.jpg', 1042: '../img/首页/shouji23.jpg', 1043: '../img/首页/shouji24.jpg', 1044: '../img/首页/shouji25.jpg', 1045: '../img/首页/shouji26.jpg'
        }

        , Head1: '6F', Head2: '家居家装'
        , text: { 1001: '手机', 1002: '充值', 1003: '/', 1005: '电器城', 1006: '荣耀手机', 1007: '潮3C', 1008: 'iPhone XR', 1009: 'iQOO', 1010: '配件', 1011: '淘实惠', 1012: '华为手机', 1013: '全面屏', 1014: '飞利浦', 1015: '热销推荐', 1016: '保护套', 1017: '中兴', 1018: '以旧换新', 1019: '小米', 1020: '诺基亚', 1021: '华为畅享10 plus 8 128G', 1022: '￥1899.00' }
    },

    {
        imgUrl: {
            1001: '../img/首页/1F.jpg', 1002: '../img/首页/phone_type1.jpg', 1003: '../img/首页/phone_type2.jpg', 1004: '../img/首页/phone_type3.jpg', 1005: '../img/首页/phone_type4.jpg', 1006: '../img/首页/phone_type5.jpg', 1007: '../img/首页/phone_type6.jpg'
            ,
            1008: '../img/首页/iqoo3_1.jpg', 1009: '../img/首页/iqoo3_2.jpg', 1010: '../img/首页/iqoo3_3.jpg', 1011: '../img/首页/iqoo3_4.jpg', 1012: '../img/首页/iqoo3_5.jpg', 1013: '../img/首页/iqoo3_6.jpg', 1014: '../img/首页/5Gshouji_1.jpg',
            1015: '../img/首页/5Gshouji_2.jpg', 1016: '../img/首页/5Gshouji_3.jpg', 1017: '../img/首页/5Gshouji_4.jpg', 1018: '../img/首页/5Gshouji_5.jpg', 1019: '../img/首页/5Gshouji_6.jpg'
            ,
            1020: '../img/首页/shouji1.jpg', 1021: '../img/首页/shouji2.jpg', 1022: '../img/首页/shouji3.jpg', 1023: '../img/首页/shouji4.jpg', 1024: '../img/首页/shouji5.jpg', 1025: '../img/首页/shouji6.jpg', 1026: '../img/首页/shouji7.jpg', 1027: '../img/首页/shouji8.jpg', 1028: '../img/首页/shouji9.jpg', 1029: '../img/首页/shouji10.jpg', 1030: '../img/首页/shouji11.jpg', 1031: '../img/首页/shouji12.jpg', 1032: '../img/首页/shouji13.jpg', 1033: '../img/首页/shouji14.jpg', 1034: '../img/首页/shouji15.jpg', 1035: '../img/首页/shouji16.jpg', 1036: '../img/首页/shouji17.jpg', 1037: '../img/首页/shouji18.jpg', 1038: '../img/首页/shouji19.jpg', 1039: '../img/首页/shouji20.jpg', 1040: '../img/首页/shouji21.jpg', 1041: '../img/首页/shouji22.jpg', 1042: '../img/首页/shouji23.jpg', 1043: '../img/首页/shouji24.jpg', 1044: '../img/首页/shouji25.jpg', 1045: '../img/首页/shouji26.jpg'
        }

        , Head1: '7F', Head2: '汽车用品'
        , text: { 1001: '手机', 1002: '充值', 1003: '/', 1005: '电器城', 1006: '荣耀手机', 1007: '潮3C', 1008: 'iPhone XR', 1009: 'iQOO', 1010: '配件', 1011: '淘实惠', 1012: '华为手机', 1013: '全面屏', 1014: '飞利浦', 1015: '热销推荐', 1016: '保护套', 1017: '中兴', 1018: '以旧换新', 1019: '小米', 1020: '诺基亚', 1021: '华为畅享10 plus 8 128G', 1022: '￥1899.00' }
    },

]
var Main = '';
for (var i = 0; i < main_stores.length; i++) {

    Main += `
    <div class="The_main_stores9">
    <div class="The_main_stores1">
    <div class="The_main_stores1_1">
        <h2><span class="The_main_stores1_1_1">${main_stores[i].Head1}</span>${main_stores[i].Head2}</h2>
    </div>
</div>
<div class="The_main_stores2">
    <div class="The_main_stores2_1">
        <div class="The_main_stores2_1_1"><img src="${main_stores[i].imgUrl[1001]}"></div>
        <div class="The_main_stores2_1_2">
            <div class="The_main_stores2_1_2_1"><a
                    href="">${main_stores[i].text[1001]}</a><span>${main_stores[i].text[1003]}</span><a
                    href="">${main_stores[i].text[1002]}</a><span>${main_stores[i].text[1003]}</span><a
                    href="">${main_stores[i].text[1005]}</a>
            </div>
            <div class="The_main_stores2_1_2_2"><a href="">${main_stores[i].text[1006]}</a><a
                    href="">${main_stores[i].text[1007]}</a><a href="">${main_stores[i].text[1008]}</a></div>
            <div class="The_main_stores2_1_2_2"><a href="">${main_stores[i].text[1009]}</a><a
                    href="">${main_stores[i].text[1010]}</a><a href="">${main_stores[i].text[1011]}</a></div>
            <div class="The_main_stores2_1_2_2"><a href="">${main_stores[i].text[1012]}</a><a
                    href="">${main_stores[i].text[1013]}</a><a href="">${main_stores[i].text[1014]}</a></div>
            <div class="The_main_stores2_1_2_2"><a href="">${main_stores[i].text[1015]}</a><a
                    href="">${main_stores[i].text[1016]}</a><a href="">${main_stores[i].text[1017]}</a></div>
            <div class="The_main_stores2_1_2_2"><a href="">${main_stores[i].text[1018]}</a><a
                    href="">${main_stores[i].text[1019]}</a><a href="">${main_stores[i].text[1020]}</a></div>
        </div>
    </div>


    <div class="The_main_stores2_2">
        <div class="layui-carousel" id="test6${i}" lay-filter="test6">
            <div carousel-item="">
                <div class="entry">
                    <div class="Phone_Type">
                        <div class="Phone_type1">
                            <ul>
                                <li>
                                    <img src="${main_stores[i].imgUrl[1002]}" alt="">
                                </li>
                                <li>
                                    <img src="${main_stores[i].imgUrl[1003]}" alt="">
                                </li>
                                <li>
                                    <img src="${main_stores[i].imgUrl[1004]}" alt="">
                                </li>

                            </ul>
                            <ul>
                                <li>
                                    <img src="${main_stores[i].imgUrl[1005]}" alt="">
                                </li>
                                <li>
                                    <img src="${main_stores[i].imgUrl[1006]}" alt="">
                                </li>
                                <li>
                                    <img src="${main_stores[i].imgUrl[1007]}" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="layui-carousel" id="test7${i}">
                        <div carousel-item="">
                            <div class="IQPhone">
                                <div class="IQPhone1">
                                    <ul>
                                        <li><img src="${main_stores[i].imgUrl[1008]}" alt=""></li>
                                        <li><img src="${main_stores[i].imgUrl[1009]}" alt=""></li>
                                        <li><img src="${main_stores[i].imgUrl[1010]}" alt=""></li>
                                    </ul>
                                    <ul>
                                        <li><img src="${main_stores[i].imgUrl[1011]}" alt=""></li>
                                        <li><img src="${main_stores[i].imgUrl[1012]}" alt=""></li>
                                        <li><img src="${main_stores[i].imgUrl[1013]}" alt=""></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="GPhone">
                                <div class="GPhone1">
                                    <ul>
                                        <li><img src="${main_stores[i].imgUrl[1014]}" alt=""></li>
                                        <li><img src="${main_stores[i].imgUrl[1015]}" alt=""></li>
                                        <li><img src="${main_stores[i].imgUrl[1016]}" alt=""></li>
                                    </ul>
                                    <ul>
                                        <li><img src="${main_stores[i].imgUrl[1017]}" alt=""></li>
                                        <li><img src="${main_stores[i].imgUrl[1018]}" alt=""></li>
                                        <li><img src="${main_stores[i].imgUrl[1019]}" alt=""></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="entry2">
                    <div class="entry2">
                        <ul class="entry2_1">
                            <li><img src="${main_stores[i].imgUrl[1020]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1021]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1022]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1023]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1024]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                        </ul>
                        <ul class="entry2_1">
                            <li><img src="${main_stores[i].imgUrl[1025]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1026]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1027]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1028]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1029]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="entry2">
                        <ul class="entry2_1">
                            <li><img src="${main_stores[i].imgUrl[1030]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1031]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1032]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1033]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1034]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                        </ul>
                        <ul class="entry2_1">
                            <li><img src="${main_stores[i].imgUrl[1035]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1036]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1037]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1038]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1039]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="entry2">
                        <ul class="entry2_1">
                            <li><img src="${main_stores[i].imgUrl[1040]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1041]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1042]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1043]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1044]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                        </ul>
                        <ul class="entry2_1">
                            <li><img src="${main_stores[i].imgUrl[1045]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1035]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1034]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1030]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                            <li><img src="${main_stores[i].imgUrl[1031]}" alt="">
                                <span>${main_stores[i].text[1021]}</span>
                                <p><span>${main_stores[i].text[1022]}</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    `
}
$('.The_main_stores').html(Main)



// 热销榜

var Hot = [
    {
        imgUrl: {
            '1001': '../img/首页/hot1.jpg',
            '1002': '../img/首页/hot2.jpg',
            '1003': '../img/首页/hot3.jpg',
            '1004': '../img/首页/hot4.jpg',
            '1005': '../img/首页/hot5.jpg',
            '1006': '../img/首页/hot6.jpg',
            '1007': '../img/首页/hot7.jpg',
        }
        , textHTML: {
            '1001': '热销榜'
            , '1002': 'HOT'
            , '1003': '更多好货'
            , '1004': '贝德拉筋膜枪肌肉放松器电动按摩器深层震动运动理疗仪颈膜肌膜枪(深空灰/6个按摩头)'
            , '1005': '¥249.00'
            , '1006': '华为畅享10 plus 8 128G'
            , '1007': '￥1899.00'
            , '1008': '随时预约，快速响应'
            , '1009': '上门服务，安全更便捷'
            , '1010': '起'
        }

    }
]
var HotHtml = '';
for (var i = 0; i < Hot.length; i++) {
    HotHtml += `
    <div class="Hot_Singles1">
    <div class="Hot_Singles1_left">
        <div class="guess_top">
            <div>
                <h2>${Hot[i].textHTML[1001]}</h2>
                <span>${Hot[i].textHTML[1002]}</span>
            </div>

            <p><span class="guess_top1">${Hot[i].textHTML[1003]}</span><span>></span></p>
        </div>
        <div class="Hot_Singles1_left_2">
            <div class="Hot_Singles1_left_2_1">
                <img src="${Hot[i].imgUrl[1001]}" alt="">
                <div class="Hot_Singles1_left_big">
                    <span>${Hot[i].textHTML[1004]}</span>
                    <p><span>${Hot[i].textHTML[1005]}</span></p>
                </div>
            </div>
            <div class="Hot_Singles1_left_2_2">
                <ul>
                    <li>
                        <img src="${Hot[i].imgUrl[1002]}" alt="">
                        <div class="Hot_Singles1_left_2_2_1">
                            <span>${Hot[i].textHTML[1006]}</span>
                            <p><span>${Hot[i].textHTML[1007]}</span></p>
                        </div>

                    </li>
                    <li>
                        <img src="${Hot[i].imgUrl[1003]}" alt="">
                        <div class="Hot_Singles1_left_2_2_1">
                        <span>${Hot[i].textHTML[1006]}</span>
                        <p><span>${Hot[i].textHTML[1007]}</span></p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="${Hot[i].imgUrl[1004]}" alt="">
                        <div class="Hot_Singles1_left_2_2_1">
                        <span>${Hot[i].textHTML[1006]}</span>
                        <p><span>${Hot[i].textHTML[1007]}</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="${Hot[i].imgUrl[1005]}" alt="">
                        <div class="Hot_Singles1_left_2_2_1">
                        <span>${Hot[i].textHTML[1006]}</span>
                        <p><span>${Hot[i].textHTML[1007]}</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="Hot_Singles1_right">
        <div class="guess_top">
            <div>
                <h2>家电服务</h2>
                <span>SERVICE</span>
            </div>
            <p><span class="guess_top1">配件精选</span><span>/</span><span class="guess_top1">手机维修</span>
            </p>
        </div>
        <div class="Hot_Singles1_right_2">
            <div class="Hot_Singles1_right_2_1">
                <img src="${Hot[i].imgUrl[1006]}" alt="">
                <div class="Hot_Singles1_left_2_2_2">
                <span>${Hot[i].textHTML[1006]}</span>
                <p><span>${Hot[i].textHTML[1007]}</span><span>${Hot[i].textHTML[1010]}</span></p>
                    <div class="appointment">
                        <span>${Hot[i].textHTML[1008]}</span>
                        <span>${Hot[i].textHTML[1009]}</span>
                    </div>
                </div>
            </div>
            <div class="Hot_Singles1_right_2_1">
                <img src="${Hot[i].imgUrl[1007]}" alt="">
                <div class="Hot_Singles1_left_2_2_2">
                <span>${Hot[i].textHTML[1006]}</span>
                <p><span>${Hot[i].textHTML[1007]}</span><span>${Hot[i].textHTML[1010]}</span></p>
                    <div class="appointment">
                    <span>${Hot[i].textHTML[1008]}</span>
                    <span>${Hot[i].textHTML[1009]}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

$('.Hot_Singles').html(HotHtml)


// 右侧边
function Slide_Right() {
    $(".right_sidebar_user").hover(function () {
        $(".glide_right_sidebar_user").stop().animate({ left: '-90px' }, "show");
        $('.right_sidebar_user').css({ 'background': '#343434', 'cursor': 'pointer' })

    }, function () {
        $(".glide_right_sidebar_user").stop().animate({ left: '0px' }, "");
        $('.right_sidebar_user').css('background', '#5c5c5c')

    }, 100)


    $('.collect').hover(function () {
        $(".glide_right_collect").stop().animate({ left: '-90px' }, "");
        $('.collect').css({ 'background': '#343434', 'cursor': 'pointer' })

    }, function () {
        $(".glide_right_collect").stop().animate({ left: '0px' }, "");
        $('.collect').css('background', '#5c5c5c')
    })

    $('.right_sidebar_code1').hover(function () {
        $(".glide_right_code1").stop().animate({ left: '-140px' }, "");
        $('.right_sidebar_code1').css({ 'background': '#343434', 'cursor': 'pointer' })

    }, function () {
        $(".glide_right_code1").stop().animate({ left: '0px' }, "");
        $('.right_sidebar_code1').css('background', '#5c5c5c')
    })



    $('.right_sidebar_code2').hover(function () {
        $(".glide_right_code2").stop().animate({ left: '-90px' }, "");
        $('.right_sidebar_code2').css({ 'background': '#343434', 'cursor': 'pointer' })

    }, function () {
        $(".glide_right_code2").stop().animate({ left: '0px' }, "");
        $('.right_sidebar_code2').css('background', '#5c5c5c')
    })


    $('.right_sidebar_code3').hover(function () {
        $(".glide_right_code3").stop().animate({ left: '-90px' }, "");
        $('.right_sidebar_code3').css({ 'background': '#343434', 'cursor': 'pointer' })

    }, function () {
        $(".glide_right_code3").stop().animate({ left: '0px' }, "");
        $('.right_sidebar_code3').css('background', '#5c5c5c')
    })


    $('.right_sidebar_code4').hover(function () {
        $(".glide_right_code4").stop().animate({ left: '-90px' }, "");
        $('.right_sidebar_code4').css({ 'background': '#343434', 'cursor': 'pointer' })

    }, function () {
        $(".glide_right_code4").stop().animate({ left: '150px' }, "");
        $('.right_sidebar_code4').css('background', '#5c5c5c')
    })

}
Slide_Right();

// 返回顶部

$(document).ready(function () {
    //首先将#btn隐藏
    $(".right_sidebar_code4").hide();
    //当滚动条的位置处于距顶部300像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                $(".right_sidebar_code4").fadeIn(200);
            } else {
                $(".right_sidebar_code4").fadeOut(200);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".right_sidebar_code4").click(function () {
            $('body,html').animate({
                scrollTop: 0
            },
                500);
            return false;
        });
    });
});

// 吸顶菜单
$(document).ready(function () {
    //首先将#btn隐藏
    $(".Suction_menu").hide();
    //当滚动条的位置处于距顶部600像素以下时，跳转链接出现，否则消失
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $(".Suction_menu").fadeIn(200);
            $('.navigation_bar2').css({ 'position': 'fixed', 'top': '50px', 'display': 'none' })//吸顶后菜单选项隐藏

            $('.Suction_menu_all_main').hover(function () {
                $('.navigation_bar2').css('display', 'block')
            }, function () {
                $('.navigation_bar2').css('display', 'none')

            })
            $('.navigation_bar2').hover(function () {
                $('.navigation_bar2').css('display', 'block')
            }, function () {
                $('.navigation_bar2').css('display', 'none')

            })
        } else {
            $(".Suction_menu").fadeOut(200);
            $('.navigation_bar2').css({ 'position': 'relative', 'top': '0', 'display': 'block' })//吸顶前菜单选项显示

            $('.Suction_menu_all_main').hover(function () {
                $('.navigation_bar2').css('display', 'block')
            }, function () {
                $('.navigation_bar2').css('display', 'block')

            })
            $('.navigation_bar2').hover(function () {
                $('.navigation_bar2').css('display', 'block')
            }, function () {
                $('.navigation_bar2').css('display', 'block')

            })
        }
    });
});


/*搜索框*/
var search_box = ['空调', '美的空调', '海尔洗衣机', '华为手机', '海尔冰箱', '热水器', '冰箱', '手机', '洗衣机']
function SetChange() {
    var timer = setInterval(function () {
        var index = Math.floor(Math.random() * search_box.length)
        // console.log(index,search_box[index])
        $('input[type=text').val(search_box[index])
    }, 2000)
    $("input[type=text").focus(function () {
        clearInterval(timer)
        $('input[type=text').val('')
    });
    $('input[type=text').focusout(function () {
        $('input[type=text').val('空调')
        SetChange()
    })
}
SetChange();

// 楼层
$(document).ready(function () {
    //首先将#btn隐藏
    $(".floor").hide();
    //当滚动条的位置处于距顶部300像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                $(".floor").fadeIn(200);
            } else {
                $(".floor").fadeOut(200);
            }



        // 楼层
          for(let y=0 ;y<7;y++){
            if($(window).scrollTop()>=topBig+(y*560) && $(window).scrollTop()<topBig+((y+1)*560)){
                $('.floor1'+y).addClass('floor_bag').siblings().removeClass('floor_bag')
                $('.red_triangle1'+y).css('display','block')
                $('.red_triangle1'+(y-1)).css('display','none')
            }else{
                $('.floor1'+y).removeClass('floor_bag')
                $('.red_triangle1'+y).css('display','none')
            }
 
         }
        });
        //当点击跳转链接后，回到页面顶部位置

        // 楼层
        for (let i = 0; i < 7; i++) {
            var topBig = 1830
            // 1F
            $(".floor1"+i).click(function () {
                $('body,html').animate({
                    scrollTop: topBig+(i*560)
                    
                },500);
               
            });
 
        }

       


        //点击回顶部
        $(".go_up").click(function () {
            $('body,html').animate({
                scrollTop: 0
            },
                500);
            return false;
        });
        // 点击回底部
        $(".go_down").click(function () {
            $('body,html').animate({
                scrollTop: 6000
            },
                500);
            return false;
        });
    });
});
