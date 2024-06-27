(function(){
    'use strict';
    angular.module('public')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject=["$http"];
    function MenuDataService($http){
        var service= this;
    
        service.getItemsForCategory=function(categoryShortName, menu_number){
          
            return $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/"+categoryShortName+"/menu_items/"+menu_number+".json"
            }).then(function(response){
                console.log("Réponse de getItemsForCategory:", response.data); // Ajoutez ce log
                return response.data;
            });
            console.log("je suis dans service");
            return result;
        };    

    }

})();