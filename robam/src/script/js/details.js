! function($) {
    let id = location.search.split('?')[1].split('=')[1];
    const $spic = $('.shopping-big img');
    const $bpic = $('.shopping-big');
    const $sf = $('.microscope'); //小范围图片
    const $bf = $('.magnifier img'); //放大
    const $title = $('.title'); //标题
    const $price = $('.price');
    const $movelistUl = $('.shopping-view ul'); //小图UL
    const $details = $('.shopping-show');
    const $left = $('.btn-left');
    const $right = $('.btn-right');
    const $btn = $('#addToCart'); //加入购物车
    const $jian = $('.jian');
    const $jia = $('.jia');
    let $shuliang = $('.shuliang');
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
        $bpic.attr({ src: `${tab[0]}` });
        $title.html(`${data.title}`);
        $price.html(`${data.price}`);
        //渲染下面的小图
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
        //鼠标悬浮切图片
        const $piclistli = $('.shopping-view ul li');
        $piclistli.on('mouseover', function() {
            let imgurl = $(this).find('img').attr('src');

            $spic.attr({ src: imgurl });
            // $bf.attr({ src: imgurl });
        })
        $bpic.on('mouseover', function() {
                let imgurl = $(this).find('img').attr('src');
                // console.log(imgurl);
                $bf.attr({ src: imgurl });
            })
            //点击左右箭头切换图片
        let num = 5;
        const $listli = $('.outer li');
        const $listliwidth = $listli.eq(0).width() + 5;
        $movelistUl.width = ($listliwidth * $listli.length);
        // console.log($listliwidth)
        // 右键点击
        $right.on('click', function() {
            if ($listli.length > num) {
                num++;
                // console.log(num)
            };
            if ($listli.length == num) {}
            $movelistUl.stop().animate({
                    left: -(num - 5) * $listliwidth
                })
                // console.log($movelistUl)
        });
        //左键点击
        $left.on('click', function() {
            console.log(2)
            if (num > 5) {
                num--;
            };
            $movelistUl.stop().animate({
                left: -(num - 5) * $listliwidth

            })
        });
        //商品数量加减
        let slnum = 1;

        $jia.on("click", function() {
            slnum++;
            $shuliang.val(slnum);
            // console.log($shuliang.val())
        })
        $jian.on("click", function() {
            if (slnum == 1) {
                slnum == 1
            } else {
                slnum--;
                $shuliang.val(slnum);
            }
            // console.log($shuliang.val())
        });
        //商品存入cookie
        let idarr = [];
        let numarr = [];
        //判断cookie中是否存在对应商品
        function cookievalue() {
            if ($.cookie('id') && $.cookie('shuliang')) {
                idarr = $.cookie('id').split(',');
                numarr = $.cookie('shuliang').split(',');
            }
        };
        //加入购物车，数据存入cookie
        const $gb = $('.guangbi');
        const $gouwu = $('.gouwu')
        $gb.on("click", function() {
            // console.log(1)
            $('.gouwu').hide();
        });
        $btn.on('click', function() {
            //点击加入购物车，出现弹框
            $('.gouwu').show();
            $('.bgmask').addClass('so-openmask');
            // console.log($('.cartclick_choose'))
            cookievalue(); //点击加入购物车按钮时，先判断cookie中是否已经存在该商品
            if ($.inArray(id, idarr) === -1) { //如果当前商品的ID不在cookie中
                idarr.push(id); //存ID
                numarr.push($shuliang.val()); //存数量
                $.cookie('id', idarr.join(','), { expires: 10 }) //写入cookie
                $.cookie('shuliang', numarr.join(','), { expires: 10 })
            } else { //添加的商品在cookie中ID已存在
                let index = $.inArray(id, idarr);
                let sum = parseInt(numarr[index]) + parseInt($shuliang.val());
                numarr[index] = sum;
                $.cookie('shuliang', numarr.join(','), { expires: 10 })
            }
        })
    });

}(jQuery);