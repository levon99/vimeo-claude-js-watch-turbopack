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
  function _v23(_v0) {
    return "object" == typeof _v0 && null !== _v0;
  }
  function _v24(_v0) {
    return {
      refund_offer_variant: _v0.refundOfferVariant
    };
  }
  function _v25(_v0) {
    return _v0.replace(/\.00$/, "");
  }
  let _v26 = () => {
    let _v0 = (0, _v21.usePico)(),
      _v1 = (0, _v22.useViewer)(),
      [_v2, _v3] = (0, _v3.useState)({
        type: "waiting"
      }),
      [_v4, _v5] = (0, _v3.useState)(null),
      _v6 = (0, _v3.useRef)(!1),
      _v7 = (0, _v3.useRef)(null),
      _v8 = (0, _v3.useCallback)(_v0 => {
        null === _v7.current && (_v7.current = _v0, window.parent.postMessage({
          type: "refund_offer_closed",
          result: _v0
        }, window.location.origin));
      }, []),
      _v9 = (0, _v3.useCallback)(async _v0 => {
        if (!_v1?.apiUrl || !_v1.jwt) return void _v3({
          type: "error",
          retry: "accept",
          offer: _v0
        });
        _v3({
          type: "accepting",
          offer: _v0
        });
        try {
          var _v1;
          let _v0 = await fetch(`//${_v1.apiUrl}/me/refund_offers/repackaging_price_match`, {
            method: "POST",
            headers: {
              Authorization: `jwt ${_v1.jwt}`
            },
            credentials: "include"
          });
          if (!_v0.ok) throw Error("Unable to accept the refund offer");
          if (_v1 = await _v0.json(), !_v23(_v1) || !0 !== _v1.success) throw Error("Invalid refund offer redemption response");
          _v3({
            type: "accepted",
            offer: _v0
          }), _v0.track("refund_offer_contact_accepted", _v24(_v0));
        } catch {
          _v3({
            type: "error",
            retry: "accept",
            offer: _v0
          }), _v0.track("refund_offer_contact_error", _v24(_v0));
        }
      }, [_v0, _v1]);
    (0, _v3.useEffect)(() => {
      let _v0 = _v0 => {
        var _v1, _v2;
        if (_v0.origin !== window.location.origin || _v0.source !== window.parent || !_v23(_v0.data) || _v6.current || "refund_offer_data" !== _v0.data.type || !(_v23(_v1 = _v0.data.offer) && !0 === _v1.eligible && "treatment" === _v1.refund_offer_variant && "string" == typeof _v1.current_tier && "string" == typeof _v1.target_tier && "string" == typeof _v1.target_price_formatted && "string" == typeof _v1.current_payment_formatted && "string" == typeof _v1.target_monthly_price_formatted && "string" == typeof _v1.current_monthly_price_formatted && "string" == typeof _v1.refund_amount_formatted && "number" == typeof _v1.refund_percentage && "string" == typeof _v1.renewal_date && "number" == typeof _v1.billing_period_months && "string" == typeof _v1.currency)) return;
        _v6.current = !0;
        let _v3 = {
          eligible: !0,
          refundOfferVariant: (_v2 = _v0.data.offer).refund_offer_variant,
          currentTier: _v2.current_tier,
          targetTier: _v2.target_tier,
          targetPriceFormatted: _v2.target_price_formatted,
          currentPaymentFormatted: _v2.current_payment_formatted,
          targetMonthlyPriceFormatted: _v2.target_monthly_price_formatted,
          currentMonthlyPriceFormatted: _v2.current_monthly_price_formatted,
          refundAmountFormatted: _v2.refund_amount_formatted,
          refundPercentage: _v2.refund_percentage,
          renewalDate: _v2.renewal_date,
          billingPeriodMonths: _v2.billing_period_months,
          currency: _v2.currency
        };
        _v3({
          type: "offer",
          offer: _v3
        }), _v0.track("refund_offer_contact_modal_displayed", _v24(_v3));
      };
      return window.addEventListener("message", _v0), () => window.removeEventListener("message", _v0);
    }, [_v0]), (0, _v3.useEffect)(() => {
      let _v0 = document.body,
        _v1 = _v0.style.margin;
      return _v0.style.margin = "0", window.parent.postMessage({
        type: "refund_offer_opened"
      }, window.location.origin), () => {
        _v0.style.margin = _v1;
      };
    }, []), (0, _v3.useEffect)(() => {
      if ("accepted" !== _v2.type) return;
      let _v0 = window.setTimeout(() => {
        _v8("accepted");
      }, 0);
      return () => {
        window.clearTimeout(_v0);
      };
    }, [_v8, _v2.type]), (0, _v3.useEffect)(() => {
      if (null === _v4) return;
      let _v0 = () => {
          let {
            height: _v0
          } = _v4.getBoundingClientRect();
          window.parent.postMessage({
            type: "refund_offer_resized",
            height: Math.ceil(Math.max(_v0, _v4.scrollHeight))
          }, window.location.origin);
        },
        _v1 = new ResizeObserver(_v0);
      return _v1.observe(_v4), _v0(), () => {
        _v1.disconnect();
      };
    }, [_v4, _v2.type]);
    let _v10 = (0, _v3.useCallback)(() => {
        if ("accepting" === _v2.type) return;
        let _v0 = "accepted" === _v2.type ? "accepted" : "error" === _v2.type ? "error" : "declined";
        "offer" === _v2.type && _v0.track("refund_offer_contact_declined", _v24(_v2.offer)), _v8(_v0), _v3({
          type: "closed"
        });
      }, [_v0, _v8, _v2]),
      _v11 = (0, _v3.useCallback)(() => {
        "offer" === _v2.type && _v9(_v2.offer);
      }, [_v9, _v2]),
      _v12 = (0, _v3.useCallback)(() => {
        "offer" === _v2.type && (_v0.track("refund_offer_contact_declined", _v24(_v2.offer)), _v8("continue_to_ticket"), _v3({
          type: "closed"
        }));
      }, [_v0, _v8, _v2]),
      _v13 = (0, _v3.useCallback)(() => {
        "error" === _v2.type && _v9(_v2.offer);
      }, [_v9, _v2]);
    if ("closed" === _v2.type || "waiting" === _v2.type) return null;
    let _v14 = "accepting" === _v2.type,
      _v15 = "error" === _v2.type,
      _v16 = "offer" === _v2.type || "accepting" === _v2.type || "accepted" === _v2.type ? _v2.offer : null,
      _v17 = null === _v16 ? "" : function (_v0) {
        switch (_v0) {
          case "core":
            return (0, _v20.translate)("Core");
          case "professional":
            return (0, _v20.translate)("Professional");
          case "studio":
            return (0, _v20.translate)("Studio");
          case "production":
            return (0, _v20.translate)({
              singular: "Production",
              dictionary: {
                es: {
                  singular: "Producción"
                },
                "de-DE": {
                  singular: "Produktion"
                },
                "ja-JP": {
                  singular: "プロダクション"
                },
                "ko-KR": {
                  singular: "프로덕션"
                },
                "pt-BR": {
                  singular: "Produção"
                },
                "zh-CN": {
                  singular: "制作"
                }
              }
            });
          default:
            return _v0;
        }
      }(_v16.currentTier),
      _v18 = null === _v16 ? null : function (_v0) {
        switch (_v0) {
          case "core":
            return [(0, _v20.translate)({
              singular: "1 user (up to 3)",
              dictionary: {
                es: {
                  singular: "1 usuario (hasta 3)"
                },
                "de-DE": {
                  singular: "1 Benutzer (bis zu 3)"
                },
                "fr-FR": {
                  singular: "1 utilisateur (jusqu'à 3)"
                },
                "ja-JP": {
                  singular: "1ユーザー（最大3人）"
                },
                "ko-KR": {
                  singular: "사용자 1명(최대 3명)"
                },
                "pt-BR": {
                  singular: "1 usuário (até 3)"
                },
                "zh-CN": {
                  singular: "1 名用户（最多 3 名）"
                }
              }
            }), (0, _v20.translate)({
              singular: "300 GB storage for Embeds and non-Public videos",
              dictionary: {
                es: {
                  singular: "300 GB de almacenamiento para Embeds y vídeos no públicos"
                },
                "de-DE": {
                  singular: "300 GB Speicher für Einbettungen und nicht-öffentliche Videos"
                },
                "fr-FR": {
                  singular: "300 Go de stockage pour les intégrations et les vidéos non publiques"
                },
                "ja-JP": {
                  singular: "埋め込みおよび非公開動画用 300 GB ストレージ"
                },
                "ko-KR": {
                  singular: "임베드 및 비공개 동영상용 300 GB 저장 공간"
                },
                "pt-BR": {
                  singular: "300 GB de armazenamento para incorporações e vídeos não públicos"
                },
                "zh-CN": {
                  singular: "用于嵌入和非公开视频的 300 GB 存储空间"
                }
              }
            }), (0, _v20.translate)({
              singular: "7 TB of Public Storage",
              dictionary: {
                es: {
                  singular: "7 TB de almacenamiento público"
                },
                "de-DE": {
                  singular: "7 TB öffentlicher Speicher"
                },
                "fr-FR": {
                  singular: "7 To de stockage public"
                },
                "ja-JP": {
                  singular: "公開用ストレージ 7 TB"
                },
                "ko-KR": {
                  singular: "공개 저장 공간 7 TB"
                },
                "pt-BR": {
                  singular: "7 TB de armazenamento público"
                },
                "zh-CN": {
                  singular: "7 TB 的公共存储"
                }
              }
            })];
          case "professional":
            return [(0, _v20.translate)({
              singular: "10 users (up to 20)",
              dictionary: {
                es: {
                  singular: "10 usuarios (hasta 20)"
                },
                "de-DE": {
                  singular: "10 Nutzer (bis zu 20)"
                },
                "fr-FR": {
                  singular: "10 utilisateurs (jusqu'à 20)"
                },
                "ja-JP": {
                  singular: "10ユーザー（最大20）"
                },
                "ko-KR": {
                  singular: "사용자 10명 (최대 20명)"
                },
                "pt-BR": {
                  singular: "10 usuários (até 20)"
                },
                "zh-CN": {
                  singular: "10 个用户 (最多 20 个)"
                }
              }
            }), (0, _v20.translate)({
              singular: "7 TB storage for Embeds and non-Public videos",
              dictionary: {
                es: {
                  singular: "7 TB de almacenamiento para Embeds y vídeos no públicos"
                },
                "de-DE": {
                  singular: "7 TB Speicher für Einbettungen und nicht-öffentliche Videos"
                },
                "fr-FR": {
                  singular: "7 To de stockage pour les intégrations et les vidéos non publiques"
                },
                "ja-JP": {
                  singular: "埋め込みおよび非公開動画用 7 TB ストレージ"
                },
                "ko-KR": {
                  singular: "임베드 및 비공개 동영상용 7 TB 저장 공간"
                },
                "pt-BR": {
                  singular: "7 TB de armazenamento para incorporações e vídeos não públicos"
                },
                "zh-CN": {
                  singular: "用于嵌入和非公开视频的 7 TB 存储空间"
                }
              }
            }), (0, _v20.translate)({
              singular: "7 TB of Public Storage",
              dictionary: {
                es: {
                  singular: "7 TB de almacenamiento público"
                },
                "de-DE": {
                  singular: "7 TB öffentlicher Speicher"
                },
                "fr-FR": {
                  singular: "7 To de stockage public"
                },
                "ja-JP": {
                  singular: "公開用ストレージ 7 TB"
                },
                "ko-KR": {
                  singular: "공개 저장 공간 7 TB"
                },
                "pt-BR": {
                  singular: "7 TB de armazenamento público"
                },
                "zh-CN": {
                  singular: "7 TB 的公共存储"
                }
              }
            })];
          case "production":
            return [(0, _v20.translate)({
              singular: "20 users + 10 admins (unlimited)",
              dictionary: {
                es: {
                  singular: "20 usuarios + 10 administradores (ilimitado)"
                },
                "de-DE": {
                  singular: "20 Benutzer + 10 Administratoren (unbegrenzt)"
                },
                "fr-FR": {
                  singular: "20 utilisateurs + 10 administrateurs (illimité)"
                },
                "ja-JP": {
                  singular: "20ユーザー＋10管理者（無制限）"
                },
                "ko-KR": {
                  singular: "사용자 20명 + 관리자 10명(무제한)"
                },
                "pt-BR": {
                  singular: "20 usuários + 10 administradores (ilimitado)"
                },
                "zh-CN": {
                  singular: "20 名用户 + 10 名管理员（无限制）"
                }
              }
            }), (0, _v20.translate)({
              singular: "25 TB storage for Embeds and non-Public videos",
              dictionary: {
                es: {
                  singular: "25 TB de almacenamiento para Embeds y vídeos no públicos"
                },
                "de-DE": {
                  singular: "25 TB Speicher für Einbettungen und nicht-öffentliche Videos"
                },
                "fr-FR": {
                  singular: "25 To de stockage pour les intégrations et les vidéos non publiques"
                },
                "ja-JP": {
                  singular: "埋め込みおよび非公開動画用 25 TB ストレージ"
                },
                "ko-KR": {
                  singular: "임베드 및 비공개 동영상용 25 TB 저장 공간"
                },
                "pt-BR": {
                  singular: "25 TB de armazenamento para incorporações e vídeos não públicos"
                },
                "zh-CN": {
                  singular: "用于嵌入和非公开视频的 25 TB 存储空间"
                }
              }
            }), (0, _v20.translate)({
              singular: "25 TB of Public Storage",
              dictionary: {
                es: {
                  singular: "25 TB de almacenamiento público"
                },
                "de-DE": {
                  singular: "25 TB öffentlicher Speicher"
                },
                "fr-FR": {
                  singular: "25 To de stockage public"
                },
                "ja-JP": {
                  singular: "公開用ストレージ 25 TB"
                },
                "ko-KR": {
                  singular: "공개 저장 공간 25 TB"
                },
                "pt-BR": {
                  singular: "25 TB de armazenamento público"
                },
                "zh-CN": {
                  singular: "25 TB 的公共存储"
                }
              }
            })];
          default:
            return [(0, _v20.translate)({
              singular: "10 users + 3 admins (up to 200)",
              dictionary: {
                es: {
                  singular: "10 usuarios + 3 administradores (hasta 200)"
                },
                "de-DE": {
                  singular: "10 Benutzer + 3 Administratoren (bis zu 200)"
                },
                "fr-FR": {
                  singular: "10 utilisateurs + 3 administrateurs (jusqu'à 200)"
                },
                "ja-JP": {
                  singular: "10ユーザー＋3管理者（最大200人）"
                },
                "ko-KR": {
                  singular: "사용자 10명 + 관리자 3명(최대 200명)"
                },
                "pt-BR": {
                  singular: "10 usuários + 3 administradores (até 200)"
                },
                "zh-CN": {
                  singular: "10 名用户 + 3 名管理员（最多 200 名）"
                }
              }
            }), (0, _v20.translate)({
              singular: "10 TB storage for Embeds and non-Public videos",
              dictionary: {
                es: {
                  singular: "10 TB de almacenamiento para Embeds y vídeos no públicos"
                },
                "de-DE": {
                  singular: "10 TB Speicher für Einbettungen und nicht-öffentliche Videos"
                },
                "fr-FR": {
                  singular: "10 To de stockage pour les intégrations et les vidéos non publiques"
                },
                "ja-JP": {
                  singular: "埋め込みおよび非公開動画用 10 TB ストレージ"
                },
                "ko-KR": {
                  singular: "임베드 및 비공개 동영상용 10 TB 저장 공간"
                },
                "pt-BR": {
                  singular: "10 TB de armazenamento para incorporações e vídeos não públicos"
                },
                "zh-CN": {
                  singular: "用于嵌入和非公开视频的 10 TB 存储空间"
                }
              }
            }), (0, _v20.translate)({
              singular: "7 TB of Public Storage",
              dictionary: {
                es: {
                  singular: "7 TB de almacenamiento público"
                },
                "de-DE": {
                  singular: "7 TB öffentlicher Speicher"
                },
                "fr-FR": {
                  singular: "7 To de stockage public"
                },
                "ja-JP": {
                  singular: "公開用ストレージ 7 TB"
                },
                "ko-KR": {
                  singular: "공개 저장 공간 7 TB"
                },
                "pt-BR": {
                  singular: "7 TB de armazenamento público"
                },
                "zh-CN": {
                  singular: "7 TB 的公共存储"
                }
              }
            })];
        }
      }(_v16.currentTier),
      _v19 = _v16?.billingPeriodMonths === 12,
      _v20 = null === _v16 ? "" : _v25(_v16.targetPriceFormatted),
      _v21 = null === _v16 ? "" : _v25(_v16.currentPaymentFormatted),
      _v22 = null === _v16 ? "" : _v25(_v16.targetMonthlyPriceFormatted),
      _v23 = null === _v16 ? "" : _v25(_v16.currentMonthlyPriceFormatted),
      _v24 = null === _v16 ? "" : _v25(_v16.refundAmountFormatted);
    return (0, _v1.jsxs)(_v8.Modal, {
      isOpen: !0,
      onClose: _v10,
      scrollBehavior: "outside",
      closeOnEsc: !1,
      closeOnOverlayClick: !1,
      autoFocus: !1,
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {
        bg: "transparent",
        backdropFilter: "none"
      }), (0, _v1.jsxs)(_v11.ModalContent, {
        ref: _v5,
        maxWidth: (0, _v15.rem)(640),
        my: 0,
        width: "100%",
        borderRadius: (0, _v15.rem)(16),
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v10.ModalCloseButton, {
          top: (0, _v15.rem)(24),
          right: (0, _v15.rem)(32),
          "aria-label": (0, _v20.translate)({
            singular: "Close refund offer",
            dictionary: {
              es: {
                singular: "Cerrar oferta de reembolso"
              },
              "de-DE": {
                singular: "Rückerstattungsangebot schließen"
              },
              "fr-FR": {
                singular: "Fermer l'offre de remboursement"
              },
              "ja-JP": {
                singular: "返金オファーを閉じる"
              },
              "ko-KR": {
                singular: "환불 제안 닫기"
              },
              "pt-BR": {
                singular: "Fechar oferta de reembolso"
              },
              "zh-CN": {
                singular: "关闭退款优惠"
              }
            }
          }),
          isDisabled: _v14
        }), null !== _v16 && null !== _v18 && "accepted" !== _v2.type && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsxs)(_v13.ModalHeader, {
            px: (0, _v15.rem)(32),
            pt: (0, _v15.rem)(24),
            pb: (0, _v15.rem)(8),
            pr: (0, _v15.rem)(64),
            children: [(0, _v1.jsx)(_v17.Text, {
              as: "h1",
              variant: "heading-lg",
              children: (0, _v20.translate)({
                singular: "Keep {currentTier} with an {refundPercentage}% refund",
                replacements: {
                  currentTier: _v17,
                  refundPercentage: _v16.refundPercentage
                },
                dictionary: {
                  es: {
                    singular: "Mantener {currentTier} con un reembolso del {refundPercentage}%"
                  },
                  "de-DE": {
                    singular: "Behalten Sie {currentTier} und erhalten Sie eine Rückerstattung von {refundPercentage}%"
                  },
                  "fr-FR": {
                    singular: "Conserver {currentTier} avec un remboursement de {refundPercentage}\x02F%"
                  },
                  "ja-JP": {
                    singular: "{currentTier}を維持し、{refundPercentage}%の返金を受ける"
                  },
                  "ko-KR": {
                    singular: "{currentTier}을(를) 유지하고 {refundPercentage}% 환불 받기"
                  },
                  "pt-BR": {
                    singular: "Manter {currentTier} com um reembolso de {refundPercentage}%"
                  },
                  "zh-CN": {
                    singular: "保留 {currentTier} 并获得 {refundPercentage}% 的退款"
                  }
                }
              })
            }), (0, _v1.jsx)(_v17.Text, {
              variant: "body-md",
              mt: (0, _v15.rem)(8),
              children: (0, _v20.translate)({
                singular: "To help you through the transition to our business plans, we’d like to offer you a one-time goodwill {refundPercentage}% refund of {refundAmountFormatted} on your recent {currentPaymentFormatted} {currentTier} payment.",
                replacements: {
                  refundPercentage: _v16.refundPercentage,
                  refundAmountFormatted: _v24,
                  currentPaymentFormatted: _v21,
                  currentTier: _v17
                },
                dictionary: {
                  es: {
                    singular: "Para ayudarte durante la transición a nuestros planes empresariales, nos gustaría ofrecerte un reembolso único por cortesía del {refundPercentage}% de {refundAmountFormatted} sobre tu reciente pago de {currentPaymentFormatted} {currentTier}."
                  },
                  "de-DE": {
                    singular: "Um Ihnen den Übergang zu unseren Business-Tarifen zu erleichtern, möchten wir Ihnen eine einmalige Kulanzrückerstattung von {refundPercentage}% in Höhe von {refundAmountFormatted} auf Ihre letzte Zahlung von {currentPaymentFormatted} für {currentTier} anbieten."
                  },
                  "fr-FR": {
                    singular: "Pour vous aider dans la transition vers nos offres professionnelles, nous souhaitons vous offrir un remboursement ponctuel de courtoisie de {refundPercentage}\x02F% soit {refundAmountFormatted} sur votre récent paiement de {currentPaymentFormatted} pour {currentTier}."
                  },
                  "ja-JP": {
                    singular: "ビジネスプランへの移行を支援するため、直近の{currentTier}への{currentPaymentFormatted}のお支払いに対して、1回限りの善意による{refundPercentage}%（{refundAmountFormatted}）の返金を提供いたします。"
                  },
                  "ko-KR": {
                    singular: "비즈니스 요금제로의 전환을 돕기 위해, 최근 결제하신 {currentPaymentFormatted} {currentTier} 결제에 대해 일회성으로 {refundPercentage}%에 해당하는 {refundAmountFormatted} 환불을 제공해 드립니다."
                  },
                  "pt-BR": {
                    singular: "Para ajudá-lo na transição para nossos planos empresariais, gostaríamos de oferecer um reembolso único de cortesia de {refundPercentage}% ({refundAmountFormatted}) sobre seu pagamento recente de {currentPaymentFormatted} do {currentTier}."
                  },
                  "zh-CN": {
                    singular: "为帮助您顺利过渡到我们的企业计划，我们愿意就您最近的 {currentPaymentFormatted} {currentTier} 付款，提供一次性善意退款 {refundPercentage}%，金额为 {refundAmountFormatted}。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v17.Text, {
              variant: "body-md",
              mt: (0, _v15.rem)(20),
              children: (0, _v20.translate)({
                singular: "If you accept, your current plan will remain active until {renewalDate}. After that, the subscription will renew at full price (plus any applicable taxes) unless you cancel or change plans before the renewal date.",
                replacements: {
                  renewalDate: _v16.renewalDate
                },
                dictionary: {
                  es: {
                    singular: "Si aceptas, tu plan actual permanecerá activo hasta {renewalDate}. Después de eso, la suscripción se renovará al precio completo (más los impuestos aplicables) a menos que canceles o cambies de plan antes de la fecha de renovación."
                  },
                  "de-DE": {
                    singular: "Wenn Sie zustimmen, bleibt Ihr aktueller Tarif bis zum {renewalDate} aktiv. Danach wird das Abonnement zum vollen Preis (zzgl. ggf. anfallender Steuern) verlängert, sofern Sie nicht vor dem Verlängerungsdatum kündigen oder den Tarif wechseln."
                  },
                  "fr-FR": {
                    singular: "Si vous acceptez, votre forfait actuel restera actif jusqu'au {renewalDate}. Après cette date, l'abonnement sera renouvelé au plein tarif (plus les taxes applicables) sauf si vous annulez ou modifiez votre forfait avant la date de renouvellement."
                  },
                  "ja-JP": {
                    singular: "承諾すると、現在のプランは{renewalDate}まで有効です。その後、更新日前に解約またはプラン変更を行わない限り、サブスクリプションは全額で自動更新され、該当する税金が加算されます。"
                  },
                  "ko-KR": {
                    singular: "수락하시면 현재 플랜은 {renewalDate}까지 유지됩니다. 이후 갱신일 이전에 취소하거나 플랜을 변경하지 않으면 구독은 정가(해당 세금 포함)로 자동 갱신됩니다."
                  },
                  "pt-BR": {
                    singular: "Se você aceitar, seu plano atual permanecerá ativo até {renewalDate}. Após isso, a assinatura será renovada pelo preço integral (mais quaisquer impostos aplicáveis) a menos que você cancele ou mude de plano antes da data de renovação."
                  },
                  "zh-CN": {
                    singular: "如果您接受，当前方案将保持有效至 {renewalDate}。之后，订阅将按全价续订（另加任何适用税费），除非您在续订日前取消或更改方案。"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v9.ModalBody, {
            px: (0, _v15.rem)(32),
            pt: (0, _v15.rem)(16),
            pb: (0, _v15.rem)(20),
            children: (0, _v1.jsxs)(_v16.Stack, {
              spacing: (0, _v15.rem)(20),
              align: "stretch",
              children: [(0, _v1.jsxs)(_v6.Flex, {
                direction: "column",
                gap: (0, _v15.rem)(4),
                children: [(0, _v1.jsxs)(_v6.Flex, {
                  align: "center",
                  gap: (0, _v15.rem)(8),
                  children: [(0, _v1.jsx)(_v17.Text, {
                    variant: "heading-xl",
                    children: _v22
                  }), (0, _v1.jsx)(_v17.Text, {
                    variant: "body-lg",
                    color: "text-tertiary",
                    textDecoration: "line-through",
                    children: _v23
                  })]
                }), _v19 ? (0, _v1.jsxs)(_v5.Box, {
                  children: [(0, _v1.jsx)(_v17.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    children: (0, _v20.translate)({
                      singular: "plus taxes. Per month, billed annually, locked for the first year",
                      dictionary: {
                        es: {
                          singular: "más impuestos. Por mes, facturado anualmente, bloqueado durante el primer año"
                        },
                        "de-DE": {
                          singular: "zzgl. Steuern. Pro Monat, jährlich in Rechnung gestellt, für das erste Jahr gebunden"
                        },
                        "fr-FR": {
                          singular: "plus taxes. Par mois, facturé annuellement, verrouillé pendant la première année"
                        },
                        "ja-JP": {
                          singular: "税別。月額、年額請求、初年度は料金が固定されます"
                        },
                        "ko-KR": {
                          singular: "세금 별도. 월별 요금, 연간 청구, 첫 해에는 고정됩니다"
                        },
                        "pt-BR": {
                          singular: "mais impostos. Por mês, faturado anualmente, bloqueado no primeiro ano"
                        },
                        "zh-CN": {
                          singular: "另加税费。按月计价，按年结算，首年锁定"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v17.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    children: (0, _v20.translate)({
                      singular: "Renews at {amount}/month, billed annually",
                      replacements: {
                        amount: _v23
                      },
                      dictionary: {
                        es: {
                          singular: "Se renueva a {amount}/mes, facturado anualmente"
                        },
                        "de-DE": {
                          singular: "Verlängert sich zu {amount}/Monat, jährlich in Rechnung gestellt"
                        },
                        "fr-FR": {
                          singular: "Se renouvelle à {amount}/mois, facturé annuellement"
                        },
                        "ja-JP": {
                          singular: "月額{amount}で更新（年額請求）"
                        },
                        "ko-KR": {
                          singular: "월 {amount}로 갱신되며 연간 청구"
                        },
                        "pt-BR": {
                          singular: "Renova a {amount}/mês, faturado anualmente"
                        },
                        "zh-CN": {
                          singular: "续费为 {amount}/月，按年计费"
                        }
                      }
                    })
                  })]
                }) : (0, _v1.jsxs)(_v5.Box, {
                  children: [(0, _v1.jsx)(_v17.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    children: (0, _v20.translate)({
                      singular: "plus taxes. Per month, billed monthly",
                      dictionary: {
                        es: {
                          singular: "más impuestos. Por mes, facturado mensualmente"
                        },
                        "de-DE": {
                          singular: "zzgl. Steuern. Pro Monat, monatlich in Rechnung gestellt"
                        },
                        "fr-FR": {
                          singular: "plus taxes. Par mois, facturé mensuellement"
                        },
                        "ja-JP": {
                          singular: "税別。月額、毎月請求"
                        },
                        "ko-KR": {
                          singular: "세금 별도. 월별 요금, 월간 청구"
                        },
                        "pt-BR": {
                          singular: "mais impostos. Por mês, faturado mensalmente"
                        },
                        "zh-CN": {
                          singular: "另加税费。按月计费"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v17.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    children: (0, _v20.translate)({
                      singular: "Renews at {amount}/month, billed monthly",
                      replacements: {
                        amount: _v23
                      },
                      dictionary: {
                        es: {
                          singular: "Se renueva a {amount}/mes, facturado mensualmente"
                        },
                        "de-DE": {
                          singular: "Verlängert sich zu {amount}/Monat, monatlich in Rechnung gestellt"
                        },
                        "fr-FR": {
                          singular: "Se renouvelle à {amount}/mois, facturé mensuellement"
                        },
                        "ja-JP": {
                          singular: "月額{amount}で更新（毎月請求）"
                        },
                        "ko-KR": {
                          singular: "월 {amount}로 갱신되며 월간 청구"
                        },
                        "pt-BR": {
                          singular: "Renova a {amount}/mês, faturado mensalmente"
                        },
                        "zh-CN": {
                          singular: "续费为 {amount}/月，按月计费"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsxs)(_v6.Flex, {
                direction: "column",
                gap: (0, _v15.rem)(8),
                pt: (0, _v15.rem)(8),
                children: [(0, _v1.jsxs)(_v6.Flex, {
                  align: "center",
                  gap: (0, _v15.rem)(12),
                  children: [(0, _v1.jsx)(_v19.Users, {
                    boxSize: (0, _v15.rem)(20),
                    flexShrink: 0,
                    "aria-hidden": "true"
                  }), (0, _v1.jsx)(_v17.Text, {
                    variant: "heading-xs",
                    color: "text-secondary",
                    children: _v18[0]
                  })]
                }), (0, _v1.jsxs)(_v6.Flex, {
                  align: "center",
                  gap: (0, _v15.rem)(12),
                  children: [(0, _v1.jsx)(_v18.Database, {
                    boxSize: (0, _v15.rem)(20),
                    flexShrink: 0,
                    "aria-hidden": "true"
                  }), (0, _v1.jsx)(_v17.Text, {
                    variant: "heading-xs",
                    color: "text-secondary",
                    children: _v18[1]
                  })]
                }), (0, _v1.jsxs)(_v6.Flex, {
                  align: "center",
                  gap: (0, _v15.rem)(12),
                  children: [(0, _v1.jsx)(_v18.Database, {
                    boxSize: (0, _v15.rem)(20),
                    flexShrink: 0,
                    "aria-hidden": "true"
                  }), (0, _v1.jsx)(_v17.Text, {
                    variant: "heading-xs",
                    color: "text-secondary",
                    children: _v18[2]
                  })]
                })]
              }), (0, _v1.jsxs)(_v17.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: [(0, _v20.translate)({
                  singular: 'By clicking "Confirm {refundAmountFormatted} Refund" you agree: you’ll get a one time discount on an automatically renewing subscription valid for one year, for a total price of {discountedAmount}. If you don’t cancel before {renewalDate}, your subscription will automatically renew at full price and you’ll be charged {fullAmount} (plus tax) on that date and every year thereafter unless you cancel in your {billingSettings}Billing Settings{/billingSettings}. Pricing may change. Your content may be deleted upon cancellation.',
                  replacements: {
                    refundAmountFormatted: _v24,
                    discountedAmount: _v20,
                    renewalDate: _v16.renewalDate,
                    fullAmount: _v21,
                    billingSettings: _v0 => (0, _v1.jsx)(_v7.Link, {
                      href: "/manage/team/billing",
                      textDecoration: "underline",
                      color: "text-secondary",
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: 'Al hacer clic en "Confirmar reembolso de {refundAmountFormatted}" aceptas: recibirás un descuento único en una suscripción que se renueva automáticamente y es válida por un año, por un precio total de {discountedAmount}. Si no cancelas antes de {renewalDate}, tu suscripción se renovará automáticamente al precio completo y se te cobrará {fullAmount} (más impuestos) en esa fecha y cada año posterior, a menos que canceles en tus {billingSettings}Configuración de facturación{/billingSettings}. Los precios pueden cambiar. Tu contenido puede ser eliminado al cancelar.'
                    },
                    "de-DE": {
                      singular: "Wenn Sie auf „Rückerstattung {refundAmountFormatted} bestätigen“ klicken, stimmen Sie zu: Sie erhalten einen einmaligen Rabatt auf ein automatisch verlängerndes Abonnement, gültig für ein Jahr, zum Gesamtpreis von {discountedAmount}. Wenn Sie nicht vor dem {renewalDate} kündigen, verlängert sich Ihr Abonnement automatisch zum vollen Preis und Ihnen werden an diesem Datum und jedes Jahr danach {fullAmount} (zzgl. Steuern) berechnet, sofern Sie nicht in Ihren {billingSettings}Billing Settings{/billingSettings} kündigen. Preise können sich ändern. Ihre Inhalte können bei Kündigung gelöscht werden."
                    },
                    "fr-FR": {
                      singular: "En cliquant sur \"Confirmer le remboursement de {refundAmountFormatted}\" vous acceptez: vous bénéficierez d'une remise unique sur un abonnement à reconduction automatique valable un an, pour un prix total de {discountedAmount}. Si vous n'annulez pas avant le {renewalDate}, votre abonnement sera automatiquement renouvelé au plein tarif et vous serez facturé {fullAmount} (plus taxes) à cette date et chaque année par la suite, sauf si vous annulez dans vos {billingSettings}Paramètres de facturation{/billingSettings}. Les tarifs peuvent changer. Votre contenu peut être supprimé en cas d'annulation."
                    },
                    "ja-JP": {
                      singular: '"Confirm {refundAmountFormatted} Refund"をクリックすると、以下に同意したことになります：自動更新されるサブスクリプションに対して1回限りの割引が適用され、1年間有効で合計金額は{discountedAmount}になります。{renewalDate}までに解約しない場合、サブスクリプションは満額で自動更新され、その更新日および以降毎年{fullAmount}（税別）が請求されます（{billingSettings}請求設定{/billingSettings}でキャンセルしない限り）。価格は変更される場合があります。解約時にコンテンツが削除される場合があります。'
                    },
                    "ko-KR": {
                      singular: '버튼 "Confirm {refundAmountFormatted} Refund"을 클릭하면 다음에 동의하게 됩니다: 자동으로 갱신되는 1년간 유효한 구독에 대해 일회성 할인이 적용되어 총 결제 금액은 {discountedAmount}가 됩니다. {renewalDate} 이전에 취소하지 않으면 구독은 정가로 자동 갱신되며, 해당 날짜 및 이후 매년 {fullAmount} (세금 별도)가 청구됩니다. 취소는 {billingSettings}결제 설정{/billingSettings}에서 가능합니다. 가격은 변경될 수 있으며, 취소 시 콘텐츠가 삭제될 수 있습니다.'
                    },
                    "pt-BR": {
                      singular: 'Ao clicar em "Confirmar reembolso de {refundAmountFormatted}" você concorda: você receberá um desconto único em uma assinatura com renovação automática válida por um ano, por um preço total de {discountedAmount}. Se você não cancelar antes de {renewalDate}, sua assinatura será renovada automaticamente pelo preço integral e você será cobrado {fullAmount} (mais impostos) nessa data e em cada ano subsequente, a menos que cancele em suas {billingSettings}Configurações de cobrança{/billingSettings}. Os preços podem mudar. Seu conteúdo pode ser excluído após o cancelamento.'
                    },
                    "zh-CN": {
                      singular: '点击 "确认 {refundAmountFormatted} 退款" 即表示您同意：您将获得一次性折扣，适用于自动续订且有效期为一年的订阅，总价为 {discountedAmount}。如果您未在 {renewalDate} 之前取消，订阅将按全价自动续订，且在该日期及此后每年将向您收取 {fullAmount}（另计税费），除非您在 {billingSettings}Billing Settings{/billingSettings} 中取消。价格可能会变动。取消后您的内容可能会被删除。'
                    }
                  }
                }), (0, _v1.jsx)("br", {}), (0, _v1.jsx)("br", {}), (0, _v20.translate)({
                  singular: "By accepting this discount, you agree to our {terms}Terms of Service{/terms}, including the arbitration agreement and class action waiver, and acknowledge our {privacy}Privacy Policy{/privacy}.",
                  replacements: {
                    terms: _v0 => (0, _v1.jsx)(_v7.Link, {
                      href: "/terms",
                      textDecoration: "underline",
                      color: "text-secondary",
                      children: _v0
                    }),
                    privacy: _v0 => (0, _v1.jsx)(_v7.Link, {
                      href: "/privacy",
                      textDecoration: "underline",
                      color: "text-secondary",
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "Al aceptar este descuento, aceptas nuestros {terms}Términos de servicio{/terms}, incluido el acuerdo de arbitraje y la renuncia a demandas colectivas, y reconoces nuestra {privacy}Política de privacidad{/privacy}."
                    },
                    "de-DE": {
                      singular: "Wenn Sie diesen Rabatt annehmen, stimmen Sie unseren {terms}Nutzungsbedingungen{/terms} zu, einschließlich der Schiedsvereinbarung und des Verzichts auf Sammelklagen, und bestätigen unsere {privacy}Datenschutzerklärung{/privacy}."
                    },
                    "fr-FR": {
                      singular: "En acceptant cette remise, vous acceptez nos {terms}Conditions d'utilisation{/terms}, y compris la clause d'arbitrage et la renonciation aux recours collectifs, et reconnaissez notre {privacy}Politique de confidentialité{/privacy}."
                    },
                    "ja-JP": {
                      singular: "この割引を受け入れると、仲裁合意および集団訴訟の放棄を含む当社の{terms}利用規約{/terms}に同意し、{privacy}プライバシーポリシー{/privacy}を確認したことになります。"
                    },
                    "ko-KR": {
                      singular: "이 할인 혜택을 수락하면 중재 합의 및 집단 소송 포기를 포함한 당사의 {terms}서비스 약관{/terms}에 동의하며, 당사의 {privacy}개인정보 처리방침{/privacy}을 확인한 것으로 간주됩니다."
                    },
                    "pt-BR": {
                      singular: "Ao aceitar este desconto, você concorda com nossos {terms}Termos de Serviço{/terms}, incluindo o acordo de arbitragem e a renúncia a ações coletivas, e reconhece nossa {privacy}Política de Privacidade{/privacy}."
                    },
                    "zh-CN": {
                      singular: "通过接受此折扣，您同意我们的 {terms}服务条款{/terms}，包括仲裁协议和集体诉讼豁免，并确认我们的 {privacy}隐私政策{/privacy}。"
                    }
                  }
                })]
              })]
            })
          }), (0, _v1.jsx)(_v12.ModalFooter, {
            px: (0, _v15.rem)(32),
            pb: (0, _v15.rem)(24),
            pt: 0,
            children: (0, _v1.jsxs)(_v6.Flex, {
              direction: "column",
              gap: (0, _v15.rem)(16),
              width: "100%",
              children: [(0, _v1.jsx)(_v4.Button, {
                variant: "brand",
                size: "lg",
                width: "100%",
                onClick: _v11,
                isLoading: _v14,
                children: (0, _v20.translate)({
                  singular: "Confirm {refundAmountFormatted} Refund",
                  replacements: {
                    refundAmountFormatted: _v24
                  },
                  dictionary: {
                    es: {
                      singular: "Confirmar reembolso de {refundAmountFormatted}"
                    },
                    "de-DE": {
                      singular: "Rückerstattung {refundAmountFormatted} bestätigen"
                    },
                    "fr-FR": {
                      singular: "Confirmer le remboursement de {refundAmountFormatted}"
                    },
                    "ja-JP": {
                      singular: "返金（{refundAmountFormatted}）を確定"
                    },
                    "ko-KR": {
                      singular: "{refundAmountFormatted} 환불 확인"
                    },
                    "pt-BR": {
                      singular: "Confirmar reembolso de {refundAmountFormatted}"
                    },
                    "zh-CN": {
                      singular: "确认 {refundAmountFormatted} 退款"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v4.Button, {
                variant: "primary",
                size: "lg",
                width: "100%",
                onClick: _v12,
                isDisabled: _v14,
                children: (0, _v20.translate)({
                  singular: "No thanks, continue my refund request with Support",
                  dictionary: {
                    es: {
                      singular: "No, gracias, continuar mi solicitud de reembolso con Soporte"
                    },
                    "de-DE": {
                      singular: "Nein danke, meine Rückerstattungsanfrage beim Support fortsetzen"
                    },
                    "fr-FR": {
                      singular: "Non merci, poursuivre ma demande de remboursement auprès de l'assistance"
                    },
                    "ja-JP": {
                      singular: "いいえ、結構です。サポートとの返金リクエストを続けます"
                    },
                    "ko-KR": {
                      singular: "아니요, 고객 지원과 함께 환불 요청을 계속 진행하겠습니다"
                    },
                    "pt-BR": {
                      singular: "Não, obrigado, continuar minha solicitação de reembolso com o Suporte"
                    },
                    "zh-CN": {
                      singular: "不用，谢谢，继续向客服提交我的退款请求"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                textAlign: "center",
                children: (0, _v20.translate)({
                  singular: "If you believe your account has been misclassified, you can request a review here: {link}Request a business classification review{/link}.",
                  replacements: {
                    link: _v0 => (0, _v1.jsx)(_v7.Link, {
                      href: "https://vimeo.com/manage/team/billing?survey=b2b_repack",
                      variant: "inline-secondary",
                      textDecoration: "underline",
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "Si cree que su cuenta ha sido clasificada incorrectamente, puede solicitar una revisión aquí: {link}Solicitar una revisión de la clasificación empresarial{/link}."
                    },
                    "de-DE": {
                      singular: "Wenn Sie der Meinung sind, dass Ihr Konto falsch klassifiziert wurde, können Sie hier eine Überprüfung anfordern: {link}Überprüfung der Unternehmensklassifizierung anfordern{/link}."
                    },
                    "fr-FR": {
                      singular: "Si vous pensez que votre compte a été mal classé, vous pouvez demander un réexamen ici : {link}Demander un réexamen de la classification commerciale{/link}."
                    },
                    "ja-JP": {
                      singular: "アカウントが誤って分類されていると思われる場合は、こちらから審査を依頼できます: {link}ビジネス分類の見直しを依頼する{/link}."
                    },
                    "ko-KR": {
                      singular: "계정이 잘못 분류되었다고 생각되시면, 여기에서 검토를 요청할 수 있습니다: {link}비즈니스 분류 검토 요청{/link}."
                    },
                    "pt-BR": {
                      singular: "Se você acredita que sua conta foi classificada incorretamente, você pode solicitar uma revisão aqui: {link}Solicitar revisão da classificação comercial{/link}."
                    },
                    "zh-CN": {
                      singular: "如果您认为您的账户已被错误分类，您可以在此请求审核：{link}请求商业分类审核{/link}。"
                    }
                  }
                })
              })]
            })
          })]
        }), "accepted" === _v2.type && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            px: {
              base: "lg",
              md: "xl"
            },
            pt: {
              base: "lg",
              md: "xl"
            },
            pr: "3xl",
            children: (0, _v1.jsx)(_v17.Text, {
              as: "h1",
              variant: "heading-md",
              children: (0, _v20.translate)({
                singular: "Refund processed",
                dictionary: {
                  es: {
                    singular: "Reembolso procesado"
                  },
                  "de-DE": {
                    singular: "Rückerstattung bearbeitet"
                  },
                  "fr-FR": {
                    singular: "Remboursement traité"
                  },
                  "ja-JP": {
                    singular: "返金処理済み"
                  },
                  "ko-KR": {
                    singular: "환불 처리 완료"
                  },
                  "pt-BR": {
                    singular: "Reembolso processado"
                  },
                  "zh-CN": {
                    singular: "退款已处理"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            px: {
              base: "lg",
              md: "xl"
            },
            py: "md",
            children: (0, _v1.jsx)(_v17.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v20.translate)({
                singular: "Your refund of {refundAmountFormatted} has been processed.",
                replacements: {
                  refundAmountFormatted: _v25(_v2.offer.refundAmountFormatted)
                },
                dictionary: {
                  es: {
                    singular: "Tu reembolso de {refundAmountFormatted} ha sido procesado."
                  },
                  "de-DE": {
                    singular: "Ihre Rückerstattung in Höhe von {refundAmountFormatted} wurde bearbeitet."
                  },
                  "fr-FR": {
                    singular: "Votre remboursement de {refundAmountFormatted} a été traité."
                  },
                  "ja-JP": {
                    singular: "ご返金（{refundAmountFormatted}）の処理が完了しました。"
                  },
                  "ko-KR": {
                    singular: "귀하의 {refundAmountFormatted} 환불이 처리되었습니다."
                  },
                  "pt-BR": {
                    singular: "Seu reembolso de {refundAmountFormatted} foi processado."
                  },
                  "zh-CN": {
                    singular: "您 {refundAmountFormatted} 的退款已处理。"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v12.ModalFooter, {
            px: {
              base: "lg",
              md: "xl"
            },
            pb: {
              base: "lg",
              md: "xl"
            },
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              width: "100%",
              onClick: _v10,
              children: (0, _v20.translate)({
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
              })
            })
          })]
        }), _v15 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            px: {
              base: "lg",
              md: "xl"
            },
            pt: {
              base: "lg",
              md: "xl"
            },
            pr: "3xl",
            children: (0, _v1.jsx)(_v17.Text, {
              as: "h1",
              variant: "heading-md",
              children: (0, _v20.translate)({
                singular: "Something went wrong",
                dictionary: {
                  es: {
                    singular: "Se ha producido un error"
                  },
                  "de-DE": {
                    singular: "Hier ist etwas schief gelaufen"
                  },
                  "fr-FR": {
                    singular: "Quelque chose a planté"
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다"
                  },
                  "pt-BR": {
                    singular: "Alguma coisa deu errado"
                  },
                  "zh-CN": {
                    singular: "出错了"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            px: {
              base: "lg",
              md: "xl"
            },
            py: "md",
            children: (0, _v1.jsx)(_v17.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v20.translate)({
                singular: "Please try again.",
                dictionary: {
                  es: {
                    singular: "Vuelve a intentarlo."
                  },
                  "de-DE": {
                    singular: "Bitte versuche es nochmal."
                  },
                  "fr-FR": {
                    singular: "Veuillez essayer à nouveau."
                  },
                  "ja-JP": {
                    singular: "再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "다시 시도해주세요."
                  },
                  "pt-BR": {
                    singular: "Por favor, tente novamente."
                  },
                  "zh-CN": {
                    singular: "请重试。"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v12.ModalFooter, {
            px: {
              base: "lg",
              md: "xl"
            },
            pb: {
              base: "lg",
              md: "xl"
            },
            children: (0, _v1.jsxs)(_v6.Flex, {
              direction: {
                base: "column-reverse",
                md: "row"
              },
              gap: "sm",
              width: "100%",
              children: [(0, _v1.jsx)(_v4.Button, {
                variant: "secondary",
                width: "100%",
                onClick: _v10,
                children: (0, _v20.translate)({
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
                })
              }), (0, _v1.jsx)(_v4.Button, {
                variant: "primary",
                width: "100%",
                onClick: _v13,
                children: (0, _v20.translate)({
                  singular: "Try again",
                  dictionary: {
                    es: {
                      singular: "Intentar de nuevo"
                    },
                    "de-DE": {
                      singular: "Nochmal versuchen"
                    },
                    "fr-FR": {
                      singular: "Veuillez réessayer"
                    },
                    "ja-JP": {
                      singular: "再試行してください"
                    },
                    "ko-KR": {
                      singular: "다시 시도하세요"
                    },
                    "pt-BR": {
                      singular: "Tente de novo"
                    },
                    "zh-CN": {
                      singular: "再试一次"
                    }
                  }
                })
              })]
            })
          })]
        })]
      })]
    });
  };
  (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !1
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)("style", {
      children: `
        html, body, #__next { background: transparent !important; }
        .chakra-modal__content-container { overflow: hidden !important; padding: 0 !important; }
      `
    }), (0, _v1.jsx)(_v26, {})]
  })], 0);
}