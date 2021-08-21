# 文章列表

<div v-for="i in $site.pages.sort((a, b) => a.title < b.title ? -1 : 1)">
    <p v-if='/\/demo\/.+\.html/.test(i.path)'>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>