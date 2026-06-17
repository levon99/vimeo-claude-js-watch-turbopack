{
  "use strict";

  let _v3 = _v0.r(0);
  _v1.exports = _v10;
  let _v4 = function () {
    function _v0(_v0) {
      return void 0 !== _v0 && _v0;
    }
    try {
      if ("u" > typeof globalThis) return globalThis;
      return Object.defineProperty(Object.prototype, "globalThis", {
        get: function () {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch (_v0) {
      return _v0(self) || _v0(window) || _v0(this) || {};
    }
  }().console || {};
  function _v5(_v0, _v1) {
    return "silent" === _v0 ? 1 / 0 : _v1.levels.values[_v0];
  }
  let _v6 = Symbol("pino.logFuncs"),
    _v7 = Symbol("pino.hierarchy"),
    _v8 = {
      error: "log",
      fatal: "error",
      warn: "error",
      info: "log",
      debug: "log",
      trace: "log"
    };
  function _v9(_v0, _v1) {
    let _v2 = {
      logger: _v1,
      parent: _v0[_v7]
    };
    _v1[_v7] = _v2;
  }
  function _v10(_v0) {
    var _v1, _v2, _v3;
    let _v4, _v5, _v6;
    (_v0 = _v0 || {}).browser = _v0.browser || {};
    let _v7 = _v0.browser.transmit;
    if (_v7 && "function" != typeof _v7.send) throw Error("pino: transmit option must have a send function");
    let _v8 = _v0.browser.write || _v4;
    _v0.browser.write && (_v0.browser.asObject = !0);
    let _v9 = _v0.serializers || {},
      _v10 = (_v1 = _v0.browser.serialize, Array.isArray(_v1) ? _v1.filter(function (_v0) {
        return "!stdSerializers.err" !== _v0;
      }) : !0 === _v1 && Object.keys(_v9)),
      _v11 = _v0.browser.serialize;
    Array.isArray(_v0.browser.serialize) && _v0.browser.serialize.indexOf("!stdSerializers.err") > -1 && (_v11 = !1);
    let _v12 = Object.keys(_v0.customLevels || {}),
      _v13 = ["error", "fatal", "warn", "info", "debug", "trace"].concat(_v12);
    "function" == typeof _v8 && _v13.forEach(function (_v0) {
      _v8[_v0] = _v8;
    }), (!1 === _v0.enabled || _v0.browser.disabled) && (_v0.level = "silent");
    let _v14 = _v0.level || "info",
      _v15 = Object.create(_v8);
    _v15.log || (_v15.log = _v17), _v4 = {}, _v13.forEach(_v0 => {
      _v4[_v0] = _v8[_v0] ? _v8[_v0] : _v4[_v0] || _v4[_v8[_v0] || "log"] || _v17;
    }), _v15[_v6] = _v4, _v9({}, _v15), Object.defineProperty(_v15, "levelVal", {
      get: function () {
        return _v5(this.level, this);
      }
    }), Object.defineProperty(_v15, "level", {
      get: function () {
        return this._level;
      },
      set: function (_v0) {
        if ("silent" !== _v0 && !this.levels.values[_v0]) throw Error("unknown level " + _v0);
        this._level = _v0, _v11(this, _v16, _v15, "error"), _v11(this, _v16, _v15, "fatal"), _v11(this, _v16, _v15, "warn"), _v11(this, _v16, _v15, "info"), _v11(this, _v16, _v15, "debug"), _v11(this, _v16, _v15, "trace"), _v12.forEach(_v0 => {
          _v11(this, _v16, _v15, _v0);
        });
      }
    });
    let _v16 = {
      transmit: _v7,
      serialize: _v10,
      asObject: _v0.browser.asObject,
      asObjectBindingsOnly: _v0.browser.asObjectBindingsOnly,
      formatters: _v0.browser.formatters,
      levels: _v13,
      timestamp: "function" == typeof (_v2 = _v0).timestamp ? _v2.timestamp : !1 === _v2.timestamp ? _v18 : _v19,
      messageKey: _v0.messageKey || "msg",
      onChild: _v0.onChild || _v17
    };
    function _v17(_v0, _v1, _v2) {
      if (!_v1) throw Error("missing bindings for child Pino");
      _v2 = _v2 || {}, _v10 && _v1.serializers && (_v2.serializers = _v1.serializers);
      let _v3 = _v2.serializers;
      if (_v10 && _v3) {
        var _v4 = Object.assign({}, _v9, _v3),
          _v5 = !0 === _v0.browser.serialize ? Object.keys(_v4) : _v10;
        delete _v1.serializers, _v12([_v1], _v5, _v4, this._stdErrSerialize);
      }
      function _v6(_v0) {
        this._childLevel = (0 | _v0._childLevel) + 1, this.bindings = _v1, _v4 && (this.serializers = _v4, this._serialize = _v5), _v7 && (this._logEvent = _v13([].concat(_v0._logEvent.bindings, _v1)));
      }
      _v6.prototype = this;
      let _v7 = new _v6(this);
      return _v9(this, _v7), _v7.child = function (..._v0) {
        return _v17.call(this, _v0, ..._v0);
      }, _v7.level = _v2.level || this.level, _v0.onChild(_v7), _v7;
    }
    return _v5 = _v0.customLevels || {}, _v15.levels = {
      values: Object.assign({}, _v10.levels.values, _v5),
      labels: Object.assign({}, _v10.levels.labels, (_v6 = {}, Object.keys(_v3 = _v5).forEach(function (_v0) {
        _v6[_v3[_v0]] = _v0;
      }), _v6))
    }, _v15.level = _v14, _v15.isLevelEnabled = function (_v0) {
      return !!this.levels.values[_v0] && this.levels.values[_v0] >= this.levels.values[this.level];
    }, _v15.setMaxListeners = _v15.getMaxListeners = _v15.emit = _v15.addListener = _v15.on = _v15.prependListener = _v15.once = _v15.prependOnceListener = _v15.removeListener = _v15.removeAllListeners = _v15.listeners = _v15.listenerCount = _v15.eventNames = _v15.write = _v15.flush = _v17, _v15.serializers = _v9, _v15._serialize = _v10, _v15._stdErrSerialize = _v11, _v15.child = function (..._v0) {
      return _v17.call(this, _v16, ..._v0);
    }, _v7 && (_v15._logEvent = _v13()), _v15;
  }
  function _v11(_v0, _v1, _v2, _v3) {
    var _v4, _v5, _v6, _v7, _v8, _v9, _v10;
    if (Object.defineProperty(_v0, _v3, {
      value: _v5(_v0.level, _v2) > _v5(_v3, _v2) ? _v17 : _v2[_v6][_v3],
      writable: !0,
      enumerable: !0,
      configurable: !0
    }), _v0[_v3] === _v17) {
      if (!_v1.transmit) return;
      let _v0 = _v5(_v1.transmit.level || _v0.level, _v2);
      if (_v5(_v3, _v2) < _v0) return;
    }
    _v0[_v3] = (_v4 = _v0, _v5 = _v1, _v6 = _v2, _v7 = _v3, _v8 = _v4[_v6][_v7], function () {
      let _v0 = _v5.timestamp(),
        _v1 = Array(arguments.length),
        _v2 = Object.getPrototypeOf && Object.getPrototypeOf(this) === _v4 ? _v4 : this;
      for (var _v3 = 0; _v3 < _v1.length; _v3++) _v1[_v3] = arguments[_v3];
      var _v4 = !1;
      if (_v5.serialize && (_v12(_v1, this._serialize, this.serializers, this._stdErrSerialize), _v4 = !0), _v5.asObject || _v5.formatters ? _v8.call(_v2, ...function (_v0, _v1, _v2, _v3, _v4) {
        let {
            level: _v5,
            log: _v6 = _v0 => _v0
          } = _v4.formatters || {},
          _v7 = _v2.slice(),
          _v8 = _v7[0],
          _v9 = {},
          _v10 = (0 | _v0._childLevel) + 1;
        if (_v10 < 1 && (_v10 = 1), _v3 && (_v9.time = _v3), _v5 ? Object.assign(_v9, _v5(_v1, _v0.levels.values[_v1])) : _v9.level = _v0.levels.values[_v1], _v4.asObjectBindingsOnly) {
          if (null !== _v8 && "object" == typeof _v8) for (; _v10-- && "object" == typeof _v7[0];) Object.assign(_v9, _v7.shift());
          return [_v6(_v9), ..._v7];
        }
        if (null !== _v8 && "object" == typeof _v8) {
          for (; _v10-- && "object" == typeof _v7[0];) Object.assign(_v9, _v7.shift());
          _v8 = _v7.length ? _v3(_v7.shift(), _v7) : void 0;
        } else "string" == typeof _v8 && (_v8 = _v3(_v7.shift(), _v7));
        return void 0 !== _v8 && (_v9[_v4.messageKey] = _v8), [_v6(_v9)];
      }(this, _v7, _v1, _v0, _v5)) : _v8.apply(_v2, _v1), _v5.transmit) {
        let _v0 = _v5.transmit.level || _v4._level,
          _v1 = _v5(_v0, _v6),
          _v2 = _v5(_v7, _v6);
        if (_v2 < _v1) return;
        !function (_v0, _v1, _v2, _v3 = !1) {
          let _v4 = _v1.send,
            _v5 = _v1.ts,
            _v6 = _v1.methodLevel,
            _v7 = _v1.methodValue,
            _v8 = _v1.val,
            _v9 = _v0._logEvent.bindings;
          _v3 || _v12(_v2, _v0._serialize || Object.keys(_v0.serializers), _v0.serializers, void 0 === _v0._stdErrSerialize || _v0._stdErrSerialize), _v0._logEvent.ts = _v5, _v0._logEvent.messages = _v2.filter(function (_v0) {
            return -1 === _v9.indexOf(_v0);
          }), _v0._logEvent.level.label = _v6, _v0._logEvent.level.value = _v7, _v4(_v6, _v0._logEvent, _v8), _v0._logEvent = _v13(_v9);
        }(this, {
          ts: _v0,
          methodLevel: _v7,
          methodValue: _v2,
          transmitLevel: _v0,
          transmitValue: _v6.levels.values[_v5.transmit.level || _v4._level],
          send: _v5.transmit.send,
          val: _v5(_v4._level, _v6)
        }, _v1, _v4);
      }
    });
    let _v11 = function (_v0) {
      let _v1 = [];
      _v0.bindings && _v1.push(_v0.bindings);
      let _v2 = _v0[_v7];
      for (; _v2.parent;) (_v2 = _v2.parent).logger.bindings && _v1.push(_v2.logger.bindings);
      return _v1.reverse();
    }(_v0);
    0 !== _v11.length && (_v0[_v3] = (_v9 = _v11, _v10 = _v0[_v3], function () {
      return _v10.apply(this, [..._v9, ...arguments]);
    }));
  }
  function _v12(_v0, _v1, _v2, _v3) {
    for (let _v0 in _v0) if (_v3 && _v0[_v0] instanceof Error) _v0[_v0] = _v10.stdSerializers.err(_v0[_v0]);else if ("object" == typeof _v0[_v0] && !Array.isArray(_v0[_v0]) && _v1) for (let _v0 in _v0[_v0]) _v1.indexOf(_v0) > -1 && _v0 in _v2 && (_v0[_v0][_v0] = _v2[_v0](_v0[_v0][_v0]));
  }
  function _v13(_v0) {
    return {
      ts: 0,
      messages: [],
      bindings: _v0 || [],
      level: {
        label: "",
        value: 0
      }
    };
  }
  function _v14(_v0) {
    let _v1 = {
      type: _v0.constructor.name,
      msg: _v0.message,
      stack: _v0.stack
    };
    for (let _v0 in _v0) void 0 === _v1[_v0] && (_v1[_v0] = _v0[_v0]);
    return _v1;
  }
  function _v15() {
    return {};
  }
  function _v16(_v0) {
    return _v0;
  }
  function _v17() {}
  function _v18() {
    return !1;
  }
  function _v19() {
    return Date.now();
  }
  _v10.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, _v10.stdSerializers = {
    mapHttpRequest: _v15,
    mapHttpResponse: _v15,
    wrapRequestSerializer: _v16,
    wrapResponseSerializer: _v16,
    wrapErrorSerializer: _v16,
    req: _v15,
    res: _v15,
    err: _v14,
    errWithCause: _v14
  }, _v10.stdTimeFunctions = Object.assign({}, {
    nullTime: _v18,
    epochTime: _v19,
    unixTime: function () {
      return Math.round(Date.now() / 0);
    },
    isoTime: function () {
      return new Date(Date.now()).toISOString();
    }
  }), _v1.exports.default = _v10, _v1.exports.pino = _v10;
}