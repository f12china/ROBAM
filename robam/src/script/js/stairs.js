;
! function() {
    const $loutinav = $('.minwidth');
    const $loutinavli = $('.lili');
    const $last = $('.scrolltt');
    const $louceng = $('.wel-bottom-title');
    $(window).on('scroll', function() {
        let $wdtop = $(window).scrollTop();
        // console.log($wdtop)
        if ($wdtop >= 250) {
            $loutinav.show(200);
        } else {
            $loutinav.hide(200);
        };
        //滚动事件
        $louceng.each(function(index, element) {
            // console.log($louceng.eq(index).offset().top);
            let $loucengtop = $louceng.eq(index).offset().top + $(element).height() / 2;
            if ($loucengtop >= $wdtop) {
                $('.lili').not('.last').removeClass('active');
                $('.lili').not('.last').eq(index).addClass('active');
                return false
            }
        });
    });
    //点击跳转
    $loutinavli.not('.last').on('click', function() {
        // console.log(1);
        $(this).addClass('active').siblings().removeClass('active');
        let $loucengtop1 = $louceng.eq($(this).index()).offset().top;
        $('html,body').animate({
            scrollTop: $loucengtop1
        });
    });
    //回到顶部
    $last.on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    });
}();