{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = function (_v0) {
    _v0();
  };
  var _v5 = _v0.i(0);
  let _v6 = Symbol.for(`react-redux-context-${_v5.version}`),
    _v7 = globalThis,
    _v8 = new Proxy({}, new Proxy({}, {
      get(_v0, _v1) {
        let _v2,
          _v3 = ((_v2 = _v7[_v6]) || (_v2 = (0, _v5.createContext)(null), _v7[_v6] = _v2), _v2);
        return (_v0, ..._v1) => Reflect[_v1](_v3, ..._v1);
      }
    }));
  function _v9(_v0 = _v8) {
    return function () {
      return (0, _v5.useContext)(_v0);
    };
  }
  _v0.s(["ReactReduxContext", 0, _v8], 0);
  let _v10 = _v9(),
    _v11 = () => {
      throw Error("uSES not initialized!");
    },
    _v12 = _v11,
    _v13 = _v0 => {
      _v12 = _v0;
    },
    _v14 = (_v0, _v1) => _v0 === _v1;
  function _v15(_v0 = _v8) {
    let _v1 = _v0 === _v8 ? _v10 : _v9(_v0);
    return function (_v0, _v1 = {}) {
      let {
          equalityFn: _v2 = _v14,
          stabilityCheck: _v3,
          noopCheck: _v4
        } = "function" == typeof _v1 ? {
          equalityFn: _v1
        } : _v1,
        {
          store: _v5,
          subscription: _v6,
          getServerState: _v7,
          stabilityCheck: _v8,
          noopCheck: _v9
        } = _v1();
      (0, _v5.useRef)(!0);
      let _v10 = (0, _v5.useCallback)({
          [_v0.name]: _v0 => _v0(_v0)
        }[_v0.name], [_v0, _v8, _v3]),
        _v11 = _v12(_v6.addNestedSub, _v5.getState, _v7 || _v5.getState, _v10, _v2);
      return (0, _v5.useDebugValue)(_v11), _v11;
    };
  }
  let _v16 = _v15();
  _v0.s(["createSelectorHook", 0, _v15, "initializeUseSelector", 0, _v13, "useSelector", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
  function _v22(_v0) {
    return function (_v0) {
      let _v1 = _v0(_v0);
      function _v2() {
        return _v1;
      }
      return _v2.dependsOnOwnProps = !1, _v2;
    };
  }
  function _v23(_v0) {
    return _v0.dependsOnOwnProps ? !!_v0.dependsOnOwnProps : 1 !== _v0.length;
  }
  function _v24(_v0, _v1) {
    return function (_v0, {
      displayName: _v1
    }) {
      let _v2 = function (_v0, _v1) {
        return _v2.dependsOnOwnProps ? _v2.mapToProps(_v0, _v1) : _v2.mapToProps(_v0, void 0);
      };
      return _v2.dependsOnOwnProps = !0, _v2.mapToProps = function (_v0, _v1) {
        _v2.mapToProps = _v0, _v2.dependsOnOwnProps = _v23(_v0);
        let _v2 = _v2(_v0, _v1);
        return "function" == typeof _v2 && (_v2.mapToProps = _v2, _v2.dependsOnOwnProps = _v23(_v2), _v2 = _v2(_v0, _v1)), _v2;
      }, _v2;
    };
  }
  function _v25(_v0, _v1) {
    return (_v0, _v1) => {
      throw Error(`Invalid value of type ${typeof _v0} for ${_v1} argument when connecting component ${_v1.wrappedComponentName}.`);
    };
  }
  function _v26(_v0, _v1, _v2) {
    return (0, _v17.default)({}, _v2, _v0, _v1);
  }
  let _v27 = {
    notify() {},
    get: () => []
  };
  function _v28(_v0, _v1) {
    let _v2,
      _v3 = _v27;
    function _v4() {
      _v6.onStateChange && _v6.onStateChange();
    }
    function _v5() {
      if (!_v2) {
        let _v0, _v1, _v2;
        _v2 = _v1 ? _v1.addNestedSub(_v4) : _v0.subscribe(_v4), _v0 = _v4, _v1 = null, _v2 = null, _v3 = {
          clear() {
            _v1 = null, _v2 = null;
          },
          notify() {
            _v0(() => {
              let _v0 = _v1;
              for (; _v0;) _v0.callback(), _v0 = _v0.next;
            });
          },
          get() {
            let _v0 = [],
              _v1 = _v1;
            for (; _v1;) _v0.push(_v1), _v1 = _v1.next;
            return _v0;
          },
          subscribe(_v0) {
            let _v1 = !0,
              _v2 = _v2 = {
                callback: _v0,
                next: null,
                prev: _v2
              };
            return _v2.prev ? _v2.prev.next = _v2 : _v1 = _v2, function () {
              _v1 && null !== _v1 && (_v1 = !1, _v2.next ? _v2.next.prev = _v2.prev : _v2 = _v2.prev, _v2.prev ? _v2.prev.next = _v2.next : _v1 = _v2.next);
            };
          }
        };
      }
    }
    let _v6 = {
      addNestedSub: function (_v0) {
        return _v5(), _v3.subscribe(_v0);
      },
      notifyNestedSubs: function () {
        _v3.notify();
      },
      handleChangeWrapper: _v4,
      isSubscribed: function () {
        return !!_v2;
      },
      trySubscribe: _v5,
      tryUnsubscribe: function () {
        _v2 && (_v2(), _v2 = void 0, _v3.clear(), _v3 = _v27);
      },
      getListeners: () => _v3
    };
    return _v6;
  }
  let _v29 = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? _v5.useLayoutEffect : _v5.useEffect;
  function _v30(_v0, _v1) {
    return _v0 === _v1 ? 0 !== _v0 || 0 !== _v1 || 1 / _v0 == 1 / _v1 : _v0 != _v0 && _v1 != _v1;
  }
  function _v31(_v0, _v1) {
    if (_v30(_v0, _v1)) return !0;
    if ("object" != typeof _v0 || null === _v0 || "object" != typeof _v1 || null === _v1) return !1;
    let _v2 = Object.keys(_v0),
      _v3 = Object.keys(_v1);
    if (_v2.length !== _v3.length) return !1;
    for (let _v0 = 0; _v0 < _v2.length; _v0++) if (!Object.prototype.hasOwnProperty.call(_v1, _v2[_v0]) || !_v30(_v0[_v2[_v0]], _v1[_v2[_v0]])) return !1;
    return !0;
  }
  _v0.s(["default", 0, _v31], 0);
  let _v32 = ["reactReduxForwardedRef"],
    _v33 = _v11,
    _v34 = _v0 => {
      _v33 = _v0;
    },
    _v35 = [null, null];
  function _v36(_v0, _v1, _v2, _v3, _v4, _v5) {
    _v0.current = _v3, _v2.current = !1, _v4.current && (_v4.current = null, _v5());
  }
  function _v37(_v0, _v1) {
    return _v0 === _v1;
  }
  function _v38(_v0 = _v8) {
    let _v1 = _v0 === _v8 ? _v10 : _v9(_v0);
    return function () {
      let {
        store: _v0
      } = _v1();
      return _v0;
    };
  }
  _v0.s(["default", 0, function (_v0, _v1, _v2, {
    pure: _v3,
    areStatesEqual: _v4 = _v37,
    areOwnPropsEqual: _v5 = _v31,
    areStatePropsEqual: _v6 = _v31,
    areMergedPropsEqual: _v7 = _v31,
    forwardRef: _v8 = !1,
    context: _v9 = _v8
  } = {}) {
    let _v10 = _v0 ? "function" == typeof _v0 ? _v24(_v0, "mapStateToProps") : _v25(_v0, "mapStateToProps") : _v22(() => ({})),
      _v11 = _v1 && "object" == typeof _v1 ? _v22(_v0 => function (_v0, _v1) {
        let _v2 = {};
        for (let _v0 in _v0) {
          let _v0 = _v0[_v0];
          "function" == typeof _v0 && (_v2[_v0] = (..._v0) => _v1(_v0(..._v0)));
        }
        return _v2;
      }(_v1, _v0)) : _v1 ? "function" == typeof _v1 ? _v24(_v1, "mapDispatchToProps") : _v25(_v1, "mapDispatchToProps") : _v22(_v0 => ({
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
      } : _v25(_v2, "mergeProps") : () => _v26,
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
          [_v3, _v4, _v5] = (0, _v5.useMemo)(() => {
            let {
                reactReduxForwardedRef: _v0
              } = _v0,
              _v1 = (0, _v18.default)(_v0, _v32);
            return [_v0.context, _v0, _v1];
          }, [_v0]),
          _v6 = (0, _v5.useMemo)(() => _v3 && _v3.Consumer && (0, _v20.isContextConsumer)(_v5.default.createElement(_v3.Consumer, null)) ? _v3 : _v9, [_v3, _v9]),
          _v7 = (0, _v5.useContext)(_v6),
          _v8 = !!_v0.store && !!_v0.store.getState && !!_v0.store.dispatch,
          _v9 = !!_v7 && !!_v7.store,
          _v10 = _v8 ? _v0.store : _v7.store,
          _v11 = _v9 ? _v7.getServerState : _v10.getState,
          _v12 = (0, _v5.useMemo)(() => function (_v0, _v1) {
            let {
                initMapStateToProps: _v2,
                initMapDispatchToProps: _v3,
                initMergeProps: _v4
              } = _v1,
              _v5 = (0, _v18.default)(_v1, _v21);
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
            }(_v2(_v0, _v5), _v3(_v0, _v5), _v4(_v0, _v5), _v0, _v5);
          }(_v10.dispatch, _v3), [_v10]),
          [_v13, _v14] = (0, _v5.useMemo)(() => {
            if (!_v13) return _v35;
            let _v0 = _v28(_v10, _v8 ? void 0 : _v7.subscription),
              _v1 = _v0.notifyNestedSubs.bind(_v0);
            return [_v0, _v1];
          }, [_v10, _v8, _v7]),
          _v15 = (0, _v5.useMemo)(() => _v8 ? _v7 : (0, _v17.default)({}, _v7, {
            subscription: _v13
          }), [_v8, _v7, _v13]),
          _v16 = (0, _v5.useRef)(),
          _v17 = (0, _v5.useRef)(_v5),
          _v18 = (0, _v5.useRef)(),
          _v19 = (0, _v5.useRef)(!1);
        (0, _v5.useRef)(!1);
        let _v20 = (0, _v5.useRef)(!1),
          _v21 = (0, _v5.useRef)();
        _v29(() => (_v20.current = !0, () => {
          _v20.current = !1;
        }), []);
        let _v22 = (0, _v5.useMemo)(() => () => _v18.current && _v5 === _v17.current ? _v18.current : _v12(_v10.getState(), _v5), [_v10, _v5]),
          _v23 = (0, _v5.useMemo)(() => _v0 => {
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
        _v1 = [_v17, _v16, _v19, _v5, _v18, _v14], _v29(() => _v36(..._v1), void 0);
        try {
          _v2 = _v33(_v23, _v22, _v11 ? () => _v12(_v11(), _v5) : _v22);
        } catch (_v0) {
          throw _v21.current && (_v0.message += `
The error may be correlated with this previous error:
${_v21.current.stack}

`), _v0;
        }
        _v29(() => {
          _v21.current = void 0, _v18.current = void 0, _v16.current = _v2;
        });
        let _v24 = (0, _v5.useMemo)(() => _v5.default.createElement(_v0, (0, _v17.default)({}, _v2, {
          ref: _v4
        })), [_v4, _v0, _v2]);
        return (0, _v5.useMemo)(() => _v13 ? _v5.default.createElement(_v6.Provider, {
          value: _v15
        }, _v24) : _v24, [_v6, _v24, _v15]);
      }
      let _v5 = _v5.default.memo(_v4);
      if (_v5.WrappedComponent = _v0, _v5.displayName = _v4.displayName = _v2, _v8) {
        let _v0 = _v5.default.forwardRef(function (_v0, _v1) {
          return _v5.default.createElement(_v5, (0, _v17.default)({}, _v0, {
            reactReduxForwardedRef: _v1
          }));
        });
        return _v0.displayName = _v2, _v0.WrappedComponent = _v0, (0, _v19.default)(_v0, _v0);
      }
      return (0, _v19.default)(_v5, _v0);
    };
  }, "initializeConnect", 0, _v34], 0), _v0.s(["default", 0, function ({
    store: _v0,
    context: _v1,
    children: _v2,
    serverState: _v3,
    stabilityCheck: _v4 = "once",
    noopCheck: _v5 = "once"
  }) {
    let _v6 = (0, _v5.useMemo)(() => {
        let _v0 = _v28(_v0);
        return {
          store: _v0,
          subscription: _v0,
          getServerState: _v3 ? () => _v3 : void 0,
          stabilityCheck: _v4,
          noopCheck: _v5
        };
      }, [_v0, _v3, _v4, _v5]),
      _v7 = (0, _v5.useMemo)(() => _v0.getState(), [_v0]);
    _v29(() => {
      let {
        subscription: _v0
      } = _v6;
      return _v0.onStateChange = _v0.notifyNestedSubs, _v0.trySubscribe(), _v7 !== _v0.getState() && _v0.notifyNestedSubs(), () => {
        _v0.tryUnsubscribe(), _v0.onStateChange = void 0;
      };
    }, [_v6, _v7]);
    let _v8 = _v1 || _v8;
    return _v5.default.createElement(_v8.Provider, {
      value: _v6
    }, _v2);
  }], 0);
  let _v39 = _v38();
  function _v40(_v0 = _v8) {
    let _v1 = _v0 === _v8 ? _v39 : _v38(_v0);
    return function () {
      return _v1().dispatch;
    };
  }
  _v0.s(["createStoreHook", 0, _v38, "useStore", 0, _v39], 0);
  let _v41 = _v40();
  _v0.s(["createDispatchHook", 0, _v40, "useDispatch", 0, _v41], 0), _v0.s([], 0), _v13(_v2.useSyncExternalStoreWithSelector), _v34(_v1.useSyncExternalStore), _v4 = _v3.unstable_batchedUpdates, _v0.s([], 0);
}