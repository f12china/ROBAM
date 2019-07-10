;
! function() {
    let sid = location.search.substring(1).split('=')[1];
    const spic = document.querySelector('.shopping-big');
    const bpic = document.querySelector('.shopping-big');
    const sf = document.querySelector('.microscope'); //小范围图片
    const bf = document.querySelector('.magnifier'); //放大
    const title = document.querySelector('.title'); //标题
    const price = document.querySelector('.price');
    const movelistUl = document.querySelector('.movelist ul');
    const details = document.querySelector('.shopping-show');
    const left = document.querySelector('.btn-left');
    const right = document.querySelector('btn-right');
    const btn = document.querySelector('#addToCart'); //加入购物车
    // const goodsnumcount = document.querySelector('.goodsnum input');
    // const linkbox = document.querySelector('.linkbox');
    // const close = document.querySelector('.linkbox span');
    // const closeA = document.querySelectorAll('.linkbox a');

    ajax({
        url: 'http://10.31.158.51/items1905xsc/ROBAM/robam/php/conndata.php',
        data: {
            picid: id
        },
        dataType: 'json',
        success: function(objdata) {
            //1.拼接放大镜图片等信息
            spic.querySelector('img').src = objdata.url;
            spic.querySelector('img').setAttribute('sid', objdata.picid);
            bpic.src = objdata.url;
            title.innerHTML = objdata.title;
            price.innerHTML = objdata.price;
            //拼接小图列表。
            let ullist = objdata.imgurls.split(',');
            let lihtml = '';
            for (let i = 0; i < ullist.length; i++) {
                lihtml += '<li><img src="' + ullist[i] + '"></li>';
            }
            movelistUl.innerHTML = lihtml;
            console.log(ullist);
        }
    });
}();