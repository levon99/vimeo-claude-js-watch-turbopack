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
    _v18 = _v0.i(0);
  let _v19 = {
    evernote: (0, _v16.translate)({
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
    harvest: (0, _v16.translate)({
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
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v0 => (0, _v1.jsx)(_v9.Link, {
      href: _v21.BUNDLE_LIBRARY_TERMS_PATH,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "text-secondary",
      sx: {
        textDecoration: "underline",
        textUnderlineOffset: (0, _v14.rem)(2)
      },
      children: _v0
    }),
    _v28 = ({
      productId: _v0
    }) => (0, _v1.jsxs)(_v7.Flex, {
      alignItems: "center",
      gap: (0, _v14.rem)(12),
      children: [(0, _v1.jsx)(_v26.ProductTileView, {
        productId: _v0,
        size: 45
      }), (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        minWidth: 0,
        children: [(0, _v1.jsx)(_v25.ProductNameWithTier, {
          productId: _v0,
          variant: "heading-sm"
        }), (0, _v1.jsx)(_v15.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v19[_v0] ?? _v17.PRODUCT_DESCRIPTIONS[_v0]
        })]
      })]
    }),
    _v29 = ({
      isOpen: _v0,
      bundleType: _v1,
      onCtaClick: _v2,
      onDismiss: _v3
    }) => {
      let _v4,
        {
          clusterTiles: _v5,
          otherProductsCount: _v6
        } = (0, _v22.getBundleActivationCluster)(_v1),
        _v7 = (0, _v2.useRef)("dismiss"),
        _v8 = (0, _v2.useRef)(null);
      return (0, _v1.jsxs)(_v10.Modal, {
        isOpen: _v0,
        onClose: () => _v3(_v7.current),
        initialFocusRef: _v8,
        children: [(0, _v1.jsx)(_v13.ModalOverlay, {}), (0, _v1.jsx)(_v12.ModalContent, {
          maxWidth: (0, _v14.rem)(927),
          height: {
            base: "100dvh",
            md: (0, _v14.rem)(591)
          },
          maxHeight: {
            base: "100dvh",
            md: "90vh"
          },
          borderRadius: (0, _v14.rem)(28),
          overflow: "hidden",
          padding: (0, _v14.rem)(0),
          children: (0, _v1.jsxs)(_v7.Flex, {
            direction: {
              base: "column",
              md: "row"
            },
            alignItems: "stretch",
            background: "surface",
            width: "100%",
            height: "100%",
            minHeight: 0,
            children: [(0, _v1.jsx)(_v5.Box, {
              display: {
                base: "none",
                md: "block"
              },
              flex: "0 0 39.6%",
              position: "relative",
              overflow: "hidden",
              background: "vimeoBlue.200",
              children: (0, _v1.jsx)(_v8.Image, {
                src: _v20.BUNDLE_SIDE_ARTWORK_URL,
                alt: "",
                position: "absolute",
                top: (0, _v14.rem)(0),
                left: (0, _v14.rem)(0),
                width: "100%",
                height: "100%",
                objectFit: "cover",
                onError: _v0 => {
                  _v0.currentTarget.style.display = "none";
                }
              })
            }), (0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              minWidth: 0,
              minHeight: 0,
              width: "100%",
              flex: "1 1 auto",
              children: [(0, _v1.jsx)(_v11.ModalCloseButton, {
                top: (0, _v14.rem)(20),
                right: (0, _v14.rem)(20),
                "aria-label": (0, _v16.translate)({
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
                  _v7.current = "close_button";
                }
              }), (0, _v1.jsxs)(_v7.Flex, {
                flex: "1 1 auto",
                minHeight: 0,
                overflowY: "auto",
                direction: "column",
                padding: (0, _v14.rem)(24),
                paddingRight: {
                  base: (0, _v14.rem)(24),
                  md: (0, _v14.rem)(56)
                },
                paddingBottom: (0, _v14.rem)(16),
                children: [(0, _v1.jsx)(_v15.Text, {
                  as: "h2",
                  variant: "heading-xl",
                  color: "text-primary",
                  letterSpacing: (0, _v14.rem)(-1.44),
                  children: (0, _v24.getBundleAddOnModalTitle)((0, _v23.getBundleMemberCount)())
                }), (0, _v1.jsx)(_v5.Box, {
                  paddingTop: (0, _v14.rem)(8),
                  children: (0, _v1.jsx)(_v15.Text, {
                    variant: "body-lg",
                    color: "text-secondary",
                    letterSpacing: (0, _v14.rem)(-.48),
                    children: (_v4 = (0, _v18.getBundleAppNames)(_v5), void 0 === _v6 ? (0, _v16.translate)({
                      singular: "Unlock your premium access to {PRODUCTS}, all for free with Vimeo subscriptions.",
                      replacements: {
                        PRODUCTS: _v4
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
                    }) : (0, _v16.translate)({
                      singular: "Unlock your premium access to {PRODUCTS} and {COUNT} more products, all for free with Vimeo subscriptions.",
                      replacements: {
                        PRODUCTS: _v4,
                        COUNT: `${_v6}`
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
                }), (0, _v1.jsxs)(_v7.Flex, {
                  direction: "column",
                  gap: (0, _v14.rem)(16),
                  paddingTop: (0, _v14.rem)(24),
                  children: [_v5.map(_v0 => (0, _v1.jsx)(_v28, {
                    productId: _v0.productId
                  }, _v0.productId)), void 0 !== _v6 && (0, _v1.jsx)(_v15.Text, {
                    variant: "heading-sm",
                    color: "text-primary",
                    children: (0, _v16.translate)({
                      singular: "+ {COUNT} more",
                      replacements: {
                        COUNT: `${_v6}`
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
              }), (0, _v1.jsxs)(_v5.Box, {
                flexShrink: 0,
                paddingX: (0, _v14.rem)(24),
                paddingTop: (0, _v14.rem)(12),
                paddingBottom: (0, _v14.rem)(12),
                children: [(0, _v1.jsx)(_v6.Button, {
                  ref: _v8,
                  variant: "primary",
                  size: "lg",
                  width: "100%",
                  onClick: _v2,
                  children: (0, _v16.translate)({
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
                }), (0, _v1.jsx)(_v15.Text, {
                  variant: "body-xs",
                  color: "text-secondary",
                  marginTop: (0, _v14.rem)(12),
                  children: (0, _v16.translate)({
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
                  })
                })]
              })]
            })]
          })
        })]
      });
    };
  var _v30 = _v0.i(0);
  let _v31 = _v0 => `bsp_bundle_intro_modal_shown_at_${_v0}`;
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  _v0.s(["BundleIntroModalContainer", 0, ({
    isSuppressed: _v0 = !1
  }) => {
    let _v1 = (0, _v33.useBundleOffer)(),
      _v2 = "enabled" === _v1.status && "free" === _v1.price,
      {
        ownsBundle: _v3,
        isResolving: _v4
      } = (0, _v34.useBundleOwnership)({
        enabled: _v2
      }),
      _v5 = _v2 && !_v4 && !_v3 && !_v0,
      {
        isOpen: _v6,
        dismiss: _v7
      } = (({
        enabled: _v0
      }) => {
        let _v1 = (0, _v30.useViewer)(),
          _v2 = _v1?.user?.id ?? null,
          [_v3, _v4] = (0, _v2.useState)(!1),
          _v5 = (0, _v2.useRef)(null);
        return (0, _v2.useEffect)(() => {
          !_v0 || null === _v2 || _v5.current === _v2 || (_v5.current = _v2, (_v0 => {
            try {
              let _v0 = window.localStorage.getItem(_v31(_v0));
              if (null === _v0) return !1;
              let _v1 = Number(_v0);
              return Number.isFinite(_v1) && Date.now() - _v1 < 0;
            } catch {
              return !1;
            }
          })(_v2) || ((_v0 => {
            try {
              window.localStorage.setItem(_v31(_v0), String(Date.now()));
            } catch {
              return;
            }
          })(_v2), _v4(!0)));
        }, [_v0, _v2]), {
          isOpen: _v3,
          dismiss: (0, _v2.useCallback)(() => _v4(!1), [])
        };
      })({
        enabled: _v5
      }),
      {
        trackBundleIntroModalDisplayed: _v8,
        trackBundleIntroModalCtaClick: _v9,
        trackBundleIntroModalDismissed: _v10
      } = (0, _v3.useBundleTracking)(),
      _v11 = (0, _v32.useBundleExperimentKey)(),
      _v12 = "enabled" === _v1.status ? _v1.bundleType : null;
    (0, _v4.usePicoEffect)(() => !!_v6 && !!_v5 && null !== _v12 && (_v8({
      bundleType: _v12,
      bundlePrice: "free",
      experimentKey: _v11
    }), !0), [_v6, _v5, _v12, _v8, _v11], {
      once: !0
    });
    let _v13 = (0, _v2.useCallback)(_v0 => {
        null !== _v12 && _v10({
          bundleType: _v12,
          bundlePrice: "free",
          dismissMethod: _v0,
          experimentKey: _v11
        }), _v7();
      }, [_v12, _v10, _v7, _v11]),
      _v14 = (0, _v2.useCallback)(() => {
        null !== _v12 && _v9({
          bundleType: _v12,
          bundlePrice: "free",
          experimentKey: _v11
        }), _v7(), (0, _v35.openBundleLibrary)();
      }, [_v12, _v9, _v7, _v11]);
    return null === _v12 ? null : (0, _v1.jsx)(_v29, {
      isOpen: _v6 && _v5,
      bundleType: _v12,
      onCtaClick: _v14,
      onDismiss: _v13
    });
  }], 0);
}