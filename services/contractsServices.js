// Shared alerts Constructor
recipeApp.factory("Alert", function(){
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
