# 学校生活

*这里记录学校硬性规定下的种种问题。各班落实规定上不尽相同，然而即使是所谓“个别问题”，也至少与整整一个班的同学息息相关。*

<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>

<p style="color:grey" v-if="$article().length === 0">当前此板块还没有文章，立即<router-link to="../contribute">投稿</router-link>。</p>