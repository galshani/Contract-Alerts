// Shared alerts Constructor
AlertsApp.factory("Alert", function(){
    function Alert(plainObject) {
        this.suppliertName = plainObject.suppliertName;
        this.category = plainObject.category;
        this.pointOfContact = plainObject.pointOfContact;
        this.phone = plainObject.phone;
        this.alertDate = plainObject.alertDate;
        this.contractScanUrl = plainObject.contractScanUrl;
        this.fileName = plainObject.fileName;
    };

    return Alert;
});
// a service in which a user adds,updates or removes an alert from his list.
//a service in which a user can load an alert 
AlertsApp.factory("alerts", function(Alert) {
    var alertArr = [];

    var add = function(alert) {
        alertArr.push(alert);
    }

    var update = function(index, alert) {
        alertArr[index] = alert;
    }

    var remove = function(index) {
        recipeArr.splice(index, 1);
    }

    var load = function(receipePlainObjectArr) {
        for (var i = 0; i < receipePlainObjectArr.length; i++) {
            recipeArr.push(new Recipe(receipePlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return recipeArr;
    }

    var get = function(index) {
        return recipeArr[index];
    }

    var removeAll = function() {
        recipeArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})