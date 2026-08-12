{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["PlansComparisonPaywallNavigation", 0, function ({
    dismissButtonPosition: _v0 = "top_right",
    onDismiss: _v1
  }) {
    return (0, _v1.jsx)(_v2.Button, {
      size: "sm",
      p: "1.25rem",
      borderRadius: "md",
      variant: "tertiary",
      onClick: _v1,
      position: "absolute",
      width: "auto",
      padding: "md",
      ...("top_right" === _v0 ? {
        top: "2rem",
        right: "2rem"
      } : "bottom" === _v0 ? {
        right: "50%",
        bottom: "2rem",
        transform: "translateX(50%)"
      } : {
        top: {
          base: void 0,
          md: "2rem"
        },
        right: {
          base: "50%",
          md: "2rem"
        },
        bottom: {
          base: "2rem",
          md: void 0
        },
        transform: {
          base: "translateX(50%)",
          md: void 0
        }
      }),
      children: (0, _v3.translate)({
        singular: "Skip",
        dictionary: {
          es: {
            singular: "Omitir"
          },
          "de-DE": {
            singular: "Überspringen"
          },
          "fr-FR": {
            singular: "Sauter"
          },
          "ja-JP": {
            singular: "スキップ"
          },
          "ko-KR": {
            singular: "건너뛰기"
          },
          "pt-BR": {
            singular: "PULAR"
          },
          "zh-CN": {
            singular: "跳过"
          }
        }
      })
    });
  }]);
}