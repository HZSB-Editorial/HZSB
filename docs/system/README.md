# 制度批判与高层内幕

*结构性矛盾尽管难以解决，但并非无解。我们希望能从根本上解决问题，为此需要敢于触摸水面下的暗礁。*

<div v-for="i in $site.pages.sort((a, b) => a.title < b.title ? -1 : 1)">
    <p v-if='/\/demo\/.+\.html/.test(i.path)'>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>
