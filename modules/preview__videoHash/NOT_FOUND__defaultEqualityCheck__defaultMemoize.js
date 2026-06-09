{
  "use strict";

  var _v1 = "NOT_FOUND",
    _v2 = function (_v0, _v1) {
      return _v0 === _v1;
    };
  function _v3(_v0, _v1) {
    var _v2,
      _v3,
      _v4 = "object" == typeof _v1 ? _v1 : {
        equalityCheck: _v1
      },
      _v5 = _v4.equalityCheck,
      _v6 = _v4.maxSize,
      _v7 = void 0 === _v6 ? 1 : _v6,
      _v8 = _v4.resultEqualityCheck,
      _v9 = (_v2 = void 0 === _v5 ? _v2 : _v5, function (_v0, _v1) {
        if (null === _v0 || null === _v1 || _v0.length !== _v1.length) return !1;
        for (var _v2 = _v0.length, _v3 = 0; _v3 < _v2; _v3++) if (!_v2(_v0[_v3], _v1[_v3])) return !1;
        return !0;
      }),
      _v10 = 1 === _v7 ? {
        get: function (_v0) {
          return _v3 && _v9(_v3.key, _v0) ? _v3.value : _v1;
        },
        put: function (_v0, _v1) {
          _v3 = {
            key: _v0,
            value: _v1
          };
        },
        getEntries: function () {
          return _v3 ? [_v3] : [];
        },
        clear: function () {
          _v3 = void 0;
        }
      } : function (_v0, _v1) {
        var _v2 = [];
        function _v3(_v0) {
          var _v1 = _v2.findIndex(function (_v0) {
            return _v1(_v0, _v0.key);
          });
          if (_v1 > -1) {
            var _v2 = _v2[_v1];
            return _v1 > 0 && (_v2.splice(_v1, 1), _v2.unshift(_v2)), _v2.value;
          }
          return _v1;
        }
        return {
          get: _v3,
          put: function (_v0, _v1) {
            _v3(_v0) === _v1 && (_v2.unshift({
              key: _v0,
              value: _v1
            }), _v2.length > _v0 && _v2.pop());
          },
          getEntries: function () {
            return _v2;
          },
          clear: function () {
            _v2 = [];
          }
        };
      }(_v7, _v9);
    function _v11() {
      var _v0 = _v10.get(arguments);
      if (_v0 === _v1) {
        if (_v0 = _v0.apply(null, arguments), _v8) {
          var _v1 = _v10.getEntries().find(function (_v0) {
            return _v8(_v0.value, _v0);
          });
          _v1 && (_v0 = _v1.value);
        }
        _v10.put(arguments, _v0);
      }
      return _v0;
    }
    return _v11.clearCache = function () {
      return _v10.clear();
    }, _v11;
  }
  _v0.s(["defaultEqualityCheck", 0, _v2, "defaultMemoize", 0, _v3], 0);
  var _v4 = function (_v0) {
    for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
    return function () {
      for (var _v0, _v1 = arguments.length, _v2 = Array(_v1), _v3 = 0; _v3 < _v1; _v3++) _v2[_v3] = arguments[_v3];
      var _v4 = 0,
        _v5 = {
          memoizeOptions: void 0
        },
        _v6 = _v2.pop();
      if ("object" == typeof _v6 && (_v5 = _v6, _v6 = _v2.pop()), "function" != typeof _v6) throw Error("createSelector expects an output function after the inputs, but received: [" + typeof _v6 + "]");
      var _v7 = _v5.memoizeOptions,
        _v8 = void 0 === _v7 ? _v2 : _v7,
        _v9 = Array.isArray(_v8) ? _v8 : [_v8],
        _v10 = function (_v0) {
          var _v1 = Array.isArray(_v0[0]) ? _v0[0] : _v0;
          if (!_v1.every(function (_v0) {
            return "function" == typeof _v0;
          })) throw Error("createSelector expects all input-selectors to be functions, but received the following types: [" + _v1.map(function (_v0) {
            return "function" == typeof _v0 ? "function " + (_v0.name || "unnamed") + "()" : typeof _v0;
          }).join(", ") + "]");
          return _v1;
        }(_v2),
        _v11 = _v0.apply(void 0, [function () {
          return _v4++, _v6.apply(null, arguments);
        }].concat(_v9)),
        _v12 = _v0(function () {
          for (var _v0 = [], _v1 = _v10.length, _v2 = 0; _v2 < _v1; _v2++) _v0.push(_v10[_v2].apply(null, arguments));
          return _v0 = _v11.apply(null, _v0);
        });
      return Object.assign(_v12, {
        resultFunc: _v6,
        memoizedResultFunc: _v11,
        dependencies: _v10,
        lastResult: function () {
          return _v0;
        },
        recomputations: function () {
          return _v4;
        },
        resetRecomputations: function () {
          return _v4 = 0;
        }
      }), _v12;
    };
  }(_v3);
  _v0.s(["createSelector", 0, _v4], 0);
}