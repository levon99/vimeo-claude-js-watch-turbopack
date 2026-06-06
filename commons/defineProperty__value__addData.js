{
  "use strict";

  var _v3;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.addData = _v2.trackEvent = _v2.init = void 0, _v2.init = function (_v0) {
    _v3 = _v0;
  }, _v2.trackEvent = function (_v0) {
    var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      _v2 = {
        event: _v0
      };
    Object.keys(_v1).forEach(function (_v0) {
      _v2["".concat(_v0, ".").concat(_v0)] = _v1[_v0];
    }), _v3.push(_v2);
  }, _v2.addData = function (_v0) {
    _v3.push(_v0);
  };
}