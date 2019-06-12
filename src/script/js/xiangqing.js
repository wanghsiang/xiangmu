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
            this.bo=$('#list ul li span');
            this.nu=0
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
            

            this.listli.hover(function(){
                var $url = $(this).find('img').attr('src');
                 _this.spic.find('img').attr('src', $url);
                 _this.dpic.attr('src', $url);
                 //边框
                 $(this).find('span').show()
                 $('#list ul li span').not($(this).find('span')).hide()
             })
            
            this.num=6;//可视的li的length
            this.liwidth=this.listli.eq(0).outerWidth(true);
            this.right.on('click',function(){
                _this.rightclick();
               
             });
             this.left.on('click',function(){
                _this.leftclick();
             });

        }
       
        rightclick(){
            if(this.listli.length>this.num){
                this.num++;
                this.left.css('color','#333');
                if(this.num==this.listli.length){
                    this.right.css('color','#fff');
                }
            
            }
            this.listul.animate({
                left:-(this.num-6)*this.liwidth
            });
        }

        leftclick(){
            if(this.num>6){
                this.num--;
                this.right.css('color','#333');
                if(this.num==6){
                    this.left.css('color','#fff');
                } 
            }
            this.listul.animate({
                left:-(this.num-6)*this.liwidth
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

}(jQuery)