/**
 * 配置文件
 */
var CONFIG = (function(root, factory) {
    "use strict";
    factory.APPID = 900300;
    factory.VERSION = "3.2.0.0";
    factory.API = "http://webapi.dev.demo.com";
    factory.REPORT_API = "http://report.dev.demo.com";
    factory.STYLE = "http://imgcache.dev.demo.com/website/dist";
    factory.CHANNEL = "pc";
    factory.SKEY = "pc_huizhuang_secret_key";
    factory.ORDER_API = "http://www2.dev.demo.com";
    /* 暴露 API 工厂*/
    return factory;

})(window, window.CONFIG = window.CONFIG || {});