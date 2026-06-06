{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.BasicCache = void 0;
  function _v3(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  _v2.BasicCache = function () {
    var _v0;
    function _v1() {
      if (!(this instanceof _v1)) throw TypeError("Cannot call a class as a function");
      _v3(this, "store", void 0), _v3(this, "handlers", []), this.store = {};
    }
    return _v0 = [{
      key: "setItem",
      value: function (_v0, _v1) {
        this.store[_v0] = _v1, this.handlers.filter(function (_v0) {
          return _v0 === _v0.key;
        }).forEach(function (_v0) {
          (0, _v0.handler)(_v1);
        });
      }
    }, {
      key: "getItem",
      value: function (_v0) {
        return this.store[_v0];
      }
    }, {
      key: "deleteItem",
      value: function (_v0) {
        this.store[_v0] = void 0;
      }
    }, {
      key: "resetStore",
      value: function () {
        this.store = {};
      }
    }, {
      key: "subscribe",
      value: function (_v0, _v1) {
        this.handlers.push({
          handler: _v1,
          key: _v0
        });
      }
    }, {
      key: "unsubscribe",
      value: function (_v0) {
        this.handlers = this.handlers.filter(function (_v0) {
          return _v0.handler !== _v0;
        });
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v1.prototype, _v0), _v1;
  }();
}