{
  "use strict";

  function _v3(_v0) {
    let _v1 = _v0.indexOf("#"),
      _v2 = _v0.indexOf("?"),
      _v3 = _v2 > -1 && (_v1 < 0 || _v2 < _v1);
    return _v3 || _v1 > -1 ? {
      pathname: _v0.substring(0, _v3 ? _v2 : _v1),
      query: _v3 ? _v0.substring(_v2, _v1 > -1 ? _v1 : void 0) : "",
      hash: _v1 > -1 ? _v0.slice(_v1) : ""
    } : {
      pathname: _v0,
      query: "",
      hash: ""
    };
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "parsePath", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}