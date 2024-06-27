(function(){
    'use strict';
    angular.module('public')
    .service('ClientService', ClientService);

   
    function ClientService(){
        var clientService= this;
    clientService.user={}
    clientService.data={}
    clientService.category_short_name=""
    clientService.setUser=function(user, data, category_short_name){
        clientService.user=user
        clientService.data=data
        clientService.category_short_name= category_short_name
    }
    clientService.getUser= function(){
        return clientService.user
    }
    clientService.getDish= function(){
        return clientService.data
    }  
    clientService.getCategory= function(){
        return clientService.category_short_name
    }  
    }

})();