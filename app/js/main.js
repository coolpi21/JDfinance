import Vue from "vue"
// import App from "./App.vue"
import index from "./home/index.vue"
import router from "./router"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { index },
    template: "<index/>",
})
/* eslint-enable no-new */
