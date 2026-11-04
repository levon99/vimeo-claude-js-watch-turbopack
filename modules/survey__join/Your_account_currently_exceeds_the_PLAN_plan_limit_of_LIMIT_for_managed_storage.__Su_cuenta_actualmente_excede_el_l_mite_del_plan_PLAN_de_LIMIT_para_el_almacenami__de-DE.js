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
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = ({
    planName: _v0,
    storageLimitLabel: _v1,
    warningData: _v2,
    videosHref: _v3
  }) => {
    let _v4 = Math.max(_v2.frozenVideosCount, _v2.frozenVideosPreview.length),
      _v5 = Math.max(_v2.frozenFilesCount, _v2.frozenFilesPreview.length),
      _v6 = _v4 > 0,
      _v7 = _v5 > 0,
      _v8 = null !== _v2.storageLimitBytes ? _v2.storageUsedBytes > _v2.storageLimitBytes : _v6 || _v7;
    if (!_v8 && !_v6 && !_v7) return null;
    let _v9 = (0, _v1.jsxs)(_v1.Fragment, {
      children: ["" !== _v1 ? (0, _v23.translate)({
        singular: "Your account currently exceeds the {PLAN} plan limit of {LIMIT} for managed storage.",
        replacements: {
          PLAN: _v0,
          LIMIT: _v1
        },
        dictionary: {
          es: {
            singular: "Su cuenta actualmente excede el límite del plan {PLAN} de {LIMIT} para el almacenamiento gestionado."
          },
          "de-DE": {
            singular: "Ihr Konto überschreitet derzeit das {PLAN}-Limit von {LIMIT} für verwalteten Speicher."
          },
          "fr-FR": {
            singular: "Votre compte dépasse actuellement la limite de {LIMIT} de stockage géré du forfait {PLAN}."
          },
          "ja-JP": {
            singular: "お客様のアカウントは現在、管理ストレージの{PLAN}プランの上限である{LIMIT}を超えています."
          },
          "ko-KR": {
            singular: "귀하의 계정은 현재 관리형 저장소의 {PLAN} 요금제 한도인 {LIMIT}을 초과하고 있습니다."
          },
          "pt-BR": {
            singular: "Sua conta atualmente excede o limite de {LIMIT} do plano {PLAN} para armazenamento gerenciado."
          },
          "zh-CN": {
            singular: "您的账户当前在托管存储方面已超过 {PLAN} 计划的 {LIMIT} 限额."
          }
        }
      }) : (0, _v23.translate)({
        singular: "Your account currently exceeds the {PLAN} plan limit for managed storage.",
        replacements: {
          PLAN: _v0
        },
        dictionary: {
          es: {
            singular: "Su cuenta actualmente excede el límite de almacenamiento gestionado del plan {PLAN}."
          },
          "de-DE": {
            singular: "Ihr Konto überschreitet derzeit das für den {PLAN}-Tarif geltende Limit für verwalteten Speicher."
          },
          "fr-FR": {
            singular: "Votre compte dépasse actuellement la limite du plan {PLAN} pour le stockage géré."
          },
          "ja-JP": {
            singular: "お客様のアカウントは現在、{PLAN}プランの管理済みストレージの上限を超えています。"
          },
          "ko-KR": {
            singular: "귀하의 계정은 현재 {PLAN} 요금제의 관리형 스토리지 한도를 초과했습니다."
          },
          "pt-BR": {
            singular: "Sua conta atualmente excede o limite do plano {PLAN} para armazenamento gerenciado."
          },
          "zh-CN": {
            singular: "您的账户当前已超出 {PLAN} 计划的托管存储限制."
          }
        }
      }), " ", (0, _v1.jsx)(_v16.Text, {
        as: "span",
        fontFamily: "heading",
        color: "text-secondary",
        children: (0, _v23.translate)({
          singular: "Some videos may no longer be accessible upon downgrade.",
          dictionary: {
            es: {
              singular: "Al degradar el plan, algunos videos podrían dejar de ser accesibles."
            },
            "de-DE": {
              singular: "Bei einer Herabstufung sind einige Videos möglicherweise nicht mehr zugänglich."
            },
            "fr-FR": {
              singular: "Certaines vidéos peuvent ne plus être accessibles en cas de rétrogradation."
            },
            "ja-JP": {
              singular: "ダウングレードすると、一部の動画にアクセスできなくなる可能性があります."
            },
            "ko-KR": {
              singular: "다운그레이드 시 일부 동영상에 더 이상 접근할 수 없게 될 수 있습니다."
            },
            "pt-BR": {
              singular: "Alguns vídeos podem não estar mais acessíveis após o rebaixamento."
            },
            "zh-CN": {
              singular: "降级后，某些视频可能无法再访问."
            }
          }
        })
      })]
    });
    return (0, _v1.jsxs)(_v3.Box, {
      backgroundColor: "color-mix(in srgb, var(--vimeo-colors-status-caution-primary) 10%, transparent)",
      paddingX: "24px",
      paddingY: "24px",
      position: "relative",
      overflow: "visible",
      children: [(0, _v1.jsx)(_v29.Badge, {
        variant: "warning",
        size: "sm",
        position: "absolute",
        top: "-12px",
        right: "24px",
        children: (0, _v23.translate)({
          singular: "Warning",
          dictionary: {
            es: {
              singular: "Advertencia"
            },
            "de-DE": {
              singular: "Warnung"
            },
            "fr-FR": {
              singular: "Attention"
            },
            "ja-JP": {
              singular: "警告"
            },
            "ko-KR": {
              singular: "경고"
            },
            "pt-BR": {
              singular: "Aviso"
            },
            "zh-CN": {
              singular: "警告"
            }
          }
        })
      }), (0, _v1.jsxs)(_v15.Stack, {
        spacing: "8",
        children: [_v6 && (0, _v1.jsx)(_v33.VideoPreviewWarning, {
          count: _v4,
          title: (0, _v23.translate)({
            singular: "Some videos may no longer be available",
            dictionary: {
              es: {
                singular: "Algunos videos podrían dejar de estar disponibles"
              },
              "de-DE": {
                singular: "Einige Videos sind möglicherweise nicht mehr verfügbar"
              },
              "fr-FR": {
                singular: "Certaines vidéos peuvent ne plus être disponibles"
              },
              "ja-JP": {
                singular: "一部の動画が利用できなくなる場合があります"
              },
              "ko-KR": {
                singular: "일부 동영상은 더 이상 이용할 수 없게 될 수 있습니다"
              },
              "pt-BR": {
                singular: "Alguns vídeos podem não estar mais disponíveis"
              },
              "zh-CN": {
                singular: "某些视频可能不再可用"
              }
            }
          }),
          description: _v9,
          videos: _v2.frozenVideosPreview
        }), _v7 && (0, _v1.jsx)(_v32.FrozenFilesWarning, {
          frozenFilesCount: _v5,
          storageLimitBytes: _v2.storageLimitBytes,
          files: _v2.frozenFilesPreview,
          targetPlanName: _v0
        }), _v8 && !_v6 && !_v7 && (0, _v1.jsxs)(_v5.Flex, {
          gap: "3",
          align: "flex-start",
          children: [(0, _v1.jsx)(_v31.CircleExclamationFilled, {
            boxSize: "24px",
            color: "status-caution-primary"
          }), (0, _v1.jsxs)(_v15.Stack, {
            spacing: "1",
            children: [(0, _v1.jsx)(_v16.Text, {
              variant: "heading-sm",
              children: (0, _v23.translate)({
                singular: "Some videos may no longer be available",
                dictionary: {
                  es: {
                    singular: "Algunos videos podrían dejar de estar disponibles"
                  },
                  "de-DE": {
                    singular: "Einige Videos sind möglicherweise nicht mehr verfügbar"
                  },
                  "fr-FR": {
                    singular: "Certaines vidéos peuvent ne plus être disponibles"
                  },
                  "ja-JP": {
                    singular: "一部の動画が利用できなくなる場合があります"
                  },
                  "ko-KR": {
                    singular: "일부 동영상은 더 이상 이용할 수 없게 될 수 있습니다"
                  },
                  "pt-BR": {
                    singular: "Alguns vídeos podem não estar mais disponíveis"
                  },
                  "zh-CN": {
                    singular: "某些视频可能不再可用"
                  }
                }
              })
            }), (0, _v1.jsx)(_v16.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v9
            })]
          })]
        })]
      }), (0, _v1.jsx)(_v3.Box, {
        paddingLeft: "9",
        marginTop: "3",
        children: (0, _v1.jsx)(_v30.Link, {
          href: _v3,
          variant: "inline-secondary",
          textDecoration: "underline",
          children: (0, _v23.translate)({
            singular: "Review your videos",
            dictionary: {
              es: {
                singular: "Revisar sus videos"
              },
              "de-DE": {
                singular: "Überprüfen Sie Ihre Videos"
              },
              "fr-FR": {
                singular: "Consultez vos vidéos"
              },
              "ja-JP": {
                singular: "動画を確認する"
              },
              "ko-KR": {
                singular: "동영상 검토"
              },
              "pt-BR": {
                singular: "Reveja seus vídeos"
              },
              "zh-CN": {
                singular: "查看您的视频"
              }
            }
          })
        })
      })]
    });
  };
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  _v0.s(["DowngradeFlowModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onSuccess: _v2,
    onError: _v3,
    membership: _v4,
    currentPlanName: _v5,
    currentTier: _v6,
    currentManagedStorage: _v7,
    targetTier: _v8,
    targetPlanName: _v9,
    targetBillingPlanId: _v10,
    targetPlanData: _v11,
    planChangeKind: _v12 = "downgrade",
    surface: _v13
  }) => {
    let {
        baseUrl: _v14,
        jwt: _v15,
        xVimeoPage: _v16,
        locale: _v17
      } = (0, _v21.useGctlConfig)(),
      [_v18, _v19] = (0, _v2.useState)(!1),
      [_v20, _v21] = (0, _v2.useState)("loss"),
      _v22 = (0, _v2.useRef)(null),
      {
        trackUserScheduledDowngrade: _v23,
        trackDowngradeModalDowngradeClicked: _v24,
        trackDowngradeModalStepViewed: _v25,
        trackDowngradeModalContinued: _v26,
        trackDowngradeFailed: _v27
      } = (0, _v24.usePricingTracking)(),
      _v28 = _v4.billingPeriod === _v35.UserPlanType.Year ? "annual" : "monthly",
      _v29 = _v4.subscriptionId,
      _v30 = !!_v4.gracePeriodType,
      _v31 = (0, _v36.formatRenewalDate)(_v4.renewalDate, _v17 ?? "en"),
      _v32 = (0, _v25.useViewer)(),
      _v33 = _v32?.teamUser?.ownerId ?? _v32?.user?.id,
      {
        data: _v34
      } = (0, _v22.useGetUserSettingsBillingCancellationWarning)(() => _v0 && null != _v33 ? {
        where: {
          userId: _v33
        },
        select: ["storageUsedBytes", "storageLimitBytes", "frozenVideosCount", "frozenVideosPreview", "frozenFilesCount", "frozenFilesPreview", "unlistedVideosCount", "unlistedVideosPreview"],
        ...("" !== _v10 ? {
          query: {
            targetBillingPlanId: _v10
          }
        } : {})
      } : null);
    (0, _v2.useEffect)(() => {
      if (!_v0) {
        _v22.current = null;
        return;
      }
      _v22.current !== _v20 && (_v22.current = _v20, _v25({
        step: _v20,
        currentPlan: _v4.tier ?? "",
        targetPlan: _v8,
        targetPeriodicity: _v28,
        surface: _v13
      }));
    }, [_v0, _v20, _v25, _v4.tier, _v8, _v28, _v13]);
    let _v35 = (0, _v2.useCallback)(() => {
        _v21("loss"), _v1();
      }, [_v1]),
      _v36 = (0, _v2.useCallback)(() => {
        _v26({
          currentPlan: _v4.tier ?? "",
          targetPlan: _v8,
          targetPeriodicity: _v28,
          surface: _v13
        }), _v21("confirm");
      }, [_v26, _v4.tier, _v8, _v28, _v13]),
      _v37 = (0, _v2.useCallback)(async () => {
        if (_v24({
          currentPlan: _v4.tier ?? "",
          targetPlan: _v8,
          targetPeriodicity: _v28
        }), !_v30 && !_v4.hasAutorenew) {
          _v3?.((0, _v23.translate)({
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
          })), _v35();
          return;
        }
        if (!_v29) {
          _v3?.(), _v35();
          return;
        }
        _v19(!0);
        try {
          _v30 ? await (0, _v19.postMeOrdersSubscription)({
            select: [],
            where: {
              subscriptionId: _v29
            },
            variables: {
              billingPlanId: _v10,
              type: "downgrade"
            },
            baseUrl: _v14,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v15 ? `jwt ${_v15}` : "",
              "Vimeo-Page": `${_v16}`,
              "Accept-Language": _v17 ?? "en"
            }
          }) : await (0, _v20.putMeSubscriptionScheduledOrder)({
            where: {
              subscriptionId: _v29
            },
            variables: {
              billingPlanId: _v10
            },
            baseUrl: _v14,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v15 ? `jwt ${_v15}` : "",
              "Vimeo-Page": `${_v16}`,
              "Accept-Language": _v17 ?? "en"
            }
          }), _v23({
            currentPlan: _v4.tier ?? "",
            newPlan: _v8,
            newPeriodicity: _v28
          }), _v2?.({
            isImmediate: _v30
          }), _v35();
        } catch (_v0) {
          _v27({
            currentPlan: _v4.tier ?? "",
            targetPlan: _v8,
            targetPeriodicity: _v28,
            errorMessage: _v0 instanceof Error ? _v0.message : String(_v0)
          }), _v3?.(), _v35();
        } finally {
          _v19(!1);
        }
      }, [_v29, _v10, _v14, _v15, _v16, _v17, _v35, _v23, _v24, _v27, _v4.tier, _v4.hasAutorenew, _v30, _v8, _v28, _v2, _v3]),
      _v38 = [...(0, _v28.getLostFeatures)(_v6, _v8, {
        currentManagedStorage: _v7
      }).slice(0, _v28.MAX_LOST_FEATURES), (0, _v23.translate)({
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
      _v39 = _v38.length - 1,
      _v40 = "move" === _v12 ? (0, _v23.translate)({
        singular: "Move to {PLAN}",
        replacements: {
          PLAN: _v9
        },
        dictionary: {
          es: {
            singular: "Cambiar a {PLAN}"
          },
          "de-DE": {
            singular: "Zu {PLAN} wechseln"
          },
          "fr-FR": {
            singular: "Passer au forfait {PLAN}"
          },
          "ja-JP": {
            singular: "{PLAN}に移行する"
          },
          "ko-KR": {
            singular: "{PLAN}로 이동"
          },
          "pt-BR": {
            singular: "Mudar para {PLAN}"
          },
          "zh-CN": {
            singular: "切换到 {PLAN}"
          }
        }
      }) : (0, _v23.translate)({
        singular: "Downgrade to {PLAN}",
        replacements: {
          PLAN: _v9
        },
        dictionary: {
          es: {
            singular: "Cambiar a {PLAN}"
          },
          "de-DE": {
            singular: "Auf {PLAN} herabstufen"
          },
          "fr-FR": {
            singular: "Rétrograder vers {PLAN}"
          },
          "ja-JP": {
            singular: "{PLAN}にダウングレード"
          },
          "ko-KR": {
            singular: "{PLAN}으로 다운그레이드"
          },
          "pt-BR": {
            singular: "Rebaixar para {PLAN}"
          },
          "zh-CN": {
            singular: "降级到 {PLAN}"
          }
        }
      });
    return (0, _v1.jsxs)(_v8.Modal, {
      isOpen: _v0,
      onClose: _v35,
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
          paddingLeft: {
            base: "12",
            md: (0, _v17.rem)(60)
          },
          paddingRight: "64px",
          paddingBottom: "12px",
          children: (0, _v1.jsx)(_v7.Header, {
            size: "md",
            textAlign: "left",
            children: "move" === _v12 ? (0, _v23.translate)({
              singular: "Are you sure you want to move to {PLAN}?",
              replacements: {
                PLAN: _v9
              },
              dictionary: {
                es: {
                  singular: "¿Está seguro de que desea cambiar a {PLAN}?"
                },
                "de-DE": {
                  singular: "Möchten Sie wirklich zu {PLAN} wechseln?"
                },
                "fr-FR": {
                  singular: "Êtes-vous sûr de vouloir passer au forfait {PLAN}\n?"
                },
                "ja-JP": {
                  singular: "本当に{PLAN}に変更してよろしいですか?"
                },
                "ko-KR": {
                  singular: "정말 {PLAN}로 이동하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Tem certeza de que deseja mudar para {PLAN}?"
                },
                "zh-CN": {
                  singular: "您确定要切换到 {PLAN} 吗?"
                }
              }
            }) : (0, _v23.translate)({
              singular: "Are you sure you want to downgrade to {PLAN}?",
              replacements: {
                PLAN: _v9
              },
              dictionary: {
                es: {
                  singular: "¿Está seguro de que desea degradar su plan a {PLAN}?"
                },
                "de-DE": {
                  singular: "Möchten Sie wirklich auf {PLAN} herabstufen?"
                },
                "fr-FR": {
                  singular: "Êtes-vous sûr de vouloir rétrograder vers {PLAN}?"
                },
                "ja-JP": {
                  singular: "本当に{PLAN}へダウングレードしてもよろしいですか？"
                },
                "ko-KR": {
                  singular: "정말로 {PLAN}으로 다운그레이드하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Tem certeza de que deseja fazer o downgrade para {PLAN}?"
                },
                "zh-CN": {
                  singular: "您确定要降级到 {PLAN}吗？"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v26.BackButton, {
          onClick: "confirm" === _v20 ? () => _v21("loss") : _v35
        }), (0, _v1.jsx)(_v10.ModalCloseButton, {
          top: "20px",
          right: "20px",
          onClick: _v35
        }), (0, _v1.jsx)(_v9.ModalBody, {
          paddingX: "0",
          paddingTop: "12px",
          overflowY: "auto",
          children: "loss" === _v20 ? (0, _v1.jsxs)(_v15.Stack, {
            spacing: "0",
            width: "100%",
            children: [(0, _v1.jsxs)(_v3.Box, {
              paddingX: {
                base: "6",
                md: (0, _v17.rem)(60)
              },
              paddingBottom: "5",
              children: [(0, _v1.jsx)(_v16.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v30 ? (0, _v23.translate)({
                  singular: "Your plan will change immediately to {PLAN}.",
                  replacements: {
                    PLAN: _v9
                  },
                  dictionary: {
                    es: {
                      singular: "Su plan cambiará de inmediato a {PLAN}."
                    },
                    "de-DE": {
                      singular: "Ihr Tarif wird sofort auf {PLAN} umgestellt."
                    },
                    "fr-FR": {
                      singular: "Votre forfait sera modifié immédiatement pour {PLAN}."
                    },
                    "ja-JP": {
                      singular: "お客様のプランは直ちに{PLAN}に変更されます."
                    },
                    "ko-KR": {
                      singular: "귀하의 요금제가 즉시 {PLAN}으로 변경됩니다."
                    },
                    "pt-BR": {
                      singular: "Seu plano será alterado imediatamente para {PLAN}."
                    },
                    "zh-CN": {
                      singular: "您的计划将立即更改为 {PLAN}."
                    }
                  }
                }) : "" !== _v31 ? (0, _v23.translate)({
                  singular: "At the end of the current billing cycle on {DATE}, your account will renew under the {PLAN} plan.",
                  replacements: {
                    DATE: _v31,
                    PLAN: _v9
                  },
                  dictionary: {
                    es: {
                      singular: "Al final del ciclo de facturación actual, el {DATE}, su cuenta se renovará bajo el plan {PLAN}."
                    },
                    "de-DE": {
                      singular: "Am Ende des aktuellen Abrechnungszeitraums am {DATE} wird Ihr Konto unter dem {PLAN}-Tarif erneuert."
                    },
                    "fr-FR": {
                      singular: "À la fin du cycle de facturation en cours, le {DATE}, votre compte sera renouvelé selon le forfait {PLAN}."
                    },
                    "ja-JP": {
                      singular: "現在の請求サイクル終了日にあたる{DATE}に、お客様のアカウントは{PLAN}プランで更新されます."
                    },
                    "ko-KR": {
                      singular: "현재 결제 주기의 {DATE}에 귀하의 계정은 {PLAN} 요금제로 갱신됩니다."
                    },
                    "pt-BR": {
                      singular: "Ao final do ciclo de cobrança atual em {DATE}, sua conta será renovada no plano {PLAN}."
                    },
                    "zh-CN": {
                      singular: "在当前计费周期于 {DATE} 结束时，您的账户将按 {PLAN} 计划续订."
                    }
                  }
                }) : (0, _v23.translate)({
                  singular: "At the end of the current billing cycle, your account will renew under the {PLAN} plan.",
                  replacements: {
                    PLAN: _v9
                  },
                  dictionary: {
                    es: {
                      singular: "Al final del ciclo de facturación actual, su cuenta se renovará bajo el plan {PLAN}."
                    },
                    "de-DE": {
                      singular: "Am Ende des aktuellen Abrechnungszeitraums wird Ihr Konto unter dem {PLAN}-Tarif erneuert."
                    },
                    "fr-FR": {
                      singular: "À la fin du cycle de facturation en cours, votre compte sera renouvelé selon le forfait {PLAN}."
                    },
                    "ja-JP": {
                      singular: "現在の請求サイクルの終了時に、お客様のアカウントは{PLAN}プランで更新されます."
                    },
                    "ko-KR": {
                      singular: "현재 결제 주기가 종료되면 귀하의 계정은 {PLAN} 요금제로 갱신됩니다."
                    },
                    "pt-BR": {
                      singular: "Ao final do ciclo de cobrança atual, sua conta será renovada no plano {PLAN}."
                    },
                    "zh-CN": {
                      singular: "在当前计费周期结束时，您的账户将按 {PLAN} 计划续订."
                    }
                  }
                })
              }), !_v30 && "" !== _v31 && (0, _v1.jsx)(_v16.Text, {
                variant: "body-sm",
                color: "text-secondary",
                marginTop: "2",
                children: "" !== _v5 ? (0, _v23.translate)({
                  singular: "Your current {PLAN} features remain available until {DATE}.",
                  replacements: {
                    PLAN: _v5,
                    DATE: _v31
                  },
                  dictionary: {
                    es: {
                      singular: "Las funciones actuales de {PLAN} permanecen disponibles hasta {DATE}."
                    },
                    "de-DE": {
                      singular: "Die Funktionen Ihres aktuellen {PLAN}-Tarifs bleiben bis {DATE} verfügbar."
                    },
                    "fr-FR": {
                      singular: "Les fonctionnalités actuelles du forfait {PLAN} restent disponibles jusqu'au {DATE}."
                    },
                    "ja-JP": {
                      singular: "{DATE}までは現在の{PLAN}の機能をご利用いただけます."
                    },
                    "ko-KR": {
                      singular: "현재 {PLAN} 요금제의 기능은 {DATE}까지 이용하실 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Os recursos do seu {PLAN} atual permanecem disponíveis até {DATE}."
                    },
                    "zh-CN": {
                      singular: "您当前的 {PLAN} 功能将持续可用至 {DATE}."
                    }
                  }
                }) : (0, _v23.translate)({
                  singular: "Your current plan features remain available until {DATE}.",
                  replacements: {
                    DATE: _v31
                  },
                  dictionary: {
                    es: {
                      singular: "Las funciones de su plan actual permanecen disponibles hasta {DATE}."
                    },
                    "de-DE": {
                      singular: "Die Funktionen Ihres aktuellen Tarifs bleiben bis {DATE} verfügbar."
                    },
                    "fr-FR": {
                      singular: "Les fonctionnalités de votre forfait actuel restent disponibles jusqu'au {DATE}."
                    },
                    "ja-JP": {
                      singular: "{DATE}までは現在のプランの機能をご利用いただけます."
                    },
                    "ko-KR": {
                      singular: "현재 요금제의 기능은 {DATE}까지 이용하실 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Os recursos do seu plano atual permanecem disponíveis até {DATE}."
                    },
                    "zh-CN": {
                      singular: "您当前的计划功能将持续可用至 {DATE}."
                    }
                  }
                })
              })]
            }), void 0 !== _v34 && (0, _v1.jsx)(_v34, {
              planName: _v9,
              storageLimitLabel: _v11.metadata.entitlements.params.restrictedVideoStorageLimit ?? "",
              warningData: _v34,
              videosHref: "/manage/videos"
            }), "downgrade" === _v12 && (0, _v1.jsx)(_v3.Box, {
              backgroundColor: "rgba(229, 62, 62, 0.08)",
              paddingX: "24px",
              paddingY: "32px",
              children: (0, _v1.jsxs)(_v15.Stack, {
                spacing: "4",
                width: "100%",
                children: [(0, _v1.jsx)(_v16.Text, {
                  variant: "heading-sm",
                  children: _v30 ? (0, _v23.translate)({
                    singular: "The change takes effect immediately. You will lose access to:",
                    dictionary: {
                      es: {
                        singular: "El cambio entra en vigor de inmediato. Perderá acceso a:"
                      },
                      "de-DE": {
                        singular: "Die Änderung tritt sofort in Kraft. Sie verlieren den Zugriff auf:"
                      },
                      "fr-FR": {
                        singular: "Le changement prend effet immédiatement. Vous perdrez l'accès à\n:"
                      },
                      "ja-JP": {
                        singular: "変更は即時に適用されます。次の項目へのアクセスを失います:"
                      },
                      "ko-KR": {
                        singular: "변경 사항은 즉시 적용됩니다. 다음 항목에 대한 접근 권한을 잃게 됩니다:"
                      },
                      "pt-BR": {
                        singular: "A alteração entra em vigor imediatamente. Você perderá acesso a:"
                      },
                      "zh-CN": {
                        singular: "变更将立即生效. 您将失去对以下内容的访问权限:"
                      }
                    }
                  }) : (0, _v23.translate)({
                    singular: "After that, you will lose access to:",
                    dictionary: {
                      es: {
                        singular: "Después de eso, perderá acceso a:"
                      },
                      "de-DE": {
                        singular: "Anschließend verlieren Sie den Zugriff auf:"
                      },
                      "fr-FR": {
                        singular: "Après cela, vous perdrez l'accès à\n:"
                      },
                      "ja-JP": {
                        singular: "その後、以下へのアクセスを失います:"
                      },
                      "ko-KR": {
                        singular: "이후 다음 항목에 대한 접근 권한을 잃게 됩니다:"
                      },
                      "pt-BR": {
                        singular: "Depois disso, você perderá acesso a:"
                      },
                      "zh-CN": {
                        singular: "之后，您将失去对以下内容的访问权限:"
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
                  children: _v38.map((_v0, _v1) => {
                    let _v2 = _v1 === _v39;
                    return (0, _v1.jsxs)(_v5.Flex, {
                      gap: "2",
                      align: "flex-start",
                      children: [!_v2 && (0, _v1.jsx)(_v18.CloseXCircleFilled, {
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
            })]
          }) : (0, _v1.jsx)(_v27.DowngradeConfirmStep, {
            planName: _v9,
            planData: _v11,
            billingPeriod: _v4.billingPeriod,
            renewalDate: _v4.renewalDate,
            isImmediate: _v30,
            ctaLabel: _v40
          })
        }), (0, _v1.jsx)(_v12.ModalFooter, {
          paddingTop: "loss" === _v20 ? "20px" : "0",
          paddingBottom: "24px",
          paddingX: {
            base: "6",
            md: (0, _v17.rem)(60)
          },
          children: "loss" === _v20 ? (0, _v1.jsxs)(_v15.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v4.Button, {
              onClick: _v35,
              size: "md",
              variant: "primary",
              width: "100%",
              children: (0, _v23.translate)({
                singular: "Go back",
                dictionary: {
                  es: {
                    singular: "Volver"
                  },
                  "de-DE": {
                    singular: "Zurück"
                  },
                  "fr-FR": {
                    singular: "Retour"
                  },
                  "ja-JP": {
                    singular: "戻る"
                  },
                  "ko-KR": {
                    singular: "돌아가기"
                  },
                  "pt-BR": {
                    singular: "Voltar"
                  },
                  "zh-CN": {
                    singular: "返回"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              onClick: _v36,
              size: "md",
              variant: "destructive",
              width: "100%",
              children: (0, _v23.translate)({
                singular: "Continue with the plan change",
                dictionary: {
                  es: {
                    singular: "Continuar con el cambio de plan"
                  },
                  "de-DE": {
                    singular: "Mit der Tarifänderung fortfahren"
                  },
                  "fr-FR": {
                    singular: "Poursuivre le changement de forfait"
                  },
                  "ja-JP": {
                    singular: "プラン変更を続行する"
                  },
                  "ko-KR": {
                    singular: "요금제 변경 계속하기"
                  },
                  "pt-BR": {
                    singular: "Continuar com a alteração do plano"
                  },
                  "zh-CN": {
                    singular: "继续更改计划"
                  }
                }
              })
            })]
          }) : (0, _v1.jsxs)(_v15.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v4.Button, {
              onClick: _v37,
              size: "md",
              variant: "primary",
              width: "100%",
              isLoading: _v18,
              disabled: _v18,
              children: _v40
            }), (0, _v1.jsx)(_v4.Button, {
              onClick: _v35,
              size: "md",
              variant: "secondary",
              width: "100%",
              children: (0, _v23.translate)({
                singular: "No thanks",
                dictionary: {
                  es: {
                    singular: "No, gracias"
                  },
                  "de-DE": {
                    singular: "Nein, danke"
                  },
                  "fr-FR": {
                    singular: "Non merci"
                  },
                  "ja-JP": {
                    singular: "いいえ、結構です"
                  },
                  "ko-KR": {
                    singular: "괜찮습니다"
                  },
                  "pt-BR": {
                    singular: "Não, obrigado"
                  },
                  "zh-CN": {
                    singular: "不用，谢谢"
                  }
                }
              })
            })]
          })
        })]
      })]
    });
  }], 0);
}