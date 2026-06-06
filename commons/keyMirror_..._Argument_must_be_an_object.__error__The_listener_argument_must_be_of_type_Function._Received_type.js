{
  _v0.e, _v1.exports = function () {
    var _v0 = [function (_v0, _v1, _v2) {
        "use strict";

        var _v3 = this && this.__createBinding || (Object.create ? function (_v0, _v1, _v2, _v3) {
            void 0 === _v3 && (_v3 = _v2);
            var _v4 = Object.getOwnPropertyDescriptor(_v1, _v2);
            _v4 && !("get" in _v4 ? !_v1.__esModule : _v4.writable || _v4.configurable) || (_v4 = {
              enumerable: !0,
              get: function () {
                return _v1[_v2];
              }
            }), Object.defineProperty(_v0, _v3, _v4);
          } : function (_v0, _v1, _v2, _v3) {
            void 0 === _v3 && (_v3 = _v2), _v0[_v3] = _v1[_v2];
          }),
          _v4 = this && this.__exportStar || function (_v0, _v1) {
            for (var _v2 in _v0) "default" === _v2 || Object.prototype.hasOwnProperty.call(_v1, _v2) || _v3(_v1, _v0, _v2);
          };
        Object.defineProperty(_v1, "__esModule", {
          value: !0
        }), _v4(_v2(13), _v1), _v4(_v2(5), _v1);
      }, function (_v0, _v1, _v2) {
        "use strict";

        _v0.exports = function (_v0) {
          var _v1,
            _v2 = {};
          if (!(_v0 instanceof Object) || Array.isArray(_v0)) throw Error("keyMirror(...): Argument must be an object.");
          for (_v1 in _v0) _v0.hasOwnProperty(_v1) && (_v2[_v1] = _v1);
          return _v2;
        };
      }, function (_v0, _v1, _v2) {
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
        _v0.exports = _v7, _v0.exports.once = function (_v0, _v1) {
          return new Promise(function (_v0, _v1) {
            function _v2(_v0) {
              _v0.removeListener(_v1, _v3), _v1(_v0);
            }
            function _v3() {
              "function" == typeof _v0.removeListener && _v0.removeListener("error", _v2), _v0([].slice.call(arguments));
            }
            _v17(_v0, _v1, _v3, {
              once: !0
            }), "error" !== _v1 && "function" == typeof _v0.on && _v17(_v0, "error", _v2, {
              once: !0
            });
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
          var _v4, _v5, _v6;
          if (_v9(_v2), void 0 === (_v5 = _v0._events) ? (_v5 = _v0._events = Object.create(null), _v0._eventsCount = 0) : (void 0 !== _v5.newListener && (_v0.emit("newListener", _v1, _v2.listener ? _v2.listener : _v2), _v5 = _v0._events), _v6 = _v5[_v1]), void 0 === _v6) _v6 = _v5[_v1] = _v2, ++_v0._eventsCount;else if ("function" == typeof _v6 ? _v6 = _v5[_v1] = _v3 ? [_v2, _v6] : [_v6, _v2] : _v3 ? _v6.unshift(_v2) : _v6.push(_v2), (_v4 = _v10(_v0)) > 0 && _v6.length > _v4 && !_v6.warned) {
            _v6.warned = !0;
            var _v7 = Error("Possible EventEmitter memory leak detected. " + _v6.length + " " + String(_v1) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            _v7.name = "MaxListenersExceededWarning", _v7.emitter = _v0, _v7.type = _v1, _v7.count = _v6.length, console && console.warn && console.warn(_v7);
          }
          return _v0;
        }
        function _v12() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
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
          if ("function" == typeof _v0.on) _v3.once ? _v0.once(_v1, _v2) : _v0.on(_v1, _v2);else {
            if ("function" != typeof _v0.addEventListener) throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _v0);
            _v0.addEventListener(_v1, function _v0(_v1) {
              _v3.once && _v0.removeEventListener(_v1, _v0), _v2(_v1);
            });
          }
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
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
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
          if ("function" == typeof _v7) _v5(_v7, this, _v1);else {
            var _v8 = _v7.length,
              _v9 = _v16(_v7, _v8);
            for (_v2 = 0; _v2 < _v8; ++_v2) _v5(_v9[_v2], this, _v1);
          }
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
      }, function (_v0, _v1, _v2) {
        "use strict";

        Object.defineProperty(_v1, "__esModule", {
          value: !0
        }), _v1.Envelope = void 0;
        var _v3 = _v2(4),
          _v4 = _v2(17);
        _v1.Envelope = function () {
          function _v0(_v0, _v1) {
            this.event = _v0, this.eid = (0, _v4.v4)(), this.ts_ms = Date.now(), this.created_at = Date.now(), this._tracker = new _v3.Tracker(), this._globalBPO = _v1;
          }
          return Object.defineProperty(_v0.prototype, "tracker", {
            get: function () {
              return this._tracker;
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(_v0.prototype, "global", {
            get: function () {
              return this._globalBPO;
            },
            enumerable: !1,
            configurable: !0
          }), _v0.getAttributeTypeMap = function () {
            return _v0.attributeTypeMap;
          }, _v0.attributeTypeMap = [{
            name: "eid",
            baseName: "eid",
            type: "string"
          }, {
            name: "ts_ms",
            baseName: "ts_ms",
            type: "number"
          }, {
            name: "created_at",
            baseName: "created_at",
            type: "number"
          }, {
            name: "event",
            baseName: "event",
            type: "Event"
          }, {
            name: "global",
            baseName: "global",
            type: "Event"
          }, {
            name: "tracker",
            baseName: "tracker",
            type: "Tracker"
          }], _v0;
        }();
      }, function (_v0, _v1, _v2) {
        "use strict";

        Object.defineProperty(_v1, "__esModule", {
          value: !0
        }), _v1.Tracker = void 0, _v1.Tracker = function () {
          function _v0() {}
          return _v0.getAttributeTypeMap = function () {
            return _v0.attributeTypeMap;
          }, _v0.attributeTypeMap = [{
            name: "name",
            baseName: "name",
            type: "string"
          }, {
            name: "version",
            baseName: "version",
            type: "string"
          }], _v0;
        }();
      }, function (_v0, _v1, _v2) {
        "use strict";

        var _v3 = this && this.__createBinding || (Object.create ? function (_v0, _v1, _v2, _v3) {
            void 0 === _v3 && (_v3 = _v2);
            var _v4 = Object.getOwnPropertyDescriptor(_v1, _v2);
            _v4 && !("get" in _v4 ? !_v1.__esModule : _v4.writable || _v4.configurable) || (_v4 = {
              enumerable: !0,
              get: function () {
                return _v1[_v2];
              }
            }), Object.defineProperty(_v0, _v3, _v4);
          } : function (_v0, _v1, _v2, _v3) {
            void 0 === _v3 && (_v3 = _v2), _v0[_v3] = _v1[_v2];
          }),
          _v4 = this && this.__exportStar || function (_v0, _v1) {
            for (var _v2 in _v0) "default" === _v2 || Object.prototype.hasOwnProperty.call(_v1, _v2) || _v3(_v1, _v0, _v2);
          };
        Object.defineProperty(_v1, "__esModule", {
          value: !0
        }), _v1.ObjectSerializer = void 0, _v4(_v2(3), _v1), _v4(_v2(6), _v1), _v4(_v2(7), _v1), _v4(_v2(4), _v1), _v4(_v2(14), _v1);
        var _v5 = _v2(3),
          _v6 = _v2(6),
          _v7 = _v2(7),
          _v8 = _v2(4),
          _v9 = ["string", "boolean", "double", "integer", "long", "float", "number", "any"],
          _v10 = {},
          _v11 = {
            Envelope: _v5.Envelope,
            Event: _v6.Event,
            Tracker: _v8.Tracker,
            EventContext: _v7.EventContext
          };
        _v1.ObjectSerializer = function () {
          function _v0() {}
          return _v0.findCorrectType = function (_v0, _v1) {
            if (null == _v0 || -1 !== _v9.indexOf(_v1.toLowerCase()) || "Date" === _v1 || _v10[_v1] || !_v11[_v1]) return _v1;
            var _v2 = _v11[_v1].discriminator;
            if (null == _v2) return _v1;
            if (_v0[_v2]) {
              var _v3 = _v0[_v2];
              return _v11[_v3] ? _v3 : _v1;
            }
            return _v1;
          }, _v0.serialize = function (_v0, _v1) {
            if (null == _v0 || -1 !== _v9.indexOf(_v1.toLowerCase())) return _v0;
            if (0 === _v1.lastIndexOf("Array<", 0)) {
              var _v2 = _v1.replace("Array<", "");
              _v2 = _v2.substring(0, _v2.length - 1);
              var _v3 = [];
              for (var _v4 in _v0) {
                var _v5 = _v0[_v4];
                _v3.push(_v0.serialize(_v5, _v2));
              }
              return _v3;
            }
            if ("Date" === _v1) return _v0.toISOString();
            if (_v10[_v1] || !_v11[_v1]) return _v0;
            var _v6 = _v11[_v1 = this.findCorrectType(_v0, _v1)].getAttributeTypeMap(),
              _v7 = {};
            for (var _v4 in _v6) {
              var _v8 = _v6[_v4];
              _v7[_v8.baseName] = _v0.serialize(_v0[_v8.name], _v8.type);
            }
            return _v7;
          }, _v0.deserialize = function (_v0, _v1) {
            if (_v1 = _v0.findCorrectType(_v0, _v1), null == _v0 || -1 !== _v9.indexOf(_v1.toLowerCase())) return _v0;
            if (0 === _v1.lastIndexOf("Array<", 0)) {
              var _v2 = _v1.replace("Array<", "");
              _v2 = _v2.substring(0, _v2.length - 1);
              var _v3 = [];
              for (var _v4 in _v0) {
                var _v5 = _v0[_v4];
                _v3.push(_v0.deserialize(_v5, _v2));
              }
              return _v3;
            }
            if ("Date" === _v1) return new Date(_v0);
            if (_v10[_v1] || !_v11[_v1]) return _v0;
            var _v6 = new _v11[_v1](),
              _v7 = _v11[_v1].getAttributeTypeMap();
            for (var _v4 in _v7) {
              var _v8 = _v7[_v4];
              _v6[_v8.name] = _v0.deserialize(_v0[_v8.baseName], _v8.type);
            }
            return _v6;
          }, _v0;
        }();
      }, function (_v0, _v1, _v2) {
        "use strict";

        Object.defineProperty(_v1, "__esModule", {
          value: !0
        }), _v1.Event = void 0, _v1.Event = function () {
          function _v0(_v0, _v1, _v2, _v3) {
            this.name = _v0, this.ts_ms = Date.now(), this.version = _v1, this.fields = _v2, this.namespace = _v3;
          }
          return _v0.getAttributeTypeMap = function () {
            return _v0.attributeTypeMap;
          }, _v0.attributeTypeMap = [{
            name: "name",
            baseName: "name",
            type: "string"
          }, {
            name: "ts_ms",
            baseName: "ts_ms",
            type: "number"
          }, {
            name: "version",
            baseName: "version",
            type: "number"
          }, {
            name: "fields",
            baseName: "fields",
            type: "object"
          }, {
            name: "namespace",
            baseName: "namespace",
            type: "string"
          }], _v0;
        }();
      }, function (_v0, _v1, _v2) {
        "use strict";

        Object.defineProperty(_v1, "__esModule", {
          value: !0
        }), _v1.EventContext = void 0, _v1.EventContext = function () {
          function _v0(_v0, _v1, _v2, _v3) {
            this.name = _v0, this.ts_ms = Date.now(), this.version = _v1, this.fields = _v2, this.namespace = _v3;
          }
          return _v0.getAttributeTypeMap = function () {
            return _v0.attributeTypeMap;
          }, _v0.attributeTypeMap = [{
            name: "name",
            baseName: "name",
            type: "string"
          }, {
            name: "ts_ms",
            baseName: "ts_ms",
            type: "number"
          }, {
            name: "version",
            baseName: "version",
            type: "number"
          }, {
            name: "fields",
            baseName: "fields",
            type: "object"
          }, {
            name: "namespace",
            baseName: "namespace",
            type: "string"
          }], _v0;
        }();
      }, function (_v0) {
        _v0.exports = JSON.parse('{"name":"vimeo-uploader","version":"2.26.0","log_to_console":false,"tomdawg":{"url":"https://devu.cloud.vimeo.com"},"lighthouse":{"url":"https://lighthouse.vimeocdn.com"},"leatherback":{"url":"https://leatherback.vimeo-prod.appspot.com"},"user":{"id":1,"account_type":"basic","is_mod":true,"use_leatherback":false}}');
      }, function (_v0, _v1, _v2) {
        var _v3 = _v2(11),
          _v4 = _v2(12);
        _v0.exports = function (_v0, _v1, _v2) {
          var _v3 = _v1 && _v2 || 0;
          "string" == typeof _v0 && (_v1 = "binary" === _v0 ? Array(16) : null, _v0 = null);
          var _v4 = (_v0 = _v0 || {}).random || (_v0.rng || _v3)();
          if (_v4[6] = 15 & _v4[6] | 64, _v4[8] = 63 & _v4[8] | 128, _v1) for (var _v5 = 0; _v5 < 16; ++_v5) _v1[_v3 + _v5] = _v4[_v5];
          return _v1 || _v4(_v4);
        };
      }, function (_v0, _v1, _v2) {
        _v0.exports = _v2(15);
      }, function (_v0, _v1) {
        var _v2 = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "u" > typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (_v2) {
          var _v3 = new Uint8Array(16);
          _v0.exports = function () {
            return _v2(_v3), _v3;
          };
        } else {
          var _v4 = Array(16);
          _v0.exports = function () {
            for (var _v0, _v1 = 0; _v1 < 16; _v1++) 0 == (3 & _v1) && (_v0 = 0 * Math.random()), _v4[_v1] = _v0 >>> ((3 & _v1) << 3) & 255;
            return _v4;
          };
        }
      }, function (_v0, _v1) {
        for (var _v2 = [], _v3 = 0; _v3 < 256; ++_v3) _v2[_v3] = (_v3 + 256).toString(16).substr(1);
        _v0.exports = function (_v0, _v1) {
          var _v2 = _v1 || 0;
          return "" + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + "-" + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + "-" + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + "-" + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + "-" + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + _v2[_v0[_v2++]] + _v2[_v0[_v2++]];
        };
      }, function (_v0, _v1, _v2) {
        "use strict";

        var _v3,
          _v4 = this && this.__assign || function () {
            return (_v4 = Object.assign || function (_v0) {
              for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
              return _v0;
            }).apply(this, arguments);
          },
          _v5 = this && this.__awaiter || function (_v0, _v1, _v2, _v3) {
            return new (_v2 || (_v2 = Promise))(function (_v0, _v1) {
              function _v2(_v0) {
                try {
                  _v4(_v3.next(_v0));
                } catch (_v0) {
                  _v1(_v0);
                }
              }
              function _v3(_v0) {
                try {
                  _v4(_v3.throw(_v0));
                } catch (_v0) {
                  _v1(_v0);
                }
              }
              function _v4(_v0) {
                var _v1;
                _v0.done ? _v0(_v0.value) : ((_v1 = _v0.value) instanceof _v2 ? _v1 : new _v2(function (_v0) {
                  _v0(_v1);
                })).then(_v2, _v3);
              }
              _v4((_v3 = _v3.apply(_v0, _v1 || [])).next());
            });
          },
          _v6 = this && this.__generator || function (_v0, _v1) {
            var _v2,
              _v3,
              _v4,
              _v5,
              _v6 = {
                label: 0,
                sent: function () {
                  if (1 & _v4[0]) throw _v4[1];
                  return _v4[1];
                },
                trys: [],
                ops: []
              };
            return _v5 = {
              next: _v7(0),
              throw: _v7(1),
              return: _v7(2)
            }, "function" == typeof Symbol && (_v5[Symbol.iterator] = function () {
              return this;
            }), _v5;
            function _v7(_v0) {
              return function (_v0) {
                var _v1 = [_v0, _v0];
                if (_v2) throw TypeError("Generator is already executing.");
                for (; _v5 && (_v5 = 0, _v1[0] && (_v6 = 0)), _v6;) try {
                  if (_v2 = 1, _v3 && (_v4 = 2 & _v1[0] ? _v3.return : _v1[0] ? _v3.throw || ((_v4 = _v3.return) && _v4.call(_v3), 0) : _v3.next) && !(_v4 = _v4.call(_v3, _v1[1])).done) return _v4;
                  switch (_v3 = 0, _v4 && (_v1 = [2 & _v1[0], _v4.value]), _v1[0]) {
                    case 0:
                    case 1:
                      _v4 = _v1;
                      break;
                    case 4:
                      return _v6.label++, {
                        value: _v1[1],
                        done: !1
                      };
                    case 5:
                      _v6.label++, _v3 = _v1[1], _v1 = [0];
                      continue;
                    case 7:
                      _v1 = _v6.ops.pop(), _v6.trys.pop();
                      continue;
                    default:
                      if (!(_v4 = (_v4 = _v6.trys).length > 0 && _v4[_v4.length - 1]) && (6 === _v1[0] || 2 === _v1[0])) {
                        _v6 = 0;
                        continue;
                      }
                      if (3 === _v1[0] && (!_v4 || _v1[1] > _v4[0] && _v1[1] < _v4[3])) {
                        _v6.label = _v1[1];
                        break;
                      }
                      if (6 === _v1[0] && _v6.label < _v4[1]) {
                        _v6.label = _v4[1], _v4 = _v1;
                        break;
                      }
                      if (_v4 && _v6.label < _v4[2]) {
                        _v6.label = _v4[2], _v6.ops.push(_v1);
                        break;
                      }
                      _v4[2] && _v6.ops.pop(), _v6.trys.pop();
                      continue;
                  }
                  _v1 = _v1.call(_v0, _v6);
                } catch (_v0) {
                  _v1 = [6, _v0], _v3 = 0;
                } finally {
                  _v2 = _v4 = 0;
                }
                if (5 & _v1[0]) throw _v1[1];
                return {
                  value: _v1[0] ? _v1[1] : void 0,
                  done: !0
                };
              };
            }
          },
          _v7 = this && this.__values || function (_v0) {
            var _v1 = "function" == typeof Symbol && Symbol.iterator,
              _v2 = _v1 && _v0[_v1],
              _v3 = 0;
            if (_v2) return _v2.call(_v0);
            if (_v0 && "number" == typeof _v0.length) return {
              next: function () {
                return _v0 && _v3 >= _v0.length && (_v0 = void 0), {
                  value: _v0 && _v0[_v3++],
                  done: !_v0
                };
              }
            };
            throw TypeError(_v1 ? "Object is not iterable." : "Symbol.iterator is not defined.");
          },
          _v8 = this && this.__read || function (_v0, _v1) {
            var _v2 = "function" == typeof Symbol && _v0[Symbol.iterator];
            if (!_v2) return _v0;
            var _v3,
              _v4,
              _v5 = _v2.call(_v0),
              _v6 = [];
            try {
              for (; (void 0 === _v1 || _v1-- > 0) && !(_v3 = _v5.next()).done;) _v6.push(_v3.value);
            } catch (_v0) {
              _v4 = {
                error: _v0
              };
            } finally {
              try {
                _v3 && !_v3.done && (_v2 = _v5.return) && _v2.call(_v5);
              } finally {
                if (_v4) throw _v4.error;
              }
            }
            return _v6;
          };
        Object.defineProperty(_v1, "__esModule", {
          value: !0
        }), _v1.BigPictureClient = _v1.Configuration = _v1.Service = void 0;
        var _v9,
          _v10 = _v2(16),
          _v11 = _v2(3),
          _v12 = _v2(5);
        (_v3 = _v9 = _v1.Service || (_v1.Service = {})).FRESNEL_PROD = "https://fresnel-events.vimeocdn.com", _v3.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com";
        var _v13 = function (_v0, _v1, _v2) {
          void 0 === _v1 && (_v1 = null), void 0 === _v2 && (_v2 = null), this.service = _v0, this.globalBPO = _v1, this.contexts = _v2;
        };
        _v1.Configuration = _v13, _v1.BigPictureClient = function () {
          function _v0() {}
          return Object.defineProperty(_v0, "isInitalized", {
            get: function () {
              return !!_v0.conf.globalBPO;
            },
            enumerable: !1,
            configurable: !0
          }), _v0.configure = function (_v0) {
            _v0.conf = _v0, _v0.WAIT_QUEUE.length > 0 && (_v0.WAIT_QUEUE.map(function (_v0) {
              return _v0.sendEvent(_v0);
            }), _v0.WAIT_QUEUE = []);
          }, _v0.updateObject = function (_v0, _v1) {
            return _v5(this, void 0, void 0, function () {
              var _v0, _v1, _v2, _v3, _v4, _v5, _v6;
              return _v6(this, function (_v0) {
                try {
                  for (_v1 = (_v0 = _v7(Object.entries(_v0))).next(); !_v1.done; _v1 = _v0.next()) if (_v3 = (_v2 = _v8(_v1.value, 2))[0], _v4 = _v2[1], _v3 in _v1) {
                    if (_v4 instanceof Object) return _v1[_v3] instanceof Object ? _v0.updateObject(_v4, _v1[_v3]) : _v1[_v3] = _v4, [2];
                    _v1[_v3] = _v4;
                  }
                } catch (_v0) {
                  _v5 = {
                    error: _v0
                  };
                } finally {
                  try {
                    _v1 && !_v1.done && (_v6 = _v0.return) && _v6.call(_v0);
                  } finally {
                    if (_v5) throw _v5.error;
                  }
                }
                return [2];
              });
            });
          }, _v0.updateContext = function (_v0) {
            return _v5(this, void 0, void 0, function () {
              return _v6(this, function (_v0) {
                return "global" == _v0.context && _v0.conf.globalBPO && _v0.updateObject(_v0.fields, _v0.conf.globalBPO.fields), [2];
              });
            });
          }, _v0.setEventsContext = function (_v0, _v1) {
            return _v5(this, void 0, void 0, function () {
              var _v0, _v1;
              return _v6(this, function (_v0) {
                return (_v0 = _v4({}, _v0.conf)).contexts = ((_v1 = {})[_v0] = _v1, _v1), _v0.conf = _v0, [2];
              });
            });
          }, _v0.sendEvent = function (_v0, _v1) {
            return _v5(this, void 0, void 0, function () {
              var _v0, _v1, _v2, _v3, _v4;
              return _v6(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    if (null == _v0) throw Error("Required parameter event was null or undefined when calling sendEvent.");
                    return _v0.isInitalized ? (_v0 = JSON.stringify(_v12.ObjectSerializer.serialize([new _v11.Envelope(_v0, this.conf.globalBPO)], "Array<Envelope>")), _v1 = _v0.name, null != _v0.namespace && (_v1 = (0, _v10.snakeCase)(_v0.namespace) + "." + _v0.name), _v2 = "".concat(this.conf.service, "/add/").concat(encodeURIComponent(_v1)), navigator.sendBeacon && !_v1 ? [3, 2] : (_v3 = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "User-Agent": navigator.userAgent,
                        Origin: location.origin,
                        Referer: document.referrer
                      },
                      body: _v0
                    }, _v1 && (_v3.headers.Authorization = _v1), [4, fetch(_v2, _v3)])) : (_v0.WAIT_QUEUE.push(_v0), _v0.waitAndFlushQueue(), [2]);
                  case 1:
                    return _v0.sent(), [3, 3];
                  case 2:
                    _v4 = new Blob([_v0]), navigator.sendBeacon(_v2, _v4), _v0.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          }, _v0.sendEventWithContext = function (_v0, _v1) {
            return _v5(this, void 0, void 0, function () {
              var _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7;
              return _v6(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    if (null == _v0) throw Error("Required parameter event was null or undefined when calling sendEvent.");
                    return _v0.isInitalized && this.conf.contexts && _v1 in this.conf.contexts ? (_v0 = new _v11.Envelope(_v0, this.conf.globalBPO), (_v1 = _v12.ObjectSerializer.serialize([_v0], "Array<Envelope>"))[0].contexts = {}, _v2 = _v12.ObjectSerializer.serialize(this.conf.contexts[_v1], "Event"), _v1[0].contexts[_v1] = _v2, _v3 = JSON.stringify(_v1), _v4 = _v0.name, null != _v0.namespace && (_v4 = (0, _v10.snakeCase)(_v0.namespace) + "." + _v0.name), _v5 = "".concat(this.conf.service, "/add/").concat(encodeURIComponent(_v4)), navigator.sendBeacon ? [3, 2] : (_v6 = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "User-Agent": navigator.userAgent,
                        Origin: location.origin,
                        Referer: document.referrer
                      },
                      body: _v3
                    }, [4, fetch(_v5, _v6)])) : (_v0.WAIT_QUEUE.push(_v0), _v0.waitAndFlushQueue(), [2]);
                  case 1:
                    return _v0.sent(), [3, 3];
                  case 2:
                    _v7 = new Blob([_v3]), navigator.sendBeacon(_v5, _v7), _v0.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          }, _v0.sendEventWithContexts = function (_v0, _v1) {
            return _v5(this, void 0, void 0, function () {
              var _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14;
              return _v6(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    if (null == _v0) throw Error("Required parameter event was null or undefined when calling sendEvent.");
                    if (!_v0.isInitalized) return _v0.WAIT_QUEUE.push(_v0), _v0.waitAndFlushQueue(), [2];
                    _v0 = new _v11.Envelope(_v0, this.conf.globalBPO), (_v1 = _v12.ObjectSerializer.serialize([_v0], "Array<Envelope>"))[0].contexts = {};
                    try {
                      for (_v3 = (_v2 = _v7(Object.entries(_v1))).next(); !_v3.done; _v3 = _v2.next()) _v5 = (_v4 = _v8(_v3.value, 2))[0], _v6 = _v4[1], _v7 = _v12.ObjectSerializer.serialize(_v6, "EventContext"), _v1[0].contexts[_v5] = _v7;
                    } catch (_v0) {
                      _v13 = {
                        error: _v0
                      };
                    } finally {
                      try {
                        _v3 && !_v3.done && (_v14 = _v2.return) && _v14.call(_v2);
                      } finally {
                        if (_v13) throw _v13.error;
                      }
                    }
                    return _v8 = JSON.stringify(_v1), _v9 = _v0.name, null != _v0.namespace && (_v9 = (0, _v10.snakeCase)(_v0.namespace) + "." + _v0.name), _v10 = "".concat(this.conf.service, "/add/").concat(encodeURIComponent(_v9)), navigator.sendBeacon ? [3, 2] : (_v11 = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "User-Agent": navigator.userAgent,
                        Origin: location.origin,
                        Referer: document.referrer
                      },
                      body: _v8
                    }, [4, fetch(_v10, _v11)]);
                  case 1:
                    return _v0.sent(), [3, 3];
                  case 2:
                    _v12 = new Blob([_v8]), navigator.sendBeacon(_v10, _v12), _v0.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          }, _v0.waitAndFlushQueue = function () {
            _v0.flushQueueTimeoutHandler || (_v0.flushQueueTimeoutHandler = setTimeout(function () {
              _v0.WAIT_QUEUE.length > 0 && (_v0.WAIT_QUEUE = [], console.error("[BigPicture] All events are dropped, BigPicture Client must be configured to send events."));
            }, _v0.FLUSH_QUEUE_TIMEOUT));
          }, _v0.FLUSH_QUEUE_TIMEOUT = 0, _v0.conf = new _v13(_v9.FRESNEL_PROD), _v0.WAIT_QUEUE = [], _v0;
        }();
      }, function (_v0, _v1, _v2) {
        "use strict";

        Object.defineProperty(_v1, "__esModule", {
          value: !0
        }), _v1.GlobalContext = void 0, _v1.GlobalContext = function (_v0, _v1, _v2, _v3) {
          void 0 === _v3 && (_v3 = ""), this.name = _v0, this.ts_ms = Date.now(), this.version = _v1, this.fields = _v2, this.namespace = _v3;
        };
      }, function (_v0, _v1, _v2) {
        "use strict";

        _v2.r(_v1), _v2.d(_v1, "SERVICE_APP_IDS", function () {
          return _v109;
        }), _v2.d(_v1, "API_APPS", function () {
          return _v110;
        }), _v2.d(_v1, "ERRORS", function () {
          return _v29;
        }), _v2.d(_v1, "ERROR_CODES", function () {
          return _v32;
        }), _v2.d(_v1, "EVENTS", function () {
          return _v8;
        }), _v2.d(_v1, "SERVICES", function () {
          return _v10;
        }), _v2.d(_v1, "STATES", function () {
          return _v7;
        }), _v2.d(_v1, "TYPES", function () {
          return _v9;
        });
        var _v3 = _v2(8),
          _v4 = _v2(1),
          _v5 = _v2.n(_v4),
          _v6 = _v5()({
            STARTING: null,
            VALIDATING: null,
            ATTACHING: null,
            UPLOADING: null,
            RESUMING: null,
            REROUTING: null
          }),
          _v7 = Object.assign({}, _v6, _v5()({
            QUEUED: null,
            PAUSED: null,
            CANCELED: null,
            COMPLETED: null,
            FAILED: null,
            CANCELING: null,
            REMOVED: null
          })),
          _v8 = _v5()({
            PROGRESS: null,
            STATE_CHANGE: null,
            FILE_SIZE_CHANGED: null
          }),
          _v9 = {
            CLIP: "clip",
            CLIP_REPLACE: "replace_clip",
            API_PULL_CLIP: "api_pull_clip",
            API_PULL_CLIP_REPLACE: "api_pull_clip_replace",
            DRM_CLIP: "drm_clip",
            DRM_CLIP_REPLACE: "drm_clip_replace"
          },
          _v10 = {
            UPLOAD_SERVICE_SITE: "UPLOAD_SERVICE_SITE",
            UPLOAD_SERVICE_LEATHERBACK: "UPLOAD_SERVICE_LEATHERBACK",
            UPLOAD_SERVICE_API: "UPLOAD_SERVICE_API"
          },
          _v11 = _v2(9),
          _v12 = _v2.n(_v11),
          _v13 = _v2(2),
          _v14 = _v2.n(_v13);
        function _v15(_v0) {
          return (_v15 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v16(_v0, _v1) {
          var _v2 = Object.keys(_v0);
          if (Object.getOwnPropertySymbols) {
            var _v3 = Object.getOwnPropertySymbols(_v0);
            _v1 && (_v3 = _v3.filter(function (_v0) {
              return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
            })), _v2.push.apply(_v2, _v3);
          }
          return _v2;
        }
        function _v17(_v0) {
          for (var _v1 = 1; _v1 < arguments.length; _v1++) {
            var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
            _v1 % 2 ? _v16(Object(_v2), !0).forEach(function (_v0) {
              !function (_v0, _v1, _v2) {
                var _v3;
                (_v3 = function (_v0, _v1) {
                  if ("object" !== _v15(_v0) || null === _v0) return _v0;
                  var _v2 = _v0[Symbol.toPrimitive];
                  if (void 0 !== _v2) {
                    var _v3 = _v2.call(_v0, _v1 || "default");
                    if ("object" !== _v15(_v3)) return _v3;
                    throw TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return String(_v0);
                }(_v1, "string"), (_v1 = "symbol" === _v15(_v3) ? _v3 : String(_v3)) in _v0) ? Object.defineProperty(_v0, _v1, {
                  value: _v2,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : _v0[_v1] = _v2;
              }(_v0, _v0, _v2[_v0]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v16(Object(_v2)).forEach(function (_v0) {
              Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
            });
          }
          return _v0;
        }
        var _v18 = function _v0(_v1, _v2) {
            var _v3,
              _v4 = [];
            for (var _v5 in _v1) if (_v1.hasOwnProperty(_v5)) {
              var _v6 = _v1[_v5];
              switch (_v2 && (_v5 = "".concat(_v2, "[").concat(_v5, "]")), Object.prototype.toString.call(_v6)) {
                case "[object Object]":
                  _v3 = _v0(_v6, _v5);
                  break;
                case "[object Array]":
                  var _v7 = {};
                  if (0 === _v6.length) _v6 = null;else {
                    for (var _v8 = 0, _v9 = _v6.length; _v8 < _v9; _v8++) _v7[_v8] = _v6[_v8];
                    _v3 = _v0(_v7, _v5);
                  }
                  break;
                default:
                  _v3 = "".concat(_v5, "=").concat(encodeURIComponent(_v6));
              }
              null !== _v6 && _v4.push(_v3);
            }
            return _v4.join("&");
          },
          _v19 = function () {
            var _v0;
            if ("u" > typeof window && !("Blob" in window)) return !1;
            try {
              _v0 = new Blob();
            } catch (_v0) {
              if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, !window.BlobBuilder) return !1;
              "TypeError" === _v0.name && window.BlobBuilder && (_v0 = new window.BlobBuilder().getBlob());
            }
            return "slice" in _v0 ? "slice" : "mozSlice" in _v0 ? "mozSlice" : "webkitSlice" in _v0 && "webkitSlice";
          },
          _v20 = function _v0(_v1) {
            var _v2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
              _v3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return function () {
              for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
              return new Promise(function (_v0, _v1) {
                _v1.apply(void 0, _v1).then(_v0).catch(function (_v0) {
                  var _v1 = _v3 + 1;
                  if (_v1 > _v2) return _v1(_v0);
                  var _v2 = 0 * Math.pow(2, _v1) + Math.round(0 * Math.random()),
                    _v3 = _v0(_v1, _v2, _v1);
                  return setTimeout(function () {
                    _v3.apply(void 0, _v1).then(_v0).catch(_v1);
                  }, _v2);
                });
              });
            };
          },
          _v21 = function (_v0, _v1) {
            return _v1 = _v17(_v17({}, {
              method: "GET",
              headers: {},
              body: null,
              withCredentials: !1,
              successCode: 200
            }), _v1), new Promise(function (_v0, _v1) {
              var _v2 = new XMLHttpRequest();
              _v2.open(_v1.method, _v0), Object.keys(_v1.headers).forEach(function (_v0) {
                _v2.setRequestHeader(_v0, _v1.headers[_v0]);
              }), _v2.addEventListener("load", function (_v0) {
                return _v0.target.status !== _v1.successCode ? _v1(_v0) : _v0(_v0);
              }), _v2.addEventListener("error", _v1), _v2.addEventListener("timeout", _v1), _v2.send(_v1.body);
            });
          },
          _v22 = _v20(_v21, 4);
        function _v23(_v0) {
          return (_v23 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v24(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v23(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v23(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v23(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        var _v25 = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "profile", "profileEnd", "table", "time", "timeEnd", "trace", "warn"],
          _v26 = {
            log: "DEFAULT",
            info: "INFO",
            debug: "NOTICE",
            warn: "WARNING",
            error: "ERROR"
          },
          _v27 = function () {
            var _v0, _v1;
            function _v2(_v0) {
              !function (_v0, _v1) {
                if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
              }(this, _v2), this.limit = _v25.length, this._logs = [], this._log_strings = [], this._console = "object" === ("u" < typeof console ? "undefined" : _v23(console)) ? console : function () {
                for (var _v0 = {}, _v1 = _v25.length, _v2 = 0; _v2 < _v1; _v2++) _v0[_v25[_v2]] = function () {};
                return _v0;
              }(), this.config = _v0, this.output_to_console = _v0.log_to_console || _v0.user.is_mod, this.labels = {
                version: _v0.version,
                user_id: "".concat(_v0.user.id),
                user_account_type: _v0.user.account_type,
                user_agent: window ? window.navigator.userAgent : ""
              };
            }
            return _v0 = [{
              key: "logs",
              get: function () {
                return this._log_strings;
              }
            }, {
              key: "_normalizeLog",
              value: function () {
                var _v0 = arguments.length,
                  _v1 = "";
                if (0 === _v0) return null;
                for (var _v2 = 0; _v2 < _v0; _v2++) {
                  var _v3 = _v2 < 0 || arguments.length <= _v2 ? void 0 : arguments[_v2],
                    _v4 = _v23(_v3);
                  _v1 += "string" === _v4 || "number" === _v4 || "boolean" === _v4 ? _v3 : "[Object object]", _v2 < _v0 - 1 && (_v1 += ", ");
                }
                return _v1;
              }
            }, {
              key: "_addLogEntry",
              value: function (_v0) {
                for (var _v1 = this.labels, _v2 = arguments.length, _v3 = Array(_v2 > 1 ? _v2 - 1 : 0), _v4 = 1; _v4 < _v2; _v4++) _v3[_v4 - 1] = arguments[_v4];
                for (var _v5 = 0; _v5 < _v3.length; _v5++) {
                  var _v6 = {
                      severity: _v26[_v0],
                      labels: _v1,
                      timestamp: new Date().toISOString()
                    },
                    _v7 = _v3[_v5],
                    _v8 = _v23(_v7);
                  "object" !== _v8 || Array.isArray(_v8) ? _v6.textPayload = _v7 : _v6.jsonPayload = _v7, this._logs.push(_v6);
                }
                var _v9 = this._normalizeLog.apply(this, _v3);
                this._log_strings.push(_v9), this.output_to_console && this._console[_v0](_v9);
              }
            }, {
              key: "addLabel",
              value: function (_v0, _v1) {
                _v0 && _v1 ? (this.labels["".concat(_v0)] = "".concat(_v1), this._logs = this._logs.map(function (_v0) {
                  return _v0.labels["".concat(_v0)] = "".concat(_v1), _v0;
                })) : this._addLogEntry("warn", "Incorrect logger label: {".concat(_v0, ": ").concat(_v1, "}"));
              }
            }, {
              key: "log",
              value: function () {
                for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
                0 !== _v1.length && this._addLogEntry.apply(this, ["log"].concat(_v1));
              }
            }, {
              key: "info",
              value: function () {
                for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
                0 !== _v1.length && this._addLogEntry.apply(this, ["info"].concat(_v1));
              }
            }, {
              key: "debug",
              value: function () {
                for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
                0 !== _v1.length && this._addLogEntry.apply(this, ["debug"].concat(_v1));
              }
            }, {
              key: "warn",
              value: function () {
                for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
                0 !== _v1.length && this._addLogEntry.apply(this, ["warn"].concat(_v1));
              }
            }, {
              key: "error",
              value: function () {
                for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
                0 !== _v1.length && this._addLogEntry.apply(this, ["error"].concat(_v1));
              }
            }, {
              key: "clear",
              value: function () {
                this._logs = [], this._log_strings = [];
              }
            }], _v24(_v2.prototype, _v0), _v1 && _v24(_v2, _v1), Object.defineProperty(_v2, "prototype", {
              writable: !1
            }), _v2;
          }();
        function _v28(_v0, _v1) {
          window.newrelic && window.newrelic.noticeError(_v0, _v1);
        }
        var _v29 = _v5()({
            NO_MACHINE_ID: null,
            VERIFICATION_FAILED: null,
            DNS_ERROR: null,
            COMPLETE_CALL_FAILED: null,
            RETRY_FAILED: null,
            ATTACH_FAILED: null,
            PROGRESS_CALL_ERROR: null,
            METADATA_CALL_ERROR: null,
            PROGRESS_STATE_MISMATCH: null,
            VIDEO_FILE_INVALID: null,
            QUOTA_EXCEEDED: null,
            NETWORK_ERROR: null,
            VIDEO_FILE_REMOVED: null,
            VIDEO_FILE_SIZE_CHANGED: null,
            FILE_TOO_SMALL: null,
            INVALID_DROPBOX_URL: null,
            INVALID_UPLOAD_ENDPOINT: null,
            RANGE_FAILED: null,
            PULL_FAILED: null,
            VALIDATOR_CALL_ERROR: null,
            LIGHTHOUSE_LOAD_ERROR: null,
            LIGHTHOUSE_RACE_ERROR: null,
            RANGE_RESUME_FAILED: null,
            TOTAL_CAP_EXCEEDED: null,
            RANGE_RESUME_HEADERS_MISSING: null,
            RANGE_HEADERS_MISSING: null
          }),
          _v30 = [_v29.VIDEO_FILE_INVALID, _v29.VIDEO_FILE_SIZE_CHANGED, _v29.VIDEO_FILE_REMOVED],
          _v31 = [_v29.VIDEO_FILE_REMOVED, _v29.VIDEO_FILE_SIZE_CHANGED],
          _v32 = {
            NO_MACHINE_ID: 901,
            VERIFICATION_FAILED: 902,
            DNS_ERROR: 903,
            COMPLETE_CALL_FAILED: 904,
            RETRY_FAILED: 905,
            ATTACH_FAILED: 906,
            PROGRESS_CALL_ERROR: 907,
            METADATA_CALL_ERROR: 908,
            PROGRESS_STATE_MISMATCH: 909,
            VIDEO_FILE_INVALID: 910,
            QUOTA_EXCEEDED: 911,
            NETWORK_ERROR: 912,
            VIDEO_FILE_REMOVED: 913,
            VIDEO_FILE_SIZE_CHANGED: 914,
            FILE_TOO_SMALL: 915,
            INVALID_DROPBOX_URL: 916,
            INVALID_UPLOAD_ENDPOINT: 917,
            RANGE_FAILED: 918,
            PULL_FAILED: 919,
            VALIDATOR_CALL_ERROR: 920,
            LIGHTHOUSE_LOAD_ERROR: 921,
            LIGHTHOUSE_RACE_ERROR: 922,
            RANGE_RESUME_FAILED: 923,
            TOTAL_CAP_EXCEEDED: 924
          };
        function _v33(_v0) {
          return (_v33 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v34(_v0, _v1) {
          for (var _v2 = 0; _v2 < _v1.length; _v2++) {
            var _v3 = _v1[_v2];
            _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v38(_v3.key), _v3);
          }
        }
        function _v35(_v0, _v1) {
          return (_v35 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
            return _v0.__proto__ = _v1, _v0;
          })(_v0, _v1);
        }
        function _v36(_v0) {
          if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return _v0;
        }
        function _v37(_v0) {
          return (_v37 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
            return _v0.__proto__ || Object.getPrototypeOf(_v0);
          })(_v0);
        }
        function _v38(_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" !== _v33(_v0) || null === _v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" !== _v33(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(_v0);
          }(_v0, "string");
          return "symbol" === _v33(_v1) ? _v1 : String(_v1);
        }
        var _v39 = function (_v0) {
          if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
          _v5.prototype = Object.create(_v0 && _v0.prototype, {
            constructor: {
              value: _v5,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v0 && _v35(_v5, _v0);
          var _v1,
            _v2,
            _v3,
            _v4 = (_v1 = function () {
              if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (_v0) {
                return !1;
              }
            }(), function () {
              var _v0,
                _v1 = _v37(_v5);
              return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v37(this).constructor) : _v1.apply(this, arguments), function (_v0, _v1) {
                if (_v1 && ("object" === _v33(_v1) || "function" == typeof _v1)) return _v1;
                if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
                return _v36(_v0);
              }(this, _v0);
            });
          function _v5(_v0, _v1, _v2, _v3, _v4) {
            var _v5, _v6, _v7;
            return function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v5), _v6 = _v36(_v5 = _v4.call(this)), (_v7 = _v38(_v7 = "_apiToken")) in _v6 ? Object.defineProperty(_v6, _v7, {
              value: null,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : _v6[_v7] = null, _v5.upload_type = _v1, _v5.file = _v3, _v5.initial_size = _v3.size, _v5.id = _v5._generateId(), _v5.state = _v7.QUEUED, _v5.bytes_uploaded = 0, _v5.api_app = _v2, _v5.config = _v0, _v5.folder_id = _v3.folder_id, _v5.logger = new _v27(_v0), _v5.logger.addLabel("upload_type", _v1), _v5.logger.addLabel("api_app", _v2), _v4 && _v5.logger.addLabel("clip_id", _v4), _v5.error = null, _v5.uploader = null, _v5.clip_id = _v4 || null, _v5.clip_url = null, _v5.attempt_id = null, _v5.fastest_region = null, _v5.ip = null, _v5.start_timestamp = 0, _v5.end_timestamp = 0, _v5.pause_duration = 0, _v5.slice_method = _v19(), _v5._bindMethods(), "object" === _v33(_v0.api) && ("jwt" in _v0.api || "token" in _v0.api) && (_v5._apiToken = _v0.api.jwt || _v0.api.token || null), _v5;
          }
          return _v2 = [{
            key: "state",
            get: function () {
              return this._state;
            },
            set: function (_v0) {
              if (void 0 !== _v0 && this._state !== _v0) {
                if (-1 === Object.keys(_v7).indexOf(_v0)) throw Error("Invalid state set for Upload: ".concat(_v0));
                var _v1 = this._state === _v7.RESUMING,
                  _v2 = this._state === _v7.REROUTING;
                this._state = _v0, this._hasFileSizeChanged(), this.emit(_v8.STATE_CHANGE, {
                  state: _v0,
                  is_resume: _v1,
                  upload: this
                }), _v0 !== _v7.UPLOADING || _v1 || _v2 || (this.start_timestamp = new Date().getTime());
              }
            }
          }, {
            key: "inactive",
            get: function () {
              return this._state === _v7.CANCELED || this._state === _v7.COMPLETED || this._state === _v7.FAILED;
            }
          }, {
            key: "active",
            get: function () {
              return this._state === _v7.STARTING || this._state === _v7.VALIDATING || this._state === _v7.ATTACHING || this._state === _v7.UPLOADING || this._state === _v7.RESUMING || this._state === _v7.REROUTING;
            }
          }, {
            key: "speed_mbps",
            get: function () {
              var _v0 = this.bytes_uploaded,
                _v1 = this.duration;
              return 0 === _v1 ? 0 : Math.round(8 * _v0 / 0 / 0 / _v1);
            }
          }, {
            key: "duration",
            get: function () {
              var _v0 = this.start_timestamp,
                _v1 = this.pause_duration,
                _v2 = this.end_timestamp;
              return Math.round(((_v2 > 0 ? _v2 : new Date().getTime()) - (_v0 + _v1)) / 0);
            }
          }, {
            key: "eta",
            get: function () {
              var _v0 = this.bytes_uploaded,
                _v1 = this.duration,
                _v2 = this.file;
              return 0 === _v0 || _v0 === _v2.size ? 0 : Math.round((_v2.size - _v0) / (_v0 / _v1));
            }
          }, {
            key: "apiToken",
            get: function () {
              return this._apiToken;
            }
          }, {
            key: "_onUploaderProgress",
            value: function (_v0) {
              var _v1 = this.file;
              (0, this._hasFileSizeChanged)();
              var _v2 = _v0.loaded;
              this.bytes_uploaded = _v2;
              var _v3 = this.speed_mbps,
                _v4 = this.eta;
              return this.emit(_v8.PROGRESS, {
                bytes_uploaded: _v2,
                total_bytes: _v1.size,
                eta: _v4,
                speed_mbps: _v3
              });
            }
          }, {
            key: "_onUploaderComplete",
            value: function () {
              var _v0 = this.file,
                _v1 = this.config;
              if (this.upload_type, this.logger, this.end_timestamp = new Date().getTime(), this.bytes_uploaded = this.file.size, this._onUploaderProgress({
                loaded: _v0.size,
                total: _v0.size
              }), this.state = _v7.COMPLETED, this.removeAllListeners(), _v1.service === _v10.UPLOAD_SERVICE_API) return null;
            }
          }, {
            key: "_onUploaderFail",
            value: function (_v0) {
              var _v1 = this.logger;
              if (_v0 && "object" === _v33(_v0) && "target" in _v0 && _v0.target instanceof XMLHttpRequest ? (_v1.warn("[BaseClient] _onUploaderFail: Status: ".concat(_v0.target.status, " ").concat(_v0.target.statusText, " - Response text: ").concat(_v0.target.responseText)), _v28(_v0, {
                message: "[BaseClient] _onUploaderFail",
                status: _v0.target.status,
                statusText: _v0.target.statusText,
                responseText: _v0.target.responseText,
                level: "warning"
              })) : (_v1.error("[BaseClient] _onUploaderFail: ".concat(_v0.toString())), _v28(_v0, {
                message: "[BaseClient] _onUploaderFail",
                responseText: _v0.toString(),
                level: "error"
              })), _v0.stack && (_v1.error(_v0.stack), _v28(_v0.stack, {
                message: "[BaseClient] _onUploaderFail Error Stack",
                level: "error"
              })), this.end_timestamp = new Date().getTime(), this.error = _v0, this.state = _v7.FAILED, this.removeAllListeners(), _v30.indexOf(_v0) > -1) return null;
            }
          }, {
            key: "_onValidateReject",
            value: function (_v0) {
              var _v1 = this.logger,
                _v2 = this.file;
              return _v0 === _v29.VALIDATOR_CALL_ERROR ? (_v1.warn("[BaseClient] _onValidateReject: VALIDATOR_CALL_ERROR, passing through"), _v28(_v0, {
                message: "[BaseClient] _onValidateReject: VALIDATOR_CALL_ERROR, passing through",
                level: "warning"
              }), Promise.resolve(_v2.type)) : _v0 && "object" === _v33(_v0) && "target" in _v0 && _v0.target instanceof XMLHttpRequest ? (_v1.warn("[BaseClient] _onValidateReject: ".concat(_v0.target.status, " - ").concat(_v0.target.responseText)), _v28(_v0, {
                message: "[BaseClient] _onValidateReject",
                status: _v0.target.status,
                responseText: _v0.target.responseText,
                level: "warning"
              }), Promise.resolve(_v2.type)) : (_v1.warn("[BaseClient] _onValidateReject: ".concat(_v0.toString())), _v28(_v0, {
                message: "[BaseClient] _onValidateReject",
                level: "warning"
              }), Promise.reject(_v0));
            }
          }, {
            key: "_onUploaderStateChange",
            value: function () {
              var _v0 = this.uploader;
              switch (_v0.state) {
                case _v7.COMPLETED:
                  this._onUploaderComplete();
                  break;
                case _v7.FAILED:
                  this._onUploaderFail(_v0.error);
                  break;
                default:
                  this.state = _v0.state;
              }
            }
          }, {
            key: "_bindMethods",
            value: function () {
              this._onUploaderProgress = this._onUploaderProgress.bind(this), this._onUploaderComplete = this._onUploaderComplete.bind(this), this._onUploaderFail = this._onUploaderFail.bind(this), this._onValidateReject = this._onValidateReject.bind(this), this._onUploaderStateChange = this._onUploaderStateChange.bind(this), this._hasFileSizeChanged = this._hasFileSizeChanged.bind(this), this.start = this.start.bind(this), this.pause = this.pause.bind(this), this.cancel = this.cancel.bind(this), this.resume = this.resume.bind(this), this.finishCancel = this.finishCancel.bind(this);
            }
          }, {
            key: "_generateId",
            value: function () {
              return _v12()();
            }
          }, {
            key: "_hasFileSizeChanged",
            value: function () {
              var _v0 = this.file,
                _v1 = this.initial_size;
              if (_v0.size !== _v1) {
                var _v2 = 0 === _v0.size ? _v29.VIDEO_FILE_REMOVED : _v29.VIDEO_FILE_SIZE_CHANGED;
                this.emit(_v8.FILE_SIZE_CHANGED, _v2);
              }
            }
          }, {
            key: "start",
            value: function () {
              this.state = _v7.STARTING;
            }
          }, {
            key: "pause",
            value: function () {
              var _v0 = this.logger,
                _v1 = this.state;
              _v1 === _v7.UPLOADING ? (this.pause_start = new Date().getTime(), this.state = _v7.PAUSED) : _v0.warn("Can only pause while uploading (".concat(_v1, ")"));
            }
          }, {
            key: "resume",
            value: function () {
              var _v0 = this.logger,
                _v1 = this.state;
              _v1 === _v7.PAUSED ? (this.pause_duration += new Date().getTime() - this.pause_start, this.state = _v7.RESUMING) : _v0.warn("Can only resume while paused (".concat(_v1, ")"));
            }
          }, {
            key: "fail",
            value: function (_v0) {
              console.warn("[BaseClient.fail] Should only be called by subclass");
            }
          }, {
            key: "cancel",
            value: function () {
              var _v0 = this;
              this.state = _v7.CANCELING, setTimeout(function () {
                _v0.config.service === _v10.UPLOAD_SERVICE_API && _v0.clip_id || (_v0.state = _v7.CANCELED, _v0.removeAllListeners());
              }, 100);
            }
          }, {
            key: "finishCancel",
            value: function () {
              var _v0 = this;
              setTimeout(function () {
                _v0.state = _v7.CANCELED, _v0.removeAllListeners();
              }, 100);
            }
          }], _v34(_v5.prototype, _v2), _v3 && _v34(_v5, _v3), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v5;
        }(_v14.a);
        function _v40(_v0) {
          return (_v40 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v41(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v40(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v40(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v40(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        function _v42(_v0, _v1) {
          return (_v42 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
            return _v0.__proto__ = _v1, _v0;
          })(_v0, _v1);
        }
        function _v43(_v0) {
          return (_v43 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
            return _v0.__proto__ || Object.getPrototypeOf(_v0);
          })(_v0);
        }
        var _v44 = function (_v0) {
          if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
          _v5.prototype = Object.create(_v0 && _v0.prototype, {
            constructor: {
              value: _v5,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v0 && _v42(_v5, _v0);
          var _v1,
            _v2,
            _v3,
            _v4 = (_v1 = function () {
              if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (_v0) {
                return !1;
              }
            }(), function () {
              var _v0,
                _v1 = _v43(_v5);
              return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v43(this).constructor) : _v1.apply(this, arguments), function (_v0, _v1) {
                if (_v1 && ("object" === _v40(_v1) || "function" == typeof _v1)) return _v1;
                if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
                if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return _v0;
              }(this, _v0);
            });
          function _v5(_v0, _v1, _v2) {
            var _v3,
              _v4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window.console;
            if (function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v5), _v3 = _v4.call(this), !_v0) throw Error("BaseUploader needs a config");
            if (!_v1) throw Error("BaseUploader needs an endpoint");
            if (!_v2) throw Error("BaseUploader needs a file");
            return _v3.config = _v0, _v3.endpoint = _v1, _v3.file = _v2, _v3.logger = _v4, _v3.APP_ID = 3, _v3.backoff_count = 0, _v3.backoff_timeout = null, _v3.bytes_uploaded = 0, _v3.started_on = new Date(), _v3.last_progress_dispatch = null, _v3.slice_method = _v19(), _v3._bindMethods(), _v3;
          }
          return _v2 = [{
            key: "state",
            get: function () {
              return this._state;
            },
            set: function (_v0) {
              if (void 0 !== _v0 && this._state !== _v0) {
                if (-1 === Object.keys(_v7).indexOf(_v0)) throw Error("Invalid state set for Upload: ".concat(_v0));
                this._state = _v0, this.emit(_v8.STATE_CHANGE, {
                  state: _v0,
                  uploader: this
                });
              }
            }
          }, {
            key: "_onUploadProgress",
            value: function (_v0) {
              var _v1 = this.last_progress_dispatch,
                _v2 = window.performance.now();
              this.bytes_uploaded = _v0.loaded, _v2 - (_v1 = _v1 || 0) < 200 || (this.last_progress_dispatch = _v2, this.emit(_v8.PROGRESS, {
                loaded: _v0.loaded
              }));
            }
          }, {
            key: "_bindMethods",
            value: function () {
              this._complete = this._complete.bind(this), this._onUploadProgress = this._onUploadProgress.bind(this);
            }
          }, {
            key: "_complete",
            value: function (_v0) {
              this.bytes_uploaded = this.file.size, this.state = _v7.COMPLETED, this.removeAllListeners();
            }
          }, {
            key: "upload",
            value: function () {}
          }, {
            key: "pause",
            value: function () {}
          }, {
            key: "resume",
            value: function () {
              this.state = _v7.RESUMING;
            }
          }, {
            key: "cancel",
            value: function () {
              this.removeAllListeners();
            }
          }, {
            key: "fail",
            value: function (_v0) {
              this.logger.error("[BaseUploader] fail: ".concat(_v0.toString())), _v28(_v0, {
                message: "[BaseUploader] fail",
                level: "error"
              }), this.error = _v0, this.state = _v7.FAILED, this.removeAllListeners();
            }
          }], _v41(_v5.prototype, _v2), _v3 && _v41(_v5, _v3), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v5;
        }(_v14.a);
        function _v45(_v0) {
          return (_v45 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v46(_v0, _v1) {
          (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
          for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
          return _v3;
        }
        function _v47(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v45(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v45(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v45(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        function _v48() {
          return (_v48 = "u" > typeof Reflect && Reflect.get ? Reflect.get.bind() : function (_v0, _v1, _v2) {
            var _v3 = function (_v0, _v1) {
              for (; !Object.prototype.hasOwnProperty.call(_v0, _v1) && null !== (_v0 = _v50(_v0)););
              return _v0;
            }(_v0, _v1);
            if (_v3) {
              var _v4 = Object.getOwnPropertyDescriptor(_v3, _v1);
              return _v4.get ? _v4.get.call(arguments.length < 3 ? _v0 : _v2) : _v4.value;
            }
          }).apply(this, arguments);
        }
        function _v49(_v0, _v1) {
          return (_v49 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
            return _v0.__proto__ = _v1, _v0;
          })(_v0, _v1);
        }
        function _v50(_v0) {
          return (_v50 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
            return _v0.__proto__ || Object.getPrototypeOf(_v0);
          })(_v0);
        }
        var _v51 = function (_v0) {
          if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
          _v5.prototype = Object.create(_v0 && _v0.prototype, {
            constructor: {
              value: _v5,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v0 && _v49(_v5, _v0);
          var _v1,
            _v2,
            _v3,
            _v4 = (_v1 = function () {
              if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (_v0) {
                return !1;
              }
            }(), function () {
              var _v0,
                _v1 = _v50(_v5);
              return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v50(this).constructor) : _v1.apply(this, arguments), function (_v0, _v1) {
                if (_v1 && ("object" === _v45(_v1) || "function" == typeof _v1)) return _v1;
                if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
                if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return _v0;
              }(this, _v0);
            });
          function _v5(_v0, _v1, _v2, _v3) {
            var _v4,
              _v5 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window.console,
              _v6 = arguments.length > 5 ? arguments[5] : void 0;
            (function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            })(this, _v5), (_v4 = _v4.call(this, _v0, _v1, _v2, _v5)).mime_type = _v3, _v4.resumed_bytes = 0;
            var _v7 = _v1.match(/v1\/b\/([a-z,-]*)\//);
            _v7 && _v7.length > 0 && (_v4.bucket = _v7.pop()), void 0 === _v4.bucket && (_v7 = _v1.match("com/([a-z,-]*)/")) && _v7.length > 0 && (_v4.bucket = _v7.pop());
            var _v8 = _v1.match(/upload_id=([^&]*)/);
            return _v8 && _v8.length > 0 && (_v4.upload_id = _v8.pop()), _v4.jwtToken = void 0 === _v6 ? _v0.leatherback.token : _v6, _v4;
          }
          return _v2 = [{
            key: "_bindMethods",
            value: function () {
              this._abortRequests = this._abortRequests.bind(this), this._getRange = this._getRange.bind(this), this._makeUploadRequest = this._makeUploadRequest.bind(this), this._onRequestReject = this._onRequestReject.bind(this), this._onRequestResolve = this._onRequestResolve.bind(this), this._parseHeadersForRange = this._parseHeadersForRange.bind(this), this._parseRangeHeader = this._parseRangeHeader.bind(this), this._handleCompleteUpload = this._handleCompleteUpload.bind(this), this._handleIncompleteUpload = this._handleIncompleteUpload.bind(this), _v48(_v50(_v5.prototype), "_bindMethods", this).call(this);
            }
          }, {
            key: "_abortRequests",
            value: function () {
              var _v0 = this.logger,
                _v1 = this._xhr,
                _v2 = this.backoff_timeout;
              _v1 ? (_v1.abort(), clearTimeout(_v2), this.backoff_count = 0) : _v0.info("[GCSUploader] no xhr to cancel: ".concat(_v1));
            }
          }, {
            key: "_parseRangeHeader",
            value: function (_v0) {
              var _v1,
                _v2 = this.logger;
              if ("string" != typeof _v0) return _v2.warn("[GCSUploader] _parseRangeHeader empty header: ".concat(_v0)), !1;
              var _v3 = function (_v0) {
                  if (Array.isArray(_v0)) return _v0;
                }(_v1 = _v0.split("-")) || function (_v0) {
                  var _v1 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
                  if (null != _v1) {
                    var _v2,
                      _v3,
                      _v4,
                      _v5,
                      _v6 = [],
                      _v7 = !0,
                      _v8 = !1;
                    try {
                      _v4 = (_v1 = _v1.call(_v0)).next, !1;
                      for (; !(_v7 = (_v2 = _v4.call(_v1)).done) && (_v6.push(_v2.value), 2 !== _v6.length); _v7 = !0);
                    } catch (_v0) {
                      _v8 = !0, _v3 = _v0;
                    } finally {
                      try {
                        if (!_v7 && null != _v1.return && (_v5 = _v1.return(), Object(_v5) !== _v5)) return;
                      } finally {
                        if (_v8) throw _v3;
                      }
                    }
                    return _v6;
                  }
                }(_v1) || function (_v0) {
                  if (_v0) {
                    if ("string" == typeof _v0) return _v46(_v0, 2);
                    var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
                    if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
                    if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v46(_v0, 2);
                  }
                }(_v1) || function () {
                  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }(),
                _v4 = _v3[0],
                _v5 = _v3[1];
              _v2.info("[GCSUploader] _parseRangeHeader: ".concat(_v4, " -> ").concat(_v5));
              var _v6 = parseInt(_v5, 10);
              return isNaN(_v6) ? (_v2.warn("[GCSUploader] _parseRangeHeader: finish isn't a number: ".concat(_v6)), !1) : _v6;
            }
          }, {
            key: "_parseHeadersForRange",
            value: function () {
              var _v0 = this.logger,
                _v1 = this._xhr,
                _v2 = this._parseRangeHeader;
              _v0.info("[GCSUploader] ".concat(_v1.status, ": ").concat(_v1.statusText));
              try {
                var _v3 = _v1.getAllResponseHeaders();
                if (/^Range:/im.test(_v3)) {
                  var _v4 = _v1.getResponseHeader("Range");
                  return _v0.info(_v3), _v2(_v4);
                }
                _v0.info("[GCSUploader] _parseHeadersForRange: No range header"), _v0.info(_v3);
              } catch (_v0) {
                _v0.info("[GCSUploader] _parseHeadersForRange getAllResponseHeaders: ".concat(_v0));
              }
              try {
                return _v2(_v1.getResponseHeader("Range"));
              } catch (_v0) {
                _v0.info("[GCSUploader] _parseHeadersForRange getResponseHeader: ".concat(_v0));
              }
              try {
                var _v5 = _v1.getAllResponseHeaders();
                _v0.info("[GCSUploader] _parseHeadersForRange No range header: ".concat(_v5));
              } catch (_v0) {
                _v0.info("[GCSUploader] _parseHeadersForRange final fail: ".concat(_v0));
              }
              return !1;
            }
          }, {
            key: "_onRequestReject",
            value: function (_v0) {
              var _v1 = this.logger,
                _v2 = this._xhr;
              return _v0 && "object" === _v45(_v0) && "target" in _v0 && _v0.target instanceof XMLHttpRequest ? (_v1.warn("[GCSUploader] _onUploaderFail: XHR Failed"), _v1.warn("[GCSUploader] _onUploaderFail: Status: ".concat(_v0.target.status, " ").concat(_v0.target.statusText, " - Response text: ").concat(_v0.target.responseText)), _v28(_v0, {
                message: "[GCSUploader] _onUploaderFail",
                status: _v0.target.status,
                statusText: _v0.target.statusText,
                level: "warning",
                responseText: _v0.target.responseText
              })) : (_v1.error("[GCSUploader] _onUploaderFail: ~XHR error - ".concat(_v0)), _v28(_v0, {
                message: "[GCSUploader] _onUploaderFail",
                level: "error"
              })), _v0 instanceof Error ? this.fail(_v0) : -1 === _v31.indexOf(_v0) && _v2 ? "status" in _v2 && 404 === _v2.status ? this.fail(_v29.INVALID_UPLOAD_ENDPOINT) : this._retryWithBackoff() : this.fail(_v0);
            }
          }, {
            key: "_onUploadProgress",
            value: function (_v0) {
              var _v1 = this.resumed_bytes + _v0.loaded;
              return _v48(_v50(_v5.prototype), "_onUploadProgress", this).call(this, {
                loaded: _v1
              });
            }
          }, {
            key: "_makeRequest",
            value: function (_v0, _v1, _v2) {
              var _v3 = this,
                _v4 = this.endpoint,
                _v5 = this._onUploadProgress,
                _v6 = this._xhr;
              return _v6 instanceof XMLHttpRequest && (2 === _v6.readyState || 3 === _v6.readyState) && _v6.abort(), new Promise(function (_v0, _v1) {
                _v3.error && _v1(_v3.error), _v3._xhr = new XMLHttpRequest(), _v3._xhr.open("PUT", _v4, !0), _v3._xhr.setRequestHeader("Content-Type", _v1), _v3._xhr.setRequestHeader("Content-Range", _v0), _v3._xhr.setRequestHeader("X-GUploader-No-308", "yes"), _v3._xhr.addEventListener("load", _v0), _v3._xhr.addEventListener("error", _v1), _v3._xhr.addEventListener("timeout", _v1), void 0 !== _v2 && _v3._xhr.upload.addEventListener("progress", _v5), _v3._xhr.send(_v2);
              });
            }
          }, {
            key: "_getRange",
            value: function () {
              var _v0 = this.file;
              this.logger.info("[GCSUploader] _getRange");
              var _v1 = "bytes */".concat(_v0.size);
              return this._makeRequest(_v1, "application/octet-stream");
            }
          }, {
            key: "_makeUploadRequest",
            value: function () {
              var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                _v1 = this.logger,
                _v2 = this.file,
                _v3 = this.slice_method,
                _v4 = this.mime_type,
                _v5 = this.config.max_request_chunk_size;
              this.state = _v7.UPLOADING;
              var _v6 = _v2.size,
                _v7 = _v2;
              if (!1 === _v3 ? (_v0 = 0, this.bytes_uploaded = 0) : (_v6 = Math.min(_v0 + _v5, _v2.size), _v7 = _v2[_v3](_v0, _v6)), 0 === _v6) return _v1.info("User has probably deleted the file"), Promise.reject(_v29.VIDEO_FILE_REMOVED);
              _v6 -= 1, _v1.info("[GCSUploader] _makeUploadRequest: ".concat(_v0, " -> ").concat(_v6));
              var _v8 = "bytes ".concat(_v0, "-").concat(_v6, "/").concat(_v2.size);
              return this._makeRequest(_v8, _v4, _v7);
            }
          }, {
            key: "_onRequestResolve",
            value: function () {
              var _v0 = this.logger,
                _v1 = this._xhr,
                _v2 = this._handleCompleteUpload,
                _v3 = this._handleIncompleteUpload,
                _v4 = "308" === _v1.getResponseHeader("X-HTTP-Status-Code-Override") || 308 === _v1.status;
              return _v0.info("[GCSUploader] _onRequestResolve: ".concat(_v1.status)), _v0.info("[GCSUploader] _onRequestResolve: Incomplete Upload? ".concat(_v4)), _v4 ? _v3() : _v2();
            }
          }, {
            key: "_handleCompleteUpload",
            value: function () {
              var _v0 = this.logger,
                _v1 = this._xhr,
                _v2 = this._complete;
              return 200 !== _v1.status ? (_v0.warn("[GCSUploader] Bad GCS response: ".concat(_v1.status)), this.state === _v7.RESUMING ? Promise.reject(_v29.RANGE_RESUME_FAILED) : Promise.reject(_v29.RANGE_FAILED)) : (_v0.info("[GCSUploader] Upload complete: ".concat(_v1.status)), _v2());
            }
          }, {
            key: "_handleIncompleteUpload",
            value: function () {
              var _v0 = this._makeUploadRequest,
                _v1 = this._parseHeadersForRange,
                _v2 = this._onRequestResolve,
                _v3 = this._onRequestReject,
                _v4 = _v1();
              return !1 === _v4 ? this.state === _v7.RESUMING ? Promise.reject(_v29.RANGE_RESUME_HEADERS_MISSING) : Promise.reject(_v29.RANGE_HEADERS_MISSING) : (this.backoff_count = 0, this.bytes_uploaded = _v4, this.resumed_bytes = _v4, _v0(_v4 + 1).then(_v2).catch(_v3));
            }
          }, {
            key: "_retryWithBackoff",
            value: function () {
              var _v0 = this.file,
                _v1 = this.logger,
                _v2 = this._getRange,
                _v3 = this._makeUploadRequest,
                _v4 = this._onRequestResolve,
                _v5 = this._onRequestReject;
              this.backoff_count++;
              var _v6 = _v0.size <= 0 ? 2 : 4,
                _v7 = _v0.size <= 0 ? 3 : 6;
              if (this.backoff_count > _v7) return _v1.info("[GCSUploader] Exceeded retries, failing upload attempt"), this.fail(_v29.RETRY_FAILED);
              var _v8 = _v2;
              this.backoff_count > _v6 && (_v1.info("[GCSUploader] Exceeded range retries, restarting upload"), this.state = _v7.REROUTING, _v8 = _v3);
              var _v9 = 0 * Math.pow(2, this.backoff_count) + Math.round(0 * Math.random());
              return _v1.info("[GCSUploader] retry #".concat(this.backoff_count, " after ").concat(_v9, "ms")), this.backoff_timeout = setTimeout(function () {
                _v8().then(_v4).catch(_v5);
              }, _v9), this.backoff_timeout;
            }
          }, {
            key: "upload",
            value: function () {
              var _v0 = this._onRequestResolve,
                _v1 = this._onRequestReject;
              _v48(_v50(_v5.prototype), "upload", this).call(this), this._makeUploadRequest().then(_v0).catch(_v1);
            }
          }, {
            key: "pause",
            value: function () {
              this._abortRequests(), _v48(_v50(_v5.prototype), "pause", this).call(this);
            }
          }, {
            key: "resume",
            value: function () {
              var _v0 = this._onRequestResolve,
                _v1 = this._onRequestReject;
              _v48(_v50(_v5.prototype), "resume", this).call(this), this._getRange().then(_v0).catch(_v1);
            }
          }, {
            key: "fail",
            value: function (_v0) {
              _v48(_v50(_v5.prototype), "fail", this).call(this, _v0), this._abortRequests();
            }
          }, {
            key: "cancel",
            value: function () {
              this._abortRequests(), _v48(_v50(_v5.prototype), "cancel", this).call(this);
            }
          }], _v47(_v5.prototype, _v2), _v3 && _v47(_v5, _v3), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v5;
        }(_v44);
        function _v52(_v0) {
          return (_v52 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v53(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v52(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v52(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v52(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        var _v54 = function () {
          var _v0, _v1;
          function _v2(_v0) {
            var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.console;
            if (function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v2), "string" != typeof _v0) throw Error("Invalid endpoint passed to VideoValidator");
            this.endpoint = _v0, this.chunk_size = 512, this.logger = _v1, this._onResolve = this._onResolve.bind(this);
          }
          return _v0 = [{
            key: "slice_method",
            get: function () {
              var _v0;
              if ("u" > typeof window && !("Blob" in window)) return !1;
              if (this._slice_method) return this._slice_method;
              try {
                _v0 = new Blob();
              } catch (_v0) {
                if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, !window.BlobBuilder) return this._slice_method = !1, this._slice_method;
                "TypeError" === _v0.name && window.BlobBuilder && (_v0 = new window.BlobBuilder().getBlob());
              }
              return "slice" in _v0 ? this._slice_method = "slice" : "mozSlice" in _v0 ? this._slice_method = "mozSlice" : "webkitSlice" in _v0 && (this._slice_method = "webkitSlice"), this._slice_method;
            },
            set: function (_v0) {
              this._slice_method = _v0;
            }
          }, {
            key: "_onResolve",
            value: function (_v0) {
              var _v1,
                _v2 = this.logger,
                _v3 = _v0.target;
              if (200 !== _v3.status) return _v2.info("[VideoValidator] _onResolve status: ".concat(_v3.status)), _v2.info("[VideoValidator] _onResolve response: ".concat(_v3.responseText)), Promise.reject(_v29.VALIDATOR_CALL_ERROR);
              try {
                _v1 = JSON.parse(_v3.responseText);
              } catch (_v0) {
                return _v2.info("[VideoValidator] _onResolve: Failed to parse xhr.responseText - ".concat(_v3.responseText)), Promise.reject(_v0);
              }
              return _v2.addLabel("file_type", _v1.ContentType), _v1.Blacklisted ? Promise.reject(_v29.VIDEO_FILE_INVALID) : Promise.resolve(_v1.ContentType);
            }
          }, {
            key: "validateFile",
            value: function (_v0) {
              var _v1 = this.endpoint,
                _v2 = this.slice_method,
                _v3 = this.chunk_size,
                _v4 = this._onResolve;
              if (!1 === _v2) return Promise.resolve(_v0.type);
              var _v5 = {
                method: "PUT",
                body: _v0[_v2](0, _v3)
              };
              return _v20(_v21, 2)(_v1, _v5).then(_v4);
            }
          }, {
            key: "validateUrl",
            value: function (_v0) {
              var _v1 = this.endpoint,
                _v2 = this._onResolve;
              return _v20(_v21, 2)("".concat(_v1, "?url=").concat(_v0)).then(_v2);
            }
          }], _v53(_v2.prototype, _v0), _v1 && _v53(_v2, _v1), Object.defineProperty(_v2, "prototype", {
            writable: !1
          }), _v2;
        }();
        function _v55(_v0) {
          return (_v55 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v56(_v0, _v1) {
          var _v2 = Object.keys(_v0);
          if (Object.getOwnPropertySymbols) {
            var _v3 = Object.getOwnPropertySymbols(_v0);
            _v1 && (_v3 = _v3.filter(function (_v0) {
              return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
            })), _v2.push.apply(_v2, _v3);
          }
          return _v2;
        }
        function _v57(_v0) {
          for (var _v1 = 1; _v1 < arguments.length; _v1++) {
            var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
            _v1 % 2 ? _v56(Object(_v2), !0).forEach(function (_v0) {
              var _v1, _v2, _v3;
              _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = _v59(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
                value: _v3,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : _v1[_v2] = _v3;
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v56(Object(_v2)).forEach(function (_v0) {
              Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
            });
          }
          return _v0;
        }
        function _v58(_v0, _v1) {
          for (var _v2 = 0; _v2 < _v1.length; _v2++) {
            var _v3 = _v1[_v2];
            _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v59(_v3.key), _v3);
          }
        }
        function _v59(_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" !== _v55(_v0) || null === _v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" !== _v55(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(_v0);
          }(_v0, "string");
          return "symbol" === _v55(_v1) ? _v1 : String(_v1);
        }
        var _v60 = function () {
          var _v0, _v1;
          function _v2(_v0) {
            var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.console;
            if (function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v2), !_v0) throw Error("[VimeoApp] constructor requires a config");
            this.config = _v0, this.logger = _v1, this._parseResponse = this._parseResponse.bind(this), this._parseToken = this._parseToken.bind(this), this.getNewToken = this.getNewToken.bind(this);
          }
          return _v0 = [{
            key: "_parseResponse",
            value: function (_v0) {
              var _v1 = this.logger,
                _v2 = _v0.target,
                _v3 = _v2.status,
                _v4 = _v2.responseText;
              if (200 !== _v3) return _v1.info("[VimeoApp] _parseResponse ".concat(_v3, ": ").concat(_v4)), Promise.reject(_v0);
              try {
                var _v5 = JSON.parse(_v4);
                return Promise.resolve(_v5);
              } catch (_v0) {
                return Promise.reject(_v0);
              }
            }
          }, {
            key: "_parseToken",
            value: function (_v0) {
              var _v1 = this.logger,
                _v2 = _v0.target,
                _v3 = _v2.status,
                _v4 = _v2.responseText;
              if (200 !== _v3) return _v1.info("[VimeoApp] _parseResponse ".concat(_v3, ": ").concat(_v4)), Promise.reject(_v0);
              try {
                var _v5 = _v0.target.getResponseHeader("Authorization");
                return Promise.resolve(_v5);
              } catch (_v0) {
                return _v1.info("[VimeoApp] _parseResponse ".concat(_v3, ": ").concat(_v4)), Promise.reject(_v0);
              }
            }
          }, {
            key: "_post",
            value: function (_v0, _v1) {
              var _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                _v3 = this.config,
                _v4 = {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                  },
                  body: _v18(_v57(_v57({}, _v1), {}, {
                    token: _v3.xsrft
                  })),
                  withCredentials: !0
                };
              return null !== _v2 && (_v4.headers.Authorization = "Bearer ".concat(_v2)), _v22(_v0, _v4);
            }
          }, {
            key: "attach",
            value: function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
              return this._post("/upload/_attach", {
                file_name: _v0,
                file_size: _v1,
                type: _v2,
                region: _v3,
                api_app: _v4,
                content_type: _v5,
                clip_id: _v6,
                folder_id: _v7
              }).then(this._parseResponse);
            }
          }, {
            key: "pause",
            value: function (_v0, _v1, _v2) {
              return this._post("/upload/_pause", {
                attempt_id: _v0,
                upload_type: _v1,
                signature: _v2
              }).then(this._parseResponse);
            }
          }, {
            key: "resume",
            value: function (_v0, _v1, _v2) {
              return this._post("/upload/_resume", {
                attempt_id: _v0,
                upload_type: _v1,
                signature: _v2
              }).then(this._parseResponse);
            }
          }, {
            key: "cancel",
            value: function (_v0, _v1, _v2) {
              return this._post("/upload/_cancel", {
                attempt_id: _v0,
                upload_type: _v1,
                signature: _v2
              }).then(this._parseResponse);
            }
          }, {
            key: "complete",
            value: function (_v0, _v1, _v2, _v3, _v4, _v5) {
              return this._post("/upload/_complete", {
                attempt_id: _v0,
                video_file_id: _v1,
                upload_type: _v2,
                signature: _v5,
                make_private: !0 === _v3,
                file_extension: _v4 && _v4.length <= 4 ? _v4 : ""
              }).then(this._parseResponse);
            }
          }, {
            key: "fail",
            value: function (_v0, _v1, _v2) {
              return this._post("/upload/_fail", {
                attempt_id: _v0,
                type: _v1,
                signature: _v2
              }).then(this._parseResponse);
            }
          }, {
            key: "saveError",
            value: function (_v0, _v1) {
              return this._post("/upload/_save_error", {
                attempt_id: _v0,
                error_code: _v1
              }).then(this._parseResponse);
            }
          }, {
            key: "getNewToken",
            value: function (_v0) {
              return this._post("/upload/_verify", {}, _v0).then(this._parseToken);
            }
          }], _v58(_v2.prototype, _v0), _v1 && _v58(_v2, _v1), Object.defineProperty(_v2, "prototype", {
            writable: !1
          }), _v2;
        }();
        function _v61(_v0, _v1) {
          (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
          for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
          return _v3;
        }
        function _v62(_v0) {
          return (_v62 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v63(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v62(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v62(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v62(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        function _v64() {
          return (_v64 = "u" > typeof Reflect && Reflect.get ? Reflect.get.bind() : function (_v0, _v1, _v2) {
            var _v3 = function (_v0, _v1) {
              for (; !Object.prototype.hasOwnProperty.call(_v0, _v1) && null !== (_v0 = _v66(_v0)););
              return _v0;
            }(_v0, _v1);
            if (_v3) {
              var _v4 = Object.getOwnPropertyDescriptor(_v3, _v1);
              return _v4.get ? _v4.get.call(arguments.length < 3 ? _v0 : _v2) : _v4.value;
            }
          }).apply(this, arguments);
        }
        function _v65(_v0, _v1) {
          return (_v65 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
            return _v0.__proto__ = _v1, _v0;
          })(_v0, _v1);
        }
        function _v66(_v0) {
          return (_v66 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
            return _v0.__proto__ || Object.getPrototypeOf(_v0);
          })(_v0);
        }
        var _v67 = function (_v0) {
          if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
          _v5.prototype = Object.create(_v0 && _v0.prototype, {
            constructor: {
              value: _v5,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v0 && _v65(_v5, _v0);
          var _v1,
            _v2,
            _v3,
            _v4 = (_v1 = function () {
              if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (_v0) {
                return !1;
              }
            }(), function () {
              var _v0,
                _v1 = _v66(_v5);
              return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v66(this).constructor) : _v1.apply(this, arguments), function (_v0, _v1) {
                if (_v1 && ("object" === _v62(_v1) || "function" == typeof _v1)) return _v1;
                if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
                if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return _v0;
              }(this, _v0);
            });
          function _v5(_v0, _v1, _v2, _v3, _v4) {
            var _v5;
            if (function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v5), _v5 = _v4.call(this, _v0, _v1, _v2, _v3, _v4), !_v0.tomdawg) throw Error("[SiteClient] tomdawg data not in the config");
            if (_v1 === _v9.CLIP_REPLACE && !_v4) throw Error("[SiteClient] Clip replacement upload must provide a clip_id");
            return _v5.server_url = _v0.tomdawg.url, _v5.clip_id = _v4, _v5.vimeo_app = new _v60(_v0, _v5.logger), _v5._setFileSizeChangeListener(), _v5;
          }
          return _v2 = [{
            key: "_onUploaderComplete",
            value: function () {
              var _v0,
                _v1,
                _v2 = this,
                _v3 = this.file,
                _v4 = this.upload_type,
                _v5 = this.attempt_id,
                _v6 = this.video_file_id,
                _v7 = this.vimeo_app,
                _v8 = this.logger,
                _v9 = this.signature,
                _v10 = ((_v0 = _v3.name).match(/\.([^.]*)$/i) && (_v1 = _v0.split(".").pop().toLowerCase()), _v1);
              _v7.complete(_v5, _v6, _v4, _v3, _v10, _v9).then(function (_v0) {
                return _v64(_v66(_v5.prototype), "_onUploaderComplete", _v2).call(_v2);
              }).catch(function (_v0) {
                return _v8.warn("[SiteClient] _onUploaderComplete failed", _v0.toString()), _v2._onUploaderFail(_v29.COMPLETE_CALL_FAILED);
              });
            }
          }, {
            key: "_onUploaderFail",
            value: function (_v0) {
              var _v1 = this.attempt_id;
              if (_v64(_v66(_v5.prototype), "_onUploaderFail", this).call(this, _v0), _v1) {
                var _v2 = this.vimeo_app,
                  _v3 = this.upload_type,
                  _v4 = this.signature;
                _v0 in _v32 && _v1 && _v2.saveError(_v1, _v32[_v0]), _v2.fail(_v1, _v3, _v4);
              }
            }
          }, {
            key: "_onAttachReject",
            value: function (_v0) {
              var _v1 = this.logger;
              return _v0 && "object" === _v62(_v0) && "target" in _v0 && _v0.target instanceof XMLHttpRequest ? (_v1.warn("[SiteClient] _onUploaderFail: ".concat(_v0.target.status, " - ").concat(_v0.target.responseText)), _v28(_v0, {
                message: "[SiteClient] _onUploaderFail",
                status: _v0.target.status,
                responseText: _v0.target.responseText,
                level: "warning"
              })) : (_v1.error("[SiteClient] _onUploaderFail: ".concat(_v0.toString())), _v28(_v0, {
                message: "[SiteClient] _onUploaderFail",
                level: "error"
              })), Promise.reject(_v29.ATTACH_FAILED);
            }
          }, {
            key: "_bindMethods",
            value: function () {
              this._onAttachReject = this._onAttachReject.bind(this), this._validate = this._validate.bind(this), this._createAttempt = this._createAttempt.bind(this), this._beginUploading = this._beginUploading.bind(this), this._setFileSizeChangeListener = this._setFileSizeChangeListener.bind(this), _v64(_v66(_v5.prototype), "_bindMethods", this).call(this);
            }
          }, {
            key: "_validate",
            value: function (_v0) {
              var _v1 = function (_v0) {
                  if (Array.isArray(_v0)) return _v0;
                }(_v0) || function (_v0) {
                  if ("u" > typeof Symbol && null != _v0[Symbol.iterator] || null != _v0["@@iterator"]) return Array.from(_v0);
                }(_v0) || function (_v0) {
                  if (_v0) {
                    if ("string" == typeof _v0) return _v61(_v0, void 0);
                    var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
                    if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
                    if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v61(_v0, void 0);
                  }
                }(_v0) || function () {
                  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }(),
                _v2 = _v1[0];
              _v1.slice(1), this.fastest_region = _v2;
              var _v3 = this.id,
                _v4 = this.file,
                _v5 = this.server_url,
                _v6 = this.logger,
                _v7 = this._onValidateReject;
              return this.state = _v7.VALIDATING, new _v54("".concat(_v5, "/probe/").concat(_v3), _v6).validateFile(_v4).catch(_v7);
            }
          }, {
            key: "_createAttempt",
            value: function (_v0) {
              var _v1 = this.file,
                _v2 = this.fastest_region,
                _v3 = this.vimeo_app,
                _v4 = this.upload_type,
                _v5 = this.api_app,
                _v6 = this.clip_id,
                _v7 = this.folder_id,
                _v8 = this._onAttachReject;
              return this.state = _v7.ATTACHING, _v3.attach(_v1.name, _v1.size, _v4, _v2.Region, _v5, _v0, _v6, _v7).catch(_v8);
            }
          }, {
            key: "_beginUploading",
            value: function (_v0) {
              var _v1 = this.logger,
                _v2 = this.file,
                _v3 = this.config,
                _v4 = this._onUploaderProgress,
                _v5 = this._onUploaderStateChange,
                _v6 = _v0.clip_id,
                _v7 = _v0.video_file_id,
                _v8 = _v0.attempt_id,
                _v9 = _v0.upload_id,
                _v10 = _v0.upload_endpoint,
                _v11 = _v0.clip_url,
                _v12 = _v0.signature;
              this.clip_id = _v6, this.clip_url = _v11, this.attempt_id = _v8, this.uid = _v9, this.video_file_id = _v7, this.signature = _v12, _v1.addLabel("clip_id", _v6), _v1.addLabel("attempt_id", _v8), _v1.addLabel("video_file_id", _v7), this.uploader = new _v51(_v3, _v10, _v2, _v2.type, _v1), this.uploader.attempt_id = _v8, this.uploader.on(_v8.PROGRESS, _v4), this.uploader.on(_v8.STATE_CHANGE, _v5), this.uploader.upload();
            }
          }, {
            key: "_setFileSizeChangeListener",
            value: function () {
              var _v0 = this;
              this.on(_v8.FILE_SIZE_CHANGED, function (_v0) {
                _v0.fail(_v0);
              });
            }
          }, {
            key: "start",
            value: function () {
              _v64(_v66(_v5.prototype), "start", this).call(this);
              var _v0 = this.config.lighthouse,
                _v1 = this._validate,
                _v2 = this._createAttempt,
                _v3 = this._beginUploading,
                _v4 = this._onUploaderFail;
              _v0.getFastestRegion().then(_v1).then(_v2).then(_v3).catch(_v4);
            }
          }, {
            key: "pause",
            value: function () {
              _v64(_v66(_v5.prototype), "pause", this).call(this);
              var _v0 = this.vimeo_app,
                _v1 = this.attempt_id,
                _v2 = this.upload_type,
                _v3 = this.signature,
                _v4 = this.logger,
                _v5 = this.uploader;
              _v5 && _v5.pause(), _v0.pause(_v1, _v2, _v3).catch(function (_v0) {
                _v4.warn("[SiteClient] pause ".concat(_v0.toString()));
              });
            }
          }, {
            key: "resume",
            value: function () {
              _v64(_v66(_v5.prototype), "resume", this).call(this);
              var _v0 = this.vimeo_app,
                _v1 = this.attempt_id,
                _v2 = this.upload_type,
                _v3 = this.signature,
                _v4 = this.logger,
                _v5 = this.uploader;
              _v5 && _v5.resume(), _v0.resume(_v1, _v2, _v3).catch(function (_v0) {
                _v4.warn("[SiteClient] resume ".concat(_v0.toString()));
              });
            }
          }, {
            key: "fail",
            value: function (_v0) {
              this.uploader.fail(_v0);
            }
          }, {
            key: "cancel",
            value: function () {
              _v64(_v66(_v5.prototype), "cancel", this).call(this);
              var _v0 = this.vimeo_app,
                _v1 = this.attempt_id,
                _v2 = this.upload_type,
                _v3 = this.signature,
                _v4 = this.logger,
                _v5 = this.uploader;
              _v5 && _v5.cancel(), _v0.cancel(_v1, _v2, _v3).catch(function (_v0) {
                _v4.warn("[SiteClient] cancel ".concat(_v0.toString()));
              });
            }
          }], _v63(_v5.prototype, _v2), _v3 && _v63(_v5, _v3), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v5;
        }(_v39);
        function _v68(_v0) {
          return (_v68 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v69(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v68(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v68(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v68(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        function _v70() {
          return (_v70 = "u" > typeof Reflect && Reflect.get ? Reflect.get.bind() : function (_v0, _v1, _v2) {
            var _v3 = function (_v0, _v1) {
              for (; !Object.prototype.hasOwnProperty.call(_v0, _v1) && null !== (_v0 = _v72(_v0)););
              return _v0;
            }(_v0, _v1);
            if (_v3) {
              var _v4 = Object.getOwnPropertyDescriptor(_v3, _v1);
              return _v4.get ? _v4.get.call(arguments.length < 3 ? _v0 : _v2) : _v4.value;
            }
          }).apply(this, arguments);
        }
        function _v71(_v0, _v1) {
          return (_v71 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
            return _v0.__proto__ = _v1, _v0;
          })(_v0, _v1);
        }
        function _v72(_v0) {
          return (_v72 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
            return _v0.__proto__ || Object.getPrototypeOf(_v0);
          })(_v0);
        }
        var _v73 = function (_v0) {
          if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
          _v5.prototype = Object.create(_v0 && _v0.prototype, {
            constructor: {
              value: _v5,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v0 && _v71(_v5, _v0);
          var _v1,
            _v2,
            _v3,
            _v4 = (_v1 = function () {
              if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (_v0) {
                return !1;
              }
            }(), function () {
              var _v0,
                _v1 = _v72(_v5);
              return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v72(this).constructor) : _v1.apply(this, arguments), function (_v0, _v1) {
                if (_v1 && ("object" === _v68(_v1) || "function" == typeof _v1)) return _v1;
                if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
                if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return _v0;
              }(this, _v0);
            });
          function _v5(_v0, _v1, _v2, _v3) {
            var _v4,
              _v5 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window.console;
            if (function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v5), _v4 = _v4.call(this, _v0, _v1, _v2, _v5), !_v3) throw Error("PullUploader needs an api_token");
            return _v4.token = _v3, _v4._xhr = null, _v4;
          }
          return _v2 = [{
            key: "_onRequestReject",
            value: function (_v0) {
              var _v1 = this.logger,
                _v2 = _v0.target;
              if (_v1.warn("[PullUpload] _onRequestReject: ".concat(_v2.status, ": ").concat(_v2.statusText)), _v2.status >= 500) return this.fail(_v29.DNS_ERROR);
              var _v3 = JSON.parse(_v2.responseText);
              return "error_code" in _v3 && 0 === _v3.error_code ? this.fail(_v29.VIDEO_FILE_INVALID) : "error" in _v3 ? this.fail(_v3.error) : this.fail(_v29.PULL_FAILED);
            }
          }, {
            key: "_onRequestResolve",
            value: function (_v0) {
              var _v1 = this.logger,
                _v2 = _v0.target,
                _v3 = JSON.parse(_v2.responseText);
              if (200 !== _v2.status || !_v3.uri) return _v1.info("[PullUpload] PULL_API_FAILED: ".concat(_v2.status, ": ").concat(_v2.statusText, " - ").concat(_v3.error || _v2.responseText)), Promise.reject(_v0);
              var _v4 = _v3.uri;
              return this.clip_id = parseInt(_v4.split("/").pop(), 10), this.clip_url = "/".concat(this.clip_id), _v1.addLabel("clip_id", this.clip_id), this._complete();
            }
          }, {
            key: "_bindMethods",
            value: function () {
              this._abortRequests = this._abortRequests.bind(this), this._dispatchProgressEvent = this._dispatchProgressEvent.bind(this), this._endFakeProgress = this._endFakeProgress.bind(this), this._makeUploadRequest = this._makeUploadRequest.bind(this), this._onRequestReject = this._onRequestReject.bind(this), this._onRequestResolve = this._onRequestResolve.bind(this), this._startFakeProgress = this._startFakeProgress.bind(this), _v70(_v72(_v5.prototype), "_bindMethods", this).call(this);
            }
          }, {
            key: "_dispatchProgressEvent",
            value: function () {
              var _v0 = this.bytes_uploaded,
                _v1 = this.file,
                _v2 = this._onUploadProgress,
                _v3 = new Date().getTime() - this.start,
                _v4 = _v1.size - _v0;
              this.bytes_uploaded = _v4 * Math.sin(_v3 / 0 * (Math.PI / 2)) + _v0, _v2({
                loaded: _v0
              });
            }
          }, {
            key: "_startFakeProgress",
            value: function () {
              this.start = new Date().getTime(), this._progressInterval = setInterval(this._dispatchProgressEvent.bind(this), 250);
            }
          }, {
            key: "_endFakeProgress",
            value: function () {
              clearTimeout(this._progressInterval);
            }
          }, {
            key: "_makeUploadRequest",
            value: function () {
              var _v0 = this,
                _v1 = this.token,
                _v2 = this.file,
                _v3 = this.endpoint;
              this.state = _v7.UPLOADING, this._startFakeProgress();
              var _v4 = {
                type: "pull",
                link: _v2.link,
                size: _v2.size,
                current_user: _v2.target_user_id,
                folder_id: _v2.folder_id
              };
              _v2.headers && (_v4.headers = _v2.headers), _v2.thumbnailLink && (_v4.picture_link = _v2.thumbnailLink), "string" == typeof _v2.name && (_v4.name = _v2.name);
              var _v5 = {
                Accept: "application/vnd.vimeo.video;version=3.2",
                Authorization: "JWT ".concat(_v1)
              };
              return new Promise(function (_v0, _v1) {
                _v0._xhr = new XMLHttpRequest(), _v0._xhr.open("POST", _v3), _v0._xhr.setRequestHeader("Content-Type", "application/json"), _v0._xhr.setRequestHeader("Accept", _v5.Accept), _v0._xhr.setRequestHeader("Authorization", _v5.Authorization), _v0._xhr.addEventListener("load", _v0), _v0._xhr.addEventListener("error", _v1), _v0._xhr.addEventListener("timeout", _v1), _v0._xhr.send(JSON.stringify(_v4));
              });
            }
          }, {
            key: "_abortRequests",
            value: function () {
              var _v0 = this.logger;
              this._xhr ? (this._endFakeProgress(), this._xhr.abort()) : _v0.warn("[PullUploader] no xhr to cancel: ".concat(this._xhr));
            }
          }, {
            key: "upload",
            value: function () {
              _v70(_v72(_v5.prototype), "upload", this).call(this), this._makeUploadRequest().then(this._onRequestResolve.bind(this)).catch(this._onRequestReject.bind(this));
            }
          }, {
            key: "fail",
            value: function (_v0) {
              _v70(_v72(_v5.prototype), "fail", this).call(this, _v0), this._abortRequests();
            }
          }, {
            key: "cancel",
            value: function () {
              this.removeAllListeners();
            }
          }], _v69(_v5.prototype, _v2), _v3 && _v69(_v5, _v3), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v5;
        }(_v44);
        function _v74(_v0) {
          return (_v74 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v75(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v74(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v74(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v74(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        function _v76() {
          return (_v76 = "u" > typeof Reflect && Reflect.get ? Reflect.get.bind() : function (_v0, _v1, _v2) {
            var _v3 = function (_v0, _v1) {
              for (; !Object.prototype.hasOwnProperty.call(_v0, _v1) && null !== (_v0 = _v78(_v0)););
              return _v0;
            }(_v0, _v1);
            if (_v3) {
              var _v4 = Object.getOwnPropertyDescriptor(_v3, _v1);
              return _v4.get ? _v4.get.call(arguments.length < 3 ? _v0 : _v2) : _v4.value;
            }
          }).apply(this, arguments);
        }
        function _v77(_v0, _v1) {
          return (_v77 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
            return _v0.__proto__ = _v1, _v0;
          })(_v0, _v1);
        }
        function _v78(_v0) {
          return (_v78 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
            return _v0.__proto__ || Object.getPrototypeOf(_v0);
          })(_v0);
        }
        var _v79 = function (_v0) {
            if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
            _v5.prototype = Object.create(_v0 && _v0.prototype, {
              constructor: {
                value: _v5,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(_v5, "prototype", {
              writable: !1
            }), _v0 && _v77(_v5, _v0);
            var _v1,
              _v2,
              _v3,
              _v4 = (_v1 = function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (_v0) {
                  return !1;
                }
              }(), function () {
                var _v0,
                  _v1 = _v78(_v5);
                return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v78(this).constructor) : _v1.apply(this, arguments), function (_v0, _v1) {
                  if (_v1 && ("object" === _v74(_v1) || "function" == typeof _v1)) return _v1;
                  if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
                  if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return _v0;
                }(this, _v0);
              });
            function _v5(_v0, _v1, _v2, _v3, _v4) {
              if (function (_v0, _v1) {
                if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
              }(this, _v5), _v5 = _v4.call(this, _v0, _v1, _v2, _v3, _v4), !_v3.link) throw Error("ApiClient file object needs a link property");
              if (!_v3.size) throw Error("ApiClient file object needs a size property");
              var _v5,
                _v6 = _v0.api,
                _v7 = _v6.url,
                _v8 = _v6.tokens,
                _v9 = _v6.jwt;
              if (!_v7) throw Error("[ApiClient] Incorrect config format for vime api");
              if (!_v9) throw Error("Token for Vimeo app must be in config.api.jwt");
              return _v5.api_token = _v8[_v2] || _v9, _v5.endpoint = "//".concat(_v7, "/users/").concat(_v3.target_user_id, "/videos"), _v5.vimeo_app = new _v60(_v0, _v5.logger), _v5;
            }
            return _v2 = [{
              key: "_onUploaderComplete",
              value: function () {
                var _v0 = this.uploader,
                  _v1 = _v0.clip_id,
                  _v2 = _v0.clip_url;
                this.clip_id = _v1, this.clip_url = _v2, _v76(_v78(_v5.prototype), "_onUploaderComplete", this).call(this);
              }
            }, {
              key: "_onUploaderFail",
              value: function (_v0) {
                var _v1 = this.logger,
                  _v2 = this.attempt_id,
                  _v3 = this.vimeo_app;
                _v1.warn("[ApiClient] _onUploaderFail ".concat(_v0.toString())), _v28(_v0, {
                  message: "[ApiClient] _onUploaderFail",
                  level: "warning"
                }), _v76(_v78(_v5.prototype), "_onUploaderFail", this).call(this, _v0), _v2 && (_v30.indexOf(_v0) > -1 || _v0 in _v32 && _v3.saveError(_v2, _v32[_v0]));
              }
            }, {
              key: "_bindMethods",
              value: function () {
                this._validate = this._validate.bind(this), this._beginUploading = this._beginUploading.bind(this), this._validateResponse = this._validateResponse.bind(this), _v76(_v78(_v5.prototype), "_bindMethods", this).call(this);
              }
            }, {
              key: "_validate",
              value: function () {
                var _v0 = this,
                  _v1 = this.logger,
                  _v2 = this.file;
                return this.state = _v7.VALIDATING, _v1.addLabel("file_link", _v2.link), new Promise(function (_v0, _v1) {
                  _v0._xhr = new XMLHttpRequest(), _v0._xhr.open("GET", _v2.link), "object" === _v74(_v2.headers) && Object.keys(_v2.headers).forEach(function (_v0) {
                    _v0._xhr.setRequestHeader(_v0, _v2.headers[_v0]);
                  }), _v0._xhr.onreadystatechange = function () {
                    if (_v0._xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED || _v0._xhr.readyState === XMLHttpRequest.READYSTATE_LOADED) {
                      var _v0 = {
                        status: _v0._xhr.status,
                        content_type: _v0._xhr.getResponseHeader("Content-Type")
                      };
                      setTimeout(function () {
                        _v0._xhr.abort();
                      }, 0), _v0(_v0);
                    }
                  }, _v0._xhr.addEventListener("error", function () {
                    _v1(_v29.INVALID_UPLOAD_ENDPOINT);
                  }), _v0._xhr.addEventListener("timeout", function () {
                    _v1(_v29.INVALID_UPLOAD_ENDPOINT);
                  }), _v0._xhr.send();
                });
              }
            }, {
              key: "_beginUploading",
              value: function () {
                var _v0 = this.file,
                  _v1 = this.logger,
                  _v2 = this.endpoint,
                  _v3 = this.api_token,
                  _v4 = this.config,
                  _v5 = this._onUploaderProgress,
                  _v6 = this._onUploaderStateChange;
                this.uploader = new _v73(_v4, _v2, _v0, _v3, _v1), this.uploader.on(_v8.PROGRESS, _v5), this.uploader.on(_v8.STATE_CHANGE, _v6), this.uploader.upload();
              }
            }, {
              key: "_validateResponse",
              value: function (_v0) {
                return this.logger.addLabel("file_type", _v0.content_type), 429 === _v0.status ? Promise.reject(_v29.INVALID_DROPBOX_URL) : 200 !== _v0.status ? Promise.reject(_v29.VIDEO_FILE_INVALID) : Promise.resolve();
              }
            }, {
              key: "start",
              value: function () {
                _v76(_v78(_v5.prototype), "start", this).call(this);
                var _v0 = this._validate,
                  _v1 = this._validateResponse,
                  _v2 = this._beginUploading,
                  _v3 = this._onUploaderFail;
                _v0().then(_v1).then(_v2).catch(_v3);
              }
            }, {
              key: "pause",
              value: function () {
                this._xhr.abort(), _v76(_v78(_v5.prototype), "pause", this).call(this);
              }
            }, {
              key: "resume",
              value: function () {
                _v76(_v78(_v5.prototype), "resume", this).call(this), this.start();
              }
            }, {
              key: "fail",
              value: function (_v0) {
                this.uploader.fail(_v0);
              }
            }, {
              key: "cancel",
              value: function () {
                this._xhr.abort(), _v76(_v78(_v5.prototype), "cancel", this).call(this);
              }
            }], _v75(_v5.prototype, _v2), _v3 && _v75(_v5, _v3), Object.defineProperty(_v5, "prototype", {
              writable: !1
            }), _v5;
          }(_v39),
          _v80 = _v2(0);
        function _v81(_v0) {
          return (_v81 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v82(_v0, _v1) {
          var _v2 = Object.keys(_v0);
          if (Object.getOwnPropertySymbols) {
            var _v3 = Object.getOwnPropertySymbols(_v0);
            _v1 && (_v3 = _v3.filter(function (_v0) {
              return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
            })), _v2.push.apply(_v2, _v3);
          }
          return _v2;
        }
        function _v83(_v0, _v1) {
          (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
          for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
          return _v3;
        }
        function _v84(_v0, _v1) {
          for (var _v2 = 0; _v2 < _v1.length; _v2++) {
            var _v3 = _v1[_v2];
            _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v85(_v3.key), _v3);
          }
        }
        function _v85(_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" !== _v81(_v0) || null === _v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" !== _v81(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(_v0);
          }(_v0, "string");
          return "symbol" === _v81(_v1) ? _v1 : String(_v1);
        }
        function _v86() {
          return (_v86 = "u" > typeof Reflect && Reflect.get ? Reflect.get.bind() : function (_v0, _v1, _v2) {
            var _v3 = function (_v0, _v1) {
              for (; !Object.prototype.hasOwnProperty.call(_v0, _v1) && null !== (_v0 = _v88(_v0)););
              return _v0;
            }(_v0, _v1);
            if (_v3) {
              var _v4 = Object.getOwnPropertyDescriptor(_v3, _v1);
              return _v4.get ? _v4.get.call(arguments.length < 3 ? _v0 : _v2) : _v4.value;
            }
          }).apply(this, arguments);
        }
        function _v87(_v0, _v1) {
          return (_v87 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_v0, _v1) {
            return _v0.__proto__ = _v1, _v0;
          })(_v0, _v1);
        }
        function _v88(_v0) {
          return (_v88 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (_v0) {
            return _v0.__proto__ || Object.getPrototypeOf(_v0);
          })(_v0);
        }
        var _v89 = function (_v0) {
          if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
          _v5.prototype = Object.create(_v0 && _v0.prototype, {
            constructor: {
              value: _v5,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v0 && _v87(_v5, _v0);
          var _v1,
            _v2,
            _v3,
            _v4 = (_v1 = function () {
              if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (_v0) {
                return !1;
              }
            }(), function () {
              var _v0,
                _v1 = _v88(_v5);
              return _v0 = _v1 ? Reflect.construct(_v1, arguments, _v88(this).constructor) : _v1.apply(this, arguments), function (_v0, _v1) {
                if (_v1 && ("object" === _v81(_v1) || "function" == typeof _v1)) return _v1;
                if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
                if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return _v0;
              }(this, _v0);
            });
          function _v5(_v0, _v1, _v2, _v3, _v4, _v5) {
            var _v6;
            if (function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v5), _v6 = _v4.call(this, _v0, _v1, _v2, _v3, _v4), !_v0.leatherback) throw Error("[ApiUploadClient] leatherback data not in the config");
            if (_v1 === _v9.CLIP_REPLACE && !_v4) throw Error("[ApiUploadClient] Clip replacement upload must provide a clip_id");
            return _v6.clip_data = _v5 || null, _v6.uploaders = [], _v6.chunk_size = _v0.default_parallel_chunk_size, _v6.clip_id = _v4 || null, _v6.endpoint_count = null, _v6._setFileSizeChangeListener(), _v6.vimeo_app = new _v60(_v0, _v6.logger), _v6;
          }
          return _v2 = [{
            key: "_bindMethods",
            value: function () {
              this._create = this._create.bind(this), this._start = this._start.bind(this), this._validate = this._validate.bind(this), this._deleteClip = this._deleteClip.bind(this), this._deleteVersion = this._deleteVersion.bind(this), this._setFileSizeChangeListener = this._setFileSizeChangeListener.bind(this), this._startUploader = this._startUploader.bind(this), this._getNewToken = this._getNewToken.bind(this), this._createAndStartUploaderWithEndpoints = this._createAndStartUploaderWithEndpoints.bind(this), _v86(_v88(_v5.prototype), "_bindMethods", this).call(this);
            }
          }, {
            key: "_validate",
            value: function (_v0) {
              var _v1 = function (_v0) {
                  if (Array.isArray(_v0)) return _v0;
                }(_v0) || function (_v0) {
                  var _v1 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
                  if (null != _v1) {
                    var _v2,
                      _v3,
                      _v4,
                      _v5,
                      _v6 = [],
                      _v7 = !0,
                      _v8 = !1;
                    try {
                      _v4 = (_v1 = _v1.call(_v0)).next, !1;
                      for (; !(_v7 = (_v2 = _v4.call(_v1)).done) && (_v6.push(_v2.value), 2 !== _v6.length); _v7 = !0);
                    } catch (_v0) {
                      _v8 = !0, _v3 = _v0;
                    } finally {
                      try {
                        if (!_v7 && null != _v1.return && (_v5 = _v1.return(), Object(_v5) !== _v5)) return;
                      } finally {
                        if (_v8) throw _v3;
                      }
                    }
                    return _v6;
                  }
                }(_v0) || function (_v0) {
                  if (_v0) {
                    if ("string" == typeof _v0) return _v83(_v0, 2);
                    var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
                    if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
                    if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v83(_v0, 2);
                  }
                }(_v0) || function () {
                  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }(),
                _v2 = _v1[0],
                _v3 = _v1[1],
                _v4 = this.id,
                _v5 = this.file,
                _v6 = this.config,
                _v7 = this.logger,
                _v8 = this._onValidateReject;
              return this.fastest_region = _v2, this.ip = _v3, this.state = _v7.VALIDATING, new _v54("".concat(_v6.tomdawg.url, "/probe/").concat(_v4), _v7).validateFile(_v5).catch(_v8);
            }
          }, {
            key: "_create",
            value: function () {
              var _v0 = this.config,
                _v1 = this.file,
                _v2 = this.logger,
                _v3 = this.upload_type,
                _v4 = this.clip_id,
                _v5 = {},
                _v6 = "";
              if (_v3 === _v9.CLIP_REPLACE && _v4) _v2.info("[ApiUploadClient] _create: Replacing clip by creating new version through API via gcs approach"), _v5 = {
                file_name: _v1.name.replace(/\.[^.]*$/, "").slice(0, 128),
                upload: {
                  approach: "gcs",
                  size: _v1.size,
                  mime_type: _v1.type
                }
              }, _v6 = "https://".concat(_v0.api.url, "/videos/").concat(_v4, "/versions?fields=upload.gcs,uri,upload.gcs_uid");else {
                _v2.info("[ApiUploadClient] _create: Creating file upload through API via gcs approach");
                var _v7 = _v1.target_user_id ? _v1.target_user_id : _v0.user.id;
                _v5 = function (_v0) {
                  for (var _v1 = 1; _v1 < arguments.length; _v1++) {
                    var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
                    _v1 % 2 ? _v82(Object(_v2), !0).forEach(function (_v0) {
                      var _v1, _v2;
                      _v1 = _v0, _v2 = _v2[_v0], (_v1 = _v85(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
                        value: _v2,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      }) : _v0[_v1] = _v2;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v82(Object(_v2)).forEach(function (_v0) {
                      Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
                    });
                  }
                  return _v0;
                }({
                  upload: {
                    approach: "gcs",
                    size: _v1.size,
                    mime_type: _v1.type
                  },
                  name: _v1.name.replace(/\.[^.]*$/, "").slice(0, 128),
                  folder_id: _v1.folder_id
                }, this.clip_data), _v6 = "https://".concat(_v0.api.url, "/users/").concat(_v7, "/videos?fields=upload.gcs,uri,upload.gcs_uid");
              }
              return _v21(_v6, {
                method: "POST",
                headers: {
                  Authorization: "jwt ".concat(_v0.api.jwt),
                  Accept: "application/vnd.vimeo.*+json;version=3.4",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(_v5),
                withCredentials: !0,
                successCode: 201
              });
            }
          }, {
            key: "_start",
            value: function (_v0) {
              var _v1 = _v0.target,
                _v2 = _v1.status,
                _v3 = _v1.responseText,
                _v4 = _v1.statusText,
                _v5 = this.logger,
                _v6 = JSON.parse(_v3);
              if (201 !== _v2) return _v5.info("[ApiUploadClient] API_UPLOAD_FAILED: ".concat(_v2, ": ").concat(_v4, " - ").concat(_v6.error || _v3)), Promise.reject(_v0);
              try {
                return this.uploads_completed = 0, this.endpoints = _v6.upload.gcs, this.uid = _v6.upload.gcs_uid, this.clip_url = _v6.uri, this.clip_id = _v6.uri.split("/")[2], this.attempt_id = _v6.upload.gcs[0].metadata.connections.upload_attempt.uri.replace("/upload/attempt/", ""), this.endpoint_count = this.endpoints.length, _v5.info("[ApiUploadClient] _start: Uploading ".concat(this.file.size, " byte file to ").concat(this.endpoint_count, " endpoints")), this.endpoints.forEach(this._createAndStartUploaderWithEndpoints);
              } catch (_v0) {
                return Promise.reject();
              }
            }
          }, {
            key: "_onUploaderFail",
            value: function (_v0) {
              var _v1 = this.config,
                _v2 = this.logger,
                _v3 = this.uid,
                _v4 = this.uploaders;
              if (this.state !== _v7.FAILED) {
                if (_v2.info("[ApiUploadClient] _onUploaderFail: Failing remaining uploads"), "string" == typeof _v0 || "code" in _v0 && "message" in _v0) _v86(_v88(_v5.prototype), "_onUploaderFail", this).call(this, _v0), _v4.forEach(function (_v0) {
                  _v0.fail(_v0);
                });else {
                  var _v5 = JSON.parse(_v0.target.responseText);
                  "error_code" in _v5 && (0 !== _v5.error_code && 0 !== _v5.error_code || _v86(_v88(_v5.prototype), "_onUploaderFail", this).call(this, _v29.VERIFICATION_FAILED), 0 === _v5.error_code && "invalid_parameters" in _v5 && ("name" === _v5.invalid_parameters[0].field || "password" === _v5.invalid_parameters[0].field) && _v86(_v88(_v5.prototype), "_onUploaderFail", this).call(this, _v5.invalid_parameters[0].error)), "error" in _v5 && _v86(_v88(_v5.prototype), "_onUploaderFail", this).call(this, _v5.error), _v4.forEach(function (_v0) {
                    _v0.fail(_v5.error);
                  });
                }
                var _v6 = _v1.user,
                  _v7 = "id" in _v6 ? _v6.id : null;
                _v7 || (_v0 = Error("[ApiUploadClient] _update:  missing user id"), _v86(_v88(_v5.prototype), "_onUploaderFail", this).call(this, _v0)), _v22("".concat(_v1.api.url, "/users/").concat(_v7, "/uploads/").concat(_v3, "/fail"), {
                  method: "PATCH",
                  headers: {
                    Authorization: "Bearer ".concat(this.jwtToken),
                    "Content-Type": "application/json"
                  }
                });
              }
            }
          }, {
            key: "_createAndStartUploaderWithEndpoints",
            value: function (_v0, _v1) {
              var _v2 = this.endpoints,
                _v3 = this.file,
                _v4 = this.logger,
                _v5 = this.slice_method,
                _v6 = this.config,
                _v7 = this.uid,
                _v8 = this._onUploaderProgress,
                _v9 = this._onUploaderStateChange,
                _v10 = _v0.upload_link,
                _v11 = _v0.start_byte,
                _v12 = _v0.end_byte,
                _v13 = _v0.metadata.connections.upload_attempt,
                _v14 = _v2.length;
              _v4.info("[ApiUploadClient] _createAndStartUploaderWithEndpoints for bytes ".concat(_v11, " to ").concat(_v12, " (uploader ").concat(_v1 + 1, "/").concat(_v14, ")"));
              var _v15 = _v3[_v5](_v11, _v12 + 1);
              _v15.name = "".concat(_v7, "_").concat(_v1 + 1, "_").concat(_v14), _v15.uid = _v7;
              var _v16 = new _v51(_v6, _v10, _v15, _v3.type, _v4, this.jwtToken);
              _v16.storage_path = _v13, this.uploaders.push(_v16), _v16.on(_v8.PROGRESS, _v8), _v16.on(_v8.STATE_CHANGE, _v9), _v16.upload();
            }
          }, {
            key: "_getNewToken",
            value: function () {
              var _v0 = this,
                _v1 = this.config,
                _v2 = this.vimeo_app;
              try {
                return Promise.resolve(_v2.getNewToken(_v1.leatherback.token)).then(function (_v0) {
                  return _v0.jwtToken = _v0, _v0;
                });
              } catch (_v0) {
                return Promise.reject(_v0);
              }
            }
          }, {
            key: "_startUploader",
            value: function (_v0, _v1, _v2) {
              var _v3 = this.file,
                _v4 = this.logger,
                _v5 = this.config,
                _v6 = this.uploaders,
                _v7 = this._onUploaderProgress,
                _v8 = this._onUploaderStateChange,
                _v9 = new _v51(_v5, _v0, _v1, _v3.type, _v4);
              _v9.storage_path = _v2, _v6.push(_v9), _v9.on(_v8.PROGRESS, _v7), _v9.on(_v8.STATE_CHANGE, _v8), _v9.upload();
            }
          }, {
            key: "_onUploaderProgress",
            value: function () {
              var _v0 = this.uploaders;
              this.bytes_uploaded = _v0.reduce(function (_v0, _v1) {
                return _v0 + _v1.bytes_uploaded;
              }, 0), _v86(_v88(_v5.prototype), "_onUploaderProgress", this).call(this, {
                loaded: this.bytes_uploaded
              });
            }
          }, {
            key: "_onUploaderStateChange",
            value: function (_v0) {
              var _v1 = this,
                _v2 = this.logger,
                _v3 = this.signed_urls,
                _v4 = this._onUploaderComplete,
                _v5 = this._onUploaderFail,
                _v6 = this.uploaders,
                _v7 = this.endpoints,
                _v8 = this.uploads_completed,
                _v9 = this.config,
                _v10 = this.file;
              switch (_v0.state) {
                case _v7.COMPLETED:
                  var _v11 = null;
                  if (void 0 !== _v7 ? (this.uploads_completed = _v8 + 1, _v11 = _v7.length - this.uploads_completed) : (delete _v3[_v0.uploader.storage_path], _v11 = Object.keys(_v3).length), _v2.info("[ApiUploadClient] _onUploaderStateChange: Completed ".concat(_v0.uploader.file.name, ", ").concat(_v11, " remaining uploads")), _v11 > 0) return;
                  var _v12 = {
                    title: _v10.name,
                    folder_id: _v10.folder_id
                  };
                  _v21("https://".concat(_v9.api.url, "/videos/").concat(this.clip_id, "/upload_attempts/").concat(this.uid, "/complete"), {
                    method: "POST",
                    headers: {
                      Authorization: "jwt ".concat(_v9.api.jwt),
                      Accept: "application/vnd.vimeo.*+json;version=3.4",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(_v12),
                    withCredentials: !0
                  }).catch(function (_v0) {
                    var _v1 = JSON.parse(_v0.target.responseText);
                    "error_code" in _v1 && _v1.logger.warn("[ApiUploadClient] _onUploaderStateChange: Completed: Upload complete call to Vimeo API failed: ".concat(_v1.error));
                  }), _v4(), this._sendBigPictureEvent("uploader_complete");
                  break;
                case _v7.UPLOADING:
                  var _v13 = _v6.some(function (_v0) {
                    return _v0.state === _v7.UPLOADING;
                  });
                  this.state = _v13 ? _v7.UPLOADING : _v0.state;
                  break;
                case _v7.FAILED:
                  _v5(_v0.uploader.error), this._sendBigPictureEvent("upload_failure");
              }
            }
          }, {
            key: "_setFileSizeChangeListener",
            value: function () {
              var _v0 = this;
              this.on(_v8.FILE_SIZE_CHANGED, function (_v0) {
                _v0.fail(_v0);
              });
            }
          }, {
            key: "_deleteVersion",
            value: function () {
              var _v0 = this,
                _v1 = this.logger,
                _v2 = this.config,
                _v3 = this.uid,
                _v4 = this.clip_id;
              if (_v1.info("[ApiUploadClient] _deleteVersion: Canceling replacement by deleting version"), _v3) {
                var _v5 = "https://".concat(_v2.api.url, "/videos/").concat(_v4, "/upload_attempts/").concat(_v3),
                  _v6 = {
                    method: "DELETE",
                    headers: {
                      Authorization: "jwt ".concat(_v2.api.jwt),
                      "Content-Type": "application/json"
                    },
                    withCredentials: !0,
                    successCode: 202
                  };
                _v22(_v5, _v6).catch(function (_v0) {
                  _v1.warn("Version deletion for replacement cancellation failed", _v0);
                }), _v22(_v5, _v6).then(function () {
                  _v1.info("[ApiUploadClient] _deleteVersion: Version deletion succeeded:", _v4), _v86(_v88(_v5.prototype), "finishCancel", _v0).call(_v0);
                }).catch(function (_v0) {
                  _v86(_v88(_v5.prototype), "finishCancel", _v0).call(_v0), _v1.warn("[ApiUploadClient] _deleteVersion: Version deletion failed:", _v0, _v4);
                });
              }
            }
          }, {
            key: "_deleteClip",
            value: function () {
              var _v0 = this,
                _v1 = this.logger,
                _v2 = this.config,
                _v3 = this.clip_url;
              _v1.info("[ApiUploadClient] _deleteClip: Deleting clip: ".concat(_v3)), _v22("https://".concat(_v2.api.url).concat(_v3), {
                method: "DELETE",
                headers: {
                  Authorization: "jwt ".concat(_v2.api.jwt),
                  Accept: "application/vnd.vimeo.*+json;version=3.4",
                  "Content-Type": "application/json"
                },
                withCredentials: !0,
                successCode: 204
              }).then(function () {
                _v1.info("[ApiUploadClient] _deleteClip: Clip deletion succeeded:", _v3), _v86(_v88(_v5.prototype), "finishCancel", _v0).call(_v0);
              }).catch(function (_v0) {
                _v86(_v88(_v5.prototype), "finishCancel", _v0).call(_v0), _v1.warn("[ApiUploadClient] _deleteClip: Clip deletion failed:", _v0, _v3);
              });
            }
          }, {
            key: "start",
            value: function () {
              _v86(_v88(_v5.prototype), "start", this).call(this);
              var _v0 = this.config.lighthouse,
                _v1 = this._validate,
                _v2 = this._create,
                _v3 = this._start,
                _v4 = this._onUploaderFail,
                _v5 = this._getNewToken;
              this._sendBigPictureEvent("upload_from_client"), _v0.getFastestRegion().then(_v1).then(_v5).then(_v2).then(_v3).catch(_v4);
            }
          }, {
            key: "_sendBigPictureEvent",
            value: function (_v0) {
              var _v1 = {
                upload_session_id: this.id,
                app_id: this.api_app,
                upload_stage: _v0,
                upload_system: "javascript_uploader",
                file_size: this.file.size,
                file_type: this.file.type,
                region: null,
                clip_id: null,
                attempt_id: null,
                upload_id: null,
                num_files: null,
                num_endpoints: this.endpoint_count ? this.endpoint_count : null,
                upload_service: "UPLOAD_SERVICE_API"
              };
              _v80.BigPictureClient.sendEvent(new _v80.Event("time_to_play_stages", 5, _v1));
            }
          }, {
            key: "pause",
            value: function () {
              _v86(_v88(_v5.prototype), "pause", this).call(this), this.uploaders.forEach(function (_v0) {
                _v0.pause();
              });
            }
          }, {
            key: "resume",
            value: function () {
              _v86(_v88(_v5.prototype), "resume", this).call(this), this.uploaders.forEach(function (_v0) {
                _v0.resume();
              });
            }
          }, {
            key: "fail",
            value: function (_v0) {
              this.uploaders.forEach(function (_v0) {
                _v0.fail(_v0);
              });
            }
          }, {
            key: "cancel",
            value: function () {
              var _v0 = this.logger,
                _v1 = this.upload_type;
              _v86(_v88(_v5.prototype), "cancel", this).call(this), this.uploaders.forEach(function (_v0) {
                _v0.cancel();
              }), _v0.info("[ApiUploadClient] cancel(): Cancelling upload"), _v1 === _v9.CLIP_REPLACE ? this._deleteVersion() : this.clip_id && this._deleteClip();
            }
          }], _v84(_v5.prototype, _v2), _v3 && _v84(_v5, _v3), Object.defineProperty(_v5, "prototype", {
            writable: !1
          }), _v5;
        }(_v39);
        function _v90(_v0) {
          return (_v90 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v91(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v90(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v90(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v90(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        var _v92 = [_v7.CANCELED, _v7.COMPLETED, _v7.FAILED],
          _v93 = function () {
            var _v0, _v1;
            function _v2(_v0) {
              !function (_v0, _v1) {
                if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
              }(this, _v2), this.config = _v0, this._onBeforeWindowUnload = this._onBeforeWindowUnload.bind(this), this._onWindowUnload = this._onWindowUnload.bind(this), this._toggleAbort = this._toggleAbort.bind(this), this.is_set = !1, this.logger = new _v27(_v0);
            }
            return _v0 = [{
              key: "uploads",
              get: function () {
                return this._uploads;
              },
              set: function (_v0) {
                var _v1 = this;
                this._uploads !== _v0 && (this._uploads = [], _v0.forEach(function (_v0) {
                  -1 === _v92.indexOf(_v0.state) && _v1._uploads.push(_v0);
                }), this._uploads.length > 0 ? this._setWarning() : this._removeWarning());
              }
            }, {
              key: "_setWarning",
              value: function () {
                this.is_set || (window.addEventListener("beforeunload", this._onBeforeWindowUnload), window.addEventListener("unload", this._onWindowUnload), this.is_set = !0);
              }
            }, {
              key: "_removeWarning",
              value: function () {
                window.removeEventListener("beforeunload", this._onBeforeWindowUnload), window.removeEventListener("unload", this._onWindowUnload), this.is_set = !1;
              }
            }, {
              key: "_makeAborterRequest",
              value: function (_v0, _v1, _v2, _v3, _v4) {
                var _v5 = this;
                return _v21("https://".concat(_v4.replace(/\/$/, ""), "/users/").concat(_v2, "/uploads/").concat(_v1, "/").concat(_v0 ? "revive" : "abort"), {
                  method: "PUT",
                  headers: {
                    Authorization: "jwt ".concat(_v3),
                    Accept: "application/vnd.vimeo.*+json;version=3.4",
                    "Content-Type": "application/json"
                  },
                  withCredentials: !0,
                  successCode: 204
                }).then(function (_v0) {
                  return _v5.logger.debug("[AttemptAborter] response: ", _v5._xhrEventToLog(_v0));
                }).catch(function (_v0) {
                  return _v5.logger.warn("[AttemptAborter] error: ", _v5._xhrEventToLog(_v0));
                });
              }
            }, {
              key: "_xhrEventToLog",
              value: function (_v0) {
                if (_v0 instanceof Event) {
                  var _v1 = _v0.target,
                    _v2 = _v1.status,
                    _v3 = _v1.statusText,
                    _v4 = _v1.responseText,
                    _v5 = _v1.responseType,
                    _v6 = _v1.response;
                  return JSON.stringify({
                    status: _v2,
                    statusText: _v3,
                    responseText: _v4,
                    responseType: _v5,
                    typeofResponse: _v90(_v6)
                  });
                }
                return null;
              }
            }, {
              key: "_toggleAbort",
              value: function (_v0, _v1) {
                var _v2 = this.config,
                  _v3 = _v2.user,
                  _v4 = _v2.api,
                  _v5 = _v1.uid,
                  _v6 = "id" in _v3 ? _v3.id : null,
                  _v7 = _v0 ? "revive" : "abort";
                _v5 ? _v1.apiToken ? _v6 ? "object" === _v90(_v4) && _v4.url ? (this.logger.debug("[AttemptAborter] fetching ".concat(_v7, " for upload attempt: "), _v5), this._makeAborterRequest(_v0, _v5, _v6, _v1.apiToken, _v4.url)) : this.logger.warn("[AttemptAborter] skip ".concat(_v7, "; reason: missing Vimeo API URL")) : this.logger.warn("[AttemptAborter] skip ".concat(_v7, "; reason: config missing user ID"), _v3) : this.logger.warn("[AttemptAborter] skip ".concat(_v7, "; reason: missing API token")) : this.logger.warn("[AttemptAborter] skip ".concat(_v7, "; reason: missing upload attempt ID"), _v1);
              }
            }, {
              key: "_onBeforeWindowUnload",
              value: function (_v0) {
                var _v1 = this.uploads,
                  _v2 = this._toggleAbort;
                this._timeout = window.setTimeout(function () {
                  _v1.forEach(function (_v0) {
                    _v2(!0, _v0);
                  });
                }, 0), _v1.forEach(function (_v0) {
                  _v2(!1, _v0);
                });
                var _v3 = "WARNING: You are currently uploading ".concat(_v1.length, " video\n            ").concat(1 !== _v1.length ? "s" : "", "! Your uploads will not be completed if you leave this page.");
                return ((_v0 = _v0 || window.event) || window.event).returnValue = _v3, _v3;
              }
            }, {
              key: "_onWindowUnload",
              value: function (_v0) {
                clearTimeout(this._timeout);
              }
            }], _v91(_v2.prototype, _v0), _v1 && _v91(_v2, _v1), Object.defineProperty(_v2, "prototype", {
              writable: !1
            }), _v2;
          }(),
          _v94 = "127.0.0.1",
          _v95 = [{
            PingUrl: "https://storage.googleapis.com/vimeo-prod-src-std-us/0.png",
            Region: "gs-us"
          }],
          _v96 = _v95[0];
        function _v97(_v0) {
          return (_v97 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v98(_v0, _v1) {
          var _v2 = Object.keys(_v0);
          if (Object.getOwnPropertySymbols) {
            var _v3 = Object.getOwnPropertySymbols(_v0);
            _v1 && (_v3 = _v3.filter(function (_v0) {
              return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
            })), _v2.push.apply(_v2, _v3);
          }
          return _v2;
        }
        function _v99(_v0) {
          for (var _v1 = 1; _v1 < arguments.length; _v1++) {
            var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
            _v1 % 2 ? _v98(Object(_v2), !0).forEach(function (_v0) {
              var _v1, _v2, _v3;
              _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = _v101(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
                value: _v3,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : _v1[_v2] = _v3;
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v98(Object(_v2)).forEach(function (_v0) {
              Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
            });
          }
          return _v0;
        }
        function _v100(_v0, _v1) {
          for (var _v2 = 0; _v2 < _v1.length; _v2++) {
            var _v3 = _v1[_v2];
            _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v101(_v3.key), _v3);
          }
        }
        function _v101(_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" !== _v97(_v0) || null === _v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" !== _v97(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(_v0);
          }(_v0, "string");
          return "symbol" === _v97(_v1) ? _v1 : String(_v1);
        }
        var _v102 = function () {
          var _v0, _v1;
          function _v2(_v0) {
            var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.console;
            if (function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v2), !_v0) throw Error("[Lighthouse] url required in first argument");
            this.url = _v0, this.logger = _v1, this.regions = [], this.sorted_regions = [], this._getRegions = this._getRegions.bind(this), this._onRegionsGetSuccess = this._onRegionsGetSuccess.bind(this), this._raceEndpoints = this._raceEndpoints.bind(this), this._sortByRttAndDistance = this._sortByRttAndDistance.bind(this), this._pickWinningEndpoint = this._pickWinningEndpoint.bind(this), this._onRegionsGetFail = this._onRegionsGetFail.bind(this), this._onRaceFail = this._onRaceFail.bind(this), this._getIp = this._getIp.bind(this), this._onIpGetSuccess = this._onIpGetSuccess.bind(this), this._onIpGetFail = this._onIpGetFail.bind(this), this._warn = this._warn.bind(this), this.ip = null, this.fastest_region = null, this.getFastestRegion();
          }
          return _v0 = [{
            key: "_getRegions",
            value: function () {
              if (this.regions.length > 0) return Promise.resolve(this.regions);
              var _v0 = this.url;
              return this._regionsRequest(_v0);
            }
          }, {
            key: "_getIp",
            value: function () {
              return null !== this.ip ? Promise.resolve(this.ip) : _v22(this.url);
            }
          }, {
            key: "_onRegionsGetSuccess",
            value: function (_v0) {
              var _v1 = _v0.target,
                _v2 = _v1.status,
                _v3 = _v1.responseText;
              if (200 !== _v2) return this.regions = _v95, this.ip = _v94, Promise.resolve(this.regions);
              var _v4 = null;
              try {
                _v4 = JSON.parse(_v3);
              } catch (_v0) {
                return this._warn("[GETREGIONS] ".concat(_v0)), this.regions = _v95, this.ip = _v94, Promise.resolve(this.regions);
              }
              return this.regions = _v4.Regions, this.ip = _v4.Ip, Promise.resolve(_v4.Regions);
            }
          }, {
            key: "_onIpGetSuccess",
            value: function (_v0) {
              var _v1 = _v0.target,
                _v2 = _v1.status,
                _v3 = _v1.responseText;
              if (200 !== _v2) return Promise.reject("".concat(_v2, ": ").concat(_v3));
              var _v4 = null;
              try {
                _v4 = JSON.parse(_v3);
              } catch (_v0) {
                return Promise.reject(_v0);
              }
              return this.ip = _v4.Ip, Promise.resolve(_v4.Ip);
            }
          }, {
            key: "_raceEndpoints",
            value: function (_v0) {
              var _v1 = this._pingRequest,
                _v2 = this._warn,
                _v3 = [],
                _v4 = 0,
                _v5 = new Promise(function (_v0) {
                  _v0.map(function (_v0, _v1) {
                    var _v2 = window.performance.now();
                    return _v1(_v0.PingUrl).then(function (_v0) {
                      var _v1 = window.performance.now() - _v2,
                        _v2 = 200 !== _v0.target.status ? 0 : _v1;
                      return _v3.push(_v99(_v99({}, _v0), {}, {
                        distance_index: _v1,
                        rtt: _v2
                      })), _v1 >= 0 && _v0(_v3), _v0;
                    }).catch(function (_v0) {
                      var _v1 = "There was an error pinging ".concat(_v0.Region, ": ").concat(_v0.message);
                      _v2("_raceEndpoints: ".concat(_v1));
                    }).then(function (_v0) {
                      return ++_v4 === _v0.length && _v0(_v3), _v0;
                    });
                  });
                });
              return Promise.race([new Promise(function (_v0, _v1) {
                setTimeout(function () {
                  _v3.length || (_v2("_raceEndpoints: No successful responses after ".concat(0, "ms")), _v1(_v29.LIGHTHOUSE_RACE_ERROR)), _v0(_v3);
                }, 0);
              }), _v5]);
            }
          }, {
            key: "_sortByRttAndDistance",
            value: function (_v0) {
              return new Promise(function (_v0) {
                _v0.sort(function (_v0, _v1) {
                  return 100 * Math.abs((_v0.rtt - _v1.rtt) / _v0.rtt) < .2 ? _v0.distance_index - _v1.distance_index : _v0.rtt - _v1.rtt;
                }), _v0(_v0);
              });
            }
          }, {
            key: "_pickWinningEndpoint",
            value: function (_v0) {
              return this.sorted_regions = _v0, this.fastest_region = _v0[0], Promise.resolve([this.fastest_region, this.ip]);
            }
          }, {
            key: "_onRegionsGetFail",
            value: function (_v0) {
              return (0, this._warn)("_onRegionsGetFail: ".concat(_v0.toString())), this.ip = _v94, this.regions = _v95, this.sorted_regions = _v95, this.fastest_region = _v96, Promise.resolve([this.fastest_region, this.ip]);
            }
          }, {
            key: "_onIpGetFail",
            value: function (_v0) {
              return (0, this._warn)("_onIpGetFail: ".concat(_v0.toString())), Promise.reject(_v29.LIGHTHOUSE_LOAD_ERROR);
            }
          }, {
            key: "_onRaceFail",
            value: function (_v0) {
              var _v1 = this.regions,
                _v2 = this._warn;
              return _v0 === _v29.LIGHTHOUSE_LOAD_ERROR ? Promise.reject(_v0) : (_v2("_onRaceFail: ".concat(_v0.toString())), _v1 && _v1.length > 0 ? (_v2("_onRaceFail: Resolving with unsorted first region"), Promise.resolve(_v1[0])) : Promise.resolve(this.regions));
            }
          }, {
            key: "getFastestRegion",
            value: function () {
              var _v0 = this.fastest_region,
                _v1 = this.ip;
              if (_v0) return Promise.resolve([_v0, _v1]);
              var _v2 = this._getRegions,
                _v3 = this._onRegionsGetSuccess,
                _v4 = this._pickWinningEndpoint,
                _v5 = this._onRegionsGetFail;
              return _v2().catch(_v5).then(_v3).then(_v4);
            }
          }, {
            key: "getIpAddress",
            value: function () {
              var _v0 = this.ip;
              if (_v0) return Promise.resolve(_v0);
              var _v1 = this._getIp,
                _v2 = this._onIpGetFail,
                _v3 = this._onIpGetSuccess;
              return _v1().catch(_v2).then(_v3);
            }
          }, {
            key: "_warn",
            value: function (_v0) {
              var _v1 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                _v2 = this.logger,
                _v3 = "[Lighthouse] ".concat(_v0);
              _v2.warn(_v3), _v1 && _v28(_v3);
            }
          }, {
            key: "_regionsRequest",
            value: function (_v0) {
              return _v21(_v0);
            }
          }, {
            key: "_pingRequest",
            value: function (_v0) {
              return _v21(_v0, {
                method: "HEAD"
              });
            }
          }], _v100(_v2.prototype, _v0), _v1 && _v100(_v2, _v1), Object.defineProperty(_v2, "prototype", {
            writable: !1
          }), _v2;
        }();
        function _v103(_v0) {
          return (_v103 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v104(_v0, _v1) {
          for (var _v2, _v3, _v4 = 0; _v4 < _v1.length; _v4++) {
            var _v5 = _v1[_v4];
            _v5.enumerable = _v5.enumerable || !1, _v5.configurable = !0, "value" in _v5 && (_v5.writable = !0), Object.defineProperty(_v0, (_v2 = _v5.key, _v3 = void 0, _v3 = function (_v0, _v1) {
              if ("object" !== _v103(_v0) || null === _v0) return _v0;
              var _v2 = _v0[Symbol.toPrimitive];
              if (void 0 !== _v2) {
                var _v3 = _v2.call(_v0, _v1 || "default");
                if ("object" !== _v103(_v3)) return _v3;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(_v0);
            }(_v2, "string"), "symbol" === _v103(_v3) ? _v3 : String(_v3)), _v5);
          }
        }
        var _v105,
          _v106 = function () {
            var _v0, _v1;
            function _v2(_v0) {
              if (function (_v0, _v1) {
                if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
              }(this, _v2), !_v0) throw Error("Undefined fresnel index name");
              "vimeo.com" !== window.location.hostname && (_v0 += "-dev"), this.endpoint = "https://fresnel.vimeocdn.com/add/".concat(_v0);
            }
            return _v0 = [{
              key: "log",
              value: function (_v0) {
                var _v1 = this.endpoint;
                if (_v0 = JSON.stringify(_v0), navigator.sendBeacon) return navigator.sendBeacon(_v1, _v0);
                var _v2 = new XMLHttpRequest();
                return _v2.open("POST", _v1, !0), _v2.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), _v2.send(_v0);
              }
            }], _v104(_v2.prototype, _v0), _v1 && _v104(_v2, _v1), Object.defineProperty(_v2, "prototype", {
              writable: !1
            }), _v2;
          }();
        function _v107(_v0) {
          return (_v107 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v108(_v0, _v1, _v2) {
          var _v3;
          return (_v3 = function (_v0, _v1) {
            if ("object" !== _v107(_v0) || null === _v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" !== _v107(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(_v0);
          }(_v1, "string"), (_v1 = "symbol" === _v107(_v3) ? _v3 : String(_v3)) in _v0) ? Object.defineProperty(_v0, _v1, {
            value: _v2,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : _v0[_v1] = _v2, _v0;
        }
        var _v109 = (_v108(_v105 = {}, "UPLOAD_SERVICE_SITE", 3), _v108(_v105, "UPLOAD_SERVICE_LEATHERBACK", 0), _v108(_v105, "UPLOAD_SERVICE_API", 0), _v105),
          _v110 = {
            GCS_RESUMABLE_UPLOADER_APP: 3,
            DROPBOX_APP: 0,
            BOX_APP: 0,
            ONEDRIVE_APP: 0,
            GOOGLE_DRIVE_APP: 0,
            PARALLEL_UPLOADER_APP: 0
          };
        function _v111(_v0) {
          return (_v111 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
            return typeof _v0;
          } : function (_v0) {
            return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
          })(_v0);
        }
        function _v112(_v0, _v1) {
          var _v2 = Object.keys(_v0);
          if (Object.getOwnPropertySymbols) {
            var _v3 = Object.getOwnPropertySymbols(_v0);
            _v1 && (_v3 = _v3.filter(function (_v0) {
              return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
            })), _v2.push.apply(_v2, _v3);
          }
          return _v2;
        }
        function _v113(_v0) {
          for (var _v1 = 1; _v1 < arguments.length; _v1++) {
            var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
            _v1 % 2 ? _v112(Object(_v2), !0).forEach(function (_v0) {
              var _v1, _v2, _v3;
              _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = _v115(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
                value: _v3,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : _v1[_v2] = _v3;
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v112(Object(_v2)).forEach(function (_v0) {
              Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
            });
          }
          return _v0;
        }
        function _v114(_v0, _v1) {
          for (var _v2 = 0; _v2 < _v1.length; _v2++) {
            var _v3 = _v1[_v2];
            _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v115(_v3.key), _v3);
          }
        }
        function _v115(_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" !== _v111(_v0) || null === _v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" !== _v111(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(_v0);
          }(_v0, "string");
          return "symbol" === _v111(_v1) ? _v1 : String(_v1);
        }
        var _v116 = [_v7.CANCELED, _v7.COMPLETED, _v7.FAILED];
        _v1.default = function () {
          var _v0, _v1;
          function _v2(_v0, _v1) {
            !function (_v0, _v1) {
              if (!(_v0 instanceof _v1)) throw TypeError("Cannot call a class as a function");
            }(this, _v2), this.config = _v113(_v113({}, _v3), _v0), this.uploads = new Map(), this.site_config = _v1, this._aborter = new _v93(this.config), this.config.lighthouse = new _v102(this.config.lighthouse.url), this.fresnel = new _v106("upload-stats");
            var _v2,
              _v3 = "production" == (_v2 = "u" > typeof window ? window.location.hostname : "localhost", RegExp(/\bvimeo.com\b/).test(_v2) ? "production" : "development") ? _v80.Service.FRESNEL_PROD : _v80.Service.FRESNEL_DEV;
            _v80.BigPictureClient.configure(new _v80.Configuration(_v3)), this._setSessionId(), this._setUserId(), this.config.use_core_count && this._setParallelRequestsCount(), this._onUploadStateChange = this._onUploadStateChange.bind(this), this.clear = this.clear.bind(this);
          }
          return _v0 = [{
            key: "version",
            get: function () {
              return this.config.version;
            }
          }, {
            key: "session_id",
            get: function () {
              return this._session_id;
            }
          }, {
            key: "user_id",
            get: function () {
              return this._user_id;
            }
          }, {
            key: "log_to_console",
            get: function () {
              return this.config.log_to_console;
            },
            set: function (_v0) {
              this.config.log_to_console = !0 === _v0;
            }
          }, {
            key: "summary",
            get: function () {
              var _v0 = {
                  total_bytes: 0,
                  bytes_uploaded: 0,
                  eta: 0,
                  active_count: 0,
                  complete_count: 0,
                  queued_count: 0,
                  in_progress_count: 0,
                  failed_count: 0,
                  canceled_count: 0,
                  total_count: 0,
                  is_paused: !1,
                  is_canceled: !1,
                  is_complete: !1,
                  has_failures: !1
                },
                _v1 = [];
              return this.uploads.forEach(function (_v0) {
                if (_v1.push(_v0.state), _v0.state !== _v7.CANCELED) {
                  if (_v0.state === _v7.FAILED) return _v0.failed_count++, void (_v0.has_failures = !0);
                  _v0.total_bytes += _v0.file.size, _v0.bytes_uploaded += _v0.bytes_uploaded, _v0.eta += _v0.eta || 0, _v0.total_count++, _v0.state === _v7.QUEUED && _v0.queued_count++, _v0.state !== _v7.COMPLETED ? _v0.active_count++ : _v0.complete_count++, _v0.in_progress_count = _v0.active_count - _v0.queued_count;
                } else _v0.canceled_count++;
              }), _v1.length > 0 && (_v0.is_paused = _v1.every(function (_v0) {
                return !_v6.hasOwnProperty(_v0);
              }), _v0.is_canceled = _v1.every(function (_v0) {
                return _v0 === _v7.CANCELED;
              }), _v0.is_complete = _v1.every(function (_v0) {
                return _v0 === _v7.COMPLETED;
              })), _v0;
            }
          }, {
            key: "uploading_clip_ids",
            get: function () {
              var _v0 = [];
              return this.uploads.forEach(function (_v0) {
                _v0.clip_id && _v0.state !== _v7.COMPLETE && _v0.push(_v0.clip_id);
              }), _v0;
            }
          }, {
            key: "_onUploadStateChange",
            value: function (_v0) {
              var _v1 = _v0.state,
                _v2 = _v0.is_resume,
                _v3 = _v0.is_restart,
                _v4 = _v0.upload;
              if (!_v2 && !_v3) {
                var _v5 = this.uploads;
                switch (_v1) {
                  case _v7.COMPLETED:
                  case _v7.CANCELED:
                  case _v7.FAILED:
                    this.startQueue();
                  case _v7.UPLOADING:
                }
                this._aborter.uploads = _v5, this._sendDataToFresnel(_v1, _v4);
              }
            }
          }, {
            key: "product",
            get: function () {
              return "u" > typeof window && "vimeo" in window && vimeo.is_mobile ? "mobile" : "u" > typeof window && -1 !== window.location.pathname.indexOf("ondemand") ? "ondemand" : "creator";
            }
          }, {
            key: "_setSessionId",
            value: function () {
              var _v0 = this;
              void 0 === this._session_id && setTimeout(function () {
                void 0 === window.__fa_session ? void 0 === window.vimeo || "object" !== _v111(window.vimeo.cur_user) ? _v0._session_id = "undefined.".concat(Date.now()) : _v0._session_id = "".concat(window.vimeo.cur_user.id, ".").concat(Date.now()) : _v0._session_id = window.__fa_session;
              }, 0);
            }
          }, {
            key: "_setUserId",
            value: function () {
              void 0 === this._user_id && (void 0 === window.vimeo || "object" !== _v111(window.vimeo.cur_user) ? this._user_id = 0 : this._user_id = window.vimeo.cur_user.id);
            }
          }, {
            key: "_setParallelRequestsCount",
            value: function () {
              var _v0 = window.navigator.hardwareConcurrency || 1;
              this.config.max_parallel_upload_requests = Math.min(_v0, 4);
            }
          }, {
            key: "_create",
            value: function (_v0, _v1, _v2, _v3, _v4) {
              var _v5 = this.config,
                _v6 = null;
              switch (_v1) {
                case _v9.CLIP:
                case _v9.CLIP_REPLACE:
                case _v9.DRM_CLIP:
                case _v9.DRM_CLIP_REPLACE:
                  _v6 = 0 === _v2 ? new _v89(_v5, _v1, _v2, _v0, _v3, _v4) : new _v67(_v5, _v1, _v2, _v0, _v3);
                  break;
                case _v9.API_PULL_CLIP:
                case _v9.API_PULL_CLIP_REPLACE:
                  _v6 = new _v79(_v5, _v1, _v2, _v0, _v3);
                  break;
                default:
                  throw Error("".concat(_v1, " upload not implemented yet"));
              }
              return this.uploads.set(_v6.id, _v6), _v6;
            }
          }, {
            key: "_start",
            value: function (_v0) {
              if (_v0.state !== _v7.QUEUED) return _v0;
              var _v1 = this.config.max_simultaneous_uploads;
              return this.summary.in_progress_count >= _v1 ? console.log("Max simultaneous uploads ".concat(_v1, ", leaving in queue")) : (_v0.on(_v8.STATE_CHANGE, this._onUploadStateChange), _v0.start()), _v0;
            }
          }, {
            key: "_sendDataToFresnel",
            value: function (_v0, _v1) {
              var _v2 = this.config,
                _v3 = this.fresnel,
                _v4 = this.uploads,
                _v5 = this.product,
                _v6 = this.session_id,
                _v7 = this.user_id,
                _v8 = _v1.file,
                _v9 = _v1.upload_type,
                _v10 = _v1.api_app,
                _v11 = 0;
              _v4.forEach(function (_v0) {
                _v0.active && _v11++;
              });
              var _v12 = _v1.uid ? _v1.uid : "",
                _v13 = "",
                _v14 = 0;
              _v2.service === _v10.UPLOAD_SERVICE_LEATHERBACK || _v2.service === _v10.UPLOAD_SERVICE_API ? (_v1.uploaders && _v1.uploaders.length && (_v13 = _v1.uploaders[0].bucket), _v14 = _v1.signed_urls ? Object.keys(_v1.signed_urls).length : _v14) : _v2.service === _v10.UPLOAD_SERVICE_SITE && (_v13 = _v1.uploader ? _v1.uploader.bucket : _v13);
              var _v15 = {
                name: _v8.STATE_CHANGE,
                session_id: _v6,
                user_id: _v7,
                upload_id: _v12,
                state: _v0,
                bucket: _v13,
                concurrent_uploads: _v11,
                parallel_requests: _v14,
                upload_type: _v9,
                product: _v5,
                api_app: _v10,
                size: _v8.size,
                file_type: _v8.type,
                location: window ? window.location.pathname : "",
                uploader_version: _v2.version,
                service: _v2.service,
                user_account_type: _v2.user.account_type,
                chunk_number: _v2.max_parallel_upload_requests
              };
              _v0 === _v7.COMPLETED && (_v15.duration = _v1.duration, _v15.speed_mbps = _v1.speed_mbps), _v0 === _v7.FAILED && (_v15.error = _v1.error.toString()), _v3.log(_v15);
            }
          }, {
            key: "queue",
            value: function (_v0) {
              var _v1 = this,
                _v2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v9.CLIP,
                _v3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                _v4 = arguments.length > 3 ? arguments[3] : void 0,
                _v5 = arguments.length > 4 ? arguments[4] : void 0;
              return _v0 instanceof FileList && (_v0 = Array.from(_v0)), Array.isArray(_v0) ? _v0.map(function (_v0) {
                return _v1._create(_v0, _v2, _v3, _v4, _v5);
              }) : this._create(_v0, _v2, _v3, _v4);
            }
          }, {
            key: "startQueue",
            value: function () {
              var _v0 = this,
                _v1 = [];
              return this.uploads.forEach(function (_v0) {
                var _v1 = _v0._start(_v0);
                _v1.push(_v1);
              }), _v1;
            }
          }, {
            key: "upload",
            value: function (_v0) {
              var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v9.CLIP,
                _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                _v3 = arguments.length > 3 ? arguments[3] : void 0,
                _v4 = arguments.length > 4 ? arguments[4] : void 0,
                _v5 = this.queue(_v0, _v1, _v2, _v3, _v4);
              return this.startQueue(), 1 === _v5.length ? _v5[0] : _v5;
            }
          }, {
            key: "setVimeoJWT",
            value: function (_v0) {
              this.config.api.jwt = _v0;
            }
          }, {
            key: "pauseAll",
            value: function () {
              this.uploads.forEach(function (_v0) {
                _v0.state === _v7.UPLOADING && _v0.pause();
              });
            }
          }, {
            key: "resumeAll",
            value: function () {
              this.uploads.forEach(function (_v0) {
                _v0.state === _v7.PAUSED && _v0.resume();
              });
            }
          }, {
            key: "cancelAll",
            value: function () {
              this.uploads.forEach(function (_v0) {
                _v116.includes(_v0.state) || _v0.cancel();
              });
            }
          }, {
            key: "clearAll",
            value: function () {
              this.uploads.forEach(this.clear);
            }
          }, {
            key: "clear",
            value: function (_v0) {
              _v116.includes(_v0.state) || _v0.cancel(), this.uploads.delete(_v0.id), _v0.state = _v7.REMOVED;
            }
          }], _v114(_v2.prototype, _v0), _v1 && _v114(_v2, _v1), Object.defineProperty(_v2, "prototype", {
            writable: !1
          }), _v2;
        }();
      }, function (_v0, _v1, _v2) {
        "use strict";

        _v2.r(_v1), _v2.d(_v1, "camelCaseTransform", function () {
          return _v12;
        }), _v2.d(_v1, "camelCaseTransformMerge", function () {
          return _v13;
        }), _v2.d(_v1, "camelCase", function () {
          return _v14;
        }), _v2.d(_v1, "capitalCaseTransform", function () {
          return _v16;
        }), _v2.d(_v1, "capitalCase", function () {
          return _v17;
        }), _v2.d(_v1, "constantCase", function () {
          return _v19;
        }), _v2.d(_v1, "dotCase", function () {
          return _v20;
        }), _v2.d(_v1, "headerCase", function () {
          return _v21;
        }), _v2.d(_v1, "noCase", function () {
          return _v7;
        }), _v2.d(_v1, "paramCase", function () {
          return _v22;
        }), _v2.d(_v1, "pascalCaseTransform", function () {
          return _v9;
        }), _v2.d(_v1, "pascalCaseTransformMerge", function () {
          return _v10;
        }), _v2.d(_v1, "pascalCase", function () {
          return _v11;
        }), _v2.d(_v1, "pathCase", function () {
          return _v23;
        }), _v2.d(_v1, "sentenceCaseTransform", function () {
          return _v24;
        }), _v2.d(_v1, "sentenceCase", function () {
          return _v25;
        }), _v2.d(_v1, "snakeCase", function () {
          return _v26;
        });
        var _v3 = function () {
          return (_v3 = Object.assign || function (_v0) {
            for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
            return _v0;
          }).apply(this, arguments);
        };
        function _v4(_v0) {
          return _v0.toLowerCase();
        }
        "function" == typeof SuppressedError && SuppressedError;
        var _v5 = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
          _v6 = /[^A-Z0-9]+/gi;
        function _v7(_v0, _v1) {
          void 0 === _v1 && (_v1 = {});
          for (var _v2 = _v1.splitRegexp, _v3 = _v1.stripRegexp, _v4 = _v1.transform, _v5 = _v1.delimiter, _v6 = _v8(_v8(_v0, void 0 === _v2 ? _v5 : _v2, "$1\0$2"), void 0 === _v3 ? _v6 : _v3, "\0"), _v7 = 0, _v8 = _v6.length; "\0" === _v6.charAt(_v7);) _v7++;
          for (; "\0" === _v6.charAt(_v8 - 1);) _v8--;
          return _v6.slice(_v7, _v8).split("\0").map(void 0 === _v4 ? _v4 : _v4).join(void 0 === _v5 ? " " : _v5);
        }
        function _v8(_v0, _v1, _v2) {
          return _v1 instanceof RegExp ? _v0.replace(_v1, _v2) : _v1.reduce(function (_v0, _v1) {
            return _v0.replace(_v1, _v2);
          }, _v0);
        }
        function _v9(_v0, _v1) {
          var _v2 = _v0.charAt(0),
            _v3 = _v0.substr(1).toLowerCase();
          return _v1 > 0 && _v2 >= "0" && _v2 <= "9" ? "_" + _v2 + _v3 : "" + _v2.toUpperCase() + _v3;
        }
        function _v10(_v0) {
          return _v0.charAt(0).toUpperCase() + _v0.slice(1).toLowerCase();
        }
        function _v11(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v7(_v0, _v3({
            delimiter: "",
            transform: _v9
          }, _v1));
        }
        function _v12(_v0, _v1) {
          return 0 === _v1 ? _v0.toLowerCase() : _v9(_v0, _v1);
        }
        function _v13(_v0, _v1) {
          return 0 === _v1 ? _v0.toLowerCase() : _v10(_v0);
        }
        function _v14(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v11(_v0, _v3({
            transform: _v12
          }, _v1));
        }
        function _v15(_v0) {
          return _v0.charAt(0).toUpperCase() + _v0.substr(1);
        }
        function _v16(_v0) {
          return _v15(_v0.toLowerCase());
        }
        function _v17(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v7(_v0, _v3({
            delimiter: " ",
            transform: _v16
          }, _v1));
        }
        function _v18(_v0) {
          return _v0.toUpperCase();
        }
        function _v19(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v7(_v0, _v3({
            delimiter: "_",
            transform: _v18
          }, _v1));
        }
        function _v20(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v7(_v0, _v3({
            delimiter: "."
          }, _v1));
        }
        function _v21(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v17(_v0, _v3({
            delimiter: "-"
          }, _v1));
        }
        function _v22(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v20(_v0, _v3({
            delimiter: "-"
          }, _v1));
        }
        function _v23(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v20(_v0, _v3({
            delimiter: "/"
          }, _v1));
        }
        function _v24(_v0, _v1) {
          var _v2 = _v0.toLowerCase();
          return 0 === _v1 ? _v15(_v2) : _v2;
        }
        function _v25(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v7(_v0, _v3({
            delimiter: " ",
            transform: _v24
          }, _v1));
        }
        function _v26(_v0, _v1) {
          return void 0 === _v1 && (_v1 = {}), _v20(_v0, _v3({
            delimiter: "_"
          }, _v1));
        }
      }, function (_v0, _v1, _v2) {
        "use strict";

        let _v3;
        _v2.r(_v1), _v2.d(_v1, "v1", function () {
          return _v15;
        }), _v2.d(_v1, "v3", function () {
          return _v25;
        }), _v2.d(_v1, "v4", function () {
          return _v27;
        }), _v2.d(_v1, "v5", function () {
          return _v29;
        }), _v2.d(_v1, "NIL", function () {
          return _v30;
        }), _v2.d(_v1, "version", function () {
          return _v31;
        }), _v2.d(_v1, "validate", function () {
          return _v7;
        }), _v2.d(_v1, "stringify", function () {
          return _v10;
        }), _v2.d(_v1, "parse", function () {
          return _v16;
        });
        let _v4 = new Uint8Array(16);
        function _v5() {
          if (!_v3 && !(_v3 = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          return _v3(_v4);
        }
        var _v6 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          _v7 = function (_v0) {
            return "string" == typeof _v0 && _v6.test(_v0);
          };
        let _v8 = [];
        for (let _v0 = 0; _v0 < 256; ++_v0) _v8.push((_v0 + 256).toString(16).slice(1));
        function _v9(_v0, _v1 = 0) {
          return _v8[_v0[_v1 + 0]] + _v8[_v0[_v1 + 1]] + _v8[_v0[_v1 + 2]] + _v8[_v0[_v1 + 3]] + "-" + _v8[_v0[_v1 + 4]] + _v8[_v0[_v1 + 5]] + "-" + _v8[_v0[_v1 + 6]] + _v8[_v0[_v1 + 7]] + "-" + _v8[_v0[_v1 + 8]] + _v8[_v0[_v1 + 9]] + "-" + _v8[_v0[_v1 + 10]] + _v8[_v0[_v1 + 11]] + _v8[_v0[_v1 + 12]] + _v8[_v0[_v1 + 13]] + _v8[_v0[_v1 + 14]] + _v8[_v0[_v1 + 15]];
        }
        var _v10 = function (_v0, _v1 = 0) {
          let _v2 = _v9(_v0, _v1);
          if (!_v7(_v2)) throw TypeError("Stringified UUID is invalid");
          return _v2;
        };
        let _v11,
          _v12,
          _v13 = 0,
          _v14 = 0;
        var _v15 = function (_v0, _v1, _v2) {
            let _v3 = _v1 && _v2 || 0,
              _v4 = _v1 || Array(16),
              _v5 = (_v0 = _v0 || {}).node || _v11,
              _v6 = void 0 !== _v0.clockseq ? _v0.clockseq : _v12;
            if (null == _v5 || null == _v6) {
              let _v0 = _v0.random || (_v0.rng || _v5)();
              null == _v5 && (_v5 = _v11 = [1 | _v0[0], _v0[1], _v0[2], _v0[3], _v0[4], _v0[5]]), null == _v6 && (_v6 = _v12 = 0 & (_v0[6] << 8 | _v0[7]));
            }
            let _v7 = void 0 !== _v0.msecs ? _v0.msecs : Date.now(),
              _v8 = void 0 !== _v0.nsecs ? _v0.nsecs : _v14 + 1,
              _v9 = _v7 - _v13 + (_v8 - _v14) / 0;
            if (_v9 < 0 && void 0 === _v0.clockseq && (_v6 = _v6 + 1 & 0), (_v9 < 0 || _v7 > _v13) && void 0 === _v0.nsecs && (_v8 = 0), _v8 >= 0) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
            _v13 = _v7, _v14 = _v8, _v12 = _v6;
            let _v10 = (0 * (0 & (_v7 += 0)) + _v8) % 0;
            _v4[_v3++] = _v10 >>> 24 & 255, _v4[_v3++] = _v10 >>> 16 & 255, _v4[_v3++] = _v10 >>> 8 & 255, _v4[_v3++] = 255 & _v10;
            let _v11 = _v7 / 0 * 0 & 0;
            _v4[_v3++] = _v11 >>> 8 & 255, _v4[_v3++] = 255 & _v11, _v4[_v3++] = _v11 >>> 24 & 15 | 16, _v4[_v3++] = _v11 >>> 16 & 255, _v4[_v3++] = _v6 >>> 8 | 128, _v4[_v3++] = 255 & _v6;
            for (let _v0 = 0; _v0 < 6; ++_v0) _v4[_v3 + _v0] = _v5[_v0];
            return _v1 || _v9(_v4);
          },
          _v16 = function (_v0) {
            let _v1;
            if (!_v7(_v0)) throw TypeError("Invalid UUID");
            let _v2 = new Uint8Array(16);
            return _v2[0] = (_v1 = parseInt(_v0.slice(0, 8), 16)) >>> 24, _v2[1] = _v1 >>> 16 & 255, _v2[2] = _v1 >>> 8 & 255, _v2[3] = 255 & _v1, _v2[4] = (_v1 = parseInt(_v0.slice(9, 13), 16)) >>> 8, _v2[5] = 255 & _v1, _v2[6] = (_v1 = parseInt(_v0.slice(14, 18), 16)) >>> 8, _v2[7] = 255 & _v1, _v2[8] = (_v1 = parseInt(_v0.slice(19, 23), 16)) >>> 8, _v2[9] = 255 & _v1, _v2[10] = (_v1 = parseInt(_v0.slice(24, 36), 16)) / 0 & 255, _v2[11] = _v1 / 0 & 255, _v2[12] = _v1 >>> 24 & 255, _v2[13] = _v1 >>> 16 & 255, _v2[14] = _v1 >>> 8 & 255, _v2[15] = 255 & _v1, _v2;
          };
        function _v17(_v0, _v1, _v2) {
          function _v3(_v0, _v1, _v2, _v3) {
            var _v4;
            if ("string" == typeof _v0 && (_v0 = function (_v0) {
              _v0 = unescape(encodeURIComponent(_v0));
              let _v1 = [];
              for (let _v0 = 0; _v0 < _v0.length; ++_v0) _v1.push(_v0.charCodeAt(_v0));
              return _v1;
            }(_v0)), "string" == typeof _v1 && (_v1 = _v16(_v1)), 16 !== (null == (_v4 = _v1) ? void 0 : _v4.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            let _v5 = new Uint8Array(16 + _v0.length);
            if (_v5.set(_v1), _v5.set(_v0, _v1.length), (_v5 = _v2(_v5))[6] = 15 & _v5[6] | _v1, _v5[8] = 63 & _v5[8] | 128, _v2) {
              _v3 = _v3 || 0;
              for (let _v0 = 0; _v0 < 16; ++_v0) _v2[_v3 + _v0] = _v5[_v0];
              return _v2;
            }
            return _v9(_v5);
          }
          try {
            _v3.name = _v0;
          } catch (_v0) {}
          return _v3.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", _v3.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", _v3;
        }
        function _v18(_v0) {
          return 14 + (_v0 + 64 >>> 9 << 4) + 1;
        }
        function _v19(_v0, _v1) {
          let _v2 = (0 & _v0) + (0 & _v1);
          return (_v0 >> 16) + (_v1 >> 16) + (_v2 >> 16) << 16 | 0 & _v2;
        }
        function _v20(_v0, _v1, _v2, _v3, _v4, _v5) {
          var _v6;
          return _v19((_v6 = _v19(_v19(_v1, _v0), _v19(_v3, _v5))) << _v4 | _v6 >>> 32 - _v4, _v2);
        }
        function _v21(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
          return _v20(_v1 & _v2 | ~_v1 & _v3, _v0, _v1, _v4, _v5, _v6);
        }
        function _v22(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
          return _v20(_v1 & _v3 | _v2 & ~_v3, _v0, _v1, _v4, _v5, _v6);
        }
        function _v23(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
          return _v20(_v1 ^ _v2 ^ _v3, _v0, _v1, _v4, _v5, _v6);
        }
        function _v24(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
          return _v20(_v2 ^ (_v1 | ~_v3), _v0, _v1, _v4, _v5, _v6);
        }
        var _v25 = _v17("v3", 48, function (_v0) {
            if ("string" == typeof _v0) {
              let _v0 = unescape(encodeURIComponent(_v0));
              _v0 = new Uint8Array(_v0.length);
              for (let _v0 = 0; _v0 < _v0.length; ++_v0) _v0[_v0] = _v0.charCodeAt(_v0);
            }
            return function (_v0) {
              let _v1 = [],
                _v2 = 32 * _v0.length;
              for (let _v0 = 0; _v0 < _v2; _v0 += 8) {
                let _v0 = _v0[_v0 >> 5] >>> _v0 % 32 & 255,
                  _v1 = parseInt("0123456789abcdef".charAt(_v0 >>> 4 & 15) + "0123456789abcdef".charAt(15 & _v0), 16);
                _v1.push(_v1);
              }
              return _v1;
            }(function (_v0, _v1) {
              _v0[_v1 >> 5] |= 128 << _v1 % 32, _v0[_v18(_v1) - 1] = _v1;
              let _v2 = 0,
                _v3 = 0,
                _v4 = 0,
                _v5 = 0;
              for (let _v0 = 0; _v0 < _v0.length; _v0 += 16) {
                let _v0 = _v2,
                  _v1 = _v3,
                  _v2 = _v4,
                  _v3 = _v5;
                _v2 = _v21(_v2, _v3, _v4, _v5, _v0[_v0], 7, 0), _v5 = _v21(_v5, _v2, _v3, _v4, _v0[_v0 + 1], 12, 0), _v4 = _v21(_v4, _v5, _v2, _v3, _v0[_v0 + 2], 17, 0), _v3 = _v21(_v3, _v4, _v5, _v2, _v0[_v0 + 3], 22, 0), _v2 = _v21(_v2, _v3, _v4, _v5, _v0[_v0 + 4], 7, 0), _v5 = _v21(_v5, _v2, _v3, _v4, _v0[_v0 + 5], 12, 0), _v4 = _v21(_v4, _v5, _v2, _v3, _v0[_v0 + 6], 17, 0), _v3 = _v21(_v3, _v4, _v5, _v2, _v0[_v0 + 7], 22, 0), _v2 = _v21(_v2, _v3, _v4, _v5, _v0[_v0 + 8], 7, 0), _v5 = _v21(_v5, _v2, _v3, _v4, _v0[_v0 + 9], 12, 0), _v4 = _v21(_v4, _v5, _v2, _v3, _v0[_v0 + 10], 17, 0), _v3 = _v21(_v3, _v4, _v5, _v2, _v0[_v0 + 11], 22, 0), _v2 = _v21(_v2, _v3, _v4, _v5, _v0[_v0 + 12], 7, 0), _v5 = _v21(_v5, _v2, _v3, _v4, _v0[_v0 + 13], 12, 0), _v4 = _v21(_v4, _v5, _v2, _v3, _v0[_v0 + 14], 17, 0), _v3 = _v21(_v3, _v4, _v5, _v2, _v0[_v0 + 15], 22, 0), _v2 = _v22(_v2, _v3, _v4, _v5, _v0[_v0 + 1], 5, 0), _v5 = _v22(_v5, _v2, _v3, _v4, _v0[_v0 + 6], 9, 0), _v4 = _v22(_v4, _v5, _v2, _v3, _v0[_v0 + 11], 14, 0), _v3 = _v22(_v3, _v4, _v5, _v2, _v0[_v0], 20, 0), _v2 = _v22(_v2, _v3, _v4, _v5, _v0[_v0 + 5], 5, 0), _v5 = _v22(_v5, _v2, _v3, _v4, _v0[_v0 + 10], 9, 0), _v4 = _v22(_v4, _v5, _v2, _v3, _v0[_v0 + 15], 14, 0), _v3 = _v22(_v3, _v4, _v5, _v2, _v0[_v0 + 4], 20, 0), _v2 = _v22(_v2, _v3, _v4, _v5, _v0[_v0 + 9], 5, 0), _v5 = _v22(_v5, _v2, _v3, _v4, _v0[_v0 + 14], 9, 0), _v4 = _v22(_v4, _v5, _v2, _v3, _v0[_v0 + 3], 14, 0), _v3 = _v22(_v3, _v4, _v5, _v2, _v0[_v0 + 8], 20, 0), _v2 = _v22(_v2, _v3, _v4, _v5, _v0[_v0 + 13], 5, 0), _v5 = _v22(_v5, _v2, _v3, _v4, _v0[_v0 + 2], 9, 0), _v4 = _v22(_v4, _v5, _v2, _v3, _v0[_v0 + 7], 14, 0), _v3 = _v22(_v3, _v4, _v5, _v2, _v0[_v0 + 12], 20, 0), _v2 = _v23(_v2, _v3, _v4, _v5, _v0[_v0 + 5], 4, 0), _v5 = _v23(_v5, _v2, _v3, _v4, _v0[_v0 + 8], 11, 0), _v4 = _v23(_v4, _v5, _v2, _v3, _v0[_v0 + 11], 16, 0), _v3 = _v23(_v3, _v4, _v5, _v2, _v0[_v0 + 14], 23, 0), _v2 = _v23(_v2, _v3, _v4, _v5, _v0[_v0 + 1], 4, 0), _v5 = _v23(_v5, _v2, _v3, _v4, _v0[_v0 + 4], 11, 0), _v4 = _v23(_v4, _v5, _v2, _v3, _v0[_v0 + 7], 16, 0), _v3 = _v23(_v3, _v4, _v5, _v2, _v0[_v0 + 10], 23, 0), _v2 = _v23(_v2, _v3, _v4, _v5, _v0[_v0 + 13], 4, 0), _v5 = _v23(_v5, _v2, _v3, _v4, _v0[_v0], 11, 0), _v4 = _v23(_v4, _v5, _v2, _v3, _v0[_v0 + 3], 16, 0), _v3 = _v23(_v3, _v4, _v5, _v2, _v0[_v0 + 6], 23, 0), _v2 = _v23(_v2, _v3, _v4, _v5, _v0[_v0 + 9], 4, 0), _v5 = _v23(_v5, _v2, _v3, _v4, _v0[_v0 + 12], 11, 0), _v4 = _v23(_v4, _v5, _v2, _v3, _v0[_v0 + 15], 16, 0), _v3 = _v23(_v3, _v4, _v5, _v2, _v0[_v0 + 2], 23, 0), _v2 = _v24(_v2, _v3, _v4, _v5, _v0[_v0], 6, 0), _v5 = _v24(_v5, _v2, _v3, _v4, _v0[_v0 + 7], 10, 0), _v4 = _v24(_v4, _v5, _v2, _v3, _v0[_v0 + 14], 15, 0), _v3 = _v24(_v3, _v4, _v5, _v2, _v0[_v0 + 5], 21, 0), _v2 = _v24(_v2, _v3, _v4, _v5, _v0[_v0 + 12], 6, 0), _v5 = _v24(_v5, _v2, _v3, _v4, _v0[_v0 + 3], 10, 0), _v4 = _v24(_v4, _v5, _v2, _v3, _v0[_v0 + 10], 15, 0), _v3 = _v24(_v3, _v4, _v5, _v2, _v0[_v0 + 1], 21, 0), _v2 = _v24(_v2, _v3, _v4, _v5, _v0[_v0 + 8], 6, 0), _v5 = _v24(_v5, _v2, _v3, _v4, _v0[_v0 + 15], 10, 0), _v4 = _v24(_v4, _v5, _v2, _v3, _v0[_v0 + 6], 15, 0), _v3 = _v24(_v3, _v4, _v5, _v2, _v0[_v0 + 13], 21, 0), _v2 = _v24(_v2, _v3, _v4, _v5, _v0[_v0 + 4], 6, 0), _v5 = _v24(_v5, _v2, _v3, _v4, _v0[_v0 + 11], 10, 0), _v4 = _v24(_v4, _v5, _v2, _v3, _v0[_v0 + 2], 15, 0), _v3 = _v24(_v3, _v4, _v5, _v2, _v0[_v0 + 9], 21, 0), _v2 = _v19(_v2, _v0), _v3 = _v19(_v3, _v1), _v4 = _v19(_v4, _v2), _v5 = _v19(_v5, _v3);
              }
              return [_v2, _v3, _v4, _v5];
            }(function (_v0) {
              if (0 === _v0.length) return [];
              let _v1 = 8 * _v0.length,
                _v2 = new Uint32Array(_v18(_v1));
              for (let _v0 = 0; _v0 < _v1; _v0 += 8) _v2[_v0 >> 5] |= (255 & _v0[_v0 / 8]) << _v0 % 32;
              return _v2;
            }(_v0), 8 * _v0.length));
          }),
          _v26 = {
            randomUUID: "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
          },
          _v27 = function (_v0, _v1, _v2) {
            if (_v26.randomUUID && !_v1 && !_v0) return _v26.randomUUID();
            let _v3 = (_v0 = _v0 || {}).random || (_v0.rng || _v5)();
            if (_v3[6] = 15 & _v3[6] | 64, _v3[8] = 63 & _v3[8] | 128, _v1) {
              _v2 = _v2 || 0;
              for (let _v0 = 0; _v0 < 16; ++_v0) _v1[_v2 + _v0] = _v3[_v0];
              return _v1;
            }
            return _v9(_v3);
          };
        function _v28(_v0, _v1) {
          return _v0 << _v1 | _v0 >>> 32 - _v1;
        }
        var _v29 = _v17("v5", 80, function (_v0) {
            let _v1 = [0, 0, 0, 0],
              _v2 = [0, 0, 0, 0, 0];
            if ("string" == typeof _v0) {
              let _v0 = unescape(encodeURIComponent(_v0));
              _v0 = [];
              for (let _v0 = 0; _v0 < _v0.length; ++_v0) _v0.push(_v0.charCodeAt(_v0));
            } else Array.isArray(_v0) || (_v0 = Array.prototype.slice.call(_v0));
            _v0.push(128);
            let _v3 = Math.ceil((_v0.length / 4 + 2) / 16),
              _v4 = Array(_v3);
            for (let _v0 = 0; _v0 < _v3; ++_v0) {
              let _v0 = new Uint32Array(16);
              for (let _v0 = 0; _v0 < 16; ++_v0) _v0[_v0] = _v0[64 * _v0 + 4 * _v0] << 24 | _v0[64 * _v0 + 4 * _v0 + 1] << 16 | _v0[64 * _v0 + 4 * _v0 + 2] << 8 | _v0[64 * _v0 + 4 * _v0 + 3];
              _v4[_v0] = _v0;
            }
            _v4[_v3 - 1][14] = 8 * (_v0.length - 1) / 0, _v4[_v3 - 1][14] = Math.floor(_v4[_v3 - 1][14]), _v4[_v3 - 1][15] = 8 * (_v0.length - 1) | 0;
            for (let _v0 = 0; _v0 < _v3; ++_v0) {
              let _v0 = new Uint32Array(80);
              for (let _v0 = 0; _v0 < 16; ++_v0) _v0[_v0] = _v4[_v0][_v0];
              for (let _v0 = 16; _v0 < 80; ++_v0) _v0[_v0] = _v28(_v0[_v0 - 3] ^ _v0[_v0 - 8] ^ _v0[_v0 - 14] ^ _v0[_v0 - 16], 1);
              let _v1 = _v2[0],
                _v2 = _v2[1],
                _v3 = _v2[2],
                _v4 = _v2[3],
                _v5 = _v2[4];
              for (let _v0 = 0; _v0 < 80; ++_v0) {
                let _v0 = Math.floor(_v0 / 20),
                  _v1 = _v28(_v1, 5) + function (_v0, _v1, _v2, _v3) {
                    switch (_v0) {
                      case 0:
                        return _v1 & _v2 ^ ~_v1 & _v3;
                      case 1:
                      case 3:
                        return _v1 ^ _v2 ^ _v3;
                      case 2:
                        return _v1 & _v2 ^ _v1 & _v3 ^ _v2 & _v3;
                    }
                  }(_v0, _v2, _v3, _v4) + _v5 + _v1[_v0] + _v0[_v0] >>> 0;
                _v5 = _v4, _v4 = _v3, _v3 = _v28(_v2, 30) >>> 0, _v2 = _v1, _v1 = _v1;
              }
              _v2[0] = _v2[0] + _v1 >>> 0, _v2[1] = _v2[1] + _v2 >>> 0, _v2[2] = _v2[2] + _v3 >>> 0, _v2[3] = _v2[3] + _v4 >>> 0, _v2[4] = _v2[4] + _v5 >>> 0;
            }
            return [_v2[0] >> 24 & 255, _v2[0] >> 16 & 255, _v2[0] >> 8 & 255, 255 & _v2[0], _v2[1] >> 24 & 255, _v2[1] >> 16 & 255, _v2[1] >> 8 & 255, 255 & _v2[1], _v2[2] >> 24 & 255, _v2[2] >> 16 & 255, _v2[2] >> 8 & 255, 255 & _v2[2], _v2[3] >> 24 & 255, _v2[3] >> 16 & 255, _v2[3] >> 8 & 255, 255 & _v2[3], _v2[4] >> 24 & 255, _v2[4] >> 16 & 255, _v2[4] >> 8 & 255, 255 & _v2[4]];
          }),
          _v30 = "00000000-0000-0000-0000-000000000000",
          _v31 = function (_v0) {
            if (!_v7(_v0)) throw TypeError("Invalid UUID");
            return parseInt(_v0.slice(14, 15), 16);
          };
      }],
      _v1 = {};
    function _v2(_v0) {
      if (_v1[_v0]) return _v1[_v0].exports;
      var _v1 = _v1[_v0] = {
        i: _v0,
        l: !1,
        exports: {}
      };
      return _v0[_v0].call(_v1.exports, _v1, _v1.exports, _v2), _v1.l = !0, _v1.exports;
    }
    return _v2.m = _v0, _v2.c = _v1, _v2.d = function (_v0, _v1, _v2) {
      _v2.o(_v0, _v1) || Object.defineProperty(_v0, _v1, {
        enumerable: !0,
        get: _v2
      });
    }, _v2.r = function (_v0) {
      "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(_v0, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(_v0, "__esModule", {
        value: !0
      });
    }, _v2.t = function (_v0, _v1) {
      if (1 & _v1 && (_v0 = _v2(_v0)), 8 & _v1 || 4 & _v1 && "object" == typeof _v0 && _v0 && _v0.__esModule) return _v0;
      var _v2 = Object.create(null);
      if (_v2.r(_v2), Object.defineProperty(_v2, "default", {
        enumerable: !0,
        value: _v0
      }), 2 & _v1 && "string" != typeof _v0) for (var _v3 in _v0) _v2.d(_v2, _v3, function (_v0) {
        return _v0[_v0];
      }.bind(null, _v3));
      return _v2;
    }, _v2.n = function (_v0) {
      var _v1 = _v0 && _v0.__esModule ? function () {
        return _v0.default;
      } : function () {
        return _v0;
      };
      return _v2.d(_v1, "a", _v1), _v1;
    }, _v2.o = function (_v0, _v1) {
      return Object.prototype.hasOwnProperty.call(_v0, _v1);
    }, _v2.p = "", _v2(_v2.s = 10);
  }();
}