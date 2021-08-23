# 学校生活

*这里记录衡中体制下的种种问题。请注意，不同学生对于衡中生活可能有不同的看法。*

<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>

<p style="color:grey" v-if="$article().length === 0">当前此板块还没有文章，立即<router-link to="../contribute">投稿</router-link>。</p>