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
  let _v19 = "status-destructive-secondary",
    _v20 = "red.200",
    _v21 = {
      bgColor: "gray.900",
      color: "white",
      _hover: {
        bgColor: "gray.700"
      },
      _active: {
        bgColor: "gray.700"
      },
      _disabled: {
        bgColor: "gray.900",
        _hover: {
          bgColor: "gray.900"
        }
      }
    };
  _v0.s(["ColdStorageBanner", 0, ({
    surface: _v0,
    onLearnMore: _v1,
    onViewVideos: _v2,
    planName: _v3 = "Advanced",
    hasColdStorage: _v4 = !0,
    hasColdPrivacy: _v5 = !1,
    hasColdPrivacyForTracking: _v6,
    isColdPrivacyLoading: _v7 = !1,
    isPaymentSuspended: _v8 = !1,
    onUpdatePayment: _v9,
    className: _v10
  }) => {
    let {
        trackColdStorageUxDisplayed: _v11,
        trackColdStorageUxClicked: _v12
      } = (0, _v15.useColdStorageTracking)(),
      _v13 = _v5 && !_v4,
      _v14 = _v6 ?? _v5,
      _v15 = (0, _v2.useMemo)(() => (0, _v15.deriveColdStorageRestrictions)({
        hasColdStorage: _v4,
        hasColdPrivacy: _v14
      }), [_v4, _v14]);
    (0, _v16.usePicoEffect)(() => {
      if (_v7) return !1;
      _v11({
        surface: _v0,
        restrictions: _v15
      });
    }, [_v0, _v15, _v7, _v11], {
      once: !0
    });
    let _v16 = () => {
        (_v12({
          element: "learn_more",
          restrictions: _v15
        }), _v1) ? _v1() : window.dispatchEvent(new Event(_v17.COLD_STORAGE_INTRO_MODAL_FORCE_OPEN_EVENT));
      },
      _v17 = () => {
        _v12({
          element: "view_videos",
          restrictions: _v15
        }), _v2?.();
      },
      _v18 = _v0 => (0, _v1.jsx)(_v8.Link, {
        as: "button",
        type: "button",
        onClick: _v16,
        background: "transparent",
        border: "none",
        padding: 0,
        height: "auto",
        minWidth: 0,
        color: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        lineHeight: "inherit",
        textDecoration: "underline",
        display: "inline",
        verticalAlign: "baseline",
        cursor: "pointer",
        _hover: {
          background: "transparent",
          textDecoration: "underline"
        },
        _active: {
          background: "transparent"
        },
        _focusVisible: {
          background: "transparent"
        },
        children: _v0
      }),
      _v19 = (_v0, _v1) => (0, _v1.jsx)(_v18.default, {
        size: _v0,
        noMargin: !0,
        variant: "primary",
        style: _v1 ? {
          ..._v21,
          ..._v1
        } : _v21,
        name: "cold_storage_banner_upgrade_button",
        location: `cold_storage_banner_${_v0}`,
        onClick: () => {
          _v12({
            element: "upgrade_button",
            restrictions: _v15
          });
        },
        modalConfig: {},
        modalTracking: {
          params: {
            page: _v0,
            feature: _v13 ? "privacy" : "storage",
            location: `cold_storage_banner_${_v0}`,
            upsell_name: "cold_storage_banner"
          },
          paywallTracking: {
            paywallTrigger: _v13 ? `cold_privacy_banner_upgrade_${_v0}` : `cold_storage_banner_upgrade_${_v0}`,
            paywallLocation: `cold_storage_banner_${_v0}`,
            paywallType: "popup",
            paywallFeature: _v13 ? "privacy" : "storage_limit"
          }
        },
        children: (0, _v14.translate)({
          singular: "Upgrade",
          dictionary: {
            es: {
              singular: "Actualizar"
            },
            "de-DE": {
              singular: "Upgraden"
            },
            "fr-FR": {
              singular: "Mettre à niveau"
            },
            "ja-JP": {
              singular: "アップグレード"
            },
            "ko-KR": {
              singular: "업그레이드"
            },
            "zh-CN": {
              singular: "升级"
            }
          }
        })
      });
    if ("homepage" === _v0) {
      let _v0 = _v4 && _v5,
        _v1 = (_v0, _v1 = "status-destructive-primary") => (0, _v1.jsx)(_v5.Box, {
          alignItems: "center",
          background: _v1,
          borderRadius: "md",
          color: "white",
          display: "flex",
          flexShrink: 0,
          height: (0, _v10.rem)(48),
          justifyContent: "center",
          padding: (0, _v10.rem)(8),
          width: (0, _v10.rem)(48),
          children: (0, _v1.jsx)(_v0, {
            boxSize: (0, _v10.rem)(32)
          })
        }),
        _v2 = (0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: "sm",
          justifyContent: "center",
          mt: (0, _v10.rem)(4),
          children: [(0, _v1.jsx)(_v6.Button, {
            variant: "secondary",
            size: "md",
            height: (0, _v10.rem)(40),
            minHeight: (0, _v10.rem)(40),
            onClick: _v17,
            children: (0, _v14.translate)({
              singular: "View videos",
              dictionary: {
                es: {
                  singular: "Ver videos"
                },
                "de-DE": {
                  singular: "Videos ansehen"
                },
                "fr-FR": {
                  singular: "Afficher les vidéos"
                },
                "ja-JP": {
                  singular: "動画を表示"
                },
                "ko-KR": {
                  singular: "동영상 보기"
                },
                "pt-BR": {
                  singular: "Ver vídeos"
                },
                "zh-CN": {
                  singular: "查看视频"
                }
              }
            })
          }), _v19("md", {
            height: (0, _v10.rem)(40),
            minHeight: (0, _v10.rem)(40)
          })]
        });
      if (_v0) return (0, _v1.jsx)(_v3.AlertRoot, {
        className: _v10,
        backgroundColor: _v19,
        color: "text-primary",
        borderRadius: "lg",
        padding: (0, _v10.rem)(32),
        gap: "md",
        alignItems: "center",
        children: (0, _v1.jsxs)(_v4.AlertDescription, {
          display: "flex",
          flexDirection: "column",
          gap: (0, _v10.rem)(16),
          width: "100%",
          alignItems: "center",
          textAlign: "center",
          children: [_v1(_v11.CircleExclamation), (0, _v1.jsx)(_v9.Text, {
            variant: "heading-xl",
            color: "text-primary",
            children: (0, _v14.translate)({
              singular: "Your videos need attention",
              dictionary: {
                es: {
                  singular: "Tus videos necesitan atención"
                },
                "de-DE": {
                  singular: "Ihre Videos benötigen Aufmerksamkeit"
                },
                "fr-FR": {
                  singular: "Vos vidéos requièrent votre attention"
                },
                "ja-JP": {
                  singular: "動画に対応が必要です"
                },
                "ko-KR": {
                  singular: "동영상에 조치가 필요합니다"
                },
                "pt-BR": {
                  singular: "Seus vídeos precisam de atenção"
                },
                "zh-CN": {
                  singular: "您的视频需要关注"
                }
              }
            })
          }), (0, _v1.jsxs)(_v7.Flex, {
            direction: {
              base: "column",
              md: "row"
            },
            gap: (0, _v10.rem)(16),
            width: "100%",
            alignItems: "stretch",
            justifyContent: "center",
            children: [(0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              gap: (0, _v10.rem)(8),
              width: {
                base: "100%",
                md: (0, _v10.rem)(360)
              },
              flexShrink: 0,
              backgroundColor: _v20,
              borderRadius: "md",
              padding: (0, _v10.rem)(20),
              textAlign: "left",
              children: [(0, _v1.jsx)(_v9.Text, {
                variant: "heading-sm",
                fontSize: (0, _v10.rem)(18),
                lineHeight: 1.3,
                color: "text-primary",
                children: (0, _v14.translate)({
                  singular: "You're over your storage limit",
                  dictionary: {
                    es: {
                      singular: "Has superado tu límite de almacenamiento"
                    },
                    "de-DE": {
                      singular: "Sie haben Ihr Speicherlimit überschritten"
                    },
                    "fr-FR": {
                      singular: "Vous avez dépassé votre quota de stockage"
                    },
                    "ja-JP": {
                      singular: "ストレージの上限を超えています"
                    },
                    "ko-KR": {
                      singular: "저장 용량 한도를 초과했습니다"
                    },
                    "pt-BR": {
                      singular: "Você ultrapassou seu limite de armazenamento"
                    },
                    "zh-CN": {
                      singular: "您已超出存储限额"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v9.Text, {
                variant: "body-md",
                lineHeight: 1.5,
                color: "text-primary",
                children: (0, _v14.translate)({
                  singular: "You've reached the storage limit on your current plan. {LINK}Learn more{/LINK} or upgrade to restore your videos.",
                  replacements: {
                    LINK: _v18
                  },
                  dictionary: {
                    es: {
                      singular: "Has alcanzado el límite de almacenamiento de tu plan actual. {LINK}Más información{/LINK} o actualiza para restaurar tus videos."
                    },
                    "de-DE": {
                      singular: "Sie haben das Speicherlimit Ihres aktuellen Plans erreicht. {LINK}Mehr erfahren{/LINK} oder führen Sie ein Upgrade durch, um Ihre Videos wiederherzustellen."
                    },
                    "fr-FR": {
                      singular: "Vous avez atteint la limite de stockage de votre forfait actuel. {LINK}En savoir plus{/LINK} ou passez à un forfait supérieur pour restaurer vos vidéos."
                    },
                    "ja-JP": {
                      singular: "現在のプランでストレージ上限に達しています。{LINK}詳細はこちら{/LINK} またはアップグレードして動画を復元してください。"
                    },
                    "ko-KR": {
                      singular: "현재 요금제의 저장 용량 한도에 도달했습니다. {LINK}자세히 알아보기{/LINK} 또는 업그레이드하여 동영상을 복원하세요."
                    },
                    "pt-BR": {
                      singular: "Você atingiu o limite de armazenamento do seu plano atual. {LINK}Saiba mais{/LINK} ou atualize seu plano para restaurar seus vídeos."
                    },
                    "zh-CN": {
                      singular: "您当前的套餐已达到存储上限。{LINK}了解详情{/LINK}或升级以恢复您的视频。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              gap: (0, _v10.rem)(8),
              width: {
                base: "100%",
                md: (0, _v10.rem)(360)
              },
              flexShrink: 0,
              backgroundColor: _v20,
              borderRadius: "md",
              padding: (0, _v10.rem)(20),
              textAlign: "left",
              children: [(0, _v1.jsx)(_v9.Text, {
                variant: "heading-sm",
                fontSize: (0, _v10.rem)(18),
                lineHeight: 1.3,
                color: "text-primary",
                children: (0, _v14.translate)({
                  singular: "Some videos are now private",
                  dictionary: {
                    es: {
                      singular: "Algunos videos ahora son privados"
                    },
                    "de-DE": {
                      singular: "Einige Videos sind jetzt privat"
                    },
                    "fr-FR": {
                      singular: "Certaines vidéos sont désormais privées"
                    },
                    "ja-JP": {
                      singular: "一部の動画が非公開になりました"
                    },
                    "ko-KR": {
                      singular: "일부 동영상이 이제 비공개로 전환되었습니다"
                    },
                    "pt-BR": {
                      singular: "Alguns vídeos agora estão privados"
                    },
                    "zh-CN": {
                      singular: "部分视频现已设为私密"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v9.Text, {
                variant: "body-md",
                lineHeight: 1.5,
                color: "text-primary",
                children: (0, _v14.translate)({
                  singular: "Your plan doesn't support some privacy settings, so these videos are now private. {LINK}Learn more{/LINK} or upgrade to restore your original privacy settings.",
                  replacements: {
                    LINK: _v18
                  },
                  dictionary: {
                    es: {
                      singular: "Tu plan no admite algunas configuraciones de privacidad, por lo que estos videos ahora son privados. {LINK}Más información{/LINK} o actualiza para restaurar la configuración de privacidad original."
                    },
                    "de-DE": {
                      singular: "Ihr Plan unterstützt bestimmte Datenschutzeinstellungen nicht, daher sind diese Videos jetzt privat. {LINK}Mehr erfahren{/LINK} oder führen Sie ein Upgrade durch, um Ihre ursprünglichen Datenschutzeinstellungen wiederherzustellen."
                    },
                    "fr-FR": {
                      singular: "Votre forfait ne prend pas en charge certains paramètres de confidentialité, donc ces vidéos sont désormais privées. {LINK}En savoir plus{/LINK} ou passez à un forfait supérieur pour restaurer vos paramètres de confidentialité d'origine."
                    },
                    "ja-JP": {
                      singular: "お使いのプランでは一部のプライバシー設定がサポートされていないため、これらの動画は現在非公開になっています。{LINK}詳細はこちら{/LINK} またはアップグレードして元のプライバシー設定を復元してください。"
                    },
                    "ko-KR": {
                      singular: "요금제가 일부 개인정보 설정을 지원하지 않아 해당 동영상이 비공개로 변경되었습니다. {LINK}자세히 알아보기{/LINK} 또는 업그레이드하여 원래의 개인정보 설정을 복원하세요."
                    },
                    "pt-BR": {
                      singular: "Seu plano não suporta algumas configurações de privacidade, então esses vídeos agora estão privados. {LINK}Saiba mais{/LINK} ou atualize para restaurar suas configurações de privacidade originais."
                    },
                    "zh-CN": {
                      singular: "您的套餐不支持某些隐私设置，因此这些视频现已设为私密。{LINK}了解详情{/LINK}或升级以恢复原有的隐私设置。"
                    }
                  }
                })
              })]
            })]
          }), _v2]
        })
      });
      let {
          Icon: _v3,
          heading: _v4,
          body: _v5
        } = _v5 ? {
          Icon: _v13.Eye,
          heading: (0, _v14.translate)({
            singular: "Some videos are now private",
            dictionary: {
              es: {
                singular: "Algunos videos ahora son privados"
              },
              "de-DE": {
                singular: "Einige Videos sind jetzt privat"
              },
              "fr-FR": {
                singular: "Certaines vidéos sont désormais privées"
              },
              "ja-JP": {
                singular: "一部の動画が非公開になりました"
              },
              "ko-KR": {
                singular: "일부 동영상이 이제 비공개로 전환되었습니다"
              },
              "pt-BR": {
                singular: "Alguns vídeos agora estão privados"
              },
              "zh-CN": {
                singular: "部分视频现已设为私密"
              }
            }
          }),
          body: (0, _v14.translate)({
            singular: "Your plan doesn't support some privacy settings, so these videos are now private. {LINK}Learn more{/LINK} or upgrade to restore your previous settings.",
            replacements: {
              LINK: _v18
            },
            dictionary: {
              es: {
                singular: "Tu plan no admite algunas configuraciones de privacidad, por lo que estos videos ahora son privados. {LINK}Más información{/LINK} o actualiza para restaurar tu configuración anterior."
              },
              "de-DE": {
                singular: "Ihr Plan unterstützt bestimmte Datenschutzeinstellungen nicht, daher sind diese Videos jetzt privat. {LINK}Mehr erfahren{/LINK} oder führen Sie ein Upgrade durch, um Ihre vorherigen Einstellungen wiederherzustellen."
              },
              "fr-FR": {
                singular: "Votre forfait ne prend pas en charge certains paramètres de confidentialité, donc ces vidéos sont désormais privées. {LINK}En savoir plus{/LINK} ou passez à un forfait supérieur pour restaurer vos paramètres précédents."
              },
              "ja-JP": {
                singular: "お使いのプランでは一部のプライバシー設定がサポートされていないため、これらの動画は現在非公開になっています。{LINK}詳細はこちら{/LINK} またはアップグレードして以前の設定を復元してください。"
              },
              "ko-KR": {
                singular: "요금제가 일부 개인정보 설정을 지원하지 않아 해당 동영상이 비공개로 변경되었습니다. {LINK}자세히 알아보기{/LINK} 또는 업그레이드하여 이전 설정을 복원하세요."
              },
              "pt-BR": {
                singular: "Seu plano não suporta algumas configurações de privacidade, então esses vídeos agora estão privados. {LINK}Saiba mais{/LINK} ou atualize para restaurar suas configurações anteriores."
              },
              "zh-CN": {
                singular: "您的套餐不支持某些隐私设置，因此这些视频现已设为私密。{LINK}了解详情{/LINK}或升级以恢复先前的设置。"
              }
            }
          })
        } : {
          Icon: _v12.Database,
          heading: (0, _v14.translate)({
            singular: "You're over the storage limit",
            dictionary: {
              es: {
                singular: "Ha superado el límite de almacenamiento"
              },
              "de-DE": {
                singular: "Sie haben das Speicherlimit überschritten"
              },
              "fr-FR": {
                singular: "Vous avez dépassé la limite de stockage"
              },
              "ja-JP": {
                singular: "ストレージ上限を超えています"
              },
              "ko-KR": {
                singular: "저장 용량 한도를 초과했습니다"
              },
              "pt-BR": {
                singular: "Você excedeu o limite de armazenamento"
              },
              "zh-CN": {
                singular: "您已超过存储限制"
              }
            }
          }),
          body: (0, _v14.translate)({
            singular: "You've reached the storage limit on your current plan. {LINK}Learn more{/LINK} or upgrade to {PLAN} for more storage.",
            replacements: {
              LINK: _v18,
              PLAN: _v3
            },
            dictionary: {
              es: {
                singular: "Has alcanzado el límite de almacenamiento de tu plan actual. {LINK}Más información{/LINK} o actualiza a {PLAN} para obtener más almacenamiento."
              },
              "de-DE": {
                singular: "Sie haben das Speicherlimit Ihres aktuellen Plans erreicht. {LINK}Mehr erfahren{/LINK} oder führen Sie ein Upgrade auf {PLAN} durch, um mehr Speicher zu erhalten."
              },
              "fr-FR": {
                singular: "Vous avez atteint la limite de stockage de votre forfait actuel. {LINK}En savoir plus{/LINK} ou passez à {PLAN} pour disposer de plus d'espace de stockage."
              },
              "ja-JP": {
                singular: "現在のプランでストレージ上限に達しています。{LINK}詳細はこちら{/LINK} またはストレージを増やすために{PLAN}にアップグレードしてください。"
              },
              "ko-KR": {
                singular: "현재 요금제의 저장 용량 한도에 도달했습니다. {LINK}자세히 알아보기{/LINK} 또는 더 많은 저장 용량을 위해 {PLAN}으로 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Você atingiu o limite de armazenamento do seu plano atual. {LINK}Saiba mais{/LINK} ou atualize para {PLAN} para obter mais armazenamento."
              },
              "zh-CN": {
                singular: "您当前的套餐已达到存储上限。{LINK}了解详情{/LINK}或升级到{PLAN}以获得更多存储空间。"
              }
            }
          })
        },
        _v6 = (0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: "sm",
          justifyContent: "center",
          mt: (0, _v10.rem)(4),
          children: [(0, _v1.jsx)(_v6.Button, {
            variant: "secondary",
            size: "md",
            height: (0, _v10.rem)(40),
            minHeight: (0, _v10.rem)(40),
            onClick: _v17,
            children: (0, _v14.translate)({
              singular: "View videos",
              dictionary: {
                es: {
                  singular: "Ver videos"
                },
                "de-DE": {
                  singular: "Videos ansehen"
                },
                "fr-FR": {
                  singular: "Afficher les vidéos"
                },
                "ja-JP": {
                  singular: "動画を表示"
                },
                "ko-KR": {
                  singular: "동영상 보기"
                },
                "pt-BR": {
                  singular: "Ver vídeos"
                },
                "zh-CN": {
                  singular: "查看视频"
                }
              }
            })
          }), (0, _v1.jsx)(_v6.Button, {
            variant: "primary",
            size: "md",
            height: (0, _v10.rem)(40),
            minHeight: (0, _v10.rem)(40),
            onClick: () => {
              _v12({
                element: "upgrade_button",
                restrictions: _v15
              }), _v9?.();
            },
            children: (0, _v14.translate)({
              singular: "Update payment method",
              dictionary: {
                es: {
                  singular: "Actualizar método de pago"
                },
                "de-DE": {
                  singular: "Zahlungsmethode aktualisieren"
                },
                "fr-FR": {
                  singular: "Mettre à jour le mode de paiement"
                },
                "ja-JP": {
                  singular: "お支払い方法を更新"
                },
                "ko-KR": {
                  singular: "결제 수단 업데이트"
                },
                "pt-BR": {
                  singular: "Atualizar método de pagamento"
                },
                "zh-CN": {
                  singular: "更新付款方式"
                }
              }
            })
          })]
        });
      return (0, _v1.jsx)(_v3.AlertRoot, {
        className: _v10,
        backgroundColor: _v19,
        color: "text-primary",
        borderRadius: "lg",
        padding: (0, _v10.rem)(32),
        gap: "md",
        alignItems: "center",
        children: (0, _v1.jsxs)(_v4.AlertDescription, {
          display: "flex",
          flexDirection: "column",
          gap: (0, _v10.rem)(16),
          width: "100%",
          alignItems: "center",
          textAlign: "center",
          children: [_v1(_v8 ? _v11.CircleExclamation : _v3), (0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            gap: (0, _v10.rem)(8),
            alignItems: "center",
            maxWidth: (0, _v10.rem)(560),
            children: [(0, _v1.jsx)(_v9.Text, {
              variant: "heading-xl",
              color: "text-primary",
              whiteSpace: _v8 ? {
                base: "normal",
                md: "nowrap"
              } : void 0,
              children: _v8 ? (0, _v14.translate)({
                singular: "We couldn't process your payment",
                dictionary: {
                  es: {
                    singular: "No hemos podido procesar su pago"
                  },
                  "de-DE": {
                    singular: "Wir konnten Ihre Zahlung nicht verarbeiten"
                  },
                  "fr-FR": {
                    singular: "Nous n'avons pas pu traiter votre paiement"
                  },
                  "ja-JP": {
                    singular: "お支払いを処理できませんでした"
                  },
                  "ko-KR": {
                    singular: "결제를 처리하지 못했습니다"
                  },
                  "pt-BR": {
                    singular: "Não conseguimos processar seu pagamento"
                  },
                  "zh-CN": {
                    singular: "我们无法处理您的付款"
                  }
                }
              }) : _v4
            }), (0, _v1.jsx)(_v9.Text, {
              variant: "body-lg",
              color: "text-primary",
              children: _v8 ? (0, _v14.translate)({
                singular: "We couldn't process your payment for the Vimeo {PLAN} Plan. For this reason, all the videos that exceed the Free storage limit are now restricted.{BREAK}{LINK}Learn more{/LINK} or update your payment method to restore your videos.",
                replacements: {
                  PLAN: _v3,
                  BREAK: (0, _v1.jsx)("br", {}),
                  LINK: _v18
                },
                dictionary: {
                  es: {
                    singular: "No hemos podido procesar su pago para el plan Vimeo {PLAN}. Por este motivo, todos los vídeos que excedan el límite de almacenamiento gratuito ahora están restringidos.{BREAK}{LINK}Más información{/LINK} o actualice su método de pago para restaurar sus vídeos."
                  },
                  "de-DE": {
                    singular: "Wir konnten Ihre Zahlung für den Vimeo {PLAN} Plan nicht verarbeiten. Aus diesem Grund sind alle Videos, die das Free-Speicherlimit überschreiten, jetzt eingeschränkt.{BREAK}{LINK}Erfahren Sie mehr{/LINK} oder aktualisieren Sie Ihre Zahlungsmethode, um Ihre Videos wiederherzustellen."
                  },
                  "fr-FR": {
                    singular: "Nous n'avons pas pu traiter votre paiement pour le plan Vimeo {PLAN}. Pour cette raison, toutes les vidéos qui dépassent la limite de stockage gratuite sont désormais restreintes.{BREAK}{LINK}En savoir plus{/LINK} ou mettez à jour votre moyen de paiement pour restaurer vos vidéos."
                  },
                  "ja-JP": {
                    singular: "Vimeo {PLAN} プランのお支払いを処理できませんでした。このため、無料ストレージの上限を超えるすべての動画が制限されています。{BREAK}{LINK}詳細はこちら{/LINK} またはお支払い方法を更新して動画を復元してください."
                  },
                  "ko-KR": {
                    singular: "Vimeo {PLAN} 요금제에 대한 결제를 처리하지 못했습니다. 이로 인해 무료 저장 한도를 초과하는 모든 동영상이 현재 제한되었습니다.{BREAK}{LINK}자세히 알아보기{/LINK} 또는 결제 수단을 업데이트하여 동영상을 복원하세요."
                  },
                  "pt-BR": {
                    singular: "Não conseguimos processar seu pagamento do Plano Vimeo {PLAN}. Por esse motivo, todos os vídeos que excedem o limite de armazenamento Free agora estão restritos.{BREAK}{LINK}Saiba mais{/LINK} ou atualize seu método de pagamento para restaurar seus vídeos."
                  },
                  "zh-CN": {
                    singular: "我们无法处理您订购的 Vimeo {PLAN} 套餐的付款。为此，所有超出免费存储限制的视频现已受限。{BREAK}{LINK}了解详情{/LINK} 或更新您的付款方式以恢复您的视频访问权限."
                  }
                }
              }) : _v5
            })]
          }), _v8 ? _v6 : _v2]
        })
      });
    }
    let {
      Icon: _v20,
      text: _v21
    } = _v5 && _v4 ? {
      Icon: _v11.CircleExclamation,
      text: (0, _v14.translate)({
        singular: "Some videos are restricted due to privacy and storage limits on your plan.",
        dictionary: {
          es: {
            singular: "Algunos videos están restringidos debido a los límites de privacidad y de almacenamiento de su plan."
          },
          "de-DE": {
            singular: "Einige Videos sind aufgrund von Privatsphäre- und Speicherbeschränkungen in Ihrem Tarif eingeschränkt."
          },
          "fr-FR": {
            singular: "Certaines vidéos sont restreintes en raison des limites de confidentialité et de stockage associées à votre forfait."
          },
          "ja-JP": {
            singular: "お使いのプランのプライバシー設定およびストレージの制限により、一部の動画が制限されています。"
          },
          "ko-KR": {
            singular: "일부 동영상은 귀하의 요금제에 적용되는 개인정보 및 저장 용량 제한으로 인해 접근이 제한됩니다."
          },
          "pt-BR": {
            singular: "Alguns vídeos estão restritos devido a limites de privacidade e armazenamento no seu plano."
          },
          "zh-CN": {
            singular: "部分视频因您订阅的计划在隐私或存储方面的限制而无法访问。"
          }
        }
      })
    } : _v5 ? {
      Icon: _v13.Eye,
      text: (0, _v14.translate)({
        singular: "Your free plan allows only public and private videos. Some videos have been set to private.",
        dictionary: {
          es: {
            singular: "Su plan gratuito permite solo videos públicos y privados. Algunos videos se han configurado como privados."
          },
          "de-DE": {
            singular: "Ihr kostenloser Tarif erlaubt nur öffentliche und private Videos. Einige Videos wurden als privat markiert."
          },
          "fr-FR": {
            singular: "Votre forfait gratuit n'autorise que les vidéos publiques et privées. Certaines vidéos ont été définies comme privées."
          },
          "ja-JP": {
            singular: "無料プランでは公開と非公開の動画のみが許可されています。一部の動画は非公開に設定されています。"
          },
          "ko-KR": {
            singular: "무료 요금제에서는 공개 및 비공개 동영상만 허용됩니다. 일부 동영상은 비공개로 설정되어 있습니다."
          },
          "pt-BR": {
            singular: "Seu plano gratuito permite apenas vídeos públicos e privados. Alguns vídeos foram configurados como privados."
          },
          "zh-CN": {
            singular: "您的免费方案仅允许公开和私有视频。部分视频已被设置为私有。"
          }
        }
      })
    } : {
      Icon: _v12.Database,
      text: (0, _v14.translate)({
        singular: "You're over the storage limit. Some videos have been restricted.",
        dictionary: {
          es: {
            singular: "Has superado el límite de almacenamiento. Algunos vídeos han sido restringidos."
          },
          "de-DE": {
            singular: "Sie haben das Speicherlimit überschritten. Einige Videos wurden eingeschränkt."
          },
          "fr-FR": {
            singular: "Vous avez dépassé la limite de stockage. Certaines vidéos ont été restreintes."
          },
          "ja-JP": {
            singular: "ストレージ容量の上限を超えています。いくつかの動画の利用が制限されています。"
          },
          "ko-KR": {
            singular: "저장 용량 한도를 초과했습니다. 일부 동영상의 접근이 제한되었습니다."
          },
          "pt-BR": {
            singular: "Você excedeu o limite de armazenamento. Alguns vídeos foram restringidos."
          },
          "zh-CN": {
            singular: "您已超出存储配额。部分视频已被限制。"
          }
        }
      })
    };
    return (0, _v1.jsx)(_v3.AlertRoot, {
      className: _v10,
      backgroundColor: _v19,
      color: "text-primary",
      borderRadius: "lg",
      padding: (0, _v10.rem)(12),
      gap: "md",
      alignItems: "center",
      children: (0, _v1.jsxs)(_v4.AlertDescription, {
        display: "flex",
        flexDirection: {
          base: "column",
          md: "row"
        },
        gap: "md",
        width: "100%",
        alignItems: {
          base: "stretch",
          md: "center"
        },
        justifyContent: "space-between",
        children: [(0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: "sm",
          flex: "1",
          minWidth: 0,
          children: [(0, _v1.jsx)(_v20, {
            boxSize: (0, _v10.rem)(20),
            color: "status-destructive-primary"
          }), (0, _v1.jsx)(_v9.Text, {
            variant: "heading-xs",
            color: "text-primary",
            children: _v21
          })]
        }), (0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: "sm",
          flexShrink: 0,
          justifyContent: {
            base: "flex-end",
            md: "flex-start"
          },
          children: [(0, _v1.jsx)(_v6.Button, {
            variant: "secondary",
            size: "sm",
            height: (0, _v10.rem)(24),
            minHeight: (0, _v10.rem)(24),
            onClick: _v16,
            backgroundColor: "white",
            _hover: {
              backgroundColor: "white"
            },
            _active: {
              backgroundColor: "white"
            },
            children: (0, _v14.translate)({
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
          }), _v19("sm", {
            height: (0, _v10.rem)(24),
            minHeight: (0, _v10.rem)(24)
          })]
        })]
      })
    });
  }]);
}