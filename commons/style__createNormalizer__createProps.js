{
  "use strict";

  function _v1(_v0) {
    return new Proxy({}, {
      get: (_v0, _v1) => "style" === _v1 ? _v0 => _v0({
        style: _v0
      }).style : _v0
    });
  }
  _v0.s(["createNormalizer", 0, _v1, "createProps", 0, () => _v0 => Array.from(new Set(_v0))], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = void 0 !== globalThis.document ? _v4.useLayoutEffect : _v4.useEffect;
  function _v7(_v0) {
    let _v1 = _v0().value ?? _v0().defaultValue,
      _v2 = _v0().isEqual ?? Object.is,
      [_v3] = (0, _v4.useState)(_v1),
      [_v4, _v5] = (0, _v4.useState)(_v3),
      _v6 = void 0 !== _v0().value,
      _v7 = (0, _v4.useRef)(_v4);
    _v7.current = _v6 ? _v0().value : _v4;
    let _v8 = (0, _v4.useRef)(_v7.current);
    return _v6(() => {
      _v8.current = _v7.current;
    }, [_v4, _v0().value]), {
      initial: _v3,
      ref: _v7,
      get: function () {
        return _v6 ? _v0().value : _v4;
      },
      set(_v0) {
        (_v0().sync ? _v5.flushSync : _v3.identity)(() => {
          let _v0, _v1;
          return _v0 = _v8.current, _v1 = (0, _v3.isFunction)(_v0) ? _v0(_v0) : _v0, void (_v0().debug && console.log(`[bindable > ${_v0().debug}] setValue`, {
            next: _v1,
            prev: _v0
          }), !_v6 && _v5(_v1), !_v2(_v1, _v0) && _v0().onChange?.(_v1, _v0));
        });
      },
      invoke(_v0, _v1) {
        _v0().onChange?.(_v0, _v1);
      },
      hash: _v0 => _v0().hash?.(_v0) ?? String(_v0)
    };
  }
  _v7.cleanup = _v0 => {
    (0, _v4.useEffect)(() => _v0, []);
  }, _v7.ref = _v0 => {
    let _v1 = (0, _v4.useRef)(_v0);
    return {
      get: () => _v1.current,
      set: _v0 => {
        _v1.current = _v0;
      }
    };
  };
  var _v8 = (_v0, _v1) => {
    let _v2 = (0, _v4.useRef)(!1),
      _v3 = (0, _v4.useRef)(!1);
    (0, _v4.useEffect)(() => {
      if (_v2.current && _v3.current) return _v1();
      _v3.current = !0;
    }, [...(_v0 ?? []).map(_v0 => "function" == typeof _v0 ? _v0() : _v0)]), (0, _v4.useEffect)(() => (_v2.current = !0, () => {
      _v2.current = !1;
    }), []);
  };
  function _v9(_v0) {
    let _v1 = (0, _v4.useRef)(_v0);
    return _v1.current = _v0, _v1;
  }
  function _v10(_v0) {
    queueMicrotask(() => {
      (0, _v5.flushSync)(() => _v0());
    });
  }
  var _v11 = _v1(_v0 => _v0);
  _v0.s(["normalizeProps", 0, _v11, "useMachine", 0, function (_v0, _v1 = {}) {
    var _v2;
    let _v3,
      _v4,
      _v5 = (0, _v4.useMemo)(() => {
        let {
          id: _v0,
          ids: _v1,
          getRootNode: _v2
        } = _v1;
        return (0, _v2.createScope)({
          id: _v0,
          ids: _v1,
          getRootNode: _v2
        });
      }, [_v1]),
      _v6 = (..._v0) => {
        _v0.debug && console.log(..._v0);
      },
      _v7 = (_v3 = _v9(_v0.props?.({
        props: (0, _v3.compact)(_v1),
        scope: _v5
      }) ?? _v1), function (_v0) {
        return _v3.current[_v0];
      }),
      _v8 = _v9(_v0.context?.({
        prop: _v7,
        bindable: _v7,
        scope: _v5,
        flush: _v10,
        getContext: () => _v9,
        getComputed: () => _v22,
        getRefs: () => _v16
      })),
      _v9 = {
        get: _v0 => _v8.current?.[_v0].ref.current,
        set(_v0, _v1) {
          _v8.current?.[_v0].set(_v1);
        },
        initial: _v0 => _v8.current?.[_v0].initial,
        hash(_v0) {
          let _v1 = _v8.current?.[_v0].get();
          return _v8.current?.[_v0].hash(_v1);
        }
      },
      _v10 = (0, _v4.useRef)(new Map()),
      _v11 = (0, _v4.useRef)(null),
      _v12 = (0, _v4.useRef)(null),
      _v13 = (0, _v4.useRef)({
        type: ""
      }),
      _v14 = () => ({
        ..._v13.current,
        current: () => _v13.current,
        previous: () => _v12.current
      }),
      _v15 = () => ({
        ..._v23,
        matches: (..._v0) => _v0.includes(_v23.ref.current),
        hasTag: _v0 => !!_v0.states[_v23.ref.current]?.tags?.includes(_v0)
      }),
      _v16 = (_v2 = _v0.refs?.({
        prop: _v7,
        context: _v9
      }) ?? {}, _v4 = (0, _v4.useRef)(_v2), {
        get: _v0 => _v4.current[_v0],
        set(_v0, _v1) {
          _v4.current[_v0] = _v1;
        }
      }),
      _v17 = () => ({
        state: _v15(),
        context: _v9,
        event: _v14(),
        prop: _v7,
        send: _v26,
        action: _v18,
        guard: _v19,
        track: _v8,
        refs: _v16,
        computed: _v22,
        flush: _v10,
        scope: _v5,
        choose: _v21
      }),
      _v18 = _v0 => {
        let _v1 = (0, _v3.isFunction)(_v0) ? _v0(_v17()) : _v0;
        if (_v1) for (let _v0 of _v1.map(_v0 => {
          let _v1 = _v0.implementations?.actions?.[_v0];
          return _v1 || (0, _v3.warn)(`[zag-js] No implementation found for action "${JSON.stringify(_v0)}"`), _v1;
        })) _v0?.(_v17());
      },
      _v19 = _v0 => (0, _v3.isFunction)(_v0) ? _v0(_v17()) : _v0.implementations?.guards?.[_v0](_v17()),
      _v20 = _v0 => {
        let _v1 = (0, _v3.isFunction)(_v0) ? _v0(_v17()) : _v0;
        if (!_v1) return;
        let _v2 = _v1.map(_v0 => {
            let _v1 = _v0.implementations?.effects?.[_v0];
            return _v1 || (0, _v3.warn)(`[zag-js] No implementation found for effect "${JSON.stringify(_v0)}"`), _v1;
          }),
          _v3 = [];
        for (let _v0 of _v2) {
          let _v0 = _v0?.(_v17());
          _v0 && _v3.push(_v0);
        }
        return () => _v3.forEach(_v0 => _v0?.());
      },
      _v21 = _v0 => (0, _v3.toArray)(_v0).find(_v0 => {
        let _v1 = !_v0.guard;
        return (0, _v3.isString)(_v0.guard) ? _v1 = !!_v19(_v0.guard) : (0, _v3.isFunction)(_v0.guard) && (_v1 = _v0.guard(_v17())), _v1;
      }),
      _v22 = _v0 => ((0, _v3.ensure)(_v0.computed, () => "[zag-js] No computed object found on machine"), (0, _v0.computed[_v0])({
        context: _v9,
        event: _v14(),
        prop: _v7,
        refs: _v16,
        scope: _v5,
        computed: _v22
      })),
      _v23 = _v7(() => ({
        defaultValue: _v0.initialState({
          prop: _v7
        }),
        onChange(_v0, _v1) {
          if (_v1) {
            let _v0 = _v10.current.get(_v1);
            _v0?.(), _v10.current.delete(_v1);
          }
          _v1 && _v18(_v0.states[_v1]?.exit), _v18(_v11.current?.actions);
          let _v2 = _v20(_v0.states[_v0]?.effects);
          if (_v2 && _v10.current.set(_v0, _v2), _v1 === _v2.INIT_STATE) {
            _v18(_v0.entry);
            let _v0 = _v20(_v0.effects);
            _v0 && _v10.current.set(_v2.INIT_STATE, _v0);
          }
          _v18(_v0.states[_v0]?.entry);
        }
      })),
      _v24 = (0, _v4.useRef)(void 0),
      _v25 = (0, _v4.useRef)(_v2.MachineStatus.NotStarted);
    _v6(() => {
      queueMicrotask(() => {
        let _v0 = _v25.current === _v2.MachineStatus.Started;
        _v25.current = _v2.MachineStatus.Started, _v6(_v0 ? "rehydrating..." : "initializing...");
        let _v1 = _v24.current ?? _v23.initial;
        _v23.invoke(_v1, _v0 ? _v23.get() : _v2.INIT_STATE);
      });
      let _v0 = _v10.current,
        _v1 = _v23.ref.current;
      return () => {
        _v6("unmounting..."), _v24.current = _v1, _v25.current = _v2.MachineStatus.Stopped, _v0.forEach(_v0 => _v0?.()), _v10.current = new Map(), _v11.current = null, queueMicrotask(() => {
          _v18(_v0.exit);
        });
      };
    }, []);
    let _v26 = _v0 => {
      queueMicrotask(() => {
        if (_v25.current !== _v2.MachineStatus.Started) return;
        _v12.current = _v13.current, _v13.current = _v0, _v6("send", _v0);
        let _v0 = "ref" in _v23 ? _v23.ref.current : _v23.get(),
          _v1 = _v21(_v0.states[_v0].on?.[_v0.type] ?? _v0.on?.[_v0.type]);
        if (!_v1) return;
        _v11.current = _v1;
        let _v2 = _v1.target ?? _v0;
        _v6("transition", _v1);
        let _v3 = _v2 !== _v0;
        _v3 ? (0, _v5.flushSync)(() => _v23.set(_v2)) : _v1.reenter && !_v3 ? _v23.invoke(_v0, _v0) : _v18(_v1.actions ?? []);
      });
    };
    return _v0.watch?.(_v17()), {
      state: _v15(),
      send: _v26,
      context: _v9,
      prop: _v7,
      scope: _v5,
      refs: _v16,
      computed: _v22,
      event: _v14(),
      getStatus: () => _v25.current
    };
  }], 0);
}