{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.RestfulProvider = void 0;
  var _v3,
    _v4,
    _v5 = _v7(_v0.r(0)),
    _v6 = _v7(_v0.r(0));
  function _v7(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  function _v8(_v0) {
    return (_v8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v9(_v0) {
    return (_v9 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v10(_v0, _v1) {
    return (_v10 = Object.setPrototypeOf || function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  var _v11 = function (_v0) {
    var _v1;
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    function _v2() {
      var _v0;
      if (!(this instanceof _v2)) throw TypeError("Cannot call a class as a function");
      return _v0 = _v9(_v2).apply(this, arguments), _v0 && ("object" === _v8(_v0) || "function" == typeof _v0) ? _v0 : function (_v0) {
        if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _v0;
      }(this);
    }
    return _v2.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v2,
        writable: !0,
        configurable: !0
      }
    }), _v0 && _v10(_v2, _v0), _v1 = [{
      key: "getChildContext",
      value: function () {
        return {
          cache: this.props.cache
        };
      }
    }, {
      key: "render",
      value: function () {
        return this.props.children;
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v2.prototype, _v1), _v2;
  }(_v6.default.Component);
  _v2.RestfulProvider = _v11, _v3 = "childContextTypes", _v4 = {
    cache: _v5.default.object.isRequired
  }, _v3 in _v11 ? Object.defineProperty(_v11, _v3, {
    value: _v4,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : _v11[_v3] = _v4;
}