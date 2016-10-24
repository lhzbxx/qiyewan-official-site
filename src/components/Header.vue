<style scoped>
    .nav {
        height: 68px;
        width: 100%;
    }

    .nav ul {
        float: left;
        margin-left: 30px;
    }

    .nav ul li {
        float: left;
        padding-left: 40px;
        font-size: 16px;
        letter-spacing: 2px;
        position: relative;
        border-bottom: 2px solid white;
    }

    .nav ul li:hover a {
        border-bottom: 2px solid #0098db;
    }

    .nav ul li:hover .show {
        opacity: 1;
        display: block;
        transition: opacity 1s;
    }

    .show {
        position: absolute;
        width: 456px;
        height: 165px;
        background-color: rgba(255, 255, 255, .8);
        margin-left: 36px;
        display: none;
        transform: translate(-50%, 0%);
        transition: opacity 0.3s;
        opacity: 0;
        top: 70px;
        z-index: 20;
    }

    .show_l, .show_r {
        width: 50%;
    }

    .show_l_con {
        margin-left: 13px;
    }

    .registration {
        text-align: center;
        font-size: 14px;
        font-weight: normal;
        color: #626262;
        margin: 10px 0;
    }

    .registration:hover {
        cursor: pointer;
        color: #0098db;
    }

    .show_l span, .show_r span {
        text-align: center;
        font-size: 12px;
        width: 85px;
        height: 24px;
        line-height: 24px;
        display: block;
        float: left;
        margin-bottom: 7px;
        margin-left: 10px;
        color: #5e5e5e;
        background-color: #fdfdfd;
    }

    .show_l span:hover, .show_r span:hover {
        cursor: pointer;
        color: #0098db;
    }

    .nav ul li a {
        color: #282828;
        display: block;
        line-height: 68px;
    }
</style>

<template>
    <div class="nav">
        <div class="container">
            <div class="logo l">
                <a href="#">
                    <img src="../assets/img/logo.png" alt="">
                </a>
            </div>
            <ul>
                <li>
                    <a href="">工商服务</a>
                    <div class="show">
                        <div class="show_l l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                        <div class="show_r l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">人事服务</a>
                    <div class="show">
                        <div class="show_l l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                        <div class="show_r l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">法律服务</a>
                    <div class="show">
                        <div class="show_l l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                        <div class="show_r l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">财税服务</a>
                    <div class="show">
                        <div class="show_l l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                        <div class="show_r l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">IT&服务</a>
                    <div class="show">
                        <div class="show_l l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                        <div class="show_r l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">套餐服务</a>
                    <div class="show">
                        <div class="show_l l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                        <div class="show_r l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">快捷入口</a>
                    <div class="show">
                        <div class="show_l l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                        <div class="show_r l">
                            <div class="show_l_con">
                                <div class="registration">商标注册</div>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                                <span>商标查询</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a>400-716-8896</a>
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>