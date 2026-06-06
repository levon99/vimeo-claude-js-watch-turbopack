{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["CharCount", 0, ({
    maxCharacters: _v0 = 30,
    value: _v1,
    warningThreshold: _v2 = 5
  }) => {
    let _v3 = _v1 || "",
      [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(!1);
    return (0, _v2.useEffect)(() => {
      let _v0 = _v0 - _v3.length;
      _v0 < 0 ? _v5(!0) : _v0 <= _v2 ? _v7(!0) : (_v5(!1), _v7(!1));
    }, [_v3, _v0, _v2]), (0, _v1.jsx)(_v3.Text, {
      variant: "body-sm",
      mt: "xs",
      fontWeight: _v4 ? 600 : _v6 ? 800 : 400,
      color: _v4 ? "red.500" : _v6 ? "yellow.600" : "text-secondary",
      children: (0, _v4.translate)({
        singular: "{COUNT} character",
        plural: "{COUNT} characters",
        count: _v3.length,
        replacements: {
          COUNT: `${_v3.length} / ${_v0}`
        },
        dictionary: {
          es: {
            singular: "{COUNT} caracter",
            plural: "{COUNT} caracteres"
          },
          "de-DE": {
            singular: "{COUNT} Zeichen",
            plural: "{COUNT} Zeichen"
          },
          "fr-FR": {
            singular: "{COUNT} caractère",
            plural: "{COUNT} caractères"
          },
          "ja-JP": {
            singular: "{COUNT} 文字",
            plural: "{COUNT} 文字"
          },
          "ko-KR": {
            singular: "{COUNT}자",
            plural: "{COUNT}자"
          },
          "pt-BR": {
            singular: "{COUNT} caractere",
            plural: "{COUNT} caracteres"
          },
          "zh-CN": {
            singular: "{COUNT} 个字符",
            plural: "{COUNT} 个字符"
          }
        }
      })
    });
  }]);
}