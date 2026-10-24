{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["MainLanguageSection", 0, ({
    locales: _v0,
    sourceLocale: _v1,
    onChange: _v2,
    isDisabled: _v3
  }) => {
    let _v4 = (0, _v7.useLocale)(),
      _v5 = (0, _v2.useMemo)(() => _v0.map(_v0 => ({
        label: (0, _v8.getLocaleOptionLabel)(_v0, _v4),
        value: _v0
      })), [_v0, _v4]);
    return (0, _v1.jsxs)(_v3.Flex, {
      direction: "column",
      gap: "xs",
      w: "100%",
      children: [(0, _v1.jsx)(_v5.Text, {
        color: "text-primary",
        variant: "heading-xs",
        children: (0, _v6.translate)({
          singular: "Main language",
          dictionary: {
            es: {
              singular: "Idioma principal"
            },
            "de-DE": {
              singular: "Hauptsprache"
            },
            "fr-FR": {
              singular: "Langue principale"
            },
            "ja-JP": {
              singular: "メイン言語"
            },
            "ko-KR": {
              singular: "기본 언어"
            },
            "pt-BR": {
              singular: "Idioma principal"
            },
            "zh-CN": {
              singular: "主要语言"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Select, {
        "data-testid": "main-language-select",
        disabled: _v3,
        items: _v5,
        onValueChange: _v0 => {
          let _v1 = _v0.find(_v0 => _v0 === _v0.value[0]);
          void 0 !== _v1 && _v2(_v1);
        },
        placeholder: (0, _v6.translate)({
          singular: "Select language",
          dictionary: {
            es: {
              singular: "Seleccionar el idioma"
            },
            "de-DE": {
              singular: "Sprache aussuchen"
            },
            "fr-FR": {
              singular: "Sélectionner la langue"
            },
            "ja-JP": {
              singular: "言語を選択"
            },
            "ko-KR": {
              singular: "언어 선택"
            },
            "pt-BR": {
              singular: "Selecione o idioma"
            },
            "zh-CN": {
              singular: "选择语言"
            }
          }
        }),
        value: null == _v1 ? [] : [_v1],
        variant: "withCheck",
        withPortal: !1
      })]
    });
  }]);
}