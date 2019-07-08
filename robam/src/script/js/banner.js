$(function() {
    /***用于放图片的数组*****/
    let arr = ["img/banner5d19ae9de9d1e.jpg", "img/banner5d1feeafa485b.jpg", "img/banner5ca1e3b63df3a.jpg"];
    /****初始化页面启动显示的图片*****/
    $(".banner li img").attr("src", arr[0]);


    // console.log($(".banner li img"));
    let index = 0;
    let timer = null;

    /****鼠标滑动到按钮时，显示当前的图片*****/
    $(".btns span").hover(function() {
            clearInterval(timer);
            index = $(this).index();
            //alert(index);
            // console.log(1);
            $(this).removeClass("cur").siblings().addClass("cur");
            $(".banner li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 500);
        },
        function() {
            auto();
        }
    );
    /*****自动播放图片的定时器****/
    auto();

    function auto() {
        timer = setInterval(function() {
            index++;
            if (index > 2) {
                index = 0;
            }
            $(".btns span").eq(index).removeClass("cur").siblings().addClass("cur");
            $(".banner li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 500);
        }, 2000);
    };
    /*****点击切换图片****/
    function click() {
        $('.prev').click(function() {
            index--;
            if (index < 0) {
                index = 2;
            }
            $(".btns span").eq(index).removeClass("cur").siblings().addClass("cur");
            $(".banner li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 500);

        });
        $('.next').click(function() {
            index++;
            if (index > 2) {
                index = 0;
            }
            $(".btns span").eq(index).removeClass("cur").siblings().addClass("cur");
            $(".banner li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 500);

        })
    }
    click();
});