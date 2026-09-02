{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      en: "en",
      es: "es",
      fr: "fr-FR",
      de: "de-DE",
      ja: "ja-JP",
      pt: "pt-BR",
      ko: "ko-KR",
      zh: "zh-CN"
    },
    _v3 = _v0 => Object.hasOwn(_v2, _v0) ? _v2[_v0] : "";
  function _v4(_v0, _v1) {
    return (_v0 ? _v3(_v0.toLowerCase().split("-")[0]) : "") || function (_v0) {
      if (!_v0) return "";
      for (let _v0 of new _v1.default({
        headers: {
          "accept-language": _v0
        }
      }).languages()) {
        let _v0 = _v3(_v0.toLowerCase().split("-")[0]);
        if (_v0) return _v0;
      }
      return "";
    }(_v1) || "en";
  }
  _v0.s(["SUPPORTED_LANGS", 0, _v2, "detectLanguage", 0, _v4], 0), _v0.s(["EDGE_LANGUAGE_HEADER", 0, "x-language-edge", "compareLanguages", 0, function (_v0, _v1, _v2) {
    let _v3 = _v4(_v0, _v1);
    return {
      local: _v3,
      edge: _v2,
      parity: _v2 ? _v3 === _v2 ? "match" : "divergence" : "edge_absent"
    };
  }, "parityLabel", 0, function (_v0, _v1) {
    return "edge_absent" !== _v0 ? _v0 : void 0 === _v1 ? "chain_skipped" : "edge_empty";
  }], 0);
}