import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Subscribe", defineAsyncComponent(() => import("/Users/junical/Code/HZSB/docs/.vuepress/components/Subscribe.vue"))),
      app.component("Unsubscribe", defineAsyncComponent(() => import("/Users/junical/Code/HZSB/docs/.vuepress/components/Unsubscribe.vue")))
  },
}
