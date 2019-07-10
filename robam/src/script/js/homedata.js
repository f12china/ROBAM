(function($) {
    $.ajax({
        type: "get",
        url: "http://10.31.158.51/items1905xsc/ROBAM/robam/php/homedata.php",
        dataType: "json",
        success: function(product) {
            let htmlstr = '';
            // console.log(product);
            $(product).each(function(i, e) {
                console.log(e)
                    // let pic = JSON.parse(e.pic)
                htmlstr += `
                <div class="charu">
                <li class="productTab ">
                 
                    <!-- 活动小标签 -->
                    <a href="script:; ">
                        <div class="pic fl "><img class="lazy" data-original="${e.pic}"></div>
                        <div class="con fr ">
                            <h2>${e.title}</h2>
                            <p>${e.donation}</p>
                            <div class="money "> 特惠价：¥<span class="yuan ">${e.price}</span></div>
                            <div class="more ">立即购买</div>
                        </div>
                    </a>
                </li>
            </div>
                `
            });
            $('.wel-limit-list').html(htmlstr);

            $(function() {
                $("img.lazy").lazyload({
                    effect: "fadeIn"
                });
            });
        }

    });

})(jQuery);