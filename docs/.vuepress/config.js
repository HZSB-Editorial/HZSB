module.exports = {
    title: 'HZSB',
    description: '关于衡中：曝光，记录，驳斥，批判',
    dest: './dist',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '大事记录', link: '/event/' },
            { text: '学校生活', link: '/campus/' },
            { text: '官方洗白文批驳', link: '/refute/' },
            { text: '制度批判与高层内幕', link: '/system/' }
        ]
    },
    plugins: [
        '@vuepress/back-to-top'
    ],
    head: [
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?ec57e4b3b7122d9fd489d8fb72e6ce56";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `
        ],
    ]
}
