const moment = require('moment-timezone')
moment.tz.setDefault("Asia/Shanghai")
moment.locale('zh-cn')

const fs = require('fs')
const path = require('path')

function getList(name) {
    return fs
        .readdirSync(path.resolve(__dirname, '../' + name + '/'))
        .filter(e => e !== 'README.md')
        .map(filename => '/' + name + '/' + filename.slice(0, -3))
        .sort()
}

module.exports = {
    title: 'HZSB',
    description: '关于衡中：曝光、记录、驳斥、批判。',
    dest: './dist',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'HZSB',
            description: '关于衡中：曝光、记录、驳斥、批判。'
        }
    },
    themeConfig: {
        sidebarDepth: 0,
        sidebar: [
            {
                title: '大事记录',
                path: '/event/',
                children: getList('event')
            },
            {
                title: '学校生活',
                path: '/campus/',
                children: getList('campus')
            },
            {
                title: '官方洗白文批驳',
                path: '/refute/',
                children: getList('refute')
            },
            {
                title: '制度和理念批判',
                path: '/system/',
                children: getList('system')
            },
            {
                title: '分校见闻',
                path: '/branch/',
                children: getList('branch')
            }
        ],
        lastUpdated: '上次更新',
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '大事记录', link: '/event/' },
            { text: '学校生活', link: '/campus/' },
            { text: '官方洗白文批驳', link: '/refute/' },
            { text: '制度和理念批判', link: '/system/' },
            { text: '分校见闻', link: '/branch/' },
            { text: '投稿', link: '/contribute.html' }
        ]
    },
    plugins: [
        '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
        [
            '@vuepress/last-updated',
            {
                transformer: timestamp => moment(timestamp).format('YYYY-MM-DD H:mm:ss a')
            }
        ],
        [
            'md-enhance',
            {
                footnote: true
            }
        ],
        [
            "sitemap",
            {
                hostname: 'https://hzsb.info',
                dateFormatter: e => e.split(' ')[0]
            },
        ],
    ],
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['link', { rel: 'preconnect', href: 'https://hzsb-1301539318.file.myqcloud.com' }],
        ['link', { rel: 'preconnect', href: 'https://hm.baidu.com' }],
        ['link', { rel: 'icon', href: `https://hzsb-1301539318.file.myqcloud.com/logo.png` }],
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
        ],
        [
            'script',
            { src: 'https://unpkg.com/@popperjs/core@2' }
        ],
        [
            'script',
            { src: 'https://unpkg.com/tippy.js@6' }
        ]
    ]
}
