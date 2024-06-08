(function(){
    'use strict';
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        console.log("la valeur de item est:"+items);
        var itemDetail= this;
        itemDetail.items= items.menu_items;
        console.log("la valeur de item menu est:"+items.menu_items);
        console.log("la valeur de detail menu est:"+itemDetail.items[0]);
        
       
    }
})();
