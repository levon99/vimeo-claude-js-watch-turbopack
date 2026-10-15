{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["AnalyticsButton", 0, ({
    analyticsLink: _v0,
    dataTestId: _v1
  }) => (0, _v1.jsx)(_v3.Tooltip, {
    label: (0, _v5.translate)({
      singular: "Analytics",
      dictionary: {
        es: {
          singular: "Análisis"
        },
        "de-DE": {
          singular: "Analytik"
        },
        "fr-FR": {
          singular: "Analyses"
        },
        "ja-JP": {
          singular: "分析"
        },
        "ko-KR": {
          singular: "애널리틱스"
        },
        "pt-BR": {
          singular: "Análises"
        },
        "zh-CN": {
          singular: "分析"
        }
      }
    }),
    placement: "top",
    children: (0, _v1.jsx)(_v2.IconButton, {
      "aria-label": (0, _v5.translate)({
        singular: "Analytics",
        dictionary: {
          es: {
            singular: "Análisis"
          },
          "de-DE": {
            singular: "Analytik"
          },
          "fr-FR": {
            singular: "Analyses"
          },
          "ja-JP": {
            singular: "分析"
          },
          "ko-KR": {
            singular: "애널리틱스"
          },
          "pt-BR": {
            singular: "Análises"
          },
          "zh-CN": {
            singular: "分析"
          }
        }
      }),
      as: "a",
      "data-testid": _v1,
      href: _v0,
      icon: (0, _v1.jsx)(_v4.Analytics, {}),
      variant: "tertiary",
      size: "md"
    })
  })]);
}