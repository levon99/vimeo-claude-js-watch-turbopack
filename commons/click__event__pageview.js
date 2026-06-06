{
  "use strict";

  function _v3(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v4(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v3(Object(_v2), !0).forEach(function (_v0) {
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], _v2 in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v3(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.init = _v2.trackPageView = _v2.trackImpression = _v2.trackEvent = _v2.trackClick = _v2.MessageType = void 0, _v2.MessageType = _v6, (_v5 = _v6 || (_v2.MessageType = _v6 = {})).Click = "click", _v5.Event = "event", _v5.PageView = "pageview", _v5.Impression = "impression";
  var _v5,
    _v6,
    _v7 = function (_v0) {
      void 0 === _v0.ref_path && (_v0.ref_path = window.location.pathname);
      var _v1 = Object.keys(_v0).reduce(function (_v0, _v1) {
          return _v0.push("".concat(encodeURIComponent(_v1), "=").concat(encodeURIComponent(String(_v0[_v1])))), _v0;
        }, []).join("&"),
        _v2 = "/ablincoln/fatal_attraction?".concat(_v1);
      "function" == typeof navigator.sendBeacon ? navigator.sendBeacon(_v2) : new Image().src = _v2;
    },
    _v8 = function (_v0) {
      if (Array.isArray(_v0) && "string" == typeof _v0[0]) switch (_v0[0]) {
        case "trackEvent":
          _v9(_v0[1]);
          break;
        case "trackPageview":
          _v11();
      }
    };
  _v2.trackClick = function (_v0) {
    _v7(_v4({}, _v0, {
      type: _v6.Click
    }));
  };
  var _v9 = function (_v0) {
    _v7(_v4({}, _v0, {
      type: _v6.Event
    }));
  };
  _v2.trackEvent = _v9, _v2.trackImpression = function (_v0) {
    _v7(_v4({}, _v0, {
      type: _v6.Impression
    }));
  };
  var _v10 = function () {
      var _v0 = window.location.search;
      return _v0 ? _v0.slice(1).split("&").reduce(function (_v0, _v1) {
        var _v2,
          _v3 = function (_v0) {
            if (Array.isArray(_v0)) return _v0;
          }(_v2 = _v1.split("=")) || function (_v0) {
            if (Symbol.iterator in Object(_v0) || "[object Arguments]" === Object.prototype.toString.call(_v0)) {
              var _v1 = [],
                _v2 = !0,
                _v3 = !1,
                _v4 = void 0;
              try {
                for (var _v5, _v6 = _v0[Symbol.iterator](); !(_v2 = (_v5 = _v6.next()).done) && (_v1.push(_v5.value), 2 !== _v1.length); _v2 = !0);
              } catch (_v0) {
                _v3 = !0, _v4 = _v0;
              } finally {
                try {
                  _v2 || null == _v6.return || _v6.return();
                } finally {
                  if (_v3) throw _v4;
                }
              }
              return _v1;
            }
          }(_v2) || function () {
            throw TypeError("Invalid attempt to destructure non-iterable instance");
          }(),
          _v4 = _v3[0],
          _v5 = _v3[1];
        return _v0[_v4] = _v5, _v0;
      }, {}) : {};
    },
    _v11 = function () {
      var _v0 = _v10(),
        _v1 = {
          type: _v6.PageView,
          target: window.location.pathname + window.location.search
        };
      _v0.vcid && (_v1.vcid = _v0.vcid), _v0.referrer_vuid && (_v1.referrer_vuid = _v0.referrer_vuid), _v7(_v1);
    };
  _v2.trackPageView = _v11, _v2.init = function () {
    var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    _v0.forEach(_v8), _v0.push = function () {
      for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
      return _v1.forEach(_v8), _v0.length;
    };
  };
}