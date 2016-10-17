<template>
    <div style="background-color: #EFF2F7;
                height: 40px;
                border: 1px solid #eee;
                border-bottom: none;">
            <span style="line-height: 40px;
                         color: #20A0FF;
                         margin-left: 20px;"><b>{{ title }}</b></span>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>