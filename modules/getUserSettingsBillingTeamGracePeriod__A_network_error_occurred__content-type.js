{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  async function _v9({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v7.measureLatency)("getUserSettingsBillingTeamGracePeriod", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/settings/billing/team_grace_period?fields=${_v1.map(_v8.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v8.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v8.deepCamelCase)(_v1);
    });
  }
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  function _v14(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v10.default)(_v2 ? `/users/${_v2.where.userId}/settings/billing/team_grace_period${(0, _v12.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v9({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v6.default.env.STORYBOOK && (0, _v12.assignMswData)(_v14, {
    endpoint: "/users/:userId/settings/billing/team_grace_period",
    method: "GET"
  }), "true" === _v6.default.env.STORYBOOK && (0, _v12.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v11.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v12.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/settings/billing/team_grace_period${(0, _v12.serializeQuery)(_v0)}`, _v9({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/settings/billing/team_grace_period",
    method: "GET"
  });
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = {
      amex: "Amex",
      visa: "Visa",
      mastercard: "Mastercard",
      discover: "Discover",
      jcb: "JCB",
      china_unionpay: "UnionPay",
      creditcard: "Card",
      paypal: "PayPal",
      applepay: "Apple Pay"
    },
    _v19 = {
      CARD_BRAND_AMERICAN_EXPRESS: "Amex",
      CARD_BRAND_DISCOVER: "Discover",
      CARD_BRAND_JCB: "JCB",
      CARD_BRAND_MASTER_CARD: "Mastercard",
      CARD_BRAND_UNION_PAY: "UnionPay",
      CARD_BRAND_VISA: "Visa"
    },
    _v20 = {
      PAYMENT_METHOD_TYPES_APPLEPAY: "Apple Pay",
      PAYMENT_METHOD_TYPES_PAYPAL: "PayPal"
    };
  function _v21(_v0) {
    if (!_v0) return "";
    let _v1 = new Date(_v0);
    if (Number.isNaN(_v1.getTime())) return "";
    let _v2 = "u" > typeof navigator && navigator.language || "en-US";
    return _v1.toLocaleString(_v2, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "UTC",
      timeZoneName: "short"
    });
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = {
      amex: _v37.AmexNegative,
      discover: _v38.DiscoverNegative,
      mastercard: _v39.MastercardNegative,
      paypal: _v40.PaypalNegative,
      visa: _v41.VisaNegative
    },
    _v44 = ({
      cardBrand: _v0
    }) => {
      let _v1 = _v43[_v0.toLowerCase().replace(/[^a-z]/g, "")] || _v36.CreditCard;
      return (0, _v1.jsx)(_v24.Center, {
        minW: "32px",
        h: "24px",
        color: "text-primary",
        children: (0, _v1.jsx)(_v1, {
          width: "32px",
          height: "20px"
        })
      });
    },
    _v45 = ({
      title: _v0,
      description: _v1
    }) => (0, _v1.jsxs)(_v26.HStack, {
      gap: "8px",
      align: "flex-start",
      children: [(0, _v1.jsx)(_v33.Text, {
        color: "status-destructive-primary",
        fontSize: "13px",
        lineHeight: "1.5",
        flexShrink: 0,
        children: "•"
      }), (0, _v1.jsxs)(_v33.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: [(0, _v1.jsx)(_v33.Text, {
          as: "span",
          variant: "heading-xs",
          color: "text-primary",
          children: _v0
        }), " ", _v1]
      })]
    }),
    _v46 = ({
      layout: _v0,
      analytics: _v1,
      isOpen: _v2,
      onClose: _v3,
      daysRemaining: _v4,
      suspensionDate: _v5,
      lastFourDigits: _v6,
      cardBrand: _v7,
      amountDue: _v8,
      teamMemberCount: _v9 = 1,
      videoTitle: _v10
    }) => {
      let _v11 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        _v2 && !_v11.current && _v1.trackModalDisplayed({
          variant: "admin",
          daysRemaining: _v4
        }), _v11.current = _v2;
      }, [_v1, _v4, _v2]);
      let _v12 = (0, _v2.useCallback)(() => {
          _v1.trackModalDismissed({
            variant: "admin",
            daysRemaining: _v4
          }), _v3();
        }, [_v1, _v4, _v3]),
        _v13 = (0, _v2.useCallback)(() => {
          _v1.trackModalCtaClicked({
            variant: "admin",
            daysRemaining: _v4
          });
        }, [_v1, _v4]);
      return _v2 ? (0, _v1.jsxs)(_v27.Modal, {
        isOpen: !0,
        onClose: _v12,
        closeOnEsc: !1,
        closeOnOverlayClick: !1,
        size: ["full", "md"],
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v32.ModalOverlay, {}), (0, _v1.jsxs)(_v30.ModalContent, {
          maxWidth: {
            base: "100vw",
            md: "480px"
          },
          width: {
            base: "100vw",
            md: "480px"
          },
          height: {
            base: "100dvh",
            md: "auto"
          },
          minH: {
            base: "100dvh",
            md: "auto"
          },
          borderRadius: {
            base: "0",
            md: "20px"
          },
          margin: {
            base: "0",
            md: "auto"
          },
          overflow: "hidden",
          children: [(0, _v1.jsxs)(_v25.Flex, {
            px: "24px",
            pt: "24px",
            pb: "8px",
            alignItems: "flex-start",
            gap: "10px",
            children: [(0, _v1.jsxs)(_v22.Box, {
              flex: "1",
              children: [(0, _v1.jsx)(_v33.Text, {
                variant: "heading-md",
                children: (0, _v42.translate)({
                  singular: "Your subscription is about to expire",
                  dictionary: {
                    es: {
                      singular: "Su suscripción está a punto de expirar"
                    },
                    "de-DE": {
                      singular: "Ihr Abonnement läuft bald ab"
                    },
                    "fr-FR": {
                      singular: "Votre abonnement arrive bientôt à expiration"
                    },
                    "ja-JP": {
                      singular: "サブスクリプションの有効期限がまもなく切れます"
                    },
                    "ko-KR": {
                      singular: "구독이 곧 만료됩니다"
                    },
                    "pt-BR": {
                      singular: "Sua assinatura está prestes a expirar"
                    },
                    "zh-CN": {
                      singular: "您的订阅即将到期"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v33.Text, {
                variant: "body-md",
                color: "text-secondary",
                mt: "4px",
                children: (0, _v42.translate)({
                  singular: "We've been unable to process your payment.",
                  dictionary: {
                    es: {
                      singular: "No hemos podido procesar su pago."
                    },
                    "de-DE": {
                      singular: "Wir konnten Ihre Zahlung nicht verarbeiten."
                    },
                    "fr-FR": {
                      singular: "Nous n'avons pas pu traiter votre paiement."
                    },
                    "ja-JP": {
                      singular: "お支払いの処理ができませんでした。"
                    },
                    "ko-KR": {
                      singular: "결제 처리에 실패했습니다."
                    },
                    "pt-BR": {
                      singular: "Não conseguimos processar seu pagamento."
                    },
                    "zh-CN": {
                      singular: "我们无法处理您的付款。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v29.ModalCloseButton, {
              position: "static"
            })]
          }), (0, _v1.jsx)(_v28.ModalBody, {
            px: "24px",
            pt: "20px",
            pb: "8px",
            children: (0, _v1.jsxs)(_v34.VStack, {
              gap: "24px",
              align: "stretch",
              children: ["home" === _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsxs)(_v26.HStack, {
                  gap: "10px",
                  px: "16px",
                  py: "12px",
                  bg: "status-caution-secondary",
                  borderRadius: "12px",
                  children: [(0, _v1.jsx)(_v24.Center, {
                    flexShrink: 0,
                    p: "8px",
                    borderRadius: "full",
                    bg: "status-caution-primary",
                    color: "background",
                    children: (0, _v1.jsx)(_v35.CircleExclamationFilled, {
                      width: "24px",
                      height: "24px"
                    })
                  }), (0, _v1.jsxs)(_v22.Box, {
                    flex: "1",
                    minW: 0,
                    children: [(0, _v1.jsx)(_v33.Text, {
                      variant: "heading-sm",
                      color: "orange.700",
                      children: (0, _v42.translate)({
                        singular: "{DAYS} day until your account is suspended",
                        plural: "{DAYS} days until your account is suspended",
                        count: _v4,
                        replacements: {
                          DAYS: _v4
                        },
                        dictionary: {
                          es: {
                            singular: "{DAYS} día hasta que su cuenta sea suspendida",
                            plural: "{DAYS} días hasta que su cuenta sea suspendida"
                          },
                          "de-DE": {
                            singular: "{DAYS} Tag bis zur Sperrung Ihres Kontos",
                            plural: "{DAYS} Tage bis zur Sperrung Ihres Kontos"
                          },
                          "fr-FR": {
                            singular: "{DAYS} jour avant la suspension de votre compte",
                            plural: "{DAYS} jours avant la suspension de votre compte"
                          },
                          "ja-JP": {
                            singular: "アカウントが停止されるまであと{DAYS}日です",
                            plural: "アカウントが停止されるまであと{DAYS}日です"
                          },
                          "ko-KR": {
                            singular: "계정 정지까지 {DAYS}일 남았습니다",
                            plural: "계정 정지까지 {DAYS}일 남았습니다"
                          },
                          "pt-BR": {
                            singular: "Falta {DAYS} dia até que sua conta seja suspensa",
                            plural: "Faltam {DAYS} dias até que sua conta seja suspensa"
                          },
                          "zh-CN": {
                            singular: "{DAYS} 天后您的账户将被暂停",
                            plural: "{DAYS} 天后您的账户将被暂停"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v33.Text, {
                      variant: "body-sm",
                      color: "status-caution-primary",
                      mt: "2px",
                      children: (0, _v42.translate)({
                        singular: "Suspends {DATE}",
                        replacements: {
                          DATE: _v5
                        },
                        dictionary: {
                          es: {
                            singular: "Suspende {DATE}"
                          },
                          "de-DE": {
                            singular: "Wird am {DATE} gesperrt"
                          },
                          "fr-FR": {
                            singular: "Suspend le {DATE}"
                          },
                          "ja-JP": {
                            singular: "停止日：{DATE}"
                          },
                          "ko-KR": {
                            singular: "{DATE}에 정지됩니다"
                          },
                          "pt-BR": {
                            singular: "Suspende em {DATE}"
                          },
                          "zh-CN": {
                            singular: "将于 {DATE} 暂停"
                          }
                        }
                      })
                    })]
                  })]
                }), (0, _v1.jsxs)(_v34.VStack, {
                  gap: "8px",
                  align: "stretch",
                  children: [(0, _v1.jsx)(_v33.Text, {
                    variant: "heading-xs",
                    color: "text-primary",
                    mb: "8px",
                    children: (0, _v42.translate)({
                      singular: "If not resolved, you will lose:",
                      dictionary: {
                        es: {
                          singular: "Si no se resuelve, perderá:"
                        },
                        "de-DE": {
                          singular: "Wenn nicht behoben, verlieren Sie:"
                        },
                        "fr-FR": {
                          singular: "Si cela n'est pas résolu, vous perdrez :"
                        },
                        "ja-JP": {
                          singular: "未解決の場合、以下を失います："
                        },
                        "ko-KR": {
                          singular: "해결되지 않으면 다음을 잃게 됩니다:"
                        },
                        "pt-BR": {
                          singular: "Se não for resolvido, você perderá:"
                        },
                        "zh-CN": {
                          singular: "如果未解决，您将失去:"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v45, {
                    title: (0, _v42.translate)({
                      singular: "Some videos",
                      dictionary: {
                        es: {
                          singular: "Algunos videos"
                        },
                        "de-DE": {
                          singular: "Einige Videos"
                        },
                        "fr-FR": {
                          singular: "Certaines vidéos"
                        },
                        "ja-JP": {
                          singular: "一部の動画"
                        },
                        "ko-KR": {
                          singular: "일부 동영상"
                        },
                        "pt-BR": {
                          singular: "Alguns vídeos"
                        },
                        "zh-CN": {
                          singular: "部分视频"
                        }
                      }
                    }),
                    description: (0, _v42.translate)({
                      singular: "— those above the storage limit will be blocked",
                      dictionary: {
                        es: {
                          singular: "— los que excedan el límite de almacenamiento serán bloqueados"
                        },
                        "de-DE": {
                          singular: "— diejenigen, die das Speicherlimit überschreiten, werden blockiert"
                        },
                        "fr-FR": {
                          singular: "— celles dépassant la limite de stockage seront bloquées"
                        },
                        "ja-JP": {
                          singular: "— ストレージ制限を超えたものはブロックされます"
                        },
                        "ko-KR": {
                          singular: "— 저장 한도를 초과한 항목은 차단됩니다"
                        },
                        "pt-BR": {
                          singular: "— os que ultrapassarem o limite de armazenamento serão bloqueados"
                        },
                        "zh-CN": {
                          singular: "— 超出存储限制的将被阻止"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v45, {
                    title: (0, _v42.translate)({
                      singular: "Privacy settings",
                      dictionary: {
                        es: {
                          singular: "Configuración de privacidad"
                        },
                        "de-DE": {
                          singular: "Datenschutzeinstellungen"
                        },
                        "fr-FR": {
                          singular: "Paramètres de confidentialité"
                        },
                        "ja-JP": {
                          singular: "プライバシー設定"
                        },
                        "ko-KR": {
                          singular: "프라이버시 설정"
                        },
                        "pt-BR": {
                          singular: "Configurações de Privacidade"
                        },
                        "zh-CN": {
                          singular: "隐私设置"
                        }
                      }
                    }),
                    description: (0, _v42.translate)({
                      singular: "— some videos will be switched to private",
                      dictionary: {
                        es: {
                          singular: "— algunos videos se volverán privados"
                        },
                        "de-DE": {
                          singular: "— einige Videos werden auf privat umgestellt"
                        },
                        "fr-FR": {
                          singular: "— certaines vidéos seront rendues privées"
                        },
                        "ja-JP": {
                          singular: "— 一部の動画が非公開に切り替わります"
                        },
                        "ko-KR": {
                          singular: "— 일부 동영상이 비공개로 전환됩니다"
                        },
                        "pt-BR": {
                          singular: "— alguns vídeos serão definidos como privados"
                        },
                        "zh-CN": {
                          singular: "— 部分视频将被设为私有"
                        }
                      }
                    })
                  }), _v9 > 1 && (0, _v1.jsx)(_v45, {
                    title: (0, _v42.translate)({
                      singular: "Team collaboration",
                      dictionary: {
                        es: {
                          singular: "Colaboración en equipo"
                        },
                        "de-DE": {
                          singular: "Teamzusammenarbeit"
                        },
                        "fr-FR": {
                          singular: "Collaboration en équipe"
                        },
                        "ja-JP": {
                          singular: "チームコラボレーション"
                        },
                        "ko-KR": {
                          singular: "팀 협업"
                        },
                        "pt-BR": {
                          singular: "Colaboração da equipe"
                        },
                        "zh-CN": {
                          singular: "团队协作"
                        }
                      }
                    }),
                    description: (0, _v42.translate)({
                      singular: "— member access and shared features will be disabled",
                      dictionary: {
                        es: {
                          singular: "— el acceso de los miembros y las funciones compartidas se desactivarán"
                        },
                        "de-DE": {
                          singular: "— Mitgliederzugriff und gemeinsame Funktionen werden deaktiviert"
                        },
                        "fr-FR": {
                          singular: "— l'accès des membres et les fonctionnalités partagées seront désactivés"
                        },
                        "ja-JP": {
                          singular: "— メンバーのアクセスおよび共有機能が無効になります"
                        },
                        "ko-KR": {
                          singular: "— 멤버 접근 및 공유 기능이 비활성화됩니다"
                        },
                        "pt-BR": {
                          singular: "— o acesso dos membros e recursos compartilhados serão desativados"
                        },
                        "zh-CN": {
                          singular: "— 成员访问权限和共享功能将被禁用"
                        }
                      }
                    })
                  })]
                })]
              }) : (0, _v1.jsxs)(_v26.HStack, {
                gap: "10px",
                px: "16px",
                py: "12px",
                bg: "status-caution-secondary",
                borderRadius: "12px",
                children: [(0, _v1.jsx)(_v24.Center, {
                  flexShrink: 0,
                  p: "8px",
                  borderRadius: "full",
                  bg: "status-caution-primary",
                  color: "background",
                  children: (0, _v1.jsx)(_v35.CircleExclamationFilled, {
                    width: "24px",
                    height: "24px"
                  })
                }), (0, _v1.jsx)(_v22.Box, {
                  flex: "1",
                  minW: 0,
                  children: (0, _v1.jsx)(_v33.Text, {
                    variant: "body-md",
                    color: "orange.700",
                    children: (0, _v42.translate)({
                      singular: "“{TITLE}” goes offline in {DAYS} day. Update payment to keep it playing.",
                      plural: "“{TITLE}” goes offline in {DAYS} days. Update payment to keep it playing.",
                      count: _v4,
                      replacements: {
                        DAYS: _v4,
                        TITLE: _v10 ?? ""
                      },
                      dictionary: {
                        es: {
                          singular: "“{TITLE}” quedará sin conexión en {DAYS} día. Actualice el pago para que siga reproduciéndose.",
                          plural: "“{TITLE}” quedará sin conexión en {DAYS} días. Actualice el pago para que siga reproduciéndose."
                        },
                        "de-DE": {
                          singular: "“{TITLE}” geht in {DAYS} Tag offline. Aktualisieren Sie die Zahlung, damit es weiter abgespielt wird.",
                          plural: "“{TITLE}” geht in {DAYS} Tagen offline. Aktualisieren Sie die Zahlung, damit es weiter abgespielt wird."
                        },
                        "fr-FR": {
                          singular: "“{TITLE}” sera hors ligne dans {DAYS} jour. Mettez à jour le paiement pour qu'il continue à être lu.",
                          plural: "“{TITLE}” sera hors ligne dans {DAYS} jours. Mettez à jour le paiement pour qu'il continue à être lu."
                        },
                        "ja-JP": {
                          singular: "“{TITLE}”は{DAYS}日後にオフラインになります。再生を維持するには支払いを更新してください。",
                          plural: "“{TITLE}”は{DAYS}日後にオフラインになります。再生を維持するには支払いを更新してください。"
                        },
                        "ko-KR": {
                          singular: "“{TITLE}”이(가) {DAYS}일 후 오프라인이 됩니다. 재생을 유지하려면 결제 정보를 업데이트하세요.",
                          plural: "“{TITLE}”이(가) {DAYS}일 후 오프라인이 됩니다. 재생을 유지하려면 결제 정보를 업데이트하세요."
                        },
                        "pt-BR": {
                          singular: "“{TITLE}” ficará offline em {DAYS} dia. Atualize o pagamento para que continue sendo reproduzido.",
                          plural: "“{TITLE}” ficará offline em {DAYS} dias. Atualize o pagamento para que continue sendo reproduzido."
                        },
                        "zh-CN": {
                          singular: "“{TITLE}” 将在 {DAYS} 天后下线。更新付款以保持播放。",
                          plural: "“{TITLE}” 将在 {DAYS} 天后下线。更新付款以保持播放。"
                        }
                      }
                    })
                  })
                })]
              }), (0, _v1.jsxs)(_v26.HStack, {
                justifyContent: "space-between",
                px: "12px",
                py: "10px",
                bg: "fill-component",
                borderRadius: "8px",
                children: [(0, _v1.jsxs)(_v26.HStack, {
                  gap: "8px",
                  children: [(0, _v1.jsx)(_v44, {
                    cardBrand: _v7
                  }), (0, _v1.jsxs)(_v33.Text, {
                    variant: "body-md",
                    color: "text-tertiary",
                    children: [_v7, " ••••", _v6]
                  })]
                }), (0, _v1.jsxs)(_v26.HStack, {
                  gap: "8px",
                  children: [(0, _v1.jsx)(_v33.Text, {
                    variant: "body-md",
                    color: "text-tertiary",
                    children: _v8
                  }), (0, _v1.jsx)(_v24.Center, {
                    bg: "status-destructive-primary",
                    px: "6px",
                    py: "2px",
                    borderRadius: "4px",
                    children: (0, _v1.jsx)(_v33.Text, {
                      fontSize: "11px",
                      fontWeight: "500",
                      color: "text-button-inverted",
                      whiteSpace: "nowrap",
                      children: (0, _v42.translate)({
                        singular: "Payment failed",
                        dictionary: {
                          es: {
                            singular: "Pago fallido"
                          },
                          "de-DE": {
                            singular: "Zahlung fehlgeschlagen"
                          },
                          "fr-FR": {
                            singular: "Échec du paiement"
                          },
                          "ja-JP": {
                            singular: "支払いに失敗しました"
                          },
                          "ko-KR": {
                            singular: "결제 실패"
                          },
                          "pt-BR": {
                            singular: "Falha no pagamento"
                          },
                          "zh-CN": {
                            singular: "付款失败"
                          }
                        }
                      })
                    })
                  })]
                })]
              })]
            })
          }), (0, _v1.jsx)(_v31.ModalFooter, {
            px: "24px",
            pt: "20px",
            pb: "24px",
            children: (0, _v1.jsx)(_v23.Button, {
              as: "a",
              href: "/checkout/payments/new",
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v13,
              children: (0, _v42.translate)({
                singular: "Update payment method now",
                dictionary: {
                  es: {
                    singular: "Actualice el método de pago ahora"
                  },
                  "de-DE": {
                    singular: "Zahlungsmethode jetzt aktualisieren"
                  },
                  "fr-FR": {
                    singular: "Mettre à jour le moyen de paiement maintenant"
                  },
                  "ja-JP": {
                    singular: "支払い方法を今すぐ更新"
                  },
                  "ko-KR": {
                    singular: "지금 결제 수단 업데이트"
                  },
                  "pt-BR": {
                    singular: "Atualize o método de pagamento agora"
                  },
                  "zh-CN": {
                    singular: "立即更新付款方式"
                  }
                }
              })
            })
          })]
        })]
      }) : null;
    },
    _v47 = ({
      analytics: _v0,
      daysRemaining: _v1,
      variant: _v2,
      onAction: _v3
    }) => {
      let _v4 = "admin" === _v2,
        _v5 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        _v5.current || (_v0.trackBannerDisplayed({
          variant: _v2,
          daysRemaining: _v1
        }), _v5.current = !0);
      }, [_v0, _v1, _v2]);
      let _v6 = (0, _v2.useCallback)(() => {
          _v0.trackBannerCtaClicked({
            variant: _v2,
            daysRemaining: _v1
          });
        }, [_v0, _v1, _v2]),
        _v7 = (0, _v2.useCallback)(() => {
          _v0.trackBannerCtaClicked({
            variant: _v2,
            daysRemaining: _v1
          }), _v3();
        }, [_v0, _v1, _v3, _v2]);
      return (0, _v1.jsxs)(_v25.Flex, {
        align: ["flex-start", "center"],
        justify: "space-between",
        direction: ["column", "row"],
        gap: "md",
        px: "16px",
        py: "12px",
        borderRadius: "12px",
        bg: "status-caution-secondary",
        children: [(0, _v1.jsxs)(_v26.HStack, {
          gap: "10px",
          flex: "1",
          minW: 0,
          children: [(0, _v1.jsx)(_v25.Flex, {
            flexShrink: 0,
            align: "center",
            justify: "center",
            p: "6px",
            borderRadius: "full",
            bg: "status-caution-primary",
            color: "background",
            children: (0, _v1.jsx)(_v35.CircleExclamationFilled, {
              width: "20px",
              height: "20px"
            })
          }), (0, _v1.jsx)(_v33.Text, {
            variant: "body-md",
            fontWeight: "500",
            color: "orange.700",
            children: _v4 ? (0, _v42.translate)({
              singular: "Your payment failed — {DAYS} day left to update before your account is suspended",
              plural: "Your payment failed — {DAYS} days left to update before your account is suspended",
              count: _v1,
              replacements: {
                DAYS: _v1
              },
              dictionary: {
                es: {
                  singular: "Su pago falló — queda {DAYS} día para actualizar antes de que su cuenta sea suspendida",
                  plural: "Su pago falló — quedan {DAYS} días para actualizar antes de que su cuenta sea suspendida"
                },
                "de-DE": {
                  singular: "Ihre Zahlung ist fehlgeschlagen — Sie haben noch {DAYS} Tag, um die Zahlung zu aktualisieren, bevor Ihr Konto gesperrt wird",
                  plural: "Ihre Zahlung ist fehlgeschlagen — Sie haben noch {DAYS} Tage, um die Zahlung zu aktualisieren, bevor Ihr Konto gesperrt wird"
                },
                "fr-FR": {
                  singular: "Votre paiement a échoué — il vous reste {DAYS} jour pour effectuer la mise à jour avant la suspension de votre compte",
                  plural: "Votre paiement a échoué — il vous reste {DAYS} jours pour effectuer la mise à jour avant la suspension de votre compte"
                },
                "ja-JP": {
                  singular: "お支払いに失敗しました — アカウントが停止される前に更新する猶予は{DAYS}日です",
                  plural: "お支払いに失敗しました — アカウントが停止される前に更新する猶予は{DAYS}日です"
                },
                "ko-KR": {
                  singular: "결제 실패 — 계정 정지까지 {DAYS}일 남았습니다. 결제 정보를 업데이트해 주세요.",
                  plural: "결제 실패 — 계정 정지까지 {DAYS}일 남았습니다. 결제 정보를 업데이트해 주세요."
                },
                "pt-BR": {
                  singular: "Seu pagamento falhou — falta {DAYS} dia para atualizar antes que sua conta seja suspensa",
                  plural: "Seu pagamento falhou — faltam {DAYS} dias para atualizar antes que sua conta seja suspensa"
                },
                "zh-CN": {
                  singular: "您的付款失败 — 在账户被暂停之前，您还有 {DAYS} 天的时间来更新",
                  plural: "您的付款失败 — 在账户被暂停之前，您还有 {DAYS} 天的时间来更新"
                }
              }
            }) : (0, _v42.translate)({
              singular: "Your team's account needs attention - your team might lose access to some videos in {DAYS} day",
              plural: "Your team's account needs attention - your team might lose access to some videos in {DAYS} days",
              count: _v1,
              replacements: {
                DAYS: _v1
              },
              dictionary: {
                es: {
                  singular: "La cuenta de su equipo necesita atención - su equipo podría perder acceso a algunos videos en {DAYS} día",
                  plural: "La cuenta de su equipo necesita atención - su equipo podría perder acceso a algunos videos en {DAYS} días"
                },
                "de-DE": {
                  singular: "Das Konto Ihres Teams benötigt Aufmerksamkeit - Ihr Team könnte in {DAYS} Tag den Zugriff auf einige Videos verlieren",
                  plural: "Das Konto Ihres Teams benötigt Aufmerksamkeit - Ihr Team könnte in {DAYS} Tagen den Zugriff auf einige Videos verlieren"
                },
                "fr-FR": {
                  singular: "Le compte de votre équipe nécessite une attention - votre équipe pourrait perdre l'accès à certaines vidéos dans {DAYS} jour",
                  plural: "Le compte de votre équipe nécessite une attention - votre équipe pourrait perdre l'accès à certaines vidéos dans {DAYS} jours"
                },
                "ja-JP": {
                  singular: "チームのアカウントに対応が必要です - {DAYS}日後にチームが一部の動画へのアクセスを失う可能性があります",
                  plural: "チームのアカウントに対応が必要です - {DAYS}日後にチームが一部の動画へのアクセスを失う可能性があります"
                },
                "ko-KR": {
                  singular: "팀 계정에 조치가 필요합니다 - {DAYS}일 내에 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다",
                  plural: "팀 계정에 조치가 필요합니다 - {DAYS}일 내에 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다"
                },
                "pt-BR": {
                  singular: "A conta da sua equipe precisa de atenção - sua equipe pode perder acesso a alguns vídeos em {DAYS} dia",
                  plural: "A conta da sua equipe precisa de atenção - sua equipe pode perder acesso a alguns vídeos em {DAYS} dias"
                },
                "zh-CN": {
                  singular: "您的团队账户需要关注 - 您的团队可能会在 {DAYS} 天内失去对部分视频的访问权限",
                  plural: "您的团队账户需要关注 - 您的团队可能会在 {DAYS} 天内失去对部分视频的访问权限"
                }
              }
            })
          })]
        }), _v4 ? (0, _v1.jsx)(_v23.Button, {
          as: "a",
          href: "/checkout/payments/new",
          size: "sm",
          variant: "primary",
          width: ["100%", "auto"],
          flexShrink: 0,
          onClick: _v6,
          children: (0, _v42.translate)({
            singular: "Update payment",
            dictionary: {
              es: {
                singular: "Actualizar pago"
              },
              "de-DE": {
                singular: "Zahlung aktualisieren"
              },
              "fr-FR": {
                singular: "Mettre à jour le paiement"
              },
              "ja-JP": {
                singular: "支払いを更新"
              },
              "ko-KR": {
                singular: "결제 정보 업데이트"
              },
              "pt-BR": {
                singular: "Atualizar pagamento"
              },
              "zh-CN": {
                singular: "更新付款"
              }
            }
          })
        }) : (0, _v1.jsx)(_v23.Button, {
          size: "sm",
          variant: "primary",
          width: ["100%", "auto"],
          flexShrink: 0,
          onClick: _v7,
          children: (0, _v42.translate)({
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
          })
        })]
      });
    };
  var _v48 = _v0.i(0);
  let _v49 = ({
    analytics: _v0,
    isOpen: _v1,
    onClose: _v2,
    daysRemaining: _v3,
    ownerName: _v4
  }) => {
    let _v5 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      _v1 && !_v5.current && _v0.trackModalDisplayed({
        variant: "member",
        daysRemaining: _v3
      }), _v5.current = _v1;
    }, [_v0, _v3, _v1]);
    let _v6 = (0, _v2.useCallback)(() => {
      _v0.trackModalDismissed({
        variant: "member",
        daysRemaining: _v3
      }), _v2();
    }, [_v0, _v3, _v2]);
    return _v1 ? (0, _v1.jsxs)(_v27.Modal, {
      isOpen: !0,
      onClose: _v6,
      size: ["full", "md"],
      scrollBehavior: "outside",
      children: [(0, _v1.jsx)(_v32.ModalOverlay, {}), (0, _v1.jsxs)(_v30.ModalContent, {
        maxWidth: {
          base: "100vw",
          md: "480px"
        },
        width: {
          base: "100vw",
          md: "480px"
        },
        height: {
          base: "100dvh",
          md: "auto"
        },
        minH: {
          base: "100dvh",
          md: "auto"
        },
        borderRadius: {
          base: "0",
          md: "20px"
        },
        margin: {
          base: "0",
          md: "auto"
        },
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v25.Flex, {
          px: "24px",
          pt: "24px",
          pb: "8px",
          alignItems: "flex-start",
          gap: "10px",
          children: [(0, _v1.jsxs)(_v22.Box, {
            flex: "1",
            children: [(0, _v1.jsx)(_v33.Text, {
              variant: "heading-md",
              children: (0, _v42.translate)({
                singular: "Your team's account needs attention",
                dictionary: {
                  es: {
                    singular: "La cuenta de su equipo necesita atención"
                  },
                  "de-DE": {
                    singular: "Das Konto Ihres Teams benötigt Aufmerksamkeit"
                  },
                  "fr-FR": {
                    singular: "Le compte de votre équipe nécessite une attention"
                  },
                  "ja-JP": {
                    singular: "チームのアカウントに対応が必要です"
                  },
                  "ko-KR": {
                    singular: "팀 계정에 조치가 필요합니다"
                  },
                  "pt-BR": {
                    singular: "A conta da sua equipe precisa de atenção"
                  },
                  "zh-CN": {
                    singular: "您的团队账户需要关注"
                  }
                }
              })
            }), (0, _v1.jsx)(_v33.Text, {
              variant: "body-md",
              color: "text-secondary",
              mt: "4px",
              children: (0, _v42.translate)({
                singular: "There's been an issue with your team's plan",
                dictionary: {
                  es: {
                    singular: "Se ha producido un problema con el plan de su equipo"
                  },
                  "de-DE": {
                    singular: "Es gab ein Problem mit dem Plan Ihres Teams"
                  },
                  "fr-FR": {
                    singular: "Un problème est survenu avec le forfait de votre équipe"
                  },
                  "ja-JP": {
                    singular: "チームのプランに問題が発生しました"
                  },
                  "ko-KR": {
                    singular: "팀 요금제에 문제가 발생했습니다"
                  },
                  "pt-BR": {
                    singular: "Houve um problema com o plano da sua equipe"
                  },
                  "zh-CN": {
                    singular: "您的团队的计划出现了问题"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v29.ModalCloseButton, {
            position: "static"
          })]
        }), (0, _v1.jsx)(_v28.ModalBody, {
          px: "24px",
          pt: "12px",
          pb: "24px",
          children: (0, _v1.jsxs)(_v34.VStack, {
            gap: "16px",
            align: "stretch",
            children: [(0, _v1.jsx)(_v33.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v42.translate)({
                singular: "Some of the account owner's information needs to be updated. Some issues might arise if not resolved.",
                dictionary: {
                  es: {
                    singular: "Algunos datos del propietario de la cuenta deben actualizarse. Podrían surgir problemas si no se resuelve."
                  },
                  "de-DE": {
                    singular: "Einige Angaben des Kontoinhabers müssen aktualisiert werden. Wenn dies nicht behoben wird, können Probleme auftreten."
                  },
                  "fr-FR": {
                    singular: "Certaines informations du propriétaire du compte doivent être mises à jour. Des problèmes pourraient survenir si elles ne sont pas résolues."
                  },
                  "ja-JP": {
                    singular: "アカウント所有者の情報の一部を更新する必要があります。未解決のままにすると問題が発生する可能性があります。"
                  },
                  "ko-KR": {
                    singular: "계정 소유자의 일부 정보는 업데이트가 필요합니다. 해결하지 않으면 문제가 발생할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Algumas informações do titular da conta precisam ser atualizadas. Alguns problemas podem surgir se não forem resolvidos."
                  },
                  "zh-CN": {
                    singular: "账户所有者的部分信息需要更新。如未及时更新，可能会引发问题。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v22.Box, {
              p: "14px 16px",
              borderWidth: "1px",
              borderColor: "stroke",
              borderRadius: "12px",
              children: (0, _v1.jsxs)(_v34.VStack, {
                gap: "10px",
                align: "stretch",
                children: [(0, _v1.jsx)(_v33.Text, {
                  variant: "body-xs",
                  fontWeight: "500",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "text-tertiary",
                  children: (0, _v42.translate)({
                    singular: "Account owner",
                    dictionary: {
                      es: {
                        singular: "Propietario de la cuenta"
                      },
                      "de-DE": {
                        singular: "Kontoinhaber"
                      },
                      "fr-FR": {
                        singular: "Titulaire du compte"
                      },
                      "ja-JP": {
                        singular: "アカウント所有者"
                      },
                      "ko-KR": {
                        singular: "계정 소유자"
                      },
                      "pt-BR": {
                        singular: "Proprietário da conta"
                      },
                      "zh-CN": {
                        singular: "账户所有者"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v26.HStack, {
                  gap: "12px",
                  children: [(0, _v1.jsx)(_v48.Avatar, {
                    size: "sm",
                    alt: _v4,
                    nameProps: {
                      name: _v4
                    }
                  }), (0, _v1.jsx)(_v22.Box, {
                    minW: 0,
                    children: (0, _v1.jsx)(_v33.Text, {
                      variant: "heading-sm",
                      color: "text-primary",
                      children: _v4
                    })
                  })]
                }), (0, _v1.jsx)(_v22.Box, {
                  borderTopWidth: "1px",
                  borderStyle: "dashed",
                  borderColor: "stroke",
                  pt: "12px",
                  children: (0, _v1.jsx)(_v33.Text, {
                    variant: "body-sm",
                    color: "text-tertiary",
                    children: (0, _v42.translate)({
                      singular: "If unresolved in {DAYS} day, your team may lose access to some videos. Please contact the account owner to solve the issue.",
                      plural: "If unresolved in {DAYS} days, your team may lose access to some videos. Please contact the account owner to solve the issue.",
                      count: _v3,
                      replacements: {
                        DAYS: _v3
                      },
                      dictionary: {
                        es: {
                          singular: "Si no se resuelve en {DAYS} día, es posible que su equipo pierda acceso a algunos videos. Por favor, póngase en contacto con el propietario de la cuenta para solucionar el problema.",
                          plural: "Si no se resuelve en {DAYS} días, es posible que su equipo pierda acceso a algunos videos. Por favor, póngase en contacto con el propietario de la cuenta para solucionar el problema."
                        },
                        "de-DE": {
                          singular: "Wenn das Problem nicht innerhalb von {DAYS} Tag gelöst wird, könnte Ihr Team den Zugriff auf einige Videos verlieren. Bitte kontaktieren Sie den Kontoinhaber, um das Problem zu beheben.",
                          plural: "Wenn das Problem nicht innerhalb von {DAYS} Tagen gelöst wird, könnte Ihr Team den Zugriff auf einige Videos verlieren. Bitte kontaktieren Sie den Kontoinhaber, um das Problem zu beheben."
                        },
                        "fr-FR": {
                          singular: "Si cela n'est pas résolu dans {DAYS} jour, votre équipe pourrait perdre l'accès à certaines vidéos. Veuillez contacter le propriétaire du compte pour résoudre le problème.",
                          plural: "Si cela n'est pas résolu dans {DAYS} jours, votre équipe pourrait perdre l'accès à certaines vidéos. Veuillez contacter le propriétaire du compte pour résoudre le problème."
                        },
                        "ja-JP": {
                          singular: "{DAYS}日以内に解決されない場合、チームは一部の動画へのアクセスを失う可能性があります。問題を解決するためにアカウント所有者に連絡してください。",
                          plural: "{DAYS}日以内に解決されない場合、チームは一部の動画へのアクセスを失う可能性があります。問題を解決するためにアカウント所有者に連絡してください。"
                        },
                        "ko-KR": {
                          singular: "{DAYS}일 이내에 해결되지 않으면, 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다. 문제를 해결하려면 계정 소유자에게 문의하세요.",
                          plural: "{DAYS}일 이내에 해결되지 않으면, 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다. 문제를 해결하려면 계정 소유자에게 문의하세요."
                        },
                        "pt-BR": {
                          singular: "Se não for resolvido em {DAYS} dia, sua equipe pode perder acesso a alguns vídeos. Por favor, entre em contato com o titular da conta para resolver o problema.",
                          plural: "Se não for resolvido em {DAYS} dias, sua equipe pode perder acesso a alguns vídeos. Por favor, entre em contato com o titular da conta para resolver o problema."
                        },
                        "zh-CN": {
                          singular: "如果在 {DAYS} 天内未解决，您的团队可能会失去对部分视频的访问权限。请联系账户所有者以解决该问题。",
                          plural: "如果在 {DAYS} 天内未解决，您的团队可能会失去对部分视频的访问权限。请联系账户所有者以解决该问题。"
                        }
                      }
                    })
                  })
                })]
              })
            })]
          })
        })]
      })]
    }) : null;
  };
  var _v50 = _v0.i(0);
  let _v51 = ({
    analytics: _v0,
    variant: _v1,
    daysRemaining: _v2,
    videoTitle: _v3,
    playerWidth: _v4,
    onMemberLearnMore: _v5
  }) => {
    let _v6 = "admin" === _v1,
      _v7 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      _v7.current || (_v0.trackBannerDisplayed({
        variant: _v1,
        daysRemaining: _v2
      }), _v7.current = !0);
    }, [_v0, _v2, _v1]);
    let _v8 = (0, _v2.useCallback)(() => {
        _v0.trackBannerCtaClicked({
          variant: _v1,
          daysRemaining: _v2
        });
      }, [_v0, _v2, _v1]),
      _v9 = (0, _v2.useCallback)(() => {
        _v0.trackBannerCtaClicked({
          variant: _v1,
          daysRemaining: _v2
        }), _v5();
      }, [_v0, _v2, _v5, _v1]);
    return (0, _v1.jsxs)(_v25.Flex, {
      align: ["flex-start", "center"],
      justify: "space-between",
      direction: ["column", "row"],
      gap: "md",
      px: "16px",
      py: "12px",
      mb: void 0 !== _v4 ? "md" : void 0,
      width: "100%",
      maxWidth: void 0 !== _v4 ? (0, _v50.rem)(_v4) : void 0,
      borderRadius: "12px",
      bg: "status-caution-secondary",
      children: [(0, _v1.jsxs)(_v26.HStack, {
        gap: "10px",
        flex: "1",
        minW: 0,
        children: [(0, _v1.jsx)(_v25.Flex, {
          flexShrink: 0,
          align: "center",
          justify: "center",
          p: "6px",
          borderRadius: "full",
          bg: "status-caution-primary",
          color: "background",
          children: (0, _v1.jsx)(_v35.CircleExclamationFilled, {
            width: "20px",
            height: "20px"
          })
        }), (0, _v1.jsx)(_v33.Text, {
          variant: "body-md",
          fontWeight: "500",
          color: "orange.700",
          children: _v6 ? (0, _v42.translate)({
            singular: "Payment failed — “{TITLE}” goes offline in {DAYS} day. Update payment to keep it playing.",
            plural: "Payment failed — “{TITLE}” goes offline in {DAYS} days. Update payment to keep it playing.",
            count: _v2,
            replacements: {
              DAYS: _v2,
              TITLE: _v3
            },
            dictionary: {
              es: {
                singular: "Pago fallido — “{TITLE}” quedará sin conexión en {DAYS} día. Actualice el pago para que siga reproduciéndose.",
                plural: "Pago fallido — “{TITLE}” quedará sin conexión en {DAYS} días. Actualice el pago para que siga reproduciéndose."
              },
              "de-DE": {
                singular: "Zahlung fehlgeschlagen — “{TITLE}” geht in {DAYS} Tag offline. Aktualisieren Sie die Zahlung, damit es weiter abgespielt wird.",
                plural: "Zahlung fehlgeschlagen — “{TITLE}” geht in {DAYS} Tagen offline. Aktualisieren Sie die Zahlung, damit es weiter abgespielt wird."
              },
              "fr-FR": {
                singular: "Échec du paiement — “{TITLE}” sera hors ligne dans {DAYS} jour. Mettez à jour le paiement pour qu'il continue à être lu.",
                plural: "Échec du paiement — “{TITLE}” sera hors ligne dans {DAYS} jours. Mettez à jour le paiement pour qu'il continue à être lu."
              },
              "ja-JP": {
                singular: "支払いに失敗しました — “{TITLE}” は{DAYS}日後にオフラインになります。再生を維持するには支払いを更新してください。",
                plural: "支払いに失敗しました — “{TITLE}” は{DAYS}日後にオフラインになります。再生を維持するには支払いを更新してください。"
              },
              "ko-KR": {
                singular: "결제 실패 — “{TITLE}”이(가) {DAYS}일 후 오프라인이 됩니다. 재생을 유지하려면 결제 정보를 업데이트하세요.",
                plural: "결제 실패 — “{TITLE}”이(가) {DAYS}일 후 오프라인이 됩니다. 재생을 유지하려면 결제 정보를 업데이트하세요."
              },
              "pt-BR": {
                singular: "Falha no pagamento — “{TITLE}” ficará offline em {DAYS} dia. Atualize o pagamento para que ele continue sendo reproduzido.",
                plural: "Falha no pagamento — “{TITLE}” ficará offline em {DAYS} dias. Atualize o pagamento para que ele continue sendo reproduzido."
              },
              "zh-CN": {
                singular: "付款失败 — “{TITLE}” 将在 {DAYS} 天后下线。更新付款以保持播放。",
                plural: "付款失败 — “{TITLE}” 将在 {DAYS} 天后下线。更新付款以保持播放。"
              }
            }
          }) : (0, _v42.translate)({
            singular: "Your team's account needs attention - your team might lose access to some videos in {DAYS} day",
            plural: "Your team's account needs attention - your team might lose access to some videos in {DAYS} days",
            count: _v2,
            replacements: {
              DAYS: _v2
            },
            dictionary: {
              es: {
                singular: "La cuenta de su equipo necesita atención - su equipo podría perder acceso a algunos videos en {DAYS} día",
                plural: "La cuenta de su equipo necesita atención - su equipo podría perder acceso a algunos videos en {DAYS} días"
              },
              "de-DE": {
                singular: "Das Konto Ihres Teams benötigt Aufmerksamkeit - Ihr Team könnte in {DAYS} Tag den Zugriff auf einige Videos verlieren",
                plural: "Das Konto Ihres Teams benötigt Aufmerksamkeit - Ihr Team könnte in {DAYS} Tagen den Zugriff auf einige Videos verlieren"
              },
              "fr-FR": {
                singular: "Le compte de votre équipe nécessite une attention - votre équipe pourrait perdre l'accès à certaines vidéos dans {DAYS} jour",
                plural: "Le compte de votre équipe nécessite une attention - votre équipe pourrait perdre l'accès à certaines vidéos dans {DAYS} jours"
              },
              "ja-JP": {
                singular: "チームのアカウントに対応が必要です - {DAYS}日後にチームが一部の動画へのアクセスを失う可能性があります",
                plural: "チームのアカウントに対応が必要です - {DAYS}日後にチームが一部の動画へのアクセスを失う可能性があります"
              },
              "ko-KR": {
                singular: "팀 계정에 조치가 필요합니다 - {DAYS}일 내에 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다",
                plural: "팀 계정에 조치가 필요합니다 - {DAYS}일 내에 팀이 일부 동영상에 대한 접근 권한을 잃을 수 있습니다"
              },
              "pt-BR": {
                singular: "A conta da sua equipe precisa de atenção - sua equipe pode perder acesso a alguns vídeos em {DAYS} dia",
                plural: "A conta da sua equipe precisa de atenção - sua equipe pode perder acesso a alguns vídeos em {DAYS} dias"
              },
              "zh-CN": {
                singular: "您的团队账户需要关注 - 您的团队可能会在 {DAYS} 天内失去对部分视频的访问权限",
                plural: "您的团队账户需要关注 - 您的团队可能会在 {DAYS} 天内失去对部分视频的访问权限"
              }
            }
          })
        })]
      }), _v6 ? (0, _v1.jsx)(_v23.Button, {
        as: "a",
        href: "/checkout/payments/new",
        size: "sm",
        variant: "primary",
        width: ["100%", "auto"],
        flexShrink: 0,
        onClick: _v8,
        children: (0, _v42.translate)({
          singular: "Update payment",
          dictionary: {
            es: {
              singular: "Actualizar pago"
            },
            "de-DE": {
              singular: "Zahlung aktualisieren"
            },
            "fr-FR": {
              singular: "Mettre à jour le paiement"
            },
            "ja-JP": {
              singular: "支払いを更新"
            },
            "ko-KR": {
              singular: "결제 정보 업데이트"
            },
            "pt-BR": {
              singular: "Atualizar pagamento"
            },
            "zh-CN": {
              singular: "更新付款"
            }
          }
        })
      }) : (0, _v1.jsx)(_v23.Button, {
        size: "sm",
        variant: "primary",
        width: ["100%", "auto"],
        flexShrink: 0,
        onClick: _v9,
        children: (0, _v42.translate)({
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
        })
      })]
    });
  };
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = ["gracePeriodType", "endDate", "originalEndDate", "seatCount", "totalPriceForDisplay", "paymentMethod", "paymentMethod.lastFour", "paymentMethod.textType", "paymentMethod.type"],
    _v55 = ["gracePeriodType", "endDate", "originalEndDate", "totalPriceForDisplay", "paymentMethod", "paymentMethod.lastFour", "paymentMethod.textType", "paymentMethod.type"];
  _v0.s(["useGracePeriodBillingUi", 0, function (_v0) {
    var _v1;
    let _v2,
      _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10,
      _v11,
      {
        orionFlag: _v12,
        adminDismissStorageKey: _v13,
        billingOwnerUserId: _v14,
        layout: _v15
      } = _v0,
      {
        settings: _v16
      } = (0, _v15.useOrionSettings)(),
      _v17 = !!_v16[_v12],
      _v18 = (0, _v17.useViewer)(),
      _v19 = (0, _v3.getViewerBootstrap)(),
      _v20 = _v18?.user?.id ?? _v19?.user?.id,
      _v21 = _v18?.teamUser ?? _v19?.teamUser,
      _v22 = _v18?.teamUser?.plainTextPermissionLevel ?? _v19?.teamUser?.plainTextPermissionLevel,
      _v23 = _v18?.teamUser?.ownerId ?? _v19?.teamUser?.ownerId ?? _v20,
      _v24 = null != _v14 ? _v14 : _v23,
      _v25 = !!_v21 && (_v22 ? _v22 !== _v16.TeamUserPermissionLevel.Owner : null != _v24 && null != _v20 && _v24 !== _v20),
      _v26 = "watch" !== _v15.type || null != _v14 && (_v18?.user?.id === _v14 || _v25 && Number(_v23) === _v14),
      _v27 = _v17 && null != _v24 && _v26,
      _v28 = (_v1 = (0, _v2.useMemo)(() => "home" === _v15.type ? {
        scope: "home"
      } : {
        scope: "video",
        surface: "watch" === _v15.type ? "watch" : "manage"
      }, [_v15.type]), _v2 = (0, _v52.usePico)(), _v3 = (0, _v2.useCallback)(_v0 => ({
        variant: _v0.variant,
        days_remaining: _v0.daysRemaining
      }), []), _v4 = (0, _v2.useCallback)(_v0 => null !== _v2 && (_v2.track("grace_period_banner_displayed", _v3(_v0)), !0), [_v3, _v2]), _v5 = (0, _v2.useCallback)(_v0 => null !== _v2 && (_v2.track("grace_period_banner_cta_clicked", _v3(_v0)), !0), [_v3, _v2]), _v6 = {
        trackGracePeriodBannerDisplayed: _v4,
        trackGracePeriodBannerCtaClicked: _v5,
        trackGracePeriodModalDisplayed: (0, _v2.useCallback)(_v0 => null !== _v2 && (_v2.track("grace_period_modal_displayed", _v3(_v0)), !0), [_v3, _v2]),
        trackGracePeriodModalCtaClicked: (0, _v2.useCallback)(_v0 => null !== _v2 && (_v2.track("grace_period_modal_cta_clicked", _v3(_v0)), !0), [_v3, _v2]),
        trackGracePeriodModalDismissed: (0, _v2.useCallback)(_v0 => null !== _v2 && (_v2.track("grace_period_modal_dismissed", _v3(_v0)), !0), [_v3, _v2])
      }, _v7 = (0, _v52.usePico)(), _v8 = (0, _v2.useCallback)(_v0 => ({
        days_remaining: _v0.daysRemaining,
        surface: _v0.surface
      }), []), _v9 = (0, _v2.useCallback)(_v0 => null !== _v7 && (_v7.track("video_page_grace_period_banner_displayed", _v8(_v0)), !0), [_v8, _v7]), _v10 = (0, _v2.useCallback)(_v0 => null !== _v7 && (_v7.track("video_page_grace_period_banner_cta_clicked", _v8(_v0)), !0), [_v8, _v7]), _v11 = {
        trackVideoPageGracePeriodBannerDisplayed: _v9,
        trackVideoPageGracePeriodBannerCtaClicked: _v10,
        trackVideoPageGracePeriodModalDisplayed: (0, _v2.useCallback)(_v0 => null !== _v7 && (_v7.track("video_page_grace_period_modal_displayed", _v8(_v0)), !0), [_v8, _v7]),
        trackVideoPageGracePeriodModalCtaClicked: (0, _v2.useCallback)(_v0 => null !== _v7 && (_v7.track("video_page_grace_period_modal_cta_clicked", _v8(_v0)), !0), [_v8, _v7]),
        trackVideoPageGracePeriodModalDismissed: (0, _v2.useCallback)(_v0 => null !== _v7 && (_v7.track("video_page_grace_period_modal_dismissed", _v8(_v0)), !0), [_v8, _v7])
      }, (0, _v2.useMemo)(() => {
        if ("home" === _v1.scope) return {
          trackBannerDisplayed: _v0 => {
            _v6.trackGracePeriodBannerDisplayed(_v0);
          },
          trackBannerCtaClicked: _v0 => {
            _v6.trackGracePeriodBannerCtaClicked(_v0);
          },
          trackModalDisplayed: _v0 => {
            _v6.trackGracePeriodModalDisplayed(_v0);
          },
          trackModalCtaClicked: _v0 => {
            _v6.trackGracePeriodModalCtaClicked(_v0);
          },
          trackModalDismissed: _v0 => {
            _v6.trackGracePeriodModalDismissed(_v0);
          }
        };
        let _v0 = _v1.surface;
        return {
          trackBannerDisplayed: _v0 => {
            _v11.trackVideoPageGracePeriodBannerDisplayed({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          },
          trackBannerCtaClicked: _v0 => {
            _v11.trackVideoPageGracePeriodBannerCtaClicked({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          },
          trackModalDisplayed: _v0 => {
            _v11.trackVideoPageGracePeriodModalDisplayed({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          },
          trackModalCtaClicked: _v0 => {
            _v11.trackVideoPageGracePeriodModalCtaClicked({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          },
          trackModalDismissed: _v0 => {
            _v11.trackVideoPageGracePeriodModalDismissed({
              daysRemaining: _v0.daysRemaining,
              surface: _v0
            });
          }
        };
      }, [_v1, _v6, _v11])),
      _v29 = "home" === _v15.type ? _v54 : _v55,
      {
        data: _v30
      } = (0, _v5.useGetUserSettingsBillingMembership)(() => !_v27 || _v25 || null == _v24 ? null : {
        select: _v29,
        where: {
          userId: Number(_v24)
        }
      }),
      {
        data: _v31
      } = (0, _v4.useGetMePaymentMethods)(() => !_v27 || _v25 || !_v30?.gracePeriodType || _v30.paymentMethod ? null : {
        select: ["card.brand", "card.lastFourDigits", "isDefault", "type"],
        query: {
          showDisabled: !1
        }
      }),
      {
        data: _v32
      } = _v14(() => _v27 && _v25 && null != _v24 ? {
        select: ["gracePeriodType", "ownerName", "originalEndDate", "endDate", "uri"],
        where: {
          userId: Number(_v24)
        }
      } : null),
      _v33 = _v27 && (_v25 ? _v32?.gracePeriodType : _v30?.gracePeriodType) ? _v25 ? "member" : "admin" : null,
      {
        dismiss: _v34,
        isDismissed: _v35
      } = function ({
        cooldownMs: _v0,
        storageKey: _v1
      }) {
        let [_v2, _v3] = (0, _v2.useState)(() => function (_v0) {
          try {
            let _v0 = window.localStorage.getItem(_v0);
            if (!_v0) return null;
            let _v1 = Number(_v0);
            if (!Number.isFinite(_v1) || _v1 <= Date.now()) return window.localStorage.removeItem(_v0), null;
            return _v1;
          } catch {
            return null;
          }
        }(_v1));
        return (0, _v2.useEffect)(() => {
          if (!_v2) return;
          let _v0 = _v2 - Date.now(),
            _v1 = window.setTimeout(() => {
              try {
                window.localStorage.removeItem(_v1);
              } catch {}
              _v3(null);
            }, Math.max(_v0, 0));
          return () => window.clearTimeout(_v1);
        }, [_v2, _v1]), {
          dismiss: (0, _v2.useCallback)(() => {
            let _v0 = Date.now() + _v0;
            try {
              window.localStorage.setItem(_v1, String(_v0));
            } catch {}
            _v3(_v0);
          }, [_v0, _v1]),
          isDismissed: null !== _v2
        };
      }({
        storageKey: _v13,
        cooldownMs: 0
      }),
      [_v36, _v37] = (0, _v2.useState)(!1),
      _v38 = (0, _v2.useCallback)(() => {
        _v37(!0);
      }, []),
      _v39 = (0, _v2.useCallback)(() => {
        _v37(!1);
      }, []);
    (0, _v2.useEffect)(() => {
      "member" !== _v33 && _v37(!1);
    }, [_v33]);
    let _v40 = "home" === _v15.type ? void 0 : _v15.videoTitle,
      _v41 = "manage" === _v15.type ? _v15.playerWidth : void 0;
    if (!_v17 || !_v27 || null === _v33 || "home" !== _v15.type && !_v40) return {
      banner: null,
      modal: null
    };
    let _v42 = _v25 ? (0, _v53.getDisplayedGracePeriodEndDate)(_v32?.gracePeriodType, _v32?.originalEndDate, _v32?.endDate) : (0, _v53.getDisplayedGracePeriodEndDate)(_v30?.gracePeriodType, _v30?.originalEndDate, _v30?.endDate),
      _v43 = function (_v0) {
        if (!_v0) return 0;
        let _v1 = new Date(_v0).getTime();
        if (Number.isNaN(_v1)) return 0;
        let _v2 = Math.ceil((_v1 - Date.now()) / 0);
        return _v2 > 0 ? _v2 : 0;
      }(_v42);
    if ("member" === _v33) return _v32?.gracePeriodType && _v32?.ownerName ? "home" === _v15.type ? {
      banner: (0, _v1.jsx)(_v47, {
        analytics: _v28,
        variant: "member",
        daysRemaining: _v43,
        onAction: _v38
      }),
      modal: (0, _v1.jsx)(_v49, {
        analytics: _v28,
        isOpen: _v36,
        onClose: _v39,
        daysRemaining: _v43,
        ownerName: _v32.ownerName
      })
    } : {
      banner: (0, _v1.jsx)(_v51, {
        analytics: _v28,
        variant: "member",
        daysRemaining: _v43,
        videoTitle: _v40 ?? "",
        playerWidth: _v41,
        onMemberLearnMore: _v38
      }),
      modal: (0, _v1.jsx)(_v49, {
        analytics: _v28,
        isOpen: _v36,
        onClose: _v39,
        daysRemaining: _v43,
        ownerName: _v32.ownerName
      })
    } : {
      banner: null,
      modal: null
    };
    let _v44 = _v30?.paymentMethod,
      _v45 = _v31?.data.find(_v0 => _v0.isDefault) ?? _v31?.data[0],
      _v46 = _v44?.textType || (_v44?.type ? _v18[_v44.type] : "") || (_v45 ? _v45.card?.brand ? _v19[_v45.card.brand] ?? "Card" : _v45.type ? _v20[_v45.type] ?? "Card" : "Card" : ""),
      _v47 = _v44?.lastFour ?? _v45?.card?.lastFourDigits ?? "";
    return "home" === _v15.type ? {
      banner: (0, _v1.jsx)(_v47, {
        analytics: _v28,
        variant: "admin",
        daysRemaining: _v43,
        onAction: _v38
      }),
      modal: (0, _v1.jsx)(_v46, {
        layout: "home",
        analytics: _v28,
        isOpen: !_v35,
        onClose: _v34,
        daysRemaining: _v43,
        suspensionDate: _v21(_v42),
        lastFourDigits: _v47,
        cardBrand: _v46,
        amountDue: _v30?.totalPriceForDisplay ?? "",
        teamMemberCount: _v30?.seatCount ?? 1
      })
    } : {
      banner: (0, _v1.jsx)(_v51, {
        analytics: _v28,
        variant: "admin",
        daysRemaining: _v43,
        videoTitle: _v40 ?? "",
        playerWidth: _v41,
        onMemberLearnMore: _v38
      }),
      modal: (0, _v1.jsx)(_v46, {
        layout: "video",
        analytics: _v28,
        isOpen: !_v35,
        onClose: _v34,
        daysRemaining: _v43,
        suspensionDate: _v21(_v42),
        lastFourDigits: _v47,
        cardBrand: _v46,
        amountDue: _v30?.totalPriceForDisplay ?? "",
        videoTitle: _v40
      })
    };
  }], 0);
}