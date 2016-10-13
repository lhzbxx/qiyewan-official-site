import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'


Vue.use(ElementUI)

new Vue({
    el: '#app',
    data: {
        dialogFormVisible: false
    },
    render: h => h(App)
})
