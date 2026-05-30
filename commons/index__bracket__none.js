{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1) {
    return _v1.encode ? _v1.strict ? _v3(_v0) : encodeURIComponent(_v0) : _v0;
  }
  _v2.extract = function (_v0) {
    return _v0.split("?")[1] || "";
  }, _v2.parse = function (_v0, _v1) {
    var _v2 = function (_v0) {
        var _v1;
        switch (_v0.arrayFormat) {
          case "index":
            return function (_v0, _v1, _v2) {
              if (_v1 = /\[(\d*)\]$/.exec(_v0), _v0 = _v0.replace(/\[\d*\]$/, ""), !_v1) {
                _v2[_v0] = _v1;
                return;
              }
              void 0 === _v2[_v0] && (_v2[_v0] = {}), _v2[_v0][_v1[1]] = _v1;
            };
          case "bracket":
            return function (_v0, _v1, _v2) {
              if (_v1 = /(\[\])$/.exec(_v0), _v0 = _v0.replace(/\[\]$/, ""), _v1) {
                if (void 0 === _v2[_v0]) {
                  _v2[_v0] = [_v1];
                  return;
                }
              } else {
                _v2[_v0] = _v1;
                return;
              }
              _v2[_v0] = [].concat(_v2[_v0], _v1);
            };
          default:
            return function (_v0, _v1, _v2) {
              if (void 0 === _v2[_v0]) {
                _v2[_v0] = _v1;
                return;
              }
              _v2[_v0] = [].concat(_v2[_v0], _v1);
            };
        }
      }(_v1 = _v4({
        arrayFormat: "none"
      }, _v1)),
      _v3 = Object.create(null);
    return "string" == typeof _v0 && (_v0 = _v0.trim().replace(/^(\?|#|&)/, "")) ? (_v0.split("&").forEach(function (_v0) {
      var _v1 = _v0.replace(/\+/g, " ").split("="),
        _v2 = _v1.shift(),
        _v3 = _v1.length > 0 ? _v1.join("=") : void 0;
      _v3 = void 0 === _v3 ? null : decodeURIComponent(_v3), _v2(decodeURIComponent(_v2), _v3, _v3);
    }), Object.keys(_v3).sort().reduce(function (_v0, _v1) {
      var _v2 = _v3[_v1];
      return _v2 && "object" == typeof _v2 && !Array.isArray(_v2) ? _v0[_v1] = function _v0(_v1) {
        return Array.isArray(_v1) ? _v1.sort() : "object" == typeof _v1 ? _v0(Object.keys(_v1)).sort(function (_v0, _v1) {
          return Number(_v0) - Number(_v1);
        }).map(function (_v0) {
          return _v1[_v0];
        }) : _v1;
      }(_v2) : _v0[_v1] = _v2, _v0;
    }, Object.create(null))) : _v3;
  }, _v2.stringify = function (_v0, _v1) {
    var _v2 = function (_v0) {
      switch (_v0.arrayFormat) {
        case "index":
          return function (_v0, _v1, _v2) {
            return null === _v1 ? _v5(_v0, _v0) + "[" + _v2 + "]" : _v5(_v0, _v0) + "[" + _v5(_v2, _v0) + "]=" + _v5(_v1, _v0);
          };
        case "bracket":
          return function (_v0, _v1) {
            return null === _v1 ? _v5(_v0, _v0) : _v5(_v0, _v0) + "[]=" + _v5(_v1, _v0);
          };
        default:
          return function (_v0, _v1) {
            return null === _v1 ? _v5(_v0, _v0) : _v5(_v0, _v0) + "=" + _v5(_v1, _v0);
          };
      }
    }(_v1 = _v4({
      encode: !0,
      strict: !0,
      arrayFormat: "none"
    }, _v1));
    return _v0 ? Object.keys(_v0).sort().map(function (_v0) {
      var _v1 = _v0[_v0];
      if (void 0 === _v1) return "";
      if (null === _v1) return _v5(_v0, _v1);
      if (Array.isArray(_v1)) {
        var _v2 = [];
        return _v1.slice().forEach(function (_v0) {
          void 0 !== _v0 && _v2.push(_v2(_v0, _v0, _v2.length));
        }), _v2.join("&");
      }
      return _v5(_v0, _v1) + "=" + _v5(_v1, _v1);
    }).filter(function (_v0) {
      return _v0.length > 0;
    }).join("&") : "";
  };
}