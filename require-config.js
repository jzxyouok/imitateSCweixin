'use strict';

require.config({
    // --------------------------------------------------------------
        // //指定基路径
        // baseUrl: 'js/',
    // 模块加载路径
    paths: {
        'app': 'js/app',
        'ionic': 'lib/ionic-bundle',
        'angular-md5': 'lib/angular-md5'
    },
    // 加载非AMD规范模块
    shim: {
        // --------------------------------------------------------------
            // "backbone": {
            //     // 表明该模块的依赖性
            //     deps: [ "underscore" ],
            //     // 表明这个模块外部调用时的名称
            //     exports: "Backbone"
            // },
            // 'ionic': { exports: 'ionic' },
        'angular-md5': ['ionic']
    },
    // 全局引用的模块
    priority: [
        'ionic'
    ],
});
// --------------------------------------------------------------
    // 主模块可以将项目基础模块加载加来并定义全局方法等
    // require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
    // 　　　　// some code here
    // });
require(['app'],function() {
    // console.log( angular );
    // 手动加载，类似自动加载的ng-app
    angular.bootstrap(document, ['app']);
});