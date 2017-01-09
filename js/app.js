"use strict";
define(['angular-md5'],function(md5){
    console.log(angular);
    var app = angular.module('app', ['ionic']);
    // run方法用于初始化全局的数据，仅对全局作用域起作用。
    app.run(['$rootScope',function($rootScope){
        console.log($rootScope);
    }])
})