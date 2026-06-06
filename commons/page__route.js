{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    compareAppPaths: function () {
      return _v8;
    },
    normalizeAppPath: function () {
      return _v7;
    },
    normalizeRscURL: function () {
      return _v9;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  function _v7(_v0) {
    return (0, _v5.ensureLeadingSlash)(_v0.split("/").reduce((_v0, _v1, _v2, _v3) => !_v1 || (0, _v6.isGroupSegment)(_v1) || "@" === _v1[0] || ("page" === _v1 || "route" === _v1) && _v2 === _v3.length - 1 ? _v0 : `${_v0}/${_v1}`, ""));
  }
  function _v8(_v0, _v1) {
    let _v2 = _v0.includes("/@"),
      _v3 = _v1.includes("/@");
    return _v2 && !_v3 ? -1 : !_v2 && _v3 ? 1 : _v0.localeCompare(_v1);
  }
  function _v9(_v0) {
    return _v0.replace(/\.rsc($|\?)/, "$1");
  }
}