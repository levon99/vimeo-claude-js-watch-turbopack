{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["AnalyticsButton", 0, ({
    analyticsLink: _v0,
    location: _v1,
    page: _v2,
    name: _v3,
    dataTestId: _v4
  }) => {
    let _v5 = (0, _v6.useAnalyticsEvent)();
    return (0, _v1.jsx)(_v3.Tooltip, {
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
        "data-testid": _v4,
        href: _v0,
        icon: (0, _v1.jsx)(_v4.Analytics, {}),
        onClick: () => _v5((0, _v7.genericClick)({
          copy: "Analytics",
          feature: _v7.AnalyticsFeatures.ANALYTICS,
          location: _v1,
          name: _v3,
          page: _v2,
          target: _v0 ?? "",
          target_path: null,
          type: "general"
        })),
        variant: "tertiary",
        size: "md"
      })
    });
  }]);
}