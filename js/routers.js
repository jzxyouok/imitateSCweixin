'use strict';

define(function() {
    return {
        defaultRoutePath: '/tab/home',
        routers: {
            //**********************************layout*********************************************//
            'root': {
                url: "",
                abstract: true,
                templateUrl: "templates/layout/root.html",
            },
            'root.tabs': {
                url: "/tab",
                abstract: true,
                templateUrl: 'templates/layout/tab.html'
            },

            //**********************************home*********************************************//
            'root.tabs.home': {
                url: '/home',
                // data: {
                //     shareKey: 'share_home',
                // },
                views: {
                    'home-tab': {
                        templateUrl: 'templates/home/index.html'
                    }
                }
            }
        }
    };
});