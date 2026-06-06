{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = (_v0.i(0), Symbol.for(_v1.version.startsWith("19") ? "react.transitional.element" : "react.element")),
    _v3 = Symbol.for("react.portal"),
    _v4 = Symbol.for("react.fragment"),
    _v5 = Symbol.for("react.strict_mode"),
    _v6 = Symbol.for("react.profiler"),
    _v7 = Symbol.for("react.consumer"),
    _v8 = Symbol.for("react.context"),
    _v9 = Symbol.for("react.forward_ref"),
    _v10 = Symbol.for("react.suspense"),
    _v11 = Symbol.for("react.suspense_list"),
    _v12 = Symbol.for("react.memo"),
    _v13 = Symbol.for("react.lazy");
  function _v14(_v0) {
    return function (_v0) {
      let _v1 = _v0(_v0);
      function _v2() {
        return _v1;
      }
      return _v2.dependsOnOwnProps = !1, _v2;
    };
  }
  function _v15(_v0) {
    return _v0.dependsOnOwnProps ? !!_v0.dependsOnOwnProps : 1 !== _v0.length;
  }
  function _v16(_v0, _v1) {
    return function (_v0, {
      displayName: _v1
    }) {
      let _v2 = function (_v0, _v1) {
        return _v2.dependsOnOwnProps ? _v2.mapToProps(_v0, _v1) : _v2.mapToProps(_v0, void 0);
      };
      return _v2.dependsOnOwnProps = !0, _v2.mapToProps = function (_v0, _v1) {
        _v2.mapToProps = _v0, _v2.dependsOnOwnProps = _v15(_v0);
        let _v2 = _v2(_v0, _v1);
        return "function" == typeof _v2 && (_v2.mapToProps = _v2, _v2.dependsOnOwnProps = _v15(_v2), _v2 = _v2(_v0, _v1)), _v2;
      }, _v2;
    };
  }
  function _v17(_v0, _v1) {
    return (_v0, _v1) => {
      throw Error(`Invalid value of type ${typeof _v0} for ${_v1} argument when connecting component ${_v1.wrappedComponentName}.`);
    };
  }
  function _v18(_v0, _v1, _v2) {
    return {
      ..._v2,
      ..._v0,
      ..._v1
    };
  }
  var _v19 = {
    notify() {},
    get: () => []
  };
  function _v20(_v0, _v1) {
    let _v2,
      _v3 = _v19,
      _v4 = 0,
      _v5 = !1;
    function _v6() {
      _v9.onStateChange && _v9.onStateChange();
    }
    function _v7() {
      if (_v4++, !_v2) {
        let _v0, _v1;
        _v2 = _v1 ? _v1.addNestedSub(_v6) : _v0.subscribe(_v6), _v0 = null, _v1 = null, _v3 = {
          clear() {
            _v0 = null, _v1 = null;
          },
          notify() {
            let _v0 = _v0;
            for (; _v0;) _v0.callback(), _v0 = _v0.next;
          },
          get() {
            let _v0 = [],
              _v1 = _v0;
            for (; _v1;) _v0.push(_v1), _v1 = _v1.next;
            return _v0;
          },
          subscribe(_v0) {
            let _v1 = !0,
              _v2 = _v1 = {
                callback: _v0,
                next: null,
                prev: _v1
              };
            return _v2.prev ? _v2.prev.next = _v2 : _v0 = _v2, function () {
              _v1 && null !== _v0 && (_v1 = !1, _v2.next ? _v2.next.prev = _v2.prev : _v1 = _v2.prev, _v2.prev ? _v2.prev.next = _v2.next : _v0 = _v2.next);
            };
          }
        };
      }
    }
    function _v8() {
      _v4--, _v2 && 0 === _v4 && (_v2(), _v2 = void 0, _v3.clear(), _v3 = _v19);
    }
    let _v9 = {
      addNestedSub: function (_v0) {
        _v7();
        let _v1 = _v3.subscribe(_v0),
          _v2 = !1;
        return () => {
          _v2 || (_v2 = !0, _v1(), _v8());
        };
      },
      notifyNestedSubs: function () {
        _v3.notify();
      },
      handleChangeWrapper: _v6,
      isSubscribed: function () {
        return _v5;
      },
      trySubscribe: function () {
        _v5 || (_v5 = !0, _v7());
      },
      tryUnsubscribe: function () {
        _v5 && (_v5 = !1, _v8());
      },
      getListeners: () => _v3
    };
    return _v9;
  }
  var _v21 = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    _v22 = "u" > typeof navigator && "ReactNative" === navigator.product,
    _v23 = _v21 || _v22 ? _v1.useLayoutEffect : _v1.useEffect;
  function _v24(_v0, _v1) {
    return _v0 === _v1 ? 0 !== _v0 || 0 !== _v1 || 1 / _v0 == 1 / _v1 : _v0 != _v0 && _v1 != _v1;
  }
  function _v25(_v0, _v1) {
    if (_v24(_v0, _v1)) return !0;
    if ("object" != typeof _v0 || null === _v0 || "object" != typeof _v1 || null === _v1) return !1;
    let _v2 = Object.keys(_v0),
      _v3 = Object.keys(_v1);
    if (_v2.length !== _v3.length) return !1;
    for (let _v0 = 0; _v0 < _v2.length; _v0++) if (!Object.prototype.hasOwnProperty.call(_v1, _v2[_v0]) || !_v24(_v0[_v2[_v0]], _v1[_v2[_v0]])) return !1;
    return !0;
  }
  var _v26 = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    },
    _v27 = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    },
    _v28 = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
    _v29 = {
      [_v9]: {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      },
      [_v12]: _v28
    };
  function _v30(_v0) {
    return function (_v0) {
      if ("object" == typeof _v0 && null !== _v0) {
        let {
          $$typeof: _v0
        } = _v0;
        switch (_v0) {
          case _v2:
            switch (_v0 = _v0.type) {
              case _v4:
              case _v6:
              case _v5:
              case _v10:
              case _v11:
                return _v0;
              default:
                switch (_v0 = _v0 && _v0.$$typeof) {
                  case _v8:
                  case _v9:
                  case _v13:
                  case _v12:
                  case _v7:
                    return _v0;
                  default:
                    return _v0;
                }
            }
          case _v3:
            return _v0;
        }
      }
    }(_v0) === _v12 ? _v28 : _v29[_v0.$$typeof] || _v26;
  }
  var _v31 = Object.defineProperty,
    _v32 = Object.getOwnPropertyNames,
    _v33 = Object.getOwnPropertySymbols,
    _v34 = Object.getOwnPropertyDescriptor,
    _v35 = Object.getPrototypeOf,
    _v36 = Object.prototype;
  function _v37(_v0, _v1) {
    if ("string" != typeof _v1) {
      if (_v36) {
        let _v0 = _v35(_v1);
        _v0 && _v0 !== _v36 && _v37(_v0, _v0);
      }
      let _v0 = _v32(_v1);
      _v33 && (_v0 = _v0.concat(_v33(_v1)));
      let _v1 = _v30(_v0),
        _v2 = _v30(_v1);
      for (let _v0 = 0; _v0 < _v0.length; ++_v0) {
        let _v0 = _v0[_v0];
        if (!_v27[_v0] && !(_v2 && _v2[_v0]) && !(_v1 && _v1[_v0])) {
          let _v0 = _v34(_v1, _v0);
          try {
            _v31(_v0, _v0, _v0);
          } catch (_v0) {}
        }
      }
    }
    return _v0;
  }
  var _v38 = Symbol.for("react-redux-context"),
    _v39 = "u" > typeof globalThis ? globalThis : {},
    _v40 = function () {
      if (!_v1.createContext) return {};
      let _v0 = _v39[_v38] ??= new Map(),
        _v1 = _v0.get(_v1.createContext);
      return _v1 || (_v1 = _v1.createContext(null), _v0.set(_v1.createContext, _v1)), _v1;
    }(),
    _v41 = [null, null];
  function _v42(_v0, _v1, _v2, _v3, _v4, _v5) {
    _v0.current = _v3, _v2.current = !1, _v4.current && (_v4.current = null, _v5());
  }
  function _v43(_v0, _v1) {
    return _v0 === _v1;
  }
  function _v44(_v0 = _v40) {
    return function () {
      return _v1.useContext(_v0);
    };
  }
  var _v45 = _v44();
  _v0.s(["Provider", 0, function (_v0) {
    let {
        children: _v1,
        context: _v2,
        serverState: _v3,
        store: _v4
      } = _v0,
      _v5 = _v1.useMemo(() => {
        let _v0 = _v20(_v4);
        return {
          store: _v4,
          subscription: _v0,
          getServerState: _v3 ? () => _v3 : void 0
        };
      }, [_v4, _v3]),
      _v6 = _v1.useMemo(() => _v4.getState(), [_v4]);
    return _v23(() => {
      let {
        subscription: _v0
      } = _v5;
      return _v0.onStateChange = _v0.notifyNestedSubs, _v0.trySubscribe(), _v6 !== _v4.getState() && _v0.notifyNestedSubs(), () => {
        _v0.tryUnsubscribe(), _v0.onStateChange = void 0;
      };
    }, [_v5, _v6]), _v1.createElement((_v2 || _v40).Provider, {
      value: _v5
    }, _v1);
  }, "connect", 0, function (_v0, _v1, _v2, {
    pure: _v3,
    areStatesEqual: _v4 = _v43,
    areOwnPropsEqual: _v5 = _v25,
    areStatePropsEqual: _v6 = _v25,
    areMergedPropsEqual: _v7 = _v25,
    forwardRef: _v8 = !1,
    context: _v9 = _v40
  } = {}) {
    let _v10 = _v0 ? "function" == typeof _v0 ? _v16(_v0, "mapStateToProps") : _v17(_v0, "mapStateToProps") : _v14(() => ({})),
      _v11 = _v1 && "object" == typeof _v1 ? _v14(_v0 => function (_v0, _v1) {
        let _v2 = {};
        for (let _v0 in _v0) {
          let _v0 = _v0[_v0];
          "function" == typeof _v0 && (_v2[_v0] = (..._v0) => _v1(_v0(..._v0)));
        }
        return _v2;
      }(_v1, _v0)) : _v1 ? "function" == typeof _v1 ? _v16(_v1, "mapDispatchToProps") : _v17(_v1, "mapDispatchToProps") : _v14(_v0 => ({
        dispatch: _v0
      })),
      _v12 = _v2 ? "function" == typeof _v2 ? function (_v0, {
        displayName: _v1,
        areMergedPropsEqual: _v2
      }) {
        let _v3,
          _v4 = !1;
        return function (_v0, _v1, _v2) {
          let _v3 = _v2(_v0, _v1, _v2);
          return _v4 ? _v2(_v3, _v3) || (_v3 = _v3) : (_v4 = !0, _v3 = _v3), _v3;
        };
      } : _v17(_v2, "mergeProps") : () => _v18,
      _v13 = !!_v0;
    return _v0 => {
      let _v1 = _v0.displayName || _v0.name || "Component",
        _v2 = `Connect(${_v1})`,
        _v3 = {
          shouldHandleStateChanges: _v13,
          displayName: _v2,
          wrappedComponentName: _v1,
          WrappedComponent: _v0,
          initMapStateToProps: _v10,
          initMapDispatchToProps: _v11,
          initMergeProps: _v12,
          areStatesEqual: _v4,
          areStatePropsEqual: _v6,
          areOwnPropsEqual: _v5,
          areMergedPropsEqual: _v7
        };
      function _v4(_v0) {
        var _v1;
        let _v2,
          [_v3, _v4, _v5] = _v1.useMemo(() => {
            let {
              reactReduxForwardedRef: _v0,
              ..._v1
            } = _v0;
            return [_v0.context, _v0, _v1];
          }, [_v0]),
          _v6 = _v1.useMemo(() => (_v3?.Consumer, _v9), [_v3, _v9]),
          _v7 = _v1.useContext(_v6),
          _v8 = !!_v0.store && !!_v0.store.getState && !!_v0.store.dispatch,
          _v9 = !!_v7 && !!_v7.store,
          _v10 = _v8 ? _v0.store : _v7.store,
          _v11 = _v9 ? _v7.getServerState : _v10.getState,
          _v12 = _v1.useMemo(() => function (_v0, {
            initMapStateToProps: _v1,
            initMapDispatchToProps: _v2,
            initMergeProps: _v3,
            ..._v4
          }) {
            return function (_v0, _v1, _v2, _v3, {
              areStatesEqual: _v4,
              areOwnPropsEqual: _v5,
              areStatePropsEqual: _v6
            }) {
              let _v7,
                _v8,
                _v9,
                _v10,
                _v11,
                _v12 = !1;
              return function (_v0, _v1) {
                return _v12 ? function (_v0, _v1) {
                  let _v2 = !_v5(_v1, _v8),
                    _v3 = !_v4(_v0, _v7, _v1, _v8);
                  if (_v7 = _v0, _v8 = _v1, _v2 && _v3) return _v9 = _v0(_v7, _v8), _v1.dependsOnOwnProps && (_v10 = _v1(_v3, _v8)), _v11 = _v2(_v9, _v10, _v8);
                  if (_v2) return _v0.dependsOnOwnProps && (_v9 = _v0(_v7, _v8)), _v1.dependsOnOwnProps && (_v10 = _v1(_v3, _v8)), _v11 = _v2(_v9, _v10, _v8);
                  if (_v3) {
                    let _v0, _v1;
                    return _v1 = !_v6(_v0 = _v0(_v7, _v8), _v9), _v9 = _v0, _v1 && (_v11 = _v2(_v9, _v10, _v8)), _v11;
                  }
                  return _v11;
                }(_v0, _v1) : (_v9 = _v0(_v7 = _v0, _v8 = _v1), _v10 = _v1(_v3, _v8), _v11 = _v2(_v9, _v10, _v8), _v12 = !0, _v11);
              };
            }(_v1(_v0, _v4), _v2(_v0, _v4), _v3(_v0, _v4), _v0, _v4);
          }(_v10.dispatch, _v3), [_v10]),
          [_v13, _v14] = _v1.useMemo(() => {
            if (!_v13) return _v41;
            let _v0 = _v20(_v10, _v8 ? void 0 : _v7.subscription),
              _v1 = _v0.notifyNestedSubs.bind(_v0);
            return [_v0, _v1];
          }, [_v10, _v8, _v7]),
          _v15 = _v1.useMemo(() => _v8 ? _v7 : {
            ..._v7,
            subscription: _v13
          }, [_v8, _v7, _v13]),
          _v16 = _v1.useRef(void 0),
          _v17 = _v1.useRef(_v5),
          _v18 = _v1.useRef(void 0),
          _v19 = _v1.useRef(!1),
          _v20 = _v1.useRef(!1),
          _v21 = _v1.useRef(void 0);
        _v23(() => (_v20.current = !0, () => {
          _v20.current = !1;
        }), []);
        let _v22 = _v1.useMemo(() => () => _v18.current && _v5 === _v17.current ? _v18.current : _v12(_v10.getState(), _v5), [_v10, _v5]),
          _v23 = _v1.useMemo(() => _v0 => {
            if (!_v13) return () => {};
            if (!_v13) return () => {};
            let _v1 = !1,
              _v2 = null,
              _v3 = () => {
                let _v0, _v1;
                if (_v1 || !_v20.current) return;
                let _v2 = _v10.getState();
                try {
                  _v0 = _v12(_v2, _v17.current);
                } catch (_v0) {
                  _v1 = _v0, _v2 = _v0;
                }
                _v1 || (_v2 = null), _v0 === _v16.current ? _v19.current || _v14() : (_v16.current = _v0, _v18.current = _v0, _v19.current = !0, _v0());
              };
            return _v13.onStateChange = _v3, _v13.trySubscribe(), _v3(), () => {
              if (_v1 = !0, _v13.tryUnsubscribe(), _v13.onStateChange = null, _v2) throw _v2;
            };
          }, [_v13]);
        _v1 = [_v17, _v16, _v19, _v5, _v18, _v14], _v23(() => _v42(..._v1), void 0);
        try {
          _v2 = _v1.useSyncExternalStore(_v23, _v22, _v11 ? () => _v12(_v11(), _v5) : _v22);
        } catch (_v0) {
          throw _v21.current && (_v0.message += `
The error may be correlated with this previous error:
${_v21.current.stack}

`), _v0;
        }
        _v23(() => {
          _v21.current = void 0, _v18.current = void 0, _v16.current = _v2;
        });
        let _v24 = _v1.useMemo(() => _v1.createElement(_v0, {
          ..._v2,
          ref: _v4
        }), [_v4, _v0, _v2]);
        return _v1.useMemo(() => _v13 ? _v1.createElement(_v6.Provider, {
          value: _v15
        }, _v24) : _v24, [_v6, _v24, _v15]);
      }
      let _v5 = _v1.memo(_v4);
      if (_v5.WrappedComponent = _v0, _v5.displayName = _v4.displayName = _v2, _v8) {
        let _v0 = _v1.forwardRef(function (_v0, _v1) {
          return _v1.createElement(_v5, {
            ..._v0,
            reactReduxForwardedRef: _v1
          });
        });
        return _v0.displayName = _v2, _v0.WrappedComponent = _v0, _v37(_v0, _v0);
      }
      return _v37(_v5, _v0);
    };
  }]);
}