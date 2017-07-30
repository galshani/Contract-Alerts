// Shared alerts Constructor
recipeApp.factory("Alert", function(){
    function Alert(plainObject) {
        this.contractName = plainObject.contractName;
        this.description = plainObject.description;
        this.duration = plainObject.duration;
        this.ingrediants = plainObject.ingrediants;
        this.steps = plainObject.steps;
        this.imageUrl = plainObject.imageUrl;
    };

    return Recipe;
});