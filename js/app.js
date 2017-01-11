"use strict";
define(["routers"], function (config) {
    var app = angular.module("app", ["ionic"]);
    app.run(['$rootScope',function ($rootScope) {
       
    }]);
    app.config(["$stateProvider", "$urlRouterProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", "$ionicConfigProvider", "$httpProvider",
        function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ionicConfigProvider, $httpProvider) {

            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;

            //$ionicConfigProvider.views.maxCache(0); 

            var prepareRouter = function (router) {
                router.dependencies = router.dependencies || [];

                if (router.controller === undefined && router.jsUrl !== false && router.templateUrl)
                    router.controller = router.templateUrl.replace(/templates\//, '').replace(/\//g, '.').replace(/\.html/i, '');
                if (router.cssUrl === undefined && router.templateUrl)
                    router.cssUrl = "css!" + router.templateUrl.replace(/(.?)\.html/i, "$1") + ".css?v=" + (router.v || "1.0");
                if (router.jsUrl === undefined && router.templateUrl)
                    router.jsUrl = router.templateUrl.replace(/(.?)\.html/i, "$1") + ".js?v=" + (router.v || "1.0");

                if (angular.isString(router.cssUrl))
                    router.dependencies.push(router.cssUrl);
                if (angular.isString(router.jsUrl))
                    router.dependencies.push(router.jsUrl);

                router.resolve = router.resolve || {};
                angular.extend(router.resolve, {
                    resolver: ['$q', '$rootScope', function ($q, $rootScope) {
                        var deferred = $q.defer();
                        require(router.dependencies, function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                });
            }


            if (config.routers) {
                //console.log(JSON.stringify(config.routers));
                angular.forEach(config.routers, function (router, name) {
                    prepareRouter(router);
                    if (router.views) {
                        for (var key in router.views) {
                            var view = router.views[key];
                            prepareRouter(view);
                        }
                    }
                    $stateProvider.state(name, router);

                    //set abstract state's default url
                    if (router.abstract && router.defaultUrl) {
                        $urlRouterProvider.when(router.url, router.defaultUrl);
                    }
                });
            }
            if (config.defaultRoutePath){
                // $urlRouterProvider.otherwise(function(){
                //     console.info(location.hash);
                //     if(location.hash==""){
                //         setTimeout(function(){
                //             location.href="/#tab/home";
                //         },100);
                //     }else{
                //         alert("网络不佳，未加载成功！");
                //         console.info("加载页面失败");
                //     }
                // });
                $urlRouterProvider.otherwise(config.defaultRoutePath);
            }

            //console.debug( window.location.href);
        }]);
    return app;
});
