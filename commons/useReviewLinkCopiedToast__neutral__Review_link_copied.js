{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useReviewLinkCopiedToast", 0, () => {
    let _v0 = (0, _v4.useToast)();
    return (0, _v2.useCallback)(_v0 => {
      _v0({
        duration: 0,
        isClosable: !0,
        render: _v0 => (0, _v1.jsx)(_v4.ToastRoot, {
          ..._v0,
          variant: "neutral",
          children: (0, _v1.jsxs)(_v3.Center, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v4.ToastTitle, {
              children: (0, _v5.translate)({
                singular: "Review link copied!",
                dictionary: {
                  es: {
                    singular: "¡Enlace de revisión copiado!"
                  },
                  "de-DE": {
                    singular: "Review-Link kopiert!"
                  },
                  "fr-FR": {
                    singular: "Lien de révision copié!"
                  },
                  "ja-JP": {
                    singular: "レビュー用リンクをコピーしました！"
                  },
                  "ko-KR": {
                    singular: "검토용 링크가 복사되었습니다!"
                  },
                  "pt-BR": {
                    singular: "Link de revisão copiado!"
                  },
                  "zh-CN": {
                    singular: "审阅链接已复制！"
                  }
                }
              })
            }), _v0 && (0, _v1.jsx)(_v4.ToastButton, {
              bgColor: "text-secondary",
              color: "text-button-inverted",
              fontWeight: "medium",
              _hover: {
                bgColor: "text-primary"
              },
              onClick: () => {
                _v0.closeAll(), _v0();
              },
              children: (0, _v5.translate)({
                singular: "Manage",
                dictionary: {
                  es: {
                    singular: "Administrar"
                  },
                  "de-DE": {
                    singular: "Verwalten"
                  },
                  "fr-FR": {
                    singular: "Gérer"
                  },
                  "ja-JP": {
                    singular: "管理"
                  },
                  "ko-KR": {
                    singular: "관리"
                  },
                  "pt-BR": {
                    singular: "Gerenciar"
                  },
                  "zh-CN": {
                    singular: "管理"
                  }
                }
              })
            })]
          })
        })
      });
    }, [_v0]);
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8({
    hasReviewLinkCapabilities: _v0,
    hasMultipleReviewLinks: _v1,
    reviewLinks: _v2,
    canUpsell: _v3,
    getReviewPageUrl: _v4
  }) {
    let _v5 = _v2?.length ?? 0;
    return {
      canCreateReviewLink: _v0 && _v5 < _v6.MAX_REVIEW_LINKS && (!_v3 || 0 === _v5),
      canCopyReviewPageLink: _v1 && 1 === _v5 || _v0 && 0 === _v5,
      canManageReviewLinks: _v0 && _v5 > 1,
      reviewPageLink: 1 === _v5 && _v2?.[0]?.uri ? _v4(_v2[0].uri) : void 0
    };
  }
  _v0.s(["getReviewLinkMenuState", 0, _v8, "useReviewLinkMenuState", 0, function ({
    hasReviewLinkCapabilities: _v0,
    hasMultipleReviewLinks: _v1,
    reviewLinks: _v2,
    getReviewPageUrl: _v3
  }) {
    let _v4 = (0, _v7.useCanUpSell)();
    return (0, _v2.useMemo)(() => _v8({
      hasReviewLinkCapabilities: _v0,
      hasMultipleReviewLinks: _v1,
      reviewLinks: _v2,
      canUpsell: _v4,
      getReviewPageUrl: _v3
    }), [_v0, _v1, _v2, _v4, _v3]);
  }], 0);
}