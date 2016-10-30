<style scoped>
    #news {
        border: 1px solid #dcdcdc;
        width: 224px;
        height: 335px;
        overflow: hidden;
        position: relative;
    }
    img {
        height: 50%;
    }
    #detail {
        margin: 0 auto;
        width: 80%;
        height: 50%;
        padding-top: 5px;
    }
    h3 {
        line-height: 30px;
    }
    p {
        height: 65px;
        overflow: hidden;
    }
    #tags {
        position: relative;
        bottom: 0;
        margin-left: 0;
        padding-top: 7px;
    }
    .tag:first-child {
        margin-left: 0;
    }
    .tag {
        border: 1px solid #dcdcdc;
        float: left;
        padding: 3px 5px;
        margin-left: 5px;
    }
    #time {
        position: absolute;
        left: 20px;
        bottom: 10px;
    }
    #views {
        position: absolute;
        right: 20px;
        bottom: 10px;
    }
</style>

<template>
    <div id="news">
        <img src="../assets/logo.png" alt="">
        <div id="detail">
            <h3>总理开辟上海自由港</h3>
            <p>办理员工用退工、社保、公积金增加减少以及缴费基数变更（服务费：3人及以下98.8元/月）。办理员工用退工、社保、公积金增加减少以及缴费基数变更（服务费：3人及以下98.8元/月）。办理员工用退工、社保、公积金增加减少以及缴费基数变更（服务费：3人及以下98.8元/月）。</p>

            <ul id="tags">
                <li class="tag">法律</li>
                <li class="tag">人事</li>
            </ul>
            <div class="clearfix"></div>
            <div style="width: 100%;">
                <span id="time">2016.10.1</span>
                <span id="views">106</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>