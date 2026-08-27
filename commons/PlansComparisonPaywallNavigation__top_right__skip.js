{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["PlansComparisonPaywallNavigation", 0, function ({
    dismissButtonPosition: _v0 = "top_right",
    dismissButtonVariant: _v1 = "skip",
    onDismiss: _v2
  }) {
    if ("none" === _v1) return null;
    let _v3 = (0, _v1.jsx)(_v3.IconButton, {
        "aria-label": (0, _v5.translate)({
          singular: "Dismiss",
          dictionary: {
            es: {
              singular: "Descartar"
            },
            "de-DE": {
              singular: "Information verwerfen"
            },
            "fr-FR": {
              singular: "Ignorer"
            },
            "ja-JP": {
              singular: "閉じる"
            },
            "ko-KR": {
              singular: "닫기"
            },
            "pt-BR": {
              singular: "Ignorar"
            },
            "zh-CN": {
              singular: "拒绝"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v4.CloseX, {}),
        variant: "tertiary",
        size: "sm",
        onClick: _v2,
        position: "absolute",
        top: "2rem",
        left: "2rem"
      }),
      _v4 = (0, _v1.jsx)(_v2.Button, {
        size: "sm",
        p: "1.25rem",
        borderRadius: "md",
        variant: "tertiary",
        onClick: _v2,
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
        children: (0, _v5.translate)({
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
    return "close" === _v1 ? _v3 : "both" === _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v3, _v4]
    }) : _v4;
  }]);
}