// Shared User Constructor
alertsApp.factory("User", function(){
    function User(plainObject) {
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.email = plainObject.email;
        this.password = plainObject.password;      
        this.contractSource = plainObject.contractSource;
        
    };

    return User;
});

// Service that manges the active user
alertsApp.factory("activeUser", function(User){
    var user = {
        firstname:"Gal",
        lastname:"Shani",
        email:"galshani76@gmail.com",
        password:"1234",
        contractSource:"data/contracts.json"
        };

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});