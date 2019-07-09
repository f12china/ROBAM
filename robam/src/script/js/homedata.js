(function($) {
    $.ajax({
        type: "get",
        url: "http://10.31.158.51/items1905xsc/ROBAM/robam/php/homedata.php",
        dataType: "json",
        success: function(product) {
            let htmlstr = '';
            // console.log(product);
            $(product).each(function(i, e) {
                console.log(e);
                // let pic = JSON.parse(e.pic)
                htmlstr += `
               
                `


            });
            $('.m-content-list').html(htmlstr);
            $(function() {
                $("img.lazy").lazyload({
                    effect: "fadeIn"
                });
            });
        }

    });

})(jQuery);