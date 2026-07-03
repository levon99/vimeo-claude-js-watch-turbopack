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
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = {
      amex: _v16.AmexNegative,
      discover: _v17.DiscoverNegative,
      mastercard: _v18.MastercardNegative,
      paypal: _v19.PaypalNegative,
      visa: _v20.VisaNegative
    },
    _v28 = ({
      cardBrand: _v0
    }) => {
      let _v1 = _v27[_v0.toLowerCase().replace(/[^a-z]/g, "")] || _v15.CreditCard;
      return (0, _v1.jsx)(_v5.Center, {
        minW: "32px",
        h: "24px",
        color: "text-primary",
        children: (0, _v1.jsx)(_v1, {
          width: "32px",
          height: "20px"
        })
      });
    },
    _v29 = ({
      label: _v0
    }) => (0, _v1.jsxs)(_v6.HStack, {
      gap: "8px",
      align: "flex-start",
      children: [(0, _v1.jsx)(_v12.Text, {
        color: "text-primary",
        fontSize: "13px",
        lineHeight: "1.5",
        flexShrink: 0,
        children: "•"
      }), (0, _v1.jsx)(_v12.Text, {
        variant: "heading-xs",
        color: "text-primary",
        children: _v0
      })]
    });
  _v0.s(["AutoRenewRetentionModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onAutoRenewEnabled: _v2,
    onError: _v3,
    subscriptionId: _v4,
    currentPlanName: _v5,
    currentTier: _v6,
    targetTier: _v7,
    endDate: _v8
  }) => {
    let {
        baseUrl: _v9,
        jwt: _v10,
        xVimeoPage: _v11,
        locale: _v12
      } = (0, _v22.useGctlConfig)(),
      [_v13, _v14] = (0, _v2.useState)(!1),
      {
        data: _v15
      } = (0, _v23.useGetMePaymentMethods)(() => _v0 ? {
        select: ["id", "card.brand", "card.lastFourDigits", "type", "isDefault"],
        query: {
          perPage: 1
        }
      } : null),
      _v16 = _v15?.data?.[0],
      _v17 = _v16?.id,
      _v18 = _v16?.card?.lastFourDigits,
      _v19 = (0, _v26.getPaymentsServiceCardBrandLabel)(_v16),
      _v20 = (0, _v25.getLostFeatures)(_v6, _v7).slice(0, 3),
      _v21 = (0, _v26.daysUntil)(_v8),
      _v22 = (0, _v26.formatSuspensionDate)(_v8),
      _v23 = "u" > typeof navigator && navigator.language || _v12 || "en-US",
      _v24 = _v8 ? new Date(_v8).toLocaleDateString(_v23, {
        month: "long",
        day: "numeric",
        timeZone: "UTC"
      }) : "",
      _v25 = (0, _v2.useCallback)(async () => {
        _v14(!0);
        try {
          await (0, _v21.patchMeSubscription)({
            select: [],
            where: {
              subscriptionId: _v4
            },
            variables: {
              autoRenew: !0,
              paymentMethodId: _v17
            },
            baseUrl: _v9,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v10 ? `jwt ${_v10}` : "",
              "Vimeo-Page": `${_v11}`,
              "Accept-Language": _v12 ?? "en"
            }
          }), _v2();
        } catch {
          _v3?.();
        } finally {
          _v14(!1);
        }
      }, [_v4, _v17, _v9, _v10, _v11, _v12, _v2, _v3]);
    return _v0 ? (0, _v1.jsxs)(_v7.Modal, {
      isOpen: !0,
      onClose: _v1,
      size: ["full", "md"],
      scrollBehavior: "outside",
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
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
        children: [(0, _v1.jsxs)(_v3.Box, {
          px: "24px",
          pt: "24px",
          pb: "8px",
          children: [(0, _v1.jsx)(_v12.Text, {
            variant: "heading-md",
            children: (0, _v24.translate)({
              singular: "Turn auto-renew on to keep your access",
              dictionary: {
                es: {
                  singular: "Activa la renovación automática para mantener tu acceso"
                },
                "de-DE": {
                  singular: "Schalten Sie die automatische Verlängerung ein, um Ihren Zugriff zu behalten"
                },
                "fr-FR": {
                  singular: "Activez le renouvellement automatique pour conserver votre accès"
                },
                "ja-JP": {
                  singular: "アクセスを維持するには自動更新をオンにしてください"
                },
                "ko-KR": {
                  singular: "이용을 계속하려면 자동 갱신을 켜세요"
                },
                "pt-BR": {
                  singular: "Ative a renovação automática para manter seu acesso"
                },
                "zh-CN": {
                  singular: "开启自动续订以保持访问权限"
                }
              }
            })
          }), (0, _v1.jsx)(_v12.Text, {
            variant: "body-md",
            color: "text-secondary",
            mt: "4px",
            children: (0, _v24.translate)({
              singular: "Your {PLAN} plan ends {DATE} — one tap keeps it running.",
              replacements: {
                PLAN: _v5,
                DATE: _v24
              },
              dictionary: {
                es: {
                  singular: "Tu plan {PLAN} termina {DATE} — un toque lo mantiene activo."
                },
                "de-DE": {
                  singular: "Ihr {PLAN}-Plan endet am {DATE} — mit einem Tipp bleibt er aktiv."
                },
                "fr-FR": {
                  singular: "Votre forfait {PLAN} se termine le {DATE} — un simple appui suffit pour le maintenir actif."
                },
                "ja-JP": {
                  singular: "お使いの{PLAN}プランは{DATE}に終了します — ワンタップで継続できます."
                },
                "ko-KR": {
                  singular: "귀하의 {PLAN} 요금제는 {DATE}에 종료됩니다 — 탭 한 번으로 계속 이용할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Seu plano {PLAN} termina {DATE} — um toque o mantém ativo."
                },
                "zh-CN": {
                  singular: "您的{PLAN}计划将于{DATE}到期 — 轻触一次即可继续使用."
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v8.ModalBody, {
          px: "24px",
          pt: "20px",
          pb: "8px",
          children: (0, _v1.jsxs)(_v13.VStack, {
            gap: "16px",
            align: "stretch",
            children: [(0, _v1.jsxs)(_v6.HStack, {
              gap: "10px",
              px: "16px",
              py: "12px",
              bg: "status-caution-secondary",
              borderRadius: "12px",
              children: [(0, _v1.jsx)(_v5.Center, {
                flexShrink: 0,
                p: "8px",
                borderRadius: "full",
                bg: "status-caution-primary",
                color: "background",
                children: (0, _v1.jsx)(_v14.CircleExclamationFilled, {
                  width: "24px",
                  height: "24px"
                })
              }), (0, _v1.jsxs)(_v3.Box, {
                flex: "1",
                minW: 0,
                children: [(0, _v1.jsx)(_v12.Text, {
                  variant: "heading-sm",
                  color: "text-primary",
                  children: (0, _v24.translate)({
                    singular: "{DAYS} day until you lose access",
                    plural: "{DAYS} days until you lose access",
                    count: _v21,
                    replacements: {
                      DAYS: _v21
                    },
                    dictionary: {
                      es: {
                        singular: "{DAYS} día hasta que pierdas el acceso",
                        plural: "{DAYS} días hasta que pierdas el acceso"
                      },
                      "de-DE": {
                        singular: "{DAYS} Tag bis zum Verlust des Zugriffs",
                        plural: "{DAYS} Tage bis zum Verlust des Zugriffs"
                      },
                      "fr-FR": {
                        singular: "{DAYS} jour avant de perdre l'accès",
                        plural: "{DAYS} jours avant de perdre l'accès"
                      },
                      "ja-JP": {
                        singular: "{DAYS}日でアクセスを失います",
                        plural: "{DAYS}日でアクセスを失います"
                      },
                      "ko-KR": {
                        singular: "{DAYS}일 후에 이용 권한이 종료됩니다",
                        plural: "{DAYS}일 후에 이용 권한이 종료됩니다"
                      },
                      "pt-BR": {
                        singular: "{DAYS} dia até perder o acesso",
                        plural: "{DAYS} dias até perder o acesso"
                      },
                      "zh-CN": {
                        singular: "{DAYS} 天后您将失去访问权限",
                        plural: "{DAYS} 天后您将失去访问权限"
                      }
                    }
                  })
                }), _v22 && (0, _v1.jsx)(_v12.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  mt: "2px",
                  children: _v22
                })]
              })]
            }), _v20.length > 0 && (0, _v1.jsxs)(_v13.VStack, {
              gap: "8px",
              align: "stretch",
              children: [(0, _v1.jsx)(_v12.Text, {
                variant: "heading-xs",
                color: "text-primary",
                children: (0, _v24.translate)({
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
              }), _v20.map(_v0 => (0, _v1.jsx)(_v29, {
                label: _v0
              }, _v0))]
            }), _v18 && (0, _v1.jsxs)(_v6.HStack, {
              justifyContent: "space-between",
              px: "12px",
              py: "10px",
              bg: "fill-component",
              borderRadius: "8px",
              children: [(0, _v1.jsxs)(_v6.HStack, {
                gap: "8px",
                children: [(0, _v1.jsx)(_v28, {
                  cardBrand: _v19
                }), (0, _v1.jsxs)(_v12.Text, {
                  variant: "body-md",
                  color: "text-tertiary",
                  children: [_v19, " ••••", _v18]
                })]
              }), (0, _v1.jsx)(_v5.Center, {
                bg: "status-caution-primary",
                px: "6px",
                py: "2px",
                borderRadius: "4px",
                children: (0, _v1.jsx)(_v12.Text, {
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "text-button-inverted",
                  whiteSpace: "nowrap",
                  children: (0, _v24.translate)({
                    singular: "Auto-renew off",
                    dictionary: {
                      es: {
                        singular: "Renovación automática desactivada"
                      },
                      "de-DE": {
                        singular: "Automatische Verlängerung deaktiviert"
                      },
                      "fr-FR": {
                        singular: "Renouvellement automatique désactivé"
                      },
                      "ja-JP": {
                        singular: "自動更新オフ"
                      },
                      "ko-KR": {
                        singular: "자동 갱신 꺼짐"
                      },
                      "pt-BR": {
                        singular: "Renovação automática desativada"
                      },
                      "zh-CN": {
                        singular: "自动续订已关闭"
                      }
                    }
                  })
                })
              })]
            })]
          })
        }), (0, _v1.jsx)(_v10.ModalFooter, {
          px: "24px",
          pt: "20px",
          pb: "24px",
          children: (0, _v1.jsxs)(_v6.HStack, {
            width: "100%",
            justifyContent: "flex-end",
            gap: "12px",
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "destructive",
              size: "md",
              onClick: _v1,
              isDisabled: _v13,
              children: (0, _v24.translate)({
                singular: "Let it expire",
                dictionary: {
                  es: {
                    singular: "Dejar que caduque"
                  },
                  "de-DE": {
                    singular: "Ablaufen lassen"
                  },
                  "fr-FR": {
                    singular: "Laisser expirer"
                  },
                  "ja-JP": {
                    singular: "期限切れにする"
                  },
                  "ko-KR": {
                    singular: "만료되도록 두기"
                  },
                  "pt-BR": {
                    singular: "Deixar expirar"
                  },
                  "zh-CN": {
                    singular: "让其到期"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              onClick: _v25,
              isLoading: _v13,
              children: (0, _v24.translate)({
                singular: "Enable auto-renew",
                dictionary: {
                  es: {
                    singular: "Habilitar la renovación automática"
                  },
                  "de-DE": {
                    singular: "Automatische Verlängerung aktivieren"
                  },
                  "fr-FR": {
                    singular: "Activer le renouvellement automatique"
                  },
                  "ja-JP": {
                    singular: "自動更新を有効にする"
                  },
                  "ko-KR": {
                    singular: "자동 갱신 활성화"
                  },
                  "pt-BR": {
                    singular: "Ativar renovação automática"
                  },
                  "zh-CN": {
                    singular: "启用自动续订"
                  }
                }
              })
            })]
          })
        })]
      })]
    }) : null;
  }]);
}