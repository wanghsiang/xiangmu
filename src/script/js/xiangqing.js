!function($){
    //放大镜
    class magnifying{
        constructor(){
            this.wrap=$('.wrap');
            this.sf=$('#sf');
            this.df=$('#bf');
            this.spic=$('#spic');
            this.dpic=$('#bpic');
            this.listli = $('#list li');
            this.left=$('#left');
            this.right=$('#right');
            this.listul=$('#list ul');
            
        }
        init(){
            var _this=this
            this.spic.hover(function(){
                _this.reveal()
                    $(this).on('mousemove',function(ev){
                        _this.spicmove(ev)
                    })
                _this.sfsize()
            },function(){
              _this.conceal()
            })
            
            //图片路径赋值
            _this.listul.on('mouseover','li',function(){
                var $imgurl=$(this).find('img').attr('src');
                _this.spic.find('img').attr('src',$imgurl);
                _this.dpic.attr('src',$imgurl);

                $(this).find('span').show()
                $('#list ul li span').not($(this).find('span')).hide()
            });

        }

        sfsize(){
            this.sf.css({
                width:this.spic.width()*this.df.width()/this.dpic.width(),
                height:this.spic.height()*this.df.height()/this.dpic.height()
            })
            this.bili=this.dpic.outerWidth()/this.spic.outerWidth()
        }
        spicmove(e){
            var l=e.pageX - this.wrap.offset().left - this.sf.width() / 2;
            var t=e.pageY - this.wrap.offset().top - this.sf.height() / 2;
            if(l<0){
                l=0
            }else if(l >= this.spic.outerWidth() - this.sf.outerWidth() - 2){
                l = this.spic.outerWidth() - this.sf.outerWidth() - 2
            }
            if(t<0){
                t=0
            }else if(t >= this.spic.outerHeight() - this.sf.outerHeight() - 2){
                t = this.spic.outerHeight() - this.sf.outerHeight() - 2
            }
            this.sf.css({
                left:l+'px',
                top:t+'px'
            })

            this.dpic.css({
                left:-l*this.bili,
                top:-t*this.bili
            })

        }
        reveal(){
            this.sf.css('visibility','visible');
            this.df.css('visibility','visible');
        }
        conceal(){
            this.sf.css('visibility','hidden');
            this.df.css('visibility','hidden');
        }
    }
    new magnifying().init()
    //渲染
    class renderer{
        constructor(){
            this.prodAllName=$('.prodAllName');
            this.prodPriceLi=$('.prodPriceLi');
            this.prodDiscount=$('#prodDiscount');
            this.prodimg1=$('.prodColorImg').find('span img');
            this.prodimg2=$('.prodColorImg').find('a img');
            this.text=$('.text');
            this.span=$('.selectCurArea').find('span');
            this.spic=$('#spic img');
            this.bpic=$('#bpic');
            this.list=$('#list ul');
        }
        init(){
            var _this=this
            $.ajax({
                url:'http://10.31.164.58/projectname/php/detail.php',
                dataType:'json',
                data:{
                   sid:$.cookie('sid')
                }
            }).done(function(d){
                // console.log(d)

                var $strhtml=`
                <span class="fontbold">
                <a href="" style="color:#333" >${d.tit}</a>
                    
                </span> ${d.sex}
                <span id="prodTitleName">${d.description}</span>

                `
                _this.prodAllName.html($strhtml)

                var $prod=`
                <span class="pricetxt">好乐买价</span><span class="colorred">¥<span
                        id="prodPriceAj">${d.sale}</span></span>
                            
                 <span class="prodPriceLiJ_2">${d.original}</span>
                
                `
                var $im=d.color.split(',')
                var $size=d.size.split(',');
                var $url=d.img.split(',');
                console.log($url.length)
                _this.prodPriceLi.html($prod);
                _this.prodDiscount.text(d.discount);
                _this.prodimg1.attr({'src':$im[0]});
                _this.prodimg2.attr({'src':$im[1]});
                
                $.each($size,function(i,v){
                    _this.text.eq(i).html(v)
                })
                //图片列表
                _this.spic.attr({'src':$url[0]});
                _this.bpic.attr({'src':$url[0]});

                var $lisi=''
                $.each($url,function(i,v){
                    $lisi+=`
                    <li>
                    <img src="${v}" alt="">
                    <span class="prodConTopInLiImgBor"></span>
                    </li>
                    `
                })

                _this.list.html($lisi)

            })

            this.text.hover(function(){
                $(this).css('border','1px solid #d70057')
            },function(){
                $(this).css('border','1px solid #fff')
            })
        }
    }
    new renderer().init()

    class right{
        constructor(){
            this.ospan=$('.prodColorImg span')
            this.oimg=$('.prodColorImg img');
            this.spic=$('#spic');
            this.dpic=$('#bpic');

        }
        init(){
            var _this=this
            this.ospan.hover(function(){
                var $imsrc=$(this).find('img').attr('src');
                _this.spic.find('img').attr('src',$imsrc);
                _this.dpic.attr('src',$imsrc);

                // $(this).css('border','1px solid #d70057')
            },function(){
                // $(this).css('border','1px solid #fff')
            })
            this.oimg.hover(function(){
                var $img=$(this).attr('src');
                _this.spic.find('img').attr('src',$img);
                _this.dpic.attr('src',$img);

                // $(this).css('border','1px solid #d70057')
            },function(){
                // $(this).css('border','1px solid #fff')
            })

           

        }
    }
    new right().init()
}(jQuery)