"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RankedSmartphone = void 0;

var _smartphone = require("./smartphone");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var RankedSmartphone =
/*#__PURE__*/
function (_Smartphone) {
  _inherits(RankedSmartphone, _Smartphone);

  function RankedSmartphone(brandC, modelC, yearC, priceC, rankC) {
    var _this;

    _classCallCheck(this, RankedSmartphone);

    _this = _possibleConstructorReturn(this, (RankedSmartphone.__proto__ || Object.getPrototypeOf(RankedSmartphone)).call(this, brandC, modelC, yearC, priceC));
    Object.defineProperty(_assertThisInitialized(_this), "rank", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    _this.rank = rankC;
    return _this;
  }

  _createClass(RankedSmartphone, [{
    key: "getFullInfo",
    value: function getFullInfo() {
      return this.brand + " " + this.model + " smartphone (" + this.year + ") costs: " + this.price + " USD. Ranked: " + this.rank;
    }
  }]);

  return RankedSmartphone;
}(_smartphone.Smartphone);

exports.RankedSmartphone = RankedSmartphone;