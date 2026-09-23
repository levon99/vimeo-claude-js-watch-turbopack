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
      _v5 = (0, _v5.getBundleActivationCluster)(_v0),
      _v6 = (0, _v4.resolveBundleIdealAmount)({
        periodicity: _v1,
        display: "period",
        currency: _v2
      }),
      _v7 = (0, _v6.formatBundlePrice)(_v6 ?? {
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
          singular: "You now have access to subscriptions worth up to {PRICE} a month",
          replacements: {
            PRICE: _v1
          },
          dictionary: {
            es: {
              singular: "Ahora tienes acceso a suscripciones por valor de hasta {PRICE} al mes"
            },
            "de-DE": {
              singular: "Sie haben jetzt Zugriff auf Abonnements im Wert von bis zu {PRICE} pro Monat"
            },
            "fr-FR": {
              singular: "Vous avez désormais accès à des abonnements d'une valeur allant jusqu'à {PRICE} par mois"
            },
            "ja-JP": {
              singular: "月額最大{PRICE}相当のサブスクリプションにアクセスできるようになりました"
            },
            "ko-KR": {
              singular: "이제 월 최대 {PRICE} 상당의 구독을 이용할 수 있습니다"
            },
            "pt-BR": {
              singular: "Agora você tem acesso a assinaturas no valor de até {PRICE} por mês"
            },
            "zh-CN": {
              singular: "您现在可获得价值高达每月 {PRICE} 的订阅服务"
            }
          }
        })) : String((0, _v18.translate)({
          singular: "You now have access to subscriptions worth up to {PRICE} a year",
          replacements: {
            PRICE: _v1
          },
          dictionary: {
            es: {
              singular: "Ahora tienes acceso a suscripciones por valor de hasta {PRICE} al año"
            },
            "de-DE": {
              singular: "Sie haben jetzt Zugriff auf Abonnements im Wert von bis zu {PRICE} pro Jahr"
            },
            "fr-FR": {
              singular: "Vous avez désormais accès à des abonnements d'une valeur allant jusqu'à {PRICE} par an"
            },
            "ja-JP": {
              singular: "年間最大{PRICE}相当のサブスクリプションにアクセスできるようになりました"
            },
            "ko-KR": {
              singular: "이제 연간 최대 {PRICE} 상당의 구독을 이용할 수 있습니다"
            },
            "pt-BR": {
              singular: "Agora você tem acesso a assinaturas no valor de até {PRICE} por ano"
            },
            "zh-CN": {
              singular: "您现在可获得价值高达每年 {PRICE} 的订阅服务"
            }
          }
        })))({
          periodicity: _v1,
          price: _v7
        }),
        body: (_v4 = _v5.clusterTiles, String((0, _v18.translate)({
          singular: "Premium access to {APPS} and more",
          replacements: {
            APPS: (0, _v19.getBundleAppNames)(_v4)
          },
          dictionary: {
            es: {
              singular: "Acceso premium a {APPS} y más"
            },
            "de-DE": {
              singular: "Premiumzugang zu {APPS} und mehr"
            },
            "fr-FR": {
              singular: "Accès Premium à {APPS} et plus"
            },
            "ja-JP": {
              singular: "{APPS}へのプレミアムアクセスなど"
            },
            "ko-KR": {
              singular: "{APPS} 및 그 외 콘텐츠에 대한 프리미엄 액세스"
            },
            "pt-BR": {
              singular: "Acesso Premium a {APPS} e muito mais"
            },
            "zh-CN": {
              singular: "尊享 {APPS} 及更多权益"
            }
          }
        }))),
        ctaLabel: String((0, _v18.translate)({
          singular: "Redeem your subscriptions",
          dictionary: {
            es: {
              singular: "Canjea tus suscripciones"
            },
            "de-DE": {
              singular: "Lösen Sie Ihre Abonnements ein"
            },
            "fr-FR": {
              singular: "Récupérez vos abonnements"
            },
            "ja-JP": {
              singular: "サブスクリプションを引き換える"
            },
            "ko-KR": {
              singular: "구독을 등록하세요"
            },
            "pt-BR": {
              singular: "Resgatar suas assinaturas"
            },
            "zh-CN": {
              singular: "兑换您的订阅"
            }
          }
        })),
        onCtaClick: _v3
      })
    });
  }], 0);
}