{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = 79,
    _v17 = ({
      bundleType: _v0,
      clusterTiles: _v1,
      otherProductsCount: _v2,
      infoTooltip: _v3,
      heading: _v4,
      body: _v5,
      ctaLabel: _v6,
      onCtaClick: _v7,
      tileSize: _v8 = _v16
    }) => {
      let _v9 = (0, _v15.useBundleSurfaceTokens)(),
        _v10 = (0, _v10.useColorModeValue)("rgba(26, 54, 93, 0.04)", "rgba(228, 233, 239, 0.06)"),
        _v11 = (0, _v5.getBundleActivationCluster)(_v0);
      return (0, _v1.jsxs)(_v2.Box, {
        position: "relative",
        width: "100%",
        background: _v10,
        border: _v9.border,
        borderRadius: (0, _v3.rem)(24),
        overflow: "hidden",
        paddingX: {
          base: (0, _v3.rem)(20),
          md: (0, _v3.rem)(40)
        },
        paddingTop: {
          base: (0, _v3.rem)(20),
          md: (0, _v3.rem)(20)
        },
        paddingBottom: {
          base: (0, _v3.rem)(24),
          md: (0, _v3.rem)(40)
        },
        children: [(0, _v1.jsx)(_v11.BannerGlow, {
          geometry: {
            top: {
              base: -60,
              md: -89.5
            },
            left: {
              base: -60,
              md: -40
            },
            size: 260
          },
          asset: _v13.default
        }), (0, _v1.jsx)(_v11.BannerGlow, {
          geometry: {
            top: {
              base: 120,
              md: 106.5
            },
            right: {
              base: -45,
              md: -60
            },
            size: 180
          },
          asset: _v14.default
        }), (0, _v1.jsxs)(_v8.Flex, {
          position: "relative",
          direction: "column",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v8.Flex, {
            paddingTop: {
              base: (0, _v3.rem)(16),
              md: (0, _v3.rem)(32)
            },
            paddingBottom: {
              base: (0, _v3.rem)(16),
              md: (0, _v3.rem)(32)
            },
            children: (0, _v1.jsx)(_v12.TiltedTileCluster, {
              tileSize: _v8,
              clusterTiles: _v1 ?? _v11.clusterTiles,
              otherProductsCount: _v2 ?? _v11.otherProductsCount,
              infoTooltip: _v3 ?? _v11.infoTooltip
            })
          }), (0, _v1.jsxs)(_v8.Flex, {
            direction: "column",
            alignItems: "center",
            gap: {
              base: (0, _v3.rem)(4),
              md: (0, _v3.rem)(8)
            },
            width: "100%",
            children: [(0, _v1.jsx)(_v9.Text, {
              variant: "heading-lg",
              color: "text-primary",
              textAlign: "center",
              letterSpacing: (0, _v3.rem)(-1.2),
              children: _v4
            }), (0, _v1.jsx)(_v9.Text, {
              variant: "body-lg",
              color: "text-secondary",
              textAlign: "center",
              letterSpacing: (0, _v3.rem)(-.48),
              children: _v5
            })]
          }), void 0 !== _v6 && void 0 !== _v7 && (0, _v1.jsx)(_v7.Button, {
            variant: "brand",
            size: "lg",
            width: "100%",
            marginTop: {
              base: (0, _v3.rem)(16),
              md: (0, _v3.rem)(16)
            },
            onClick: _v7,
            children: _v6
          })]
        })]
      });
    };
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  _v0.s(["BundleWelcomeCard", 0, ({
    bundleType: _v0,
    periodicity: _v1,
    currency: _v2,
    onCtaClick: _v3
  }) => {
    let _v4,
      _v5,
      _v6 = (0, _v5.getBundleActivationCluster)(_v0),
      _v7 = (0, _v4.resolveBundleIdealAmount)({
        periodicity: _v1,
        display: "period",
        currency: _v2
      }),
      _v8 = (0, _v6.formatBundlePrice)(_v7 ?? {
        amount: 0,
        currency: "USD"
      });
    return (0, _v1.jsx)(_v2.Box, {
      width: "100%",
      maxWidth: (0, _v3.rem)(606),
      children: (0, _v1.jsx)(_v17, {
        bundleType: _v0,
        heading: (({
          periodicity: _v0,
          price: _v1
        }) => "monthly" === _v0 ? String((0, _v18.translate)({
          singular: "Subscriptions worth {PRICE} a month, all included",
          replacements: {
            PRICE: _v1
          },
          dictionary: {
            es: {
              singular: "Suscripciones por valor de {PRICE} al mes, todas incluidas"
            },
            "de-DE": {
              singular: "Abonnements im Wert von {PRICE} pro Monat, alle enthalten"
            },
            "fr-FR": {
              singular: "Abonnements d'une valeur de {PRICE} par mois, tous inclus"
            },
            "ja-JP": {
              singular: "月額{PRICE}相当のサブスクリプションがすべて含まれます."
            },
            "ko-KR": {
              singular: "월 {PRICE} 상당의 구독이 모두 포함됩니다"
            },
            "pt-BR": {
              singular: "Assinaturas no valor de {PRICE} por mês, todas incluídas"
            },
            "zh-CN": {
              singular: "每月价值 {PRICE} 的订阅，全部包含在内"
            }
          }
        })) : String((0, _v18.translate)({
          singular: "Subscriptions worth {PRICE} a year, all included",
          replacements: {
            PRICE: _v1
          },
          dictionary: {
            es: {
              singular: "Suscripciones por valor de {PRICE} al año, todas incluidas"
            },
            "de-DE": {
              singular: "Abonnements im Wert von {PRICE} pro Jahr, alle enthalten"
            },
            "fr-FR": {
              singular: "Abonnements d'une valeur de {PRICE} par an, tous inclus"
            },
            "ja-JP": {
              singular: "年間{PRICE}相当のサブスクリプションがすべて含まれます."
            },
            "ko-KR": {
              singular: "연 {PRICE} 상당의 구독이 모두 포함됩니다"
            },
            "pt-BR": {
              singular: "Assinaturas no valor de {PRICE} por ano, todas incluídas"
            },
            "zh-CN": {
              singular: "每年价值 {PRICE} 的订阅，全部包含在内"
            }
          }
        })))({
          periodicity: _v1,
          price: _v8
        }),
        body: (_v4 = _v6.clusterTiles, _v5 = _v6.otherProductsCount ?? 0, String((0, _v18.translate)({
          singular: "{APPS} and one more app, fully included in your plan.",
          plural: "{APPS} and {COUNT} more apps, fully included in your plan.",
          count: _v5,
          replacements: {
            APPS: (0, _v19.getBundleAppNames)(_v4),
            COUNT: `${_v5}`
          },
          dictionary: {
            es: {
              singular: "{APPS} y una aplicación más, totalmente incluida en tu plan.",
              plural: "{APPS} y {COUNT} aplicaciones más, totalmente incluidas en tu plan."
            },
            "de-DE": {
              singular: "{APPS} und eine weitere App, vollständig in Ihrem Plan enthalten.",
              plural: "{APPS} und {COUNT} weitere Apps, vollständig in Ihrem Plan enthalten."
            },
            "fr-FR": {
              singular: "{APPS} et une application supplémentaire, entièrement incluse dans votre forfait.",
              plural: "{APPS} et {COUNT} applications supplémentaires, entièrement incluses dans votre forfait."
            },
            "ja-JP": {
              singular: "{APPS} ともう1つのアプリがプランに完全に含まれます。",
              plural: "{APPS} とさらに{COUNT}個のアプリがプランに完全に含まれます。"
            },
            "ko-KR": {
              singular: "{APPS} 및 추가 1개의 앱이 귀하의 요금제에 완전히 포함됩니다.",
              plural: "{APPS} 및 추가 {COUNT}개의 앱이 귀하의 요금제에 완전히 포함됩니다."
            },
            "pt-BR": {
              singular: "{APPS} e mais um aplicativo, totalmente incluído no seu plano.",
              plural: "{APPS} e mais {COUNT} aplicativos, totalmente incluídos no seu plano."
            },
            "zh-CN": {
              singular: "{APPS} 和另外一个应用，已完全包含在您的计划中。",
              plural: "{APPS} 和另外 {COUNT} 个应用，已完全包含在您的计划中。"
            }
          }
        }))),
        ctaLabel: String((0, _v18.translate)({
          singular: "Claim your subscriptions",
          dictionary: {
            es: {
              singular: "Reclama tus suscripciones"
            },
            "de-DE": {
              singular: "Beanspruchen Sie Ihre Abonnements"
            },
            "fr-FR": {
              singular: "Réclamez vos abonnements"
            },
            "ja-JP": {
              singular: "サブスクリプションを取得する"
            },
            "ko-KR": {
              singular: "구독을 등록하세요"
            },
            "pt-BR": {
              singular: "Resgatar suas assinaturas"
            },
            "zh-CN": {
              singular: "认领您的订阅"
            }
          }
        })),
        onCtaClick: _v3
      })
    });
  }], 0);
}