(function($) {
    const $user_name = $('input').eq(0);
    const $user_pwd = $('input').eq(1);
    const $user_ema = $('input').eq(3);
    const $submit = $('.submit');
    const $errname = $('.span0');
    let $userflag = true; //检测用户名是否重复的标记，用来阻止提交
    $user_name.on('blur', function() {
        let $uval = $user_name.val();
        let $pval = $user_pwd.val();
        let use = true,
            pas = true,
            pass = true,
            ema = true,
            pho = true;

        $.ajax({
            type: "post",
            url: "http://10.31.158.51/items1905xsc/ROBAM/robam/php/registor.php",
            data: {
                "user_name": $uval,
                "user_pwd": $pval
            },
            dataType: 'json',
            success: function(respond) {
                console.log(respond, 1)
                if (respond) {
                    $errname.html('用户名已存在');
                    $errname.css({ "color": "red", "font-weight": "900", "font-size": "14px" });

                }
            }
        });
    })

    const aInput = document.querySelectorAll('input');
    let use = true,
        pas = true,
        pass = true,
        ema = true,
        pho = true;
    // 用户名检测
    aInput[0].onfocus = function() {
        if (this.value == '') {
            $('.span0').html('请输入用户名，用户名不能超过7个汉字或14个字符');
            $('.span0').css({ "font-size": "12px", "color": "#999" });
            console.log(1)
            use = false;
        }
    };

    aInput[0].onblur = function() {
        if (this.value != '') {
            let reg = /^[\u4e00-\u9fa5]+|[a-zA-Z]+$/;
            if (reg.test(this.value)) { //匹配成功
                let len = this.value.replace(/[\u4e00-\u9fa5]/g, 'bb').length;
                if (len <= 14) {
                    $('.span0').html('√');
                    $('.span0').css({ "color": "green" })
                    use = true;
                } else {
                    $('.span0').html('用户名不能超过7个汉字或14个字符');
                    $('.span0').css({ "color": "red" })
                    use = false;
                }
            } else { //报错
                $('.span0').html('请输入正确的用户名');
                $('.span0').css({ "color": "red" })
                use = false;
            }

        } else {
            $('.span0').html('请输入用户名');
            $('.span0').css({ "color": "red" })
            use = false;
        }
    };

    // 密码强度检测

    aInput[1].onfocus = function() {
        if (this.value == '') {
            $('.span1').html('请输入密码，密码长度为8-11个字符');
            $('.span1').css({ "font-size": "12px", "color": "red" })
            pas = false;
        }
    };
    aInput[1].onblur = function() {
        if (this.value == '') {
            $('.span1').html('请输入密码');
            $('.span1').css({ "color": "red" })
            pas = false;
        }
        if (pas) {
            $('.span1').html('√');
            $('.span1').css({ "color": "green" });
            pas = true;
        }
    };
    aInput[1].oninput = function() {
        if (this.value.length >= 6 && this.value.length <= 20) { //长度符合范围
            let num = 0; //字符的种类。
            let regnum = /\d+/; //数字
            let reglowercase = /[a-z]+/; //小写字母
            let reguppercase = /[A-Z]+/; //大写字母
            let othercase = /[\W\_]+/; //其他字符


            //this.value=‘ab12AD#$#’;
            if (regnum.test(this.value)) {
                num++;
            }

            if (reglowercase.test(this.value)) {
                num++;
            }

            if (reguppercase.test(this.value)) {
                num++;
            }

            if (othercase.test(this.value)) {
                num++;
            }
            //根据num的值判断输入的字符的种类。
            switch (num) {
                case 1:
                    $('.span1').html('   弱');
                    $('.span1').css({ "font-size": "12px", "color": "red" });
                    pas = false;
                    break;

                case 2:
                case 3:
                    $('.span1').html('   中');
                    $('.span1').css({ "font-size": "12px", "color": "yellow" });
                    pas = true;
                    break;

                case 4:
                    $('.span1').html('   强');
                    $('.span1').css({ "font-size": "12px", "color": "gerrn" });
                    pas = true;
                    break;
            }

        } else {
            $('.span1').html('密码太短');
            $('.span1').css({ "font-size": "12px", "color": "red" });
            pas = false;
        }
    };
    // 二次密码是否相同
    aInput[2].oninput = function() {
        if (aInput[1].value == aInput[2].value) {
            $('.span2').html('√');
            pass = true;
        } else {
            $('.span2').html('密码输入不一致');
            $('.span2').css({ "font-size": "12px", "color": "red" });
            pass = false;
        }
    };
    //邮箱------------
    $('.input').eq(3).focus(function() {
        if ($('.input').eq(3).html() == '') {
            console.log('12f')
            $('.span3').html('请输入邮箱');
            $('.span3').css({ "font-size": "12px", "color": "#999" });
        }
    })
    aInput[3].onblur = function() {
        let email = this.value;
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

        if (reg.test(email)) {
            $('.span3').html('√');
            ema = true;
        } else {
            $('.span3').html('请输入正确的邮箱');
            $('.span3').css({ "font-size": "12px", "color": "red" });
            ema = false;
        }
    };
    // 手机号码----------
    aInput[4].onblur = function() {
        let phone = this.value;
        let reg = /^1(3|5|8|9)\d{9}$/;

        if (reg.test(phone)) {

            $('.span4').html('√');
            pho = true

        } else {
            $('.span4').html('请输入正确的手机号码');
            $('.span4').css({ "font-size": "12px", "color": "red" });
            pho = false;
        }
    };
    //空提交
    $('.submit').click(function() {
        if ($('.input').eq(0).val() === '') {
            // console.log(12);
            $('.span0').html('请输入用户名');
            $('.span0').css({ "font-size": "12px", "color": "#ff0000" })
            use = false;
        }

        if ($('input').eq(1).val() === '') {
            $('.span1').html('请输入密码');
            $('.span1').css({ "font-size": "12px", "color": "#ff0000" })
            pas = false;

        }
        if ($('input').eq(2).val() === '') {
            $('.span2').html('请输入密码');
            $('.span2').css({ "font-size": "12px", "color": "#ff0000" })
            pass = false;

        }
        if ($('input').eq(3).val() === '') {
            $('.span3').html('请输入正确的邮箱');
            $('.span3').css({ "font-size": "12px", "color": "#ff0000" })
            ema = false;

        }
        if ($('input').eq(4).val() === '') {
            $('.span4').html('请输入正确的手机号码');
            $('.span4').css({ "font-size": "12px", "color": "#ff0000" })
            pho = false;
        }

        if (!use || !pas || !pass || !ema || !pho) { //标记变成false时，阻止跳转。
            // alert('错误')
            return false; //阻止跳转
        } else {
            alert('注册成功')
        }
    });
})(jQuery);


// (function($) {

// })(jQuery)