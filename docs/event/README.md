# 大事记录

*这里记录与衡中有关的，已经引起或希望引起更多关注的事件。您将看到有关这些重要事件的来龙去脉和客观评述。*

<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>

<p style="color:grey" v-if="$article().length === 0">当前此板块还没有文章，立即<router-link to="../contribute">投稿。</router-link>。</p>