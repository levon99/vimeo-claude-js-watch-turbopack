{
  "use strict";

  var _v3,
    _v4,
    _v5 = _v0.e && _v0.e.__awaiter || function (_v0, _v1, _v2, _v3) {
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
    _v6 = _v0.e && _v0.e.__generator || function (_v0, _v1) {
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
    _v7 = _v0.e && _v0.e.__values || function (_v0) {
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
    _v8 = _v0.e && _v0.e.__read || function (_v0, _v1) {
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
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.BigPictureClient = _v2.Configuration = _v2.Service = void 0;
  var _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0);
  (_v3 = _v4 = _v2.Service || (_v2.Service = {})).FRESNEL_PROD = "https://fresnel-events.vimeocdn.com", _v3.FRESNEL_PROD_CN = "https://fresnel-events.videoji.cn", _v3.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com", _v3.EVENTS_PROD = "https://lensflare.vimeo.com";
  var _v12 = function (_v0, _v1, _v2, _v3) {
    void 0 === _v1 && (_v1 = null), void 0 === _v2 && (_v2 = null), void 0 === _v3 && (_v3 = ""), this.service = _v0, this.globalBPO = _v1, this.contexts = _v2, this.endpoint = _v3;
  };
  _v2.Configuration = _v12, _v2.BigPictureClient = function () {
    function _v0() {}
    return Object.defineProperty(_v0, "isInitalized", {
      get: function () {
        return !!_v0.conf.globalBPO;
      },
      enumerable: !1,
      configurable: !0
    }), _v0.configure = function (_v0) {
      _v0.conf = _v0, _v0.WAIT_QUEUE.length > 0 && (_v0.WAIT_QUEUE.map(function (_v0) {
        var _v1 = _v0.event,
          _v2 = _v0.contexts;
        _v2 ? _v0.sendEventWithContexts(_v1, _v2) : _v0.sendEvent(_v1);
      }), _v0.WAIT_QUEUE = []);
    }, _v0.updateObject = function (_v0, _v1) {
      return _v5(this, void 0, void 0, function () {
        var _v0, _v1, _v2, _v3, _v4, _v5, _v6;
        return _v6(this, function (_v0) {
          try {
            for (_v1 = (_v0 = _v7(Object.entries(_v0))).next(); !_v1.done; _v1 = _v0.next()) if (_v3 = (_v2 = _v8(_v1.value, 2))[0], _v4 = _v2[1], _v3 in _v1) if (_v4 instanceof Object) {
              if (_v1[_v3] instanceof Object) return _v0.updateObject(_v4, _v1[_v3]), [2];else return _v1[_v3] = _v4, [2];
            } else _v1[_v3] = _v4;
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
    }, _v0.sendEvent = function (_v0, _v1) {
      return _v5(this, void 0, void 0, function () {
        var _v0, _v1, _v2, _v3, _v4, _v5;
        return _v6(this, function (_v0) {
          switch (_v0.label) {
            case 0:
              if (null == _v0) throw Error("Required parameter event was null or undefined when calling sendEvent.");
              if (!_v0.isInitalized) return _v0.WAIT_QUEUE.push({
                event: _v0
              }), _v0.waitAndFlushQueue(), [2];
              if (_v0 = JSON.stringify(_v10.ObjectSerializer.serialize([new _v9.Envelope(_v0, this.conf.globalBPO)], "Array<Envelope>")), _v1 = (0, _v11.formatRequestEvent)(_v0.name), _v2 = "" !== this.conf.endpoint ? this.conf.endpoint : this.conf.service, _v3 = "".concat(_v2, "/add/").concat(encodeURIComponent(_v1)), !(!navigator.sendBeacon || _v1)) return [3, 2];
              return _v4 = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "User-Agent": navigator.userAgent,
                  Origin: location.origin,
                  Referer: document.referrer
                },
                body: _v0
              }, _v1 && (_v4.headers.Authorization = _v1), [4, fetch(_v3, _v4)];
            case 1:
              return _v0.sent(), [3, 3];
            case 2:
              _v5 = new Blob([_v0]), navigator.sendBeacon(_v3, _v5), _v0.label = 3;
            case 3:
              return [2];
          }
        });
      });
    }, _v0.sendEventWithContexts = function (_v0, _v1, _v2) {
      return _v5(this, void 0, void 0, function () {
        var _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15;
        return _v6(this, function (_v0) {
          switch (_v0.label) {
            case 0:
              if (null == _v0) throw Error("Required parameter event was null or undefined when calling sendEvent.");
              if (!_v0.isInitalized) return _v0.WAIT_QUEUE.push({
                event: _v0,
                contexts: _v1
              }), _v0.waitAndFlushQueue(), [2];
              _v0 = new _v9.Envelope(_v0, this.conf.globalBPO), (_v1 = _v10.ObjectSerializer.serialize([_v0], "Array<Envelope>"))[0].contexts = {};
              try {
                for (_v3 = (_v2 = _v7(Object.entries(_v1))).next(); !_v3.done; _v3 = _v2.next()) _v5 = (_v4 = _v8(_v3.value, 2))[0], _v6 = _v4[1], _v7 = _v10.ObjectSerializer.serialize(_v6, "EventContext"), _v1[0].contexts[_v5] = _v7;
              } catch (_v0) {
                _v14 = {
                  error: _v0
                };
              } finally {
                try {
                  _v3 && !_v3.done && (_v15 = _v2.return) && _v15.call(_v2);
                } finally {
                  if (_v14) throw _v14.error;
                }
              }
              if (_v8 = JSON.stringify(_v1), _v9 = (0, _v11.formatRequestEvent)(_v0.name), _v10 = "" !== this.conf.endpoint ? this.conf.endpoint : this.conf.service, _v11 = "".concat(_v10, "/add/").concat(encodeURIComponent(_v9)), !(!navigator.sendBeacon || _v2)) return [3, 2];
              return _v12 = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "User-Agent": navigator.userAgent,
                  Origin: location.origin,
                  Referer: document.referrer
                },
                body: _v8
              }, _v2 && (_v12.headers.Authorization = _v2), [4, fetch(_v11, _v12)];
            case 1:
              return _v0.sent(), [3, 3];
            case 2:
              _v13 = new Blob([_v8]), navigator.sendBeacon(_v11, _v13), _v0.label = 3;
            case 3:
              return [2];
          }
        });
      });
    }, _v0.waitAndFlushQueue = function () {
      _v0.flushQueueTimeoutHandler || (_v0.flushQueueTimeoutHandler = setTimeout(function () {
        _v0.WAIT_QUEUE.length > 0 && (_v0.WAIT_QUEUE = [], console.error("[BigPicture] All events are dropped, BigPicture Client must be configured to send events."));
      }, _v0.FLUSH_QUEUE_TIMEOUT));
    }, _v0.FLUSH_QUEUE_TIMEOUT = 0, _v0.conf = new _v12(_v4.FRESNEL_PROD), _v0.WAIT_QUEUE = [], _v0;
  }();
}