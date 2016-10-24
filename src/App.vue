<style scoped>
    .introduce {
        height: 127px;
        width: 100%;
    }

    .introduce_img {
        margin-left: 15px;
    }

    .introduce_img1 {
        width: 77px;
        height: 80px;
        background: url("./assets/img/intro_1.png") no-repeat;
    }

    .introduce ul li {
        cursor: pointer;
    }

    .introduce ul li:hover .introduce_img1 {
        background: url("./assets/img/intro_5.png") no-repeat;
    }

    .introduce_img2 {
        width: 77px;
        height: 80px;
        background: url("./assets/img/intro_2.png") no-repeat;
    }

    .introduce ul li:hover .introduce_img2 {
        background: url("./assets/img/intro_6.png") no-repeat;
    }

    .introduce_img3 {
        width: 89px;
        height: 80px;
        background: url("./assets/img/intro_3.png") no-repeat;
    }

    .introduce ul li:hover .introduce_img3 {
        background: url("./assets/img/intro_7.png") no-repeat;
    }

    .introduce_img4 {
        width: 77px;
        height: 80px;
        background: url("./assets/img/intro_4.png") no-repeat;
    }

    .introduce ul li:hover .introduce_img4 {
        background: url("./assets/img/intro_8.png") no-repeat;
    }

    .introduce ul {
        margin-top: 30px;
    }

    .introduce ul li {
        float: left;
        border: 1px solid #e9e9e9;
        margin-right: 15px;
        padding: 20px 28px 20px 25px;
    }

    .introduce ul li:hover {
        -webkit-box-shadow: 0 0 7px #55b2da;
        -moz-box-shadow: 0 0 7px #55b2da;
        box-shadow: 0 0 7px #55b2da;
    }

    .introduce ul li:hover h5 {
        color: #0098db;
    }

    .introduce ul :last-child {
        margin-right: 0;
    }

    .introduce h5 {
        font-size: 19px;
        color: #2f2f2f;
        font-weight: normal;
        margin-top: 7px;
        letter-spacing: 2px;
    }

    .introduce p {
        font-size: 14px;
        color: #707070;
        margin-top: 5px;
        letter-spacing: 1px;
    }
</style>

<template>
    <div id="app">
        <lh-top-bar></lh-top-bar>
        <lh-header></lh-header>
        <div class="introduce">
            <div class="container">
                <ul>
                    <li>
                        <div class="l">
                            <h5>注册财税一条龙</h5>
                            <p>你身边的会计大神</p>
                        </div>
                        <div class="r introduce_img introduce_img1"></div>
                    </li>
                    <li>
                        <div class="l">
                            <h5>发财宝</h5>
                            <p>你身边的会计大神</p>
                        </div>
                        <div class="r introduce_img introduce_img2"></div>
                    </li>
                    <li>
                        <div class="l">
                            <h5>商标宝</h5>
                            <p>你身边的会计大神</p>
                        </div>
                        <div class="r introduce_img introduce_img3"></div>
                    </li>
                    <li>
                        <div class="l">
                            <h5>人事宝</h5>
                            <p>你身边的会计大神</p>
                        </div>
                        <div class="r introduce_img introduce_img4"></div>
                    </li>
                </ul>
            </div>
        </div>
        <lh-footer></lh-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dialogVisible: false,
                formStacked: {
                    name: '',
                    region: '',
                    type: ''
                },
                currentDate: "2016年10月13日"
            }
        },
        methods: {}
    }
</script>
