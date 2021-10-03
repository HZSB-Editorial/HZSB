# 教师黑名单

*这些人或有过一些过于极端的举动，或做过有违道德的事情，甚至做过违反国家法律的事情，请大家远离这些教师。*

**注意：本名单只记录目前在衡中工作的，师德败坏的教师。已经明确从衡中离职的教师，不在此列。**

<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>

<p style="color:grey" v-if="$article().length === 0">目前此板块还没有文章，立即<router-link to="../contribute">投稿</router-link>。</p>
