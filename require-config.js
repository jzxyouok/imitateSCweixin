'use strict';
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */
require.config({
    // --------------------------------------------------------------
        // //指定基路径
        // baseUrl: 'js/',
    // 模块加载路径
    paths: {
        'app': 'js/app',
        'directives': 'js/directives',
        'services': 'js/services',
        'filters': 'js/filters',
        'routers': 'js/routers',
        'ionic': 'lib/ionic-bundle',
        'angular-md5': 'lib/angular-md5'
    },
    // 加载非AMD规范模块的依赖关系
    shim: {
        // --------------------------------------------------------------
            // "backbone": {
            //     // 表明该模块的依赖性
            //     deps: [ "underscore" ],
            //     // 表明这个模块外部调用时的名称
            //     exports: "Backbone"
            // },
            // 'ionic': { exports: 'ionic' },
        'app': ['ionic'],
        'angular-md5': ['ionic']
    },
    // 对于给定的模块前缀，使用一个不同的模块ID来加载该模块。
    map: {
        '*': {
            'css': 'lib/css'
        }
    },
});
// --------------------------------------------------------------
    // 主模块可以将项目基础模块加载加来并定义全局方法等
    // require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
    // 　　　　// some code here
    // });
require(['app', 'services', 'directives', 'filters'],function() {
    // 手动加载，类似自动加载的ng-app
    angular.bootstrap(document, ['app']);
});