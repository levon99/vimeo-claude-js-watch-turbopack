{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["NewBadge", 0, ({
    fontSize: _v0 = "body-xs"
  }) => (0, _v1.jsx)(_v2.Box, {
    as: "span",
    bg: "vimeoBlue.400",
    color: "black",
    borderRadius: (0, _v3.rem)(4),
    px: (0, _v3.rem)(6),
    py: (0, _v3.rem)(2),
    fontSize: _v0,
    fontWeight: "semibold",
    lineHeight: "1.2",
    children: (0, _v4.translate)({
      singular: "New",
      dictionary: {
        es: {
          singular: "Nuevo"
        },
        "de-DE": {
          singular: "Neu"
        },
        "fr-FR": {
          singular: "Nouveau"
        },
        "ja-JP": {
          singular: "新規作成"
        },
        "ko-KR": {
          singular: "신규"
        },
        "pt-BR": {
          singular: "Novo"
        },
        "zh-CN": {
          singular: "新"
        }
      }
    })
  })]);
}