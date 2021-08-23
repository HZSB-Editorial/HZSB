import Vue from 'vue'

export default ({
  Vue,
  router
}) => {
    router.beforeEach((to, from, next) => {
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
            }
        }
        next();
    });
    Vue.prototype.$article = function(name) {
        const result = []
        const reg = new RegExp(this.$route.path + ".+\\.html")
        for (const i of this.$site.pages.sort((a, b) => a.title < b.title ? -1 : 1)) {
            if (reg.test(i.path)) {
                console.log(i)
                result.push(i)
            }
        }
        return result
    }
}
