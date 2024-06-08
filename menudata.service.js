(function(){
    'use strict';
    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject=["$http"];
    function MenuDataService($http){
        var service= this;
        //the first methode
        service.getAllCategories= function(){
            var result= $http({
                method: "GET",
                url: ("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
            });
            return result;
        };

         //the second methode
        service.getItemsForCategory=function(categoryShortName){
           /* var result= $http({
                method: "GET",
                url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/"+categoryShortName+".json")
            });*/
            return $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json"
            }).then(function(response){
                console.log("Réponse de getItemsForCategory:", response.data); // Ajoutez ce log
                return response.data;
            });
            console.log("je suis dans service");
            return result;
        };    

    }

})();