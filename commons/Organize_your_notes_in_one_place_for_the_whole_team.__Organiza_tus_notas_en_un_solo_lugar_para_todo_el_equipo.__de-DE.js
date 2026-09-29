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
    _v16 = _v0.i(0);
  let _v17 = {
    evernote: (0, _v14.translate)({
      singular: "Organize your notes in one place, for the whole team.",
      dictionary: {
        es: {
          singular: "Organiza tus notas en un solo lugar para todo el equipo."
        },
        "de-DE": {
          singular: "Organisieren Sie Ihre Notizen an einem Ort für das gesamte Team."
        },
        "fr-FR": {
          singular: "Organisez vos notes en un seul endroit, pour toute l'équipe."
        },
        "ja-JP": {
          singular: "チーム全体で使えるノートを1つの場所にまとめて整理しましょう。"
        },
        "ko-KR": {
          singular: "팀 전체를 위해 메모를 한 곳에 정리하세요."
        },
        "pt-BR": {
          singular: "Organize suas notas em um só lugar, para toda a equipe."
        },
        "zh-CN": {
          singular: "在一个地方整理笔记，供整个团队使用。"
        }
      }
    }),
    harvest: (0, _v14.translate)({
      singular: "Track hours across shoots, and bill clients directly.",
      dictionary: {
        es: {
          singular: "Controla las horas en los rodajes y factura directamente a los clientes."
        },
        "de-DE": {
          singular: "Erfassen Sie Stunden über mehrere Drehs hinweg und stellen Sie Kunden direkt in Rechnung."
        },
        "fr-FR": {
          singular: "Suivez les heures sur l’ensemble des tournages, et facturez directement les clients."
        },
        "ja-JP": {
          singular: "複数の撮影にわたる作業時間を追跡し、クライアントに直接請求できます。"
        },
        "ko-KR": {
          singular: "여러 촬영의 작업 시간을 추적하고 고객에게 직접 청구하세요."
        },
        "pt-BR": {
          singular: "Controle as horas nas filmagens e cobre os clientes diretamente."
        },
        "zh-CN": {
          singular: "跟踪各次拍摄的工时，并直接向客户计费。"
        }
      }
    })
  };
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = _v0 => (0, _v1.jsx)(_v7.Link, {
      href: _v19.BUNDLE_LIBRARY_TERMS_PATH,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "text-secondary",
      sx: {
        textDecoration: "underline",
        textUnderlineOffset: (0, _v12.rem)(2)
      },
      children: _v0
    }),
    _v26 = ({
      productId: _v0,
      productDescriptionsVariant: _v1
    }) => (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      gap: (0, _v12.rem)(12),
      children: [(0, _v1.jsx)(_v24.ProductTileView, {
        productId: _v0,
        size: 45
      }), (0, _v1.jsxs)(_v5.Flex, {
        direction: "column",
        minWidth: 0,
        children: [(0, _v1.jsx)(_v23.ProductNameWithTier, {
          productId: _v0,
          variant: "heading-sm"
        }), (0, _v1.jsx)(_v13.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: ((_v0, _v1 = "default") => "default" === _v1 ? _v17[_v0] ?? _v15.PRODUCT_DESCRIPTIONS[_v0] : (0, _v15.getProductDescription)(_v0, _v1))(_v0, _v1)
        })]
      })]
    });
  _v0.s(["BundleIntroModal", 0, ({
    isOpen: _v0,
    bundleType: _v1,
    onCtaClick: _v2,
    onDismiss: _v3,
    productDescriptionsVariant: _v4 = "default"
  }) => {
    let _v5,
      {
        clusterTiles: _v6,
        otherProductsCount: _v7
      } = (0, _v20.getBundleActivationCluster)(_v1),
      _v8 = (0, _v2.useRef)("dismiss"),
      _v9 = (0, _v2.useRef)(null);
    return (0, _v1.jsxs)(_v8.Modal, {
      isOpen: _v0,
      onClose: () => _v3(_v8.current),
      initialFocusRef: _v9,
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsx)(_v10.ModalContent, {
        maxWidth: (0, _v12.rem)(927),
        height: {
          base: "100dvh",
          md: "auto"
        },
        maxHeight: {
          base: "100dvh",
          md: "90vh"
        },
        borderRadius: (0, _v12.rem)(28),
        overflow: "hidden",
        padding: (0, _v12.rem)(0),
        children: (0, _v1.jsxs)(_v5.Flex, {
          direction: {
            base: "column",
            md: "row"
          },
          alignItems: "stretch",
          background: "surface",
          width: "100%",
          height: "100%",
          minHeight: 0,
          children: [(0, _v1.jsx)(_v3.Box, {
            display: {
              base: "none",
              md: "block"
            },
            flex: "0 0 39.6%",
            position: "relative",
            overflow: "hidden",
            background: "vimeoBlue.200",
            children: (0, _v1.jsx)(_v6.Image, {
              src: _v18.BUNDLE_SIDE_ARTWORK_URL,
              alt: "",
              position: "absolute",
              top: (0, _v12.rem)(0),
              left: (0, _v12.rem)(0),
              width: "100%",
              height: "100%",
              objectFit: "cover",
              onError: _v0 => {
                _v0.currentTarget.style.display = "none";
              }
            })
          }), (0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            minWidth: 0,
            minHeight: 0,
            width: "100%",
            flex: "1 1 auto",
            children: [(0, _v1.jsx)(_v9.ModalCloseButton, {
              top: (0, _v12.rem)(20),
              right: (0, _v12.rem)(20),
              "aria-label": (0, _v14.translate)({
                singular: "Close",
                dictionary: {
                  es: {
                    singular: "Cerrar"
                  },
                  "de-DE": {
                    singular: "Schließen"
                  },
                  "fr-FR": {
                    singular: "Fermer "
                  },
                  "ja-JP": {
                    singular: "閉じる"
                  },
                  "ko-KR": {
                    singular: "닫기"
                  },
                  "pt-BR": {
                    singular: "Fechar"
                  },
                  "zh-CN": {
                    singular: "关闭"
                  }
                }
              }),
              onClick: () => {
                _v8.current = "close_button";
              }
            }), (0, _v1.jsxs)(_v5.Flex, {
              flex: "1 1 auto",
              minHeight: 0,
              overflowY: "auto",
              direction: "column",
              padding: (0, _v12.rem)(24),
              paddingRight: {
                base: (0, _v12.rem)(24),
                md: (0, _v12.rem)(56)
              },
              paddingBottom: (0, _v12.rem)(16),
              children: [(0, _v1.jsx)(_v13.Text, {
                as: "h2",
                variant: "heading-xl",
                color: "text-primary",
                letterSpacing: (0, _v12.rem)(-1.44),
                children: (0, _v22.getBundleAddOnModalTitle)((0, _v21.getBundleMemberCount)())
              }), (0, _v1.jsx)(_v3.Box, {
                paddingTop: (0, _v12.rem)(8),
                children: (0, _v1.jsx)(_v13.Text, {
                  variant: "body-lg",
                  color: "text-secondary",
                  letterSpacing: (0, _v12.rem)(-.48),
                  children: (_v5 = (0, _v16.getBundleAppNames)(_v6), void 0 === _v7 ? (0, _v14.translate)({
                    singular: "Unlock your premium access to {PRODUCTS}, all for free with Vimeo subscriptions.",
                    replacements: {
                      PRODUCTS: _v5
                    },
                    dictionary: {
                      es: {
                        singular: "Desbloquea tu acceso premium a {PRODUCTS}, todo gratis con las suscripciones de Vimeo."
                      },
                      "de-DE": {
                        singular: "Schalten Sie Ihren Premium-Zugang zu {PRODUCTS} frei, alles kostenlos mit Vimeo-Abonnements."
                      },
                      "fr-FR": {
                        singular: "Débloquez votre accès premium à {PRODUCTS}, le tout gratuitement avec les abonnements Vimeo."
                      },
                      "ja-JP": {
                        singular: "Vimeoのサブスクリプションなら、{PRODUCTS} へのプレミアムアクセスをすべて無料でご利用いただけます."
                      },
                      "ko-KR": {
                        singular: "Vimeo 구독으로 {PRODUCTS}에 대한 프리미엄 액세스를 모두 무료로 이용하세요."
                      },
                      "pt-BR": {
                        singular: "Desbloqueie seu acesso premium a {PRODUCTS}, tudo gratuitamente com assinaturas Vimeo."
                      },
                      "zh-CN": {
                        singular: "通过 Vimeo 订阅，免费解锁您对 {PRODUCTS} 的高级访问权限。"
                      }
                    }
                  }) : (0, _v14.translate)({
                    singular: "Unlock your premium access to {PRODUCTS} and {COUNT} more products, all for free with Vimeo subscriptions.",
                    replacements: {
                      PRODUCTS: _v5,
                      COUNT: `${_v7}`
                    },
                    dictionary: {
                      es: {
                        singular: "Desbloquea tu acceso premium a {PRODUCTS} y {COUNT} productos más, todo gratis con las suscripciones de Vimeo."
                      },
                      "de-DE": {
                        singular: "Schalten Sie Ihren Premium-Zugang zu {PRODUCTS} und {COUNT} weiteren Produkten frei, alles kostenlos mit Vimeo-Abonnements."
                      },
                      "fr-FR": {
                        singular: "Débloquez votre accès premium à {PRODUCTS} et {COUNT} autres produits, le tout gratuitement avec les abonnements Vimeo."
                      },
                      "ja-JP": {
                        singular: "Vimeoのサブスクリプションなら、{PRODUCTS} とさらに {COUNT} 件の製品へのプレミアムアクセスをすべて無料でご利用いただけます."
                      },
                      "ko-KR": {
                        singular: "Vimeo 구독으로 {PRODUCTS} 및 추가 {COUNT}개의 제품에 대한 프리미엄 액세스를 모두 무료로 이용하세요."
                      },
                      "pt-BR": {
                        singular: "Desbloqueie seu acesso premium a {PRODUCTS} e mais {COUNT} produtos, tudo gratuitamente com assinaturas Vimeo."
                      },
                      "zh-CN": {
                        singular: "通过 Vimeo 订阅，免费解锁您对 {PRODUCTS} 以及另外 {COUNT} 个产品的高级访问权限。"
                      }
                    }
                  }))
                })
              }), (0, _v1.jsxs)(_v5.Flex, {
                direction: "column",
                gap: (0, _v12.rem)(16),
                paddingTop: (0, _v12.rem)(24),
                children: [_v6.map(_v0 => (0, _v1.jsx)(_v26, {
                  productId: _v0.productId,
                  productDescriptionsVariant: _v4
                }, _v0.productId)), void 0 !== _v7 && (0, _v1.jsx)(_v13.Text, {
                  variant: "heading-sm",
                  color: "text-primary",
                  children: (0, _v14.translate)({
                    singular: "+ {COUNT} more",
                    replacements: {
                      COUNT: `${_v7}`
                    },
                    dictionary: {
                      es: {
                        singular: "+ {COUNT} más"
                      },
                      "de-DE": {
                        singular: "+ {COUNT} weitere"
                      },
                      "fr-FR": {
                        singular: "+ {COUNT} de plus"
                      },
                      "ja-JP": {
                        singular: "+ あと{COUNT}件"
                      },
                      "ko-KR": {
                        singular: "+ {COUNT}개 더"
                      },
                      "pt-BR": {
                        singular: "+ {COUNT} a mais"
                      },
                      "zh-CN": {
                        singular: "+ 还有 {COUNT} 个"
                      }
                    }
                  })
                })]
              })]
            }), (0, _v1.jsxs)(_v3.Box, {
              flexShrink: 0,
              paddingX: (0, _v12.rem)(24),
              paddingTop: (0, _v12.rem)(12),
              paddingBottom: (0, _v12.rem)(12),
              children: [(0, _v1.jsx)(_v4.Button, {
                ref: _v9,
                variant: "primary",
                size: "lg",
                width: "100%",
                onClick: _v2,
                children: (0, _v14.translate)({
                  singular: "See what's included",
                  dictionary: {
                    es: {
                      singular: "Ver lo que incluye"
                    },
                    "de-DE": {
                      singular: "Sehen Sie, was enthalten ist"
                    },
                    "fr-FR": {
                      singular: "Voir ce qui est inclus"
                    },
                    "ja-JP": {
                      singular: "含まれる内容を見る"
                    },
                    "ko-KR": {
                      singular: "포함된 내용을 확인하세요"
                    },
                    "pt-BR": {
                      singular: "Veja o que está incluído"
                    },
                    "zh-CN": {
                      singular: "查看包含的内容"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v13.Text, {
                variant: "body-xs",
                color: "text-secondary",
                marginTop: (0, _v12.rem)(12),
                children: (0, _v14.translate)({
                  singular: "Offer subject to {LINK}conditions{/LINK}.",
                  replacements: {
                    LINK: _v25
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
              })]
            })]
          })]
        })
      })]
    });
  }], 0);
}