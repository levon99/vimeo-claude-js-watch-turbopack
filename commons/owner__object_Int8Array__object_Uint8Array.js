{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let {
      getOwnPropertyNames: _v3,
      getOwnPropertySymbols: _v4
    } = Object,
    {
      hasOwnProperty: _v5
    } = Object.prototype;
  function _v6(_v0, _v1) {
    return function (_v0, _v1, _v2) {
      return _v0(_v0, _v1, _v2) && _v1(_v0, _v1, _v2);
    };
  }
  function _v7(_v0) {
    return function (_v0, _v1, _v2) {
      if (!_v0 || !_v1 || "object" != typeof _v0 || "object" != typeof _v1) return _v0(_v0, _v1, _v2);
      let {
          cache: _v3
        } = _v2,
        _v4 = _v3.get(_v0),
        _v5 = _v3.get(_v1);
      if (_v4 && _v5) return _v4 === _v1 && _v5 === _v0;
      _v3.set(_v0, _v1), _v3.set(_v1, _v0);
      let _v6 = _v0(_v0, _v1, _v2);
      return _v3.delete(_v0), _v3.delete(_v1), _v6;
    };
  }
  function _v8(_v0) {
    return _v3(_v0).concat(_v4(_v0));
  }
  let _v9 = Object.hasOwn || ((_v0, _v1) => _v5.call(_v0, _v1));
  function _v10(_v0, _v1) {
    return _v0 === _v1 || !_v0 && !_v1 && _v0 != _v0 && _v1 != _v1;
  }
  let {
    getOwnPropertyDescriptor: _v11,
    keys: _v12
  } = Object;
  function _v13(_v0, _v1) {
    return _v0.byteLength === _v1.byteLength && _v25(new Uint8Array(_v0), new Uint8Array(_v1));
  }
  function _v14(_v0, _v1, _v2) {
    let _v3 = _v0.length;
    if (_v1.length !== _v3) return !1;
    for (; _v3-- > 0;) if (!_v2.equals(_v0[_v3], _v1[_v3], _v3, _v3, _v0, _v1, _v2)) return !1;
    return !0;
  }
  function _v15(_v0, _v1) {
    return _v0.byteLength === _v1.byteLength && _v25(new Uint8Array(_v0.buffer, _v0.byteOffset, _v0.byteLength), new Uint8Array(_v1.buffer, _v1.byteOffset, _v1.byteLength));
  }
  function _v16(_v0, _v1) {
    return _v10(_v0.getTime(), _v1.getTime());
  }
  function _v17(_v0, _v1) {
    return _v0.name === _v1.name && _v0.message === _v1.message && _v0.cause === _v1.cause && _v0.stack === _v1.stack;
  }
  function _v18(_v0, _v1) {
    return _v0 === _v1;
  }
  function _v19(_v0, _v1, _v2) {
    let _v3,
      _v4,
      _v5 = _v0.size;
    if (_v5 !== _v1.size) return !1;
    if (!_v5) return !0;
    let _v6 = Array(_v5),
      _v7 = _v0.entries(),
      _v8 = 0;
    for (; (_v3 = _v7.next()) && !_v3.done;) {
      let _v0 = _v1.entries(),
        _v1 = !1,
        _v2 = 0;
      for (; (_v4 = _v0.next()) && !_v4.done;) {
        if (_v6[_v2]) {
          _v2++;
          continue;
        }
        let _v0 = _v3.value,
          _v1 = _v4.value;
        if (_v2.equals(_v0[0], _v1[0], _v8, _v2, _v0, _v1, _v2) && _v2.equals(_v0[1], _v1[1], _v0[0], _v1[0], _v0, _v1, _v2)) {
          _v1 = _v6[_v2] = !0;
          break;
        }
        _v2++;
      }
      if (!_v1) return !1;
      _v8++;
    }
    return !0;
  }
  function _v20(_v0, _v1, _v2) {
    let _v3 = _v12(_v0),
      _v4 = _v3.length;
    if (_v12(_v1).length !== _v4) return !1;
    for (; _v4-- > 0;) if (!_v27(_v0, _v1, _v2, _v3[_v4])) return !1;
    return !0;
  }
  function _v21(_v0, _v1, _v2) {
    let _v3,
      _v4,
      _v5,
      _v6 = _v8(_v0),
      _v7 = _v6.length;
    if (_v8(_v1).length !== _v7) return !1;
    for (; _v7-- > 0;) if (!_v27(_v0, _v1, _v2, _v3 = _v6[_v7]) || (_v4 = _v11(_v0, _v3), _v5 = _v11(_v1, _v3), (_v4 || _v5) && (!_v4 || !_v5 || _v4.configurable !== _v5.configurable || _v4.enumerable !== _v5.enumerable || _v4.writable !== _v5.writable))) return !1;
    return !0;
  }
  function _v22(_v0, _v1) {
    return _v10(_v0.valueOf(), _v1.valueOf());
  }
  function _v23(_v0, _v1) {
    return _v0.source === _v1.source && _v0.flags === _v1.flags;
  }
  function _v24(_v0, _v1, _v2) {
    let _v3,
      _v4,
      _v5 = _v0.size;
    if (_v5 !== _v1.size) return !1;
    if (!_v5) return !0;
    let _v6 = Array(_v5),
      _v7 = _v0.values();
    for (; (_v3 = _v7.next()) && !_v3.done;) {
      let _v0 = _v1.values(),
        _v1 = !1,
        _v2 = 0;
      for (; (_v4 = _v0.next()) && !_v4.done;) {
        if (!_v6[_v2] && _v2.equals(_v3.value, _v4.value, _v3.value, _v4.value, _v0, _v1, _v2)) {
          _v1 = _v6[_v2] = !0;
          break;
        }
        _v2++;
      }
      if (!_v1) return !1;
    }
    return !0;
  }
  function _v25(_v0, _v1) {
    let _v2 = _v0.byteLength;
    if (_v1.byteLength !== _v2 || _v0.byteOffset !== _v1.byteOffset) return !1;
    for (; _v2-- > 0;) if (_v0[_v2] !== _v1[_v2]) return !1;
    return !0;
  }
  function _v26(_v0, _v1) {
    return _v0.hostname === _v1.hostname && _v0.pathname === _v1.pathname && _v0.protocol === _v1.protocol && _v0.port === _v1.port && _v0.hash === _v1.hash && _v0.username === _v1.username && _v0.password === _v1.password;
  }
  function _v27(_v0, _v1, _v2, _v3) {
    return ("_owner" === _v3 || "__o" === _v3 || "__v" === _v3) && (!!_v0.$$typeof || !!_v1.$$typeof) || _v9(_v1, _v3) && _v2.equals(_v0[_v3], _v1[_v3], _v3, _v3, _v0, _v1, _v2);
  }
  let _v28 = {
      "[object Int8Array]": !0,
      "[object Uint8Array]": !0,
      "[object Uint8ClampedArray]": !0,
      "[object Int16Array]": !0,
      "[object Uint16Array]": !0,
      "[object Int32Array]": !0,
      "[object Uint32Array]": !0,
      "[object Float16Array]": !0,
      "[object Float32Array]": !0,
      "[object Float64Array]": !0,
      "[object BigInt64Array]": !0,
      "[object BigUint64Array]": !0
    },
    _v29 = Object.prototype.toString,
    _v30 = _v31();
  function _v31(_v0 = {}) {
    let {
        circular: _v1 = !1,
        createInternalComparator: _v2,
        createState: _v3,
        strict: _v4 = !1
      } = _v0,
      _v5 = function ({
        areArrayBuffersEqual: _v0,
        areArraysEqual: _v1,
        areDataViewsEqual: _v2,
        areDatesEqual: _v3,
        areErrorsEqual: _v4,
        areFunctionsEqual: _v5,
        areMapsEqual: _v6,
        areNumbersEqual: _v7,
        areObjectsEqual: _v8,
        arePrimitiveWrappersEqual: _v9,
        areRegExpsEqual: _v10,
        areSetsEqual: _v11,
        areTypedArraysEqual: _v12,
        areUrlsEqual: _v13,
        unknownTagComparators: _v14
      }) {
        return function (_v0, _v1, _v2) {
          if (_v0 === _v1) return !0;
          if (null == _v0 || null == _v1) return !1;
          let _v3 = typeof _v0;
          if (_v3 !== typeof _v1) return !1;
          if ("object" !== _v3) return "number" === _v3 ? _v7(_v0, _v1, _v2) : "function" === _v3 && _v5(_v0, _v1, _v2);
          let _v4 = _v0.constructor;
          if (_v4 !== _v1.constructor) return !1;
          if (_v4 === Object) return _v8(_v0, _v1, _v2);
          if (Array.isArray(_v0)) return _v1(_v0, _v1, _v2);
          if (_v4 === Date) return _v3(_v0, _v1, _v2);
          if (_v4 === RegExp) return _v10(_v0, _v1, _v2);
          if (_v4 === Map) return _v6(_v0, _v1, _v2);
          if (_v4 === Set) return _v11(_v0, _v1, _v2);
          let _v5 = _v29.call(_v0);
          if ("[object Date]" === _v5) return _v3(_v0, _v1, _v2);
          if ("[object RegExp]" === _v5) return _v10(_v0, _v1, _v2);
          if ("[object Map]" === _v5) return _v6(_v0, _v1, _v2);
          if ("[object Set]" === _v5) return _v11(_v0, _v1, _v2);
          if ("[object Object]" === _v5) return "function" != typeof _v0.then && "function" != typeof _v1.then && _v8(_v0, _v1, _v2);
          if ("[object URL]" === _v5) return _v13(_v0, _v1, _v2);
          if ("[object Error]" === _v5) return _v4(_v0, _v1, _v2);
          if ("[object Arguments]" === _v5) return _v8(_v0, _v1, _v2);
          if (_v28[_v5]) return _v12(_v0, _v1, _v2);
          if ("[object ArrayBuffer]" === _v5) return _v0(_v0, _v1, _v2);
          if ("[object DataView]" === _v5) return _v2(_v0, _v1, _v2);
          if ("[object Boolean]" === _v5 || "[object Number]" === _v5 || "[object String]" === _v5) return _v9(_v0, _v1, _v2);
          if (_v14) {
            let _v0 = _v14[_v5];
            if (!_v0) {
              let _v0 = null != _v0 ? _v0[Symbol.toStringTag] : void 0;
              _v0 && (_v0 = _v14[_v0]);
            }
            if (_v0) return _v0(_v0, _v1, _v2);
          }
          return !1;
        };
      }(function ({
        circular: _v0,
        createCustomConfig: _v1,
        strict: _v2
      }) {
        let _v3 = {
          areArrayBuffersEqual: _v13,
          areArraysEqual: _v2 ? _v21 : _v14,
          areDataViewsEqual: _v15,
          areDatesEqual: _v16,
          areErrorsEqual: _v17,
          areFunctionsEqual: _v18,
          areMapsEqual: _v2 ? _v6(_v19, _v21) : _v19,
          areNumbersEqual: _v10,
          areObjectsEqual: _v2 ? _v21 : _v20,
          arePrimitiveWrappersEqual: _v22,
          areRegExpsEqual: _v23,
          areSetsEqual: _v2 ? _v6(_v24, _v21) : _v24,
          areTypedArraysEqual: _v2 ? _v6(_v25, _v21) : _v25,
          areUrlsEqual: _v26,
          unknownTagComparators: void 0
        };
        if (_v1 && (_v3 = Object.assign({}, _v3, _v1(_v3))), _v0) {
          let _v0 = _v7(_v3.areArraysEqual),
            _v1 = _v7(_v3.areMapsEqual),
            _v2 = _v7(_v3.areObjectsEqual),
            _v3 = _v7(_v3.areSetsEqual);
          _v3 = Object.assign({}, _v3, {
            areArraysEqual: _v0,
            areMapsEqual: _v1,
            areObjectsEqual: _v2,
            areSetsEqual: _v3
          });
        }
        return _v3;
      }(_v0)),
      _v6 = _v2 ? _v2(_v5) : function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
        return _v5(_v0, _v1, _v6);
      };
    return function ({
      circular: _v0,
      comparator: _v1,
      createState: _v2,
      equals: _v3,
      strict: _v4
    }) {
      if (_v2) return function (_v0, _v1) {
        let {
          cache: _v2 = _v0 ? new WeakMap() : void 0,
          meta: _v3
        } = _v2();
        return _v1(_v0, _v1, {
          cache: _v2,
          equals: _v3,
          meta: _v3,
          strict: _v4
        });
      };
      if (_v0) return function (_v0, _v1) {
        return _v1(_v0, _v1, {
          cache: new WeakMap(),
          equals: _v3,
          meta: void 0,
          strict: _v4
        });
      };
      let _v5 = {
        cache: void 0,
        equals: _v3,
        meta: void 0,
        strict: _v4
      };
      return function (_v0, _v1) {
        return _v1(_v0, _v1, _v5);
      };
    }({
      circular: _v1,
      comparator: _v5,
      createState: _v3,
      equals: _v6,
      strict: _v4
    });
  }
  function _v32(_v0) {
    var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      _v2 = -1;
    requestAnimationFrame(function _v0(_v1) {
      if (_v2 < 0 && (_v2 = _v1), _v1 - _v2 > _v1) _v0(_v1), _v2 = -1;else {
        var _v2;
        _v2 = _v0, "u" > typeof requestAnimationFrame && requestAnimationFrame(_v2);
      }
    });
  }
  function _v33(_v0) {
    return (_v33 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v34(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  function _v35(_v0) {
    return (_v35 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v36(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v37(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v36(Object(_v2), !0).forEach(function (_v0) {
        _v38(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v36(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v38(_v0, _v1, _v2) {
    var _v3;
    return (_v3 = function (_v0, _v1) {
      if ("object" !== _v35(_v0) || null === _v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" !== _v35(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v1, "string"), (_v1 = "symbol" === _v35(_v3) ? _v3 : String(_v3)) in _v0) ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  _v31({
    strict: !0
  }), _v31({
    circular: !0
  }), _v31({
    circular: !0,
    strict: !0
  }), _v31({
    createInternalComparator: () => _v10
  }), _v31({
    strict: !0,
    createInternalComparator: () => _v10
  }), _v31({
    circular: !0,
    createInternalComparator: () => _v10
  }), _v31({
    circular: !0,
    createInternalComparator: () => _v10,
    strict: !0
  }), _v0.i(0);
  var _v39 = function (_v0) {
      return _v0;
    },
    _v40 = function (_v0, _v1) {
      return Object.keys(_v1).reduce(function (_v0, _v1) {
        return _v37(_v37({}, _v0), {}, _v38({}, _v1, _v0(_v1, _v1[_v1])));
      }, {});
    },
    _v41 = function (_v0, _v1, _v2) {
      return _v0.map(function (_v0) {
        return "".concat(_v0.replace(/([A-Z])/g, function (_v0) {
          return "-".concat(_v0.toLowerCase());
        }), " ").concat(_v1, "ms ").concat(_v2);
      }).join(",");
    },
    _v42 = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {};
  function _v43(_v0, _v1) {
    if (_v0) {
      if ("string" == typeof _v0) return _v44(_v0, _v1);
      var _v2 = Object.prototype.toString.call(_v0).slice(8, -1);
      if ("Object" === _v2 && _v0.constructor && (_v2 = _v0.constructor.name), "Map" === _v2 || "Set" === _v2) return Array.from(_v0);
      if ("Arguments" === _v2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v2)) return _v44(_v0, _v1);
    }
  }
  function _v44(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  var _v45 = function (_v0, _v1) {
      return [0, 3 * _v0, 3 * _v1 - 6 * _v0, 3 * _v0 - 3 * _v1 + 1];
    },
    _v46 = function (_v0, _v1) {
      return _v0.map(function (_v0, _v1) {
        return _v0 * Math.pow(_v1, _v1);
      }).reduce(function (_v0, _v1) {
        return _v0 + _v1;
      });
    },
    _v47 = function (_v0, _v1) {
      return function (_v0) {
        return _v46(_v45(_v0, _v1), _v0);
      };
    },
    _v48 = function () {
      for (var _v0, _v1, _v2 = arguments.length, _v3 = Array(_v2), _v4 = 0; _v4 < _v2; _v4++) _v3[_v4] = arguments[_v4];
      var _v5 = _v3[0],
        _v6 = _v3[1],
        _v7 = _v3[2],
        _v8 = _v3[3];
      if (1 === _v3.length) switch (_v3[0]) {
        case "linear":
          _v5 = 0, _v6 = 0, _v7 = 1, _v8 = 1;
          break;
        case "ease":
          _v5 = .25, _v6 = .1, _v7 = .25, _v8 = 1;
          break;
        case "ease-in":
          _v5 = .42, _v6 = 0, _v7 = 1, _v8 = 1;
          break;
        case "ease-out":
          _v5 = .42, _v6 = 0, _v7 = .58, _v8 = 1;
          break;
        case "ease-in-out":
          _v5 = 0, _v6 = 0, _v7 = .58, _v8 = 1;
          break;
        default:
          var _v9 = _v3[0].split("(");
          if ("cubic-bezier" === _v9[0] && 4 === _v9[1].split(")")[0].split(",").length) {
            var _v10,
              _v11 = function (_v0) {
                if (Array.isArray(_v0)) return _v0;
              }(_v10 = _v9[1].split(")")[0].split(",").map(function (_v0) {
                return parseFloat(_v0);
              })) || function (_v0) {
                var _v1 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
                if (null != _v1) {
                  var _v2,
                    _v3,
                    _v4,
                    _v5,
                    _v6 = [],
                    _v7 = !0,
                    _v8 = !1;
                  try {
                    _v4 = (_v1 = _v1.call(_v0)).next, !1;
                    for (; !(_v7 = (_v2 = _v4.call(_v1)).done) && (_v6.push(_v2.value), 4 !== _v6.length); _v7 = !0);
                  } catch (_v0) {
                    _v8 = !0, _v3 = _v0;
                  } finally {
                    try {
                      if (!_v7 && null != _v1.return && (_v5 = _v1.return(), Object(_v5) !== _v5)) return;
                    } finally {
                      if (_v8) throw _v3;
                    }
                  }
                  return _v6;
                }
              }(_v10) || _v43(_v10, 4) || function () {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            _v5 = _v11[0], _v6 = _v11[1], _v7 = _v11[2], _v8 = _v11[3];
          } else _v42(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", _v3);
      }
      _v42([_v5, _v7, _v6, _v8].every(function (_v0) {
        return "number" == typeof _v0 && _v0 >= 0 && _v0 <= 1;
      }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", _v3);
      var _v12 = _v47(_v5, _v7),
        _v13 = _v47(_v6, _v8),
        _v14 = (_v0 = _v5, _v1 = _v7, function (_v0) {
          var _v1;
          return _v46([].concat(function (_v0) {
            if (Array.isArray(_v0)) return _v44(_v0);
          }(_v1 = _v45(_v0, _v1).map(function (_v0, _v1) {
            return _v0 * _v1;
          }).slice(1)) || function (_v0) {
            if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
          }(_v1) || _v43(_v1) || function () {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }(), [0]), _v0);
        }),
        _v15 = function (_v0) {
          for (var _v1 = _v0 > 1 ? 1 : _v0, _v2 = _v1, _v3 = 0; _v3 < 8; ++_v3) {
            var _v4,
              _v5 = _v12(_v2) - _v1,
              _v6 = _v14(_v2);
            if (1e-4 > Math.abs(_v5 - _v1) || _v6 < 1e-4) break;
            _v2 = (_v4 = _v2 - _v5 / _v6) > 1 ? 1 : _v4 < 0 ? 0 : _v4;
          }
          return _v13(_v2);
        };
      return _v15.isStepper = !1, _v15;
    },
    _v49 = function () {
      var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        _v1 = _v0.stiff,
        _v2 = void 0 === _v1 ? 100 : _v1,
        _v3 = _v0.damping,
        _v4 = void 0 === _v3 ? 8 : _v3,
        _v5 = _v0.dt,
        _v6 = void 0 === _v5 ? 17 : _v5,
        _v7 = function (_v0, _v1, _v2) {
          var _v3 = _v2 + (-(_v0 - _v1) * _v2 - _v2 * _v4) * _v6 / 0,
            _v4 = _v2 * _v6 / 0 + _v0;
          return 1e-4 > Math.abs(_v4 - _v1) && 1e-4 > Math.abs(_v3) ? [_v1, 0] : [_v4, _v3];
        };
      return _v7.isStepper = !0, _v7.dt = _v6, _v7;
    },
    _v50 = function () {
      for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
      var _v3 = _v1[0];
      if ("string" == typeof _v3) switch (_v3) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return _v48(_v3);
        case "spring":
          return _v49();
        default:
          if ("cubic-bezier" === _v3.split("(")[0]) return _v48(_v3);
          _v42(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", _v1);
      }
      return "function" == typeof _v3 ? _v3 : (_v42(!1, "[configEasing]: first argument type should be function or string, instead received %s", _v1), null);
    };
  function _v51(_v0) {
    return (_v51 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v52(_v0) {
    return function (_v0) {
      if (Array.isArray(_v0)) return _v57(_v0);
    }(_v0) || function (_v0) {
      if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
    }(_v0) || _v56(_v0) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _v53(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v54(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v53(Object(_v2), !0).forEach(function (_v0) {
        _v55(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v53(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v55(_v0, _v1, _v2) {
    var _v3;
    return (_v3 = function (_v0, _v1) {
      if ("object" !== _v51(_v0) || null === _v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" !== _v51(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v1, "string"), (_v1 = "symbol" === _v51(_v3) ? _v3 : String(_v3)) in _v0) ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v56(_v0, _v1) {
    if (_v0) {
      if ("string" == typeof _v0) return _v57(_v0, _v1);
      var _v2 = Object.prototype.toString.call(_v0).slice(8, -1);
      if ("Object" === _v2 && _v0.constructor && (_v2 = _v0.constructor.name), "Map" === _v2 || "Set" === _v2) return Array.from(_v0);
      if ("Arguments" === _v2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v2)) return _v57(_v0, _v1);
    }
  }
  function _v57(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  var _v58 = function (_v0, _v1, _v2) {
      return _v0 + (_v1 - _v0) * _v2;
    },
    _v59 = function (_v0) {
      return _v0.from !== _v0.to;
    },
    _v60 = function _v0(_v1, _v2, _v3) {
      var _v4 = _v40(function (_v0, _v1) {
        if (_v59(_v1)) {
          var _v2,
            _v3 = function (_v0) {
              if (Array.isArray(_v0)) return _v0;
            }(_v2 = _v1(_v1.from, _v1.to, _v1.velocity)) || function (_v0) {
              var _v1 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
              if (null != _v1) {
                var _v2,
                  _v3,
                  _v4,
                  _v5,
                  _v6 = [],
                  _v7 = !0,
                  _v8 = !1;
                try {
                  _v4 = (_v1 = _v1.call(_v0)).next, !1;
                  for (; !(_v7 = (_v2 = _v4.call(_v1)).done) && (_v6.push(_v2.value), 2 !== _v6.length); _v7 = !0);
                } catch (_v0) {
                  _v8 = !0, _v3 = _v0;
                } finally {
                  try {
                    if (!_v7 && null != _v1.return && (_v5 = _v1.return(), Object(_v5) !== _v5)) return;
                  } finally {
                    if (_v8) throw _v3;
                  }
                }
                return _v6;
              }
            }(_v2) || _v56(_v2, 2) || function () {
              throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }(),
            _v4 = _v3[0],
            _v5 = _v3[1];
          return _v54(_v54({}, _v1), {}, {
            from: _v4,
            velocity: _v5
          });
        }
        return _v1;
      }, _v2);
      return _v3 < 1 ? _v40(function (_v0, _v1) {
        return _v59(_v1) ? _v54(_v54({}, _v1), {}, {
          velocity: _v58(_v1.velocity, _v4[_v0].velocity, _v3),
          from: _v58(_v1.from, _v4[_v0].from, _v3)
        }) : _v1;
      }, _v2) : _v0(_v1, _v4, _v3 - 1);
    };
  let _v61 = function (_v0, _v1, _v2, _v3, _v4) {
    var _v5,
      _v6,
      _v7 = [Object.keys(_v0), Object.keys(_v1)].reduce(function (_v0, _v1) {
        return _v0.filter(function (_v0) {
          return _v1.includes(_v0);
        });
      }),
      _v8 = _v7.reduce(function (_v0, _v1) {
        return _v54(_v54({}, _v0), {}, _v55({}, _v1, [_v0[_v1], _v1[_v1]]));
      }, {}),
      _v9 = _v7.reduce(function (_v0, _v1) {
        return _v54(_v54({}, _v0), {}, _v55({}, _v1, {
          from: _v0[_v1],
          velocity: 0,
          to: _v1[_v1]
        }));
      }, {}),
      _v10 = -1,
      _v11 = function () {
        return null;
      };
    return _v11 = _v2.isStepper ? function (_v0) {
      _v5 || (_v5 = _v0);
      var _v1 = (_v0 - _v5) / _v2.dt;
      _v9 = _v60(_v2, _v9, _v1), _v4(_v54(_v54(_v54({}, _v0), _v1), _v40(function (_v0, _v1) {
        return _v1.from;
      }, _v9))), _v5 = _v0, Object.values(_v9).filter(_v59).length && (_v10 = requestAnimationFrame(_v11));
    } : function (_v0) {
      _v6 || (_v6 = _v0);
      var _v1 = (_v0 - _v6) / _v3,
        _v2 = _v40(function (_v0, _v1) {
          return _v58.apply(void 0, _v52(_v1).concat([_v2(_v1)]));
        }, _v8);
      if (_v4(_v54(_v54(_v54({}, _v0), _v1), _v2)), _v1 < 1) _v10 = requestAnimationFrame(_v11);else {
        var _v3 = _v40(function (_v0, _v1) {
          return _v58.apply(void 0, _v52(_v1).concat([_v2(1)]));
        }, _v8);
        _v4(_v54(_v54(_v54({}, _v0), _v1), _v3));
      }
    }, function () {
      return requestAnimationFrame(_v11), function () {
        cancelAnimationFrame(_v10);
      };
    };
  };
  function _v62(_v0) {
    return (_v62 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  var _v63 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
  function _v64(_v0) {
    return function (_v0) {
      if (Array.isArray(_v0)) return _v65(_v0);
    }(_v0) || function (_v0) {
      if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
    }(_v0) || function (_v0) {
      if (_v0) {
        if ("string" == typeof _v0) return _v65(_v0, void 0);
        var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
        if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
        if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v65(_v0, void 0);
      }
    }(_v0) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _v65(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  function _v66(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v67(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v66(Object(_v2), !0).forEach(function (_v0) {
        _v68(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v66(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v68(_v0, _v1, _v2) {
    return (_v1 = _v69(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v69(_v0) {
    var _v1 = function (_v0, _v1) {
      if ("object" !== _v62(_v0) || null === _v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" !== _v62(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v0, "string");
    return "symbol" === _v62(_v1) ? _v1 : String(_v1);
  }
  function _v70(_v0, _v1) {
    return (_v70 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v71(_v0, _v1) {
    if (_v1 && ("object" === _v62(_v1) || "function" == typeof _v1)) return _v1;
    if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
    return _v72(_v0);
  }
  function _v72(_v0) {
    if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _v0;
  }
  function _v73(_v0) {
    return (_v73 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  var _v74 = function (_v0) {
    if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
    _v4.prototype = Object.create(_v0 && _v0.prototype, {
      constructor: {
        value: _v4,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(_v4, "prototype", {
      writable: !1
    }), _v0 && _v70(_v4, _v0);
    var _v1,
      _v2,
      _v3 = (_v1 = function () {
        if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (_v0) {
          return !1;
        }
      }(), function () {
        var _v0,
          _v1 = _v73(_v4);
        return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v73(this).constructor) : _v1.apply(this, arguments), _v71(this, _v0);
      });
    function _v4(_v0, _v1) {
      if (!(this instanceof _v4)) throw TypeError("Cannot call a class as a function");
      var _v2 = _v3.call(this, _v0, _v1),
        _v3 = _v2.props,
        _v4 = _v3.isActive,
        _v5 = _v3.attributeName,
        _v6 = _v3.from,
        _v7 = _v3.to,
        _v8 = _v3.steps,
        _v9 = _v3.children,
        _v10 = _v3.duration;
      if (_v2.handleStyleChange = _v2.handleStyleChange.bind(_v72(_v2)), _v2.changeStyle = _v2.changeStyle.bind(_v72(_v2)), !_v4 || _v10 <= 0) return _v2.state = {
        style: {}
      }, "function" == typeof _v9 && (_v2.state = {
        style: _v7
      }), _v71(_v2);
      if (_v8 && _v8.length) _v2.state = {
        style: _v8[0].style
      };else if (_v6) {
        if ("function" == typeof _v9) return _v2.state = {
          style: _v6
        }, _v71(_v2);
        _v2.state = {
          style: _v5 ? _v68({}, _v5, _v6) : _v6
        };
      } else _v2.state = {
        style: {}
      };
      return _v2;
    }
    return _v2 = [{
      key: "componentDidMount",
      value: function () {
        var _v0 = this.props,
          _v1 = _v0.isActive,
          _v2 = _v0.canBegin;
        this.mounted = !0, _v1 && _v2 && this.runAnimation(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function (_v0) {
        var _v1 = this.props,
          _v2 = _v1.isActive,
          _v3 = _v1.canBegin,
          _v4 = _v1.attributeName,
          _v5 = _v1.shouldReAnimate,
          _v6 = _v1.to,
          _v7 = _v1.from,
          _v8 = this.state.style;
        if (_v3) {
          if (!_v2) {
            var _v9 = {
              style: _v4 ? _v68({}, _v4, _v6) : _v6
            };
            this.state && _v8 && (_v4 && _v8[_v4] !== _v6 || !_v4 && _v8 !== _v6) && this.setState(_v9);
            return;
          }
          if (!_v30(_v0.to, _v6) || !_v0.canBegin || !_v0.isActive) {
            var _v10 = !_v0.canBegin || !_v0.isActive;
            this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
            var _v11 = _v10 || _v5 ? _v7 : _v0.to;
            if (this.state && _v8) {
              var _v12 = {
                style: _v4 ? _v68({}, _v4, _v11) : _v11
              };
              (_v4 && _v8[_v4] !== _v11 || !_v4 && _v8 !== _v11) && this.setState(_v12);
            }
            this.runAnimation(_v67(_v67({}, this.props), {}, {
              from: _v11,
              begin: 0
            }));
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.mounted = !1;
        var _v0 = this.props.onAnimationEnd;
        this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), _v0 && _v0();
      }
    }, {
      key: "handleStyleChange",
      value: function (_v0) {
        this.changeStyle(_v0);
      }
    }, {
      key: "changeStyle",
      value: function (_v0) {
        this.mounted && this.setState({
          style: _v0
        });
      }
    }, {
      key: "runJSAnimation",
      value: function (_v0) {
        var _v1 = this,
          _v2 = _v0.from,
          _v3 = _v0.to,
          _v4 = _v0.duration,
          _v5 = _v0.easing,
          _v6 = _v0.begin,
          _v7 = _v0.onAnimationEnd,
          _v8 = _v0.onAnimationStart,
          _v9 = _v61(_v2, _v3, _v50(_v5), _v4, this.changeStyle);
        this.manager.start([_v8, _v6, function () {
          _v1.stopJSAnimation = _v9();
        }, _v4, _v7]);
      }
    }, {
      key: "runStepAnimation",
      value: function (_v0) {
        var _v1 = this,
          _v2 = _v0.steps,
          _v3 = _v0.begin,
          _v4 = _v0.onAnimationStart,
          _v5 = _v2[0],
          _v6 = _v5.style,
          _v7 = _v5.duration;
        return this.manager.start([_v4].concat(_v64(_v2.reduce(function (_v0, _v1, _v2) {
          if (0 === _v2) return _v0;
          var _v3 = _v1.duration,
            _v4 = _v1.easing,
            _v5 = void 0 === _v4 ? "ease" : _v4,
            _v6 = _v1.style,
            _v7 = _v1.properties,
            _v8 = _v1.onAnimationEnd,
            _v9 = _v2 > 0 ? _v2[_v2 - 1] : _v1,
            _v10 = _v7 || Object.keys(_v6);
          if ("function" == typeof _v5 || "spring" === _v5) return [].concat(_v64(_v0), [_v1.runJSAnimation.bind(_v1, {
            from: _v9.style,
            to: _v6,
            duration: _v3,
            easing: _v5
          }), _v3]);
          var _v11 = _v41(_v10, _v3, _v5),
            _v12 = _v67(_v67(_v67({}, _v9.style), _v6), {}, {
              transition: _v11
            });
          return [].concat(_v64(_v0), [_v12, _v3, _v8]).filter(_v39);
        }, [_v6, Math.max(void 0 === _v7 ? 0 : _v7, _v3)])), [_v0.onAnimationEnd]));
      }
    }, {
      key: "runAnimation",
      value: function (_v0) {
        this.manager || (this.manager = (_v1 = function () {
          return null;
        }, _v2 = !1, _v3 = function _v0(_v1) {
          if (!_v2) {
            if (Array.isArray(_v1)) {
              if (!_v1.length) return;
              var _v2 = function (_v0) {
                  if (Array.isArray(_v0)) return _v0;
                }(_v1) || function (_v0) {
                  if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
                }(_v1) || function (_v0) {
                  if (_v0) {
                    if ("string" == typeof _v0) return _v34(_v0, void 0);
                    var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
                    if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
                    if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v34(_v0, void 0);
                  }
                }(_v1) || function () {
                  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }(),
                _v3 = _v2[0],
                _v4 = _v2.slice(1);
              return "number" == typeof _v3 ? void _v32(_v0.bind(null, _v4), _v3) : (_v0(_v3), void _v32(_v0.bind(null, _v4)));
            }
            "object" === _v33(_v1) && _v1(_v1), "function" == typeof _v1 && _v1();
          }
        }, {
          stop: function () {
            _v2 = !0;
          },
          start: function (_v0) {
            _v2 = !1, _v3(_v0);
          },
          subscribe: function (_v0) {
            return _v1 = _v0, function () {
              _v1 = function () {
                return null;
              };
            };
          }
        }));
        var _v1,
          _v2,
          _v3,
          _v4 = _v0.begin,
          _v5 = _v0.duration,
          _v6 = _v0.attributeName,
          _v7 = _v0.to,
          _v8 = _v0.easing,
          _v9 = _v0.onAnimationStart,
          _v10 = _v0.onAnimationEnd,
          _v11 = _v0.steps,
          _v12 = _v0.children,
          _v13 = this.manager;
        if (this.unSubscribe = _v13.subscribe(this.handleStyleChange), "function" == typeof _v8 || "function" == typeof _v12 || "spring" === _v8) return void this.runJSAnimation(_v0);
        if (_v11.length > 1) return void this.runStepAnimation(_v0);
        var _v14 = _v6 ? _v68({}, _v6, _v7) : _v7,
          _v15 = _v41(Object.keys(_v14), _v5, _v8);
        _v13.start([_v9, _v4, _v67(_v67({}, _v14), {}, {
          transition: _v15
        }), _v5, _v10]);
      }
    }, {
      key: "render",
      value: function () {
        var _v0 = this.props,
          _v1 = _v0.children,
          _v2 = (_v0.begin, _v0.duration),
          _v3 = (_v0.attributeName, _v0.easing, _v0.isActive),
          _v4 = (_v0.steps, _v0.from, _v0.to, _v0.canBegin, _v0.onAnimationEnd, _v0.shouldReAnimate, _v0.onAnimationReStart, function (_v0, _v1) {
            if (null == _v0) return {};
            var _v2,
              _v3,
              _v4 = function (_v0, _v1) {
                if (null == _v0) return {};
                var _v2,
                  _v3,
                  _v4 = {},
                  _v5 = Object.keys(_v0);
                for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], _v1.indexOf(_v2) >= 0 || (_v4[_v2] = _v0[_v2]);
                return _v4;
              }(_v0, _v1);
            if (Object.getOwnPropertySymbols) {
              var _v5 = Object.getOwnPropertySymbols(_v0);
              for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
            }
            return _v4;
          }(_v0, _v63)),
          _v5 = _v1.Children.count(_v1),
          _v6 = this.state.style;
        if ("function" == typeof _v1) return _v1(_v6);
        if (!_v3 || 0 === _v5 || _v2 <= 0) return _v1;
        var _v7 = function (_v0) {
          var _v1 = _v0.props,
            _v2 = _v1.style,
            _v3 = _v1.className;
          return (0, _v1.cloneElement)(_v0, _v67(_v67({}, _v4), {}, {
            style: _v67(_v67({}, void 0 === _v2 ? {} : _v2), _v6),
            className: _v3
          }));
        };
        return 1 === _v5 ? _v7(_v1.Children.only(_v1)) : _v1.default.createElement("div", null, _v1.Children.map(_v1, function (_v0) {
          return _v7(_v0);
        }));
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v69(_v3.key), _v3);
      }
    }(_v4.prototype, _v2), Object.defineProperty(_v4, "prototype", {
      writable: !1
    }), _v4;
  }(_v1.PureComponent);
  _v74.displayName = "Animate", _v74.defaultProps = {
    begin: 0,
    duration: 0,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function () {},
    onAnimationStart: function () {}
  }, _v74.propTypes = {
    from: _v2.default.oneOfType([_v2.default.object, _v2.default.string]),
    to: _v2.default.oneOfType([_v2.default.object, _v2.default.string]),
    attributeName: _v2.default.string,
    duration: _v2.default.number,
    begin: _v2.default.number,
    easing: _v2.default.oneOfType([_v2.default.string, _v2.default.func]),
    steps: _v2.default.arrayOf(_v2.default.shape({
      duration: _v2.default.number.isRequired,
      style: _v2.default.object.isRequired,
      easing: _v2.default.oneOfType([_v2.default.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), _v2.default.func]),
      properties: _v2.default.arrayOf("string"),
      onAnimationEnd: _v2.default.func
    })),
    children: _v2.default.oneOfType([_v2.default.node, _v2.default.func]),
    isActive: _v2.default.bool,
    canBegin: _v2.default.bool,
    onAnimationEnd: _v2.default.func,
    shouldReAnimate: _v2.default.bool,
    onAnimationStart: _v2.default.func,
    onAnimationReStart: _v2.default.func
  };
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  function _v80(_v0, _v1) {
    var _v2 = Object.create(null);
    return _v0 && _v1.Children.map(_v0, function (_v0) {
      return _v0;
    }).forEach(function (_v0) {
      _v2[_v0.key] = _v1 && (0, _v1.isValidElement)(_v0) ? _v1(_v0) : _v0;
    }), _v2;
  }
  function _v81(_v0, _v1, _v2) {
    return null != _v2[_v1] ? _v2[_v1] : _v0.props[_v1];
  }
  var _v82 = Object.values || function (_v0) {
      return Object.keys(_v0).map(function (_v0) {
        return _v0[_v0];
      });
    },
    _v83 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2 = _v0.call(this, _v0, _v1) || this,
          _v3 = _v2.handleExited.bind((0, _v77.default)(_v2));
        return _v2.state = {
          contextValue: {
            isMounting: !0
          },
          handleExited: _v3,
          firstRender: !0
        }, _v2;
      }
      (0, _v78.default)(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.componentDidMount = function () {
        this.mounted = !0, this.setState({
          contextValue: {
            isMounting: !1
          }
        });
      }, _v2.componentWillUnmount = function () {
        this.mounted = !1;
      }, _v1.getDerivedStateFromProps = function (_v0, _v1) {
        var _v2,
          _v3,
          _v4 = _v1.children,
          _v5 = _v1.handleExited;
        return {
          children: _v1.firstRender ? _v80(_v0.children, function (_v0) {
            return (0, _v1.cloneElement)(_v0, {
              onExited: _v5.bind(null, _v0),
              in: !0,
              appear: _v81(_v0, "appear", _v0),
              enter: _v81(_v0, "enter", _v0),
              exit: _v81(_v0, "exit", _v0)
            });
          }) : (Object.keys(_v3 = function (_v0, _v1) {
            function _v2(_v0) {
              return _v0 in _v1 ? _v1[_v0] : _v0[_v0];
            }
            _v0 = _v0 || {}, _v1 = _v1 || {};
            var _v3,
              _v4 = Object.create(null),
              _v5 = [];
            for (var _v6 in _v0) _v6 in _v1 ? _v5.length && (_v4[_v6] = _v5, _v5 = []) : _v5.push(_v6);
            var _v7 = {};
            for (var _v8 in _v1) {
              if (_v4[_v8]) for (_v3 = 0; _v3 < _v4[_v8].length; _v3++) {
                var _v9 = _v4[_v8][_v3];
                _v7[_v4[_v8][_v3]] = _v2(_v9);
              }
              _v7[_v8] = _v2(_v8);
            }
            for (_v3 = 0; _v3 < _v5.length; _v3++) _v7[_v5[_v3]] = _v2(_v5[_v3]);
            return _v7;
          }(_v4, _v2 = _v80(_v0.children))).forEach(function (_v0) {
            var _v1 = _v3[_v0];
            if ((0, _v1.isValidElement)(_v1)) {
              var _v2 = (_v0 in _v4),
                _v3 = (_v0 in _v2),
                _v4 = _v4[_v0],
                _v5 = (0, _v1.isValidElement)(_v4) && !_v4.props.in;
              _v3 && (!_v2 || _v5) ? _v3[_v0] = (0, _v1.cloneElement)(_v1, {
                onExited: _v5.bind(null, _v1),
                in: !0,
                exit: _v81(_v1, "exit", _v0),
                enter: _v81(_v1, "enter", _v0)
              }) : _v3 || !_v2 || _v5 ? _v3 && _v2 && (0, _v1.isValidElement)(_v4) && (_v3[_v0] = (0, _v1.cloneElement)(_v1, {
                onExited: _v5.bind(null, _v1),
                in: _v4.props.in,
                exit: _v81(_v1, "exit", _v0),
                enter: _v81(_v1, "enter", _v0)
              })) : _v3[_v0] = (0, _v1.cloneElement)(_v1, {
                in: !1
              });
            }
          }), _v3),
          firstRender: !1
        };
      }, _v2.handleExited = function (_v0, _v1) {
        var _v2 = _v80(this.props.children);
        _v0.key in _v2 || (_v0.props.onExited && _v0.props.onExited(_v1), this.mounted && this.setState(function (_v0) {
          var _v1 = (0, _v76.default)({}, _v0.children);
          return delete _v1[_v0.key], {
            children: _v1
          };
        }));
      }, _v2.render = function () {
        var _v0 = this.props,
          _v1 = _v0.component,
          _v2 = _v0.childFactory,
          _v3 = (0, _v75.default)(_v0, ["component", "childFactory"]),
          _v4 = this.state.contextValue,
          _v5 = _v82(this.state.children).map(_v2);
        return (delete _v3.appear, delete _v3.enter, delete _v3.exit, null === _v1) ? _v1.default.createElement(_v79.default.Provider, {
          value: _v4
        }, _v5) : _v1.default.createElement(_v79.default.Provider, {
          value: _v4
        }, _v1.default.createElement(_v1, _v3, _v5));
      }, _v1;
    }(_v1.default.Component);
  _v83.propTypes = {}, _v83.defaultProps = {
    component: "div",
    childFactory: function (_v0) {
      return _v0;
    }
  };
  var _v84 = _v0.i(0),
    _v85 = ["children", "appearOptions", "enterOptions", "leaveOptions"];
  function _v86(_v0) {
    return (_v86 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v87() {
    return (_v87 = Object.assign.bind()).apply(this, arguments);
  }
  function _v88(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v89(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v88(Object(_v2), !0).forEach(function (_v0) {
        _v93(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v88(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v90(_v0, _v1) {
    return (_v90 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v91(_v0) {
    if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _v0;
  }
  function _v92(_v0) {
    return (_v92 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v93(_v0, _v1, _v2) {
    return (_v1 = _v94(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v94(_v0) {
    var _v1 = function (_v0, _v1) {
      if ("object" !== _v86(_v0) || null === _v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" !== _v86(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v0, "string");
    return "symbol" === _v86(_v1) ? _v1 : String(_v1);
  }
  var _v95 = function () {
      var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        _v1 = _v0.steps,
        _v2 = _v0.duration;
      return _v1 && _v1.length ? _v1.reduce(function (_v0, _v1) {
        return _v0 + (Number.isFinite(_v1.duration) && _v1.duration > 0 ? _v1.duration : 0);
      }, 0) : Number.isFinite(_v2) ? _v2 : 0;
    },
    _v96 = function (_v0) {
      if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
      _v4.prototype = Object.create(_v0 && _v0.prototype, {
        constructor: {
          value: _v4,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(_v4, "prototype", {
        writable: !1
      }), _v0 && _v90(_v4, _v0);
      var _v1,
        _v2,
        _v3 = (_v1 = function () {
          if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (_v0) {
            return !1;
          }
        }(), function () {
          var _v0,
            _v1 = _v92(_v4);
          return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v92(this).constructor) : _v1.apply(this, arguments), function (_v0, _v1) {
            if (_v1 && ("object" === _v86(_v1) || "function" == typeof _v1)) return _v1;
            if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
            return _v91(_v0);
          }(this, _v0);
        });
      function _v4() {
        var _v0;
        if (!(this instanceof _v4)) throw TypeError("Cannot call a class as a function");
        return _v93(_v91(_v0 = _v3.call(this)), "handleEnter", function (_v0, _v1) {
          var _v2 = _v0.props,
            _v3 = _v2.appearOptions,
            _v4 = _v2.enterOptions;
          _v0.handleStyleActive(_v1 ? _v3 : _v4);
        }), _v93(_v91(_v0), "handleExit", function () {
          var _v0 = _v0.props.leaveOptions;
          _v0.handleStyleActive(_v0);
        }), _v0.state = {
          isActive: !1
        }, _v0;
      }
      return _v2 = [{
        key: "handleStyleActive",
        value: function (_v0) {
          if (_v0) {
            var _v1 = _v0.onAnimationEnd ? function () {
              _v0.onAnimationEnd();
            } : null;
            this.setState(_v89(_v89({}, _v0), {}, {
              onAnimationEnd: _v1,
              isActive: !0
            }));
          }
        }
      }, {
        key: "parseTimeout",
        value: function () {
          var _v0 = this.props,
            _v1 = _v0.appearOptions,
            _v2 = _v0.enterOptions,
            _v3 = _v0.leaveOptions;
          return _v95(_v1) + _v95(_v2) + _v95(_v3);
        }
      }, {
        key: "render",
        value: function () {
          var _v0 = this,
            _v1 = this.props,
            _v2 = _v1.children,
            _v3 = (_v1.appearOptions, _v1.enterOptions, _v1.leaveOptions, function (_v0, _v1) {
              if (null == _v0) return {};
              var _v2,
                _v3,
                _v4 = function (_v0, _v1) {
                  if (null == _v0) return {};
                  var _v2,
                    _v3,
                    _v4 = {},
                    _v5 = Object.keys(_v0);
                  for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], _v1.indexOf(_v2) >= 0 || (_v4[_v2] = _v0[_v2]);
                  return _v4;
                }(_v0, _v1);
              if (Object.getOwnPropertySymbols) {
                var _v5 = Object.getOwnPropertySymbols(_v0);
                for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
              }
              return _v4;
            }(_v1, _v85));
          return _v1.default.createElement(_v84.Transition, _v87({}, _v3, {
            onEnter: this.handleEnter,
            onExit: this.handleExit,
            timeout: this.parseTimeout()
          }), function () {
            return _v1.default.createElement(_v74, _v0.state, _v1.Children.only(_v2));
          });
        }
      }], function (_v0, _v1) {
        for (var _v2 = 0; _v2 < _v1.length; _v2++) {
          var _v3 = _v1[_v2];
          _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v94(_v3.key), _v3);
        }
      }(_v4.prototype, _v2), Object.defineProperty(_v4, "prototype", {
        writable: !1
      }), _v4;
    }(_v1.Component);
  function _v97(_v0) {
    var _v1 = _v0.component,
      _v2 = _v0.children,
      _v3 = _v0.appear,
      _v4 = _v0.enter,
      _v5 = _v0.leave;
    return _v1.default.createElement(_v83, {
      component: _v1
    }, _v1.Children.map(_v2, function (_v0, _v1) {
      return _v1.default.createElement(_v96, {
        appearOptions: _v3,
        enterOptions: _v4,
        leaveOptions: _v5,
        key: "child-".concat(_v1)
      }, _v0);
    }));
  }
  _v96.propTypes = {
    appearOptions: _v2.default.object,
    enterOptions: _v2.default.object,
    leaveOptions: _v2.default.object,
    children: _v2.default.element
  }, _v97.propTypes = {
    appear: _v2.default.object,
    enter: _v2.default.object,
    leave: _v2.default.object,
    children: _v2.default.oneOfType([_v2.default.array, _v2.default.element]),
    component: _v2.default.any
  }, _v97.defaultProps = {
    component: "span"
  }, _v0.s(["default", 0, _v74], 0);
}