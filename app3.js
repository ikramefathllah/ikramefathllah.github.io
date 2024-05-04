(function(){
    'use strict';
    angular.module("SelectionItemApp", [])
    .controller("MyController", MyController)
    .service("MyService", MyService);
    //injection de service dans le controlleur
    MyController.$inject=["MyService"];
    function MyController(MyService){
        var menu = this;
        menu.word="";
        /*menu.foundItems = [];
        menu.words='';*/

        menu.searchItems = function() {
            var promise = MyService.getListOfItems();
        
            promise.then(function(response){
                var allItems = response.data;
        
                menu.categories = [];
        
                // Itérer sur les propriétés de allItems
                for (var categoryKey in allItems) {
                    if (allItems.hasOwnProperty(categoryKey)) {
                        var category = allItems[categoryKey];
                        var menuItems = category.menu_items;
        
                        // Itérer sur les menu_items de la catégorie
                        for (var i = 0; i < menuItems.length; i++) {
                            var item = menuItems[i];
                            // Vérifier si la description contient le mot recherché
                            if (menu.word === "") {
                                // La variable 'word' est une chaîne vide
                                console.log("La variable 'word' est une chaîne vide.");
                            } 
                               else{
                                if (item.description.toLowerCase().includes(menu.word.toLowerCase())) {
                                    
                                    menu.categories.push(item);
                                }
                               }
                               
                            
                           
                        }
                    }
                }
            })
            .catch(function(error){
                console.log("There is an error:", error);
            });
        };
        menu.removeItem= function(item){
            menu.categories.splice(item, 1);
        }
        
        /*menu.searchItems = function() {
          
            var promise = MyService.getListOfItems();
            
            promise.then(function(response){
               var allItems = response.data;
                menu.category=[];
            
                for(var item of allItems){
                    if(item.category.desciption.toLowerCase.include(word.toLowerCase)){
                        menu.categories.push(item);
                    }
                }
            })
            .catch( function(error){
                console.log("There is an error");
            });
           
        };*/
    }
    

    //injecter http dans la partie service
    MyService.$inject=["$http"];
    function MyService($http){
        var service= this;
        service.getListOfItems= function(){
            var result= $http({
                method: "GET",
                url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
            });
            return result;
        }
   

    }

})()