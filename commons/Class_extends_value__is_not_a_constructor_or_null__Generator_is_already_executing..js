{
  var _v3 = _v0.i(0);
  _v0.e, _v1.exports = function () {
    "use strict";

    var _v0 = function (_v0, _v1) {
      return (_v0 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (_v0, _v1) {
        _v0.__proto__ = _v1;
      } || function (_v0, _v1) {
        for (var _v2 in _v1) Object.prototype.hasOwnProperty.call(_v1, _v2) && (_v0[_v2] = _v1[_v2]);
      })(_v0, _v1);
    };
    function _v1(_v0, _v1) {
      if ("function" != typeof _v1 && null !== _v1) throw TypeError("Class extends value " + String(_v1) + " is not a constructor or null");
      function _v2() {
        this.constructor = _v0;
      }
      _v0(_v0, _v1), _v0.prototype = null === _v1 ? Object.create(_v1) : (_v2.prototype = _v1.prototype, new _v2());
    }
    var _v2 = function () {
      return (_v2 = Object.assign || function (_v0) {
        for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
        return _v0;
      }).apply(this, arguments);
    };
    function _v3(_v0, _v1) {
      var _v2 = {};
      for (var _v3 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v3) && 0 > _v1.indexOf(_v3) && (_v2[_v3] = _v0[_v3]);
      if (null != _v0 && "function" == typeof Object.getOwnPropertySymbols) {
        var _v4 = 0;
        for (_v3 = Object.getOwnPropertySymbols(_v0); _v4 < _v3.length; _v4++) 0 > _v1.indexOf(_v3[_v4]) && Object.prototype.propertyIsEnumerable.call(_v0, _v3[_v4]) && (_v2[_v3[_v4]] = _v0[_v3[_v4]]);
      }
      return _v2;
    }
    function _v4(_v0, _v1, _v2, _v3) {
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
    }
    function _v5(_v0, _v1) {
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
          for (; _v6;) try {
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
    }
    function _v6(_v0) {
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
    }
    function _v7(_v0, _v1) {
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
    }
    function _v8(_v0, _v1, _v2) {
      if (_v2 || 2 == arguments.length) for (var _v3, _v4 = 0, _v5 = _v1.length; _v4 < _v5; _v4++) !_v3 && _v4 in _v1 || (_v3 || (_v3 = Array.prototype.slice.call(_v1, 0, _v4)), _v3[_v4] = _v1[_v4]);
      return _v0.concat(_v3 || Array.prototype.slice.call(_v1));
    }
    var _v9 = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : _v0.g,
      _v10 = {
        exports: {}
      };
    _v18 = {
      encode: function (_v0) {
        var _v1,
          _v2 = new ArrayBuffer(256),
          _v3 = new DataView(_v2),
          _v4 = 0;
        function _v5(_v0) {
          for (var _v1 = _v2.byteLength, _v2 = _v4 + _v0; _v1 < _v2;) _v1 *= 2;
          if (_v1 !== _v2.byteLength) {
            var _v3 = _v3;
            _v3 = new DataView(_v2 = new ArrayBuffer(_v1));
            for (var _v4 = _v4 + 3 >> 2, _v5 = 0; _v5 < _v4; ++_v5) _v3.setUint32(4 * _v5, _v3.getUint32(4 * _v5));
          }
          return _v1 = _v0, _v3;
        }
        function _v6(_v0) {
          _v5(1).setUint8(_v4, _v0), _v4 += _v1;
        }
        function _v7(_v0) {
          for (var _v1 = _v5(_v0.length), _v2 = 0; _v2 < _v0.length; ++_v2) _v1.setUint8(_v4 + _v2, _v0[_v2]);
          _v4 += _v1;
        }
        function _v8(_v0, _v1) {
          var _v2, _v3;
          _v1 < 24 ? _v6(_v0 << 5 | _v1) : _v1 < 256 ? (_v6(_v0 << 5 | 24), _v6(_v1)) : (_v1 < 0 ? (_v6(_v0 << 5 | 25), _v5(2).setUint16(_v4, _v1)) : _v1 < 0 ? (_v6(_v0 << 5 | 26), _v5(4).setUint32(_v4, _v1)) : (_v6(_v0 << 5 | 27), _v2 = _v1 % 0, (_v3 = _v5(8)).setUint32(_v4, (_v1 - _v2) / 0), _v3.setUint32(_v4 + 4, _v2)), _v4 += _v1);
        }
        if (function _v0(_v1) {
          if (!1 === _v1) return _v6(244);
          if (!0 === _v1) return _v6(245);
          if (null === _v1) return _v6(246);
          if (void 0 === _v1) return _v6(247);
          switch (typeof _v1) {
            case "number":
              if (Math.floor(_v1) === _v1) {
                if (0 <= _v1 && _v1 <= 0) return _v8(0, _v1);
                if (0 <= _v1 && _v1 < 0) return _v8(1, -(_v1 + 1));
              }
              return _v6(251), void (_v5(8).setFloat64(_v4, _v1), _v4 += _v1);
            case "string":
              var _v2,
                _v3,
                _v4 = [];
              for (_v2 = 0; _v2 < _v1.length; ++_v2) {
                var _v5 = _v1.charCodeAt(_v2);
                _v5 < 128 ? _v4.push(_v5) : (_v5 < 0 ? _v4.push(192 | _v5 >> 6) : (_v5 < 0 ? _v4.push(224 | _v5 >> 12) : (_v5 = ((0 & _v5) << 10 | 0 & _v1.charCodeAt(++_v2)) + 0, _v4.push(240 | _v5 >> 18), _v4.push(128 | _v5 >> 12 & 63)), _v4.push(128 | _v5 >> 6 & 63)), _v4.push(128 | 63 & _v5));
              }
              return _v8(3, _v4.length), _v7(_v4);
            default:
              if (Array.isArray(_v1)) for (_v8(4, _v3 = _v1.length), _v2 = 0; _v2 < _v3; ++_v2) _v0(_v1[_v2]);else if (_v1 instanceof Uint8Array) _v8(2, _v1.length), _v7(_v1);else {
                var _v6 = Object.keys(_v1);
                for (_v8(5, _v3 = _v6.length), _v2 = 0; _v2 < _v3; ++_v2) {
                  var _v7 = _v6[_v2];
                  _v0(_v7), _v0(_v1[_v7]);
                }
              }
          }
        }(_v0), "slice" in _v2) return _v2.slice(0, _v4);
        for (var _v9 = new ArrayBuffer(_v4), _v10 = new DataView(_v9), _v11 = 0; _v11 < _v4; ++_v11) _v10.setUint8(_v11, _v3.getUint8(_v11));
        return _v9;
      },
      decode: function (_v0, _v1, _v2) {
        var _v3 = new DataView(_v0),
          _v4 = 0;
        function _v5(_v0) {
          var _v1;
          return _v1 = new Uint8Array(_v0, _v4, _v0), _v4 += _v0, _v1;
        }
        function _v6() {
          var _v0;
          return _v0 = _v3.getUint8(_v4), _v4 += 1, _v0;
        }
        function _v7() {
          var _v0;
          return _v0 = _v3.getUint16(_v4), _v4 += 2, _v0;
        }
        function _v8() {
          var _v0;
          return _v0 = _v3.getUint32(_v4), _v4 += 4, _v0;
        }
        function _v9() {
          return 255 === _v3.getUint8(_v4) && (_v4 += 1, !0);
        }
        function _v10(_v0) {
          if (_v0 < 24) return _v0;
          if (24 === _v0) return _v6();
          if (25 === _v0) return _v7();
          if (26 === _v0) return _v8();
          if (27 === _v0) return 0 * _v8() + _v8();
          if (31 === _v0) return -1;
          throw "Invalid length encoding";
        }
        function _v11(_v0) {
          var _v1 = _v6();
          if (255 === _v1) return -1;
          var _v2 = _v10(31 & _v1);
          if (_v2 < 0 || _v1 >> 5 !== _v0) throw "Invalid indefinite length element";
          return _v2;
        }
        function _v12(_v0, _v1) {
          for (var _v2 = 0; _v2 < _v1; ++_v2) {
            var _v3 = _v6();
            128 & _v3 && (_v3 < 224 ? (_v3 = (31 & _v3) << 6 | 63 & _v6(), _v1 -= 1) : _v3 < 240 ? (_v3 = (15 & _v3) << 12 | (63 & _v6()) << 6 | 63 & _v6(), _v1 -= 2) : (_v3 = (15 & _v3) << 18 | (63 & _v6()) << 12 | (63 & _v6()) << 6 | 63 & _v6(), _v1 -= 3)), _v3 < 0 ? _v0.push(_v3) : (_v3 -= 0, _v0.push(0 | _v3 >> 10), _v0.push(0 | 0 & _v3));
          }
        }
        "function" != typeof _v1 && (_v1 = function (_v0) {
          return _v0;
        }), "function" != typeof _v2 && (_v2 = function () {});
        var _v13 = function _v0() {
          var _v1,
            _v2,
            _v3,
            _v4,
            _v5,
            _v6 = _v6(),
            _v7 = _v6 >> 5,
            _v8 = 31 & _v6;
          if (7 === _v7) switch (_v8) {
            case 25:
              var _v9 = new DataView(new ArrayBuffer(4)),
                _v10 = _v7(),
                _v11 = 0 & _v10,
                _v12 = 0 & _v10;
              if (0 === _v11) _v11 = 0;else if (0 !== _v11) _v11 += 0;else if (0 !== _v12) return 5960464477539063e-23 * _v12;
              return _v9.setUint32(0, (0 & _v10) << 16 | _v11 << 13 | _v12 << 13), _v9.getFloat32(0);
            case 26:
              return _v1 = _v3.getFloat32(_v4), _v4 += 4, _v1;
            case 27:
              return _v2 = _v3.getFloat64(_v4), _v4 += 8, _v2;
          }
          if ((_v5 = _v10(_v8)) < 0 && (_v7 < 2 || 6 < _v7)) throw "Invalid length";
          switch (_v7) {
            case 0:
              return _v5;
            case 1:
              return -1 - _v5;
            case 2:
              if (_v5 < 0) {
                for (var _v13 = [], _v14 = 0; (_v5 = _v11(_v7)) >= 0;) _v14 += _v5, _v13.push(_v5(_v5));
                var _v15 = new Uint8Array(_v14),
                  _v16 = 0;
                for (_v4 = 0; _v4 < _v13.length; ++_v4) _v15.set(_v13[_v4], _v16), _v16 += _v13[_v4].length;
                return _v15;
              }
              return _v5(_v5);
            case 3:
              var _v17 = [];
              if (_v5 < 0) for (; (_v5 = _v11(_v7)) >= 0;) _v12(_v17, _v5);else _v12(_v17, _v5);
              return String.fromCharCode.apply(null, _v17);
            case 4:
              if (_v5 < 0) for (_v3 = []; !_v9();) _v3.push(_v0());else for (_v3 = Array(_v5), _v4 = 0; _v4 < _v5; ++_v4) _v3[_v4] = _v0();
              return _v3;
            case 5:
              var _v18 = {};
              for (_v4 = 0; _v4 < _v5 || _v5 < 0 && !_v9(); ++_v4) _v18[_v0()] = _v0();
              return _v18;
            case 6:
              return _v1(_v0(), _v5);
            case 7:
              switch (_v5) {
                case 20:
                  return !1;
                case 21:
                  return !0;
                case 22:
                  return null;
                case 23:
                  return;
                default:
                  return _v2(_v5);
              }
          }
        }();
        if (_v4 !== _v0.byteLength) throw "Remaining bytes";
        return _v13;
      }
    }, _v10.exports ? _v10.exports = _v18 : _v9.CBOR || (_v9.CBOR = _v18);
    var _v11 = _v10.exports,
      _v12 = {
        exports: {}
      };
    (function (_v0) {
      var _v1 = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      };
      function _v2() {
        var _v0,
          _v1,
          _v2 = "";
        for (_v0 = 0; _v0 < 32; _v0++) _v1 = 16 * Math.random() | 0, 8 !== _v0 && 12 !== _v0 && 16 !== _v0 && 20 !== _v0 || (_v2 += "-"), _v2 += (12 === _v0 ? 4 : 16 === _v0 ? 3 & _v1 | 8 : _v1).toString(16);
        return _v2;
      }
      function _v3(_v0, _v1) {
        var _v2 = _v1[_v1 || "all"];
        return _v2 && _v2.test(_v0) || !1;
      }
      _v2.isUUID = _v3, _v2.VERSION = "0.1.0", _v0.uuid = _v2, _v0.isUUID = _v3;
    })(_v19 = _v12.exports), null !== _v12 && (_v12.exports = _v19.uuid);
    var _v13 = _v12.exports,
      _v14 = function () {
        return _v13.uuid ? _v13.uuid() : _v13();
      },
      _v15 = function () {
        function _v0(_v0) {
          var _v1,
            _v2,
            _v3,
            _v4,
            _v5 = _v0.setup;
          if (this._PNSDKSuffix = {}, this.instanceId = "pn-".concat(_v14()), this.secretKey = _v5.secretKey || _v5.secret_key, this.subscribeKey = _v5.subscribeKey || _v5.subscribe_key, this.publishKey = _v5.publishKey || _v5.publish_key, this.sdkName = _v5.sdkName, this.sdkFamily = _v5.sdkFamily, this.partnerId = _v5.partnerId, this.setAuthKey(_v5.authKey), this.cryptoModule = _v5.cryptoModule, this.setFilterExpression(_v5.filterExpression), "string" != typeof _v5.origin && !Array.isArray(_v5.origin) && void 0 !== _v5.origin) throw Error("Origin must be either undefined, a string or a list of strings.");
          if (this.origin = _v5.origin || Array.from({
            length: 20
          }, function (_v0, _v1) {
            return "ps".concat(_v1 + 1, ".pndsn.com");
          }), this.secure = _v5.ssl || !1, this.restore = _v5.restore || !1, this.proxy = _v5.proxy, this.keepAlive = _v5.keepAlive, this.keepAliveSettings = _v5.keepAliveSettings, this.autoNetworkDetection = _v5.autoNetworkDetection || !1, this.dedupeOnSubscribe = _v5.dedupeOnSubscribe || !1, this.maximumCacheSize = _v5.maximumCacheSize || 100, this.customEncrypt = _v5.customEncrypt, this.customDecrypt = _v5.customDecrypt, this.fileUploadPublishRetryLimit = null != (_v1 = _v5.fileUploadPublishRetryLimit) ? _v1 : 5, this.useRandomIVs = null == (_v2 = _v5.useRandomIVs) || _v2, this.enableEventEngine = null != (_v3 = _v5.enableEventEngine) && _v3, this.maintainPresenceState = null == (_v4 = _v5.maintainPresenceState) || _v4, "u" > typeof location && "https:" === location.protocol && (this.secure = !0), this.logVerbosity = _v5.logVerbosity || !1, this.suppressLeaveEvents = _v5.suppressLeaveEvents || !1, this.announceFailedHeartbeats = _v5.announceFailedHeartbeats || !0, this.announceSuccessfulHeartbeats = _v5.announceSuccessfulHeartbeats || !1, this.useInstanceId = _v5.useInstanceId || !1, this.useRequestId = _v5.useRequestId || !1, this.requestMessageCountThreshold = _v5.requestMessageCountThreshold, _v5.retryConfiguration && this._setRetryConfiguration(_v5.retryConfiguration), this.setTransactionTimeout(_v5.transactionalRequestTimeout || 0), this.setSubscribeTimeout(_v5.subscribeRequestTimeout || 0), this.setSendBeaconConfig(_v5.useSendBeacon || !0), _v5.presenceTimeout ? this.setPresenceTimeout(_v5.presenceTimeout) : this._presenceTimeout = 300, null != _v5.heartbeatInterval && this.setHeartbeatInterval(_v5.heartbeatInterval), "string" == typeof _v5.userId) {
            if ("string" == typeof _v5.uuid) throw Error("Only one of the following configuration options has to be provided: `uuid` or `userId`");
            this.setUserId(_v5.userId);
          } else {
            if ("string" != typeof _v5.uuid) throw Error("One of the following configuration options has to be provided: `uuid` or `userId`");
            this.setUUID(_v5.uuid);
          }
          this.setCipherKey(_v5.cipherKey, _v5);
        }
        return _v0.prototype.getAuthKey = function () {
          return this.authKey;
        }, _v0.prototype.setAuthKey = function (_v0) {
          return this.authKey = _v0, this;
        }, _v0.prototype.setCipherKey = function (_v0, _v1, _v2) {
          var _v3;
          return this.cipherKey = _v0, this.cipherKey && (this.cryptoModule = null != (_v3 = _v1.cryptoModule) ? _v3 : _v1.initCryptoModule({
            cipherKey: this.cipherKey,
            useRandomIVs: this.useRandomIVs
          }), _v2 && (_v2.cryptoModule = this.cryptoModule)), this;
        }, _v0.prototype.getUUID = function () {
          return this.UUID;
        }, _v0.prototype.setUUID = function (_v0) {
          if (!_v0 || "string" != typeof _v0 || 0 === _v0.trim().length) throw Error("Missing uuid parameter. Provide a valid string uuid");
          return this.UUID = _v0, this;
        }, _v0.prototype.getUserId = function () {
          return this.UUID;
        }, _v0.prototype.setUserId = function (_v0) {
          if (!_v0 || "string" != typeof _v0 || 0 === _v0.trim().length) throw Error("Missing or invalid userId parameter. Provide a valid string userId");
          return this.UUID = _v0, this;
        }, _v0.prototype.getFilterExpression = function () {
          return this.filterExpression;
        }, _v0.prototype.setFilterExpression = function (_v0) {
          return this.filterExpression = _v0, this;
        }, _v0.prototype.getPresenceTimeout = function () {
          return this._presenceTimeout;
        }, _v0.prototype.setPresenceTimeout = function (_v0) {
          return _v0 >= 20 ? this._presenceTimeout = _v0 : (this._presenceTimeout = 20, console.log("WARNING: Presence timeout is less than the minimum. Using minimum value: ", this._presenceTimeout)), this.setHeartbeatInterval(this._presenceTimeout / 2 - 1), this;
        }, _v0.prototype.setProxy = function (_v0) {
          this.proxy = _v0;
        }, _v0.prototype.getHeartbeatInterval = function () {
          return this._heartbeatInterval;
        }, _v0.prototype.setHeartbeatInterval = function (_v0) {
          return this._heartbeatInterval = _v0, this;
        }, _v0.prototype.getSubscribeTimeout = function () {
          return this._subscribeRequestTimeout;
        }, _v0.prototype.setSubscribeTimeout = function (_v0) {
          return this._subscribeRequestTimeout = _v0, this;
        }, _v0.prototype.getTransactionTimeout = function () {
          return this._transactionalRequestTimeout;
        }, _v0.prototype.setTransactionTimeout = function (_v0) {
          return this._transactionalRequestTimeout = _v0, this;
        }, _v0.prototype.isSendBeaconEnabled = function () {
          return this._useSendBeacon;
        }, _v0.prototype.setSendBeaconConfig = function (_v0) {
          return this._useSendBeacon = _v0, this;
        }, _v0.prototype.getVersion = function () {
          return "7.6.3";
        }, _v0.prototype._setRetryConfiguration = function (_v0) {
          if (_v0.minimumdelay < 2) throw Error("Minimum delay can not be set less than 2 seconds for retry");
          if (_v0.maximumDelay > 150) throw Error("Maximum delay can not be set more than 150 seconds for retry");
          if (_v0.maximumDelay && maximumRetry > 6) throw Error("Maximum retry for exponential retry policy can not be more than 6");
          if (_v0.maximumRetry > 10) throw Error("Maximum retry for linear retry policy can not be more than 10");
          this.retryConfiguration = _v0;
        }, _v0.prototype._addPnsdkSuffix = function (_v0, _v1) {
          this._PNSDKSuffix[_v0] = _v1;
        }, _v0.prototype._getPnsdkSuffix = function (_v0) {
          var _v1 = this;
          return Object.keys(this._PNSDKSuffix).reduce(function (_v0, _v1) {
            return _v0 + _v0 + _v1._PNSDKSuffix[_v1];
          }, "");
        }, _v0;
      }();
    function _v16(_v0) {
      var _v1 = _v0.replace(/==?$/, ""),
        _v2 = Math.floor(_v1.length / 4 * 3),
        _v3 = new ArrayBuffer(_v2),
        _v4 = new Uint8Array(_v3),
        _v5 = 0;
      function _v6() {
        var _v0 = _v1.charAt(_v5++),
          _v1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(_v0);
        if (-1 === _v1) throw Error("Illegal character at ".concat(_v5, ": ").concat(_v1.charAt(_v5 - 1)));
        return _v1;
      }
      for (var _v7 = 0; _v7 < _v2; _v7 += 3) {
        var _v8 = _v6(),
          _v9 = _v6(),
          _v10 = _v6(),
          _v11 = _v6(),
          _v12 = (63 & _v8) << 2 | _v9 >> 4,
          _v13 = (15 & _v9) << 4 | _v10 >> 2,
          _v14 = _v11 | (3 & _v10) << 6;
        _v4[_v7] = _v12, 64 != _v10 && (_v4[_v7 + 1] = _v13), 64 != _v11 && (_v4[_v7 + 2] = _v14);
      }
      return _v3;
    }
    function _v17(_v0) {
      for (var _v1, _v2 = "", _v3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _v4 = new Uint8Array(_v0), _v5 = _v4.byteLength, _v6 = _v5 % 3, _v7 = _v5 - _v6, _v8 = 0; _v8 < _v7; _v8 += 3) _v2 += _v3[(0 & (_v1 = _v4[_v8] << 16 | _v4[_v8 + 1] << 8 | _v4[_v8 + 2])) >> 18] + _v3[(0 & _v1) >> 12] + _v3[(0 & _v1) >> 6] + _v3[63 & _v1];
      return 1 == _v6 ? _v2 += _v3[(252 & (_v1 = _v4[_v7])) >> 2] + _v3[(3 & _v1) << 4] + "==" : 2 == _v6 && (_v2 += _v3[(0 & (_v1 = _v4[_v7] << 8 | _v4[_v7 + 1])) >> 10] + _v3[(0 & _v1) >> 4] + _v3[(15 & _v1) << 2] + "="), _v2;
    }
    var _v18,
      _v19,
      _v20,
      _v21,
      _v22,
      _v23,
      _v24,
      _v25,
      _v26,
      _v27,
      _v28,
      _v29,
      _v30,
      _v31,
      _v32,
      _v33,
      _v34,
      _v35 = _v35 || (_v20 = Math, _v22 = (_v21 = {}).lib = {}, _v23 = function () {}, _v24 = _v22.Base = {
        extend: function (_v0) {
          _v23.prototype = this;
          var _v1 = new _v23();
          return _v0 && _v1.mixIn(_v0), _v1.hasOwnProperty("init") || (_v1.init = function () {
            _v1.$super.init.apply(this, arguments);
          }), _v1.init.prototype = _v1, _v1.$super = this, _v1;
        },
        create: function () {
          var _v0 = this.extend();
          return _v0.init.apply(_v0, arguments), _v0;
        },
        init: function () {},
        mixIn: function (_v0) {
          for (var _v1 in _v0) _v0.hasOwnProperty(_v1) && (this[_v1] = _v0[_v1]);
          _v0.hasOwnProperty("toString") && (this.toString = _v0.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        }
      }, _v25 = _v22.WordArray = _v24.extend({
        init: function (_v0, _v1) {
          _v0 = this.words = _v0 || [], this.sigBytes = null != _v1 ? _v1 : 4 * _v0.length;
        },
        toString: function (_v0) {
          return (_v0 || _v27).stringify(this);
        },
        concat: function (_v0) {
          var _v1 = this.words,
            _v2 = _v0.words,
            _v3 = this.sigBytes;
          if (_v0 = _v0.sigBytes, this.clamp(), _v3 % 4) for (var _v4 = 0; _v4 < _v0; _v4++) _v1[_v3 + _v4 >>> 2] |= (_v2[_v4 >>> 2] >>> 24 - _v4 % 4 * 8 & 255) << 24 - (_v3 + _v4) % 4 * 8;else if (0 < _v2.length) for (_v4 = 0; _v4 < _v0; _v4 += 4) _v1[_v3 + _v4 >>> 2] = _v2[_v4 >>> 2];else _v1.push.apply(_v1, _v2);
          return this.sigBytes += _v0, this;
        },
        clamp: function () {
          var _v0 = this.words,
            _v1 = this.sigBytes;
          _v0[_v1 >>> 2] &= 0 << 32 - _v1 % 4 * 8, _v0.length = _v20.ceil(_v1 / 4);
        },
        clone: function () {
          var _v0 = _v24.clone.call(this);
          return _v0.words = this.words.slice(0), _v0;
        },
        random: function (_v0) {
          for (var _v1 = [], _v2 = 0; _v2 < _v0; _v2 += 4) _v1.push(0 * _v20.random() | 0);
          return new _v25.init(_v1, _v0);
        }
      }), _v27 = (_v26 = _v21.enc = {}).Hex = {
        stringify: function (_v0) {
          var _v1 = _v0.words;
          _v0 = _v0.sigBytes;
          for (var _v2 = [], _v3 = 0; _v3 < _v0; _v3++) {
            var _v4 = _v1[_v3 >>> 2] >>> 24 - _v3 % 4 * 8 & 255;
            _v2.push((_v4 >>> 4).toString(16)), _v2.push((15 & _v4).toString(16));
          }
          return _v2.join("");
        },
        parse: function (_v0) {
          for (var _v1 = _v0.length, _v2 = [], _v3 = 0; _v3 < _v1; _v3 += 2) _v2[_v3 >>> 3] |= parseInt(_v0.substr(_v3, 2), 16) << 24 - _v3 % 8 * 4;
          return new _v25.init(_v2, _v1 / 2);
        }
      }, _v28 = _v26.Latin1 = {
        stringify: function (_v0) {
          var _v1 = _v0.words;
          _v0 = _v0.sigBytes;
          for (var _v2 = [], _v3 = 0; _v3 < _v0; _v3++) _v2.push(String.fromCharCode(_v1[_v3 >>> 2] >>> 24 - _v3 % 4 * 8 & 255));
          return _v2.join("");
        },
        parse: function (_v0) {
          for (var _v1 = _v0.length, _v2 = [], _v3 = 0; _v3 < _v1; _v3++) _v2[_v3 >>> 2] |= (255 & _v0.charCodeAt(_v3)) << 24 - _v3 % 4 * 8;
          return new _v25.init(_v2, _v1);
        }
      }, _v29 = _v26.Utf8 = {
        stringify: function (_v0) {
          try {
            return decodeURIComponent(escape(_v28.stringify(_v0)));
          } catch (_v0) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function (_v0) {
          return _v28.parse(unescape(encodeURIComponent(_v0)));
        }
      }, _v30 = _v22.BufferedBlockAlgorithm = _v24.extend({
        reset: function () {
          this._data = new _v25.init(), this._nDataBytes = 0;
        },
        _append: function (_v0) {
          "string" == typeof _v0 && (_v0 = _v29.parse(_v0)), this._data.concat(_v0), this._nDataBytes += _v0.sigBytes;
        },
        _process: function (_v0) {
          var _v1 = this._data,
            _v2 = _v1.words,
            _v3 = _v1.sigBytes,
            _v4 = this.blockSize,
            _v5 = _v3 / (4 * _v4);
          if (_v0 = (_v5 = _v0 ? _v20.ceil(_v5) : _v20.max((0 | _v5) - this._minBufferSize, 0)) * _v4, _v3 = _v20.min(4 * _v0, _v3), _v0) {
            for (var _v6 = 0; _v6 < _v0; _v6 += _v4) this._doProcessBlock(_v2, _v6);
            _v6 = _v2.splice(0, _v0), _v1.sigBytes -= _v3;
          }
          return new _v25.init(_v6, _v3);
        },
        clone: function () {
          var _v0 = _v24.clone.call(this);
          return _v0._data = this._data.clone(), _v0;
        },
        _minBufferSize: 0
      }), _v22.Hasher = _v30.extend({
        cfg: _v24.extend(),
        init: function (_v0) {
          this.cfg = this.cfg.extend(_v0), this.reset();
        },
        reset: function () {
          _v30.reset.call(this), this._doReset();
        },
        update: function (_v0) {
          return this._append(_v0), this._process(), this;
        },
        finalize: function (_v0) {
          return _v0 && this._append(_v0), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (_v0) {
          return function (_v0, _v1) {
            return new _v0.init(_v1).finalize(_v0);
          };
        },
        _createHmacHelper: function (_v0) {
          return function (_v0, _v1) {
            return new _v31.HMAC.init(_v0, _v1).finalize(_v0);
          };
        }
      }), _v31 = _v21.algo = {}, _v21);
    function _v36(_v0) {
      var _v1,
        _v2 = [];
      for (_v1 = 0; _v1 < _v0.length; _v1 += 1) _v2[_v1 / 4 | 0] |= _v0[_v1] << 24 - 8 * _v1;
      return _v35.lib.WordArray.create(_v2, _v0.length);
    }
    !function (_v0) {
      for (var _v1, _v2 = (_v4 = _v35.lib).WordArray, _v3 = _v4.Hasher, _v4 = _v35.algo, _v5 = [], _v6 = [], _v7 = function (_v0) {
          return 0 * (_v0 - (0 | _v0)) | 0;
        }, _v8 = 2, _v9 = 0; 64 > _v9;) {
        e: {
          _v1 = _v8;
          for (var _v10 = _v0.sqrt(_v1), _v11 = 2; _v11 <= _v10; _v11++) if (!(_v1 % _v11)) {
            _v1 = !1;
            break e;
          }
          _v1 = !0;
        }
        _v1 && (8 > _v9 && (_v5[_v9] = _v7(_v0.pow(_v8, .5))), _v6[_v9] = _v7(_v0.pow(_v8, 1 / 3)), _v9++), _v8++;
      }
      var _v12 = [];
      _v4 = _v4.SHA256 = _v3.extend({
        _doReset: function () {
          this._hash = new _v2.init(_v5.slice(0));
        },
        _doProcessBlock: function (_v0, _v1) {
          for (var _v2 = this._hash.words, _v3 = _v2[0], _v4 = _v2[1], _v5 = _v2[2], _v6 = _v2[3], _v7 = _v2[4], _v8 = _v2[5], _v9 = _v2[6], _v10 = _v2[7], _v11 = 0; 64 > _v11; _v11++) {
            if (16 > _v11) _v12[_v11] = 0 | _v0[_v1 + _v11];else {
              var _v12 = _v12[_v11 - 15],
                _v13 = _v12[_v11 - 2];
              _v12[_v11] = ((_v12 << 25 | _v12 >>> 7) ^ (_v12 << 14 | _v12 >>> 18) ^ _v12 >>> 3) + _v12[_v11 - 7] + ((_v13 << 15 | _v13 >>> 17) ^ (_v13 << 13 | _v13 >>> 19) ^ _v13 >>> 10) + _v12[_v11 - 16];
            }
            _v12 = _v10 + ((_v7 << 26 | _v7 >>> 6) ^ (_v7 << 21 | _v7 >>> 11) ^ (_v7 << 7 | _v7 >>> 25)) + (_v7 & _v8 ^ ~_v7 & _v9) + _v6[_v11] + _v12[_v11], _v13 = ((_v3 << 30 | _v3 >>> 2) ^ (_v3 << 19 | _v3 >>> 13) ^ (_v3 << 10 | _v3 >>> 22)) + (_v3 & _v4 ^ _v3 & _v5 ^ _v4 & _v5), _v10 = _v9, _v9 = _v8, _v8 = _v7, _v7 = _v6 + _v12 | 0, _v6 = _v5, _v5 = _v4, _v4 = _v3, _v3 = _v12 + _v13 | 0;
          }
          _v2[0] = _v2[0] + _v3 | 0, _v2[1] = _v2[1] + _v4 | 0, _v2[2] = _v2[2] + _v5 | 0, _v2[3] = _v2[3] + _v6 | 0, _v2[4] = _v2[4] + _v7 | 0, _v2[5] = _v2[5] + _v8 | 0, _v2[6] = _v2[6] + _v9 | 0, _v2[7] = _v2[7] + _v10 | 0;
        },
        _doFinalize: function () {
          var _v0 = this._data,
            _v1 = _v0.words,
            _v2 = 8 * this._nDataBytes,
            _v3 = 8 * _v0.sigBytes;
          return _v1[_v3 >>> 5] |= 128 << 24 - _v3 % 32, _v1[14 + (_v3 + 64 >>> 9 << 4)] = _v0.floor(_v2 / 0), _v1[15 + (_v3 + 64 >>> 9 << 4)] = _v2, _v0.sigBytes = 4 * _v1.length, this._process(), this._hash;
        },
        clone: function () {
          var _v0 = _v3.clone.call(this);
          return _v0._hash = this._hash.clone(), _v0;
        }
      }), _v35.SHA256 = _v3._createHelper(_v4), _v35.HmacSHA256 = _v3._createHmacHelper(_v4);
    }(Math), _v32 = _v35.enc.Utf8, _v35.algo.HMAC = _v35.lib.Base.extend({
      init: function (_v0, _v1) {
        _v0 = this._hasher = new _v0.init(), "string" == typeof _v1 && (_v1 = _v32.parse(_v1));
        var _v2 = _v0.blockSize,
          _v3 = 4 * _v2;
        _v1.sigBytes > _v3 && (_v1 = _v0.finalize(_v1)), _v1.clamp();
        for (var _v4 = this._oKey = _v1.clone(), _v5 = this._iKey = _v1.clone(), _v6 = _v4.words, _v7 = _v5.words, _v8 = 0; _v8 < _v2; _v8++) _v6[_v8] ^= 0, _v7[_v8] ^= 0;
        _v4.sigBytes = _v5.sigBytes = _v3, this.reset();
      },
      reset: function () {
        var _v0 = this._hasher;
        _v0.reset(), _v0.update(this._iKey);
      },
      update: function (_v0) {
        return this._hasher.update(_v0), this;
      },
      finalize: function (_v0) {
        var _v1 = this._hasher;
        return _v0 = _v1.finalize(_v0), _v1.reset(), _v1.finalize(this._oKey.clone().concat(_v0));
      }
    }), _v33 = _v35.lib.WordArray, _v35.enc.Base64 = {
      stringify: function (_v0) {
        var _v1 = _v0.words,
          _v2 = _v0.sigBytes,
          _v3 = this._map;
        _v0.clamp(), _v0 = [];
        for (var _v4 = 0; _v4 < _v2; _v4 += 3) for (var _v5 = (_v1[_v4 >>> 2] >>> 24 - _v4 % 4 * 8 & 255) << 16 | (_v1[_v4 + 1 >>> 2] >>> 24 - (_v4 + 1) % 4 * 8 & 255) << 8 | _v1[_v4 + 2 >>> 2] >>> 24 - (_v4 + 2) % 4 * 8 & 255, _v6 = 0; 4 > _v6 && _v4 + .75 * _v6 < _v2; _v6++) _v0.push(_v3.charAt(_v5 >>> 6 * (3 - _v6) & 63));
        if (_v1 = _v3.charAt(64)) for (; _v0.length % 4;) _v0.push(_v1);
        return _v0.join("");
      },
      parse: function (_v0) {
        var _v1 = _v0.length,
          _v2 = this._map;
        (_v3 = _v2.charAt(64)) && -1 != (_v3 = _v0.indexOf(_v3)) && (_v1 = _v3);
        for (var _v3 = [], _v4 = 0, _v5 = 0; _v5 < _v1; _v5++) if (_v5 % 4) {
          var _v6 = _v2.indexOf(_v0.charAt(_v5 - 1)) << _v5 % 4 * 2,
            _v7 = _v2.indexOf(_v0.charAt(_v5)) >>> 6 - _v5 % 4 * 2;
          _v3[_v4 >>> 2] |= (_v6 | _v7) << 24 - _v4 % 4 * 8, _v4++;
        }
        return _v33.create(_v3, _v4);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, function (_v0) {
      function _v1(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
        return ((_v0 = _v0 + (_v1 & _v2 | ~_v1 & _v3) + _v4 + _v6) << _v5 | _v0 >>> 32 - _v5) + _v1;
      }
      function _v2(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
        return ((_v0 = _v0 + (_v1 & _v3 | _v2 & ~_v3) + _v4 + _v6) << _v5 | _v0 >>> 32 - _v5) + _v1;
      }
      function _v3(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
        return ((_v0 = _v0 + (_v1 ^ _v2 ^ _v3) + _v4 + _v6) << _v5 | _v0 >>> 32 - _v5) + _v1;
      }
      function _v4(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
        return ((_v0 = _v0 + (_v2 ^ (_v1 | ~_v3)) + _v4 + _v6) << _v5 | _v0 >>> 32 - _v5) + _v1;
      }
      for (var _v5 = (_v7 = _v35.lib).WordArray, _v6 = _v7.Hasher, _v7 = _v35.algo, _v8 = [], _v9 = 0; 64 > _v9; _v9++) _v8[_v9] = 0 * _v0.abs(_v0.sin(_v9 + 1)) | 0;
      _v7 = _v7.MD5 = _v6.extend({
        _doReset: function () {
          this._hash = new _v5.init([0, 0, 0, 0]);
        },
        _doProcessBlock: function (_v0, _v1) {
          for (var _v2 = 0; 16 > _v2; _v2++) {
            var _v3 = _v0[_v4 = _v1 + _v2];
            _v0[_v4] = 0 & (_v3 << 8 | _v3 >>> 24) | 0 & (_v3 << 24 | _v3 >>> 8);
          }
          _v2 = this._hash.words;
          var _v4 = _v0[_v1 + 0],
            _v5 = (_v3 = _v0[_v1 + 1], _v0[_v1 + 2]),
            _v6 = _v0[_v1 + 3],
            _v7 = _v0[_v1 + 4],
            _v8 = _v0[_v1 + 5],
            _v9 = _v0[_v1 + 6],
            _v10 = _v0[_v1 + 7],
            _v11 = _v0[_v1 + 8],
            _v12 = _v0[_v1 + 9],
            _v13 = _v0[_v1 + 10],
            _v14 = _v0[_v1 + 11],
            _v15 = _v0[_v1 + 12],
            _v16 = _v0[_v1 + 13],
            _v17 = _v0[_v1 + 14],
            _v18 = _v0[_v1 + 15],
            _v19 = _v1(_v19 = _v2[0], _v22 = _v2[1], _v21 = _v2[2], _v20 = _v2[3], _v4, 7, _v8[0]),
            _v20 = _v1(_v20, _v19, _v22, _v21, _v3, 12, _v8[1]),
            _v21 = _v1(_v21, _v20, _v19, _v22, _v5, 17, _v8[2]),
            _v22 = _v1(_v22, _v21, _v20, _v19, _v6, 22, _v8[3]);
          _v19 = _v1(_v19, _v22, _v21, _v20, _v7, 7, _v8[4]), _v20 = _v1(_v20, _v19, _v22, _v21, _v8, 12, _v8[5]), _v21 = _v1(_v21, _v20, _v19, _v22, _v9, 17, _v8[6]), _v22 = _v1(_v22, _v21, _v20, _v19, _v10, 22, _v8[7]), _v19 = _v1(_v19, _v22, _v21, _v20, _v11, 7, _v8[8]), _v20 = _v1(_v20, _v19, _v22, _v21, _v12, 12, _v8[9]), _v21 = _v1(_v21, _v20, _v19, _v22, _v13, 17, _v8[10]), _v22 = _v1(_v22, _v21, _v20, _v19, _v14, 22, _v8[11]), _v19 = _v1(_v19, _v22, _v21, _v20, _v15, 7, _v8[12]), _v20 = _v1(_v20, _v19, _v22, _v21, _v16, 12, _v8[13]), _v21 = _v1(_v21, _v20, _v19, _v22, _v17, 17, _v8[14]), _v19 = _v2(_v19, _v22 = _v1(_v22, _v21, _v20, _v19, _v18, 22, _v8[15]), _v21, _v20, _v3, 5, _v8[16]), _v20 = _v2(_v20, _v19, _v22, _v21, _v9, 9, _v8[17]), _v21 = _v2(_v21, _v20, _v19, _v22, _v14, 14, _v8[18]), _v22 = _v2(_v22, _v21, _v20, _v19, _v4, 20, _v8[19]), _v19 = _v2(_v19, _v22, _v21, _v20, _v8, 5, _v8[20]), _v20 = _v2(_v20, _v19, _v22, _v21, _v13, 9, _v8[21]), _v21 = _v2(_v21, _v20, _v19, _v22, _v18, 14, _v8[22]), _v22 = _v2(_v22, _v21, _v20, _v19, _v7, 20, _v8[23]), _v19 = _v2(_v19, _v22, _v21, _v20, _v12, 5, _v8[24]), _v20 = _v2(_v20, _v19, _v22, _v21, _v17, 9, _v8[25]), _v21 = _v2(_v21, _v20, _v19, _v22, _v6, 14, _v8[26]), _v22 = _v2(_v22, _v21, _v20, _v19, _v11, 20, _v8[27]), _v19 = _v2(_v19, _v22, _v21, _v20, _v16, 5, _v8[28]), _v20 = _v2(_v20, _v19, _v22, _v21, _v5, 9, _v8[29]), _v21 = _v2(_v21, _v20, _v19, _v22, _v10, 14, _v8[30]), _v19 = _v3(_v19, _v22 = _v2(_v22, _v21, _v20, _v19, _v15, 20, _v8[31]), _v21, _v20, _v8, 4, _v8[32]), _v20 = _v3(_v20, _v19, _v22, _v21, _v11, 11, _v8[33]), _v21 = _v3(_v21, _v20, _v19, _v22, _v14, 16, _v8[34]), _v22 = _v3(_v22, _v21, _v20, _v19, _v17, 23, _v8[35]), _v19 = _v3(_v19, _v22, _v21, _v20, _v3, 4, _v8[36]), _v20 = _v3(_v20, _v19, _v22, _v21, _v7, 11, _v8[37]), _v21 = _v3(_v21, _v20, _v19, _v22, _v10, 16, _v8[38]), _v22 = _v3(_v22, _v21, _v20, _v19, _v13, 23, _v8[39]), _v19 = _v3(_v19, _v22, _v21, _v20, _v16, 4, _v8[40]), _v20 = _v3(_v20, _v19, _v22, _v21, _v4, 11, _v8[41]), _v21 = _v3(_v21, _v20, _v19, _v22, _v6, 16, _v8[42]), _v22 = _v3(_v22, _v21, _v20, _v19, _v9, 23, _v8[43]), _v19 = _v3(_v19, _v22, _v21, _v20, _v12, 4, _v8[44]), _v20 = _v3(_v20, _v19, _v22, _v21, _v15, 11, _v8[45]), _v21 = _v3(_v21, _v20, _v19, _v22, _v18, 16, _v8[46]), _v19 = _v4(_v19, _v22 = _v3(_v22, _v21, _v20, _v19, _v5, 23, _v8[47]), _v21, _v20, _v4, 6, _v8[48]), _v20 = _v4(_v20, _v19, _v22, _v21, _v10, 10, _v8[49]), _v21 = _v4(_v21, _v20, _v19, _v22, _v17, 15, _v8[50]), _v22 = _v4(_v22, _v21, _v20, _v19, _v8, 21, _v8[51]), _v19 = _v4(_v19, _v22, _v21, _v20, _v15, 6, _v8[52]), _v20 = _v4(_v20, _v19, _v22, _v21, _v6, 10, _v8[53]), _v21 = _v4(_v21, _v20, _v19, _v22, _v13, 15, _v8[54]), _v22 = _v4(_v22, _v21, _v20, _v19, _v3, 21, _v8[55]), _v19 = _v4(_v19, _v22, _v21, _v20, _v11, 6, _v8[56]), _v20 = _v4(_v20, _v19, _v22, _v21, _v18, 10, _v8[57]), _v21 = _v4(_v21, _v20, _v19, _v22, _v9, 15, _v8[58]), _v22 = _v4(_v22, _v21, _v20, _v19, _v16, 21, _v8[59]), _v19 = _v4(_v19, _v22, _v21, _v20, _v7, 6, _v8[60]), _v20 = _v4(_v20, _v19, _v22, _v21, _v14, 10, _v8[61]), _v21 = _v4(_v21, _v20, _v19, _v22, _v5, 15, _v8[62]), _v22 = _v4(_v22, _v21, _v20, _v19, _v12, 21, _v8[63]), _v2[0] = _v2[0] + _v19 | 0, _v2[1] = _v2[1] + _v22 | 0, _v2[2] = _v2[2] + _v21 | 0, _v2[3] = _v2[3] + _v20 | 0;
        },
        _doFinalize: function () {
          var _v0 = this._data,
            _v1 = _v0.words,
            _v2 = 8 * this._nDataBytes,
            _v3 = 8 * _v0.sigBytes;
          _v1[_v3 >>> 5] |= 128 << 24 - _v3 % 32;
          var _v4 = _v0.floor(_v2 / 0);
          for (_v1[15 + (_v3 + 64 >>> 9 << 4)] = 0 & (_v4 << 8 | _v4 >>> 24) | 0 & (_v4 << 24 | _v4 >>> 8), _v1[14 + (_v3 + 64 >>> 9 << 4)] = 0 & (_v2 << 8 | _v2 >>> 24) | 0 & (_v2 << 24 | _v2 >>> 8), _v0.sigBytes = 4 * (_v1.length + 1), this._process(), _v1 = (_v0 = this._hash).words, _v2 = 0; 4 > _v2; _v2++) _v3 = _v1[_v2], _v1[_v2] = 0 & (_v3 << 8 | _v3 >>> 24) | 0 & (_v3 << 24 | _v3 >>> 8);
          return _v0;
        },
        clone: function () {
          var _v0 = _v6.clone.call(this);
          return _v0._hash = this._hash.clone(), _v0;
        }
      }), _v35.MD5 = _v6._createHelper(_v7), _v35.HmacMD5 = _v6._createHmacHelper(_v7);
    }(Math), _v204 = (_v203 = _v35.lib).Base, _v205 = _v203.WordArray, _v206 = (_v203 = _v35.algo).EvpKDF = _v204.extend({
      cfg: _v204.extend({
        keySize: 4,
        hasher: _v203.MD5,
        iterations: 1
      }),
      init: function (_v0) {
        this.cfg = this.cfg.extend(_v0);
      },
      compute: function (_v0, _v1) {
        for (var _v2 = (_v6 = this.cfg).hasher.create(), _v3 = _v205.create(), _v4 = _v3.words, _v5 = _v6.keySize, _v6 = _v6.iterations; _v4.length < _v5;) {
          _v7 && _v2.update(_v7);
          var _v7 = _v2.update(_v0).finalize(_v1);
          _v2.reset();
          for (var _v8 = 1; _v8 < _v6; _v8++) _v7 = _v2.finalize(_v7), _v2.reset();
          _v3.concat(_v7);
        }
        return _v3.sigBytes = 4 * _v5, _v3;
      }
    }), _v35.EvpKDF = function (_v0, _v1, _v2) {
      return _v206.create(_v2).compute(_v0, _v1);
    }, _v35.lib.Cipher || (_v208 = (_v207 = (_v219 = _v35).lib).Base, _v209 = _v207.WordArray, _v210 = _v207.BufferedBlockAlgorithm, _v211 = _v219.enc.Base64, _v212 = _v219.algo.EvpKDF, _v213 = _v207.Cipher = _v210.extend({
      cfg: _v208.extend(),
      createEncryptor: function (_v0, _v1) {
        return this.create(this._ENC_XFORM_MODE, _v0, _v1);
      },
      createDecryptor: function (_v0, _v1) {
        return this.create(this._DEC_XFORM_MODE, _v0, _v1);
      },
      init: function (_v0, _v1, _v2) {
        this.cfg = this.cfg.extend(_v2), this._xformMode = _v0, this._key = _v1, this.reset();
      },
      reset: function () {
        _v210.reset.call(this), this._doReset();
      },
      process: function (_v0) {
        return this._append(_v0), this._process();
      },
      finalize: function (_v0) {
        return _v0 && this._append(_v0), this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function (_v0) {
        return {
          encrypt: function (_v0, _v1, _v2) {
            return ("string" == typeof _v1 ? _v220 : _v218).encrypt(_v0, _v0, _v1, _v2);
          },
          decrypt: function (_v0, _v1, _v2) {
            return ("string" == typeof _v1 ? _v220 : _v218).decrypt(_v0, _v0, _v1, _v2);
          }
        };
      }
    }), _v207.StreamCipher = _v213.extend({
      _doFinalize: function () {
        return this._process(!0);
      },
      blockSize: 1
    }), _v214 = _v219.mode = {}, _v215 = function (_v0, _v1, _v2) {
      var _v3 = this._iv;
      _v3 ? this._iv = void 0 : _v3 = this._prevBlock;
      for (var _v4 = 0; _v4 < _v2; _v4++) _v0[_v1 + _v4] ^= _v3[_v4];
    }, (_v216 = (_v207.BlockCipherMode = _v208.extend({
      createEncryptor: function (_v0, _v1) {
        return this.Encryptor.create(_v0, _v1);
      },
      createDecryptor: function (_v0, _v1) {
        return this.Decryptor.create(_v0, _v1);
      },
      init: function (_v0, _v1) {
        this._cipher = _v0, this._iv = _v1;
      }
    })).extend()).Encryptor = _v216.extend({
      processBlock: function (_v0, _v1) {
        var _v2 = this._cipher,
          _v3 = _v2.blockSize;
        _v215.call(this, _v0, _v1, _v3), _v2.encryptBlock(_v0, _v1), this._prevBlock = _v0.slice(_v1, _v1 + _v3);
      }
    }), _v216.Decryptor = _v216.extend({
      processBlock: function (_v0, _v1) {
        var _v2 = this._cipher,
          _v3 = _v2.blockSize,
          _v4 = _v0.slice(_v1, _v1 + _v3);
        _v2.decryptBlock(_v0, _v1), _v215.call(this, _v0, _v1, _v3), this._prevBlock = _v4;
      }
    }), _v214 = _v214.CBC = _v216, _v216 = (_v219.pad = {}).Pkcs7 = {
      pad: function (_v0, _v1) {
        for (var _v2, _v3 = (_v2 = (_v2 = 4 * _v1) - _v0.sigBytes % _v2) << 24 | _v2 << 16 | _v2 << 8 | _v2, _v4 = [], _v5 = 0; _v5 < _v2; _v5 += 4) _v4.push(_v3);
        _v2 = _v209.create(_v4, _v2), _v0.concat(_v2);
      },
      unpad: function (_v0) {
        _v0.sigBytes -= 255 & _v0.words[_v0.sigBytes - 1 >>> 2];
      }
    }, _v207.BlockCipher = _v213.extend({
      cfg: _v213.cfg.extend({
        mode: _v214,
        padding: _v216
      }),
      reset: function () {
        _v213.reset.call(this);
        var _v0 = (_v1 = this.cfg).iv,
          _v1 = _v1.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) var _v2 = _v1.createEncryptor;else _v2 = _v1.createDecryptor, this._minBufferSize = 1;
        this._mode = _v2.call(_v1, this, _v0 && _v0.words);
      },
      _doProcessBlock: function (_v0, _v1) {
        this._mode.processBlock(_v0, _v1);
      },
      _doFinalize: function () {
        var _v0 = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          _v0.pad(this._data, this.blockSize);
          var _v1 = this._process(!0);
        } else _v1 = this._process(!0), _v0.unpad(_v1);
        return _v1;
      },
      blockSize: 4
    }), _v217 = _v207.CipherParams = _v208.extend({
      init: function (_v0) {
        this.mixIn(_v0);
      },
      toString: function (_v0) {
        return (_v0 || this.formatter).stringify(this);
      }
    }), _v214 = (_v219.format = {}).OpenSSL = {
      stringify: function (_v0) {
        var _v1 = _v0.ciphertext;
        return ((_v0 = _v0.salt) ? _v209.create([0, 0]).concat(_v0).concat(_v1) : _v1).toString(_v211);
      },
      parse: function (_v0) {
        var _v1 = (_v0 = _v211.parse(_v0)).words;
        if (0 == _v1[0] && 0 == _v1[1]) {
          var _v2 = _v209.create(_v1.slice(2, 4));
          _v1.splice(0, 4), _v0.sigBytes -= 16;
        }
        return _v217.create({
          ciphertext: _v0,
          salt: _v2
        });
      }
    }, _v218 = _v207.SerializableCipher = _v208.extend({
      cfg: _v208.extend({
        format: _v214
      }),
      encrypt: function (_v0, _v1, _v2, _v3) {
        _v3 = this.cfg.extend(_v3);
        var _v4 = _v0.createEncryptor(_v2, _v3);
        return _v1 = _v4.finalize(_v1), _v4 = _v4.cfg, _v217.create({
          ciphertext: _v1,
          key: _v2,
          iv: _v4.iv,
          algorithm: _v0,
          mode: _v4.mode,
          padding: _v4.padding,
          blockSize: _v0.blockSize,
          formatter: _v3.format
        });
      },
      decrypt: function (_v0, _v1, _v2, _v3) {
        return _v3 = this.cfg.extend(_v3), _v1 = this._parse(_v1, _v3.format), _v0.createDecryptor(_v2, _v3).finalize(_v1.ciphertext);
      },
      _parse: function (_v0, _v1) {
        return "string" == typeof _v0 ? _v1.parse(_v0, this) : _v0;
      }
    }), _v219 = (_v219.kdf = {}).OpenSSL = {
      execute: function (_v0, _v1, _v2, _v3) {
        return _v3 || (_v3 = _v209.random(8)), _v0 = _v212.create({
          keySize: _v1 + _v2
        }).compute(_v0, _v3), _v2 = _v209.create(_v0.words.slice(_v1), 4 * _v2), _v0.sigBytes = 4 * _v1, _v217.create({
          key: _v0,
          iv: _v2,
          salt: _v3
        });
      }
    }, _v220 = _v207.PasswordBasedCipher = _v218.extend({
      cfg: _v218.cfg.extend({
        kdf: _v219
      }),
      encrypt: function (_v0, _v1, _v2, _v3) {
        return _v2 = (_v3 = this.cfg.extend(_v3)).kdf.execute(_v2, _v0.keySize, _v0.ivSize), _v3.iv = _v2.iv, (_v0 = _v218.encrypt.call(this, _v0, _v1, _v2.key, _v3)).mixIn(_v2), _v0;
      },
      decrypt: function (_v0, _v1, _v2, _v3) {
        return _v3 = this.cfg.extend(_v3), _v1 = this._parse(_v1, _v3.format), _v2 = _v3.kdf.execute(_v2, _v0.keySize, _v0.ivSize, _v1.salt), _v3.iv = _v2.iv, _v218.decrypt.call(this, _v0, _v1, _v2.key, _v3);
      }
    })), function () {
      for (var _v0 = _v35.lib.BlockCipher, _v1 = _v35.algo, _v2 = [], _v3 = [], _v4 = [], _v5 = [], _v6 = [], _v7 = [], _v8 = [], _v9 = [], _v10 = [], _v11 = [], _v12 = [], _v13 = 0; 256 > _v13; _v13++) _v12[_v13] = 128 > _v13 ? _v13 << 1 : _v13 << 1 ^ 283;
      var _v14 = 0,
        _v15 = 0;
      for (_v13 = 0; 256 > _v13; _v13++) {
        var _v16 = (_v16 = _v15 ^ _v15 << 1 ^ _v15 << 2 ^ _v15 << 3 ^ _v15 << 4) >>> 8 ^ 255 & _v16 ^ 99;
        _v2[_v14] = _v16, _v3[_v16] = _v14;
        var _v17 = _v12[_v14],
          _v18 = _v12[_v17],
          _v19 = _v12[_v18],
          _v20 = 257 * _v12[_v16] ^ 0 * _v16;
        _v4[_v14] = _v20 << 24 | _v20 >>> 8, _v5[_v14] = _v20 << 16 | _v20 >>> 16, _v6[_v14] = _v20 << 8 | _v20 >>> 24, _v7[_v14] = _v20, _v20 = 0 * _v19 ^ 0 * _v18 ^ 257 * _v17 ^ 0 * _v14, _v8[_v16] = _v20 << 24 | _v20 >>> 8, _v9[_v16] = _v20 << 16 | _v20 >>> 16, _v10[_v16] = _v20 << 8 | _v20 >>> 24, _v11[_v16] = _v20, _v14 ? (_v14 = _v17 ^ _v12[_v12[_v12[_v19 ^ _v17]]], _v15 ^= _v12[_v12[_v15]]) : _v14 = _v15 = 1;
      }
      var _v21 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      _v1 = _v1.AES = _v0.extend({
        _doReset: function () {
          for (var _v0 = (_v2 = this._key).words, _v1 = _v2.sigBytes / 4, _v2 = 4 * ((this._nRounds = _v1 + 6) + 1), _v3 = this._keySchedule = [], _v4 = 0; _v4 < _v2; _v4++) if (_v4 < _v1) _v3[_v4] = _v0[_v4];else {
            var _v5 = _v3[_v4 - 1];
            _v4 % _v1 ? 6 < _v1 && 4 == _v4 % _v1 && (_v5 = _v2[_v5 >>> 24] << 24 | _v2[_v5 >>> 16 & 255] << 16 | _v2[_v5 >>> 8 & 255] << 8 | _v2[255 & _v5]) : _v5 = (_v2[(_v5 = _v5 << 8 | _v5 >>> 24) >>> 24] << 24 | _v2[_v5 >>> 16 & 255] << 16 | _v2[_v5 >>> 8 & 255] << 8 | _v2[255 & _v5]) ^ _v21[_v4 / _v1 | 0] << 24, _v3[_v4] = _v3[_v4 - _v1] ^ _v5;
          }
          for (_v0 = this._invKeySchedule = [], _v1 = 0; _v1 < _v2; _v1++) _v4 = _v2 - _v1, _v5 = _v1 % 4 ? _v3[_v4] : _v3[_v4 - 4], _v0[_v1] = 4 > _v1 || 4 >= _v4 ? _v5 : _v8[_v2[_v5 >>> 24]] ^ _v9[_v2[_v5 >>> 16 & 255]] ^ _v10[_v2[_v5 >>> 8 & 255]] ^ _v11[_v2[255 & _v5]];
        },
        encryptBlock: function (_v0, _v1) {
          this._doCryptBlock(_v0, _v1, this._keySchedule, _v4, _v5, _v6, _v7, _v2);
        },
        decryptBlock: function (_v0, _v1) {
          var _v2 = _v0[_v1 + 1];
          _v0[_v1 + 1] = _v0[_v1 + 3], _v0[_v1 + 3] = _v2, this._doCryptBlock(_v0, _v1, this._invKeySchedule, _v8, _v9, _v10, _v11, _v3), _v2 = _v0[_v1 + 1], _v0[_v1 + 1] = _v0[_v1 + 3], _v0[_v1 + 3] = _v2;
        },
        _doCryptBlock: function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
          for (var _v8 = this._nRounds, _v9 = _v0[_v1] ^ _v2[0], _v10 = _v0[_v1 + 1] ^ _v2[1], _v11 = _v0[_v1 + 2] ^ _v2[2], _v12 = _v0[_v1 + 3] ^ _v2[3], _v13 = 4, _v14 = 1; _v14 < _v8; _v14++) {
            var _v15 = _v3[_v9 >>> 24] ^ _v4[_v10 >>> 16 & 255] ^ _v5[_v11 >>> 8 & 255] ^ _v6[255 & _v12] ^ _v2[_v13++],
              _v16 = _v3[_v10 >>> 24] ^ _v4[_v11 >>> 16 & 255] ^ _v5[_v12 >>> 8 & 255] ^ _v6[255 & _v9] ^ _v2[_v13++],
              _v17 = _v3[_v11 >>> 24] ^ _v4[_v12 >>> 16 & 255] ^ _v5[_v9 >>> 8 & 255] ^ _v6[255 & _v10] ^ _v2[_v13++];
            _v12 = _v3[_v12 >>> 24] ^ _v4[_v9 >>> 16 & 255] ^ _v5[_v10 >>> 8 & 255] ^ _v6[255 & _v11] ^ _v2[_v13++], _v9 = _v15, _v10 = _v16, _v11 = _v17;
          }
          _v15 = (_v7[_v9 >>> 24] << 24 | _v7[_v10 >>> 16 & 255] << 16 | _v7[_v11 >>> 8 & 255] << 8 | _v7[255 & _v12]) ^ _v2[_v13++], _v16 = (_v7[_v10 >>> 24] << 24 | _v7[_v11 >>> 16 & 255] << 16 | _v7[_v12 >>> 8 & 255] << 8 | _v7[255 & _v9]) ^ _v2[_v13++], _v17 = (_v7[_v11 >>> 24] << 24 | _v7[_v12 >>> 16 & 255] << 16 | _v7[_v9 >>> 8 & 255] << 8 | _v7[255 & _v10]) ^ _v2[_v13++], _v12 = (_v7[_v12 >>> 24] << 24 | _v7[_v9 >>> 16 & 255] << 16 | _v7[_v10 >>> 8 & 255] << 8 | _v7[255 & _v11]) ^ _v2[_v13++], _v0[_v1] = _v15, _v0[_v1 + 1] = _v16, _v0[_v1 + 2] = _v17, _v0[_v1 + 3] = _v12;
        },
        keySize: 8
      }), _v35.AES = _v0._createHelper(_v1);
    }(), _v35.mode.ECB = ((_v34 = _v35.lib.BlockCipherMode.extend()).Encryptor = _v34.extend({
      processBlock: function (_v0, _v1) {
        this._cipher.encryptBlock(_v0, _v1);
      }
    }), _v34.Decryptor = _v34.extend({
      processBlock: function (_v0, _v1) {
        this._cipher.decryptBlock(_v0, _v1);
      }
    }), _v34);
    var _v37 = function () {
        function _v0(_v0) {
          var _v1 = _v0.config;
          this._config = _v1, this._iv = "0123456789012345", this._allowedKeyEncodings = ["hex", "utf8", "base64", "binary"], this._allowedKeyLengths = [128, 256], this._allowedModes = ["ecb", "cbc"], this._defaultOptions = {
            encryptKey: !0,
            keyEncoding: "utf8",
            keyLength: 256,
            mode: "cbc"
          };
        }
        return _v0.prototype.HMACSHA256 = function (_v0) {
          return _v35.HmacSHA256(_v0, this._config.secretKey).toString(_v35.enc.Base64);
        }, _v0.prototype.SHA256 = function (_v0) {
          return _v35.SHA256(_v0).toString(_v35.enc.Hex);
        }, _v0.prototype._parseOptions = function (_v0) {
          var _v1 = _v0 || {};
          return _v1.hasOwnProperty("encryptKey") || (_v1.encryptKey = this._defaultOptions.encryptKey), _v1.hasOwnProperty("keyEncoding") || (_v1.keyEncoding = this._defaultOptions.keyEncoding), _v1.hasOwnProperty("keyLength") || (_v1.keyLength = this._defaultOptions.keyLength), _v1.hasOwnProperty("mode") || (_v1.mode = this._defaultOptions.mode), -1 === this._allowedKeyEncodings.indexOf(_v1.keyEncoding.toLowerCase()) && (_v1.keyEncoding = this._defaultOptions.keyEncoding), -1 === this._allowedKeyLengths.indexOf(parseInt(_v1.keyLength, 10)) && (_v1.keyLength = this._defaultOptions.keyLength), -1 === this._allowedModes.indexOf(_v1.mode.toLowerCase()) && (_v1.mode = this._defaultOptions.mode), _v1;
        }, _v0.prototype._decodeKey = function (_v0, _v1) {
          return "base64" === _v1.keyEncoding ? _v35.enc.Base64.parse(_v0) : "hex" === _v1.keyEncoding ? _v35.enc.Hex.parse(_v0) : _v0;
        }, _v0.prototype._getPaddedKey = function (_v0, _v1) {
          return _v0 = this._decodeKey(_v0, _v1), _v1.encryptKey ? _v35.enc.Utf8.parse(this.SHA256(_v0).slice(0, 32)) : _v0;
        }, _v0.prototype._getMode = function (_v0) {
          return "ecb" === _v0.mode ? _v35.mode.ECB : _v35.mode.CBC;
        }, _v0.prototype._getIV = function (_v0) {
          return "cbc" === _v0.mode ? _v35.enc.Utf8.parse(this._iv) : null;
        }, _v0.prototype._getRandomIV = function () {
          return _v35.lib.WordArray.random(16);
        }, _v0.prototype.encrypt = function (_v0, _v1, _v2) {
          return this._config.customEncrypt ? this._config.customEncrypt(_v0) : this.pnEncrypt(_v0, _v1, _v2);
        }, _v0.prototype.decrypt = function (_v0, _v1, _v2) {
          return this._config.customDecrypt ? this._config.customDecrypt(_v0) : this.pnDecrypt(_v0, _v1, _v2);
        }, _v0.prototype.pnEncrypt = function (_v0, _v1, _v2) {
          if (!_v1 && !this._config.cipherKey) return _v0;
          _v2 = this._parseOptions(_v2);
          var _v3 = this._getMode(_v2),
            _v4 = this._getPaddedKey(_v1 || this._config.cipherKey, _v2);
          if (this._config.useRandomIVs) {
            var _v5 = this._getRandomIV(),
              _v6 = _v35.AES.encrypt(_v0, _v4, {
                iv: _v5,
                mode: _v3
              }).ciphertext;
            return _v5.clone().concat(_v6.clone()).toString(_v35.enc.Base64);
          }
          var _v7 = this._getIV(_v2);
          return _v35.AES.encrypt(_v0, _v4, {
            iv: _v7,
            mode: _v3
          }).ciphertext.toString(_v35.enc.Base64) || _v0;
        }, _v0.prototype.pnDecrypt = function (_v0, _v1, _v2) {
          if (!_v1 && !this._config.cipherKey) return _v0;
          _v2 = this._parseOptions(_v2);
          var _v3 = this._getMode(_v2),
            _v4 = this._getPaddedKey(_v1 || this._config.cipherKey, _v2);
          if (this._config.useRandomIVs) {
            var _v5 = _v36((_v8 = new Uint8ClampedArray(_v16(_v0))).slice(0, 16)),
              _v6 = _v36(_v8.slice(16));
            try {
              var _v7 = _v35.AES.decrypt({
                ciphertext: _v6
              }, _v4, {
                iv: _v5,
                mode: _v3
              }).toString(_v35.enc.Utf8);
              return JSON.parse(_v7);
            } catch (_v0) {
              return null;
            }
          }
          _v5 = this._getIV(_v2);
          try {
            var _v8 = _v35.enc.Base64.parse(_v0);
            return _v7 = _v35.AES.decrypt({
              ciphertext: _v8
            }, _v4, {
              iv: _v5,
              mode: _v3
            }).toString(_v35.enc.Utf8), JSON.parse(_v7);
          } catch (_v0) {
            return null;
          }
        }, _v0;
      }(),
      _v38 = function () {
        function _v0(_v0) {
          var _v1 = _v0.timeEndpoint;
          this._timeEndpoint = _v1;
        }
        return _v0.prototype.onReconnection = function (_v0) {
          this._reconnectionCallback = _v0;
        }, _v0.prototype.startPolling = function () {
          this._timeTimer = setInterval(this._performTimeLoop.bind(this), 0);
        }, _v0.prototype.stopPolling = function () {
          clearInterval(this._timeTimer);
        }, _v0.prototype._performTimeLoop = function () {
          var _v0 = this;
          this._timeEndpoint(function (_v0) {
            _v0.error || (clearInterval(_v0._timeTimer), _v0._reconnectionCallback());
          });
        }, _v0;
      }(),
      _v39 = function () {
        function _v0(_v0) {
          var _v1 = _v0.config;
          this.hashHistory = [], this._config = _v1;
        }
        return _v0.prototype.getKey = function (_v0) {
          var _v1 = function (_v0) {
              var _v1 = 0;
              if (0 === _v0.length) return _v1;
              for (var _v2 = 0; _v2 < _v0.length; _v2 += 1) _v1 = (_v1 << 5) - _v1 + _v0.charCodeAt(_v2), _v1 &= _v1;
              return _v1;
            }(JSON.stringify(_v0.payload)).toString(),
            _v2 = _v0.publishMetaData.publishTimetoken;
          return "".concat(_v2, "-").concat(_v1);
        }, _v0.prototype.isDuplicate = function (_v0) {
          return this.hashHistory.includes(this.getKey(_v0));
        }, _v0.prototype.addEntry = function (_v0) {
          this.hashHistory.length >= this._config.maximumCacheSize && this.hashHistory.shift(), this.hashHistory.push(this.getKey(_v0));
        }, _v0.prototype.clearHistory = function () {
          this.hashHistory = [];
        }, _v0;
      }(),
      _v40 = {
        PNNetworkUpCategory: "PNNetworkUpCategory",
        PNNetworkDownCategory: "PNNetworkDownCategory",
        PNNetworkIssuesCategory: "PNNetworkIssuesCategory",
        PNTimeoutCategory: "PNTimeoutCategory",
        PNBadRequestCategory: "PNBadRequestCategory",
        PNAccessDeniedCategory: "PNAccessDeniedCategory",
        PNUnknownCategory: "PNUnknownCategory",
        PNReconnectedCategory: "PNReconnectedCategory",
        PNConnectedCategory: "PNConnectedCategory",
        PNRequestMessageCountExceededCategory: "PNRequestMessageCountExceededCategory",
        PNDisconnectedCategory: "PNDisconnectedCategory",
        PNConnectionErrorCategory: "PNConnectionErrorCategory",
        PNDisconnectedUnexpectedlyCategory: "PNDisconnectedUnexpectedlyCategory"
      },
      _v41 = function () {
        function _v0(_v0) {
          var _v1 = _v0.subscribeEndpoint,
            _v2 = _v0.leaveEndpoint,
            _v3 = _v0.heartbeatEndpoint,
            _v4 = _v0.setStateEndpoint,
            _v5 = _v0.timeEndpoint,
            _v6 = _v0.getFileUrl,
            _v7 = _v0.config,
            _v8 = _v0.crypto,
            _v9 = _v0.listenerManager,
            _v10 = _v0.cryptoModule,
            _v11 = _v0.eventEmitter;
          this._listenerManager = _v9, this._config = _v7, this._leaveEndpoint = _v2, this._heartbeatEndpoint = _v3, this._setStateEndpoint = _v4, this._subscribeEndpoint = _v1, this._getFileUrl = _v6, this._crypto = _v8, this._cryptoModule = _v10, this._channels = {}, this._presenceChannels = {}, this._heartbeatChannels = {}, this._heartbeatChannelGroups = {}, this._channelGroups = {}, this._presenceChannelGroups = {}, this._pendingChannelSubscriptions = [], this._pendingChannelGroupSubscriptions = [], this._currentTimetoken = 0, this._lastTimetoken = 0, this._storedTimetoken = null, this._subscriptionStatusAnnounced = !1, this._isOnline = !0, this._reconnectionManager = new _v38({
            timeEndpoint: _v5
          }), this._dedupingManager = new _v39({
            config: _v7
          }), this._cryptoModule && (this._decoder = new TextDecoder()), this._eventEmitter = _v11;
        }
        return _v0.prototype.adaptStateChange = function (_v0, _v1) {
          var _v2 = this,
            _v3 = _v0.state,
            _v4 = _v0.channels,
            _v5 = void 0 === _v4 ? [] : _v4,
            _v6 = _v0.channelGroups,
            _v7 = void 0 === _v6 ? [] : _v6,
            _v8 = _v0.withHeartbeat;
          if (_v5.forEach(function (_v0) {
            _v0 in _v2._channels && (_v2._channels[_v0].state = _v3);
          }), _v7.forEach(function (_v0) {
            _v0 in _v2._channelGroups && (_v2._channelGroups[_v0].state = _v3);
          }), void 0 !== _v8 && _v8) {
            var _v9 = {};
            return _v5.forEach(function (_v0) {
              return _v9[_v0] = _v3;
            }), _v7.forEach(function (_v0) {
              return _v9[_v0] = _v3;
            }), this._heartbeatEndpoint({
              channels: _v5,
              channelGroups: _v7,
              state: _v9
            }, _v1);
          }
          return this._setStateEndpoint({
            state: _v3,
            channels: _v5,
            channelGroups: _v7
          }, _v1);
        }, _v0.prototype.adaptPresenceChange = function (_v0) {
          var _v1 = this,
            _v2 = _v0.connected,
            _v3 = _v0.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v0.channelGroups,
            _v6 = void 0 === _v5 ? [] : _v5;
          _v2 ? (_v4.forEach(function (_v0) {
            _v1._heartbeatChannels[_v0] = {
              state: {}
            };
          }), _v6.forEach(function (_v0) {
            _v1._heartbeatChannelGroups[_v0] = {
              state: {}
            };
          })) : (_v4.forEach(function (_v0) {
            _v0 in _v1._heartbeatChannels && delete _v1._heartbeatChannels[_v0];
          }), _v6.forEach(function (_v0) {
            _v0 in _v1._heartbeatChannelGroups && delete _v1._heartbeatChannelGroups[_v0];
          }), !1 === this._config.suppressLeaveEvents && this._leaveEndpoint({
            channels: _v4,
            channelGroups: _v6
          }, function (_v0) {
            _v1._listenerManager.announceStatus(_v0);
          })), this.reconnect();
        }, _v0.prototype.adaptSubscribeChange = function (_v0) {
          var _v1 = this,
            _v2 = _v0.timetoken,
            _v3 = _v0.channels,
            _v4 = _v0.channelGroups,
            _v5 = _v0.withPresence,
            _v6 = void 0 !== _v5 && _v5,
            _v7 = _v0.withHeartbeats,
            _v8 = void 0 !== _v7 && _v7;
          this._config.subscribeKey && "" !== this._config.subscribeKey ? (_v2 && (this._lastTimetoken = this._currentTimetoken, this._currentTimetoken = _v2), "0" !== this._currentTimetoken && 0 !== this._currentTimetoken && (this._storedTimetoken = this._currentTimetoken, this._currentTimetoken = 0), (void 0 === _v3 ? [] : _v3).forEach(function (_v0) {
            _v1._channels[_v0] = {
              state: {}
            }, _v6 && (_v1._presenceChannels[_v0] = {}), (_v8 || _v1._config.getHeartbeatInterval()) && (_v1._heartbeatChannels[_v0] = {}), _v1._pendingChannelSubscriptions.push(_v0);
          }), (void 0 === _v4 ? [] : _v4).forEach(function (_v0) {
            _v1._channelGroups[_v0] = {
              state: {}
            }, _v6 && (_v1._presenceChannelGroups[_v0] = {}), (_v8 || _v1._config.getHeartbeatInterval()) && (_v1._heartbeatChannelGroups[_v0] = {}), _v1._pendingChannelGroupSubscriptions.push(_v0);
          }), this._subscriptionStatusAnnounced = !1, this.reconnect()) : console && console.log && console.log("subscribe key missing; aborting subscribe");
        }, _v0.prototype.adaptUnsubscribeChange = function (_v0, _v1) {
          var _v2 = this,
            _v3 = _v0.channels,
            _v4 = _v0.channelGroups,
            _v5 = [],
            _v6 = [];
          (void 0 === _v3 ? [] : _v3).forEach(function (_v0) {
            _v0 in _v2._channels && (delete _v2._channels[_v0], _v5.push(_v0), _v0 in _v2._heartbeatChannels && delete _v2._heartbeatChannels[_v0]), _v0 in _v2._presenceChannels && (delete _v2._presenceChannels[_v0], _v5.push(_v0));
          }), (void 0 === _v4 ? [] : _v4).forEach(function (_v0) {
            _v0 in _v2._channelGroups && (delete _v2._channelGroups[_v0], _v6.push(_v0), _v0 in _v2._heartbeatChannelGroups && delete _v2._heartbeatChannelGroups[_v0]), _v0 in _v2._presenceChannelGroups && (delete _v2._presenceChannelGroups[_v0], _v6.push(_v0));
          }), 0 === _v5.length && 0 === _v6.length || (!1 !== this._config.suppressLeaveEvents || _v1 || this._leaveEndpoint({
            channels: _v5,
            channelGroups: _v6
          }, function (_v0) {
            _v0.affectedChannels = _v5, _v0.affectedChannelGroups = _v6, _v0.currentTimetoken = _v2._currentTimetoken, _v0.lastTimetoken = _v2._lastTimetoken, _v2._listenerManager.announceStatus(_v0);
          }), 0 === Object.keys(this._channels).length && 0 === Object.keys(this._presenceChannels).length && 0 === Object.keys(this._channelGroups).length && 0 === Object.keys(this._presenceChannelGroups).length && (this._lastTimetoken = 0, this._currentTimetoken = 0, this._storedTimetoken = null, this._region = null, this._reconnectionManager.stopPolling()), this.reconnect());
        }, _v0.prototype.unsubscribeAll = function (_v0) {
          this.adaptUnsubscribeChange({
            channels: this.getSubscribedChannels(),
            channelGroups: this.getSubscribedChannelGroups()
          }, _v0);
        }, _v0.prototype.getHeartbeatChannels = function () {
          return Object.keys(this._heartbeatChannels);
        }, _v0.prototype.getHeartbeatChannelGroups = function () {
          return Object.keys(this._heartbeatChannelGroups);
        }, _v0.prototype.getSubscribedChannels = function () {
          return Object.keys(this._channels);
        }, _v0.prototype.getSubscribedChannelGroups = function () {
          return Object.keys(this._channelGroups);
        }, _v0.prototype.reconnect = function () {
          this._startSubscribeLoop(), this._registerHeartbeatTimer();
        }, _v0.prototype.disconnect = function () {
          this._stopSubscribeLoop(), this._stopHeartbeatTimer(), this._reconnectionManager.stopPolling();
        }, _v0.prototype._registerHeartbeatTimer = function () {
          this._stopHeartbeatTimer(), 0 !== this._config.getHeartbeatInterval() && void 0 !== this._config.getHeartbeatInterval() && (this._performHeartbeatLoop(), this._heartbeatTimer = setInterval(this._performHeartbeatLoop.bind(this), 0 * this._config.getHeartbeatInterval()));
        }, _v0.prototype._stopHeartbeatTimer = function () {
          this._heartbeatTimer && (clearInterval(this._heartbeatTimer), this._heartbeatTimer = null);
        }, _v0.prototype._performHeartbeatLoop = function () {
          var _v0 = this,
            _v1 = this.getHeartbeatChannels(),
            _v2 = this.getHeartbeatChannelGroups(),
            _v3 = {};
          (0 !== _v1.length || 0 !== _v2.length) && (this.getSubscribedChannels().forEach(function (_v0) {
            var _v1 = _v0._channels[_v0].state;
            Object.keys(_v1).length && (_v3[_v0] = _v1);
          }), this.getSubscribedChannelGroups().forEach(function (_v0) {
            var _v1 = _v0._channelGroups[_v0].state;
            Object.keys(_v1).length && (_v3[_v0] = _v1);
          }), this._heartbeatEndpoint({
            channels: _v1,
            channelGroups: _v2,
            state: _v3
          }, function (_v0) {
            _v0.error && _v0._config.announceFailedHeartbeats && _v0._listenerManager.announceStatus(_v0), _v0.error && _v0._config.autoNetworkDetection && _v0._isOnline && (_v0._isOnline = !1, _v0.disconnect(), _v0._listenerManager.announceNetworkDown(), _v0.reconnect()), !_v0.error && _v0._config.announceSuccessfulHeartbeats && _v0._listenerManager.announceStatus(_v0);
          }.bind(this)));
        }, _v0.prototype._startSubscribeLoop = function () {
          var _v0 = this;
          this._stopSubscribeLoop();
          var _v1 = {},
            _v2 = [],
            _v3 = [];
          if (Object.keys(this._channels).forEach(function (_v0) {
            var _v1 = _v0._channels[_v0].state;
            Object.keys(_v1).length && (_v1[_v0] = _v1), _v2.push(_v0);
          }), Object.keys(this._presenceChannels).forEach(function (_v0) {
            _v2.push("".concat(_v0, "-pnpres"));
          }), Object.keys(this._channelGroups).forEach(function (_v0) {
            var _v1 = _v0._channelGroups[_v0].state;
            Object.keys(_v1).length && (_v1[_v0] = _v1), _v3.push(_v0);
          }), Object.keys(this._presenceChannelGroups).forEach(function (_v0) {
            _v3.push("".concat(_v0, "-pnpres"));
          }), 0 !== _v2.length || 0 !== _v3.length) {
            var _v4 = {
              channels: _v2,
              channelGroups: _v3,
              state: _v1,
              timetoken: this._currentTimetoken,
              filterExpression: this._config.filterExpression,
              region: this._region
            };
            this._subscribeCall = this._subscribeEndpoint(_v4, this._processSubscribeResponse.bind(this));
          }
        }, _v0.prototype._processSubscribeResponse = function (_v0, _v1) {
          var _v2 = this;
          if (_v0.error) {
            if (_v0.errorData && "Aborted" === _v0.errorData.message) return;
            _v0.category === _v40.PNTimeoutCategory ? this._startSubscribeLoop() : (_v0.category === _v40.PNNetworkIssuesCategory ? (this.disconnect(), _v0.error && this._config.autoNetworkDetection && this._isOnline && (this._isOnline = !1, this._listenerManager.announceNetworkDown()), this._reconnectionManager.onReconnection(function () {
              _v2._config.autoNetworkDetection && !_v2._isOnline && (_v2._isOnline = !0, _v2._listenerManager.announceNetworkUp()), _v2.reconnect(), _v2._subscriptionStatusAnnounced = !0;
              var _v0 = {
                category: _v40.PNReconnectedCategory,
                operation: _v0.operation,
                lastTimetoken: _v2._lastTimetoken,
                currentTimetoken: _v2._currentTimetoken
              };
              _v2._listenerManager.announceStatus(_v0);
            }), this._reconnectionManager.startPolling()) : _v0.category === _v40.PNBadRequestCategory && this._stopHeartbeatTimer(), this._listenerManager.announceStatus(_v0));
          } else {
            if (this._storedTimetoken ? (this._currentTimetoken = this._storedTimetoken, this._storedTimetoken = null) : (this._lastTimetoken = this._currentTimetoken, this._currentTimetoken = _v1.metadata.timetoken), !this._subscriptionStatusAnnounced) {
              var _v3 = {};
              _v3.category = _v40.PNConnectedCategory, _v3.operation = _v0.operation, _v3.affectedChannels = this._pendingChannelSubscriptions, _v3.subscribedChannels = this.getSubscribedChannels(), _v3.affectedChannelGroups = this._pendingChannelGroupSubscriptions, _v3.lastTimetoken = this._lastTimetoken, _v3.currentTimetoken = this._currentTimetoken, this._subscriptionStatusAnnounced = !0, this._listenerManager.announceStatus(_v3), this._pendingChannelSubscriptions = [], this._pendingChannelGroupSubscriptions = [];
            }
            var _v4 = _v1.messages || [],
              _v5 = this._config,
              _v6 = _v5.requestMessageCountThreshold,
              _v7 = _v5.dedupeOnSubscribe;
            if (_v6 && _v4.length >= _v6) {
              var _v8 = {};
              _v8.category = _v40.PNRequestMessageCountExceededCategory, _v8.operation = _v0.operation, this._listenerManager.announceStatus(_v8);
            }
            _v4.forEach(function (_v0) {
              if (_v0.channel, _v0.subscriptionMatch, _v7) {
                if (_v2._dedupingManager.isDuplicate(_v0)) return;
                _v2._dedupingManager.addEntry(_v0);
              }
              _v2._eventEmitter.emitEvent(_v0);
            }), this._region = _v1.metadata.region, this._startSubscribeLoop();
          }
        }, _v0.prototype._stopSubscribeLoop = function () {
          this._subscribeCall && ("function" == typeof this._subscribeCall.abort && this._subscribeCall.abort(), this._subscribeCall = null);
        }, _v0.prototype._renameEvent = function (_v0) {
          return "set" === _v0 ? "updated" : "removed";
        }, _v0.prototype._renameChannelField = function (_v0) {
          var _v1 = _v0.channel,
            _v2 = _v3(_v0, ["channel"]);
          return _v2.spaceId = _v1, _v2;
        }, _v0;
      }(),
      _v42 = {
        PNTimeOperation: "PNTimeOperation",
        PNHistoryOperation: "PNHistoryOperation",
        PNDeleteMessagesOperation: "PNDeleteMessagesOperation",
        PNFetchMessagesOperation: "PNFetchMessagesOperation",
        PNMessageCounts: "PNMessageCountsOperation",
        PNSubscribeOperation: "PNSubscribeOperation",
        PNUnsubscribeOperation: "PNUnsubscribeOperation",
        PNPublishOperation: "PNPublishOperation",
        PNSignalOperation: "PNSignalOperation",
        PNAddMessageActionOperation: "PNAddActionOperation",
        PNRemoveMessageActionOperation: "PNRemoveMessageActionOperation",
        PNGetMessageActionsOperation: "PNGetMessageActionsOperation",
        PNCreateUserOperation: "PNCreateUserOperation",
        PNUpdateUserOperation: "PNUpdateUserOperation",
        PNDeleteUserOperation: "PNDeleteUserOperation",
        PNGetUserOperation: "PNGetUsersOperation",
        PNGetUsersOperation: "PNGetUsersOperation",
        PNCreateSpaceOperation: "PNCreateSpaceOperation",
        PNUpdateSpaceOperation: "PNUpdateSpaceOperation",
        PNDeleteSpaceOperation: "PNDeleteSpaceOperation",
        PNGetSpaceOperation: "PNGetSpacesOperation",
        PNGetSpacesOperation: "PNGetSpacesOperation",
        PNGetMembersOperation: "PNGetMembersOperation",
        PNUpdateMembersOperation: "PNUpdateMembersOperation",
        PNGetMembershipsOperation: "PNGetMembershipsOperation",
        PNUpdateMembershipsOperation: "PNUpdateMembershipsOperation",
        PNListFilesOperation: "PNListFilesOperation",
        PNGenerateUploadUrlOperation: "PNGenerateUploadUrlOperation",
        PNPublishFileOperation: "PNPublishFileOperation",
        PNGetFileUrlOperation: "PNGetFileUrlOperation",
        PNDownloadFileOperation: "PNDownloadFileOperation",
        PNGetAllUUIDMetadataOperation: "PNGetAllUUIDMetadataOperation",
        PNGetUUIDMetadataOperation: "PNGetUUIDMetadataOperation",
        PNSetUUIDMetadataOperation: "PNSetUUIDMetadataOperation",
        PNRemoveUUIDMetadataOperation: "PNRemoveUUIDMetadataOperation",
        PNGetAllChannelMetadataOperation: "PNGetAllChannelMetadataOperation",
        PNGetChannelMetadataOperation: "PNGetChannelMetadataOperation",
        PNSetChannelMetadataOperation: "PNSetChannelMetadataOperation",
        PNRemoveChannelMetadataOperation: "PNRemoveChannelMetadataOperation",
        PNSetMembersOperation: "PNSetMembersOperation",
        PNSetMembershipsOperation: "PNSetMembershipsOperation",
        PNPushNotificationEnabledChannelsOperation: "PNPushNotificationEnabledChannelsOperation",
        PNRemoveAllPushNotificationsOperation: "PNRemoveAllPushNotificationsOperation",
        PNWhereNowOperation: "PNWhereNowOperation",
        PNSetStateOperation: "PNSetStateOperation",
        PNHereNowOperation: "PNHereNowOperation",
        PNGetStateOperation: "PNGetStateOperation",
        PNHeartbeatOperation: "PNHeartbeatOperation",
        PNChannelGroupsOperation: "PNChannelGroupsOperation",
        PNRemoveGroupOperation: "PNRemoveGroupOperation",
        PNChannelsForGroupOperation: "PNChannelsForGroupOperation",
        PNAddChannelsToGroupOperation: "PNAddChannelsToGroupOperation",
        PNRemoveChannelsFromGroupOperation: "PNRemoveChannelsFromGroupOperation",
        PNAccessManagerGrant: "PNAccessManagerGrant",
        PNAccessManagerGrantToken: "PNAccessManagerGrantToken",
        PNAccessManagerAudit: "PNAccessManagerAudit",
        PNAccessManagerRevokeToken: "PNAccessManagerRevokeToken",
        PNHandshakeOperation: "PNHandshakeOperation",
        PNReceiveMessagesOperation: "PNReceiveMessagesOperation"
      },
      _v43 = function () {
        function _v0(_v0) {
          this._maximumSamplesCount = 100, this._trackedLatencies = {}, this._latencies = {}, this._telemetryExcludeOperations = [_v42.PNSubscribeOperation, _v42.PNReceiveMessagesOperation, _v42.PNHandshakeOperation], this._maximumSamplesCount = _v0.maximumSamplesCount || this._maximumSamplesCount;
        }
        return _v0.prototype.operationsLatencyForRequest = function () {
          var _v0 = this,
            _v1 = {};
          return Object.keys(this._latencies).forEach(function (_v0) {
            var _v1 = _v0._latencies[_v0],
              _v2 = _v0._averageLatency(_v1);
            _v2 > 0 && (_v1["l_".concat(_v0)] = _v2);
          }), _v1;
        }, _v0.prototype.startLatencyMeasure = function (_v0, _v1) {
          !this._telemetryExcludeOperations.includes(_v0) && _v1 && (this._trackedLatencies[_v1] = Date.now());
        }, _v0.prototype.stopLatencyMeasure = function (_v0, _v1) {
          if (!this._telemetryExcludeOperations.includes(_v0) && _v1) {
            var _v2 = this._endpointName(_v0),
              _v3 = this._latencies[_v2],
              _v4 = this._trackedLatencies[_v1];
            _v3 || (this._latencies[_v2] = [], _v3 = this._latencies[_v2]), _v3.push(Date.now() - _v4), _v3.length > this._maximumSamplesCount && _v3.splice(0, _v3.length - this._maximumSamplesCount), delete this._trackedLatencies[_v1];
          }
        }, _v0.prototype._averageLatency = function (_v0) {
          return Math.floor(_v0.reduce(function (_v0, _v1) {
            return _v0 + _v1;
          }, 0) / _v0.length);
        }, _v0.prototype._endpointName = function (_v0) {
          var _v1 = null;
          switch (_v0) {
            case _v42.PNPublishOperation:
              _v1 = "pub";
              break;
            case _v42.PNSignalOperation:
              _v1 = "sig";
              break;
            case _v42.PNHistoryOperation:
            case _v42.PNFetchMessagesOperation:
            case _v42.PNDeleteMessagesOperation:
            case _v42.PNMessageCounts:
              _v1 = "hist";
              break;
            case _v42.PNUnsubscribeOperation:
            case _v42.PNWhereNowOperation:
            case _v42.PNHereNowOperation:
            case _v42.PNHeartbeatOperation:
            case _v42.PNSetStateOperation:
            case _v42.PNGetStateOperation:
              _v1 = "pres";
              break;
            case _v42.PNAddChannelsToGroupOperation:
            case _v42.PNRemoveChannelsFromGroupOperation:
            case _v42.PNChannelGroupsOperation:
            case _v42.PNRemoveGroupOperation:
            case _v42.PNChannelsForGroupOperation:
              _v1 = "cg";
              break;
            case _v42.PNPushNotificationEnabledChannelsOperation:
            case _v42.PNRemoveAllPushNotificationsOperation:
              _v1 = "push";
              break;
            case _v42.PNCreateUserOperation:
            case _v42.PNUpdateUserOperation:
            case _v42.PNDeleteUserOperation:
            case _v42.PNGetUserOperation:
            case _v42.PNGetUsersOperation:
            case _v42.PNCreateSpaceOperation:
            case _v42.PNUpdateSpaceOperation:
            case _v42.PNDeleteSpaceOperation:
            case _v42.PNGetSpaceOperation:
            case _v42.PNGetSpacesOperation:
            case _v42.PNGetMembersOperation:
            case _v42.PNUpdateMembersOperation:
            case _v42.PNGetMembershipsOperation:
            case _v42.PNUpdateMembershipsOperation:
              _v1 = "obj";
              break;
            case _v42.PNAddMessageActionOperation:
            case _v42.PNRemoveMessageActionOperation:
            case _v42.PNGetMessageActionsOperation:
              _v1 = "msga";
              break;
            case _v42.PNAccessManagerGrant:
            case _v42.PNAccessManagerAudit:
              _v1 = "pam";
              break;
            case _v42.PNAccessManagerGrantToken:
            case _v42.PNAccessManagerRevokeToken:
              _v1 = "pamv3";
              break;
            default:
              _v1 = "time";
          }
          return _v1;
        }, _v0;
      }(),
      _v44 = function () {
        function _v0(_v0, _v1, _v2) {
          this._payload = _v0, this._setDefaultPayloadStructure(), this.title = _v1, this.body = _v2;
        }
        return Object.defineProperty(_v0.prototype, "payload", {
          get: function () {
            return this._payload;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "title", {
          set: function (_v0) {
            this._title = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "subtitle", {
          set: function (_v0) {
            this._subtitle = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "body", {
          set: function (_v0) {
            this._body = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "badge", {
          set: function (_v0) {
            this._badge = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "sound", {
          set: function (_v0) {
            this._sound = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), _v0.prototype._setDefaultPayloadStructure = function () {}, _v0.prototype.toObject = function () {
          return {};
        }, _v0;
      }(),
      _v45 = function (_v0) {
        function _v1() {
          return null !== _v0 && _v0.apply(this, arguments) || this;
        }
        return _v1(_v1, _v0), Object.defineProperty(_v1.prototype, "configurations", {
          set: function (_v0) {
            _v0 && _v0.length && (this._configurations = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "notification", {
          get: function () {
            return this._payload.aps;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "title", {
          get: function () {
            return this._title;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.aps.alert.title = _v0, this._title = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "subtitle", {
          get: function () {
            return this._subtitle;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.aps.alert.subtitle = _v0, this._subtitle = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "body", {
          get: function () {
            return this._body;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.aps.alert.body = _v0, this._body = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "badge", {
          get: function () {
            return this._badge;
          },
          set: function (_v0) {
            null != _v0 && (this._payload.aps.badge = _v0, this._badge = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "sound", {
          get: function () {
            return this._sound;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.aps.sound = _v0, this._sound = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "silent", {
          set: function (_v0) {
            this._isSilent = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), _v1.prototype._setDefaultPayloadStructure = function () {
          this._payload.aps = {
            alert: {}
          };
        }, _v1.prototype.toObject = function () {
          var _v0 = this,
            _v1 = _v2({}, this._payload),
            _v2 = _v1.aps,
            _v3 = _v2.alert;
          if (this._isSilent && (_v2["content-available"] = 1), "apns2" === this._apnsPushType) {
            if (!this._configurations || !this._configurations.length) throw ReferenceError("APNS2 configuration is missing");
            var _v4 = [];
            this._configurations.forEach(function (_v0) {
              _v4.push(_v0._objectFromAPNS2Configuration(_v0));
            }), _v4.length && (_v1.pn_push = _v4);
          }
          return _v3 && Object.keys(_v3).length || delete _v2.alert, this._isSilent && (delete _v2.alert, delete _v2.badge, delete _v2.sound, _v3 = {}), this._isSilent || Object.keys(_v3).length ? _v1 : null;
        }, _v1.prototype._objectFromAPNS2Configuration = function (_v0) {
          var _v1 = this;
          if (!_v0.targets || !_v0.targets.length) throw ReferenceError("At least one APNS2 target should be provided");
          var _v2 = [];
          _v0.targets.forEach(function (_v0) {
            _v2.push(_v1._objectFromAPNSTarget(_v0));
          });
          var _v3 = _v0.collapseId,
            _v4 = _v0.expirationDate,
            _v5 = {
              auth_method: "token",
              targets: _v2,
              version: "v2"
            };
          return _v3 && _v3.length && (_v5.collapse_id = _v3), _v4 && (_v5.expiration = _v4.toISOString()), _v5;
        }, _v1.prototype._objectFromAPNSTarget = function (_v0) {
          if (!_v0.topic || !_v0.topic.length) throw TypeError("Target 'topic' undefined.");
          var _v1 = _v0.topic,
            _v2 = _v0.environment,
            _v3 = _v0.excludedDevices,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = {
              topic: _v1,
              environment: void 0 === _v2 ? "development" : _v2
            };
          return _v4.length && (_v5.excluded_devices = _v4), _v5;
        }, _v1;
      }(_v44),
      _v46 = function (_v0) {
        function _v1() {
          return null !== _v0 && _v0.apply(this, arguments) || this;
        }
        return _v1(_v1, _v0), Object.defineProperty(_v1.prototype, "backContent", {
          get: function () {
            return this._backContent;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.back_content = _v0, this._backContent = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "backTitle", {
          get: function () {
            return this._backTitle;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.back_title = _v0, this._backTitle = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "count", {
          get: function () {
            return this._count;
          },
          set: function (_v0) {
            null != _v0 && (this._payload.count = _v0, this._count = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "title", {
          get: function () {
            return this._title;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.title = _v0, this._title = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "type", {
          get: function () {
            return this._type;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.type = _v0, this._type = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "subtitle", {
          get: function () {
            return this.backTitle;
          },
          set: function (_v0) {
            this.backTitle = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "body", {
          get: function () {
            return this.backContent;
          },
          set: function (_v0) {
            this.backContent = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "badge", {
          get: function () {
            return this.count;
          },
          set: function (_v0) {
            this.count = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), _v1.prototype.toObject = function () {
          return Object.keys(this._payload).length ? _v2({}, this._payload) : null;
        }, _v1;
      }(_v44),
      _v47 = function (_v0) {
        function _v1() {
          return null !== _v0 && _v0.apply(this, arguments) || this;
        }
        return _v1(_v1, _v0), Object.defineProperty(_v1.prototype, "notification", {
          get: function () {
            return this._payload.notification;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "data", {
          get: function () {
            return this._payload.data;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "title", {
          get: function () {
            return this._title;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.notification.title = _v0, this._title = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "body", {
          get: function () {
            return this._body;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.notification.body = _v0, this._body = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "sound", {
          get: function () {
            return this._sound;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.notification.sound = _v0, this._sound = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "icon", {
          get: function () {
            return this._icon;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.notification.icon = _v0, this._icon = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "tag", {
          get: function () {
            return this._tag;
          },
          set: function (_v0) {
            _v0 && _v0.length && (this._payload.notification.tag = _v0, this._tag = _v0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v1.prototype, "silent", {
          set: function (_v0) {
            this._isSilent = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), _v1.prototype._setDefaultPayloadStructure = function () {
          this._payload.notification = {}, this._payload.data = {};
        }, _v1.prototype.toObject = function () {
          var _v0 = _v2({}, this._payload.data),
            _v1 = null,
            _v2 = {};
          if (Object.keys(this._payload).length > 2) {
            var _v3 = this._payload;
            _v3.notification, _v3.data;
            var _v4 = _v3(_v3, ["notification", "data"]);
            _v0 = _v2(_v2({}, _v0), _v4);
          }
          return this._isSilent ? _v0.notification = this._payload.notification : _v1 = this._payload.notification, Object.keys(_v0).length && (_v2.data = _v0), _v1 && Object.keys(_v1).length && (_v2.notification = _v1), Object.keys(_v2).length ? _v2 : null;
        }, _v1;
      }(_v44),
      _v48 = function () {
        function _v0(_v0, _v1) {
          this._payload = {
            apns: {},
            mpns: {},
            fcm: {}
          }, this._title = _v0, this._body = _v1, this.apns = new _v45(this._payload.apns, _v0, _v1), this.mpns = new _v46(this._payload.mpns, _v0, _v1), this.fcm = new _v47(this._payload.fcm, _v0, _v1);
        }
        return Object.defineProperty(_v0.prototype, "debugging", {
          set: function (_v0) {
            this._debugging = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "title", {
          get: function () {
            return this._title;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "body", {
          get: function () {
            return this._body;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "subtitle", {
          get: function () {
            return this._subtitle;
          },
          set: function (_v0) {
            this._subtitle = _v0, this.apns.subtitle = _v0, this.mpns.subtitle = _v0, this.fcm.subtitle = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "badge", {
          get: function () {
            return this._badge;
          },
          set: function (_v0) {
            this._badge = _v0, this.apns.badge = _v0, this.mpns.badge = _v0, this.fcm.badge = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "sound", {
          get: function () {
            return this._sound;
          },
          set: function (_v0) {
            this._sound = _v0, this.apns.sound = _v0, this.mpns.sound = _v0, this.fcm.sound = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), _v0.prototype.buildPayload = function (_v0) {
          var _v1 = {};
          if (_v0.includes("apns") || _v0.includes("apns2")) {
            this.apns._apnsPushType = _v0.includes("apns") ? "apns" : "apns2";
            var _v2 = this.apns.toObject();
            _v2 && Object.keys(_v2).length && (_v1.pn_apns = _v2);
          }
          if (_v0.includes("mpns")) {
            var _v3 = this.mpns.toObject();
            _v3 && Object.keys(_v3).length && (_v1.pn_mpns = _v3);
          }
          if (_v0.includes("fcm")) {
            var _v4 = this.fcm.toObject();
            _v4 && Object.keys(_v4).length && (_v1.pn_gcm = _v4);
          }
          return Object.keys(_v1).length && this._debugging && (_v1.pn_debug = !0), _v1;
        }, _v0;
      }(),
      _v49 = function () {
        function _v0() {
          this._listeners = [];
        }
        return _v0.prototype.addListener = function (_v0) {
          this._listeners.includes(_v0) || this._listeners.push(_v0);
        }, _v0.prototype.removeListener = function (_v0) {
          var _v1 = [];
          this._listeners.forEach(function (_v0) {
            _v0 !== _v0 && _v1.push(_v0);
          }), this._listeners = _v1;
        }, _v0.prototype.removeAllListeners = function () {
          this._listeners = [];
        }, _v0.prototype.announcePresence = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.presence && _v0.presence(_v0);
          });
        }, _v0.prototype.announceStatus = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.status && _v0.status(_v0);
          });
        }, _v0.prototype.announceMessage = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.message && _v0.message(_v0);
          });
        }, _v0.prototype.announceSignal = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.signal && _v0.signal(_v0);
          });
        }, _v0.prototype.announceMessageAction = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.messageAction && _v0.messageAction(_v0);
          });
        }, _v0.prototype.announceFile = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.file && _v0.file(_v0);
          });
        }, _v0.prototype.announceObjects = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.objects && _v0.objects(_v0);
          });
        }, _v0.prototype.announceUser = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.user && _v0.user(_v0);
          });
        }, _v0.prototype.announceSpace = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.space && _v0.space(_v0);
          });
        }, _v0.prototype.announceMembership = function (_v0) {
          this._listeners.forEach(function (_v0) {
            _v0.membership && _v0.membership(_v0);
          });
        }, _v0.prototype.announceNetworkUp = function () {
          var _v0 = {};
          _v0.category = _v40.PNNetworkUpCategory, this.announceStatus(_v0);
        }, _v0.prototype.announceNetworkDown = function () {
          var _v0 = {};
          _v0.category = _v40.PNNetworkDownCategory, this.announceStatus(_v0);
        }, _v0;
      }(),
      _v50 = function () {
        function _v0(_v0, _v1) {
          this._config = _v0, this._cbor = _v1;
        }
        return _v0.prototype.setToken = function (_v0) {
          _v0 && _v0.length > 0 ? this._token = _v0 : this._token = void 0;
        }, _v0.prototype.getToken = function () {
          return this._token;
        }, _v0.prototype.extractPermissions = function (_v0) {
          var _v1 = {
            read: !1,
            write: !1,
            manage: !1,
            delete: !1,
            get: !1,
            update: !1,
            join: !1
          };
          return 128 == (128 & _v0) && (_v1.join = !0), 64 == (64 & _v0) && (_v1.update = !0), 32 == (32 & _v0) && (_v1.get = !0), 8 == (8 & _v0) && (_v1.delete = !0), 4 == (4 & _v0) && (_v1.manage = !0), 2 == (2 & _v0) && (_v1.write = !0), 1 == (1 & _v0) && (_v1.read = !0), _v1;
        }, _v0.prototype.parseToken = function (_v0) {
          var _v1 = this,
            _v2 = this._cbor.decodeToken(_v0);
          if (void 0 !== _v2) {
            var _v3 = _v2.res.uuid ? Object.keys(_v2.res.uuid) : [],
              _v4 = Object.keys(_v2.res.chan),
              _v5 = Object.keys(_v2.res.grp),
              _v6 = _v2.pat.uuid ? Object.keys(_v2.pat.uuid) : [],
              _v7 = Object.keys(_v2.pat.chan),
              _v8 = Object.keys(_v2.pat.grp),
              _v9 = {
                version: _v2.v,
                timestamp: _v2.t,
                ttl: _v2.ttl,
                authorized_uuid: _v2.uuid
              },
              _v10 = _v3.length > 0,
              _v11 = _v4.length > 0,
              _v12 = _v5.length > 0;
            (_v10 || _v11 || _v12) && (_v9.resources = {}, _v10 && (_v9.resources.uuids = {}, _v3.forEach(function (_v0) {
              _v9.resources.uuids[_v0] = _v1.extractPermissions(_v2.res.uuid[_v0]);
            })), _v11 && (_v9.resources.channels = {}, _v4.forEach(function (_v0) {
              _v9.resources.channels[_v0] = _v1.extractPermissions(_v2.res.chan[_v0]);
            })), _v12 && (_v9.resources.groups = {}, _v5.forEach(function (_v0) {
              _v9.resources.groups[_v0] = _v1.extractPermissions(_v2.res.grp[_v0]);
            })));
            var _v13 = _v6.length > 0,
              _v14 = _v7.length > 0,
              _v15 = _v8.length > 0;
            return (_v13 || _v14 || _v15) && (_v9.patterns = {}, _v13 && (_v9.patterns.uuids = {}, _v6.forEach(function (_v0) {
              _v9.patterns.uuids[_v0] = _v1.extractPermissions(_v2.pat.uuid[_v0]);
            })), _v14 && (_v9.patterns.channels = {}, _v7.forEach(function (_v0) {
              _v9.patterns.channels[_v0] = _v1.extractPermissions(_v2.pat.chan[_v0]);
            })), _v15 && (_v9.patterns.groups = {}, _v8.forEach(function (_v0) {
              _v9.patterns.groups[_v0] = _v1.extractPermissions(_v2.pat.grp[_v0]);
            }))), Object.keys(_v2.meta).length > 0 && (_v9.meta = _v2.meta), _v9.signature = _v2.sig, _v9;
          }
        }, _v0;
      }();
    function _v51(_v0) {
      return encodeURIComponent(_v0).replace(/[!~*'()]/g, function (_v0) {
        return "%".concat(_v0.charCodeAt(0).toString(16).toUpperCase());
      });
    }
    var _v52 = {
        signPamFromParams: function (_v0) {
          var _v1;
          return (_v1 = [], Object.keys(_v0).forEach(function (_v0) {
            return _v1.push(_v0);
          }), _v1).sort().map(function (_v0) {
            return "".concat(_v0, "=").concat(_v51(_v0[_v0]));
          }).join("&");
        },
        endsWith: function (_v0, _v1) {
          return -1 !== _v0.indexOf(_v1, this.length - _v1.length);
        },
        createPromise: function () {
          var _v0, _v1;
          return {
            promise: new Promise(function (_v0, _v1) {
              _v0 = _v0, _v1 = _v1;
            }),
            reject: _v1,
            fulfill: _v0
          };
        },
        encodeString: _v51,
        stringToArrayBuffer: function (_v0) {
          for (var _v1 = new ArrayBuffer(2 * _v0.length), _v2 = new Uint16Array(_v1), _v3 = 0, _v4 = _v0.length; _v3 < _v4; _v3++) _v2[_v3] = _v0.charCodeAt(_v3);
          return _v1;
        },
        removeSingleOccurance: function (_v0, _v1) {
          var _v2 = Object.fromEntries(_v1.map(function (_v0) {
            return [_v0, !1];
          }));
          return _v0.filter(function (_v0) {
            return !(_v1.includes(_v0) && !_v2[_v0]) || (_v2[_v0] = !0, !1);
          });
        },
        findUniqueCommonElements: function (_v0, _v1) {
          return __spreadArray([], __read(_v0), !1).filter(function (_v0) {
            return _v1.includes(_v0) && _v0.indexOf(_v0) === _v0.lastIndexOf(_v0) && _v1.indexOf(_v0) === _v1.lastIndexOf(_v0);
          });
        }
      },
      _v53 = function (_v0) {
        function _v1(_v0, _v1) {
          var _v2 = this.constructor,
            _v3 = _v0.call(this, _v0) || this;
          return _v3.name = _v3.constructor.name, _v3.status = _v1, _v3.message = _v0, Object.setPrototypeOf(_v3, _v2.prototype), _v3;
        }
        return _v1(_v1, _v0), _v1;
      }(Error);
    function _v54(_v0) {
      var _v1;
      return (_v1 = {
        message: _v0
      }).type = "validationError", _v1.error = !0, _v1;
    }
    function _v55(_v0) {
      if (_v0.sdkName) return _v0.sdkName;
      var _v1 = "PubNub-JS-".concat(_v0.sdkFamily);
      _v0.partnerId && (_v1 += "-".concat(_v0.partnerId)), _v1 += "/".concat(_v0.getVersion());
      var _v2 = _v0._getPnsdkSuffix(" ");
      return _v2.length > 0 && (_v1 += _v2), _v1;
    }
    function _v56(_v0, _v1, _v2) {
      return _v1.usePost && _v1.usePost(_v0, _v2) ? "POST" : _v1.usePatch && _v1.usePatch(_v0, _v2) ? "PATCH" : _v1.useDelete && _v1.useDelete(_v0, _v2) ? "DELETE" : _v1.useGetFile && _v1.useGetFile(_v0, _v2) ? "GETFILE" : "GET";
    }
    function _v57(_v0, _v1, _v2, _v3, _v4) {
      var _v5,
        _v6 = _v0.config,
        _v7 = _v0.crypto,
        _v8 = _v56(_v0, _v4, _v3);
      _v2.timestamp = Math.floor(new Date().getTime() / 0), "PNPublishOperation" === _v4.getOperation() && _v4.usePost && _v4.usePost(_v0, _v3) && (_v8 = "GET"), "GETFILE" === _v8 && (_v8 = "GET");
      var _v9 = "".concat(_v8, "\n").concat(_v6.publishKey, "\n").concat(_v1, "\n").concat(_v52.signPamFromParams(_v2), "\n");
      "POST" === _v8 ? _v9 += "string" == typeof (_v5 = _v4.postPayload(_v0, _v3)) ? _v5 : JSON.stringify(_v5) : "PATCH" === _v8 && (_v9 += "string" == typeof (_v5 = _v4.patchPayload(_v0, _v3)) ? _v5 : JSON.stringify(_v5));
      var _v10 = "v2.".concat(_v7.HMACSHA256(_v9));
      _v2.signature = (_v10 = (_v10 = _v10.replace(/\+/g, "-")).replace(/\//g, "_")).replace(/=+$/, "");
    }
    function _v58(_v0, _v1) {
      for (var _v2 = [], _v3 = 2; _v3 < arguments.length; _v3++) _v2[_v3 - 2] = arguments[_v3];
      var _v4 = _v0.networking,
        _v5 = _v0.config,
        _v6 = _v0.telemetryManager,
        _v7 = _v0.tokenManager,
        _v8 = _v14(),
        _v9 = null,
        _v10 = null,
        _v11 = {};
      _v1.getOperation() === _v42.PNTimeOperation || _v1.getOperation() === _v42.PNChannelGroupsOperation ? _v9 = _v2[0] : (_v11 = _v2[0], _v9 = _v2[1]), "u" < typeof Promise || _v9 || (_v10 = _v52.createPromise());
      var _v12 = _v1.validateParams(_v0, _v11);
      if (_v12) return _v9 ? _v9(_v54(_v12)) : _v10 ? (_v10.reject(new _v53("Validation failed, check status for details", _v54(_v12))), _v10.promise) : void 0;
      var _v13,
        _v14,
        _v15 = _v1.prepareParams(_v0, _v11),
        _v16 = (_v13 = _v11, _v1.usePost && _v1.usePost(_v0, _v13) ? _v1.postURL(_v0, _v13) : _v1.usePatch && _v1.usePatch(_v0, _v13) ? _v1.patchURL(_v0, _v13) : _v1.useGetFile && _v1.useGetFile(_v0, _v13) ? _v1.getFileURL(_v0, _v13) : _v1.getURL(_v0, _v13)),
        _v17 = {
          url: _v16,
          operation: _v1.getOperation(),
          timeout: _v1.getRequestTimeout(_v0),
          headers: _v1.getRequestHeaders ? _v1.getRequestHeaders() : {},
          ignoreBody: "function" == typeof _v1.ignoreBody && _v1.ignoreBody(_v0),
          forceBuffered: "function" == typeof _v1.forceBuffered ? _v1.forceBuffered(_v0, _v11) : null,
          abortSignal: "function" == typeof _v1.getAbortSignal ? _v1.getAbortSignal(_v0, _v11) : null
        };
      _v15.uuid = _v5.UUID, _v15.pnsdk = _v55(_v5);
      var _v18 = _v6.operationsLatencyForRequest();
      if (Object.keys(_v18).length && (_v15 = _v2(_v2({}, _v15), _v18)), _v5.useInstanceId && (_v15.instanceid = _v5.instanceId), _v5.useRequestId && (_v15.requestid = _v8), _v1.isAuthSupported()) {
        var _v19 = _v7.getToken() || _v5.getAuthKey();
        _v19 && (_v15.auth = _v19);
      }
      _v5.secretKey && _v57(_v0, _v16, _v15, _v11, _v1);
      var _v20 = function (_v0, _v1) {
        if (_v0.error) return _v1.handleError && _v1.handleError(_v0, _v11, _v0), void (_v9 ? _v9(_v0) : _v10 && _v10.reject(new _v53("PubNub call failed, check status for details", _v0)));
        _v6.stopLatencyMeasure(_v1.getOperation(), _v8);
        var _v2 = _v1.handleResponse(_v0, _v1, _v11);
        "function" != typeof (null == _v2 ? void 0 : _v2.then) && (_v2 = Promise.resolve(_v2)), _v2.then(function (_v0) {
          _v9 ? _v9(_v0, _v0) : _v10 && _v10.fulfill(_v0);
        }).catch(function (_v0) {
          if (_v9) {
            var _v1 = _v0;
            _v1.getOperation() === _v42.PNSubscribeOperation && (_v1 = {
              statusCode: 400,
              error: !0,
              operation: _v1.getOperation(),
              errorData: _v0,
              category: _v40.PNUnknownCategory
            }), _v9(_v1, null);
          } else _v10 && _v10.reject(new _v53("PubNub call failed, check status for details", _v0));
        });
      };
      if (_v6.startLatencyMeasure(_v1.getOperation(), _v8), "POST" === _v56(_v0, _v1, _v11)) {
        var _v21 = _v1.postPayload(_v0, _v11);
        _v14 = _v4.POST(_v15, _v21, _v17, _v20);
      } else "PATCH" === _v56(_v0, _v1, _v11) ? (_v21 = _v1.patchPayload(_v0, _v11), _v14 = _v4.PATCH(_v15, _v21, _v17, _v20)) : _v14 = "DELETE" === _v56(_v0, _v1, _v11) ? _v4.DELETE(_v15, _v17, _v20) : "GETFILE" === _v56(_v0, _v1, _v11) ? _v4.GETFILE(_v15, _v17, _v20) : _v4.GET(_v15, _v17, _v20);
      return _v1.getOperation() === _v42.PNSubscribeOperation ? _v14 : _v10 ? _v10.promise : void 0;
    }
    var _v59 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNAddChannelsToGroupOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.channels,
            _v3 = _v1.channelGroup,
            _v4 = _v0.config;
          return _v3 ? _v2 && 0 !== _v2.length ? _v4.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing Channels" : "Missing Channel Group";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.channelGroup,
            _v3 = _v0.config;
          return "/v1/channel-registration/sub-key/".concat(_v3.subscribeKey, "/channel-group/").concat(_v52.encodeString(_v2));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channels;
          return {
            add: (void 0 === _v2 ? [] : _v2).join(",")
          };
        },
        handleResponse: function () {
          return {};
        }
      }),
      _v60 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNRemoveChannelsFromGroupOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.channels,
            _v3 = _v1.channelGroup,
            _v4 = _v0.config;
          return _v3 ? _v2 && 0 !== _v2.length ? _v4.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing Channels" : "Missing Channel Group";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.channelGroup,
            _v3 = _v0.config;
          return "/v1/channel-registration/sub-key/".concat(_v3.subscribeKey, "/channel-group/").concat(_v52.encodeString(_v2));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channels;
          return {
            remove: (void 0 === _v2 ? [] : _v2).join(",")
          };
        },
        handleResponse: function () {
          return {};
        }
      }),
      _v61 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNRemoveGroupOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.channelGroup,
            _v3 = _v0.config;
          return _v2 ? _v3.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing Channel Group";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.channelGroup,
            _v3 = _v0.config;
          return "/v1/channel-registration/sub-key/".concat(_v3.subscribeKey, "/channel-group/").concat(_v52.encodeString(_v2), "/remove");
        },
        isAuthSupported: function () {
          return !0;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function () {
          return {};
        }
      }),
      _v62 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNChannelGroupsOperation;
        },
        validateParams: function (_v0) {
          if (!_v0.config.subscribeKey) return "Missing Subscribe Key";
        },
        getURL: function (_v0) {
          var _v1 = _v0.config;
          return "/v1/channel-registration/sub-key/".concat(_v1.subscribeKey, "/channel-group");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1) {
          return {
            groups: _v1.payload.groups
          };
        }
      }),
      _v63 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNChannelsForGroupOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.channelGroup,
            _v3 = _v0.config;
          return _v2 ? _v3.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing Channel Group";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.channelGroup,
            _v3 = _v0.config;
          return "/v1/channel-registration/sub-key/".concat(_v3.subscribeKey, "/channel-group/").concat(_v52.encodeString(_v2));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1) {
          return {
            channels: _v1.payload.channels
          };
        }
      }),
      _v64 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNPushNotificationEnabledChannelsOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.device,
            _v3 = _v1.pushGateway,
            _v4 = _v1.channels,
            _v5 = _v1.topic,
            _v6 = _v0.config;
          return _v2 ? _v3 ? "apns2" !== _v3 || _v5 ? _v4 && 0 !== _v4.length ? _v6.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing Channels" : "Missing APNS2 topic" : "Missing GW Type (pushGateway: gcm, apns or apns2)" : "Missing Device ID (device)";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.device,
            _v3 = _v1.pushGateway,
            _v4 = _v0.config;
          return "apns2" === _v3 ? "/v2/push/sub-key/".concat(_v4.subscribeKey, "/devices-apns2/").concat(_v2) : "/v1/push/sub-key/".concat(_v4.subscribeKey, "/devices/").concat(_v2);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.pushGateway,
            _v3 = _v1.channels,
            _v4 = _v1.environment,
            _v5 = _v1.topic,
            _v6 = {
              type: _v2,
              add: (void 0 === _v3 ? [] : _v3).join(",")
            };
          return "apns2" === _v2 && delete (_v6 = _v2(_v2({}, _v6), {
            environment: void 0 === _v4 ? "development" : _v4,
            topic: _v5
          })).type, _v6;
        },
        handleResponse: function () {
          return {};
        }
      }),
      _v65 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNPushNotificationEnabledChannelsOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.device,
            _v3 = _v1.pushGateway,
            _v4 = _v1.channels,
            _v5 = _v1.topic,
            _v6 = _v0.config;
          return _v2 ? _v3 ? "apns2" !== _v3 || _v5 ? _v4 && 0 !== _v4.length ? _v6.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing Channels" : "Missing APNS2 topic" : "Missing GW Type (pushGateway: gcm, apns or apns2)" : "Missing Device ID (device)";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.device,
            _v3 = _v1.pushGateway,
            _v4 = _v0.config;
          return "apns2" === _v3 ? "/v2/push/sub-key/".concat(_v4.subscribeKey, "/devices-apns2/").concat(_v2) : "/v1/push/sub-key/".concat(_v4.subscribeKey, "/devices/").concat(_v2);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.pushGateway,
            _v3 = _v1.channels,
            _v4 = _v1.environment,
            _v5 = _v1.topic,
            _v6 = {
              type: _v2,
              remove: (void 0 === _v3 ? [] : _v3).join(",")
            };
          return "apns2" === _v2 && delete (_v6 = _v2(_v2({}, _v6), {
            environment: void 0 === _v4 ? "development" : _v4,
            topic: _v5
          })).type, _v6;
        },
        handleResponse: function () {
          return {};
        }
      }),
      _v66 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNPushNotificationEnabledChannelsOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.device,
            _v3 = _v1.pushGateway,
            _v4 = _v1.topic,
            _v5 = _v0.config;
          return _v2 ? _v3 ? "apns2" !== _v3 || _v4 ? _v5.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing APNS2 topic" : "Missing GW Type (pushGateway: gcm, apns or apns2)" : "Missing Device ID (device)";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.device,
            _v3 = _v1.pushGateway,
            _v4 = _v0.config;
          return "apns2" === _v3 ? "/v2/push/sub-key/".concat(_v4.subscribeKey, "/devices-apns2/").concat(_v2) : "/v1/push/sub-key/".concat(_v4.subscribeKey, "/devices/").concat(_v2);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.pushGateway,
            _v3 = _v1.environment,
            _v4 = _v1.topic,
            _v5 = _v1.start,
            _v6 = _v1.count,
            _v7 = {
              type: _v2
            };
          return "apns2" === _v2 && delete (_v7 = _v2(_v2({}, _v7), {
            environment: void 0 === _v3 ? "development" : _v3,
            topic: _v4
          })).type, _v5 && (_v7.start = _v5), _v6 && _v6 > 0 && (_v7.count = _v6), _v7;
        },
        handleResponse: function (_v0, _v1) {
          return {
            channels: _v1
          };
        }
      }),
      _v67 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNRemoveAllPushNotificationsOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.device,
            _v3 = _v1.pushGateway,
            _v4 = _v1.topic,
            _v5 = _v0.config;
          return _v2 ? _v3 ? "apns2" !== _v3 || _v4 ? _v5.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing APNS2 topic" : "Missing GW Type (pushGateway: gcm, apns or apns2)" : "Missing Device ID (device)";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.device,
            _v3 = _v1.pushGateway,
            _v4 = _v0.config;
          return "apns2" === _v3 ? "/v2/push/sub-key/".concat(_v4.subscribeKey, "/devices-apns2/").concat(_v2, "/remove") : "/v1/push/sub-key/".concat(_v4.subscribeKey, "/devices/").concat(_v2, "/remove");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.pushGateway,
            _v3 = _v1.environment,
            _v4 = _v1.topic,
            _v5 = {
              type: _v2
            };
          return "apns2" === _v2 && delete (_v5 = _v2(_v2({}, _v5), {
            environment: void 0 === _v3 ? "development" : _v3,
            topic: _v4
          })).type, _v5;
        },
        handleResponse: function () {
          return {};
        }
      }),
      _v68 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNUnsubscribeOperation;
        },
        validateParams: function (_v0) {
          if (!_v0.config.subscribeKey) return "Missing Subscribe Key";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v4.length > 0 ? _v4.join(",") : ",";
          return "/v2/presence/sub-key/".concat(_v2.subscribeKey, "/channel/").concat(_v52.encodeString(_v5), "/leave");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channelGroups,
            _v3 = void 0 === _v2 ? [] : _v2,
            _v4 = {};
          return _v3.length > 0 && (_v4["channel-group"] = _v3.join(",")), _v4;
        },
        handleResponse: function () {
          return {};
        }
      }),
      _v69 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNWhereNowOperation;
        },
        validateParams: function (_v0) {
          if (!_v0.config.subscribeKey) return "Missing Subscribe Key";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.uuid,
            _v4 = void 0 === _v3 ? _v2.UUID : _v3;
          return "/v2/presence/sub-key/".concat(_v2.subscribeKey, "/uuid/").concat(_v52.encodeString(_v4));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1) {
          return _v1.payload ? {
            channels: _v1.payload.channels
          } : {
            channels: []
          };
        }
      }),
      _v70 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNHeartbeatOperation;
        },
        validateParams: function (_v0) {
          if (!_v0.config.subscribeKey) return "Missing Subscribe Key";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v4.length > 0 ? _v4.join(",") : ",";
          return "/v2/presence/sub-key/".concat(_v2.subscribeKey, "/channel/").concat(_v52.encodeString(_v5), "/heartbeat");
        },
        isAuthSupported: function () {
          return !0;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channelGroups,
            _v3 = void 0 === _v2 ? [] : _v2,
            _v4 = _v1.state,
            _v5 = _v0.config,
            _v6 = {};
          return _v3.length > 0 && (_v6["channel-group"] = _v3.join(",")), _v4 && (_v6.state = JSON.stringify(_v4)), _v6.heartbeat = _v5.getPresenceTimeout(), _v6;
        },
        handleResponse: function () {
          return {};
        }
      }),
      _v71 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNGetStateOperation;
        },
        validateParams: function (_v0) {
          if (!_v0.config.subscribeKey) return "Missing Subscribe Key";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.uuid,
            _v4 = void 0 === _v3 ? _v2.UUID : _v3,
            _v5 = _v1.channels,
            _v6 = void 0 === _v5 ? [] : _v5,
            _v7 = _v6.length > 0 ? _v6.join(",") : ",";
          return "/v2/presence/sub-key/".concat(_v2.subscribeKey, "/channel/").concat(_v52.encodeString(_v7), "/uuid/").concat(_v4);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channelGroups,
            _v3 = void 0 === _v2 ? [] : _v2,
            _v4 = {};
          return _v3.length > 0 && (_v4["channel-group"] = _v3.join(",")), _v4;
        },
        handleResponse: function (_v0, _v1, _v2) {
          var _v3 = _v2.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v2.channelGroups,
            _v6 = {};
          return 1 === _v4.length && 0 === (void 0 === _v5 ? [] : _v5).length ? _v6[_v4[0]] = _v1.payload : _v6 = _v1.payload, {
            channels: _v6
          };
        }
      }),
      _v72 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNSetStateOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.state,
            _v4 = _v1.channels,
            _v5 = _v1.channelGroups;
          return _v3 ? _v2.subscribeKey ? 0 === (void 0 === _v4 ? [] : _v4).length && 0 === (void 0 === _v5 ? [] : _v5).length ? "Please provide a list of channels and/or channel-groups" : void 0 : "Missing Subscribe Key" : "Missing State";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v4.length > 0 ? _v4.join(",") : ",";
          return "/v2/presence/sub-key/".concat(_v2.subscribeKey, "/channel/").concat(_v52.encodeString(_v5), "/uuid/").concat(_v52.encodeString(_v2.UUID), "/data");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.state,
            _v3 = _v1.channelGroups,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = {};
          return _v5.state = JSON.stringify(_v2), _v4.length > 0 && (_v5["channel-group"] = _v4.join(",")), _v5;
        },
        handleResponse: function (_v0, _v1) {
          return {
            state: _v1.payload
          };
        }
      }),
      _v73 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNHereNowOperation;
        },
        validateParams: function (_v0) {
          if (!_v0.config.subscribeKey) return "Missing Subscribe Key";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v1.channelGroups,
            _v6 = "/v2/presence/sub-key/".concat(_v2.subscribeKey);
          if (_v4.length > 0 || (void 0 === _v5 ? [] : _v5).length > 0) {
            var _v7 = _v4.length > 0 ? _v4.join(",") : ",";
            _v6 += "/channel/".concat(_v52.encodeString(_v7));
          }
          return _v6;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channelGroups,
            _v3 = void 0 === _v2 ? [] : _v2,
            _v4 = _v1.includeUUIDs,
            _v5 = _v1.includeState,
            _v6 = _v1.queryParameters,
            _v7 = {};
          return void 0 === _v4 || _v4 || (_v7.disable_uuids = 1), void 0 !== _v5 && _v5 && (_v7.state = 1), _v3.length > 0 && (_v7["channel-group"] = _v3.join(",")), _v7 = _v2(_v2({}, _v7), void 0 === _v6 ? {} : _v6);
        },
        handleResponse: function (_v0, _v1, _v2) {
          var _v3,
            _v4,
            _v5,
            _v6 = _v2.channels,
            _v7 = void 0 === _v6 ? [] : _v6,
            _v8 = _v2.channelGroups,
            _v9 = void 0 === _v8 ? [] : _v8,
            _v10 = _v2.includeUUIDs,
            _v11 = void 0 === _v10 || _v10,
            _v12 = _v2.includeState,
            _v13 = void 0 !== _v12 && _v12;
          return _v7.length > 1 || _v9.length > 0 || 0 === _v9.length && 0 === _v7.length ? ((_v3 = {}).totalChannels = _v1.payload.total_channels, _v3.totalOccupancy = _v1.payload.total_occupancy, _v3.channels = {}, Object.keys(_v1.payload.channels).forEach(function (_v0) {
            var _v1 = _v1.payload.channels[_v0],
              _v2 = [];
            return _v3.channels[_v0] = {
              occupants: _v2,
              name: _v0,
              occupancy: _v1.occupancy
            }, _v11 && _v1.uuids.forEach(function (_v0) {
              _v13 ? _v2.push({
                state: _v0.state,
                uuid: _v0.uuid
              }) : _v2.push({
                state: null,
                uuid: _v0
              });
            }), _v3;
          }), _v3) : (_v5 = [], (_v4 = {}).totalChannels = 1, _v4.totalOccupancy = _v1.occupancy, _v4.channels = {}, _v4.channels[_v7[0]] = {
            occupants: _v5,
            name: _v7[0],
            occupancy: _v1.occupancy
          }, _v11 && _v1.uuids && _v1.uuids.forEach(function (_v0) {
            _v13 ? _v5.push({
              state: _v0.state,
              uuid: _v0.uuid
            }) : _v5.push({
              state: null,
              uuid: _v0
            });
          }), _v4);
        },
        handleError: function (_v0, _v1, _v2) {
          402 !== _v2.statusCode || this.getURL(_v0, _v1).includes("channel") || (_v2.errorData.message = "You have tried to perform a Global Here Now operation, your keyset configuration does not support that. Please provide a channel, or enable the Global Here Now feature from the Portal.");
        }
      }),
      _v74 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNAddMessageActionOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.action,
            _v4 = _v1.channel;
          return _v1.messageTimetoken ? _v2.subscribeKey ? _v4 ? _v3 ? _v3.value ? _v3.type ? _v3.type.length > 15 ? "Action.type value exceed maximum length of 15" : void 0 : "Missing Action.type" : "Missing Action.value" : "Missing Action" : "Missing message channel" : "Missing Subscribe Key" : "Missing message timetoken";
        },
        usePost: function () {
          return !0;
        },
        postURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channel,
            _v4 = _v1.messageTimetoken;
          return "/v1/message-actions/".concat(_v2.subscribeKey, "/channel/").concat(_v52.encodeString(_v3), "/message/").concat(_v4);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        getRequestHeaders: function () {
          return {
            "Content-Type": "application/json"
          };
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        postPayload: function (_v0, _v1) {
          return _v1.action;
        },
        handleResponse: function (_v0, _v1) {
          return {
            data: _v1.data
          };
        }
      }),
      _v75 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNRemoveMessageActionOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channel,
            _v4 = _v1.actionTimetoken;
          return _v1.messageTimetoken ? _v4 ? _v2.subscribeKey ? _v3 ? void 0 : "Missing message channel" : "Missing Subscribe Key" : "Missing action timetoken" : "Missing message timetoken";
        },
        useDelete: function () {
          return !0;
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channel,
            _v4 = _v1.actionTimetoken,
            _v5 = _v1.messageTimetoken;
          return "/v1/message-actions/".concat(_v2.subscribeKey, "/channel/").concat(_v52.encodeString(_v3), "/message/").concat(_v5, "/action/").concat(_v4);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1) {
          return {
            data: _v1.data
          };
        }
      }),
      _v76 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNGetMessageActionsOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channel;
          return _v2.subscribeKey ? _v3 ? void 0 : "Missing message channel" : "Missing Subscribe Key";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channel;
          return "/v1/message-actions/".concat(_v2.subscribeKey, "/channel/").concat(_v52.encodeString(_v3));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.limit,
            _v3 = _v1.start,
            _v4 = _v1.end,
            _v5 = {};
          return _v2 && (_v5.limit = _v2), _v3 && (_v5.start = _v3), _v4 && (_v5.end = _v4), _v5;
        },
        handleResponse: function (_v0, _v1) {
          var _v2 = {
            data: _v1.data,
            start: null,
            end: null
          };
          return _v2.data.length && (_v2.end = _v2.data[_v2.data.length - 1].actionTimetoken, _v2.start = _v2.data[0].actionTimetoken), _v2;
        }
      }),
      _v77 = {
        getOperation: function () {
          return _v42.PNListFilesOperation;
        },
        validateParams: function (_v0, _v1) {
          if (!(null == _v1 ? void 0 : _v1.channel)) return "channel can't be empty";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v1/files/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel), "/files");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = {};
          return _v1.limit && (_v2.limit = _v1.limit), _v1.next && (_v2.next = _v1.next), _v2;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data,
            next: _v1.next,
            count: _v1.count
          };
        }
      },
      _v78 = {
        getOperation: function () {
          return _v42.PNGenerateUploadUrlOperation;
        },
        validateParams: function (_v0, _v1) {
          return (null == _v1 ? void 0 : _v1.channel) ? (null == _v1 ? void 0 : _v1.name) ? void 0 : "name can't be empty" : "channel can't be empty";
        },
        usePost: function () {
          return !0;
        },
        postURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v1/files/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel), "/generate-upload-url");
        },
        postPayload: function (_v0, _v1) {
          return {
            name: _v1.name
          };
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data,
            file_upload_request: _v1.file_upload_request
          };
        }
      },
      _v79 = {
        getOperation: function () {
          return _v42.PNPublishFileOperation;
        },
        validateParams: function (_v0, _v1) {
          return (null == _v1 ? void 0 : _v1.channel) ? (null == _v1 ? void 0 : _v1.fileId) ? (null == _v1 ? void 0 : _v1.fileName) ? void 0 : "file name can't be empty" : "file id can't be empty" : "channel can't be empty";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v2.publishKey,
            _v4 = _v2.subscribeKey,
            _v5 = function (_v0, _v1) {
              var _v2 = JSON.stringify(_v1);
              if (_v0.cryptoModule) {
                var _v3 = _v0.cryptoModule.encrypt(_v2);
                _v2 = JSON.stringify(_v2 = "string" == typeof _v3 ? _v3 : _v17(_v3));
              }
              return _v2 || "";
            }(_v0, {
              message: _v1.message,
              file: {
                name: _v1.fileName,
                id: _v1.fileId
              }
            });
          return "/v1/files/publish-file/".concat(_v3, "/").concat(_v4, "/0/").concat(_v52.encodeString(_v1.channel), "/0/").concat(_v52.encodeString(_v5));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = {};
          return _v1.ttl && (_v2.ttl = _v1.ttl), void 0 !== _v1.storeInHistory && (_v2.store = _v1.storeInHistory ? "1" : "0"), _v1.meta && "object" == typeof _v1.meta && (_v2.meta = JSON.stringify(_v1.meta)), _v2;
        },
        handleResponse: function (_v0, _v1) {
          return {
            timetoken: _v1[2]
          };
        }
      },
      _v80 = function (_v0) {
        var _v1 = function (_v0) {
          var _v1 = this,
            _v2 = _v0.generateUploadUrl,
            _v3 = _v0.publishFile,
            _v4 = _v0.modules,
            _v5 = _v4.PubNubFile,
            _v6 = _v4.config,
            _v7 = _v4.cryptography,
            _v8 = _v4.cryptoModule,
            _v9 = _v4.networking;
          return function (_v0) {
            var _v1 = _v0.channel,
              _v2 = _v0.file,
              _v3 = _v0.message,
              _v4 = _v0.cipherKey,
              _v5 = _v0.meta,
              _v6 = _v0.ttl,
              _v7 = _v0.storeInHistory;
            return _v4(_v1, void 0, void 0, function () {
              var _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19, _v20, _v21, _v22, _v23, _v24, _v25, _v26, _v27, _v28;
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    if (!_v1) throw new _v53("Validation failed, check status for details", _v54("channel can't be empty"));
                    if (!_v2) throw new _v53("Validation failed, check status for details", _v54("file can't be empty"));
                    return [4, _v2({
                      channel: _v1,
                      name: (_v0 = _v5.create(_v2)).name
                    })];
                  case 1:
                    return _v3 = (_v2 = (_v1 = _v0.sent()).file_upload_request).url, _v4 = _v2.form_fields, _v6 = (_v5 = _v1.data).id, _v7 = _v5.name, _v5.supportsEncryptFile && (_v4 || _v8) ? null != _v4 ? [3, 3] : [4, _v8.encryptFile(_v0, _v5)] : [3, 6];
                  case 2:
                    return _v8 = _v0.sent(), [3, 5];
                  case 3:
                    return [4, _v7.encryptFile(_v4, _v0, _v5)];
                  case 4:
                    _v8 = _v0.sent(), _v0.label = 5;
                  case 5:
                    _v0 = _v8, _v0.label = 6;
                  case 6:
                    _v9 = _v4, _v0.mimeType && (_v9 = _v4.map(function (_v0) {
                      return "Content-Type" === _v0.key ? {
                        key: _v0.key,
                        value: _v0.mimeType
                      } : _v0;
                    })), _v0.label = 7;
                  case 7:
                    return _v0.trys.push([7, 21,, 22]), _v5.supportsFileUri && _v2.uri ? (_v12 = (_v11 = _v9).POSTFILE, _v13 = [_v3, _v9], [4, _v0.toFileUri()]) : [3, 10];
                  case 8:
                    return [4, _v12.apply(_v11, _v13.concat([_v0.sent()]))];
                  case 9:
                  case 12:
                  case 15:
                  case 18:
                    return _v10 = _v0.sent(), [3, 20];
                  case 10:
                    return _v5.supportsFile ? (_v15 = (_v14 = _v9).POSTFILE, _v16 = [_v3, _v9], [4, _v0.toFile()]) : [3, 13];
                  case 11:
                    return [4, _v15.apply(_v14, _v16.concat([_v0.sent()]))];
                  case 13:
                    return _v5.supportsBuffer ? (_v18 = (_v17 = _v9).POSTFILE, _v19 = [_v3, _v9], [4, _v0.toBuffer()]) : [3, 16];
                  case 14:
                    return [4, _v18.apply(_v17, _v19.concat([_v0.sent()]))];
                  case 16:
                    return _v5.supportsBlob ? (_v21 = (_v20 = _v9).POSTFILE, _v22 = [_v3, _v9], [4, _v0.toBlob()]) : [3, 19];
                  case 17:
                    return [4, _v21.apply(_v20, _v22.concat([_v0.sent()]))];
                  case 19:
                    throw Error("Unsupported environment");
                  case 20:
                    return [3, 22];
                  case 21:
                    throw (_v23 = _v0.sent()).response && "string" == typeof _v23.response.text ? (_v24 = _v23.response.text, new _v53((_v25 = /<Message>(.*)<\/Message>/gi.exec(_v24)) ? "Upload to bucket failed: ".concat(_v25[1]) : "Upload to bucket failed.", _v23)) : new _v53("Upload to bucket failed.", _v23);
                  case 22:
                    if (204 !== _v10.status) throw new _v53("Upload to bucket was unsuccessful", _v10);
                    _v26 = _v6.fileUploadPublishRetryLimit, _v27 = !1, _v28 = {
                      timetoken: "0"
                    }, _v0.label = 23;
                  case 23:
                    return _v0.trys.push([23, 25,, 26]), [4, _v3({
                      channel: _v1,
                      message: _v3,
                      fileId: _v6,
                      fileName: _v7,
                      meta: _v5,
                      storeInHistory: _v7,
                      ttl: _v6
                    })];
                  case 24:
                    return _v28 = _v0.sent(), _v27 = !0, [3, 26];
                  case 25:
                    return _v0.sent(), _v26 -= 1, [3, 26];
                  case 26:
                    if (!_v27 && _v26 > 0) return [3, 23];
                    _v0.label = 27;
                  case 27:
                    if (_v27) return [2, {
                      timetoken: _v28.timetoken,
                      id: _v6,
                      name: _v7
                    }];
                    throw new _v53("Publish failed. You may want to execute that operation manually using pubnub.publishFile", {
                      channel: _v1,
                      id: _v6,
                      name: _v7
                    });
                }
              });
            });
          };
        }(_v0);
        return function (_v0, _v1) {
          var _v2 = _v1(_v0);
          return "function" == typeof _v1 && _v2.then(function (_v0) {
            return _v1(null, _v0);
          }).catch(function (_v0) {
            return _v1(_v0, null);
          }), _v2;
        };
      },
      _v81 = function (_v0, _v1) {
        var _v2 = _v1.channel,
          _v3 = _v1.id,
          _v4 = _v1.name,
          _v5 = _v0.config,
          _v6 = _v0.networking,
          _v7 = _v0.tokenManager;
        if (!_v2) throw new _v53("Validation failed, check status for details", _v54("channel can't be empty"));
        if (!_v3) throw new _v53("Validation failed, check status for details", _v54("file id can't be empty"));
        if (!_v4) throw new _v53("Validation failed, check status for details", _v54("file name can't be empty"));
        var _v8 = "/v1/files/".concat(_v5.subscribeKey, "/channels/").concat(_v52.encodeString(_v2), "/files/").concat(_v3, "/").concat(_v4),
          _v9 = {};
        _v9.uuid = _v5.getUUID(), _v9.pnsdk = _v55(_v5);
        var _v10 = _v7.getToken() || _v5.getAuthKey();
        _v10 && (_v9.auth = _v10), _v5.secretKey && _v57(_v0, _v8, _v9, {}, {
          getOperation: function () {
            return "PubNubGetFileUrlOperation";
          }
        });
        var _v11 = Object.keys(_v9).map(function (_v0) {
          return "".concat(encodeURIComponent(_v0), "=").concat(encodeURIComponent(_v9[_v0]));
        }).join("&");
        return "" !== _v11 ? "".concat(_v6.getStandardOrigin()).concat(_v8, "?").concat(_v11) : "".concat(_v6.getStandardOrigin()).concat(_v8);
      },
      _v82 = {
        getOperation: function () {
          return _v42.PNDownloadFileOperation;
        },
        validateParams: function (_v0, _v1) {
          return (null == _v1 ? void 0 : _v1.channel) ? (null == _v1 ? void 0 : _v1.name) ? (null == _v1 ? void 0 : _v1.id) ? void 0 : "id can't be empty" : "name can't be empty" : "channel can't be empty";
        },
        useGetFile: function () {
          return !0;
        },
        getFileURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v1/files/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel), "/files/").concat(_v1.id, "/").concat(_v1.name);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        ignoreBody: function () {
          return !0;
        },
        forceBuffered: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1, _v2) {
          var _v3 = _v0.PubNubFile,
            _v4 = _v0.config,
            _v5 = _v0.cryptography,
            _v6 = _v0.cryptoModule;
          return _v4(void 0, void 0, void 0, function () {
            var _v0, _v1, _v2, _v3;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return _v0 = _v1.response.body, _v3.supportsEncryptFile && (_v2.cipherKey || _v6) ? null != _v2.cipherKey ? [3, 2] : [4, _v6.decryptFile(_v3.create({
                    data: _v0,
                    name: _v2.name
                  }), _v3)] : [3, 5];
                case 1:
                  return _v1 = _v0.sent().data, [3, 4];
                case 2:
                  return [4, _v5.decrypt(null != (_v2 = _v2.cipherKey) ? _v2 : _v4.cipherKey, _v0)];
                case 3:
                  _v1 = _v0.sent(), _v0.label = 4;
                case 4:
                  _v0 = _v1, _v0.label = 5;
                case 5:
                  return [2, _v3.create({
                    data: _v0,
                    name: null != (_v3 = _v1.response.name) ? _v3 : _v2.name,
                    mimeType: _v1.response.type
                  })];
              }
            });
          });
        }
      },
      _v83 = {
        getOperation: function () {
          return _v42.PNListFilesOperation;
        },
        validateParams: function (_v0, _v1) {
          return (null == _v1 ? void 0 : _v1.channel) ? (null == _v1 ? void 0 : _v1.id) ? (null == _v1 ? void 0 : _v1.name) ? void 0 : "file name can't be empty" : "file id can't be empty" : "channel can't be empty";
        },
        useDelete: function () {
          return !0;
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v1/files/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel), "/files/").concat(_v1.id, "/").concat(_v1.name);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status
          };
        }
      },
      _v84 = {
        getOperation: function () {
          return _v42.PNGetAllUUIDMetadataOperation;
        },
        validateParams: function () {},
        getURL: function (_v0) {
          var _v1 = _v0.config;
          return "/v2/objects/".concat(_v1.subscribeKey, "/uuids");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11 = {
              include: ["status", "type"]
            };
          return (null == _v1 ? void 0 : _v1.include) && (null == (_v2 = _v1.include) ? void 0 : _v2.customFields) && _v11.include.push("custom"), _v11.include = _v11.include.join(","), (null == (_v3 = null == _v1 ? void 0 : _v1.include) ? void 0 : _v3.totalCount) && (_v11.count = null == (_v4 = _v1.include) ? void 0 : _v4.totalCount), (null == (_v5 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v5.next) && (_v11.start = null == (_v6 = _v1.page) ? void 0 : _v6.next), (null == (_v7 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v7.prev) && (_v11.end = null == (_v8 = _v1.page) ? void 0 : _v8.prev), (null == _v1 ? void 0 : _v1.filter) && (_v11.filter = _v1.filter), _v11.limit = null != (_v9 = null == _v1 ? void 0 : _v1.limit) ? _v9 : 100, (null == _v1 ? void 0 : _v1.sort) && (_v11.sort = Object.entries(null != (_v10 = _v1.sort) ? _v10 : {}).map(function (_v0) {
            var _v1 = _v7(_v0, 2),
              _v2 = _v1[0],
              _v3 = _v1[1];
            return "asc" === _v3 || "desc" === _v3 ? "".concat(_v2, ":").concat(_v3) : _v2;
          })), _v11;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data,
            totalCount: _v1.totalCount,
            next: _v1.next,
            prev: _v1.prev
          };
        }
      },
      _v85 = {
        getOperation: function () {
          return _v42.PNGetUUIDMetadataOperation;
        },
        validateParams: function () {},
        getURL: function (_v0, _v1) {
          var _v2,
            _v3 = _v0.config;
          return "/v2/objects/".concat(_v3.subscribeKey, "/uuids/").concat(_v52.encodeString(null != (_v2 = null == _v1 ? void 0 : _v1.uuid) ? _v2 : _v3.getUUID()));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4 = _v0.config,
            _v5 = {};
          return _v5.uuid = null != (_v2 = null == _v1 ? void 0 : _v1.uuid) ? _v2 : _v4.getUUID(), _v5.include = ["status", "type", "custom"], (null == _v1 ? void 0 : _v1.include) && !1 === (null == (_v3 = _v1.include) ? void 0 : _v3.customFields) && _v5.include.pop(), _v5.include = _v5.include.join(","), _v5;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data
          };
        }
      },
      _v86 = {
        getOperation: function () {
          return _v42.PNSetUUIDMetadataOperation;
        },
        validateParams: function (_v0, _v1) {
          if (!(null == _v1 ? void 0 : _v1.data)) return "Data cannot be empty";
        },
        usePatch: function () {
          return !0;
        },
        patchURL: function (_v0, _v1) {
          var _v2,
            _v3 = _v0.config;
          return "/v2/objects/".concat(_v3.subscribeKey, "/uuids/").concat(_v52.encodeString(null != (_v2 = _v1.uuid) ? _v2 : _v3.getUUID()));
        },
        patchPayload: function (_v0, _v1) {
          return _v1.data;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4 = _v0.config,
            _v5 = {};
          return _v5.uuid = null != (_v2 = null == _v1 ? void 0 : _v1.uuid) ? _v2 : _v4.getUUID(), _v5.include = ["status", "type", "custom"], (null == _v1 ? void 0 : _v1.include) && !1 === (null == (_v3 = _v1.include) ? void 0 : _v3.customFields) && _v5.include.pop(), _v5.include = _v5.include.join(","), _v5;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data
          };
        }
      },
      _v87 = {
        getOperation: function () {
          return _v42.PNRemoveUUIDMetadataOperation;
        },
        validateParams: function () {},
        getURL: function (_v0, _v1) {
          var _v2,
            _v3 = _v0.config;
          return "/v2/objects/".concat(_v3.subscribeKey, "/uuids/").concat(_v52.encodeString(null != (_v2 = null == _v1 ? void 0 : _v1.uuid) ? _v2 : _v3.getUUID()));
        },
        useDelete: function () {
          return !0;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3 = _v0.config;
          return {
            uuid: null != (_v2 = null == _v1 ? void 0 : _v1.uuid) ? _v2 : _v3.getUUID()
          };
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data
          };
        }
      },
      _v88 = {
        getOperation: function () {
          return _v42.PNGetAllChannelMetadataOperation;
        },
        validateParams: function () {},
        getURL: function (_v0) {
          var _v1 = _v0.config;
          return "/v2/objects/".concat(_v1.subscribeKey, "/channels");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11 = {
              include: ["status", "type"]
            };
          return (null == _v1 ? void 0 : _v1.include) && (null == (_v2 = _v1.include) ? void 0 : _v2.customFields) && _v11.include.push("custom"), _v11.include = _v11.include.join(","), (null == (_v3 = null == _v1 ? void 0 : _v1.include) ? void 0 : _v3.totalCount) && (_v11.count = null == (_v4 = _v1.include) ? void 0 : _v4.totalCount), (null == (_v5 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v5.next) && (_v11.start = null == (_v6 = _v1.page) ? void 0 : _v6.next), (null == (_v7 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v7.prev) && (_v11.end = null == (_v8 = _v1.page) ? void 0 : _v8.prev), (null == _v1 ? void 0 : _v1.filter) && (_v11.filter = _v1.filter), _v11.limit = null != (_v9 = null == _v1 ? void 0 : _v1.limit) ? _v9 : 100, (null == _v1 ? void 0 : _v1.sort) && (_v11.sort = Object.entries(null != (_v10 = _v1.sort) ? _v10 : {}).map(function (_v0) {
            var _v1 = _v7(_v0, 2),
              _v2 = _v1[0],
              _v3 = _v1[1];
            return "asc" === _v3 || "desc" === _v3 ? "".concat(_v2, ":").concat(_v3) : _v2;
          })), _v11;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data,
            totalCount: _v1.totalCount,
            prev: _v1.prev,
            next: _v1.next
          };
        }
      },
      _v89 = {
        getOperation: function () {
          return _v42.PNGetChannelMetadataOperation;
        },
        validateParams: function (_v0, _v1) {
          if (!(null == _v1 ? void 0 : _v1.channel)) return "Channel cannot be empty";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v2/objects/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3 = {
              include: ["status", "type", "custom"]
            };
          return (null == _v1 ? void 0 : _v1.include) && !1 === (null == (_v2 = _v1.include) ? void 0 : _v2.customFields) && _v3.include.pop(), _v3.include = _v3.include.join(","), _v3;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data
          };
        }
      },
      _v90 = {
        getOperation: function () {
          return _v42.PNSetChannelMetadataOperation;
        },
        validateParams: function (_v0, _v1) {
          return (null == _v1 ? void 0 : _v1.channel) ? (null == _v1 ? void 0 : _v1.data) ? void 0 : "Data cannot be empty" : "Channel cannot be empty";
        },
        usePatch: function () {
          return !0;
        },
        patchURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v2/objects/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel));
        },
        patchPayload: function (_v0, _v1) {
          return _v1.data;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3 = {
              include: ["status", "type", "custom"]
            };
          return (null == _v1 ? void 0 : _v1.include) && !1 === (null == (_v2 = _v1.include) ? void 0 : _v2.customFields) && _v3.include.pop(), _v3.include = _v3.include.join(","), _v3;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data
          };
        }
      },
      _v91 = {
        getOperation: function () {
          return _v42.PNRemoveChannelMetadataOperation;
        },
        validateParams: function (_v0, _v1) {
          if (!(null == _v1 ? void 0 : _v1.channel)) return "Channel cannot be empty";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v2/objects/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel));
        },
        useDelete: function () {
          return !0;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data
          };
        }
      },
      _v92 = {
        getOperation: function () {
          return _v42.PNGetMembersOperation;
        },
        validateParams: function (_v0, _v1) {
          if (!(null == _v1 ? void 0 : _v1.channel)) return "channel cannot be empty";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v2/objects/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel), "/uuids");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11,
            _v12,
            _v13,
            _v14,
            _v15,
            _v16 = {
              include: []
            };
          return (null == _v1 ? void 0 : _v1.include) && ((null == (_v2 = _v1.include) ? void 0 : _v2.statusField) && _v16.include.push("status"), (null == (_v3 = _v1.include) ? void 0 : _v3.customFields) && _v16.include.push("custom"), (null == (_v4 = _v1.include) ? void 0 : _v4.UUIDFields) && _v16.include.push("uuid"), (null == (_v5 = _v1.include) ? void 0 : _v5.customUUIDFields) && _v16.include.push("uuid.custom"), (null == (_v6 = _v1.include) ? void 0 : _v6.UUIDStatusField) && _v16.include.push("uuid.status"), (null == (_v7 = _v1.include) ? void 0 : _v7.UUIDTypeField) && _v16.include.push("uuid.type")), _v16.include = _v16.include.join(","), (null == (_v8 = null == _v1 ? void 0 : _v1.include) ? void 0 : _v8.totalCount) && (_v16.count = null == (_v9 = _v1.include) ? void 0 : _v9.totalCount), (null == (_v10 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v10.next) && (_v16.start = null == (_v11 = _v1.page) ? void 0 : _v11.next), (null == (_v12 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v12.prev) && (_v16.end = null == (_v13 = _v1.page) ? void 0 : _v13.prev), (null == _v1 ? void 0 : _v1.filter) && (_v16.filter = _v1.filter), _v16.limit = null != (_v14 = null == _v1 ? void 0 : _v1.limit) ? _v14 : 100, (null == _v1 ? void 0 : _v1.sort) && (_v16.sort = Object.entries(null != (_v15 = _v1.sort) ? _v15 : {}).map(function (_v0) {
            var _v1 = _v7(_v0, 2),
              _v2 = _v1[0],
              _v3 = _v1[1];
            return "asc" === _v3 || "desc" === _v3 ? "".concat(_v2, ":").concat(_v3) : _v2;
          })), _v16;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data,
            totalCount: _v1.totalCount,
            prev: _v1.prev,
            next: _v1.next
          };
        }
      },
      _v93 = {
        getOperation: function () {
          return _v42.PNSetMembersOperation;
        },
        validateParams: function (_v0, _v1) {
          return (null == _v1 ? void 0 : _v1.channel) ? (null == _v1 ? void 0 : _v1.uuids) && 0 !== (null == _v1 ? void 0 : _v1.uuids.length) ? void 0 : "UUIDs cannot be empty" : "Channel cannot be empty";
        },
        usePatch: function () {
          return !0;
        },
        patchURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v2/objects/".concat(_v2.subscribeKey, "/channels/").concat(_v52.encodeString(_v1.channel), "/uuids");
        },
        patchPayload: function (_v0, _v1) {
          var _v2;
          return (_v2 = {
            set: [],
            delete: []
          })[_v1.type] = _v1.uuids.map(function (_v0) {
            return "string" == typeof _v0 ? {
              uuid: {
                id: _v0
              }
            } : {
              uuid: {
                id: _v0.id
              },
              custom: _v0.custom,
              status: _v0.status
            };
          }), _v2;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11 = {
              include: ["uuid.status", "uuid.type", "type"]
            };
          return (null == _v1 ? void 0 : _v1.include) && ((null == (_v2 = _v1.include) ? void 0 : _v2.customFields) && _v11.include.push("custom"), (null == (_v3 = _v1.include) ? void 0 : _v3.customUUIDFields) && _v11.include.push("uuid.custom"), (null == (_v4 = _v1.include) ? void 0 : _v4.UUIDFields) && _v11.include.push("uuid")), _v11.include = _v11.include.join(","), (null == (_v5 = null == _v1 ? void 0 : _v1.include) ? void 0 : _v5.totalCount) && (_v11.count = !0), (null == (_v6 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v6.next) && (_v11.start = null == (_v7 = _v1.page) ? void 0 : _v7.next), (null == (_v8 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v8.prev) && (_v11.end = null == (_v9 = _v1.page) ? void 0 : _v9.prev), (null == _v1 ? void 0 : _v1.filter) && (_v11.filter = _v1.filter), null != _v1.limit && (_v11.limit = _v1.limit), (null == _v1 ? void 0 : _v1.sort) && (_v11.sort = Object.entries(null != (_v10 = _v1.sort) ? _v10 : {}).map(function (_v0) {
            var _v1 = _v7(_v0, 2),
              _v2 = _v1[0],
              _v3 = _v1[1];
            return "asc" === _v3 || "desc" === _v3 ? "".concat(_v2, ":").concat(_v3) : _v2;
          })), _v11;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data,
            totalCount: _v1.totalCount,
            prev: _v1.prev,
            next: _v1.next
          };
        }
      },
      _v94 = {
        getOperation: function () {
          return _v42.PNGetMembershipsOperation;
        },
        validateParams: function () {},
        getURL: function (_v0, _v1) {
          var _v2,
            _v3 = _v0.config;
          return "/v2/objects/".concat(_v3.subscribeKey, "/uuids/").concat(_v52.encodeString(null != (_v2 = null == _v1 ? void 0 : _v1.uuid) ? _v2 : _v3.getUUID()), "/channels");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11,
            _v12,
            _v13,
            _v14,
            _v15,
            _v16 = {
              include: []
            };
          return (null == _v1 ? void 0 : _v1.include) && ((null == (_v2 = _v1.include) ? void 0 : _v2.statusField) && _v16.include.push("status"), (null == (_v3 = _v1.include) ? void 0 : _v3.customFields) && _v16.include.push("custom"), (null == (_v4 = _v1.include) ? void 0 : _v4.channelFields) && _v16.include.push("channel"), (null == (_v5 = _v1.include) ? void 0 : _v5.customChannelFields) && _v16.include.push("channel.custom"), (null == (_v6 = _v1.include) ? void 0 : _v6.channelStatusField) && _v16.include.push("channel.status"), (null == (_v7 = _v1.include) ? void 0 : _v7.channelTypeField) && _v16.include.push("channel.type")), _v16.include = _v16.include.join(","), (null == (_v8 = null == _v1 ? void 0 : _v1.include) ? void 0 : _v8.totalCount) && (_v16.count = null == (_v9 = _v1.include) ? void 0 : _v9.totalCount), (null == (_v10 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v10.next) && (_v16.start = null == (_v11 = _v1.page) ? void 0 : _v11.next), (null == (_v12 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v12.prev) && (_v16.end = null == (_v13 = _v1.page) ? void 0 : _v13.prev), (null == _v1 ? void 0 : _v1.filter) && (_v16.filter = _v1.filter), _v16.limit = null != (_v14 = null == _v1 ? void 0 : _v1.limit) ? _v14 : 100, (null == _v1 ? void 0 : _v1.sort) && (_v16.sort = Object.entries(null != (_v15 = _v1.sort) ? _v15 : {}).map(function (_v0) {
            var _v1 = _v7(_v0, 2),
              _v2 = _v1[0],
              _v3 = _v1[1];
            return "asc" === _v3 || "desc" === _v3 ? "".concat(_v2, ":").concat(_v3) : _v2;
          })), _v16;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data,
            totalCount: _v1.totalCount,
            prev: _v1.prev,
            next: _v1.next
          };
        }
      },
      _v95 = {
        getOperation: function () {
          return _v42.PNSetMembershipsOperation;
        },
        validateParams: function (_v0, _v1) {
          if (!(null == _v1 ? void 0 : _v1.channels) || 0 === (null == _v1 ? void 0 : _v1.channels.length)) return "Channels cannot be empty";
        },
        usePatch: function () {
          return !0;
        },
        patchURL: function (_v0, _v1) {
          var _v2,
            _v3 = _v0.config;
          return "/v2/objects/".concat(_v3.subscribeKey, "/uuids/").concat(_v52.encodeString(null != (_v2 = _v1.uuid) ? _v2 : _v3.getUUID()), "/channels");
        },
        patchPayload: function (_v0, _v1) {
          var _v2;
          return (_v2 = {
            set: [],
            delete: []
          })[_v1.type] = _v1.channels.map(function (_v0) {
            return "string" == typeof _v0 ? {
              channel: {
                id: _v0
              }
            } : {
              channel: {
                id: _v0.id
              },
              custom: _v0.custom,
              status: _v0.status
            };
          }), _v2;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11 = {
              include: ["channel.status", "channel.type", "status"]
            };
          return (null == _v1 ? void 0 : _v1.include) && ((null == (_v2 = _v1.include) ? void 0 : _v2.customFields) && _v11.include.push("custom"), (null == (_v3 = _v1.include) ? void 0 : _v3.customChannelFields) && _v11.include.push("channel.custom"), (null == (_v4 = _v1.include) ? void 0 : _v4.channelFields) && _v11.include.push("channel")), _v11.include = _v11.include.join(","), (null == (_v5 = null == _v1 ? void 0 : _v1.include) ? void 0 : _v5.totalCount) && (_v11.count = !0), (null == (_v6 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v6.next) && (_v11.start = null == (_v7 = _v1.page) ? void 0 : _v7.next), (null == (_v8 = null == _v1 ? void 0 : _v1.page) ? void 0 : _v8.prev) && (_v11.end = null == (_v9 = _v1.page) ? void 0 : _v9.prev), (null == _v1 ? void 0 : _v1.filter) && (_v11.filter = _v1.filter), null != _v1.limit && (_v11.limit = _v1.limit), (null == _v1 ? void 0 : _v1.sort) && (_v11.sort = Object.entries(null != (_v10 = _v1.sort) ? _v10 : {}).map(function (_v0) {
            var _v1 = _v7(_v0, 2),
              _v2 = _v1[0],
              _v3 = _v1[1];
            return "asc" === _v3 || "desc" === _v3 ? "".concat(_v2, ":").concat(_v3) : _v2;
          })), _v11;
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data,
            totalCount: _v1.totalCount,
            prev: _v1.prev,
            next: _v1.next
          };
        }
      },
      _v96 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNAccessManagerAudit;
        },
        validateParams: function (_v0) {
          if (!_v0.config.subscribeKey) return "Missing Subscribe Key";
        },
        getURL: function (_v0) {
          var _v1 = _v0.config;
          return "/v2/auth/audit/sub-key/".concat(_v1.subscribeKey);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !1;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channel,
            _v3 = _v1.channelGroup,
            _v4 = _v1.authKeys,
            _v5 = void 0 === _v4 ? [] : _v4,
            _v6 = {};
          return _v2 && (_v6.channel = _v2), _v3 && (_v6["channel-group"] = _v3), _v5.length > 0 && (_v6.auth = _v5.join(",")), _v6;
        },
        handleResponse: function (_v0, _v1) {
          return _v1.payload;
        }
      }),
      _v97 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNAccessManagerGrant;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v0.config;
          return _v2.subscribeKey ? _v2.publishKey ? _v2.secretKey ? null == _v1.uuids || _v1.authKeys ? null == _v1.uuids || null == _v1.channels && null == _v1.channelGroups ? void 0 : "Both channel/channelgroup and uuid cannot be used in the same request" : "authKeys are required for grant request on uuids" : "Missing Secret Key" : "Missing Publish Key" : "Missing Subscribe Key";
        },
        getURL: function (_v0) {
          var _v1 = _v0.config;
          return "/v2/auth/grant/sub-key/".concat(_v1.subscribeKey);
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !1;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channels,
            _v3 = void 0 === _v2 ? [] : _v2,
            _v4 = _v1.channelGroups,
            _v5 = void 0 === _v4 ? [] : _v4,
            _v6 = _v1.uuids,
            _v7 = void 0 === _v6 ? [] : _v6,
            _v8 = _v1.ttl,
            _v9 = _v1.read,
            _v10 = _v1.write,
            _v11 = _v1.manage,
            _v12 = _v1.get,
            _v13 = _v1.join,
            _v14 = _v1.update,
            _v15 = _v1.authKeys,
            _v16 = void 0 === _v15 ? [] : _v15,
            _v17 = _v1.delete,
            _v18 = {};
          return _v18.r = void 0 !== _v9 && _v9 ? "1" : "0", _v18.w = void 0 !== _v10 && _v10 ? "1" : "0", _v18.m = void 0 !== _v11 && _v11 ? "1" : "0", _v18.d = _v17 ? "1" : "0", _v18.g = void 0 !== _v12 && _v12 ? "1" : "0", _v18.j = void 0 !== _v13 && _v13 ? "1" : "0", _v18.u = void 0 !== _v14 && _v14 ? "1" : "0", _v3.length > 0 && (_v18.channel = _v3.join(",")), _v5.length > 0 && (_v18["channel-group"] = _v5.join(",")), _v16.length > 0 && (_v18.auth = _v16.join(",")), _v7.length > 0 && (_v18["target-uuid"] = _v7.join(",")), (_v8 || 0 === _v8) && (_v18.ttl = _v8), _v18;
        },
        handleResponse: function () {
          return {};
        }
      });
    function _v98(_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5 = void 0 !== (null == _v0 ? void 0 : _v0.authorizedUserId),
        _v6 = void 0 !== (null == (_v1 = null == _v0 ? void 0 : _v0.resources) ? void 0 : _v1.users),
        _v7 = void 0 !== (null == (_v2 = null == _v0 ? void 0 : _v0.resources) ? void 0 : _v2.spaces),
        _v8 = void 0 !== (null == (_v3 = null == _v0 ? void 0 : _v0.patterns) ? void 0 : _v3.users),
        _v9 = void 0 !== (null == (_v4 = null == _v0 ? void 0 : _v0.patterns) ? void 0 : _v4.spaces);
      return _v8 || _v6 || _v9 || _v7 || _v5;
    }
    function _v99(_v0) {
      var _v1 = 0;
      return _v0.join && (_v1 |= 128), _v0.update && (_v1 |= 64), _v0.get && (_v1 |= 32), _v0.delete && (_v1 |= 8), _v0.manage && (_v1 |= 4), _v0.write && (_v1 |= 2), _v0.read && (_v1 |= 1), _v1;
    }
    var _v100 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNAccessManagerGrantToken;
        },
        extractPermissions: _v99,
        validateParams: function (_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8 = _v0.config;
          if (!_v8.subscribeKey) return "Missing Subscribe Key";
          if (!_v8.publishKey) return "Missing Publish Key";
          if (!_v8.secretKey) return "Missing Secret Key";
          if (!_v1.resources && !_v1.patterns) return "Missing either Resources or Patterns.";
          var _v9 = void 0 !== (null == _v1 ? void 0 : _v1.authorized_uuid),
            _v10 = void 0 !== (null == (_v2 = null == _v1 ? void 0 : _v1.resources) ? void 0 : _v2.uuids),
            _v11 = void 0 !== (null == (_v3 = null == _v1 ? void 0 : _v1.resources) ? void 0 : _v3.channels),
            _v12 = void 0 !== (null == (_v4 = null == _v1 ? void 0 : _v1.resources) ? void 0 : _v4.groups),
            _v13 = void 0 !== (null == (_v5 = null == _v1 ? void 0 : _v1.patterns) ? void 0 : _v5.uuids),
            _v14 = void 0 !== (null == (_v6 = null == _v1 ? void 0 : _v1.patterns) ? void 0 : _v6.channels),
            _v15 = void 0 !== (null == (_v7 = null == _v1 ? void 0 : _v1.patterns) ? void 0 : _v7.groups),
            _v16 = _v9 || _v10 || _v13 || _v11 || _v14 || _v12 || _v15;
          return _v98(_v1) && _v16 ? "Cannot mix `users`, `spaces` and `authorizedUserId` with `uuids`, `channels`, `groups` and `authorized_uuid`" : (!_v1.resources || _v1.resources.uuids && 0 !== Object.keys(_v1.resources.uuids).length || _v1.resources.channels && 0 !== Object.keys(_v1.resources.channels).length || _v1.resources.groups && 0 !== Object.keys(_v1.resources.groups).length || _v1.resources.users && 0 !== Object.keys(_v1.resources.users).length || _v1.resources.spaces && 0 !== Object.keys(_v1.resources.spaces).length) && (!_v1.patterns || _v1.patterns.uuids && 0 !== Object.keys(_v1.patterns.uuids).length || _v1.patterns.channels && 0 !== Object.keys(_v1.patterns.channels).length || _v1.patterns.groups && 0 !== Object.keys(_v1.patterns.groups).length || _v1.patterns.users && 0 !== Object.keys(_v1.patterns.users).length || _v1.patterns.spaces && 0 !== Object.keys(_v1.patterns.spaces).length) ? void 0 : "Missing values for either Resources or Patterns.";
        },
        postURL: function (_v0) {
          var _v1 = _v0.config;
          return "/v3/pam/".concat(_v1.subscribeKey, "/grant");
        },
        usePost: function () {
          return !0;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !1;
        },
        prepareParams: function () {
          return {};
        },
        postPayload: function (_v0, _v1) {
          return function (_v0) {
            if (_v98(_v0)) return function (_v0) {
              var _v1 = _v0.ttl,
                _v2 = _v0.resources,
                _v3 = _v0.patterns,
                _v4 = _v0.meta,
                _v5 = _v0.authorizedUserId,
                _v6 = {
                  ttl: 0,
                  permissions: {
                    resources: {
                      channels: {},
                      groups: {},
                      uuids: {},
                      users: {},
                      spaces: {}
                    },
                    patterns: {
                      channels: {},
                      groups: {},
                      uuids: {},
                      users: {},
                      spaces: {}
                    },
                    meta: {}
                  }
                };
              if (_v2) {
                var _v7 = _v2.users,
                  _v8 = _v2.spaces,
                  _v9 = _v2.groups;
                _v7 && Object.keys(_v7).forEach(function (_v0) {
                  _v6.permissions.resources.uuids[_v0] = _v99(_v7[_v0]);
                }), _v8 && Object.keys(_v8).forEach(function (_v0) {
                  _v6.permissions.resources.channels[_v0] = _v99(_v8[_v0]);
                }), _v9 && Object.keys(_v9).forEach(function (_v0) {
                  _v6.permissions.resources.groups[_v0] = _v99(_v9[_v0]);
                });
              }
              if (_v3) {
                var _v10 = _v3.users,
                  _v11 = _v3.spaces,
                  _v12 = _v3.groups;
                _v10 && Object.keys(_v10).forEach(function (_v0) {
                  _v6.permissions.patterns.uuids[_v0] = _v99(_v10[_v0]);
                }), _v11 && Object.keys(_v11).forEach(function (_v0) {
                  _v6.permissions.patterns.channels[_v0] = _v99(_v11[_v0]);
                }), _v12 && Object.keys(_v12).forEach(function (_v0) {
                  _v6.permissions.patterns.groups[_v0] = _v99(_v12[_v0]);
                });
              }
              return (_v1 || 0 === _v1) && (_v6.ttl = _v1), _v4 && (_v6.permissions.meta = _v4), _v5 && (_v6.permissions.uuid = "".concat(_v5)), _v6;
            }(_v0);
            var _v1 = _v0.ttl,
              _v2 = _v0.resources,
              _v3 = _v0.patterns,
              _v4 = _v0.meta,
              _v5 = _v0.authorized_uuid,
              _v6 = {
                ttl: 0,
                permissions: {
                  resources: {
                    channels: {},
                    groups: {},
                    uuids: {},
                    users: {},
                    spaces: {}
                  },
                  patterns: {
                    channels: {},
                    groups: {},
                    uuids: {},
                    users: {},
                    spaces: {}
                  },
                  meta: {}
                }
              };
            if (_v2) {
              var _v7 = _v2.uuids,
                _v8 = _v2.channels,
                _v9 = _v2.groups;
              _v7 && Object.keys(_v7).forEach(function (_v0) {
                _v6.permissions.resources.uuids[_v0] = _v99(_v7[_v0]);
              }), _v8 && Object.keys(_v8).forEach(function (_v0) {
                _v6.permissions.resources.channels[_v0] = _v99(_v8[_v0]);
              }), _v9 && Object.keys(_v9).forEach(function (_v0) {
                _v6.permissions.resources.groups[_v0] = _v99(_v9[_v0]);
              });
            }
            if (_v3) {
              var _v10 = _v3.uuids,
                _v11 = _v3.channels,
                _v12 = _v3.groups;
              _v10 && Object.keys(_v10).forEach(function (_v0) {
                _v6.permissions.patterns.uuids[_v0] = _v99(_v10[_v0]);
              }), _v11 && Object.keys(_v11).forEach(function (_v0) {
                _v6.permissions.patterns.channels[_v0] = _v99(_v11[_v0]);
              }), _v12 && Object.keys(_v12).forEach(function (_v0) {
                _v6.permissions.patterns.groups[_v0] = _v99(_v12[_v0]);
              });
            }
            return (_v1 || 0 === _v1) && (_v6.ttl = _v1), _v4 && (_v6.permissions.meta = _v4), _v5 && (_v6.permissions.uuid = "".concat(_v5)), _v6;
          }(_v1);
        },
        handleResponse: function (_v0, _v1) {
          return _v1.data.token;
        }
      }),
      _v101 = {
        getOperation: function () {
          return _v42.PNAccessManagerRevokeToken;
        },
        validateParams: function (_v0, _v1) {
          return _v0.config.secretKey ? _v1 ? void 0 : "token can't be empty" : "Missing Secret Key";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config;
          return "/v3/pam/".concat(_v2.subscribeKey, "/grant/").concat(_v52.encodeString(_v1));
        },
        useDelete: function () {
          return !0;
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !1;
        },
        prepareParams: function (_v0) {
          return {
            uuid: _v0.config.getUUID()
          };
        },
        handleResponse: function (_v0, _v1) {
          return {
            status: _v1.status,
            data: _v1.data
          };
        }
      };
    function _v102(_v0, _v1) {
      var _v2 = JSON.stringify(_v1);
      if (_v0.cryptoModule) {
        var _v3 = _v0.cryptoModule.encrypt(_v2);
        _v2 = JSON.stringify(_v2 = "string" == typeof _v3 ? _v3 : _v17(_v3));
      }
      return _v2 || "";
    }
    var _v103 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNPublishOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.message;
          return _v1.channel ? _v3 ? _v2.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing Message" : "Missing Channel";
        },
        usePost: function (_v0, _v1) {
          var _v2 = _v1.sendByPost;
          return void 0 !== _v2 && _v2;
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channel,
            _v4 = _v102(_v0, _v1.message);
          return "/publish/".concat(_v2.publishKey, "/").concat(_v2.subscribeKey, "/0/").concat(_v52.encodeString(_v3), "/0/").concat(_v52.encodeString(_v4));
        },
        postURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channel;
          return "/publish/".concat(_v2.publishKey, "/").concat(_v2.subscribeKey, "/0/").concat(_v52.encodeString(_v3), "/0");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        postPayload: function (_v0, _v1) {
          return _v102(_v0, _v1.message);
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.meta,
            _v3 = _v1.replicate,
            _v4 = _v1.storeInHistory,
            _v5 = _v1.ttl,
            _v6 = {};
          return null != _v4 && (_v6.store = _v4 ? "1" : "0"), _v5 && (_v6.ttl = _v5), !1 === (void 0 === _v3 || _v3) && (_v6.norep = "true"), _v2 && "object" == typeof _v2 && (_v6.meta = JSON.stringify(_v2)), _v6;
        },
        handleResponse: function (_v0, _v1) {
          return {
            timetoken: _v1[2]
          };
        }
      }),
      _v104 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNSignalOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.message;
          return _v1.channel ? _v3 ? _v2.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing Message" : "Missing Channel";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channel,
            _v4 = JSON.stringify(_v1.message);
          return "/signal/".concat(_v2.publishKey, "/").concat(_v2.subscribeKey, "/0/").concat(_v52.encodeString(_v3), "/0/").concat(_v52.encodeString(_v4));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function () {
          return {};
        },
        handleResponse: function (_v0, _v1) {
          return {
            timetoken: _v1[2]
          };
        }
      }),
      _v105 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNHistoryOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.channel,
            _v3 = _v0.config;
          return _v2 ? _v3.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing channel";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.channel,
            _v3 = _v0.config;
          return "/v2/history/sub-key/".concat(_v3.subscribeKey, "/channel/").concat(_v52.encodeString(_v2));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.start,
            _v3 = _v1.end,
            _v4 = _v1.reverse,
            _v5 = _v1.count,
            _v6 = _v1.stringifiedTimeToken,
            _v7 = _v1.includeMeta,
            _v8 = {
              include_token: "true"
            };
          return _v8.count = void 0 === _v5 ? 100 : _v5, _v2 && (_v8.start = _v2), _v3 && (_v8.end = _v3), void 0 !== _v6 && _v6 && (_v8.string_message_token = "true"), null != _v4 && (_v8.reverse = _v4.toString()), void 0 !== _v7 && _v7 && (_v8.include_meta = "true"), _v8;
        },
        handleResponse: function (_v0, _v1) {
          var _v2 = {
            messages: [],
            startTimeToken: _v1[1],
            endTimeToken: _v1[2]
          };
          return Array.isArray(_v1[0]) && _v1[0].forEach(function (_v0) {
            var _v1 = function (_v0, _v1) {
                var _v2 = {};
                if (!_v0.cryptoModule) return _v2.payload = _v1, _v2;
                try {
                  var _v3 = _v0.cryptoModule.decrypt(_v1);
                  return _v2.payload = _v3 instanceof ArrayBuffer ? JSON.parse(new TextDecoder().decode(_v3)) : _v3, _v2;
                } catch (_v0) {
                  _v0.config.logVerbosity && console && console.log && console.log("decryption error", _v0.message), _v2.payload = _v1, _v2.error = "Error while decrypting message content: ".concat(_v0.message);
                }
                return _v2;
              }(_v0, _v0.message),
              _v2 = {
                timetoken: _v0.timetoken,
                entry: _v1.payload
              };
            _v0.meta && (_v2.meta = _v0.meta), _v1.error && (_v2.error = _v1.error), _v2.messages.push(_v2);
          }), _v2;
        }
      }),
      _v106 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNDeleteMessagesOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.channel,
            _v3 = _v0.config;
          return _v2 ? _v3.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing channel";
        },
        useDelete: function () {
          return !0;
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.channel,
            _v3 = _v0.config;
          return "/v3/history/sub-key/".concat(_v3.subscribeKey, "/channel/").concat(_v52.encodeString(_v2));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.start,
            _v3 = _v1.end,
            _v4 = {};
          return _v2 && (_v4.start = _v2), _v3 && (_v4.end = _v3), _v4;
        },
        handleResponse: function (_v0, _v1) {
          return _v1.payload;
        }
      }),
      _v107 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNMessageCounts;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.channels,
            _v3 = _v1.timetoken,
            _v4 = _v1.channelTimetokens,
            _v5 = _v0.config;
          return _v2 ? _v3 && _v4 ? "timetoken and channelTimetokens are incompatible together" : _v4 && _v4.length > 1 && _v2.length !== _v4.length ? "Length of channelTimetokens and channels do not match" : _v5.subscribeKey ? void 0 : "Missing Subscribe Key" : "Missing channel";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.channels,
            _v3 = _v0.config,
            _v4 = _v2.join(",");
          return "/v3/history/sub-key/".concat(_v3.subscribeKey, "/message-counts/").concat(_v52.encodeString(_v4));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.timetoken,
            _v3 = _v1.channelTimetokens,
            _v4 = {};
          return _v3 && 1 === _v3.length ? _v4.timetoken = _v7(_v3, 1)[0] : _v3 ? _v4.channelsTimetoken = _v3.join(",") : _v2 && (_v4.timetoken = _v2), _v4;
        },
        handleResponse: function (_v0, _v1) {
          return {
            channels: _v1.channels
          };
        }
      }),
      _v108 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNFetchMessagesOperation;
        },
        validateParams: function (_v0, _v1) {
          var _v2 = _v1.channels,
            _v3 = _v1.includeMessageActions,
            _v4 = _v0.config;
          if (!_v2 || 0 === _v2.length) return "Missing channels";
          if (!_v4.subscribeKey) return "Missing Subscribe Key";
          if (void 0 !== _v3 && _v3 && _v2.length > 1) throw TypeError("History can return actions data for a single channel only. Either pass a single channel or disable the includeMessageActions flag.");
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v1.channels,
            _v3 = void 0 === _v2 ? [] : _v2,
            _v4 = _v1.includeMessageActions,
            _v5 = _v0.config,
            _v6 = _v3.length > 0 ? _v3.join(",") : ",";
          return "/v3/".concat(void 0 !== _v4 && _v4 ? "history-with-actions" : "history", "/sub-key/").concat(_v5.subscribeKey, "/channel/").concat(_v52.encodeString(_v6));
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v1.channels,
            _v3 = _v1.start,
            _v4 = _v1.end,
            _v5 = _v1.includeMessageActions,
            _v6 = _v1.count,
            _v7 = _v1.stringifiedTimeToken,
            _v8 = _v1.includeMeta,
            _v9 = _v1.includeUuid,
            _v10 = _v1.includeUUID,
            _v11 = _v1.includeMessageType,
            _v12 = {};
          return _v12.max = _v6 || (_v2.length > 1 || !0 === _v5 ? 25 : 100), _v3 && (_v12.start = _v3), _v4 && (_v12.end = _v4), void 0 !== _v7 && _v7 && (_v12.string_message_token = "true"), void 0 !== _v8 && _v8 && (_v12.include_meta = "true"), (void 0 === _v10 || _v10) && !1 !== _v9 && (_v12.include_uuid = "true"), (void 0 === _v11 || _v11) && (_v12.include_message_type = "true"), _v12;
        },
        handleResponse: function (_v0, _v1) {
          var _v2 = {
            channels: {}
          };
          return Object.keys(_v1.channels || {}).forEach(function (_v0) {
            _v2.channels[_v0] = [], (_v1.channels[_v0] || []).forEach(function (_v0) {
              var _v1 = {},
                _v2 = function (_v0, _v1) {
                  var _v2 = {};
                  if (!_v0.cryptoModule) return _v2.payload = _v1, _v2;
                  try {
                    var _v3 = _v0.cryptoModule.decrypt(_v1);
                    return _v2.payload = _v3 instanceof ArrayBuffer ? JSON.parse(new TextDecoder().decode(_v3)) : _v3, _v2;
                  } catch (_v0) {
                    _v0.config.logVerbosity && console && console.log && console.log("decryption error", _v0.message), _v2.payload = _v1, _v2.error = "Error while decrypting message content: ".concat(_v0.message);
                  }
                  return _v2;
                }(_v0, _v0.message);
              _v1.channel = _v0, _v1.timetoken = _v0.timetoken, _v1.message = _v2.payload, _v1.messageType = _v0.message_type, _v1.uuid = _v0.uuid, _v0.actions && (_v1.actions = _v0.actions, _v1.data = _v0.actions), _v0.meta && (_v1.meta = _v0.meta), _v2.error && (_v1.error = _v2.error), _v2.channels[_v0].push(_v1);
            });
          }), _v1.more && (_v2.more = _v1.more), _v2;
        }
      }),
      _v109 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNTimeOperation;
        },
        getURL: function () {
          return "/time/0";
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getTransactionTimeout();
        },
        prepareParams: function () {
          return {};
        },
        isAuthSupported: function () {
          return !1;
        },
        handleResponse: function (_v0, _v1) {
          return {
            timetoken: _v1[0]
          };
        },
        validateParams: function () {}
      }),
      _v110 = Object.freeze({
        __proto__: null,
        getOperation: function () {
          return _v42.PNSubscribeOperation;
        },
        validateParams: function (_v0) {
          if (!_v0.config.subscribeKey) return "Missing Subscribe Key";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v4.length > 0 ? _v4.join(",") : ",";
          return "/v2/subscribe/".concat(_v2.subscribeKey, "/").concat(_v52.encodeString(_v5), "/0");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getSubscribeTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.state,
            _v4 = _v1.channelGroups,
            _v5 = void 0 === _v4 ? [] : _v4,
            _v6 = _v1.timetoken,
            _v7 = _v1.filterExpression,
            _v8 = _v1.region,
            _v9 = {
              heartbeat: _v2.getPresenceTimeout()
            };
          return _v5.length > 0 && (_v9["channel-group"] = _v5.join(",")), _v7 && _v7.length > 0 && (_v9["filter-expr"] = _v7), Object.keys(_v3).length && (_v9.state = JSON.stringify(_v3)), _v6 && (_v9.tt = _v6), _v8 && (_v9.tr = _v8), _v9;
        },
        handleResponse: function (_v0, _v1) {
          var _v2 = [];
          return _v1.m.forEach(function (_v0) {
            var _v1 = {
                timetoken: _v0.p.t,
                region: _v0.p.r
              },
              _v2 = {
                shard: parseInt(_v0.a, 10),
                subscriptionMatch: _v0.b,
                channel: _v0.c,
                messageType: _v0.e,
                payload: _v0.d,
                flags: _v0.f,
                issuingClientId: _v0.i,
                subscribeKey: _v0.k,
                originationTimetoken: _v0.o,
                userMetadata: _v0.u,
                publishMetaData: _v1
              };
            _v2.push(_v2);
          }), {
            messages: _v2,
            metadata: {
              timetoken: _v1.t.t,
              region: _v1.t.r
            }
          };
        }
      }),
      _v111 = {
        getOperation: function () {
          return _v42.PNHandshakeOperation;
        },
        validateParams: function (_v0, _v1) {
          if (!(null == _v1 ? void 0 : _v1.channels) && !(null == _v1 ? void 0 : _v1.channelGroups)) return "channels and channleGroups both should not be empty";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v4.length > 0 ? _v4.join(",") : ",";
          return "/v2/subscribe/".concat(_v2.subscribeKey, "/").concat(_v52.encodeString(_v5), "/0");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getSubscribeTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = {};
          return _v1.channelGroups && _v1.channelGroups.length > 0 && (_v2["channel-group"] = _v1.channelGroups.join(",")), _v2.tt = 0, _v1.state && (_v2.state = JSON.stringify(_v1.state)), _v1.filterExpression && _v1.filterExpression.length > 0 && (_v2["filter-expr"] = _v1.filterExpression), _v2.ee = "", _v2;
        },
        handleResponse: function (_v0, _v1) {
          return {
            region: _v1.t.r,
            timetoken: _v1.t.t
          };
        }
      },
      _v112 = {
        getOperation: function () {
          return _v42.PNReceiveMessagesOperation;
        },
        validateParams: function (_v0, _v1) {
          return (null == _v1 ? void 0 : _v1.channels) || (null == _v1 ? void 0 : _v1.channelGroups) ? (null == _v1 ? void 0 : _v1.timetoken) ? (null == _v1 ? void 0 : _v1.region) ? void 0 : "region can not be empty" : "timetoken can not be empty" : "channels and channleGroups both should not be empty";
        },
        getURL: function (_v0, _v1) {
          var _v2 = _v0.config,
            _v3 = _v1.channels,
            _v4 = void 0 === _v3 ? [] : _v3,
            _v5 = _v4.length > 0 ? _v4.join(",") : ",";
          return "/v2/subscribe/".concat(_v2.subscribeKey, "/").concat(_v52.encodeString(_v5), "/0");
        },
        getRequestTimeout: function (_v0) {
          return _v0.config.getSubscribeTimeout();
        },
        isAuthSupported: function () {
          return !0;
        },
        getAbortSignal: function (_v0, _v1) {
          return _v1.abortSignal;
        },
        prepareParams: function (_v0, _v1) {
          var _v2 = {};
          return _v1.channelGroups && _v1.channelGroups.length > 0 && (_v2["channel-group"] = _v1.channelGroups.join(",")), _v1.filterExpression && _v1.filterExpression.length > 0 && (_v2["filter-expr"] = _v1.filterExpression), _v2.tt = _v1.timetoken, _v2.tr = _v1.region, _v2.ee = "", _v2;
        },
        handleResponse: function (_v0, _v1) {
          var _v2 = [];
          return _v1.m.forEach(function (_v0) {
            var _v1 = {
              shard: parseInt(_v0.a, 10),
              subscriptionMatch: _v0.b,
              channel: _v0.c,
              messageType: _v0.e,
              payload: _v0.d,
              flags: _v0.f,
              issuingClientId: _v0.i,
              subscribeKey: _v0.k,
              originationTimetoken: _v0.o,
              userMetadata: _v0.u,
              publishMetaData: {
                timetoken: _v0.p.t,
                region: _v0.p.r
              }
            };
            _v2.push(_v1);
          }), {
            messages: _v2,
            metadata: {
              region: _v1.t.r,
              timetoken: _v1.t.t
            }
          };
        }
      },
      _v113 = function () {
        function _v0(_v0) {
          void 0 === _v0 && (_v0 = !1), this.sync = _v0, this.listeners = new Set();
        }
        return _v0.prototype.subscribe = function (_v0) {
          var _v1 = this;
          return this.listeners.add(_v0), function () {
            _v1.listeners.delete(_v0);
          };
        }, _v0.prototype.notify = function (_v0) {
          var _v1 = this,
            _v2 = function () {
              _v1.listeners.forEach(function (_v0) {
                _v0(_v0);
              });
            };
          this.sync ? _v2() : setTimeout(_v2, 0);
        }, _v0;
      }(),
      _v114 = function () {
        function _v0(_v0) {
          this.label = _v0, this.transitionMap = new Map(), this.enterEffects = [], this.exitEffects = [];
        }
        return _v0.prototype.transition = function (_v0, _v1) {
          var _v2;
          if (this.transitionMap.has(_v1.type)) return null == (_v2 = this.transitionMap.get(_v1.type)) ? void 0 : _v2(_v0, _v1);
        }, _v0.prototype.on = function (_v0, _v1) {
          return this.transitionMap.set(_v0, _v1), this;
        }, _v0.prototype.with = function (_v0, _v1) {
          return [this, _v0, null != _v1 ? _v1 : []];
        }, _v0.prototype.onEnter = function (_v0) {
          return this.enterEffects.push(_v0), this;
        }, _v0.prototype.onExit = function (_v0) {
          return this.exitEffects.push(_v0), this;
        }, _v0;
      }(),
      _v115 = function (_v0) {
        function _v1() {
          return null !== _v0 && _v0.apply(this, arguments) || this;
        }
        return _v1(_v1, _v0), _v1.prototype.describe = function (_v0) {
          return new _v114(_v0);
        }, _v1.prototype.start = function (_v0, _v1) {
          this.currentState = _v0, this.currentContext = _v1, this.notify({
            type: "engineStarted",
            state: _v0,
            context: _v1
          });
        }, _v1.prototype.transition = function (_v0) {
          if (!this.currentState) throw Error("Start the engine first");
          this.notify({
            type: "eventReceived",
            event: _v0
          });
          var _v1,
            _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7 = this.currentState.transition(this.currentContext, _v0);
          if (_v7) {
            var _v8 = _v7(_v7, 3),
              _v9 = _v8[0],
              _v10 = _v8[1],
              _v11 = _v8[2];
            try {
              for (var _v12 = _v6(this.currentState.exitEffects), _v13 = _v12.next(); !_v13.done; _v13 = _v12.next()) {
                var _v14 = _v13.value;
                this.notify({
                  type: "invocationDispatched",
                  invocation: _v14(this.currentContext)
                });
              }
            } catch (_v0) {
              _v1 = {
                error: _v0
              };
            } finally {
              try {
                _v13 && !_v13.done && (_v2 = _v12.return) && _v2.call(_v12);
              } finally {
                if (_v1) throw _v1.error;
              }
            }
            var _v15 = this.currentState;
            this.currentState = _v9;
            var _v16 = this.currentContext;
            this.currentContext = _v10, this.notify({
              type: "transitionDone",
              fromState: _v15,
              fromContext: _v16,
              toState: _v9,
              toContext: _v10,
              event: _v0
            });
            try {
              for (var _v17 = _v6(_v11), _v18 = _v17.next(); !_v18.done; _v18 = _v17.next()) _v14 = _v18.value, this.notify({
                type: "invocationDispatched",
                invocation: _v14
              });
            } catch (_v0) {
              _v3 = {
                error: _v0
              };
            } finally {
              try {
                _v18 && !_v18.done && (_v4 = _v17.return) && _v4.call(_v17);
              } finally {
                if (_v3) throw _v3.error;
              }
            }
            try {
              for (var _v19 = _v6(this.currentState.enterEffects), _v20 = _v19.next(); !_v20.done; _v20 = _v19.next()) _v14 = _v20.value, this.notify({
                type: "invocationDispatched",
                invocation: _v14(this.currentContext)
              });
            } catch (_v0) {
              _v5 = {
                error: _v0
              };
            } finally {
              try {
                _v20 && !_v20.done && (_v6 = _v19.return) && _v6.call(_v19);
              } finally {
                if (_v5) throw _v5.error;
              }
            }
          }
        }, _v1;
      }(_v113),
      _v116 = function () {
        function _v0(_v0) {
          this.dependencies = _v0, this.instances = new Map(), this.handlers = new Map();
        }
        return _v0.prototype.on = function (_v0, _v1) {
          this.handlers.set(_v0, _v1);
        }, _v0.prototype.dispatch = function (_v0) {
          if ("CANCEL" !== _v0.type) {
            var _v1 = this.handlers.get(_v0.type);
            if (!_v1) throw Error("Unhandled invocation '".concat(_v0.type, "'"));
            var _v2 = _v1(_v0.payload, this.dependencies);
            _v0.managed && this.instances.set(_v0.type, _v2), _v2.start();
          } else if (this.instances.has(_v0.payload)) {
            var _v3 = this.instances.get(_v0.payload);
            null == _v3 || _v3.cancel(), this.instances.delete(_v0.payload);
          }
        }, _v0.prototype.dispose = function () {
          var _v0, _v1;
          try {
            for (var _v2 = _v6(this.instances.entries()), _v3 = _v2.next(); !_v3.done; _v3 = _v2.next()) {
              var _v4 = _v7(_v3.value, 2),
                _v5 = _v4[0];
              _v4[1].cancel(), this.instances.delete(_v5);
            }
          } catch (_v0) {
            _v0 = {
              error: _v0
            };
          } finally {
            try {
              _v3 && !_v3.done && (_v1 = _v2.return) && _v1.call(_v2);
            } finally {
              if (_v0) throw _v0.error;
            }
          }
        }, _v0;
      }();
    function _v117(_v0, _v1) {
      var _v2 = function () {
        for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
        return {
          type: _v0,
          payload: null == _v1 ? void 0 : _v1.apply(void 0, _v8([], _v7(_v0), !1))
        };
      };
      return _v2.type = _v0, _v2;
    }
    function _v118(_v0, _v1) {
      var _v2 = function () {
        for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
        return {
          type: _v0,
          payload: _v1.apply(void 0, _v8([], _v7(_v0), !1)),
          managed: !1
        };
      };
      return _v2.type = _v0, _v2;
    }
    function _v119(_v0, _v1) {
      var _v2 = function () {
        for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
        return {
          type: _v0,
          payload: _v1.apply(void 0, _v8([], _v7(_v0), !1)),
          managed: !0
        };
      };
      return _v2.type = _v0, _v2.cancel = {
        type: "CANCEL",
        payload: _v0,
        managed: !1
      }, _v2;
    }
    var _v120 = function (_v0) {
        function _v1() {
          var _v0 = this.constructor,
            _v1 = _v0.call(this, "The operation was aborted.") || this;
          return _v1.name = "AbortError", Object.setPrototypeOf(_v1, _v0.prototype), _v1;
        }
        return _v1(_v1, _v0), _v1;
      }(Error),
      _v121 = function (_v0) {
        function _v1() {
          var _v0 = null !== _v0 && _v0.apply(this, arguments) || this;
          return _v0._aborted = !1, _v0;
        }
        return _v1(_v1, _v0), Object.defineProperty(_v1.prototype, "aborted", {
          get: function () {
            return this._aborted;
          },
          enumerable: !1,
          configurable: !0
        }), _v1.prototype.throwIfAborted = function () {
          if (this._aborted) throw new _v120();
        }, _v1.prototype.abort = function () {
          this._aborted = !0, this.notify(new _v120());
        }, _v1;
      }(_v113),
      _v122 = function (_v0) {
        function _v1(_v0, _v1, _v2) {
          var _v3 = _v0.call(this, _v0, _v1) || this;
          return _v3.asyncFunction = _v2, _v3.abortSignal = new _v121(), _v3;
        }
        return _v1(_v1, _v0), _v1.prototype.start = function () {
          this.asyncFunction(this.payload, this.abortSignal, this.dependencies).catch(function (_v0) {});
        }, _v1.prototype.cancel = function () {
          this.abortSignal.abort();
        }, _v1;
      }(function (_v0, _v1) {
        this.payload = _v0, this.dependencies = _v1;
      }),
      _v123 = function (_v0) {
        return function (_v0, _v1) {
          return new _v122(_v0, _v1, _v0);
        };
      },
      _v124 = _v119("HANDSHAKE", function (_v0, _v1) {
        return {
          channels: _v0,
          groups: _v1
        };
      }),
      _v125 = _v119("RECEIVE_MESSAGES", function (_v0, _v1, _v2) {
        return {
          channels: _v0,
          groups: _v1,
          cursor: _v2
        };
      }),
      _v126 = _v118("EMIT_MESSAGES", function (_v0) {
        return _v0;
      }),
      _v127 = _v118("EMIT_STATUS", function (_v0) {
        return _v0;
      }),
      _v128 = _v119("RECEIVE_RECONNECT", function (_v0) {
        return _v0;
      }),
      _v129 = _v119("HANDSHAKE_RECONNECT", function (_v0) {
        return _v0;
      }),
      _v130 = _v117("SUBSCRIPTION_CHANGED", function (_v0, _v1) {
        return {
          channels: _v0,
          groups: _v1
        };
      }),
      _v131 = _v117("SUBSCRIPTION_RESTORED", function (_v0, _v1, _v2, _v3) {
        return {
          channels: _v0,
          groups: _v1,
          cursor: {
            timetoken: _v2,
            region: null != _v3 ? _v3 : 0
          }
        };
      }),
      _v132 = _v117("HANDSHAKE_SUCCESS", function (_v0) {
        return _v0;
      }),
      _v133 = _v117("HANDSHAKE_FAILURE", function (_v0) {
        return _v0;
      }),
      _v134 = _v117("HANDSHAKE_RECONNECT_SUCCESS", function (_v0) {
        return {
          cursor: _v0
        };
      }),
      _v135 = _v117("HANDSHAKE_RECONNECT_FAILURE", function (_v0) {
        return _v0;
      }),
      _v136 = _v117("HANDSHAKE_RECONNECT_GIVEUP", function (_v0) {
        return _v0;
      }),
      _v137 = _v117("RECEIVE_SUCCESS", function (_v0, _v1) {
        return {
          cursor: _v0,
          events: _v1
        };
      }),
      _v138 = _v117("RECEIVE_FAILURE", function (_v0) {
        return _v0;
      }),
      _v139 = _v117("RECEIVE_RECONNECT_SUCCESS", function (_v0, _v1) {
        return {
          cursor: _v0,
          events: _v1
        };
      }),
      _v140 = _v117("RECEIVE_RECONNECT_FAILURE", function (_v0) {
        return _v0;
      }),
      _v141 = _v117("RECEIVING_RECONNECT_GIVEUP", function (_v0) {
        return _v0;
      }),
      _v142 = _v117("DISCONNECT", function () {
        return {};
      }),
      _v143 = _v117("RECONNECT", function (_v0, _v1) {
        return {
          cursor: {
            timetoken: null != _v0 ? _v0 : "",
            region: null != _v1 ? _v1 : 0
          }
        };
      }),
      _v144 = _v117("UNSUBSCRIBE_ALL", function () {
        return {};
      }),
      _v145 = function (_v0) {
        function _v1(_v0, _v1) {
          var _v2 = _v0.call(this, _v1) || this;
          return _v2.on(_v124.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.handshake,
              _v4 = _v2.presenceState,
              _v5 = _v2.config;
            return _v4(_v2, void 0, void 0, function () {
              var _v0, _v1;
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    _v1.throwIfAborted(), _v0.label = 1;
                  case 1:
                    return _v0.trys.push([1, 3,, 4]), [4, _v3(_v2({
                      abortSignal: _v1,
                      channels: _v0.channels,
                      channelGroups: _v0.groups,
                      filterExpression: _v5.filterExpression
                    }, _v5.maintainPresenceState && {
                      state: _v4
                    }))];
                  case 2:
                    return _v0 = _v0.sent(), [2, _v0.transition(_v132(_v0))];
                  case 3:
                    return (_v1 = _v0.sent()) instanceof Error && "Aborted" === _v1.message ? [2] : _v1 instanceof _v53 ? [2, _v0.transition(_v133(_v1))] : [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          })), _v2.on(_v125.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.receiveMessages,
              _v4 = _v2.config;
            return _v4(_v2, void 0, void 0, function () {
              var _v0, _v1;
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    _v1.throwIfAborted(), _v0.label = 1;
                  case 1:
                    return _v0.trys.push([1, 3,, 4]), [4, _v3({
                      abortSignal: _v1,
                      channels: _v0.channels,
                      channelGroups: _v0.groups,
                      timetoken: _v0.cursor.timetoken,
                      region: _v0.cursor.region,
                      filterExpression: _v4.filterExpression
                    })];
                  case 2:
                    return _v0 = _v0.sent(), _v0.transition(_v137(_v0.metadata, _v0.messages)), [3, 4];
                  case 3:
                    return (_v1 = _v0.sent()) instanceof Error && "Aborted" === _v1.message ? [2] : _v1 instanceof _v53 && !_v1.aborted ? [2, _v0.transition(_v138(_v1))] : [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          })), _v2.on(_v126.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.emitMessages;
            return _v4(_v2, void 0, void 0, function () {
              return _v5(this, function (_v0) {
                return _v0.length > 0 && _v3(_v0), [2];
              });
            });
          })), _v2.on(_v127.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.emitStatus;
            return _v4(_v2, void 0, void 0, function () {
              return _v5(this, function (_v0) {
                return _v3(_v0), [2];
              });
            });
          })), _v2.on(_v128.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.receiveMessages,
              _v4 = _v2.delay,
              _v5 = _v2.config;
            return _v4(_v2, void 0, void 0, function () {
              var _v0, _v1;
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    return _v5.retryConfiguration && _v5.retryConfiguration.shouldRetry(_v0.reason, _v0.attempts) ? (_v1.throwIfAborted(), [4, _v4(_v5.retryConfiguration.getDelay(_v0.attempts, _v0.reason))]) : [3, 6];
                  case 1:
                    _v0.sent(), _v1.throwIfAborted(), _v0.label = 2;
                  case 2:
                    return _v0.trys.push([2, 4,, 5]), [4, _v3({
                      abortSignal: _v1,
                      channels: _v0.channels,
                      channelGroups: _v0.groups,
                      timetoken: _v0.cursor.timetoken,
                      region: _v0.cursor.region,
                      filterExpression: _v5.filterExpression
                    })];
                  case 3:
                    return _v0 = _v0.sent(), [2, _v0.transition(_v139(_v0.metadata, _v0.messages))];
                  case 4:
                    return (_v1 = _v0.sent()) instanceof Error && "Aborted" === _v1.message ? [2] : _v1 instanceof _v53 ? [2, _v0.transition(_v140(_v1))] : [3, 5];
                  case 5:
                    return [3, 7];
                  case 6:
                    return [2, _v0.transition(_v141(new _v53(_v5.retryConfiguration.getGiveupReason(_v0.reason, _v0.attempts))))];
                  case 7:
                    return [2];
                }
              });
            });
          })), _v2.on(_v129.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.handshake,
              _v4 = _v2.delay,
              _v5 = _v2.presenceState,
              _v6 = _v2.config;
            return _v4(_v2, void 0, void 0, function () {
              var _v0, _v1;
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    return _v6.retryConfiguration && _v6.retryConfiguration.shouldRetry(_v0.reason, _v0.attempts) ? (_v1.throwIfAborted(), [4, _v4(_v6.retryConfiguration.getDelay(_v0.attempts, _v0.reason))]) : [3, 6];
                  case 1:
                    _v0.sent(), _v1.throwIfAborted(), _v0.label = 2;
                  case 2:
                    return _v0.trys.push([2, 4,, 5]), [4, _v3(_v2({
                      abortSignal: _v1,
                      channels: _v0.channels,
                      channelGroups: _v0.groups,
                      filterExpression: _v6.filterExpression
                    }, _v6.maintainPresenceState && {
                      state: _v5
                    }))];
                  case 3:
                    return _v0 = _v0.sent(), [2, _v0.transition(_v134(_v0))];
                  case 4:
                    return (_v1 = _v0.sent()) instanceof Error && "Aborted" === _v1.message ? [2] : _v1 instanceof _v53 ? [2, _v0.transition(_v135(_v1))] : [3, 5];
                  case 5:
                    return [3, 7];
                  case 6:
                    return [2, _v0.transition(_v136(new _v53(_v6.retryConfiguration.getGiveupReason(_v0.reason, _v0.attempts))))];
                  case 7:
                    return [2];
                }
              });
            });
          })), _v2;
        }
        return _v1(_v1, _v0), _v1;
      }(_v116),
      _v146 = new _v114("HANDSHAKE_FAILED");
    _v146.on(_v130.type, function (_v0, _v1) {
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: _v0.cursor
      });
    }), _v146.on(_v143.type, function (_v0, _v1) {
      return _v153.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v1.payload.cursor || _v0.cursor
      });
    }), _v146.on(_v131.type, function (_v0, _v1) {
      var _v2, _v3;
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken,
          region: _v1.payload.cursor.region ? _v1.payload.cursor.region : null != (_v3 = null == (_v2 = null == _v0 ? void 0 : _v0.cursor) ? void 0 : _v2.region) ? _v3 : 0
        }
      });
    }), _v146.on(_v144.type, function (_v0) {
      return _v154.with();
    });
    var _v147 = new _v114("HANDSHAKE_STOPPED");
    _v147.on(_v130.type, function (_v0, _v1) {
      return _v147.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: _v0.cursor
      });
    }), _v147.on(_v143.type, function (_v0, _v1) {
      return _v153.with(_v2(_v2({}, _v0), {
        cursor: _v1.payload.cursor || _v0.cursor
      }));
    }), _v147.on(_v131.type, function (_v0, _v1) {
      var _v2;
      return _v147.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken,
          region: _v1.payload.cursor.region || (null == (_v2 = null == _v0 ? void 0 : _v0.cursor) ? void 0 : _v2.region) || 0
        }
      });
    }), _v147.on(_v144.type, function (_v0) {
      return _v154.with();
    });
    var _v148 = new _v114("RECEIVE_FAILED");
    _v148.on(_v143.type, function (_v0, _v1) {
      var _v2;
      return _v153.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken ? null == (_v2 = _v1.payload.cursor) ? void 0 : _v2.timetoken : _v0.cursor.timetoken,
          region: _v1.payload.cursor.region || _v0.cursor.region
        }
      });
    }), _v148.on(_v130.type, function (_v0, _v1) {
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: _v0.cursor
      });
    }), _v148.on(_v131.type, function (_v0, _v1) {
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken,
          region: _v1.payload.cursor.region || _v0.cursor.region
        }
      });
    }), _v148.on(_v144.type, function (_v0) {
      return _v154.with(void 0);
    });
    var _v149 = new _v114("RECEIVE_STOPPED");
    _v149.on(_v130.type, function (_v0, _v1) {
      return _v149.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: _v0.cursor
      });
    }), _v149.on(_v131.type, function (_v0, _v1) {
      return _v149.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken,
          region: _v1.payload.cursor.region || _v0.cursor.region
        }
      });
    }), _v149.on(_v143.type, function (_v0, _v1) {
      var _v2;
      return _v153.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken ? null == (_v2 = _v1.payload.cursor) ? void 0 : _v2.timetoken : _v0.cursor.timetoken,
          region: _v1.payload.cursor.region || _v0.cursor.region
        }
      });
    }), _v149.on(_v144.type, function () {
      return _v154.with(void 0);
    });
    var _v150 = new _v114("RECEIVE_RECONNECTING");
    _v150.onEnter(function (_v0) {
      return _v128(_v0);
    }), _v150.onExit(function () {
      return _v128.cancel;
    }), _v150.on(_v139.type, function (_v0, _v1) {
      return _v151.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v1.payload.cursor
      }, [_v126(_v1.payload.events)]);
    }), _v150.on(_v140.type, function (_v0, _v1) {
      return _v150.with(_v2(_v2({}, _v0), {
        attempts: _v0.attempts + 1,
        reason: _v1.payload
      }));
    }), _v150.on(_v141.type, function (_v0, _v1) {
      var _v2;
      return _v148.with({
        groups: _v0.groups,
        channels: _v0.channels,
        cursor: _v0.cursor,
        reason: _v1.payload
      }, [_v127({
        category: _v40.PNDisconnectedUnexpectedlyCategory,
        error: null == (_v2 = _v1.payload) ? void 0 : _v2.message
      })]);
    }), _v150.on(_v142.type, function (_v0) {
      return _v149.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v0.cursor
      }, [_v127({
        category: _v40.PNDisconnectedCategory
      })]);
    }), _v150.on(_v131.type, function (_v0, _v1) {
      return _v151.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken,
          region: _v1.payload.cursor.region || _v0.cursor.region
        }
      });
    }), _v150.on(_v130.type, function (_v0, _v1) {
      return _v151.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: _v0.cursor
      });
    }), _v150.on(_v144.type, function (_v0) {
      return _v154.with(void 0, [_v127({
        category: _v40.PNDisconnectedCategory
      })]);
    });
    var _v151 = new _v114("RECEIVING");
    _v151.onEnter(function (_v0) {
      return _v125(_v0.channels, _v0.groups, _v0.cursor);
    }), _v151.onExit(function () {
      return _v125.cancel;
    }), _v151.on(_v137.type, function (_v0, _v1) {
      return _v151.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v1.payload.cursor
      }, [_v126(_v1.payload.events)]);
    }), _v151.on(_v130.type, function (_v0, _v1) {
      return 0 === _v1.payload.channels.length && 0 === _v1.payload.groups.length ? _v154.with(void 0) : _v151.with({
        cursor: _v0.cursor,
        channels: _v1.payload.channels,
        groups: _v1.payload.groups
      });
    }), _v151.on(_v131.type, function (_v0, _v1) {
      return 0 === _v1.payload.channels.length && 0 === _v1.payload.groups.length ? _v154.with(void 0) : _v151.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken,
          region: _v1.payload.cursor.region || _v0.cursor.region
        }
      });
    }), _v151.on(_v138.type, function (_v0, _v1) {
      return _v150.with(_v2(_v2({}, _v0), {
        attempts: 0,
        reason: _v1.payload
      }));
    }), _v151.on(_v142.type, function (_v0) {
      return _v149.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v0.cursor
      }, [_v127({
        category: _v40.PNDisconnectedCategory
      })]);
    }), _v151.on(_v144.type, function (_v0) {
      return _v154.with(void 0, [_v127({
        category: _v40.PNDisconnectedCategory
      })]);
    });
    var _v152 = new _v114("HANDSHAKE_RECONNECTING");
    _v152.onEnter(function (_v0) {
      return _v129(_v0);
    }), _v152.onExit(function () {
      return _v129.cancel;
    }), _v152.on(_v134.type, function (_v0, _v1) {
      var _v2,
        _v3,
        _v4 = {
          timetoken: (null == (_v2 = _v0.cursor) ? void 0 : _v2.timetoken) ? null == (_v3 = _v0.cursor) ? void 0 : _v3.timetoken : _v1.payload.cursor.timetoken,
          region: _v1.payload.cursor.region
        };
      return _v151.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v4
      }, [_v127({
        category: _v40.PNConnectedCategory
      })]);
    }), _v152.on(_v135.type, function (_v0, _v1) {
      return _v152.with(_v2(_v2({}, _v0), {
        attempts: _v0.attempts + 1,
        reason: _v1.payload
      }));
    }), _v152.on(_v136.type, function (_v0, _v1) {
      var _v2;
      return _v146.with({
        groups: _v0.groups,
        channels: _v0.channels,
        cursor: _v0.cursor,
        reason: _v1.payload
      }, [_v127({
        category: _v40.PNConnectionErrorCategory,
        error: null == (_v2 = _v1.payload) ? void 0 : _v2.message
      })]);
    }), _v152.on(_v142.type, function (_v0) {
      return _v147.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v0.cursor
      });
    }), _v152.on(_v130.type, function (_v0, _v1) {
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: _v0.cursor
      });
    }), _v152.on(_v131.type, function (_v0, _v1) {
      var _v2, _v3;
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken,
          region: (null == (_v2 = _v1.payload.cursor) ? void 0 : _v2.region) || (null == (_v3 = null == _v0 ? void 0 : _v0.cursor) ? void 0 : _v3.region) || 0
        }
      });
    }), _v152.on(_v144.type, function (_v0) {
      return _v154.with(void 0);
    });
    var _v153 = new _v114("HANDSHAKING");
    _v153.onEnter(function (_v0) {
      return _v124(_v0.channels, _v0.groups);
    }), _v153.onExit(function () {
      return _v124.cancel;
    }), _v153.on(_v130.type, function (_v0, _v1) {
      return 0 === _v1.payload.channels.length && 0 === _v1.payload.groups.length ? _v154.with(void 0) : _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: _v0.cursor
      });
    }), _v153.on(_v132.type, function (_v0, _v1) {
      var _v2, _v3;
      return _v151.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: {
          timetoken: (null == (_v2 = null == _v0 ? void 0 : _v0.cursor) ? void 0 : _v2.timetoken) ? null == (_v3 = null == _v0 ? void 0 : _v0.cursor) ? void 0 : _v3.timetoken : _v1.payload.timetoken,
          region: _v1.payload.region
        }
      }, [_v127({
        category: _v40.PNConnectedCategory
      })]);
    }), _v153.on(_v133.type, function (_v0, _v1) {
      return _v152.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v0.cursor,
        attempts: 0,
        reason: _v1.payload
      });
    }), _v153.on(_v142.type, function (_v0) {
      return _v147.with({
        channels: _v0.channels,
        groups: _v0.groups,
        cursor: _v0.cursor
      });
    }), _v153.on(_v131.type, function (_v0, _v1) {
      var _v2;
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: {
          timetoken: _v1.payload.cursor.timetoken,
          region: _v1.payload.cursor.region || (null == (_v2 = null == _v0 ? void 0 : _v0.cursor) ? void 0 : _v2.region) || 0
        }
      });
    }), _v153.on(_v144.type, function (_v0) {
      return _v154.with();
    });
    var _v154 = new _v114("UNSUBSCRIBED");
    _v154.on(_v130.type, function (_v0, _v1) {
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups
      });
    }), _v154.on(_v131.type, function (_v0, _v1) {
      return _v153.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups,
        cursor: _v1.payload.cursor
      });
    });
    var _v155 = function () {
        function _v0(_v0) {
          var _v1 = this;
          this.engine = new _v115(), this.channels = [], this.groups = [], this.dependencies = _v0, this.dispatcher = new _v145(this.engine, _v0), this._unsubscribeEngine = this.engine.subscribe(function (_v0) {
            "invocationDispatched" === _v0.type && _v1.dispatcher.dispatch(_v0.invocation);
          }), this.engine.start(_v154, void 0);
        }
        return Object.defineProperty(_v0.prototype, "_engine", {
          get: function () {
            return this.engine;
          },
          enumerable: !1,
          configurable: !0
        }), _v0.prototype.subscribe = function (_v0) {
          var _v1 = this,
            _v2 = _v0.channels,
            _v3 = _v0.channelGroups,
            _v4 = _v0.timetoken,
            _v5 = _v0.withPresence;
          this.channels = _v8(_v8([], _v7(this.channels), !1), _v7(null != _v2 ? _v2 : []), !1), this.groups = _v8(_v8([], _v7(this.groups), !1), _v7(null != _v3 ? _v3 : []), !1), _v5 && (this.channels.map(function (_v0) {
            return _v1.channels.push("".concat(_v0, "-pnpres"));
          }), this.groups.map(function (_v0) {
            return _v1.groups.push("".concat(_v0, "-pnpres"));
          })), _v4 ? this.engine.transition(_v131(Array.from(new Set(_v8(_v8([], _v7(this.channels), !1), _v7(null != _v2 ? _v2 : []), !1))), Array.from(new Set(_v8(_v8([], _v7(this.groups), !1), _v7(null != _v3 ? _v3 : []), !1))), _v4)) : this.engine.transition(_v130(Array.from(new Set(_v8(_v8([], _v7(this.channels), !1), _v7(null != _v2 ? _v2 : []), !1))), Array.from(new Set(_v8(_v8([], _v7(this.groups), !1), _v7(null != _v3 ? _v3 : []), !1))))), this.dependencies.join && this.dependencies.join({
            channels: Array.from(new Set(this.channels.filter(function (_v0) {
              return !_v0.endsWith("-pnpres");
            }))),
            groups: Array.from(new Set(this.groups.filter(function (_v0) {
              return !_v0.endsWith("-pnpres");
            })))
          });
        }, _v0.prototype.unsubscribe = function (_v0) {
          var _v1 = this,
            _v2 = _v0.channels,
            _v3 = void 0 === _v2 ? [] : _v2,
            _v4 = _v0.channelGroups,
            _v5 = void 0 === _v4 ? [] : _v4,
            _v6 = _v52.removeSingleOccurance(this.channels, _v8(_v8([], _v7(_v3), !1), _v7(_v3.map(function (_v0) {
              return "".concat(_v0, "-pnpres");
            })), !1)),
            _v7 = _v52.removeSingleOccurance(this.groups, _v8(_v8([], _v7(_v5), !1), _v7(_v5.map(function (_v0) {
              return "".concat(_v0, "-pnpres");
            })), !1));
          if (new Set(this.channels).size !== new Set(_v6).size || new Set(this.groups).size !== new Set(_v7).size) {
            var _v8 = _v52.findUniqueCommonElements(this.channels, _v3),
              _v9 = _v52.findUniqueCommonElements(this.groups, _v5);
            this.dependencies.presenceState && (null == _v8 || _v8.forEach(function (_v0) {
              return delete _v1.dependencies.presenceState[_v0];
            }), null == _v9 || _v9.forEach(function (_v0) {
              return delete _v1.dependencies.presenceState[_v0];
            })), this.channels = _v6, this.groups = _v7, this.engine.transition(_v130(Array.from(new Set(this.channels.slice(0))), Array.from(new Set(this.groups.slice(0))))), this.dependencies.leave && this.dependencies.leave({
              channels: _v8.slice(0),
              groups: _v9.slice(0)
            });
          }
        }, _v0.prototype.unsubscribeAll = function () {
          this.channels = [], this.groups = [], this.dependencies.presenceState && (this.dependencies.presenceState = {}), this.engine.transition(_v130(this.channels.slice(0), this.groups.slice(0))), this.dependencies.leaveAll && this.dependencies.leaveAll();
        }, _v0.prototype.reconnect = function (_v0) {
          var _v1 = _v0.timetoken,
            _v2 = _v0.region;
          this.engine.transition(_v143(_v1, _v2));
        }, _v0.prototype.disconnect = function () {
          this.engine.transition(_v142()), this.dependencies.leaveAll && this.dependencies.leaveAll();
        }, _v0.prototype.getSubscribedChannels = function () {
          return Array.from(new Set(this.channels));
        }, _v0.prototype.getSubscribedChannelGroups = function () {
          return Array.from(new Set(this.groups));
        }, _v0.prototype.dispose = function () {
          this.disconnect(), this._unsubscribeEngine(), this.dispatcher.dispose();
        }, _v0;
      }(),
      _v156 = _v117("RECONNECT", function () {
        return {};
      }),
      _v157 = _v117("DISCONNECT", function () {
        return {};
      }),
      _v158 = _v117("JOINED", function (_v0, _v1) {
        return {
          channels: _v0,
          groups: _v1
        };
      }),
      _v159 = _v117("LEFT", function (_v0, _v1) {
        return {
          channels: _v0,
          groups: _v1
        };
      }),
      _v160 = _v117("LEFT_ALL", function () {
        return {};
      }),
      _v161 = _v117("HEARTBEAT_SUCCESS", function (_v0) {
        return {
          statusCode: _v0
        };
      }),
      _v162 = _v117("HEARTBEAT_FAILURE", function (_v0) {
        return _v0;
      }),
      _v163 = _v117("HEARTBEAT_GIVEUP", function () {
        return {};
      }),
      _v164 = _v117("TIMES_UP", function () {
        return {};
      }),
      _v165 = _v118("HEARTBEAT", function (_v0, _v1) {
        return {
          channels: _v0,
          groups: _v1
        };
      }),
      _v166 = _v118("LEAVE", function (_v0, _v1) {
        return {
          channels: _v0,
          groups: _v1
        };
      }),
      _v167 = _v118("EMIT_STATUS", function (_v0) {
        return _v0;
      }),
      _v168 = _v119("WAIT", function () {
        return {};
      }),
      _v169 = _v119("DELAYED_HEARTBEAT", function (_v0) {
        return _v0;
      }),
      _v170 = function (_v0) {
        function _v1(_v0, _v1) {
          var _v2 = _v0.call(this, _v1) || this;
          return _v2.on(_v165.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.heartbeat,
              _v4 = _v2.presenceState,
              _v5 = _v2.config;
            return _v4(_v2, void 0, void 0, function () {
              var _v0;
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    return _v0.trys.push([0, 2,, 3]), [4, _v3(_v2({
                      channels: _v0.channels,
                      channelGroups: _v0.groups
                    }, _v5.maintainPresenceState && {
                      state: _v4
                    }))];
                  case 1:
                    return _v0.sent(), _v0.transition(_v161(200)), [3, 3];
                  case 2:
                    return (_v0 = _v0.sent()) instanceof _v53 ? [2, _v0.transition(_v162(_v0))] : [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          })), _v2.on(_v166.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.leave,
              _v4 = _v2.config;
            return _v4(_v2, void 0, void 0, function () {
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    if (_v4.suppressLeaveEvents) return [3, 4];
                    _v0.label = 1;
                  case 1:
                    return _v0.trys.push([1, 3,, 4]), [4, _v3({
                      channels: _v0.channels,
                      channelGroups: _v0.groups
                    })];
                  case 2:
                  case 3:
                    return _v0.sent(), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          })), _v2.on(_v168.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.heartbeatDelay;
            return _v4(_v2, void 0, void 0, function () {
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    return _v1.throwIfAborted(), [4, _v3()];
                  case 1:
                    return _v0.sent(), _v1.throwIfAborted(), [2, _v0.transition(_v164())];
                }
              });
            });
          })), _v2.on(_v169.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.heartbeat,
              _v4 = _v2.retryDelay,
              _v5 = _v2.presenceState,
              _v6 = _v2.config;
            return _v4(_v2, void 0, void 0, function () {
              var _v0;
              return _v5(this, function (_v0) {
                switch (_v0.label) {
                  case 0:
                    return _v6.retryConfiguration && _v6.retryConfiguration.shouldRetry(_v0.reason, _v0.attempts) ? (_v1.throwIfAborted(), [4, _v4(_v6.retryConfiguration.getDelay(_v0.attempts, _v0.reason))]) : [3, 6];
                  case 1:
                    _v0.sent(), _v1.throwIfAborted(), _v0.label = 2;
                  case 2:
                    return _v0.trys.push([2, 4,, 5]), [4, _v3(_v2({
                      channels: _v0.channels,
                      channelGroups: _v0.groups
                    }, _v6.maintainPresenceState && {
                      state: _v5
                    }))];
                  case 3:
                    return _v0.sent(), [2, _v0.transition(_v161(200))];
                  case 4:
                    return (_v0 = _v0.sent()) instanceof Error && "Aborted" === _v0.message ? [2] : _v0 instanceof _v53 ? [2, _v0.transition(_v162(_v0))] : [3, 5];
                  case 5:
                    return [3, 7];
                  case 6:
                    return [2, _v0.transition(_v163())];
                  case 7:
                    return [2];
                }
              });
            });
          })), _v2.on(_v167.type, _v123(function (_v0, _v1, _v2) {
            var _v3 = _v2.emitStatus,
              _v4 = _v2.config;
            return _v4(_v2, void 0, void 0, function () {
              var _v0;
              return _v5(this, function (_v0) {
                return _v4.announceFailedHeartbeats && !0 === (null == (_v0 = null == _v0 ? void 0 : _v0.status) ? void 0 : _v0.error) ? _v3(_v0.status) : _v4.announceSuccessfulHeartbeats && 200 === _v0.statusCode && _v3(_v2(_v2({}, _v0), {
                  operation: _v42.PNHeartbeatOperation,
                  error: !1
                })), [2];
              });
            });
          })), _v2;
        }
        return _v1(_v1, _v0), _v1;
      }(_v116),
      _v171 = new _v114("HEARTBEAT_STOPPED");
    _v171.on(_v158.type, function (_v0, _v1) {
      return _v171.with({
        channels: _v8(_v8([], _v7(_v0.channels), !1), _v7(_v1.payload.channels), !1),
        groups: _v8(_v8([], _v7(_v0.groups), !1), _v7(_v1.payload.groups), !1)
      });
    }), _v171.on(_v159.type, function (_v0, _v1) {
      return _v171.with({
        channels: _v0.channels.filter(function (_v0) {
          return !_v1.payload.channels.includes(_v0);
        }),
        groups: _v0.groups.filter(function (_v0) {
          return !_v1.payload.groups.includes(_v0);
        })
      });
    }), _v171.on(_v156.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v0.channels,
        groups: _v0.groups
      });
    }), _v171.on(_v160.type, function (_v0, _v1) {
      return _v176.with(void 0);
    });
    var _v172 = new _v114("HEARTBEAT_COOLDOWN");
    _v172.onEnter(function () {
      return _v168();
    }), _v172.onExit(function () {
      return _v168.cancel;
    }), _v172.on(_v164.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v0.channels,
        groups: _v0.groups
      });
    }), _v172.on(_v158.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v8(_v8([], _v7(_v0.channels), !1), _v7(_v1.payload.channels), !1),
        groups: _v8(_v8([], _v7(_v0.groups), !1), _v7(_v1.payload.groups), !1)
      });
    }), _v172.on(_v159.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v0.channels.filter(function (_v0) {
          return !_v1.payload.channels.includes(_v0);
        }),
        groups: _v0.groups.filter(function (_v0) {
          return !_v1.payload.groups.includes(_v0);
        })
      }, [_v166(_v1.payload.channels, _v1.payload.groups)]);
    }), _v172.on(_v157.type, function (_v0) {
      return _v171.with({
        channels: _v0.channels,
        groups: _v0.groups
      }, [_v166(_v0.channels, _v0.groups)]);
    }), _v172.on(_v160.type, function (_v0, _v1) {
      return _v176.with(void 0, [_v166(_v0.channels, _v0.groups)]);
    });
    var _v173 = new _v114("HEARTBEAT_FAILED");
    _v173.on(_v158.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v8(_v8([], _v7(_v0.channels), !1), _v7(_v1.payload.channels), !1),
        groups: _v8(_v8([], _v7(_v0.groups), !1), _v7(_v1.payload.groups), !1)
      });
    }), _v173.on(_v159.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v0.channels.filter(function (_v0) {
          return !_v1.payload.channels.includes(_v0);
        }),
        groups: _v0.groups.filter(function (_v0) {
          return !_v1.payload.groups.includes(_v0);
        })
      }, [_v166(_v1.payload.channels, _v1.payload.groups)]);
    }), _v173.on(_v156.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v0.channels,
        groups: _v0.groups
      });
    }), _v173.on(_v157.type, function (_v0, _v1) {
      return _v171.with({
        channels: _v0.channels,
        groups: _v0.groups
      }, [_v166(_v0.channels, _v0.groups)]);
    }), _v173.on(_v160.type, function (_v0, _v1) {
      return _v176.with(void 0, [_v166(_v0.channels, _v0.groups)]);
    });
    var _v174 = new _v114("HEARBEAT_RECONNECTING");
    _v174.onEnter(function (_v0) {
      return _v169(_v0);
    }), _v174.onExit(function () {
      return _v169.cancel;
    }), _v174.on(_v158.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v8(_v8([], _v7(_v0.channels), !1), _v7(_v1.payload.channels), !1),
        groups: _v8(_v8([], _v7(_v0.groups), !1), _v7(_v1.payload.groups), !1)
      });
    }), _v174.on(_v159.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v0.channels.filter(function (_v0) {
          return !_v1.payload.channels.includes(_v0);
        }),
        groups: _v0.groups.filter(function (_v0) {
          return !_v1.payload.groups.includes(_v0);
        })
      }, [_v166(_v1.payload.channels, _v1.payload.groups)]);
    }), _v174.on(_v157.type, function (_v0, _v1) {
      _v171.with({
        channels: _v0.channels,
        groups: _v0.groups
      }, [_v166(_v0.channels, _v0.groups)]);
    }), _v174.on(_v161.type, function (_v0, _v1) {
      return _v172.with({
        channels: _v0.channels,
        groups: _v0.groups
      });
    }), _v174.on(_v162.type, function (_v0, _v1) {
      return _v174.with(_v2(_v2({}, _v0), {
        attempts: _v0.attempts + 1,
        reason: _v1.payload
      }));
    }), _v174.on(_v163.type, function (_v0, _v1) {
      return _v173.with({
        channels: _v0.channels,
        groups: _v0.groups
      });
    }), _v174.on(_v160.type, function (_v0, _v1) {
      return _v176.with(void 0, [_v166(_v0.channels, _v0.groups)]);
    });
    var _v175 = new _v114("HEARTBEATING");
    _v175.onEnter(function (_v0) {
      return _v165(_v0.channels, _v0.groups);
    }), _v175.on(_v161.type, function (_v0, _v1) {
      return _v172.with({
        channels: _v0.channels,
        groups: _v0.groups
      });
    }), _v175.on(_v158.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v8(_v8([], _v7(_v0.channels), !1), _v7(_v1.payload.channels), !1),
        groups: _v8(_v8([], _v7(_v0.groups), !1), _v7(_v1.payload.groups), !1)
      });
    }), _v175.on(_v159.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v0.channels.filter(function (_v0) {
          return !_v1.payload.channels.includes(_v0);
        }),
        groups: _v0.groups.filter(function (_v0) {
          return !_v1.payload.groups.includes(_v0);
        })
      }, [_v166(_v1.payload.channels, _v1.payload.groups)]);
    }), _v175.on(_v162.type, function (_v0, _v1) {
      return _v174.with(_v2(_v2({}, _v0), {
        attempts: 0,
        reason: _v1.payload
      }));
    }), _v175.on(_v157.type, function (_v0) {
      return _v171.with({
        channels: _v0.channels,
        groups: _v0.groups
      }, [_v166(_v0.channels, _v0.groups)]);
    }), _v175.on(_v160.type, function (_v0, _v1) {
      return _v176.with(void 0, [_v166(_v0.channels, _v0.groups)]);
    });
    var _v176 = new _v114("HEARTBEAT_INACTIVE");
    _v176.on(_v158.type, function (_v0, _v1) {
      return _v175.with({
        channels: _v1.payload.channels,
        groups: _v1.payload.groups
      });
    });
    var _v177 = function () {
        function _v0(_v0) {
          var _v1 = this;
          this.engine = new _v115(), this.channels = [], this.groups = [], this.dispatcher = new _v170(this.engine, _v0), this.dependencies = _v0, this._unsubscribeEngine = this.engine.subscribe(function (_v0) {
            "invocationDispatched" === _v0.type && _v1.dispatcher.dispatch(_v0.invocation);
          }), this.engine.start(_v176, void 0);
        }
        return Object.defineProperty(_v0.prototype, "_engine", {
          get: function () {
            return this.engine;
          },
          enumerable: !1,
          configurable: !0
        }), _v0.prototype.join = function (_v0) {
          var _v1 = _v0.channels,
            _v2 = _v0.groups;
          this.channels = _v8(_v8([], _v7(this.channels), !1), _v7(null != _v1 ? _v1 : []), !1), this.groups = _v8(_v8([], _v7(this.groups), !1), _v7(null != _v2 ? _v2 : []), !1), this.engine.transition(_v158(this.channels.slice(0), this.groups.slice(0)));
        }, _v0.prototype.leave = function (_v0) {
          var _v1 = this,
            _v2 = _v0.channels,
            _v3 = _v0.groups;
          this.dependencies.presenceState && (null == _v2 || _v2.forEach(function (_v0) {
            return delete _v1.dependencies.presenceState[_v0];
          }), null == _v3 || _v3.forEach(function (_v0) {
            return delete _v1.dependencies.presenceState[_v0];
          })), this.engine.transition(_v159(null != _v2 ? _v2 : [], null != _v3 ? _v3 : []));
        }, _v0.prototype.leaveAll = function () {
          this.engine.transition(_v160());
        }, _v0.prototype.dispose = function () {
          this._unsubscribeEngine(), this.dispatcher.dispose();
        }, _v0;
      }(),
      _v178 = function () {
        function _v0() {}
        return _v0.LinearRetryPolicy = function (_v0) {
          return {
            delay: _v0.delay,
            maximumRetry: _v0.maximumRetry,
            shouldRetry: function (_v0, _v1) {
              var _v2;
              return 403 !== (null == (_v2 = null == _v0 ? void 0 : _v0.status) ? void 0 : _v2.statusCode) && this.maximumRetry > _v1;
            },
            getDelay: function (_v0, _v1) {
              var _v2;
              return 0 * ((null != (_v2 = _v1.retryAfter) ? _v2 : this.delay) + Math.random());
            },
            getGiveupReason: function (_v0, _v1) {
              var _v2;
              return this.maximumRetry <= _v1 ? "retry attempts exhaused." : 403 === (null == (_v2 = null == _v0 ? void 0 : _v0.status) ? void 0 : _v2.statusCode) ? "forbidden operation." : "unknown error";
            }
          };
        }, _v0.ExponentialRetryPolicy = function (_v0) {
          return {
            minimumDelay: _v0.minimumDelay,
            maximumDelay: _v0.maximumDelay,
            maximumRetry: _v0.maximumRetry,
            shouldRetry: function (_v0, _v1) {
              var _v2;
              return 403 !== (null == (_v2 = null == _v0 ? void 0 : _v0.status) ? void 0 : _v2.statusCode) && this.maximumRetry > _v1;
            },
            getDelay: function (_v0, _v1) {
              var _v2;
              return 0 * ((null != (_v2 = _v1.retryAfter) ? _v2 : Math.min(Math.pow(2, _v0), this.maximumDelay)) + Math.random());
            },
            getGiveupReason: function (_v0, _v1) {
              var _v2;
              return this.maximumRetry <= _v1 ? "retry attempts exhaused." : 403 === (null == (_v2 = null == _v0 ? void 0 : _v0.status) ? void 0 : _v2.statusCode) ? "forbidden operation." : "unknown error";
            }
          };
        }, _v0;
      }(),
      _v179 = function () {
        function _v0(_v0) {
          var _v1 = _v0.modules,
            _v2 = _v0.listenerManager,
            _v3 = _v0.getFileUrl;
          this.modules = _v1, this.listenerManager = _v2, this.getFileUrl = _v3, this._channelListenerMap = new Map(), this._groupListenerMap = new Map(), _v1.cryptoModule && (this._decoder = new TextDecoder());
        }
        return _v0.prototype.emitEvent = function (_v0) {
          var _v1,
            _v2 = _v0.channel,
            _v3 = _v0.publishMetaData,
            _v4 = _v0.subscriptionMatch;
          if (_v2 === _v4 && (_v4 = null), _v0.channel.endsWith("-pnpres")) {
            var _v5 = {
              channel: null,
              subscription: null
            };
            _v2 && (_v5.channel = _v2.substring(0, _v2.lastIndexOf("-pnpres"))), _v4 && (_v5.subscription = _v4.substring(0, _v4.lastIndexOf("-pnpres"))), _v5.action = _v0.payload.action, _v5.state = _v0.payload.data, _v5.timetoken = _v3.timetoken, _v5.occupancy = _v0.payload.occupancy, _v5.uuid = _v0.payload.uuid, _v5.timestamp = _v0.payload.timestamp, _v0.payload.join && (_v5.join = _v0.payload.join), _v0.payload.leave && (_v5.leave = _v0.payload.leave), _v0.payload.timeout && (_v5.timeout = _v0.payload.timeout), _v5.actualChannel = null != _v4 ? _v2 : null, _v5.subscribedChannel = null != _v4 ? _v4 : _v2, this.listenerManager.announcePresence(_v5), this._announce("presence", _v5, _v5.channel, _v5.subscription);
          } else if (1 === _v0.messageType) (_v5 = {
            channel: null,
            subscription: null
          }).channel = _v2, _v5.subscription = _v4, _v5.timetoken = _v3.timetoken, _v5.publisher = _v0.issuingClientId, _v0.userMetadata && (_v5.userMetadata = _v0.userMetadata), _v5.message = _v0.payload, this.listenerManager.announceSignal(_v5), this._announce("signal", _v5, _v5.channel, _v5.subscription);else if (2 === _v0.messageType) {
            if ((_v5 = {
              channel: null,
              subscription: null
            }).channel = _v2, _v5.subscription = _v4, _v5.timetoken = _v3.timetoken, _v5.publisher = _v0.issuingClientId, _v0.userMetadata && (_v5.userMetadata = _v0.userMetadata), _v5.message = {
              event: _v0.payload.event,
              type: _v0.payload.type,
              data: _v0.payload.data
            }, this.listenerManager.announceObjects(_v5), this._announce("objects", _v5, _v5.channel, _v5.subscription), "uuid" === _v0.payload.type) {
              var _v6 = this._renameChannelField(_v5),
                _v7 = _v2(_v2({}, _v6), {
                  message: _v2(_v2({}, _v6.message), {
                    event: this._renameEvent(_v6.message.event),
                    type: "user"
                  })
                });
              this.listenerManager.announceUser(_v7), this._announce("user", _v7, _v5.channel, _v5.subscription);
            } else if ("channel" === _v0.payload.type) {
              _v6 = this._renameChannelField(_v5);
              var _v8 = _v2(_v2({}, _v6), {
                message: _v2(_v2({}, _v6.message), {
                  event: this._renameEvent(_v6.message.event),
                  type: "space"
                })
              });
              this.listenerManager.announceSpace(_v8), this._announce("space", _v8, _v5.channel, _v5.subscription);
            } else if ("membership" === _v0.payload.type) {
              var _v9 = (_v6 = this._renameChannelField(_v5)).message.data,
                _v10 = _v9.uuid,
                _v11 = _v9.channel,
                _v12 = _v3(_v9, ["uuid", "channel"]);
              _v12.user = _v10, _v12.space = _v11;
              var _v13 = _v2(_v2({}, _v6), {
                message: _v2(_v2({}, _v6.message), {
                  event: this._renameEvent(_v6.message.event),
                  data: _v12
                })
              });
              this.listenerManager.announceMembership(_v13), this._announce("membership", _v13, _v5.channel, _v5.subscription);
            }
          } else if (3 === _v0.messageType) (_v5 = {}).channel = _v2, _v5.subscription = _v4, _v5.timetoken = _v3.timetoken, _v5.publisher = _v0.issuingClientId, _v5.data = {
            messageTimetoken: _v0.payload.data.messageTimetoken,
            actionTimetoken: _v0.payload.data.actionTimetoken,
            type: _v0.payload.data.type,
            uuid: _v0.issuingClientId,
            value: _v0.payload.data.value
          }, _v5.event = _v0.payload.event, this.listenerManager.announceMessageAction(_v5), this._announce("messageAction", _v5, _v5.channel, _v5.subscription);else if (4 === _v0.messageType) {
            (_v5 = {}).channel = _v2, _v5.subscription = _v4, _v5.timetoken = _v3.timetoken, _v5.publisher = _v0.issuingClientId;
            var _v14 = _v0.payload;
            if (this.modules.cryptoModule) {
              var _v15 = void 0;
              try {
                _v15 = (_v1 = this.modules.cryptoModule.decrypt(_v0.payload)) instanceof ArrayBuffer ? JSON.parse(this._decoder.decode(_v1)) : _v1;
              } catch (_v0) {
                _v15 = null, _v5.error = "Error while decrypting message content: ".concat(_v0.message);
              }
              null !== _v15 && (_v14 = _v15);
            }
            _v0.userMetadata && (_v5.userMetadata = _v0.userMetadata), _v5.message = _v14.message, _v5.file = {
              id: _v14.file.id,
              name: _v14.file.name,
              url: this.getFileUrl({
                id: _v14.file.id,
                name: _v14.file.name,
                channel: _v2
              })
            }, this.listenerManager.announceFile(_v5), this._announce("file", _v5, _v5.channel, _v5.subscription);
          } else {
            if ((_v5 = {
              channel: null,
              subscription: null
            }).channel = _v2, _v5.subscription = _v4, _v5.timetoken = _v3.timetoken, _v5.publisher = _v0.issuingClientId, _v0.userMetadata && (_v5.userMetadata = _v0.userMetadata), this.modules.cryptoModule) {
              _v15 = void 0;
              try {
                _v15 = (_v1 = this.modules.cryptoModule.decrypt(_v0.payload)) instanceof ArrayBuffer ? JSON.parse(this._decoder.decode(_v1)) : _v1;
              } catch (_v0) {
                _v15 = null, _v5.error = "Error while decrypting message content: ".concat(_v0.message);
              }
              _v5.message = null != _v15 ? _v15 : _v0.payload;
            } else _v5.message = _v0.payload;
            _v5.actualChannel = null != _v4 ? _v2 : null, _v5.subscribedChannel = null != _v4 ? _v4 : _v2, this.listenerManager.announceMessage(_v5), this._announce("message", _v5, _v5.channel, _v5.subscription);
          }
        }, _v0.prototype.addListener = function (_v0, _v1, _v2) {
          var _v3 = this;
          _v1 && _v2 ? (null == _v1 || _v1.forEach(function (_v0) {
            _v3._channelListenerMap[_v0] ? _v3._channelListenerMap[_v0].includes(_v0) || _v3._channelListenerMap[_v0].push(_v0) : _v3._channelListenerMap[_v0] = [_v0];
          }), null == _v2 || _v2.forEach(function (_v0) {
            _v3._groupListenerMap[_v0] ? _v3._groupListenerMap[_v0].includes(_v0) || _v3._groupListenerMap[_v0].push(_v0) : _v3._groupListenerMap[_v0] = [_v0];
          })) : this.listenerManager.addListener(_v0);
        }, _v0.prototype.removeListener = function (_v0, _v1, _v2) {
          var _v3 = this;
          _v1 && _v2 ? (null == _v1 || _v1.forEach(function (_v0) {
            var _v1;
            _v3._channelListenerMap[_v0] = null == (_v1 = _v3._channelListenerMap[_v0]) ? void 0 : _v1.filter(function (_v0) {
              return _v0 !== _v0;
            });
          }), null == _v2 || _v2.forEach(function (_v0) {
            var _v1;
            _v3._groupListenerMap[_v0] = null == (_v1 = _v3._groupListenerMap[_v0]) ? void 0 : _v1.filter(function (_v0) {
              return _v0 !== _v0;
            });
          })) : this.listenerManager.removeListener(_v0);
        }, _v0.prototype.removeAllListeners = function () {
          this.listenerManager.removeAllListeners();
        }, _v0.prototype._renameEvent = function (_v0) {
          return "set" === _v0 ? "updated" : "removed";
        }, _v0.prototype._renameChannelField = function (_v0) {
          var _v1 = _v0.channel,
            _v2 = _v3(_v0, ["channel"]);
          return _v2.spaceId = _v1, _v2;
        }, _v0.prototype._announce = function (_v0, _v1, _v2, _v3) {
          var _v4, _v5;
          null == (_v4 = this._channelListenerMap[_v2]) || _v4.forEach(function (_v0) {
            return _v0[_v0] && _v0[_v0](_v1);
          }), null == (_v5 = this._groupListenerMap[_v3]) || _v5.forEach(function (_v0) {
            return _v0[_v0] && _v0[_v0](_v1);
          });
        }, _v0;
      }(),
      _v180 = function () {
        function _v0() {}
        return _v0.prototype.subscribe = function () {
          var _v0, _v1;
          this.pubnub.subscribe(_v2({
            channels: this.channelNames,
            channelGroups: this.groupNames
          }, (null == (_v1 = null == (_v0 = this.options) ? void 0 : _v0.cursor) ? void 0 : _v1.timetoken) && {
            timetoken: this.options.cursor.timetoken
          }));
        }, _v0.prototype.unsubscribe = function () {
          this.pubnub.unsubscribe({
            channels: this.channelNames.filter(function (_v0) {
              return !_v0.endsWith("-pnpres");
            }),
            channelGroups: this.groupNames.filter(function (_v0) {
              return !_v0.endsWith("-pnpres");
            })
          });
        }, Object.defineProperty(_v0.prototype, "onMessage", {
          set: function (_v0) {
            this.listener.message = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "onPresence", {
          set: function (_v0) {
            this.listener.presence = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "onSignal", {
          set: function (_v0) {
            this.listener.signal = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "onObjects", {
          set: function (_v0) {
            this.listener.objects = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "onMessageAction", {
          set: function (_v0) {
            this.listener.messageAction = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "onFile", {
          set: function (_v0) {
            this.listener.file = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), _v0.prototype.addListener = function (_v0) {
          this.eventEmitter.addListener(_v0, this.channelNames.filter(function (_v0) {
            return !_v0.endsWith("-pnpres");
          }), this.groupNames.filter(function (_v0) {
            return !_v0.endsWith("-pnpres");
          }));
        }, _v0.prototype.removeListener = function (_v0) {
          this.eventEmitter.removeListener(_v0, this.channelNames, this.groupNames);
        }, Object.defineProperty(_v0.prototype, "channels", {
          get: function () {
            return this.channelNames.slice(0);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "channelGroups", {
          get: function () {
            return this.groupNames.slice(0);
          },
          enumerable: !1,
          configurable: !0
        }), _v0;
      }(),
      _v181 = function (_v0) {
        function _v1(_v0) {
          var _v1 = _v0.channels,
            _v2 = _v0.channelGroups,
            _v3 = _v0.subscriptionOptions,
            _v4 = _v0.eventEmitter,
            _v5 = _v0.pubnub,
            _v6 = _v0.call(this) || this;
          return _v6.channelNames = [], _v6.groupNames = [], _v6.subscriptionList = [], _v6.options = _v3, _v6.eventEmitter = _v4, _v6.pubnub = _v5, (void 0 === _v1 ? [] : _v1).filter(function (_v0) {
            return !_v0.endsWith("-pnpres");
          }).forEach(function (_v0) {
            var _v1 = _v6.pubnub.channel(_v0).subscription(_v6.options);
            _v6.channelNames = _v8(_v8([], _v7(_v6.channelNames), !1), _v7(_v1.channels), !1), _v6.subscriptionList.push(_v1);
          }), (void 0 === _v2 ? [] : _v2).filter(function (_v0) {
            return !_v0.endsWith("-pnpres");
          }).forEach(function (_v0) {
            var _v1 = _v6.pubnub.channelGroup(_v0).subscription(_v6.options);
            _v6.groupNames = _v8(_v8([], _v7(_v6.groupNames), !1), _v7(_v1.channelGroups), !1), _v6.subscriptionList.push(_v1);
          }), _v6.listener = {}, _v4.addListener(_v6.listener, _v6.channelNames.filter(function (_v0) {
            return !_v0.endsWith("-pnpres");
          }), _v6.groupNames.filter(function (_v0) {
            return !_v0.endsWith("-pnpres");
          })), _v6;
        }
        return _v1(_v1, _v0), _v1.prototype.addSubscription = function (_v0) {
          this.subscriptionList.push(_v0), this.channelNames = _v8(_v8([], _v7(this.channelNames), !1), _v7(_v0.channels), !1), this.groupNames = _v8(_v8([], _v7(this.groupNames), !1), _v7(_v0.channelGroups), !1), this.eventEmitter.addListener(this.listener, _v0.channels, _v0.channelGroups);
        }, _v1.prototype.removeSubscription = function (_v0) {
          var _v1 = _v0.channels,
            _v2 = _v0.channelGroups;
          this.channelNames = this.channelNames.filter(function (_v0) {
            return !_v1.includes(_v0);
          }), this.groupNames = this.groupNames.filter(function (_v0) {
            return !_v2.includes(_v0);
          }), this.subscriptionList = this.subscriptionList.filter(function (_v0) {
            return _v0 !== _v0;
          }), this.eventEmitter.removeListener(this.listener, _v1, _v2);
        }, _v1.prototype.addSubscriptionSet = function (_v0) {
          this.subscriptionList = _v8(_v8([], _v7(this.subscriptionList), !1), _v7(_v0.subscriptions), !1), this.channelNames = _v8(_v8([], _v7(this.channelNames), !1), _v7(_v0.channels), !1), this.groupNames = _v8(_v8([], _v7(this.groupNames), !1), _v7(_v0.channelGroups), !1), this.eventEmitter.addListener(this.listener, _v0.channels, _v0.channelGroups);
        }, _v1.prototype.removeSubscriptionSet = function (_v0) {
          var _v1 = _v0.channels,
            _v2 = _v0.channelGroups;
          this.channelNames = this.channelNames.filter(function (_v0) {
            return !_v1.includes(_v0);
          }), this.groupNames = this.groupNames.filter(function (_v0) {
            return !_v2.includes(_v0);
          }), this.subscriptionList = this.subscriptionList.filter(function (_v0) {
            return !_v0.subscriptions.includes(_v0);
          }), this.eventEmitter.removeListener(this.listener, _v1, _v2);
        }, Object.defineProperty(_v1.prototype, "subscriptions", {
          get: function () {
            return this.subscriptionList.slice(0);
          },
          enumerable: !1,
          configurable: !0
        }), _v1;
      }(_v180),
      _v182 = function (_v0) {
        function _v1(_v0) {
          var _v1 = _v0.channels,
            _v2 = _v0.channelGroups,
            _v3 = _v0.subscriptionOptions,
            _v4 = _v0.eventEmitter,
            _v5 = _v0.pubnub,
            _v6 = _v0.call(this) || this;
          return _v6.channelNames = [], _v6.groupNames = [], _v6.channelNames = _v1, _v6.groupNames = _v2, _v6.options = _v3, _v6.pubnub = _v5, _v6.eventEmitter = _v4, _v6.listener = {}, _v4.addListener(_v6.listener, _v6.channelNames.filter(function (_v0) {
            return !_v0.endsWith("-pnpres");
          }), _v6.groupNames.filter(function (_v0) {
            return !_v0.endsWith("-pnpres");
          })), _v6;
        }
        return _v1(_v1, _v0), _v1.prototype.addSubscription = function (_v0) {
          return new _v181({
            channels: _v8(_v8([], _v7(this.channelNames), !1), _v7(_v0.channels), !1),
            channelGroups: _v8(_v8([], _v7(this.groupNames), !1), _v7(_v0.channelGroups), !1),
            subscriptionOptions: _v2(_v2({}, this.options), null == _v0 ? void 0 : _v0.options),
            eventEmitter: this.eventEmitter,
            pubnub: this.pubnub
          });
        }, _v1;
      }(_v180),
      _v183 = function () {
        function _v0(_v0, _v1, _v2) {
          this.name = _v0, this.eventEmitter = _v1, this.pubnub = _v2;
        }
        return _v0.prototype.subscription = function (_v0) {
          return new _v182({
            channels: (null == _v0 ? void 0 : _v0.receivePresenceEvents) ? [this.name, "".concat(this.name, "-pnpres")] : [this.name],
            channelGroups: [],
            subscriptionOptions: _v0,
            eventEmitter: this.eventEmitter,
            pubnub: this.pubnub
          });
        }, _v0;
      }(),
      _v184 = function () {
        function _v0(_v0, _v1, _v2) {
          this.name = _v0, this.eventEmitter = _v1, this.pubnub = _v2;
        }
        return _v0.prototype.subscription = function (_v0) {
          return new _v182({
            channels: [],
            channelGroups: (null == _v0 ? void 0 : _v0.receivePresenceEvents) ? [this.name, "".concat(this.name, "-pnpres")] : [this.name],
            subscriptionOptions: _v0,
            eventEmitter: this.eventEmitter,
            pubnub: this.pubnub
          });
        }, _v0;
      }(),
      _v185 = function () {
        function _v0(_v0, _v1, _v2) {
          this.id = _v0, this.eventEmitter = _v1, this.pubnub = _v2;
        }
        return _v0.prototype.subscription = function (_v0) {
          return new _v182({
            channels: [this.id],
            channelGroups: [],
            subscriptionOptions: _v0,
            eventEmitter: this.eventEmitter,
            pubnub: this.pubnub
          });
        }, _v0;
      }(),
      _v186 = function () {
        function _v0(_v0, _v1, _v2) {
          this.id = _v0, this.eventEmitter = _v1, this.pubnub = _v2;
        }
        return _v0.prototype.subscription = function (_v0) {
          return new _v182({
            channels: [this.id],
            channelGroups: [],
            subscriptionOptions: _v0,
            eventEmitter: this.eventEmitter,
            pubnub: this.pubnub
          });
        }, _v0;
      }(),
      _v187 = function () {
        function _v0(_v0) {
          var _v1 = this,
            _v2 = _v0.networking,
            _v3 = _v0.cbor,
            _v4 = new _v15({
              setup: _v0
            });
          this._config = _v4;
          var _v5 = new _v37({
              config: _v4
            }),
            _v6 = _v0.cryptography;
          _v2.init(_v4);
          var _v7 = new _v50(_v4, _v3);
          this._tokenManager = _v7;
          var _v8 = new _v43({
            maximumSamplesCount: 0
          });
          this._telemetryManager = _v8;
          var _v9 = this._config.cryptoModule,
            _v10 = {
              config: _v4,
              networking: _v2,
              crypto: _v5,
              cryptography: _v6,
              tokenManager: _v7,
              telemetryManager: _v8,
              PubNubFile: _v0.PubNubFile,
              cryptoModule: _v9
            };
          this.File = _v0.PubNubFile, this.encryptFile = function (_v0, _v1) {
            return 1 == arguments.length && "string" != typeof _v0 && _v10.cryptoModule ? (_v1 = _v0, _v10.cryptoModule.encryptFile(_v1, this.File)) : _v6.encryptFile(_v0, _v1, this.File);
          }, this.decryptFile = function (_v0, _v1) {
            return 1 == arguments.length && "string" != typeof _v0 && _v10.cryptoModule ? (_v1 = _v0, _v10.cryptoModule.decryptFile(_v1, this.File)) : _v6.decryptFile(_v0, _v1, this.File);
          };
          var _v11 = _v58.bind(this, _v10, _v109),
            _v12 = _v58.bind(this, _v10, _v68),
            _v13 = _v58.bind(this, _v10, _v70),
            _v14 = _v58.bind(this, _v10, _v72),
            _v15 = _v58.bind(this, _v10, _v110),
            _v16 = new _v49();
          if (this._listenerManager = _v16, this.iAmHere = _v58.bind(this, _v10, _v70), this.iAmAway = _v58.bind(this, _v10, _v68), this.setPresenceState = _v58.bind(this, _v10, _v72), this.handshake = _v58.bind(this, _v10, _v111), this.receiveMessages = _v58.bind(this, _v10, _v112), this._eventEmitter = new _v179({
            modules: _v10,
            listenerManager: this._listenerManager,
            getFileUrl: function (_v0) {
              return _v81(_v10, _v0);
            }
          }), !0 === _v4.enableEventEngine) {
            if (_v4.maintainPresenceState && (this.presenceState = {}, this.setState = function (_v0) {
              var _v1, _v2;
              return null == (_v1 = _v0.channels) || _v1.forEach(function (_v0) {
                return _v1.presenceState[_v0] = _v0.state;
              }), null == (_v2 = _v0.channelGroups) || _v2.forEach(function (_v0) {
                return _v1.presenceState[_v0] = _v0.state;
              }), _v1.setPresenceState({
                channels: _v0.channels,
                channelGroups: _v0.channelGroups,
                state: _v1.presenceState
              });
            }), _v4.getHeartbeatInterval()) {
              var _v17 = new _v177({
                heartbeat: this.iAmHere,
                leave: this.iAmAway,
                heartbeatDelay: function () {
                  return new Promise(function (_v0) {
                    return setTimeout(_v0, 0 * _v10.config.getHeartbeatInterval());
                  });
                },
                retryDelay: function (_v0) {
                  return new Promise(function (_v0) {
                    return setTimeout(_v0, _v0);
                  });
                },
                config: _v10.config,
                presenceState: this.presenceState,
                emitStatus: function (_v0) {
                  _v16.announceStatus(_v0);
                }
              });
              this.presenceEventEngine = _v17, this.join = this.presenceEventEngine.join.bind(_v17), this.leave = this.presenceEventEngine.leave.bind(_v17), this.leaveAll = this.presenceEventEngine.leaveAll.bind(_v17);
            }
            var _v18 = new _v155({
              handshake: this.handshake,
              receiveMessages: this.receiveMessages,
              delay: function (_v0) {
                return new Promise(function (_v0) {
                  return setTimeout(_v0, _v0);
                });
              },
              join: this.join,
              leave: this.leave,
              leaveAll: this.leaveAll,
              presenceState: this.presenceState,
              config: _v10.config,
              emitMessages: function (_v0) {
                var _v1, _v2;
                try {
                  for (var _v3 = _v6(_v0), _v4 = _v3.next(); !_v4.done; _v4 = _v3.next()) {
                    var _v5 = _v4.value;
                    _v1._eventEmitter.emitEvent(_v5);
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
              },
              emitStatus: function (_v0) {
                _v16.announceStatus(_v0);
              }
            });
            this.subscribe = _v18.subscribe.bind(_v18), this.unsubscribe = _v18.unsubscribe.bind(_v18), this.unsubscribeAll = _v18.unsubscribeAll.bind(_v18), this.reconnect = _v18.reconnect.bind(_v18), this.disconnect = _v18.disconnect.bind(_v18), this.destroy = _v18.dispose.bind(_v18), this.getSubscribedChannels = _v18.getSubscribedChannels.bind(_v18), this.getSubscribedChannelGroups = _v18.getSubscribedChannelGroups.bind(_v18), this.eventEngine = _v18;
          } else {
            var _v19 = new _v41({
              timeEndpoint: _v11,
              leaveEndpoint: _v12,
              heartbeatEndpoint: _v13,
              setStateEndpoint: _v14,
              subscribeEndpoint: _v15,
              crypto: _v10.crypto,
              config: _v10.config,
              listenerManager: _v16,
              getFileUrl: function (_v0) {
                return _v81(_v10, _v0);
              },
              cryptoModule: _v10.cryptoModule,
              eventEmitter: this._eventEmitter
            });
            this.subscribe = _v19.adaptSubscribeChange.bind(_v19), this.unsubscribe = _v19.adaptUnsubscribeChange.bind(_v19), this.disconnect = _v19.disconnect.bind(_v19), this.reconnect = _v19.reconnect.bind(_v19), this.unsubscribeAll = _v19.unsubscribeAll.bind(_v19), this.getSubscribedChannels = _v19.getSubscribedChannels.bind(_v19), this.getSubscribedChannelGroups = _v19.getSubscribedChannelGroups.bind(_v19), this.setState = _v19.adaptStateChange.bind(_v19), this.presence = _v19.adaptPresenceChange.bind(_v19), this.destroy = function (_v0) {
              _v19.unsubscribeAll(_v0), _v19.disconnect();
            };
          }
          this.addListener = this._eventEmitter.addListener.bind(this._eventEmitter), this.removeListener = this._eventEmitter.removeListener.bind(this._eventEmitter), this.removeAllListeners = this._eventEmitter.removeAllListeners.bind(this._eventEmitter), this.parseToken = _v7.parseToken.bind(_v7), this.setToken = _v7.setToken.bind(_v7), this.getToken = _v7.getToken.bind(_v7), this.channelGroups = {
            listGroups: _v58.bind(this, _v10, _v62),
            listChannels: _v58.bind(this, _v10, _v63),
            addChannels: _v58.bind(this, _v10, _v59),
            removeChannels: _v58.bind(this, _v10, _v60),
            deleteGroup: _v58.bind(this, _v10, _v61)
          }, this.push = {
            addChannels: _v58.bind(this, _v10, _v64),
            removeChannels: _v58.bind(this, _v10, _v65),
            deleteDevice: _v58.bind(this, _v10, _v67),
            listChannels: _v58.bind(this, _v10, _v66)
          }, this.hereNow = _v58.bind(this, _v10, _v73), this.whereNow = _v58.bind(this, _v10, _v69), this.getState = _v58.bind(this, _v10, _v71), this.grant = _v58.bind(this, _v10, _v97), this.grantToken = _v58.bind(this, _v10, _v100), this.audit = _v58.bind(this, _v10, _v96), this.revokeToken = _v58.bind(this, _v10, _v101), this.publish = _v58.bind(this, _v10, _v103), this.fire = function (_v0, _v1) {
            return _v0.replicate = !1, _v0.storeInHistory = !1, _v1.publish(_v0, _v1);
          }, this.signal = _v58.bind(this, _v10, _v104), this.history = _v58.bind(this, _v10, _v105), this.deleteMessages = _v58.bind(this, _v10, _v106), this.messageCounts = _v58.bind(this, _v10, _v107), this.fetchMessages = _v58.bind(this, _v10, _v108), this.addMessageAction = _v58.bind(this, _v10, _v74), this.removeMessageAction = _v58.bind(this, _v10, _v75), this.getMessageActions = _v58.bind(this, _v10, _v76), this.listFiles = _v58.bind(this, _v10, _v77);
          var _v20 = _v58.bind(this, _v10, _v78);
          this.publishFile = _v58.bind(this, _v10, _v79), this.sendFile = _v80({
            generateUploadUrl: _v20,
            publishFile: this.publishFile,
            modules: _v10
          }), this.getFileUrl = function (_v0) {
            return _v81(_v10, _v0);
          }, this.downloadFile = _v58.bind(this, _v10, _v82), this.deleteFile = _v58.bind(this, _v10, _v83), this.channel = function (_v0) {
            return new _v183(_v0, _v1._eventEmitter, _v1);
          }, this.channelGroup = function (_v0) {
            return new _v184(_v0, _v1._eventEmitter, _v1);
          }, this.channelMetadata = function (_v0) {
            return new _v185(_v0, _v1._eventEmitter, _v1);
          }, this.userMetadata = function (_v0) {
            return new _v186(_v0, _v1._eventEmitter, _v1);
          }, this.subscriptionSet = function (_v0) {
            return new _v181({
              channels: _v0.channels,
              channelGroups: _v0.channelGroups,
              subscriptionOptions: _v0.subscriptionOptions,
              eventEmitter: _v1._eventEmitter,
              pubnub: _v1
            });
          }, this.objects = {
            getAllUUIDMetadata: _v58.bind(this, _v10, _v84),
            getUUIDMetadata: _v58.bind(this, _v10, _v85),
            setUUIDMetadata: _v58.bind(this, _v10, _v86),
            removeUUIDMetadata: _v58.bind(this, _v10, _v87),
            getAllChannelMetadata: _v58.bind(this, _v10, _v88),
            getChannelMetadata: _v58.bind(this, _v10, _v89),
            setChannelMetadata: _v58.bind(this, _v10, _v90),
            removeChannelMetadata: _v58.bind(this, _v10, _v91),
            getChannelMembers: _v58.bind(this, _v10, _v92),
            setChannelMembers: function (_v0) {
              for (var _v1 = [], _v2 = 1; _v2 < arguments.length; _v2++) _v1[_v2 - 1] = arguments[_v2];
              return _v58.call.apply(_v58, _v8([_v1, _v10, _v93, _v2({
                type: "set"
              }, _v0)], _v7(_v1), !1));
            },
            removeChannelMembers: function (_v0) {
              for (var _v1 = [], _v2 = 1; _v2 < arguments.length; _v2++) _v1[_v2 - 1] = arguments[_v2];
              return _v58.call.apply(_v58, _v8([_v1, _v10, _v93, _v2({
                type: "delete"
              }, _v0)], _v7(_v1), !1));
            },
            getMemberships: _v58.bind(this, _v10, _v94),
            setMemberships: function (_v0) {
              for (var _v1 = [], _v2 = 1; _v2 < arguments.length; _v2++) _v1[_v2 - 1] = arguments[_v2];
              return _v58.call.apply(_v58, _v8([_v1, _v10, _v95, _v2({
                type: "set"
              }, _v0)], _v7(_v1), !1));
            },
            removeMemberships: function (_v0) {
              for (var _v1 = [], _v2 = 1; _v2 < arguments.length; _v2++) _v1[_v2 - 1] = arguments[_v2];
              return _v58.call.apply(_v58, _v8([_v1, _v10, _v95, _v2({
                type: "delete"
              }, _v0)], _v7(_v1), !1));
            }
          }, this.createUser = function (_v0) {
            return _v1.objects.setUUIDMetadata({
              uuid: _v0.userId,
              data: _v0.data,
              include: _v0.include
            });
          }, this.updateUser = this.createUser, this.removeUser = function (_v0) {
            return _v1.objects.removeUUIDMetadata({
              uuid: null == _v0 ? void 0 : _v0.userId
            });
          }, this.fetchUser = function (_v0) {
            return _v1.objects.getUUIDMetadata({
              uuid: null == _v0 ? void 0 : _v0.userId,
              include: null == _v0 ? void 0 : _v0.include
            });
          }, this.fetchUsers = this.objects.getAllUUIDMetadata, this.createSpace = function (_v0) {
            return _v1.objects.setChannelMetadata({
              channel: _v0.spaceId,
              data: _v0.data,
              include: _v0.include
            });
          }, this.updateSpace = this.createSpace, this.removeSpace = function (_v0) {
            return _v1.objects.removeChannelMetadata({
              channel: _v0.spaceId
            });
          }, this.fetchSpace = function (_v0) {
            return _v1.objects.getChannelMetadata({
              channel: _v0.spaceId,
              include: _v0.include
            });
          }, this.fetchSpaces = this.objects.getAllChannelMetadata, this.addMemberships = function (_v0) {
            var _v1, _v2;
            return "string" == typeof _v0.spaceId ? _v1.objects.setChannelMembers({
              channel: _v0.spaceId,
              uuids: null == (_v1 = _v0.users) ? void 0 : _v1.map(function (_v0) {
                return "string" == typeof _v0 ? _v0 : {
                  id: _v0.userId,
                  custom: _v0.custom,
                  status: _v0.status
                };
              }),
              limit: 0
            }) : _v1.objects.setMemberships({
              uuid: _v0.userId,
              channels: null == (_v2 = _v0.spaces) ? void 0 : _v2.map(function (_v0) {
                return "string" == typeof _v0 ? _v0 : {
                  id: _v0.spaceId,
                  custom: _v0.custom,
                  status: _v0.status
                };
              }),
              limit: 0
            });
          }, this.updateMemberships = this.addMemberships, this.removeMemberships = function (_v0) {
            return "string" == typeof _v0.spaceId ? _v1.objects.removeChannelMembers({
              channel: _v0.spaceId,
              uuids: _v0.userIds,
              limit: 0
            }) : _v1.objects.removeMemberships({
              uuid: _v0.userId,
              channels: _v0.spaceIds,
              limit: 0
            });
          }, this.fetchMemberships = function (_v0) {
            return "string" == typeof _v0.spaceId ? _v1.objects.getChannelMembers({
              channel: _v0.spaceId,
              filter: _v0.filter,
              limit: _v0.limit,
              page: _v0.page,
              include: {
                customFields: _v0.include.customFields,
                UUIDFields: _v0.include.userFields,
                customUUIDFields: _v0.include.customUserFields,
                statusField: _v0.include.statusField,
                UUIDStatusField: _v0.include.userStatusField,
                UUIDTypeField: _v0.include.userTypeField,
                totalCount: _v0.include.totalCount
              },
              sort: null != _v0.sort ? Object.fromEntries(Object.entries(_v0.sort).map(function (_v0) {
                var _v1 = _v7(_v0, 2),
                  _v2 = _v1[0],
                  _v3 = _v1[1];
                return [_v2.replace("user", "uuid"), _v3];
              })) : null
            }).then(function (_v0) {
              var _v1;
              return _v0.data = null == (_v1 = _v0.data) ? void 0 : _v1.map(function (_v0) {
                return {
                  user: _v0.uuid,
                  custom: _v0.custom,
                  updated: _v0.updated,
                  eTag: _v0.eTag
                };
              }), _v0;
            }) : _v1.objects.getMemberships({
              uuid: _v0.userId,
              filter: _v0.filter,
              limit: _v0.limit,
              page: _v0.page,
              include: {
                customFields: _v0.include.customFields,
                channelFields: _v0.include.spaceFields,
                customChannelFields: _v0.include.customSpaceFields,
                statusField: _v0.include.statusField,
                channelStatusField: _v0.include.spaceStatusField,
                channelTypeField: _v0.include.spaceTypeField,
                totalCount: _v0.include.totalCount
              },
              sort: null != _v0.sort ? Object.fromEntries(Object.entries(_v0.sort).map(function (_v0) {
                var _v1 = _v7(_v0, 2),
                  _v2 = _v1[0],
                  _v3 = _v1[1];
                return [_v2.replace("space", "channel"), _v3];
              })) : null
            }).then(function (_v0) {
              var _v1;
              return _v0.data = null == (_v1 = _v0.data) ? void 0 : _v1.map(function (_v0) {
                return {
                  space: _v0.channel,
                  custom: _v0.custom,
                  updated: _v0.updated,
                  eTag: _v0.eTag
                };
              }), _v0;
            });
          }, this.time = _v11, this.stop = this.destroy, this.encrypt = function (_v0, _v1) {
            if (void 0 === _v1 && _v10.cryptoModule) {
              var _v2 = _v10.cryptoModule.encrypt(_v0);
              return "string" == typeof _v2 ? _v2 : _v17(_v2);
            }
            return _v5.encrypt(_v0, _v1);
          }, this.decrypt = function (_v0, _v1) {
            if (void 0 === _v1 && _v9) {
              var _v2 = _v10.cryptoModule.decrypt(_v0);
              return _v2 instanceof ArrayBuffer ? JSON.parse(new TextDecoder().decode(_v2)) : _v2;
            }
            return _v5.decrypt(_v0, _v1);
          }, this.getAuthKey = _v10.config.getAuthKey.bind(_v10.config), this.setAuthKey = _v10.config.setAuthKey.bind(_v10.config), this.getUUID = _v10.config.getUUID.bind(_v10.config), this.setUUID = _v10.config.setUUID.bind(_v10.config), this.getUserId = _v10.config.getUserId.bind(_v10.config), this.setUserId = _v10.config.setUserId.bind(_v10.config), this.getFilterExpression = _v10.config.getFilterExpression.bind(_v10.config), this.setFilterExpression = _v10.config.setFilterExpression.bind(_v10.config), this.setCipherKey = function (_v0) {
            return _v10.config.setCipherKey(_v0, _v0, _v10);
          }, this.setHeartbeatInterval = _v10.config.setHeartbeatInterval.bind(_v10.config), _v2.hasModule("proxy") && (this.setProxy = function (_v0) {
            _v10.config.setProxy(_v0), _v1.reconnect();
          });
        }
        return _v0.prototype.getVersion = function () {
          return this._config.getVersion();
        }, _v0.prototype._addPnsdkSuffix = function (_v0, _v1) {
          this._config._addPnsdkSuffix(_v0, _v1);
        }, _v0.prototype.networkDownDetected = function () {
          this._listenerManager.announceNetworkDown(), this._config.restore ? this.disconnect() : this.destroy(!0);
        }, _v0.prototype.networkUpDetected = function () {
          this._listenerManager.announceNetworkUp(), this.reconnect();
        }, _v0.notificationPayload = function (_v0, _v1) {
          return new _v48(_v0, _v1);
        }, _v0.generateUUID = function () {
          return _v14();
        }, _v0.OPERATIONS = _v42, _v0.CATEGORIES = _v40, _v0.LinearRetryPolicy = _v178.LinearRetryPolicy, _v0.ExponentialRetryPolicy = _v178.ExponentialRetryPolicy, _v0;
      }(),
      _v188 = function () {
        function _v0(_v0) {
          var _v1 = this;
          this._modules = {}, Object.keys(_v0).forEach(function (_v0) {
            _v1._modules[_v0] = _v0[_v0].bind(_v1);
          });
        }
        return _v0.prototype.init = function (_v0) {
          this._config = _v0, Array.isArray(this._config.origin) ? this._currentSubDomain = Math.floor(Math.random() * this._config.origin.length) : this._currentSubDomain = 0, this._coreParams = {}, this.shiftStandardOrigin();
        }, _v0.prototype.nextOrigin = function () {
          var _v0 = this._config.secure ? "https://" : "http://";
          if ("string" == typeof this._config.origin) return "".concat(_v0).concat(this._config.origin);
          this._currentSubDomain += 1, this._currentSubDomain >= this._config.origin.length && (this._currentSubDomain = 0);
          var _v1 = this._config.origin[this._currentSubDomain];
          return "".concat(_v0).concat(_v1);
        }, _v0.prototype.hasModule = function (_v0) {
          return _v0 in this._modules;
        }, _v0.prototype.shiftStandardOrigin = function () {
          return this._standardOrigin = this.nextOrigin(), this._standardOrigin;
        }, _v0.prototype.getStandardOrigin = function () {
          return this._standardOrigin;
        }, _v0.prototype.POSTFILE = function (_v0, _v1, _v2) {
          return this._modules.postfile(_v0, _v1, _v2);
        }, _v0.prototype.GETFILE = function (_v0, _v1, _v2) {
          return this._modules.getfile(_v0, _v1, _v2);
        }, _v0.prototype.POST = function (_v0, _v1, _v2, _v3) {
          return this._modules.post(_v0, _v1, _v2, _v3);
        }, _v0.prototype.PATCH = function (_v0, _v1, _v2, _v3) {
          return this._modules.patch(_v0, _v1, _v2, _v3);
        }, _v0.prototype.GET = function (_v0, _v1, _v2) {
          return this._modules.get(_v0, _v1, _v2);
        }, _v0.prototype.DELETE = function (_v0, _v1, _v2) {
          return this._modules.del(_v0, _v1, _v2);
        }, _v0.prototype._detectErrorCategory = function (_v0) {
          if ("ENOTFOUND" === _v0.code || "ECONNREFUSED" === _v0.code || "ECONNRESET" === _v0.code || "EAI_AGAIN" === _v0.code || 0 === _v0.status || _v0.hasOwnProperty("status") && void 0 === _v0.status) return _v40.PNNetworkIssuesCategory;
          if (_v0.timeout) return _v40.PNTimeoutCategory;
          if ("ETIMEDOUT" === _v0.code) return _v40.PNNetworkIssuesCategory;
          if (_v0.response) {
            if (_v0.response.badRequest) return _v40.PNBadRequestCategory;
            if (_v0.response.forbidden) return _v40.PNAccessDeniedCategory;
          }
          return _v40.PNUnknownCategory;
        }, _v0;
      }(),
      _v189 = function () {
        function _v0(_v0, _v1) {
          this._base64ToBinary = _v1, this._decode = _v0;
        }
        return _v0.prototype.decodeToken = function (_v0) {
          var _v1 = "";
          _v0.length % 4 == 3 ? _v1 = "=" : _v0.length % 4 == 2 && (_v1 = "==");
          var _v2 = _v0.replace(/-/gi, "+").replace(/_/gi, "/") + _v1,
            _v3 = this._decode(this._base64ToBinary(_v2));
          if ("object" == typeof _v3) return _v3;
        }, _v0;
      }(),
      _v190 = {
        exports: {}
      },
      _v191 = {
        exports: {}
      };
    function _v192(_v0) {
      if (_v0) {
        for (var _v1 in _v192.prototype) _v0[_v1] = _v192.prototype[_v1];
        return _v0;
      }
    }
    _v191.exports = _v192, _v192.prototype.on = _v192.prototype.addEventListener = function (_v0, _v1) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + _v0] = this._callbacks["$" + _v0] || []).push(_v1), this;
    }, _v192.prototype.once = function (_v0, _v1) {
      function _v2() {
        this.off(_v0, _v2), _v1.apply(this, arguments);
      }
      return _v2.fn = _v1, this.on(_v0, _v2), this;
    }, _v192.prototype.off = _v192.prototype.removeListener = _v192.prototype.removeAllListeners = _v192.prototype.removeEventListener = function (_v0, _v1) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var _v2,
        _v3 = this._callbacks["$" + _v0];
      if (!_v3) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + _v0], this;
      for (var _v4 = 0; _v4 < _v3.length; _v4++) if ((_v2 = _v3[_v4]) === _v1 || _v2.fn === _v1) {
        _v3.splice(_v4, 1);
        break;
      }
      return 0 === _v3.length && delete this._callbacks["$" + _v0], this;
    }, _v192.prototype.emit = function (_v0) {
      this._callbacks = this._callbacks || {};
      for (var _v1 = Array(arguments.length - 1), _v2 = this._callbacks["$" + _v0], _v3 = 1; _v3 < arguments.length; _v3++) _v1[_v3 - 1] = arguments[_v3];
      if (_v2) {
        _v3 = 0;
        for (var _v4 = (_v2 = _v2.slice(0)).length; _v3 < _v4; ++_v3) _v2[_v3].apply(this, _v1);
      }
      return this;
    }, _v192.prototype.listeners = function (_v0) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + _v0] || [];
    }, _v192.prototype.hasListeners = function (_v0) {
      return !!this.listeners(_v0).length;
    }, _v198.default = _v198, _v198.stable = _v201, _v198.stableStringify = _v201;
    var _v193 = "[...]",
      _v194 = "[Circular]",
      _v195 = [],
      _v196 = [];
    function _v197() {
      return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
      };
    }
    function _v198(_v0, _v1, _v2, _v3) {
      var _v4;
      void 0 === _v3 && (_v3 = _v197()), function _v0(_v1, _v2, _v3, _v4, _v5, _v6, _v7) {
        var _v8;
        if (_v6 += 1, "object" == typeof _v1 && null !== _v1) {
          for (_v8 = 0; _v8 < _v4.length; _v8++) if (_v4[_v8] === _v1) return void _v199(_v194, _v1, _v2, _v5);
          if (void 0 !== _v7.depthLimit && _v6 > _v7.depthLimit || void 0 !== _v7.edgesLimit && _v3 + 1 > _v7.edgesLimit) return void _v199(_v193, _v1, _v2, _v5);
          if (_v4.push(_v1), Array.isArray(_v1)) for (_v8 = 0; _v8 < _v1.length; _v8++) _v0(_v1[_v8], _v8, _v8, _v4, _v1, _v6, _v7);else {
            var _v9 = Object.keys(_v1);
            for (_v8 = 0; _v8 < _v9.length; _v8++) {
              var _v10 = _v9[_v8];
              _v0(_v1[_v10], _v10, _v8, _v4, _v1, _v6, _v7);
            }
          }
          _v4.pop();
        }
      }(_v0, "", 0, [], void 0, 0, _v3);
      try {
        _v4 = 0 === _v196.length ? JSON.stringify(_v0, _v1, _v2) : JSON.stringify(_v0, _v202(_v1), _v2);
      } catch (_v0) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        for (; 0 !== _v195.length;) {
          var _v5 = _v195.pop();
          4 === _v5.length ? Object.defineProperty(_v5[0], _v5[1], _v5[3]) : _v5[0][_v5[1]] = _v5[2];
        }
      }
      return _v4;
    }
    function _v199(_v0, _v1, _v2, _v3) {
      var _v4 = Object.getOwnPropertyDescriptor(_v3, _v2);
      void 0 !== _v4.get ? _v4.configurable ? (Object.defineProperty(_v3, _v2, {
        value: _v0
      }), _v195.push([_v3, _v2, _v1, _v4])) : _v196.push([_v1, _v2, _v0]) : (_v3[_v2] = _v0, _v195.push([_v3, _v2, _v1]));
    }
    function _v200(_v0, _v1) {
      return _v0 < _v1 ? -1 : +(_v0 > _v1);
    }
    function _v201(_v0, _v1, _v2, _v3) {
      void 0 === _v3 && (_v3 = _v197());
      var _v4,
        _v5 = function _v0(_v1, _v2, _v3, _v4, _v5, _v6, _v7) {
          var _v8;
          if (_v6 += 1, "object" == typeof _v1 && null !== _v1) {
            for (_v8 = 0; _v8 < _v4.length; _v8++) if (_v4[_v8] === _v1) return void _v199(_v194, _v1, _v2, _v5);
            try {
              if ("function" == typeof _v1.toJSON) return;
            } catch (_v0) {
              return;
            }
            if (void 0 !== _v7.depthLimit && _v6 > _v7.depthLimit || void 0 !== _v7.edgesLimit && _v3 + 1 > _v7.edgesLimit) return void _v199(_v193, _v1, _v2, _v5);
            if (_v4.push(_v1), Array.isArray(_v1)) for (_v8 = 0; _v8 < _v1.length; _v8++) _v0(_v1[_v8], _v8, _v8, _v4, _v1, _v6, _v7);else {
              var _v9 = {},
                _v10 = Object.keys(_v1).sort(_v200);
              for (_v8 = 0; _v8 < _v10.length; _v8++) {
                var _v11 = _v10[_v8];
                _v0(_v1[_v11], _v11, _v8, _v4, _v1, _v6, _v7), _v9[_v11] = _v1[_v11];
              }
              if (void 0 === _v5) return _v9;
              _v195.push([_v5, _v2, _v1]), _v5[_v2] = _v9;
            }
            _v4.pop();
          }
        }(_v0, "", 0, [], void 0, 0, _v3) || _v0;
      try {
        _v4 = 0 === _v196.length ? JSON.stringify(_v5, _v1, _v2) : JSON.stringify(_v5, _v202(_v1), _v2);
      } catch (_v0) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        for (; 0 !== _v195.length;) {
          var _v6 = _v195.pop();
          4 === _v6.length ? Object.defineProperty(_v6[0], _v6[1], _v6[3]) : _v6[0][_v6[1]] = _v6[2];
        }
      }
      return _v4;
    }
    function _v202(_v0) {
      return _v0 = void 0 !== _v0 ? _v0 : function (_v0, _v1) {
        return _v1;
      }, function (_v0, _v1) {
        if (_v196.length > 0) for (var _v2 = 0; _v2 < _v196.length; _v2++) {
          var _v3 = _v196[_v2];
          if (_v3[1] === _v0 && _v3[0] === _v1) {
            _v1 = _v3[2], _v196.splice(_v2, 1);
            break;
          }
        }
        return _v0.call(this, _v0, _v1);
      };
    }
    var _v203,
      _v204,
      _v205,
      _v206,
      _v207,
      _v208,
      _v209,
      _v210,
      _v211,
      _v212,
      _v213,
      _v214,
      _v215,
      _v216,
      _v217,
      _v218,
      _v219,
      _v220,
      _v221,
      _v222 = "u" > typeof Symbol && Symbol,
      _v223 = Array.prototype.slice,
      _v224 = Object.prototype.toString,
      _v225 = Function.prototype.bind || function (_v0) {
        var _v1 = this;
        if ("function" != typeof _v1 || "[object Function]" !== _v224.call(_v1)) throw TypeError("Function.prototype.bind called on incompatible " + _v1);
        for (var _v2, _v3 = _v223.call(arguments, 1), _v4 = Math.max(0, _v1.length - _v3.length), _v5 = [], _v6 = 0; _v6 < _v4; _v6++) _v5.push("$" + _v6);
        if (_v2 = Function("binder", "return function (" + _v5.join(",") + "){ return binder.apply(this,arguments); }")(function () {
          if (this instanceof _v2) {
            var _v0 = _v1.apply(this, _v3.concat(_v223.call(arguments)));
            return Object(_v0) === _v0 ? _v0 : this;
          }
          return _v1.apply(_v0, _v3.concat(_v223.call(arguments)));
        }), _v1.prototype) {
          var _v7 = function () {};
          _v7.prototype = _v1.prototype, _v2.prototype = new _v7(), _v7.prototype = null;
        }
        return _v2;
      },
      _v226 = _v225.call(Function.call, Object.prototype.hasOwnProperty),
      _v227 = SyntaxError,
      _v228 = Function,
      _v229 = TypeError,
      _v230 = function (_v0) {
        try {
          return _v228('"use strict"; return (' + _v0 + ").constructor;")();
        } catch (_v0) {}
      },
      _v231 = Object.getOwnPropertyDescriptor;
    if (_v231) try {
      _v231({}, "");
    } catch (_v0) {
      _v231 = null;
    }
    var _v232 = function () {
        throw new _v229();
      },
      _v233 = _v231 ? function () {
        try {
          return _v232;
        } catch (_v0) {
          try {
            return _v231(arguments, "callee").get;
          } catch (_v0) {
            return _v232;
          }
        }
      }() : _v232,
      _v234 = "function" == typeof _v222 && "function" == typeof Symbol && "symbol" == typeof _v222("foo") && "symbol" == typeof Symbol("bar") && function () {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var _v0 = {},
          _v1 = Symbol("test"),
          _v2 = Object(_v1);
        if ("string" == typeof _v1 || "[object Symbol]" !== Object.prototype.toString.call(_v1) || "[object Symbol]" !== Object.prototype.toString.call(_v2)) return !1;
        for (_v1 in _v0[_v1] = 42, _v0) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(_v0).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(_v0).length) return !1;
        var _v3 = Object.getOwnPropertySymbols(_v0);
        if (1 !== _v3.length || _v3[0] !== _v1 || !Object.prototype.propertyIsEnumerable.call(_v0, _v1)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var _v4 = Object.getOwnPropertyDescriptor(_v0, _v1);
          if (42 !== _v4.value || !0 !== _v4.enumerable) return !1;
        }
        return !0;
      }(),
      _v235 = Object.getPrototypeOf || function (_v0) {
        return _v0.__proto__;
      },
      _v236 = {},
      _v237 = "u" < typeof Uint8Array ? _v221 : _v235(Uint8Array),
      _v238 = {
        "%AggregateError%": "u" < typeof AggregateError ? _v221 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "u" < typeof ArrayBuffer ? _v221 : ArrayBuffer,
        "%ArrayIteratorPrototype%": _v234 ? _v235([][Symbol.iterator]()) : _v221,
        "%AsyncFromSyncIteratorPrototype%": _v221,
        "%AsyncFunction%": _v236,
        "%AsyncGenerator%": _v236,
        "%AsyncGeneratorFunction%": _v236,
        "%AsyncIteratorPrototype%": _v236,
        "%Atomics%": "u" < typeof Atomics ? _v221 : Atomics,
        "%BigInt%": "u" < typeof BigInt ? _v221 : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": "u" < typeof DataView ? _v221 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": "u" < typeof Float32Array ? _v221 : Float32Array,
        "%Float64Array%": "u" < typeof Float64Array ? _v221 : Float64Array,
        "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? _v221 : FinalizationRegistry,
        "%Function%": _v228,
        "%GeneratorFunction%": _v236,
        "%Int8Array%": "u" < typeof Int8Array ? _v221 : Int8Array,
        "%Int16Array%": "u" < typeof Int16Array ? _v221 : Int16Array,
        "%Int32Array%": "u" < typeof Int32Array ? _v221 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": _v234 ? _v235(_v235([][Symbol.iterator]())) : _v221,
        "%JSON%": "object" == typeof JSON ? JSON : _v221,
        "%Map%": "u" < typeof Map ? _v221 : Map,
        "%MapIteratorPrototype%": "u" > typeof Map && _v234 ? _v235(new Map()[Symbol.iterator]()) : _v221,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "u" < typeof Promise ? _v221 : Promise,
        "%Proxy%": "u" < typeof Proxy ? _v221 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": "u" < typeof Reflect ? _v221 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "u" < typeof Set ? _v221 : Set,
        "%SetIteratorPrototype%": "u" > typeof Set && _v234 ? _v235(new Set()[Symbol.iterator]()) : _v221,
        "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? _v221 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": _v234 ? _v235(""[Symbol.iterator]()) : _v221,
        "%Symbol%": _v234 ? Symbol : _v221,
        "%SyntaxError%": _v227,
        "%ThrowTypeError%": _v233,
        "%TypedArray%": _v237,
        "%TypeError%": _v229,
        "%Uint8Array%": "u" < typeof Uint8Array ? _v221 : Uint8Array,
        "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? _v221 : Uint8ClampedArray,
        "%Uint16Array%": "u" < typeof Uint16Array ? _v221 : Uint16Array,
        "%Uint32Array%": "u" < typeof Uint32Array ? _v221 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": "u" < typeof WeakMap ? _v221 : WeakMap,
        "%WeakRef%": "u" < typeof WeakRef ? _v221 : WeakRef,
        "%WeakSet%": "u" < typeof WeakSet ? _v221 : WeakSet
      },
      _v239 = function _v0(_v1) {
        var _v2;
        if ("%AsyncFunction%" === _v1) _v2 = _v230("async function () {}");else if ("%GeneratorFunction%" === _v1) _v2 = _v230("function* () {}");else if ("%AsyncGeneratorFunction%" === _v1) _v2 = _v230("async function* () {}");else if ("%AsyncGenerator%" === _v1) {
          var _v3 = _v0("%AsyncGeneratorFunction%");
          _v3 && (_v2 = _v3.prototype);
        } else if ("%AsyncIteratorPrototype%" === _v1) {
          var _v4 = _v0("%AsyncGenerator%");
          _v4 && (_v2 = _v235(_v4.prototype));
        }
        return _v238[_v1] = _v2, _v2;
      },
      _v240 = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      },
      _v241 = _v225.call(Function.call, Array.prototype.concat),
      _v242 = _v225.call(Function.apply, Array.prototype.splice),
      _v243 = _v225.call(Function.call, String.prototype.replace),
      _v244 = _v225.call(Function.call, String.prototype.slice),
      _v245 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      _v246 = /\\(\\)?/g,
      _v247 = function (_v0) {
        var _v1 = _v244(_v0, 0, 1),
          _v2 = _v244(_v0, -1);
        if ("%" === _v1 && "%" !== _v2) throw new _v227("invalid intrinsic syntax, expected closing `%`");
        if ("%" === _v2 && "%" !== _v1) throw new _v227("invalid intrinsic syntax, expected opening `%`");
        var _v3 = [];
        return _v243(_v0, _v245, function (_v0, _v1, _v2, _v3) {
          _v3[_v3.length] = _v2 ? _v243(_v3, _v246, "$1") : _v1 || _v0;
        }), _v3;
      },
      _v248 = function (_v0, _v1) {
        var _v2,
          _v3 = _v0;
        if (_v226(_v240, _v3) && (_v3 = "%" + (_v2 = _v240[_v3])[0] + "%"), _v226(_v238, _v3)) {
          var _v4 = _v238[_v3];
          if (_v4 === _v236 && (_v4 = _v239(_v3)), void 0 === _v4 && !_v1) throw new _v229("intrinsic " + _v0 + " exists, but is not available. Please file an issue!");
          return {
            alias: _v2,
            name: _v3,
            value: _v4
          };
        }
        throw new _v227("intrinsic " + _v0 + " does not exist!");
      },
      _v249 = function (_v0, _v1) {
        if ("string" != typeof _v0 || 0 === _v0.length) throw new _v229("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof _v1) throw new _v229('"allowMissing" argument must be a boolean');
        var _v2 = _v247(_v0),
          _v3 = _v2.length > 0 ? _v2[0] : "",
          _v4 = _v248("%" + _v3 + "%", _v1),
          _v5 = _v4.name,
          _v6 = _v4.value,
          _v7 = !1,
          _v8 = _v4.alias;
        _v8 && (_v3 = _v8[0], _v242(_v2, _v241([0, 1], _v8)));
        for (var _v9 = 1, _v10 = !0; _v9 < _v2.length; _v9 += 1) {
          var _v11 = _v2[_v9],
            _v12 = _v244(_v11, 0, 1),
            _v13 = _v244(_v11, -1);
          if (('"' === _v12 || "'" === _v12 || "`" === _v12 || '"' === _v13 || "'" === _v13 || "`" === _v13) && _v12 !== _v13) throw new _v227("property names with quotes must have matching quotes");
          if ("constructor" !== _v11 && _v10 || (_v7 = !0), _v226(_v238, _v5 = "%" + (_v3 += "." + _v11) + "%")) _v6 = _v238[_v5];else if (null != _v6) {
            if (!(_v11 in _v6)) {
              if (!_v1) throw new _v229("base intrinsic for " + _v0 + " exists, but the property is not available.");
              return;
            }
            if (_v231 && _v9 + 1 >= _v2.length) {
              var _v14 = _v231(_v6, _v11);
              _v6 = (_v10 = !!_v14) && "get" in _v14 && !("originalValue" in _v14.get) ? _v14.get : _v6[_v11];
            } else _v10 = _v226(_v6, _v11), _v6 = _v6[_v11];
            _v10 && !_v7 && (_v238[_v5] = _v6);
          }
        }
        return _v6;
      },
      _v250 = {
        exports: {}
      };
    !function (_v0) {
      var _v1 = _v249("%Function.prototype.apply%"),
        _v2 = _v249("%Function.prototype.call%"),
        _v3 = _v249("%Reflect.apply%", !0) || _v225.call(_v2, _v1),
        _v4 = _v249("%Object.getOwnPropertyDescriptor%", !0),
        _v5 = _v249("%Object.defineProperty%", !0),
        _v6 = _v249("%Math.max%");
      if (_v5) try {
        _v5({}, "a", {
          value: 1
        });
      } catch (_v0) {
        _v5 = null;
      }
      _v0.exports = function (_v0) {
        var _v1 = _v3(_v225, _v2, arguments);
        return _v4 && _v5 && _v4(_v1, "length").configurable && _v5(_v1, "length", {
          value: 1 + _v6(0, _v0.length - (arguments.length - 1))
        }), _v1;
      };
      var _v7 = function () {
        return _v3(_v225, _v1, arguments);
      };
      _v5 ? _v5(_v0.exports, "apply", {
        value: _v7
      }) : _v0.exports.apply = _v7;
    }(_v250);
    var _v251 = _v250.exports,
      _v252 = _v251(_v249("String.prototype.indexOf")),
      _v253 = function (_v0) {
        if (_v0.__esModule) return _v0;
        var _v1 = Object.defineProperty({}, "__esModule", {
          value: !0
        });
        return Object.keys(_v0).forEach(function (_v0) {
          var _v1 = Object.getOwnPropertyDescriptor(_v0, _v0);
          Object.defineProperty(_v1, _v0, _v1.get ? _v1 : {
            enumerable: !0,
            get: function () {
              return _v0[_v0];
            }
          });
        }), _v1;
      }(Object.freeze({
        __proto__: null,
        default: {}
      })),
      _v254 = "function" == typeof Map && Map.prototype,
      _v255 = Object.getOwnPropertyDescriptor && _v254 ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
      _v256 = _v254 && _v255 && "function" == typeof _v255.get ? _v255.get : null,
      _v257 = _v254 && Map.prototype.forEach,
      _v258 = "function" == typeof Set && Set.prototype,
      _v259 = Object.getOwnPropertyDescriptor && _v258 ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
      _v260 = _v258 && _v259 && "function" == typeof _v259.get ? _v259.get : null,
      _v261 = _v258 && Set.prototype.forEach,
      _v262 = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
      _v263 = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
      _v264 = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
      _v265 = Boolean.prototype.valueOf,
      _v266 = Object.prototype.toString,
      _v267 = Function.prototype.toString,
      _v268 = String.prototype.match,
      _v269 = String.prototype.slice,
      _v270 = String.prototype.replace,
      _v271 = String.prototype.toUpperCase,
      _v272 = String.prototype.toLowerCase,
      _v273 = RegExp.prototype.test,
      _v274 = Array.prototype.concat,
      _v275 = Array.prototype.join,
      _v276 = Array.prototype.slice,
      _v277 = Math.floor,
      _v278 = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
      _v279 = Object.getOwnPropertySymbols,
      _v280 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
      _v281 = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
      _v282 = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === _v281 || 1) ? Symbol.toStringTag : null,
      _v283 = Object.prototype.propertyIsEnumerable,
      _v284 = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (_v0) {
        return _v0.__proto__;
      } : null);
    function _v285(_v0, _v1) {
      if (_v0 === 1 / 0 || _v0 === -1 / 0 || _v0 != _v0 || _v0 && _v0 > 0 && _v0 < 0 || _v273.call(/e/, _v1)) return _v1;
      var _v2 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if ("number" == typeof _v0) {
        var _v3 = _v0 < 0 ? -_v277(-_v0) : _v277(_v0);
        if (_v3 !== _v0) {
          var _v4 = String(_v3),
            _v5 = _v269.call(_v1, _v4.length + 1);
          return _v270.call(_v4, _v2, "$&_") + "." + _v270.call(_v270.call(_v5, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return _v270.call(_v1, _v2, "$&_");
    }
    var _v286 = _v253.custom,
      _v287 = _v291(_v286) ? _v286 : null;
    function _v288(_v0, _v1, _v2) {
      var _v3 = "double" === (_v2.quoteStyle || _v1) ? '"' : "'";
      return _v3 + _v0 + _v3;
    }
    function _v289(_v0) {
      return !("[object Array]" !== _v294(_v0) || _v282 && "object" == typeof _v0 && _v282 in _v0);
    }
    function _v290(_v0) {
      return !("[object RegExp]" !== _v294(_v0) || _v282 && "object" == typeof _v0 && _v282 in _v0);
    }
    function _v291(_v0) {
      if (_v281) return _v0 && "object" == typeof _v0 && _v0 instanceof Symbol;
      if ("symbol" == typeof _v0) return !0;
      if (!_v0 || "object" != typeof _v0 || !_v280) return !1;
      try {
        return _v280.call(_v0), !0;
      } catch (_v0) {}
      return !1;
    }
    var _v292 = Object.prototype.hasOwnProperty || function (_v0) {
      return _v0 in this;
    };
    function _v293(_v0, _v1) {
      return _v292.call(_v0, _v1);
    }
    function _v294(_v0) {
      return _v266.call(_v0);
    }
    function _v295(_v0, _v1) {
      if (_v0.indexOf) return _v0.indexOf(_v1);
      for (var _v2 = 0, _v3 = _v0.length; _v2 < _v3; _v2++) if (_v0[_v2] === _v1) return _v2;
      return -1;
    }
    function _v296(_v0) {
      var _v1 = _v0.charCodeAt(0),
        _v2 = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[_v1];
      return _v2 ? "\\" + _v2 : "\\x" + (_v1 < 16 ? "0" : "") + _v271.call(_v1.toString(16));
    }
    function _v297(_v0) {
      return "Object(" + _v0 + ")";
    }
    function _v298(_v0) {
      return _v0 + " { ? }";
    }
    function _v299(_v0, _v1, _v2, _v3) {
      return _v0 + " (" + _v1 + ") {" + (_v3 ? _v300(_v2, _v3) : _v275.call(_v2, ", ")) + "}";
    }
    function _v300(_v0, _v1) {
      if (0 === _v0.length) return "";
      var _v2 = "\n" + _v1.prev + _v1.base;
      return _v2 + _v275.call(_v0, "," + _v2) + "\n" + _v1.prev;
    }
    function _v301(_v0, _v1) {
      var _v2 = _v289(_v0),
        _v3 = [];
      if (_v2) {
        _v3.length = _v0.length;
        for (var _v4 = 0; _v4 < _v0.length; _v4++) _v3[_v4] = _v293(_v0, _v4) ? _v1(_v0[_v4], _v0) : "";
      }
      var _v5,
        _v6 = "function" == typeof _v279 ? _v279(_v0) : [];
      if (_v281) {
        _v5 = {};
        for (var _v7 = 0; _v7 < _v6.length; _v7++) _v5["$" + _v6[_v7]] = _v6[_v7];
      }
      for (var _v8 in _v0) _v293(_v0, _v8) && (_v2 && String(Number(_v8)) === _v8 && _v8 < _v0.length || _v281 && _v5["$" + _v8] instanceof Symbol || (_v273.call(/[^\w$]/, _v8) ? _v3.push(_v1(_v8, _v0) + ": " + _v1(_v0[_v8], _v0)) : _v3.push(_v8 + ": " + _v1(_v0[_v8], _v0))));
      if ("function" == typeof _v279) for (var _v9 = 0; _v9 < _v6.length; _v9++) _v283.call(_v0, _v6[_v9]) && _v3.push("[" + _v1(_v6[_v9]) + "]: " + _v1(_v0[_v6[_v9]], _v0));
      return _v3;
    }
    var _v302 = function (_v0, _v1) {
        var _v2 = _v249(_v0, !!_v1);
        return "function" == typeof _v2 && _v252(_v0, ".prototype.") > -1 ? _v251(_v2) : _v2;
      },
      _v303 = function _v0(_v1, _v2, _v3, _v4) {
        var _v5 = _v2 || {};
        if (_v293(_v5, "quoteStyle") && "single" !== _v5.quoteStyle && "double" !== _v5.quoteStyle) throw TypeError('option "quoteStyle" must be "single" or "double"');
        if (_v293(_v5, "maxStringLength") && ("number" == typeof _v5.maxStringLength ? _v5.maxStringLength < 0 && _v5.maxStringLength !== 1 / 0 : null !== _v5.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var _v6 = !_v293(_v5, "customInspect") || _v5.customInspect;
        if ("boolean" != typeof _v6 && "symbol" !== _v6) throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (_v293(_v5, "indent") && null !== _v5.indent && "	" !== _v5.indent && !(parseInt(_v5.indent, 10) === _v5.indent && _v5.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (_v293(_v5, "numericSeparator") && "boolean" != typeof _v5.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var _v7 = _v5.numericSeparator;
        if (void 0 === _v1) return "undefined";
        if (null === _v1) return "null";
        if ("boolean" == typeof _v1) return _v1 ? "true" : "false";
        if ("string" == typeof _v1) return function _v0(_v1, _v2) {
          if (_v1.length > _v2.maxStringLength) {
            var _v3 = _v1.length - _v2.maxStringLength;
            return _v0(_v269.call(_v1, 0, _v2.maxStringLength), _v2) + ("... " + _v3) + " more character" + (_v3 > 1 ? "s" : "");
          }
          return _v288(_v270.call(_v270.call(_v1, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, _v296), "single", _v2);
        }(_v1, _v5);
        if ("number" == typeof _v1) {
          if (0 === _v1) return 1 / 0 / _v1 > 0 ? "0" : "-0";
          var _v8 = String(_v1);
          return _v7 ? _v285(_v1, _v8) : _v8;
        }
        if ("bigint" == typeof _v1) {
          var _v9 = String(_v1) + "n";
          return _v7 ? _v285(_v1, _v9) : _v9;
        }
        var _v10 = void 0 === _v5.depth ? 5 : _v5.depth;
        if (void 0 === _v3 && (_v3 = 0), _v3 >= _v10 && _v10 > 0 && "object" == typeof _v1) return _v289(_v1) ? "[Array]" : "[Object]";
        var _v11 = function (_v0, _v1) {
          var _v2;
          if ("	" === _v0.indent) _v2 = "	";else {
            if (!("number" == typeof _v0.indent && _v0.indent > 0)) return null;
            _v2 = _v275.call(Array(_v0.indent + 1), " ");
          }
          return {
            base: _v2,
            prev: _v275.call(Array(_v1 + 1), _v2)
          };
        }(_v5, _v3);
        if (void 0 === _v4) _v4 = [];else if (_v295(_v4, _v1) >= 0) return "[Circular]";
        function _v12(_v0, _v1, _v2) {
          if (_v1 && (_v4 = _v276.call(_v4)).push(_v1), _v2) {
            var _v3 = {
              depth: _v5.depth
            };
            return _v293(_v5, "quoteStyle") && (_v3.quoteStyle = _v5.quoteStyle), _v0(_v0, _v3, _v3 + 1, _v4);
          }
          return _v0(_v0, _v5, _v3 + 1, _v4);
        }
        if ("function" == typeof _v1 && !_v290(_v1)) {
          var _v13 = function (_v0) {
              if (_v0.name) return _v0.name;
              var _v1 = _v268.call(_v267.call(_v0), /^function\s*([\w$]+)/);
              return _v1 ? _v1[1] : null;
            }(_v1),
            _v14 = _v301(_v1, _v12);
          return "[Function" + (_v13 ? ": " + _v13 : " (anonymous)") + "]" + (_v14.length > 0 ? " { " + _v275.call(_v14, ", ") + " }" : "");
        }
        if (_v291(_v1)) {
          var _v15 = _v281 ? _v270.call(String(_v1), /^(Symbol\(.*\))_[^)]*$/, "$1") : _v280.call(_v1);
          return "object" != typeof _v1 || _v281 ? _v15 : _v297(_v15);
        }
        if (_v1 && "object" == typeof _v1 && ("u" > typeof HTMLElement && _v1 instanceof HTMLElement || "string" == typeof _v1.nodeName && "function" == typeof _v1.getAttribute)) {
          for (var _v16, _v17 = "<" + _v272.call(String(_v1.nodeName)), _v18 = _v1.attributes || [], _v19 = 0; _v19 < _v18.length; _v19++) _v17 += " " + _v18[_v19].name + "=" + _v288((_v16 = _v18[_v19].value, _v270.call(String(_v16), /"/g, "&quot;")), "double", _v5);
          return _v17 += ">", _v1.childNodes && _v1.childNodes.length && (_v17 += "..."), _v17 += "</" + _v272.call(String(_v1.nodeName)) + ">";
        }
        if (_v289(_v1)) {
          if (0 === _v1.length) return "[]";
          var _v20 = _v301(_v1, _v12);
          return _v11 && !function (_v0) {
            for (var _v1 = 0; _v1 < _v0.length; _v1++) if (_v295(_v0[_v1], "\n") >= 0) return !1;
            return !0;
          }(_v20) ? "[" + _v300(_v20, _v11) + "]" : "[ " + _v275.call(_v20, ", ") + " ]";
        }
        if (!("[object Error]" !== _v294(_v1) || _v282 && "object" == typeof _v1 && _v282 in _v1)) {
          var _v21 = _v301(_v1, _v12);
          return "cause" in Error.prototype || !("cause" in _v1) || _v283.call(_v1, "cause") ? 0 === _v21.length ? "[" + String(_v1) + "]" : "{ [" + String(_v1) + "] " + _v275.call(_v21, ", ") + " }" : "{ [" + String(_v1) + "] " + _v275.call(_v274.call("[cause]: " + _v12(_v1.cause), _v21), ", ") + " }";
        }
        if ("object" == typeof _v1 && _v6) {
          if (_v287 && "function" == typeof _v1[_v287] && _v253) return _v253(_v1, {
            depth: _v10 - _v3
          });
          if ("symbol" !== _v6 && "function" == typeof _v1.inspect) return _v1.inspect();
        }
        if (function (_v0) {
          if (!_v256 || !_v0 || "object" != typeof _v0) return !1;
          try {
            _v256.call(_v0);
            try {
              _v260.call(_v0);
            } catch (_v0) {
              return !0;
            }
            return _v0 instanceof Map;
          } catch (_v0) {}
          return !1;
        }(_v1)) {
          var _v22 = [];
          return _v257 && _v257.call(_v1, function (_v0, _v1) {
            _v22.push(_v12(_v1, _v1, !0) + " => " + _v12(_v0, _v1));
          }), _v299("Map", _v256.call(_v1), _v22, _v11);
        }
        if (function (_v0) {
          if (!_v260 || !_v0 || "object" != typeof _v0) return !1;
          try {
            _v260.call(_v0);
            try {
              _v256.call(_v0);
            } catch (_v0) {
              return !0;
            }
            return _v0 instanceof Set;
          } catch (_v0) {}
          return !1;
        }(_v1)) {
          var _v23 = [];
          return _v261 && _v261.call(_v1, function (_v0) {
            _v23.push(_v12(_v0, _v1));
          }), _v299("Set", _v260.call(_v1), _v23, _v11);
        }
        if (function (_v0) {
          if (!_v262 || !_v0 || "object" != typeof _v0) return !1;
          try {
            _v262.call(_v0, _v262);
            try {
              _v263.call(_v0, _v263);
            } catch (_v0) {
              return !0;
            }
            return _v0 instanceof WeakMap;
          } catch (_v0) {}
          return !1;
        }(_v1)) return _v298("WeakMap");
        if (function (_v0) {
          if (!_v263 || !_v0 || "object" != typeof _v0) return !1;
          try {
            _v263.call(_v0, _v263);
            try {
              _v262.call(_v0, _v262);
            } catch (_v0) {
              return !0;
            }
            return _v0 instanceof WeakSet;
          } catch (_v0) {}
          return !1;
        }(_v1)) return _v298("WeakSet");
        if (function (_v0) {
          if (!_v264 || !_v0 || "object" != typeof _v0) return !1;
          try {
            return _v264.call(_v0), !0;
          } catch (_v0) {}
          return !1;
        }(_v1)) return _v298("WeakRef");
        if (!("[object Number]" !== _v294(_v1) || _v282 && "object" == typeof _v1 && _v282 in _v1)) return _v297(_v12(Number(_v1)));
        if (function (_v0) {
          if (!_v0 || "object" != typeof _v0 || !_v278) return !1;
          try {
            return _v278.call(_v0), !0;
          } catch (_v0) {}
          return !1;
        }(_v1)) return _v297(_v12(_v278.call(_v1)));
        if (!("[object Boolean]" !== _v294(_v1) || _v282 && "object" == typeof _v1 && _v282 in _v1)) return _v297(_v265.call(_v1));
        if (!("[object String]" !== _v294(_v1) || _v282 && "object" == typeof _v1 && _v282 in _v1)) return _v297(_v12(String(_v1)));
        if ("u" > typeof window && _v1 === window) return "{ [object Window] }";
        if (_v1 === _v9) return "{ [object globalThis] }";
        if (("[object Date]" !== _v294(_v1) || _v282 && "object" == typeof _v1 && _v282 in _v1) && !_v290(_v1)) {
          var _v24 = _v301(_v1, _v12),
            _v25 = _v284 ? _v284(_v1) === Object.prototype : _v1 instanceof Object || _v1.constructor === Object,
            _v26 = _v1 instanceof Object ? "" : "null prototype",
            _v27 = !_v25 && _v282 && Object(_v1) === _v1 && _v282 in _v1 ? _v269.call(_v294(_v1), 8, -1) : _v26 ? "Object" : "",
            _v28 = (_v25 || "function" != typeof _v1.constructor ? "" : _v1.constructor.name ? _v1.constructor.name + " " : "") + (_v27 || _v26 ? "[" + _v275.call(_v274.call([], _v27 || [], _v26 || []), ": ") + "] " : "");
          return 0 === _v24.length ? _v28 + "{}" : _v11 ? _v28 + "{" + _v300(_v24, _v11) + "}" : _v28 + "{ " + _v275.call(_v24, ", ") + " }";
        }
        return String(_v1);
      },
      _v304 = _v249("%TypeError%"),
      _v305 = _v249("%WeakMap%", !0),
      _v306 = _v249("%Map%", !0),
      _v307 = _v302("WeakMap.prototype.get", !0),
      _v308 = _v302("WeakMap.prototype.set", !0),
      _v309 = _v302("WeakMap.prototype.has", !0),
      _v310 = _v302("Map.prototype.get", !0),
      _v311 = _v302("Map.prototype.set", !0),
      _v312 = _v302("Map.prototype.has", !0),
      _v313 = function (_v0, _v1) {
        for (var _v2, _v3 = _v0; null !== (_v2 = _v3.next); _v3 = _v2) if (_v2.key === _v1) return _v3.next = _v2.next, _v2.next = _v0.next, _v0.next = _v2, _v2;
      },
      _v314 = String.prototype.replace,
      _v315 = /%20/g,
      _v316 = "RFC3986",
      _v317 = {
        default: _v316,
        formatters: {
          RFC1738: function (_v0) {
            return _v314.call(_v0, _v315, "+");
          },
          RFC3986: function (_v0) {
            return String(_v0);
          }
        },
        RFC1738: "RFC1738",
        RFC3986: _v316
      },
      _v318 = Object.prototype.hasOwnProperty,
      _v319 = Array.isArray,
      _v320 = function () {
        for (var _v0 = [], _v1 = 0; _v1 < 256; ++_v1) _v0.push("%" + ((_v1 < 16 ? "0" : "") + _v1.toString(16)).toUpperCase());
        return _v0;
      }(),
      _v321 = function (_v0, _v1, _v2) {
        var _v3 = _v0.replace(/\+/g, " ");
        if ("iso-8859-1" === _v2) return _v3.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(_v3);
        } catch (_v0) {
          return _v3;
        }
      },
      _v322 = function (_v0, _v1, _v2, _v3, _v4) {
        if (0 === _v0.length) return _v0;
        var _v5 = _v0;
        if ("symbol" == typeof _v0 ? _v5 = Symbol.prototype.toString.call(_v0) : "string" != typeof _v0 && (_v5 = String(_v0)), "iso-8859-1" === _v2) return escape(_v5).replace(/%u[0-9a-f]{4}/gi, function (_v0) {
          return "%26%23" + parseInt(_v0.slice(2), 16) + "%3B";
        });
        for (var _v6 = "", _v7 = 0; _v7 < _v5.length; ++_v7) {
          var _v8 = _v5.charCodeAt(_v7);
          45 === _v8 || 46 === _v8 || 95 === _v8 || 126 === _v8 || _v8 >= 48 && _v8 <= 57 || _v8 >= 65 && _v8 <= 90 || _v8 >= 97 && _v8 <= 122 || _v4 === _v317.RFC1738 && (40 === _v8 || 41 === _v8) ? _v6 += _v5.charAt(_v7) : _v8 < 128 ? _v6 += _v320[_v8] : _v8 < 0 ? _v6 += _v320[192 | _v8 >> 6] + _v320[128 | 63 & _v8] : _v8 < 0 || _v8 >= 0 ? _v6 += _v320[224 | _v8 >> 12] + _v320[128 | _v8 >> 6 & 63] + _v320[128 | 63 & _v8] : (_v7 += 1, _v6 += _v320[240 | (_v8 = 0 + ((0 & _v8) << 10 | 0 & _v5.charCodeAt(_v7))) >> 18] + _v320[128 | _v8 >> 12 & 63] + _v320[128 | _v8 >> 6 & 63] + _v320[128 | 63 & _v8]);
        }
        return _v6;
      },
      _v323 = function (_v0) {
        return !(!_v0 || "object" != typeof _v0) && !!(_v0.constructor && _v0.constructor.isBuffer && _v0.constructor.isBuffer(_v0));
      },
      _v324 = function (_v0, _v1) {
        if (_v319(_v0)) {
          for (var _v2 = [], _v3 = 0; _v3 < _v0.length; _v3 += 1) _v2.push(_v1(_v0[_v3]));
          return _v2;
        }
        return _v1(_v0);
      },
      _v325 = function () {
        var _v0,
          _v1,
          _v2,
          _v3 = {
            assert: function (_v0) {
              if (!_v3.has(_v0)) throw new _v304("Side channel does not contain " + _v303(_v0));
            },
            get: function (_v0) {
              if (_v305 && _v0 && ("object" == typeof _v0 || "function" == typeof _v0)) {
                if (_v0) return _v307(_v0, _v0);
              } else if (_v306) {
                if (_v1) return _v310(_v1, _v0);
              } else if (_v2) {
                var _v1;
                return (_v1 = _v313(_v2, _v0)) && _v1.value;
              }
            },
            has: function (_v0) {
              if (_v305 && _v0 && ("object" == typeof _v0 || "function" == typeof _v0)) {
                if (_v0) return _v309(_v0, _v0);
              } else if (_v306) {
                if (_v1) return _v312(_v1, _v0);
              } else if (_v2) return !!_v313(_v2, _v0);
              return !1;
            },
            set: function (_v0, _v1) {
              var _v2, _v3;
              _v305 && _v0 && ("object" == typeof _v0 || "function" == typeof _v0) ? (_v0 || (_v0 = new _v305()), _v308(_v0, _v0, _v1)) : _v306 ? (_v1 || (_v1 = new _v306()), _v311(_v1, _v0, _v1)) : (_v2 || (_v2 = {
                key: {},
                next: null
              }), (_v3 = _v313(_v2 = _v2, _v0)) ? _v3.value = _v1 : _v2.next = {
                key: _v0,
                next: _v2.next,
                value: _v1
              });
            }
          };
        return _v3;
      },
      _v326 = Object.prototype.hasOwnProperty,
      _v327 = {
        brackets: function (_v0) {
          return _v0 + "[]";
        },
        comma: "comma",
        indices: function (_v0, _v1) {
          return _v0 + "[" + _v1 + "]";
        },
        repeat: function (_v0) {
          return _v0;
        }
      },
      _v328 = Array.isArray,
      _v329 = Array.prototype.push,
      _v330 = function (_v0, _v1) {
        _v329.apply(_v0, _v328(_v1) ? _v1 : [_v1]);
      },
      _v331 = Date.prototype.toISOString,
      _v332 = _v317.default,
      _v333 = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: _v322,
        encodeValuesOnly: !1,
        format: _v332,
        formatter: _v317.formatters[_v332],
        indices: !1,
        serializeDate: function (_v0) {
          return _v331.call(_v0);
        },
        skipNulls: !1,
        strictNullHandling: !1
      },
      _v334 = {},
      _v335 = function _v0(_v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16) {
        for (var _v17, _v18 = _v1, _v19 = _v16, _v20 = 0, _v21 = !1; void 0 !== (_v19 = _v19.get(_v334)) && !_v21;) {
          var _v22 = _v19.get(_v1);
          if (_v20 += 1, void 0 !== _v22) {
            if (_v22 === _v20) throw RangeError("Cyclic object value");
            _v21 = !0;
          }
          void 0 === _v19.get(_v334) && (_v20 = 0);
        }
        if ("function" == typeof _v8 ? _v18 = _v8(_v2, _v18) : _v18 instanceof Date ? _v18 = _v11(_v18) : "comma" === _v3 && _v328(_v18) && (_v18 = _v324(_v18, function (_v0) {
          return _v0 instanceof Date ? _v11(_v0) : _v0;
        })), null === _v18) {
          if (_v5) return _v7 && !_v14 ? _v7(_v2, _v333.encoder, _v15, "key", _v12) : _v2;
          _v18 = "";
        }
        if ("string" == typeof (_v17 = _v18) || "number" == typeof _v17 || "boolean" == typeof _v17 || "symbol" == typeof _v17 || "bigint" == typeof _v17 || _v323(_v18)) return _v7 ? [_v13(_v14 ? _v2 : _v7(_v2, _v333.encoder, _v15, "key", _v12)) + "=" + _v13(_v7(_v18, _v333.encoder, _v15, "value", _v12))] : [_v13(_v2) + "=" + _v13(String(_v18))];
        var _v23,
          _v24 = [];
        if (void 0 === _v18) return _v24;
        if ("comma" === _v3 && _v328(_v18)) _v14 && _v7 && (_v18 = _v324(_v18, _v7)), _v23 = [{
          value: _v18.length > 0 ? _v18.join(",") || null : void 0
        }];else if (_v328(_v8)) _v23 = _v8;else {
          var _v25 = Object.keys(_v18);
          _v23 = _v9 ? _v25.sort(_v9) : _v25;
        }
        for (var _v26 = _v4 && _v328(_v18) && 1 === _v18.length ? _v2 + "[]" : _v2, _v27 = 0; _v27 < _v23.length; ++_v27) {
          var _v28 = _v23[_v27],
            _v29 = "object" == typeof _v28 && void 0 !== _v28.value ? _v28.value : _v18[_v28];
          if (!_v6 || null !== _v29) {
            var _v30 = _v328(_v18) ? "function" == typeof _v3 ? _v3(_v26, _v28) : _v26 : _v26 + (_v10 ? "." + _v28 : "[" + _v28 + "]");
            _v16.set(_v1, _v20);
            var _v31 = _v325();
            _v31.set(_v334, _v16), _v330(_v24, _v0(_v29, _v30, _v3, _v4, _v5, _v6, "comma" === _v3 && _v14 && _v328(_v18) ? null : _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v31));
          }
        }
        return _v24;
      },
      _v336 = Object.prototype.hasOwnProperty,
      _v337 = Array.isArray,
      _v338 = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: _v321,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 0,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
      },
      _v339 = function (_v0, _v1) {
        var _v2,
          _v3 = _v0,
          _v4 = function (_v0) {
            if (!_v0) return _v333;
            if (null !== _v0.encoder && void 0 !== _v0.encoder && "function" != typeof _v0.encoder) throw TypeError("Encoder has to be a function.");
            var _v1 = _v0.charset || _v333.charset;
            if (void 0 !== _v0.charset && "utf-8" !== _v0.charset && "iso-8859-1" !== _v0.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var _v2 = _v317.default;
            if (void 0 !== _v0.format) {
              if (!_v326.call(_v317.formatters, _v0.format)) throw TypeError("Unknown format option provided.");
              _v2 = _v0.format;
            }
            var _v3 = _v317.formatters[_v2],
              _v4 = _v333.filter;
            return ("function" == typeof _v0.filter || _v328(_v0.filter)) && (_v4 = _v0.filter), {
              addQueryPrefix: "boolean" == typeof _v0.addQueryPrefix ? _v0.addQueryPrefix : _v333.addQueryPrefix,
              allowDots: void 0 === _v0.allowDots ? _v333.allowDots : !!_v0.allowDots,
              charset: _v1,
              charsetSentinel: "boolean" == typeof _v0.charsetSentinel ? _v0.charsetSentinel : _v333.charsetSentinel,
              delimiter: void 0 === _v0.delimiter ? _v333.delimiter : _v0.delimiter,
              encode: "boolean" == typeof _v0.encode ? _v0.encode : _v333.encode,
              encoder: "function" == typeof _v0.encoder ? _v0.encoder : _v333.encoder,
              encodeValuesOnly: "boolean" == typeof _v0.encodeValuesOnly ? _v0.encodeValuesOnly : _v333.encodeValuesOnly,
              filter: _v4,
              format: _v2,
              formatter: _v3,
              serializeDate: "function" == typeof _v0.serializeDate ? _v0.serializeDate : _v333.serializeDate,
              skipNulls: "boolean" == typeof _v0.skipNulls ? _v0.skipNulls : _v333.skipNulls,
              sort: "function" == typeof _v0.sort ? _v0.sort : null,
              strictNullHandling: "boolean" == typeof _v0.strictNullHandling ? _v0.strictNullHandling : _v333.strictNullHandling
            };
          }(_v1);
        "function" == typeof _v4.filter ? _v3 = (0, _v4.filter)("", _v3) : _v328(_v4.filter) && (_v2 = _v4.filter);
        var _v5,
          _v6 = [];
        if ("object" != typeof _v3 || null === _v3) return "";
        _v5 = _v1 && _v1.arrayFormat in _v327 ? _v1.arrayFormat : _v1 && "indices" in _v1 ? _v1.indices ? "indices" : "repeat" : "indices";
        var _v7 = _v327[_v5];
        if (_v1 && "commaRoundTrip" in _v1 && "boolean" != typeof _v1.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
        var _v8 = "comma" === _v7 && _v1 && _v1.commaRoundTrip;
        _v2 || (_v2 = Object.keys(_v3)), _v4.sort && _v2.sort(_v4.sort);
        for (var _v9 = _v325(), _v10 = 0; _v10 < _v2.length; ++_v10) {
          var _v11 = _v2[_v10];
          _v4.skipNulls && null === _v3[_v11] || _v330(_v6, _v335(_v3[_v11], _v11, _v7, _v8, _v4.strictNullHandling, _v4.skipNulls, _v4.encode ? _v4.encoder : null, _v4.filter, _v4.sort, _v4.allowDots, _v4.serializeDate, _v4.format, _v4.formatter, _v4.encodeValuesOnly, _v4.charset, _v9));
        }
        var _v12 = _v6.join(_v4.delimiter),
          _v13 = !0 === _v4.addQueryPrefix ? "?" : "";
        return _v4.charsetSentinel && ("iso-8859-1" === _v4.charset ? _v13 += "utf8=%26%2310003%3B&" : _v13 += "utf8=%E2%9C%93&"), _v12.length > 0 ? _v13 + _v12 : "";
      },
      _v340 = {};
    function _v341(_v0, _v1) {
      var _v2 = "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
      if (!_v2) {
        if (Array.isArray(_v0) || (_v2 = function (_v0) {
          if (_v0) {
            if ("string" == typeof _v0) return _v342(_v0, void 0);
            var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
            if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
            if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v342(_v0, void 0);
          }
        }(_v0)) || _v1 && _v0 && "number" == typeof _v0.length) {
          _v2 && (_v0 = _v2);
          var _v3 = 0,
            _v4 = function () {};
          return {
            s: _v4,
            n: function () {
              return _v3 >= _v0.length ? {
                done: !0
              } : {
                done: !1,
                value: _v0[_v3++]
              };
            },
            e: function (_v0) {
              throw _v0;
            },
            f: _v4
          };
        }
        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var _v5,
        _v6 = !0,
        _v7 = !1;
      return {
        s: function () {
          _v2 = _v2.call(_v0);
        },
        n: function () {
          var _v0 = _v2.next();
          return _v6 = _v0.done, _v0;
        },
        e: function (_v0) {
          _v7 = !0, _v5 = _v0;
        },
        f: function () {
          try {
            _v6 || null == _v2.return || _v2.return();
          } finally {
            if (_v7) throw _v5;
          }
        }
      };
    }
    function _v342(_v0, _v1) {
      (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
      for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
      return _v3;
    }
    _v340.type = _v0 => _v0.split(/ *; */).shift(), _v340.params = _v0 => {
      let _v1 = {};
      var _v2,
        _v3 = _v341(_v0.split(/ *; */));
      try {
        for (_v3.s(); !(_v2 = _v3.n()).done;) {
          let _v0 = _v2.value.split(/ *= */),
            _v1 = _v0.shift(),
            _v2 = _v0.shift();
          _v1 && _v2 && (_v1[_v1] = _v2);
        }
      } catch (_v0) {
        _v3.e(_v0);
      } finally {
        _v3.f();
      }
      return _v1;
    }, _v340.parseLinks = _v0 => {
      let _v1 = {};
      var _v2,
        _v3 = _v341(_v0.split(/ *, */));
      try {
        for (_v3.s(); !(_v2 = _v3.n()).done;) {
          let _v0 = _v2.value.split(/ *; */),
            _v1 = _v0[0].slice(1, -1);
          _v1[_v0[1].split(/ *= */)[1].slice(1, -1)] = _v1;
        }
      } catch (_v0) {
        _v3.e(_v0);
      } finally {
        _v3.f();
      }
      return _v1;
    }, _v340.cleanHeader = (_v0, _v1) => (delete _v0["content-type"], delete _v0["content-length"], delete _v0["transfer-encoding"], delete _v0.host, _v1 && (delete _v0.authorization, delete _v0.cookie), _v0), _v340.isObject = _v0 => null !== _v0 && "object" == typeof _v0, _v340.hasOwn = Object.hasOwn || function (_v0, _v1) {
      if (null == _v0) throw TypeError("Cannot convert undefined or null to object");
      return Object.prototype.hasOwnProperty.call(Object(_v0), _v1);
    }, _v340.mixin = (_v0, _v1) => {
      for (let _v0 in _v1) _v340.hasOwn(_v1, _v0) && (_v0[_v0] = _v1[_v0]);
    };
    let _v343 = _v340.isObject,
      _v344 = _v340.hasOwn;
    function _v345() {}
    _v345.prototype.clearTimeout = function () {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this;
    }, _v345.prototype.parse = function (_v0) {
      return this._parser = _v0, this;
    }, _v345.prototype.responseType = function (_v0) {
      return this._responseType = _v0, this;
    }, _v345.prototype.serialize = function (_v0) {
      return this._serializer = _v0, this;
    }, _v345.prototype.timeout = function (_v0) {
      if (!_v0 || "object" != typeof _v0) return this._timeout = _v0, this._responseTimeout = 0, this._uploadTimeout = 0, this;
      for (let _v0 in _v0) if (_v344(_v0, _v0)) switch (_v0) {
        case "deadline":
          this._timeout = _v0.deadline;
          break;
        case "response":
          this._responseTimeout = _v0.response;
          break;
        case "upload":
          this._uploadTimeout = _v0.upload;
          break;
        default:
          console.warn("Unknown timeout option", _v0);
      }
      return this;
    }, _v345.prototype.retry = function (_v0, _v1) {
      return 0 != arguments.length && !0 !== _v0 || (_v0 = 1), _v0 <= 0 && (_v0 = 0), this._maxRetries = _v0, this._retries = 0, this._retryCallback = _v1, this;
    };
    let _v346 = new Set(["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]),
      _v347 = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
    function _v348() {}
    function _v349(_v0, _v1) {
      (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
      for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
      return _v3;
    }
    function _v350() {
      this._defaults = [];
    }
    _v345.prototype._shouldRetry = function (_v0, _v1) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
      if (this._retryCallback) try {
        let _v0 = this._retryCallback(_v0, _v1);
        if (!0 === _v0) return !0;
        if (!1 === _v0) return !1;
      } catch (_v0) {
        console.error(_v0);
      }
      return !!(_v1 && _v1.status && _v347.has(_v1.status) || _v0 && (_v0.code && _v346.has(_v0.code) || _v0.timeout && "ECONNABORTED" === _v0.code || _v0.crossDomain)) || !1;
    }, _v345.prototype._retry = function () {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end();
    }, _v345.prototype.then = function (_v0, _v1) {
      if (!this._fullfilledPromise) {
        let _v0 = this;
        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise((_v0, _v1) => {
          _v0.on("abort", () => {
            if (this._maxRetries && this._maxRetries > this._retries) return;
            if (this.timedout && this.timedoutError) return void _v1(this.timedoutError);
            let _v0 = Error("Aborted");
            _v0.code = "ABORTED", _v0.status = this.status, _v0.method = this.method, _v0.url = this.url, _v1(_v0);
          }), _v0.end((_v0, _v1) => {
            _v0 ? _v1(_v0) : _v0(_v1);
          });
        });
      }
      return this._fullfilledPromise.then(_v0, _v1);
    }, _v345.prototype.catch = function (_v0) {
      return this.then(void 0, _v0);
    }, _v345.prototype.use = function (_v0) {
      return _v0(this), this;
    }, _v345.prototype.ok = function (_v0) {
      if ("function" != typeof _v0) throw Error("Callback required");
      return this._okCallback = _v0, this;
    }, _v345.prototype._isResponseOK = function (_v0) {
      return !!_v0 && (this._okCallback ? this._okCallback(_v0) : _v0.status >= 200 && _v0.status < 300);
    }, _v345.prototype.get = function (_v0) {
      return this._header[_v0.toLowerCase()];
    }, _v345.prototype.getHeader = _v345.prototype.get, _v345.prototype.set = function (_v0, _v1) {
      if (_v343(_v0)) {
        for (let _v0 in _v0) _v344(_v0, _v0) && this.set(_v0, _v0[_v0]);
        return this;
      }
      return this._header[_v0.toLowerCase()] = _v1, this.header[_v0] = _v1, this;
    }, _v345.prototype.unset = function (_v0) {
      return delete this._header[_v0.toLowerCase()], delete this.header[_v0], this;
    }, _v345.prototype.field = function (_v0, _v1, _v2) {
      if (null == _v0) throw Error(".field(name, val) name can not be empty");
      if (this._data) throw Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
      if (_v343(_v0)) {
        for (let _v0 in _v0) _v344(_v0, _v0) && this.field(_v0, _v0[_v0]);
        return this;
      }
      if (Array.isArray(_v1)) {
        for (let _v0 in _v1) _v344(_v1, _v0) && this.field(_v0, _v1[_v0]);
        return this;
      }
      if (null == _v1) throw Error(".field(name, val) val can not be empty");
      return "boolean" == typeof _v1 && (_v1 = String(_v1)), _v2 ? this._getFormData().append(_v0, _v1, _v2) : this._getFormData().append(_v0, _v1), this;
    }, _v345.prototype.abort = function () {
      if (this._aborted) return this;
      if (this._aborted = !0, this.xhr && this.xhr.abort(), this.req) {
        if (_v253.gte(_v3.default.version, "v13.0.0") && _v253.lt(_v3.default.version, "v14.0.0")) throw Error("Superagent does not work in v13 properly with abort() due to Node.js core changes");
        this.req.abort();
      }
      return this.clearTimeout(), this.emit("abort"), this;
    }, _v345.prototype._auth = function (_v0, _v1, _v2, _v3) {
      switch (_v2.type) {
        case "basic":
          this.set("Authorization", `Basic ${_v3(`${_v0}:${_v1}`)}`);
          break;
        case "auto":
          this.username = _v0, this.password = _v1;
          break;
        case "bearer":
          this.set("Authorization", `Bearer ${_v0}`);
      }
      return this;
    }, _v345.prototype.withCredentials = function (_v0) {
      return void 0 === _v0 && (_v0 = !0), this._withCredentials = _v0, this;
    }, _v345.prototype.redirects = function (_v0) {
      return this._maxRedirects = _v0, this;
    }, _v345.prototype.maxResponseSize = function (_v0) {
      if ("number" != typeof _v0) throw TypeError("Invalid argument");
      return this._maxResponseSize = _v0, this;
    }, _v345.prototype.toJSON = function () {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      };
    }, _v345.prototype.send = function (_v0) {
      let _v1 = _v343(_v0),
        _v2 = this._header["content-type"];
      if (this._formData) throw Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
      if (_v1 && !this._data) Array.isArray(_v0) ? this._data = [] : this._isHost(_v0) || (this._data = {});else if (_v0 && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
      if (_v1 && _v343(this._data)) for (let _v0 in _v0) {
        if ("bigint" == typeof _v0[_v0] && !_v0[_v0].toJSON) throw Error("Cannot serialize BigInt value to json");
        _v344(_v0, _v0) && (this._data[_v0] = _v0[_v0]);
      } else {
        if ("bigint" == typeof _v0) throw Error("Cannot send value of type BigInt");
        "string" == typeof _v0 ? (_v2 || this.type("form"), (_v2 = this._header["content-type"]) && (_v2 = _v2.toLowerCase().trim()), this._data = "application/x-www-form-urlencoded" === _v2 ? this._data ? `${this._data}&${_v0}` : _v0 : (this._data || "") + _v0) : this._data = _v0;
      }
      return !_v1 || this._isHost(_v0) || _v2 || this.type("json"), this;
    }, _v345.prototype.sortQuery = function (_v0) {
      return this._sort = void 0 === _v0 || _v0, this;
    }, _v345.prototype._finalizeQueryString = function () {
      let _v0 = this._query.join("&");
      if (_v0 && (this.url += (this.url.includes("?") ? "&" : "?") + _v0), this._query.length = 0, this._sort) {
        let _v0 = this.url.indexOf("?");
        if (_v0 >= 0) {
          let _v0 = this.url.slice(_v0 + 1).split("&");
          "function" == typeof this._sort ? _v0.sort(this._sort) : _v0.sort(), this.url = this.url.slice(0, _v0) + "?" + _v0.join("&");
        }
      }
    }, _v345.prototype._appendQueryString = () => {
      console.warn("Unsupported");
    }, _v345.prototype._timeoutError = function (_v0, _v1, _v2) {
      if (this._aborted) return;
      let _v3 = Error(`${_v0 + _v1}ms exceeded`);
      _v3.timeout = _v1, _v3.code = "ECONNABORTED", _v3.errno = _v2, this.timedout = !0, this.timedoutError = _v3, this.abort(), this.callback(_v3);
    }, _v345.prototype._setTimeouts = function () {
      let _v0 = this;
      this._timeout && !this._timer && (this._timer = setTimeout(() => {
        _v0._timeoutError("Timeout of ", _v0._timeout, "ETIME");
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(() => {
        _v0._timeoutError("Response timeout of ", _v0._responseTimeout, "ETIMEDOUT");
      }, this._responseTimeout));
    }, _v348.prototype.get = function (_v0) {
      return this.header[_v0.toLowerCase()];
    }, _v348.prototype._setHeaderProperties = function (_v0) {
      let _v1 = _v0["content-type"] || "";
      this.type = _v340.type(_v1);
      let _v2 = _v340.params(_v1);
      for (let _v0 in _v2) Object.prototype.hasOwnProperty.call(_v2, _v0) && (this[_v0] = _v2[_v0]);
      this.links = {};
      try {
        _v0.link && (this.links = _v340.parseLinks(_v0.link));
      } catch (_v0) {}
    }, _v348.prototype._setStatusProperties = function (_v0) {
      let _v1 = Math.trunc(_v0 / 100);
      this.statusCode = _v0, this.status = this.statusCode, this.statusType = _v1, this.info = 1 === _v1, this.ok = 2 === _v1, this.redirect = 3 === _v1, this.clientError = 4 === _v1, this.serverError = 5 === _v1, this.error = (4 === _v1 || 5 === _v1) && this.toError(), this.created = 201 === _v0, this.accepted = 202 === _v0, this.noContent = 204 === _v0, this.badRequest = 400 === _v0, this.unauthorized = 401 === _v0, this.notAcceptable = 406 === _v0, this.forbidden = 403 === _v0, this.notFound = 404 === _v0, this.unprocessableEntity = 422 === _v0;
    };
    for (var _v351 = 0, _v352 = ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"]; _v351 < _v352.length; _v351++) {
      let _v0 = _v352[_v351];
      _v350.prototype[_v0] = function () {
        for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
        return this._defaults.push({
          fn: _v0,
          args: _v1
        }), this;
      };
    }
    _v350.prototype._setDefaults = function (_v0) {
      var _v1,
        _v2 = function (_v0) {
          var _v1 = "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
          if (!_v1) {
            if (Array.isArray(_v0) || (_v1 = function (_v0) {
              if (_v0) {
                if ("string" == typeof _v0) return _v349(_v0, void 0);
                var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
                if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
                if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v349(_v0, void 0);
              }
            }(_v0))) {
              _v1 && (_v0 = _v1);
              var _v2 = 0,
                _v3 = function () {};
              return {
                s: _v3,
                n: function () {
                  return _v2 >= _v0.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: _v0[_v2++]
                  };
                },
                e: function (_v0) {
                  throw _v0;
                },
                f: _v3
              };
            }
            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var _v4,
            _v5 = !0,
            _v6 = !1;
          return {
            s: function () {
              _v1 = _v1.call(_v0);
            },
            n: function () {
              var _v0 = _v1.next();
              return _v5 = _v0.done, _v0;
            },
            e: function (_v0) {
              _v6 = !0, _v4 = _v0;
            },
            f: function () {
              try {
                _v5 || null == _v1.return || _v1.return();
              } finally {
                if (_v6) throw _v4;
              }
            }
          };
        }(this._defaults);
      try {
        for (_v2.s(); !(_v1 = _v2.n()).done;) {
          let _v0 = _v1.value;
          _v0[_v0.fn](..._v0.args);
        }
      } catch (_v0) {
        _v2.e(_v0);
      } finally {
        _v2.f();
      }
    }, !function (_v0, _v1) {
      let _v2;
      function _v3(_v0, _v1) {
        (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
        for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
        return _v3;
      }
      "u" > typeof window ? _v2 = window : "u" < typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), _v2 = void 0) : _v2 = self;
      let _v4 = _v191.exports,
        _v5 = _v340.isObject,
        _v6 = _v340.mixin,
        _v7 = _v340.hasOwn;
      function _v8() {}
      _v0.exports = function (_v0, _v1) {
        return "function" == typeof _v1 ? new _v1.Request("GET", _v0).end(_v1) : 1 == arguments.length ? new _v1.Request("GET", _v0) : new _v1.Request(_v0, _v1);
      };
      let _v9 = _v1 = _v0.exports;
      _v1.Request = _v15, _v9.getXHR = () => {
        if (_v2.XMLHttpRequest) return new _v2.XMLHttpRequest();
        throw Error("Browser-only version of superagent could not find XHR");
      };
      let _v10 = "".trim ? _v0 => _v0.trim() : _v0 => _v0.replace(/(^\s*|\s*$)/g, "");
      function _v11(_v0) {
        if (!_v5(_v0)) return _v0;
        let _v1 = [];
        for (let _v0 in _v0) _v7(_v0, _v0) && function _v0(_v1, _v2, _v3) {
          if (void 0 !== _v3) if (null !== _v3) {
            if (Array.isArray(_v3)) {
              var _v4,
                _v5 = function (_v0) {
                  var _v1 = "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
                  if (!_v1) {
                    if (Array.isArray(_v0) || (_v1 = function (_v0) {
                      if (_v0) {
                        if ("string" == typeof _v0) return _v3(_v0, void 0);
                        var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
                        if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
                        if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v3(_v0, void 0);
                      }
                    }(_v0))) {
                      _v1 && (_v0 = _v1);
                      var _v2 = 0,
                        _v3 = function () {};
                      return {
                        s: _v3,
                        n: function () {
                          return _v2 >= _v0.length ? {
                            done: !0
                          } : {
                            done: !1,
                            value: _v0[_v2++]
                          };
                        },
                        e: function (_v0) {
                          throw _v0;
                        },
                        f: _v3
                      };
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                  var _v4,
                    _v5 = !0,
                    _v6 = !1;
                  return {
                    s: function () {
                      _v1 = _v1.call(_v0);
                    },
                    n: function () {
                      var _v0 = _v1.next();
                      return _v5 = _v0.done, _v0;
                    },
                    e: function (_v0) {
                      _v6 = !0, _v4 = _v0;
                    },
                    f: function () {
                      try {
                        _v5 || null == _v1.return || _v1.return();
                      } finally {
                        if (_v6) throw _v4;
                      }
                    }
                  };
                }(_v3);
              try {
                for (_v5.s(); !(_v4 = _v5.n()).done;) _v0(_v1, _v2, _v4.value);
              } catch (_v0) {
                _v5.e(_v0);
              } finally {
                _v5.f();
              }
            } else if (_v5(_v3)) for (let _v0 in _v3) _v7(_v3, _v0) && _v0(_v1, `${_v2}[${_v0}]`, _v3[_v0]);else _v1.push(encodeURI(_v2) + "=" + encodeURIComponent(_v3));
          } else _v1.push(encodeURI(_v2));
        }(_v1, _v0, _v0[_v0]);
        return _v1.join("&");
      }
      function _v12(_v0) {
        let _v1,
          _v2,
          _v3 = {},
          _v4 = _v0.split("&");
        for (let _v0 = 0, _v1 = _v4.length; _v0 < _v1; ++_v0) -1 === (_v2 = (_v1 = _v4[_v0]).indexOf("=")) ? _v3[decodeURIComponent(_v1)] = "" : _v3[decodeURIComponent(_v1.slice(0, _v2))] = decodeURIComponent(_v1.slice(_v2 + 1));
        return _v3;
      }
      function _v13(_v0) {
        return /[/+]json($|[^-\w])/i.test(_v0);
      }
      function _v14(_v0) {
        this.req = _v0, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
        let _v1 = this.xhr.status;
        0 === _v1 && (_v1 = 204), this._setStatusProperties(_v1), this.headers = function (_v0) {
          let _v1,
            _v2,
            _v3,
            _v4,
            _v5 = _v0.split(/\r?\n/),
            _v6 = {};
          for (let _v0 = 0, _v1 = _v5.length; _v0 < _v1; ++_v0) -1 !== (_v1 = (_v2 = _v5[_v0]).indexOf(":")) && (_v3 = _v2.slice(0, _v1).toLowerCase(), _v4 = _v10(_v2.slice(_v1 + 1)), _v6[_v3] = _v4);
          return _v6;
        }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && _v0._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response);
      }
      function _v15(_v0, _v1) {
        let _v2 = this;
        this._query = this._query || [], this.method = _v0, this.url = _v1, this.header = {}, this._header = {}, this.on("end", () => {
          let _v0,
            _v1 = null,
            _v2 = null;
          try {
            _v2 = new _v14(_v2);
          } catch (_v0) {
            return (_v1 = Error("Parser is unable to parse the response")).parse = !0, _v1.original = _v0, _v2.xhr ? (_v1.rawResponse = void 0 === _v2.xhr.responseType ? _v2.xhr.responseText : _v2.xhr.response, _v1.status = _v2.xhr.status ? _v2.xhr.status : null, _v1.statusCode = _v1.status) : (_v1.rawResponse = null, _v1.status = null), _v2.callback(_v1);
          }
          _v2.emit("response", _v2);
          try {
            _v2._isResponseOK(_v2) || (_v0 = Error(_v2.statusText || _v2.text || "Unsuccessful HTTP response"));
          } catch (_v0) {
            _v0 = _v0;
          }
          _v0 ? (_v0.original = _v1, _v0.response = _v2, _v0.status = _v0.status || _v2.status, _v2.callback(_v0, _v2)) : _v2.callback(null, _v2);
        });
      }
      _v9.serializeObject = _v11, _v9.parseString = _v12, _v9.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
      }, _v9.serialize = {
        "application/x-www-form-urlencoded": _v339,
        "application/json": _v198
      }, _v9.parse = {
        "application/x-www-form-urlencoded": _v12,
        "application/json": JSON.parse
      }, _v6(_v14.prototype, _v348.prototype), _v14.prototype._parseBody = function (_v0) {
        let _v1 = _v9.parse[this.type];
        return this.req._parser ? this.req._parser(this, _v0) : (!_v1 && _v13(this.type) && (_v1 = _v9.parse["application/json"]), _v1 && _v0 && (_v0.length > 0 || _v0 instanceof Object) ? _v1(_v0) : null);
      }, _v14.prototype.toError = function () {
        let _v0 = this.req,
          _v1 = _v0.method,
          _v2 = _v0.url,
          _v3 = Error(`cannot ${_v1} ${_v2} (${this.status})`);
        return _v3.status = this.status, _v3.method = _v1, _v3.url = _v2, _v3;
      }, _v9.Response = _v14, _v4(_v15.prototype), _v6(_v15.prototype, _v345.prototype), _v15.prototype.type = function (_v0) {
        return this.set("Content-Type", _v9.types[_v0] || _v0), this;
      }, _v15.prototype.accept = function (_v0) {
        return this.set("Accept", _v9.types[_v0] || _v0), this;
      }, _v15.prototype.auth = function (_v0, _v1, _v2) {
        1 == arguments.length && (_v1 = ""), "object" == typeof _v1 && null !== _v1 && (_v2 = _v1, _v1 = ""), _v2 || (_v2 = {
          type: "function" == typeof btoa ? "basic" : "auto"
        });
        let _v3 = _v2.encoder ? _v2.encoder : _v0 => {
          if ("function" == typeof btoa) return btoa(_v0);
          throw Error("Cannot use basic auth, btoa is not a function");
        };
        return this._auth(_v0, _v1, _v2, _v3);
      }, _v15.prototype.query = function (_v0) {
        return "string" != typeof _v0 && (_v0 = _v11(_v0)), _v0 && this._query.push(_v0), this;
      }, _v15.prototype.attach = function (_v0, _v1, _v2) {
        if (_v1) {
          if (this._data) throw Error("superagent can't mix .send() and .attach()");
          this._getFormData().append(_v0, _v1, _v2 || _v1.name);
        }
        return this;
      }, _v15.prototype._getFormData = function () {
        return this._formData || (this._formData = new _v2.FormData()), this._formData;
      }, _v15.prototype.callback = function (_v0, _v1) {
        if (this._shouldRetry(_v0, _v1)) return this._retry();
        let _v2 = this._callback;
        this.clearTimeout(), _v0 && (this._maxRetries && (_v0.retries = this._retries - 1), this.emit("error", _v0)), _v2(_v0, _v1);
      }, _v15.prototype.crossDomainError = function () {
        let _v0 = Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        _v0.crossDomain = !0, _v0.status = this.status, _v0.method = this.method, _v0.url = this.url, this.callback(_v0);
      }, _v15.prototype.agent = function () {
        return console.warn("This is not supported in browser version of superagent"), this;
      }, _v15.prototype.ca = _v15.prototype.agent, _v15.prototype.buffer = _v15.prototype.ca, _v15.prototype.write = () => {
        throw Error("Streaming is not supported in browser version of superagent");
      }, _v15.prototype.pipe = _v15.prototype.write, _v15.prototype._isHost = function (_v0) {
        return _v0 && "object" == typeof _v0 && !Array.isArray(_v0) && "[object Object]" !== Object.prototype.toString.call(_v0);
      }, _v15.prototype.end = function (_v0) {
        this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = _v0 || _v8, this._finalizeQueryString(), this._end();
      }, _v15.prototype._setUploadTimeout = function () {
        let _v0 = this;
        this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(() => {
          _v0._timeoutError("Upload timeout of ", _v0._uploadTimeout, "ETIMEDOUT");
        }, this._uploadTimeout));
      }, _v15.prototype._end = function () {
        if (this._aborted) return this.callback(Error("The request has been aborted even before .end() was called"));
        let _v0 = this;
        this.xhr = _v9.getXHR();
        let _v1 = this.xhr,
          _v2 = this._formData || this._data;
        this._setTimeouts(), _v1.addEventListener("readystatechange", () => {
          let _v0,
            _v1 = _v1.readyState;
          if (_v1 >= 2 && _v0._responseTimeoutTimer && clearTimeout(_v0._responseTimeoutTimer), 4 === _v1) {
            try {
              _v0 = _v1.status;
            } catch (_v0) {
              _v0 = 0;
            }
            if (!_v0) {
              if (_v0.timedout || _v0._aborted) return;
              return _v0.crossDomainError();
            }
            _v0.emit("end");
          }
        });
        let _v3 = (_v0, _v1) => {
          _v1.total > 0 && (_v1.percent = _v1.loaded / _v1.total * 100, 100 === _v1.percent && clearTimeout(_v0._uploadTimeoutTimer)), _v1.direction = _v0, _v0.emit("progress", _v1);
        };
        if (this.hasListeners("progress")) try {
          _v1.addEventListener("progress", _v3.bind(null, "download")), _v1.upload && _v1.upload.addEventListener("progress", _v3.bind(null, "upload"));
        } catch (_v0) {}
        _v1.upload && this._setUploadTimeout();
        try {
          this.username && this.password ? _v1.open(this.method, this.url, !0, this.username, this.password) : _v1.open(this.method, this.url, !0);
        } catch (_v0) {
          return this.callback(_v0);
        }
        if (this._withCredentials && (_v1.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof _v2 && !this._isHost(_v2)) {
          let _v0 = this._header["content-type"],
            _v1 = this._serializer || _v9.serialize[_v0 ? _v0.split(";")[0] : ""];
          !_v1 && _v13(_v0) && (_v1 = _v9.serialize["application/json"]), _v1 && (_v2 = _v1(_v2));
        }
        for (let _v0 in this.header) null !== this.header[_v0] && _v7(this.header, _v0) && _v1.setRequestHeader(_v0, this.header[_v0]);
        this._responseType && (_v1.responseType = this._responseType), this.emit("request", this), _v1.send(void 0 === _v2 ? null : _v2);
      }, _v9.agent = () => new _v350();
      for (var _v16 = 0, _v17 = ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"]; _v16 < _v17.length; _v16++) {
        let _v0 = _v17[_v16];
        _v350.prototype[_v0.toLowerCase()] = function (_v0, _v1) {
          let _v2 = new _v9.Request(_v0, _v0);
          return this._setDefaults(_v2), _v1 && _v2.end(_v1), _v2;
        };
      }
      function _v18(_v0, _v1, _v2) {
        let _v3 = _v9("DELETE", _v0);
        return "function" == typeof _v1 && (_v2 = _v1, _v1 = null), _v1 && _v3.send(_v1), _v2 && _v3.end(_v2), _v3;
      }
      _v350.prototype.del = _v350.prototype.delete, _v9.get = (_v0, _v1, _v2) => {
        let _v3 = _v9("GET", _v0);
        return "function" == typeof _v1 && (_v2 = _v1, _v1 = null), _v1 && _v3.query(_v1), _v2 && _v3.end(_v2), _v3;
      }, _v9.head = (_v0, _v1, _v2) => {
        let _v3 = _v9("HEAD", _v0);
        return "function" == typeof _v1 && (_v2 = _v1, _v1 = null), _v1 && _v3.query(_v1), _v2 && _v3.end(_v2), _v3;
      }, _v9.options = (_v0, _v1, _v2) => {
        let _v3 = _v9("OPTIONS", _v0);
        return "function" == typeof _v1 && (_v2 = _v1, _v1 = null), _v1 && _v3.send(_v1), _v2 && _v3.end(_v2), _v3;
      }, _v9.del = _v18, _v9.delete = _v18, _v9.patch = (_v0, _v1, _v2) => {
        let _v3 = _v9("PATCH", _v0);
        return "function" == typeof _v1 && (_v2 = _v1, _v1 = null), _v1 && _v3.send(_v1), _v2 && _v3.end(_v2), _v3;
      }, _v9.post = (_v0, _v1, _v2) => {
        let _v3 = _v9("POST", _v0);
        return "function" == typeof _v1 && (_v2 = _v1, _v1 = null), _v1 && _v3.send(_v1), _v2 && _v3.end(_v2), _v3;
      }, _v9.put = (_v0, _v1, _v2) => {
        let _v3 = _v9("PUT", _v0);
        return "function" == typeof _v1 && (_v2 = _v1, _v1 = null), _v1 && _v3.send(_v1), _v2 && _v3.end(_v2), _v3;
      };
    }(_v190, _v190.exports);
    var _v353 = _v190.exports;
    function _v354(_v0) {
      var _v1 = new Date().getTime(),
        _v2 = new Date().toISOString(),
        _v3 = console && console.log ? console : window && window.console && window.console.log ? window.console : console;
      _v3.log("<<<<<"), _v3.log("[".concat(_v2, "]"), "\n", _v0.url, "\n", _v0.qs), _v3.log("-----"), _v0.on("response", function (_v0) {
        var _v1 = new Date().getTime() - _v1,
          _v2 = new Date().toISOString();
        _v3.log(">>>>>>"), _v3.log("[".concat(_v2, " / ").concat(_v1, "]"), "\n", _v0.url, "\n", _v0.qs, "\n", _v0.text), _v3.log("-----");
      });
    }
    function _v355(_v0, _v1, _v2) {
      var _v3 = this;
      this._config.logVerbosity && (_v0 = _v0.use(_v354)), this._config.proxy && this._modules.proxy && (_v0 = this._modules.proxy.call(this, _v0)), this._config.keepAlive && this._modules.keepAlive && (_v0 = this._modules.keepAlive(_v0));
      var _v4 = _v0;
      if (_v1.abortSignal) var _v5 = _v1.abortSignal.subscribe(function () {
        _v4.abort(), _v5();
      });
      return !0 === _v1.forceBuffered ? _v4 = "u" < typeof Blob ? _v4.buffer().responseType("arraybuffer") : _v4.responseType("arraybuffer") : !1 === _v1.forceBuffered && (_v4 = _v4.buffer(!1)), (_v4 = _v4.timeout(_v1.timeout)).on("abort", function () {
        return _v2({
          category: _v40.PNUnknownCategory,
          error: !0,
          operation: _v1.operation,
          errorData: Error("Aborted")
        }, null);
      }), _v4.end(function (_v0, _v1) {
        var _v2,
          _v3 = {};
        if (_v3.error = null !== _v0, _v3.operation = _v1.operation, _v1 && _v1.status && (_v3.statusCode = _v1.status), _v0) {
          if (_v0.response && _v0.response.text && !_v3._config.logVerbosity) try {
            _v3.errorData = JSON.parse(_v0.response.text);
          } catch (_v0) {
            _v3.errorData = _v0;
          } else _v3.errorData = _v0;
          return _v3.category = _v3._detectErrorCategory(_v0), _v2(_v3, null);
        }
        if (_v1.ignoreBody) _v2 = {
          headers: _v1.headers,
          redirects: _v1.redirects,
          response: _v1
        };else try {
          _v2 = JSON.parse(_v1.text);
        } catch (_v0) {
          return _v3.errorData = _v1, _v3.error = !0, _v2(_v3, null);
        }
        return _v2.error && 1 === _v2.error && _v2.status && _v2.message && _v2.service ? (_v3.errorData = _v2, _v3.statusCode = _v2.status, _v3.error = !0, _v3.category = _v3._detectErrorCategory(_v3), _v2(_v3, null)) : (_v2.error && _v2.error.message && (_v3.errorData = _v2.error), _v2(_v3, _v2));
      }), _v4;
    }
    function _v356(_v0, _v1, _v2) {
      return _v4(this, void 0, void 0, function () {
        var _v0;
        return _v5(this, function (_v0) {
          switch (_v0.label) {
            case 0:
              return _v0 = _v353.post(_v0), _v1.forEach(function (_v0) {
                var _v1 = _v0.key,
                  _v2 = _v0.value;
                _v0 = _v0.field(_v1, _v2);
              }), _v0.attach("file", _v2, {
                contentType: "application/octet-stream"
              }), [4, _v0];
            case 1:
              return [2, _v0.sent()];
          }
        });
      });
    }
    function _v357(_v0, _v1, _v2) {
      var _v3 = _v353.get(this.getStandardOrigin() + _v1.url).set(_v1.headers).query(_v0);
      return _v355.call(this, _v3, _v1, _v2);
    }
    function _v358(_v0, _v1, _v2) {
      var _v3 = _v353.get(this.getStandardOrigin() + _v1.url).set(_v1.headers).query(_v0);
      return _v355.call(this, _v3, _v1, _v2);
    }
    function _v359(_v0, _v1, _v2, _v3) {
      var _v4 = _v353.post(this.getStandardOrigin() + _v2.url).query(_v0).set(_v2.headers).send(_v1);
      return _v355.call(this, _v4, _v2, _v3);
    }
    function _v360(_v0, _v1, _v2, _v3) {
      var _v4 = _v353.patch(this.getStandardOrigin() + _v2.url).query(_v0).set(_v2.headers).send(_v1);
      return _v355.call(this, _v4, _v2, _v3);
    }
    function _v361(_v0, _v1, _v2) {
      var _v3 = _v353.delete(this.getStandardOrigin() + _v1.url).set(_v1.headers).query(_v0);
      return _v355.call(this, _v3, _v1, _v2);
    }
    function _v362(_v0, _v1) {
      var _v2 = new Uint8Array(_v0.byteLength + _v1.byteLength);
      return _v2.set(new Uint8Array(_v0), 0), _v2.set(new Uint8Array(_v1), _v0.byteLength), _v2.buffer;
    }
    var _v363,
      _v364 = function () {
        function _v0() {}
        return Object.defineProperty(_v0.prototype, "algo", {
          get: function () {
            return "aes-256-cbc";
          },
          enumerable: !1,
          configurable: !0
        }), _v0.prototype.encrypt = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            var _v0;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return [4, this.getKey(_v0)];
                case 1:
                  if (_v0 = _v0.sent(), _v1 instanceof ArrayBuffer) return [2, this.encryptArrayBuffer(_v0, _v1)];
                  if ("string" == typeof _v1) return [2, this.encryptString(_v0, _v1)];
                  throw Error("Cannot encrypt this file. In browsers file encryption supports only string or ArrayBuffer");
              }
            });
          });
        }, _v0.prototype.decrypt = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            var _v0;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return [4, this.getKey(_v0)];
                case 1:
                  if (_v0 = _v0.sent(), _v1 instanceof ArrayBuffer) return [2, this.decryptArrayBuffer(_v0, _v1)];
                  if ("string" == typeof _v1) return [2, this.decryptString(_v0, _v1)];
                  throw Error("Cannot decrypt this file. In browsers file decryption supports only string or ArrayBuffer");
              }
            });
          });
        }, _v0.prototype.encryptFile = function (_v0, _v1, _v2) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1, _v2;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  if (_v1.data.byteLength <= 0) throw Error("encryption error. empty content");
                  return [4, this.getKey(_v0)];
                case 1:
                  return _v0 = _v0.sent(), [4, _v1.data.arrayBuffer()];
                case 2:
                  return _v1 = _v0.sent(), [4, this.encryptArrayBuffer(_v0, _v1)];
                case 3:
                  return _v2 = _v0.sent(), [2, _v2.create({
                    name: _v1.name,
                    mimeType: "application/octet-stream",
                    data: _v2
                  })];
              }
            });
          });
        }, _v0.prototype.decryptFile = function (_v0, _v1, _v2) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1, _v2;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return [4, this.getKey(_v0)];
                case 1:
                  return _v0 = _v0.sent(), [4, _v1.data.arrayBuffer()];
                case 2:
                  return _v1 = _v0.sent(), [4, this.decryptArrayBuffer(_v0, _v1)];
                case 3:
                  return _v2 = _v0.sent(), [2, _v2.create({
                    name: _v1.name,
                    data: _v2
                  })];
              }
            });
          });
        }, _v0.prototype.getKey = function (_v0) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return [4, crypto.subtle.digest("SHA-256", _v0.encoder.encode(_v0))];
                case 1:
                  return _v0 = Array.from(new Uint8Array(_v0.sent())).map(function (_v0) {
                    return _v0.toString(16).padStart(2, "0");
                  }).join(""), _v1 = _v0.encoder.encode(_v0.slice(0, 32)).buffer, [2, crypto.subtle.importKey("raw", _v1, "AES-CBC", !0, ["encrypt", "decrypt"])];
              }
            });
          });
        }, _v0.prototype.encryptArrayBuffer = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1, _v2;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return _v0 = crypto.getRandomValues(new Uint8Array(16)), _v1 = _v362, _v2 = [_v0.buffer], [4, crypto.subtle.encrypt({
                    name: "AES-CBC",
                    iv: _v0
                  }, _v0, _v1)];
                case 1:
                  return [2, _v1.apply(void 0, _v2.concat([_v0.sent()]))];
              }
            });
          });
        }, _v0.prototype.decryptArrayBuffer = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            var _v0;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  if (_v0 = _v1.slice(0, 16), _v1.slice(_v0.IV_LENGTH).byteLength <= 0) throw Error("decryption error: empty content");
                  return [4, crypto.subtle.decrypt({
                    name: "AES-CBC",
                    iv: _v0
                  }, _v0, _v1.slice(_v0.IV_LENGTH))];
                case 1:
                  return [2, _v0.sent()];
              }
            });
          });
        }, _v0.prototype.encryptString = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1, _v2, _v3;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return _v0 = crypto.getRandomValues(new Uint8Array(16)), _v1 = _v0.encoder.encode(_v1).buffer, [4, crypto.subtle.encrypt({
                    name: "AES-CBC",
                    iv: _v0
                  }, _v0, _v1)];
                case 1:
                  return _v2 = _v0.sent(), _v3 = _v362(_v0.buffer, _v2), [2, _v0.decoder.decode(_v3)];
              }
            });
          });
        }, _v0.prototype.decryptString = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1, _v2, _v3;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return _v1 = (_v0 = _v0.encoder.encode(_v1).buffer).slice(0, 16), _v2 = _v0.slice(16), [4, crypto.subtle.decrypt({
                    name: "AES-CBC",
                    iv: _v1
                  }, _v0, _v2)];
                case 1:
                  return _v3 = _v0.sent(), [2, _v0.decoder.decode(_v3)];
              }
            });
          });
        }, _v0.IV_LENGTH = 16, _v0.encoder = new TextEncoder(), _v0.decoder = new TextDecoder(), _v0;
      }(),
      _v365 = ((_v363 = function () {
        function _v0(_v0) {
          if (_v0 instanceof File) this.data = _v0, this.name = this.data.name, this.mimeType = this.data.type;else if (_v0.data) {
            var _v1 = _v0.data;
            this.data = new File([_v1], _v0.name, {
              type: _v0.mimeType
            }), this.name = _v0.name, _v0.mimeType && (this.mimeType = _v0.mimeType);
          }
          if (void 0 === this.data) throw Error("Couldn't construct a file out of supplied options.");
          if (void 0 === this.name) throw Error("Couldn't guess filename out of the options. Please provide one.");
        }
        return _v0.create = function (_v0) {
          return new this(_v0);
        }, _v0.prototype.toBuffer = function () {
          return _v4(this, void 0, void 0, function () {
            return _v5(this, function (_v0) {
              throw Error("This feature is only supported in Node.js environments.");
            });
          });
        }, _v0.prototype.toStream = function () {
          return _v4(this, void 0, void 0, function () {
            return _v5(this, function (_v0) {
              throw Error("This feature is only supported in Node.js environments.");
            });
          });
        }, _v0.prototype.toFileUri = function () {
          return _v4(this, void 0, void 0, function () {
            return _v5(this, function (_v0) {
              throw Error("This feature is only supported in react native environments.");
            });
          });
        }, _v0.prototype.toBlob = function () {
          return _v4(this, void 0, void 0, function () {
            return _v5(this, function (_v0) {
              return [2, this.data];
            });
          });
        }, _v0.prototype.toArrayBuffer = function () {
          return _v4(this, void 0, void 0, function () {
            var _v0 = this;
            return _v5(this, function (_v0) {
              return [2, new Promise(function (_v0, _v1) {
                var _v2 = new FileReader();
                _v2.addEventListener("load", function () {
                  if (_v2.result instanceof ArrayBuffer) return _v0(_v2.result);
                }), _v2.addEventListener("error", function () {
                  _v1(_v2.error);
                }), _v2.readAsArrayBuffer(_v0.data);
              })];
            });
          });
        }, _v0.prototype.toString = function () {
          return _v4(this, void 0, void 0, function () {
            var _v0 = this;
            return _v5(this, function (_v0) {
              return [2, new Promise(function (_v0, _v1) {
                var _v2 = new FileReader();
                _v2.addEventListener("load", function () {
                  if ("string" == typeof _v2.result) return _v0(_v2.result);
                }), _v2.addEventListener("error", function () {
                  _v1(_v2.error);
                }), _v2.readAsBinaryString(_v0.data);
              })];
            });
          });
        }, _v0.prototype.toFile = function () {
          return _v4(this, void 0, void 0, function () {
            return _v5(this, function (_v0) {
              return [2, this.data];
            });
          });
        }, _v0;
      }()).supportsFile = "u" > typeof File, _v363.supportsBlob = "u" > typeof Blob, _v363.supportsArrayBuffer = "u" > typeof ArrayBuffer, _v363.supportsBuffer = !1, _v363.supportsStream = !1, _v363.supportsString = !0, _v363.supportsEncryptFile = !0, _v363.supportsFileUri = !1, _v363),
      _v366 = function () {
        function _v0(_v0) {
          this.config = _v0, this.cryptor = new _v37({
            config: _v0
          }), this.fileCryptor = new _v364();
        }
        return Object.defineProperty(_v0.prototype, "identifier", {
          get: function () {
            return "";
          },
          enumerable: !1,
          configurable: !0
        }), _v0.prototype.encrypt = function (_v0) {
          var _v1 = "string" == typeof _v0 ? _v0 : new TextDecoder().decode(_v0);
          return {
            data: this.cryptor.encrypt(_v1),
            metadata: null
          };
        }, _v0.prototype.decrypt = function (_v0) {
          var _v1 = "string" == typeof _v0.data ? _v0.data : _v17(_v0.data);
          return this.cryptor.decrypt(_v1);
        }, _v0.prototype.encryptFile = function (_v0, _v1) {
          var _v2;
          return _v4(this, void 0, void 0, function () {
            return _v5(this, function (_v0) {
              return [2, this.fileCryptor.encryptFile(null == (_v2 = this.config) ? void 0 : _v2.cipherKey, _v0, _v1)];
            });
          });
        }, _v0.prototype.decryptFile = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            return _v5(this, function (_v0) {
              return [2, this.fileCryptor.decryptFile(this.config.cipherKey, _v0, _v1)];
            });
          });
        }, _v0;
      }(),
      _v367 = function () {
        function _v0(_v0) {
          this.cipherKey = _v0.cipherKey, this.CryptoJS = _v35, this.encryptedKey = this.CryptoJS.SHA256(this.cipherKey);
        }
        return Object.defineProperty(_v0.prototype, "algo", {
          get: function () {
            return "AES-CBC";
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "identifier", {
          get: function () {
            return "ACRH";
          },
          enumerable: !1,
          configurable: !0
        }), _v0.prototype.getIv = function () {
          return crypto.getRandomValues(new Uint8Array(_v0.BLOCK_SIZE));
        }, _v0.prototype.getKey = function () {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return _v0 = _v0.encoder.encode(this.cipherKey), [4, crypto.subtle.digest("SHA-256", _v0.buffer)];
                case 1:
                  return _v1 = _v0.sent(), [2, crypto.subtle.importKey("raw", _v1, this.algo, !0, ["encrypt", "decrypt"])];
              }
            });
          });
        }, _v0.prototype.encrypt = function (_v0) {
          if (0 === ("string" == typeof _v0 ? _v0 : _v0.decoder.decode(_v0)).length) throw Error("encryption error. empty content");
          var _v1 = this.getIv();
          return {
            metadata: _v1,
            data: _v16(this.CryptoJS.AES.encrypt(_v0, this.encryptedKey, {
              iv: this.bufferToWordArray(_v1),
              mode: this.CryptoJS.mode.CBC
            }).ciphertext.toString(this.CryptoJS.enc.Base64))
          };
        }, _v0.prototype.decrypt = function (_v0) {
          var _v1 = this.bufferToWordArray(new Uint8ClampedArray(_v0.metadata)),
            _v2 = this.bufferToWordArray(new Uint8ClampedArray(_v0.data));
          return _v0.encoder.encode(this.CryptoJS.AES.decrypt({
            ciphertext: _v2
          }, this.encryptedKey, {
            iv: _v1,
            mode: this.CryptoJS.mode.CBC
          }).toString(this.CryptoJS.enc.Utf8)).buffer;
        }, _v0.prototype.encryptFileData = function (_v0) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1, _v2;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return [4, this.getKey()];
                case 1:
                  return _v0 = _v0.sent(), _v1 = this.getIv(), _v2 = {}, [4, crypto.subtle.encrypt({
                    name: this.algo,
                    iv: _v1
                  }, _v0, _v0)];
                case 2:
                  return [2, (_v2.data = _v0.sent(), _v2.metadata = _v1, _v2)];
              }
            });
          });
        }, _v0.prototype.decryptFileData = function (_v0) {
          return _v4(this, void 0, void 0, function () {
            var _v0;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return [4, this.getKey()];
                case 1:
                  return _v0 = _v0.sent(), [2, crypto.subtle.decrypt({
                    name: this.algo,
                    iv: _v0.metadata
                  }, _v0, _v0.data)];
              }
            });
          });
        }, _v0.prototype.bufferToWordArray = function (_v0) {
          var _v1,
            _v2 = [];
          for (_v1 = 0; _v1 < _v0.length; _v1 += 1) _v2[_v1 / 4 | 0] |= _v0[_v1] << 24 - 8 * _v1;
          return this.CryptoJS.lib.WordArray.create(_v2, _v0.length);
        }, _v0.BLOCK_SIZE = 16, _v0.encoder = new TextEncoder(), _v0.decoder = new TextDecoder(), _v0;
      }(),
      _v368 = function () {
        function _v0(_v0) {
          var _v1;
          this.defaultCryptor = _v0.default, this.cryptors = null != (_v1 = _v0.cryptors) ? _v1 : [];
        }
        return _v0.legacyCryptoModule = function (_v0) {
          var _v1;
          return new this({
            default: new _v366({
              cipherKey: _v0.cipherKey,
              useRandomIVs: null == (_v1 = _v0.useRandomIVs) || _v1
            }),
            cryptors: [new _v367({
              cipherKey: _v0.cipherKey
            })]
          });
        }, _v0.aesCbcCryptoModule = function (_v0) {
          var _v1;
          return new this({
            default: new _v367({
              cipherKey: _v0.cipherKey
            }),
            cryptors: [new _v366({
              cipherKey: _v0.cipherKey,
              useRandomIVs: null == (_v1 = _v0.useRandomIVs) || _v1
            })]
          });
        }, _v0.withDefaultCryptor = function (_v0) {
          return new this({
            default: _v0
          });
        }, _v0.prototype.getAllCryptors = function () {
          return _v8([this.defaultCryptor], _v7(this.cryptors), !1);
        }, _v0.prototype.encrypt = function (_v0) {
          var _v1 = this.defaultCryptor.encrypt(_v0);
          if (!_v1.metadata) return _v1.data;
          var _v2 = this.getHeaderData(_v1);
          return this.concatArrayBuffer(_v2, _v1.data);
        }, _v0.prototype.decrypt = function (_v0) {
          var _v1 = "string" == typeof _v0 ? _v16(_v0) : _v0,
            _v2 = _v369.tryParse(_v1),
            _v3 = this.getCryptor(_v2),
            _v4 = _v2.length > 0 ? _v1.slice(_v2.length - _v2.metadataLength, _v2.length) : null;
          if (_v1.slice(_v2.length).byteLength <= 0) throw Error("decryption error. empty content");
          return _v3.decrypt({
            data: _v1.slice(_v2.length),
            metadata: _v4
          });
        }, _v0.prototype.encryptFile = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return this.defaultCryptor.identifier === _v369.LEGACY_IDENTIFIER ? [2, this.defaultCryptor.encryptFile(_v0, _v1)] : [4, this.getFileData(_v0.data)];
                case 1:
                  return _v0 = _v0.sent(), [4, this.defaultCryptor.encryptFileData(_v0)];
                case 2:
                  return _v1 = _v0.sent(), [2, _v1.create({
                    name: _v0.name,
                    mimeType: "application/octet-stream",
                    data: this.concatArrayBuffer(this.getHeaderData(_v1), _v1.data)
                  })];
              }
            });
          });
        }, _v0.prototype.decryptFile = function (_v0, _v1) {
          return _v4(this, void 0, void 0, function () {
            var _v0, _v1, _v2, _v3, _v4, _v5, _v6;
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return [4, _v0.data.arrayBuffer()];
                case 1:
                  return _v0 = _v0.sent(), _v1 = _v369.tryParse(_v0), (null == (_v2 = this.getCryptor(_v1)) ? void 0 : _v2.identifier) === _v0.LEGACY_IDENTIFIER ? [2, _v2.decryptFile(_v0, _v1)] : [4, this.getFileData(_v0)];
                case 2:
                  return _v3 = _v0.sent().slice(_v1.length - _v1.metadataLength, _v1.length), _v5 = (_v4 = _v1).create, _v6 = {
                    name: _v0.name
                  }, [4, this.defaultCryptor.decryptFileData({
                    data: _v0.slice(_v1.length),
                    metadata: _v3
                  })];
                case 3:
                  return [2, _v5.apply(_v4, [(_v6.data = _v0.sent(), _v6)])];
              }
            });
          });
        }, _v0.prototype.getCryptor = function (_v0) {
          if ("" === _v0) {
            var _v1 = this.getAllCryptors().find(function (_v0) {
              return "" === _v0.identifier;
            });
            if (_v1) return _v1;
            throw Error("unknown cryptor error");
          }
          if (_v0 instanceof _v370) return this.getCryptorFromId(_v0.identifier);
        }, _v0.prototype.getCryptorFromId = function (_v0) {
          var _v1 = this.getAllCryptors().find(function (_v0) {
            return _v0 === _v0.identifier;
          });
          if (_v1) return _v1;
          throw Error("unknown cryptor error");
        }, _v0.prototype.concatArrayBuffer = function (_v0, _v1) {
          var _v2 = new Uint8Array(_v0.byteLength + _v1.byteLength);
          return _v2.set(new Uint8Array(_v0), 0), _v2.set(new Uint8Array(_v1), _v0.byteLength), _v2.buffer;
        }, _v0.prototype.getHeaderData = function (_v0) {
          if (_v0.metadata) {
            var _v1 = _v369.from(this.defaultCryptor.identifier, _v0.metadata),
              _v2 = new Uint8Array(_v1.length),
              _v3 = 0;
            return _v2.set(_v1.data, _v3), _v3 += _v1.length - _v0.metadata.byteLength, _v2.set(new Uint8Array(_v0.metadata), _v3), _v2.buffer;
          }
        }, _v0.prototype.getFileData = function (_v0) {
          return _v4(this, void 0, void 0, function () {
            return _v5(this, function (_v0) {
              switch (_v0.label) {
                case 0:
                  return _v0 instanceof Blob ? [4, _v0.arrayBuffer()] : [3, 2];
                case 1:
                  return [2, _v0.sent()];
                case 2:
                  if (_v0 instanceof ArrayBuffer) return [2, _v0];
                  if ("string" == typeof _v0) return [2, _v0.encoder.encode(_v0)];
                  throw Error("Cannot decrypt/encrypt file. In browsers file encrypt/decrypt supported for string, ArrayBuffer or Blob");
              }
            });
          });
        }, _v0.LEGACY_IDENTIFIER = "", _v0.encoder = new TextEncoder(), _v0.decoder = new TextDecoder(), _v0;
      }(),
      _v369 = function () {
        function _v0() {}
        return _v0.from = function (_v0, _v1) {
          if (_v0 !== _v0.LEGACY_IDENTIFIER) return new _v370(_v0, _v1.byteLength);
        }, _v0.tryParse = function (_v0) {
          var _v1 = new Uint8Array(_v0),
            _v2 = "";
          if (_v1.byteLength >= 4 && (_v2 = _v1.slice(0, 4), this.decoder.decode(_v2) !== _v0.SENTINEL)) return "";
          if (!(_v1.byteLength >= 5)) throw Error("decryption error. invalid header version");
          if (_v1[4] > _v0.MAX_VERSION) throw Error("unknown cryptor error");
          var _v3 = "",
            _v4 = 5 + _v0.IDENTIFIER_LENGTH;
          if (!(_v1.byteLength >= _v4)) throw Error("decryption error. invalid crypto identifier");
          _v3 = _v1.slice(5, _v4);
          var _v5 = null;
          if (!(_v1.byteLength >= _v4 + 1)) throw Error("decryption error. invalid metadata length");
          return _v5 = _v1[_v4], _v4 += 1, 255 === _v5 && _v1.byteLength >= _v4 + 2 && (_v5 = new Uint16Array(_v1.slice(_v4, _v4 + 2)).reduce(function (_v0, _v1) {
            return (_v0 << 8) + _v1;
          }, 0), _v4 += 2), new _v370(this.decoder.decode(_v3), _v5);
        }, _v0.SENTINEL = "PNED", _v0.LEGACY_IDENTIFIER = "", _v0.IDENTIFIER_LENGTH = 4, _v0.VERSION = 1, _v0.MAX_VERSION = 1, _v0.decoder = new TextDecoder(), _v0;
      }(),
      _v370 = function () {
        function _v0(_v0, _v1) {
          this._identifier = _v0, this._metadataLength = _v1;
        }
        return Object.defineProperty(_v0.prototype, "identifier", {
          get: function () {
            return this._identifier;
          },
          set: function (_v0) {
            this._identifier = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "metadataLength", {
          get: function () {
            return this._metadataLength;
          },
          set: function (_v0) {
            this._metadataLength = _v0;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "version", {
          get: function () {
            return _v369.VERSION;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "length", {
          get: function () {
            return _v369.SENTINEL.length + 1 + _v369.IDENTIFIER_LENGTH + (this.metadataLength < 255 ? 1 : 3) + this.metadataLength;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_v0.prototype, "data", {
          get: function () {
            var _v0 = 0,
              _v1 = new Uint8Array(this.length),
              _v2 = new TextEncoder();
            _v1.set(_v2.encode(_v369.SENTINEL)), _v1[_v0 += _v369.SENTINEL.length] = this.version, _v0++, this.identifier && _v1.set(_v2.encode(this.identifier), _v0), _v0 += _v369.IDENTIFIER_LENGTH;
            var _v3 = this.metadataLength;
            return _v3 < 255 ? _v1[_v0] = _v3 : _v1.set([255, _v3 >> 8, 255 & _v3], _v0), _v1;
          },
          enumerable: !1,
          configurable: !0
        }), _v0.IDENTIFIER_LENGTH = 4, _v0.SENTINEL = "PNED", _v0;
      }();
    function _v371(_v0) {
      if (!navigator || !navigator.sendBeacon) return !1;
      navigator.sendBeacon(_v0);
    }
    var _v372 = _v187;
    function _v373(_v0) {
      var _v1 = this,
        _v2 = _v0.listenToBrowserNetworkEvents;
      return _v0.sdkFamily = "Web", _v0.networking = new _v188({
        del: _v361,
        get: _v358,
        post: _v359,
        patch: _v360,
        sendBeacon: _v371,
        getfile: _v357,
        postfile: _v356
      }), _v0.cbor = new _v189(function (_v0) {
        return function _v0(_v1) {
          var _v2 = function (_v0) {
            return _v0 && "object" == typeof _v0 && _v0.constructor === Object;
          };
          if (!_v2(_v1)) return _v1;
          var _v3 = {};
          return Object.keys(_v1).forEach(function (_v0) {
            var _v1 = "string" == typeof _v0 || _v0 instanceof String,
              _v2 = _v0,
              _v3 = _v1[_v0];
            Array.isArray(_v0) || _v1 && _v0.indexOf(",") >= 0 ? _v2 = (_v1 ? _v0.split(",") : _v0).reduce(function (_v0, _v1) {
              return _v0 + String.fromCharCode(_v1);
            }, "") : ("number" == typeof _v0 && isFinite(_v0) || _v1 && !isNaN(_v0)) && (_v2 = String.fromCharCode(_v1 ? parseInt(_v0, 10) : 10)), _v3[_v2] = _v2(_v3) ? _v0(_v3) : _v3;
          }), _v3;
        }(_v11.decode(_v0));
      }, _v16), _v0.PubNubFile = _v365, _v0.cryptography = new _v364(), _v0.initCryptoModule = function (_v0) {
        return new _v368({
          default: new _v366({
            cipherKey: _v0.cipherKey,
            useRandomIVs: _v0.useRandomIVs
          }),
          cryptors: [new _v367({
            cipherKey: _v0.cipherKey
          })]
        });
      }, _v1 = _v372.call(this, _v0) || this, (void 0 === _v2 || _v2) && (window.addEventListener("offline", function () {
        _v1.networkDownDetected();
      }), window.addEventListener("online", function () {
        _v1.networkUpDetected();
      })), _v1;
    }
    return _v1(_v373, _v372), _v373.CryptoModule = _v368, _v373;
  }();
}