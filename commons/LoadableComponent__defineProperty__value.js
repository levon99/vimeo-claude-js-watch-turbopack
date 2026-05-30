{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "default", {
    enumerable: !0,
    get: function () {
      return _v12;
    }
  });
  let _v3 = _v0.r(0)._(_v0.r(0)),
    _v4 = _v0.r(0),
    _v5 = [],
    _v6 = [],
    _v7 = !1;
  function _v8(_v0) {
    let _v1 = _v0(),
      _v2 = {
        loading: !0,
        loaded: null,
        error: null
      };
    return _v2.promise = _v1.then(_v0 => (_v2.loading = !1, _v2.loaded = _v0, _v0)).catch(_v0 => {
      throw _v2.loading = !1, _v2.error = _v0, _v0;
    }), _v2;
  }
  class _v9 {
    constructor(_v0, _v1) {
      this._loadFn = _v0, this._opts = _v1, this._callbacks = new Set(), this._delay = null, this._timeout = null, this.retry();
    }
    promise() {
      return this._res.promise;
    }
    retry() {
      this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
        pastDelay: !1,
        timedOut: !1
      };
      let {
        _res: _v0,
        _opts: _v1
      } = this;
      _v0.loading && ("number" == typeof _v1.delay && (0 === _v1.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
        this._update({
          pastDelay: !0
        });
      }, _v1.delay)), "number" == typeof _v1.timeout && (this._timeout = setTimeout(() => {
        this._update({
          timedOut: !0
        });
      }, _v1.timeout))), this._res.promise.then(() => {
        this._update({}), this._clearTimeouts();
      }).catch(_v0 => {
        this._update({}), this._clearTimeouts();
      }), this._update({});
    }
    _update(_v0) {
      this._state = {
        ...this._state,
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading,
        ..._v0
      }, this._callbacks.forEach(_v0 => _v0());
    }
    _clearTimeouts() {
      clearTimeout(this._delay), clearTimeout(this._timeout);
    }
    getCurrentValue() {
      return this._state;
    }
    subscribe(_v0) {
      return this._callbacks.add(_v0), () => {
        this._callbacks.delete(_v0);
      };
    }
  }
  function _v10(_v0) {
    return function (_v0, _v1) {
      let _v2 = Object.assign({
          loader: null,
          loading: null,
          delay: 200,
          timeout: null,
          webpack: null,
          modules: null
        }, _v1),
        _v3 = null;
      function _v4() {
        if (!_v3) {
          let _v0 = new _v9(_v0, _v2);
          _v3 = {
            getCurrentValue: _v0.getCurrentValue.bind(_v0),
            subscribe: _v0.subscribe.bind(_v0),
            retry: _v0.retry.bind(_v0),
            promise: _v0.promise.bind(_v0)
          };
        }
        return _v3.promise();
      }
      if ("u" < typeof window && _v5.push(_v4), !_v7 && "u" > typeof window) {
        let _v0 = _v2.webpack && "function" == typeof _v0.t.resolveWeak ? _v2.webpack() : _v2.modules;
        _v0 && _v6.push(_v0 => {
          for (let _v0 of _v0) if (_v0.includes(_v0)) return _v4();
        });
      }
      function _v5(_v0, _v1) {
        let _v2;
        _v4(), (_v2 = _v3.default.useContext(_v4.LoadableContext)) && Array.isArray(_v2.modules) && _v2.modules.forEach(_v0 => {
          _v2(_v0);
        });
        let _v3 = _v3.default.useSyncExternalStore(_v3.subscribe, _v3.getCurrentValue, _v3.getCurrentValue);
        return _v3.default.useImperativeHandle(_v1, () => ({
          retry: _v3.retry
        }), []), _v3.default.useMemo(() => {
          var _v0;
          return _v3.loading || _v3.error ? _v3.default.createElement(_v2.loading, {
            isLoading: _v3.loading,
            pastDelay: _v3.pastDelay,
            timedOut: _v3.timedOut,
            error: _v3.error,
            retry: _v3.retry
          }) : _v3.loaded ? _v3.default.createElement((_v0 = _v3.loaded) && _v0.default ? _v0.default : _v0, _v0) : null;
        }, [_v0, _v3]);
      }
      return _v5.preload = () => _v4(), _v5.displayName = "LoadableComponent", _v3.default.forwardRef(_v5);
    }(_v8, _v0);
  }
  function _v11(_v0, _v1) {
    let _v2 = [];
    for (; _v0.length;) {
      let _v0 = _v0.pop();
      _v2.push(_v0(_v1));
    }
    return Promise.all(_v2).then(() => {
      if (_v0.length) return _v11(_v0, _v1);
    });
  }
  _v10.preloadAll = () => new Promise((_v0, _v1) => {
    _v11(_v5).then(_v0, _v1);
  }), _v10.preloadReady = (_v0 = []) => new Promise(_v0 => {
    let _v1 = () => (_v7 = !0, _v0());
    _v11(_v6, _v0).then(_v1, _v1);
  }), "u" > typeof window && (window.__NEXT_PRELOADREADY = _v10.preloadReady);
  let _v12 = _v10;
}