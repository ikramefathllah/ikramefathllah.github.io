(function(){
    'use strict';
    angular.module('MenuApp')
    .config(RoutesConfig);
    RoutesConfig.$inject= ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'categories.html',
            controller: 'CategoriesController as categoriesList',
            resolve: {
                items: [ 'MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('itemsDetail', {
            url: '/items-detail/{categoryShortName}',
            templateUrl: 'items.html',
            controller: 'ItemsController as itemDetail',
            resolve: {
                items: [ '$stateParams','MenuDataService', function($stateParams, MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function(response){
                        return response;
                    });
                }]
            }
        });
    }
})();