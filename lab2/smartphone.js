var smartphones = (function(){
  var available = [
    {
        brand: "Samsung",
        model : "Galaxy S8",
        price : 3500
    },{
        brand: "Samsung",
        model : "Note 7",
        price : 4000
    },{
        brand: "Samsung",
        model : "Galaxy S9 Plus",
        price : 5000
    }
  ]

  var sold = [
    {
        brand: "Apple",
        model : "iPhone 8",
        price : 4000
    },{
        brand: "Apple",
        model : "iPhone 7",
        price : 3000
    },{
        brand: "Xiaomi",
        model : "MI A1",
        price : 2000
    }
  ]

  return {
    getAvailable: function() {
        return available;
    },
    getAvailableCheaperThan: function(price) {
        return available.filter(function(smartphone){
            return smartphone.price <= price;
        });
    },
    getSold: function() {
        return sold;
    }
  };
})();

console.log("Available:");
console.log(smartphones.getAvailable());

console.log("Available cheaper than 4000:");
console.log(smartphones.getAvailableCheaperThan(4000));

console.log("Sold:");
console.log(smartphones.getAvailable());