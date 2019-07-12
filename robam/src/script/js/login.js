!(function($) {
    const $userName = $('#userName');
    const $repwd = $('#pwd');
    const $submit = $('#dengru');
    $submit.on('click', function() {
        let $uval = $userName.val();
        let $pval = $repwd.val();
        $.ajax({
            type: "post",
            url: "http://10.31.158.51/items1905xsc/ROBAM/robam/php/login.php",
            data: {
                "userName": $uval,
                "repwd": $pval
            },
            dataType: 'json',
            success: function(response) {
                if (!response) {
                    alert('用户名或密码错误')
                } else {
                    location.href = "http://10.31.158.51/items1905xsc/ROBAM/robam/src/home.html";
                }
            }
        });
    })
})(jQuery);