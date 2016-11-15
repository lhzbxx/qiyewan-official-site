<template>
    <div>
        <div class="asidebar">
            <div class="chat">
                <p>在线咨询</p>
            </div>
            <div class="saoma">
                <p>扫一扫</p>
                <div class="erwerma">
                    <img src="erwerma.png">
                </div>
            </div>
            <div class="totop" id="to_top">
                <p>返回顶部</p>
            </div>
        </div>
    </div>
</template>
<style>
    .asidebar{
        position: fixed;
        right: 0;
        bottom:100px;
    }
    .asidebar p{
        padding-top:50px;
        text-align: center;
        font-size:14px;
        color: #868686;
    }
    .chat{
        width: 72px;
        height: 72px;
        background: white url(http://ofw6tmkxn.bkt.clouddn.com/chat.png) no-repeat;
        background-position: -4px -4px;
    }
    .chat p{
        color:#0098db;
    }
    .saoma{
        width: 72px;
        height: 72px;
        background: white url(http://ofw6tmkxn.bkt.clouddn.com/saoma.png) no-repeat;
        background-position: -4px -4px;
        position: relative;
    }
    .erwerma{
        position: absolute;
        top:0px;
        left:0px;
        height:0px;
        width:0px;
        transition: 1s;
    }
    .erwerma img{
        width:100%;
        height:100%;
    }
    .saoma:hover .erwerma{
        top:-52px;
        left:-124px;
        width:124px;
        height:124px;
    }
    .saoma:hover{
        background: white url(http://ofw6tmkxn.bkt.clouddn.com/saoma1.png) no-repeat;
        background-position: -4px -4px;
    }
    .totop{
        width: 72px;
        height: 72px;
        background: white url(http://ofw6tmkxn.bkt.clouddn.com/totop.png) no-repeat;
        margin-top: 20px;
        background-position: -4px -5px;
    }
    .totop:hover{
        background: white url(http://ofw6tmkxn.bkt.clouddn.com/totop1.png) no-repeat;
        background-position: -4px -5px;
    }
</style>
<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            window.onload = function(){
            var oTop = document.getElementById("to_top");
            var screenw = document.documentElement.clientWidth || document.body.clientWidth;
            var screenh = document.documentElement.clientHeight || document.body.clientHeight;
            oTop.style.left = screenw - oTop.offsetWidth +"px";
            oTop.style.top = screenh - oTop.offsetHeight + "px";
            window.onscroll = function(){
                var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
                var num = screenh - oTop.offsetHeight + scrolltop;
                oTop.style.top =num + "px";
                console.log(num);
                if(num <1000){
                    oTop.style.display="none";
                }else if(num > 1000){
                    oTop.style.display="block";
                }
            }
            oTop.onclick = function(){
                document.documentElement.scrollTop = document.body.scrollTop =0;
            }
        }
        }
    }
</script>
