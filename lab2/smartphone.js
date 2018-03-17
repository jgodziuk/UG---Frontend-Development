var smartphones = (function(){
  var available = [
    {
        brand: "Samsung",
        model : "Galaxy S8"
    },{
        brand: "Samsung",
        model : "Note 7"
    },{
        brand: "Samsung",
        model : "Galaxy S9 Plus"
    }
  ]

  var sold = [
    {
        brand: "Apple",
        model : "iPhone 8"
    },{
        brand: "Apple",
        model : "iPhone 7"
    },{
        brand: "Xiaomi",
        model : "MI A1"
    }
  ]

  return {
    getAvailable: function() {
        return available;
    },
    getSold: function() {
        return sold;
    }
  };
})();