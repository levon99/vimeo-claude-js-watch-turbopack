{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
    _v14,
    _v15,
    _v16,
    _v17,
    _v18,
    _v19,
    _v20,
    _v21,
    _v22,
    _v23,
    _v24,
    _v25,
    _v26,
    _v27,
    _v28,
    _v29,
    _v30,
    _v31,
    _v32,
    _v33,
    _v34,
    _v35,
    _v36,
    _v37,
    _v38,
    _v39,
    _v40,
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  function _v90({
    isOpen: _v0,
    onClose: _v1,
    translationLanguageCount: _v2,
    unitAmount: _v3,
    currency: _v4
  }) {
    let _v5 = (0, _v89.useLocale)(),
      _v6 = _v2 > 0,
      _v7 = _v2 * _v62.AUTO_CC_TRANSLATION_CREDITS_PER_MINUTE,
      _v8 = _v62.AUTO_CC_CREDITS_PER_MINUTE + _v7,
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
      _v10 = null !== _v9 ? (0, _v58.translate)({
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
      }) : (0, _v58.translate)({
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
    return (0, _v41.jsxs)(_v83.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v41.jsx)(_v88.ModalOverlay, {}), (0, _v41.jsxs)(_v86.ModalContent, {
        maxWidth: (0, _v52.rem)(480),
        children: [(0, _v41.jsx)(_v87.ModalHeader, {
          children: (0, _v58.translate)({
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
        }), (0, _v41.jsx)(_v85.ModalCloseButton, {}), (0, _v41.jsxs)(_v84.ModalBody, {
          paddingX: (0, _v52.rem)(24),
          paddingY: (0, _v52.rem)(20),
          children: [(0, _v41.jsx)(_v49.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v52.rem)(16),
            children: (0, _v58.translate)({
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
          }), (0, _v41.jsx)(_v49.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v52.rem)(16),
            children: _v6 ? (0, _v58.translate)({
              replacements: {
                RATE: _v62.AUTO_CC_CREDITS_PER_MINUTE
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
            }) : (0, _v58.translate)({
              replacements: {
                RATE: _v62.AUTO_CC_CREDITS_PER_MINUTE
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
          }), (0, _v41.jsx)(_v49.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v52.rem)(20),
            children: null !== _v9 ? (0, _v58.translate)({
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
            }) : (0, _v58.translate)({
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
          }), (0, _v41.jsxs)(_v47.Flex, {
            direction: "column",
            background: "fill-component",
            borderRadius: (0, _v52.rem)(8),
            paddingX: (0, _v52.rem)(16),
            paddingY: (0, _v52.rem)(8),
            children: [(0, _v41.jsxs)(_v47.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: (0, _v52.rem)(8),
              children: [(0, _v41.jsx)(_v51.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v58.translate)({
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
              }), (0, _v41.jsxs)(_v47.Flex, {
                alignItems: "center",
                gap: (0, _v52.rem)(4),
                children: [(0, _v41.jsx)(_v54.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v41.jsx)(_v51.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v58.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v62.AUTO_CC_CREDITS_PER_MINUTE
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
            }), _v6 ? (0, _v41.jsxs)(_v47.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: (0, _v52.rem)(8),
              children: [(0, _v41.jsx)(_v51.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v58.translate)({
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
              }), (0, _v41.jsxs)(_v47.Flex, {
                alignItems: "center",
                gap: (0, _v52.rem)(4),
                children: [(0, _v41.jsx)(_v54.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v41.jsx)(_v51.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v58.translate)({
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
          }), (0, _v41.jsxs)(_v47.Flex, {
            marginTop: (0, _v52.rem)(8),
            background: "fill-component",
            borderRadius: (0, _v52.rem)(8),
            paddingX: (0, _v52.rem)(16),
            paddingY: (0, _v52.rem)(16),
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v41.jsx)(_v51.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v58.translate)({
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
            }), (0, _v41.jsx)(_v51.Text, {
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
    id: _v0 = (0, _v78.createDomName)("auto-cc-settings"),
    className: _v1 = (0, _v78.createDomName)("auto-cc-settings"),
    eventSettingsContext: {
      settings: {
        isLoading: _v2,
        value: _v3
      },
      actions: {
        updateLiveEventSettings: _v4
      }
    } = (0, _v42.useManager)(_v73.EventSettingsManager),
    composerSessionStatusContext: {
      liveComposerStatuses: _v5
    } = (0, _v42.useManager)(_v72.ComposerSessionStatusManager)
  }) {
    let {
        trackLiveStreamClosedCaptionsToggled: _v6
      } = (0, _v81.useLiveStreamBroadcasterTracking)(),
      {
        open: _v7,
        upgradeModal: _v8
      } = (0, _v61.useAutoCCUpgradeModal)(),
      _v9 = (0, _v68.useIsLiveDemoSubscription)(),
      _v10 = _v5.isSessionRequested || _v5.isSessionInitializing,
      _v11 = (0, _v82.useIsVpaas)(),
      _v12 = (0, _v71.useSessionOwnerId)(),
      _v13 = (0, _v70.useLiveLocalizationTrialExpiry)(),
      _v14 = _v13 ? new Date(`${_v13}T00:00:00`).toLocaleDateString() : void 0,
      _v15 = (0, _v67.useCanEnableLiveCaptionsForLiveEvent)(_v12),
      {
        capabilities: _v16
      } = (0, _v55.useCapability)(["hasEntitlementAiCredits", "hasLiveAutoCcAiCredits", "hasLiveAutoTranslation"], _v12 || null),
      _v17 = !!_v16.hasLiveAutoCcAiCredits,
      _v18 = !!_v16.hasLiveAutoTranslation,
      _v19 = !!_v16.hasEntitlementAiCredits,
      _v20 = _v17 || _v18,
      {
        data: _v21
      } = (0, _v56.useGetUser)(() => _v12 && _v20 ? {
        select: ["aiCreditsQuota"],
        where: {
          userId: _v12
        }
      } : null),
      _v22 = _v21?.aiCreditsQuota?.remaining ?? 0,
      _v23 = !(0, _v69.useIsSalesAssistedTier)(_v12),
      _v24 = _v3?.autoCcTranslationLanguages?.length ?? 0,
      {
        data: _v25
      } = (0, _v57.useGetUserAiCreditsBillingInfo)(() => _v12 && _v23 ? {
        select: ["unitAmount", "currency"],
        where: {
          userId: String(_v12)
        }
      } : null),
      {
        modal: _v26,
        open: _v27
      } = function ({
        translationLanguageCount: _v0,
        unitAmount: _v1,
        currency: _v2
      }) {
        let [_v3, _v4] = (0, _v43.useState)(!1),
          _v5 = (0, _v43.useCallback)(() => _v4(!0), []),
          _v6 = (0, _v43.useCallback)(() => _v4(!1), []);
        return {
          modal: (0, _v41.jsx)(_v90, {
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
        translationLanguageCount: _v24,
        unitAmount: _v25?.unitAmount ?? null,
        currency: _v25?.currency ?? null
      }),
      _v28 = (0, _v43.useCallback)(() => {
        (0, _v75.trackUpgradeAutoCc)(_v66.vimeoConfig.PATH.CONTACT_US_FORM_EVENT), _v7();
      }, [_v7]),
      _v29 = (0, _v43.useCallback)(_v0 => {
        _v0.enabled !== _v3?.autoCcEnabled && ((0, _v74.trackEnabledAutoCc)(_v0.enabled), _v6({
          liveStreamNewStatus: _v0.enabled
        })), null !== _v0.language && _v0.language !== _v3?.autoCcLanguage && (0, _v74.trackSelectAutoCcLanguage)(_v0.language), _v4({
          autoCcEnabled: _v0.enabled,
          ...(null !== _v0.language ? {
            autoCcLanguage: _v0.language
          } : {}),
          autoCcKeywords: _v3?.autoCcKeywords,
          ...(_v0.enabled ? {} : {
            autoCcTranslationEnabled: !1,
            autoCcTranslationLanguages: []
          })
        }, []);
      }, [_v3?.autoCcEnabled, _v3?.autoCcLanguage, _v3?.autoCcKeywords, _v4, _v6]),
      _v30 = (0, _v43.useCallback)(_v0 => {
        (0, _v74.trackEnterAutoCcKeywords)(), _v4({
          autoCcKeywords: _v0.join(","),
          autoCcEnabled: _v3?.autoCcEnabled,
          autoCcLanguage: _v3?.autoCcLanguage
        }, []);
      }, [_v3?.autoCcEnabled, _v3?.autoCcLanguage, _v4]),
      _v31 = (0, _v43.useCallback)(_v0 => {
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
    if (_v2 || !_v3) return (0, _v41.jsx)(_v59.BokehSkeleton, {
      id: (0, _v78.createDomName)(_v0, "loader"),
      className: (0, _v78.createDomName)(_v1, "loader"),
      height: (0, _v52.rem)(80),
      marginBottom: (0, _v52.rem)(8),
      width: "100%",
      borderRadius: (0, _v52.rem)(4)
    });
    let {
        autoCcKeywords: _v32,
        autoCcLanguage: _v33,
        autoCcEnabled: _v34,
        autoCcTranslationLanguages: _v35,
        autoCcLimit: _v36,
        autoCcRemaining: _v37,
        unlimitedAutoCc: _v38,
        latency: _v39,
        dvr: _v40
      } = _v3,
      _v41 = _v5.isSessionLive,
      _v42 = (_v35?.length ?? 0) > 0,
      _v43 = !_v40 && !_v42,
      _v44 = _v41 ? _v76.T_AUTO_CC_LOCKED_WHILE_LIVE : _v43 ? _v76.T_FEATURE_DISABLED_WHEN_DVR_DISABLED : void 0,
      _v45 = _v35?.length ?? 0,
      _v46 = _v45 * _v62.AUTO_CC_TRANSLATION_CREDITS_PER_MINUTE,
      _v47 = (0, _v58.translate)({
        replacements: {
          LINK: _v0 => (0, _v41.jsx)(_v51.Text, {
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
      _v48 = (0, _v58.translate)({
        replacements: {
          LINK: _v0 => (0, _v41.jsx)(_v51.Text, {
            as: "a",
            fontSize: "inherit",
            textDecoration: "underline",
            cursor: "pointer",
            onClick: _v27,
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
      _v49 = (0, _v58.translate)({
        replacements: {
          LINK: _v0 => (0, _v41.jsx)(_v51.Text, {
            as: "a",
            fontSize: "inherit",
            textDecoration: "underline",
            href: "https://vimeo.com/legal/transparency/ai/live-caption-translations",
            target: "_blank",
            children: _v0
          }, "ai-disclaimer-learn-more")
        },
        singular: "Captions and translations are AI-generated and may contain inaccuracies. {LINK}Learn more{/LINK}",
        dictionary: {
          es: {
            singular: "Los subtítulos y las traducciones son generados por IA y pueden contener imprecisiones. {LINK}Más información{/LINK}"
          },
          "de-DE": {
            singular: "Untertitel und Übersetzungen werden mithilfe von KI erstellt und können Ungenauigkeiten enthalten. {LINK}Mehr erfahren{/LINK}"
          },
          "fr-FR": {
            singular: "Les sous-titres et les traductions sont générés par l'IA et peuvent contenir des inexactitudes. {LINK}En savoir plus{/LINK}"
          },
          "ja-JP": {
            singular: "字幕と翻訳はAIによって生成されており、不正確な場合があります. {LINK}詳しくはこちら{/LINK}"
          },
          "ko-KR": {
            singular: "자막과 번역은 AI로 생성되었으며 부정확할 수 있습니다. {LINK}자세히 알아보기{/LINK}"
          },
          "pt-BR": {
            singular: "Legendas e traduções são geradas por IA e podem conter imprecisões. {LINK}Saiba mais{/LINK}"
          },
          "zh-CN": {
            singular: "字幕和翻译由 AI 生成，可能包含不准确之处。 {LINK}了解详情{/LINK}"
          }
        }
      });
    if (_v17) {
      let _v0 = _v46 + (_v38 ? 0 : _v62.AUTO_CC_CREDITS_PER_MINUTE),
        _v1 = _v39 === _v77.EEventLatency.Low || _v9 || !_v15,
        _v2 = _v34 && !_v9,
        _v3 = _v2 && !_v38 && !_v11,
        _v4 = (0, _v79.inline)(() => _v41 ? _v76.T_AUTO_CC_LOCKED_WHILE_LIVE : _v9 ? _v76.T_AUTO_CC_IS_NOT_AVAILABLE_FOR_DEMO : _v15 ? _v39 === _v77.EEventLatency.Low ? (0, _v76.T_AUTO_CC_LOW_LATENCY_STREAM_TIP)() : "" : (0, _v58.translate)({
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
        _v5 = (0, _v58.translate)({
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
        _v6 = (0, _v58.translate)({
          replacements: {
            LINK: _v0 => (0, _v41.jsx)(_v51.Text, {
              variant: "body-xl",
              as: "a",
              fontSize: "sm",
              textDecoration: "underline",
              href: _v62.AUTO_CC_ZENDESK_LINK,
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
      return (0, _v41.jsxs)(_v47.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        gap: "md",
        maxWidth: "100%",
        width: "100%",
        children: [_v41 ? (0, _v41.jsx)(_v44.Alert, {
          status: "warning",
          children: (0, _v41.jsx)(_v53.AlertDescription, {
            fontSize: "body-sm",
            children: (0, _v58.translate)({
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
        }) : null, (0, _v41.jsx)(_v63.AutoCc, {
          location: _v77.ESettingsLocation.Settings,
          value: _v34,
          language: _v33,
          isDisabled: _v1,
          isLocked: _v41,
          isLoading: _v10,
          disabledTip: _v4,
          onChange: _v29
        }), _v2 ? (0, _v41.jsx)(_v64.AutoCcKeywords, {
          isLoading: _v10,
          isDisabled: _v41,
          keywords: _v32 ? _v32.split(",") : [],
          onChange: _v30
        }) : null, _v34 && _v38 ? (0, _v41.jsx)(_v47.Flex, {
          backgroundColor: "fill-component-secondary",
          paddingY: (0, _v52.rem)(4),
          borderRadius: (0, _v52.rem)(8),
          children: (0, _v41.jsxs)(_v47.Flex, {
            paddingY: (0, _v52.rem)(8),
            paddingX: (0, _v52.rem)(8),
            gap: (0, _v52.rem)(8),
            flexDirection: "row",
            children: [(0, _v41.jsx)(_v51.Text, {
              color: "text-secondary",
              variant: "body-md",
              children: (0, _v58.translate)({
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
            }), (0, _v41.jsx)(_v51.Text, {
              color: "text-primary",
              variant: "heading-xs",
              children: (0, _v58.translate)({
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
        }) : null, _v34 && _v38 ? (0, _v41.jsx)(_v49.Paragraph, {
          size: "sm",
          color: "text-secondary",
          children: _v6
        }) : null, _v18 ? (0, _v41.jsx)(_v65.CaptionsTranslations, {
          isDisabled: _v41 || !_v2 || _v43,
          disabledTip: _v44,
          selectedLanguages: _v35 ?? [],
          sourceLanguage: _v33,
          onChange: _v31,
          availableUntil: _v14
        }) : null, _v3 || _v18 && _v34 ? (0, _v41.jsxs)(_v47.Flex, {
          direction: "column",
          alignSelf: "stretch",
          gap: "md",
          children: [(0, _v41.jsxs)(_v47.Flex, {
            direction: "column",
            background: "fill-component",
            paddingY: (0, _v52.rem)(8),
            borderRadius: (0, _v52.rem)(16),
            children: [_v3 ? (0, _v41.jsxs)(_v47.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: (0, _v52.rem)(16),
              paddingTop: (0, _v52.rem)(8),
              paddingBottom: _v18 && _v45 > 0 ? (0, _v52.rem)(8) : (0, _v52.rem)(16),
              children: [(0, _v41.jsx)(_v51.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v58.translate)({
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
              }), (0, _v41.jsxs)(_v47.Flex, {
                alignItems: "center",
                gap: (0, _v52.rem)(2),
                children: [(0, _v41.jsx)(_v54.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v41.jsx)(_v51.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v58.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v62.AUTO_CC_CREDITS_PER_MINUTE
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
            }) : null, _v18 && _v45 > 0 ? (0, _v41.jsxs)(_v47.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: (0, _v52.rem)(16),
              paddingBottom: (0, _v52.rem)(16),
              children: [(0, _v41.jsx)(_v51.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v58.translate)({
                  singular: "{COUNT} translation",
                  plural: "{COUNT} translations",
                  count: _v45,
                  replacements: {
                    COUNT: _v45
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
              }), (0, _v41.jsxs)(_v47.Flex, {
                alignItems: "center",
                gap: (0, _v52.rem)(2),
                children: [(0, _v41.jsx)(_v54.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v41.jsx)(_v51.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v58.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v46
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
            }) : null, _v34 ? (0, _v41.jsxs)(_v47.Flex, {
              alignItems: "center",
              justifyContent: "center",
              gap: (0, _v52.rem)(6),
              paddingX: (0, _v52.rem)(16),
              children: [(0, _v41.jsx)(_v54.VimeoCoin, {
                boxSize: 16,
                color: "text-secondary",
                flexShrink: 0
              }), (0, _v41.jsx)(_v51.Text, {
                variant: "body-sm",
                color: "text-tertiary",
                children: (0, _v58.translate)({
                  singular: "{AMOUNT} credits remaining",
                  replacements: {
                    AMOUNT: Math.max(_v22, 0).toLocaleString()
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
          }), _v0 > _v22 && _v19 ? (0, _v41.jsx)(_v44.Alert, {
            status: "warning",
            children: (0, _v41.jsx)(_v53.AlertDescription, {
              fontSize: "body-sm",
              children: _v5
            })
          }) : null, _v34 ? (0, _v41.jsx)(_v51.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v23 ? _v48 : _v47
          }) : null, _v34 ? (0, _v41.jsx)(_v51.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v49
          }) : null]
        }) : null, _v26]
      });
    }
    let _v50 = Number((100 - (_v37 ?? 0) / (_v36 ?? 1) * 100).toFixed(2)),
      _v51 = !!(!_v38 && (_v37 ?? 1) <= 0),
      _v52 = _v39 === _v77.EEventLatency.Low || _v51 || _v9 || !_v15,
      _v53 = _v34 && !_v51 && !_v9,
      _v54 = (0, _v58.translate)({
        replacements: {
          NUMBER: _v46
        },
        singular: "Your current credits are not enough to add captions translations. You need at least {NUMBER} credits to start the live. Please reach out to your Account Manager.",
        dictionary: {
          es: {
            singular: "Tus créditos actuales no son suficientes para agregar traducciones de subtítulos. Necesitas al menos {NUMBER} créditos para iniciar la transmisión en vivo. Por favor, ponte en contacto con tu gerente de cuenta."
          },
          "de-DE": {
            singular: "Ihre aktuellen Credits reichen nicht aus, um Untertitelübersetzungen hinzuzufügen. Sie benötigen mindestens {NUMBER} Credits, um das Live-Event zu starten. Bitte wenden Sie sich an Ihren Account Manager."
          },
          "fr-FR": {
            singular: "Vos crédits actuels ne sont pas suffisants pour ajouter des traductions de sous-titres. Vous avez besoin d'au moins {NUMBER} crédits pour démarrer la diffusion en direct. Veuillez contacter votre responsable de compte."
          },
          "ja-JP": {
            singular: "現在のクレジットではキャプション翻訳を追加できません。ライブを開始するには最低 {NUMBER} クレジットが必要です。アカウントマネージャーにお問い合わせください。"
          },
          "ko-KR": {
            singular: "현재 보유한 크레딧으로는 자막 번역을 추가하기에 충분하지 않습니다. 라이브를 시작하려면 최소 {NUMBER} 크레딧이 필요합니다. 담당 계정 관리자에게 문의하세요."
          },
          "pt-BR": {
            singular: "Seus créditos atuais não são suficientes para adicionar traduções de legendas. Você precisa de pelo menos {NUMBER} créditos para iniciar a transmissão ao vivo. Por favor, entre em contato com seu Gerente de Conta."
          },
          "zh-CN": {
            singular: "您当前的积分不足，无法添加字幕翻译。您需要至少 {NUMBER} 个积分才能开始直播。请联系您的客户经理。"
          }
        }
      }),
      _v55 = (0, _v79.inline)(() => _v41 ? _v76.T_AUTO_CC_LOCKED_WHILE_LIVE : _v9 ? _v76.T_AUTO_CC_IS_NOT_AVAILABLE_FOR_DEMO : _v51 ? _v76.T_AUTO_CC_PLAN_LIMIT_REACHED : _v15 ? _v39 === _v77.EEventLatency.Low ? (0, _v76.T_AUTO_CC_LOW_LATENCY_STREAM_TIP)() : "" : (0, _v58.translate)({
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
    return (0, _v41.jsxs)(_v47.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      gap: "md",
      maxWidth: "100%",
      width: "100%",
      children: [_v41 ? (0, _v41.jsx)(_v44.Alert, {
        status: "warning",
        children: (0, _v41.jsx)(_v53.AlertDescription, {
          fontSize: "body-sm",
          children: (0, _v58.translate)({
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
      }) : null, (0, _v41.jsx)(_v63.AutoCc, {
        location: _v77.ESettingsLocation.Settings,
        value: _v34 && !_v51,
        language: _v33,
        isDisabled: _v52,
        isLocked: _v41,
        isLoading: _v10,
        disabledTip: _v55,
        onChange: _v29
      }), !_v34 || _v51 || _v9 ? null : (0, _v41.jsx)(_v64.AutoCcKeywords, {
        isLoading: _v10,
        isDisabled: _v41,
        keywords: _v32 ? _v32.split(",") : [],
        onChange: _v30
      }), _v38 || _v9 || _v11 ? null : (0, _v41.jsxs)(_v47.Flex, {
        direction: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        background: "surface",
        padding: (0, _v52.rem)(16),
        borderRadius: (0, _v52.rem)(8),
        border: "1px solid",
        borderColor: "stroke",
        children: [(0, _v41.jsx)(_v49.Paragraph, {
          size: "md",
          color: "text-primary",
          fontWeight: "bold",
          children: (0, _v80.getFormattedTimecodeFromSeconds)(Math.max(_v37 ?? 0, 0), _v80.TimecodeFormats.LongWithoutDays, {
            shouldShowZero: !0
          })
        }), (0, _v41.jsx)(_v50.Progress, {
          id: (0, _v78.createDomName)(_v0, "usage-progress"),
          className: (0, _v78.createDomName)(_v1, "usage-progress"),
          margin: `${(0, _v52.rem)(4)} 0`,
          size: "sm",
          variant: "neutral",
          value: _v50,
          sx: {
            "& > div": {
              background: "upsell-primary"
            }
          }
        }), (0, _v41.jsxs)(_v47.Flex, {
          alignItems: "center",
          gap: (0, _v52.rem)(4),
          children: [(0, _v41.jsxs)(_v48.Header, {
            size: "xs",
            children: [" ", _v76.T_AUTO_CC_REMAINING, " "]
          }), (0, _v41.jsx)(_v60.CircleTip, {
            label: _v76.T_AUTO_CC_TIP
          })]
        }), (0, _v41.jsx)(_v46.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v52.rem)(12)} 0`
        }), (0, _v41.jsx)(_v49.Paragraph, {
          size: "md",
          color: "text-secondary",
          children: _v51 ? _v76.T_AUTO_CC_UPSELL_REACHED : _v76.T_AUTO_CC_UPSELL
        }), (0, _v41.jsx)(_v45.Button, {
          size: "sm",
          width: "100%",
          marginTop: (0, _v52.rem)(12),
          variant: "upsell",
          onClick: _v28,
          children: _v76.T_CONTACT_SALES
        })]
      }), _v18 ? (0, _v41.jsx)(_v65.CaptionsTranslations, {
        isDisabled: _v41 || !_v53,
        disabledTip: _v41 ? _v76.T_AUTO_CC_LOCKED_WHILE_LIVE : void 0,
        selectedLanguages: _v35 ?? [],
        sourceLanguage: _v33,
        onChange: _v31,
        availableUntil: _v14
      }) : null, _v18 && _v34 ? (0, _v41.jsxs)(_v47.Flex, {
        direction: "column",
        alignSelf: "stretch",
        gap: "md",
        children: [(0, _v41.jsxs)(_v47.Flex, {
          direction: "column",
          background: "fill-component",
          paddingY: (0, _v52.rem)(8),
          borderRadius: (0, _v52.rem)(16),
          children: [_v45 > 0 ? (0, _v41.jsxs)(_v47.Flex, {
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: (0, _v52.rem)(16),
            paddingTop: (0, _v52.rem)(8),
            paddingBottom: (0, _v52.rem)(16),
            children: [(0, _v41.jsx)(_v51.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v58.translate)({
                singular: "{COUNT} translation",
                plural: "{COUNT} translations",
                count: _v45,
                replacements: {
                  COUNT: _v45
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
            }), (0, _v41.jsxs)(_v47.Flex, {
              alignItems: "center",
              gap: (0, _v52.rem)(2),
              children: [(0, _v41.jsx)(_v54.VimeoCoin, {
                boxSize: 12,
                color: "text-primary"
              }), (0, _v41.jsx)(_v51.Text, {
                variant: "heading-xs",
                color: "text-primary",
                children: (0, _v58.translate)({
                  singular: "{RATE}/min",
                  replacements: {
                    RATE: _v46
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
          }) : null, (0, _v41.jsxs)(_v47.Flex, {
            alignItems: "center",
            justifyContent: "center",
            gap: (0, _v52.rem)(6),
            paddingX: (0, _v52.rem)(16),
            children: [(0, _v41.jsx)(_v54.VimeoCoin, {
              boxSize: 16,
              color: "text-secondary",
              flexShrink: 0
            }), (0, _v41.jsx)(_v51.Text, {
              variant: "body-sm",
              color: "text-tertiary",
              children: (0, _v58.translate)({
                singular: "{AMOUNT} credits remaining",
                replacements: {
                  AMOUNT: Math.max(_v22, 0).toLocaleString()
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
          })]
        }), _v46 > _v22 && _v19 && _v45 > 0 ? (0, _v41.jsx)(_v44.Alert, {
          status: "warning",
          children: (0, _v41.jsx)(_v53.AlertDescription, {
            fontSize: "body-sm",
            children: _v54
          })
        }) : null, (0, _v41.jsx)(_v51.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v23 ? _v48 : _v47
        }), (0, _v41.jsx)(_v51.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v49
        })]
      }) : null, _v26, _v8]
    });
  }], 0);
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0);
  function _v98({
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
    return (0, _v41.jsxs)(_v47.Flex, {
      position: _v0,
      left: _v1,
      top: _v2,
      right: _v4,
      bottom: _v3,
      flexWrap: "nowrap",
      gap: (0, _v52.rem)(4),
      justifyContent: "flex-end",
      children: [(0, _v41.jsx)(_v45.Button, {
        size: "xs",
        isDisabled: _v7,
        variant: "secondary",
        onClick: _v5,
        children: _v76.T_CANCEL
      }), (0, _v41.jsx)(_v45.Button, {
        size: "xs",
        isLoading: _v7,
        isDisabled: _v8,
        variant: "primary",
        onClick: _v6,
        children: _v97.rtmpTranslations.save
      })]
    });
  }
  var _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0);
  function _v106() {
    return (_v106 = Object.assign.bind()).apply(null, arguments);
  }
  let _v107 = function (_v0) {
    return _v43.createElement("svg", _v106({
      viewBox: "6 6 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v1 || (_v1 = _v43.createElement("path", {
      d: "M17.175 16l5.25-5.242a.837.837 0 10-1.183-1.183L16 14.825l-5.242-5.25a.837.837 0 10-1.183 1.183L14.825 16l-5.25 5.242a.834.834 0 00.271 1.365.834.834 0 00.912-.182L16 17.175l5.242 5.25a.832.832 0 001.183 0 .834.834 0 000-1.183L17.175 16z",
      fill: "currentColor"
    })));
  };
  function _v108() {
    return (_v108 = Object.assign.bind()).apply(null, arguments);
  }
  let _v109 = function (_v0) {
    return _v43.createElement("svg", _v108({
      viewBox: "6 6 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v2 || (_v2 = _v43.createElement("path", {
      d: "M23.5 15.167a.833.833 0 00-.834.833 6.709 6.709 0 11-1.85-4.583h-2a.833.833 0 100 1.666h3.776a.833.833 0 00.833-.833V8.5a.834.834 0 00-1.667 0v1.475A8.334 8.334 0 1024.333 16a.833.833 0 00-.833-.833z",
      fill: "currentColor"
    })));
  };
  function _v110() {
    return (_v110 = Object.assign.bind()).apply(null, arguments);
  }
  let _v111 = function (_v0) {
    return _v43.createElement("svg", _v110({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 410 406"
    }, _v0), _v3 || (_v3 = _v43.createElement("path", {
      d: "M0 0h410v406H0V0z",
      fill: "#F2F2F2"
    })), _v4 || (_v4 = _v43.createElement("path", {
      d: "M115 256h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L116 292l-1 35H80c.04 11.144.04 11.144.09 22.289l.008 4.176.015 2.209c0 1.776-.05 3.551-.113 5.326-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.727-.033L44 362v-35l35-1c.29-11.144.29-11.144.568-22.289l.116-4.176.05-2.209c.152-5.212.152-5.212 1.266-6.326a178.35 178.35 0 017.535-.098l2.022.003c2.502.006 5.004.02 7.505.033L115 291v-35zM186 43h36l.063 17.438.027 5.509.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L186 79v35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L186 78V43zM115 43h36l.063 17.438.027 5.509.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L115 79v35H80l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L115 78V43zM44 43h36l.063 17.438.027 5.509.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L44 79v35H9l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L44 78V43z",
      fill: "#EBEBEB"
    })), _v5 || (_v5 = _v43.createElement("path", {
      d: "M80 114h35v35l-34 1-1 35H44l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1.98-1.98 5.821-1.255 8.535-1.316.668-.02 1.335-.038 2.022-.057 2.502-.068 5.004-.128 7.505-.19L79 148l1-34zM222 327h35v35h-35c.04 11.474.04 11.474.09 22.947l.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L186 398v-36l35-1 1-34zM151 327h35v35h-35c.04 11.474.04 11.474.09 22.947l.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L115 398v-36l35-1 1-34zM80 327h35v35H80c.04 11.474.04 11.474.09 22.947l.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L44 398v-36l35-1 1-34z",
      fill: "#F9F9F9"
    })), _v6 || (_v6 = _v43.createElement("path", {
      d: "M222 256h35v35l-34 1c-.29 11.144-.29 11.144-.568 22.289a7324.22 7324.22 0 01-.116 4.176l-.05 2.209c-.152 5.212-.152 5.212-1.266 6.326-2.594.089-5.16.115-7.754.098l-2.35-.005c-2.486-.005-4.972-.018-7.458-.03-1.682-.006-3.364-.01-5.045-.014-4.131-.011-8.262-.028-12.393-.049-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45 1.98-1.98 5.821-1.255 8.535-1.316.668-.02 1.335-.038 2.022-.057 2.502-.068 5.004-.128 7.506-.19L221 290l1-34zM151 256h35v35l-34 1c-.29 11.144-.29 11.144-.568 22.289a7324.22 7324.22 0 01-.116 4.176l-.05 2.209c-.152 5.212-.152 5.212-1.266 6.326-2.594.089-5.16.115-7.754.098l-2.35-.005c-2.486-.005-4.972-.018-7.458-.03-1.682-.006-3.364-.01-5.045-.014-4.131-.011-8.262-.028-12.393-.049-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45 1.98-1.98 5.821-1.255 8.535-1.316.668-.02 1.335-.038 2.022-.057 2.502-.068 5.004-.128 7.505-.19L150 290l1-34zM80 256h35v35l-34 1c-.29 11.144-.29 11.144-.568 22.289a7324.22 7324.22 0 01-.116 4.176l-.05 2.209c-.152 5.212-.152 5.212-1.266 6.326-2.594.089-5.16.115-7.754.098l-2.35-.005c-2.486-.005-4.972-.018-7.458-.03-1.682-.006-3.364-.01-5.045-.014-4.131-.011-8.262-.028-12.393-.049-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45 1.98-1.98 5.821-1.255 8.535-1.316.668-.02 1.335-.038 2.022-.057 2.502-.068 5.004-.128 7.505-.19L79 290l1-34z",
      fill: "#F9F9F9"
    })), _v7 || (_v7 = _v43.createElement("path", {
      d: "M328 256h35v35l-34 1-1 35h-35c-1.533-3.066-1.121-6.27-1.098-9.633l.003-2.02c.006-2.49.02-4.981.033-7.472L292 291h36v-35zM44 256h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.505.19L45 292l-1 35H9l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L44 291v-35zM186 185h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L187 221l-1 35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L186 220v-35zM115 185h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L116 221l-1 35H80l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L115 220v-35zM44 185h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.505.19L45 221l-1 35H9l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L44 220v-35zM186 114h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L187 150l-1 35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L186 149v-35zM115 114h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L116 150l-1 35H80l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L115 149v-35zM44 114h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.505.19L45 150l-1 35H9l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L44 149v-35z",
      fill: "#EBEBEB"
    })), _v8 || (_v8 = _v43.createElement("path", {
      d: "M222 43h35v35l-34 1-1 35h-36V79l35-1 1-35zM151 43h35v35l-34 1-1 35h-36V79l35-1 1-35zM80 43h35v35l-34 1-1 35H44V79l35-1 1-35zM364 185h35v35h-36l1-35zm-31.765 34.886c1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L363 220v36h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114zM293 185h35v35h-36l1-35zm-31.765 34.886c1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L292 220v36h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114zM364 114h35v35h-36l1-35zm-31.765 34.886c1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L363 149v36h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114zM293 114h35v35h-36l1-35zm-31.765 34.886c1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L292 149v36h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114z",
      fill: "#F9F9F9"
    })), _v9 || (_v9 = _v43.createElement("path", {
      d: "M257 114h35v35l-34 1-1 35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L257 149v-35zM186 0h36v7c-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L186 8v35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.283.005c2.415.005 4.83.018 7.244.03A5107.372 5107.372 0 01186 7V0z",
      fill: "#EBEBEB"
    })), _v10 || (_v10 = _v43.createElement("path", {
      d: "M222 0h35v7l-34 1-1 35h-36V8l35-1 1-7zM151 0h35v7l-34 1-1 35h-36V8l35-1 1-7zM80 0h35v7L81 8l-1 35H44V8l35-1 1-7z",
      fill: "#F9F9F9"
    })), _v11 || (_v11 = _v43.createElement("path", {
      d: "M363 362h36v36h-35c-1.533-3.066-1.121-6.27-1.098-9.633l.003-2.02c.006-2.49.02-4.981.033-7.472L363 362zM292 362h36v36h-35c-1.533-3.066-1.121-6.27-1.098-9.633l.003-2.02c.006-2.49.02-4.981.033-7.472L292 362zM9 362h35v36H9v-36zM328 327h35v35h-35v-35zM257 327h35v35h-35v-35z",
      fill: "#EBEBEB"
    })), _v12 || (_v12 = _v43.createElement("path", {
      d: "M9 185h35v35H9v-35z",
      fill: "#FAFAFA"
    })), _v13 || (_v13 = _v43.createElement("path", {
      d: "M364 150h35v35h-35v-35zM364 79h35v35h-35V79z",
      fill: "#EBEBEB"
    })), _v14 || (_v14 = _v43.createElement("path", {
      d: "M328 79h35v35h-35V79z",
      fill: "#F9F9F9"
    })), _v15 || (_v15 = _v43.createElement("path", {
      d: "M293 79h35v35h-35V79z",
      fill: "#EBEBEB"
    })), _v16 || (_v16 = _v43.createElement("path", {
      d: "M257 79h35v35h-35V79z",
      fill: "#F9F9F9"
    })), _v17 || (_v17 = _v43.createElement("path", {
      d: "M222 79h35v35h-35V79z",
      fill: "#EBEBEB"
    })), _v18 || (_v18 = _v43.createElement("path", {
      d: "M364 43h35v35h-35V43z",
      fill: "#FAFAFA"
    })), _v19 || (_v19 = _v43.createElement("path", {
      d: "M328 43h35v35h-35V43z",
      fill: "#EBEBEB"
    })), _v20 || (_v20 = _v43.createElement("path", {
      d: "M293 43h35v35h-35V43z",
      fill: "#FAFAFA"
    })), _v21 || (_v21 = _v43.createElement("path", {
      d: "M257 43h35v35h-35V43z",
      fill: "#EBEBEB"
    })), _v22 || (_v22 = _v43.createElement("path", {
      d: "M9 43h35v35H9V43z",
      fill: "#FAFAFA"
    })), _v23 || (_v23 = _v43.createElement("path", {
      d: "M364 8h35v35h-35V8z",
      fill: "#EBEBEB"
    })), _v24 || (_v24 = _v43.createElement("path", {
      d: "M328 8h35v35h-35V8z",
      fill: "#FAFAFA"
    })), _v25 || (_v25 = _v43.createElement("path", {
      d: "M293 8h35v35h-35V8z",
      fill: "#EBEBEB"
    })), _v26 || (_v26 = _v43.createElement("path", {
      d: "M257 8h35v35h-35V8z",
      fill: "#FAFAFA"
    })), _v27 || (_v27 = _v43.createElement("path", {
      d: "M222 8h35v35h-35V8z",
      fill: "#EBEBEB"
    })), _v28 || (_v28 = _v43.createElement("path", {
      d: "M0 0h44v7L10 8 9 43H0V0zM400 291h10v36h-11c-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45l1-1zM400 220h10v36h-11c-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45l1-1zM400 149h10v36h-11c-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45l1-1z",
      fill: "#F9F9F9"
    })), _v29 || (_v29 = _v43.createElement("path", {
      d: "M399 327h11v35h-11v-35z",
      fill: "#EBEBEB"
    })), _v30 || (_v30 = _v43.createElement("path", {
      d: "M399 79h11v35h-11V79z",
      fill: "#F9F9F9"
    })), _v31 || (_v31 = _v43.createElement("path", {
      d: "M399 43h11v35h-11V43z",
      fill: "#EBEBEB"
    })), _v32 || (_v32 = _v43.createElement("path", {
      d: "M399 8h11v35h-11V8z",
      fill: "#FAFAFA"
    })), _v33 || (_v33 = _v43.createElement("path", {
      d: "M0 43h9c.025 4.966.043 9.932.055 14.899.005 1.69.012 3.381.02 5.072.013 2.425.018 4.85.023 7.275l.015 2.304c0 1.817-.051 3.634-.113 5.45l-1 1H0V43zM0 327h9v35H0v-35zM0 256h9v35H0v-35zM0 185h9v35H0v-35zM0 114h9v35H0v-35zM328 398h35v8h-35v-8z",
      fill: "#EBEBEB"
    })), _v34 || (_v34 = _v43.createElement("path", {
      d: "M222 398h35v8h-35v-8zM151 398h35v8h-35v-8zM80 398h35v8H80v-8zM364 0h35v7h-35V0z",
      fill: "#FAFAFA"
    })), _v35 || (_v35 = _v43.createElement("path", {
      d: "M328 0h35v7h-35V0z",
      fill: "#EBEBEB"
    })), _v36 || (_v36 = _v43.createElement("path", {
      d: "M293 0h35v7h-35V0z",
      fill: "#FAFAFA"
    })), _v37 || (_v37 = _v43.createElement("path", {
      d: "M257 0h35v7h-35V0zM399 398h11v8h-11v-8zM399 0h11v7h-11V0zM0 398h9v8H0v-8z",
      fill: "#EBEBEB"
    })), _v38 || (_v38 = _v43.createElement("path", {
      d: "M0 0h9c.042 2.333.04 4.667 0 7-1 1-1 1-2.848 1.098L0 8V0z",
      fill: "#ECECEC"
    })));
  };
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0);
  let _v116 = 16 / 9;
  var _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0);
  let _v120 = (0, _v52.rem)(20),
    _v121 = (0, _v52.rem)(16),
    _v122 = (0, _v52.rem)(544);
  function _v123({
    file: _v0,
    isSaving: _v1,
    onChange: _v2,
    onCancel: _v3,
    onSave: _v4,
    onCloseComplete: _v5
  }) {
    let [_v6, _v7] = (0, _v43.useState)(null);
    return (0, _v43.useEffect)(() => {
      let _v0 = _v0 ? URL.createObjectURL(_v0) : null;
      return _v7(_v0), () => {
        _v0 && URL.revokeObjectURL(_v0);
      };
    }, [_v0]), (0, _v41.jsxs)(_v83.Modal, {
      isOpen: null !== _v0,
      onClose: _v3,
      onCloseComplete: _v5,
      closeOnEsc: !_v1,
      closeOnOverlayClick: !_v1,
      isCentered: !0,
      size: "lg",
      children: [(0, _v41.jsx)(_v88.ModalOverlay, {}), (0, _v41.jsxs)(_v86.ModalContent, {
        maxWidth: _v122,
        borderRadius: _v120,
        children: [(0, _v41.jsx)(_v84.ModalBody, {
          padding: (0, _v52.rem)(8),
          children: (0, _v41.jsx)(_v117.AspectRatio, {
            ratio: _v116,
            width: "100%",
            borderRadius: _v121,
            overflow: "hidden",
            backgroundColor: "black",
            children: _v6 ? (0, _v41.jsx)(_v101.Image, {
              src: _v6,
              alt: (0, _v58.translate)({
                singular: "Thumbnail preview",
                dictionary: {
                  es: {
                    singular: "Vista previa de la miniatura"
                  },
                  "de-DE": {
                    singular: "Vorschaubild-Vorschau"
                  },
                  "fr-FR": {
                    singular: "Aperçu de la miniature"
                  },
                  "ja-JP": {
                    singular: "サムネイルプレビュー"
                  },
                  "ko-KR": {
                    singular: "썸네일 미리보기"
                  },
                  "pt-BR": {
                    singular: "Visualização da miniatura"
                  },
                  "zh-CN": {
                    singular: "缩略图预览"
                  }
                }
              }),
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }) : (0, _v41.jsx)(_v99.Box, {
              width: "100%",
              height: "100%"
            })
          })
        }), (0, _v41.jsx)(_v118.ModalFooter, {
          paddingTop: (0, _v52.rem)(16),
          paddingBottom: (0, _v52.rem)(24),
          paddingX: (0, _v52.rem)(24),
          children: (0, _v41.jsxs)(_v47.Flex, {
            align: "center",
            gap: (0, _v52.rem)(12),
            width: "100%",
            children: [(0, _v41.jsx)(_v45.Button, {
              variant: "secondary",
              size: "md",
              leftIcon: (0, _v41.jsx)(_v119.Redo, {}),
              onClick: _v2,
              isDisabled: _v1,
              children: (0, _v58.translate)({
                singular: "Change",
                dictionary: {
                  es: {
                    singular: "Cambiar"
                  },
                  "de-DE": {
                    singular: "Ändern"
                  },
                  "fr-FR": {
                    singular: "Modifier"
                  },
                  "ja-JP": {
                    singular: "変更"
                  },
                  "ko-KR": {
                    singular: "변경"
                  },
                  "pt-BR": {
                    singular: "Alterar"
                  },
                  "zh-CN": {
                    singular: "更改"
                  }
                }
              })
            }), (0, _v41.jsxs)(_v47.Flex, {
              flex: "1",
              justify: "flex-end",
              align: "center",
              gap: (0, _v52.rem)(12),
              minWidth: 0,
              children: [(0, _v41.jsx)(_v45.Button, {
                variant: "tertiary",
                size: "md",
                onClick: _v3,
                isDisabled: _v1,
                children: (0, _v58.translate)({
                  singular: "Cancel",
                  dictionary: {
                    es: {
                      singular: "Cancelar"
                    },
                    "de-DE": {
                      singular: "Abbrechen"
                    },
                    "fr-FR": {
                      singular: "Annuler"
                    },
                    "ja-JP": {
                      singular: "キャンセル"
                    },
                    "ko-KR": {
                      singular: "취소"
                    },
                    "pt-BR": {
                      singular: "Cancelar"
                    },
                    "zh-CN": {
                      singular: "取消"
                    }
                  }
                })
              }), (0, _v41.jsx)(_v45.Button, {
                variant: "primary",
                size: "md",
                onClick: _v4,
                isLoading: _v1,
                children: (0, _v58.translate)({
                  singular: "Save",
                  dictionary: {
                    es: {
                      singular: "Guardar"
                    },
                    "de-DE": {
                      singular: "Speichern"
                    },
                    "fr-FR": {
                      singular: "Enregistrer"
                    },
                    "ja-JP": {
                      singular: "保存"
                    },
                    "ko-KR": {
                      singular: "저장"
                    },
                    "pt-BR": {
                      singular: "Salvar"
                    },
                    "zh-CN": {
                      singular: "保存"
                    }
                  }
                })
              })]
            })]
          })
        })]
      })]
    });
  }
  var _v124 = _v0.i(0),
    _v125 = _v0.i(0);
  function _v126() {
    return (_v126 = Object.assign.bind()).apply(null, arguments);
  }
  let _v127 = function (_v0) {
      return _v43.createElement("svg", _v126({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _v0), _v39 || (_v39 = _v43.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.293 10.293a1 1 0 011.414 0l2.829 2.828a1 1 0 11-1.415 1.415L13 13.414V20.5a1 1 0 11-2 0v-7.086l-1.121 1.122a1 1 0 11-1.415-1.415l2.829-2.828z",
        fill: "currentColor"
      })), _v40 || (_v40 = _v43.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4.5A3.5 3.5 0 008.5 8a1 1 0 01-1 1A3.5 3.5 0 004 12.5C4 14.512 5.628 16 7 16h.5a1 1 0 110 2H7c-2.628 0-5-2.541-5-5.5a5.502 5.502 0 014.577-5.423 5.502 5.502 0 0110.846 0A5.501 5.501 0 0122 12.5c0 2.959-2.372 5.5-5 5.5h-.5a1 1 0 110-2h.5c1.372 0 3-1.488 3-3.5A3.5 3.5 0 0016.5 9a1 1 0 01-1-1A3.5 3.5 0 0012 4.5z",
        fill: "currentColor"
      })));
    },
    _v128 = (0, _v52.rem)(8),
    _v129 = (0, _v52.rem)(8);
  function _v130({
    thumbnails: _v0,
    activeUri: _v1,
    isLoading: _v2,
    onSelect: _v3
  }) {
    return _v2 ? (0, _v41.jsx)(_v99.Box, {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: _v129,
      width: "100%",
      children: Array.from({
        length: 4
      }).map((_v0, _v1) => (0, _v41.jsx)(_v117.AspectRatio, {
        ratio: _v116,
        width: "100%",
        children: (0, _v41.jsx)(_v59.BokehSkeleton, {
          width: "100%",
          height: "100%",
          borderRadius: _v128
        })
      }, _v1))
    }) : (0, _v41.jsx)(_v99.Box, {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: _v129,
      width: "100%",
      children: _v0.map(_v0 => {
        let _v1 = !!(_v1 && _v0.uri === _v1);
        return (0, _v41.jsx)(_v99.Box, {
          as: "button",
          type: "button",
          width: "100%",
          padding: 0,
          borderRadius: _v128,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: _v1 ? "stroke-focus" : "transparent",
          overflow: "hidden",
          cursor: "pointer",
          onClick: () => _v3(_v0),
          children: (0, _v41.jsx)(_v117.AspectRatio, {
            ratio: _v116,
            width: "100%",
            children: (0, _v41.jsx)(_v101.Image, {
              src: _v0.baseLink,
              alt: (0, _v58.translate)({
                singular: "Saved thumbnail",
                dictionary: {
                  es: {
                    singular: "Miniatura guardada"
                  },
                  "de-DE": {
                    singular: "Gespeichertes Vorschaubild"
                  },
                  "fr-FR": {
                    singular: "Miniature enregistrée"
                  },
                  "ja-JP": {
                    singular: "保存済みサムネイル"
                  },
                  "ko-KR": {
                    singular: "저장된 썸네일"
                  },
                  "pt-BR": {
                    singular: "Miniatura salva"
                  },
                  "zh-CN": {
                    singular: "已保存的缩略图"
                  }
                }
              }),
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "black"
            })
          })
        }, _v0.uri);
      })
    });
  }
  let _v131 = (0, _v52.rem)(233),
    _v132 = {
      width: 20,
      height: 20
    };
  function _v133({
    thumbnails: _v0,
    activeUri: _v1,
    isLoading: _v2,
    onUploadClick: _v3,
    onSelectThumbnail: _v4
  }) {
    let _v5 = _v2 || _v0.length > 0;
    return (0, _v41.jsx)(_v125.Portal, {
      children: (0, _v41.jsx)(_v124.PopoverContent, {
        width: _v131,
        maxWidth: _v131,
        maxHeight: (0, _v52.rem)(300),
        padding: (0, _v52.rem)(8),
        borderRadius: (0, _v52.rem)(12),
        border: "none",
        backgroundColor: "fill-surface",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        rootProps: {
          zIndex: "popover"
        },
        _focus: {
          outline: "none"
        },
        _focusVisible: {
          outline: "none"
        },
        children: (0, _v41.jsxs)(_v47.Flex, {
          direction: "column",
          gap: (0, _v52.rem)(16),
          width: "100%",
          flex: "1",
          minHeight: 0,
          children: [(0, _v41.jsx)(_v45.Button, {
            variant: "secondary",
            size: "md",
            width: "100%",
            flexShrink: 0,
            leftIcon: (0, _v41.jsx)(_v127, {
              style: _v132
            }),
            iconSpacing: (0, _v52.rem)(6),
            onClick: _v3,
            children: (0, _v58.translate)({
              singular: "Upload image",
              dictionary: {
                es: {
                  singular: "Subir imagen"
                },
                "de-DE": {
                  singular: "Bild hochladen"
                },
                "fr-FR": {
                  singular: "Téléverser une image"
                },
                "ja-JP": {
                  singular: "画像をアップロード"
                },
                "ko-KR": {
                  singular: "이미지 업로드"
                },
                "pt-BR": {
                  singular: "Enviar imagem"
                },
                "zh-CN": {
                  singular: "上传图片"
                }
              }
            })
          }), _v5 ? (0, _v41.jsxs)(_v47.Flex, {
            direction: "column",
            gap: (0, _v52.rem)(8),
            width: "100%",
            flex: "1",
            minHeight: 0,
            children: [(0, _v41.jsx)(_v51.Text, {
              variant: "body-sm",
              color: "text-tertiary",
              children: (0, _v58.translate)({
                singular: "Previously used",
                dictionary: {
                  es: {
                    singular: "Usado anteriormente"
                  },
                  "de-DE": {
                    singular: "Zuletzt verwendet"
                  },
                  "fr-FR": {
                    singular: "Utilisé précédemment"
                  },
                  "ja-JP": {
                    singular: "以前に使用した"
                  },
                  "ko-KR": {
                    singular: "이전에 사용된 항목"
                  },
                  "pt-BR": {
                    singular: "Usado anteriormente"
                  },
                  "zh-CN": {
                    singular: "之前使用过"
                  }
                }
              })
            }), (0, _v41.jsx)(_v99.Box, {
              flex: "1",
              minHeight: 0,
              width: "100%",
              overflowY: "auto",
              children: (0, _v41.jsx)(_v130, {
                thumbnails: _v0,
                activeUri: _v1,
                isLoading: _v2,
                onSelect: _v4
              })
            })]
          }) : null]
        })
      })
    });
  }
  let _v134 = (0, _v52.rem)(48),
    _v135 = (0, _v52.rem)(12),
    _v136 = (0, _v52.rem)(8);
  function _v137() {
    let {
        settings: {
          value: _v0
        },
        actions: {
          listSavedThumbnails: _v1,
          createAndActivateThumbnail: _v2,
          activateThumbnail: _v3,
          deactivateThumbnail: _v4
        }
      } = (0, _v42.useManager)(_v73.EventSettingsManager),
      _v5 = (0, _v104.useToast)(),
      {
        trackLiveStreamBasicsChanged: _v6
      } = (0, _v81.useLiveStreamBroadcasterTracking)(),
      _v7 = (0, _v43.useCallback)((_v0, _v1) => {
        _v5({
          status: "error",
          duration: 0,
          title: function (_v0, _v1, _v2) {
            if (!(_v0 instanceof _v113.NetworkError)) return _v1;
            let _v3 = _v2?.[_v0.status];
            if (_v3) return _v3;
            switch (_v0.status) {
              case 401:
                return (0, _v58.translate)({
                  singular: "Your session has expired. Please sign in again.",
                  dictionary: {
                    es: {
                      singular: "Su sesión ha caducado. Por favor, inicie sesión de nuevo."
                    },
                    "de-DE": {
                      singular: "Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an."
                    },
                    "fr-FR": {
                      singular: "Votre session a expiré. Veuillez vous reconnecter."
                    },
                    "ja-JP": {
                      singular: "セッションの有効期限が切れました。再度サインインしてください。"
                    },
                    "ko-KR": {
                      singular: "세션이 만료되었습니다. 다시 로그인해 주세요."
                    },
                    "pt-BR": {
                      singular: "Sua sessão expirou. Por favor, faça login novamente."
                    },
                    "zh-CN": {
                      singular: "会话已过期。请重新登录。"
                    }
                  }
                });
              case 403:
                return (0, _v58.translate)({
                  singular: "You don't have permission to make this change.",
                  dictionary: {
                    es: {
                      singular: "No tiene permiso para realizar este cambio."
                    },
                    "de-DE": {
                      singular: "Sie haben keine Berechtigung, diese Änderung vorzunehmen."
                    },
                    "fr-FR": {
                      singular: "Vous n'avez pas l'autorisation d'effectuer cette modification."
                    },
                    "ja-JP": {
                      singular: "この変更を行う権限がありません。"
                    },
                    "ko-KR": {
                      singular: "이 변경을 수행할 권한이 없습니다."
                    },
                    "pt-BR": {
                      singular: "Você não tem permissão para fazer essa alteração."
                    },
                    "zh-CN": {
                      singular: "您没有权限进行此更改。"
                    }
                  }
                });
              case 413:
                return (0, _v58.translate)({
                  singular: "That file is too large. Please choose a smaller one.",
                  dictionary: {
                    es: {
                      singular: "Ese archivo es demasiado grande. Por favor, elija uno más pequeño."
                    },
                    "de-DE": {
                      singular: "Die Datei ist zu groß. Bitte wählen Sie eine kleinere Datei."
                    },
                    "fr-FR": {
                      singular: "Ce fichier est trop volumineux. Veuillez en choisir un plus petit."
                    },
                    "ja-JP": {
                      singular: "そのファイルは大きすぎます。より小さいファイルを選択してください。"
                    },
                    "ko-KR": {
                      singular: "해당 파일이 너무 큽니다. 더 작은 파일을 선택해 주세요."
                    },
                    "pt-BR": {
                      singular: "Esse arquivo é muito grande. Por favor, escolha um menor."
                    },
                    "zh-CN": {
                      singular: "该文件过大。请选择更小的文件。"
                    }
                  }
                });
              case 415:
                return (0, _v58.translate)({
                  singular: "That file type isn't supported.",
                  dictionary: {
                    es: {
                      singular: "Ese tipo de archivo no es compatible."
                    },
                    "de-DE": {
                      singular: "Dieser Dateityp wird nicht unterstützt."
                    },
                    "fr-FR": {
                      singular: "Ce type de fichier n'est pas pris en charge."
                    },
                    "ja-JP": {
                      singular: "そのファイル形式はサポートされていません。"
                    },
                    "ko-KR": {
                      singular: "해당 파일 형식은 지원되지 않습니다."
                    },
                    "pt-BR": {
                      singular: "Esse tipo de arquivo não é suportado."
                    },
                    "zh-CN": {
                      singular: "不支持该文件类型。"
                    }
                  }
                });
              case 429:
                return (0, _v58.translate)({
                  singular: "Too many requests. Please wait a moment and try again.",
                  dictionary: {
                    es: {
                      singular: "Demasiadas solicitudes. Espere un momento e intente de nuevo."
                    },
                    "de-DE": {
                      singular: "Zu viele Anfragen. Bitte warten Sie einen Moment und versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Trop de requêtes. Veuillez patienter un instant et réessayer."
                    },
                    "ja-JP": {
                      singular: "リクエストが多すぎます。しばらく待ってから再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "요청이 너무 많습니다. 잠시 기다린 후 다시 시도해 주세요."
                    },
                    "pt-BR": {
                      singular: "Muitas solicitações. Por favor, aguarde um momento e tente novamente."
                    },
                    "zh-CN": {
                      singular: "请求过多。请稍候再试。"
                    }
                  }
                });
              default:
                return _v1;
            }
          }(_v0, _v1, {
            403: (0, _v58.translate)({
              singular: "You don't have permission to change this event's thumbnail.",
              dictionary: {
                es: {
                  singular: "No tiene permiso para cambiar la miniatura de este evento."
                },
                "de-DE": {
                  singular: "Sie haben keine Berechtigung, das Vorschaubild dieses Events zu ändern."
                },
                "fr-FR": {
                  singular: "Vous n'êtes pas autorisé à modifier la vignette de cet événement."
                },
                "ja-JP": {
                  singular: "このイベントのサムネイルを変更する権限がありません。"
                },
                "ko-KR": {
                  singular: "이 이벤트의 썸네일을 변경할 권한이 없습니다."
                },
                "pt-BR": {
                  singular: "Você não tem permissão para alterar a miniatura deste evento."
                },
                "zh-CN": {
                  singular: "您没有权限更改此活动的缩略图。"
                }
              }
            })
          })
        });
      }, [_v5]),
      _v8 = (0, _v43.useRef)(null),
      [_v9, _v10] = (0, _v43.useState)(null),
      _v11 = null !== _v9,
      _v12 = (0, _v43.useRef)(!1),
      [_v13, _v14] = (0, _v43.useState)(!1),
      [_v15, _v16] = (0, _v43.useState)(null),
      [_v17, _v18] = (0, _v43.useState)(null),
      _v19 = (0, _v43.useRef)(void 0),
      _v20 = (0, _v43.useRef)(!1),
      [_v21, _v22] = (0, _v43.useState)(null),
      [_v23, _v24] = (0, _v43.useState)(!0),
      _v25 = (0, _v43.useRef)(0),
      _v26 = (0, _v43.useCallback)(async () => {
        let _v0 = ++_v25.current;
        _v24(!0);
        try {
          let _v0 = await _v1();
          _v0 === _v25.current && _v22(_v0);
        } catch {} finally {
          _v0 === _v25.current && _v24(!1);
        }
      }, [_v1]);
    (0, _v43.useEffect)(() => {
      let _v0 = ++_v25.current,
        _v1 = !1;
      return (async () => {
        try {
          let _v0 = await _v1();
          _v1 || _v0 !== _v25.current || _v22(_v0);
        } catch {} finally {
          _v1 || _v0 !== _v25.current || _v24(!1);
        }
      })(), () => {
        _v1 = !0;
      };
    }, [_v1]);
    let _v27 = (0, _v43.useCallback)(() => {
        _v8.current?.click();
      }, []),
      _v28 = (0, _v43.useRef)(!1),
      _v29 = (0, _v43.useCallback)(() => {
        _v21 && 0 === _v21.length ? (_v28.current = !1, _v14(!1), _v27()) : (_v28.current = !0, _v14(!0));
      }, [_v21, _v27]),
      _v30 = (0, _v43.useCallback)(_v0 => {
        let _v1 = _v0.target.files?.[0];
        if (_v0.target.value = "", _v1) {
          if (_v1.size > _v112.graphicsConfig.UPLOADS.THUMBNAIL_FILE_UPLOAD_LIMIT) return void _v5({
            status: "error",
            duration: 0,
            title: (0, _v58.translate)({
              singular: "Your file can’t be uploaded because it exceeds the size limit of {FILE_SIZE_LIMIT}MB",
              replacements: {
                FILE_SIZE_LIMIT: _v112.graphicsConfig.UPLOADS.THUMBNAIL_FILE_UPLOAD_LIMIT_MB
              },
              dictionary: {
                es: {
                  singular: "Tu archivo no se puede subir porque excede el límite de {FILE_SIZE_LIMIT}MB"
                },
                "de-DE": {
                  singular: "Ihre Datei kann nicht hochgeladen werden, da sie die Größengrenze von {FILE_SIZE_LIMIT}MB überschreitet"
                },
                "fr-FR": {
                  singular: "Votre fichier ne peut pas être téléchargé car il dépasse la taille maximale autorisée de {FILE_SIZE_LIMIT}MB"
                },
                "ja-JP": {
                  singular: "ファイルをアップロードできません。{FILE_SIZE_LIMIT}MBのサイズ制限を超えています"
                },
                "ko-KR": {
                  singular: "{FILE_SIZE_LIMIT}MB의 크기 제한을 초과하여 파일을 업로드할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Seu arquivo não pode ser enviado porque excede o limite de tamanho de {FILE_SIZE_LIMIT}MB"
                },
                "zh-CN": {
                  singular: "您的文件无法上传，因为其超过了 {FILE_SIZE_LIMIT}MB 的大小限制"
                }
              }
            })
          });
          _v14(!1), _v16(_v1);
        }
      }, [_v5]),
      _v31 = (0, _v43.useCallback)(async _v0 => {
        if (!_v12.current && !(0 >= (0, _v114.parseThumbnailIdFromUrl)(_v0.uri))) {
          _v12.current = !0, _v14(!1), _v10("activate");
          try {
            await _v3(_v0), _v6({
              liveStreamBasicsField: "thumbnail"
            }), _v18(null), await _v26();
          } catch (_v0) {
            _v7(_v0, (0, _v58.translate)({
              singular: "Couldn't update the thumbnail. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo actualizar la miniatura. Vuelva a intentarlo."
                },
                "de-DE": {
                  singular: "Das Vorschaubild konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Impossible de mettre à jour la vignette. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "サムネイルを更新できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "썸네일을 업데이트할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível atualizar a miniatura. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "无法更新缩略图。请重试。"
                }
              }
            }));
          } finally {
            _v12.current = !1, _v10(null);
          }
        }
      }, [_v3, _v26, _v7, _v6]),
      _v32 = (0, _v43.useRef)(!1),
      _v33 = (0, _v43.useCallback)(() => {
        _v27();
      }, [_v27]),
      _v34 = (0, _v43.useCallback)(() => {
        _v32.current = _v28.current, _v16(null);
      }, []),
      _v35 = (0, _v43.useCallback)(() => {
        _v32.current && (_v32.current = !1, _v14(!0));
      }, []),
      _v36 = (0, _v43.useCallback)(async () => {
        if (_v15 && !_v12.current) {
          _v12.current = !0, _v10("upload");
          try {
            let _v0 = await _v2(_v15);
            _v6({
              liveStreamBasicsField: "thumbnail"
            }), _v20.current = !0, _v18(_v15), _v16(null), _v22(_v0 => [{
              uri: _v0.uri,
              baseLink: _v0.baseLink,
              sizes: [],
              active: !0
            }, ...(_v0 ?? []).filter(_v0 => _v0.uri !== _v0.uri)]), await _v26();
          } catch (_v0) {
            _v7(_v0, (0, _v58.translate)({
              singular: "Couldn't save the thumbnail. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo guardar la miniatura. Vuelva a intentarlo."
                },
                "de-DE": {
                  singular: "Das Vorschaubild konnte nicht gespeichert werden. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Impossible d'enregistrer la vignette. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "サムネイルを保存できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "썸네일을 저장할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível salvar a miniatura. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "无法保存缩略图。请重试。"
                }
              }
            }));
          } finally {
            _v12.current = !1, _v10(null);
          }
        }
      }, [_v15, _v2, _v26, _v7, _v6]),
      _v37 = (0, _v43.useCallback)(async () => {
        if (_v12.current) return;
        let _v0 = (0, _v114.parseThumbnailIdFromUrl)(_v0?.pictures?.uri);
        if (!(_v0 <= 0)) {
          _v12.current = !0, _v10("remove");
          try {
            await _v4(_v0), _v6({
              liveStreamBasicsField: "thumbnail"
            }), _v18(null), await _v26();
          } catch (_v0) {
            _v7(_v0, (0, _v58.translate)({
              singular: "Couldn't remove the thumbnail. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo eliminar la miniatura. Vuelva a intentarlo."
                },
                "de-DE": {
                  singular: "Das Vorschaubild konnte nicht entfernt werden. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Impossible de supprimer la vignette. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "サムネイルを削除できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "썸네일을 삭제할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível remover a miniatura. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "无法删除缩略图。请重试。"
                }
              }
            }));
          } finally {
            _v12.current = !1, _v10(null);
          }
        }
      }, [_v0?.pictures?.uri, _v4, _v26, _v7, _v6]),
      _v38 = _v0?.pictures?.active ? _v0.pictures.uri : void 0;
    if ((0, _v43.useEffect)(() => {
      _v20.current ? (_v19.current = _v38, _v20.current = !1) : _v38 !== _v19.current && (_v19.current = _v38, _v18(null));
    }, [_v38, _v17]), !_v0) return (0, _v41.jsx)(_v59.BokehSkeleton, {
      borderRadius: (0, _v52.rem)(4),
      height: (0, _v52.rem)(92),
      marginTop: (0, _v52.rem)(16)
    });
    let _v39 = _v0?.pictures,
      _v40 = !!(_v39?.active && _v39.baseLink);
    return (0, _v41.jsxs)(_v47.Flex, {
      direction: "column",
      width: "100%",
      marginTop: (0, _v52.rem)(16),
      children: [(0, _v41.jsx)(_v49.Paragraph, {
        size: "md",
        color: "text-primary",
        fontWeight: "bold",
        marginBottom: (0, _v52.rem)(8),
        children: (0, _v58.translate)({
          singular: "Thumbnail",
          dictionary: {
            es: {
              singular: "Miniatura"
            },
            "de-DE": {
              singular: "Vorschaubild"
            },
            "fr-FR": {
              singular: "Vignette"
            },
            "ja-JP": {
              singular: "サムネイル"
            },
            "ko-KR": {
              singular: "썸네일"
            },
            "pt-BR": {
              singular: "Miniatura"
            },
            "zh-CN": {
              singular: "缩略图"
            }
          }
        })
      }), (0, _v41.jsxs)(_v102.Popover, {
        isOpen: _v13 && !_v15,
        onClose: () => _v14(!1),
        placement: "left-start",
        flip: !0,
        preventOverflow: !0,
        gutter: 8,
        isLazy: !0,
        children: [(0, _v41.jsx)(_v103.PopoverAnchor, {
          children: _v40 && _v39 ? (0, _v41.jsxs)(_v47.Flex, {
            align: "center",
            gap: (0, _v52.rem)(16),
            paddingY: (0, _v52.rem)(8),
            paddingLeft: (0, _v52.rem)(8),
            paddingRight: (0, _v52.rem)(16),
            width: "100%",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "input-stroke",
            borderRadius: _v135,
            backgroundColor: "fill-surface",
            children: [(0, _v41.jsx)(_v101.Image, {
              src: _v39.baseLink,
              alt: (0, _v58.translate)({
                singular: "Event thumbnail",
                dictionary: {
                  es: {
                    singular: "Miniatura del evento"
                  },
                  "de-DE": {
                    singular: "Event-Vorschaubild"
                  },
                  "fr-FR": {
                    singular: "Vignette de l’événement"
                  },
                  "ja-JP": {
                    singular: "イベントのサムネイル"
                  },
                  "ko-KR": {
                    singular: "이벤트 썸네일"
                  },
                  "pt-BR": {
                    singular: "Miniatura do Evento"
                  },
                  "zh-CN": {
                    singular: "活动缩略图"
                  }
                }
              }),
              boxSize: _v134,
              objectFit: "cover",
              borderRadius: _v136,
              backgroundColor: "background",
              flexShrink: 0
            }), (0, _v41.jsx)(_v47.Flex, {
              direction: "column",
              gap: (0, _v52.rem)(2),
              flex: "1",
              minWidth: 0,
              children: _v17 ? (0, _v41.jsxs)(_v41.Fragment, {
                children: [(0, _v41.jsx)(_v51.Text, {
                  variant: "body-md",
                  fontWeight: "medium",
                  color: "text-primary",
                  noOfLines: 1,
                  children: _v17.name
                }), (0, _v41.jsx)(_v51.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v115.bytesToSize)(_v17.size)
                })]
              }) : null
            }), (0, _v41.jsxs)(_v47.Flex, {
              align: "center",
              gap: (0, _v52.rem)(8),
              children: [(0, _v41.jsx)(_v100.IconButton, {
                "aria-label": (0, _v58.translate)({
                  singular: "Reselect thumbnail",
                  dictionary: {
                    es: {
                      singular: "Volver a seleccionar miniatura"
                    },
                    "de-DE": {
                      singular: "Vorschaubild neu auswählen"
                    },
                    "fr-FR": {
                      singular: "Sélectionner à nouveau la vignette"
                    },
                    "ja-JP": {
                      singular: "サムネイルを再選択"
                    },
                    "ko-KR": {
                      singular: "썸네일 다시 선택"
                    },
                    "pt-BR": {
                      singular: "Selecionar miniatura novamente"
                    },
                    "zh-CN": {
                      singular: "重新选择缩略图"
                    }
                  }
                }),
                icon: (0, _v41.jsx)(_v109, {}),
                variant: "tertiary",
                size: "sm",
                borderRadius: (0, _v52.rem)(8),
                isDisabled: _v11,
                onClick: _v29
              }), (0, _v41.jsx)(_v100.IconButton, {
                "aria-label": (0, _v58.translate)({
                  singular: "Remove thumbnail",
                  dictionary: {
                    es: {
                      singular: "Eliminar miniatura"
                    },
                    "de-DE": {
                      singular: "Vorschaubild entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimer la vignette"
                    },
                    "ja-JP": {
                      singular: "サムネイルを削除"
                    },
                    "ko-KR": {
                      singular: "썸네일 제거"
                    },
                    "pt-BR": {
                      singular: "Remover miniatura"
                    },
                    "zh-CN": {
                      singular: "移除缩略图"
                    }
                  }
                }),
                icon: (0, _v41.jsx)(_v107, {}),
                variant: "tertiary",
                size: "sm",
                borderRadius: (0, _v52.rem)(8),
                isLoading: "remove" === _v9,
                isDisabled: _v11,
                onClick: _v37
              })]
            })]
          }) : (0, _v41.jsxs)(_v99.Box, {
            as: "button",
            type: "button",
            display: "flex",
            alignItems: "center",
            gap: (0, _v52.rem)(16),
            paddingY: (0, _v52.rem)(8),
            paddingLeft: (0, _v52.rem)(8),
            paddingRight: (0, _v52.rem)(16),
            width: "100%",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "input-stroke",
            borderRadius: _v135,
            backgroundColor: "fill-surface",
            cursor: _v11 ? "not-allowed" : "pointer",
            opacity: _v11 ? .6 : 1,
            textAlign: "left",
            disabled: _v11,
            onClick: _v29,
            children: [(0, _v41.jsxs)(_v47.Flex, {
              position: "relative",
              align: "center",
              justify: "center",
              boxSize: _v134,
              borderRadius: _v136,
              overflow: "hidden",
              flexShrink: 0,
              children: [(0, _v41.jsx)(_v111, {
                width: "100%",
                height: "100%",
                preserveAspectRatio: "xMidYMid meet",
                style: {
                  position: "absolute",
                  inset: 0
                }
              }), (0, _v41.jsx)(_v105.Image, {
                color: "text-secondary",
                style: {
                  position: "relative"
                }
              })]
            }), (0, _v41.jsxs)(_v47.Flex, {
              direction: "column",
              gap: (0, _v52.rem)(2),
              children: [(0, _v41.jsx)(_v51.Text, {
                variant: "body-md",
                fontWeight: "medium",
                color: "text-primary",
                children: (0, _v58.translate)({
                  singular: "Select thumbnail",
                  dictionary: {
                    es: {
                      singular: "Seleccionar miniatura"
                    },
                    "de-DE": {
                      singular: "Vorschaubild auswählen"
                    },
                    "fr-FR": {
                      singular: "Sélectionner la vignette"
                    },
                    "ja-JP": {
                      singular: "サムネイルを選択"
                    },
                    "ko-KR": {
                      singular: "썸네일 선택"
                    },
                    "pt-BR": {
                      singular: "Selecionar miniatura"
                    },
                    "zh-CN": {
                      singular: "选择缩略图"
                    }
                  }
                })
              }), (0, _v41.jsx)(_v51.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: (0, _v58.translate)({
                  singular: "Max size {FILE_SIZE_LIMIT}MB",
                  replacements: {
                    FILE_SIZE_LIMIT: _v112.graphicsConfig.UPLOADS.THUMBNAIL_FILE_UPLOAD_LIMIT_MB
                  },
                  dictionary: {
                    es: {
                      singular: "Tamaño máximo {FILE_SIZE_LIMIT}MB"
                    },
                    "de-DE": {
                      singular: "Maximale Dateigröße {FILE_SIZE_LIMIT}MB"
                    },
                    "fr-FR": {
                      singular: "Taille maximale {FILE_SIZE_LIMIT}MB"
                    },
                    "ja-JP": {
                      singular: "最大サイズ {FILE_SIZE_LIMIT}MB"
                    },
                    "ko-KR": {
                      singular: "최대 파일 크기 {FILE_SIZE_LIMIT}MB"
                    },
                    "pt-BR": {
                      singular: "Tamanho máximo {FILE_SIZE_LIMIT}MB"
                    },
                    "zh-CN": {
                      singular: "最大文件大小为 {FILE_SIZE_LIMIT}MB"
                    }
                  }
                })
              })]
            })]
          })
        }), (0, _v41.jsx)(_v133, {
          thumbnails: _v21 ?? [],
          activeUri: _v40 ? _v39?.uri : void 0,
          isLoading: _v23,
          onUploadClick: _v27,
          onSelectThumbnail: _v31
        })]
      }), (0, _v41.jsx)("input", {
        ref: _v8,
        type: "file",
        accept: "image/png,image/x-png,image/jpeg,.jpg,.jpeg,.png",
        onChange: _v30,
        hidden: !0
      }), (0, _v41.jsx)(_v123, {
        file: _v15,
        isSaving: "upload" === _v9,
        onChange: _v33,
        onCancel: _v34,
        onSave: _v36,
        onCloseComplete: _v35
      })]
    });
  }
  var _v138 = _v0.i(0);
  _v0.s(["BasicSettings", 0, function ({
    id: _v0 = (0, _v138.createLiveDomName)("basic-settings"),
    eventSettingsContext: {
      settings: {
        value: _v1
      },
      actions: {
        updateLiveEventSettings: _v2
      }
    } = (0, _v42.useManager)(_v73.EventSettingsManager)
  }) {
    let {
        trackLiveStreamBasicsChanged: _v3
      } = (0, _v81.useLiveStreamBroadcasterTracking)(),
      {
        settings: _v4
      } = (0, _v96.useOrionSettings)(),
      [_v5, _v6] = (0, _v43.useState)(_v1?.title ?? null),
      [_v7, _v8] = (0, _v43.useState)(_v1?.streamDescription ?? null),
      [_v9, _v10] = (0, _v43.useState)(!1),
      [_v11, _v12] = (0, _v43.useState)(!1),
      [_v13, _v14] = (0, _v43.useState)(!1),
      [_v15, _v16] = (0, _v43.useState)(!1),
      [_v17, _v18] = (0, _v43.useState)(0),
      [_v19, _v20] = (0, _v43.useState)(0);
    (0, _v43.useEffect)(() => {
      _v1?.title && _v6(_v1?.title);
    }, [_v1?.title]), (0, _v43.useEffect)(() => {
      null !== _v5 && _v5 === _v1?.title && _v9 && _v10(!1), null === _v7 && _v1?.streamDescription && _v8(_v1.streamDescription), null !== _v7 && _v7 === _v1?.streamDescription && _v11 && _v12(!1);
    }, [_v1?.title, _v1?.streamDescription, _v5, _v6, _v7, _v8, _v9, _v11, _v10, _v12]);
    let _v21 = (0, _v43.useCallback)(_v0 => {
        _v6(_v0);
      }, [_v6]),
      _v22 = (0, _v43.useCallback)(_v0 => {
        _v8(_v0);
      }, [_v8]),
      _v23 = (0, _v43.useCallback)(() => {
        _v1?.title && (_v6(_v1.title), _v18(_v0 => _v0 + 1));
      }, [_v1?.title, _v6]),
      _v24 = (0, _v43.useCallback)(() => {
        _v8(_v1?.streamDescription ?? ""), _v20(_v0 => _v0 + 1);
      }, [_v1?.streamDescription, _v8]),
      _v25 = (0, _v43.useCallback)(() => {
        let _v0 = _v5 ? _v5.trim() : "";
        _v0.length > 0 && !_v9 && (_v2({
          title: _v0,
          streamTitle: _v0
        }), _v10(!0), (0, _v95.createBPv2EventFactory)("vimeo.add_event_title", 2, () => ({
          ...(0, _v94.newTeamCtx)(),
          ...(0, _v94.newWebCtx)(),
          ...(0, _v94.newActionCtx)("type"),
          ...(0, _v94.newLiveCtx)({
            live_feature: "basic_settings"
          }),
          ...(0, _v94.newProductAnalyticsCtx)({
            product: "events",
            feature: "settings",
            location: "drawer",
            element: "text"
          })
        }), () => ({
          device_type: _v93.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
        }))({
          value: null
        }), _v3({
          liveStreamBasicsField: "title"
        })), _v6(_v0);
      }, [_v5, _v2, _v9, _v10, _v6, _v3]),
      _v26 = (0, _v43.useCallback)(() => {
        let _v0 = _v7?.trim() ?? "";
        _v11 || (_v2({
          streamDescription: _v0
        }), _v12(!0), (0, _v95.createBPv2EventFactory)("vimeo.add_event_description", 2, () => ({
          ...(0, _v94.newTeamCtx)(),
          ...(0, _v94.newWebCtx)(),
          ...(0, _v94.newActionCtx)("type"),
          ...(0, _v94.newLiveCtx)({
            live_feature: "basic_settings"
          }),
          ...(0, _v94.newProductAnalyticsCtx)({
            product: "events",
            feature: "settings",
            location: "drawer",
            element: "text"
          })
        }), () => ({
          device_type: _v93.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
        }))({
          value: null
        }), _v3({
          liveStreamBasicsField: "description"
        }), _v8(_v0));
      }, [_v7, _v2, _v11, _v12, _v3]),
      _v27 = _v1?.title !== _v5,
      _v28 = _v1?.streamDescription !== _v7 && ("" !== _v7 || _v1?.streamDescription !== null);
    return (0, _v41.jsxs)(_v47.Flex, {
      id: _v0,
      direction: "column",
      width: "100%",
      children: [_v1 ? (0, _v41.jsx)(_v47.Flex, {
        position: "relative",
        direction: "column",
        width: "100%",
        marginBottom: (0, _v52.rem)(16),
        children: (0, _v41.jsx)(_v92.EventTitle, {
          title: _v5,
          required: !0,
          onChange: _v21,
          onSetTitleInvalid: _v14,
          children: _v27 ? (0, _v41.jsx)(_v98, {
            isLoading: _v9,
            isDisabled: !_v5 || _v13,
            onCancelClick: _v23,
            onSaveClick: _v25
          }) : null
        }, _v17)
      }) : (0, _v41.jsx)(_v59.BokehSkeleton, {
        height: (0, _v52.rem)(91),
        borderRadius: (0, _v52.rem)(4),
        marginBottom: (0, _v52.rem)(16)
      }), _v1 ? (0, _v41.jsx)(_v47.Flex, {
        direction: "column",
        width: "100%",
        children: (0, _v41.jsx)(_v91.EventDescription, {
          fieldHeight: (0, _v52.rem)(80),
          description: _v7,
          onChange: _v22,
          onSetDescriptionInvalid: _v16,
          children: _v28 ? (0, _v41.jsx)(_v98, {
            onCancelClick: _v24,
            onSaveClick: _v26,
            isLoading: _v11,
            isDisabled: _v15
          }) : null
        }, _v19)
      }) : (0, _v41.jsx)(_v59.BokehSkeleton, {
        borderRadius: (0, _v52.rem)(4),
        height: (0, _v52.rem)(104)
      }), _v4.enable_live_event_basics_thumbnail ? (0, _v41.jsx)(_v137, {}) : null]
    });
  }], 0);
  var _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0);
  _v0.s(["HostAudioSettings", 0, function ({
    id: _v0 = (0, _v78.createDomName)("host-audio-settings"),
    className: _v1 = (0, _v78.createDomName)("host-audio-settings")
  }) {
    let {
        level: _v2,
        isMuted: _v3,
        hasTrack: _v4
      } = function (_v0 = 15) {
        let {
            audio: _v1
          } = (0, _v42.useManager)(_v141.LocalMediaManager),
          {
            track: _v2,
            isMuted: _v3
          } = _v1,
          [_v4, _v5] = (0, _v43.useState)(0),
          _v6 = (0, _v43.useRef)(0),
          _v7 = (0, _v43.useRef)(_v0);
        (0, _v43.useEffect)(() => {
          _v7.current = _v0;
        }, [_v0]);
        let _v8 = _v3 || !_v2 ? null : _v2.getMediaStreamTrack() ?? null,
          _v9 = _v8?.id ?? null;
        (0, _v43.useEffect)(() => {
          if (!_v8) return;
          let _v0 = function (_v0, _v1) {
            if (!_v93.browserConfig.FEATURE.CAN_USE_AUDIO_CONTEXT) return {
              stop: () => void 0
            };
            let _v2 = new AudioContext(),
              _v3 = _v2.createAnalyser();
            _v3.fftSize = 128;
            let _v4 = _v2.createMediaStreamSource(new MediaStream([_v0]));
            _v4.connect(_v3), _v2.resume();
            let _v5 = new Uint8Array(new ArrayBuffer(_v3.fftSize)),
              _v6 = 0,
              _v7 = null,
              _v8 = null;
            return _v8 = requestAnimationFrame(function _v0(_v1) {
              _v3.getByteTimeDomainData(_v5);
              let _v2 = null === _v7 ? 0 : _v1 - _v7;
              _v7 = _v1, _v1(_v6 = function (_v0, _v1, _v2) {
                if (_v2 <= 0) return _v0;
                let _v3 = 1 - Math.exp(-_v2 / (_v1 > _v0 ? 50 : 200));
                return _v0 + (_v1 - _v0) * _v3;
              }(_v6, function (_v0) {
                let {
                  length: _v1
                } = _v0;
                if (0 === _v1) return 0;
                let _v2 = 0;
                for (let _v0 = 0; _v0 < _v1; _v0 += 1) _v2 += Math.abs(_v0[_v0] - 128);
                return _v2 / _v1 / 128;
              }(_v5), _v2)), _v8 = requestAnimationFrame(_v0);
            }), {
              stop() {
                null !== _v8 && (cancelAnimationFrame(_v8), _v8 = null);
                try {
                  _v4.disconnect(_v3);
                } catch {}
                "closed" !== _v2.state && _v2.close();
              }
            };
          }(_v8, _v0 => {
            let _v1 = Date.now();
            if (_v1 - _v6.current < 0 / _v7.current) return;
            _v6.current = _v1;
            let _v2 = Math.round(Math.min(100, Math.max(0, (0 * _v0) ** .8)));
            _v5(_v0 => _v2 !== _v0 ? _v2 : _v0);
          });
          return () => _v0.stop();
        }, [_v9]);
        let _v10 = !!_v2;
        return {
          level: _v10 && !_v3 ? _v4 : 0,
          isMuted: _v3,
          hasTrack: _v10
        };
      }(),
      _v5 = _v4 && !_v3,
      _v6 = _v5 ? Math.round(_v2 / 100 * 16) : 0,
      _v7 = (0, _v43.useMemo)(() => Array.from({
        length: 16
      }, (_v0, _v1) => (0, _v41.jsx)(_v99.Box, {
        flex: "1",
        height: (0, _v52.rem)(8),
        borderRadius: (0, _v52.rem)(2),
        background: _v1 >= _v6 ? "fill-component" : _v1 < 8 ? "status-positive-primary" : _v1 < 12 ? "status-caution-primary" : "status-destructive-primary",
        transition: "background 0.08s linear"
      }, `segment-${_v1}`)), [_v6]);
    return (0, _v41.jsxs)(_v47.Flex, {
      id: _v0,
      className: _v1,
      align: "center",
      gap: (0, _v52.rem)(12),
      paddingY: (0, _v52.rem)(8),
      children: [_v5 ? (0, _v41.jsx)(_v140.MicOn, {
        boxSize: 20
      }) : (0, _v41.jsx)(_v139.MicOff, {
        boxSize: 20,
        color: "status-destructive-primary"
      }), (0, _v41.jsx)(_v51.Text, {
        variant: "body-md",
        children: _v142.translations.host
      }), (0, _v41.jsx)(_v47.Flex, {
        align: "center",
        gap: (0, _v52.rem)(2),
        flex: "1",
        role: "meter",
        "aria-label": _v142.translations.microphoneLevel,
        "aria-valuenow": _v2,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        children: _v7
      })]
    });
  }], 0);
  var _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0);
  let _v146 = {
    type: "vimeo",
    uri: null,
    url: null
  };
  function _v147({
    eventSettingsContext: {
      settings: {
        value: _v0
      },
      actions: {
        updateLiveEventSettings: _v1
      }
    } = (0, _v42.useManager)(_v73.EventSettingsManager)
  }) {
    let [_v2, _v3] = (0, _v43.useState)(!1),
      _v4 = _v0?.landingPageLogo ?? _v146,
      _v5 = [{
        label: (0, _v58.translate)({
          singular: "None",
          dictionary: {
            es: {
              singular: "Ninguno"
            },
            "de-DE": {
              singular: "Kein"
            },
            "fr-FR": {
              singular: "Aucune"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "없음"
            },
            "pt-BR": {
              singular: "Nenhum"
            },
            "zh-CN": {
              singular: "无"
            }
          }
        }),
        value: "none"
      }, {
        label: (0, _v58.translate)({
          singular: "Custom logo",
          dictionary: {
            es: {
              singular: "Logotipo personalizado"
            },
            "de-DE": {
              singular: "Benutzerdefiniertes Logo"
            },
            "fr-FR": {
              singular: "Logo personnalisé"
            },
            "ja-JP": {
              singular: "カスタムロゴ"
            },
            "ko-KR": {
              singular: "사용자 지정 로고"
            },
            "pt-BR": {
              singular: "Logotipo personalizado"
            },
            "zh-CN": {
              singular: "自定义徽标"
            }
          }
        }),
        value: "custom"
      }, {
        label: (0, _v58.translate)({
          singular: "Vimeo logo",
          dictionary: {
            es: {
              singular: "Logotipo de Vimeo"
            },
            "de-DE": {
              singular: "Vimeo-Logo"
            },
            "fr-FR": {
              singular: "Logo Vimeo"
            },
            "ja-JP": {
              singular: "Vimeo ロゴ"
            },
            "ko-KR": {
              singular: "Vimeo 로고"
            },
            "pt-BR": {
              singular: "Logotipo do Vimeo"
            },
            "zh-CN": {
              singular: "Vimeo 徽标"
            }
          }
        }),
        value: "vimeo"
      }];
    return (0, _v41.jsxs)(_v47.Flex, {
      direction: "column",
      gap: (0, _v52.rem)(16),
      width: "100%",
      children: [(0, _v41.jsxs)(_v47.Flex, {
        direction: "column",
        gap: (0, _v52.rem)(4),
        width: "100%",
        children: [(0, _v41.jsx)(_v48.Header, {
          size: "xs",
          children: (0, _v58.translate)({
            singular: "Navbar logo",
            dictionary: {
              es: {
                singular: "Logotipo de la barra de navegación"
              },
              "de-DE": {
                singular: "Navbar-Logo"
              },
              "fr-FR": {
                singular: "Logo de la barre de navigation"
              },
              "ja-JP": {
                singular: "ナビゲーションバーのロゴ"
              },
              "ko-KR": {
                singular: "네비게이션 바 로고"
              },
              "pt-BR": {
                singular: "Logotipo da barra de navegação"
              },
              "zh-CN": {
                singular: "导航栏徽标"
              }
            }
          })
        }), (0, _v41.jsx)(_v143.Select, {
          defaultValue: [_v4.type],
          items: _v5,
          onValueChange: _v0 => {
            var _v1;
            "custom" === (_v1 = _v0.value[0]) ? _v1({
              landingPageLogo: {
                type: _v1,
                uri: _v4.uri,
                url: _v4.url
              }
            }) : _v1({
              landingPageLogo: {
                type: _v1,
                uri: null,
                url: null
              }
            });
          },
          withPortal: !1
        })]
      }), "custom" === _v4.type ? (0, _v41.jsx)(_v145.LogoPickerBrandKit, {
        LogoPickerControlComponent: () => (0, _v41.jsxs)(_v47.Flex, {
          align: "center",
          as: "button",
          backgroundColor: "surface",
          borderColor: "input-stroke",
          borderRadius: (0, _v52.rem)(8),
          borderStyle: "solid",
          borderWidth: (0, _v52.rem)(1),
          gap: (0, _v52.rem)(12),
          onClick: () => _v3(_v0 => !_v0),
          padding: (0, _v52.rem)(8),
          type: "button",
          width: "100%",
          children: [(0, _v41.jsx)(_v99.Box, {
            alignItems: "center",
            backgroundColor: "fill-component",
            borderRadius: (0, _v52.rem)(6),
            display: "flex",
            flexShrink: 0,
            height: (0, _v52.rem)(48),
            justifyContent: "center",
            overflow: "hidden",
            width: (0, _v52.rem)(48),
            children: _v4.url ? (0, _v41.jsx)(_v99.Box, {
              alt: (0, _v58.translate)({
                singular: "Custom logo",
                dictionary: {
                  es: {
                    singular: "Logotipo personalizado"
                  },
                  "de-DE": {
                    singular: "Benutzerdefiniertes Logo"
                  },
                  "fr-FR": {
                    singular: "Logo personnalisé"
                  },
                  "ja-JP": {
                    singular: "カスタムロゴ"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 로고"
                  },
                  "pt-BR": {
                    singular: "Logotipo personalizado"
                  },
                  "zh-CN": {
                    singular: "自定义徽标"
                  }
                }
              }),
              as: "img",
              height: "100%",
              objectFit: "contain",
              src: _v4.url,
              width: "100%"
            }) : (0, _v41.jsx)(_v144.Upload, {
              boxSize: 20,
              color: "text-primary"
            })
          }), (0, _v41.jsx)(_v51.Text, {
            color: "text-primary",
            textAlign: "left",
            variant: "heading-xs",
            children: _v4.url ? (0, _v58.translate)({
              singular: "Change picture",
              dictionary: {
                es: {
                  singular: "Cambiar imagen"
                },
                "de-DE": {
                  singular: "Bild ändern"
                },
                "fr-FR": {
                  singular: "Changer l'image"
                },
                "ja-JP": {
                  singular: "画像を変更"
                },
                "ko-KR": {
                  singular: "사진 변경"
                },
                "pt-BR": {
                  singular: "Alterar imagem"
                },
                "zh-CN": {
                  singular: "更换图片"
                }
              }
            }) : (0, _v58.translate)({
              singular: "Upload picture",
              dictionary: {
                es: {
                  singular: "Subir imagen"
                },
                "de-DE": {
                  singular: "Bild hochladen"
                },
                "fr-FR": {
                  singular: "Téléverser l'image"
                },
                "ja-JP": {
                  singular: "画像をアップロード"
                },
                "ko-KR": {
                  singular: "사진 업로드"
                },
                "pt-BR": {
                  singular: "Enviar imagem"
                },
                "zh-CN": {
                  singular: "上传图片"
                }
              }
            })
          })]
        }),
        initialLogo: _v4.url ? {
          url: _v4.url,
          uri: _v4.uri ?? void 0
        } : void 0,
        isPickerOpen: _v2,
        onClose: () => _v3(!1),
        onLogoSelect: ({
          logoUri: _v0,
          logoUrl: _v1
        }) => {
          _v1({
            landingPageLogo: {
              type: "custom",
              uri: _v0,
              url: _v1
            }
          }), _v3(!1);
        },
        popoverPlacement: "bottom-start",
        visualMatchingEnabled: !0
      }) : null]
    });
  }
  _v0.s(["LandingPageSettings", 0, function () {
    return (0, _v41.jsxs)(_v47.Flex, {
      direction: "column",
      gap: (0, _v52.rem)(16),
      width: "100%",
      children: [(0, _v41.jsx)(_v51.Text, {
        color: "text-secondary",
        variant: "body-sm",
        children: (0, _v58.translate)({
          singular: "The event landing page is what users see when you share the link to this event.",
          dictionary: {
            es: {
              singular: "La página de destino del evento es lo que ven los usuarios cuando compartes el enlace a este evento."
            },
            "de-DE": {
              singular: "Die Event-Landingpage ist die Seite, die Nutzer sehen, wenn Sie den Link zu dieser Veranstaltung teilen."
            },
            "fr-FR": {
              singular: "La page de destination de l'événement est ce que voient les utilisateurs lorsque vous partagez le lien vers cet événement."
            },
            "ja-JP": {
              singular: "イベントのランディングページは、このイベントへのリンクを共有したときにユーザーが見るページです。"
            },
            "ko-KR": {
              singular: "이벤트 랜딩 페이지는 이 이벤트의 링크를 공유했을 때 사용자가 보게 되는 페이지입니다."
            },
            "pt-BR": {
              singular: "A página de destino do evento é o que os usuários veem quando você compartilha o link deste evento."
            },
            "zh-CN": {
              singular: "活动着陆页是在您分享该活动链接时用户看到的页面。"
            }
          }
        })
      }), (0, _v41.jsx)(_v147, {})]
    });
  }], 0);
  var _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0);
  function _v151({
    contentRating: _v0,
    isDisabled: _v1 = !1,
    onChange: _v2
  }) {
    let _v3 = (0, _v43.useMemo)(() => {
        let _v0 = _v150.GeneralContentRatingVariants.Unrated;
        return _v0.some(_v0 => _v150.MatureContentRatingArray.includes(_v0)) && (_v0 = _v150.GeneralContentRatingVariants.Mature), _v0.includes(_v150.GeneralContentRatingVariants.Safe) && (_v0 = _v150.GeneralContentRatingVariants.Safe), _v150.ContentRatingOptions.find(_v0 => _v0.value === _v0);
      }, [_v0]),
      _v4 = (0, _v43.useMemo)(() => _v0.includes(_v150.EventContentRating.Advertisement), [_v0]),
      _v5 = (0, _v43.useCallback)(_v0 => {
        let _v1 = _v4 ? [_v150.EventContentRating.Advertisement] : [];
        _v0 === _v150.GeneralContentRatingVariants.Safe ? _v1.push(_v150.EventContentRating.Safe) : _v0 === _v150.GeneralContentRatingVariants.Mature ? _v1 = [..._v1, ..._v150.MatureContentRatingArray] : _v1.push(_v150.EventContentRating.Unrated), _v2(_v1);
      }, [_v4, _v2]),
      _v6 = (0, _v43.useCallback)(_v0 => {
        let _v1 = [..._v0],
          _v2 = _v1.indexOf(_v0);
        _v2 > -1 ? _v1.splice(_v2, 1) : _v1.push(_v0), _v1.length === +!!_v4 && _v1.push(_v150.EventContentRating.Safe), _v2(_v1);
      }, [_v0, _v4, _v2]),
      _v7 = (0, _v43.useCallback)(() => {
        let _v0 = [..._v0],
          _v1 = _v0.indexOf(_v150.EventContentRating.Advertisement);
        _v1 > -1 ? _v0.splice(_v1, 1) : _v0.push(_v150.EventContentRating.Advertisement), _v2(_v0);
      }, [_v0, _v2]);
    return (0, _v41.jsxs)(_v47.Flex, {
      position: "relative",
      direction: "column",
      "data-testid": "event-content-rating",
      children: [(0, _v41.jsx)(_v48.Header, {
        size: "xs",
        marginBottom: (0, _v52.rem)(8),
        color: "text-primary",
        children: (0, _v58.translate)({
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
      }), (0, _v41.jsx)(_v49.Paragraph, {
        size: "sm",
        color: "text-secondary",
        marginBottom: (0, _v52.rem)(12),
        children: (0, _v58.translate)({
          singular: "Content ratings are required. They help keep Vimeo safe and ensure your intended audience can view your video. {A}Learn more{/A}",
          replacements: {
            A: _v0 => (0, _v41.jsx)(_v51.Text, {
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
      }), (0, _v41.jsx)(_v143.Select, {
        onValueChange: _v0 => _v5(_v0.value[0]),
        items: _v150.ContentRatingOptions.filter(_v0 => _v0.visible),
        placeholder: (0, _v58.translate)({
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
      }), _v3.value === _v150.GeneralContentRatingVariants.Mature ? (0, _v41.jsxs)(_v47.Flex, {
        direction: "column",
        paddingTop: (0, _v52.rem)(18),
        paddingBottom: (0, _v52.rem)(20),
        gap: (0, _v52.rem)(16),
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: [(0, _v41.jsx)(_v49.Paragraph, {
          size: "sm",
          color: "text-secondary",
          background: "transparent",
          children: (0, _v58.translate)({
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
        }), _v150.MatureContentRatingOptions.map(_v0 => (0, _v41.jsx)(_v149.Checkbox, {
          isDisabled: _v1,
          onChange: () => _v6(_v0.value),
          isChecked: _v0.includes(_v0.value),
          name: _v0.value,
          id: `${_v0.value}-checkbox`,
          value: _v0.value,
          children: (0, _v41.jsx)(_v51.Text, {
            variant: "body-xl",
            fontSize: (0, _v52.rem)(14),
            color: "text-primary",
            children: _v0.label
          })
        }, `${_v0.value}-checkbox`))]
      }) : null, (0, _v41.jsxs)(_v47.Flex, {
        direction: "column",
        children: [(0, _v41.jsx)(_v149.Checkbox, {
          isDisabled: _v1,
          name: "ads",
          margin: `${(0, _v52.rem)(8)} 0`,
          value: _v150.EventContentRating.Advertisement,
          isChecked: _v4,
          onChange: _v7,
          children: (0, _v41.jsx)(_v51.Text, {
            variant: "body-xl",
            fontSize: (0, _v52.rem)(12),
            color: "text-primary",
            children: (0, _v58.translate)({
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
        }), _v4 ? null : (0, _v41.jsx)(_v44.Alert, {
          children: (0, _v41.jsx)(_v53.AlertDescription, {
            children: (0, _v58.translate)({
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
  var _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0);
  let _v159 = {
      EMBED_PRIVACY_NOWHERE: "private",
      EMBED_PRIVACY_ANYWHERE: "public",
      EMBED_PRIVACY_SPECIFIC_DOMAINS: "whitelist"
    },
    _v160 = {
      [_v159.EMBED_PRIVACY_NOWHERE]: (0, _v58.translate)({
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
      [_v159.EMBED_PRIVACY_ANYWHERE]: (0, _v58.translate)({
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
      [_v159.EMBED_PRIVACY_SPECIFIC_DOMAINS]: (0, _v58.translate)({
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
  var _v161 = _v0.i(0);
  function _v162({
    embedPrivacy: _v0,
    domains: _v1,
    showNotice: _v2 = !1,
    isVertical: _v3 = !0,
    isDisabled: _v4,
    isSelectDisabled: _v5 = !1,
    disabledTip: _v6,
    onChange: _v7
  }) {
    let [_v8, _v9] = (0, _v43.useState)(""),
      [_v10, _v11] = (0, _v43.useState)(!1),
      _v12 = (0, _v43.useRef)(null),
      _v13 = !!(!_v4 && _v8),
      _v14 = (0, _v43.useCallback)(_v0 => {
        _v7(_v0, _v1), _v11(!1);
      }, [_v1, _v7]),
      _v15 = (0, _v43.useCallback)(() => {
        -1 === _v1.indexOf(_v8) && (_v7(_v0, [..._v1, _v8]), _v9(""));
      }, [_v8, _v1, _v0, _v7]),
      _v16 = (0, _v43.useCallback)(_v0 => {
        let _v1 = [..._v1],
          _v2 = _v1.indexOf(_v0);
        _v1.splice(_v2, 1), _v7(_v0, _v1);
      }, [_v1, _v0, _v7]),
      _v17 = (0, _v43.useMemo)(() => Object.values(_v159).map(_v0 => ({
        label: _v160[_v0],
        value: _v0
      })), []);
    return (0, _v156.useOutsideClick)({
      enabled: _v10,
      ref: _v12,
      handler: () => {
        _v10 && _v11(!1);
      }
    }), (0, _v41.jsx)(_v47.Flex, {
      direction: "column",
      gap: (0, _v52.rem)(8),
      width: "100%",
      "data-testid": "event-embed-privacy",
      children: (0, _v41.jsxs)(_v47.Flex, {
        direction: _v3 ? "column" : "row",
        alignItems: "baseline",
        gap: (0, _v52.rem)(4),
        children: [(0, _v41.jsxs)(_v47.Flex, {
          marginBottom: _v3 ? (0, _v52.rem)(8) : 0,
          width: _v3 ? "100%" : (0, _v52.rem)(120),
          flexShrink: 0,
          alignItems: "center",
          gap: (0, _v52.rem)(4),
          children: [(0, _v41.jsx)(_v48.Header, {
            size: "xs",
            color: "text-primary",
            letterSpacing: "-0.03em",
            children: (0, _v58.translate)({
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
          }), (0, _v41.jsx)(_v161.BokehTooltip, {
            label: _v5 && _v6 ? _v6 : (0, _v58.translate)({
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
            maxWidth: (0, _v52.rem)(300),
            shouldWrapChildren: !1,
            children: (0, _v41.jsx)(_v47.Flex, {
              height: (0, _v52.rem)(16),
              width: (0, _v52.rem)(16),
              cursor: "pointer",
              children: (0, _v41.jsx)(_v157.InfoCircle, {
                boxSize: (0, _v52.rem)(16),
                color: "text-tertiary"
              })
            })
          })]
        }), (0, _v41.jsxs)(_v99.Box, {
          width: "100%",
          children: [(0, _v41.jsx)(_v99.Box, {
            position: "relative",
            children: (0, _v41.jsx)(_v143.Select, {
              onValueChange: _v0 => _v14(_v0.value[0]),
              items: _v17,
              withPortal: !1,
              placeholder: (0, _v58.translate)({
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
              }) => (0, _v41.jsx)(_v143.SelectItem, {
                display: "flex",
                width: "100%",
                children: (0, _v41.jsx)(_v161.BokehTooltip, {
                  shouldWrapChildren: !1,
                  placement: "bottom",
                  maxWidth: (0, _v52.rem)(300),
                  label: _v6,
                  isDisabled: !_v4 || _v4 && !_v6,
                  children: (0, _v41.jsx)(_v143.SelectItemText, {
                    children: _v0
                  })
                })
              })
            })
          }), _v0 === _v159.EMBED_PRIVACY_SPECIFIC_DOMAINS ? (0, _v41.jsxs)(_v47.Flex, {
            position: "relative",
            direction: "column",
            width: "100%",
            marginTop: (0, _v52.rem)(8),
            children: [(0, _v41.jsxs)(_v153.InputGroup, {
              size: "sm",
              children: [(0, _v41.jsx)(_v154.Input, {
                onChange: _v0 => {
                  _v9(_v0.target.value);
                },
                value: _v8,
                isDisabled: !!_v4,
                placeholder: "domain.com",
                onKeyDown: _v0 => {
                  "Enter" === _v0.key && _v15();
                }
              }), (0, _v41.jsx)(_v155.InputRightElement, {
                cursor: _v13 ? "pointer" : "not-allowed",
                onClick: _v13 ? _v15 : void 0,
                children: (0, _v41.jsx)(_v158.PlusCircle, {
                  color: _v13 ? "text-primary" : "text-secondary"
                })
              })]
            }), (0, _v41.jsx)(_v47.Flex, {
              flexWrap: "wrap",
              gap: (0, _v52.rem)(4),
              marginTop: (0, _v52.rem)(8),
              children: _v1.map((_v0, _v1) => (0, _v41.jsxs)(_v152.Tag, {
                size: "sm",
                children: [(0, _v41.jsx)(_v152.TagLabel, {
                  fontSize: (0, _v52.rem)(14),
                  children: _v0
                }), !_v5 && (0, _v41.jsx)(_v152.TagCloseButton, {
                  onClick: () => _v16(_v0)
                })]
              }, `${_v0}-idx:${_v1}`))
            })]
          }, `domains-${_v1.length}`) : null, _v2 ? (0, _v41.jsx)(_v44.Alert, {
            marginTop: (0, _v52.rem)(8),
            children: (0, _v41.jsx)(_v53.AlertDescription, {
              children: (0, _v58.translate)({
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
  let _v163 = "safe",
    _v164 = "advertisement";
  function _v165(_v0) {
    return {
      ...(0, _v94.newTeamCtx)(),
      ...(0, _v94.newWebCtx)(),
      ...(0, _v94.newThirdPartyIntegrationCtx)(),
      ...(0, _v94.newActionCtx)("click"),
      ...(0, _v94.newLiveCtx)({
        live_feature: "content_rating"
      }),
      ...(0, _v94.newProductAnalyticsCtx)({
        product: "events",
        feature: "privacy",
        location: "drawer",
        element: _v0
      })
    };
  }
  function _v166() {
    return {
      ...(0, _v94.newTeamCtx)(),
      ...(0, _v94.newWebCtx)(),
      ...(0, _v94.newThirdPartyIntegrationCtx)(),
      ...(0, _v94.newActionCtx)("click"),
      ...(0, _v94.newLiveCtx)({
        live_feature: "event_privacy"
      }),
      ...(0, _v94.newProductAnalyticsCtx)({
        product: "events",
        feature: "privacy",
        location: "drawer",
        element: "dropdown"
      })
    };
  }
  var _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0);
  function _v171({
    privacy: _v0,
    allowedPrivacies: _v1,
    password: _v2,
    disabledTip: _v3,
    isDisabled: _v4,
    onChange: _v5
  }) {
    let [_v6, _v7] = (0, _v43.useState)(_v0),
      [_v8, _v9] = (0, _v43.useState)(_v2 || "");
    (0, _v43.useEffect)(() => _v7(_v0), [_v0]), (0, _v43.useEffect)(() => _v9(_v2 || ""), [_v2]);
    let _v10 = (0, _v43.useCallback)(_v0 => {
        _v7(_v0), _v5(_v0, _v8);
      }, [_v8, _v5]),
      _v11 = (0, _v43.useCallback)(_v0 => {
        _v9(_v0), _v5(_v6, _v0);
      }, [_v6, _v5]);
    return (0, _v41.jsxs)(_v47.Flex, {
      direction: "column",
      gap: (0, _v52.rem)(8),
      children: [(0, _v41.jsx)(_v170.EventPrivacy, {
        selectedPrivacy: _v6,
        allowedPrivacies: _v1,
        isDisabled: _v4,
        disabledTip: _v3,
        onPrivacySelect: _v10
      }, `view-${_v6}`), _v6 === _v77.EStreamPrivacy.PASSWORD && (0, _v41.jsx)(_v169.EventPassword, {
        isDisabled: _v4,
        onChange: _v11,
        password: _v8
      }, `pass-${_v2}`)]
    });
  }
  var _v172 = _v0.i(0);
  let _v173 = ["link", "embed.chatEmbedSource", "embed.embedProperties.sourceUrl", "streamPrivacy.unlistedHash"];
  _v0.s(["PrivacySettings", 0, function ({
    id: _v0 = (0, _v138.createLiveDomName)("privacy-settings"),
    eventSettingsContext: {
      settings: _v1,
      embedWhitelist: _v2,
      actions: {
        updateLiveEventSettings: _v3,
        updateEmbedWhitelist: _v4
      }
    } = (0, _v42.useManager)(_v73.EventSettingsManager),
    onlyShowStreamPrivacy: _v5 = !1
  }) {
    let _v6 = _v1.value?.allowedPrivacies ?? [],
      _v7 = _v1.value?.streamPrivacy?.view,
      _v8 = _v1.value?.streamPrivacy?.embed,
      _v9 = _v1.value?.streamPassword,
      _v10 = _v1.value?.contentRating,
      _v11 = (0, _v68.useIsLiveDemoSubscription)(),
      {
        trackPrivacyChanged: _v12
      } = (0, _v167.useViewPrivacyChangeTracking)(),
      {
        trackLiveStreamPrivacyChanged: _v13
      } = (0, _v81.useLiveStreamBroadcasterTracking)(),
      _v14 = !!_v1.value?.fromShowcase,
      _v15 = _v1.value?.album?.id,
      _v16 = !_v14 && !_v6.find(_v0 => _v0 === _v7),
      _v17 = (0, _v43.useMemo)(() => _v2.value || [], [_v2.value]),
      _v18 = (0, _v43.useCallback)((_v0, _v1) => {
        if ((_v7 !== _v0 || _v9 !== _v1) && (_v0 !== _v77.EStreamPrivacy.PASSWORD || _v1.length)) {
          var _v2;
          _v3({
            streamPrivacy: {
              view: _v0
            },
            streamPassword: _v0 === _v77.EStreamPrivacy.PASSWORD ? _v1 : void 0
          }, _v173).then(() => {
            _v7 !== _v0 && (_v12({
              entityType: "live_event",
              previousPrivacy: _v7 ?? null,
              newPrivacy: _v0
            }), _v13({
              liveStreamPrivacyType: "link_privacy",
              liveStreamPrivacyValue: String(_v0)
            }));
          }), _v2 = _v0 === _v77.EStreamPrivacy.PASSWORD, (0, _v95.createBPv2EventFactory)("vimeo.change_link_privacy", 5, () => ({
            ..._v166()
          }), () => ({
            device_type: _v93.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "old_video_privacy",
            privacy_field_value: _v0,
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
        }
      }, [_v3, _v7, _v9, _v12, _v13]),
      _v19 = (0, _v43.useCallback)((_v0, _v1) => {
        if (_v8 !== _v0) {
          var _v2;
          _v3({
            streamPrivacy: {
              embed: _v0
            }
          }, _v173), _v2 = _v7 === _v77.EStreamPrivacy.PASSWORD, (0, _v95.createBPv2EventFactory)("vimeo.change_embed_privacy", 5, () => ({
            ..._v166()
          }), () => ({
            device_type: _v93.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
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
      _v20 = (0, _v43.useCallback)(_v0 => {
        _v3({
          contentRating: _v0
        }), function (_v0, _v1, _v2 = !1) {
          let _v3 = !!_v0?.includes(_v163),
            _v4 = !!_v1?.includes(_v163);
          _v3 !== _v4 && (0, _v95.createBPv2EventFactory)("vimeo.change_content_rating", 5, () => ({
            ..._v165("dropdown")
          }), () => ({
            device_type: _v93.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "rating",
            privacy_field_value: _v4 ? "safe" : "mature",
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
          let _v5 = !!_v0?.includes(_v164),
            _v6 = !!_v1?.includes(_v164);
          _v5 !== _v6 && (0, _v95.createBPv2EventFactory)("vimeo.change_content_notice", 5, () => ({
            ..._v165("check_box")
          }), () => ({
            device_type: _v93.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web",
            privacy_field_name: "contains_ad",
            privacy_field_value: String(_v6),
            is_video_password_protected: _v2,
            is_preset_applied: null
          }))({
            value: null
          });
        }(_v10, _v0, _v7 === _v77.EStreamPrivacy.PASSWORD), _v13({
          liveStreamPrivacyType: "content_rating",
          liveStreamPrivacyValue: JSON.stringify(_v0)
        });
      }, [_v3, _v10, _v7, _v13]),
      {
        tooltip: _v21,
        isDisabled: _v22
      } = (0, _v168.useGetEditEmbedPrivacyDisabled)();
    return (0, _v41.jsxs)(_v47.Flex, {
      id: _v0,
      direction: "column",
      maxWidth: "100%",
      width: "100%",
      children: [_v14 && _v15 ? (0, _v41.jsx)(_v44.Alert, {
        children: (0, _v41.jsxs)(_v53.AlertDescription, {
          margin: 0,
          children: [_v172.sharedTranslations.showcasePrivacyNotice, " ", (0, _v41.jsx)(_v51.Text, {
            href: _v66.vimeoConfig.PATH.SHOWCASE_MANAGE_URL(_v15),
            target: "_blank",
            variant: "body-md",
            color: "blue.500",
            textDecoration: "underline",
            as: "a",
            children: _v172.sharedTranslations.manageShowcase
          })]
        })
      }) : null, _v16 ? (0, _v41.jsx)(_v44.Alert, {
        children: (0, _v41.jsx)(_v53.AlertDescription, {
          margin: 0,
          children: _v172.sharedTranslations.eventPrivacyFrozen
        })
      }) : null, _v7 && _v6 ? (0, _v41.jsx)(_v171, {
        isDisabled: _v11 || _v14,
        disabledTip: _v11 ? _v97.rtmpTranslations.viewPrivacyDemoDisabledTip : void 0,
        privacy: _v7,
        allowedPrivacies: _v6,
        password: _v9,
        onChange: (0, _v148.default)(_v18, 0)
      }) : (0, _v41.jsx)(_v59.BokehSkeleton, {
        height: (0, _v52.rem)(110),
        borderRadius: (0, _v52.rem)(4),
        marginBottom: (0, _v52.rem)(16)
      }), !_v5 && (0, _v41.jsxs)(_v41.Fragment, {
        children: [(0, _v41.jsx)(_v46.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v52.rem)(24)} 0`
        }), _v8 ? (0, _v41.jsx)(_v162, {
          isDisabled: _v11 || _v14 || _v22,
          isSelectDisabled: _v22,
          disabledTip: _v11 ? _v97.rtmpTranslations.embedPrivacyDemoDisabledTip : _v22 ? _v21 : void 0,
          embedPrivacy: _v8,
          domains: _v17,
          showNotice: _v7 === _v77.EStreamPrivacy.NOBODY,
          onChange: _v19
        }) : (0, _v41.jsx)(_v59.BokehSkeleton, {
          height: (0, _v52.rem)(200),
          borderRadius: (0, _v52.rem)(4)
        }), (0, _v41.jsx)(_v46.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v52.rem)(24)} 0`
        }), _v10 ? (0, _v41.jsx)(_v151, {
          contentRating: _v10,
          isDisabled: !1,
          onChange: _v20
        }) : (0, _v41.jsx)(_v59.BokehSkeleton, {
          height: (0, _v52.rem)(200),
          borderRadius: (0, _v52.rem)(4)
        })]
      })]
    });
  }], 0);
  var _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0);
  _v0.s(["useFailsafeUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    return (0, _v176.useUpgradeModal)({
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
        enterpriseTitle: _v174.T_GO_LIVE_WITH_PEACE_OF_MIND,
        enterpriseSubtitle: _v174.T_ADD_FAIL_SAFE_STREAMING,
        customFeaturesList: (0, _v41.jsx)(_v175.UpsellFeaturesList, {
          featuresList: _v174.T_FAIL_SAFE_STREAMING_FEATURES
        })
      }
    });
  }], 0), _v0.s(["useUnlimitedStreamUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    return (0, _v176.useUpgradeModal)({
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
        enterpriseTitle: _v174.T_STREAM_WITHOUT_INTERRUPTIONS,
        enterpriseSubtitle: _v174.T_CREATE_CONTINUOUS_STREAM,
        customFeaturesList: (0, _v41.jsx)(_v175.UpsellFeaturesList, {
          featuresList: _v174.T_UNLIMITED_DURATION_FEATURES
        })
      }
    });
  }], 0);
  var _v177 = _v0.i(0),
    _v178 = _v0.i(0);
  _v0.s(["useTimeBasedDismissableNotification", 0, function ({
    storedKey: _v0,
    cooldownMs: _v1 = 0,
    forceHide: _v2 = !1
  }) {
    let [_v3, _v4] = (0, _v43.useState)(() => {
      if (_v2) return !1;
      let _v0 = (0, _v177.getFromLocalStorage)(_v0),
        _v1 = _v0 ? Number(_v0) : null;
      return !_v1 || _v1 < (0, _v178.getAbsoluteNow)() - _v1;
    });
    return [_v3, (0, _v43.useCallback)(() => {
      (0, _v177.setLocalStorageItem)(_v0, (0, _v178.getAbsoluteNow)()), _v4(!1);
    }, [_v0])];
  }], 0);
}