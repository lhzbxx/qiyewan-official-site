<template>
    <div>
        <div style="margin-top: 15px; background-color: #eee;">
            <div class="container">
                <el-row>
                    <el-col :span="24" style="margin: 18px 0 10px 10px;">
                        <b style="font-size: 16px; color:#5c5c5c; font-weight: normal;">热门推荐</b>
                    </el-col>
                    <el-col :span="6" v-for="(item, index) in hotProducts.slice(0, 4)" :offset="0">
                        <lh-product
                                :title="item.title"
                                :summary="item.summary"
                                :img="item.img"
                                :price="item.price"
                                :url="getRegion.code+item.serialId"></lh-product>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: mapGetters({
            hotProducts: 'hotProducts',
            getRegion: 'getRegion'
        })
    }
</script>