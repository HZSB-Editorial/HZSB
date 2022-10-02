<template><div><h1 id="大事记录" tabindex="-1"><a class="header-anchor" href="#大事记录" aria-hidden="true">#</a> 大事记录</h1>
<p><em>这里记录与衡中有关的，已经引起关注的重要事件。您将看到这些重要事件的来龙去脉。</em></p>
<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>
<p style="color:grey" v-if="$article().length === 0">目前此板块还没有文章，立即<router-link to="../contribute">投稿</router-link>。</p>
</div></template>


