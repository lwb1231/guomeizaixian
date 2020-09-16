$('.use_phone_login').focus(function(){
    $('.tips_phone_login').css('display','block')
    $('.tips_phone_import').css('display','none')
})
$('.use_phone_login').blur(function(){
    $('.tips_phone_login').css('display','none')
    $('.tips_phone_import').css('display','block')
    $('.use_phone_login').css('border-color','#ff4c4c')
})


$('.userName_login').focus(function(){
    $('.tips_phone_login1').css('display','block')
    $('.tips_phone_import1').css('display','none')
    $('.tips_phone_import2').css('display','none')
})
$('.userName_login').blur(function(){
    $('.tips_phone_login1').css('display','none')
    $('.tips_phone_import1').css('display','block')
    $('.use_phone_login').css('border-color','#ff4c4c')
})


$('.password_login').focus(function(){
    $('.tips_phone_login2').css('display','block')
    $('.tips_phone_import2').css('display','none')
    $('.tips_phone_import1').css('display','none')
    $('.use_phone_login').css('border-color','#c9c9c9')
})
$('.password_login').blur(function(){
    $('.tips_phone_login2').css('display','none')
    $('.tips_phone_import2').css('display','block')
    $('.use_phone_login').css('border-color','#ff4c4c')
})

// $('.next_step').click(function(){
//     $('.tips_phone_import').css('display','block')
//     $('.fist_step,.verification').css('display','none')
//     $('.second_step').css('display','block')
//     $('.wire_red1').css('background','#ff4c4c')
//     $('.second').css('color','#ff4c4c')
//     $('.step_number2').css('border-color','#ff4c4c')
//     $('.tips_phone_login').css('display','none')
//     $('.1').css('border-color','#ff4c4c')
//     $('.next_step').click(function(){
//         $('.tips_phone_import').css('display','none')
//         $('.fist_step,.verification').css('display','none')
//         $('.second_step').css('display','none')
//         $('.wire_red2').css('background','#ff4c4c')
//         $('.thirdly').css('color','#ff4c4c')
//         $('.step_number3').css('border-color','#ff4c4c')
//         $('.tips_phone_login').css('display','none')
//         $('.thirdly').css('border-color','#ff4c4c')
//         $('.third_step_succeed').css('display','block')
//         $('.down_step,.enterprise_user').css('display','none')
//       })
// })


$('.Generate1').click(function(){
    var use_phone_login=$('.use_phone_login').val()
  
    if(use_phone_login){
        // 第一步
        $('.fist_step,.verification,.tips_phone_import').css('display','none')
        // 第二步
        $('.second_step').css('display','block')
        $('.wire_red1').css('background','#ff4c4c')
        $('.second').css('color','#ff4c4c')
        $('.step_number2').css('border-color','#ff4c4c')
        $('.tips_phone_login').css('display','none')
        $('.Generate1').css('display','none')
        $('.Generate2').css('display','block')
    }else{
        // 没有账号，点击下一步后
        $('.tips_phone_import').css('display','block')
        $('.use_phone_login').css('border-color','#ff4c4c')
    }
})
    
    $('.Generate2').click(function(){
        var userName_login=$('.userName_login').val()
        var password_login=$('.password_login').val()
        
        if(userName_login && password_login){
            // 账号密码同事存在
            $('.tips_phone_import').css('display','none')
            $('.fist_step,.verification').css('display','none')
            $('.second_step').css('display','none')
            $('.wire_red2').css('background','#ff4c4c')
            $('.thirdly').css('color','#ff4c4c')
            $('.step_number3').css('border-color','#ff4c4c')
            $('.tips_phone_login').css('display','none')
            $('.thirdly').css('border-color','#ff4c4c')
            $('.third_step_succeed').css('display','block')
            $('.down_step,.enterprise_user').css('display','none')
        }if(!userName_login && !password_login){
            // 账号密码同事不存在
                $('.tips_phone_import1').css('display','block')
                $('.userName_login').css('border-color','#ff4c4c')
        }if(userName_login && !password_login){
            $('.tips_phone_import2').css('display','block')//密码提示
            $('.password_login').css('border-color','#ff4c4c')
            $('.tips_phone_import1').css('display','none')
            $('.userName_login').css('border-color','#c9c9c9')
        }
        if(!userName_login && password_login){
            $('.tips_phone_import1').css('display','block')
            $('.userName_login').css('border-color','#ff4c4c')
            $('.tips_phone_import2').css('display','none')
        }else{
        }
    })
 


// 登陆
// $('.lg').click(function () {
//     var username = $("#inputUser").val()
//     var password = $("#inputPassword").val()
//     if (!username || !password) {
//         alert('请输入账号密码')
//         return false;
//     } else {
//         sessionStorage.setItem('username', username)
//         location.href = 'users.html'
//     }
//     // sessionStorage.removeItem("username");

// })
//  // 判断是否登录 
// function isLogin(){
//   var username =sessionStorage.getItem('username');
//   if(!username){
//       location.href='login.html'
//   }
// }