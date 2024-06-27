(function(){
    'use strict';
    angular.module('public')
    .controller('SignUpController', SignUpController);
    SignUpController.$inject=['MenuDataService', 'ClientService']
    function SignUpController(MenuDataService, ClientService){
        var signUp= this;
        signUp.service=MenuDataService;
        signUp.user={
            firstName:"",
            lastName: "",
            email: "",
            favorite: ""
        };
        signUp.message="";
        signUp.submitForm=function(){
            console.log('Form submitted with', signUp.user);
            //recuperer la valeur de plat favoris
            var category_short_name= this.user.favorite.charAt(0);
            console.log('part1='+category_short_name);
            var menu_number=this.user.favorite.slice(1);
            console.log('part2:'+menu_number)
            signUp.service.getItemsForCategory(category_short_name, menu_number).then(function(data) {
                if(data.name==undefined){
                    signUp.message = "No such menu number exist!";
                }
                else{
                    //signUp.message = "Favorite dish: " + data.name;
                    signUp.message="your information has been saved";
                    console.log('Dish details:', data);
                    ClientService.setUser(signUp.user, data, category_short_name)
                }
                
            }).catch(function(error) {
                signUp.message = "No such menu number exist!";
                console.log('Error:', error);
            });
        }
    }
})()