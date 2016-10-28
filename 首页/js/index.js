/**
 * Created by Young on 2016/10/13.
 */
$(function(){
    // 轮播
    slider({dom:".slider"});
    function slider(opt){
        //---------------定义属性
        var dom=opt.dom;
        var ul=$(dom+" .wrap>ul:eq(0)");
        var len=ul.children("li").length;
        var first=ul.children("li").get(0);
        var last=ul.children("li").get(len-1);
        var dis=$(first).width();
        var index=1;
        var indexId;//控制自动动画的ID
        //----------------定义方法
        init();
        auto();
        bindDom();
        function init(){
            ul.append($(first).clone());
            ul.prepend($(last).clone());
            ul.css("left",dis*-1);
        }
        function goslider(){
            ul.animate({"left":(index*dis*-1)+"px"},500,anFn)
            console.log(index);
        }
        function anFn(){
            if(index>=len+1){
                ul.css("left",dis*-1);
                index=1;
            }
            if(index<=0){
                ul.css("left",(dis*len+1)*-1);
                index=len;
            }
            $(".banner-tab li.active").removeClass("active");
            $(".control li:eq("+(index-1)+")").addClass("active");
        }

        function auto(){
            indexId=setInterval(function(){
                index++;
                goslider(index);
            },2000);
        }
        function bindDom(){
            $(dom).hover(function(){
                    clearInterval(indexId);
                },
                function(){
                    auto();
                })
            $(".banner-tab li").click(function(){
                var ind=$(".banner-tab li").index($(this));
                index=ind+1;
                goslider();
            })
            $(".wrap li").bind("touchend",function(){
                index--;
                goslider();
            })

            $(".slide .slide-left").click(function(){
                index--;
                goslider();
            })

            $(".slide .right").click(function(){
                index++;
                goslider();
            })
        }//bindDom ED


    }


    // 热门服务
    $(".hotserve_li_").hover(function () {
        $(".sec_detail1").css("display","none");
        $(this).css("margin-right","119px");
    },function () {
        $(this).css("margin-right","0px");
        $(".sec_detail1").css("display","block");
    });

    // 客户声音
    $(".voice_tit").hover(function () {
        $(".voice_t_all").css("border-bottom","1px solid white");
        $(this).siblings(".voice_tit").css("border-bottom","1px solid rgb(24,114,225)");
        $(".vor_bor").css("display","block");
        $(this).css("border-bottom","1px solid white");

    },function () {
        $(this).siblings(".voice_tit").css("border-bottom","1px solid #f8f8f8");
        $(".vor_bor").css("display","none");
        $(".voice_t_all").css("border-bottom","1px solid rgb(218,218,218)");

    });
    $(".voice_one").hover(function () {
        $(".voice_con1").css("display","block");
        $(".voice_con2").css("display","none")
        $(".voice_con3").css("display","none");
    },function () {
        $(".voice_con1").css("display","block");
        $(".voice_con2").css("display","none")
        $(".voice_con3").css("display","none");
    });
    $(".voice_two").hover(function () {
        $(".voice_con2").css("display","block")
        $(".voice_con3").css("display","none");
        $(".voice_con1").css("display","none");
    },function () {
        $(".voice_con2").css("display","none");
        $(".voice_con3").css("display","none");
        $(".voice_con1").css("display","block");
    });
    $(".voice_three").hover(function () {
        $(".voice_con3").css("display","block");
        $(".voice_con2").css("display","none");
        $(".voice_con1").css("display","none");
    },function () {
        $(".voice_con3").css("display","none");
        $(".voice_con2").css("display","none");
        $(".voice_con1").css("display","block");
    });
})
