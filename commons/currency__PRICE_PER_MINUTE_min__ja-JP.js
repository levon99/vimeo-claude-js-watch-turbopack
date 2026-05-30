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
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  function _v49({
    isOpen: _v0,
    onClose: _v1,
    translationLanguageCount: _v2,
    unitAmount: _v3,
    currency: _v4
  }) {
    let _v5 = (0, _v48.useLocale)(),
      _v6 = _v2 > 0,
      _v7 = _v2 * _v22.AUTO_CC_TRANSLATION_CREDITS_PER_MINUTE,
      _v8 = _v22.AUTO_CC_CREDITS_PER_MINUTE + _v7,
      _v9 = null !== _v3 && null !== _v4 ? function (_v0, _v1, _v2) {
        try {
          return new Intl.NumberFormat(_v2, {
            style: "currency",
            currency: _v1
          }).format(_v0 / 100);
        } catch {
          return `${(_v0 / 100).toFixed(2)} ${_v1}`;
        }
      }(_v8 * _v3, _v4, _v5) : null,
      _v10 = null !== _v9 ? (0, _v18.translate)({
        singular: "{PRICE_PER_MINUTE}/min",
        replacements: {
          PRICE_PER_MINUTE: _v9
        },
        dictionary: {
          "ja-JP": {
            singular: "{PRICE_PER_MINUTE}/分"
          },
          "ko-KR": {
            singular: "{PRICE_PER_MINUTE}/분"
          },
          "zh-CN": {
            singular: "{PRICE_PER_MINUTE}/分钟"
          }
        }
      }) : (0, _v18.translate)({
        singular: "Calculated per minute at session end",
        dictionary: {
          es: {
            singular: "Calculado por minuto al finalizar la sesión"
          },
          "de-DE": {
            singular: "Abrechnung pro Minute nach Sitzungsende"
          },
          "fr-FR": {
            singular: "Calculé par minute à la fin de la session"
          },
          "ja-JP": {
            singular: "セッション終了時に1分単位で計算されます"
          },
          "ko-KR": {
            singular: "세션 종료 시 분 단위로 계산됩니다."
          },
          "pt-BR": {
            singular: "Calculado por minuto ao final da sessão"
          },
          "zh-CN": {
            singular: "活动结束时按分钟计费"
          }
        }
      });
    return (0, _v1.jsxs)(_v42.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v47.ModalOverlay, {}), (0, _v1.jsxs)(_v45.ModalContent, {
        maxWidth: (0, _v12.rem)(480),
        children: [(0, _v1.jsx)(_v46.ModalHeader, {
          children: (0, _v18.translate)({
            singular: "Credits cost",
            dictionary: {
              es: {
                singular: "Costo de créditos"
              },
              "de-DE": {
                singular: "Kosten in Credits"
              },
              "fr-FR": {
                singular: "Coût en crédits"
              },
              "ja-JP": {
                singular: "クレジット費用"
              },
              "ko-KR": {
                singular: "크레딧 비용"
              },
              "pt-BR": {
                singular: "Custo em créditos"
              },
              "zh-CN": {
                singular: "点数消耗"
              }
            }
          })
        }), (0, _v1.jsx)(_v44.ModalCloseButton, {}), (0, _v1.jsxs)(_v43.ModalBody, {
          paddingX: (0, _v12.rem)(24),
          paddingY: (0, _v12.rem)(20),
          children: [(0, _v1.jsx)(_v9.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v12.rem)(16),
            children: (0, _v18.translate)({
              singular: "Live captions are charged based on the total duration of your event, with final credit usage calculated once the session is complete.",
              dictionary: {
                es: {
                  singular: "Los subtítulos en vivo se cobran según la duración total de tu evento; el uso final de créditos se calcula una vez que la sesión haya finalizado."
                },
                "de-DE": {
                  singular: "Live-Untertitel werden anhand der Gesamtdauer Ihrer Veranstaltung berechnet. Der endgültige Verbrauch an Credits wird nach Abschluss der Sitzung ermittelt."
                },
                "fr-FR": {
                  singular: "Les sous-titres en direct sont facturés en fonction de la durée totale de votre événement, l'utilisation finale des crédits étant calculée une fois la session terminée."
                },
                "ja-JP": {
                  singular: "ライブキャプションの料金はイベントの総時間に基づいて請求され、最終的なクレジット使用量はセッション完了後に計算されます。"
                },
                "ko-KR": {
                  singular: "라이브 자막은 이벤트 총 기간을 기준으로 요금이 부과되며, 세션이 종료되면 최종 크레딧 사용량이 계산됩니다."
                },
                "pt-BR": {
                  singular: "As legendas ao vivo são cobradas com base na duração total do seu evento, com o uso final de créditos calculado quando a sessão for concluída."
                },
                "zh-CN": {
                  singular: "实时字幕按活动总时长收费，最终点数使用量将在活动结束后计算。"
                }
              }
            })
          }), (0, _v1.jsx)(_v9.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v12.rem)(16),
            children: _v6 ? (0, _v18.translate)({
              replacements: {
                RATE: _v22.AUTO_CC_CREDITS_PER_MINUTE
              },
              singular: "Live captions use {RATE} credits per minute. If you run out of credits during the event, captions and translations will continue without interruption.",
              dictionary: {
                es: {
                  singular: "Los subtítulos en vivo utilizan {RATE} créditos por minuto. Si te quedas sin créditos durante el evento, los subtítulos y las traducciones continuarán sin interrupción."
                },
                "de-DE": {
                  singular: "Live-Untertitel verbrauchen {RATE} Credits pro Minute. Wenn Ihnen während der Veranstaltung die Credits ausgehen, werden Untertitel und Übersetzungen ohne Unterbrechung fortgesetzt."
                },
                "fr-FR": {
                  singular: "Les sous-titres en direct utilisent {RATE} crédits par minute. Si vous n'avez plus de crédits pendant l'événement, les sous-titres et les traductions continueront sans interruption."
                },
                "ja-JP": {
                  singular: "ライブキャプションは1分あたり{RATE}クレジットを使用します. イベント中にクレジットが不足した場合でも, キャプションと翻訳は中断することなく継続して提供されます."
                },
                "ko-KR": {
                  singular: "실시간 자막은 분당 {RATE} 크레딧을 사용합니다. 이벤트 중에 크레딧이 소진되더라도 자막 및 번역은 중단 없이 계속 제공됩니다."
                },
                "pt-BR": {
                  singular: "Legendas ao vivo consomem {RATE} créditos por minuto. Se você ficar sem créditos durante o evento, as legendas e as traduções continuarão sem interrupção."
                },
                "zh-CN": {
                  singular: "实时字幕每分钟使用 {RATE} 积分。如果您在活动期间积分用尽，字幕和翻译将继续不间断。"
                }
              }
            }) : (0, _v18.translate)({
              replacements: {
                RATE: _v22.AUTO_CC_CREDITS_PER_MINUTE
              },
              singular: "Live captions use {RATE} credits per minute. If you run out of credits during the event, captions will continue without interruption.",
              dictionary: {
                es: {
                  singular: "Los subtítulos en vivo utilizan {RATE} créditos por minuto. Si te quedas sin créditos durante el evento, los subtítulos continuarán sin interrupción."
                },
                "de-DE": {
                  singular: "Live-Untertitel verbrauchen {RATE} Credits pro Minute. Wenn Ihnen während der Veranstaltung die Credits ausgehen, werden die Untertitel ohne Unterbrechung fortgesetzt."
                },
                "fr-FR": {
                  singular: "Les sous-titres en direct utilisent {RATE} crédits par minute. Si vous n'avez plus de crédits pendant l'événement, les sous-titres continueront sans interruption."
                },
                "ja-JP": {
                  singular: "ライブキャプションは1分あたり{RATE}クレジットを使用します. イベント中にクレジットが不足した場合でも, キャプションは中断することなく継続して提供されます."
                },
                "ko-KR": {
                  singular: "실시간 자막은 분당 {RATE} 크레딧을 사용합니다. 이벤트 중에 크레딧이 소진되더라도 자막은 중단 없이 계속 제공됩니다."
                },
                "pt-BR": {
                  singular: "Legendas ao vivo consomem {RATE} créditos por minuto. Se você ficar sem créditos durante o evento, as legendas continuarão sem interrupção."
                },
                "zh-CN": {
                  singular: "实时字幕每分钟使用 {RATE} 积分。如果您在活动期间积分用尽，字幕将继续不间断。"
                }
              }
            })
          }), (0, _v1.jsx)(_v9.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v12.rem)(20),
            children: null !== _v9 ? (0, _v18.translate)({
              replacements: {
                PRICE: _v9
              },
              singular: "Any additional usage will be automatically charged after the event ends at {PRICE} per extra minute using your default payment method.",
              dictionary: {
                es: {
                  singular: "Cualquier uso adicional se cobrará automáticamente después de que finalice el evento a {PRICE} por minuto extra utilizando tu método de pago predeterminado."
                },
                "de-DE": {
                  singular: "Jegliche zusätzliche Nutzung wird nach Ende der Veranstaltung automatisch mit {PRICE} pro zusätzlicher Minute von Ihrer Standard-Zahlungsmethode abgebucht."
                },
                "fr-FR": {
                  singular: "Toute utilisation supplémentaire sera automatiquement facturée après la fin de l'événement à {PRICE} par minute supplémentaire en utilisant votre méthode de paiement par défaut."
                },
                "ja-JP": {
                  singular: "イベント終了後に、追加の使用分はお客様のデフォルトの支払い方法により1分あたり{PRICE}で自動的に課金されます。"
                },
                "ko-KR": {
                  singular: "이벤트 종료 후 추가 사용량은 기본 결제 수단으로 분당 {PRICE}의 요금으로 자동 청구됩니다."
                },
                "pt-BR": {
                  singular: "Qualquer uso adicional será cobrado automaticamente após o término do evento a {PRICE} por minuto extra, usando seu método de pagamento padrão."
                },
                "zh-CN": {
                  singular: "活动结束后，任何额外使用将按每分钟 {PRICE} 向您的默认支付方式自动收费。"
                }
              }
            }) : (0, _v18.translate)({
              singular: "Any additional usage will be automatically charged after the event ends using your default payment method.",
              dictionary: {
                es: {
                  singular: "Cualquier uso adicional se cobrará automáticamente después de que finalice el evento utilizando tu método de pago predeterminado."
                },
                "de-DE": {
                  singular: "Jegliche zusätzliche Nutzung wird nach Ende der Veranstaltung automatisch von Ihrer Standard-Zahlungsmethode abgebucht."
                },
                "fr-FR": {
                  singular: "Toute utilisation supplémentaire sera automatiquement facturée après la fin de l'événement en utilisant votre méthode de paiement par défaut."
                },
                "ja-JP": {
                  singular: "イベント終了後に、追加の使用分はお客様のデフォルトの支払い方法により自動的に課金されます。"
                },
                "ko-KR": {
                  singular: "이벤트 종료 후 추가 사용량은 기본 결제 수단으로 자동 청구됩니다."
                },
                "pt-BR": {
                  singular: "Qualquer uso adicional será cobrado automaticamente após o término do evento, usando seu método de pagamento padrão."
                },
                "zh-CN": {
                  singular: "活动结束后，任何额外使用将通过您的默认支付方式自动收费。"
                }
              }
            })
          }), (0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            background: "fill-component",
            borderRadius: (0, _v12.rem)(8),
            paddingX: (0, _v12.rem)(16),
            paddingY: (0, _v12.rem)(8),
            children: [(0, _v1.jsxs)(_v7.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: (0, _v12.rem)(8),
              children: [(0, _v1.jsx)(_v11.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v18.translate)({
                  singular: "Auto-captions",
                  dictionary: {
                    es: {
                      singular: "Subtítulos automáticos"
                    },
                    "de-DE": {
                      singular: "Automatische Untertitel"
                    },
                    "fr-FR": {
                      singular: "Sous-titres automatiques"
                    },
                    "ja-JP": {
                      singular: "自動キャプション"
                    },
                    "ko-KR": {
                      singular: "자동 자막"
                    },
                    "pt-BR": {
                      singular: "Legendas automáticas"
                    },
                    "zh-CN": {
                      singular: "自动字幕"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                alignItems: "center",
                gap: (0, _v12.rem)(4),
                children: [(0, _v1.jsx)(_v14.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v1.jsx)(_v11.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v18.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v22.AUTO_CC_CREDITS_PER_MINUTE
                    },
                    dictionary: {
                      "ja-JP": {
                        singular: "{RATE}/分"
                      },
                      "ko-KR": {
                        singular: "{RATE}/분"
                      }
                    }
                  })
                })]
              })]
            }), _v6 ? (0, _v1.jsxs)(_v7.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: (0, _v12.rem)(8),
              children: [(0, _v1.jsx)(_v11.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v18.translate)({
                  singular: "{COUNT} translation",
                  plural: "{COUNT} translations",
                  count: _v2,
                  replacements: {
                    COUNT: _v2
                  },
                  dictionary: {
                    es: {
                      singular: "{COUNT} traducción",
                      plural: "{COUNT} traducciones"
                    },
                    "de-DE": {
                      singular: "{COUNT} Übersetzung",
                      plural: "{COUNT} Übersetzungen"
                    },
                    "fr-FR": {
                      singular: "{COUNT} traduction",
                      plural: "{COUNT} traductions"
                    },
                    "ja-JP": {
                      singular: "{COUNT} 件の翻訳",
                      plural: "{COUNT} 件の翻訳"
                    },
                    "ko-KR": {
                      singular: "{COUNT}개의 번역",
                      plural: "{COUNT}개의 번역"
                    },
                    "pt-BR": {
                      singular: "{COUNT} tradução",
                      plural: "{COUNT} traduções"
                    },
                    "zh-CN": {
                      singular: "{COUNT} 个翻译",
                      plural: "{COUNT} 个翻译"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                alignItems: "center",
                gap: (0, _v12.rem)(4),
                children: [(0, _v1.jsx)(_v14.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v1.jsx)(_v11.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v18.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v7
                    },
                    dictionary: {
                      "ja-JP": {
                        singular: "{RATE}/分"
                      },
                      "ko-KR": {
                        singular: "{RATE}/분"
                      }
                    }
                  })
                })]
              })]
            }) : null]
          }), (0, _v1.jsxs)(_v7.Flex, {
            marginTop: (0, _v12.rem)(8),
            background: "fill-component",
            borderRadius: (0, _v12.rem)(8),
            paddingX: (0, _v12.rem)(16),
            paddingY: (0, _v12.rem)(16),
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v11.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v18.translate)({
                singular: "Additional credits",
                dictionary: {
                  es: {
                    singular: "Créditos adicionales"
                  },
                  "de-DE": {
                    singular: "Zusätzliche Credits"
                  },
                  "fr-FR": {
                    singular: "Crédits supplémentaires"
                  },
                  "ja-JP": {
                    singular: "追加クレジット"
                  },
                  "ko-KR": {
                    singular: "추가 크레딧"
                  },
                  "pt-BR": {
                    singular: "Créditos adicionais"
                  },
                  "zh-CN": {
                    singular: "额外点数"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.Text, {
              variant: "heading-xs",
              color: "text-primary",
              children: _v10
            })]
          })]
        })]
      })]
    });
  }
  _v0.s(["AutoCcSettings", 0, function ({
    id: _v0 = (0, _v37.createDomName)("auto-cc-settings"),
    className: _v1 = (0, _v37.createDomName)("auto-cc-settings"),
    eventSettingsContext: {
      settings: {
        isLoading: _v2,
        value: _v3
      },
      actions: {
        updateLiveEventSettings: _v4
      }
    } = (0, _v2.useManager)(_v32.EventSettingsManager),
    composerSessionStatusContext: {
      liveComposerStatuses: _v5
    } = (0, _v2.useManager)(_v31.ComposerSessionStatusManager)
  }) {
    let {
        trackLiveStreamClosedCaptionsToggled: _v6
      } = (0, _v40.useLiveStreamBroadcasterTracking)(),
      {
        open: _v7,
        upgradeModal: _v8
      } = (0, _v21.useAutoCCUpgradeModal)(),
      _v9 = (0, _v28.useIsLiveDemoSubscription)(),
      _v10 = _v5.isSessionRequested || _v5.isSessionInitializing,
      _v11 = (0, _v41.useIsVpaas)(),
      _v12 = (0, _v30.useSessionOwnerId)(),
      _v13 = (0, _v27.useCanEnableLiveCaptionsForLiveEvent)(_v12),
      {
        capabilities: _v14
      } = (0, _v15.useCapability)(["hasEntitlementAiCredits", "hasLiveAutoCcEnhanced", "hasLiveAutoCcAiCredits", "hasLiveAutoTranslation"], _v12 || null),
      _v15 = !!_v14.hasLiveAutoCcEnhanced,
      _v16 = !!_v14.hasLiveAutoCcAiCredits,
      _v17 = !!_v14.hasLiveAutoTranslation,
      _v18 = !!_v14.hasEntitlementAiCredits,
      {
        data: _v19
      } = (0, _v16.useGetUser)(() => _v12 && _v16 ? {
        select: ["aiCreditsQuota"],
        where: {
          userId: _v12
        }
      } : null),
      _v20 = _v19?.aiCreditsQuota?.remaining ?? 0,
      _v21 = !(0, _v29.useIsSalesAssistedTier)(_v12),
      _v22 = _v3?.autoCcTranslationLanguages?.length ?? 0,
      {
        data: _v23
      } = (0, _v17.useGetUserAiCreditsBillingInfo)(() => _v12 && _v21 ? {
        select: ["unitAmount", "currency"],
        where: {
          userId: String(_v12)
        }
      } : null),
      {
        modal: _v24,
        open: _v25
      } = function ({
        translationLanguageCount: _v0,
        unitAmount: _v1,
        currency: _v2
      }) {
        let [_v3, _v4] = (0, _v3.useState)(!1),
          _v5 = (0, _v3.useCallback)(() => _v4(!0), []),
          _v6 = (0, _v3.useCallback)(() => _v4(!1), []);
        return {
          modal: (0, _v1.jsx)(_v49, {
            isOpen: _v3,
            onClose: _v6,
            translationLanguageCount: _v0,
            unitAmount: _v1,
            currency: _v2
          }),
          open: _v5,
          close: _v6,
          isOpen: _v3
        };
      }({
        translationLanguageCount: _v22,
        unitAmount: _v23?.unitAmount ?? null,
        currency: _v23?.currency ?? null
      }),
      _v26 = (0, _v3.useCallback)(() => {
        (0, _v34.trackUpgradeAutoCc)(_v26.vimeoConfig.PATH.CONTACT_US_FORM_EVENT), _v7();
      }, [_v7]),
      _v27 = (0, _v3.useCallback)(_v0 => {
        _v0.enabled !== _v3?.autoCcEnabled && ((0, _v33.trackEnabledAutoCc)(_v0.enabled), _v6({
          liveStreamNewStatus: _v0.enabled
        })), null !== _v0.language && _v0.language !== _v3?.autoCcLanguage && (0, _v33.trackSelectAutoCcLanguage)(_v0.language), _v15 ? _v4({
          autoCcEnabled: _v0.enabled,
          ...(null !== _v0.language ? {
            autoCcLanguage: _v0.language
          } : {}),
          autoCcKeywords: _v3?.autoCcKeywords
        }, []) : _v4({
          autoCcEnabled: _v0.enabled,
          autoCcLanguage: _v0.language ?? _v3?.autoCcLanguage,
          autoCcKeywords: _v3?.autoCcKeywords
        }, []);
      }, [_v3?.autoCcEnabled, _v3?.autoCcLanguage, _v3?.autoCcKeywords, _v4, _v6, _v15]),
      _v28 = (0, _v3.useCallback)(_v0 => {
        (0, _v33.trackEnterAutoCcKeywords)(), _v4({
          autoCcKeywords: _v0.join(","),
          autoCcEnabled: _v3?.autoCcEnabled,
          autoCcLanguage: _v3?.autoCcLanguage
        }, []);
      }, [_v3?.autoCcEnabled, _v3?.autoCcLanguage, _v4]),
      _v29 = (0, _v3.useCallback)(_v0 => {
        _v4({
          autoCcEnabled: _v3?.autoCcEnabled,
          ...(_v3?.autoCcLanguage ? {
            autoCcLanguage: _v3.autoCcLanguage
          } : {}),
          autoCcKeywords: _v3?.autoCcKeywords,
          autoCcTranslationEnabled: _v0.length > 0,
          autoCcTranslationLanguages: _v0
        }, []);
      }, [_v3, _v4]);
    if (_v2 || !_v3) return (0, _v1.jsx)(_v19.BokehSkeleton, {
      id: (0, _v37.createDomName)(_v0, "loader"),
      className: (0, _v37.createDomName)(_v1, "loader"),
      height: (0, _v12.rem)(80),
      marginBottom: (0, _v12.rem)(8),
      width: "100%",
      borderRadius: (0, _v12.rem)(4)
    });
    let {
        autoCcKeywords: _v30,
        autoCcLanguage: _v31,
        autoCcEnabled: _v32,
        autoCcTranslationLanguages: _v33,
        autoCcLimit: _v34,
        autoCcRemaining: _v35,
        unlimitedAutoCc: _v36,
        latency: _v37
      } = _v3,
      _v38 = _v5.isSessionLive,
      _v39 = _v33?.length ?? 0,
      _v40 = _v39 * _v22.AUTO_CC_TRANSLATION_CREDITS_PER_MINUTE;
    if (_v16) {
      let _v0 = _v40 + (_v36 ? 0 : _v22.AUTO_CC_CREDITS_PER_MINUTE),
        _v1 = !_v36 && !_v21 && _v20 <= 0,
        _v2 = _v37 === _v36.EEventLatency.Low || _v1 || _v9 || !_v13,
        _v3 = _v32 && !_v1 && !_v9,
        _v4 = _v3 && !_v36 && !_v11,
        _v5 = (0, _v38.inline)(() => _v38 ? _v35.T_AUTO_CC_LOCKED_WHILE_LIVE : _v9 ? _v35.T_AUTO_CC_IS_NOT_AVAILABLE_FOR_DEMO : _v1 ? _v35.T_AUTO_CC_PLAN_LIMIT_REACHED : _v13 ? _v37 === _v36.EEventLatency.Low ? (0, _v35.T_AUTO_CC_LOW_LATENCY_STREAM_TIP)() : "" : (0, _v18.translate)({
          singular: "You are not permitted to enable auto CC for live events. Please ask your team owner to change this if needed.",
          dictionary: {
            es: {
              singular: "No tiene permiso para activar los subtítulos automáticos (CC) en eventos en vivo. Pida al propietario de su equipo que lo cambie si es necesario."
            },
            "de-DE": {
              singular: "Ihnen ist es nicht gestattet, die automatische Untertitelung für Live-Events zu aktivieren. Bitte bitten Sie den Teambesitzer, dies bei Bedarf zu ändern."
            },
            "fr-FR": {
              singular: "Vous n'êtes pas autorisé à activer le sous-titrage automatique pour les événements en direct. Veuillez demander au propriétaire de votre équipe de modifier ce paramètre si nécessaire."
            },
            "ja-JP": {
              singular: "ライブイベントでauto CCを有効にすることは許可されていません。必要な場合はチームのオーナーに変更を依頼してください。"
            },
            "ko-KR": {
              singular: "라이브 이벤트에서 auto CC를 활성화할 권한이 없습니다. 필요할 경우 팀 소유자에게 변경을 요청하세요."
            },
            "pt-BR": {
              singular: "Você não tem permissão para ativar CC automático para eventos ao vivo. Peça ao proprietário da sua equipe para alterar isso, se necessário."
            },
            "zh-CN": {
              singular: "您无权限为直播活动启用自动字幕。如有需要，请联系您的团队所有者以进行更改。"
            }
          }
        })),
        _v6 = (0, _v18.translate)({
          replacements: {
            NUMBER: _v0
          },
          singular: "Your current credits are not enough to add auto-captions and captions translations. You need at least {NUMBER} credits to start the live. Please reach out to your Account Manager.",
          dictionary: {
            es: {
              singular: "Sus créditos actuales no son suficientes para añadir subtítulos automáticos y traducciones de subtítulos. Necesita al menos {NUMBER} créditos para iniciar la transmisión en vivo. Por favor, póngase en contacto con su gerente de cuenta."
            },
            "de-DE": {
              singular: "Ihre aktuellen Credits reichen nicht aus, um automatische Untertitel und Untertitelübersetzungen hinzuzufügen. Sie benötigen mindestens {NUMBER} Credits, um die Live-Übertragung zu starten. Bitte wenden Sie sich an Ihren Account Manager."
            },
            "fr-FR": {
              singular: "Vos crédits actuels ne suffisent pas pour ajouter des sous-titres automatiques et leurs traductions. Vous avez besoin d'au moins {NUMBER} crédits pour démarrer la diffusion en direct. Veuillez contacter votre responsable de compte."
            },
            "ja-JP": {
              singular: "自動字幕および字幕翻訳を追加するための現在のクレジットが不足しています。ライブ配信を開始するには最低{NUMBER}クレジットが必要です。アカウントマネージャーにお問い合わせください。"
            },
            "ko-KR": {
              singular: "현재 보유한 크레딧이 자동 자막 및 자막 번역을 추가하기에 충분하지 않습니다. 라이브를 시작하려면 최소 {NUMBER} 크레딧이 필요합니다. 계정 관리자에게 문의해 주세요."
            },
            "pt-BR": {
              singular: "Seus créditos atuais não são suficientes para adicionar legendas automáticas e traduções de legendas. Você precisa de pelo menos {NUMBER} créditos para iniciar a transmissão ao vivo. Por favor, entre em contato com o seu gerente de conta."
            },
            "zh-CN": {
              singular: "您当前的积分不足，无法添加自动字幕和字幕翻译. 您需要至少 {NUMBER} 积分才能开始直播. 请联系您的客户经理."
            }
          }
        }),
        _v7 = (0, _v18.translate)({
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v11.Text, {
              as: "a",
              fontSize: "inherit",
              textDecoration: "underline",
              href: "/enterprise/contact-us?mkc=auto_cc",
              target: "_blank",
              children: _v0
            }, "contact-us")
          },
          singular: "To increase your AI credits, please reach out to your Account Manager or {LINK}contact us{/LINK}.",
          dictionary: {
            es: {
              singular: "Para aumentar sus créditos de IA, póngase en contacto con su gerente de cuenta o {LINK}contáctenos{/LINK}."
            },
            "de-DE": {
              singular: "Um Ihre KI-Credits zu erhöhen, wenden Sie sich bitte an Ihren Account Manager oder {LINK}kontaktieren Sie uns{/LINK}."
            },
            "fr-FR": {
              singular: "Pour augmenter vos crédits d'IA, veuillez contacter votre responsable de compte ou {LINK}contactez-nous{/LINK}."
            },
            "ja-JP": {
              singular: "AIクレジットを増やすには、アカウントマネージャーにご相談いただくか、{LINK}お問い合わせください{/LINK}。"
            },
            "ko-KR": {
              singular: "AI 크레딧을 늘리려면 담당 계정 관리자에게 문의하시거나 {LINK}문의하기{/LINK}."
            },
            "pt-BR": {
              singular: "Para aumentar seus créditos de IA, entre em contato com seu gerente de conta ou {LINK}contate-nos{/LINK}."
            },
            "zh-CN": {
              singular: "如需增加您的 AI 积分，请联系您的客户经理或 {LINK}联系我们{/LINK}。"
            }
          }
        }),
        _v8 = (0, _v18.translate)({
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v11.Text, {
              as: "a",
              fontSize: "inherit",
              textDecoration: "underline",
              cursor: "pointer",
              onClick: _v25,
              children: _v0
            }, "self-serve-learn-more")
          },
          singular: "When your credits run out, you'll be charged for your usage on your default payment method. {LINK}Learn more{/LINK}",
          dictionary: {
            es: {
              singular: "Cuando se agoten tus créditos, se te cobrará por el uso en tu método de pago predeterminado. {LINK}Más información{/LINK}"
            },
            "de-DE": {
              singular: "Wenn Ihre Credits aufgebraucht sind, werden Ihnen die weiteren Nutzungen über Ihre Standard-Zahlungsmethode berechnet. {LINK}Mehr erfahren{/LINK}"
            },
            "fr-FR": {
              singular: "Lorsque vos crédits seront épuisés, vous serez facturé pour votre utilisation sur votre méthode de paiement par défaut. {LINK}En savoir plus{/LINK}"
            },
            "ja-JP": {
              singular: "クレジットがなくなった場合、使用分はデフォルトの支払い方法に請求されます。 {LINK}詳細はこちら{/LINK}"
            },
            "ko-KR": {
              singular: "크레딧이 소진되면 기본 결제 수단으로 사용량이 청구됩니다. {LINK}자세히 알아보기{/LINK}"
            },
            "pt-BR": {
              singular: "Quando seus créditos acabarem, você será cobrado pelo uso no seu método de pagamento padrão. {LINK}Saiba mais{/LINK}"
            },
            "zh-CN": {
              singular: "当您的点数用尽时，您将通过默认支付方式为使用量付费。 {LINK}了解详情{/LINK}"
            }
          }
        }),
        _v9 = (0, _v18.translate)({
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v11.Text, {
              variant: "body-xl",
              as: "a",
              fontSize: "sm",
              textDecoration: "underline",
              href: _v22.AUTO_CC_ZENDESK_LINK,
              target: "_blank",
              sx: {
                textWrap: "nowrap"
              },
              children: _v0
            }, "captions-will-show")
          },
          singular: "At your next renewal, your captions plan will switch from hours to an AI credits system. {LINK}Learn more{/LINK}",
          dictionary: {
            es: {
              singular: "En su próxima renovación, su plan de subtítulos cambiará de horas a un sistema de créditos de IA. {LINK}Más información{/LINK}"
            },
            "de-DE": {
              singular: "Bei Ihrer nächsten Verlängerung wird Ihr Untertitelplan von Stunden auf ein KI-Guthabensystem umgestellt. {LINK}Mehr erfahren{/LINK}"
            },
            "fr-FR": {
              singular: "Lors de votre prochain renouvellement, votre forfait de sous-titres passera d'un système basé sur les heures à un système de crédits IA. {LINK}En savoir plus{/LINK}"
            },
            "ja-JP": {
              singular: "次回の更新時に、キャプションプランは時間制からAIクレジット制に切り替わります。{LINK}詳細はこちら{/LINK}"
            },
            "ko-KR": {
              singular: "다음 갱신 시, 자막 플랜이 시간제에서 AI 크레딧 시스템으로 전환됩니다. {LINK}자세히 알아보기{/LINK}"
            },
            "pt-BR": {
              singular: "Na sua próxima renovação, seu plano de legendas será alterado de horas para um sistema de créditos de IA. {LINK}Saiba mais{/LINK}"
            },
            "zh-CN": {
              singular: "在您下一次续订时，您的字幕计划将从按小时计费切换为 AI 积分系统。{LINK}了解更多{/LINK}"
            }
          }
        });
      return (0, _v1.jsxs)(_v7.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        maxWidth: "100%",
        width: "100%",
        children: [_v38 ? (0, _v1.jsx)(_v4.Alert, {
          status: "warning",
          marginBottom: (0, _v12.rem)(16),
          children: (0, _v1.jsx)(_v13.AlertDescription, {
            fontSize: "body-sm",
            children: (0, _v18.translate)({
              singular: "Caption editing is unavailable during a live broadcast.",
              dictionary: {
                es: {
                  singular: "La edición de subtítulos no está disponible durante una transmisión en vivo."
                },
                "de-DE": {
                  singular: "Die Bearbeitung von Untertiteln ist während einer Live-Übertragung nicht möglich."
                },
                "fr-FR": {
                  singular: "L'édition des sous-titres n'est pas disponible pendant une diffusion en direct."
                },
                "ja-JP": {
                  singular: "ライブ配信中はキャプション編集をご利用いただけません。"
                },
                "ko-KR": {
                  singular: "자막 편집은 라이브 방송 중에는 사용할 수 없습니다."
                },
                "pt-BR": {
                  singular: "A edição de legendas não está disponível durante uma transmissão ao vivo."
                },
                "zh-CN": {
                  singular: "直播期间无法编辑字幕。"
                }
              }
            })
          })
        }) : null, (0, _v1.jsx)(_v23.AutoCc, {
          location: _v36.ESettingsLocation.Settings,
          value: _v32 && !_v1,
          language: _v31,
          isDisabled: _v2,
          isLocked: _v38,
          isLoading: _v10,
          disabledTip: _v5,
          onChange: _v27,
          hasExpandedLanguages: _v15
        }), _v3 ? (0, _v1.jsx)(_v24.AutoCcKeywords, {
          isLoading: _v10,
          isDisabled: _v38,
          keywords: _v30 ? _v30.split(",") : [],
          onChange: _v28
        }) : null, _v32 && _v36 ? (0, _v1.jsx)(_v7.Flex, {
          backgroundColor: "fill-component-secondary",
          marginTop: (0, _v12.rem)(8),
          paddingY: (0, _v12.rem)(4),
          borderRadius: (0, _v12.rem)(8),
          children: (0, _v1.jsxs)(_v7.Flex, {
            paddingY: (0, _v12.rem)(8),
            paddingX: (0, _v12.rem)(8),
            gap: (0, _v12.rem)(8),
            flexDirection: "row",
            children: [(0, _v1.jsx)(_v11.Text, {
              color: "text-secondary",
              variant: "body-md",
              children: (0, _v18.translate)({
                singular: "Auto-captions",
                dictionary: {
                  es: {
                    singular: "Subtítulos automáticos"
                  },
                  "de-DE": {
                    singular: "Automatische Untertitel"
                  },
                  "fr-FR": {
                    singular: "Sous-titres automatiques"
                  },
                  "ja-JP": {
                    singular: "自動キャプション"
                  },
                  "ko-KR": {
                    singular: "자동 자막"
                  },
                  "pt-BR": {
                    singular: "Legendas automáticas"
                  },
                  "zh-CN": {
                    singular: "自动字幕"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.Text, {
              color: "text-primary",
              variant: "heading-xs",
              children: (0, _v18.translate)({
                singular: "Unlimited stream time",
                dictionary: {
                  es: {
                    singular: "Tiempo de transmisión ilimitado"
                  },
                  "de-DE": {
                    singular: "Unbegrenzte Streamingzeit"
                  },
                  "fr-FR": {
                    singular: "Temps de streaming illimité"
                  },
                  "ja-JP": {
                    singular: "無制限のストリーム時間"
                  },
                  "ko-KR": {
                    singular: "무제한 스트리밍 시간"
                  },
                  "pt-BR": {
                    singular: "Tempo de transmissão ilimitado"
                  },
                  "zh-CN": {
                    singular: "无限串流时间"
                  }
                }
              })
            })]
          })
        }) : null, _v32 && _v36 ? (0, _v1.jsx)(_v9.Paragraph, {
          size: "sm",
          margin: `${(0, _v12.rem)(8)} 0`,
          color: "text-secondary",
          children: _v9
        }) : null, _v17 ? (0, _v1.jsx)(_v25.CaptionsTranslations, {
          isDisabled: _v38 || !_v3,
          disabledTip: _v38 ? _v35.T_AUTO_CC_LOCKED_WHILE_LIVE : void 0,
          selectedLanguages: _v33 ?? [],
          sourceLanguage: _v31,
          onChange: _v29
        }) : null, _v4 || _v17 && _v32 ? (0, _v1.jsxs)(_v7.Flex, {
          direction: "column",
          alignSelf: "stretch",
          marginTop: (0, _v12.rem)(16),
          gap: (0, _v12.rem)(16),
          children: [(0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            background: "fill-component",
            paddingY: (0, _v12.rem)(8),
            borderRadius: (0, _v12.rem)(16),
            children: [_v4 ? (0, _v1.jsxs)(_v7.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: (0, _v12.rem)(16),
              paddingTop: (0, _v12.rem)(8),
              paddingBottom: _v17 && _v39 > 0 ? (0, _v12.rem)(8) : (0, _v12.rem)(16),
              children: [(0, _v1.jsx)(_v11.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v18.translate)({
                  singular: "Auto-captions",
                  dictionary: {
                    es: {
                      singular: "Subtítulos automáticos"
                    },
                    "de-DE": {
                      singular: "Automatische Untertitel"
                    },
                    "fr-FR": {
                      singular: "Sous-titres automatiques"
                    },
                    "ja-JP": {
                      singular: "自動キャプション"
                    },
                    "ko-KR": {
                      singular: "자동 자막"
                    },
                    "pt-BR": {
                      singular: "Legendas automáticas"
                    },
                    "zh-CN": {
                      singular: "自动字幕"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                alignItems: "center",
                gap: (0, _v12.rem)(2),
                children: [(0, _v1.jsx)(_v14.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v1.jsx)(_v11.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v18.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v22.AUTO_CC_CREDITS_PER_MINUTE
                    },
                    dictionary: {
                      "ja-JP": {
                        singular: "{RATE}/分"
                      },
                      "ko-KR": {
                        singular: "{RATE}/분"
                      }
                    }
                  })
                })]
              })]
            }) : null, _v17 && _v39 > 0 ? (0, _v1.jsxs)(_v7.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: (0, _v12.rem)(16),
              paddingBottom: (0, _v12.rem)(16),
              children: [(0, _v1.jsx)(_v11.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v18.translate)({
                  singular: "{COUNT} translation",
                  plural: "{COUNT} translations",
                  count: _v39,
                  replacements: {
                    COUNT: _v39
                  },
                  dictionary: {
                    es: {
                      singular: "{COUNT} traducción",
                      plural: "{COUNT} traducciones"
                    },
                    "de-DE": {
                      singular: "{COUNT} Übersetzung",
                      plural: "{COUNT} Übersetzungen"
                    },
                    "fr-FR": {
                      singular: "{COUNT} traduction",
                      plural: "{COUNT} traductions"
                    },
                    "ja-JP": {
                      singular: "{COUNT} 件の翻訳",
                      plural: "{COUNT} 件の翻訳"
                    },
                    "ko-KR": {
                      singular: "{COUNT}개의 번역",
                      plural: "{COUNT}개의 번역"
                    },
                    "pt-BR": {
                      singular: "{COUNT} tradução",
                      plural: "{COUNT} traduções"
                    },
                    "zh-CN": {
                      singular: "{COUNT} 个翻译",
                      plural: "{COUNT} 个翻译"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                alignItems: "center",
                gap: (0, _v12.rem)(2),
                children: [(0, _v1.jsx)(_v14.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v1.jsx)(_v11.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v18.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v40
                    },
                    dictionary: {
                      "ja-JP": {
                        singular: "{RATE}/分"
                      },
                      "ko-KR": {
                        singular: "{RATE}/분"
                      }
                    }
                  })
                })]
              })]
            }) : null, _v32 ? (0, _v1.jsxs)(_v7.Flex, {
              alignItems: "center",
              justifyContent: "center",
              gap: (0, _v12.rem)(6),
              paddingX: (0, _v12.rem)(16),
              children: [(0, _v1.jsx)(_v14.VimeoCoin, {
                boxSize: 16,
                color: "text-secondary",
                flexShrink: 0
              }), (0, _v1.jsx)(_v11.Text, {
                variant: "body-sm",
                color: "text-tertiary",
                children: (0, _v18.translate)({
                  singular: "{AMOUNT} credits remaining",
                  replacements: {
                    AMOUNT: Math.max(_v20, 0).toLocaleString()
                  },
                  dictionary: {
                    es: {
                      singular: "{AMOUNT} créditos restantes"
                    },
                    "de-DE": {
                      singular: "{AMOUNT} Credits verbleibend"
                    },
                    "fr-FR": {
                      singular: "{AMOUNT} crédits restants"
                    },
                    "ja-JP": {
                      singular: "{AMOUNT} クレジットが残っています"
                    },
                    "ko-KR": {
                      singular: "{AMOUNT} 크레딧 남음"
                    },
                    "pt-BR": {
                      singular: "{AMOUNT} créditos restantes"
                    },
                    "zh-CN": {
                      singular: "剩余 {AMOUNT} 积分"
                    }
                  }
                })
              })]
            }) : null]
          }), _v0 > _v20 && _v18 ? (0, _v1.jsx)(_v4.Alert, {
            status: "warning",
            children: (0, _v1.jsx)(_v13.AlertDescription, {
              fontSize: "body-sm",
              children: _v6
            })
          }) : null, _v32 ? (0, _v1.jsx)(_v11.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v21 ? _v8 : _v7
          }) : null, _v32 ? (0, _v1.jsx)(_v11.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: (0, _v18.translate)({
              singular: "Captions and translations are AI-generated and may contain inaccuracies.",
              dictionary: {
                es: {
                  singular: "Los subtítulos y las traducciones son generados por IA y pueden contener inexactitudes."
                },
                "de-DE": {
                  singular: "Untertitel und Übersetzungen werden KI-generiert und können Ungenauigkeiten enthalten."
                },
                "fr-FR": {
                  singular: "Les sous-titres et les traductions sont générés par l’IA et peuvent contenir des inexactitudes."
                },
                "ja-JP": {
                  singular: "キャプションと翻訳はAIによって生成されており、誤りが含まれる可能性があります。"
                },
                "ko-KR": {
                  singular: "자막 및 번역은 AI로 생성되었으며 부정확할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Legendas e traduções são geradas por IA e podem conter imprecisões."
                },
                "zh-CN": {
                  singular: "字幕和翻译由 AI 生成，可能包含不准确之处。"
                }
              }
            })
          }) : null]
        }) : null, _v24]
      });
    }
    let _v41 = Number((100 - (_v35 ?? 0) / (_v34 ?? 1) * 100).toFixed(2)),
      _v42 = !!(!_v36 && (_v35 ?? 1) <= 0),
      _v43 = _v37 === _v36.EEventLatency.Low || _v42 || _v9 || !_v13,
      _v44 = (0, _v38.inline)(() => _v38 ? _v35.T_AUTO_CC_LOCKED_WHILE_LIVE : _v9 ? _v35.T_AUTO_CC_IS_NOT_AVAILABLE_FOR_DEMO : _v42 ? _v35.T_AUTO_CC_PLAN_LIMIT_REACHED : _v13 ? _v37 === _v36.EEventLatency.Low ? (0, _v35.T_AUTO_CC_LOW_LATENCY_STREAM_TIP)() : "" : (0, _v18.translate)({
        singular: "You are not permitted to enable auto CC for live events. Please ask your team owner to change this if needed.",
        dictionary: {
          es: {
            singular: "No tiene permiso para activar los subtítulos automáticos (CC) en eventos en vivo. Pida al propietario de su equipo que lo cambie si es necesario."
          },
          "de-DE": {
            singular: "Ihnen ist es nicht gestattet, die automatische Untertitelung für Live-Events zu aktivieren. Bitte bitten Sie den Teambesitzer, dies bei Bedarf zu ändern."
          },
          "fr-FR": {
            singular: "Vous n'êtes pas autorisé à activer le sous-titrage automatique pour les événements en direct. Veuillez demander au propriétaire de votre équipe de modifier ce paramètre si nécessaire."
          },
          "ja-JP": {
            singular: "ライブイベントでauto CCを有効にすることは許可されていません。必要な場合はチームのオーナーに変更を依頼してください。"
          },
          "ko-KR": {
            singular: "라이브 이벤트에서 auto CC를 활성화할 권한이 없습니다. 필요할 경우 팀 소유자에게 변경을 요청하세요."
          },
          "pt-BR": {
            singular: "Você não tem permissão para ativar CC automático para eventos ao vivo. Peça ao proprietário da sua equipe para alterar isso, se necessário."
          },
          "zh-CN": {
            singular: "您无权限为直播活动启用自动字幕。如有需要，请联系您的团队所有者以进行更改。"
          }
        }
      }));
    return (0, _v1.jsxs)(_v7.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      maxWidth: "100%",
      width: "100%",
      children: [_v38 ? (0, _v1.jsx)(_v4.Alert, {
        status: "warning",
        marginBottom: (0, _v12.rem)(16),
        children: (0, _v1.jsx)(_v13.AlertDescription, {
          fontSize: "body-sm",
          children: (0, _v18.translate)({
            singular: "Caption editing is unavailable during a live broadcast.",
            dictionary: {
              es: {
                singular: "La edición de subtítulos no está disponible durante una transmisión en vivo."
              },
              "de-DE": {
                singular: "Die Bearbeitung von Untertiteln ist während einer Live-Übertragung nicht möglich."
              },
              "fr-FR": {
                singular: "L'édition des sous-titres n'est pas disponible pendant une diffusion en direct."
              },
              "ja-JP": {
                singular: "ライブ配信中はキャプション編集をご利用いただけません。"
              },
              "ko-KR": {
                singular: "자막 편집은 라이브 방송 중에는 사용할 수 없습니다."
              },
              "pt-BR": {
                singular: "A edição de legendas não está disponível durante uma transmissão ao vivo."
              },
              "zh-CN": {
                singular: "直播期间无法编辑字幕。"
              }
            }
          })
        })
      }) : null, (0, _v1.jsx)(_v23.AutoCc, {
        location: _v36.ESettingsLocation.Settings,
        value: _v32 && !_v42,
        language: _v31,
        isDisabled: _v43,
        isLocked: _v38,
        isLoading: _v10,
        disabledTip: _v44,
        onChange: _v27,
        hasExpandedLanguages: _v15
      }), !_v32 || _v42 || _v9 ? null : (0, _v1.jsx)(_v24.AutoCcKeywords, {
        isLoading: _v10,
        isDisabled: _v38,
        keywords: _v30 ? _v30.split(",") : [],
        onChange: _v28
      }), _v36 || _v9 || _v11 ? null : (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        background: "surface",
        marginTop: (0, _v12.rem)(16),
        padding: (0, _v12.rem)(16),
        borderRadius: (0, _v12.rem)(8),
        border: "1px solid",
        borderColor: "stroke",
        children: [(0, _v1.jsx)(_v9.Paragraph, {
          size: "md",
          color: "text-primary",
          fontWeight: "bold",
          children: (0, _v39.getFormattedTimecodeFromSeconds)(Math.max(_v35 ?? 0, 0), _v39.TimecodeFormats.LongWithoutDays, {
            shouldShowZero: !0
          })
        }), (0, _v1.jsx)(_v10.Progress, {
          id: (0, _v37.createDomName)(_v0, "usage-progress"),
          className: (0, _v37.createDomName)(_v1, "usage-progress"),
          margin: `${(0, _v12.rem)(4)} 0`,
          size: "sm",
          variant: "neutral",
          value: _v41,
          sx: {
            "& > div": {
              background: "upsell-primary"
            }
          }
        }), (0, _v1.jsxs)(_v7.Flex, {
          alignItems: "center",
          gap: (0, _v12.rem)(4),
          children: [(0, _v1.jsxs)(_v8.Header, {
            size: "xs",
            children: [" ", _v35.T_AUTO_CC_REMAINING, " "]
          }), (0, _v1.jsx)(_v20.CircleTip, {
            label: _v35.T_AUTO_CC_TIP
          })]
        }), (0, _v1.jsx)(_v6.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v12.rem)(12)} 0`
        }), (0, _v1.jsx)(_v9.Paragraph, {
          size: "md",
          color: "text-secondary",
          children: _v42 ? _v35.T_AUTO_CC_UPSELL_REACHED : _v35.T_AUTO_CC_UPSELL
        }), (0, _v1.jsx)(_v5.Button, {
          size: "sm",
          width: "100%",
          marginTop: (0, _v12.rem)(12),
          variant: "upsell",
          onClick: _v26,
          children: _v35.T_CONTACT_SALES
        })]
      }), _v8]
    });
  }], 0);
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  function _v56({
    position: _v0,
    left: _v1,
    top: _v2,
    bottom: _v3,
    right: _v4,
    onCancelClick: _v5,
    onSaveClick: _v6,
    isLoading: _v7,
    isDisabled: _v8
  }) {
    return (0, _v1.jsxs)(_v7.Flex, {
      position: _v0,
      left: _v1,
      top: _v2,
      right: _v4,
      bottom: _v3,
      flexWrap: "nowrap",
      gap: (0, _v12.rem)(4),
      justifyContent: "flex-end",
      children: [(0, _v1.jsx)(_v5.Button, {
        size: "xs",
        isDisabled: _v7,
        variant: "secondary",
        onClick: _v5,
        children: _v35.T_CANCEL
      }), (0, _v1.jsx)(_v5.Button, {
        size: "xs",
        isLoading: _v7,
        isDisabled: _v8,
        variant: "primary",
        onClick: _v6,
        children: _v55.rtmpTranslations.save
      })]
    });
  }
  var _v57 = _v0.i(0);
  _v0.s(["BasicSettings", 0, function ({
    id: _v0 = (0, _v57.createLiveDomName)("basic-settings"),
    eventSettingsContext: {
      settings: {
        value: _v1
      },
      actions: {
        updateLiveEventSettings: _v2
      }
    } = (0, _v2.useManager)(_v32.EventSettingsManager)
  }) {
    let {
        trackLiveStreamBasicsChanged: _v3
      } = (0, _v40.useLiveStreamBroadcasterTracking)(),
      [_v4, _v5] = (0, _v3.useState)(_v1?.title ?? null),
      [_v6, _v7] = (0, _v3.useState)(_v1?.streamDescription ?? null),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)(!1),
      [_v12, _v13] = (0, _v3.useState)(!1),
      [_v14, _v15] = (0, _v3.useState)(!1),
      [_v16, _v17] = (0, _v3.useState)(0),
      [_v18, _v19] = (0, _v3.useState)(0);
    (0, _v3.useEffect)(() => {
      _v1?.title && _v5(_v1?.title);
    }, [_v1?.title]), (0, _v3.useEffect)(() => {
      null !== _v4 && _v4 === _v1?.title && _v8 && _v9(!1), null === _v6 && _v1?.streamDescription && _v7(_v1.streamDescription), null !== _v6 && _v6 === _v1?.streamDescription && _v10 && _v11(!1);
    }, [_v1?.title, _v1?.streamDescription, _v4, _v5, _v6, _v7, _v8, _v10, _v9, _v11]);
    let _v20 = (0, _v3.useCallback)(_v0 => {
        _v5(_v0);
      }, [_v5]),
      _v21 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0);
      }, [_v7]),
      _v22 = (0, _v3.useCallback)(() => {
        _v1?.title && (_v5(_v1.title), _v17(_v0 => _v0 + 1));
      }, [_v1?.title, _v5]),
      _v23 = (0, _v3.useCallback)(() => {
        _v7(_v1?.streamDescription ?? ""), _v19(_v0 => _v0 + 1);
      }, [_v1?.streamDescription, _v7]),
      _v24 = (0, _v3.useCallback)(() => {
        let _v0 = _v4 ? _v4.trim() : "";
        _v0.length > 0 && !_v8 && (_v2({
          title: _v0,
          streamTitle: _v0
        }), _v9(!0), (0, _v54.createBPv2EventFactory)("vimeo.add_event_title", 2, () => ({
          ...(0, _v53.newTeamCtx)(),
          ...(0, _v53.newWebCtx)(),
          ...(0, _v53.newActionCtx)("type"),
          ...(0, _v53.newLiveCtx)({
            live_feature: "basic_settings"
          }),
          ...(0, _v53.newProductAnalyticsCtx)({
            product: "events",
            feature: "settings",
            location: "drawer",
            element: "text"
          })
        }), () => ({
          device_type: _v52.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
        }))({
          value: null
        }), _v3({
          liveStreamBasicsField: "title"
        })), _v5(_v0);
      }, [_v4, _v2, _v8, _v9, _v5, _v3]),
      _v25 = (0, _v3.useCallback)(() => {
        let _v0 = _v6?.trim() ?? "";
        _v10 || (_v2({
          streamDescription: _v0
        }), _v11(!0), (0, _v54.createBPv2EventFactory)("vimeo.add_event_description", 2, () => ({
          ...(0, _v53.newTeamCtx)(),
          ...(0, _v53.newWebCtx)(),
          ...(0, _v53.newActionCtx)("type"),
          ...(0, _v53.newLiveCtx)({
            live_feature: "basic_settings"
          }),
          ...(0, _v53.newProductAnalyticsCtx)({
            product: "events",
            feature: "settings",
            location: "drawer",
            element: "text"
          })
        }), () => ({
          device_type: _v52.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
        }))({
          value: null
        }), _v3({
          liveStreamBasicsField: "description"
        }), _v7(_v0));
      }, [_v6, _v2, _v10, _v11, _v3]),
      _v26 = _v1?.title !== _v4,
      _v27 = _v1?.streamDescription !== _v6 && ("" !== _v6 || _v1?.streamDescription !== null);
    return (0, _v1.jsxs)(_v7.Flex, {
      id: _v0,
      direction: "column",
      width: "100%",
      children: [_v1 ? (0, _v1.jsx)(_v7.Flex, {
        position: "relative",
        direction: "column",
        width: "100%",
        marginBottom: (0, _v12.rem)(16),
        children: (0, _v1.jsx)(_v51.EventTitle, {
          title: _v4,
          required: !0,
          onChange: _v20,
          onSetTitleInvalid: _v13,
          children: _v26 ? (0, _v1.jsx)(_v56, {
            isLoading: _v8,
            isDisabled: !_v4 || _v12,
            onCancelClick: _v22,
            onSaveClick: _v24
          }) : null
        }, _v16)
      }) : (0, _v1.jsx)(_v19.BokehSkeleton, {
        height: (0, _v12.rem)(91),
        borderRadius: (0, _v12.rem)(4),
        marginBottom: (0, _v12.rem)(16)
      }), _v1 ? (0, _v1.jsx)(_v7.Flex, {
        direction: "column",
        width: "100%",
        children: (0, _v1.jsx)(_v50.EventDescription, {
          fieldHeight: (0, _v12.rem)(80),
          description: _v6,
          onChange: _v21,
          onSetDescriptionInvalid: _v15,
          children: _v27 ? (0, _v1.jsx)(_v56, {
            onCancelClick: _v23,
            onSaveClick: _v25,
            isLoading: _v10,
            isDisabled: _v14
          }) : null
        }, _v18)
      }) : (0, _v1.jsx)(_v19.BokehSkeleton, {
        borderRadius: (0, _v12.rem)(4),
        height: (0, _v12.rem)(104)
      })]
    });
  }], 0);
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  function _v62({
    contentRating: _v0,
    isDisabled: _v1 = !1,
    onChange: _v2
  }) {
    let _v3 = (0, _v3.useMemo)(() => {
        let _v0 = _v61.GeneralContentRatingVariants.Unrated;
        return _v0.some(_v0 => _v61.MatureContentRatingArray.includes(_v0)) && (_v0 = _v61.GeneralContentRatingVariants.Mature), _v0.includes(_v61.GeneralContentRatingVariants.Safe) && (_v0 = _v61.GeneralContentRatingVariants.Safe), _v61.ContentRatingOptions.find(_v0 => _v0.value === _v0);
      }, [_v0]),
      _v4 = (0, _v3.useMemo)(() => _v0.includes(_v61.EventContentRating.Advertisement), [_v0]),
      _v5 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v4 ? [_v61.EventContentRating.Advertisement] : [];
        _v0 === _v61.GeneralContentRatingVariants.Safe ? _v1.push(_v61.EventContentRating.Safe) : _v0 === _v61.GeneralContentRatingVariants.Mature ? _v1 = [..._v1, ..._v61.MatureContentRatingArray] : _v1.push(_v61.EventContentRating.Unrated), _v2(_v1);
      }, [_v4, _v2]),
      _v6 = (0, _v3.useCallback)(_v0 => {
        let _v1 = [..._v0],
          _v2 = _v1.indexOf(_v0);
        _v2 > -1 ? _v1.splice(_v2, 1) : _v1.push(_v0), _v1.length === +!!_v4 && _v1.push(_v61.EventContentRating.Safe), _v2(_v1);
      }, [_v0, _v4, _v2]),
      _v7 = (0, _v3.useCallback)(() => {
        let _v0 = [..._v0],
          _v1 = _v0.indexOf(_v61.EventContentRating.Advertisement);
        _v1 > -1 ? _v0.splice(_v1, 1) : _v0.push(_v61.EventContentRating.Advertisement), _v2(_v0);
      }, [_v0, _v2]);
    return (0, _v1.jsxs)(_v7.Flex, {
      position: "relative",
      direction: "column",
      "data-testid": "event-content-rating",
      children: [(0, _v1.jsx)(_v8.Header, {
        size: "xs",
        marginBottom: (0, _v12.rem)(8),
        color: "text-primary",
        children: (0, _v18.translate)({
          singular: "Select content rating",
          dictionary: {
            es: {
              singular: "Selecciona la clasificación de contenido"
            },
            "de-DE": {
              singular: "Inhaltseinstufung wählen"
            },
            "fr-FR": {
              singular: "Sélectionnez la classification du contenu"
            },
            "ja-JP": {
              singular: "コンテンツ評価を選択"
            },
            "ko-KR": {
              singular: "콘텐츠 등급 선택"
            },
            "pt-BR": {
              singular: "Selecione a classificação de conteúdo"
            },
            "zh-CN": {
              singular: "选择内容分级"
            }
          }
        })
      }), (0, _v1.jsx)(_v9.Paragraph, {
        size: "sm",
        color: "text-secondary",
        marginBottom: (0, _v12.rem)(12),
        children: (0, _v18.translate)({
          singular: "Content ratings are required. They help keep Vimeo safe and ensure your intended audience can view your video. {A}Learn more{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v11.Text, {
              variant: "body-xl",
              color: "blue.500",
              cursor: "pointer",
              as: "a",
              textDecoration: "underline",
              fontSize: "text-xs",
              target: "_blank",
              href: "https://vimeo.zendesk.com/hc/en-us/articles/224818087-Content-ratings",
              children: _v0
            }, "rating-help-message")
          },
          dictionary: {
            es: {
              singular: "Las clasificaciones de contenido son obligatorias. Ayudan a mantener Vimeo seguro y a garantizar que tu audiencia prevista pueda ver tu video. {A}Más información{/A}"
            },
            "de-DE": {
              singular: "Inhaltseinstufungen sind erforderlich. Sie tragen dazu bei, Vimeo sicher zu halten und sicherzustellen, dass Ihre Zielgruppe Ihr Video sehen kann. {A}Mehr erfahren{/A}"
            },
            "fr-FR": {
              singular: "Les classifications de contenu sont obligatoires. Elles aident à maintenir Vimeo sûr et à garantir que votre public ciblé puisse visionner votre vidéo. {A}En savoir plus{/A}"
            },
            "ja-JP": {
              singular: "コンテンツ評価は必須です。Vimeoを安全に保ち、意図した視聴者が動画を視聴できるようにします。{A}詳細はこちら{/A}"
            },
            "ko-KR": {
              singular: "콘텐츠 등급이 필요합니다. 이는 Vimeo를 안전하게 유지하고 의도한 대상이 비디오를 볼 수 있도록 합니다. {A}자세히 알아보기{/A}"
            },
            "pt-BR": {
              singular: "As classificações de conteúdo são obrigatórias. Elas ajudam a manter o Vimeo seguro e garantem que seu público-alvo possa assistir ao seu vídeo. {A}Saiba mais{/A}"
            },
            "zh-CN": {
              singular: "需要内容分级。它们有助于保持 Vimeo 的安全并确保您的目标观众可以观看您的视频。{A}了解更多{/A}"
            }
          }
        })
      }), (0, _v1.jsx)(_v60.Select, {
        onValueChange: _v0 => _v5(_v0.value[0]),
        items: _v61.ContentRatingOptions.filter(_v0 => _v0.visible),
        placeholder: (0, _v18.translate)({
          singular: "Select rating",
          dictionary: {
            es: {
              singular: "Seleccionar clasificación"
            },
            "de-DE": {
              singular: "Bewertung auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner la classification"
            },
            "ja-JP": {
              singular: "レーティングを選択"
            },
            "ko-KR": {
              singular: "등급 선택"
            },
            "pt-BR": {
              singular: "Selecionar classificação"
            },
            "zh-CN": {
              singular: "选择分级"
            }
          }
        }),
        size: "sm",
        variant: "withCheck",
        value: [_v3.value]
      }), _v3.value === _v61.GeneralContentRatingVariants.Mature ? (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        paddingTop: (0, _v12.rem)(18),
        paddingBottom: (0, _v12.rem)(20),
        gap: (0, _v12.rem)(16),
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: [(0, _v1.jsx)(_v9.Paragraph, {
          size: "sm",
          color: "text-secondary",
          background: "transparent",
          children: (0, _v18.translate)({
            singular: "Select one or more of the following:",
            dictionary: {
              es: {
                singular: "Selecciona una o más de las siguientes:"
              },
              "de-DE": {
                singular: "Wählen Sie eine oder mehrere der folgenden Optionen:"
              },
              "fr-FR": {
                singular: "Sélectionnez une ou plusieurs des options suivantes :"
              },
              "ja-JP": {
                singular: "以下のいずれか1つ以上を選択してください："
              },
              "ko-KR": {
                singular: "다음 항목 중 하나 이상을 선택하세요:"
              },
              "pt-BR": {
                singular: "Selecione uma ou mais das seguintes opções:"
              },
              "zh-CN": {
                singular: "选择以下一项或多项："
              }
            }
          })
        }), _v61.MatureContentRatingOptions.map(_v0 => (0, _v1.jsx)(_v59.Checkbox, {
          isDisabled: _v1,
          onChange: () => _v6(_v0.value),
          isChecked: _v0.includes(_v0.value),
          name: _v0.value,
          id: `${_v0.value}-checkbox`,
          value: _v0.value,
          children: (0, _v1.jsx)(_v11.Text, {
            variant: "body-xl",
            fontSize: (0, _v12.rem)(14),
            color: "text-primary",
            children: _v0.label
          })
        }, `${_v0.value}-checkbox`))]
      }) : null, (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        children: [(0, _v1.jsx)(_v59.Checkbox, {
          isDisabled: _v1,
          name: "ads",
          margin: `${(0, _v12.rem)(8)} 0`,
          value: _v61.EventContentRating.Advertisement,
          isChecked: _v4,
          onChange: _v7,
          children: (0, _v1.jsx)(_v11.Text, {
            variant: "body-xl",
            fontSize: (0, _v12.rem)(12),
            color: "text-primary",
            children: (0, _v18.translate)({
              singular: "This video contains an advertisement",
              dictionary: {
                es: {
                  singular: "Este video contiene un anuncio"
                },
                "de-DE": {
                  singular: "Dieses Video enthält eine Werbung"
                },
                "fr-FR": {
                  singular: "Cette vidéo contient une publicité"
                },
                "ja-JP": {
                  singular: "この動画には広告が含まれています"
                },
                "ko-KR": {
                  singular: "이 비디오는 광고를 포함하고 있습니다"
                },
                "pt-BR": {
                  singular: "Este vídeo contém um anúncio"
                },
                "zh-CN": {
                  singular: "此视频包含广告"
                }
              }
            })
          })
        }), _v4 ? null : (0, _v1.jsx)(_v4.Alert, {
          children: (0, _v1.jsx)(_v13.AlertDescription, {
            children: (0, _v18.translate)({
              singular: "If this video contains advertisements, you are required to indicate so",
              dictionary: {
                es: {
                  singular: "Si este video contiene anuncios, debes indicarlo"
                },
                "de-DE": {
                  singular: "Wenn dieses Video Werbung enthält, müssen Sie dies angeben"
                },
                "fr-FR": {
                  singular: "Si cette vidéo contient des publicités, vous devez l'indiquer"
                },
                "ja-JP": {
                  singular: "この動画に広告が含まれる場合は、その旨を明示する必要があります"
                },
                "ko-KR": {
                  singular: "이 비디오에 광고가 포함된 경우 이를 표시해야 합니다"
                },
                "pt-BR": {
                  singular: "Se este vídeo contém anúncios, você é obrigado a indicá‑lo."
                },
                "zh-CN": {
                  singular: "如果此视频包含广告，您需要予以说明"
                }
              }
            })
          })
        })]
      })]
    });
  }
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = {
      EMBED_PRIVACY_NOWHERE: "private",
      EMBED_PRIVACY_ANYWHERE: "public",
      EMBED_PRIVACY_SPECIFIC_DOMAINS: "whitelist"
    },
    _v72 = {
      [_v71.EMBED_PRIVACY_NOWHERE]: (0, _v18.translate)({
        singular: "Nowhere",
        dictionary: {
          es: {
            singular: "En ningún sitio"
          },
          "de-DE": {
            singular: "Nirgendwo"
          },
          "fr-FR": {
            singular: "Nulle part"
          },
          "ja-JP": {
            singular: "いっさい許可しない"
          },
          "ko-KR": {
            singular: "불가"
          },
          "pt-BR": {
            singular: "Em nenhum lugar"
          },
          "zh-CN": {
            singular: "无处"
          }
        }
      }),
      [_v71.EMBED_PRIVACY_ANYWHERE]: (0, _v18.translate)({
        singular: "Anywhere",
        dictionary: {
          es: {
            singular: "En cualquier sitio"
          },
          "de-DE": {
            singular: "Überall"
          },
          "fr-FR": {
            singular: "N'importe où"
          },
          "ja-JP": {
            singular: "すべてのサイト"
          },
          "ko-KR": {
            singular: "어디에나"
          },
          "pt-BR": {
            singular: "Em qualquer lugar"
          },
          "zh-CN": {
            singular: "任何位置"
          }
        }
      }),
      [_v71.EMBED_PRIVACY_SPECIFIC_DOMAINS]: (0, _v18.translate)({
        singular: "Specific domains",
        dictionary: {
          es: {
            singular: "En dominios específicos"
          },
          "de-DE": {
            singular: "Bestimmte Domains"
          },
          "fr-FR": {
            singular: "Domaines spécifiques"
          },
          "ja-JP": {
            singular: "特定のドメイン"
          },
          "ko-KR": {
            singular: "특정 도메인"
          },
          "pt-BR": {
            singular: "Domínios específicos"
          },
          "zh-CN": {
            singular: "特定域"
          }
        }
      })
    };
  var _v73 = _v0.i(0);
  function _v74({
    embedPrivacy: _v0,
    domains: _v1,
    showNotice: _v2 = !1,
    isVertical: _v3 = !0,
    isDisabled: _v4,
    isSelectDisabled: _v5 = !1,
    disabledTip: _v6,
    onChange: _v7
  }) {
    let [_v8, _v9] = (0, _v3.useState)(""),
      [_v10, _v11] = (0, _v3.useState)(!1),
      _v12 = (0, _v3.useRef)(null),
      _v13 = !!(!_v4 && _v8),
      _v14 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0, _v1), _v11(!1);
      }, [_v1, _v7]),
      _v15 = (0, _v3.useCallback)(() => {
        -1 === _v1.indexOf(_v8) && (_v7(_v0, [..._v1, _v8]), _v9(""));
      }, [_v8, _v1, _v0, _v7]),
      _v16 = (0, _v3.useCallback)(_v0 => {
        let _v1 = [..._v1],
          _v2 = _v1.indexOf(_v0);
        _v1.splice(_v2, 1), _v7(_v0, _v1);
      }, [_v1, _v0, _v7]),
      _v17 = (0, _v3.useMemo)(() => Object.values(_v71).map(_v0 => ({
        label: _v72[_v0],
        value: _v0
      })), []);
    return (0, _v67.useOutsideClick)({
      enabled: _v10,
      ref: _v12,
      handler: () => {
        _v10 && _v11(!1);
      }
    }), (0, _v1.jsx)(_v7.Flex, {
      direction: "column",
      gap: (0, _v12.rem)(8),
      width: "100%",
      "data-testid": "event-embed-privacy",
      children: (0, _v1.jsxs)(_v7.Flex, {
        direction: _v3 ? "column" : "row",
        alignItems: "baseline",
        gap: (0, _v12.rem)(4),
        children: [(0, _v1.jsxs)(_v7.Flex, {
          marginBottom: _v3 ? (0, _v12.rem)(8) : 0,
          width: _v3 ? "100%" : (0, _v12.rem)(120),
          flexShrink: 0,
          alignItems: "center",
          gap: (0, _v12.rem)(4),
          children: [(0, _v1.jsx)(_v8.Header, {
            size: "xs",
            color: "text-primary",
            letterSpacing: "-0.03em",
            children: (0, _v18.translate)({
              singular: "Embed privacy",
              dictionary: {
                es: {
                  singular: "Privacidad de las inserciones"
                },
                "de-DE": {
                  singular: "Datenschutz einbetten"
                },
                "fr-FR": {
                  singular: "Confidentialité de l'intégration"
                },
                "ja-JP": {
                  singular: "プライバシー設定を埋め込む"
                },
                "ko-KR": {
                  singular: "임베드 프라이버시"
                },
                "pt-BR": {
                  singular: "Incorporar privacidade"
                },
                "zh-CN": {
                  singular: "嵌入式隐私"
                }
              }
            })
          }), (0, _v1.jsx)(_v73.BokehTooltip, {
            label: _v5 && _v6 ? _v6 : (0, _v18.translate)({
              singular: "Where can the video be embedded?",
              dictionary: {
                es: {
                  singular: "¿Dónde se puede embeber el video?"
                },
                "de-DE": {
                  singular: "Wo kann das Video eingebettet werden?"
                },
                "fr-FR": {
                  singular: "Où la vidéo peut‑elle être intégrée ?"
                },
                "ja-JP": {
                  singular: "動画はどこに埋め込めますか？"
                },
                "ko-KR": {
                  singular: "비디오는 어디에 임베드할 수 있나요?"
                },
                "pt-BR": {
                  singular: "Onde o vídeo pode ser incorporado?"
                },
                "zh-CN": {
                  singular: "视频可以嵌入到哪里？"
                }
              }
            }),
            maxWidth: (0, _v12.rem)(300),
            shouldWrapChildren: !1,
            children: (0, _v1.jsx)(_v7.Flex, {
              height: (0, _v12.rem)(16),
              width: (0, _v12.rem)(16),
              cursor: "pointer",
              children: (0, _v1.jsx)(_v69.InfoCircle, {
                boxSize: (0, _v12.rem)(16),
                color: "text-tertiary"
              })
            })
          })]
        }), (0, _v1.jsxs)(_v68.Box, {
          width: "100%",
          children: [(0, _v1.jsx)(_v68.Box, {
            position: "relative",
            children: (0, _v1.jsx)(_v60.Select, {
              onValueChange: _v0 => _v14(_v0.value[0]),
              items: _v17,
              withPortal: !1,
              placeholder: (0, _v18.translate)({
                singular: "Select rating",
                dictionary: {
                  es: {
                    singular: "Seleccionar clasificación"
                  },
                  "de-DE": {
                    singular: "Bewertung auswählen"
                  },
                  "fr-FR": {
                    singular: "Sélectionner la classification"
                  },
                  "ja-JP": {
                    singular: "レーティングを選択"
                  },
                  "ko-KR": {
                    singular: "등급 선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar classificação"
                  },
                  "zh-CN": {
                    singular: "选择分级"
                  }
                }
              }),
              size: "sm",
              variant: "withCheck",
              value: [_v0],
              disabled: _v5,
              children: ({
                label: _v0
              }) => (0, _v1.jsx)(_v60.SelectItem, {
                display: "flex",
                width: "100%",
                children: (0, _v1.jsx)(_v73.BokehTooltip, {
                  shouldWrapChildren: !1,
                  placement: "bottom",
                  maxWidth: (0, _v12.rem)(300),
                  label: _v6,
                  isDisabled: !_v4 || _v4 && !_v6,
                  children: (0, _v1.jsx)(_v60.SelectItemText, {
                    children: _v0
                  })
                })
              })
            })
          }), _v0 === _v71.EMBED_PRIVACY_SPECIFIC_DOMAINS ? (0, _v1.jsxs)(_v7.Flex, {
            position: "relative",
            direction: "column",
            width: "100%",
            marginTop: (0, _v12.rem)(8),
            children: [(0, _v1.jsxs)(_v64.InputGroup, {
              size: "sm",
              children: [(0, _v1.jsx)(_v65.Input, {
                onChange: _v0 => {
                  _v9(_v0.target.value);
                },
                value: _v8,
                isDisabled: !!_v4,
                placeholder: "domain.com",
                onKeyDown: _v0 => {
                  "Enter" === _v0.key && _v15();
                }
              }), (0, _v1.jsx)(_v66.InputRightElement, {
                cursor: _v13 ? "pointer" : "not-allowed",
                onClick: _v13 ? _v15 : void 0,
                children: (0, _v1.jsx)(_v70.PlusCircle, {
                  color: _v13 ? "text-primary" : "text-secondary"
                })
              })]
            }), (0, _v1.jsx)(_v7.Flex, {
              flexWrap: "wrap",
              gap: (0, _v12.rem)(4),
              marginTop: (0, _v12.rem)(8),
              children: _v1.map((_v0, _v1) => (0, _v1.jsxs)(_v63.Tag, {
                size: "sm",
                children: [(0, _v1.jsx)(_v63.TagLabel, {
                  fontSize: (0, _v12.rem)(14),
                  children: _v0
                }), !_v5 && (0, _v1.jsx)(_v63.TagCloseButton, {
                  onClick: () => _v16(_v0)
                })]
              }, `${_v0}-idx:${_v1}`))
            })]
          }, `domains-${_v1.length}`) : null, _v2 ? (0, _v1.jsx)(_v4.Alert, {
            marginTop: (0, _v12.rem)(8),
            children: (0, _v1.jsx)(_v13.AlertDescription, {
              children: (0, _v18.translate)({
                singular: "When link privacy is set to Private, the embedded event won’t be visible to everyone",
                dictionary: {
                  es: {
                    singular: "Cuando la privacidad del enlace está establecida en Privado, el evento embebido no será visible para todos"
                  },
                  "de-DE": {
                    singular: "Wenn die Link‑Privatsphäre auf Privat gesetzt ist, ist die eingebettete Veranstaltung nicht für alle sichtbar"
                  },
                  "fr-FR": {
                    singular: "Lorsque la confidentialité du lien est définie sur Privé, l'événement intégré ne sera pas visible de tous"
                  },
                  "ja-JP": {
                    singular: "リンクのプライバシーが非公開に設定されている場合、埋め込みイベントは誰も見られません"
                  },
                  "ko-KR": {
                    singular: "링크 개인정보가 비공개로 설정되면 임베드된 이벤트가 모두에게 보이지 않습니다"
                  },
                  "pt-BR": {
                    singular: "Quando a privacidade do link estiver definida como Privado, o evento incorporado não ficará visível para todos"
                  },
                  "zh-CN": {
                    singular: "当链接隐私设置为私密时，嵌入的活动不会对所有人可见"
                  }
                }
              })
            })
          }) : null]
        })]
      })
    });
  }
  let _v75 = "safe",
    _v76 = "advertisement";
  function _v77(_v0) {
    return {
      ...(0, _v53.newTeamCtx)(),
      ...(0, _v53.newWebCtx)(),
      ...(0, _v53.newThirdPartyIntegrationCtx)(),
      ...(0, _v53.newActionCtx)("click"),
      ...(0, _v53.newLiveCtx)({
        live_feature: "content_rating"
      }),
      ...(0, _v53.newProductAnalyticsCtx)({
        product: "events",
        feature: "privacy",
        location: "drawer",
        element: _v0
      })
    };
  }
  function _v78() {
    return {
      ...(0, _v53.newTeamCtx)(),
      ...(0, _v53.newWebCtx)(),
      ...(0, _v53.newThirdPartyIntegrationCtx)(),
      ...(0, _v53.newActionCtx)("click"),
      ...(0, _v53.newLiveCtx)({
        live_feature: "event_privacy"
      }),
      ...(0, _v53.newProductAnalyticsCtx)({
        product: "events",
        feature: "privacy",
        location: "drawer",
        element: "dropdown"
      })
    };
  }
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  function _v83({
    privacy: _v0,
    allowedPrivacies: _v1,
    password: _v2,
    disabledTip: _v3,
    isDisabled: _v4,
    onChange: _v5
  }) {
    let [_v6, _v7] = (0, _v3.useState)(_v0),
      [_v8, _v9] = (0, _v3.useState)(_v2 || "");
    (0, _v3.useEffect)(() => _v7(_v0), [_v0]), (0, _v3.useEffect)(() => _v9(_v2 || ""), [_v2]);
    let _v10 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0), _v5(_v0, _v8);
      }, [_v8, _v5]),
      _v11 = (0, _v3.useCallback)(_v0 => {
        _v9(_v0), _v5(_v6, _v0);
      }, [_v6, _v5]);
    return (0, _v1.jsxs)(_v7.Flex, {
      direction: "column",
      gap: (0, _v12.rem)(8),
      children: [(0, _v1.jsx)(_v82.EventPrivacy, {
        selectedPrivacy: _v6,
        allowedPrivacies: _v1,
        isDisabled: _v4,
        disabledTip: _v3,
        onPrivacySelect: _v10
      }, `view-${_v6}`), _v6 === _v36.EStreamPrivacy.PASSWORD && (0, _v1.jsx)(_v81.EventPassword, {
        isDisabled: _v4,
        onChange: _v11,
        password: _v8
      }, `pass-${_v2}`)]
    });
  }
  var _v84 = _v0.i(0);
  let _v85 = ["link", "embed.chatEmbedSource", "embed.embedProperties.sourceUrl", "streamPrivacy.unlistedHash"];
  _v0.s(["PrivacySettings", 0, function ({
    id: _v0 = (0, _v57.createLiveDomName)("privacy-settings"),
    eventSettingsContext: {
      settings: _v1,
      embedWhitelist: _v2,
      actions: {
        updateLiveEventSettings: _v3,
        updateEmbedWhitelist: _v4
      }
    } = (0, _v2.useManager)(_v32.EventSettingsManager),
    onlyShowStreamPrivacy: _v5 = !1
  }) {
    let _v6 = _v1.value?.allowedPrivacies ?? [],
      _v7 = _v1.value?.streamPrivacy?.view,
      _v8 = _v1.value?.streamPrivacy?.embed,
      _v9 = _v1.value?.streamPassword,
      _v10 = _v1.value?.contentRating,
      _v11 = (0, _v28.useIsLiveDemoSubscription)(),
      {
        trackPrivacyChanged: _v12
      } = (0, _v79.useViewPrivacyChangeTracking)(),
      {
        trackLiveStreamPrivacyChanged: _v13
      } = (0, _v40.useLiveStreamBroadcasterTracking)(),
      _v14 = !!_v1.value?.fromShowcase,
      _v15 = _v1.value?.album?.id,
      _v16 = !_v14 && !_v6.find(_v0 => _v0 === _v7),
      _v17 = (0, _v3.useMemo)(() => _v2.value || [], [_v2.value]),
      _v18 = (0, _v3.useCallback)((_v0, _v1) => {
        if ((_v7 !== _v0 || _v9 !== _v1) && (_v0 !== _v36.EStreamPrivacy.PASSWORD || _v1.length)) {
          var _v2;
          _v3({
            streamPrivacy: {
              view: _v0
            },
            streamPassword: _v0 === _v36.EStreamPrivacy.PASSWORD ? _v1 : void 0
          }, _v85).then(() => {
            _v7 !== _v0 && (_v12({
              entityType: "live_event",
              previousPrivacy: _v7 ?? null,
              newPrivacy: _v0
            }), _v13({
              liveStreamPrivacyType: "link_privacy",
              liveStreamPrivacyValue: String(_v0)
            }));
          }), _v2 = _v0 === _v36.EStreamPrivacy.PASSWORD, (0, _v54.createBPv2EventFactory)("vimeo.change_link_privacy", 5, () => ({
            ..._v78()
          }), () => ({
            device_type: _v52.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "old_video_privacy",
            privacy_field_value: _v0,
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
        }
      }, [_v3, _v7, _v9, _v12, _v13]),
      _v19 = (0, _v3.useCallback)((_v0, _v1) => {
        if (_v8 !== _v0) {
          var _v2;
          _v3({
            streamPrivacy: {
              embed: _v0
            }
          }, _v85), _v2 = _v7 === _v36.EStreamPrivacy.PASSWORD, (0, _v54.createBPv2EventFactory)("vimeo.change_embed_privacy", 5, () => ({
            ..._v78()
          }), () => ({
            device_type: _v52.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "old_embed_privacy",
            privacy_field_value: _v0,
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          }), _v13({
            liveStreamPrivacyType: "embed_privacy",
            liveStreamPrivacyValue: String(_v0)
          });
        }
        _v1 !== _v17 && _v4(_v1);
      }, [_v8, _v17, _v3, _v4, _v7, _v13]),
      _v20 = (0, _v3.useCallback)(_v0 => {
        _v3({
          contentRating: _v0
        }), function (_v0, _v1, _v2 = !1) {
          let _v3 = !!_v0?.includes(_v75),
            _v4 = !!_v1?.includes(_v75);
          _v3 !== _v4 && (0, _v54.createBPv2EventFactory)("vimeo.change_content_rating", 5, () => ({
            ..._v77("dropdown")
          }), () => ({
            device_type: _v52.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "rating",
            privacy_field_value: _v4 ? "safe" : "mature",
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
          let _v5 = !!_v0?.includes(_v76),
            _v6 = !!_v1?.includes(_v76);
          _v5 !== _v6 && (0, _v54.createBPv2EventFactory)("vimeo.change_content_notice", 5, () => ({
            ..._v77("check_box")
          }), () => ({
            device_type: _v52.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "contains_ad",
            privacy_field_value: String(_v6),
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
        }(_v10, _v0, _v7 === _v36.EStreamPrivacy.PASSWORD), _v13({
          liveStreamPrivacyType: "content_rating",
          liveStreamPrivacyValue: JSON.stringify(_v0)
        });
      }, [_v3, _v10, _v7, _v13]),
      {
        tooltip: _v21,
        isDisabled: _v22
      } = (0, _v80.useGetEditEmbedPrivacyDisabled)();
    return (0, _v1.jsxs)(_v7.Flex, {
      id: _v0,
      direction: "column",
      maxWidth: "100%",
      width: "100%",
      children: [_v14 && _v15 ? (0, _v1.jsx)(_v4.Alert, {
        children: (0, _v1.jsxs)(_v13.AlertDescription, {
          margin: 0,
          children: [_v84.sharedTranslations.showcasePrivacyNotice, " ", (0, _v1.jsx)(_v11.Text, {
            href: _v26.vimeoConfig.PATH.SHOWCASE_MANAGE_URL(_v15),
            target: "_blank",
            variant: "body-md",
            color: "blue.500",
            textDecoration: "underline",
            as: "a",
            children: _v84.sharedTranslations.manageShowcase
          })]
        })
      }) : null, _v16 ? (0, _v1.jsx)(_v4.Alert, {
        children: (0, _v1.jsx)(_v13.AlertDescription, {
          margin: 0,
          children: _v84.sharedTranslations.eventPrivacyFrozen
        })
      }) : null, _v7 && _v6 ? (0, _v1.jsx)(_v83, {
        isDisabled: _v11 || _v14,
        disabledTip: _v11 ? _v55.rtmpTranslations.viewPrivacyDemoDisabledTip : void 0,
        privacy: _v7,
        allowedPrivacies: _v6,
        password: _v9,
        onChange: (0, _v58.default)(_v18, 0)
      }) : (0, _v1.jsx)(_v19.BokehSkeleton, {
        height: (0, _v12.rem)(110),
        borderRadius: (0, _v12.rem)(4),
        marginBottom: (0, _v12.rem)(16)
      }), !_v5 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v6.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v12.rem)(24)} 0`
        }), _v8 ? (0, _v1.jsx)(_v74, {
          isDisabled: _v11 || _v14 || _v22,
          isSelectDisabled: _v22,
          disabledTip: _v11 ? _v55.rtmpTranslations.embedPrivacyDemoDisabledTip : _v22 ? _v21 : void 0,
          embedPrivacy: _v8,
          domains: _v17,
          showNotice: _v7 === _v36.EStreamPrivacy.NOBODY,
          onChange: _v19
        }) : (0, _v1.jsx)(_v19.BokehSkeleton, {
          height: (0, _v12.rem)(200),
          borderRadius: (0, _v12.rem)(4)
        }), (0, _v1.jsx)(_v6.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v12.rem)(24)} 0`
        }), _v10 ? (0, _v1.jsx)(_v62, {
          contentRating: _v10,
          isDisabled: !1,
          onChange: _v20
        }) : (0, _v1.jsx)(_v19.BokehSkeleton, {
          height: (0, _v12.rem)(200),
          borderRadius: (0, _v12.rem)(4)
        })]
      })]
    });
  }], 0);
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  _v0.s(["useFailsafeUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    return (0, _v88.useUpgradeModal)({
      canOpen: _v0,
      tracking: {
        params: {
          feature: "live_event_settings",
          target: "enterprise_contact_us_page",
          page: "live_event_stream_settings",
          upsell_name: "fail_safe_stream",
          location: window.location.href
        },
        paywallTracking: {
          paywallTrigger: "live_event_failsafe_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      },
      templateType: "enterprise",
      modalConfig: {
        mkcCode: "109813",
        enterpriseTitle: _v86.T_GO_LIVE_WITH_PEACE_OF_MIND,
        enterpriseSubtitle: _v86.T_ADD_FAIL_SAFE_STREAMING,
        customFeaturesList: (0, _v1.jsx)(_v87.UpsellFeaturesList, {
          featuresList: _v86.T_FAIL_SAFE_STREAMING_FEATURES
        })
      }
    });
  }], 0), _v0.s(["useUnlimitedStreamUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    return (0, _v88.useUpgradeModal)({
      canOpen: _v0,
      tracking: {
        params: {
          feature: "extended_stream",
          target: "enterprise_contact_us_page",
          page: "live_event_stream_settings",
          upsell_name: "live_event_24_7_stream",
          location: window.location.href
        },
        paywallTracking: {
          paywallTrigger: "live_event_unlimited_stream_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      },
      templateType: "enterprise",
      modalConfig: {
        mkcCode: "109754",
        enterpriseTitle: _v86.T_STREAM_WITHOUT_INTERRUPTIONS,
        enterpriseSubtitle: _v86.T_CREATE_CONTINUOUS_STREAM,
        customFeaturesList: (0, _v1.jsx)(_v87.UpsellFeaturesList, {
          featuresList: _v86.T_UNLIMITED_DURATION_FEATURES
        })
      }
    });
  }], 0);
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  _v0.s(["useTimeBasedDismissableNotification", 0, function ({
    storedKey: _v0,
    cooldownMs: _v1 = 0,
    forceHide: _v2 = !1
  }) {
    let [_v3, _v4] = (0, _v3.useState)(() => {
      if (_v2) return !1;
      let _v0 = (0, _v89.getFromLocalStorage)(_v0),
        _v1 = _v0 ? Number(_v0) : null;
      return !_v1 || _v1 < (0, _v90.getAbsoluteNow)() - _v1;
    });
    return [_v3, (0, _v3.useCallback)(() => {
      (0, _v89.setLocalStorageItem)(_v0, (0, _v90.getAbsoluteNow)()), _v4(!1);
    }, [_v0])];
  }], 0);
}