(function(){
    'use strict';
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    MyInfoController.$inject=[ 'ClientService']
    function MyInfoController(ClientService){
        var MyInfo= this;
        MyInfo.userInfo=ClientService
        
        MyInfo.user= MyInfo.userInfo.getUser()
       MyInfo.dish=this.userInfo.getDish()
       MyInfo.category_short_name= this.userInfo.getCategory()

       if(MyInfo.dish.name==undefined)
             MyInfo.state=false
        else
            MyInfo.state=true;
    }
})()