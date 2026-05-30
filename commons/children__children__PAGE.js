{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    DEFAULT_SEGMENT_KEY: function () {
      return _v11;
    },
    NOT_FOUND_SEGMENT_KEY: function () {
      return _v12;
    },
    PAGE_SEGMENT_KEY: function () {
      return _v10;
    },
    addSearchParamsIfPageSegment: function () {
      return _v8;
    },
    computeSelectedLayoutSegment: function () {
      return _v9;
    },
    getSegmentValue: function () {
      return _v5;
    },
    getSelectedLayoutSegmentPath: function () {
      return function _v0(_v1, _v2, _v3 = !0, _v4 = []) {
        let _v5;
        if (_v3) _v5 = _v1[1][_v2];else {
          let _v0 = _v1[1];
          _v5 = _v0.children ?? Object.values(_v0)[0];
        }
        if (!_v5) return _v4;
        let _v6 = _v5(_v5[0]);
        return !_v6 || _v6.startsWith(_v10) ? _v4 : (_v4.push(_v6), _v0(_v5, _v2, !1, _v4));
      };
    },
    isGroupSegment: function () {
      return _v6;
    },
    isParallelRouteSegment: function () {
      return _v7;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  function _v5(_v0) {
    return Array.isArray(_v0) ? _v0[1] : _v0;
  }
  function _v6(_v0) {
    return "(" === _v0[0] && _v0.endsWith(")");
  }
  function _v7(_v0) {
    return _v0.startsWith("@") && "@children" !== _v0;
  }
  function _v8(_v0, _v1) {
    if (_v0.includes(_v10)) {
      let _v0 = JSON.stringify(_v1);
      return "{}" !== _v0 ? _v10 + "?" + _v0 : _v10;
    }
    return _v0;
  }
  function _v9(_v0, _v1) {
    if (!_v0 || 0 === _v0.length) return null;
    let _v2 = "children" === _v1 ? _v0[0] : _v0[_v0.length - 1];
    return _v2 === _v11 ? null : _v2;
  }
  let _v10 = "__PAGE__",
    _v11 = "__DEFAULT__",
    _v12 = "/_not-found";
}