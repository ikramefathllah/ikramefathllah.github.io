(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
        var categoriesList = this;

        categoriesList.items = [];

        MenuDataService.getAllCategories().then(function(response) {
            console.log("Response from API: ", response.data);
            categoriesList.items = response.data;
        }).catch(function(error) {
            console.error("There is an error:", error);
        });
    }
})();
