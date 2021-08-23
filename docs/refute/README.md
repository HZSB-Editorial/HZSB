# 官方洗白文批驳

*部分官方发文其实是对问题进行掩盖。为使更多人看清这些问题的本质，我们将使这些问题回归被洗白前的原色。*

<div v-for="i in $site.pages.sort((a, b) => a.title < b.title ? -1 : 1)">
    <p v-if='/\/refute\/.+\.html/.test(i.path)'>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>
