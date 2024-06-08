/*(function(){
    'use strict';
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: "categories.html",
        bindings: {
            items: '<'
        } 
    });

})();*/

(function(){
    'use strict';
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'categories.html',
        bindings: {
            items: '<'
        },
        controller: CategoriesComponentController
    });

    function CategoriesComponentController() {
        var $ctrl = this;
        console.log("Items in component: ", $ctrl.items);
    }
})();
