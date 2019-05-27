/**
 * Created by aoc on 2017/2/21.
 */

$(document).ready(function(e) {
    // 验证码生成
    var captcha_img = $('#verification_img');
    var verifyimg = captcha_img.attr("src");
    captcha_img.attr('title', '点击刷新');
    console.log()
    captcha_img.click(function(){
        if( verifyimg.indexOf('?')>0){
            $(this).attr("src", verifyimg+'&random='+Math.random());
        }else{
            $(this).attr("src", verifyimg.replace(/\?.*$/,'')+'?'+Math.random());
        }
    });
});

$('#form-register').validate({
    errorElement:'span',
    errorClass:'inputError',
    success:function(label){
        label.addClass('success');
    },
    submitHandler:function(form){
        check_register();
    },
    rules:{
        'account':{
            required:true,
            email:true,
        },
        'password':{
            required:true,
            rangelength: [6, 20],
        },
        'password2':{
            required:true,
            equalTo:".password",
        },
        'verification':{
            required:true,
        },

    },
    messages:{
        'account':{
            required:'不可为空!',
            email:'请输入正确邮箱格式',
        },
        'password':{
            required:'不可为空!',
            rangelength:'密码需为6-20之间',
        },
        'password2':{
            required:'不可为空!',
            equalTo:'两次密码不相同!'
        },
        'verification':{
            required:'不可为空!',
        },
    }
});

function check_register(){
    var account = $('#account').val();
    var passwd = $('#password').val();
    var verify = $('#verification').val();
    var url = host_path+'/User/register_do';
    var data = {};
    data.email = account;
    data.passwd = passwd;
    data.verify = verify;
    $.ajax({
        url:url,
        data:data,
        type:'POST',
        success:function(e){
            var obj = eval("("+e+")");
            if(obj.state == 'fail'){
                $('#verification_info').html('验证码错误!');
            }else if(obj.state == 400){
                $('#account_info').html('账号已存在!');
            }else if(obj.state == 200){
                var locationUrl = host_path+'/User/registerSuccess';
                window.location.href=locationUrl;
            }else{
                alert(obj.info);
            }
        }
    })
}



