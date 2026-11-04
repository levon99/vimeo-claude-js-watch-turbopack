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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = "bundle-paywall-banner",
    _v24 = `@container ${_v23} (max-width: ${(0, _v7.rem)(480)})`,
    _v25 = `@container ${_v23} (max-width: ${(0, _v7.rem)(400)})`,
    _v26 = `
  'cluster heading'
  'cluster price'
  'link link'
`,
    _v27 = `
  'heading heading'
  'cluster price'
  'link link'
`,
    _v28 = `
  'heading'
  'cluster'
  'price'
  'link'
`,
    _v29 = `
  'cluster heading'
  'cluster price'
`,
    _v30 = `
  'heading heading'
  'cluster price'
`,
    _v31 = `
  'heading'
  'cluster'
  'price'
`,
    _v32 = `@container ${_v23} (max-width: ${(0, _v7.rem)(340)})`,
    _v33 = {
      textDecoration: "underline",
      textUnderlineOffset: (0, _v7.rem)(2)
    },
    _v34 = _v0 => (0, _v1.jsx)(_v6.Link, {
      href: _v17.BUNDLE_LIBRARY_TERMS_PATH,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "text-secondary",
      sx: _v33,
      children: _v0
    });
  _v0.s(["BundlePaywallBanner", 0, ({
    bundleType: _v0,
    price: _v1,
    fullPrice: _v2,
    showLink: _v3 = !1,
    onSeeAllClick: _v4,
    surface: _v5 = "paywall",
    maxWidth: _v6,
    trackingSurface: _v7,
    bundlePrice: _v8,
    showTerms: _v9 = !1
  }) => {
    let _v10 = (0, _v16.useBundleSurfaceTokens)(),
      _v11 = (0, _v18.getBundleActivationCluster)(_v0),
      _v12 = (0, _v20.getBundleMemberCount)(),
      _v13 = _v3 && void 0 !== _v4,
      _v14 = _v13 || _v9,
      {
        trackBundleOfferLinkClick: _v15
      } = (0, _v11.useBundleTracking)();
    return (0, _v15.useBundleOfferDisplayed)({
      surface: _v7,
      unit: "paywall_banner",
      bundleType: _v0,
      bundlePrice: _v8 ?? null
    }), (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      width: "100%",
      maxWidth: void 0 !== _v6 ? (0, _v7.rem)(_v6) : void 0,
      marginX: "auto",
      padding: (0, _v7.rem)(12),
      background: _v10.background,
      border: _v10.border,
      borderRadius: (0, _v7.rem)(16),
      overflow: "hidden",
      position: "relative",
      sx: {
        containerType: "inline-size",
        containerName: _v23
      },
      children: [(0, _v1.jsx)(_v21.BannerGlow, {
        geometry: _v14.PAYWALL_GLOW_BLUE,
        asset: _v12.default
      }), (0, _v1.jsx)(_v21.BannerGlow, {
        geometry: _v14.PAYWALL_GLOW_PURPLE,
        asset: _v13.default
      }), (0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        display: "grid",
        width: "100%",
        gap: (0, _v7.rem)(12),
        gridTemplateAreas: _v14 ? _v26 : _v29,
        gridTemplateColumns: "auto minmax(0, 1fr)",
        sx: {
          [_v24]: {
            gridTemplateAreas: _v14 ? _v27 : _v30,
            gridTemplateColumns: "auto minmax(0, 1fr)"
          },
          [_v25]: {
            gridTemplateAreas: _v14 ? _v28 : _v31,
            gridTemplateColumns: "minmax(0, 1fr)",
            justifyItems: "center"
          }
        },
        children: [(0, _v1.jsx)(_v3.Box, {
          gridArea: "cluster",
          alignSelf: "center",
          sx: {
            [_v25]: {
              display: "flex",
              justifyContent: "center"
            },
            [_v32]: {
              display: "none"
            }
          },
          children: (0, _v1.jsx)(_v22.TiltedTileCluster, {
            tileSize: 48.34,
            clusterTiles: _v11.clusterTiles,
            otherProductsCount: _v11.otherProductsCount,
            infoTooltip: _v11.infoTooltip
          })
        }), (0, _v1.jsx)(_v3.Box, {
          gridArea: "heading",
          sx: {
            justifySelf: "end",
            [_v24]: {
              justifySelf: "start"
            },
            [_v25]: {
              justifySelf: "center",
              textAlign: "center"
            }
          },
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-sm",
            color: "text-primary",
            letterSpacing: (0, _v7.rem)(-.48),
            children: "offer" === _v5 ? String((0, _v10.translate)({
              singular: "Premium access to {count} product",
              plural: "Premium access to {count} products",
              count: _v12,
              replacements: {
                count: `${_v12}`
              },
              dictionary: {
                es: {
                  singular: "Acceso premium a {count} producto",
                  plural: "Acceso premium a {count} productos"
                },
                "de-DE": {
                  singular: "Premiumzugang für {count} Produkt",
                  plural: "Premiumzugang für {count} Produkte"
                },
                "fr-FR": {
                  singular: "Accès premium à {count} produit",
                  plural: "Accès premium à {count} produits"
                },
                "ja-JP": {
                  singular: "{count}件の製品へのプレミアムアクセス",
                  plural: "{count}件の製品へのプレミアムアクセス"
                },
                "ko-KR": {
                  singular: "{count}개 상품에 대한 프리미엄 액세스",
                  plural: "{count}개 상품에 대한 프리미엄 액세스"
                },
                "pt-BR": {
                  singular: "Acesso premium a {count} produto",
                  plural: "Acesso premium a {count} produtos"
                },
                "zh-CN": {
                  singular: "为 {count} 个产品提供高级访问权限",
                  plural: "为 {count} 个产品提供高级访问权限"
                }
              }
            })) : String((0, _v10.translate)({
              singular: "1 premium subscription",
              plural: "{count} premium subscriptions",
              count: _v12,
              replacements: {
                count: `${_v12}`
              },
              dictionary: {
                es: {
                  singular: "1 suscripción premium",
                  plural: "{count} suscripciones premium"
                },
                "de-DE": {
                  singular: "1 Premium-Abonnement",
                  plural: "{count} Premium-Abonnements"
                },
                "fr-FR": {
                  singular: "1 abonnement premium",
                  plural: "{count} abonnements premium"
                },
                "ja-JP": {
                  singular: "1件のプレミアムサブスクリプション",
                  plural: "{count}件のプレミアムサブスクリプション"
                },
                "ko-KR": {
                  singular: "프리미엄 구독 1개",
                  plural: "{count}개의 프리미엄 구독"
                },
                "pt-BR": {
                  singular: "1 assinatura premium",
                  plural: "{count} assinaturas premium"
                },
                "zh-CN": {
                  singular: "1 个高级订阅",
                  plural: "{count} 个高级订阅"
                }
              }
            }))
          })
        }), (0, _v1.jsxs)(_v5.Flex, {
          gridArea: "price",
          alignItems: "baseline",
          justifyContent: "flex-end",
          gap: (0, _v7.rem)(6),
          flexWrap: "wrap",
          sx: {
            justifySelf: "end",
            [_v24]: {
              justifySelf: "end"
            },
            [_v25]: {
              justifySelf: "center",
              justifyContent: "center"
            }
          },
          children: [(0, _v1.jsxs)(_v5.Flex, {
            alignItems: "baseline",
            gap: (0, _v7.rem)(6),
            children: [(0 !== _v1.amount || "offer" !== _v5) && (0, _v1.jsx)(_v8.Text, {
              variant: "heading-md",
              color: "text-primary",
              letterSpacing: (0, _v7.rem)(-.8),
              children: (0, _v19.formatBundlePrice)(_v1)
            }), void 0 !== _v2 && (0 !== _v1.amount || "offer" !== _v5) && (0, _v1.jsx)(_v8.Text, {
              variant: "body-lg",
              color: "text-secondary",
              letterSpacing: (0, _v7.rem)(-.42),
              sx: {
                textDecoration: "line-through"
              },
              children: (0, _v19.formatBundlePrice)(_v2)
            })]
          }), 0 === _v1.amount && (0, _v1.jsxs)(_v2.Badge, {
            variant: "info",
            size: "sm",
            gap: "4px",
            children: [(0, _v1.jsx)(_v9.Gift, {
              boxSize: "14px"
            }), String((0, _v10.translate)({
              singular: "Free gift",
              dictionary: {
                es: {
                  singular: "Regalo gratuito"
                },
                "de-DE": {
                  singular: "Kostenloses Geschenk"
                },
                "fr-FR": {
                  singular: "Cadeau offert"
                },
                "ja-JP": {
                  singular: "無料プレゼント"
                },
                "ko-KR": {
                  singular: "무료 선물"
                },
                "pt-BR": {
                  singular: "Brinde gratuito"
                },
                "zh-CN": {
                  singular: "免费赠品"
                }
              }
            }))]
          })]
        }), _v14 && (0, _v1.jsxs)(_v5.Flex, {
          gridArea: "link",
          direction: "column",
          alignItems: "start",
          gap: (0, _v7.rem)(8),
          sx: {
            [_v25]: {
              alignItems: "center"
            }
          },
          children: [_v9 && (0, _v1.jsx)(_v8.Text, {
            variant: "body-xs",
            color: "text-secondary",
            children: (0, _v10.translate)({
              singular: "Offer subject to {LINK}conditions{/LINK}.",
              replacements: {
                LINK: _v34
              },
              dictionary: {
                es: {
                  singular: "Oferta sujeta a {LINK}condiciones{/LINK}."
                },
                "de-DE": {
                  singular: "Das Angebot unterliegt den {LINK}Bedingungen{/LINK}."
                },
                "fr-FR": {
                  singular: "Offre soumise aux {LINK}conditions{/LINK}."
                },
                "ja-JP": {
                  singular: "オファーには{LINK}条件{/LINK}が適用されます。"
                },
                "ko-KR": {
                  singular: "제안은 {LINK}약관{/LINK}의 적용을 받습니다."
                },
                "pt-BR": {
                  singular: "Oferta sujeita às {LINK}condições{/LINK}."
                },
                "zh-CN": {
                  singular: "优惠受{LINK}条款{/LINK}约束."
                }
              }
            })
          }), _v13 && (0, _v1.jsx)(_v5.Flex, {
            alignSelf: "stretch",
            justifyContent: "center",
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              size: "xs",
              sx: {
                textDecoration: "underline",
                textUnderlineOffset: (0, _v7.rem)(2)
              },
              onClick: () => {
                void 0 !== _v7 && _v15({
                  surface: _v7,
                  link: "offer" === _v5 ? "learn_more" : "see_all_products"
                }), _v4?.();
              },
              children: "offer" === _v5 ? String((0, _v10.translate)({
                singular: "Learn more",
                dictionary: {
                  es: {
                    singular: "Ver más"
                  },
                  "de-DE": {
                    singular: "Mehr dazu"
                  },
                  "fr-FR": {
                    singular: "En savoir plus "
                  },
                  "ja-JP": {
                    singular: "詳細を見る"
                  },
                  "ko-KR": {
                    singular: "자세히 보기"
                  },
                  "pt-BR": {
                    singular: "Saiba mais"
                  },
                  "zh-CN": {
                    singular: "了解更多"
                  }
                }
              })) : String((0, _v10.translate)({
                singular: "See all the products",
                dictionary: {
                  es: {
                    singular: "Ver todos los productos"
                  },
                  "de-DE": {
                    singular: "Alle Produkte ansehen"
                  },
                  "fr-FR": {
                    singular: "Voir tous les produits"
                  },
                  "ja-JP": {
                    singular: "すべての製品を見る"
                  },
                  "ko-KR": {
                    singular: "모든 제품 보기"
                  },
                  "pt-BR": {
                    singular: "Veja todos os produtos"
                  },
                  "zh-CN": {
                    singular: "查看所有产品"
                  }
                }
              }))
            })
          })]
        })]
      })]
    });
  }]);
}