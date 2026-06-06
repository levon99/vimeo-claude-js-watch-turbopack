{
  "use strict";

  function _v3(_v0, _v1, _v2) {
    if (_v0) {
      for (let _v0 of (_v2 && (_v2 = _v2.toLowerCase()), _v0)) if (_v1 === _v0.domain?.split(":", 1)[0].toLowerCase() || _v2 === _v0.defaultLocale.toLowerCase() || _v0.locales?.some(_v0 => _v0.toLowerCase() === _v2)) return _v0;
    }
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "detectDomainLocale", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}