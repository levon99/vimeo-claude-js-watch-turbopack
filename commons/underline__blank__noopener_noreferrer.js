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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = [53.14, 50.41, 46.46, 43.6],
    _v26 = {
      textDecoration: "underline",
      textUnderlineOffset: (0, _v6.rem)(2)
    },
    _v27 = _v0 => (0, _v1.jsx)(_v5.Link, {
      href: _v17.BUNDLE_LIBRARY_TERMS_PATH,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "text-secondary",
      sx: _v26,
      children: _v0
    });
  _v0.s(["BundleToggleBanner", 0, ({
    bundleType: _v0,
    isBundleActive: _v1,
    onToggleBundle: _v2,
    price: _v3,
    fullPrice: _v4,
    onLearnMoreClick: _v5,
    maxWidth: _v6,
    surface: _v7,
    bundlePrice: _v8
  }) => {
    let _v9 = (0, _v16.useBundleSurfaceTokens)(),
      _v10 = (0, _v18.getBundleActivationCluster)(_v0),
      _v11 = (0, _v22.getBundleMemberCount)(),
      {
        trackBundleOfferToggled: _v12,
        trackBundleOfferLinkClick: _v13
      } = (0, _v11.useBundleTracking)();
    return (0, _v15.useBundleOfferDisplayed)({
      surface: _v7,
      unit: "toggle_banner",
      bundleType: _v0,
      bundlePrice: _v8 ?? null
    }), (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      maxWidth: void 0 !== _v6 ? (0, _v6.rem)(_v6) : void 0,
      marginX: "auto",
      background: _v9.background,
      border: _v9.border,
      borderRadius: (0, _v6.rem)(24),
      overflow: "hidden",
      paddingX: {
        base: (0, _v6.rem)(20),
        md: (0, _v6.rem)(40)
      },
      paddingY: {
        base: (0, _v6.rem)(24),
        md: (0, _v6.rem)(20)
      },
      children: [(0, _v1.jsx)(_v23.BannerGlow, {
        geometry: _v14.GLOW_BLUE,
        asset: _v12.default
      }), (0, _v1.jsx)(_v23.BannerGlow, {
        geometry: _v14.GLOW_PURPLE,
        asset: _v13.default
      }), (0, _v1.jsx)(_v3.Box, {
        width: "100%",
        sx: {
          containerType: "inline-size",
          containerName: "bundle-toggle"
        },
        children: (0, _v1.jsxs)(_v4.Flex, {
          width: "100%",
          position: "relative",
          alignItems: "center",
          gap: (0, _v6.rem)(32),
          flexWrap: "wrap",
          children: [(0, _v1.jsx)(_v3.Box, {
            height: (0, _v6.rem)(72),
            flex: "0 0 auto",
            sx: {
              [`@container bundle-toggle (max-width: ${(0, _v6.rem)(599)})`]: {
                display: "none"
              },
              [`@container bundle-toggle (min-width: ${(0, _v6.rem)(600)})`]: {
                display: "block"
              }
            },
            children: (0, _v1.jsx)(_v24.BundleTileCluster, {
              hostTileSize: 68,
              partnerTileSizes: _v25,
              clusterTiles: _v10.clusterTiles,
              otherProductsCount: _v10.otherProductsCount,
              infoTooltip: _v10.infoTooltip
            })
          }), (0, _v1.jsxs)(_v4.Flex, {
            flex: "1 1 34rem",
            minWidth: "min(100%, 34rem)",
            minHeight: (0, _v6.rem)(72),
            gap: (0, _v6.rem)(32),
            alignItems: "center",
            flexWrap: "wrap",
            sx: {
              [`@container bundle-toggle (max-width: ${(0, _v6.rem)(599)})`]: {
                gap: (0, _v6.rem)(16)
              }
            },
            children: [(0, _v1.jsxs)(_v4.Flex, {
              flex: "1 1 24rem",
              minWidth: 0,
              direction: "column",
              gap: (0, _v6.rem)(6),
              children: [(0, _v1.jsxs)(_v4.Flex, {
                alignItems: "center",
                gap: (0, _v6.rem)(12),
                flexWrap: "wrap",
                children: [(0, _v1.jsx)(_v8.Text, {
                  variant: "heading-lg",
                  color: "text-primary",
                  fontSize: {
                    base: (0, _v6.rem)(20),
                    md: (0, _v6.rem)(24)
                  },
                  letterSpacing: {
                    base: (0, _v6.rem)(-.8),
                    md: (0, _v6.rem)(-.96)
                  },
                  children: (0, _v20.getBundleToggleBannerHeading)(_v3, _v11)
                }), null === _v3 ? (0, _v1.jsxs)(_v2.Badge, {
                  variant: "info",
                  size: "sm",
                  gap: "4px",
                  children: [(0, _v1.jsx)(_v9.Gift, {
                    boxSize: "14px"
                  }), (0, _v20.getBundlePriceBadgeLabel)(null)]
                }) : (0, _v1.jsxs)(_v4.Flex, {
                  background: "status-info-primary",
                  borderRadius: (0, _v6.rem)(8),
                  paddingX: (0, _v6.rem)(8),
                  paddingY: (0, _v6.rem)(2),
                  alignItems: "baseline",
                  gap: (0, _v6.rem)(4),
                  flexShrink: 0,
                  children: [(0, _v1.jsx)(_v8.Text, {
                    color: "text-button-inverted",
                    fontSize: (0, _v6.rem)(16),
                    letterSpacing: (0, _v6.rem)(-.48),
                    children: (0, _v21.formatBundlePrice)(_v3)
                  }), void 0 !== _v4 && (0, _v1.jsx)(_v8.Text, {
                    color: "text-button-inverted",
                    fontSize: (0, _v6.rem)(14),
                    letterSpacing: (0, _v6.rem)(-.42),
                    sx: {
                      textDecoration: "line-through",
                      opacity: .8
                    },
                    children: (0, _v21.formatBundlePrice)(_v4)
                  })]
                })]
              }), (0, _v1.jsxs)(_v8.Text, {
                variant: "body-lg",
                color: "text-secondary",
                children: [(0, _v19.getBundleAppsBodyCopy)(_v10.clusterTiles, _v10.otherProductsCount ?? 0), " ", (0, _v1.jsx)(_v8.Text, {
                  as: "span",
                  role: "button",
                  tabIndex: 0,
                  cursor: "pointer",
                  sx: {
                    textDecoration: "underline",
                    textUnderlineOffset: (0, _v6.rem)(2)
                  },
                  onClick: () => {
                    void 0 !== _v7 && _v13({
                      surface: _v7,
                      link: "learn_more"
                    }), _v5();
                  },
                  children: String((0, _v10.translate)({
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
                  }))
                }), ".", " ", (0, _v10.translate)({
                  singular: "Offer subject to {LINK}conditions{/LINK}.",
                  replacements: {
                    LINK: _v27
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
                })]
              })]
            }), (0, _v1.jsx)(_v3.Box, {
              flex: "0 0 auto",
              marginLeft: "auto",
              children: (0, _v1.jsx)(_v7.Switch, {
                size: "lg",
                isChecked: _v1,
                onChange: () => {
                  let _v0 = !_v1;
                  void 0 !== _v7 && _v12({
                    surface: _v7,
                    bundleType: _v0,
                    bundlePrice: _v8 ?? null,
                    isBundleActive: _v0
                  }), _v2(_v0);
                },
                "aria-label": String((0, _v10.translate)({
                  singular: "Add premium access",
                  dictionary: {
                    es: {
                      singular: "Añadir acceso premium"
                    },
                    "de-DE": {
                      singular: "Premiumzugang hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Ajouter l'accès premium"
                    },
                    "ja-JP": {
                      singular: "プレミアムアクセスを追加"
                    },
                    "ko-KR": {
                      singular: "프리미엄 액세스 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionar acesso premium"
                    },
                    "zh-CN": {
                      singular: "添加高级访问权限"
                    }
                  }
                }))
              })
            })]
          })]
        })
      })]
    });
  }]);
}