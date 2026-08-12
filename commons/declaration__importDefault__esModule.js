{
  "use strict";

  var _v3 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function (_v0, _v1) {
    let _v2 = null;
    if (!_v0 || "string" != typeof _v0) return _v2;
    let _v3 = (0, _v4.default)(_v0),
      _v4 = "function" == typeof _v1;
    return _v3.forEach(_v0 => {
      if ("declaration" !== _v0.type) return;
      let {
        property: _v1,
        value: _v2
      } = _v0;
      _v4 ? _v1(_v1, _v2, _v0) : _v2 && ((_v2 = _v2 || {})[_v1] = _v2);
    }), _v2;
  };
  let _v4 = _v3(_v0.r(0));
}