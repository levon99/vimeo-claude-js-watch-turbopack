{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0, _v1, _v2) {
    let _v3 = _v0.flushCapabilities();
    _v3.length && (0, _v3.fetchAndFormatCapabilties)({
      capabilities: _v3,
      ..._v2
    }).then(_v0 => {
      _v1.update(_v0);
      let _v1 = _v3.filter(_v0 => "queued" === _v1.currentCapabilities[_v0]);
      _v1.length && _v1.remove(_v1), _v0.resolveSubscribers(_v1);
    }).catch(_v0 => {
      _v1.remove(_v3), _v0.rejectSubscribers(_v0, _v3);
    });
  }
  function _v5(_v0, _v1) {
    switch (_v1.type) {
      case "LOADING":
        return {
          loading: !0,
          error: null,
          ready: !1
        };
      case "SUCCESS":
        return {
          loading: !1,
          error: null,
          ready: !0
        };
      case "ERROR":
        return {
          loading: !1,
          error: _v1.error,
          ready: !0
        };
      default:
        return _v0;
    }
  }
  _v0.s(["executeBatch", 0, _v4], 0);
  class _v6 {
    currentCapabilities;
    constructor() {
      this.currentCapabilities = {};
    }
    update(_v0) {
      this.currentCapabilities = {
        ...this.currentCapabilities,
        ..._v0
      };
    }
    remove(_v0) {
      for (let _v0 of _v0) delete this.currentCapabilities[_v0];
    }
    getAll() {
      let _v0 = {};
      for (let [_v0, _v1] of Object.entries(this.currentCapabilities)) "boolean" == typeof _v1 && (_v0[_v0] = _v1);
      return _v0;
    }
  }
  class _v7 {
    batchTimeoutId;
    capabilities;
    subscribers;
    constructor() {
      this.capabilities = new Set(), this.subscribers = [];
    }
    addCapabilities(_v0) {
      _v0.forEach(_v0 => this.capabilities.add(_v0));
    }
    addSubscriber(_v0, _v1) {
      let _v2 = this.subscribers.find(_v0 => _v0.dispatch === _v0);
      _v2 ? _v2.capabilities = [..._v1] : this.subscribers.push({
        dispatch: _v0,
        capabilities: [..._v1]
      });
    }
    getCapabilities() {
      return Array.from(this.capabilities);
    }
    scheduleBatch(_v0) {
      null == this.batchTimeoutId && (this.batchTimeoutId = setTimeout(() => {
        this.batchTimeoutId = void 0, _v0();
      }, 50));
    }
    flushCapabilities() {
      let _v0 = Array.from(this.capabilities);
      return this.capabilities = new Set(), _v0;
    }
    resolveSubscribers(_v0) {
      let _v1 = [];
      for (let _v0 of this.subscribers) _v0.capabilities.every(_v0 => "queued" !== _v0.currentCapabilities[_v0]) ? _v0.dispatch({
        type: "SUCCESS"
      }) : _v1.push(_v0);
      this.subscribers = _v1;
    }
    rejectSubscribers(_v0, _v1) {
      let _v2 = new Set(_v1),
        _v3 = [];
      for (let _v0 of this.subscribers) _v0.capabilities.some(_v0 => _v2.has(_v0)) ? _v0.dispatch({
        type: "ERROR",
        error: _v0
      }) : _v3.push(_v0);
      this.subscribers = _v3;
    }
    clearTimeout() {
      clearTimeout(this.batchTimeoutId), this.batchTimeoutId = void 0;
    }
    clear() {
      this.clearTimeout(), this.capabilities = new Set(), this.subscribers = [];
    }
  }
  var _v8 = _v0.i(0);
  let _v9 = new class {
    users;
    constructor() {
      this.users = {};
    }
    setCache(_v0) {
      this.users[_v0] = {
        capabilitiesCache: new _v6(),
        queuedRequest: new _v7()
      };
    }
    getQueuedRequest(_v0) {
      return null == _v0 ? null : (this.users[_v0] || this.setCache(_v0), this.users[_v0].queuedRequest);
    }
    getCapabilities(_v0) {
      return null == _v0 ? null : (this.users[_v0] || this.setCache(_v0), this.users[_v0].capabilitiesCache);
    }
  }();
  _v0.s(["useCapability", 0, function (_v0, _v1) {
    var _v2;
    let _v3,
      _v4 = (0, _v1.useContext)(_v2.ViewerContext),
      _v5 = null != _v1 ? (0, _v8.getUserId)(`${_v1}`) : _v4?.user?.id,
      [_v6, _v7] = (0, _v1.useReducer)(_v5, {
        loading: !1,
        error: null,
        ready: !1
      }),
      _v8 = _v9.getQueuedRequest(_v5),
      _v9 = _v9.getCapabilities(_v5),
      _v10 = ((_v3 = (0, _v1.useRef)(void 0)).current && (_v2 = _v3.current, _v2.length === _v0.length && _v2.every((_v0, _v1) => _v0 === _v0[_v1])) || (_v3.current = _v0), _v3.current);
    return (0, _v1.useEffect)(() => {
      if (!_v4 || !_v5 || !_v9 || !_v8) return;
      let {
        missing: _v0,
        queued: _v1
      } = (0, _v8.getCapabilitiesByStatus)(_v10, _v9);
      _v0.length || _v1.length ? (_v8.addSubscriber(_v7, _v10), _v7({
        type: "LOADING"
      }), _v0.length && (_v0.forEach(_v0 => {
        _v9.update({
          [_v0]: "queued"
        });
      }), _v8.addCapabilities(_v0), _v8.scheduleBatch(() => _v4(_v8, _v9, {
        userId: _v5,
        jwt: _v4.jwt,
        apiUrl: _v4.apiUrl
      })))) : _v7({
        type: "SUCCESS"
      });
    }, [_v9, _v8, _v10, _v5, _v4]), {
      capabilities: _v9?.getAll() ?? _v0.reduce((_v0, _v1) => (_v0[_v1] = !1, _v0), {}),
      loading: _v6.loading,
      error: _v6.error,
      ready: _v6.ready
    };
  }, "userCache", 0, _v9], 0);
}