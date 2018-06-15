"use strict";
exports.__esModule = true;
var SmartphoneRepo = /** @class */ (function () {
    function SmartphoneRepo() {
    }
    SmartphoneRepo.prototype.addSmartphone = function (sm) {
        this.smartphones.push(sm);
    };
    SmartphoneRepo.prototype.getSmartphoneByBrand = function (mybrand) {
        return this.smartphones.filter(function (sm) { return sm.brand === mybrand; })[0];
    };
    return SmartphoneRepo;
}());
exports.SmartphoneRepo = SmartphoneRepo;
