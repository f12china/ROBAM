! function($) {
    let id = location.search.split('?')[1].split('=')[1];
    const $spic = $('.shopping-big img');
    const $bpic = $('.shopping-big');
    const $sf = $('.microscope'); //小范围图片
    const $bf = $('.magnifier'); //放大
    const $title = $('.title'); //标题
    const $price = $('.price');
    const $movelistUl = $('.movelist ul');
    const $details = $('.shopping-show');
    const $left = $('.btn-left');
    const $right = $('btn-right');
    const $btn = $('#addToCart'); //加入购物车
    // const $goodsnumcount =$('.goodsnum input');
    // const $linkbox =$('.linkbox');
    // const $close =$('.linkbox span');
    // const $closeA =$All('.linkbox a');
    // $spic[0] == 'img/15586937845544.png';
    // console.log($spic[0])

    $.ajax({
        url: 'http://10.31.158.51/items1905xsc/ROBAM/robam/php/pipeiid.php',
        dataType: 'json',
        data: {
            id: id
        }
    }).done(function(data) {
        let tab = [];
        tab = data.xqt.split(',');
        // console.log(tab);
        $spic.attr({ src: `${tab[0]}` });
        $bpic.attr({ src: `${data.xqt}` });
        $title.html(`${data.title}`);
        $price.html(`${data.price}`);
        //渲染详情页下面的tab切换列表 
        let htmlstr = '';
        $.each(tab, function(index, value) {
            // console.log(value);
            htmlstr += `
            <li>
            <img src="${value}" width="100%">
            </li>
            `
        })
        $('.shopping-view ul').html(htmlstr);

    });

}(jQuery)