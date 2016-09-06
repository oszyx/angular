/**
 * Created by Administrator on 2016/5/7 0007.
 */
'use strict';
angular.module('app')
    .run(
        [          '$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider,   $urlRouterProvider) {
                $urlRouterProvider.otherwise('/access/content');
                $stateProvider.state('access', {
                    url: '/access',
                    template: '<div ui-view></div>'})
                .state('access.signin', {
                    url: '/signin',
                    templateUrl: 'tpl/page_login.html',
                    resolve: {
                        deps: ['uiLoad',
                            function( uiLoad ){
                                return uiLoad.load( ['js/controllers/signin.js'] );
                            }]
                    }
                })
                .state('access.content', {
                    url: '/content',
                    templateUrl: 'tpl/page_content.html'
                })
            }
        ]
    );
