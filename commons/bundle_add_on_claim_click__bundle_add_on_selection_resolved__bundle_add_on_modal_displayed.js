{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v0 => {
    let _v1 = (0, _v4.usePico)(),
      _v2 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_claim_click", {
          source: _v0,
          eligible: _v0.eligible
        });
      }, [_v1, _v0]),
      _v3 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_selection_resolved", {
          source: _v0,
          outcome: _v0.outcome,
          eligible: _v0.eligible,
          is_resolving: _v0.isResolving
        });
      }, [_v1, _v0]),
      _v4 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_modal_displayed", {
          source: _v0,
          bundle_type: _v0.bundleType,
          add_on_id: _v0.addOnId,
          periodicity: _v0.periodicity,
          price_amount: _v0.priceAmount,
          currency: _v0.currency,
          has_paid_subscription: _v0.hasPaidSubscription
        });
      }, [_v1, _v0]),
      _v5 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_modal_dismissed", {
          source: _v0,
          add_on_id: _v0.addOnId
        });
      }, [_v1, _v0]),
      _v6 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_purchase_click", {
          source: _v0,
          add_on_id: _v0.addOnId
        });
      }, [_v1, _v0]);
    return {
      trackClaimClick: _v2,
      trackSelectionResolved: _v3,
      trackModalDisplayed: _v4,
      trackModalDismissed: _v5,
      trackPurchaseClick: _v6,
      trackPurchaseSucceeded: (0, _v2.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_purchase_succeeded", {
          source: _v0,
          add_on_id: _v0.addOnId,
          already_owned: _v0.alreadyOwned
        });
      }, [_v1, _v0]),
      trackPurchaseFailed: (0, _v2.useCallback)(_v0 => {
        _v1?.track("bundle_add_on_purchase_failed", {
          source: _v0,
          add_on_id: _v0.addOnId,
          failure_kind: _v0.failureKind,
          http_status: _v0.httpStatus,
          route: _v0.route
        });
      }, [_v1, _v0])
    };
  };
  var _v6 = _v0.i(0),
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
    _v23 = _v0.i(0);
  let _v24 = _v0 => "monthly" === _v0 ? "month" : "year",
    _v25 = _v0 => null === _v0 || 0 === _v0.amount ? String((0, _v18.translate)({
      singular: "Add add-on bundle",
      dictionary: {
        es: {
          singular: "Agregar paquete complementario"
        },
        "de-DE": {
          singular: "Add-On-Bundle hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter le pack d'extensions"
        },
        "ja-JP": {
          singular: "アドオンバンドルを追加"
        },
        "ko-KR": {
          singular: "애드온 번들 추가"
        },
        "pt-BR": {
          singular: "Adicionar pacote de complementos"
        },
        "zh-CN": {
          singular: "添加附加包"
        }
      }
    })) : String((0, _v18.translate)({
      singular: "Purchase add-on bundle",
      dictionary: {
        es: {
          singular: "Comprar paquete complementario"
        },
        "de-DE": {
          singular: "Add-On-Bundle kaufen"
        },
        "fr-FR": {
          singular: "Acheter le pack d'extensions"
        },
        "ja-JP": {
          singular: "アドオンバンドルを購入"
        },
        "ko-KR": {
          singular: "애드온 번들 구매"
        },
        "pt-BR": {
          singular: "Comprar pacote de complementos"
        },
        "zh-CN": {
          singular: "购买附加包"
        }
      }
    })),
    _v26 = {
      amount: 0,
      currency: "USD"
    },
    _v27 = {
      color: "vimeoBlue.600",
      _hover: {
        color: "vimeoBlue.600"
      }
    },
    _v28 = ({
      isOpen: _v0,
      bundleType: _v1,
      price: _v2,
      fullPrice: _v3,
      periodicity: _v4,
      planName: _v5,
      planRenewalPrice: _v6,
      purchaseState: _v7 = "idle",
      onPurchase: _v8,
      onDismiss: _v9,
      onSeeAllProducts: _v10,
      clusterTiles: _v11,
      otherProductsCount: _v12
    }) => {
      let _v13,
        _v14,
        _v15 = _v2 ?? _v26,
        _v16 = 0 === _v15.amount,
        _v17 = "pending" === _v7,
        _v18 = "completed" === _v7,
        {
          infoTooltip: _v19
        } = (0, _v19.getBundleActivationCluster)(_v1),
        _v20 = (0, _v2.useRef)(null);
      return (0, _v1.jsxs)(_v12.Modal, {
        isOpen: _v0,
        onClose: _v9,
        closeOnEsc: !1,
        closeOnOverlayClick: !1,
        isCentered: !0,
        initialFocusRef: _v20,
        children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsx)(_v13.ModalContent, {
          containerProps: {
            padding: {
              base: "0 !important"
            }
          },
          maxWidth: (0, _v15.rem)(927),
          maxHeight: {
            base: "100dvh",
            md: "90vh"
          },
          borderRadius: (0, _v15.rem)(28),
          overflow: "hidden",
          padding: (0, _v15.rem)(0),
          children: (0, _v1.jsxs)(_v9.Flex, {
            direction: {
              base: "column",
              md: "row"
            },
            alignItems: "stretch",
            background: "surface",
            width: "100%",
            minHeight: 0,
            flex: "1 1 auto",
            children: [(0, _v1.jsx)(_v7.Box, {
              display: {
                base: "none",
                md: "block"
              },
              flex: "0 0 39.6%",
              position: "relative",
              overflow: "hidden",
              background: "vimeoBlue.200",
              children: (0, _v1.jsx)(_v10.Image, {
                src: "https://i.vimeocdn.com/custom_asset/b48ccb6767dbf5731ddfaaea994b60df",
                alt: "",
                position: "absolute",
                top: (0, _v15.rem)(0),
                left: (0, _v15.rem)(0),
                width: "100%",
                height: "100%",
                objectFit: "cover",
                onError: _v0 => {
                  _v0.currentTarget.style.display = "none";
                }
              })
            }), (0, _v1.jsxs)(_v9.Flex, {
              direction: "column",
              minWidth: 0,
              minHeight: 0,
              width: "100%",
              flex: "1 1 auto",
              children: [(0, _v1.jsx)(_v7.Box, {
                flexShrink: 0,
                paddingTop: (0, _v15.rem)(24),
                paddingX: (0, _v15.rem)(24),
                children: (0, _v1.jsx)(_v16.Text, {
                  as: "h2",
                  variant: "heading-lg",
                  color: "text-primary",
                  children: (_v13 = (0, _v21.getBundleMemberCount)(), String((0, _v18.translate)({
                    singular: "{COUNT} essential product. One bundle.",
                    plural: "{COUNT} essential products. One bundle.",
                    count: _v13,
                    replacements: {
                      COUNT: `${_v13}`
                    },
                    dictionary: {
                      es: {
                        singular: "{COUNT} producto esencial. Un paquete.",
                        plural: "{COUNT} productos esenciales. Un paquete."
                      },
                      "de-DE": {
                        singular: "{COUNT} unverzichtbares Produkt. Ein Bundle.",
                        plural: "{COUNT} unverzichtbare Produkte. Ein Bundle."
                      },
                      "fr-FR": {
                        singular: "{COUNT} produit essentiel. Un pack.",
                        plural: "{COUNT} produits essentiels. Un pack."
                      },
                      "ja-JP": {
                        singular: "{COUNT}個の必須製品。1つのバンドル。",
                        plural: "{COUNT}個の必須製品。1つのバンドル。"
                      },
                      "ko-KR": {
                        singular: "{COUNT}개의 필수 제품. 번들 1개.",
                        plural: "{COUNT}개의 필수 제품. 번들 1개."
                      },
                      "pt-BR": {
                        singular: "{COUNT} produto essencial. Um pacote.",
                        plural: "{COUNT} produtos essenciais. Um pacote."
                      },
                      "zh-CN": {
                        singular: "{COUNT} 个必备产品。一个捆绑包。",
                        plural: "{COUNT} 个必备产品。一个捆绑包。"
                      }
                    }
                  })))
                })
              }), (0, _v1.jsxs)(_v9.Flex, {
                flex: "1 1 auto",
                minHeight: 0,
                overflowY: "auto",
                direction: "column",
                children: [(0, _v1.jsx)(_v7.Box, {
                  paddingTop: (0, _v15.rem)(8),
                  paddingX: (0, _v15.rem)(24),
                  children: (0, _v1.jsxs)(_v16.Text, {
                    variant: "body-lg",
                    color: "text-primary",
                    children: [(_v14 = _v11.map(_v0 => _v23.PRODUCT_NAMES[_v0.productId]).join(", "), void 0 === _v12 ? String((0, _v18.translate)({
                      singular: "Unlock access to {PRODUCTS}.",
                      replacements: {
                        PRODUCTS: _v14
                      },
                      dictionary: {
                        es: {
                          singular: "Desbloquear acceso a {PRODUCTS}."
                        },
                        "de-DE": {
                          singular: "Zugriff auf {PRODUCTS} freischalten."
                        },
                        "fr-FR": {
                          singular: "Débloquez l'accès à {PRODUCTS}."
                        },
                        "ja-JP": {
                          singular: "{PRODUCTS}へのアクセスを有効にします。"
                        },
                        "ko-KR": {
                          singular: "{PRODUCTS}에 대한 액세스 잠금 해제."
                        },
                        "pt-BR": {
                          singular: "Desbloqueie o acesso a {PRODUCTS}."
                        },
                        "zh-CN": {
                          singular: "解锁对 {PRODUCTS} 的访问。"
                        }
                      }
                    })) : String((0, _v18.translate)({
                      singular: "Unlock access to {PRODUCTS} and {COUNT} more premium product.",
                      plural: "Unlock access to {PRODUCTS} and {COUNT} more premium products.",
                      count: _v12,
                      replacements: {
                        PRODUCTS: _v14,
                        COUNT: `${_v12}`
                      },
                      dictionary: {
                        es: {
                          singular: "Desbloquear acceso a {PRODUCTS} y {COUNT} producto premium más.",
                          plural: "Desbloquear acceso a {PRODUCTS} y {COUNT} productos premium más."
                        },
                        "de-DE": {
                          singular: "Zugriff auf {PRODUCTS} und {COUNT} weiteres Premium-Produkt freischalten.",
                          plural: "Zugriff auf {PRODUCTS} und {COUNT} weitere Premium-Produkte freischalten."
                        },
                        "fr-FR": {
                          singular: "Débloquez l'accès à {PRODUCTS} et à {COUNT} autre produit premium.",
                          plural: "Débloquez l'accès à {PRODUCTS} et à {COUNT} autres produits premium."
                        },
                        "ja-JP": {
                          singular: "{PRODUCTS}とさらに{COUNT}個のプレミアム製品へのアクセスを有効にします。",
                          plural: "{PRODUCTS}とさらに{COUNT}個のプレミアム製品へのアクセスを有効にします。"
                        },
                        "ko-KR": {
                          singular: "{PRODUCTS} 및 추가 {COUNT}개의 프리미엄 제품에 대한 액세스 잠금 해제.",
                          plural: "{PRODUCTS} 및 추가 {COUNT}개의 프리미엄 제품에 대한 액세스 잠금 해제."
                        },
                        "pt-BR": {
                          singular: "Desbloqueie o acesso a {PRODUCTS} e mais {COUNT} produto premium.",
                          plural: "Desbloqueie o acesso a {PRODUCTS} e mais {COUNT} produtos premium."
                        },
                        "zh-CN": {
                          singular: "解锁对 {PRODUCTS} 的访问，以及额外 {COUNT} 个优质产品。",
                          plural: "解锁对 {PRODUCTS} 的访问，以及额外 {COUNT} 个优质产品。"
                        }
                      }
                    }))), void 0 !== _v10 && (0, _v1.jsxs)(_v1.Fragment, {
                      children: [" ", (0, _v1.jsx)(_v11.Link, {
                        as: "button",
                        color: "text-primary",
                        sx: {
                          appearance: "none",
                          backgroundColor: "transparent",
                          border: "none",
                          padding: 0,
                          textDecoration: "underline",
                          textUnderlineOffset: (0, _v15.rem)(2)
                        },
                        onClick: _v10,
                        children: String((0, _v18.translate)({
                          singular: "See all products",
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
                              singular: "Ver todos os produtos"
                            },
                            "zh-CN": {
                              singular: "查看所有产品"
                            }
                          }
                        }))
                      })]
                    })]
                  })
                }), (0, _v1.jsx)(_v7.Box, {
                  display: {
                    base: "block",
                    md: "none"
                  },
                  paddingTop: (0, _v15.rem)(36),
                  paddingX: (0, _v15.rem)(24),
                  children: (0, _v1.jsx)(_v22.TiltedTileCluster, {
                    tileSize: 48.34,
                    clusterTiles: _v11,
                    otherProductsCount: _v12,
                    infoTooltip: _v19
                  })
                }), (0, _v1.jsx)(_v7.Box, {
                  display: {
                    base: "none",
                    md: "block"
                  },
                  paddingTop: (0, _v15.rem)(36),
                  paddingX: (0, _v15.rem)(24),
                  children: (0, _v1.jsx)(_v22.TiltedTileCluster, {
                    tileSize: 79,
                    clusterTiles: _v11,
                    otherProductsCount: _v12,
                    infoTooltip: _v19
                  })
                }), (0, _v1.jsxs)(_v9.Flex, {
                  paddingTop: (0, _v15.rem)(32),
                  paddingX: (0, _v15.rem)(24),
                  alignItems: "center",
                  gap: (0, _v15.rem)(6),
                  flexWrap: "wrap",
                  rowGap: (0, _v15.rem)(4),
                  children: [!_v16 && (0, _v1.jsxs)(_v9.Flex, {
                    alignItems: "baseline",
                    gap: (0, _v15.rem)(6),
                    children: [(0, _v1.jsx)(_v16.Text, {
                      as: "span",
                      variant: "heading-2xl",
                      color: "text-primary",
                      children: (0, _v20.formatBundlePrice)(_v15)
                    }), (0, _v1.jsx)(_v16.Text, {
                      as: "span",
                      variant: "body-md",
                      color: "text-primary",
                      children: String((0, _v18.translate)({
                        singular: "per {PERIOD}",
                        replacements: {
                          PERIOD: _v24(_v4)
                        },
                        dictionary: {
                          es: {
                            singular: "por {PERIOD}"
                          },
                          "de-DE": {
                            singular: "pro {PERIOD}"
                          },
                          "fr-FR": {
                            singular: "par {PERIOD}"
                          },
                          "ja-JP": {
                            singular: "{PERIOD}ごと"
                          },
                          "ko-KR": {
                            singular: "매 {PERIOD}"
                          },
                          "pt-BR": {
                            singular: "por {PERIOD}"
                          },
                          "zh-CN": {
                            singular: "每 {PERIOD}"
                          }
                        }
                      }))
                    })]
                  }), void 0 !== _v3 && (0, _v1.jsx)(_v6.Badge, {
                    variant: "info",
                    size: "sm",
                    marginLeft: _v16 ? void 0 : (0, _v15.rem)(16),
                    children: String((0, _v18.translate)({
                      singular: "{VALUE} / {PERIOD} in value",
                      replacements: {
                        VALUE: (({
                          amount: _v0,
                          currency: _v1
                        }) => new Intl.NumberFormat("" !== (0, _v18.getCurrentLocale)() ? (0, _v18.getCurrentLocale)() : "en-US", {
                          style: "currency",
                          currency: _v1,
                          maximumFractionDigits: Number.isInteger(_v0) ? 0 : void 0
                        }).format(_v0))(_v3),
                        PERIOD: _v24(_v4)
                      },
                      dictionary: {
                        es: {
                          singular: "{VALUE} / {PERIOD} en valor"
                        },
                        "de-DE": {
                          singular: "im Wert von {VALUE} / {PERIOD}"
                        },
                        "fr-FR": {
                          singular: "{VALUE} / {PERIOD} de valeur"
                        },
                        "ja-JP": {
                          singular: "{VALUE} / {PERIOD} 相当の価値"
                        },
                        "ko-KR": {
                          singular: "{VALUE} / {PERIOD} 상당"
                        },
                        "pt-BR": {
                          singular: "{VALUE} / {PERIOD} em valor"
                        },
                        "zh-CN": {
                          singular: "{VALUE} / {PERIOD} 的价值"
                        }
                      }
                    }))
                  })]
                }), (0, _v1.jsx)(_v7.Box, {
                  paddingTop: (0, _v15.rem)(12),
                  paddingX: (0, _v15.rem)(24),
                  paddingBottom: (0, _v15.rem)(24),
                  children: (0, _v1.jsxs)(_v16.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    children: [_v16 ? String((0, _v18.translate)({
                      singular: "By completing this purchase, you're activating the Product Bundle offer as an eligible {PLAN_NAME} subscriber at no extra cost. Your {PLAN_NAME} subscription ({PLAN_PRICE}) renews as usual. Pricing may change. If you cancel or downgrade, some content or features may no longer be available, and some content may be deleted. You also agree to the ",
                      replacements: {
                        PLAN_NAME: _v5,
                        PLAN_PRICE: `${(0, _v20.formatBundlePrice)(_v6)}/${_v24(_v4)}`
                      },
                      dictionary: {
                        es: {
                          singular: "Al completar esta compra, está activando la oferta de paquete de productos como suscriptor elegible de {PLAN_NAME} sin costo adicional. Su suscripción {PLAN_NAME} ({PLAN_PRICE}) se renueva con normalidad. Los precios pueden cambiar. Si cancela o degrada, algunos contenidos o funciones pueden dejar de estar disponibles y parte del contenido puede eliminarse. También acepta la "
                        },
                        "de-DE": {
                          singular: "Wenn Sie diesen Kauf abschließen, aktivieren Sie als berechtigter {PLAN_NAME}-Abonnent das Produkt-Bundle-Angebot ohne zusätzliche Kosten. Ihr {PLAN_NAME}-Abonnement ({PLAN_PRICE}) verlängert sich wie gewohnt. Preise können sich ändern. Wenn Sie kündigen oder ein Downgrade durchführen, sind einige Inhalte oder Funktionen möglicherweise nicht mehr verfügbar und einige Inhalte können gelöscht werden. Sie stimmen außerdem den "
                        },
                        "fr-FR": {
                          singular: "En complétant cet achat, vous activez l'offre Product Bundle en tant qu'abonné {PLAN_NAME} éligible sans frais supplémentaires. Votre abonnement {PLAN_NAME} ({PLAN_PRICE}) est renouvelé comme d'habitude. Les tarifs peuvent changer. Si vous annulez ou rétrogradez, certains contenus ou fonctionnalités peuvent ne plus être disponibles, et certains contenus peuvent être supprimés. Vous acceptez également "
                        },
                        "ja-JP": {
                          singular: "この購入を完了すると、対象の{PLAN_NAME}加入者として追加料金なしで製品バンドルオファーが有効になります。あなたの{PLAN_NAME}サブスクリプション（{PLAN_PRICE}）は通常通り更新されます。価格は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、一部のコンテンツが削除されたりする場合があります。あなたはまた、 "
                        },
                        "ko-KR": {
                          singular: "이 구매를 완료하면 자격 있는 {PLAN_NAME} 구독자로서 추가 비용 없이 제품 번들 혜택이 활성화됩니다. 귀하의 {PLAN_NAME} 구독({PLAN_PRICE})은(는) 정상적으로 갱신됩니다. 가격은 변경될 수 있습니다. 취소하거나 다운그레이드하면 일부 콘텐츠나 기능을 더 이상 이용할 수 없게 되거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 귀하는 "
                        },
                        "pt-BR": {
                          singular: "Ao concluir esta compra, você está ativando a oferta do Pacote de Produtos como assinante elegível do {PLAN_NAME} sem custo adicional. Sua assinatura {PLAN_NAME} ({PLAN_PRICE}) renova normalmente. Os preços podem mudar. Se você cancelar ou reduzir o plano, alguns conteúdos ou recursos podem não estar mais disponíveis, e algum conteúdo pode ser excluído. Você também concorda com a "
                        },
                        "zh-CN": {
                          singular: "完成此购买后，作为符合条件的 {PLAN_NAME} 订阅者，您将免费激活产品捆绑优惠。您的 {PLAN_NAME} 订阅（{PLAN_PRICE}）将照常续订。价格可能会变动。如果您取消或降级，某些内容或功能可能不再可用，部分内容可能会被删除。您还同意 "
                        }
                      }
                    })) : (0, _v1.jsxs)(_v1.Fragment, {
                      children: [String((0, _v18.translate)({
                        singular: "By completing this purchase, you're activating the Product Bundle offer as an eligible {PLAN_NAME} subscriber for {BUNDLE_PRICE} (plus tax), charged today and every {PERIOD} thereafter unless you cancel in ",
                        replacements: {
                          PLAN_NAME: _v5,
                          BUNDLE_PRICE: `${(0, _v20.formatBundlePrice)(_v15)}/${_v24(_v4)}`,
                          PERIOD: _v24(_v4)
                        },
                        dictionary: {
                          es: {
                            singular: "Al completar esta compra, está activando la oferta de paquete de productos como suscriptor elegible de {PLAN_NAME} por {BUNDLE_PRICE} (más impuestos), cobrado hoy y cada {PERIOD} a partir de entonces, a menos que cancele en "
                          },
                          "de-DE": {
                            singular: "Wenn Sie diesen Kauf abschließen, aktivieren Sie als berechtigter {PLAN_NAME}-Abonnent das Produkt-Bundle-Angebot für {BUNDLE_PRICE} (zzgl. Steuern), das heute und danach alle {PERIOD} abgebucht wird, sofern Sie nicht innerhalb von "
                          },
                          "fr-FR": {
                            singular: "En complétant cet achat, vous activez l'offre Product Bundle en tant qu'abonné {PLAN_NAME} éligible pour {BUNDLE_PRICE} (plus taxes), facturé aujourd'hui puis tous les {PERIOD} par la suite, sauf si vous annulez "
                          },
                          "ja-JP": {
                            singular: "この購入を完了すると、対象の{PLAN_NAME}加入者として{BUNDLE_PRICE}（税別）で製品バンドルオファーが有効になり、本日およびその後{PERIOD}ごとに課金されます。キャンセルするには "
                          },
                          "ko-KR": {
                            singular: "이 구매를 완료하면 자격 있는 {PLAN_NAME} 구독자로서 {BUNDLE_PRICE} (세금 별도)의 제품 번들 혜택이 활성화되며, 취소하지 않는 한 오늘 및 이후 매 {PERIOD}마다 청구됩니다 "
                          },
                          "pt-BR": {
                            singular: "Ao concluir esta compra, você estará ativando a oferta do Pacote de Produtos como assinante elegível do {PLAN_NAME} por {BUNDLE_PRICE} (mais impostos), cobrado hoje e a cada {PERIOD} a partir de então, a menos que você cancele em "
                          },
                          "zh-CN": {
                            singular: "完成此购买后，作为符合条件的 {PLAN_NAME} 订阅者，您将以 {BUNDLE_PRICE}（另加税）激活产品捆绑优惠，费用将于今天以及随后每个 {PERIOD} 收取，除非您在 "
                          }
                        }
                      })), (0, _v1.jsx)(_v11.Link, {
                        href: "/settings/billing",
                        sx: _v27,
                        children: String((0, _v18.translate)({
                          singular: "Billing Settings",
                          dictionary: {
                            es: {
                              singular: "Configuración de facturación"
                            },
                            "de-DE": {
                              singular: "Abrechnungseinstellungen"
                            },
                            "fr-FR": {
                              singular: "Paramètres de facturation"
                            },
                            "ja-JP": {
                              singular: "請求設定"
                            },
                            "ko-KR": {
                              singular: "결제 설정"
                            },
                            "pt-BR": {
                              singular: "Configurações de cobrança"
                            },
                            "zh-CN": {
                              singular: "计费设置"
                            }
                          }
                        }))
                      }), String((0, _v18.translate)({
                        singular: " at least 1 day before renewal. Your {PLAN_NAME} subscription ({PLAN_PRICE}) renews as usual. Pricing may change. If you cancel or downgrade, some content or features may no longer be available, and some content may be deleted. You also agree to the ",
                        replacements: {
                          PLAN_NAME: _v5,
                          PLAN_PRICE: `${(0, _v20.formatBundlePrice)(_v6)}/${_v24(_v4)}`
                        },
                        dictionary: {
                          es: {
                            singular: " al menos 1 día antes de la renovación. Su suscripción {PLAN_NAME} ({PLAN_PRICE}) se renueva con normalidad. Los precios pueden cambiar. Si cancela o degrada, algunos contenidos o funciones pueden dejar de estar disponibles y parte del contenido puede eliminarse. También acepta la "
                          },
                          "de-DE": {
                            singular: " mindestens 1 Tag vor der Verlängerung. Ihr {PLAN_NAME}-Abonnement ({PLAN_PRICE}) verlängert sich wie gewohnt. Preise können sich ändern. Wenn Sie kündigen oder ein Downgrade durchführen, sind einige Inhalte oder Funktionen möglicherweise nicht mehr verfügbar und einige Inhalte können gelöscht werden. Sie stimmen außerdem den "
                          },
                          "fr-FR": {
                            singular: " au moins 1 jour avant le renouvellement. Votre abonnement {PLAN_NAME} ({PLAN_PRICE}) est renouvelé comme d'habitude. Les tarifs peuvent changer. Si vous annulez ou rétrogradez, certains contenus ou fonctionnalités peuvent ne plus être disponibles, et certains contenus peuvent être supprimés. Vous acceptez également "
                          },
                          "ja-JP": {
                            singular: " 少なくとも更新の1日前に。あなたの{PLAN_NAME}サブスクリプション（{PLAN_PRICE}）は通常通り更新されます。価格は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、一部のコンテンツが削除されたりする場合があります。あなたはまた、 "
                          },
                          "ko-KR": {
                            singular: " 갱신 최소 1일 전에. 귀하의 {PLAN_NAME} 구독({PLAN_PRICE})은(는) 정상적으로 갱신됩니다. 가격은 변경될 수 있습니다. 취소하거나 다운그레이드하면 일부 콘텐츠나 기능을 더 이상 이용할 수 없게 되거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 귀하는 "
                          },
                          "pt-BR": {
                            singular: " pelo menos 1 dia antes da renovação. Sua assinatura {PLAN_NAME} ({PLAN_PRICE}) renova normalmente. Os preços podem mudar. Se você cancelar ou reduzir o plano, alguns conteúdos ou recursos podem não estar mais disponíveis, e algum conteúdo pode ser excluído. Você também concorda com a "
                          },
                          "zh-CN": {
                            singular: " 至少在续订前 1 天。您的 {PLAN_NAME} 订阅（{PLAN_PRICE}）将照常续订。价格可能会变动。如果您取消或降级，某些内容或功能可能不再可用，部分内容可能会被删除。您还同意 "
                          }
                        }
                      }))]
                    }), (0, _v1.jsx)(_v11.Link, {
                      href: "https://vimeo.com/terms",
                      sx: _v27,
                      isExternal: !1,
                      children: String((0, _v18.translate)({
                        singular: "Terms of Service",
                        dictionary: {
                          es: {
                            singular: "Términos de servicio"
                          },
                          "de-DE": {
                            singular: "Nutzungsbedingungen"
                          },
                          "fr-FR": {
                            singular: "Conditions d'utilisation "
                          },
                          "ja-JP": {
                            singular: "利用規約"
                          },
                          "ko-KR": {
                            singular: "서비스 약관"
                          },
                          "pt-BR": {
                            singular: "Termos de Serviço"
                          },
                          "zh-CN": {
                            singular: "服务条款"
                          }
                        }
                      }))
                    }), String((0, _v18.translate)({
                      singular: " and acknowledge the ",
                      dictionary: {
                        es: {
                          singular: " y reconocer la "
                        },
                        "de-DE": {
                          singular: " und bestätigen die "
                        },
                        "fr-FR": {
                          singular: " et reconnaissez "
                        },
                        "ja-JP": {
                          singular: " を確認し、同意する "
                        },
                        "ko-KR": {
                          singular: " 그리고 이를 확인합니다 "
                        },
                        "pt-BR": {
                          singular: " e reconhece a "
                        },
                        "zh-CN": {
                          singular: " 并确认 "
                        }
                      }
                    })), (0, _v1.jsx)(_v11.Link, {
                      href: "https://vimeo.com/privacy",
                      sx: _v27,
                      children: String((0, _v18.translate)({
                        singular: "Privacy Policy",
                        dictionary: {
                          es: {
                            singular: "Política de privacidad"
                          },
                          "de-DE": {
                            singular: "Datenschutzerklärung"
                          },
                          "fr-FR": {
                            singular: "Politique de confidentialité "
                          },
                          "ja-JP": {
                            singular: "プライバシーポリシー"
                          },
                          "ko-KR": {
                            singular: "개인정보보호 정책"
                          },
                          "pt-BR": {
                            singular: "Política de Privacidade"
                          },
                          "zh-CN": {
                            singular: "隐私政策"
                          }
                        }
                      }))
                    }), "."]
                  })
                })]
              }), (0, _v1.jsxs)(_v9.Flex, {
                flexShrink: 0,
                direction: "column",
                gap: (0, _v15.rem)(8),
                paddingBottom: (0, _v15.rem)(24),
                paddingX: (0, _v15.rem)(24),
                children: [(0, _v1.jsx)(_v8.Button, {
                  variant: "secondary",
                  size: "lg",
                  width: "100%",
                  isDisabled: _v17 || _v18,
                  onClick: _v9,
                  children: String((0, _v18.translate)({
                    singular: "Not now",
                    dictionary: {
                      es: {
                        singular: "Ahora no"
                      },
                      "de-DE": {
                        singular: "Nicht jetzt"
                      },
                      "fr-FR": {
                        singular: "Plus tard"
                      },
                      "ja-JP": {
                        singular: "後でする"
                      },
                      "ko-KR": {
                        singular: "나중에"
                      },
                      "pt-BR": {
                        singular: "Agora não"
                      },
                      "zh-CN": {
                        singular: "现在不行"
                      }
                    }
                  }))
                }), (0, _v1.jsx)(_v8.Button, {
                  ref: _v20,
                  variant: "brand",
                  size: "lg",
                  width: "100%",
                  isLoading: _v17,
                  loadingText: _v25(0 === _v15.amount ? null : _v15),
                  leftIcon: _v18 ? (0, _v1.jsx)(_v17.CircleCheck, {
                    boxSize: "18px"
                  }) : void 0,
                  isDisabled: _v17 || _v18,
                  onClick: _v8,
                  children: _v18 ? String((0, _v18.translate)({
                    singular: "Added",
                    dictionary: {
                      es: {
                        singular: "Añadido"
                      },
                      "de-DE": {
                        singular: "Hinzugefügt"
                      },
                      "fr-FR": {
                        singular: "Ajouté"
                      },
                      "ja-JP": {
                        singular: "追加した日"
                      },
                      "ko-KR": {
                        singular: "추가됨"
                      },
                      "pt-BR": {
                        singular: "Adicionado(a)"
                      },
                      "zh-CN": {
                        singular: "已添加"
                      }
                    }
                  })) : _v25(0 === _v15.amount ? null : _v15)
                })]
              })]
            })]
          })
        })]
      });
    };
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = ["starter", "standard", "advanced"],
    _v34 = _v0 => "year" === _v0 ? "annual" : "month" === _v0 ? "monthly" : null,
    _v35 = ["active"],
    _v36 = ["on_hold", "grace_period"],
    _v37 = () => {
      var _v0, _v1;
      let _v2 = (0, _v30.useViewer)(),
        _v3 = _v2?.user?.id ?? null,
        {
          data: _v4,
          isLoading: _v5
        } = (0, _v29.useGetUserSettingsBillingMembership)(() => null === _v3 ? null : {
          select: ["billingPeriod", "tier"],
          where: {
            userId: _v3
          }
        });
      return {
        isEligible: (_v0 = _v4?.tier, _v1 = _v4?.billingPeriod, void 0 !== _v0 && _v33.some(_v0 => _v0 === _v0) && null !== _v34(_v1)),
        isResolving: _v5
      };
    };
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  async function _v42({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      addOnId: _v3
    },
    ..._v4
  }) {
    return (0, _v41.measureLatency)("postMeAddOnPurchases", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/add_ons/${_v3}/purchases?fields=${_v1.map(_v38.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v38.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v38.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v38.deepCamelCase)(_v1);
    });
  }
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  function _v45() {
    let {
        mutate: _v0
      } = (0, _v43.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v44.useGctlConfig)(),
      [_v5, _v6] = (0, _v40.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/add_ons/${_v0.where.addOnId}/purchases${(0, _v40.serializeQuery)(_v0)}`, _v42({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v39.default.env.STORYBOOK && (0, _v40.assignMswData)(_v45, {
    endpoint: "/me/add_ons/:addOnId/purchases",
    method: "POST"
  });
  let _v46 = ["subscription_missing", "subscription_not_active", "subscription_not_found", "payment_method_error", "add_on_not_found", "add_on_not_entitled"],
    _v47 = {
      declineCategory: null,
      serviceReason: null
    },
    _v48 = async _v0 => {
      try {
        return (_v0 => {
          let _v1;
          if (!("object" == typeof _v0 && null !== _v0 && !Array.isArray(_v0))) return _v47;
          let _v2 = _v0.reason;
          return {
            declineCategory: "string" == typeof (_v1 = _v0.decline_category) && "" !== _v1 ? _v1 : null,
            serviceReason: "string" == typeof _v2 && _v46.includes(_v2) ? _v2 : null
          };
        })(await _v0.res.json());
      } catch {
        return _v47;
      }
    },
    _v49 = ({
      isOpen: _v0,
      ..._v1
    }) => _v0 ? (0, _v1.jsx)(_v50, {
      ..._v1
    }) : null,
    _v50 = ({
      source: _v0,
      onDismiss: _v1,
      onSeeAllProducts: _v2,
      onPurchased: _v3,
      onFailureRoute: _v4,
      onOfferUnavailable: _v5,
      isRedirecting: _v6 = !1
    }) => {
      let {
          offer: _v7,
          isResolving: _v8
        } = (() => {
          var _v0;
          let _v1 = (0, _v30.useViewer)(),
            _v2 = _v1?.user?.id ?? null,
            {
              data: _v3,
              isLoading: _v4
            } = (0, _v29.useGetUserSettingsBillingMembership)(() => null === _v2 ? null : {
              select: ["billingPeriod", "tier", "tierForDisplay", "basePlanPrice", "currency", "status", "isReverseFreeTrial", "paymentMethod"],
              where: {
                userId: _v2
              }
            }),
            _v5 = _v3?.tier,
            _v6 = _v34(_v3?.billingPeriod),
            _v7 = (_v0 = _v3?.status, _v3?.isReverseFreeTrial === !0 || void 0 === _v0 || "" === _v0 ? "not_subscribed" : _v35.includes(_v0) ? "active" : _v36.includes(_v0) ? "payment_problem" : "not_subscribed"),
            _v8 = _v3?.paymentMethod != null,
            _v9 = _v6 ?? "annual",
            {
              offer: _v10,
              isResolving: _v11
            } = (0, _v31.useTriggeredBundleOffer)({
              periodicity: _v9
            });
          return (0, _v2.useMemo)(() => {
            if (null === _v10 || void 0 === _v3) return {
              offer: null,
              isResolving: _v11 || _v4
            };
            let {
                clusterTiles: _v0,
                otherProductsCount: _v1
              } = (0, _v19.getBundleActivationCluster)(_v10.bundleType),
              _v2 = _v10.price?.currency ?? ("" !== _v3.currency ? _v3.currency : _v32.FALLBACK_CURRENCY);
            return {
              offer: {
                addOnId: _v10.addOnId,
                bundleType: _v10.bundleType,
                price: _v10.price,
                fullPrice: _v10.fullPrice ?? (0, _v32.resolveBundleIdealAmount)({
                  periodicity: _v9,
                  display: "period",
                  currency: _v2
                }) ?? void 0,
                periodicity: _v9,
                planName: "" !== _v3.tierForDisplay ? _v3.tierForDisplay : _v5 ?? "",
                planRenewalPrice: {
                  amount: _v3.basePlanPrice ?? 0,
                  currency: _v2
                },
                clusterTiles: _v0,
                otherProductsCount: _v1,
                subscriptionStanding: _v7,
                hasPaymentMethod: _v8
              },
              isResolving: _v11
            };
          }, [_v10, _v11, _v4, _v3, _v9, _v5, _v7, _v8]);
        })(),
        _v9 = _v5(_v0),
        _v10 = (0, _v2.useRef)(null),
        _v11 = (0, _v2.useEffectEvent)(_v0 => {
          _v9.trackModalDisplayed({
            bundleType: _v0.bundleType,
            addOnId: _v0.addOnId,
            periodicity: _v0.periodicity,
            priceAmount: _v0.price?.amount ?? null,
            currency: _v0.price?.currency ?? null,
            hasPaidSubscription: "not_subscribed" !== _v0.subscriptionStanding
          });
        }),
        _v12 = (0, _v2.useEffectEvent)(_v0 => {
          _v9.trackModalDismissed({
            addOnId: _v0
          });
        }),
        {
          state: _v13,
          purchase: _v14
        } = (({
          addOnId: _v0,
          subscriptionStanding: _v1,
          hasPaymentMethod: _v2,
          onPurchased: _v3,
          onFailureRoute: _v4
        }) => {
          let [_v5, _v6] = _v45(),
            _v7 = (0, _v2.useRef)(0),
            _v8 = (0, _v2.useEffectEvent)(_v3),
            _v9 = (0, _v2.useEffectEvent)(_v4),
            _v10 = (0, _v2.useRef)(!0);
          (0, _v2.useEffect)(() => (_v10.current = !0, () => {
            _v10.current = !1;
          }), []);
          let _v11 = (0, _v2.useCallback)(() => {
            _v5({
              select: ["alreadyOwned"],
              where: {
                addOnId: _v0
              },
              variables: {
                quantity: 1
              }
            });
          }, [_v0, _v5]);
          return (0, _v2.useEffect)(() => {
            if (_v6.called && !_v6.loading && _v6.callCount !== _v7.current) {
              if (_v7.current = _v6.callCount, _v6.error) {
                let _v0 = _v6.error,
                  _v1 = _v0 instanceof _v38.NetworkError ? _v0.status : null;
                (async () => {
                  let _v0 = _v0 instanceof _v38.NetworkError ? await _v48(_v0) : _v47;
                  if (!_v10.current) return;
                  let _v1 = ((_v0, _v1, {
                    subscriptionStanding: _v2,
                    hasPaymentMethod: _v3
                  }) => {
                    if (null !== _v1.declineCategory) return {
                      reason: "payment_rejected",
                      status: _v0
                    };
                    switch (_v1.serviceReason) {
                      case "subscription_missing":
                      case "subscription_not_active":
                      case "subscription_not_found":
                        return {
                          reason: "not_subscribed",
                          status: _v0
                        };
                      case "payment_method_error":
                        return {
                          reason: "payment_method_missing",
                          status: _v0
                        };
                      case "add_on_not_found":
                      case "add_on_not_entitled":
                        return {
                          reason: "offer_unavailable",
                          status: _v0
                        };
                    }
                    return 404 === _v0 ? {
                      reason: "not_subscribed",
                      status: _v0
                    } : null !== _v0 && _v0 < 500 ? "not_subscribed" === _v2 ? {
                      reason: "not_subscribed",
                      status: _v0
                    } : _v3 ? {
                      reason: "payment_rejected",
                      status: _v0
                    } : {
                      reason: "payment_method_missing",
                      status: _v0
                    } : {
                      reason: "transient",
                      status: _v0
                    };
                  })(_v1, _v0, {
                    subscriptionStanding: _v1,
                    hasPaymentMethod: _v2
                  });
                  _v9((_v0 => {
                    switch (_v0.reason) {
                      case "offer_unavailable":
                        return {
                          to: "refresh_offer"
                        };
                      case "not_subscribed":
                        return {
                          to: "upgrade_plan"
                        };
                      case "payment_method_missing":
                      case "payment_rejected":
                        return {
                          to: "update_payment_method"
                        };
                      case "transient":
                        return {
                          to: "retry"
                        };
                      default:
                        throw Error(`Unhandled add-on purchase failure: ${_v0.reason}`);
                    }
                  })(_v1), _v1);
                })();
                return;
              }
              _v8({
                alreadyOwned: _v6.data?.alreadyOwned === !0
              });
            }
          }, [_v2, _v6, _v1]), {
            state: _v6.loading ? "pending" : _v6.called && null === _v6.error ? "completed" : "idle",
            purchase: _v11
          };
        })({
          addOnId: _v7?.addOnId ?? "",
          subscriptionStanding: _v7?.subscriptionStanding ?? "not_subscribed",
          hasPaymentMethod: _v7?.hasPaymentMethod ?? !1,
          onPurchased: _v0 => {
            null !== _v7 && _v9.trackPurchaseSucceeded({
              addOnId: _v7.addOnId,
              alreadyOwned: _v0.alreadyOwned
            }), _v3?.(_v0);
          },
          onFailureRoute: (_v0, _v1) => {
            null !== _v7 && _v9.trackPurchaseFailed({
              addOnId: _v7.addOnId,
              failureKind: _v1.reason,
              httpStatus: _v1.status,
              route: _v0.to
            }), _v4?.(_v0);
          }
        });
      (0, _v2.useEffect)(() => {
        if (null === _v7) {
          let _v0 = _v10.current;
          _v10.current = null, null !== _v0 && _v12(_v0);
          return;
        }
        null === _v10.current && (_v10.current = _v7.addOnId, _v11(_v7));
      }, [_v7]), (0, _v2.useEffect)(() => () => {
        let _v0 = _v10.current;
        _v10.current = null, null !== _v0 && _v12(_v0);
      }, []);
      let _v15 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        null !== _v7 || _v8 || _v15.current || (_v15.current = !0, _v5?.());
      }, [_v7, _v8, _v5]);
      let _v16 = (0, _v2.useCallback)(() => {
        null !== _v7 && _v9.trackPurchaseClick({
          addOnId: _v7.addOnId
        }), _v14();
      }, [_v7, _v14, _v9]);
      return null === _v7 ? null : (0, _v1.jsx)(_v28, {
        isOpen: !0,
        bundleType: _v7.bundleType,
        price: _v7.price,
        fullPrice: _v7.fullPrice,
        periodicity: _v7.periodicity,
        planName: _v7.planName,
        planRenewalPrice: _v7.planRenewalPrice,
        purchaseState: _v6 ? "pending" : _v13,
        onPurchase: _v16,
        onDismiss: _v1,
        onSeeAllProducts: _v2,
        clusterTiles: _v7.clusterTiles,
        otherProductsCount: _v7.otherProductsCount
      });
    };
  _v0.s(["BundleAddOnModalContainer", 0, _v49], 0);
  var _v51 = _v0.i(0);
  let _v52 = _v0 => {
      window.location.assign(_v0);
    },
    _v53 = ({
      source: _v0,
      onNavigate: _v1,
      onPurchased: _v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)(null),
        [_v5, _v6] = (0, _v2.useState)(!1),
        _v7 = (0, _v51.useToast)(),
        _v8 = _v37(),
        _v9 = _v5(_v0),
        _v10 = _v1 ?? _v52;
      (0, _v2.useEffect)(() => {
        if (!_v5) return;
        let _v0 = setTimeout(() => {
          _v6(!1);
        }, 0);
        return () => {
          clearTimeout(_v0);
        };
      }, [_v5]);
      let _v11 = (0, _v2.useCallback)(() => {
          _v4(null);
        }, []),
        _v12 = (0, _v2.useCallback)(() => {
          let _v0 = _v8.isEligible ? "add-on" : _v8.isResolving ? null : "upgrade";
          _v9.trackClaimClick({
            eligible: _v8.isEligible
          }), _v9.trackSelectionResolved({
            outcome: "add-on" === _v0 ? "add_on_modal" : "upgrade" === _v0 ? "upgrade_modal" : "noop",
            eligible: _v8.isEligible,
            isResolving: _v8.isResolving
          }), null !== _v0 && _v4(_v0);
        }, [_v8, _v9]),
        _v13 = (0, _v2.useCallback)(() => {
          _v4(null), _v7({
            title: String((0, _v18.translate)({
              singular: "This offer is no longer available.",
              dictionary: {
                es: {
                  singular: "Esta oferta ya no está disponible."
                },
                "de-DE": {
                  singular: "Dieses Angebot ist nicht mehr verfügbar."
                },
                "fr-FR": {
                  singular: "Cette offre n'est plus disponible."
                },
                "ja-JP": {
                  singular: "このオファーは利用できなくなりました。"
                },
                "ko-KR": {
                  singular: "이 제안은 더 이상 이용할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Esta oferta não está mais disponível."
                },
                "zh-CN": {
                  singular: "此优惠不再可用。"
                }
              }
            })),
            variant: "warning",
            duration: 0,
            isClosable: !0
          });
        }, [_v7]),
        _v14 = (0, _v2.useCallback)(_v0 => {
          switch (_v0.to) {
            case "update_payment_method":
              _v6(!0), _v10("/checkout/payments/new");
              return;
            case "upgrade_plan":
              _v6(!0), _v10("/upgrade-plan");
              return;
            case "retry":
              _v7({
                title: String((0, _v18.translate)({
                  singular: "Something went wrong. Please try again.",
                  dictionary: {
                    es: {
                      singular: "Algo salió mal. Inténtalo de nuevo."
                    },
                    "de-DE": {
                      singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
                    },
                    "fr-FR": {
                      singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました。 再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "문제가 발생했습니다. 다시 시도해주세요."
                    },
                    "pt-BR": {
                      singular: "Alguma coisa deu errado. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "出错了。请重试。"
                    }
                  }
                })),
                variant: "warning",
                duration: 0,
                isClosable: !0
              });
              return;
            case "refresh_offer":
              _v13();
              return;
            default:
              throw Error(`Unhandled bundle add-on failure route: ${_v0.to}`);
          }
        }, [_v13, _v10, _v7]),
        _v15 = (0, _v2.useCallback)(_v0 => {
          _v4(null), _v2?.(_v0);
        }, [_v2]);
      return {
        activeModal: _v3,
        openClaim: _v12,
        close: _v11,
        addOnModalProps: {
          isOpen: "add-on" === _v3 && _v8.isEligible,
          source: _v0,
          onDismiss: _v11,
          onPurchased: _v15,
          onFailureRoute: _v14,
          onOfferUnavailable: _v13,
          isRedirecting: _v5
        },
        isUpgradeOpen: "upgrade" === _v3
      };
    };
  _v0.s(["useBundleAddOnClaim", 0, _v53], 0);
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = [36.902, 35.009, 32.263, 30.278],
    _v62 = ({
      bundleType: _v0,
      hasSubscription: _v1,
      isFreeAddOn: _v2,
      onCtaClick: _v3,
      maxWidth: _v4
    }) => {
      let _v5,
        _v6,
        _v7 = (0, _v58.useBundleSurfaceTokens)(),
        _v8 = (0, _v19.getBundleActivationCluster)(_v0),
        _v9 = (0, _v21.getBundleMemberCount)(),
        _v10 = {
          clusterTiles: _v8.clusterTiles,
          otherProductsCount: _v8.otherProductsCount,
          infoTooltip: _v8.infoTooltip
        };
      return (0, _v1.jsxs)(_v9.Flex, {
        direction: "column",
        alignItems: "center",
        gap: (0, _v15.rem)(12),
        width: "100%",
        maxWidth: _v4,
        padding: (0, _v15.rem)(16),
        background: _v7.background,
        border: _v7.border,
        borderRadius: (0, _v15.rem)(16),
        overflow: "hidden",
        position: "relative",
        children: [(0, _v1.jsx)(_v59.BannerGlow, {
          geometry: _v57.GLOW_BLUE,
          asset: _v55.default
        }), (0, _v1.jsx)(_v59.BannerGlow, {
          geometry: _v57.GLOW_PURPLE,
          asset: _v56.default
        }), (0, _v1.jsx)(_v9.Flex, {
          position: "relative",
          children: _v1 ? (0, _v1.jsx)(_v22.TiltedTileCluster, {
            tileSize: 42.919,
            ..._v10
          }) : (0, _v1.jsx)(_v60.BundleTileCluster, {
            hostTileSize: 46.875,
            partnerTileSizes: _v61,
            ..._v10
          })
        }), (0, _v1.jsxs)(_v9.Flex, {
          position: "relative",
          direction: "column",
          gap: (0, _v15.rem)(16),
          width: "100%",
          children: [(0, _v1.jsxs)(_v9.Flex, {
            direction: "column",
            gap: (0, _v15.rem)(8),
            width: "100%",
            children: [(0, _v1.jsx)(_v16.Text, {
              variant: "heading-md",
              color: "text-primary",
              textAlign: "center",
              children: String((0, _v18.translate)({
                singular: "{count} product. One add-on.",
                plural: "{count} products. One add-on.",
                count: _v9,
                replacements: {
                  count: `${_v9}`
                },
                dictionary: {
                  es: {
                    singular: "{count} producto. Un complemento.",
                    plural: "{count} productos. Un complemento."
                  },
                  "de-DE": {
                    singular: "{count} Produkt. Ein Add-on.",
                    plural: "{count} Produkte. Ein Add-on."
                  },
                  "fr-FR": {
                    singular: "{count} produit. Un module complémentaire.",
                    plural: "{count} produits. Un module complémentaire."
                  },
                  "ja-JP": {
                    singular: "{count}製品。アドオン1つ。",
                    plural: "{count}製品。アドオン1つ。"
                  },
                  "ko-KR": {
                    singular: "{count}개 제품. 애드온 1개.",
                    plural: "{count}개 제품. 애드온 1개."
                  },
                  "pt-BR": {
                    singular: "{count} produto. Um complemento.",
                    plural: "{count} produtos. Um complemento."
                  },
                  "zh-CN": {
                    singular: "{count} 个产品。一个附加组件。",
                    plural: "{count} 个产品。一个附加组件。"
                  }
                }
              }))
            }), (0, _v1.jsx)(_v16.Text, {
              variant: "body-md",
              color: "text-secondary",
              textAlign: "center",
              children: (_v5 = _v8.clusterTiles, _v6 = _v8.otherProductsCount ?? 0, String((0, _v18.translate)({
                singular: "Unlock premium access to {APPS} and one more product.",
                plural: "Unlock premium access to {APPS} and {COUNT} more products.",
                count: _v6,
                replacements: {
                  APPS: (0, _v54.getBundleAppNames)(_v5),
                  COUNT: `${_v6}`
                },
                dictionary: {
                  es: {
                    singular: "Desbloquear acceso premium a {APPS} y un producto más.",
                    plural: "Desbloquear acceso premium a {APPS} y {COUNT} productos más."
                  },
                  "de-DE": {
                    singular: "Schalte Premiumzugang zu {APPS} und einem weiteren Produkt frei.",
                    plural: "Schalte Premiumzugang zu {APPS} und {COUNT} weiteren Produkten frei."
                  },
                  "fr-FR": {
                    singular: "Débloquez l'accès premium à {APPS} et à un produit supplémentaire.",
                    plural: "Débloquez l'accès premium à {APPS} et à {COUNT} produits supplémentaires."
                  },
                  "ja-JP": {
                    singular: "{APPS}ともう1つの製品でプレミアムアクセスを利用できます。",
                    plural: "{APPS}とさらに{COUNT}製品でプレミアムアクセスを利用できます。"
                  },
                  "ko-KR": {
                    singular: "{APPS} 및 1개의 추가 제품에 대한 프리미엄 액세스를 잠금 해제합니다.",
                    plural: "{APPS} 및 {COUNT}개의 추가 제품에 대한 프리미엄 액세스를 잠금 해제합니다."
                  },
                  "pt-BR": {
                    singular: "Desbloqueie acesso premium a {APPS} e mais um produto.",
                    plural: "Desbloqueie acesso premium a {APPS} e mais {COUNT} produtos."
                  },
                  "zh-CN": {
                    singular: "解锁 {APPS} 的高级访问权限以及另一个产品。",
                    plural: "解锁 {APPS} 的高级访问权限以及另外 {COUNT} 个产品。"
                  }
                }
              })))
            })]
          }), (0, _v1.jsx)(_v8.Button, {
            variant: "brand",
            size: "md",
            width: "100%",
            onClick: _v3,
            children: {
              isFreeAddOn: _v2
            }.isFreeAddOn ? String((0, _v18.translate)({
              singular: "Claim free bundle",
              dictionary: {
                es: {
                  singular: "Reclamar paquete gratuito"
                },
                "de-DE": {
                  singular: "Kostenloses Bundle beanspruchen"
                },
                "fr-FR": {
                  singular: "Réclamer le pack gratuit"
                },
                "ja-JP": {
                  singular: "無料バンドルを受け取る"
                },
                "ko-KR": {
                  singular: "무료 번들 받기"
                },
                "pt-BR": {
                  singular: "Resgatar pacote gratuito"
                },
                "zh-CN": {
                  singular: "领取免费礼包"
                }
              }
            })) : String((0, _v18.translate)({
              singular: "Claim offer",
              dictionary: {
                es: {
                  singular: "Reclamar oferta"
                },
                "de-DE": {
                  singular: "Angebot beanspruchen"
                },
                "fr-FR": {
                  singular: "Réclamer l'offre"
                },
                "ja-JP": {
                  singular: "オファーを受け取る"
                },
                "ko-KR": {
                  singular: "오퍼 받기"
                },
                "pt-BR": {
                  singular: "Resgatar oferta"
                },
                "zh-CN": {
                  singular: "领取优惠"
                }
              }
            }))
          })]
        })]
      });
    };
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = ["membership.subscription.addOns"];
  var _v67 = _v0.i(0);
  _v0.s(["BundlePromoTile", 0, ({
    trigger: _v0,
    hasSubscription: _v1,
    onNavigate: _v2
  }) => {
    let {
        offer: _v3
      } = (0, _v31.useTriggeredBundleOffer)({
        trigger: _v0,
        periodicity: "annual"
      }),
      {
        ownsBundle: _v4,
        isResolving: _v5
      } = (({
        enabled: _v0 = !0
      } = {}) => {
        let {
          data: _v1,
          isLoading: _v2
        } = (0, _v64.useGetMe)(() => _v0 ? {
          select: _v66,
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.14"
          }
        } : null);
        return (0, _v2.useMemo)(() => ({
          ownsBundle: (_v1?.membership?.subscription?.addOns ?? []).some(_v0 => _v65.BUNDLE_TYPES.some(_v0 => _v0.name.startsWith(`bsp-${_v0}-bundle`)) && "expired" !== _v0.status),
          isResolving: _v0 && _v2
        }), [_v1, _v2, _v0]);
      })({
        enabled: null !== _v3
      }),
      _v6 = _v37(),
      [_v7, _v8] = (0, _v2.useState)(!1),
      _v9 = _v53({
        source: _v0,
        onPurchased: () => _v8(!0)
      }),
      {
        trackBundlePromoTileDisplayed: _v10,
        trackBundlePromoTileCtaClick: _v11
      } = (0, _v3.useBundleTracking)(),
      _v12 = (0, _v2.useRef)(!1),
      _v13 = (0, _v2.useEffectEvent)(() => {
        null !== _v3 && _v10({
          surface: _v0,
          bundleType: _v3.bundleType,
          bundlePrice: _v3.priceTier,
          hasSubscription: _v1
        });
      });
    if ((0, _v2.useEffect)(() => {
      null === _v3 || _v5 || _v4 || _v12.current || (_v12.current = !0, _v13());
    }, [_v3, _v5, _v4]), null === _v3 || _v5 || _v4 || _v7) return null;
    let _v14 = () => {
      void 0 !== _v2 ? _v2(_v67.BUNDLE_LIBRARY_PATH) : (0, _v63.openBundleLibrary)();
    };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v62, {
        bundleType: _v3.bundleType,
        hasSubscription: _v1,
        isFreeAddOn: "free" === _v3.priceTier,
        onCtaClick: () => {
          (_v11({
            surface: _v0,
            bundleType: _v3.bundleType,
            bundlePrice: _v3.priceTier,
            hasSubscription: _v1
          }), _v6.isEligible) ? _v9.openClaim() : _v6.isResolving || _v14();
        }
      }), (0, _v1.jsx)(_v49, {
        ..._v9.addOnModalProps,
        onSeeAllProducts: _v14
      })]
    });
  }], 0);
}