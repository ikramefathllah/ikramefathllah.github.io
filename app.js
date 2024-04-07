(function(){
    'use strict';
    angular.module('ItemCheckOff', [])
    .controller('showItemToBuy', ShowItemToBuy)
    .controller('showItemBought', ShowItemBought)
    .service('MonServiceCheckOff', MonServiceCheckOff);

    //the first controller for the list of items to buy
    ShowItemToBuy.$inject=['MonServiceCheckOff'];
    function ShowItemToBuy(MonServiceCheckOff){
        var controll1=this;
        controll1.item="";
        controll1.quantity="";
        controll1.addItem= function(){
            MonServiceCheckOff.addItem(controll1.item, controll1.quantity);
        }
        controll1.moveItem= function(indexItem){
            MonServiceCheckOff.moveItem(indexItem);
           

        }
       
        controll1.itemsToBuy= MonServiceCheckOff.getItemsToBuy();
        
      }

      //the second controller for the list of items already bought
      ShowItemBought.$inject=['MonServiceCheckOff'];
      function ShowItemBought(MonServiceCheckOff){
        var controll2=this;
        controll2.itemBought=MonServiceCheckOff.getItemsBought(); 
      }

      function MonServiceCheckOff(){
        var service=this;
        var listToBuy=[];
        var listBought=[];
        service.addItem= function(item, quantity){
            var article={
                item: item,
                quantity: quantity
            }
            listToBuy.push(article);
        }

        service.moveItem= function(indexItem){
            var article=listToBuy[indexItem];
            listToBuy.splice(indexItem, 1); //remove from the list
            listBought.push(article); //add to the list

        }
        
        service.getItemsToBuy= function(){
            return listToBuy;
      }
      service.getItemsBought= function(){
            return listBought;     
      }
    }
})()