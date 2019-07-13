$(function() {
    $(".list .add").click(function() {
        //限制商品数量
        let n = parseInt($(this).parent().find(".num").html());

        if (n + 1 > 5) {
            return false;
        }
        n = n + 1;
        if (n < 5) {

            $(this).siblings('.num').html(n);
            $(this).parent().find("input").val(n + 1);
        } else {

            $(this).siblings('.num').html(5);
            $(this).parent().find("input").val(5);
            alert('温馨提示 ： 每人限购五件');
            n = 5;
        }
        let pdt_id = $(this).parent().data('pdtid');
        let good_type = $(this).parent().data('type');


    })
    $(".list .cut").click(function() {
        let n = parseInt($(this).parent().find(".num").html());

        if (n - 1 <= 0) {
            return false;
        }
        n = n - 1;
        if (n > 1) {
            $(this).siblings('.num').html(n);

            $(this).parent().find("input").val(n);

        } else {
            n = 1;
            $(this).siblings('.num').html(1);

            $(this).parent().find("input").val(1);

        }
        let pdt_id = $(this).parent().data('pdtid');
        let good_type = $(this).parent().data('type');

    });

    //     全选
    $(".all-check .check").click(function() {
        if (!$(this).hasClass("checked")) {
            $('.all-check').each(function() {
                $(this).find(".check").addClass("checked");
            })
            $(".list li").each(function() {
                $(this).find(".check").addClass("checked");
            });
            $('input[name^=pid]').prop('checked', 'checked');;
        } else {
            $('.all-check').each(function() {
                $(this).find(".check").removeClass("checked");
            })
            $(".list li").each(function() {
                $(this).find(".check").removeClass("checked");
            });
            $('input[name^=pid]').prop('checked', '');;
        }
    });
    //     //鍒犻櫎
    $(".list .dele").click(function() {
        if (confirm('确定要删除吗')) {
            $(this).parents("li").remove();
            let listheight = $('.cart-box .cart-list').height();

            let size = $('.cart-list li').size();
            $('.all-nun').html(size);
            let data = new Object();
            data['pid'] = $(this).data('pid');
            $.get('/Ucenter/Cart/doDel', data)

        };
    });
})