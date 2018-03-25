import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
    ],
})
