"use strict";
exports.__esModule = true;
var Store = /** @class */ (function () {
    function Store(city, street, isOpen) {
        this.city = city;
        this.street = street;
        this.isOpen = isOpen;
    }
    Store.prototype.addSmartphone = function (sm) {
        this.stuff.push(sm);
    };
    Store.prototype.getSmartphones = function () {
        for (var _i = 0, _a = this.stuff; _i < _a.length; _i++) {
            var sm = _a[_i];
            console.log("\n" + sm.brand + " " + sm.model);
        }
    };
    return Store;
}());
exports.Store = Store;
