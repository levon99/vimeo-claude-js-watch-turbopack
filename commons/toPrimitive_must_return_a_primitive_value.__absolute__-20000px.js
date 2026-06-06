{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    return (_v2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
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
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != _v2(_v0) || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != _v2(_v3)) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == _v2(_v1) ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
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
  var _v5 = {
      widthCache: {},
      cacheCount: 0
    },
    _v6 = {
      position: "absolute",
      top: "-20000px",
      left: 0,
      padding: 0,
      margin: 0,
      border: "none",
      whiteSpace: "pre"
    },
    _v7 = "recharts_measurement_span";
  _v0.s(["getOffset", 0, function (_v0) {
    return {
      top: _v0.top + window.scrollY - document.documentElement.clientTop,
      left: _v0.left + window.scrollX - document.documentElement.clientLeft
    };
  }, "getStringSize", 0, function (_v0) {
    var _v1,
      _v2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == _v0 || _v1.Global.isSsr) return {
      width: 0,
      height: 0
    };
    var _v3 = (Object.keys(_v1 = _v4({}, _v2)).forEach(function (_v0) {
        _v1[_v0] || delete _v1[_v0];
      }), _v1),
      _v4 = JSON.stringify({
        text: _v0,
        copyStyle: _v3
      });
    if (_v5.widthCache[_v4]) return _v5.widthCache[_v4];
    try {
      var _v5 = document.getElementById(_v7);
      _v5 || ((_v5 = document.createElement("span")).setAttribute("id", _v7), _v5.setAttribute("aria-hidden", "true"), document.body.appendChild(_v5));
      var _v6 = _v4(_v4({}, _v6), _v3);
      Object.assign(_v5.style, _v6), _v5.textContent = "".concat(_v0);
      var _v7 = _v5.getBoundingClientRect(),
        _v8 = {
          width: _v7.width,
          height: _v7.height
        };
      return _v5.widthCache[_v4] = _v8, ++_v5.cacheCount > 0 && (_v5.cacheCount = 0, _v5.widthCache = {}), _v8;
    } catch (_v0) {
      return {
        width: 0,
        height: 0
      };
    }
  }]);
}