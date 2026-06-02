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
  _v0.s(["HeaderContent", 0, ({
    children: _v0,
    showBackButton: _v1,
    showCloseButton: _v2 = !0,
    showPlusButton: _v3 = !1,
    onBackButtonClick: _v4,
    onCloseButtonClick: _v5,
    onPlusButtonClick: _v6,
    disablePlusButton: _v7
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [_v1 && (0, _v1.jsx)(_v2.IconButton, {
      "aria-label": "Back",
      variant: "tertiary",
      size: "sm",
      icon: (0, _v1.jsx)(_v5.ChevronLeft, {}),
      onClick: _v4
    }), (0, _v1.jsx)(_v3.Text, {
      variant: "heading-sm",
      flex: "1",
      wordBreak: "break-word",
      noOfLines: 4,
      children: _v0
    }), _v3 && (0, _v1.jsx)(_v4.Tooltip, {
      label: (0, _v8.translate)({
        singular: "Create review link",
        dictionary: {
          es: {
            singular: "Cree un enlace de revisión"
          },
          "de-DE": {
            singular: "Review-Link erstellen"
          },
          "fr-FR": {
            singular: "Créer un lien de révision"
          },
          "ja-JP": {
            singular: "レビューリンクを作成"
          },
          "ko-KR": {
            singular: "리뷰 링크 생성"
          },
          "pt-BR": {
            singular: "Criar link de revisão"
          },
          "zh-CN": {
            singular: "创建评论链接"
          }
        }
      }),
      isDisabled: _v7,
      placement: "top",
      children: (0, _v1.jsx)(_v2.IconButton, {
        "aria-label": (0, _v8.translate)({
          singular: "Create review link",
          dictionary: {
            es: {
              singular: "Cree un enlace de revisión"
            },
            "de-DE": {
              singular: "Review-Link erstellen"
            },
            "fr-FR": {
              singular: "Créer un lien de révision"
            },
            "ja-JP": {
              singular: "レビューリンクを作成"
            },
            "ko-KR": {
              singular: "리뷰 링크 생성"
            },
            "pt-BR": {
              singular: "Criar link de revisão"
            },
            "zh-CN": {
              singular: "创建评论链接"
            }
          }
        }),
        variant: "tertiary",
        size: "sm",
        icon: (0, _v1.jsx)(_v7.Plus, {}),
        isDisabled: _v7,
        onClick: _v6
      })
    }), _v2 && (0, _v1.jsx)(_v2.IconButton, {
      "aria-label": "Close",
      variant: "tertiary",
      size: "sm",
      icon: (0, _v1.jsx)(_v6.CloseX, {}),
      onClick: _v5
    })]
  })], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = () => (0, _v1.jsxs)(_v9.VStack, {
    h: "100%",
    minH: "200px",
    justify: "center",
    children: [(0, _v1.jsx)(_v10.InfoCircle, {}), (0, _v1.jsx)(_v3.Text, {
      variant: "body-xl",
      children: "Something went wrong"
    })]
  });
  _v0.s(["PanelErrorBoundary", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v11.ErrorBoundary, {
    errorPage: _v12,
    children: _v0
  })], 0);
}