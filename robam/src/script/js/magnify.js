! function($) {
    //构造函数
    function Fdj() {
        //取元素  
        this.itemcontainer = $('.shopping-show');
        this.spic = $('.shopping-big');
        this.sf = $('.microscope');
        this.df = $('.magnifier');
        this.bpic = $('.bpic');
        let lp = null;
        let tp = null;
    }
    //原型
    Fdj.prototype.init = function() {
            let _this = this;
            //鼠标移入小图，大图出现,移出消失
            this.spic.hover(function() {
                // console.log(1);
                _this.df.show();
                _this.sf.show();
                _this.sfsize();
                _this.sf.on('mousemove', function(ev) {
                    let event = ev || window.event;
                    _this.sfposition(event);
                    _this.bpicposition();

                })
            }, function() {
                _this.df.hide();
                _this.sf.hide()
            })
        }
        //将鼠标的位置给sf，让sf跟随鼠标移动
    Fdj.prototype.sfposition = function(event) {
            lp = event.pageX - this.itemcontainer.offset().left - this.sf.width() / 2;
            tp = event.pageY - this.itemcontainer.offset().top - this.sf.height() / 2;

            if (lp <= 0) {
                lp = 0;
            } else if (lp >= this.itemcontainer.width() - this.sf.width()) {
                lp = this.itemcontainer.width
            };
            if (tp <= 0) {
                tp = 0;
            } else if (tp >= this.spic.height() - this.sf.height()) {
                tp = this.itemcontainer.height;
                console.log(001)
            }
            this.sf.css({
                left: lp,
                top: tp
            })
        }
        //求小放大镜的尺寸
    Fdj.prototype.sfsize = function() {
            let width = this.df.width() * this.spic.width() / this.bpic.width();
            let height = this.df.height() * this.spic.height() / this.bpic.height();
            this.lrate = this.df.width() / this.sf.width();
            this.trate = this.df.width() / this.sf.height();
            this.sf.width(width);
            this.sf.height(height);

        }
        //让大图反方向移动

    Fdj.prototype.bpicposition = function() {
            this.bpic.css({
                left: -this.lrate * lp,
                top: -this.trate * tp,

            })
        }
        //调用
    new Fdj().init()
}(jQuery);