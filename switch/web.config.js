/**
 * [WEB_CONFIG 项目配置]
 * @Object 项目基本配置
 * API：API数据接口
 * REPORT: 上报接口
 * STYLE：样式地址
 * PATH：环境变量
 */
exports.WEB_CONFIG = {
    /* 数据接口 */
    API: {
        DEV:"http://webapi.dev.huizhuang.com",
        TEST: "http://webapi.test.huizhuang.com",
        LIVE: "http://webapi.live.huizhuang.com",
        RELEASE: "http://webapi.huizhuang.com"
    },
    /* 上报接口 */
    REPORT: {
        DEV:"http://report.dev.huizhuang.com",
        TEST: "http://report.test.huizhuang.com",
        LIVE: "http://report.live.huizhuang.com",
        RELEASE: "http://report.huizhuang.com"
    },
    /* 样式文件地址 */
    STYLE: {
        DEV:"http://imgcache.dev.huizhuang.com/website/dist",
        TEST: "http://imgcache.test.huizhuang.com/website",
        LIVE: "http://imgcache.live.huizhuang.com/website",
        RELEASE: "http://hzimg.huizhuang.com/website"
    },
    /* 环境变量 */
    PATH: {
        DEV: "./src",
        TEST:"./test",
        LIVE: "./live",
        RELEASE: "./dist"
    }
}