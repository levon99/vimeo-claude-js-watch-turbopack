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
    _v23 = _v0.i(0);
  _v0.s(["DowngradeFlowModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onSuccess: _v2,
    onError: _v3,
    membership: _v4,
    currentPlanName: _v5,
    currentTier: _v6,
    targetTier: _v7,
    targetPlanName: _v8,
    targetBillingPlanId: _v9
  }) => {
    let {
        baseUrl: _v10,
        jwt: _v11,
        xVimeoPage: _v12,
        locale: _v13
      } = (0, _v19.useGctlConfig)(),
      [_v14, _v15] = (0, _v2.useState)(!1),
      {
        trackUserScheduledDowngrade: _v16,
        trackDowngradeModalDowngradeClicked: _v17,
        trackDowngradeFailed: _v18
      } = (0, _v21.usePricingTracking)(),
      _v19 = _v4.billingPeriod === _v23.UserPlanType.Year ? "annual" : "monthly",
      _v20 = _v4.subscriptionId,
      _v21 = (0, _v2.useCallback)(async () => {
        if (_v17({
          currentPlan: _v4.tier ?? "",
          targetPlan: _v7,
          targetPeriodicity: _v19
        }), !_v4.hasAutorenew) {
          _v3?.((0, _v20.translate)({
            singular: "To change your plan, please turn auto-renew back on first.",
            dictionary: {
              es: {
                singular: "Para cambiar tu plan, primero vuelve a activar la renovación automática."
              },
              "de-DE": {
                singular: "Um Ihren Plan zu ändern, schalten Sie bitte zuerst die automatische Verlängerung wieder ein."
              },
              "fr-FR": {
                singular: "Pour modifier votre forfait, veuillez d'abord réactiver le renouvellement automatique."
              },
              "ja-JP": {
                singular: "プランを変更するには、まず自動更新を再度オンにしてください。"
              },
              "ko-KR": {
                singular: "요금제를 변경하려면 먼저 자동 갱신을 다시 켜 주세요."
              },
              "pt-BR": {
                singular: "Para alterar seu plano, por favor reative a renovação automática primeiro."
              },
              "zh-CN": {
                singular: "要更改您的订阅计划，请先重新开启自动续订。"
              }
            }
          })), _v1();
          return;
        }
        _v15(!0);
        try {
          await (0, _v18.putMeSubscriptionScheduledOrder)({
            where: {
              subscriptionId: _v20
            },
            variables: {
              billingPlanId: _v9
            },
            baseUrl: _v10,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v11 ? `jwt ${_v11}` : "",
              "Vimeo-Page": `${_v12}`,
              "Accept-Language": _v13 ?? "en"
            }
          }), _v16({
            currentPlan: _v4.tier ?? "",
            newPlan: _v7,
            newPeriodicity: _v19
          }), _v2?.(), _v1();
        } catch (_v0) {
          _v18({
            currentPlan: _v4.tier ?? "",
            targetPlan: _v7,
            targetPeriodicity: _v19,
            errorMessage: _v0 instanceof Error ? _v0.message : String(_v0)
          }), _v3?.(), _v1();
        } finally {
          _v15(!1);
        }
      }, [_v20, _v9, _v10, _v11, _v12, _v13, _v1, _v16, _v17, _v18, _v4.tier, _v4.hasAutorenew, _v7, _v19, _v2, _v3]),
      _v22 = [...(0, _v22.getLostFeatures)(_v6, _v7).slice(0, _v22.MAX_LOST_FEATURES), (0, _v20.translate)({
        singular: "...and much more",
        dictionary: {
          es: {
            singular: "...y mucho más"
          },
          "de-DE": {
            singular: "...und vieles mehr"
          },
          "fr-FR": {
            singular: "...et bien plus encore"
          },
          "ja-JP": {
            singular: "...ほかにも多数の機能"
          },
          "ko-KR": {
            singular: "...그리고 훨씬 더 많은 기능"
          },
          "pt-BR": {
            singular: "...e muito mais"
          },
          "zh-CN": {
            singular: "...还有更多"
          }
        }
      })],
      _v23 = _v22.length - 1;
    return (0, _v1.jsxs)(_v8.Modal, {
      isOpen: _v0,
      onClose: _v1,
      size: ["full", "md"],
      scrollBehavior: "inside",
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
        containerProps: {
          padding: {
            base: "0 !important"
          }
        },
        maxW: {
          base: "100vw",
          md: "560px"
        },
        width: {
          base: "100vw",
          md: "560px"
        },
        height: {
          base: "100dvh",
          md: "auto"
        },
        minH: {
          base: "100dvh",
          md: "auto"
        },
        maxH: {
          base: "100dvh",
          md: "90vh"
        },
        borderRadius: {
          base: "0",
          md: "16px"
        },
        margin: {
          base: "0",
          md: "auto"
        },
        children: [(0, _v1.jsx)(_v13.ModalHeader, {
          paddingRight: "64px",
          paddingBottom: "12px",
          children: (0, _v1.jsx)(_v7.Header, {
            size: "md",
            textAlign: "left",
            children: (0, _v20.translate)({
              singular: "Are you sure you want to downgrade?",
              dictionary: {
                es: {
                  singular: "¿Está seguro de que desea cambiar a un plan inferior?"
                },
                "de-DE": {
                  singular: "Sind Sie sicher, dass Sie ein Downgrade durchführen möchten?"
                },
                "fr-FR": {
                  singular: "Êtes-vous sûr de vouloir rétrograder ?"
                },
                "ja-JP": {
                  singular: "ダウングレードしてもよろしいですか？"
                },
                "ko-KR": {
                  singular: "정말로 다운그레이드하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Tem certeza de que deseja rebaixar?"
                },
                "zh-CN": {
                  singular: "您确定要降级吗？"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v10.ModalCloseButton, {
          top: "20px",
          right: "20px",
          onClick: _v1
        }), (0, _v1.jsx)(_v9.ModalBody, {
          paddingX: "0",
          paddingTop: "12px",
          overflowY: "auto",
          children: (0, _v1.jsx)(_v3.Box, {
            backgroundColor: "color-mix(in srgb, var(--vimeo-colors-status-destructive-primary) 10%, transparent)",
            paddingX: "24px",
            paddingY: "32px",
            children: (0, _v1.jsxs)(_v15.Stack, {
              spacing: "4",
              width: "100%",
              children: [(0, _v1.jsx)(_v16.Text, {
                variant: "heading-sm",
                children: (0, _v20.translate)({
                  singular: "At the end of the current billing cycle, you will lose access to",
                  dictionary: {
                    es: {
                      singular: "Al final del ciclo de facturación actual, perderás el acceso a"
                    },
                    "de-DE": {
                      singular: "Am Ende des laufenden Abrechnungszeitraums verlieren Sie den Zugriff auf"
                    },
                    "fr-FR": {
                      singular: "À la fin de la période de facturation en cours, vous perdrez l'accès à"
                    },
                    "ja-JP": {
                      singular: "現在の請求期間の終了時に、以下へのアクセスを失います"
                    },
                    "ko-KR": {
                      singular: "현재 청구 주기 종료 시 다음 항목에 대한 접근 권한을 잃게 됩니다"
                    },
                    "pt-BR": {
                      singular: "Ao final do ciclo de cobrança atual, você perderá acesso a"
                    },
                    "zh-CN": {
                      singular: "在当前计费周期结束时，您将失去对以下内容的访问权限"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v6.Grid, {
                gridTemplateColumns: {
                  base: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 1fr))"
                },
                columnGap: "4",
                rowGap: "2",
                width: "100%",
                children: _v22.map((_v0, _v1) => {
                  let _v2 = _v1 === _v23;
                  return (0, _v1.jsxs)(_v5.Flex, {
                    gap: "2",
                    align: "flex-start",
                    children: [!_v2 && (0, _v1.jsx)(_v17.CloseXCircleFilled, {
                      boxSize: "14px",
                      color: "status-destructive-primary",
                      marginTop: "2px"
                    }), (0, _v1.jsx)(_v16.Text, {
                      variant: "heading-xs",
                      color: _v2 ? "status-destructive-primary" : void 0,
                      children: _v0
                    })]
                  }, `feature-${_v1}-${_v0}`);
                })
              })]
            })
          })
        }), (0, _v1.jsx)(_v12.ModalFooter, {
          paddingTop: "20px",
          paddingBottom: "24px",
          children: (0, _v1.jsxs)(_v15.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v4.Button, {
              onClick: _v1,
              size: "md",
              variant: "primary",
              width: "100%",
              children: (0, _v20.translate)({
                singular: "Keep {PLAN} plan",
                replacements: {
                  PLAN: _v5
                },
                dictionary: {
                  es: {
                    singular: "Mantener el plan {PLAN}"
                  },
                  "de-DE": {
                    singular: "Beim {PLAN}-Plan bleiben"
                  },
                  "fr-FR": {
                    singular: "Conserver le forfait {PLAN}"
                  },
                  "ja-JP": {
                    singular: "{PLAN} プランを維持"
                  },
                  "ko-KR": {
                    singular: "{PLAN} 플랜 유지"
                  },
                  "pt-BR": {
                    singular: "Manter o plano {PLAN}"
                  },
                  "zh-CN": {
                    singular: "保留 {PLAN} 计划"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              onClick: _v21,
              size: "md",
              variant: "destructive",
              width: "100%",
              isLoading: _v14,
              disabled: _v14,
              children: (0, _v20.translate)({
                singular: "Downgrade to {PLAN} plan",
                replacements: {
                  PLAN: _v8
                },
                dictionary: {
                  es: {
                    singular: "Cambiar al plan {PLAN}"
                  },
                  "de-DE": {
                    singular: "Downgrade auf den {PLAN}-Plan"
                  },
                  "fr-FR": {
                    singular: "Rétrograder vers le forfait {PLAN}"
                  },
                  "ja-JP": {
                    singular: "{PLAN} プランにダウングレード"
                  },
                  "ko-KR": {
                    singular: "{PLAN} 플랜으로 다운그레이드"
                  },
                  "pt-BR": {
                    singular: "Rebaixar para o plano {PLAN}"
                  },
                  "zh-CN": {
                    singular: "降级到 {PLAN} 计划"
                  }
                }
              })
            })]
          })
        })]
      })]
    });
  }]);
}