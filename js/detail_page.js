$('.nav-main').children().hover(function(){
    $(this).addClass('nav-bag').siblings().removeClass('nav-bag')
},function(){
    $(this).removeClass('nav-bag')
})

$('.monopoly-right').hover(function(){
    $('.pop-box').css('display','block')
    $('.downward').css('transform','rotate(180deg)')
},function(){
    $('.pop-box').css('display','none')
    $('.downward').css('transform','rotate(0deg)')
})
$('.pop-box').hover(function(){
    $('.pop-box').css('display','block')
},function(){
    $('.pop-box').css('display','none')
})
