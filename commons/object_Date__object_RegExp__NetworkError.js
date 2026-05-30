{
  "use strict";

  function _v1(_v0) {
    return _v0.split(".").map(_v0 => _v0.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase()).join(".");
  }
  function _v2(_v0) {
    return "object" == typeof _v0 && !Array.isArray(_v0) && "[object Date]" !== Object.prototype.toString.call(_v0) && "[object RegExp]" !== Object.prototype.toString.call(_v0) && null !== _v0;
  }
  _v0.s(["NetworkError", 0, class extends Error {
    status;
    res;
    constructor(_v0, _v1, _v2) {
      super(_v0), this.name = "NetworkError", this.status = _v1, this.res = _v2;
    }
  }, "deepCamelCase", 0, function _v0(_v1) {
    return _v2(_v1) ? Object.keys(_v1).reduce((_v0, _v1) => {
      let _v2,
        _v3 = _v1[_v1];
      return _v2(_v3) ? _v3 = _v0(_v3) : Array.isArray(_v3) && (_v3 = _v3.map(_v0)), _v0[(_v2 = _v1.replace(/_([0-9])/g, "\0$1").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase().replace(RegExp("\0", "g"), "_").replace(/[^a-zA-Z0-9]+([a-zA-Z0-9])/g, (_v0, _v1) => _v0 === "_" + _v1 && _v1 >= "0" && _v1 <= "9" ? "_" + _v1 : _v1.toUpperCase())).charAt(0).toLowerCase() + _v2.slice(1)] = _v3, _v0;
    }, {}) : _v1;
  }, "deepSnakeCase", 0, function _v0(_v1) {
    return _v2(_v1) ? Object.keys(_v1).reduce((_v0, _v1) => {
      let _v2 = _v1[_v1];
      return _v2(_v2) ? _v2 = _v0(_v2) : Array.isArray(_v2) && (_v2 = _v2.map(_v0)), _v0[_v1(_v1)] = _v2, _v0;
    }, {}) : _v1;
  }, "intoSnakeCase", 0, _v1, "searchQueryString", 0, function (_v0) {
    return Object.entries(_v0 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v1(_v0)}=${encodeURIComponent(_v1)}`).join("&");
  }]);
}