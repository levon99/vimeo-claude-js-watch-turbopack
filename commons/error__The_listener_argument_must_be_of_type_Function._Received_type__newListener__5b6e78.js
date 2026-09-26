{
  "use strict";

  var _v3,
    _v4 = "object" == typeof Reflect ? Reflect : null,
    _v5 = _v4 && "function" == typeof _v4.apply ? _v4.apply : function (_v0, _v1, _v2) {
      return Function.prototype.apply.call(_v0, _v1, _v2);
    };
  _v3 = _v4 && "function" == typeof _v4.ownKeys ? _v4.ownKeys : Object.getOwnPropertySymbols ? function (_v0) {
    return Object.getOwnPropertyNames(_v0).concat(Object.getOwnPropertySymbols(_v0));
  } : function (_v0) {
    return Object.getOwnPropertyNames(_v0);
  };
  var _v6 = Number.isNaN || function (_v0) {
    return _v0 != _v0;
  };
  function _v7() {
    _v7.init.call(this);
  }
  _v1.exports = _v7, _v1.exports.once = function (_v0, _v1) {
    return new Promise(function (_v0, _v1) {
      var _v2, _v3, _v4;
      function _v5(_v0) {
        _v0.removeListener(_v1, _v6), _v1(_v0);
      }
      function _v6() {
        "function" == typeof _v0.removeListener && _v0.removeListener("error", _v5), _v0([].slice.call(arguments));
      }
      _v17(_v0, _v1, _v6, {
        once: !0
      }), "error" !== _v1 && (_v2 = _v0, _v3 = _v5, _v4 = {
        once: !0
      }, "function" == typeof _v2.on && _v17(_v2, "error", _v3, _v4));
    });
  }, _v7.EventEmitter = _v7, _v7.prototype._events = void 0, _v7.prototype._eventsCount = 0, _v7.prototype._maxListeners = void 0;
  var _v8 = 10;
  function _v9(_v0) {
    if ("function" != typeof _v0) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof _v0);
  }
  function _v10(_v0) {
    return void 0 === _v0._maxListeners ? _v7.defaultMaxListeners : _v0._maxListeners;
  }
  function _v11(_v0, _v1, _v2, _v3) {
    if (_v9(_v2), void 0 === (_v5 = _v0._events) ? (_v5 = _v0._events = Object.create(null), _v0._eventsCount = 0) : (void 0 !== _v5.newListener && (_v0.emit("newListener", _v1, _v2.listener ? _v2.listener : _v2), _v5 = _v0._events), _v6 = _v5[_v1]), void 0 === _v6) _v6 = _v5[_v1] = _v2, ++_v0._eventsCount;else if ("function" == typeof _v6 ? _v6 = _v5[_v1] = _v3 ? [_v2, _v6] : [_v6, _v2] : _v3 ? _v6.unshift(_v2) : _v6.push(_v2), (_v4 = _v10(_v0)) > 0 && _v6.length > _v4 && !_v6.warned) {
      _v6.warned = !0;
      var _v4,
        _v5,
        _v6,
        _v7 = Error("Possible EventEmitter memory leak detected. " + _v6.length + " " + String(_v1) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      _v7.name = "MaxListenersExceededWarning", _v7.emitter = _v0, _v7.type = _v1, _v7.count = _v6.length, console && console.warn && console.warn(_v7);
    }
    return _v0;
  }
  function _v12() {
    if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function _v13(_v0, _v1, _v2) {
    var _v3 = {
        fired: !1,
        wrapFn: void 0,
        target: _v0,
        type: _v1,
        listener: _v2
      },
      _v4 = _v12.bind(_v3);
    return _v4.listener = _v2, _v3.wrapFn = _v4, _v4;
  }
  function _v14(_v0, _v1, _v2) {
    var _v3 = _v0._events;
    if (void 0 === _v3) return [];
    var _v4 = _v3[_v1];
    return void 0 === _v4 ? [] : "function" == typeof _v4 ? _v2 ? [_v4.listener || _v4] : [_v4] : _v2 ? function (_v0) {
      for (var _v1 = Array(_v0.length), _v2 = 0; _v2 < _v1.length; ++_v2) _v1[_v2] = _v0[_v2].listener || _v0[_v2];
      return _v1;
    }(_v4) : _v16(_v4, _v4.length);
  }
  function _v15(_v0) {
    var _v1 = this._events;
    if (void 0 !== _v1) {
      var _v2 = _v1[_v0];
      if ("function" == typeof _v2) return 1;
      if (void 0 !== _v2) return _v2.length;
    }
    return 0;
  }
  function _v16(_v0, _v1) {
    for (var _v2 = Array(_v1), _v3 = 0; _v3 < _v1; ++_v3) _v2[_v3] = _v0[_v3];
    return _v2;
  }
  function _v17(_v0, _v1, _v2, _v3) {
    if ("function" == typeof _v0.on) _v3.once ? _v0.once(_v1, _v2) : _v0.on(_v1, _v2);else if ("function" == typeof _v0.addEventListener) _v0.addEventListener(_v1, function _v0(_v1) {
      _v3.once && _v0.removeEventListener(_v1, _v0), _v2(_v1);
    });else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _v0);
  }
  Object.defineProperty(_v7, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return _v8;
    },
    set: function (_v0) {
      if ("number" != typeof _v0 || _v0 < 0 || _v6(_v0)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _v0 + ".");
      _v8 = _v0;
    }
  }), _v7.init = function () {
    (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, _v7.prototype.setMaxListeners = function (_v0) {
    if ("number" != typeof _v0 || _v0 < 0 || _v6(_v0)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _v0 + ".");
    return this._maxListeners = _v0, this;
  }, _v7.prototype.getMaxListeners = function () {
    return _v10(this);
  }, _v7.prototype.emit = function (_v0) {
    for (var _v1 = [], _v2 = 1; _v2 < arguments.length; _v2++) _v1.push(arguments[_v2]);
    var _v3 = "error" === _v0,
      _v4 = this._events;
    if (void 0 !== _v4) _v3 = _v3 && void 0 === _v4.error;else if (!_v3) return !1;
    if (_v3) {
      if (_v1.length > 0 && (_v5 = _v1[0]), _v5 instanceof Error) throw _v5;
      var _v5,
        _v6 = Error("Unhandled error." + (_v5 ? " (" + _v5.message + ")" : ""));
      throw _v6.context = _v5, _v6;
    }
    var _v7 = _v4[_v0];
    if (void 0 === _v7) return !1;
    if ("function" == typeof _v7) _v5(_v7, this, _v1);else for (var _v8 = _v7.length, _v9 = _v16(_v7, _v8), _v2 = 0; _v2 < _v8; ++_v2) _v5(_v9[_v2], this, _v1);
    return !0;
  }, _v7.prototype.addListener = function (_v0, _v1) {
    return _v11(this, _v0, _v1, !1);
  }, _v7.prototype.on = _v7.prototype.addListener, _v7.prototype.prependListener = function (_v0, _v1) {
    return _v11(this, _v0, _v1, !0);
  }, _v7.prototype.once = function (_v0, _v1) {
    return _v9(_v1), this.on(_v0, _v13(this, _v0, _v1)), this;
  }, _v7.prototype.prependOnceListener = function (_v0, _v1) {
    return _v9(_v1), this.prependListener(_v0, _v13(this, _v0, _v1)), this;
  }, _v7.prototype.removeListener = function (_v0, _v1) {
    var _v2, _v3, _v4, _v5, _v6;
    if (_v9(_v1), void 0 === (_v3 = this._events) || void 0 === (_v2 = _v3[_v0])) return this;
    if (_v2 === _v1 || _v2.listener === _v1) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete _v3[_v0], _v3.removeListener && this.emit("removeListener", _v0, _v2.listener || _v1));else if ("function" != typeof _v2) {
      for (_v4 = -1, _v5 = _v2.length - 1; _v5 >= 0; _v5--) if (_v2[_v5] === _v1 || _v2[_v5].listener === _v1) {
        _v6 = _v2[_v5].listener, _v4 = _v5;
        break;
      }
      if (_v4 < 0) return this;
      0 === _v4 ? _v2.shift() : function (_v0, _v1) {
        for (; _v1 + 1 < _v0.length; _v1++) _v0[_v1] = _v0[_v1 + 1];
        _v0.pop();
      }(_v2, _v4), 1 === _v2.length && (_v3[_v0] = _v2[0]), void 0 !== _v3.removeListener && this.emit("removeListener", _v0, _v6 || _v1);
    }
    return this;
  }, _v7.prototype.off = _v7.prototype.removeListener, _v7.prototype.removeAllListeners = function (_v0) {
    var _v1, _v2, _v3;
    if (void 0 === (_v2 = this._events)) return this;
    if (void 0 === _v2.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== _v2[_v0] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete _v2[_v0]), this;
    if (0 == arguments.length) {
      var _v4,
        _v5 = Object.keys(_v2);
      for (_v3 = 0; _v3 < _v5.length; ++_v3) "removeListener" !== (_v4 = _v5[_v3]) && this.removeAllListeners(_v4);
      return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if ("function" == typeof (_v1 = _v2[_v0])) this.removeListener(_v0, _v1);else if (void 0 !== _v1) for (_v3 = _v1.length - 1; _v3 >= 0; _v3--) this.removeListener(_v0, _v1[_v3]);
    return this;
  }, _v7.prototype.listeners = function (_v0) {
    return _v14(this, _v0, !0);
  }, _v7.prototype.rawListeners = function (_v0) {
    return _v14(this, _v0, !1);
  }, _v7.listenerCount = function (_v0, _v1) {
    return "function" == typeof _v0.listenerCount ? _v0.listenerCount(_v1) : _v15.call(_v0, _v1);
  }, _v7.prototype.listenerCount = _v15, _v7.prototype.eventNames = function () {
    return this._eventsCount > 0 ? _v3(this._events) : [];
  };
}