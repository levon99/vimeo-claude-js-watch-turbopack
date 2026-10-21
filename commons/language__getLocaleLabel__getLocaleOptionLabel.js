{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1) => {
    try {
      return new Intl.DisplayNames([_v1], {
        type: "language"
      }).of(_v0) ?? _v0;
    } catch {
      return _v0;
    }
  };
  _v0.s(["getLocaleLabel", 0, _v2, "getLocaleOptionLabel", 0, (_v0, _v1) => {
    let _v2 = _v2(_v0, _v1),
      _v3 = _v2(_v0, _v0);
    return _v2 === _v3 ? _v2 : (0, _v1.translate)({
      singular: "{LANGUAGE} - {NATIVE_LANGUAGE}",
      replacements: {
        LANGUAGE: _v2,
        NATIVE_LANGUAGE: _v3
      }
    });
  }]);
}