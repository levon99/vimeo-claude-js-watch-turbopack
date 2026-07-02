{
  "use strict";

  _v0.i(0);
  var _v1 = _v0.i(0);
  function _v2(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v3(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v2(Object(_v2), !0).forEach(function (_v0) {
        (0, _v1.default)(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v2(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v4(_v0) {
    return "Minified Redux error #" + _v0 + "; visit https://redux.js.org/Errors?code=" + _v0 + " for the full message or use the non-minified dev environment for full errors. ";
  }
  var _v5 = "function" == typeof Symbol && Symbol.observable || "@@observable",
    _v6 = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
    _v7 = {
      INIT: "@@redux/INIT" + _v6(),
      REPLACE: "@@redux/REPLACE" + _v6(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + _v6();
      }
    };
  function _v8(_v0, _v1, _v2) {
    if ("function" == typeof _v1 && "function" == typeof _v2 || "function" == typeof _v2 && "function" == typeof arguments[3]) throw Error(_v4(0));
    if ("function" == typeof _v1 && void 0 === _v2 && (_v2 = _v1, _v1 = void 0), void 0 !== _v2) {
      if ("function" != typeof _v2) throw Error(_v4(1));
      return _v2(_v8)(_v0, _v1);
    }
    if ("function" != typeof _v0) throw Error(_v4(2));
    var _v3,
      _v4 = _v0,
      _v5 = _v1,
      _v6 = [],
      _v7 = _v6,
      _v8 = !1;
    function _v9() {
      _v7 === _v6 && (_v7 = _v6.slice());
    }
    function _v10() {
      if (_v8) throw Error(_v4(3));
      return _v5;
    }
    function _v11(_v0) {
      if ("function" != typeof _v0) throw Error(_v4(4));
      if (_v8) throw Error(_v4(5));
      var _v1 = !0;
      return _v9(), _v7.push(_v0), function () {
        if (_v1) {
          if (_v8) throw Error(_v4(6));
          _v1 = !1, _v9();
          var _v0 = _v7.indexOf(_v0);
          _v7.splice(_v0, 1), _v6 = null;
        }
      };
    }
    function _v12(_v0) {
      if (!function (_v0) {
        if ("object" != typeof _v0 || null === _v0) return !1;
        for (var _v1 = _v0; null !== Object.getPrototypeOf(_v1);) _v1 = Object.getPrototypeOf(_v1);
        return Object.getPrototypeOf(_v0) === _v1;
      }(_v0)) throw Error(_v4(7));
      if (void 0 === _v0.type) throw Error(_v4(8));
      if (_v8) throw Error(_v4(9));
      try {
        _v8 = !0, _v5 = _v4(_v5, _v0);
      } finally {
        _v8 = !1;
      }
      for (var _v1 = _v6 = _v7, _v2 = 0; _v2 < _v1.length; _v2++) (0, _v1[_v2])();
      return _v0;
    }
    return _v12({
      type: _v7.INIT
    }), (_v3 = {
      dispatch: _v12,
      subscribe: _v11,
      getState: _v10,
      replaceReducer: function (_v0) {
        if ("function" != typeof _v0) throw Error(_v4(10));
        _v4 = _v0, _v12({
          type: _v7.REPLACE
        });
      }
    })[_v5] = function () {
      var _v0;
      return (_v0 = {
        subscribe: function (_v0) {
          if ("object" != typeof _v0 || null === _v0) throw Error(_v4(11));
          function _v1() {
            _v0.next && _v0.next(_v10());
          }
          return _v1(), {
            unsubscribe: _v11(_v1)
          };
        }
      })[_v5] = function () {
        return this;
      }, _v0;
    }, _v3;
  }
  function _v9(_v0, _v1) {
    return function () {
      return _v1(_v0.apply(this, arguments));
    };
  }
  function _v10() {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return 0 === _v1.length ? function (_v0) {
      return _v0;
    } : 1 === _v1.length ? _v1[0] : _v1.reduce(function (_v0, _v1) {
      return function () {
        return _v0(_v1.apply(void 0, arguments));
      };
    });
  }
  _v0.s(["__DO_NOT_USE__ActionTypes", 0, _v7, "applyMiddleware", 0, function () {
    for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
    return function (_v0) {
      return function () {
        var _v0 = _v0.apply(void 0, arguments),
          _v1 = function () {
            throw Error(_v4(15));
          },
          _v2 = {
            getState: _v0.getState,
            dispatch: function () {
              return _v1.apply(void 0, arguments);
            }
          },
          _v3 = _v1.map(function (_v0) {
            return _v0(_v2);
          });
        return _v1 = _v10.apply(void 0, _v3)(_v0.dispatch), _v3(_v3({}, _v0), {}, {
          dispatch: _v1
        });
      };
    };
  }, "bindActionCreators", 0, function (_v0, _v1) {
    if ("function" == typeof _v0) return _v9(_v0, _v1);
    if ("object" != typeof _v0 || null === _v0) throw Error(_v4(16));
    var _v2 = {};
    for (var _v3 in _v0) {
      var _v4 = _v0[_v3];
      "function" == typeof _v4 && (_v2[_v3] = _v9(_v4, _v1));
    }
    return _v2;
  }, "combineReducers", 0, function (_v0) {
    for (var _v1, _v2 = Object.keys(_v0), _v3 = {}, _v4 = 0; _v4 < _v2.length; _v4++) {
      var _v5 = _v2[_v4];
      "function" == typeof _v0[_v5] && (_v3[_v5] = _v0[_v5]);
    }
    var _v6 = Object.keys(_v3);
    try {
      Object.keys(_v3).forEach(function (_v0) {
        var _v1 = _v3[_v0];
        if (void 0 === _v1(void 0, {
          type: _v7.INIT
        })) throw Error(_v4(12));
        if (void 0 === _v1(void 0, {
          type: _v7.PROBE_UNKNOWN_ACTION()
        })) throw Error(_v4(13));
      });
    } catch (_v0) {
      _v1 = _v0;
    }
    return function (_v0, _v1) {
      if (void 0 === _v0 && (_v0 = {}), _v1) throw _v1;
      for (var _v2 = !1, _v3 = {}, _v4 = 0; _v4 < _v6.length; _v4++) {
        var _v5 = _v6[_v4],
          _v6 = _v3[_v5],
          _v7 = _v0[_v5],
          _v8 = _v6(_v7, _v1);
        if (void 0 === _v8) throw _v1 && _v1.type, Error(_v4(14));
        _v3[_v5] = _v8, _v2 = _v2 || _v8 !== _v7;
      }
      return (_v2 = _v2 || _v6.length !== Object.keys(_v0).length) ? _v3 : _v0;
    };
  }, "compose", 0, _v10, "createStore", 0, _v8, "legacy_createStore", 0, _v8], 0);
}