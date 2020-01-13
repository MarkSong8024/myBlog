/**
 * 侧边栏配置.多模块管控
 */
module.exports = {
    '/guide/': require('../guide/sidebar'),
    '/baodian/zero': require('../baodian/zero/sidebar'),
    '/baodian/high': require('../baodian/high/sidebar'),
}	