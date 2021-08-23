# 学校生活

*这里记录学校硬性规定下的种种问题。各班落实规定上不尽相同，然而即使是所谓“个别问题”，也至少与整整一个班的同学息息相关。*

<div v-for="i in $site.pages.sort((a, b) => a.title < b.title ? -1 : 1)">
    <p v-if='/\/campus\/.+\.html/.test(i.path)'>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>
