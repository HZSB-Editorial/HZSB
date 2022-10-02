<template><div><h1 id="官方洗白文批驳" tabindex="-1"><a class="header-anchor" href="#官方洗白文批驳" aria-hidden="true">#</a> 官方洗白文批驳</h1>
<p><em>衡中部分官方发文是对其不当言行的掩盖。为使更多人看清这些问题的本质，我们将使这些问题回归被洗白前的原色。</em></p>
<div v-for="i in $article()">
    <p>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>
<p style="color:grey" v-if="$article().length === 0">目前此板块还没有文章，立即<router-link to="../contribute">投稿</router-link>。</p></div></template>


