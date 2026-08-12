{
  "use strict";

  let _v3;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v4 = {
    getAssetToken: function () {
      return _v8;
    },
    getAssetTokenQuery: function () {
      return _v9;
    },
    getDeploymentId: function () {
      return _v6;
    },
    getDeploymentIdQuery: function () {
      return _v7;
    }
  };
  for (var _v5 in _v4) Object.defineProperty(_v2, _v5, {
    enumerable: !0,
    get: _v4[_v5]
  });
  function _v6() {
    return _v3;
  }
  function _v7(_v0 = !1) {
    let _v1 = _v3;
    return _v1 ? `${_v0 ? "&" : "?"}dpl=${_v1}` : "";
  }
  function _v8() {
    return !1;
  }
  function _v9(_v0 = !1) {
    return "";
  }
  "u" > typeof window ? (_v3 = document.documentElement.dataset.dplId, delete document.documentElement.dataset.dplId) : _v3 = void 0;
}