<style scoped>
    #sidebar {
        position: fixed;
        right: 0;
        bottom: 100px;
        z-index: 1000;
    }

    #sidebar p {
        padding-top: 50px;
        text-align: center;
        font-size: 14px;
        color: #868686;
    }

    #chat {
        width: 72px;
        height: 72px;
        background: white url(http://cdn.qiyewan.com/chat.png) no-repeat -4px -4px;
    }

    #chat p {
        color: #0098db;
    }

    #scan-qr-code {
        width: 72px;
        height: 72px;
        cursor: pointer;
        background: white url(http://cdn.qiyewan.com/saoma.png) no-repeat -4px -4px;
        position: relative;
    }

    #qr-code {
        position: absolute;
        top: 35px;
        left: 36px;
        height: 0;
        width: 0;
        opacity: 0;
        transition: 0.3s all ease-in-out;
        overflow: hidden;
    }

    #qr-code img {
        width: 100%;
        height: 100%;
    }

    #scan-qr-code:hover #qr-code {
        top: -25px;
        left: -124px;
        width: 124px;
        height: 124px;
        opacity: 1;
    }

    #scan-qr-code:hover {
        background: white url(http://cdn.qiyewan.com/saoma1.png) no-repeat -4px -4px;
    }

    #scroll-to-top {
        width: 72px;
        height: 72px;
        cursor: pointer;
        background: white url(http://cdn.qiyewan.com/totop.png) no-repeat -4px -5px;
    }

    #scroll-to-top:hover {
        background: white url(http://cdn.qiyewan.com/totop1.png) no-repeat -4px -5px;
    }
</style>
<template>
    <div id="sidebar">
        <!--<div id="chat">-->
        <!--<p>在线咨询</p>-->
        <!--</div>-->
        <div id="scan-qr-code">
            <p>扫一扫</p>
            <div id="qr-code">
                <img src="../assets/wechat-qrcode.jpg">
            </div>
        </div>
        <div id="scroll-to-top"
             v-bind:style="{ display: isTop ? 'none' : 'block' }"
             v-on:click="handleScrollToTop()">
            <p>返回顶部</p>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                isTop: true,
                toTop: 0,
                winHeight: document.documentElement.clientHeight
            }
        },
        methods: {
            handleScrollToTop() {
                let vm = this
                var timer = setInterval(function () {
                    let speed = Math.ceil(vm.toTop / 15)
                    document.documentElement.scrollTop = document.body.scrollTop = vm.toTop - speed
                    if (vm.toTop == 0) {
                        clearInterval(timer);
                    }
                }, 10)
            },
            handleScroll() {
                this.toTop = document.body.scrollTop || document.documentElement.scrollTop;
                this.isTop = this.toTop < this.winHeight
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>
