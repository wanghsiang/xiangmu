
!function ($) {
    //头部nav
    class head {
        constructor() {
            this.nav_a1 = $('.nav_a1');
            this.jsnav1 = $('.jsnav1');
            this.oA = $('.jsnav1 a');
            this.nav_a2 = $('.nav_a2');
            this.jsnav2 = $('.jsnav2');
            this.oA2 = $('.jsnav2 a');
            this.nav_a3 = $('.nav_a3');
            this.jsnav3 = $('.jsnav3');
            this.oA3 = $('.jsnav3 a');
            this.nav_a5 = $('.nav_a5');
            this.jsnav5 = $('.jsnav5');
            this.oA4 = $('.jsnav5 a');
            this.ho = $('.home');
            this.guanzu = $('#guanzu');
            this.zhu = $('#zhu');
            this.guanzu2 = $('#guanzu2');
            this.zhu2 = $('#zhu2');
            this.guanzu3 = $('#guanzu3');
            this.zhu3 = $('#zhu3');
            this.guanzu4 = $('#guanzu4');
            this.zhu4 = $('#zhu4');
            this.xian = $('.xian');
            this.yinc = $('.yinc');
            this.arrowtop5 = $('.arrowtop5')
            this.arrowtop4 = $('.arrowtop4')
            this.arrowtop3 = $('.arrowtop3')
            this.arrowtop2 = $('.arrowtop2')
            this.arrowtop1 = $('.arrowtop1')
            this.A1 = $('#guanzu .a1');
            this.A2 = $('#guanzu4 .a2');
          
        }
        init() {
            var _this = this
            //topnav
            this.xian.hover(function () {
                _this.yinc.show();
                $(this).css({
                    background: '#fff'
                })
                _this.arrowtop5.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png) -16px -28px no-repeat'
                })
            }, function () {
                _this.yinc.hide()
                $(this).css({
                    background: '#f2f2f2'
                })
                _this.arrowtop5.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png)  -30px -37px no-repeat'
                })

            })

            this.guanzu.hover(function () {

                _this.zhu.show();
                $(this).css({
                    background: '#fff'
                })
                _this.arrowtop1.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png) -16px -28px no-repeat'
                })
                _this.A1.css({
                    transition: '0.7s',
                    color: '#d70057'
                })
            }, function () {
                _this.zhu.hide()
                $(this).css({
                    background: '#f2f2f2'
                })
                _this.arrowtop1.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png)  -30px -37px no-repeat'
                })

                _this.A1.css({
                    transition: '0.7s',
                    color: 'black'
                })
            })
            this.guanzu2.hover(function () {
                _this.zhu2.show();
                $(this).css({
                    background: '#fff',
                })
                _this.arrowtop2.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png) -16px -28px no-repeat'
                })
            }, function () {
                _this.zhu2.hide()
                $(this).css({
                    background: '#f2f2f2'
                })
                _this.arrowtop2.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png)  -30px -37px no-repeat'
                })
            })
            this.guanzu3.hover(function () {
                _this.zhu3.show();
                $(this).css({
                    background: '#fff'
                })
                _this.arrowtop3.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png) -16px -28px no-repeat'
                })
            }, function () {
                _this.zhu3.hide()
                $(this).css({
                    background: '#f2f2f2'
                })
                _this.arrowtop3.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png)  -30px -37px no-repeat'
                })
            })
            this.guanzu4.hover(function () {
                _this.zhu4.show();
                $(this).css({
                    background: '#fff'
                })
                _this.arrowtop4.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png) -16px -28px no-repeat'
                })
                _this.A2.css({
                    transition: '0.7s',
                    color: '#d70057'
                })
            }, function () {
                _this.zhu4.hide()
                $(this).css({
                    background: '#f2f2f2'
                })
                _this.arrowtop4.css({
                    background: 'url(http://0.js.al.okbuycdn.com/resources/images/v6/common/section-tigger.png)  -30px -37px no-repeat'
                })
                _this.A2.css({
                    transition: '0.7s',
                    color: 'black'
                })
            })
            //运动生活
            this.nav_a1.hover(function () {
                _this.jsnav1.show();
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#fff');
                _this.jsnav1.hide()
            })

            this.jsnav1.hover(function () {
                $(this).show();
            }, function () {
                $(this).hide();
            })
            //休闲服饰
            this.nav_a2.hover(function () {
                _this.jsnav2.show();
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#fff');
                _this.jsnav2.hide()
            })

            this.jsnav2.hover(function () {
                $(this).show()
            }, function () {
                $(this).hide()
            })
            //男女名鞋
            this.nav_a3.hover(function () {
                _this.jsnav3.show();
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#fff');
                _this.jsnav3.hide()
            })

            this.jsnav3.hover(function () {
                $(this).show()
            }, function () {
                $(this).hide()
            })
            //全球购
            this.nav_a5.hover(function () {
                _this.jsnav5.show();
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#fff');
                _this.jsnav5.hide()
            })

            this.jsnav5.hover(function () {
                $(this).show()
            }, function () {
                $(this).hide()
            })
            //家具匹配
            this.ho.hover(function () {
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#fff');
            })

            this.oA.hover(function () {
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#5E5E5E');
            })

            this.oA2.hover(function () {
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#5E5E5E');
            })
            this.oA3.hover(function () {
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#5E5E5E');
            })
            this.oA4.hover(function () {
                $(this).css({
                    transition: '0.7s',
                    color: '#d70057'
                });
            }, function () {
                $(this).css('color', '#5E5E5E');
            })
        }
    }
    new head().init()

    //顶部悬浮
    class suspension {
        constructor() {
            this.nnav = $('.nnav');
            this.gotoTop=$('#gotoTop')
        }
        init() {
            var _this = this
            $(window).on('scroll', function () {
                var $scroll = $(window).scrollTop()
                if ($scroll >= 160) {
                    _this.nnav.css({
                        position: 'fixed',
                        top: 0,
                        zIndex: 999
                    })

                } else {
                    _this.nnav.css('position', 'static')
                }
            })
            //回到顶部
            $(window).on('scroll', function () {
                var $scroll = $(window).scrollTop()
                if ($scroll >= 50) {
                    _this.gotoTop.css({
                        display:'block'
                    })

                } else {
                    _this.gotoTop.css({
                        display:'none'
                    })

                }
            })
          
        }
       
    }
    new suspension().init()

    //轮播图
    class carousel {
        constructor() {
            this.banner = $('.banner');
            this.leftbtn = $('#leftarrow');
            this.rightbtn = $('#rightarrow');
            this.lipic = $('.pic ul li');
            this.libtn = $('.btn ol li');
            this.num = 0
            this.time = null
        }
        init() {
            var _this = this
            this.banner.hover(function () {
                _this.leftbtn.show();
                _this.rightbtn.show();
                clearInterval(_this.time)
            }, function () {
                _this.leftbtn.hide();
                _this.rightbtn.hide();
                _this.time = setInterval(function () {
                    _this.rightclick()
                }, 2000)
            })

            this.libtn.on('mouseover', function () {
                _this.num = $(this).index()
                _this.move(this)
            })

            this.rightbtn.on('click', function () {
                _this.rightclick()
            })

            this.leftbtn.on('click', function () {
                _this.leftclick()
            })

            this.time = setInterval(function () {
                _this.rightclick()
            }, 2000)
        }

        move(than) {
            $(than).addClass('active').siblings().removeClass('active');
            this.lipic.eq(this.num).stop(true, true).fadeIn('slow').siblings().stop(true, true).fadeOut('slow')
        }

        rightclick() {
            this.num++
            if (this.num == this.libtn.length) {
                this.libtn.eq(0).addClass('active').siblings().removeClass('active');
                this.num = 0
            } else {
                this.libtn.eq(this.num).addClass('active').siblings().removeClass('active');
            }
            this.move()
        }

        leftclick() {
            this.num--
            if (this.num < -1) {
                this.num == this.libtn.length
            }
            this.libtn.eq(this.num).addClass('active').siblings().removeClass('active');
            this.move()
        }
    }
    new carousel().init()

    // 图片列表
    class image {
        constructor() {
            this.oul = $('#indexhtml2');
            this.oli=$('#indexhtml3 li img')
        }
        init() {
            var _this=this
            this.oul.on('mouseover','img',function(){
                $(this).css('border', '1px solid red')
            })

            this.oul.on('mouseout','img',function(){
                $(this).css('border', '1px solid #fff')
            })

            this.oli.hover(function(){
                $(this).css({
                    border:'1px solid red'
                })
            },function(){
                $(this).css('border', '1px solid #fff')
            })
        }
    }
    new image().init()
    // 图片列表1
    //渲染
    class goodlist {
        constructor() {
            this.list2 = $('#indexhtml2');
            // this.searchBtn=$('#searchBtn');
        }
        init() {
            var _this = this

            this.list2.on('click','li',function(){
                     var $sid=$(this).attr('sid')
                    $.cookie('sid',$sid)
                window.location.href="http://10.31.164.58/projectname/src/details.html";
            })


            $.ajax({
                url: 'http://10.31.164.58/projectname/php/postdata.php',
                dataType: 'json'
            }).done(function (dat) {
                var $strhtml = '';
                $.each(dat, function (index, value) {
                    $strhtml += `
                        <li sid="${value.sid}">
                            <a href="javascript:;">
                                <img class="lazy" data-original="${value.url}" width="593" height="208">
                                <span class="tit1">${value.title}</span>
                                <span class="tit2">${value.title2}</span>
                                <span class="tit3">${value.price}</span>
                            </a>
                        </li>
                    `
                })

                _this.list2.html($strhtml);

                $(function() {
                    $("img.lazy").lazyload({
                        effect: "fadeIn"
                    });
                });

            })

            var arr = [
                "运动鞋",
                "跑步鞋",
                "复古鞋",
               " 复古鞋",
                "休闲鞋",
                "帆布鞋",
                "板鞋",
                "滑板鞋",
                "篮球鞋",
                "凉鞋",
                "凉拖",
                "健步鞋",
                "足球鞋",
                "羽毛球鞋",
               "网球鞋",
                "乒乓球鞋",
                "正装鞋",

        ]
        
        $('.searching').autocomplete({
            source:arr
        });

        }
    }
    new goodlist().init()

}(jQuery)
