"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Smartphone = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Smartphone =
/*#__PURE__*/
function () {
  function Smartphone(brandC, modelC, yearC, priceC) {
    _classCallCheck(this, Smartphone);

    Object.defineProperty(this, "brand", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "model", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "year", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "price", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    this.brand = brandC;
    this.model = modelC;
    this.year = yearC;
    this.price = priceC;
  }

  _createClass(Smartphone, [{
    key: "getFullInfo",
    value: function getFullInfo() {
      return this.brand + " " + this.model + " smartphone (" + this.year + ") costs: " + this.price + " USD";
    }
  }]);

  return Smartphone;
}();

exports.Smartphone = Smartphone;