{
  "use strict";

  var _v3 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v4 = _v3(_v0.r(0));
  _v2.getPlansData = function (_v0) {
    return (void 0 === _v0 && (_v0 = !1), _v0) ? new Promise(function (_v0, _v1) {
      return _v0(_v4.default(window, "vimeo.config.plans_data", []));
    }) : fetch("/upgrade", {
      method: "get",
      headers: {
        credentials: "include",
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (_v0) {
      return _v0.json();
    }).catch(function (_v0) {
      console.log(_v0);
    });
  };
}