<style scoped>
    .footer{
        width:100%;
        height:158px;
        margin-top:15px;
        position: relative;
        background-color: #f5f5f5;
    }
    .footer_ul li{
        float: left;
        margin: 0 20px;
        border-right:1px solid #d2d2d2;
        margin-top:20px;
    }
    .footer_ul :last-child{
        border-right:none;

    }
    .foo_div{
        float: left;
        width:150px;
    }
    .foo_div h3{
        font-size:14px;
        color:#999999;
        height:40px;
        font-weight:normal;
        line-height:40px;
    }
    .foo_div p{
        font-size:12px;
        height:25px;
        line-height:25px;
    }
    .foo_div p a{
        font-size:12px;
        color:#999999;
    }
    .foo_ul_2{
        width:230px;
    }
    .foo_ul_2 p{
        color:#606060;
        font-size:30px;
    }
    .foo_ul_2 img{
        margin-left:30px;
    }
    .foo_ul_3 img{
        margin:20px 30px;
    }
    .foo_b{
        height:39px;
        background-color: #eaeaea;
        /*margin-top:-5px;*/
    }
    .foo_b p{
        text-align: center;
        font-size:12px;
        color:#999999;
        line-height:39px;
    }
</style>

<template>
    <div class="footer">
        <div class="container">
            <ul class="footer_ul">
                <li>
                    <div class="foo_div">
                        <h3>企业动态</h3>
                        <p><a href="">关于我们</a></p>
                        <p><a href="">加入我们</a></p>
                    </div>
                    <div class="foo_div">
                        <h3>订单服务</h3>
                        <p><a href="">索取发票</a></p>
                        <p><a href="">退款说明</a></p>
                        <p><a href="">支付方式</a></p>
                    </div>
                    <div class="foo_div">
                        <h3>售后服务</h3>
                        <p><a href="">联系我们</a></p>
                        <p><a href="">用户协议</a></p>
                    </div>

                </li>
                <li class="foo_ul_2">
                    <img src="../assets/img/foo_1.png">
                    <p>400-716-8896</p>
                </li>
                <li class="foo_ul_3">
                    <img src="../assets/img/foo_2.png">
                    <img src="../assets/img/foo_3.png">
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
        <div class="foo_b">
            <p>Copyright @ 2015-2016 www.qiyewan.com 企业湾 备案号：沪CP备15043250号-2</p>
        </div>
    </div>
</template>