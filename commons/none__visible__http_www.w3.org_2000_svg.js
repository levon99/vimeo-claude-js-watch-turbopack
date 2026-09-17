{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  function _v15() {
    return (_v15 = Object.assign.bind()).apply(null, arguments);
  }
  let _v16 = function (_v0) {
    return _v14.createElement("svg", _v15({
      preserveAspectRatio: "none",
      overflow: "visible",
      width: 549.8,
      height: 549.8,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      display: "block"
    }, _v0), _v1 || (_v1 = _v14.createElement("g", {
      filter: "url(#paywall-glow-blue_svg__filter0_f_0_4)"
    }, _v14.createElement("circle", {
      cx: 274.9,
      cy: 274.9,
      r: 146.5,
      fill: "#3767EA",
      fillOpacity: .3
    }))), _v2 || (_v2 = _v14.createElement("defs", null, _v14.createElement("filter", {
      id: "paywall-glow-blue_svg__filter0_f_0_4",
      x: 0,
      y: 0,
      width: 549.8,
      height: 549.8,
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, _v14.createElement("feFlood", {
      floodOpacity: 0,
      result: "BackgroundImageFix"
    }), _v14.createElement("feBlend", {
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), _v14.createElement("feGaussianBlur", {
      stdDeviation: 64.2,
      result: "effect1_foregroundBlur_0_4"
    })))));
  };
  function _v17() {
    return (_v17 = Object.assign.bind()).apply(null, arguments);
  }
  let _v18 = function (_v0) {
      return _v14.createElement("svg", _v17({
        preserveAspectRatio: "none",
        overflow: "visible",
        width: 436.8,
        height: 436.8,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        display: "block"
      }, _v0), _v3 || (_v3 = _v14.createElement("g", {
        filter: "url(#paywall-glow-purple_svg__filter0_f_0_4)"
      }, _v14.createElement("circle", {
        cx: 218.4,
        cy: 218.4,
        r: 90,
        fill: "#8E21CC",
        fillOpacity: .3
      }))), _v4 || (_v4 = _v14.createElement("defs", null, _v14.createElement("filter", {
        id: "paywall-glow-purple_svg__filter0_f_0_4",
        x: 0,
        y: 0,
        width: 436.8,
        height: 436.8,
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, _v14.createElement("feFlood", {
        floodOpacity: 0,
        result: "BackgroundImageFix"
      }), _v14.createElement("feBlend", {
        in: "SourceGraphic",
        in2: "BackgroundImageFix",
        result: "shape"
      }), _v14.createElement("feGaussianBlur", {
        stdDeviation: 64.2,
        result: "effect1_foregroundBlur_0_4"
      })))));
    },
    _v19 = {
      left: -273.4,
      top: -288.4,
      size: 549.8
    },
    _v20 = {
      left: 252.6,
      top: -75.4,
      size: 436.8
    };
  _v0.s(["GLOW_BLUE", 0, {
    left: -132.7,
    top: -153.4,
    size: 325.26
  }, "GLOW_PURPLE", 0, {
    left: 198.4,
    top: -30,
    size: 274.9
  }, "PAYWALL_GLOW_BLUE", 0, _v19, "PAYWALL_GLOW_PURPLE", 0, _v20], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = "bundle-paywall-banner",
    _v28 = `@container ${_v27} (max-width: ${(0, _v10.rem)(480)})`,
    _v29 = `@container ${_v27} (max-width: ${(0, _v10.rem)(400)})`,
    _v30 = `
  'cluster heading'
  'cluster price'
  'link link'
`,
    _v31 = `
  'heading heading'
  'cluster price'
  'link link'
`,
    _v32 = `
  'heading'
  'cluster'
  'price'
  'link'
`,
    _v33 = `
  'cluster heading'
  'cluster price'
`,
    _v34 = `
  'heading heading'
  'cluster price'
`,
    _v35 = `
  'heading'
  'cluster'
  'price'
`,
    _v36 = `@container ${_v27} (max-width: ${(0, _v10.rem)(340)})`;
  _v0.s(["BundlePaywallBanner", 0, ({
    bundleType: _v0,
    price: _v1,
    fullPrice: _v2,
    showLink: _v3 = !1,
    onSeeAllClick: _v4,
    surface: _v5 = "paywall",
    maxWidth: _v6
  }) => {
    let _v7 = (0, _v21.useBundleSurfaceTokens)(),
      _v8 = (0, _v22.getBundleActivationCluster)(_v0),
      _v9 = (0, _v24.getBundleMemberCount)(),
      _v10 = _v3 && void 0 !== _v4;
    return (0, _v5.jsxs)(_v9.Flex, {
      direction: "column",
      width: "100%",
      maxWidth: void 0 !== _v6 ? (0, _v10.rem)(_v6) : void 0,
      marginX: "auto",
      padding: (0, _v10.rem)(12),
      background: _v7.background,
      border: _v7.border,
      borderRadius: (0, _v10.rem)(16),
      overflow: "hidden",
      position: "relative",
      sx: {
        containerType: "inline-size",
        containerName: _v27
      },
      children: [(0, _v5.jsx)(_v25.BannerGlow, {
        geometry: _v19,
        asset: _v16
      }), (0, _v5.jsx)(_v25.BannerGlow, {
        geometry: _v20,
        asset: _v18
      }), (0, _v5.jsxs)(_v7.Box, {
        position: "relative",
        display: "grid",
        width: "100%",
        gap: (0, _v10.rem)(12),
        gridTemplateAreas: _v10 ? _v30 : _v33,
        gridTemplateColumns: "auto minmax(0, 1fr)",
        sx: {
          [_v28]: {
            gridTemplateAreas: _v10 ? _v31 : _v34,
            gridTemplateColumns: "auto minmax(0, 1fr)"
          },
          [_v29]: {
            gridTemplateAreas: _v10 ? _v32 : _v35,
            gridTemplateColumns: "minmax(0, 1fr)",
            justifyItems: "center"
          }
        },
        children: [(0, _v5.jsx)(_v7.Box, {
          gridArea: "cluster",
          alignSelf: "center",
          sx: {
            [_v29]: {
              display: "flex",
              justifyContent: "center"
            },
            [_v36]: {
              display: "none"
            }
          },
          children: (0, _v5.jsx)(_v26.TiltedTileCluster, {
            tileSize: 48.34,
            clusterTiles: _v8.clusterTiles,
            otherProductsCount: _v8.otherProductsCount,
            infoTooltip: _v8.infoTooltip
          })
        }), (0, _v5.jsx)(_v7.Box, {
          gridArea: "heading",
          sx: {
            justifySelf: "end",
            [_v28]: {
              justifySelf: "start"
            },
            [_v29]: {
              justifySelf: "center",
              textAlign: "center"
            }
          },
          children: (0, _v5.jsx)(_v11.Text, {
            variant: "heading-sm",
            color: "text-primary",
            letterSpacing: (0, _v10.rem)(-.48),
            children: "offer" === _v5 ? String((0, _v13.translate)({
              singular: "Premium access to {count} product",
              plural: "Premium access to {count} products",
              count: _v9,
              replacements: {
                count: `${_v9}`
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
            })) : String((0, _v13.translate)({
              singular: "1 premium subscription included",
              plural: "{count} premium subscriptions included",
              count: _v9,
              replacements: {
                count: `${_v9}`
              },
              dictionary: {
                es: {
                  singular: "1 suscripción premium incluida",
                  plural: "{count} suscripciones premium incluidas"
                },
                "de-DE": {
                  singular: "1 Premium-Abonnement enthalten",
                  plural: "{count} Premium-Abonnements enthalten"
                },
                "fr-FR": {
                  singular: "1 abonnement premium inclus",
                  plural: "{count} abonnements premium inclus"
                },
                "ja-JP": {
                  singular: "プレミアムサブスクリプションが1つ含まれます",
                  plural: "{count}件のプレミアムサブスクリプションが含まれます"
                },
                "ko-KR": {
                  singular: "프리미엄 구독 1개 포함",
                  plural: "{count}개의 프리미엄 구독 포함"
                },
                "pt-BR": {
                  singular: "1 assinatura premium incluída",
                  plural: "{count} assinaturas premium incluídas"
                },
                "zh-CN": {
                  singular: "包含 1 个高级订阅",
                  plural: "包含 {count} 个高级订阅"
                }
              }
            }))
          })
        }), (0, _v5.jsxs)(_v9.Flex, {
          gridArea: "price",
          alignItems: "baseline",
          justifyContent: "flex-end",
          gap: (0, _v10.rem)(6),
          flexWrap: "wrap",
          sx: {
            justifySelf: "end",
            [_v28]: {
              justifySelf: "end"
            },
            [_v29]: {
              justifySelf: "center",
              justifyContent: "center"
            }
          },
          children: [(0, _v5.jsxs)(_v9.Flex, {
            alignItems: "baseline",
            gap: (0, _v10.rem)(6),
            children: [(0 !== _v1.amount || "offer" !== _v5) && (0, _v5.jsx)(_v11.Text, {
              variant: "heading-md",
              color: "text-primary",
              letterSpacing: (0, _v10.rem)(-.8),
              children: (0, _v23.formatBundlePrice)(_v1)
            }), void 0 !== _v2 && (0 !== _v1.amount || "offer" !== _v5) && (0, _v5.jsx)(_v11.Text, {
              variant: "body-lg",
              color: "text-secondary",
              letterSpacing: (0, _v10.rem)(-.42),
              sx: {
                textDecoration: "line-through"
              },
              children: (0, _v23.formatBundlePrice)(_v2)
            })]
          }), 0 === _v1.amount && (0, _v5.jsxs)(_v6.Badge, {
            variant: "info",
            size: "sm",
            gap: "4px",
            children: [(0, _v5.jsx)(_v12.Gift, {
              boxSize: "14px"
            }), String((0, _v13.translate)({
              singular: "No extra cost",
              dictionary: {
                es: {
                  singular: "Sin costo adicional"
                },
                "de-DE": {
                  singular: "Keine zusätzlichen Kosten"
                },
                "fr-FR": {
                  singular: "Sans frais supplémentaires"
                },
                "ja-JP": {
                  singular: "追加料金なし"
                },
                "ko-KR": {
                  singular: "추가 비용 없음"
                },
                "pt-BR": {
                  singular: "Sem custo adicional"
                },
                "zh-CN": {
                  singular: "无需额外费用"
                }
              }
            }))]
          })]
        }), _v10 && (0, _v5.jsx)(_v9.Flex, {
          gridArea: "link",
          justifyContent: "center",
          children: (0, _v5.jsx)(_v8.Button, {
            variant: "tertiary",
            size: "xs",
            sx: {
              textDecoration: "underline",
              textUnderlineOffset: (0, _v10.rem)(2)
            },
            onClick: _v4,
            children: "offer" === _v5 ? String((0, _v13.translate)({
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
            })) : String((0, _v13.translate)({
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
    });
  }], 0);
}