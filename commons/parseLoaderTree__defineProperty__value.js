{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "parseLoaderTree", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = _v0.r(0);
  function _v4(_v0) {
    let [_v1, _v2, _v3, _v4] = _v0,
      {
        layout: _v5,
        template: _v6
      } = _v3,
      {
        page: _v7
      } = _v3;
    _v7 = _v1 === _v3.DEFAULT_SEGMENT_KEY ? _v3.defaultPage : _v7;
    let _v8 = _v5?.[1] || _v6?.[1] || _v7?.[1];
    return {
      page: _v7,
      segment: _v1,
      modules: _v3,
      conventionPath: _v8,
      parallelRoutes: _v2,
      staticSiblings: _v4
    };
  }
}