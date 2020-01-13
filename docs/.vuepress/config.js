/**
 * 主配置
 */
module.exports = {
    title: 'MarkSong',
    description: '小兄弟哥带你上王者呀~',
    dest: './dist',
    port: '7777',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }], // 地址都是public下的
        // ['link', { rel: 'styleshet', href: 'xxxx' }], // 在此追加style
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}