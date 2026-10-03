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
    },
    _v3 = Object.create ? function (_v0, _v1, _v2, _v3) {
      void 0 === _v3 && (_v3 = _v2), Object.defineProperty(_v0, _v3, {
        enumerable: !0,
        get: function () {
          return _v1[_v2];
        }
      });
    } : function (_v0, _v1, _v2, _v3) {
      void 0 === _v3 && (_v3 = _v2), _v0[_v3] = _v1[_v2];
    };
  function _v4(_v0) {
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
  }
  function _v5(_v0, _v1) {
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
  }
  function _v6(_v0) {
    return this instanceof _v6 ? (this.v = _v0, this) : new _v6(_v0);
  }
  var _v7 = Object.create ? function (_v0, _v1) {
    Object.defineProperty(_v0, "default", {
      enumerable: !0,
      value: _v1
    });
  } : function (_v0, _v1) {
    _v0.default = _v1;
  };
  _v0.s(["__assign", () => _v2, "__asyncDelegator", 0, function (_v0) {
    var _v1, _v2;
    return _v1 = {}, _v3("next"), _v3("throw", function (_v0) {
      throw _v0;
    }), _v3("return"), _v1[Symbol.iterator] = function () {
      return this;
    }, _v1;
    function _v3(_v0, _v1) {
      _v1[_v0] = _v0[_v0] ? function (_v0) {
        return (_v2 = !_v2) ? {
          value: _v6(_v0[_v0](_v0)),
          done: "return" === _v0
        } : _v1 ? _v1(_v0) : _v0;
      } : _v1;
    }
  }, "__asyncGenerator", 0, function (_v0, _v1, _v2) {
    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
    var _v3,
      _v4 = _v2.apply(_v0, _v1 || []),
      _v5 = [];
    return _v3 = {}, _v6("next"), _v6("throw"), _v6("return"), _v3[Symbol.asyncIterator] = function () {
      return this;
    }, _v3;
    function _v6(_v0) {
      _v4[_v0] && (_v3[_v0] = function (_v0) {
        return new Promise(function (_v0, _v1) {
          _v5.push([_v0, _v0, _v0, _v1]) > 1 || _v7(_v0, _v0);
        });
      });
    }
    function _v7(_v0, _v1) {
      try {
        var _v2;
        (_v2 = _v4[_v0](_v1)).value instanceof _v6 ? Promise.resolve(_v2.value.v).then(_v8, _v9) : _v10(_v5[0][2], _v2);
      } catch (_v0) {
        _v10(_v5[0][3], _v0);
      }
    }
    function _v8(_v0) {
      _v7("next", _v0);
    }
    function _v9(_v0) {
      _v7("throw", _v0);
    }
    function _v10(_v0, _v1) {
      _v0(_v1), _v5.shift(), _v5.length && _v7(_v5[0][0], _v5[0][1]);
    }
  }, "__asyncValues", 0, function (_v0) {
    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
    var _v1,
      _v2 = _v0[Symbol.asyncIterator];
    return _v2 ? _v2.call(_v0) : (_v0 = _v4(_v0), _v1 = {}, _v3("next"), _v3("throw"), _v3("return"), _v1[Symbol.asyncIterator] = function () {
      return this;
    }, _v1);
    function _v3(_v0) {
      _v1[_v0] = _v0[_v0] && function (_v0) {
        return new Promise(function (_v0, _v1) {
          var _v2, _v3, _v4;
          _v2 = _v0, _v3 = _v1, _v4 = (_v0 = _v0[_v0](_v0)).done, Promise.resolve(_v0.value).then(function (_v0) {
            _v2({
              value: _v0,
              done: _v4
            });
          }, _v3);
        });
      };
    }
  }, "__await", 0, _v6, "__awaiter", 0, function (_v0, _v1, _v2, _v3) {
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
  }, "__classPrivateFieldGet", 0, function (_v0, _v1, _v2, _v3) {
    if ("a" === _v2 && !_v3) throw TypeError("Private accessor was defined without a getter");
    if ("function" == typeof _v1 ? _v0 !== _v1 || !_v3 : !_v1.has(_v0)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === _v2 ? _v3 : "a" === _v2 ? _v3.call(_v0) : _v3 ? _v3.value : _v1.get(_v0);
  }, "__classPrivateFieldSet", 0, function (_v0, _v1, _v2, _v3, _v4) {
    if ("m" === _v3) throw TypeError("Private method is not writable");
    if ("a" === _v3 && !_v4) throw TypeError("Private accessor was defined without a setter");
    if ("function" == typeof _v1 ? _v0 !== _v1 || !_v4 : !_v1.has(_v0)) throw TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === _v3 ? _v4.call(_v0, _v2) : _v4 ? _v4.value = _v2 : _v1.set(_v0, _v2), _v2;
  }, "__createBinding", 0, _v3, "__decorate", 0, function (_v0, _v1, _v2, _v3) {
    var _v4,
      _v5 = arguments.length,
      _v6 = _v5 < 3 ? _v1 : null === _v3 ? _v3 = Object.getOwnPropertyDescriptor(_v1, _v2) : _v3;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) _v6 = Reflect.decorate(_v0, _v1, _v2, _v3);else for (var _v7 = _v0.length - 1; _v7 >= 0; _v7--) (_v4 = _v0[_v7]) && (_v6 = (_v5 < 3 ? _v4(_v6) : _v5 > 3 ? _v4(_v1, _v2, _v6) : _v4(_v1, _v2)) || _v6);
    return _v5 > 3 && _v6 && Object.defineProperty(_v1, _v2, _v6), _v6;
  }, "__exportStar", 0, function (_v0, _v1) {
    for (var _v2 in _v0) "default" === _v2 || Object.prototype.hasOwnProperty.call(_v1, _v2) || _v3(_v1, _v0, _v2);
  }, "__extends", 0, function (_v0, _v1) {
    if ("function" != typeof _v1 && null !== _v1) throw TypeError("Class extends value " + String(_v1) + " is not a constructor or null");
    function _v2() {
      this.constructor = _v0;
    }
    _v1(_v0, _v1), _v0.prototype = null === _v1 ? Object.create(_v1) : (_v2.prototype = _v1.prototype, new _v2());
  }, "__generator", 0, function (_v0, _v1) {
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
        for (; _v6;) try {
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
  }, "__importDefault", 0, function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }, "__importStar", 0, function (_v0) {
    if (_v0 && _v0.__esModule) return _v0;
    var _v1 = {};
    if (null != _v0) for (var _v2 in _v0) "default" !== _v2 && Object.prototype.hasOwnProperty.call(_v0, _v2) && _v3(_v1, _v0, _v2);
    return _v7(_v1, _v0), _v1;
  }, "__makeTemplateObject", 0, function (_v0, _v1) {
    return Object.defineProperty ? Object.defineProperty(_v0, "raw", {
      value: _v1
    }) : _v0.raw = _v1, _v0;
  }, "__metadata", 0, function (_v0, _v1) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(_v0, _v1);
  }, "__param", 0, function (_v0, _v1) {
    return function (_v0, _v1) {
      _v1(_v0, _v1, _v0);
    };
  }, "__read", 0, _v5, "__rest", 0, function (_v0, _v1) {
    var _v2 = {};
    for (var _v3 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v3) && 0 > _v1.indexOf(_v3) && (_v2[_v3] = _v0[_v3]);
    if (null != _v0 && "function" == typeof Object.getOwnPropertySymbols) for (var _v4 = 0, _v3 = Object.getOwnPropertySymbols(_v0); _v4 < _v3.length; _v4++) 0 > _v1.indexOf(_v3[_v4]) && Object.prototype.propertyIsEnumerable.call(_v0, _v3[_v4]) && (_v2[_v3[_v4]] = _v0[_v3[_v4]]);
    return _v2;
  }, "__spread", 0, function () {
    for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0 = _v0.concat(_v5(arguments[_v1]));
    return _v0;
  }, "__spreadArray", 0, function (_v0, _v1, _v2) {
    if (_v2 || 2 == arguments.length) for (var _v3, _v4 = 0, _v5 = _v1.length; _v4 < _v5; _v4++) !_v3 && _v4 in _v1 || (_v3 || (_v3 = Array.prototype.slice.call(_v1, 0, _v4)), _v3[_v4] = _v1[_v4]);
    return _v0.concat(_v3 || Array.prototype.slice.call(_v1));
  }, "__spreadArrays", 0, function () {
    for (var _v0 = 0, _v1 = 0, _v2 = arguments.length; _v1 < _v2; _v1++) _v0 += arguments[_v1].length;
    for (var _v3 = Array(_v0), _v4 = 0, _v1 = 0; _v1 < _v2; _v1++) for (var _v5 = arguments[_v1], _v6 = 0, _v7 = _v5.length; _v6 < _v7; _v6++, _v4++) _v3[_v4] = _v5[_v6];
    return _v3;
  }, "__values", 0, _v4]);
}