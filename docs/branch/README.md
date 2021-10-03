# 分校见闻

*这里记录有关衡中系学校的各种问题。如今，这类学校覆盖范围越来越广。我们不得不正视其带来的问题。*

<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>

<p style="color:grey" v-if="$article().length === 0">目前此板块还没有文章，立即<router-link to="../contribute">投稿</router-link>。</p>