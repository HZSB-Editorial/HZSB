<template>
    <div class="theme-container">
        <div class="theme-default-content">
            <h1>404</h1>

            <blockquote>{{ getMsg() }}</blockquote>

            <RouterLink to="/">
                返回首页
            </RouterLink>
        </div>
    </div>
</template>
  
<script>
const msgs = [
    `警告！你与此网站非触中！`,
    `朋友可相逢，高山永分离。`,
    `勤学如春起之苗，不见其增日有所长；辍学如磨刀之石，不见其损日有所亏。——陶渊明`,
    `宇宙之大，粒子之微，火箭之速，化工之巧，地球之变，生物之谜，日月之繁，无处不用数学。——华罗庚`,
    `忙碌的人只会受到一个恶魔的引诱，而懒惰的人则会受到一群恶魔的引诱。——汤玛斯富勒`,
    `我爱遗传，遗传使我快乐！`,
    `自助自主完成了吗？`,
    `等着吧，我会让你见证我的奋斗和奇迹！`,
    `自习考试化，考试高考化，高考平时化。`,
    `知我爱我荣我，知家爱家荣家，知师爱师荣师，知班爱班荣班，知校爱校荣校，知国爱国荣国。`,
    `责任担当、激情实干、团结精进、和谐共生。`,
    `梦想力、激情力、吃苦力、抗压力、专注力、凝聚力、自律力、坚持力加一个好习惯。`
]
export default {
    methods: {
        getMsg () {
            return msgs[Math.floor(Math.random() * msgs.length)]
        }
    }
}
</script>