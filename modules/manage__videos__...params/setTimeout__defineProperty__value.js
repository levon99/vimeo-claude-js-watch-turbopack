{
  "use strict";

  async function _v3(_v0) {
    await new Promise(_v0 => setTimeout(_v0, _v0));
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.waitForMs = _v3, _v2.shallowClone = function (_v0) {
    return Object.assign(Object.create(Object.getPrototypeOf(_v0)), _v0);
  };
}