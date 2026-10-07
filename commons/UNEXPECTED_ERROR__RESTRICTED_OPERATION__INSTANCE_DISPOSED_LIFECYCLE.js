{
  "use strict";

  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  _v2.E = void 0, (_v3 = _v2.E || (_v2.E = {})).UNEXPECTED_ERROR = "UNEXPECTED_ERROR", _v3.RESTRICTED_OPERATION = "RESTRICTED_OPERATION", _v3.INSTANCE_DISPOSED_LIFECYCLE = "INSTANCE_DISPOSED_LIFECYCLE", _v3.INSTANCE_DISPOSED_SCOPE = "INSTANCE_DISPOSED_SCOPE", _v3.OUT_OF_SCOPE = "OUT_OF_SCOPE", _v3.INCORRECT_PARAMETER = "INCORRECT_PARAMETER", _v3.INCORRECT_SIGNAL_LISTENER = "INCORRECT_SIGNAL_LISTENER", _v3.INCORRECT_SIGNAL_TYPE = "INCORRECT_SIGNAL_TYPE", _v3.INCORRECT_QUERY_PROVIDER = "INCORRECT_QUERY_PROVIDER", _v3.INCORRECT_QUERY_TYPE = "INCORRECT_QUERY_TYPE", _v3.TARGET_CONTEXT_MANAGER_EXPECTED = "TARGET_CONTEXT_MANAGER_EXPECTED";
  var _v7 = function (_v0) {
    function _v1(_v0, _v1) {
      void 0 === _v0 && (_v0 = _v2.E.UNEXPECTED_ERROR);
      var _v2 = _v0.call(this) || this;
      return _v2.name = "DreamstateError", _v2.code = _v0, _v2.message = function (_v0, _v1) {
        switch (_v0) {
          case _v2.E.INSTANCE_DISPOSED_LIFECYCLE:
            return "Disposed manager instances are not supposed to access lifecycle.";
          case _v2.E.INSTANCE_DISPOSED_SCOPE:
            return "Disposed manager instances are not supposed to access scope.";
          case _v2.E.OUT_OF_SCOPE:
            return "Instance is out of scope, make sure it is created or mocked correctly.";
          case _v2.E.INCORRECT_PARAMETER:
            return "Incorrect parameter supplied.".concat(_v1 ? " ".concat(_v1) : "");
          case _v2.E.INCORRECT_SIGNAL_TYPE:
            return "Unexpected signal type provided, expected symbol, string or number.".concat(_v1 ? " Got: '".concat(_v1, "' instead.") : "");
          case _v2.E.INCORRECT_SIGNAL_LISTENER:
            return "Signal listener must be function, '".concat(_v1, "' provided.");
          case _v2.E.INCORRECT_QUERY_TYPE:
            return "Unexpected query type provided, expected symbol, string or number. Got: '".concat(_v1, "' instead.");
          case _v2.E.INCORRECT_QUERY_PROVIDER:
            return "Query provider must be factory function, '".concat(_v1, "' provided.");
          case _v2.E.TARGET_CONTEXT_MANAGER_EXPECTED:
            return "Cannot perform action, class extending ContextManager is expected.".concat(_v1 ? " ".concat(_v1) : "");
          case _v2.E.RESTRICTED_OPERATION:
            return "Operation is restricted.".concat(_v1 ? " ".concat(_v1) : "");
          case _v2.E.UNEXPECTED_ERROR:
          default:
            return "Unexpected dreamstate error.".concat(_v1 ? " ".concat(_v1) : "");
        }
      }(_v0, _v1), _v2;
    }
    return _v4.__extends(_v1, _v0), _v1;
  }(Error);
  function _v8() {
    throw new _v7(_v2.E.INSTANCE_DISPOSED_SCOPE);
  }
  function _v9() {
    throw new _v7(_v2.E.OUT_OF_SCOPE);
  }
  var _v10 = Symbol("SIGNAL_METADATA"),
    _v11 = Symbol("QUERY_METADATA"),
    _v12 = Symbol("SIGNALING_HANDLER"),
    _v13 = Symbol("SCOPE"),
    _v14 = new WeakMap(),
    _v15 = new WeakMap(),
    _v16 = new WeakMap(),
    _v17 = function (_v0) {
      Object.assign(this, _v0);
    },
    _v18 = function () {
      function _v0(_v0, _v1) {
        this.__selector__ = _v0, this.__memo__ = _v1;
      }
      return _v0.prototype.process = function (_v0) {
        if (this.__memo__) {
          var _v1 = this.__memo__(_v0);
          this.__diff__ && !this.__diff__.some(function (_v0, _v1) {
            return _v0 !== _v1[_v1];
          }) || (this.__diff__ = _v1, Object.assign(this, this.__selector__(_v0)));
        } else Object.assign(this, this.__selector__(_v0));
      }, _v0;
    }(),
    _v19 = function () {
      function _v0() {}
      return _v0.prototype.asMerged = function (_v0) {
        return void 0 === _v0 && (_v0 = {}), Object.assign(new _v0(), this, _v0);
      }, _v0;
    }();
  function _v20(_v0) {
    return "string" == typeof _v0;
  }
  function _v21(_v0) {
    return "number" == typeof _v0;
  }
  function _v22(_v0) {
    return "object" == typeof _v0 && null !== _v0;
  }
  function _v23(_v0) {
    return "symbol" == typeof _v0;
  }
  function _v24(_v0) {
    return "function" == typeof _v0;
  }
  function _v25(_v0) {
    return _v20(_v0) || _v21(_v0) || _v23(_v0);
  }
  function _v26(_v0) {
    return _v20(_v0) || _v21(_v0) || _v23(_v0);
  }
  function _v27(_v0) {
    for (var _v1 in _v0) {
      var _v2 = _v0[_v1];
      _v2 instanceof _v18 && _v2.process(_v0);
    }
    return _v0;
  }
  var _v28 = function () {
    function _v0(_v0) {
      this.IS_DISPOSED = !1, this.context = {}, _v27(this.context);
    }
    return _v0.getDefaultContext = function () {
      return null;
    }, Object.defineProperty(_v0, "REACT_CONTEXT", {
      get: function () {
        if (this === _v0) throw new _v7(_v2.E.RESTRICTED_OPERATION, "Direct references to ContextManager statics forbidden.");
        var _v0 = _v14.get(this);
        if (_v0) return _v0;
        var _v1 = _v5.createContext(this.getDefaultContext());
        return _v14.set(this, _v1), _v1;
      },
      enumerable: !1,
      configurable: !0
    }), _v0.prototype.onProvisionStarted = function () {}, _v0.prototype.onProvisionEnded = function () {}, _v0.prototype.getScope = function () {
      if (this[_v13]) return this[_v13];
      _v9();
    }, _v0.prototype.forceUpdate = function () {
      this.context = _v27(Object.assign({}, this.context)), this[_v13] && this[_v13].INTERNAL.notifyObservers(this);
    }, _v0.prototype.setContext = function (_v0) {
      var _v1 = Object.assign({}, this.context, _v24(_v0) ? _v0(this.context) : _v0);
      this.context = _v27(_v1), this[_v13] && function (_v0, _v1) {
        if (!_v22(_v1)) throw new _v7(_v2.E.INCORRECT_PARAMETER, "Context should be non-nullable object, supplied '".concat(typeof _v1, "' type instead."));
        return !_v0 || Object.keys(_v1).some(function (_v0) {
          return !(_v1[_v0] instanceof _v18 || _v1[_v0] instanceof _v17 || (_v1[_v0] instanceof _v19 ? _v6.shallowEqualObjects(_v1[_v0], _v0[_v0]) : _v1[_v0] === _v0[_v0]));
        });
      }(this[_v13].INTERNAL.REGISTRY.CONTEXT_STATES_REGISTRY.get(this.constructor), _v1) && this[_v13].INTERNAL.notifyObservers(this);
    }, _v0.prototype.emitSignal = function (_v0) {
      if (this[_v13]) return this[_v13].emitSignal(_v0, this.constructor);
      _v9();
    }, _v0.prototype.queryDataAsync = function (_v0) {
      if (this[_v13]) return this[_v13].queryDataAsync(_v0);
      _v9();
    }, _v0.prototype.queryDataSync = function (_v0) {
      if (this[_v13]) return this[_v13].queryDataSync(_v0);
      _v9();
    }, _v0;
  }();
  function _v29() {}
  function _v30(_v0, _v1, _v2) {
    return new Promise(function (_v0, _v1) {
      try {
        var _v2 = Date.now(),
          _v3 = _v0(_v1);
        return _v3 instanceof Promise ? _v3.then(function (_v0) {
          _v0({
            answerer: _v2 || _v0,
            type: _v1.type,
            data: _v0,
            timestamp: _v2
          });
        }).catch(_v1) : _v0({
          answerer: _v2 || _v0,
          type: _v1.type,
          data: _v3,
          timestamp: _v2
        });
      } catch (_v0) {
        _v1(_v0);
      }
    });
  }
  function _v31(_v0, _v1, _v2) {
    return {
      answerer: _v2 || _v0,
      type: _v1.type,
      data: _v0(_v1),
      timestamp: Date.now()
    };
  }
  function _v32(_v0, _v1, _v2) {
    var _v3 = _v2.QUERY_PROVIDERS_REGISTRY;
    if (!_v24(_v1)) throw new _v7(_v2.E.INCORRECT_QUERY_PROVIDER, typeof _v1);
    if (!_v25(_v0)) throw new _v7(_v2.E.INCORRECT_QUERY_TYPE, typeof _v0);
    if (_v3.has(_v0)) {
      var _v4 = _v3.get(_v0).filter(function (_v0) {
        return _v0 !== _v1;
      });
      _v4.length ? _v3.set(_v0, _v4) : _v3.delete(_v0);
    }
  }
  function _v33() {
    return {
      QUERY_PROVIDERS_REGISTRY: new Map(),
      SIGNAL_LISTENERS_REGISTRY: new Set(),
      CONTEXT_INSTANCES_REGISTRY: new Map(),
      CONTEXT_STATES_REGISTRY: new Map(),
      CONTEXT_SERVICES_REFERENCES: new Map(),
      CONTEXT_OBSERVERS_REGISTRY: new Map(),
      CONTEXT_SUBSCRIBERS_REGISTRY: new Map()
    };
  }
  function _v34(_v0) {
    var _v1, _v2;
    try {
      for (var _v3 = _v4.__values(this[_v10]), _v4 = _v3.next(); !_v4.done; _v4 = _v3.next()) {
        var _v5 = _v4.__read(_v4.value, 2),
          _v6 = _v5[0],
          _v7 = _v5[1];
        (Array.isArray(_v7) ? _v7.includes(_v0.type) : _v0.type === _v7) && this[_v6](_v0);
      }
    } catch (_v0) {
      _v1 = {
        error: _v0
      };
    } finally {
      try {
        _v4 && !_v4.done && (_v2 = _v3.return) && _v2.call(_v3);
      } finally {
        if (_v1) throw _v1.error;
      }
    }
  }
  function _v35() {
    return this.canceled = !0, this;
  }
  function _v36(_v0, _v1) {
    if (_v0.prototype instanceof _v28) {
      for (var _v2 = [], _v3 = _v0; _v3 !== _v28;) _v2.push(_v1.get(_v3)), _v3 = Object.getPrototypeOf(_v3);
      return _v2.reduce(function (_v0, _v1) {
        return _v1 ? _v0.concat(_v1) : _v0;
      }, []);
    }
    throw new _v7(_v2.E.INCORRECT_PARAMETER, "Failed to collect metadata of class that is not extending ContextManager.");
  }
  var _v37 = _v5.createContext(null);
  function _v38() {
    return {};
  }
  function _v39() {
    return _v5.useReducer(_v38, null)[1];
  }
  function _v40(_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.initialState,
      _v3 = _v0.dependencies,
      _v4 = _v0.ManagerClass,
      _v5 = _v0.scope,
      _v6 = _v39();
    return _v5.useMemo(function () {
      _v5.INTERNAL.registerManager(_v4, _v2);
    }, _v3), _v5.useEffect(function () {
      var _v0 = _v5.INTERNAL.registerManager(_v4, _v2);
      return _v5.INTERNAL.addServiceObserver(_v4, _v6), _v0 && _v6(), function () {
        _v5.INTERNAL.removeServiceObserver(_v4, _v6);
      };
    }, _v3), _v5.createElement(_v4.REACT_CONTEXT.Provider, {
      value: _v5.INTERNAL.REGISTRY.CONTEXT_STATES_REGISTRY.get(_v4)
    }, _v1);
  }
  _v2.A = _v17, _v2.C = _v28, _v2.D = _v7, _v2.N = _v19, _v2.Q = _v16, _v2.S = _v15, _v2.a = _v26, _v2.b = _v37, _v2.c = function (_v0) {
    void 0 === _v0 && (_v0 = _v33());
    var _v1 = _v0.SIGNAL_LISTENERS_REGISTRY,
      _v2 = _v0.CONTEXT_STATES_REGISTRY,
      _v3 = _v0.CONTEXT_OBSERVERS_REGISTRY;
    _v0.QUERY_PROVIDERS_REGISTRY;
    var _v4 = _v0.CONTEXT_SERVICES_REFERENCES,
      _v5 = _v0.CONTEXT_INSTANCES_REGISTRY,
      _v6 = _v0.CONTEXT_SUBSCRIBERS_REGISTRY,
      _v7 = {
        INTERNAL: {
          REGISTRY: _v0,
          registerManager: function (_v0, _v1, _v2) {
            if (_v5.has(_v0)) return !1;
            var _v3 = new _v0(_v1);
            return _v2 && Object.assign(_v3.context, _v2), _v27(_v3.context), _v3[_v13] = _v7, _v3[_v10] = _v36(_v0, _v15), _v3[_v11] = _v36(_v0, _v16), _v3[_v12] = _v34.bind(_v3), _v2.set(_v0, _v3.context), _v4.set(_v0, 0), _v3.set(_v0, new Set()), _v1.add(_v3[_v12]), _v5.set(_v0, _v3), _v6.has(_v0) ? _v6.get(_v0).forEach(function (_v0) {
              _v0(_v3.context);
            }) : _v6.set(_v0, new Set()), !0;
          },
          unRegisterManager: function (_v0) {
            if (_v5.has(_v0)) {
              var _v1 = _v5.get(_v0);
              return _v1[_v13] = null, _v1.setContext = _v29, _v1.forceUpdate = _v29, _v1.emitSignal = _v8, _v1.queryDataSync = _v8, _v1.queryDataAsync = _v8, _v1.IS_DISPOSED = !0, _v1.delete(_v1[_v12]), _v5.delete(_v0), _v2.delete(_v0), !0;
            }
            return _v5.delete(_v0), _v2.delete(_v0), !1;
          },
          addServiceObserver: function (_v0, _v1, _v2) {
            void 0 === _v2 && (_v2 = _v4.get(_v0) + 1), _v3.get(_v0).add(_v1), _v4.set(_v0, _v2), 1 === _v2 && _v5.get(_v0).onProvisionStarted();
          },
          removeServiceObserver: function (_v0, _v1, _v2) {
            void 0 === _v2 && (_v2 = _v4.get(_v0) - 1), _v3.get(_v0).delete(_v1), _v4.set(_v0, _v2), 0 === _v2 && (_v5.get(_v0).onProvisionEnded(), this.unRegisterManager(_v0));
          },
          notifyObservers: function (_v0) {
            var _v1 = _v0.context;
            _v2.set(_v0.constructor, _v1), _v3.get(_v0.constructor).forEach(function (_v0) {
              _v0();
            }), _v6.get(_v0.constructor).forEach(function (_v0) {
              _v0(_v1);
            });
          },
          subscribeToManager: function (_v0, _v1) {
            if (!(_v0.prototype instanceof _v28)) throw new _v7(_v2.E.TARGET_CONTEXT_MANAGER_EXPECTED, "Cannot subscribe to '".concat(null == _v0 ? void 0 : _v0.name, "'."));
            return _v6.get(_v0).add(_v1), function () {
              _v6.get(_v0).delete(_v1);
            };
          },
          unsubscribeFromManager: function (_v0, _v1) {
            if (!(_v0.prototype instanceof _v28)) throw new _v7(_v2.E.TARGET_CONTEXT_MANAGER_EXPECTED, "Cannot unsubscribe from '".concat(null == _v0 ? void 0 : _v0.name, "'."));
            _v0.CONTEXT_SUBSCRIBERS_REGISTRY.get(_v0).delete(_v1);
          }
        },
        getContextOf: function (_v0) {
          var _v1 = _v2.get(_v0);
          return _v1 ? Object.assign({}, _v1) : null;
        },
        getInstanceOf: function (_v0) {
          return _v5.get(_v0) || null;
        },
        emitSignal: function (_v0, _v1) {
          return void 0 === _v1 && (_v1 = null), function (_v0, _v1, _v2) {
            if (void 0 === _v1 && (_v1 = null), !_v0 || !_v26(_v0.type)) throw new _v7(_v2.E.INCORRECT_SIGNAL_TYPE);
            var _v3 = {
              type: _v0.type,
              data: _v0.data,
              emitter: _v1,
              timestamp: Date.now(),
              cancel: _v35
            };
            return _v2.SIGNAL_LISTENERS_REGISTRY.forEach(function (_v0) {
              try {
                _v3.canceled || _v0(_v3);
              } catch (_v0) {
                console.error("[DS]", "Failed to proceed emitted signal (".concat(String(_v0.type), "):"), _v0);
              }
            }), _v3;
          }(_v0, _v1, _v0);
        },
        subscribeToSignals: function (_v0) {
          if (!_v24(_v0)) throw new _v7(_v2.E.INCORRECT_SIGNAL_LISTENER, typeof _v0);
          return _v1.add(_v0), function () {
            _v1.delete(_v0);
          };
        },
        unsubscribeFromSignals: function (_v0) {
          _v1.delete(_v0);
        },
        registerQueryProvider: function (_v0, _v1) {
          var _v2 = _v0;
          if ("function" != typeof _v1) throw new _v7(_v2.E.INCORRECT_QUERY_PROVIDER, typeof _v1);
          if (!_v25(_v0)) throw new _v7(_v2.E.INCORRECT_QUERY_TYPE, typeof _v0);
          if (_v2.QUERY_PROVIDERS_REGISTRY.has(_v0)) {
            var _v3 = _v2.QUERY_PROVIDERS_REGISTRY.get(_v0);
            _v3.includes(_v1) || _v3.unshift(_v1);
          } else _v2.QUERY_PROVIDERS_REGISTRY.set(_v0, [_v1]);
          return function () {
            _v32(_v0, _v1, _v2);
          };
        },
        unRegisterQueryProvider: function (_v0, _v1) {
          return _v32(_v0, _v1, _v0);
        },
        queryDataSync: function (_v0) {
          return function (_v0, _v1) {
            var _v2,
              _v3,
              _v4,
              _v5,
              _v6 = _v1.CONTEXT_INSTANCES_REGISTRY,
              _v7 = _v1.QUERY_PROVIDERS_REGISTRY;
            if (!_v0 || !_v0.type) throw new _v7(_v2.E.INCORRECT_PARAMETER, "Query must be an object with declared type or array of objects with type.");
            try {
              for (var _v8 = _v4.__values(_v6.values()), _v9 = _v8.next(); !_v9.done; _v9 = _v8.next()) {
                var _v10 = _v9.value;
                try {
                  for (var _v11 = (_v4 = void 0, _v4.__values(_v10[_v11])), _v12 = _v11.next(); !_v12.done; _v12 = _v11.next()) {
                    var _v13 = _v12.value;
                    if (_v0.type === _v13[1]) return _v31(_v10[_v13[0]].bind(_v10), _v0, _v10.constructor);
                  }
                } catch (_v0) {
                  _v4 = {
                    error: _v0
                  };
                } finally {
                  try {
                    _v12 && !_v12.done && (_v5 = _v11.return) && _v5.call(_v11);
                  } finally {
                    if (_v4) throw _v4.error;
                  }
                }
              }
            } catch (_v0) {
              _v2 = {
                error: _v0
              };
            } finally {
              try {
                _v9 && !_v9.done && (_v3 = _v8.return) && _v3.call(_v8);
              } finally {
                if (_v2) throw _v2.error;
              }
            }
            return _v7.has(_v0.type) ? _v31(_v7.get(_v0.type)[0], _v0, null) : null;
          }(_v0, _v0);
        },
        queryDataAsync: function (_v0) {
          return function (_v0, _v1) {
            var _v2,
              _v3,
              _v4,
              _v5,
              _v6 = _v1.CONTEXT_INSTANCES_REGISTRY,
              _v7 = _v1.QUERY_PROVIDERS_REGISTRY;
            if (!_v0 || !_v0.type) throw new _v7(_v2.E.INCORRECT_PARAMETER, "Query must be an object with declared type or array of objects with type.");
            try {
              for (var _v8 = _v4.__values(_v6.values()), _v9 = _v8.next(); !_v9.done; _v9 = _v8.next()) {
                var _v10 = _v9.value;
                try {
                  for (var _v11 = (_v4 = void 0, _v4.__values(_v10[_v11])), _v12 = _v11.next(); !_v12.done; _v12 = _v11.next()) {
                    var _v13 = _v12.value;
                    if (_v0.type === _v13[1]) return _v30(_v10[_v13[0]].bind(_v10), _v0, _v10.constructor);
                  }
                } catch (_v0) {
                  _v4 = {
                    error: _v0
                  };
                } finally {
                  try {
                    _v12 && !_v12.done && (_v5 = _v11.return) && _v5.call(_v11);
                  } finally {
                    if (_v4) throw _v4.error;
                  }
                }
              }
            } catch (_v0) {
              _v2 = {
                error: _v0
              };
            } finally {
              try {
                _v9 && !_v9.done && (_v3 = _v8.return) && _v3.call(_v8);
              } finally {
                if (_v2) throw _v2.error;
              }
            }
            return _v7.has(_v0.type) ? _v30(_v7.get(_v0.type)[0], _v0, null) : Promise.resolve(null);
          }(_v0, _v0);
        }
      };
    return _v7;
  }, _v2.d = _v22, _v2.e = _v24, _v2.f = function (_v0) {
    return void 0 === _v0;
  }, _v2.g = _v18, _v2.h = function (_v0, _v1) {
    if (void 0 === _v1 && (_v1 = {}), !Array.isArray(_v0) || !_v0.length) throw new _v7(_v2.E.INCORRECT_PARAMETER, "Only array of context managers is acceptable.");
    for (var _v2 = 0; _v2 < _v0.length; _v2++) if (!(_v0[_v2] && _v0[_v2].prototype instanceof _v28)) throw new _v7(_v2.E.TARGET_CONTEXT_MANAGER_EXPECTED, "'".concat(String(_v0[_v2]), "' is in sources array."));
    return _v1.isCombined ? function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4 = (_v1 = _v0.initialState, _v2 = _v5.useContext(_v37), _v3 = _v39(), _v5.useMemo(function () {
          for (var _v0 = 0; _v0 < _v0.length; _v0++) _v2.INTERNAL.registerManager(_v0[_v0], _v1);
        }, _v0), _v5.useEffect(function () {
          for (var _v0 = !1, _v1 = _v0.length - 1; _v1 >= 0; _v1--) {
            var _v2 = _v2.INTERNAL.registerManager(_v0[_v1], _v1);
            _v2.INTERNAL.addServiceObserver(_v0[_v1], _v3), _v0 = _v2 || _v0;
          }
          return _v0 && _v3(), function () {
            for (var _v0 = 0; _v0 < _v0.length; _v0++) _v2.INTERNAL.removeServiceObserver(_v0[_v0], _v3);
          };
        }, _v0), _v2.INTERNAL.REGISTRY.CONTEXT_STATES_REGISTRY);
      return function _v0(_v1, _v2, _v3, _v4) {
        return void 0 === _v1 && (_v1 = null), void 0 === _v4 && (_v4 = 0), _v4 >= _v2.length ? _v1 : _v5.createElement(_v2[_v4].REACT_CONTEXT.Provider, {
          value: _v3.get(_v2[_v4])
        }, _v0(_v1, _v2, _v3, _v4 + 1));
      }(_v0.children, _v0, _v4);
    } : function (_v0) {
      return function _v0(_v1, _v2, _v3, _v4) {
        return void 0 === _v4 && (_v4 = 0), _v4 >= _v1.length ? _v2.children : _v5.createElement(_v40, {
          ManagerClass: _v1[_v4],
          initialState: _v2.initialState,
          dependencies: _v1,
          scope: _v3
        }, _v0(_v1, _v2, _v3, _v4 + 1));
      }(_v0, _v0, _v5.useContext(_v37));
    };
  }, _v2.i = _v25, _v2.j = _v33;
}