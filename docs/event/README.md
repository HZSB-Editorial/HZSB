# 大师记录

*这里记录与衡中有关的，已经引起或希望引起更多关注的事件。您将看到有关这些重要事件的来龙去脉和客观评述。*

<div v-for="i in $site.pages.sort((a, b) => a.title < b.title ? -1 : 1)">
    <p v-if='/\/event\/.+\.html/.test(i.path)'>
        <router-link :to="i.path">{{ i.title }}</router-link>
    </p>
</div>
