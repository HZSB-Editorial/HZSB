<template><div><h1 id="制度和理念批判" tabindex="-1"><a class="header-anchor" href="#制度和理念批判" aria-hidden="true">#</a> 制度和理念批判</h1>
<p><em>结构性矛盾尽管难以解决，但并非无解。我们希望能从根本上解决问题，为此需要敢于触摸水面下的暗礁。</em></p>
<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>
<p style="color:grey" v-if="$article().length === 0">目前此板块还没有文章，立即<router-link to="../contribute">投稿</router-link>。</p></div></template>


