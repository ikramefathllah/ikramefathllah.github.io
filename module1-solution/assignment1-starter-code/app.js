(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',ControllFunc);
ControllFunc.$inject=['$scope'];
function ControllFunc($scope){
    $scope.items="";
    $scope.message="please enter the items";
    $scope.verifier=function(){
        var nbrItem=0;
        var splitedWord=$scope.items.split(",");
        nbrItem=splitedWord.length;
        
        for(var i=0;i<nbrItem;i++){
            if(splitedWord[i]=="" || splitedWord[i]==" ")
                {console.log(splitedWord[i]);
                nbrItem--;}
        }
        console.log(nbrItem);
        if(nbrItem<=3 && nbrItem>0)
            $scope.message="enjoy";
        else if(nbrItem>3)
            $scope.message="too much";
        else
            $scope.message="please enter the items";
        
    }
}
})()