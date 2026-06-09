{
  "use strict";

  var _v3 = function (_v0, _v1) {
    return (_v3 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (_v0, _v1) {
      _v0.__proto__ = _v1;
    } || function (_v0, _v1) {
      for (var _v2 in _v1) Object.prototype.hasOwnProperty.call(_v1, _v2) && (_v0[_v2] = _v1[_v2]);
    })(_v0, _v1);
  };
  _v2.__assign = function () {
    return _v2.__assign = Object.assign || function (_v0) {
      for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
      return _v0;
    }, _v2.__assign.apply(this, arguments);
  }, "function" == typeof SuppressedError && SuppressedError, _v2.__awaiter = function (_v0, _v1, _v2, _v3) {
    return new (_v2 || (_v2 = Promise))(function (_v0, _v1) {
      function _v2(_v0) {
        try {
          _v4(_v3.next(_v0));
        } catch (_v0) {
          _v1(_v0);
        }
      }
      function _v3(_v0) {
        try {
          _v4(_v3.throw(_v0));
        } catch (_v0) {
          _v1(_v0);
        }
      }
      function _v4(_v0) {
        var _v1;
        _v0.done ? _v0(_v0.value) : ((_v1 = _v0.value) instanceof _v2 ? _v1 : new _v2(function (_v0) {
          _v0(_v1);
        })).then(_v2, _v3);
      }
      _v4((_v3 = _v3.apply(_v0, _v1 || [])).next());
    });
  }, _v2.__extends = function (_v0, _v1) {
    if ("function" != typeof _v1 && null !== _v1) throw TypeError("Class extends value " + String(_v1) + " is not a constructor or null");
    function _v2() {
      this.constructor = _v0;
    }
    _v3(_v0, _v1), _v0.prototype = null === _v1 ? Object.create(_v1) : (_v2.prototype = _v1.prototype, new _v2());
  }, _v2.__generator = function (_v0, _v1) {
    var _v2,
      _v3,
      _v4,
      _v5,
      _v6 = {
        label: 0,
        sent: function () {
          if (1 & _v4[0]) throw _v4[1];
          return _v4[1];
        },
        trys: [],
        ops: []
      };
    return _v5 = {
      next: _v7(0),
      throw: _v7(1),
      return: _v7(2)
    }, "function" == typeof Symbol && (_v5[Symbol.iterator] = function () {
      return this;
    }), _v5;
    function _v7(_v0) {
      return function (_v0) {
        var _v1 = [_v0, _v0];
        if (_v2) throw TypeError("Generator is already executing.");
        for (; _v5 && (_v5 = 0, _v1[0] && (_v6 = 0)), _v6;) try {
          if (_v2 = 1, _v3 && (_v4 = 2 & _v1[0] ? _v3.return : _v1[0] ? _v3.throw || ((_v4 = _v3.return) && _v4.call(_v3), 0) : _v3.next) && !(_v4 = _v4.call(_v3, _v1[1])).done) return _v4;
          switch (_v3 = 0, _v4 && (_v1 = [2 & _v1[0], _v4.value]), _v1[0]) {
            case 0:
            case 1:
              _v4 = _v1;
              break;
            case 4:
              return _v6.label++, {
                value: _v1[1],
                done: !1
              };
            case 5:
              _v6.label++, _v3 = _v1[1], _v1 = [0];
              continue;
            case 7:
              _v1 = _v6.ops.pop(), _v6.trys.pop();
              continue;
            default:
              if (!(_v4 = (_v4 = _v6.trys).length > 0 && _v4[_v4.length - 1]) && (6 === _v1[0] || 2 === _v1[0])) {
                _v6 = 0;
                continue;
              }
              if (3 === _v1[0] && (!_v4 || _v1[1] > _v4[0] && _v1[1] < _v4[3])) {
                _v6.label = _v1[1];
                break;
              }
              if (6 === _v1[0] && _v6.label < _v4[1]) {
                _v6.label = _v4[1], _v4 = _v1;
                break;
              }
              if (_v4 && _v6.label < _v4[2]) {
                _v6.label = _v4[2], _v6.ops.push(_v1);
                break;
              }
              _v4[2] && _v6.ops.pop(), _v6.trys.pop();
              continue;
          }
          _v1 = _v1.call(_v0, _v6);
        } catch (_v0) {
          _v1 = [6, _v0], _v3 = 0;
        } finally {
          _v2 = _v4 = 0;
        }
        if (5 & _v1[0]) throw _v1[1];
        return {
          value: _v1[0] ? _v1[1] : void 0,
          done: !0
        };
      };
    }
  }, _v2.__makeTemplateObject = function (_v0, _v1) {
    return Object.defineProperty ? Object.defineProperty(_v0, "raw", {
      value: _v1
    }) : _v0.raw = _v1, _v0;
  }, _v2.__read = function (_v0, _v1) {
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
  }, _v2.__rest = function (_v0, _v1) {
    var _v2 = {};
    for (var _v3 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v3) && 0 > _v1.indexOf(_v3) && (_v2[_v3] = _v0[_v3]);
    if (null != _v0 && "function" == typeof Object.getOwnPropertySymbols) for (var _v4 = 0, _v3 = Object.getOwnPropertySymbols(_v0); _v4 < _v3.length; _v4++) 0 > _v1.indexOf(_v3[_v4]) && Object.prototype.propertyIsEnumerable.call(_v0, _v3[_v4]) && (_v2[_v3[_v4]] = _v0[_v3[_v4]]);
    return _v2;
  }, _v2.__spreadArray = function (_v0, _v1, _v2) {
    if (_v2 || 2 == arguments.length) for (var _v3, _v4 = 0, _v5 = _v1.length; _v4 < _v5; _v4++) !_v3 && _v4 in _v1 || (_v3 || (_v3 = Array.prototype.slice.call(_v1, 0, _v4)), _v3[_v4] = _v1[_v4]);
    return _v0.concat(_v3 || Array.prototype.slice.call(_v1));
  }, _v2.__values = function (_v0) {
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
  };
}