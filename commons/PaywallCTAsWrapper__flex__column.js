{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["PaywallCTAsWrapper", 0, function ({
    children: _v0
  }) {
    return (0, _v1.jsx)(_v2.Box, {
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      bottom: "0",
      width: "100%",
      maxWidth: "400px",
      gap: "sm",
      alignItems: "stretch",
      bg: "surface",
      pt: "24px",
      children: _v0
    });
  }], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["PurchaseButton", 0, function ({
    isTrial: _v0,
    planPeriodicity: _v1 = "yearly",
    planName: _v2,
    paywallTracking: _v3,
    subscriptionTier: _v4,
    postCheckoutUrl: _v5,
    isBundleIncluded: _v6 = !1,
    bundleSurface: _v7
  }) {
    let {
        trackBundleOfferCtaClick: _v8
      } = (0, _v8.useBundleTracking)(),
      _v9 = _v2 ?? (_v4 ? (0, _v3.default)(`${_v4}`) : ""),
      _v10 = _v9 ? _v0 ? (0, _v6.translate)({
        singular: "Try {PLAN_NAME} for free",
        replacements: {
          PLAN_NAME: _v9
        },
        dictionary: {
          es: {
            singular: "Prueba {PLAN_NAME} gratis"
          },
          "de-DE": {
            singular: "Testen Sie {PLAN_NAME} kostenlos"
          },
          "fr-FR": {
            singular: "Essayez {PLAN_NAME} gratuitement"
          },
          "ja-JP": {
            singular: "{PLAN_NAME} を無料でお試しください"
          },
          "ko-KR": {
            singular: "{PLAN_NAME}을(를) 무료로 사용해 보세요"
          },
          "pt-BR": {
            singular: "Experimente o {PLAN_NAME} gratuitamente"
          },
          "zh-CN": {
            singular: "免费试用 {PLAN_NAME}"
          }
        }
      }) : (0, _v6.translate)({
        singular: "Join Vimeo {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v9
        },
        dictionary: {
          es: {
            singular: "Únete a Vimeo {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Treten Sie Vimeo {PLAN_NAME} bei"
          },
          "fr-FR": {
            singular: "Rejoignez Vimeo {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "Vimeo {PLAN_NAME} に加入する"
          },
          "ko-KR": {
            singular: "Vimeo {PLAN_NAME}에 가입하기"
          },
          "pt-BR": {
            singular: "Assine o Vimeo {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "加入 Vimeo {PLAN_NAME}"
          }
        }
      }) : _v0 ? (0, _v6.translate)({
        singular: "Try for free",
        dictionary: {
          es: {
            singular: "Prueba gratuita"
          },
          "de-DE": {
            singular: "Kostenlos testen"
          },
          "fr-FR": {
            singular: "Essayer gratuitement"
          },
          "ja-JP": {
            singular: "無料で試す"
          },
          "ko-KR": {
            singular: "무료로 체험해 보기"
          },
          "pt-BR": {
            singular: "Experimente grátis"
          },
          "zh-CN": {
            singular: "免费试用"
          }
        }
      }) : (0, _v6.translate)({
        singular: "Join Vimeo",
        dictionary: {
          es: {
            singular: "Unirse a Vimeo"
          },
          "de-DE": {
            singular: "Registriere dich bei Vimeo"
          },
          "fr-FR": {
            singular: "S'inscrire à Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに登録"
          },
          "ko-KR": {
            singular: "Vimeo 가입"
          },
          "pt-BR": {
            singular: "Cadastre-se no Vimeo"
          },
          "zh-CN": {
            singular: "加入 Vimeo"
          }
        }
      });
    return (0, _v1.jsx)(_v4.Button, {
      size: "lg",
      variant: "primary",
      width: "100%",
      onClick: () => {
        if (!_v4) return;
        _v6 && void 0 !== _v7 && _v8({
          surface: _v7,
          cta: "checkout",
          bundleIncluded: !0
        });
        let _v0 = (0, _v5.withBundleOfferToggleParam)((0, _v7.buildCheckoutUrl)({
          ..._v3,
          tier: _v4,
          isMonthly: "monthly" === _v1,
          isTrial: _v0,
          postCheckoutUrl: _v5
        }), _v6);
        window.location.assign(_v0);
      },
      children: _v10
    });
  }], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["PlanTileBundleRow", 0, ({
    bundleType: _v0,
    price: _v1
  }) => {
    let _v2 = (0, _v16.getBundleActivationCluster)(_v0);
    return (0, _v1.jsxs)(_v10.Flex, {
      width: "100%",
      paddingTop: (0, _v11.rem)(4),
      paddingBottom: (0, _v11.rem)(2),
      alignItems: "center",
      justifyContent: "space-between",
      gap: (0, _v11.rem)(8),
      flexWrap: "wrap",
      children: [(0, _v1.jsx)(_v15.TiltedTileCluster, {
        tileSize: 28,
        clusterTiles: _v2.clusterTiles,
        otherProductsCount: _v2.otherProductsCount,
        infoTooltip: _v2.infoTooltip
      }), (0, _v1.jsxs)(_v9.Badge, {
        variant: "info",
        size: "sm",
        gap: "4px",
        flexShrink: 0,
        children: [null === _v1 ? (0, _v1.jsx)(_v12.Gift, {
          boxSize: "12px"
        }) : (0, _v1.jsx)(_v13.Plus, {
          boxSize: "12px"
        }), null === _v1 ? String((0, _v14.translate)({
          singular: "Included at no extra cost",
          dictionary: {
            es: {
              singular: "Incluido sin costo adicional"
            },
            "de-DE": {
              singular: "Ohne zusätzliche Kosten enthalten"
            },
            "fr-FR": {
              singular: "Inclus sans frais supplémentaires"
            },
            "ja-JP": {
              singular: "追加料金なしで含まれます"
            },
            "ko-KR": {
              singular: "추가 비용 없이 포함"
            },
            "pt-BR": {
              singular: "Incluído sem custo adicional"
            },
            "zh-CN": {
              singular: "包含在内，无需额外费用"
            }
          }
        })) : (0, _v17.getBundlePriceBadgeLabel)(_v1)]
      })]
    });
  }], 0);
}