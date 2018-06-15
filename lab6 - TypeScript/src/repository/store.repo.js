"use strict";
exports.__esModule = true;
var StoreRepo = /** @class */ (function () {
    function StoreRepo() {
    }
    StoreRepo.prototype.addStore = function (st) {
        this.stores.push(st);
    };
    StoreRepo.prototype.getStoreByCity = function (mycity) {
        return this.stores.filter(function (st) { return st.city === mycity; })[0];
    };
    return StoreRepo;
}());
exports.StoreRepo = StoreRepo;
