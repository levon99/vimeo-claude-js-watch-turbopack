{
  "use strict";

  _v0.i(0), _v0.s(["callAllHandlers", 0, function (..._v0) {
    return function (_v0) {
      _v0.some(_v0 => (null == _v0 || _v0(_v0), null == _v0 ? void 0 : _v0.defaultPrevented));
    };
  }, "runIfFn", 0, function (_v0, ..._v1) {
    return "function" == typeof _v0 ? _v0(..._v1) : _v0;
  }], 0);
}