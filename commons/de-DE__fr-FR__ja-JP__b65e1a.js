{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      "de-DE": "de",
      "fr-FR": "fr",
      "ja-JP": "ja",
      "pt-BR": "pt",
      "ko-KR": "ko"
    },
    _v3 = (_v0, _v1) => {
      let _v2 = _v2[_v0] ?? _v0;
      try {
        return new Intl.DisplayNames([_v1], {
          type: "language"
        }).of(_v2) ?? _v2;
      } catch {
        return _v2;
      }
    };
  _v0.s(["getLocaleLabel", 0, _v3, "getLocaleOptionLabel", 0, (_v0, _v1) => {
    let _v2 = _v3(_v0, _v1),
      _v3 = _v3(_v0, _v0);
    return _v2 === _v3 ? _v2 : (0, _v1.translate)({
      singular: "{LANGUAGE} - {NATIVE_LANGUAGE}",
      replacements: {
        LANGUAGE: _v2,
        NATIVE_LANGUAGE: _v3
      }
    });
  }]);
}