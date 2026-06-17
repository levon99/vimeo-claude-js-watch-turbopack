{
  "use strict";

  var _v3 = _v0.i(0);
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.logger = _v2.loggerPrefix = void 0;
  let _v4 = _v0.r(0);
  _v2.loggerPrefix = "[Eppo SDK]", _v2.logger = (0, _v4.default)({
    level: void 0 !== _v3.default && _v3.default.env.LOG_LEVEL ? _v3.default.env.LOG_LEVEL : "warn",
    browser: {
      disabled: !0
    }
  });
}