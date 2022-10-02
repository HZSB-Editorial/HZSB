import moment from 'moment-timezone'
moment.tz.setDefault("Asia/Shanghai")
moment.locale('zh-cn')
import fs from 'fs'
import path from 'path'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname } from '@vuepress/utils'
import { searchPlugin } from '@vuepress/plugin-search'

function getList(name) {
    return fs
        .readdirSync(path.resolve(__dirname, '../' + name + '/'))
        .filter(e => e !== 'README.md')
        .map(filename => '/' + name + '/' + filename.slice(0, -3))
        .sort()
}

export default {
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
    theme: defaultTheme({
        // logo: '/img/logo.png',
        repo:'https://github.com/ShuJun-Junical/HZSB',
        editLink:true,
        editLinkText:'在 Github 上编辑此页',
        sidebarDepth: 0,
        sidebar: [
            {
                text: '大事记录',
                link: '/event/',
                children: getList('event')
            },
            {
                text: '学校生活',
                link: '/campus/',
                children: getList('campus')
            },
            {
                text: '官方洗白文批驳',
                link: '/refute/',
                children: getList('refute')
            },
            {
                text: '制度和理念批判',
                link: '/system/',
                children: getList('system')
            },
            {
                text: '分校见闻',
                link: '/branch/',
                children: getList('branch')
            },
            {
                text: '教师黑名单',
                link: '/blacklist/',
                children: getList('blacklist')
            }
        ],
        lastUpdated: true,
        lastUpdatedText: '上次更新',
        contributors: false,
        tip: '提示',
        notFound: [
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
        ],
        backToHome: '返回首页',
        displayAllHeaders: true,
        navbar: [
            { text: '首页', link: '/' },
            { text: '本站概况和阅读指引', link: '/introduction' },
            {
                text: '五大板块',
                children: [
                    { text: '大事记录', link: '/event/' },
                    { text: '学校生活', link: '/campus/' },
                    { text: '官方洗白文批驳', link: '/refute/' },
                    { text: '制度和理念批判', link: '/system/' },
                    { text: '分校见闻', link: '/branch/' },
                ]
            },
            { text: '教师黑名单', link: '/blacklist/' },
            { text: '投稿', link: '/contribute.html' }
        ]
    }),
    plugins: [
        // [
        //     'md-enhance',
        //     {
        //         footnote: true
        //     }
        // ],
        // [
        //     "sitemap",
        //     {
        //         hostname: 'https://hzsb.info',
        //         dateFormatter: e => e.split(' ')[0]
        //     },
        // ],
        registerComponentsPlugin({
            componentsDir: path.resolve(getDirname(import.meta.url), './components'),
        }),
        searchPlugin({
            // 配置项
          }),
    ],
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['link', { rel: 'preconnect', href: '/img' }],
        ['link', { rel: 'preconnect', href: 'https://hm.baidu.com' }],
        ['link', { rel: 'icon', href: `/img/logo.png` }],
        // [
        //     "script",
        //     {},
        //     `
        //     var _hmt = _hmt || [];
        //     (function() {
        //     var hm = document.createElement("script");
        //     hm.src = "https://hm.baidu.com/hm.js?295f787038b935ba15d6349af63e92c6";
        //     var s = document.getElementsByTagName("script")[0]; 
        //     s.parentNode.insertBefore(hm, s);
        //     })();
        //     `
        // ],
        [
            'script',
            { src: 'https://unpkg.com/@popperjs/core@2' }
        ],
        [
            'script',
            { src: 'https://unpkg.com/tippy.js@6' }
        ]
    ],
    define(app, isServer) {
        return {
            PAGES: app.pages
        }
    }
}
