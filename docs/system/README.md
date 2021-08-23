# 制度批判与高层内幕

*结构性矛盾尽管难以解决，但并非无解。我们希望能从根本上解决问题，为此需要敢于触摸水面下的暗礁。*

<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>

<p style="color:grey" v-if="$article().length === 0">当前此板块还没有文章，立即<router-link to="../contribute">投稿</router-link>。</p>