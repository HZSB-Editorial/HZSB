import { defineClientConfig } from '@vuepress/client'
import Subscribe from './components/Subscribe.vue'
import Unsubscribe from './components/Unsubscribe.vue'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        router.beforeEach((to, from, next) => {
            if (typeof _hmt != "undefined") {
                if (to.path) {
                    _hmt.push(["_trackPageview", to.fullPath]);
                }
            }
            next();
        });
        app.config.globalProperties.$article = function (name) {
            const result = []
            const reg = new RegExp(this.$route.path + ".+\\.html")
            for (const i of PAGES.sort((a, b) => a.title < b.title ? -1 : 1)) {
                if (reg.test(i.path)) {
                    result.push(i)
                }
            }
            return result
        }
    },
    setup() { },
    layouts: {},
    rootComponents: [],
})
