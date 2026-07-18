{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.InvalidArgumentError = void 0, _v2.validateNotBlank = function (_v0, _v1) {
    if (null == _v0 || 0 === _v0.length) throw new _v3(_v1);
  };
  class _v3 extends Error {}
  _v2.InvalidArgumentError = _v3;
}