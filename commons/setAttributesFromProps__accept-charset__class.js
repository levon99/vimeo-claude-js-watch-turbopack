{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "setAttributesFromProps", {
    enumerable: !0,
    get: function () {
      return _v6;
    }
  });
  let _v3 = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      noModule: "noModule"
    },
    _v4 = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];
  function _v5(_v0) {
    return ["async", "defer", "noModule"].includes(_v0);
  }
  function _v6(_v0, _v1) {
    for (let [_v0, _v1] of Object.entries(_v1)) {
      if (!_v1.hasOwnProperty(_v0) || _v4.includes(_v0) || void 0 === _v1) continue;
      let _v0 = _v3[_v0] || _v0.toLowerCase();
      "SCRIPT" === _v0.tagName && _v5(_v0) ? _v0[_v0] = !!_v1 : _v0.setAttribute(_v0, String(_v1)), (!1 === _v1 || "SCRIPT" === _v0.tagName && _v5(_v0) && (!_v1 || "false" === _v1)) && (_v0.setAttribute(_v0, ""), _v0.removeAttribute(_v0));
    }
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}