<style scoped>
    .light {
        background-color: #fff;
    }
    .dark {
        background-color: #EFF2F7;
    }
</style>

<template>
    <div style="height: 40px;
                border: 1px solid #eee;
                border-bottom: none;"
         v-bind:class="color">
            <span style="line-height: 40px;
                         margin-left: 20px;
                         color: #20A0FF">
                <b>{{ title }}</b>
            </span>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            color: {
                type: String,
                default: "dark"
            }
        }
    }
</script>