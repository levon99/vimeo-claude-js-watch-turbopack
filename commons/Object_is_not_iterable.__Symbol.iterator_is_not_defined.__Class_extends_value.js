{
  "use strict";

  var _v1 = function (_v0, _v1) {
      return (_v1 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (_v0, _v1) {
        _v0.__proto__ = _v1;
      } || function (_v0, _v1) {
        for (var _v2 in _v1) Object.prototype.hasOwnProperty.call(_v1, _v2) && (_v0[_v2] = _v1[_v2]);
      })(_v0, _v1);
    },
    _v2 = function () {
      return (_v2 = Object.assign || function (_v0) {
        for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
        return _v0;
      }).apply(this, arguments);
    };
  "function" == typeof SuppressedError && SuppressedError, _v0.s(["_", 0, function (_v0, _v1) {
    var _v2 = "function" == typeof Symbol && _v0[Symbol.iterator];
    if (!_v2) return _v0;
    var _v3,
      _v4,
      _v5 = _v2.call(_v0),
      _v6 = [];
    try {
      for (; (void 0 === _v1 || _v1-- > 0) && !(_v3 = _v5.next()).done;) _v6.push(_v3.value);
    } catch (_v0) {
      _v4 = {
        error: _v0
      };
    } finally {
      try {
        _v3 && !_v3.done && (_v2 = _v5.return) && _v2.call(_v5);
      } finally {
        if (_v4) throw _v4.error;
      }
    }
    return _v6;
  }, "a", 0, function (_v0, _v1) {
    return Object.defineProperty ? Object.defineProperty(_v0, "raw", {
      value: _v1
    }) : _v0.raw = _v1, _v0;
  }, "b", 0, function (_v0, _v1) {
    var _v2 = {};
    for (var _v3 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v3) && 0 > _v1.indexOf(_v3) && (_v2[_v3] = _v0[_v3]);
    if (null != _v0 && "function" == typeof Object.getOwnPropertySymbols) for (var _v4 = 0, _v3 = Object.getOwnPropertySymbols(_v0); _v4 < _v3.length; _v4++) 0 > _v1.indexOf(_v3[_v4]) && Object.prototype.propertyIsEnumerable.call(_v0, _v3[_v4]) && (_v2[_v3[_v4]] = _v0[_v3[_v4]]);
    return _v2;
  }, "c", () => _v2, "d", 0, function (_v0) {
    var _v1 = "function" == typeof Symbol && Symbol.iterator,
      _v2 = _v1 && _v0[_v1],
      _v3 = 0;
    if (_v2) return _v2.call(_v0);
    if (_v0 && "number" == typeof _v0.length) return {
      next: function () {
        return _v0 && _v3 >= _v0.length && (_v0 = void 0), {
          value: _v0 && _v0[_v3++],
          done: !_v0
        };
      }
    };
    throw TypeError(_v1 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }, "e", 0, function (_v0, _v1, _v2) {
    if (_v2 || 2 == arguments.length) for (var _v3, _v4 = 0, _v5 = _v1.length; _v4 < _v5; _v4++) !_v3 && _v4 in _v1 || (_v3 || (_v3 = Array.prototype.slice.call(_v1, 0, _v4)), _v3[_v4] = _v1[_v4]);
    return _v0.concat(_v3 || Array.prototype.slice.call(_v1));
  }, "f", 0, function (_v0, _v1) {
    if ("function" != typeof _v1 && null !== _v1) throw TypeError("Class extends value " + String(_v1) + " is not a constructor or null");
    function _v2() {
      this.constructor = _v0;
    }
    _v1(_v0, _v1), _v0.prototype = null === _v1 ? Object.create(_v1) : (_v2.prototype = _v1.prototype, new _v2());
  }]);
}