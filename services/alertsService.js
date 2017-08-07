// a service in which a user adds,updates or removes an alert from his list.
//a service in which a user can load an alert 
alertsApp.factory("alerts", function(Alert,$http) {
    var alertArr;
    // instead of the using the local storage can leave the alertArr=[] and all the added alerts will be erased
    if(!localStorage.alertArr) {
        localStorage.alertArr = [];
    } else {
        alertArr = localStorage.alertArr;
    }

    var add = function(alert) {
        alertArr.push(alert);
    }

    var update = function(index, alert) {
        alertArr[index] = alert;
    }

    var remove = function(index) {
        alertArr.splice(index, 1);
    }

    var load = function(alertPlainObjectArr) {
        for (var i = 0; i < alertPlainObjectArr.length; i++) {
            alertArr.push(new Alert(alertPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return alertArr;
    }

    var get = function(index) {
        return alertArr[index];
    }

    var removeAll = function() {
        alertArr = [];
    }

    var getCategories = function(){
        return $http.get("../data/categories.json");
    }
    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        getCategories:getCategories
    }
})