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
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
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
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  function _v92(_v0, _v1) {
    return new Intl.NumberFormat(_v1, {
      maximumFractionDigits: 2
    }).format(_v0);
  }
  function _v93({
    isOpen: _v0,
    onClose: _v1,
    translationLanguageCount: _v2,
    captionCreditsPerMinute: _v3,
    translationCreditsPerMinute: _v4,
    unitAmount: _v5,
    currency: _v6
  }) {
    let _v7 = (0, _v91.useLocale)(),
      _v8 = _v2 > 0,
      _v9 = _v3 + _v4,
      _v10 = _v92(_v3, _v7),
      _v11 = _v92(_v4, _v7),
      _v12 = null !== _v5 && null !== _v6 ? function (_v0, _v1, _v2) {
        try {
          return new Intl.NumberFormat(_v2, {
            style: "currency",
            currency: _v1
          }).format(_v0 / 100);
        } catch {
          return `${(_v0 / 100).toFixed(2)} ${_v1}`;
        }
      }(_v9 * _v5, _v6, _v7) : null,
      _v13 = null !== _v12 ? (0, _v59.translate)({
        singular: "{PRICE_PER_MINUTE}/min",
        replacements: {
          PRICE_PER_MINUTE: _v12
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
      }) : (0, _v59.translate)({
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
    return (0, _v39.jsxs)(_v85.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v39.jsx)(_v90.ModalOverlay, {}), (0, _v39.jsxs)(_v88.ModalContent, {
        maxWidth: (0, _v51.rem)(480),
        children: [(0, _v39.jsx)(_v89.ModalHeader, {
          children: (0, _v59.translate)({
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
        }), (0, _v39.jsx)(_v87.ModalCloseButton, {}), (0, _v39.jsxs)(_v86.ModalBody, {
          paddingX: (0, _v51.rem)(24),
          paddingY: (0, _v51.rem)(20),
          children: [(0, _v39.jsx)(_v48.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v51.rem)(16),
            children: (0, _v59.translate)({
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
          }), (0, _v39.jsx)(_v48.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v51.rem)(16),
            children: _v8 ? (0, _v59.translate)({
              replacements: {
                RATE: _v10
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
            }) : (0, _v59.translate)({
              replacements: {
                RATE: _v10
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
          }), (0, _v39.jsx)(_v48.Paragraph, {
            size: "md",
            color: "text-primary",
            marginBottom: (0, _v51.rem)(20),
            children: null !== _v12 ? (0, _v59.translate)({
              replacements: {
                PRICE: _v12
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
            }) : (0, _v59.translate)({
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
          }), (0, _v39.jsxs)(_v46.Flex, {
            direction: "column",
            background: "fill-component",
            borderRadius: (0, _v51.rem)(8),
            paddingX: (0, _v51.rem)(16),
            paddingY: (0, _v51.rem)(8),
            children: [(0, _v39.jsxs)(_v46.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: (0, _v51.rem)(8),
              children: [(0, _v39.jsx)(_v50.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v59.translate)({
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
              }), (0, _v39.jsxs)(_v46.Flex, {
                alignItems: "center",
                gap: (0, _v51.rem)(4),
                children: [(0, _v39.jsx)(_v53.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v39.jsx)(_v50.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v59.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v10
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
            }), _v8 ? (0, _v39.jsxs)(_v46.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: (0, _v51.rem)(8),
              children: [(0, _v39.jsx)(_v50.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v59.translate)({
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
              }), (0, _v39.jsxs)(_v46.Flex, {
                alignItems: "center",
                gap: (0, _v51.rem)(4),
                children: [(0, _v39.jsx)(_v53.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v39.jsx)(_v50.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v59.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v11
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
          }), (0, _v39.jsxs)(_v46.Flex, {
            marginTop: (0, _v51.rem)(8),
            background: "fill-component",
            borderRadius: (0, _v51.rem)(8),
            paddingX: (0, _v51.rem)(16),
            paddingY: (0, _v51.rem)(16),
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v39.jsx)(_v50.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v59.translate)({
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
            }), (0, _v39.jsx)(_v50.Text, {
              variant: "heading-xs",
              color: "text-primary",
              children: _v13
            })]
          })]
        })]
      })]
    });
  }
  function _v94(_v0) {
    return _v0.toLocaleString(void 0, {
      maximumFractionDigits: 2
    });
  }
  _v0.s(["AutoCcSettings", 0, function ({
    id: _v0 = (0, _v79.createDomName)("auto-cc-settings"),
    className: _v1 = (0, _v79.createDomName)("auto-cc-settings"),
    eventSettingsContext: {
      settings: {
        isLoading: _v2,
        value: _v3
      },
      actions: {
        updateLiveEventSettings: _v4
      }
    } = (0, _v40.useManager)(_v74.EventSettingsManager),
    composerSessionStatusContext: {
      liveComposerStatuses: _v5
    } = (0, _v40.useManager)(_v73.ComposerSessionStatusManager)
  }) {
    let {
        trackLiveStreamClosedCaptionsToggled: _v6
      } = (0, _v83.useLiveStreamBroadcasterTracking)(),
      {
        open: _v7,
        upgradeModal: _v8
      } = (0, _v62.useAutoCCUpgradeModal)(),
      _v9 = (0, _v69.useIsLiveDemoSubscription)(),
      _v10 = _v5.isSessionRequested || _v5.isSessionInitializing,
      _v11 = (0, _v84.useIsVpaas)(),
      _v12 = (0, _v72.useSessionOwnerId)(),
      {
        settings: _v13,
        isLoadingResponse: _v14
      } = (0, _v82.useOrionSettings)(),
      _v15 = !_v14 && _v13.enable_account_wide_dictionary_management,
      _v16 = (0, _v56.useGetUserAccountDictionaryGlossaryTerms)(() => _v12 > 0 && _v15 ? {
        select: ["uri"],
        where: {
          userId: _v12
        },
        query: {
          perPage: 1
        }
      } : null),
      _v17 = (0, _v57.useGetUserAccountDictionaryTranslationRules)(() => _v12 > 0 && _v15 ? {
        select: ["uri"],
        where: {
          userId: _v12
        },
        query: {
          perPage: 1
        }
      } : null),
      _v18 = _v15 && (void 0 === _v16.data || void 0 === _v17.data),
      _v19 = (_v16.data?.total ?? 0) > 0 || (_v17.data?.total ?? 0) > 0,
      _v20 = _v3?.autoCcUseAccountDictionary ?? _v19,
      _v21 = (0, _v41.useCallback)(_v0 => {
        _v4({
          autoCcUseAccountDictionary: _v0
        }, ["autoCcEstimatedCreditsPerMinute", "autoCcTranslationsEstimatedCreditsPerMinute"]);
      }, [_v4]),
      _v22 = (0, _v71.useLiveLocalizationTrialExpiry)(),
      _v23 = _v22 ? new Date(`${_v22}T00:00:00`).toLocaleDateString() : void 0,
      _v24 = (0, _v68.useCanEnableLiveCaptionsForLiveEvent)(_v12),
      {
        capabilities: _v25
      } = (0, _v54.useCapability)(["hasEntitlementAiCredits", "hasLiveAutoCcAiCredits", "hasLiveAutoTranslation"], _v12 || null),
      _v26 = !!_v25.hasLiveAutoCcAiCredits,
      _v27 = !!_v25.hasLiveAutoTranslation,
      _v28 = !!_v25.hasEntitlementAiCredits,
      _v29 = _v26 || _v27,
      {
        data: _v30
      } = (0, _v55.useGetUser)(() => _v12 && _v29 ? {
        select: ["aiCreditsQuota"],
        where: {
          userId: _v12
        }
      } : null),
      _v31 = _v30?.aiCreditsQuota?.remaining ?? 0,
      _v32 = !(0, _v70.useIsSalesAssistedTier)(_v12),
      _v33 = _v3?.autoCcTranslationLanguages?.length ?? 0,
      _v34 = (0, _v63.getEstimatedLiveCreditRates)(_v3?.autoCcEstimatedCreditsPerMinute, _v3?.autoCcTranslationsEstimatedCreditsPerMinute, _v33),
      {
        data: _v35
      } = (0, _v58.useGetUserAiCreditsBillingInfo)(() => _v12 && _v32 ? {
        select: ["unitAmount", "currency"],
        where: {
          userId: String(_v12)
        }
      } : null),
      {
        modal: _v36,
        open: _v37
      } = function ({
        translationLanguageCount: _v0,
        captionCreditsPerMinute: _v1,
        translationCreditsPerMinute: _v2,
        unitAmount: _v3,
        currency: _v4
      }) {
        let [_v5, _v6] = (0, _v41.useState)(!1),
          _v7 = (0, _v41.useCallback)(() => _v6(!0), []),
          _v8 = (0, _v41.useCallback)(() => _v6(!1), []);
        return {
          modal: (0, _v39.jsx)(_v93, {
            isOpen: _v5,
            onClose: _v8,
            translationLanguageCount: _v0,
            captionCreditsPerMinute: _v1,
            translationCreditsPerMinute: _v2,
            unitAmount: _v3,
            currency: _v4
          }),
          open: _v7,
          close: _v8,
          isOpen: _v5
        };
      }({
        translationLanguageCount: _v33,
        captionCreditsPerMinute: _v34.captions,
        translationCreditsPerMinute: _v34.translations,
        unitAmount: _v35?.unitAmount ?? null,
        currency: _v35?.currency ?? null
      }),
      _v38 = (0, _v41.useCallback)(() => {
        (0, _v76.trackUpgradeAutoCc)(_v67.vimeoConfig.PATH.CONTACT_US_FORM_EVENT), _v7();
      }, [_v7]),
      _v39 = (0, _v41.useCallback)(_v0 => {
        _v0.enabled !== _v3?.autoCcEnabled && ((0, _v75.trackEnabledAutoCc)(_v0.enabled), _v6({
          liveStreamNewStatus: _v0.enabled
        })), null !== _v0.language && _v0.language !== _v3?.autoCcLanguage && (0, _v75.trackSelectAutoCcLanguage)(_v0.language), _v4({
          autoCcEnabled: _v0.enabled,
          ...(null === _v0.language ? {} : {
            autoCcLanguage: _v0.language
          }),
          autoCcKeywords: _v3?.autoCcKeywords,
          ...(_v0.enabled ? {} : {
            autoCcTranslationEnabled: !1,
            autoCcTranslationLanguages: []
          })
        }, []);
      }, [_v3?.autoCcEnabled, _v3?.autoCcLanguage, _v3?.autoCcKeywords, _v4, _v6]),
      _v40 = (0, _v41.useCallback)(_v0 => {
        (0, _v75.trackEnterAutoCcKeywords)(), _v4({
          autoCcKeywords: _v0.join(","),
          autoCcEnabled: _v3?.autoCcEnabled,
          autoCcLanguage: _v3?.autoCcLanguage
        }, []);
      }, [_v3?.autoCcEnabled, _v3?.autoCcLanguage, _v4]),
      _v41 = (0, _v41.useCallback)(_v0 => {
        _v4({
          autoCcEnabled: _v3?.autoCcEnabled,
          ...(_v3?.autoCcLanguage ? {
            autoCcLanguage: _v3.autoCcLanguage
          } : {}),
          autoCcKeywords: _v3?.autoCcKeywords,
          autoCcTranslationEnabled: _v0.length > 0,
          autoCcTranslationLanguages: _v0
        }, ["autoCcEstimatedCreditsPerMinute", "autoCcTranslationsEstimatedCreditsPerMinute"]);
      }, [_v3, _v4]);
    if (_v2 || !_v3) return (0, _v39.jsx)(_v60.BokehSkeleton, {
      id: (0, _v79.createDomName)(_v0, "loader"),
      className: (0, _v79.createDomName)(_v1, "loader"),
      height: (0, _v51.rem)(80),
      marginBottom: (0, _v51.rem)(8),
      width: "100%",
      borderRadius: (0, _v51.rem)(4)
    });
    let {
        autoCcKeywords: _v42,
        autoCcLanguage: _v43,
        autoCcEnabled: _v44,
        autoCcTranslationLanguages: _v45,
        autoCcLimit: _v46,
        autoCcRemaining: _v47,
        unlimitedAutoCc: _v48,
        latency: _v49,
        dvr: _v50
      } = _v3,
      _v51 = _v5.isSessionLive,
      _v52 = (_v45?.length ?? 0) > 0,
      _v53 = !_v50 && !_v52,
      _v54 = _v51 ? _v77.T_AUTO_CC_LOCKED_WHILE_LIVE : _v53 ? _v77.T_FEATURE_DISABLED_WHEN_DVR_DISABLED : void 0,
      _v55 = _v45?.length ?? 0,
      _v56 = _v34.captions,
      _v57 = _v34.translations,
      _v58 = !!(!_v48 && (_v47 ?? 1) <= 0),
      _v59 = _v44 && !_v9 && (_v26 || !_v58),
      _v60 = _v59 && _v15 ? (0, _v39.jsx)(_v44.Checkbox, {
        id: "auto-cc-use-account-dictionary",
        isChecked: _v20,
        isDisabled: _v51 || _v10 || _v18,
        onChange: _v0 => _v21(_v0.currentTarget.checked),
        children: (0, _v39.jsxs)(_v46.Flex, {
          alignItems: "center",
          gap: (0, _v51.rem)(6),
          children: [(0, _v39.jsx)(_v50.Text, {
            variant: "heading-xs",
            color: "text-primary",
            children: (0, _v59.translate)({
              singular: "Use custom dictionary",
              dictionary: {
                es: {
                  singular: "Usar diccionario personalizado"
                },
                "de-DE": {
                  singular: "Benutzerdefiniertes Wörterbuch verwenden"
                },
                "fr-FR": {
                  singular: "Utiliser le dictionnaire personnalisé"
                },
                "ja-JP": {
                  singular: "カスタム辞書を使用する"
                },
                "ko-KR": {
                  singular: "사용자 정의 사전 사용"
                },
                "pt-BR": {
                  singular: "Usar dicionário personalizado"
                },
                "zh-CN": {
                  singular: "使用自定义词典"
                }
              }
            })
          }), (0, _v39.jsx)(_v61.CircleTip, {
            label: (0, _v59.translate)({
              singular: "Apply your glossary terms, translations, and custom rules when generating auto-captions.",
              dictionary: {
                es: {
                  singular: "Aplica los términos de tu glosario, las traducciones y las reglas personalizadas al generar subtítulos automáticos."
                },
                "de-DE": {
                  singular: "Wenden Sie Ihre Glossarbegriffe, Übersetzungen und benutzerdefinierten Regeln an, wenn Sie automatische Untertitel erzeugen."
                },
                "fr-FR": {
                  singular: "Appliquez vos termes de glossaire, vos traductions et vos règles personnalisées lors de la génération de sous-titres automatiques."
                },
                "ja-JP": {
                  singular: "自動キャプションを生成する際に、用語集の用語、翻訳、およびカスタムルールを適用します。"
                },
                "ko-KR": {
                  singular: "자동 자막 생성 시 용어집 용어, 번역 및 사용자 정의 규칙을 적용합니다."
                },
                "pt-BR": {
                  singular: "Aplique seus termos de glossário, traduções e regras personalizadas ao gerar legendas automáticas."
                },
                "zh-CN": {
                  singular: "在生成自动字幕时应用您的术语表条目、翻译和自定义规则。"
                }
              }
            })
          })]
        })
      }) : null,
      _v61 = !_v59 || _v14 || _v15 ? null : (0, _v39.jsx)(_v65.AutoCcKeywords, {
        isLoading: _v10,
        isDisabled: _v51,
        keywords: _v42 ? _v42.split(",") : [],
        onChange: _v40
      }),
      _v62 = (0, _v59.translate)({
        replacements: {
          LINK: _v0 => (0, _v39.jsx)(_v50.Text, {
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
      _v63 = (0, _v59.translate)({
        replacements: {
          LINK: _v0 => (0, _v39.jsx)(_v50.Text, {
            as: "a",
            fontSize: "inherit",
            textDecoration: "underline",
            cursor: "pointer",
            onClick: _v37,
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
      _v64 = (0, _v59.translate)({
        replacements: {
          LINK: _v0 => (0, _v39.jsx)(_v50.Text, {
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
    if (_v26) {
      let _v0 = _v57 + (_v48 ? 0 : _v56),
        _v1 = _v49 === _v78.EEventLatency.Low || _v9 || !_v24,
        _v2 = _v59 && !_v48 && !_v11,
        _v3 = (0, _v80.inline)(() => _v51 ? _v77.T_AUTO_CC_LOCKED_WHILE_LIVE : _v9 ? _v77.T_AUTO_CC_IS_NOT_AVAILABLE_FOR_DEMO : _v24 ? _v49 === _v78.EEventLatency.Low ? (0, _v77.T_AUTO_CC_LOW_LATENCY_STREAM_TIP)() : "" : (0, _v59.translate)({
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
        _v4 = (0, _v59.translate)({
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
        _v5 = (0, _v59.translate)({
          replacements: {
            LINK: _v0 => (0, _v39.jsx)(_v50.Text, {
              variant: "body-xl",
              as: "a",
              fontSize: "sm",
              textDecoration: "underline",
              href: _v63.AUTO_CC_ZENDESK_LINK,
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
      return (0, _v39.jsxs)(_v46.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        gap: "md",
        maxWidth: "100%",
        width: "100%",
        children: [_v51 ? (0, _v39.jsx)(_v42.Alert, {
          status: "warning",
          children: (0, _v39.jsx)(_v52.AlertDescription, {
            fontSize: "body-sm",
            children: (0, _v59.translate)({
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
        }) : null, (0, _v39.jsx)(_v64.AutoCc, {
          location: _v78.ESettingsLocation.Settings,
          value: _v44,
          language: _v43,
          isDisabled: _v1,
          isLocked: _v51,
          isLoading: _v10,
          disabledTip: _v3,
          onChange: _v39
        }), _v60, _v61, _v44 && _v48 ? (0, _v39.jsx)(_v46.Flex, {
          backgroundColor: "fill-component-secondary",
          paddingY: (0, _v51.rem)(4),
          borderRadius: (0, _v51.rem)(8),
          children: (0, _v39.jsxs)(_v46.Flex, {
            paddingY: (0, _v51.rem)(8),
            paddingX: (0, _v51.rem)(8),
            gap: (0, _v51.rem)(8),
            flexDirection: "row",
            children: [(0, _v39.jsx)(_v50.Text, {
              color: "text-secondary",
              variant: "body-md",
              children: (0, _v59.translate)({
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
            }), (0, _v39.jsx)(_v50.Text, {
              color: "text-primary",
              variant: "heading-xs",
              children: (0, _v59.translate)({
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
        }) : null, _v44 && _v48 ? (0, _v39.jsx)(_v48.Paragraph, {
          size: "sm",
          color: "text-secondary",
          children: _v5
        }) : null, _v27 ? (0, _v39.jsx)(_v66.CaptionsTranslations, {
          isDisabled: _v51 || !_v59 || _v53,
          disabledTip: _v54,
          selectedLanguages: _v45 ?? [],
          sourceLanguage: _v43,
          onChange: _v41,
          availableUntil: _v23
        }) : null, _v2 || _v27 && _v44 ? (0, _v39.jsxs)(_v46.Flex, {
          direction: "column",
          alignSelf: "stretch",
          gap: "md",
          children: [(0, _v39.jsxs)(_v46.Flex, {
            direction: "column",
            background: "fill-component",
            paddingY: (0, _v51.rem)(8),
            borderRadius: (0, _v51.rem)(16),
            children: [_v2 ? (0, _v39.jsxs)(_v46.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: (0, _v51.rem)(16),
              paddingTop: (0, _v51.rem)(8),
              paddingBottom: _v27 && _v55 > 0 ? (0, _v51.rem)(8) : (0, _v51.rem)(16),
              children: [(0, _v39.jsxs)(_v46.Flex, {
                alignItems: "center",
                gap: (0, _v51.rem)(4),
                children: [(0, _v39.jsx)(_v50.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: (0, _v59.translate)({
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
                }), _v15 && _v20 ? (0, _v39.jsx)(_v61.CircleTip, {
                  label: (0, _v59.translate)({
                    singular: "Using your custom dictionary involves additional processing, which uses more credits per minute.",
                    dictionary: {
                      es: {
                        singular: "El uso de tu diccionario personalizado implica un procesamiento adicional, que consume más créditos por minuto."
                      },
                      "de-DE": {
                        singular: "Die Verwendung Ihres benutzerdefinierten Wörterbuchs erfordert zusätzliche Verarbeitung, die pro Minute mehr Credits verbraucht."
                      },
                      "fr-FR": {
                        singular: "L'utilisation de votre dictionnaire personnalisé implique un traitement supplémentaire, ce qui consomme davantage de crédits par minute."
                      },
                      "ja-JP": {
                        singular: "カスタム辞書を使用すると追加の処理が必要になり、1分あたりのクレジット消費が増加します。"
                      },
                      "ko-KR": {
                        singular: "사용자 정의 사전을 사용하면 추가 처리가 필요하여 분당 더 많은 크레딧이 소모됩니다."
                      },
                      "pt-BR": {
                        singular: "Usar seu dicionário personalizado envolve processamento adicional, que consome mais créditos por minuto."
                      },
                      "zh-CN": {
                        singular: "使用自定义词典会涉及额外处理，从而每分钟消耗更多积分。"
                      }
                    }
                  })
                }) : null]
              }), (0, _v39.jsxs)(_v46.Flex, {
                alignItems: "center",
                gap: (0, _v51.rem)(2),
                children: [(0, _v39.jsx)(_v53.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v39.jsx)(_v50.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v59.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v94(_v56)
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
            }) : null, _v27 && _v55 > 0 ? (0, _v39.jsxs)(_v46.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: (0, _v51.rem)(16),
              paddingBottom: (0, _v51.rem)(16),
              children: [(0, _v39.jsx)(_v50.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v59.translate)({
                  singular: "{COUNT} translation",
                  plural: "{COUNT} translations",
                  count: _v55,
                  replacements: {
                    COUNT: _v55
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
              }), (0, _v39.jsxs)(_v46.Flex, {
                alignItems: "center",
                gap: (0, _v51.rem)(2),
                children: [(0, _v39.jsx)(_v53.VimeoCoin, {
                  boxSize: 12,
                  color: "text-primary"
                }), (0, _v39.jsx)(_v50.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v59.translate)({
                    singular: "{RATE}/min",
                    replacements: {
                      RATE: _v94(_v57)
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
            }) : null, _v44 ? (0, _v39.jsxs)(_v46.Flex, {
              alignItems: "center",
              justifyContent: "center",
              gap: (0, _v51.rem)(6),
              paddingX: (0, _v51.rem)(16),
              children: [(0, _v39.jsx)(_v53.VimeoCoin, {
                boxSize: 16,
                color: "text-secondary",
                flexShrink: 0
              }), (0, _v39.jsx)(_v50.Text, {
                variant: "body-sm",
                color: "text-tertiary",
                children: (0, _v59.translate)({
                  singular: "{AMOUNT} credits remaining",
                  replacements: {
                    AMOUNT: Math.max(_v31, 0).toLocaleString()
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
          }), _v0 > _v31 && _v28 ? (0, _v39.jsx)(_v42.Alert, {
            status: "warning",
            children: (0, _v39.jsx)(_v52.AlertDescription, {
              fontSize: "body-sm",
              children: _v4
            })
          }) : null, _v44 ? (0, _v39.jsx)(_v50.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v32 ? _v63 : _v62
          }) : null, _v44 ? (0, _v39.jsx)(_v50.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v64
          }) : null]
        }) : null, _v36]
      });
    }
    let _v65 = Number((100 - (_v47 ?? 0) / (_v46 ?? 1) * 100).toFixed(2)),
      _v66 = _v49 === _v78.EEventLatency.Low || _v58 || _v9 || !_v24,
      _v67 = (0, _v59.translate)({
        replacements: {
          NUMBER: _v57
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
      _v68 = (0, _v80.inline)(() => _v51 ? _v77.T_AUTO_CC_LOCKED_WHILE_LIVE : _v9 ? _v77.T_AUTO_CC_IS_NOT_AVAILABLE_FOR_DEMO : _v58 ? _v77.T_AUTO_CC_PLAN_LIMIT_REACHED : _v24 ? _v49 === _v78.EEventLatency.Low ? (0, _v77.T_AUTO_CC_LOW_LATENCY_STREAM_TIP)() : "" : (0, _v59.translate)({
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
    return (0, _v39.jsxs)(_v46.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      gap: "md",
      maxWidth: "100%",
      width: "100%",
      children: [_v51 ? (0, _v39.jsx)(_v42.Alert, {
        status: "warning",
        children: (0, _v39.jsx)(_v52.AlertDescription, {
          fontSize: "body-sm",
          children: (0, _v59.translate)({
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
      }) : null, (0, _v39.jsx)(_v64.AutoCc, {
        location: _v78.ESettingsLocation.Settings,
        value: _v44 && !_v58,
        language: _v43,
        isDisabled: _v66,
        isLocked: _v51,
        isLoading: _v10,
        disabledTip: _v68,
        onChange: _v39
      }), _v60, _v61, _v48 || _v9 || _v11 ? null : (0, _v39.jsxs)(_v46.Flex, {
        direction: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        background: "surface",
        padding: (0, _v51.rem)(16),
        borderRadius: (0, _v51.rem)(8),
        border: "1px solid",
        borderColor: "stroke",
        children: [(0, _v39.jsx)(_v48.Paragraph, {
          size: "md",
          color: "text-primary",
          fontWeight: "bold",
          children: (0, _v81.getFormattedTimecodeFromSeconds)(Math.max(_v47 ?? 0, 0), _v81.TimecodeFormats.LongWithoutDays, {
            shouldShowZero: !0
          })
        }), (0, _v39.jsx)(_v49.Progress, {
          id: (0, _v79.createDomName)(_v0, "usage-progress"),
          className: (0, _v79.createDomName)(_v1, "usage-progress"),
          margin: `${(0, _v51.rem)(4)} 0`,
          size: "sm",
          variant: "neutral",
          value: _v65,
          sx: {
            "& > div": {
              background: "upsell-primary"
            }
          }
        }), (0, _v39.jsxs)(_v46.Flex, {
          alignItems: "center",
          gap: (0, _v51.rem)(4),
          children: [(0, _v39.jsxs)(_v47.Header, {
            size: "xs",
            children: [" ", _v77.T_AUTO_CC_REMAINING, " "]
          }), (0, _v39.jsx)(_v61.CircleTip, {
            label: _v77.T_AUTO_CC_TIP
          })]
        }), (0, _v39.jsx)(_v45.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v51.rem)(12)} 0`
        }), (0, _v39.jsx)(_v48.Paragraph, {
          size: "md",
          color: "text-secondary",
          children: _v58 ? _v77.T_AUTO_CC_UPSELL_REACHED : _v77.T_AUTO_CC_UPSELL
        }), (0, _v39.jsx)(_v43.Button, {
          size: "sm",
          width: "100%",
          marginTop: (0, _v51.rem)(12),
          variant: "upsell",
          onClick: _v38,
          children: _v77.T_CONTACT_SALES
        })]
      }), _v27 ? (0, _v39.jsx)(_v66.CaptionsTranslations, {
        isDisabled: _v51 || !_v59,
        disabledTip: _v51 ? _v77.T_AUTO_CC_LOCKED_WHILE_LIVE : void 0,
        selectedLanguages: _v45 ?? [],
        sourceLanguage: _v43,
        onChange: _v41,
        availableUntil: _v23
      }) : null, _v27 && _v44 ? (0, _v39.jsxs)(_v46.Flex, {
        direction: "column",
        alignSelf: "stretch",
        gap: "md",
        children: [(0, _v39.jsxs)(_v46.Flex, {
          direction: "column",
          background: "fill-component",
          paddingY: (0, _v51.rem)(8),
          borderRadius: (0, _v51.rem)(16),
          children: [_v55 > 0 ? (0, _v39.jsxs)(_v46.Flex, {
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: (0, _v51.rem)(16),
            paddingTop: (0, _v51.rem)(8),
            paddingBottom: (0, _v51.rem)(16),
            children: [(0, _v39.jsx)(_v50.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v59.translate)({
                singular: "{COUNT} translation",
                plural: "{COUNT} translations",
                count: _v55,
                replacements: {
                  COUNT: _v55
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
            }), (0, _v39.jsxs)(_v46.Flex, {
              alignItems: "center",
              gap: (0, _v51.rem)(2),
              children: [(0, _v39.jsx)(_v53.VimeoCoin, {
                boxSize: 12,
                color: "text-primary"
              }), (0, _v39.jsx)(_v50.Text, {
                variant: "heading-xs",
                color: "text-primary",
                children: (0, _v59.translate)({
                  singular: "{RATE}/min",
                  replacements: {
                    RATE: _v94(_v57)
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
          }) : null, (0, _v39.jsxs)(_v46.Flex, {
            alignItems: "center",
            justifyContent: "center",
            gap: (0, _v51.rem)(6),
            paddingX: (0, _v51.rem)(16),
            children: [(0, _v39.jsx)(_v53.VimeoCoin, {
              boxSize: 16,
              color: "text-secondary",
              flexShrink: 0
            }), (0, _v39.jsx)(_v50.Text, {
              variant: "body-sm",
              color: "text-tertiary",
              children: (0, _v59.translate)({
                singular: "{AMOUNT} credits remaining",
                replacements: {
                  AMOUNT: Math.max(_v31, 0).toLocaleString()
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
        }), _v57 > _v31 && _v28 && _v55 > 0 ? (0, _v39.jsx)(_v42.Alert, {
          status: "warning",
          children: (0, _v39.jsx)(_v52.AlertDescription, {
            fontSize: "body-sm",
            children: _v67
          })
        }) : null, (0, _v39.jsx)(_v50.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v32 ? _v63 : _v62
        }), (0, _v39.jsx)(_v50.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v64
        })]
      }) : null, _v36, _v8]
    });
  }], 0);
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0);
  _v0.s(["trackAddEventDescription", 0, function () {
    (0, _v97.createBPv2EventFactory)("vimeo.add_event_description", 2, () => ({
      ...(0, _v96.newTeamCtx)(),
      ...(0, _v96.newWebCtx)(),
      ...(0, _v96.newActionCtx)("type"),
      ...(0, _v96.newLiveCtx)({
        live_feature: "basic_settings"
      }),
      ...(0, _v96.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "text"
      })
    }), () => ({
      device_type: _v95.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: null
    });
  }, "trackAddEventTitle", 0, function () {
    (0, _v97.createBPv2EventFactory)("vimeo.add_event_title", 2, () => ({
      ...(0, _v96.newTeamCtx)(),
      ...(0, _v96.newWebCtx)(),
      ...(0, _v96.newActionCtx)("type"),
      ...(0, _v96.newLiveCtx)({
        live_feature: "basic_settings"
      }),
      ...(0, _v96.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "text"
      })
    }), () => ({
      device_type: _v95.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: null
    });
  }], 0);
  var _v98 = _v0.i(0);
  function _v99() {
    return (_v99 = Object.assign.bind()).apply(null, arguments);
  }
  function _v100() {
    return (_v100 = Object.assign.bind()).apply(null, arguments);
  }
  function _v101() {
    return (_v101 = Object.assign.bind()).apply(null, arguments);
  }
  _v0.s(["BasicSettingsControls", 0, function ({
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
    return (0, _v39.jsxs)(_v46.Flex, {
      position: _v0,
      left: _v1,
      top: _v2,
      right: _v4,
      bottom: _v3,
      flexWrap: "nowrap",
      gap: (0, _v51.rem)(4),
      justifyContent: "flex-end",
      children: [(0, _v39.jsx)(_v43.Button, {
        size: "xs",
        isDisabled: _v7,
        variant: "secondary",
        onClick: _v5,
        children: _v77.T_CANCEL
      }), (0, _v39.jsx)(_v43.Button, {
        size: "xs",
        isLoading: _v7,
        isDisabled: _v8,
        variant: "primary",
        onClick: _v6,
        children: _v98.rtmpTranslations.save
      })]
    });
  }], 0), _v0.s(["default", 0, function (_v0) {
    return _v41.createElement("svg", _v99({
      viewBox: "6 6 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v1 || (_v1 = _v41.createElement("path", {
      d: "M17.175 16l5.25-5.242a.837.837 0 10-1.183-1.183L16 14.825l-5.242-5.25a.837.837 0 10-1.183 1.183L14.825 16l-5.25 5.242a.834.834 0 00.271 1.365.834.834 0 00.912-.182L16 17.175l5.242 5.25a.832.832 0 001.183 0 .834.834 0 000-1.183L17.175 16z",
      fill: "currentColor"
    })));
  }], 0), _v0.s(["default", 0, function (_v0) {
    return _v41.createElement("svg", _v100({
      viewBox: "6 6 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v2 || (_v2 = _v41.createElement("path", {
      d: "M23.5 15.167a.833.833 0 00-.834.833 6.709 6.709 0 11-1.85-4.583h-2a.833.833 0 100 1.666h3.776a.833.833 0 00.833-.833V8.5a.834.834 0 00-1.667 0v1.475A8.334 8.334 0 1024.333 16a.833.833 0 00-.833-.833z",
      fill: "currentColor"
    })));
  }], 0), _v0.s(["default", 0, function (_v0) {
    return _v41.createElement("svg", _v101({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 410 406"
    }, _v0), _v3 || (_v3 = _v41.createElement("path", {
      d: "M0 0h410v406H0V0z",
      fill: "#F2F2F2"
    })), _v4 || (_v4 = _v41.createElement("path", {
      d: "M115 256h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L116 292l-1 35H80c.04 11.144.04 11.144.09 22.289l.008 4.176.015 2.209c0 1.776-.05 3.551-.113 5.326-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.727-.033L44 362v-35l35-1c.29-11.144.29-11.144.568-22.289l.116-4.176.05-2.209c.152-5.212.152-5.212 1.266-6.326a178.35 178.35 0 017.535-.098l2.022.003c2.502.006 5.004.02 7.505.033L115 291v-35zM186 43h36l.063 17.438.027 5.509.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L186 79v35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L186 78V43zM115 43h36l.063 17.438.027 5.509.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L115 79v35H80l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L115 78V43zM44 43h36l.063 17.438.027 5.509.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L44 79v35H9l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L44 78V43z",
      fill: "#EBEBEB"
    })), _v5 || (_v5 = _v41.createElement("path", {
      d: "M80 114h35v35l-34 1-1 35H44l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1.98-1.98 5.821-1.255 8.535-1.316.668-.02 1.335-.038 2.022-.057 2.502-.068 5.004-.128 7.505-.19L79 148l1-34zM222 327h35v35h-35c.04 11.474.04 11.474.09 22.947l.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L186 398v-36l35-1 1-34zM151 327h35v35h-35c.04 11.474.04 11.474.09 22.947l.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L115 398v-36l35-1 1-34zM80 327h35v35H80c.04 11.474.04 11.474.09 22.947l.008 4.3.015 2.274c0 1.826-.05 3.653-.113 5.479-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L44 398v-36l35-1 1-34z",
      fill: "#F9F9F9"
    })), _v6 || (_v6 = _v41.createElement("path", {
      d: "M222 256h35v35l-34 1c-.29 11.144-.29 11.144-.568 22.289a7324.22 7324.22 0 01-.116 4.176l-.05 2.209c-.152 5.212-.152 5.212-1.266 6.326-2.594.089-5.16.115-7.754.098l-2.35-.005c-2.486-.005-4.972-.018-7.458-.03-1.682-.006-3.364-.01-5.045-.014-4.131-.011-8.262-.028-12.393-.049-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45 1.98-1.98 5.821-1.255 8.535-1.316.668-.02 1.335-.038 2.022-.057 2.502-.068 5.004-.128 7.506-.19L221 290l1-34zM151 256h35v35l-34 1c-.29 11.144-.29 11.144-.568 22.289a7324.22 7324.22 0 01-.116 4.176l-.05 2.209c-.152 5.212-.152 5.212-1.266 6.326-2.594.089-5.16.115-7.754.098l-2.35-.005c-2.486-.005-4.972-.018-7.458-.03-1.682-.006-3.364-.01-5.045-.014-4.131-.011-8.262-.028-12.393-.049-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45 1.98-1.98 5.821-1.255 8.535-1.316.668-.02 1.335-.038 2.022-.057 2.502-.068 5.004-.128 7.505-.19L150 290l1-34zM80 256h35v35l-34 1c-.29 11.144-.29 11.144-.568 22.289a7324.22 7324.22 0 01-.116 4.176l-.05 2.209c-.152 5.212-.152 5.212-1.266 6.326-2.594.089-5.16.115-7.754.098l-2.35-.005c-2.486-.005-4.972-.018-7.458-.03-1.682-.006-3.364-.01-5.045-.014-4.131-.011-8.262-.028-12.393-.049-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45 1.98-1.98 5.821-1.255 8.535-1.316.668-.02 1.335-.038 2.022-.057 2.502-.068 5.004-.128 7.505-.19L79 290l1-34z",
      fill: "#F9F9F9"
    })), _v7 || (_v7 = _v41.createElement("path", {
      d: "M328 256h35v35l-34 1-1 35h-35c-1.533-3.066-1.121-6.27-1.098-9.633l.003-2.02c.006-2.49.02-4.981.033-7.472L292 291h36v-35zM44 256h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.505.19L45 292l-1 35H9l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L44 291v-35zM186 185h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L187 221l-1 35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L186 220v-35zM115 185h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L116 221l-1 35H80l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L115 220v-35zM44 185h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.505.19L45 221l-1 35H9l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L44 220v-35zM186 114h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L187 150l-1 35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L186 149v-35zM115 114h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.506.19L116 150l-1 35H80l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L115 149v-35zM44 114h36l.063 16.938.027 5.35.008 4.177.015 2.209c0 1.776-.05 3.551-.113 5.326-1.98 1.98-5.821 1.255-8.535 1.316-.668.02-1.335.038-2.022.057-2.502.068-5.004.128-7.505.19L45 150l-1 35H9l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L44 149v-35z",
      fill: "#EBEBEB"
    })), _v8 || (_v8 = _v41.createElement("path", {
      d: "M222 43h35v35l-34 1-1 35h-36V79l35-1 1-35zM151 43h35v35l-34 1-1 35h-36V79l35-1 1-35zM80 43h35v35l-34 1-1 35H44V79l35-1 1-35zM364 185h35v35h-36l1-35zm-31.765 34.886c1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L363 220v36h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114zM293 185h35v35h-36l1-35zm-31.765 34.886c1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L292 220v36h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114zM364 114h35v35h-36l1-35zm-31.765 34.886c1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L363 149v36h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114zM293 114h35v35h-36l1-35zm-31.765 34.886c1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.505.033L292 149v36h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114z",
      fill: "#F9F9F9"
    })), _v9 || (_v9 = _v41.createElement("path", {
      d: "M257 114h35v35l-34 1-1 35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.022.003c2.502.006 5.004.02 7.506.033L257 149v-35zM186 0h36v7c-1 1-1 1-4.326 1.114-1.476 0-2.952-.006-4.428-.016l-2.082-.003c-2.575-.006-5.15-.02-7.726-.033L186 8v35h-35l-.063-17.438-.027-5.509-.008-4.3-.015-2.274c0-1.826.05-3.653.113-5.479 1-1 1-1 4.235-1.114 1.433 0 2.867.006 4.3.016l2.283.005c2.415.005 4.83.018 7.244.03A5107.372 5107.372 0 01186 7V0z",
      fill: "#EBEBEB"
    })), _v10 || (_v10 = _v41.createElement("path", {
      d: "M222 0h35v7l-34 1-1 35h-36V8l35-1 1-7zM151 0h35v7l-34 1-1 35h-36V8l35-1 1-7zM80 0h35v7L81 8l-1 35H44V8l35-1 1-7z",
      fill: "#F9F9F9"
    })), _v11 || (_v11 = _v41.createElement("path", {
      d: "M363 362h36v36h-35c-1.533-3.066-1.121-6.27-1.098-9.633l.003-2.02c.006-2.49.02-4.981.033-7.472L363 362zM292 362h36v36h-35c-1.533-3.066-1.121-6.27-1.098-9.633l.003-2.02c.006-2.49.02-4.981.033-7.472L292 362zM9 362h35v36H9v-36zM328 327h35v35h-35v-35zM257 327h35v35h-35v-35z",
      fill: "#EBEBEB"
    })), _v12 || (_v12 = _v41.createElement("path", {
      d: "M9 185h35v35H9v-35z",
      fill: "#FAFAFA"
    })), _v13 || (_v13 = _v41.createElement("path", {
      d: "M364 150h35v35h-35v-35zM364 79h35v35h-35V79z",
      fill: "#EBEBEB"
    })), _v14 || (_v14 = _v41.createElement("path", {
      d: "M328 79h35v35h-35V79z",
      fill: "#F9F9F9"
    })), _v15 || (_v15 = _v41.createElement("path", {
      d: "M293 79h35v35h-35V79z",
      fill: "#EBEBEB"
    })), _v16 || (_v16 = _v41.createElement("path", {
      d: "M257 79h35v35h-35V79z",
      fill: "#F9F9F9"
    })), _v17 || (_v17 = _v41.createElement("path", {
      d: "M222 79h35v35h-35V79z",
      fill: "#EBEBEB"
    })), _v18 || (_v18 = _v41.createElement("path", {
      d: "M364 43h35v35h-35V43z",
      fill: "#FAFAFA"
    })), _v19 || (_v19 = _v41.createElement("path", {
      d: "M328 43h35v35h-35V43z",
      fill: "#EBEBEB"
    })), _v20 || (_v20 = _v41.createElement("path", {
      d: "M293 43h35v35h-35V43z",
      fill: "#FAFAFA"
    })), _v21 || (_v21 = _v41.createElement("path", {
      d: "M257 43h35v35h-35V43z",
      fill: "#EBEBEB"
    })), _v22 || (_v22 = _v41.createElement("path", {
      d: "M9 43h35v35H9V43z",
      fill: "#FAFAFA"
    })), _v23 || (_v23 = _v41.createElement("path", {
      d: "M364 8h35v35h-35V8z",
      fill: "#EBEBEB"
    })), _v24 || (_v24 = _v41.createElement("path", {
      d: "M328 8h35v35h-35V8z",
      fill: "#FAFAFA"
    })), _v25 || (_v25 = _v41.createElement("path", {
      d: "M293 8h35v35h-35V8z",
      fill: "#EBEBEB"
    })), _v26 || (_v26 = _v41.createElement("path", {
      d: "M257 8h35v35h-35V8z",
      fill: "#FAFAFA"
    })), _v27 || (_v27 = _v41.createElement("path", {
      d: "M222 8h35v35h-35V8z",
      fill: "#EBEBEB"
    })), _v28 || (_v28 = _v41.createElement("path", {
      d: "M0 0h44v7L10 8 9 43H0V0zM400 291h10v36h-11c-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45l1-1zM400 220h10v36h-11c-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45l1-1zM400 149h10v36h-11c-.025-4.966-.043-9.932-.055-14.899-.005-1.69-.012-3.381-.02-5.072-.013-2.425-.018-4.85-.023-7.275l-.015-2.304c0-1.817.051-3.634.113-5.45l1-1z",
      fill: "#F9F9F9"
    })), _v29 || (_v29 = _v41.createElement("path", {
      d: "M399 327h11v35h-11v-35z",
      fill: "#EBEBEB"
    })), _v30 || (_v30 = _v41.createElement("path", {
      d: "M399 79h11v35h-11V79z",
      fill: "#F9F9F9"
    })), _v31 || (_v31 = _v41.createElement("path", {
      d: "M399 43h11v35h-11V43z",
      fill: "#EBEBEB"
    })), _v32 || (_v32 = _v41.createElement("path", {
      d: "M399 8h11v35h-11V8z",
      fill: "#FAFAFA"
    })), _v33 || (_v33 = _v41.createElement("path", {
      d: "M0 43h9c.025 4.966.043 9.932.055 14.899.005 1.69.012 3.381.02 5.072.013 2.425.018 4.85.023 7.275l.015 2.304c0 1.817-.051 3.634-.113 5.45l-1 1H0V43zM0 327h9v35H0v-35zM0 256h9v35H0v-35zM0 185h9v35H0v-35zM0 114h9v35H0v-35zM328 398h35v8h-35v-8z",
      fill: "#EBEBEB"
    })), _v34 || (_v34 = _v41.createElement("path", {
      d: "M222 398h35v8h-35v-8zM151 398h35v8h-35v-8zM80 398h35v8H80v-8zM364 0h35v7h-35V0z",
      fill: "#FAFAFA"
    })), _v35 || (_v35 = _v41.createElement("path", {
      d: "M328 0h35v7h-35V0z",
      fill: "#EBEBEB"
    })), _v36 || (_v36 = _v41.createElement("path", {
      d: "M293 0h35v7h-35V0z",
      fill: "#FAFAFA"
    })), _v37 || (_v37 = _v41.createElement("path", {
      d: "M257 0h35v7h-35V0zM399 398h11v8h-11v-8zM399 0h11v7h-11V0zM0 398h9v8H0v-8z",
      fill: "#EBEBEB"
    })), _v38 || (_v38 = _v41.createElement("path", {
      d: "M0 0h9c.042 2.333.04 4.667 0 7-1 1-1 1-2.848 1.098L0 8V0z",
      fill: "#ECECEC"
    })));
  }], 0);
}