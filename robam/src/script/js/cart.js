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
            alert('每人限购五件');
            n = 5;
        }
        let pdt_id = $(this).parent().data('pdtid');
        let good_type = $(this).parent().data('type');
        updateShoppingCart(pdt_id, n, good_type);

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
        updateShoppingCart(pdt_id, n, good_type);
    });


    function updateShoppingCart(pdt_id, nums, good_type) {
        $.post("/Home/Cart/doEdit", {
                "pdt_id": pdt_id,
                "pdt_nums": nums,
                "good_type": good_type
            },
            function(data) {
                if (data.status == false) {
                    $.oppo(data.message);
                    return;
                }
            },
            'json'
        );
    }
    // 璧嬪€�
    $(".num-inp").each(function() {
        $(this).val($(this).siblings('.num').html());
    });

    $('.add-change .ico').on('click', function() {
        $(this).parent(".add-change").hide().parents('dd').addClass('hover').find('.into').removeClass('hide');

    })

    $('.dd-dele').on('click', function() {
        $(this).parents('.into').addClass('hide').parents('dd').removeClass('hover').find('.add-change').show();

    })

    //     // 鍏ㄩ€�
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
            if (size == 0) {
                $('.cart').hide();
                $('.cart-none').fadeIn();
            };
        };
    });

    //     //鍒犻櫎鎵€閫�
    //     $('.all-dele').on('click', function() {
    //         if (confirm('纭畾鍒犻櫎鎵€閫夊晢鍝侊紵')) {
    //             let i = 0;
    //             let data = new Object();
    //             data['pid'] = {};
    //             $('.list li').each(function() {
    //                 let _this = $(this);
    //                 if (_this.find('.check').hasClass("checked")) {
    //                     _this.remove();
    //                     data['pid'][i] = _this.find('input[type="checkbox"]').eq(0).val();
    //                     i++;
    //                 };
    //             });
    //             $.get('/Ucenter/Cart/doDel', data)
    //           
    //             let size = $('.cart-list li').size();
    //             $('.all-nun').html(size);
    //             if (size == 0) {
    //                 $('.cart').hide();
    //                 $('.cart-none').fadeIn();
    //             };
    //         };
    //     })

    //     $(".list .check").click(function() {
    //         let _this = $(this);

    //         if (_this.hasClass("checked")) {
    //             _this.removeClass("checked");
    //             _this.children('input').prop('checked', '');
    //           ;
    //         } else {
    //             _this.addClass("checked");
    //             _this.children('input').prop('checked', 'checked');
    //           ;
    //         }
    //         let tok = 0;
    //         $('.list li').each(function() {
    //             if ($(this).find(".check").hasClass("checked")) {
    //                 tok = tok + 1;
    //             };
    //         })
    //         if (tok == $('.list li').size()) {
    //             $('.cart-top .check,.cart-bot .check').addClass("checked");
    //         } else {
    //             $('.cart-top .check,.cart-bot .check').removeClass("checked");
    //         }

    //     });

    //     $('.cart-box .cart-bot .links').on('click', function() {
    //         num = 0
    //         $('.list li').each(function() {
    //             let _this = $(this);
    //             if (_this.find('.check').hasClass("checked")) {
    //                 num += 1
    //             }
    //         })

    //         if (num == 0) {
    //             $.oppo("璇烽€夋嫨鍟嗗搧")
    //         } else {
    //             $("#cartForm").submit();
    //         }
    //     })

    //     $('.all-nun').html($('.list li').length)

    //     function refreshMoney() {
    //         let _num = 0;
    //         let _price = 0;
    //         let arr = 0;
    //         let _ttnum = 0;
    //         let dd_allprist = 0;
    //         let size = 0;
    //         $('.list li').each(function() {
    //             let _this = $(this);
    //             if (_this.find('.check').hasClass("checked")) {
    //                 _this.addClass('hover')
    //                 size += 1
    //                 let number = parseInt(_this.find('.num').html()); //浠舵暟
    //                 _this.find('dd.hover').each(function() {
    //                     let d_this = $(this);
    //                     let dd_prist = d_this.find('.dd-price').data('ddunit');
    //                     dd_allprist += dd_prist;
    //                 })
    //                 _num += number;
    //                 let price = parseFloat(_this.find('.price').data("unit")); //鍗曚环
    //                 if (price > 0) {
    //                     let unitPrice = parseFloat(number * price * 100) / 100;
    //                     let liunit = unitPrice + dd_allprist
    //                     _this.find('.sum-pice').html(parseFloat(unitPrice).toFixed(2));

    //                     _this.find('.integral-pice').html(parseInt(_this.find('.integral-pice').data('point')) * number);
    //                     _price += liunit;

    //                     arr += ',' + _this.data('id'); //鑾峰彇浜у搧id
    //                 }

    //                 let ttnum = 1; //鍟嗗搧涓暟
    //                 _ttnum += ttnum;
    //             } else {
    //                 let number = parseInt(_this.find('.num').html()); //浠舵暟
    //                 _num += number;
    //                 let price = parseFloat(_this.find('.price').data("unit")); //鍗曚环
    //                 if (price > 0) {
    //                     let unitPrice = parseFloat(number * price * 100) / 100;
    //                     _this.find('.sum-pice').html(parseFloat(unitPrice).toFixed(2));
    //                     _this.find('.integral-pice').html(parseInt(unitPrice));
    //                 }
    //             }

    //         });
    //         $(".all-price").html(parseFloat(_price).toFixed(2));
    //         $('.select').html(size);
    //     };
    // })

    // $(document).ready(function() {
    //     $.post("/Coupon/Index?is_cart=1", function(data) {
    //         if (data) {
    //             $('.see-discount').find('span:eq(0)').html('鏌ョ湅浼樻儬鍒�')
    //             $('.discount-box').html(data);
    //         } else {
    //             $('.see-discount').html('鏆傛棤浼樻儬鍒�').css({ 'color': '#ccc' });
    //         }
    //     }, 'HTML');
});