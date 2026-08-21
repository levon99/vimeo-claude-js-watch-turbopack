{
  "use strict";

  var _v3 = _v0.i(0),
    _v4 = Symbol.for("react.transitional.element"),
    _v5 = Symbol.for("react.portal"),
    _v6 = Symbol.for("react.fragment"),
    _v7 = Symbol.for("react.strict_mode"),
    _v8 = Symbol.for("react.profiler"),
    _v9 = Symbol.for("react.consumer"),
    _v10 = Symbol.for("react.context"),
    _v11 = Symbol.for("react.forward_ref"),
    _v12 = Symbol.for("react.suspense"),
    _v13 = Symbol.for("react.memo"),
    _v14 = Symbol.for("react.lazy"),
    _v15 = Symbol.for("react.activity"),
    _v16 = Symbol.iterator,
    _v17 = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    _v18 = Object.assign,
    _v19 = {};
  function _v20(_v0, _v1, _v2) {
    this.props = _v0, this.context = _v1, this.refs = _v19, this.updater = _v2 || _v17;
  }
  function _v21() {}
  function _v22(_v0, _v1, _v2) {
    this.props = _v0, this.context = _v1, this.refs = _v19, this.updater = _v2 || _v17;
  }
  _v20.prototype.isReactComponent = {}, _v20.prototype.setState = function (_v0, _v1) {
    if ("object" != typeof _v0 && "function" != typeof _v0 && null != _v0) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _v0, _v1, "setState");
  }, _v20.prototype.forceUpdate = function (_v0) {
    this.updater.enqueueForceUpdate(this, _v0, "forceUpdate");
  }, _v21.prototype = _v20.prototype;
  var _v23 = _v22.prototype = new _v21();
  _v23.constructor = _v22, _v18(_v23, _v20.prototype), _v23.isPureReactComponent = !0;
  var _v24 = Array.isArray;
  function _v25() {}
  var _v26 = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    _v27 = Object.prototype.hasOwnProperty;
  function _v28(_v0, _v1, _v2) {
    var _v3 = _v2.ref;
    return {
      $$typeof: _v4,
      type: _v0,
      key: _v1,
      ref: void 0 !== _v3 ? _v3 : null,
      props: _v2
    };
  }
  function _v29(_v0) {
    return "object" == typeof _v0 && null !== _v0 && _v0.$$typeof === _v4;
  }
  var _v30 = /\/+/g;
  function _v31(_v0, _v1) {
    var _v2, _v3;
    return "object" == typeof _v0 && null !== _v0 && null != _v0.key ? (_v2 = "" + _v0.key, _v3 = {
      "=": "=0",
      ":": "=2"
    }, "$" + _v2.replace(/[=:]/g, function (_v0) {
      return _v3[_v0];
    })) : _v1.toString(36);
  }
  function _v32(_v0, _v1, _v2) {
    if (null == _v0) return _v0;
    var _v3 = [],
      _v4 = 0;
    return !function _v0(_v1, _v2, _v3, _v4, _v5) {
      var _v6,
        _v7,
        _v8,
        _v9 = typeof _v1;
      ("undefined" === _v9 || "boolean" === _v9) && (_v1 = null);
      var _v10 = !1;
      if (null === _v1) _v10 = !0;else switch (_v9) {
        case "bigint":
        case "string":
        case "number":
          _v10 = !0;
          break;
        case "object":
          switch (_v1.$$typeof) {
            case _v4:
            case _v5:
              _v10 = !0;
              break;
            case _v14:
              return _v0((_v10 = _v1._init)(_v1._payload), _v2, _v3, _v4, _v5);
          }
      }
      if (_v10) return _v5 = _v5(_v1), _v10 = "" === _v4 ? "." + _v31(_v1, 0) : _v4, _v24(_v5) ? (_v3 = "", null != _v10 && (_v3 = _v10.replace(_v30, "$&/") + "/"), _v0(_v5, _v2, _v3, "", function (_v0) {
        return _v0;
      })) : null != _v5 && (_v29(_v5) && (_v6 = _v5, _v7 = _v3 + (null == _v5.key || _v1 && _v1.key === _v5.key ? "" : ("" + _v5.key).replace(_v30, "$&/") + "/") + _v10, _v5 = _v28(_v6.type, _v7, _v6.props)), _v2.push(_v5)), 1;
      _v10 = 0;
      var _v11 = "" === _v4 ? "." : _v4 + ":";
      if (_v24(_v1)) for (var _v12 = 0; _v12 < _v1.length; _v12++) _v9 = _v11 + _v31(_v4 = _v1[_v12], _v12), _v10 += _v0(_v4, _v2, _v3, _v9, _v5);else if ("function" == typeof (_v12 = null === (_v8 = _v1) || "object" != typeof _v8 ? null : "function" == typeof (_v8 = _v16 && _v8[_v16] || _v8["@@iterator"]) ? _v8 : null)) for (_v1 = _v12.call(_v1), _v12 = 0; !(_v4 = _v1.next()).done;) _v9 = _v11 + _v31(_v4 = _v4.value, _v12++), _v10 += _v0(_v4, _v2, _v3, _v9, _v5);else if ("object" === _v9) {
        if ("function" == typeof _v1.then) return _v0(function (_v0) {
          switch (_v0.status) {
            case "fulfilled":
              return _v0.value;
            case "rejected":
              throw _v0.reason;
            default:
              switch ("string" == typeof _v0.status ? _v0.then(_v25, _v25) : (_v0.status = "pending", _v0.then(function (_v0) {
                "pending" === _v0.status && (_v0.status = "fulfilled", _v0.value = _v0);
              }, function (_v0) {
                "pending" === _v0.status && (_v0.status = "rejected", _v0.reason = _v0);
              })), _v0.status) {
                case "fulfilled":
                  return _v0.value;
                case "rejected":
                  throw _v0.reason;
              }
          }
          throw _v0;
        }(_v1), _v2, _v3, _v4, _v5);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (_v2 = String(_v1)) ? "object with keys {" + Object.keys(_v1).join(", ") + "}" : _v2) + "). If you meant to render a collection of children, use an array instead.");
      }
      return _v10;
    }(_v0, _v3, "", "", function (_v0) {
      return _v1.call(_v2, _v0, _v4++);
    }), _v3;
  }
  function _v33(_v0) {
    if (-1 === _v0._status) {
      var _v1 = _v0._result;
      (_v1 = _v1()).then(function (_v0) {
        (0 === _v0._status || -1 === _v0._status) && (_v0._status = 1, _v0._result = _v0);
      }, function (_v0) {
        (0 === _v0._status || -1 === _v0._status) && (_v0._status = 2, _v0._result = _v0);
      }), -1 === _v0._status && (_v0._status = 0, _v0._result = _v1);
    }
    if (1 === _v0._status) return _v0._result.default;
    throw _v0._result;
  }
  var _v34 = "function" == typeof reportError ? reportError : function (_v0) {
    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
      var _v1 = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: "object" == typeof _v0 && null !== _v0 && "string" == typeof _v0.message ? String(_v0.message) : String(_v0),
        error: _v0
      });
      if (!window.dispatchEvent(_v1)) return;
    } else if ("object" == typeof _v3.default && "function" == typeof _v3.default.emit) return void _v3.default.emit("uncaughtException", _v0);
    console.error(_v0);
  };
  _v2.Activity = _v15, _v2.Children = {
    map: _v32,
    forEach: function (_v0, _v1, _v2) {
      _v32(_v0, function () {
        _v1.apply(this, arguments);
      }, _v2);
    },
    count: function (_v0) {
      var _v1 = 0;
      return _v32(_v0, function () {
        _v1++;
      }), _v1;
    },
    toArray: function (_v0) {
      return _v32(_v0, function (_v0) {
        return _v0;
      }) || [];
    },
    only: function (_v0) {
      if (!_v29(_v0)) throw Error("React.Children.only expected to receive a single React element child.");
      return _v0;
    }
  }, _v2.Component = _v20, _v2.Fragment = _v6, _v2.Profiler = _v8, _v2.PureComponent = _v22, _v2.StrictMode = _v7, _v2.Suspense = _v12, _v2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _v26, _v2.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (_v0) {
      return _v26.H.useMemoCache(_v0);
    }
  }, _v2.cache = function (_v0) {
    return function () {
      return _v0.apply(null, arguments);
    };
  }, _v2.cacheSignal = function () {
    return null;
  }, _v2.cloneElement = function (_v0, _v1, _v2) {
    if (null == _v0) throw Error("The argument must be a React element, but you passed " + _v0 + ".");
    var _v3 = _v18({}, _v0.props),
      _v4 = _v0.key;
    if (null != _v1) for (_v5 in void 0 !== _v1.key && (_v4 = "" + _v1.key), _v1) _v27.call(_v1, _v5) && "key" !== _v5 && "__self" !== _v5 && "__source" !== _v5 && ("ref" !== _v5 || void 0 !== _v1.ref) && (_v3[_v5] = _v1[_v5]);
    var _v5 = arguments.length - 2;
    if (1 === _v5) _v3.children = _v2;else if (1 < _v5) {
      for (var _v6 = Array(_v5), _v7 = 0; _v7 < _v5; _v7++) _v6[_v7] = arguments[_v7 + 2];
      _v3.children = _v6;
    }
    return _v28(_v0.type, _v4, _v3);
  }, _v2.createContext = function (_v0) {
    return (_v0 = {
      $$typeof: _v10,
      _currentValue: _v0,
      _currentValue2: _v0,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }).Provider = _v0, _v0.Consumer = {
      $$typeof: _v9,
      _context: _v0
    }, _v0;
  }, _v2.createElement = function (_v0, _v1, _v2) {
    var _v3,
      _v4 = {},
      _v5 = null;
    if (null != _v1) for (_v3 in void 0 !== _v1.key && (_v5 = "" + _v1.key), _v1) _v27.call(_v1, _v3) && "key" !== _v3 && "__self" !== _v3 && "__source" !== _v3 && (_v4[_v3] = _v1[_v3]);
    var _v6 = arguments.length - 2;
    if (1 === _v6) _v4.children = _v2;else if (1 < _v6) {
      for (var _v7 = Array(_v6), _v8 = 0; _v8 < _v6; _v8++) _v7[_v8] = arguments[_v8 + 2];
      _v4.children = _v7;
    }
    if (_v0 && _v0.defaultProps) for (_v3 in _v6 = _v0.defaultProps) void 0 === _v4[_v3] && (_v4[_v3] = _v6[_v3]);
    return _v28(_v0, _v5, _v4);
  }, _v2.createRef = function () {
    return {
      current: null
    };
  }, _v2.forwardRef = function (_v0) {
    return {
      $$typeof: _v11,
      render: _v0
    };
  }, _v2.isValidElement = _v29, _v2.lazy = function (_v0) {
    return {
      $$typeof: _v14,
      _payload: {
        _status: -1,
        _result: _v0
      },
      _init: _v33
    };
  }, _v2.memo = function (_v0, _v1) {
    return {
      $$typeof: _v13,
      type: _v0,
      compare: void 0 === _v1 ? null : _v1
    };
  }, _v2.startTransition = function (_v0) {
    var _v1 = _v26.T,
      _v2 = {};
    _v26.T = _v2;
    try {
      var _v3 = _v0(),
        _v4 = _v26.S;
      null !== _v4 && _v4(_v2, _v3), "object" == typeof _v3 && null !== _v3 && "function" == typeof _v3.then && _v3.then(_v25, _v34);
    } catch (_v0) {
      _v34(_v0);
    } finally {
      null !== _v1 && null !== _v2.types && (_v1.types = _v2.types), _v26.T = _v1;
    }
  }, _v2.unstable_useCacheRefresh = function () {
    return _v26.H.useCacheRefresh();
  }, _v2.use = function (_v0) {
    return _v26.H.use(_v0);
  }, _v2.useActionState = function (_v0, _v1, _v2) {
    return _v26.H.useActionState(_v0, _v1, _v2);
  }, _v2.useCallback = function (_v0, _v1) {
    return _v26.H.useCallback(_v0, _v1);
  }, _v2.useContext = function (_v0) {
    return _v26.H.useContext(_v0);
  }, _v2.useDebugValue = function () {}, _v2.useDeferredValue = function (_v0, _v1) {
    return _v26.H.useDeferredValue(_v0, _v1);
  }, _v2.useEffect = function (_v0, _v1) {
    return _v26.H.useEffect(_v0, _v1);
  }, _v2.useEffectEvent = function (_v0) {
    return _v26.H.useEffectEvent(_v0);
  }, _v2.useId = function () {
    return _v26.H.useId();
  }, _v2.useImperativeHandle = function (_v0, _v1, _v2) {
    return _v26.H.useImperativeHandle(_v0, _v1, _v2);
  }, _v2.useInsertionEffect = function (_v0, _v1) {
    return _v26.H.useInsertionEffect(_v0, _v1);
  }, _v2.useLayoutEffect = function (_v0, _v1) {
    return _v26.H.useLayoutEffect(_v0, _v1);
  }, _v2.useMemo = function (_v0, _v1) {
    return _v26.H.useMemo(_v0, _v1);
  }, _v2.useOptimistic = function (_v0, _v1) {
    return _v26.H.useOptimistic(_v0, _v1);
  }, _v2.useReducer = function (_v0, _v1, _v2) {
    return _v26.H.useReducer(_v0, _v1, _v2);
  }, _v2.useRef = function (_v0) {
    return _v26.H.useRef(_v0);
  }, _v2.useState = function (_v0) {
    return _v26.H.useState(_v0);
  }, _v2.useSyncExternalStore = function (_v0, _v1, _v2) {
    return _v26.H.useSyncExternalStore(_v0, _v1, _v2);
  }, _v2.useTransition = function () {
    return _v26.H.useTransition();
  }, _v2.version = "19.2.4";
}