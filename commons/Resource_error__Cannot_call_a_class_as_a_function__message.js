{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.RestfulError = void 0;
  function _v3(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  _v2.RestfulError = function () {
    var _v0;
    function _v1() {
      var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Resource error",
        _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
        _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (!(this instanceof _v1)) throw TypeError("Cannot call a class as a function");
      _v3(this, "message", void 0), _v3(this, "statusCode", void 0), _v3(this, "body", void 0), this.message = _v0, this.statusCode = _v1, this.body = _v2;
    }
    return _v0 = [{
      key: "status",
      value: function () {
        return this.statusCode;
      }
    }, {
      key: "msg",
      value: function () {
        return this.message;
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v1.prototype, _v0), _v1;
  }();
}