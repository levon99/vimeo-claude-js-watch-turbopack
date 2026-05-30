{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v5 = _v5,
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = () => {},
    _v15 = _v14(),
    _v16 = Object,
    _v17 = _v0 => _v0 === _v15,
    _v18 = new WeakMap(),
    _v19 = (_v0, _v1) => _v0 === `[object ${_v1}]`,
    _v20 = 0,
    _v21 = _v0 => {
      let _v1,
        _v2,
        _v3 = typeof _v0,
        _v4 = _v16.prototype.toString.call(_v0),
        _v5 = _v19(_v4, "Date"),
        _v6 = _v19(_v4, "RegExp"),
        _v7 = _v19(_v4, "Object");
      if (_v16(_v0) !== _v0 || _v5 || _v6) _v1 = _v5 ? _v0.toJSON() : "symbol" == _v3 ? _v0.toString() : "string" == _v3 ? JSON.stringify(_v0) : "" + _v0;else {
        if (_v1 = _v18.get(_v0)) return _v1;
        if (_v1 = ++_v20 + "~", _v18.set(_v0, _v1), Array.isArray(_v0)) {
          for (_v2 = 0, _v1 = "@"; _v2 < _v0.length; _v2++) _v1 += _v21(_v0[_v2]) + ",";
          _v18.set(_v0, _v1);
        }
        if (_v7) {
          _v1 = "#";
          let _v0 = _v16.keys(_v0).sort();
          for (; !_v17(_v2 = _v0.pop());) _v17(_v0[_v2]) || (_v1 += _v2 + ":" + _v21(_v0[_v2]) + ",");
          _v18.set(_v0, _v1);
        }
      }
      return _v1;
    },
    _v22 = Promise.resolve(),
    _v23 = (0, _v3.withMiddleware)(_v2.default, _v0 => (_v0, _v1, _v2) => {
      let _v3,
        _v4 = (0, _v1.useRef)(!1),
        {
          cache: _v5,
          initialSize: _v6 = 1,
          revalidateAll: _v7 = !1,
          persistSize: _v8 = !1,
          revalidateFirstPage: _v9 = !0,
          revalidateOnMount: _v10 = !1,
          parallel: _v11 = !1
        } = _v2,
        [,,, _v12] = _v4.SWRGlobalState.get(_v5.c);
      try {
        (_v3 = (_v0 => {
          if ("function" == typeof _v0) try {
            _v0 = _v0();
          } catch (_v0) {
            _v0 = "";
          }
          let _v1 = _v0;
          return [_v0 = "string" == typeof _v0 ? _v0 : (Array.isArray(_v0) ? _v0.length : _v0) ? _v21(_v0) : "", _v1];
        })(_v0 ? _v0(0, null) : null)[0]) && (_v3 = _v6.INFINITE_PREFIX + _v3);
      } catch (_v0) {}
      let [_v13, _v14, _v15] = (0, _v7.createCacheHelper)(_v5, _v3),
        _v16 = (0, _v1.useCallback)(() => (0, _v8.isUndefined)(_v13()._l) ? _v6 : _v13()._l, [_v5, _v3, _v6]);
      (0, _v13.useSyncExternalStore)((0, _v1.useCallback)(_v0 => _v3 ? _v15(_v3, () => {
        _v0();
      }) : () => {}, [_v5, _v3]), _v16, _v16);
      let _v17 = (0, _v1.useCallback)(() => {
          let _v0 = _v13()._l;
          return (0, _v8.isUndefined)(_v0) ? _v6 : _v0;
        }, [_v3, _v6]),
        _v18 = (0, _v1.useRef)(_v17());
      (0, _v9.useIsomorphicLayoutEffect)(() => {
        if (!_v4.current) {
          _v4.current = !0;
          return;
        }
        _v3 && _v14({
          _l: _v8 ? _v18.current : _v17()
        });
      }, [_v3, _v5]);
      let _v19 = _v10 && !_v4.current,
        _v20 = _v0(_v3, async _v0 => {
          let _v1 = _v13()._i,
            _v2 = _v13()._r;
          _v14({
            _r: _v10.UNDEFINED
          });
          let _v3 = [],
            _v4 = _v17(),
            [_v5] = (0, _v7.createCacheHelper)(_v5, _v0),
            _v6 = _v5().data,
            _v7 = [],
            _v8 = null;
          for (let _v0 = 0; _v0 < _v4; ++_v0) {
            let [_v0, _v1] = (0, _v11.serialize)(_v0(_v0, _v11 ? null : _v8));
            if (!_v0) break;
            let [_v2, _v3] = (0, _v7.createCacheHelper)(_v5, _v0),
              _v4 = _v2().data,
              _v5 = _v7 || _v1 || (0, _v8.isUndefined)(_v4) || _v9 && !_v0 && !(0, _v8.isUndefined)(_v6) || _v19 || _v6 && !(0, _v8.isUndefined)(_v6[_v0]) && !_v2.compare(_v6[_v0], _v4);
            if (_v1 && ("function" == typeof _v2 ? _v2(_v4, _v1) : _v5)) {
              let _v0 = async () => {
                if (_v0 in _v12) {
                  let _v0 = _v12[_v0];
                  delete _v12[_v0], _v4 = await _v0;
                } else _v4 = await _v1(_v1);
                _v3({
                  data: _v4,
                  _k: _v1
                }), _v3[_v0] = _v4;
              };
              _v11 ? _v7.push(_v0) : await _v0();
            } else _v3[_v0] = _v4;
            _v11 || (_v8 = _v4);
          }
          return _v11 && (await Promise.all(_v7.map(_v0 => _v0()))), _v14({
            _i: _v10.UNDEFINED
          }), _v3;
        }, _v2),
        _v21 = (0, _v1.useCallback)(function (_v0, _v1) {
          let _v2 = "boolean" == typeof _v1 ? {
              revalidate: _v1
            } : _v1 || {},
            _v3 = !1 !== _v2.revalidate;
          return _v3 ? (_v3 && ((0, _v8.isUndefined)(_v0) ? _v14({
            _i: !0,
            _r: _v2.revalidate
          }) : _v14({
            _i: !1,
            _r: _v2.revalidate
          })), arguments.length ? _v20.mutate(_v0, {
            ..._v2,
            revalidate: _v3
          }) : _v20.mutate()) : _v22;
        }, [_v3, _v5]),
        _v22 = (0, _v1.useCallback)(_v0 => {
          let _v1;
          if (!_v3) return _v22;
          let [, _v2] = (0, _v7.createCacheHelper)(_v5, _v3);
          if ((0, _v12.isFunction)(_v0) ? _v1 = _v0(_v17()) : "number" == typeof _v0 && (_v1 = _v0), "number" != typeof _v1) return _v22;
          _v2({
            _l: _v1
          }), _v18.current = _v1;
          let _v3 = [],
            [_v4] = (0, _v7.createCacheHelper)(_v5, _v3),
            _v5 = null;
          for (let _v0 = 0; _v0 < _v1; ++_v0) {
            let [_v0] = (0, _v11.serialize)(_v0(_v0, _v5)),
              [_v1] = (0, _v7.createCacheHelper)(_v5, _v0),
              _v2 = _v0 ? _v1().data : _v10.UNDEFINED;
            if ((0, _v8.isUndefined)(_v2)) return _v21(_v4().data);
            _v3.push(_v2), _v5 = _v2;
          }
          return _v21(_v3);
        }, [_v3, _v5, _v21, _v17]);
      return {
        size: _v17(),
        setSize: _v22,
        mutate: _v21,
        get data() {
          return _v20.data;
        },
        get error() {
          return _v20.error;
        },
        get isValidating() {
          return _v20.isValidating;
        },
        get isLoading() {
          return _v20.isLoading;
        }
      };
    });
  _v0.s(["default", 0, _v23], 0);
}