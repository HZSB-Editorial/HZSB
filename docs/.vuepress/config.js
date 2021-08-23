const moment = require('moment')
moment.locale('zh-cn')
module.exports = {
    title: 'HZSB',
    description: '关于衡中：曝光，记录，驳斥，批判',
    dest: './dist',
    themeConfig: {
        lastUpdated: '上次更新',
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '大事记录', link: '/event/' },
            { text: '学校生活', link: '/campus/' },
            { text: '官方洗白文批驳', link: '/refute/' },
            { text: '制度和理念批判', link: '/system/' }
        ]
    },
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/last-updated': {
            transformer: timestamp => moment(timestamp).format('YYYY-MM-DD H:mm:ss a')
        }
    },
    head: [
        ['link', { rel: 'icon', href: `https://hzsb-1301539318.cos.ap-beijing.myqcloud.com/logo.png` }],
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?295f787038b935ba15d6349af63e92c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();
            `
        ]
    ]
}
