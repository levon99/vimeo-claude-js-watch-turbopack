{
  "use strict";

  var _v1,
    _v2,
    _v3,
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
    _v30 = _v0.i(0);
  function _v31({
    isClipIdRequired: _v0,
    connectionOrId: _v1,
    cloudSessionId: _v2,
    period: _v3
  }) {
    let _v4 = (0, _v27.useGctlConfig)(),
      [_v5, _v6] = (0, _v10.useState)(() => (0, _v9.createLoadable)(null)),
      _v7 = !!(_v3 && _v1 && (_v5.value?.archive?.status !== _v29.EArchiveStatus.DONE && _v5.value?.archive?.status !== _v29.EArchiveStatus.ERROR || _v0 && !_v5.value?.archive?.clipId)),
      _v8 = (0, _v10.useCallback)(async () => {
        if (_v1) try {
          _v6(_v0 => _v0.asLoading());
          let _v0 = ["archive.clip_id", "archive.status"],
            _v1 = await (0, _v28.getSessionIngestStatus)("object" == typeof _v1 ? {
              connection: _v1,
              fields: _v0,
              gctlConfig: _v4
            } : {
              clipId: _v1,
              gctlConfig: _v4,
              fields: _v0
            }, {
              cloudSessionId: _v2,
              isRawStatus: !0
            });
          _v6(_v0 => _v0.asReady(_v1));
        } catch (_v0) {
          _v6(_v0 => _v0.asFailed(_v0));
        } else _v6((0, _v9.createLoadable)(null));
      }, [_v4, _v1, _v2]);
    return (0, _v30.useInterval)(_v7, _v8, {
      period: _v3,
      checkCallable: !0,
      initialize: !0
    }), _v5;
  }
  var _v32 = _v0.i(0),
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
    _v43 = _v0.i(0);
  function _v44({
    id: _v0 = (0, _v40.createLiveDomName)("ended-state-link-option"),
    className: _v1 = (0, _v40.createLiveDomName)("ended-state-link-option"),
    icon: _v2,
    header: _v3,
    description: _v4,
    isDisabled: _v5 = !1,
    disabledTooltip: _v6,
    onClick: _v7
  }) {
    let _v8 = (0, _v4.jsxs)(_v13.Flex, {
      id: _v0,
      className: _v1,
      justifyContent: "space-between",
      gap: (0, _v11.rem)(8),
      padding: (0, _v11.rem)(8),
      borderRadius: (0, _v11.rem)(8),
      cursor: _v5 ? "not-allowed" : "pointer",
      opacity: _v5 ? .5 : 1,
      "aria-disabled": _v5 || void 0,
      _hover: _v5 ? void 0 : {
        backgroundColor: "fill-component-hover"
      },
      onClick: _v5 ? void 0 : _v7,
      children: [(0, _v4.jsxs)(_v13.Flex, {
        direction: "column",
        grow: 1,
        gap: (0, _v11.rem)(8),
        children: [(0, _v4.jsxs)(_v13.Flex, {
          gap: (0, _v11.rem)(8),
          alignItems: "center",
          children: [(0, _v4.jsx)(_v13.Flex, {
            id: (0, _v40.createLiveDomName)(_v0, "icon"),
            width: (0, _v11.rem)(20),
            height: (0, _v11.rem)(20),
            children: _v2
          }), (0, _v4.jsx)(_v14.Header, {
            id: (0, _v40.createLiveDomName)(_v0, "title"),
            size: "xs",
            children: _v3
          })]
        }), (0, _v4.jsx)(_v18.Paragraph, {
          id: (0, _v40.createLiveDomName)(_v0, "description"),
          size: "sm",
          color: "text-secondary",
          children: _v4
        })]
      }), (0, _v4.jsx)(_v43.SimplePopOutArrow, {
        id: (0, _v40.createLiveDomName)(_v0, "popout"),
        minWidth: (0, _v11.rem)(24),
        minHeight: (0, _v11.rem)(24)
      })]
    });
    return _v5 && _v6 ? (0, _v4.jsx)(_v42.Tooltip, {
      label: _v6,
      placement: "top",
      hasArrow: !0,
      children: _v8
    }) : _v8;
  }
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  function _v48({
    id: _v0 = (0, _v7.createDomName)("ended-state-thumbnail"),
    className: _v1 = (0, _v7.createDomName)("ended-state-thumbnail"),
    archiveStatus: _v2,
    thumbnail: _v3,
    withLink: _v4,
    isDisabled: _v5,
    onClick: _v6
  }) {
    let _v7 = _v2 === _v29.EArchiveStatus.DONE,
      _v8 = _v2 === _v29.EArchiveStatus.ERROR,
      _v9 = _v3?.link,
      _v10 = _v3?.linkWithPlayButton || _v9,
      _v11 = _v7 && _v4 ? _v10 : _v9;
    return (0, _v4.jsx)(_v13.Flex, {
      id: _v0,
      className: _v1,
      position: "relative",
      margin: `${(0, _v11.rem)(16)} 0`,
      width: "100%",
      borderRadius: "input-sm",
      overflow: "hidden",
      sx: _v47.STRICT_16BY9_BOX_STYLE,
      onClick: !_v5 && _v4 ? _v6 : void 0,
      children: (0, _v4.jsx)(_v46.Box, {
        background: "surface",
        backgroundImage: _v11 ? `url('${_v11}')` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: _v4 ? "pointer" : "default",
        overflow: "hidden",
        backdropFilter: "blur(0px)",
        sx: _v47.FULL_WIDTH_ABSOLUTE_STYLE,
        children: _v7 ? null : (0, _v4.jsxs)(_v13.Flex, {
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: `blur(${(0, _v11.rem)(8)})`,
          background: "rgba(0, 0, 0, 0.2)",
          sx: _v47.FULL_WIDTH_ABSOLUTE_STYLE,
          children: [_v8 ? (0, _v4.jsx)(_v14.Header, {
            id: (0, _v7.createDomName)(_v0, "status"),
            className: (0, _v7.createDomName)(_v1, "status"),
            color: "white",
            size: "md",
            children: _v41.translations.videoFailed
          }) : null, _v7 || _v8 ? null : (0, _v4.jsx)(_v45.Spinner, {
            id: (0, _v7.createDomName)(_v0, "loader"),
            className: (0, _v7.createDomName)(_v1, "loader"),
            size: "sm",
            color: "white"
          })]
        })
      })
    });
  }
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  function _v55(_v0) {
    return _v0.toLocaleString(void 0, {
      maximumFractionDigits: 2
    });
  }
  function _v56({
    startTime: _v0,
    endTime: _v1,
    creditsRemaining: _v2,
    translationLanguageCount: _v3,
    captionCreditsPerMinute: _v4,
    translationCreditsPerMinute: _v5,
    unlimitedAutoCc: _v6 = !1,
    hasAiCreditsCcBilling: _v7 = !1,
    isSelfServe: _v8 = !1,
    onDismiss: _v9
  }) {
    let _v10,
      _v11,
      _v12,
      _v13 = (0, _v40.createLiveDomName)("billing-step"),
      _v14 = Math.max(0, _v1 - _v0),
      _v15 = Math.ceil(_v14 / 60),
      _v16 = _v3 > 0,
      _v17 = _v7 && !_v6,
      _v18 = (0, _v54.getEstimatedLiveCreditRates)(_v4, _v5, _v3),
      _v19 = _v18.translations,
      _v20 = _v17 ? _v18.captions : 0,
      _v21 = Math.floor((_v20 + _v19) * _v15),
      _v22 = Math.max(0, _v2),
      _v23 = _v22 <= 0,
      _v24 = (0, _v53.translate)({
        replacements: {
          LINK: _v0 => (0, _v4.jsx)(_v49.Text, {
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
      _v25 = (0, _v53.translate)({
        singular: "Any usage beyond your credit balance is billed to your default payment method.",
        dictionary: {
          es: {
            singular: "Cualquier uso que exceda su saldo de créditos se cargará a su método de pago predeterminado."
          },
          "de-DE": {
            singular: "Jegliche Nutzung, die über Ihr Guthaben hinausgeht, wird Ihrer Standard-Zahlungsmethode in Rechnung gestellt."
          },
          "fr-FR": {
            singular: "Toute utilisation au-delà de votre solde de crédits est facturée sur votre moyen de paiement par défaut."
          },
          "ja-JP": {
            singular: "クレジット残高を超える使用分は既定の支払い方法に請求されます."
          },
          "ko-KR": {
            singular: "크레딧 잔액을 초과하는 모든 사용분은 기본 결제 수단으로 청구됩니다."
          },
          "pt-BR": {
            singular: "Qualquer uso além do seu saldo de créditos será cobrado no seu método de pagamento padrão."
          },
          "zh-CN": {
            singular: "超出您信用余额的任何使用将向您的默认付款方式收取费用。"
          }
        }
      });
    return (0, _v4.jsxs)(_v15.Modal, {
      id: _v13,
      isOpen: !0,
      onClose: _v9,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        display: "block",
        padding: 0,
        color: "text-primary",
        width: (0, _v11.rem)(400),
        children: [(0, _v4.jsxs)(_v13.Flex, {
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingTop: (0, _v11.rem)(24),
          paddingLeft: (0, _v11.rem)(24),
          paddingRight: (0, _v11.rem)(24),
          paddingBottom: (0, _v11.rem)(8),
          children: [(0, _v4.jsx)(_v14.Header, {
            size: "md",
            children: _v17 && _v16 ? (0, _v53.translate)({
              singular: "Captions and translation cost",
              dictionary: {
                es: {
                  singular: "Coste de subtítulos y traducción"
                },
                "de-DE": {
                  singular: "Kosten für Untertitel und Übersetzung"
                },
                "fr-FR": {
                  singular: "Coût des sous-titres et de la traduction"
                },
                "ja-JP": {
                  singular: "字幕および翻訳の費用"
                },
                "ko-KR": {
                  singular: "자막 및 번역 비용"
                },
                "pt-BR": {
                  singular: "Custo de legendas e tradução"
                },
                "zh-CN": {
                  singular: "字幕与翻译费用"
                }
              }
            }) : _v17 ? (0, _v53.translate)({
              singular: "Captions cost",
              dictionary: {
                es: {
                  singular: "Costo de subtítulos"
                },
                "de-DE": {
                  singular: "Kosten für Untertitel"
                },
                "fr-FR": {
                  singular: "Coût des sous-titres"
                },
                "ja-JP": {
                  singular: "字幕の費用"
                },
                "ko-KR": {
                  singular: "자막 비용"
                },
                "pt-BR": {
                  singular: "Custo das legendas"
                },
                "zh-CN": {
                  singular: "字幕费用"
                }
              }
            }) : (0, _v53.translate)({
              singular: "Translation cost",
              dictionary: {
                es: {
                  singular: "Coste de traducción"
                },
                "de-DE": {
                  singular: "Übersetzungskosten"
                },
                "fr-FR": {
                  singular: "Coût de traduction"
                },
                "ja-JP": {
                  singular: "翻訳費用"
                },
                "ko-KR": {
                  singular: "번역 비용"
                },
                "pt-BR": {
                  singular: "Custo de tradução"
                },
                "zh-CN": {
                  singular: "翻译费用"
                }
              }
            })
          }), (0, _v4.jsx)(_v19.CloseButton, {
            "aria-label": "close",
            variant: "tertiary",
            size: "sm",
            onClick: _v9
          })]
        }), (0, _v4.jsxs)(_v13.Flex, {
          direction: "column",
          gap: (0, _v11.rem)(8),
          paddingX: (0, _v11.rem)(24),
          paddingY: (0, _v11.rem)(8),
          children: [(0, _v4.jsx)(_v49.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v8 ? _v25 : _v24
          }), (0, _v4.jsxs)(_v13.Flex, {
            direction: "column",
            background: "fill-component",
            borderRadius: (0, _v11.rem)(16),
            paddingY: (0, _v11.rem)(8),
            children: [(0, _v4.jsxs)(_v13.Flex, {
              direction: "column",
              gap: (0, _v11.rem)(16),
              paddingX: (0, _v11.rem)(16),
              paddingTop: (0, _v11.rem)(8),
              paddingBottom: (0, _v11.rem)(16),
              children: [_v17 ? (0, _v4.jsxs)(_v13.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [(0, _v4.jsx)(_v49.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: (0, _v53.translate)({
                    singular: "Automatic closed captions",
                    dictionary: {
                      es: {
                        singular: "Subtítulos automáticos"
                      },
                      "de-DE": {
                        singular: "Automatisch erstellte Untertitel (Closed Captions)"
                      },
                      "fr-FR": {
                        singular: "Sous-titres automatiques"
                      },
                      "ja-JP": {
                        singular: "自動クローズドキャプション"
                      },
                      "ko-KR": {
                        singular: "자동 폐쇄 자막"
                      },
                      "pt-BR": {
                        singular: "Legendas ocultas automáticas"
                      },
                      "zh-CN": {
                        singular: "自动生成隐藏式字幕"
                      }
                    }
                  })
                }), (0, _v4.jsxs)(_v13.Flex, {
                  alignItems: "center",
                  gap: (0, _v11.rem)(2),
                  children: [(0, _v4.jsx)(_v52.VimeoCoin, {
                    boxSize: 12,
                    color: "text-primary"
                  }), (0, _v4.jsx)(_v49.Text, {
                    variant: "heading-xs",
                    color: "text-primary",
                    children: (0, _v53.translate)({
                      singular: "{RATE}/min",
                      replacements: {
                        RATE: _v55(_v20)
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
              }) : null, _v16 ? (0, _v4.jsxs)(_v13.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [(0, _v4.jsx)(_v49.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: (0, _v53.translate)({
                    singular: "{COUNT} translation",
                    plural: "{COUNT} translations",
                    count: _v3,
                    replacements: {
                      COUNT: _v3
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
                }), (0, _v4.jsxs)(_v13.Flex, {
                  alignItems: "center",
                  gap: (0, _v11.rem)(2),
                  children: [(0, _v4.jsx)(_v52.VimeoCoin, {
                    boxSize: 12,
                    color: "text-primary"
                  }), (0, _v4.jsx)(_v49.Text, {
                    variant: "heading-xs",
                    color: "text-primary",
                    children: (0, _v53.translate)({
                      singular: "{RATE}/min",
                      replacements: {
                        RATE: _v55(_v19)
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
              }) : null, (0, _v4.jsxs)(_v13.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [(0, _v4.jsx)(_v49.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: (0, _v53.translate)({
                    singular: "Event duration",
                    dictionary: {
                      es: {
                        singular: "Duración del evento"
                      },
                      "de-DE": {
                        singular: "Dauer der Veranstaltung"
                      },
                      "fr-FR": {
                        singular: "Durée de l'événement"
                      },
                      "ja-JP": {
                        singular: "イベントの所要時間"
                      },
                      "ko-KR": {
                        singular: "이벤트 지속 시간"
                      },
                      "pt-BR": {
                        singular: "Duração do evento"
                      },
                      "zh-CN": {
                        singular: "活动时长"
                      }
                    }
                  })
                }), (0, _v4.jsx)(_v49.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (_v11 = Math.floor((_v10 = Math.ceil(_v14 / 60)) / 60), _v12 = _v10 % 60, _v11 > 0 && _v12 > 0 ? (0, _v53.translate)({
                    replacements: {
                      HOURS: _v11,
                      MINS: _v12
                    },
                    singular: "{HOURS} hr {MINS} mins",
                    dictionary: {
                      es: {
                        singular: "{HOURS} h {MINS} min"
                      },
                      "de-DE": {
                        singular: "{HOURS} Std. {MINS} Min."
                      },
                      "fr-FR": {
                        singular: "{HOURS} h {MINS} min"
                      },
                      "ja-JP": {
                        singular: "{HOURS}時間{MINS}分"
                      },
                      "ko-KR": {
                        singular: "{HOURS} 시간 {MINS} 분"
                      },
                      "pt-BR": {
                        singular: "{HOURS} h {MINS} min"
                      },
                      "zh-CN": {
                        singular: "{HOURS} 小时 {MINS} 分钟"
                      }
                    }
                  }) : _v11 > 0 ? (0, _v53.translate)({
                    replacements: {
                      HOURS: _v11
                    },
                    singular: "{HOURS} hr",
                    dictionary: {
                      es: {
                        singular: "{HOURS} h"
                      },
                      "de-DE": {
                        singular: "{HOURS} Std."
                      },
                      "fr-FR": {
                        singular: "{HOURS} h"
                      },
                      "ja-JP": {
                        singular: "{HOURS}時間"
                      },
                      "ko-KR": {
                        singular: "{HOURS} 시간"
                      },
                      "pt-BR": {
                        singular: "{HOURS} h"
                      },
                      "zh-CN": {
                        singular: "{HOURS} 小时"
                      }
                    }
                  }) : (0, _v53.translate)({
                    replacements: {
                      MINS: _v12
                    },
                    singular: "{MINS} mins",
                    dictionary: {
                      es: {
                        singular: "{MINS} min"
                      },
                      "de-DE": {
                        singular: "{MINS} Min."
                      },
                      "fr-FR": {
                        singular: "{MINS} min"
                      },
                      "ja-JP": {
                        singular: "{MINS}分"
                      },
                      "ko-KR": {
                        singular: "{MINS} 분"
                      },
                      "pt-BR": {
                        singular: "{MINS} min"
                      },
                      "zh-CN": {
                        singular: "{MINS} 分钟"
                      }
                    }
                  }))
                })]
              }), (0, _v4.jsxs)(_v13.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [(0, _v4.jsx)(_v49.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  children: (0, _v53.translate)({
                    singular: "Cost",
                    dictionary: {
                      es: {
                        singular: "Coste"
                      },
                      "de-DE": {
                        singular: "Kosten"
                      },
                      "fr-FR": {
                        singular: "Coût"
                      },
                      "ja-JP": {
                        singular: "費用"
                      },
                      "ko-KR": {
                        singular: "비용"
                      },
                      "pt-BR": {
                        singular: "Custo"
                      },
                      "zh-CN": {
                        singular: "费用"
                      }
                    }
                  })
                }), (0, _v4.jsxs)(_v13.Flex, {
                  alignItems: "center",
                  gap: (0, _v11.rem)(2),
                  children: [(0, _v4.jsx)(_v52.VimeoCoin, {
                    boxSize: 12,
                    color: "text-primary"
                  }), (0, _v4.jsx)(_v49.Text, {
                    variant: "heading-sm",
                    color: "text-primary",
                    children: _v21.toLocaleString()
                  })]
                })]
              })]
            }), (0, _v4.jsxs)(_v13.Flex, {
              alignItems: "center",
              justifyContent: "center",
              gap: (0, _v11.rem)(6),
              paddingX: (0, _v11.rem)(16),
              children: [(0, _v4.jsx)(_v52.VimeoCoin, {
                boxSize: 16,
                color: _v23 ? "status-caution-primary" : "text-tertiary"
              }), (0, _v4.jsx)(_v49.Text, {
                variant: "body-sm",
                color: _v23 ? "status-caution-primary" : "text-secondary",
                children: (0, _v53.translate)({
                  singular: "{AMOUNT} credits remaining",
                  replacements: {
                    AMOUNT: _v22.toLocaleString()
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
          }), _v23 ? (0, _v4.jsx)(_v50.Alert, {
            status: "warning",
            borderRadius: (0, _v11.rem)(8),
            children: (0, _v4.jsx)(_v51.AlertDescription, {
              children: (0, _v4.jsx)(_v49.Text, {
                variant: "body-sm",
                color: "text-primary",
                children: _v8 ? (0, _v53.translate)({
                  singular: "You now have 0 credits. The overage from this event will be charged to your default payment method.",
                  dictionary: {
                    es: {
                      singular: "Ahora tiene 0 créditos. El exceso de este evento se cargará a su método de pago predeterminado."
                    },
                    "de-DE": {
                      singular: "Sie haben jetzt 0 Guthaben. Die durch dieses Ereignis entstandenen Mehrkosten werden Ihrer Standard-Zahlungsmethode belastet."
                    },
                    "fr-FR": {
                      singular: "Vous avez maintenant 0 crédits. Le dépassement lié à cet événement sera facturé sur votre moyen de paiement par défaut."
                    },
                    "ja-JP": {
                      singular: "現在クレジット残高は0です. イベントで発生した超過分は既定の支払い方法に請求されます."
                    },
                    "ko-KR": {
                      singular: "현재 크레딧이 0개입니다. 이번 이용으로 발생한 초과분은 기본 결제 수단으로 청구됩니다."
                    },
                    "pt-BR": {
                      singular: "Você agora tem 0 créditos. O excedente deste evento será cobrado no seu método de pagamento padrão."
                    },
                    "zh-CN": {
                      singular: "您现在有 0 个积分。本次使用产生的超额部分将向您的默认付款方式收取费用。"
                    }
                  }
                }) : (0, _v53.translate)({
                  singular: "You now have 0 credits. Please reach out to your Account Manager to be able to keep using AI features.",
                  dictionary: {
                    es: {
                      singular: "Ahora tiene 0 créditos. Póngase en contacto con su gerente de cuenta para poder seguir usando las funciones de IA."
                    },
                    "de-DE": {
                      singular: "Sie haben jetzt 0 Credits. Bitte wenden Sie sich an Ihren Account Manager, um weiterhin KI-Funktionen nutzen zu können."
                    },
                    "fr-FR": {
                      singular: "Vous disposez désormais de 0 crédits. Veuillez contacter votre responsable de compte pour pouvoir continuer à utiliser les fonctionnalités d’IA."
                    },
                    "ja-JP": {
                      singular: "現在、クレジットは0件です。AI機能を引き続きご利用いただくには、アカウントマネージャーにご連絡ください。"
                    },
                    "ko-KR": {
                      singular: "현재 크레딧이 0입니다. AI 기능을 계속 사용하려면 계정 관리자에게 문의하십시오."
                    },
                    "pt-BR": {
                      singular: "Você agora tem 0 créditos. Por favor, entre em contato com seu Gerente de Conta para continuar usando os recursos de IA."
                    },
                    "zh-CN": {
                      singular: "您现在有 0 个可用积分。请联系您的客户经理，以继续使用 AI 功能。"
                    }
                  }
                })
              })
            })
          }) : null]
        }), (0, _v4.jsxs)(_v13.Flex, {
          justifyContent: "flex-end",
          gap: (0, _v11.rem)(12),
          paddingX: (0, _v11.rem)(24),
          paddingTop: (0, _v11.rem)(20),
          paddingBottom: (0, _v11.rem)(24),
          children: [(0, _v4.jsx)(_v12.Button, {
            variant: "secondary",
            onClick: _v9,
            children: (0, _v53.translate)({
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
          }), (0, _v4.jsx)(_v12.Button, {
            variant: "primary",
            onClick: _v9,
            children: (0, _v53.translate)({
              singular: "Done",
              dictionary: {
                es: {
                  singular: "Hecho"
                },
                "de-DE": {
                  singular: "Fertig"
                },
                "fr-FR": {
                  singular: "Terminé"
                },
                "ja-JP": {
                  singular: "完了"
                },
                "ko-KR": {
                  singular: "완료"
                },
                "pt-BR": {
                  singular: "Feito"
                },
                "zh-CN": {
                  singular: "已存档"
                }
              }
            })
          })]
        })]
      })]
    });
  }
  function _v57({
    id: _v0 = (0, _v40.createLiveDomName)("broadcaster-event-ended"),
    className: _v1 = (0, _v40.createLiveDomName)("broadcaster-event-ended"),
    composerSessionContext: {
      sessionInfo: {
        value: _v2
      },
      sessionId: _v3
    } = (0, _v9.useManager)(_v33.ComposerSessionManager),
    composerSessionStatusContext: {
      streamMode: _v4,
      startedAt: _v5,
      endedAt: _v6
    } = (0, _v9.useManager)(_v35.ComposerSessionStatusManager, ({
      streamMode: _v0,
      startedAt: _v1,
      endedAt: _v2
    }) => [_v0, _v1, _v2]),
    eventSettingsContext: {
      settings: {
        value: _v7
      }
    } = (0, _v9.useManager)(_v36.EventSettingsManager)
  }) {
    let _v8 = (0, _v34.useSessionOwnerId)(),
      {
        capabilities: _v9
      } = (0, _v22.useCapability)(["hasLiveAutoCcAiCredits", "hasLiveAutoTranslation"], _v8 || null),
      _v10 = !!_v9.hasLiveAutoCcAiCredits,
      _v11 = !!_v9.hasLiveAutoTranslation,
      _v12 = !(0, _v32.useIsSalesAssistedTier)(_v8),
      [_v13, _v14] = (0, _v10.useState)(!1),
      _v15 = _v11 && _v7?.autoCcTranslationEnabled && _v7?.autoCcTranslationLanguages ? _v7.autoCcTranslationLanguages.length : 0,
      _v16 = !!_v7?.unlimitedAutoCc,
      _v17 = _v10 && !_v16,
      _v18 = _v15 > 0,
      _v19 = !!(_v7?.autoCcEnabled && !_v13 && (_v17 || _v18)),
      {
        data: _v20
      } = (0, _v23.useGetUser)(() => _v8 && _v19 ? {
        select: ["aiCreditsQuota"],
        where: {
          userId: _v8
        }
      } : null, {
        refreshInterval: 0
      }),
      _v21 = _v20?.aiCreditsQuota?.remaining ?? 0,
      _v22 = !!(_v7?.disableAutoArchiving && _v4 !== _v6.EComposerStreamModeType.RECORD),
      {
        value: _v23
      } = _v31({
        connectionOrId: _v2?.metadata.connections.ingestStatus,
        period: _v22 ? null : _v25.liveApplicationConfig.EVENT.VIDEO_TRANSCODING_POLLING_INTERVAL
      }),
      _v24 = String(_v23?.archive?.clipId),
      _v25 = _v23?.archive?.status === _v29.EArchiveStatus.DONE,
      _v26 = _v4 === _v6.EComposerStreamModeType.RECORD,
      _v27 = _v2?.title ?? "Your event",
      [_v28] = (0, _v24.useEntityRegistrationCarriedFromEventToVod)(String(_v3)),
      _v29 = (0, _v10.useCallback)(() => {
        window.location.reload();
      }, []),
      _v30 = (0, _v10.useCallback)(() => {
        window.location.href = _v26.vimeoConfig.PATH.CLIP_SETTINGS_PAGE(_v24);
      }, [_v24]),
      _v31 = (0, _v10.useCallback)(() => {
        (0, _v38.openNewFocusedTab)(_v26.vimeoConfig.PATH.CLIP_VIEWER_PAGE(_v24));
      }, [_v24]),
      _v32 = (0, _v10.useCallback)(() => {
        (0, _v38.openNewFocusedTab)(_v26.vimeoConfig.PATH.CLIP_BROADCASTER_PAGE(_v24, {
          section: "form"
        }));
      }, [_v24]);
    return _v19 ? (0, _v4.jsx)(_v56, {
      startTime: _v5 ?? 0,
      endTime: _v6 ?? 0,
      creditsRemaining: _v21,
      translationLanguageCount: _v15,
      captionCreditsPerMinute: _v7?.autoCcEstimatedCreditsPerMinute,
      translationCreditsPerMinute: _v7?.autoCcTranslationsEstimatedCreditsPerMinute,
      unlimitedAutoCc: _v16,
      hasAiCreditsCcBilling: _v10,
      isSelfServe: _v12,
      onDismiss: () => _v14(!0)
    }) : _v22 ? (0, _v4.jsxs)(_v15.Modal, {
      id: _v0,
      isOpen: !0,
      onClose: _v29,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        padding: (0, _v11.rem)(16),
        width: (0, _v11.rem)(360),
        children: [(0, _v4.jsx)(_v13.Flex, {
          justifyContent: "space-between",
          flexWrap: "nowrap",
          children: (0, _v4.jsx)(_v14.Header, {
            id: (0, _v40.createLiveDomName)(_v0, "header"),
            className: (0, _v40.createLiveDomName)(_v1, "header"),
            color: "text-primary",
            size: "md",
            children: _v41.translations.hasStoppedStreaming(_v27)
          })
        }), (0, _v4.jsx)(_v13.Flex, {
          id: (0, _v40.createLiveDomName)(_v0, "controls"),
          className: (0, _v40.createLiveDomName)(_v1, "controls"),
          justifyContent: "flex-end",
          alignItems: "center",
          children: (0, _v4.jsx)(_v12.Button, {
            textTransform: "uppercase",
            onClick: _v29,
            children: _v41.translations.ok
          })
        })]
      })]
    }) : (0, _v4.jsxs)(_v15.Modal, {
      id: _v0,
      size: "md",
      isOpen: !0,
      onClose: _v37.CallablePlaceholder,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        display: "block",
        padding: (0, _v11.rem)(16),
        color: "text-primary",
        minWidth: (0, _v11.rem)(480),
        overflowY: "auto",
        children: [(0, _v4.jsxs)(_v13.Flex, {
          justifyContent: "space-between",
          alignItems: "flex-start",
          children: [(0, _v4.jsxs)(_v13.Flex, {
            direction: "column",
            gap: (0, _v11.rem)(8),
            children: [(0, _v4.jsx)(_v14.Header, {
              id: (0, _v40.createLiveDomName)(_v0, "header"),
              className: (0, _v40.createLiveDomName)(_v1, "header"),
              size: "md",
              children: _v26 ? _v41.translations.hasEnded(_v27) : _v41.translations.hasStoppedStreaming(_v27)
            }), (0, _v4.jsx)(_v18.Paragraph, {
              id: (0, _v40.createLiveDomName)(_v0, "you-recording"),
              className: (0, _v40.createLiveDomName)(_v1, "you-recording"),
              size: "md",
              children: _v26 ? _v41.translations.theRecording : _v41.translations.theRecordingOfYourEvent
            })]
          }), (0, _v4.jsx)(_v19.CloseButton, {
            id: (0, _v40.createLiveDomName)(_v0, "dismiss"),
            className: (0, _v40.createLiveDomName)(_v1, "dismiss"),
            "aria-label": "dismiss",
            variant: "tertiary",
            size: "sm",
            onClick: _v29
          })]
        }), (0, _v4.jsx)(_v48, {
          id: (0, _v40.createLiveDomName)(_v0, "thumbnail"),
          className: (0, _v40.createLiveDomName)(_v1, "thumbnail"),
          archiveStatus: _v23?.archive?.status,
          thumbnail: (0, _v39.getThumbnail)(_v2?.thumbnail.sizes),
          withLink: !0,
          onClick: _v31
        }), (0, _v4.jsxs)(_v13.Flex, {
          direction: "column",
          gap: (0, _v11.rem)(8),
          children: [(0, _v4.jsx)(_v44, {
            id: (0, _v40.createLiveDomName)(_v0, "customise-settings"),
            className: (0, _v40.createLiveDomName)(_v1, "customise-settings"),
            icon: (0, _v4.jsx)(_v21.EditPencil, {
              width: "100%",
              height: "100%"
            }),
            header: _v41.translations.editAndManageVideo,
            description: _v41.translations.viewRecording,
            isDisabled: !_v25,
            disabledTooltip: _v41.translations.editAndManageVideoUnavailable,
            onClick: _v30
          }), _v28 ? (0, _v4.jsx)(_v44, {
            id: (0, _v40.createLiveDomName)(_v0, "registration-settings"),
            className: (0, _v40.createLiveDomName)(_v1, "registration-settings"),
            icon: (0, _v4.jsx)(_v20.Registration, {
              width: "100%",
              height: "100%"
            }),
            header: _v41.translations.customizeRegistration,
            description: _v41.translations.customizeRegistrationDetails,
            isDisabled: !_v25,
            disabledTooltip: _v41.translations.editAndManageVideoUnavailable,
            onClick: _v32
          }) : null]
        })]
      })]
    });
  }
  var _v58 = _v0.i(0);
  function _v59({
    id: _v0 = (0, _v7.createDomName)("vpaas-broadcaster-event-ended"),
    className: _v1 = (0, _v7.createDomName)("vpaas-broadcaster-event-ended"),
    composerSessionContext: {
      sessionInfo: {
        value: _v2
      }
    } = (0, _v9.useManager)(_v33.ComposerSessionManager),
    composerSessionStatusContext: {
      streamMode: _v3
    } = (0, _v9.useManager)(_v35.ComposerSessionStatusManager, ({
      streamMode: _v0
    }) => [_v0])
  }) {
    let _v4 = _v3 === _v6.EComposerStreamModeType.RECORD,
      _v5 = _v2?.title ?? "Your event",
      _v6 = (0, _v10.useCallback)(() => {
        window.location.reload();
      }, []);
    return (0, _v4.jsxs)(_v15.Modal, {
      id: _v0,
      size: "md",
      isOpen: !0,
      returnFocusOnClose: !1,
      onClose: _v37.CallablePlaceholder,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        padding: 16,
        borderRadius: 8,
        gap: 10,
        children: [(0, _v4.jsxs)(_v13.Flex, {
          justifyContent: "space-between",
          alignItems: "flex-start",
          children: [(0, _v4.jsx)(_v14.Header, {
            size: "xl",
            id: (0, _v7.createDomName)(_v0, "header"),
            className: (0, _v7.createDomName)(_v1, "header"),
            children: (0, _v4.jsx)(_v49.Text, {
              variant: "heading-md",
              color: "text-primary",
              marginRight: (0, _v11.rem)(32),
              children: _v4 ? (0, _v58.T_HAS_ENDED)(_v5) : (0, _v58.T_HAS_STOPPED_STREAMING)(_v5)
            })
          }), (0, _v4.jsx)(_v19.CloseButton, {
            id: (0, _v7.createDomName)(_v0, "dismiss"),
            className: (0, _v7.createDomName)(_v1, "dismiss"),
            "aria-label": "dismiss",
            variant: "tertiary",
            size: "sm",
            onClick: _v6
          })]
        }), (0, _v4.jsx)(_v49.Text, {
          variant: "body-md",
          color: "text-primary",
          margin: `0 ${(0, _v11.rem)(32)} ${(0, _v11.rem)(10)} 0`,
          children: _v58.T_YOU_CAN_START_ANOTHER_STREAM
        }), (0, _v4.jsx)(_v13.Flex, {
          direction: "row",
          alignItems: "center",
          justifyContent: "end",
          gap: (0, _v11.rem)(10),
          children: (0, _v4.jsx)(_v12.Button, {
            size: "md",
            variant: "primary",
            onClick: _v6,
            children: _v58.T_OK.toUpperCase()
          })
        })]
      })]
    });
  }
  function _v60({
    id: _v0 = (0, _v7.createDomName)("live-broadcaster-venue-ended"),
    className: _v1 = (0, _v7.createDomName)("live-broadcaster-venue-ended"),
    composerSessionContext: {
      sessionInfo: {
        value: _v2
      }
    } = (0, _v9.useManager)(_v33.ComposerSessionManager),
    composerSessionStatusContext: {
      cloudSessionId: _v3
    } = (0, _v9.useManager)(_v35.ComposerSessionStatusManager)
  }) {
    let {
        value: _v4
      } = _v31({
        isClipIdRequired: !0,
        connectionOrId: _v2?.metadata.connections.ingestStatus,
        cloudSessionId: _v3,
        period: _v25.liveApplicationConfig.EVENT.VIDEO_TRANSCODING_POLLING_INTERVAL
      }),
      _v5 = _v4?.archive?.clipId,
      _v6 = _v4?.archive?.status,
      _v7 = (0, _v10.useMemo)(() => "string" == typeof _v2?.thumbnail ? (0, _v39.getThumbnailFromUrl)(_v2?.thumbnail) : (0, _v39.getThumbnail)(_v2?.thumbnail.sizes), [_v2]),
      _v8 = (0, _v10.useCallback)(() => {
        (0, _v38.openNewFocusedTab)(_v26.vimeoConfig.PATH.CLIP_VIEWER_PAGE(String(_v5)));
      }, [_v5]),
      _v9 = (0, _v10.useCallback)(() => {
        window.location.reload();
      }, []),
      _v10 = (0, _v10.useCallback)(() => {
        _v2 && (window.location.href = _v2.viewLink.uri);
      }, [_v2]);
    return (0, _v4.jsxs)(_v15.Modal, {
      id: _v0,
      size: "md",
      isOpen: !0,
      onClose: _v37.CallablePlaceholder,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        id: (0, _v7.createDomName)(_v0, "content"),
        className: (0, _v7.createDomName)(_v1, "content"),
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: (0, _v11.rem)(16),
        minWidth: (0, _v11.rem)(480),
        color: "text-primary",
        children: [(0, _v4.jsxs)(_v13.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v4.jsx)(_v14.Header, {
            id: (0, _v7.createDomName)(_v0, "header"),
            className: (0, _v7.createDomName)(_v1, "header"),
            size: "lg",
            children: _v41.translations.yourStreamHasStopped
          }), (0, _v4.jsx)(_v19.CloseButton, {
            id: (0, _v7.createDomName)(_v0, "dismiss"),
            className: (0, _v7.createDomName)(_v1, "dismiss"),
            "aria-label": "dismiss",
            variant: "tertiary",
            size: "sm",
            onClick: _v9
          })]
        }), (0, _v4.jsx)(_v48, {
          id: (0, _v7.createDomName)(_v0, "thumbnail"),
          className: (0, _v7.createDomName)(_v1, "thumbnail"),
          archiveStatus: _v6,
          thumbnail: _v7,
          withLink: !0,
          isDisabled: !_v5,
          onClick: _v8
        }), (0, _v4.jsx)(_v14.Header, {
          id: (0, _v7.createDomName)(_v0, "title"),
          className: (0, _v7.createDomName)(_v1, "title"),
          size: "sm",
          marginBottom: (0, _v11.rem)(8),
          children: _v2?.title
        }), (0, _v4.jsx)(_v18.Paragraph, {
          id: (0, _v7.createDomName)(_v0, "details"),
          className: (0, _v7.createDomName)(_v1, "details"),
          size: "md",
          marginBottom: (0, _v11.rem)(16),
          children: _v41.translations.yourStreamUploaded
        }), (0, _v4.jsxs)(_v13.Flex, {
          gap: (0, _v11.rem)(8),
          justifyContent: "flex-end",
          children: [(0, _v4.jsx)(_v12.Button, {
            id: (0, _v7.createDomName)(_v0, "close"),
            className: (0, _v7.createDomName)(_v1, "close"),
            variant: "secondary",
            onClick: _v9,
            children: _v41.translations.goLiveAgain
          }), (0, _v4.jsx)(_v12.Button, {
            id: (0, _v7.createDomName)(_v0, "return"),
            className: (0, _v7.createDomName)(_v1, "return"),
            variant: "primary",
            onClick: _v10,
            children: _v41.translations.returnToStage
          })]
        })]
      })]
    });
  }
  _v0.s(["LiveBroadcastEnded", 0, function () {
    let _v0 = (0, _v8.useIsVpaas)(),
      {
        initialState: {
          sessionType: _v1
        }
      } = (0, _v5.useLiveGlobals)();
    switch (_v1) {
      case _v6.EComposerSessionType.LIVE_EVENT:
        return _v0 ? (0, _v4.jsx)(_v59, {
          id: (0, _v7.createDomName)("vpaas-broadcaster-event-ended-modal")
        }) : (0, _v4.jsx)(_v57, {
          id: (0, _v7.createDomName)("broadcaster-event-ended-modal")
        });
      case _v6.EComposerSessionType.VENUE:
        return (0, _v4.jsx)(_v60, {
          id: (0, _v7.createDomName)("broadcaster-venue-ended-modal")
        });
      default:
        return null;
    }
  }], 0);
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  _v0.s(["usePendoAndNotificationsAlignment", 0, function () {
    let _v0 = (0, _v9.useManager)(_v62.NotificationManager),
      _v1 = (0, _v9.useManager)(_v63.UserPreferencesManager),
      _v2 = !!(_v1?.isEnterpriseTiersUpgradeModalActive || _v0?.confirmationNotification || _v0?.openedModalsIds.length);
    (0, _v10.useEffect)(() => {
      try {
        _v2 ? "function" == typeof window.pendo?.stopGuides && window.pendo.stopGuides() : "function" == typeof window.pendo?.startGuides && window.pendo.startGuides();
      } catch (_v0) {
        _v61.Logger.getGlobal().error("Failed to sync pendo and notifications:", _v0);
      }
    }, [_v2]);
  }], 0);
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  _v0.s(["LiveTiersUpgradeModal", 0, function ({
    id: _v0 = (0, _v40.createLiveDomName)("broadcaster-rtc-upgrade-modal"),
    isActive: _v1,
    onDismissUpgradeModal: _v2,
    iframeSrc: _v3
  }) {
    return (0, _v4.jsxs)(_v15.Modal, {
      id: _v0,
      size: "lg",
      isOpen: _v1,
      onClose: _v37.CallablePlaceholder,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "text-primary",
        background: "white",
        minWidth: (0, _v11.rem)(700),
        children: [(0, _v4.jsx)(_v64.IconButton, {
          className: "iris_modal-btn--close",
          "aria-label": "close",
          position: "absolute",
          variant: "tertiary",
          size: "sm",
          top: (0, _v11.rem)(8),
          right: (0, _v11.rem)(8),
          icon: (0, _v4.jsx)(_v65.CloseX, {
            color: "black"
          }),
          onClick: _v2
        }), (0, _v4.jsx)(_v46.Box, {
          src: _v3 ?? _v26.vimeoConfig.PATH.CONTACT_US_FORM_FROM_LIVE,
          width: "100%",
          minHeight: (0, _v11.rem)(770),
          height: (0, _v11.rem)(770),
          as: "iframe"
        })]
      })]
    });
  }], 0);
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  _v0.s(["LiveEncoderWarningModal", 0, function ({
    id: _v0 = (0, _v40.createLiveDomName)("encoder-warning-modal"),
    className: _v1 = (0, _v40.createLiveDomName)("encoder-warning-modal"),
    redirectLink: _v2
  }) {
    let _v3 = (0, _v10.useCallback)(() => {
      window.location.href = String(_v2);
    }, [_v2]);
    return (0, _v4.jsxs)(_v15.Modal, {
      id: _v0,
      isOpen: !0,
      onClose: _v37.CallablePlaceholder,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: (0, _v11.rem)(24),
        gap: (0, _v11.rem)(16),
        color: "text-primary",
        children: [(0, _v4.jsx)(_v14.Header, {
          id: (0, _v40.createLiveDomName)(_v0, "header"),
          className: (0, _v40.createLiveDomName)(_v1, "header"),
          size: "md",
          children: _v41.translations.youHaveAnotherActiveStream
        }), (0, _v4.jsx)(_v18.Paragraph, {
          id: (0, _v40.createLiveDomName)(_v0, "label"),
          className: (0, _v40.createLiveDomName)(_v1, "label"),
          size: "md",
          children: _v41.translations.alreadyStreamingToUrl
        }), _v2 ? (0, _v4.jsxs)(_v4.Fragment, {
          children: [(0, _v4.jsx)(_v66.Link, {
            id: (0, _v40.createLiveDomName)(_v0, "stream-link"),
            className: (0, _v40.createLiveDomName)(_v1, "stream-link"),
            href: _v2,
            variant: "minimal",
            color: "blue.500",
            cursor: "pointer",
            outline: "none",
            children: (0, _v67.transformUriToAbsolute)(_v2)
          }), (0, _v4.jsx)(_v13.Flex, {
            width: "100%",
            justifyContent: "flex-end",
            children: (0, _v4.jsx)(_v12.Button, {
              id: (0, _v40.createLiveDomName)(_v0, "active-stream-button"),
              className: (0, _v40.createLiveDomName)(_v1, "active-stream-button"),
              onClick: _v3,
              children: _v41.translations.openActiveStream
            })
          })]
        }) : null]
      })]
    });
  }], 0), _v0.i(0);
  var _v68 = _v0.i(0);
  _v0.s(["useUserPreferencesPendoSync", 0, function (_v0, _v1) {
    let _v2 = (0, _v9.useScope)();
    (0, _v10.useEffect)(() => {
      let _v0 = _v2.getInstanceOf(_v63.UserPreferencesManager);
      if (_v0 && _v0.isModuleActive) return _v0.log.info("Attaching handlers hook for pendo actions:", _v0.PENDO_LIVE_EVENT_HOOK_HANDLER), _v68.PendoClient.addHandler(_v0, _v0.PENDO_LIVE_EVENT_HOOK_HANDLER), () => {
        _v0.log.info("Detaching handlers hook for pendo actions:", _v0.PENDO_LIVE_EVENT_HOOK_HANDLER), _v68.PendoClient.removeHandler(_v0.PENDO_LIVE_EVENT_HOOK_HANDLER);
      };
    }, _v1);
  }], 0);
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  function _v72({
    id: _v0 = (0, _v7.createDomName)("simultaneous-stream-limit-notice"),
    className: _v1 = (0, _v7.createDomName)("simultaneous-stream-limit-notice"),
    composerSessionStatusContext: {
      isSimultaneousStreamLimitExceeded: _v2,
      liveComposerStatuses: {
        isSessionLive: _v3,
        isSessionUnknown: _v4
      }
    } = (0, _v9.useManager)(_v35.ComposerSessionStatusManager, ({
      isSimultaneousStreamLimitExceeded: _v0,
      ingestStatus: _v1
    }) => [_v0, _v1]),
    composerSessionContext: {
      sessionInfo: {
        value: _v5
      }
    } = (0, _v9.useManager)(_v33.ComposerSessionManager)
  }) {
    let _v6 = function () {
        let _v0 = (0, _v71.useOptionalViewer)();
        if (!_v0?.teamUser) return !0;
        switch (_v0.teamUser.permissionLevel) {
          case 1:
          case 2:
            return !0;
          default:
            return !1;
        }
      }(),
      _v7 = _v5?.liveQuota?.streams?.maximum ?? 0,
      _v8 = (0, _v8.useIsVpaas)(),
      _v9 = !_v8 && _v6,
      {
        open: _v10,
        upgradeModal: _v11
      } = (0, _v70.useSimultaneousStreamLimitUpgradeModal)({
        canOpen: _v9
      }),
      _v12 = !_v2 || !_v5?.liveQuota || _v4 || _v3,
      _v13 = (0, _v10.useCallback)(() => {
        _v10();
      }, [_v10]);
    return _v12 ? null : (0, _v4.jsxs)(_v69.Center, {
      id: _v0,
      className: _v1,
      maxHeight: (0, _v11.rem)(56),
      background: "upsell-secondary",
      padding: (0, _v11.rem)(12),
      gap: (0, _v11.rem)(12),
      color: "text-primary",
      children: [(0, _v4.jsx)(_v18.Paragraph, {
        id: (0, _v7.createDomName)(_v0, "label"),
        className: (0, _v7.createDomName)(_v1, "label"),
        size: "md",
        children: _v8 || !_v6 ? _v41.translations.simultaneousStreamLimitExceededContributor(_v7) : _v41.translations.simultaneousStreamLimitExceededNew(_v7)
      }), _v9 ? (0, _v4.jsx)(_v12.Button, {
        id: (0, _v7.createDomName)(_v0, "upsell"),
        className: (0, _v7.createDomName)(_v1, "upsell"),
        size: "sm",
        variant: "upsell",
        onClick: _v13,
        children: _v41.translations.contactUs
      }) : null, _v11]
    });
  }
  _v0.s(["LiveBroadcasterErrorNotification", 0, function ({
    id: _v0 = (0, _v40.createLiveDomName)("live-broadcaster-error-notification"),
    className: _v1 = (0, _v40.createLiveDomName)("live-broadcaster-error-notification"),
    margin: _v2 = "",
    composerSessionStatusContext: {
      liveComposerStatusGetters: _v3
    } = (0, _v9.useManager)(_v35.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0])
  }) {
    return _v3.isEnded() ? null : (0, _v4.jsx)(_v13.Flex, {
      direction: "column",
      margin: _v2,
      children: (0, _v4.jsx)(_v72, {
        id: (0, _v40.createLiveDomName)(_v0, "simultaneous-limit"),
        className: (0, _v40.createLiveDomName)(_v1, "simultaneous-limit")
      })
    });
  }], 0);
  var _v73 = _v0.i(0),
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
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0);
  function _v99({
    id: _v0 = (0, _v7.createDomName)("notification-modal"),
    isOpen: _v1,
    title: _v2,
    message: _v3,
    fileNames: _v4,
    footerText: _v5,
    closeButtonLabel: _v6,
    onClose: _v7
  }) {
    return (0, _v4.jsxs)(_v15.Modal, {
      id: _v0,
      isOpen: _v1,
      onClose: _v7,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        width: (0, _v11.rem)(368),
        children: [(0, _v4.jsx)(_v95.ModalHeader, {
          id: (0, _v7.createDomName)(_v0, "header"),
          paddingTop: (0, _v11.rem)(24),
          children: (0, _v4.jsx)(_v14.Header, {
            size: "md",
            children: _v2
          })
        }), (0, _v4.jsx)(_v96.ModalCloseButton, {}), (0, _v4.jsxs)(_v97.ModalBody, {
          children: [(0, _v4.jsx)(_v18.Paragraph, {
            size: "md",
            marginBottom: (0, _v11.rem)(8),
            children: _v3
          }), _v4?.map((_v0, _v1) => (0, _v4.jsx)(_v18.Paragraph, {
            size: "md",
            sx: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              position: "relative",
              paddingLeft: (0, _v11.rem)(20),
              "&:before": {
                content: '""',
                width: (0, _v11.rem)(3),
                height: (0, _v11.rem)(3),
                position: "absolute",
                left: (0, _v11.rem)(8),
                top: (0, _v11.rem)(8),
                borderRadius: "50%",
                background: "text-primary"
              }
            },
            children: _v0
          }, _v1)), _v5 && (0, _v4.jsx)(_v18.Paragraph, {
            size: "md",
            marginTop: (0, _v11.rem)(8),
            children: _v5
          })]
        }), (0, _v4.jsx)(_v98.ModalFooter, {
          paddingBottom: (0, _v11.rem)(24),
          children: (0, _v4.jsx)(_v12.Button, {
            id: (0, _v7.createDomName)(_v0, "close-button"),
            variant: "primary",
            onClick: _v7,
            children: _v6
          })
        })]
      })]
    });
  }
  _v0.s(["NotificationModal", 0, _v99], 0);
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  function _v104({
    id: _v0,
    className: _v1 = (0, _v40.createLiveDomName)("go-live-button-dd"),
    isActive: _v2,
    menu: _v3,
    margin: _v4,
    children: _v5,
    onClickOutside: _v6
  }) {
    let _v7 = (0, _v10.useRef)(null);
    return (0, _v103.default)(_v7, _v6, null, [_v2]), (0, _v4.jsxs)(_v13.Flex, {
      ref: _v7,
      id: _v0,
      className: _v1,
      position: "relative",
      margin: _v4,
      onClick: _v6,
      children: [_v5, _v2 ? (0, _v4.jsx)(_v13.Flex, {
        className: (0, _v40.createLiveDomName)(_v1, "menu"),
        position: "absolute",
        top: (0, _v11.rem)(56),
        right: 0,
        width: "max-content",
        zIndex: 0,
        background: "background",
        borderRadius: (0, _v11.rem)(12),
        children: (0, _v4.jsx)(_v13.Flex, {
          className: (0, _v40.createLiveDomName)(_v1, "menu-content"),
          sx: {
            "@keyframes fadeIn": {
              "0%": {
                transform: `translateY(${(0, _v11.rem)(-4)}) scale(0.98)`,
                opacity: 0
              },
              "100%": {
                transform: "translateY(0) scale(1)",
                opacity: 1
              }
            },
            animation: "fadeIn 150ms ease-in-out"
          },
          direction: "column",
          padding: `${(0, _v11.rem)(12)} ${(0, _v11.rem)(8)} ${(0, _v11.rem)(8)} ${(0, _v11.rem)(8)}`,
          minWidth: (0, _v11.rem)(360),
          border: "1px solid",
          gap: (0, _v11.rem)(8),
          borderColor: "stroke",
          backgroundColor: "fill-blur",
          borderRadius: "md",
          children: _v3
        })
      }) : null]
    });
  }
  var _v105 = _v0.i(0);
  function _v106({
    className: _v0 = (0, _v40.createLiveDomName)("live-button-dd-item"),
    isActive: _v1,
    title: _v2,
    description: _v3,
    onClick: _v4,
    icon: _v5
  }) {
    return (0, _v4.jsxs)(_v13.Flex, {
      className: _v0,
      role: "button",
      onClick: _v1 ? void 0 : _v4,
      gap: (0, _v11.rem)(10),
      alignItems: "center",
      cursor: "pointer",
      position: "relative",
      backgroundColor: _v1 ? "fill-component-hover" : void 0,
      _hover: {
        backgroundColor: "fill-component-hover"
      },
      padding: `${(0, _v11.rem)(8)} ${(0, _v11.rem)(12)}`,
      borderRadius: "button",
      children: [_v5, (0, _v4.jsxs)(_v13.Flex, {
        direction: "column",
        gap: (0, _v11.rem)(4),
        paddingRight: (0, _v11.rem)(38),
        children: [(0, _v4.jsx)(_v49.Text, {
          className: (0, _v40.createLiveDomName)(_v0, "label"),
          variant: "heading-xs",
          color: "text-primary",
          children: _v2
        }), _v3 ? (0, _v4.jsx)(_v49.Text, {
          className: (0, _v40.createLiveDomName)(_v0, "detail"),
          variant: "body-md",
          color: "text-secondary",
          children: _v3
        }) : null]
      }), _v1 ? (0, _v4.jsx)(_v105.Checkmark, {
        className: (0, _v40.createLiveDomName)(_v0, "checkmark"),
        position: "absolute",
        boxSize: "sm",
        maxWidth: (0, _v11.rem)(20),
        maxHeight: (0, _v11.rem)(20),
        right: (0, _v11.rem)(8),
        top: "50%",
        transform: "translateY(-50%)"
      }) : null]
    });
  }
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0);
  function _v117({
    sceneContext: {
      scenes: _v0,
      scenesOrder: _v1,
      isHydrated: _v2
    } = (0, _v9.useManager)(_v116.SceneManager) || {}
  } = {}) {
    return (0, _v10.useMemo)(() => _v2 ? (0, _v115.pickScheduledScenesList)((0, _v115.pickSortedScenesList)(_v0, _v1)).some(_v0 => (0, _v115.isSceneValidForScheduledPlayback)(_v0)) : null, [_v0, _v1, _v2]);
  }
  _v0.s(["useIsValidScheduledEvent", 0, _v117], 0);
  var _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0);
  function _v122({
    isOpen: _v0,
    onClose: _v1,
    title: _v2,
    description: _v3,
    okText: _v4,
    onOkClick: _v5,
    isOkButtonLoading: _v6
  }) {
    let _v7 = (0, _v10.useCallback)(_v0 => {
      _v5(_v0), _v1();
    }, [_v5, _v1]);
    return (0, _v4.jsxs)(_v15.Modal, {
      size: "sm",
      isOpen: _v0,
      returnFocusOnClose: !1,
      onClose: _v1,
      children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
        padding: 16,
        borderRadius: 8,
        gap: 10,
        children: [(0, _v4.jsx)(_v49.Text, {
          variant: "heading-md",
          color: "text-primary",
          marginRight: (0, _v11.rem)(32),
          children: _v2
        }), _v3 ? (0, _v4.jsx)(_v49.Text, {
          variant: "body-md",
          color: "text-primary",
          margin: `0 ${(0, _v11.rem)(32)} ${(0, _v11.rem)(10)} 0`,
          children: _v3
        }) : null, (0, _v4.jsxs)(_v13.Flex, {
          direction: "row",
          alignItems: "center",
          justifyContent: "end",
          gap: (0, _v11.rem)(10),
          children: [(0, _v4.jsx)(_v12.Button, {
            variant: "secondary",
            size: "sm",
            onClick: _v1,
            children: _v58.T_CANCEL
          }), (0, _v4.jsx)(_v12.Button, {
            backgroundColor: _v82.LIVE_LAYOUT_COLOR,
            _hover: {
              bg: _v82.LIVE_LAYOUT_COLOR
            },
            color: "white",
            size: "sm",
            isLoading: _v6,
            onClick: _v7,
            children: _v4
          })]
        })]
      })]
    });
  }
  function _v123({
    id: _v0 = (0, _v40.createLiveDomName)("advanced-button"),
    className: _v1 = (0, _v40.createLiveDomName)("advanced-button"),
    composerSessionStatusContext: _v2 = (0, _v9.useManager)(_v35.ComposerSessionStatusManager),
    composerSessionContext: _v3 = (0, _v9.useManager)(_v33.ComposerSessionManager),
    userPreferencesContext: _v4 = (0, _v9.useManager)(_v63.UserPreferencesManager),
    composerSettingsContext: _v5 = (0, _v9.useManager)(_v100.ComposerSettingsManager) || {},
    eventSettingsContext: _v6 = (0, _v9.useManager)(_v36.EventSettingsManager)
  }) {
    let {
        trackLiveStreamProductionModeChanged: _v7
      } = (0, _v83.useLiveStreamBroadcasterTracking)(),
      [_v8, _v9] = (0, _v10.useState)(!1),
      _v10 = (0, _v9.useScope)(),
      {
        initialState: _v11
      } = (0, _v5.useLiveGlobals)(),
      {
        isOpen: _v12,
        onOpen: _v13,
        onClose: _v14
      } = (0, _v87.useDisclosure)(),
      {
        colorMode: _v15
      } = (0, _v88.useColorMode)(),
      _v16 = "dark" === _v15,
      {
        streamMode: _v17,
        liveComposerStatusActions: {
          setStreamMode: _v18
        },
        liveComposerStatusGetters: _v19
      } = _v2,
      {
        settings: {
          value: _v20
        },
        actions: _v21
      } = _v6,
      {
        timeToStart: _v22,
        startsAt: _v23,
        startsAtDateLabel: _v24,
        isStartingSoon: _v25,
        isStartTimePassed: _v26,
        isStartTimePassedOver: _v27
      } = function ({
        composerSessionStatusContext: {
          liveComposerStatusGetters: _v0,
          streamMode: _v1,
          scheduledStartTime: _v2
        },
        startsSoonMinutesThreshold: _v3 = 15,
        startsSoonUpdatePeriod: _v4 = 0,
        genericUpdatePeriod: _v5 = 0
      }) {
        let _v6 = (0, _v120.useForceUpdate)(),
          {
            locale: _v7
          } = (0, _v27.useGctlConfig)(),
          _v8 = (0, _v10.useMemo)(() => _v2 ? _v119.DateTime.fromISO(_v2).toLocal() : null, [_v2]),
          _v9 = (0, _v10.useMemo)(() => _v8 || null, [_v8]),
          _v10 = _v9 ? _v9.valueOf() - (0, _v121.getAbsoluteNow)() : null,
          _v11 = !!(_v10 && _v10 < 0 && _v10 > _v25.liveApplicationConfig.TIMING.MAXIMAL_EXPECTED_INGEST_START_DELAY),
          _v12 = !!(_v10 && _v10 < _v25.liveApplicationConfig.TIMING.MAXIMAL_EXPECTED_INGEST_START_DELAY),
          _v13 = (0, _v10.useMemo)(() => _v8 && !_v12 ? new Intl.DateTimeFormat(_v7 ?? navigator.language, {
            month: "long",
            year: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }).format(_v8.valueOf()) : _v41.translations.unscheduled, [_v12, _v8, _v7]),
          _v14 = _v9 ? _v9.diffNow(["days", "hours", "minutes"]) : null,
          _v15 = _v14 && _v14.as("minutes"),
          _v16 = !!(_v1 === _v6.EComposerStreamModeType.SIMULIVE && _v15 && _v15 <= _v3),
          _v17 = !!(_v16 || _v15 && _v15 <= 1.1 * _v3);
        return (0, _v30.useInterval)(!!(_v0.isPreparing() && _v1 === _v6.EComposerStreamModeType.SIMULIVE && null !== _v2), _v6, {
          period: _v17 ? _v4 : _v5
        }), {
          isStartTimePassed: !_v12 && _v11,
          isStartingSoon: _v16,
          startsAt: _v9,
          startsAtDateLabel: _v13,
          timeToStart: _v14,
          isStartTimePassedOver: _v12
        };
      }({
        composerSessionStatusContext: _v2
      }),
      _v28 = (0, _v10.useCallback)(_v0 => {
        _v0.stopPropagation(), _v9(_v0 => !_v0);
      }, []),
      _v29 = (0, _v10.useCallback)(() => {
        _v9(!1);
      }, []),
      _v30 = (0, _v10.useCallback)(() => {
        _v21.updateLiveEventSettings({
          preferredStreamMethod: _v29.EEventStreamingMethodVariant.Browser
        }, _v36.EventSettingsManager.EVENT_SETTINGS_PRODUCTION_FIELDS), window.location.assign(_v26.vimeoConfig.PATH.BROADCASTER_PAGE(_v11.sessionType, _v11.sessionId));
      }, [_v21, _v11.sessionType, _v11.sessionId]),
      _v31 = _v11.sessionApplicationType === _v6.EComposerApplicationType.RTMP,
      _v32 = _v17 === _v6.EComposerStreamModeType.LIVE && !_v31,
      _v33 = _v17 === _v6.EComposerStreamModeType.SIMULIVE && !_v31,
      _v34 = _v17 === _v6.EComposerStreamModeType.RECORD && !_v31,
      _v35 = (0, _v10.useCallback)(() => {
        _v7({
          liveStreamProductionMode: _v20?.preferredStreamMethod === _v29.EEventStreamingMethodVariant.Encoder ? "external_encoder" : "stream_from_browser"
        }), _v18(_v6.EComposerStreamModeType.LIVE), _v31 && _v30(), _v9(!1);
      }, [_v20?.preferredStreamMethod, _v31, _v30, _v18, _v7]),
      _v36 = (0, _v10.useCallback)(() => {
        _v7({
          liveStreamProductionMode: "prerecorded_event"
        }), _v18(_v6.EComposerStreamModeType.SIMULIVE), _v31 && _v30(), _v9(!1);
      }, [_v31, _v30, _v18, _v7]),
      _v37 = (0, _v10.useCallback)(() => {
        _v7({
          liveStreamProductionMode: "recording_only"
        }), _v18(_v6.EComposerStreamModeType.RECORD), _v31 && _v30(), _v9(!1);
      }, [_v18, _v30, _v31, _v7]),
      {
        isButtonLoading: _v38,
        isButtonDisabled: _v39,
        buttonTooltipLabel: _v40,
        buttonDomId: _v41,
        buttonHasDropdown: _v42,
        buttonLabel: _v43,
        buttonFormat: _v44,
        buttonBackgroundColor: _v45,
        buttonTextColor: _v46,
        onButtonClick: _v47,
        isActive: _v48,
        leftIcon: _v49,
        showStopAlertModal: _v50,
        minTextWidth: _v51
      } = function ({
        composerSettingsContext: {
          recordingOffset: _v0,
          recordingStartedAt: _v1,
          isRecordingPaused: _v2
        },
        composerSessionContext: {
          sessionApplicationType: _v3,
          sessionType: _v4,
          permissions: _v5,
          sessionInfo: {
            value: _v6
          }
        },
        composerSessionStatusContext: {
          ingestStatus: _v7,
          streamMode: _v8,
          isProvisionUpdating: _v9,
          isProvisionStarting: _v10,
          isSimultaneousStreamLimitExceeded: _v11,
          isDurationStreamLimitExceeded: _v12,
          isProvisionLimitReached: _v13,
          liveComposerStatusActions: _v14,
          liveComposerStatuses: {
            isRtmpMode: _v15,
            isSessionLive: _v16,
            isSessionEnded: _v17,
            isSessionUnavailable: _v18,
            isSessionPreparing: _v19,
            isSessionRequested: _v20,
            isSessionRecordStarted: _v21
          },
          recordState: _v22,
          startedAt: _v23,
          endedAt: _v24
        },
        isStartingSoon: _v25,
        timeToStart: _v26,
        startsAtDateLabel: _v27,
        startsAt: _v28,
        onToggleDropDown: _v29,
        isStartTimePassed: _v30,
        isStartTimePassedOver: _v31,
        onLiveTrialBlocked: _v32,
        eventSettingsContext: {
          settings: _v33,
          actions: {
            forcedUpdate: _v34
          }
        } = (0, _v9.useManager)(_v36.EventSettingsManager)
      }) {
        let _v35 = (0, _v9.useManager)(_v112.EventAudioTracksManager),
          _v36 = (0, _v9.useScope)(),
          _v37 = (0, _v8.useIsVpaas)(),
          {
            trackLiveStreamCustomKeywordUse: _v38,
            trackLiveStreamGoLiveClicked: _v39
          } = (0, _v83.useLiveStreamBroadcasterTracking)(),
          {
            trackLiveTrialBlocked: _v40
          } = (0, _v114.useLiveEventsTracking)(),
          _v41 = (0, _v113.useIsLiveTrialBlocked)(),
          _v42 = _v3 === _v6.EComposerApplicationType.BROADCASTER,
          _v43 = _v3 === _v6.EComposerApplicationType.RTMP,
          _v44 = _v4 === _v6.EComposerSessionType.VENUE,
          _v45 = _v117(),
          _v46 = _v8 === _v6.EComposerStreamModeType.SIMULIVE,
          _v47 = _v8 === _v6.EComposerStreamModeType.RECORD,
          _v48 = _v7 === _v29.EIngestStatus.UNKNOWN && !_v15,
          _v49 = _v33.value?.status === _v29.ENTITY_STATUS.ENDED,
          _v50 = !_v33.isLoading && !!(_v33.value?.app?.uri && _v26.vimeoConfig.STREAMYARD_APP_URIS.includes(_v33.value.app.uri)),
          _v51 = _v6?.liveQuota?.streams.maximum ?? -1,
          _v52 = _v37 ? _v41.translations.simultaneousStreamLimitExceededButtonWarningVpaas(_v51) : _v41.translations.simultaneousStreamLimitExceededButtonWarning(_v51),
          _v53 = (0, _v111.useDurationTimer)({
            recordingOffset: _v0,
            recordingStartedAt: _v1,
            isRecordingPaused: _v2,
            isRecordMode: _v47,
            startedAt: _v23,
            endedAt: _v24,
            isRTMPPage: _v43
          }),
          _v54 = _v48 || _v10 || !!_v16 && _v9 || !!_v43 && _v20,
          _v55 = (0, _v34.useSessionOwnerId)(),
          {
            capabilities: _v56
          } = (0, _v22.useCapability)(["hasLiveAutoCcAiCredits", "hasLiveAutoTranslation", "hasAdminForcedPreset", "hasEntitlementAiCredits"], _v55 || null),
          _v57 = !!_v56.hasLiveAutoCcAiCredits,
          _v58 = !!_v56.hasLiveAutoTranslation,
          _v59 = !!_v56.hasAdminForcedPreset,
          _v60 = !!_v56.hasEntitlementAiCredits,
          _v61 = !(0, _v32.useIsSalesAssistedTier)(_v55),
          {
            data: _v62
          } = (0, _v110.useGetUserAiCreditsBillingInfo)(() => _v55 && _v61 ? {
            select: ["hasDefaultPaymentMethod"],
            where: {
              userId: String(_v55)
            }
          } : null),
          _v63 = !!_v62?.hasDefaultPaymentMethod,
          _v64 = !!(_v33.value?.autoCcEnabled && !_v33.value?.autoCcLanguage),
          _v65 = _v35?.eventLanguages?.value?.secondary?.length ?? 0,
          _v66 = !!(_v35?.isInitialized && _v35?.eventLanguages?.isLoading),
          _v67 = !!((_v33.value?.autoCcTranslationEnabled || _v65 > 0 || _v66) && !_v33.value?.dvr),
          _v68 = _v57 || _v58,
          {
            data: _v69
          } = (0, _v23.useGetUser)(() => _v55 && _v68 ? {
            select: ["aiCreditsQuota"],
            where: {
              userId: _v55
            }
          } : null),
          _v70 = _v69?.aiCreditsQuota?.remaining ?? 0,
          _v71 = _v58 && _v33.value?.autoCcTranslationEnabled && _v33.value?.autoCcTranslationLanguages ? _v33.value.autoCcTranslationLanguages.length : 0,
          _v72 = (0, _v54.getEstimatedLiveCreditRates)(_v33.value?.autoCcEstimatedCreditsPerMinute, _v33.value?.autoCcTranslationsEstimatedCreditsPerMinute, _v71),
          _v73 = Math.floor((_v57 && !_v33.value?.unlimitedAutoCc ? _v72.captions : 0) + (_v71 > 0 ? _v72.translations : 0)),
          _v74 = !!(!_v61 && _v60 && _v33.value?.autoCcEnabled && _v73 > 0 && _v70 < _v73),
          _v75 = _v33.value?.hasForcedLeadCaptureForm === void 0 || !!_v33.value?.hasForcedLeadCaptureForm,
          _v76 = !!(_v57 && _v61 && _v33.value?.autoCcEnabled && !_v63),
          _v77 = !_v5.canStream || _v54 || _v9 || _v17 || _v20 || _v49 || _v15 && _v42 || _v18 && _v43 || _v50 && !_v16 || _v11 && !_v16 || _v12 && !_v16 || _v13 && !_v16 || _v64 && !_v16 || _v74 && !_v16 || _v59 && !_v75 && !_v16 || _v76 && !_v16 || _v67 && !_v16,
          _v78 = !_v50 && !(_v54 || _v44 || _v15 && _v43) && _v19 && !_v37,
          _v79 = _v6?.settingsLink?.uri,
          _v80 = _v48 ? "secondary" : "primary",
          _v81 = (0, _v81.inline)(() => {
            if (_v54 || _v16) ;else if (_v11) return _v52;else if (_v12) return _v41.translations.noStreamTimeRemaining;else if (_v13) return _v41.translations.tooManyEventsCreated;else if (_v18 && _v43 && !_v50) return _v41.translations.goLiveFromYourEncoder;else if (_v64) return _v41.translations.autoCCLanguageRequired;else if (_v76) return _v41.translations.missingPaymentMethodForCaptions;else if (_v59 && !_v75) return _v41.translations.registrationFormRequired;else if (_v74) return _v41.translations.insufficientAiCreditsForCaptions;else if (_v67) return _v41.translations.dvrRequiredForLanguageFeatures;else if (_v50) return _v41.translations.goLiveFromStreamyard;
            return "";
          }),
          _v82 = (0, _v10.useCallback)(async () => {
            if (_v41) {
              _v40({
                blockPoint: "go_live"
              }), _v32();
              return;
            }
            if (_v5.canStream && _v8 === _v6.EComposerStreamModeType.LIVE) {
              _v42 && _v39();
              let _v0 = _v33.value?.autoCcKeywords;
              if (_v0) {
                let _v0 = _v0.split(",").filter(_v0 => "" !== _v0.trim());
                _v0.length > 0 && _v38({
                  liveStreamCustomKeywordCount: _v0.length
                });
              }
              await _v34(["autoCcEstimatedCreditsPerMinute", "autoCcTranslationsEstimatedCreditsPerMinute"]), _v14.startStream();
            }
          }, [_v41, _v42, _v14, _v32, _v5.canStream, _v34, _v33.value?.autoCcKeywords, _v8, _v38, _v39, _v40]),
          _v83 = (0, _v10.useCallback)(async () => {
            if (_v41) {
              _v40({
                blockPoint: "go_live"
              }), _v32();
              return;
            }
            _v5.canUseRecordMode && _v47 && (await _v34(["autoCcEstimatedCreditsPerMinute", "autoCcTranslationsEstimatedCreditsPerMinute"]), await _v14.startStream(), _v14.setRecordState(_v6.ERecordState.PLAYING));
          }, [_v41, _v14, _v32, _v5.canUseRecordMode, _v34, _v47, _v40]),
          _v84 = (0, _v10.useCallback)(async () => {
            _v5.canUseRecordMode && _v47 && (await _v14.endStream(), _v14.setRecordState(_v6.ERecordState.NOT_ACTIVE));
          }, [_v14, _v5.canUseRecordMode, _v47]),
          _v85 = (0, _v10.useCallback)(() => {
            _v5.canStream ? _v14.endStream() : _v61.Logger.getGlobal().warn("Tried to stop stream when cannot stream:", _v5.canStream);
          }, [_v14, _v5.canStream]),
          _v86 = (0, _v10.useCallback)(async () => {
            _v79 ? (_v61.Logger.getGlobal().info("Redirect to specify start time:", _v79), _v36.emitSignal({
              type: _v101.ELiveSignal.RIGHT_PANEL_TAB_CHANGE_REQUEST,
              data: _v77.ERightPanelId.EVENT_SETTINGS
            }), await (0, _v86.nextAsyncQueue)(), _v36.emitSignal({
              type: _v101.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST,
              data: _v118.EAccordionItemId.SCHEDULE
            })) : _v61.Logger.getGlobal().info("Tried to open link, but it is not set:", _v79);
          }, [_v79, _v36]);
        if (_v16 && (!_v47 || _v43)) return {
          isButtonLoading: _v54,
          buttonTooltipLabel: _v81,
          isButtonDisabled: _v77,
          buttonSettingsLink: _v79,
          buttonHasDropdown: !1,
          buttonBackgroundColor: _v82.LIVE_LAYOUT_COLOR,
          buttonIsScheduleEnabled: !1,
          buttonDomId: (0, _v7.createDomName)("live-end-control"),
          buttonLabel: _v53,
          leftIcon: (0, _v4.jsx)(_v109.StopFilled, {
            color: "white"
          }),
          buttonFormat: "negative",
          buttonTextColor: "white",
          onButtonClick: _v85,
          showStopAlertModal: !0,
          minTextWidth: (0, _v11.rem)(45)
        };
        if (_v17) return {
          isButtonLoading: _v54,
          isButtonDisabled: !0,
          buttonSettingsLink: _v79,
          buttonTooltipLabel: _v81,
          buttonIsScheduleEnabled: !1,
          buttonHasDropdown: !1,
          buttonDomId: (0, _v7.createDomName)("live-ended-control"),
          buttonLabel: _v41.translations.ended,
          buttonFormat: "primary",
          buttonTextColor: void 0,
          onButtonClick: _v37.CallablePlaceholder,
          showStopAlertModal: !1,
          minTextWidth: void 0
        };
        if (_v46 && _v42) {
          let _v0 = !!(_v25 && _v26 && _v45 && !_v31),
            _v1 = _v0 && _v26 ? _v41.translations.startsInTime(_v26.toFormat("mm:ss")) : _v28 && !_v31 ? _v41.translations.startsAtDate(_v27) : _v27,
            _v2 = (0, _v81.inline)(() => _v0 ? (0, _v4.jsx)(_v107.Clock, {
              className: (0, _v7.createDomName)("live-clock-icon"),
              fill: "white"
            }) : _v45 ? null : (0, _v4.jsx)(_v108.InfoCircleFilled, {
              className: (0, _v7.createDomName)("live-warning-icon"),
              color: _v82.LIVE_LAYOUT_COLOR
            }));
          return {
            isButtonLoading: !!_v30 || null === _v45 || _v54,
            isButtonDisabled: _v77,
            buttonSettingsLink: _v79,
            buttonTooltipLabel: _v81,
            buttonIsScheduleEnabled: _v46,
            buttonHasDropdown: !_v30 && _v78,
            buttonDomId: (0, _v7.createDomName)("live-schedule-control"),
            buttonLabel: _v1,
            leftIcon: _v2,
            buttonFormat: _v80,
            isActive: !1,
            buttonTextColor: "text-button-inverted",
            onButtonClick: _v28 ? _v29 : _v86,
            showStopAlertModal: !1,
            minTextWidth: void 0
          };
        }
        return _v47 && _v42 ? {
          isButtonLoading: _v54,
          isButtonDisabled: _v77,
          buttonBackgroundColor: _v82.LIVE_LAYOUT_COLOR,
          buttonSettingsLink: _v79,
          buttonTooltipLabel: _v81,
          buttonIsScheduleEnabled: _v46,
          buttonHasDropdown: _v22 !== _v6.ERecordState.PLAYING && _v78,
          buttonDomId: (0, _v7.createDomName)("live-record-control"),
          buttonLabel: _v21 ? _v53 : _v41.translations.startRecording,
          leftIcon: _v21 ? (0, _v4.jsx)(_v109.StopFilled, {
            color: "white"
          }) : void 0,
          buttonFormat: "negative",
          isActive: !1,
          buttonTextColor: "white",
          onButtonClick: _v21 ? _v84 : _v83,
          showStopAlertModal: _v21,
          minTextWidth: _v21 ? (0, _v11.rem)(45) : void 0
        } : {
          isButtonLoading: _v54,
          isButtonDisabled: _v77,
          buttonSettingsLink: _v79,
          buttonIsScheduleEnabled: _v46,
          buttonTooltipLabel: _v81,
          buttonHasDropdown: _v78,
          buttonDomId: (0, _v7.createDomName)("live-start-control"),
          buttonLabel: _v41.translations.goLive,
          buttonStatus: _v48 ? "neutral" : void 0,
          buttonFormat: _v80,
          buttonTextColor: "text-button-inverted",
          onButtonClick: _v82,
          showStopAlertModal: !1,
          minTextWidth: void 0
        };
      }({
        composerSessionContext: _v3,
        composerSessionStatusContext: _v2,
        userPreferencesContext: _v4,
        composerSettingsContext: _v5,
        timeToStart: _v22,
        isStartTimePassed: _v26,
        startsAt: _v23,
        startsAtDateLabel: _v24,
        isStartingSoon: _v25,
        onToggleDropDown: _v28,
        isStartTimePassedOver: _v27,
        onLiveTrialBlocked: () => _v53(!0)
      }),
      [_v52, _v53] = (0, _v10.useState)(!1),
      _v54 = (0, _v10.useCallback)(_v0 => {
        _v50 ? _v13() : _v47(_v0);
      }, [_v13, _v50, _v47]),
      _v55 = (0, _v10.useCallback)(_v0 => {
        _v14(), _v47(_v0);
      }, [_v14, _v47]),
      _v56 = (0, _v10.useCallback)(() => {
        _v18(_v6.EComposerStreamModeType.LIVE), _v21.updateLiveEventSettings({
          preferredStreamMethod: _v29.EEventStreamingMethodVariant.Encoder
        }, _v36.EventSettingsManager.EVENT_SETTINGS_PRODUCTION_FIELDS), _v7({
          liveStreamProductionMode: "external_encoder"
        }), window.location.assign(_v26.vimeoConfig.PATH.RTMP_PAGE(_v11.sessionType, _v11.sessionId));
      }, [_v18, _v21, _v11.sessionType, _v11.sessionId, _v7]),
      _v57 = (0, _v10.useCallback)(async _v0 => {
        (0, _v102.stopEventPropagationPreventDefault)(_v0), _v10.emitSignal({
          type: _v101.ELiveSignal.RIGHT_PANEL_TAB_CHANGE_REQUEST,
          data: _v77.ERightPanelId.EVENT_SETTINGS
        }), await (0, _v86.nextAsyncQueue)(), _v10.emitSignal({
          type: _v101.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST,
          data: _v118.EAccordionItemId.SCHEDULE
        }), _v9(!1);
      }, [_v10]),
      _v58 = (0, _v4.jsxs)(_v13.Flex, {
        id: _v0,
        className: _v1,
        position: "relative",
        children: [(0, _v4.jsx)(_v122, {
          isOpen: _v12 && !_v19.isEnded(),
          okText: _v34 ? _v41.translations.stop : _v41.translations.endEvent,
          title: _v34 ? _v41.translations.stopRecordingAlertTitle : _v41.translations.endEvent,
          description: _v34 ? null : _v41.translations.thisWillStopStream,
          onOkClick: _v55,
          onClose: _v14
        }), (0, _v4.jsx)(_v99, {
          isOpen: _v52,
          title: _v41.translations.liveTrialBlockTitle,
          message: _v41.translations.liveTrialBlockMessage,
          closeButtonLabel: _v41.translations.liveTrialBlockButton,
          onClose: () => _v53(!1)
        }), (0, _v4.jsx)(_v94.BokehTooltip, {
          isDisabled: !_v40,
          label: _v40,
          placement: "bottom",
          maxWidth: (0, _v11.rem)(300),
          children: (0, _v4.jsx)(_v12.Button, {
            id: _v41,
            className: _v41,
            isDisabled: _v39,
            isLoading: _v38,
            size: "md",
            isActive: _v48,
            zIndex: 2,
            textColor: _v46,
            backgroundColor: _v45,
            variant: _v44,
            sx: {
              "&:active": {
                backgroundColor: _v45
              },
              "&:hover": {
                backgroundColor: _v45,
                filter: "brightness(1.05)"
              },
              ...(_v39 && !_v38 && {
                filter: "contrast(0.3)",
                opacity: "1!important",
                "&:hover": {
                  filter: "contrast(0.3)",
                  opacity: "1!important"
                }
              })
            },
            leftIcon: _v49 ? (0, _v4.jsx)(_v13.Flex, {
              height: "xs",
              width: "xs",
              alignSelf: "center",
              justifyContent: "center",
              children: _v49
            }) : void 0,
            onClick: _v54,
            children: (0, _v4.jsx)(_v46.Box, {
              minWidth: _v51,
              children: _v43
            })
          })
        }), _v42 ? (0, _v4.jsx)(_v94.BokehTooltip, {
          label: _v41.translations.changeProductionMode,
          placement: "bottom-end",
          children: (0, _v4.jsxs)(_v46.Box, {
            position: "relative",
            right: (0, _v11.rem)(12),
            width: (0, _v11.rem)(38),
            children: [(0, _v4.jsx)(_v12.Button, {
              id: (0, _v40.createLiveDomName)(_v0, "dd-toggle"),
              onClick: _v28,
              width: "100%",
              padding: 0,
              backgroundColor: _v45,
              sx: {
                "&:hover": {
                  backgroundColor: _v45,
                  filter: _v16 ? "brightness(0.83)" : "brightness(1.17)"
                }
              },
              filter: (0, _v81.inline)(() => "primary" !== _v44 || _v16 ? _v16 ? "brightness(0.85)" : "brightness(1.15)" : "contrast(0.6)"),
              variant: _v44,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderLeftWidth: 0
            }), (0, _v4.jsx)(_v89.ChevronDownSmall, {
              height: (0, _v11.rem)(24),
              width: (0, _v11.rem)(24),
              pointerEvents: "none",
              position: "absolute",
              left: "60%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              color: _v46
            })]
          })
        }) : void 0]
      });
    return _v42 && (_v58 = (0, _v4.jsx)(_v104, {
      isActive: _v8,
      margin: `0 ${(0, _v11.rem)(-12)} 0 0`,
      menu: (0, _v4.jsxs)(_v4.Fragment, {
        children: [(0, _v4.jsx)(_v49.Text, {
          marginLeft: (0, _v11.rem)(12),
          variant: "heading-xs",
          textColor: "text-primary",
          children: _v41.translations.productionMode
        }), (0, _v4.jsx)(_v106, {
          icon: (0, _v4.jsx)(_v90.BrowserWindow, {}),
          title: _v41.translations.liveDropdownTitle,
          description: _v41.translations.liveDropdownDescription,
          isActive: _v32,
          onClick: _v35
        }), (0, _v4.jsx)(_v106, {
          icon: (0, _v4.jsx)(_v91.Video, {}),
          title: _v41.translations.simuliveTitle,
          description: (0, _v4.jsxs)(_v4.Fragment, {
            children: [(0, _v4.jsx)(_v49.Text, {
              variant: "body-md",
              children: _v41.translations.startsAutomaticallyWith
            }), _v33 ? (0, _v4.jsx)(_v46.Box, {
              as: "a",
              color: "text-primary",
              textDecoration: "underline",
              onClick: _v57,
              children: _v23 ? _v41.translations.reschedule : _v41.translations.schedule
            }) : null]
          }),
          isActive: _v33,
          onClick: _v36
        }), (0, _v4.jsx)(_v106, {
          icon: (0, _v4.jsx)(_v92.Record, {}),
          title: _v41.translations.recordingDropdownTitle,
          description: _v41.translations.recordingDropdownDescription,
          isActive: _v34,
          onClick: _v37
        }), (0, _v4.jsx)(_v46.Box, {
          background: "stroke",
          height: (0, _v11.rem)(1),
          width: "100%"
        }), (0, _v4.jsx)(_v106, {
          icon: (0, _v4.jsx)(_v93.KeyPassword, {}),
          title: _v41.translations.externalEncoderTitle,
          description: _v41.translations.externalEncoderDescriptionSrt,
          isActive: _v31,
          onClick: _v56
        })]
      }),
      onClickOutside: _v29,
      children: _v58
    })), _v58;
  }
  var _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0);
  let _v145 = {
    Anywhere: (0, _v53.translate)({
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
    AllowedDomains: (0, _v53.translate)({
      singular: "Allowed domains",
      dictionary: {
        es: {
          singular: "Dominios permitidos"
        },
        "de-DE": {
          singular: "Zulässige Domains"
        },
        "fr-FR": {
          singular: "Domaines autorisés"
        },
        "ja-JP": {
          singular: "許可ドメイン"
        },
        "ko-KR": {
          singular: "허용되는 도메인"
        },
        "pt-BR": {
          singular: "Domínios permitidos"
        },
        "zh-CN": {
          singular: "允许的域名"
        }
      }
    }),
    Embed: (0, _v53.translate)({
      singular: "Embed",
      dictionary: {
        es: {
          singular: "Insertar"
        },
        "de-DE": {
          singular: "Einbetten"
        },
        "fr-FR": {
          singular: "Intégration"
        },
        "ja-JP": {
          singular: "埋め込み"
        },
        "ko-KR": {
          singular: "임베드"
        },
        "pt-BR": {
          singular: "Incorporação"
        },
        "zh-CN": {
          singular: "嵌入"
        }
      }
    }),
    EmbedCodeCopied: (0, _v53.translate)({
      singular: "Embed code copied",
      dictionary: {
        es: {
          singular: "Se copió el código de inserción"
        },
        "de-DE": {
          singular: "Einbettungscode kopiert"
        },
        "fr-FR": {
          singular: "Code d'intégration copié"
        },
        "ja-JP": {
          singular: "埋め込みコードがコピーされました"
        },
        "ko-KR": {
          singular: "임베드 코드를 복사했습니다"
        },
        "pt-BR": {
          singular: "Código de incorporação copiado"
        },
        "zh-CN": {
          singular: "嵌入代码已复制"
        }
      }
    }),
    EmptyEmbedCode: (0, _v53.translate)({
      singular: "code for unified player and engagement tools, responsive embed",
      dictionary: {
        es: {
          singular: "código para reproductor unificado y herramientas de interacción, inserción adaptable"
        },
        "de-DE": {
          singular: "Code für einheitliche Player- und Interaktionstools, responsive Einbettung"
        },
        "fr-FR": {
          singular: "code pour player unifié et outils d'engagement, intégration réactive"
        },
        "ja-JP": {
          singular: "統合されたプレーヤーおよびエンゲージメントツールのコード、レスポンシブ対応の埋め込み"
        },
        "ko-KR": {
          singular: "통합 플레이어 및 참여 도구 전용 코드, 반응형 임베드"
        },
        "pt-BR": {
          singular: "código para o player e ferramentas de engajamento unificados, incorporação responsiva"
        },
        "zh-CN": {
          singular: "统一播放器和参与工具的代码，响应式嵌入"
        }
      }
    }),
    EnterValidUrl: (0, _v53.translate)({
      singular: "Enter a valid URL.",
      dictionary: {
        es: {
          singular: "Ingresar una URL válida."
        },
        "de-DE": {
          singular: "Gib eine gültige URL ein."
        },
        "fr-FR": {
          singular: "Saisissez une URL valide."
        },
        "ja-JP": {
          singular: "正しいURLを入力してください。"
        },
        "ko-KR": {
          singular: "유효한 URL을 입력하세요."
        },
        "pt-BR": {
          singular: "Insira um URL válido."
        },
        "zh-CN": {
          singular: "输入有效的 URL。"
        }
      }
    }),
    EmbedOptions: (0, _v53.translate)({
      singular: "Embed options",
      dictionary: {
        es: {
          singular: "Opciones de inserción"
        },
        "de-DE": {
          singular: "Einbettungsoptionen"
        },
        "fr-FR": {
          singular: "Options d'intégration"
        },
        "ja-JP": {
          singular: "埋め込みオプション"
        },
        "ko-KR": {
          singular: "임베드 옵션"
        },
        "pt-BR": {
          singular: "Opções de incorporação"
        },
        "zh-CN": {
          singular: "嵌入选项"
        }
      }
    }),
    EmbedResponsiveTip: (0, _v53.translate)({
      singular: "Embeds are responsive by default. Turn on set custom dimensions to select a fixed size.",
      dictionary: {
        es: {
          singular: "Las inserciones son adaptables por defecto. Active las dimensiones personalizadas para seleccionar un tamaño fijo."
        },
        "de-DE": {
          singular: "Einbettungen sind standardmäßig responsiv. Aktiviere die Option „Maßgeschneiderte Abmessungen“, um eine feste Größe auszuwählen."
        },
        "fr-FR": {
          singular: "Les intégrations sont réactives par défaut. Activez l'option de définition des dimensions personnalisées pour sélectionner une taille fixe."
        },
        "ja-JP": {
          singular: "埋め込みは、デフォルトでレスポンシブ対応になっています。固定サイズを選択するには、「カスタムサイズの設定」をオンにします。"
        },
        "ko-KR": {
          singular: "임베드는 기본적으로 반응형입니다. 고정 크기를 선택하려면 사용자 지정 크기 설정을 켭니다."
        },
        "pt-BR": {
          singular: 'As incorporações são responsivas por padrão. Ative a opção "Definir dimensões personalizadas" para escolher um tamanho fixo.'
        },
        "zh-CN": {
          singular: "嵌入默认具有响应性。启用“设置自定义尺寸”以选择固定尺寸。"
        }
      }
    }),
    EmbedTip: (0, _v53.translate)({
      singular: "Embed chat, polls, or Q&A",
      dictionary: {
        es: {
          singular: "Insertar chat, encuestas o sesión de preguntas y respuestas"
        },
        "de-DE": {
          singular: "Chat einbetten, Umfragen oder Fragerunden"
        },
        "fr-FR": {
          singular: "Intégrer les discussions, sondages et questions-réponses"
        },
        "ja-JP": {
          singular: "チャット、アンケート、Q&Aを埋め込む"
        },
        "ko-KR": {
          singular: "채팅, 투표 또는 Q&A 임베드"
        },
        "pt-BR": {
          singular: "Incorporar chat, enquetes ou perguntas e respostas"
        },
        "zh-CN": {
          singular: "嵌入聊天、投票或问答"
        }
      }
    }),
    EngagementOnly: (0, _v53.translate)({
      singular: "Engagement tools only",
      dictionary: {
        es: {
          singular: "Solo herramientas de interacción"
        },
        "de-DE": {
          singular: "Nur Engagement-Tools"
        },
        "fr-FR": {
          singular: "Outils d'engagement uniquement"
        },
        "ja-JP": {
          singular: "エンゲージメントツールのみ"
        },
        "ko-KR": {
          singular: "참여 도구 전용"
        },
        "pt-BR": {
          singular: "Somente ferramentas de engajamento"
        },
        "zh-CN": {
          singular: "仅参与工具"
        }
      }
    }),
    EnagemaentOnlyDesc: (0, _v53.translate)({
      singular: "Embed just the chat, polls, or Q&A.",
      dictionary: {
        es: {
          singular: "Insertar solo el chat, las encuestas o las preguntas y respuestas."
        },
        "de-DE": {
          singular: "Betten Sie nur den Chat, Umfragen oder Q&A ein."
        },
        "fr-FR": {
          singular: "Intégrez uniquement la discussion, les sondages ou les questions-réponses."
        },
        "ja-JP": {
          singular: "チャット、投票、質問セッションのみを埋め込みます。"
        },
        "ko-KR": {
          singular: "채팅, 투표 또는 Q&A만 임베드합니다."
        },
        "pt-BR": {
          singular: "Incorpore apenas o chat, enquetes ou perguntas e respostas."
        },
        "zh-CN": {
          singular: "仅嵌入聊天、投票或问答。"
        }
      }
    }),
    EnterDomain: (0, _v53.translate)({
      singular: "Enter domain",
      dictionary: {
        es: {
          singular: "Introducir dominio"
        },
        "de-DE": {
          singular: "Gib deine Domain ein"
        },
        "fr-FR": {
          singular: "Saisissez le nom du domaine"
        },
        "ja-JP": {
          singular: "ドメインを入力"
        },
        "ko-KR": {
          singular: "도메인 입력"
        },
        "pt-BR": {
          singular: "Insira o domínio"
        },
        "zh-CN": {
          singular: "输入域名"
        }
      }
    }),
    CopyEmbedCode: (0, _v53.translate)({
      singular: "Copy embed code",
      dictionary: {
        es: {
          singular: "Copiar el código de inserción"
        },
        "de-DE": {
          singular: "Einbettungscode kopieren"
        },
        "fr-FR": {
          singular: "Copier le code d’intégration"
        },
        "ja-JP": {
          singular: "埋め込みコードをコピー"
        },
        "ko-KR": {
          singular: "임베드 코드 복사하기"
        },
        "pt-BR": {
          singular: "Copiar código de incorporação"
        },
        "zh-CN": {
          singular: "复制嵌入代码"
        }
      }
    }),
    translate: (0, _v53.translate)({
      singular: "Translate",
      dictionary: {
        es: {
          singular: "Traducir"
        },
        "de-DE": {
          singular: "Übersetzen"
        },
        "fr-FR": {
          singular: "Traduire"
        },
        "ja-JP": {
          singular: "翻訳"
        },
        "ko-KR": {
          singular: "번역합니다."
        },
        "pt-BR": {
          singular: "Traduzir"
        },
        "zh-CN": {
          singular: "翻译"
        }
      }
    }),
    CopyLink: (0, _v53.translate)({
      singular: "Copy Link",
      dictionary: {
        es: {
          singular: "Copiar vínculo"
        },
        "de-DE": {
          singular: "Link kopieren"
        },
        "fr-FR": {
          singular: "Copier le lien"
        },
        "ja-JP": {
          singular: "リンクをコピー"
        },
        "ko-KR": {
          singular: "링크 복사"
        },
        "pt-BR": {
          singular: "Copiar link"
        },
        "zh-CN": {
          singular: "复制链接"
        }
      }
    }),
    FullPageEngLink: (0, _v53.translate)({
      singular: "Full-page engagement tools link",
      dictionary: {
        es: {
          singular: "Herramientas de interacción de página completa"
        },
        "de-DE": {
          singular: "Ganzseitiger Interaktionstools-Link"
        },
        "fr-FR": {
          singular: "Lien pleine page vers les outils d'engagement"
        },
        "ja-JP": {
          singular: "フルページエンゲージメントツールへのリンク"
        },
        "ko-KR": {
          singular: "전체 페이지 참여 도구 링크"
        },
        "pt-BR": {
          singular: "Link da página inteira de ferramentas de engajamento"
        },
        "zh-CN": {
          singular: "整页参与工具链接"
        }
      }
    }),
    Height: (0, _v53.translate)({
      singular: "Height",
      dictionary: {
        es: {
          singular: '"Height" (Alturo)'
        },
        "de-DE": {
          singular: "Height (Höhe)"
        },
        "fr-FR": {
          singular: "Hauteur"
        },
        "ja-JP": {
          singular: "高さ"
        },
        "ko-KR": {
          singular: "높이"
        },
        "pt-BR": {
          singular: "Altura"
        },
        "zh-CN": {
          singular: "高"
        }
      }
    }),
    IncludeVideoPlayer: (0, _v53.translate)({
      singular: "Include video player",
      dictionary: {
        es: {
          singular: "Incluir reproductor de video"
        },
        "de-DE": {
          singular: "Video-Player einbinden"
        },
        "fr-FR": {
          singular: "Inclure un player vidéo"
        },
        "ja-JP": {
          singular: "動画プレーヤーを含める"
        },
        "ko-KR": {
          singular: "동영상 플레이어 포함"
        },
        "pt-BR": {
          singular: "Incluir reprodutor de vídeo"
        },
        "zh-CN": {
          singular: "包括视频播放器"
        }
      }
    }),
    IncludeEngagementTools: (0, _v53.translate)({
      singular: "Include engagement tools",
      dictionary: {
        es: {
          singular: "Incluir herramientas de interacción"
        },
        "de-DE": {
          singular: "Interaktionstools einbinden"
        },
        "fr-FR": {
          singular: "Inclure des outils d'engagement"
        },
        "ja-JP": {
          singular: "エンゲージメントツールを含める"
        },
        "ko-KR": {
          singular: "참여 도구 포함"
        },
        "pt-BR": {
          singular: "Inclua ferramentas de engajamento"
        },
        "zh-CN": {
          singular: "包含参与工具"
        }
      }
    }),
    LinkCopied: (0, _v53.translate)({
      singular: "Link copied",
      dictionary: {
        es: {
          singular: "Vínculo copiado"
        },
        "de-DE": {
          singular: "Link kopiert"
        },
        "fr-FR": {
          singular: "Lien copié"
        },
        "ja-JP": {
          singular: "リンクがコピーされました"
        },
        "ko-KR": {
          singular: "링크가 복사됐습니다"
        },
        "pt-BR": {
          singular: "Link copiado"
        },
        "zh-CN": {
          singular: "链接已复制"
        }
      }
    }),
    Nowhere: (0, _v53.translate)({
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
    NoDomainAddedMsg: (0, _v53.translate)({
      singular: "When no domains are added, the embedded video won’t be visible to everyone.",
      dictionary: {
        es: {
          singular: "Si no se agrega ningún dominio, el video insertado no será visible para todos."
        },
        "de-DE": {
          singular: "Wenn keine Domains hinzugefügt werden, ist das eingebettete Video nicht für jeden sichtbar."
        },
        "fr-FR": {
          singular: "Si aucun domaine n'est ajouté, la vidéo intégrée ne pourra pas être vue par tout le monde."
        },
        "ja-JP": {
          singular: "ドメインが追加されない場合、埋め込み動画は誰にも表示されません。"
        },
        "ko-KR": {
          singular: "도메인을 추가하지 않은 경우, 아무도 임베드된 동영상을 볼 수 없습니다."
        },
        "pt-BR": {
          singular: "Se nenhum domínio for adicionado, o vídeo incorporado não ficará visível para todos."
        },
        "zh-CN": {
          singular: "如果未添加域，嵌入的视频不会对所有人可见。"
        }
      }
    }),
    OpenToolInBrowser: (0, _v53.translate)({
      singular: " Open audience engagement tools in a browser. Moderate with Contributor Plus or Admin access.",
      dictionary: {
        es: {
          singular: " Abrir las herramientas de interacción del público en un navegador. Moderar con acceso de Colaborador Plus o Administrador."
        },
        "de-DE": {
          singular: " Öffne die Tools zur Publikumsinteraktion in einem Browser. Die Moderation ist mit einem Beitragender Plus- oder Admin-Zugang möglich."
        },
        "fr-FR": {
          singular: " Ouvrez les outils d'engagement de l'audience dans un navigateur. Procédez à la modération avec un accès Contributeur Plus ou Administrateur."
        },
        "ja-JP": {
          singular: " ブラウザで視聴者エンゲージメントツールを開きます。投稿者プラスまたは管理者アクセス権でモデレートできます。"
        },
        "ko-KR": {
          singular: " 브라우저에서 시청자 참여 도구를 엽니다. 기여자 플러스 또는 관리자 액세스 권한으로 관리합니다."
        },
        "pt-BR": {
          singular: " Abra as ferramentas de engajamento com o público em um navegador. Faça a moderação com o Contributor Plus ou acesso de administrador."
        },
        "zh-CN": {
          singular: " 在浏览器中打开观众参与工具。使用 Contributor Plus 或管理员访问权限进行审核。"
        }
      }
    }),
    Pixels: (0, _v53.translate)({
      singular: "pixels",
      dictionary: {
        es: {
          singular: "píxeles"
        },
        "de-DE": {
          singular: "Pixel"
        },
        "ja-JP": {
          singular: "ピクセル"
        },
        "ko-KR": {
          singular: "픽셀"
        },
        "zh-CN": {
          singular: "像素"
        }
      }
    }),
    PrivateEntityMsg: (0, _v53.translate)({
      singular: "When privacy is set to Private, the embedded video won’t be visible to everyone.",
      dictionary: {
        es: {
          singular: "Cuando la privacidad está configurada en Privado, el video insertado no será visible para todos."
        },
        "de-DE": {
          singular: "Wenn die Datenschutzeinstellung auf „Privat“ eingestellt ist, ist das eingebettete Video nicht für jeden sichtbar."
        },
        "fr-FR": {
          singular: "Lorsque le paramètre de confidentialité est défini sur « Privé », la vidéo intégrée ne pourra pas être vue par tout le monde."
        },
        "ja-JP": {
          singular: "プライバシー設定が「プライベート」に設定されている場合、埋め込み動画は誰にも表示されません。"
        },
        "ko-KR": {
          singular: "프라이버시가 '비공개'로 설정된 경우, 아무도 임베드된 동영상을 볼 수 없습니다."
        },
        "pt-BR": {
          singular: "Quando a privacidade estiver definida como “Privada”, o vídeo incorporado não ficará visível para todos."
        },
        "zh-CN": {
          singular: "当隐私设置为“私密”时，不是所有人都能看到嵌入式视频。"
        }
      }
    }),
    PlayerAndEmbed: (0, _v53.translate)({
      singular: "Player and engagement tools",
      dictionary: {
        es: {
          singular: "Reproductor y herramientas de interacción"
        },
        "de-DE": {
          singular: "Player- und Interaktionstools"
        },
        "fr-FR": {
          singular: "Lecteur et outils d'engagement"
        },
        "ja-JP": {
          singular: "プレーヤーとエンゲージメントツール"
        },
        "ko-KR": {
          singular: "플레이어 및 참여 도구"
        },
        "pt-BR": {
          singular: "Ferramentas de engajamento e player"
        },
        "zh-CN": {
          singular: "播放器和参与工具"
        }
      }
    }),
    PlayerAndEmbedDesc: (0, _v53.translate)({
      singular: "Embed a video player that displays chat, polls, or Q&A.",
      dictionary: {
        es: {
          singular: "Inserte un reproductor de video que muestre el chat, las encuestas o las preguntas y respuestas."
        },
        "de-DE": {
          singular: "Betten Sie einen Video-Player ein, der Chats, Umfragen oder Q&A anzeigt."
        },
        "fr-FR": {
          singular: "Intégrez un player vidéo qui affiche une discussion, des sondages ou des questions-réponses."
        },
        "ja-JP": {
          singular: "チャット、投票、質問セッションを表示する動画プレーヤーを埋め込みます。"
        },
        "ko-KR": {
          singular: "채팅, 투표 또는 Q&A를 표시하는 동영상 플레이어를 임베드합니다."
        },
        "pt-BR": {
          singular: "Incorpore um reprodutor de vídeo que exibe chat, enquetes ou perguntas e respostas."
        },
        "zh-CN": {
          singular: "嵌入显示聊天、投票或问答的视频播放器。"
        }
      }
    }),
    PlayerDesc: (0, _v53.translate)({
      singular: "Embed just the video stream",
      dictionary: {
        es: {
          singular: "Insertar solo la transmisión de video"
        },
        "de-DE": {
          singular: "Betten Sie nur den Videostream ein."
        },
        "fr-FR": {
          singular: "Intégrer uniquement le flux vidéo"
        },
        "ja-JP": {
          singular: "動画ストリームのみを埋め込みます"
        },
        "ko-KR": {
          singular: "동영상 스트리밍만 임베드"
        },
        "pt-BR": {
          singular: "Incorpore apenas a transmissão de vídeo"
        },
        "zh-CN": {
          singular: "仅嵌入视频流。"
        }
      }
    }),
    PlayerOnly: (0, _v53.translate)({
      singular: "Player only",
      dictionary: {
        es: {
          singular: "Solo reproductor"
        },
        "de-DE": {
          singular: "Nur Player"
        },
        "fr-FR": {
          singular: "Lecteur uniquement"
        },
        "ja-JP": {
          singular: "プレーヤーのみ"
        },
        "ko-KR": {
          singular: "플레이어 전용"
        },
        "pt-BR": {
          singular: "Somente player"
        },
        "zh-CN": {
          singular: "仅限播放器"
        }
      }
    }),
    SelectRating: (0, _v53.translate)({
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
    SetCustomDimensions: (0, _v53.translate)({
      singular: "Set custom dimensions",
      dictionary: {
        es: {
          singular: "Establecer dimensiones personalizadas"
        },
        "de-DE": {
          singular: "Maßgeschneiderte Abmessungen festlegen"
        },
        "fr-FR": {
          singular: "Définir des dimensions personnalisées"
        },
        "ja-JP": {
          singular: "カスタムサイズを設定する"
        },
        "ko-KR": {
          singular: "사용자 지정 크기 설정"
        },
        "pt-BR": {
          singular: "Definir dimensões personalizadas"
        },
        "zh-CN": {
          singular: "设置自定义维度"
        }
      }
    }),
    SpecificDomains: (0, _v53.translate)({
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
    }),
    WhereCanThisBeEmbedded: (0, _v53.translate)({
      singular: "Where can this be embedded?",
      dictionary: {
        es: {
          singular: "¿Dónde pueden insertarlo?"
        },
        "de-DE": {
          singular: "Wo kann das eingebettet werden?"
        },
        "fr-FR": {
          singular: "Où est-ce que cette vidéo peut être intégrée ?"
        },
        "ja-JP": {
          singular: "どこに動画の埋め込みを許可しますか？"
        },
        "ko-KR": {
          singular: "어디에 임베드할 수 있나요?"
        },
        "pt-BR": {
          singular: "Onde este vídeo pode ser incorporado?"
        },
        "zh-CN": {
          singular: "可以在哪里嵌入？"
        }
      }
    }),
    Width: (0, _v53.translate)({
      singular: "Width",
      dictionary: {
        es: {
          singular: '"Width" (Ancho)'
        },
        "de-DE": {
          singular: "Width (Breite)"
        },
        "fr-FR": {
          singular: "Largeur"
        },
        "ja-JP": {
          singular: "幅"
        },
        "ko-KR": {
          singular: "너비"
        },
        "pt-BR": {
          singular: "Largura"
        },
        "zh-CN": {
          singular: "宽度"
        }
      }
    }),
    WhatToEmbed: (0, _v53.translate)({
      singular: "What do you want to embed?",
      dictionary: {
        es: {
          singular: "¿Qué desea insertar?"
        },
        "de-DE": {
          singular: "Was möchten Sie einbetten?"
        },
        "fr-FR": {
          singular: "Que voulez-vous intégrer ?"
        },
        "ja-JP": {
          singular: "何を埋め込みたいですか？"
        },
        "ko-KR": {
          singular: "무엇을 임베드하고 싶으신가요?"
        },
        "pt-BR": {
          singular: "O que você deseja incorporar?"
        },
        "zh-CN": {
          singular: "您想嵌入什么？"
        }
      }
    }),
    ChangesSaved: (0, _v53.translate)({
      singular: "Changes saved",
      dictionary: {
        es: {
          singular: "Guardamos los cambios"
        },
        "de-DE": {
          singular: "Änderungen wurden gespeichert"
        },
        "fr-FR": {
          singular: "Changements sauvegardés"
        },
        "ja-JP": {
          singular: "変更内容が保存されました"
        },
        "ko-KR": {
          singular: "변경 사항 저장 완료"
        },
        "pt-BR": {
          singular: "Alterações salvas"
        },
        "zh-CN": {
          singular: "已保存更改"
        }
      }
    })
  };
  var _v146 = ((_v1 = {}).ESCAPE = "Escape", _v1.ENTER = "Enter", _v1),
    _v147 = ((_v2 = {}).Public = "public", _v2.Private = "private", _v2.AllowList = "whitelist", _v2),
    _v148 = ((_v3 = {}).Anybody = "anybody", _v3.Nobody = "nobody", _v3.Password = "password", _v3);
  let _v149 = {
    public: _v145.Anywhere,
    private: _v145.Nowhere,
    whitelist: _v145.SpecificDomains
  };
  var _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0);
  let _v157 = _v0 => `/live_events/${_v0}/privacy/domains`,
    _v158 = _v0 => _v0.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\s/g, "").split("/")[0].toLowerCase(),
    _v159 = ({
      domain: _v0,
      existingDomains: _v1,
      setDomainValue: _v2,
      onCreate: _v3,
      liveEventId: _v4,
      setHasErrorMsg: _v5,
      onDomainChange: _v6,
      isDisabled: _v7 = !1
    }) => {
      let _v8 = (0, _v140.useIsBokeh)(),
        [{
          put: _v9
        }] = (0, _v156.useMutation)(_v157(_v4)),
        [_v10, _v11] = (0, _v10.useState)(!0),
        _v12 = () => {
          if (_v0.trim().length < 1) return;
          if (!(_v0 => {
            let _v1;
            if (_v0) return ((_v1 = _v0.trim()) && !_v1.match(/^(http(s)?\:)?\/\//) && (_v1 = `https://${_v1}`), _v1).length < 250;
          })(_v0)) {
            _v11(!1), _v5(!0);
            return;
          }
          let _v0 = _v158(_v0);
          _v1.indexOf(_v0) > -1 ? _v2("") : (_v6 ? _v6([..._v1, _v0]) : _v9({
            variables: {
              allowed_domains: [..._v1, _v0]
            }
          }), _v3());
        };
      return (0, _v4.jsxs)(_v134.FormControl, {
        isInvalid: !_v10,
        children: [(0, _v4.jsx)(_v132.FormLabel, {
          size: _v8 ? "sm" : "md",
          color: "text-primary",
          fontWeight: _v8 ? void 0 : "bold",
          children: _v145.AllowedDomains
        }), (0, _v4.jsxs)(_v152.InputGroup, {
          size: _v8 ? "sm" : "md",
          children: [(0, _v4.jsx)(_v135.Input, {
            placeholder: _v145.EnterDomain,
            value: _v0,
            onBlur: _v12,
            onChange: _v0 => {
              _v11(!0), _v5(!1), _v2(_v0.target.value);
            },
            onKeyDown: _v0 => {
              _v0.key === _v146.ENTER && _v12();
            },
            isDisabled: _v7
          }), (0, _v4.jsx)(_v153.InputRightElement, {
            cursor: _v7 ? "not-allowed" : "pointer",
            opacity: _v7 ? .4 : 1,
            onClick: _v12,
            children: (0, _v4.jsx)(_v155.PlusCircle, {
              color: "text-primary"
            })
          })]
        }), (0, _v4.jsx)(_v154.FormErrorMessage, {
          children: _v145.EnterValidUrl
        })]
      });
    };
  var _v160 = _v0.i(0);
  let _v161 = ({
      index: _v0,
      domain: _v1,
      existingDomains: _v2,
      onDestroy: _v3,
      liveEventId: _v4,
      onDomainChange: _v5,
      canBeDestroyed: _v6 = !0
    }) => {
      let [{
        put: _v7
      }, {
        called: _v8,
        loading: _v9
      }] = (0, _v156.useMutation)(_v157(_v4));
      return (0, _v10.useEffect)(() => {
        _v8 && !_v9 && _v3();
      }, [_v8, _v9]), (0, _v4.jsxs)(_v160.Tag, {
        size: "sm",
        children: [(0, _v4.jsx)(_v160.TagLabel, {
          fontSize: "heading-xs",
          children: _v1
        }), _v6 && (0, _v4.jsx)(_v160.TagCloseButton, {
          onClick: () => {
            let _v0 = [..._v2];
            _v0.splice(_v0, 1), _v5 ? _v5(_v0) : _v7({
              variables: {
                allowed_domains: _v0
              }
            });
          }
        })]
      });
    },
    _v162 = ({
      domains: _v0,
      liveEventId: _v1,
      onDomainChange: _v2,
      isDisabled: _v3 = !1
    }) => {
      let _v4 = (0, _v151.useCache)(),
        _v5 = _v4.get(_v157(_v1)),
        [_v6, _v7] = (0, _v10.useState)(""),
        [_v8, _v9] = (0, _v10.useState)(!1);
      return (0, _v4.jsxs)(_v46.Box, {
        width: "100%",
        children: [(0, _v4.jsx)(_v159, {
          domain: _v6,
          existingDomains: _v0,
          liveEventId: _v1,
          setDomainValue: _v7,
          onCreate: () => {
            _v7(""), _v2 || _v4.set(_v157(_v1), {
              ..._v5,
              ...{
                total: _v5.total + 1,
                items: [..._v5.items, {
                  domain: _v158(_v6)
                }]
              }
            });
          },
          setHasErrorMsg: _v9,
          onDomainChange: _v2,
          isDisabled: _v3
        }), _v0.length > 0 && (0, _v4.jsx)(_v13.Flex, {
          flexWrap: "wrap",
          gap: (0, _v11.rem)(4),
          marginTop: "sm",
          children: _v0.map((_v0, _v1) => (0, _v4.jsx)(_v161, {
            index: _v1,
            liveEventId: _v1,
            domain: _v0,
            existingDomains: _v0,
            onDestroy: () => {
              _v2 || _v4.set(_v157(_v1), {
                ..._v5,
                ...{
                  total: _v5.total - 1,
                  items: _v5.items.filter(_v0 => _v0.domain !== _v0)
                }
              });
            },
            hasErrorMsg: _v8,
            onDomainChange: _v2,
            canBeDestroyed: !_v3
          }, `${_v0}${_v1}`))
        })]
      });
    },
    _v163 = ({
      isPrivacyUpdating: _v0 = !1,
      isAllowListedEmbed: _v1,
      fluid: _v2 = !1,
      liveEventId: _v3,
      setEmptyDomain: _v4,
      existingDomains: _v5,
      onDomainChange: _v6,
      isDisabled: _v7 = !1
    }) => {
      let [_v8, {
        data: _v9,
        loading: _v10
      }] = (0, _v150.useLazyQuery)(_v157(_v3), {
        variables: {
          fields: ["domain"],
          per_page: 100
        },
        resourceKey: _v157(_v3)
      });
      if ((0, _v10.useEffect)(() => {
        _v5 && _v4(_v5?.length === 0);
      }, [_v5, _v4]), (0, _v10.useEffect)(() => {
        !_v10 && _v9?.items && !_v5 && _v4(!_v9?.items?.length);
      }, [_v9?.items?.length, _v4]), (0, _v10.useEffect)(() => {
        _v9?.items || _v0 || !_v1 || _v5 || _v8();
      }, [_v9, _v0]), (_v10 || !_v9?.items) && !_v5) return (0, _v4.jsx)(_v69.Center, {
        children: (0, _v4.jsx)(_v45.Spinner, {
          size: "sm"
        })
      });
      let _v11 = _v5 || _v9?.items.map(_v0 => _v0.domain) || [];
      return (0, _v4.jsx)(_v162, {
        domains: _v11,
        liveEventId: _v3,
        fluid: _v2,
        onDomainChange: _v6,
        isDisabled: _v7
      });
    };
  var _v164 = _v0.i(0);
  let _v165 = ({
      onSelect: _v0,
      embedPrivacy: _v1,
      isDisabled: _v2 = !1
    }) => {
      let _v3 = (0, _v10.useCallback)(_v0 => {
          _v0(_v0);
        }, [_v0]),
        _v4 = (0, _v10.useMemo)(() => Object.values(_v147).map(_v0 => ({
          label: _v149[_v0],
          value: _v0
        })), []);
      return (0, _v4.jsx)(_v46.Box, {
        sx: {
          '& [role="listbox"]': {
            width: "var(--reference-width)"
          }
        },
        children: (0, _v4.jsx)(_v164.Select, {
          onValueChange: _v0 => _v3(_v0.value[0]),
          items: _v4,
          withPortal: !1,
          placeholder: _v145.SelectRating,
          size: "sm",
          variant: "withCheck",
          value: [_v1],
          disabled: _v2,
          children: ({
            label: _v0
          }) => (0, _v4.jsx)(_v164.SelectItem, {
            color: "text-primary",
            children: (0, _v4.jsx)(_v164.SelectItemText, {
              children: _v0
            })
          })
        })
      });
    },
    _v166 = "playerAndEngagementTools",
    _v167 = "playerOnly",
    _v168 = "EngagementToolsOnly",
    _v169 = ({
      eventId: _v0,
      onClose: _v1,
      viewer: _v2,
      embedData: _v3,
      entityTitle: _v4,
      selectedPrivacy: _v5,
      setPrivacy: _v6,
      isPrivacyUpdating: _v7,
      onNotify: _v8,
      liveEventId: _v9,
      entityType: _v10,
      onEmbedCodeCopy: _v11,
      embedSrc: _v12,
      isAllowListedEmbed: _v13 = !0,
      existingDomains: _v14,
      onDomainChange: _v15,
      onEmbedModalConfigurationChange: _v16,
      hasKollektiv: _v17 = !1
    }) => {
      let _v18 = (0, _v140.useIsBokeh)(),
        {
          colorMode: _v19
        } = (0, _v88.useColorMode)(),
        {
          embed: _v20,
          view: _v21
        } = _v5,
        _v22 = `<${_v145.EmptyEmbedCode}>`,
        [_v23, _v24] = (0, _v10.useState)(_v22),
        [_v25, _v26] = (0, _v10.useState)(),
        [_v27, _v28] = (0, _v10.useState)(!1),
        [_v29, _v30] = (0, _v10.useState)({
          width: 0,
          height: 720
        }),
        _v31 = (0, _v10.useRef)(null),
        _v32 = (0, _v10.useRef)(null),
        [_v33, _v34] = (0, _v10.useState)(""),
        [_v35, _v36] = (0, _v10.useState)(!1),
        [_v37, _v38] = (0, _v10.useState)(!0),
        [_v39, _v40] = (0, _v10.useState)(!0),
        [_v41, _v42] = (0, _v10.useState)(!1),
        {
          html: _v43
        } = _v3,
        _v44 = (0, _v10.useRef)(null),
        _v45 = (0, _v10.useRef)(void 0),
        [_v46, _v47] = (0, _v10.useState)(40);
      (0, _v10.useEffect)(() => {
        let _v0 = new ResizeObserver(_v0 => {
          clearTimeout(_v45.current), _v45.current = setTimeout(() => {
            _v44.current && _v0[0].contentRect.height !== _v46 && _v47(_v0[0].contentRect.height);
          }, 0);
        });
        return _v44.current && _v0.observe(_v44.current), () => {
          _v44.current && _v0.unobserve(_v44.current), clearTimeout(_v45.current);
        };
      }, []);
      let _v48 = (0, _v10.useRef)(!1),
        _v49 = async _v0 => {
          try {
            await navigator.clipboard.writeText(_v0 || _v23 || ""), _v8({
              content: _v0 ? `${_v145.LinkCopied}` : `${_v145.EmbedCodeCopied}`
            }), _v0 || _v11?.("embedCode"), _v1();
          } catch (_v0) {}
        },
        _v50 = !_v39 && !_v37 || _v35 || _v7,
        _v51 = (0, _v10.useCallback)((_v0 = !1) => {
          let _v1 = (() => {
              if (_v12) return _v12;
              let _v0 = document.createElement("div");
              return _v0.innerHTML = _v43 || "", _v0.getElementsByTagName("iframe")[0]?.src;
            })() + (_v0 ? "/interaction" : ""),
            _v2 = ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "web-share", ...(_v17 ? ["local-network-access"] : [])].join("; ");
          return _v27 ? `<div style="height: ${_v29.height}px; width: ${_v29.width}px"><iframe src="${_v1}" allow="${_v2}" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen frameborder="0" style="width:100%;height:100%;"></iframe></div>` : `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${_v1}" frameborder="0" allow="${_v2}" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`;
        }, [_v27, _v29.height, _v29.width, _v17]),
        _v52 = _v0 => {
          let _v1 = document.createElement("div");
          _v1.innerHTML = _v0 || _v25 || "";
          let _v2 = _v1.getElementsByTagName("iframe")[0];
          return _v2 && (_v27 ? (_v2.setAttribute("height", `${_v29.height}px`), _v2.setAttribute("width", `${_v29.width}px`)) : (_v2.setAttribute("height", "100%"), _v2.setAttribute("width", "100%"))), _v1.innerHTML;
        },
        _v53 = async () => {
          _v33 ? _v49(_v33) : (_v48.current = !0, await _v54({
            responsive: !_v27,
            ..._v29
          }, ["embedCode", "url"]));
        };
      (0, _v10.useEffect)(() => {
        _v48.current && _v33 && (_v49(_v33), _v48.current = !1);
      }, [_v33, _v48]);
      let _v54 = (0, _v10.useCallback)(async (_v0 = {}, _v1 = ["url", "embedCode"]) => {
          _v36(!0), (0, _v141.getInteractionRoomRoomIdEmbedCode)({
            baseUrl: `https://${_v2?.apiUrl}`,
            select: _v1,
            where: {
              roomType: _v10,
              roomId: _v0
            },
            query: {
              module: "auto",
              theme: _v19,
              ..._v0
            },
            headers: {
              Accept: "application/vnd.vimeo.*;version=3.4.1",
              Authorization: `jwt ${_v2?.jwt}`
            },
            credentials: "omit"
          }).then(({
            url: _v0,
            embedCode: _v1
          }) => {
            _v0 && _v34(_v0), _v1 && (_v26(_v1), _v24(_v52(_v1)));
          }).finally(() => {
            _v36(!1);
          });
        }, [_v10, _v0, _v19, _v2?.apiUrl, _v2?.jwt]),
        _v55 = (0, _v10.useMemo)(() => (0, _v127.default)((_v0, _v1) => _v54(_v0, _v1), 0), [_v54]);
      (0, _v10.useEffect)(() => {
        if (_v37 || _v39) _v37 && !_v39 ? _v25 ? _v24(_v52()) : _v55({
          responsive: !_v27,
          ..._v29
        }, ["embedCode", "url"]) : _v24(_v51(_v37));else {
          _v24(_v22), _v28(!1);
          return;
        }
      }, [_v55, _v22, _v25, _v29, _v51, _v27, _v37, _v39]), (0, _v10.useEffect)(() => {
        _v37 || _v39 || _v24(_v22);
      }, [_v37, _v23, _v39, _v22]);
      let _v56 = (_v0, _v1) => {
          let _v2 = _v1 ? parseInt(_v1) : NaN;
          isNaN(_v2) || _v30(_v0 => ({
            ..._v0,
            [_v0]: _v2
          }));
        },
        _v57 = ({
          width: _v0,
          height: _v1
        }) => {
          _v0?.length === 0 ? _v56("width", "0") : _v1?.length === 0 ? _v56("height", "0") : (_v0 && _v56("width", _v0), _v1 && _v56("height", _v1));
        };
      (0, _v103.default)([_v31, _v32], () => {
        _v1();
      });
      let _v58 = {
          0: _v37 && _v39,
          1: !_v37 && _v39,
          2: _v37 && !_v39
        },
        _v59 = (0, _v143.useScrollbarStyles)(),
        {
          tooltip: _v60,
          isDisabled: _v61
        } = (0, _v144.useGetEditEmbedPrivacyDisabled)();
      return (0, _v4.jsxs)(_v13.Flex, {
        ref: _v31,
        overflow: "hidden visible",
        direction: "column",
        alignItems: "stretch",
        borderRadius: (0, _v11.rem)(8),
        background: "surface",
        sx: _v59,
        children: [(0, _v4.jsxs)(_v13.Flex, {
          padding: (0, _v11.rem)(16),
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v4.jsxs)(_v18.Paragraph, {
            size: "lg",
            color: "text-primary",
            maxWidth: "90%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontWeight: _v18 ? void 0 : "bold",
            children: [_v145.Embed, " ", `"${_v4}"`]
          }), (0, _v4.jsx)(_v96.ModalCloseButton, {
            position: "static"
          })]
        }), (0, _v4.jsx)(_v131.Divider, {
          orientation: "horizontal",
          borderColor: "stroke"
        }), (0, _v4.jsx)(_v13.Flex, {
          padding: `${(0, _v11.rem)(12)} ${(0, _v11.rem)(16)}`,
          direction: "column",
          alignItems: "flex-start",
          gap: (0, _v11.rem)(8),
          children: (0, _v4.jsx)(_v129.RadioGroup, {
            defaultValue: _v166,
            width: 468,
            onChange: _v0 => {
              switch (_v0) {
                case _v166:
                  _v38(!0), _v40(!0);
                  break;
                case _v167:
                  _v38(!1), _v40(!0);
                  break;
                case _v168:
                  _v38(!0), _v40(!1);
              }
              let _v1 = _v20 ?? _v147.Public;
              _v16?.({
                embedComposition: function (_v0) {
                  switch (_v0) {
                    case _v166:
                      return "player_and_engagement_tools";
                    case _v167:
                      return "player_only";
                    case _v168:
                      return "engagement_tools_only";
                    default:
                      return "player_and_engagement_tools";
                  }
                }(_v0),
                embedPermission: _v1
              });
            },
            children: (0, _v4.jsx)(_v130.Stack, {
              direction: "column",
              children: [(0, _v4.jsx)(() => (0, _v4.jsxs)(_v128.Radio, {
                value: _v166,
                padding: 10,
                children: [(0, _v4.jsx)(_v18.Paragraph, {
                  size: "md",
                  fontWeight: _v18 ? void 0 : "bold",
                  color: "text-primary",
                  children: _v145.PlayerAndEmbed
                }), _v37 && _v39 && (0, _v4.jsx)(_v18.Paragraph, {
                  size: "md",
                  color: "text-secondary",
                  marginTop: _v18 ? void 0 : (0, _v11.rem)(2),
                  children: _v145.PlayerAndEmbedDesc
                })]
              }), {}, _v166), (0, _v4.jsx)(() => (0, _v4.jsxs)(_v128.Radio, {
                value: _v167,
                padding: 10,
                children: [(0, _v4.jsx)(_v18.Paragraph, {
                  size: "md",
                  fontWeight: _v18 ? void 0 : "bold",
                  color: "text-primary",
                  children: _v145.PlayerOnly
                }), !_v37 && _v39 && (0, _v4.jsx)(_v18.Paragraph, {
                  size: "md",
                  color: "text-secondary",
                  marginTop: _v18 ? void 0 : (0, _v11.rem)(2),
                  children: _v145.PlayerDesc
                })]
              }), {}, _v167), (0, _v4.jsx)(() => (0, _v4.jsxs)(_v128.Radio, {
                value: _v168,
                padding: 10,
                children: [(0, _v4.jsx)(_v18.Paragraph, {
                  size: "md",
                  fontWeight: _v18 ? void 0 : "bold",
                  color: "text-primary",
                  children: _v145.EngagementOnly
                }), _v37 && !_v39 && (0, _v4.jsx)(_v18.Paragraph, {
                  size: "md",
                  color: "text-secondary",
                  marginTop: _v18 ? void 0 : (0, _v11.rem)(2),
                  children: _v145.EnagemaentOnlyDesc
                })]
              }), {}, _v168)].map((_v0, _v1) => (0, _v4.jsx)(_v10.Fragment, {
                children: _v58[_v1] ? (0, _v4.jsx)(_v46.Box, {
                  borderRadius: "sm",
                  border: _v18 ? void 0 : "none",
                  outline: "2px solid",
                  outlineColor: _v18 ? "text-primary" : "rgb(0, 173, 239)",
                  children: _v0
                }) : _v0
              }, _v1))
            })
          })
        }), (0, _v4.jsxs)(_v13.Flex, {
          padding: `${(0, _v11.rem)(12)} ${(0, _v11.rem)(16)}`,
          direction: "column",
          alignItems: "flex-start",
          gap: (0, _v11.rem)(8),
          children: [(0, _v4.jsxs)(_v134.FormControl, {
            display: "flex",
            width: "100%",
            gap: (0, _v11.rem)(8),
            alignItems: "center",
            justifyContent: "space-between",
            children: [(0, _v4.jsxs)(_v132.FormLabel, {
              size: "md",
              htmlFor: "dimensions-toggle",
              display: "flex",
              gap: (0, _v11.rem)(4),
              color: "text-primary",
              marginBottom: _v18 ? void 0 : "md",
              children: [_v145.SetCustomDimensions, (0, _v4.jsx)("div", {
                children: (0, _v4.jsx)(_v42.Tooltip, {
                  label: _v145.EmbedResponsiveTip,
                  placement: "top",
                  maxWidth: (0, _v11.rem)(260),
                  children: (0, _v4.jsx)(_v46.Box, {
                    cursor: "pointer",
                    children: (0, _v4.jsx)(_v138.InfoCircle, {
                      color: "text-secondary",
                      boxSize: (0, _v11.rem)(16)
                    })
                  })
                })
              })]
            }), (0, _v4.jsx)(_v133.Switch, {
              id: "dimensions-toggle",
              size: "sm",
              isChecked: _v27,
              onChange: () => {
                _v28(!_v27);
              }
            })]
          }), _v27 && (0, _v4.jsxs)(_v13.Flex, {
            gap: (0, _v11.rem)(8),
            alignItems: "center",
            color: "text-primary",
            children: [(0, _v4.jsxs)(_v134.FormControl, {
              width: (0, _v11.rem)(120),
              children: [(0, _v4.jsx)(_v132.FormLabel, {
                size: _v18 ? "sm" : "md",
                color: _v18 ? void 0 : "text-primary",
                fontWeight: _v18 ? void 0 : "bold",
                children: _v145.Width
              }), (0, _v4.jsx)(_v135.Input, {
                value: _v29.width,
                size: _v18 ? "sm" : "md",
                onChange: _v0 => _v57({
                  width: _v0.target.value
                })
              })]
            }), (0, _v4.jsx)(_v46.Box, {
              marginTop: (0, _v11.rem)(20),
              children: "x"
            }), (0, _v4.jsxs)(_v134.FormControl, {
              width: (0, _v11.rem)(120),
              children: [(0, _v4.jsx)(_v132.FormLabel, {
                color: _v18 ? void 0 : "text-primary",
                size: _v18 ? "sm" : "md",
                fontWeight: _v18 ? void 0 : "bold",
                children: _v145.Height
              }), (0, _v4.jsx)(_v135.Input, {
                value: _v29.height,
                size: _v18 ? "sm" : "md",
                onChange: _v0 => _v57({
                  height: _v0.target.value
                })
              })]
            }), (0, _v4.jsx)(_v46.Box, {
              marginTop: (0, _v11.rem)(20),
              children: _v145.Pixels
            })]
          })]
        }), (0, _v4.jsxs)(_v13.Flex, {
          direction: "column",
          padding: `0 ${(0, _v11.rem)(16)} ${(0, _v11.rem)(16)} ${(0, _v11.rem)(16)}`,
          gap: (0, _v11.rem)(4),
          children: [(0, _v4.jsxs)(_v13.Flex, {
            alignItems: "center",
            gap: "1",
            children: [_v18 ? (0, _v4.jsx)(_v14.Header, {
              color: "text-primary",
              size: "xs",
              children: _v145.WhereCanThisBeEmbedded
            }) : (0, _v4.jsx)(_v18.Paragraph, {
              color: "text-primary",
              size: "md",
              children: _v145.WhereCanThisBeEmbedded
            }), _v61 && _v60 ? (0, _v4.jsx)(_v42.Tooltip, {
              shouldWrapChildren: !0,
              label: _v60,
              children: (0, _v4.jsx)(_v138.InfoCircle, {
                color: "text-secondary",
                cursor: "pointer",
                boxSize: (0, _v11.rem)(16)
              })
            }) : null]
          }), (0, _v4.jsx)(_v165, {
            embedPrivacy: _v20,
            onSelect: _v0 => {
              _v6({
                embed: _v0
              }), _v16?.({
                embedComposition: _v37 && _v39 ? "player_and_engagement_tools" : _v39 && !_v37 ? "player_only" : !_v39 && _v37 ? "engagement_tools_only" : "player_and_engagement_tools",
                embedPermission: _v0
              });
            },
            isDisabled: _v61
          }), _v20 === _v147.AllowList && (0, _v4.jsx)(_v13.Flex, {
            direction: "column",
            gap: (0, _v11.rem)(2),
            marginTop: (0, _v11.rem)(18),
            children: (0, _v4.jsx)(_v163, {
              isPrivacyUpdating: _v7,
              isAllowListedEmbed: _v13,
              liveEventId: _v9,
              setEmptyDomain: _v42,
              existingDomains: _v14,
              onDomainChange: _v15,
              fluid: !0,
              isDisabled: _v61
            })
          }), (0, _v4.jsxs)(_v13.Flex, {
            marginTop: (0, _v11.rem)(5),
            gap: (0, _v11.rem)(16),
            direction: "column",
            children: [_v20 === _v147.AllowList && _v41 && (0, _v4.jsx)(_v50.Alert, {
              fontSize: (0, _v11.rem)(14),
              children: _v145.NoDomainAddedMsg
            }), _v21 === _v148.Nobody && (0, _v4.jsx)(_v50.Alert, {
              fontSize: (0, _v11.rem)(14),
              children: _v145.PrivateEntityMsg
            })]
          }), (0, _v4.jsxs)(_v46.Box, {
            position: "relative",
            ref: _v44,
            marginTop: (0, _v11.rem)(10),
            children: [_v35 ? (0, _v4.jsx)(_v137.Skeleton, {
              position: "absolute",
              height: "100%"
            }) : null, (0, _v4.jsx)(_v136.Textarea, {
              position: "relative",
              inset: 0,
              visibility: _v35 ? "hidden" : "visible",
              minHeight: (0, _v11.rem)(40),
              padding: `${(0, _v11.rem)(7)} ${(0, _v11.rem)(10)} 0 ${(0, _v11.rem)(10)}`,
              lineHeight: (0, _v11.rem)(24),
              wordBreak: "break-all",
              resize: "vertical",
              readOnly: !0,
              value: _v35 ? "" : _v23,
              sx: _v59
            })]
          }), _v18 ? (0, _v4.jsx)(_v12.Button, {
            margin: `${(0, _v11.rem)(12)} 0 0 auto`,
            onClick: () => {
              _v49();
            },
            disabled: _v50,
            variant: "primary",
            children: _v145.CopyEmbedCode
          }) : (0, _v4.jsxs)(_v4.Fragment, {
            children: [(0, _v4.jsx)(_v13.Flex, {
              marginTop: (0, _v11.rem)(12),
              direction: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: (0, _v11.rem)(8),
              children: (0, _v4.jsx)(_v12.Button, {
                onClick: () => {
                  _v49();
                },
                disabled: _v50,
                variant: "primary",
                width: "100%",
                children: _v145.CopyEmbedCode
              })
            }), (0, _v4.jsx)(_v131.Divider, {
              marginBlock: (0, _v11.rem)(16),
              borderColor: "stroke"
            }), (0, _v4.jsxs)(_v13.Flex, {
              color: "text-primary",
              alignItems: "center",
              justifyContent: "space-between",
              gap: (0, _v11.rem)(8),
              children: [(0, _v4.jsxs)(_v13.Flex, {
                direction: "column",
                gap: (0, _v11.rem)(4),
                children: [(0, _v4.jsx)(_v18.Paragraph, {
                  size: "md",
                  fontWeight: "bold",
                  children: _v145.FullPageEngLink
                }), (0, _v4.jsx)(_v18.Paragraph, {
                  size: "md",
                  color: "text-secondary",
                  children: _v145.OpenToolInBrowser
                })]
              }), _v18 ? (0, _v4.jsx)(_v12.Button, {
                variant: "tertiary",
                leftIcon: (0, _v4.jsx)(_v139.Link, {
                  boxSize: "sm"
                }),
                disabled: _v50,
                onClick: _v53,
                children: _v145.CopyLink
              }) : (0, _v4.jsx)(_v46.Box, {
                width: "27%",
                children: (0, _v4.jsx)(_v142.Button, {
                  variant: "outline",
                  icon: (0, _v4.jsx)(_v139.Link, {
                    boxSize: "sm"
                  }),
                  disabled: _v50,
                  onClick: _v53,
                  children: _v145.CopyLink
                })
              })]
            })]
          })]
        })]
      });
    },
    _v170 = _v0 => (0, _v4.jsxs)(_v4.Fragment, {
      children: [_v0.children, (0, _v4.jsxs)(_v15.Modal, {
        isOpen: _v0.isOpen,
        onClose: _v0.onClose,
        children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsx)(_v16.ModalContent, {
          overflow: "hidden",
          width: "90vw",
          maxWidth: (0, _v11.rem)(503),
          borderRadius: "sm",
          children: (0, _v4.jsx)(_v169, {
            ..._v0
          })
        })]
      })]
    });
  var _v171 = _v0.i(0);
  function _v172({
    id: _v0 = (0, _v40.createLiveDomName)("embed-header"),
    className: _v1 = (0, _v40.createLiveDomName)("embed-header"),
    eventSettingsContext: {
      settings: {
        value: _v2
      },
      embedWhitelist: _v3,
      actions: {
        updateLiveEventSettings: _v4,
        updateEmbedWhitelist: _v5
      }
    } = (0, _v9.useManager)(_v36.EventSettingsManager)
  }) {
    let {
        trackLiveStreamEmbedConfigured: _v6
      } = (0, _v83.useLiveStreamBroadcasterTracking)(),
      _v7 = (0, _v171.useViewer)(),
      _v8 = (0, _v9.useScope)(),
      {
        permissions: {
          hasKollektiv: _v9
        }
      } = (0, _v9.useManager)(_v33.ComposerSessionManager),
      _v10 = _v2?.embed?.embedProperties?.sourceUrl,
      [_v11, _v12] = (0, _v10.useState)(() => {
        let _v0 = (0, _v126.getUrlQueryValue)(_v124.liveQueryConfig.SHARING.OPEN_EMBED);
        return "true" === _v0 || "1" === _v0;
      });
    (0, _v10.useEffect)(() => {
      _v2 && _v7 && (0, _v126.getUrlQueryValue)(_v124.liveQueryConfig.SHARING.OPEN_EMBED) && (0, _v126.removeCurrentPathQueryValue)(_v124.liveQueryConfig.SHARING.OPEN_EMBED);
    }, [_v2, _v7]);
    let _v13 = (0, _v10.useCallback)(() => {
        _v12(_v0 => !_v0);
      }, []),
      _v14 = (0, _v10.useCallback)(_v0 => {
        _v4({
          streamPrivacy: {
            embed: _v0.embed
          }
        });
      }, [_v4]),
      _v15 = (0, _v10.useCallback)(_v0 => {
        let _v1 = _v0.embedPermission;
        _v6({
          liveStreamEmbedType: _v0.embedComposition,
          liveStreamEmbedPrivacy: function (_v0) {
            switch (_v0) {
              case _v29.EStreamEmbedPrivacy.PUBLIC:
                return "anywhere";
              case _v29.EStreamEmbedPrivacy.WHITELIST:
                return "specific_domains";
              case _v29.EStreamEmbedPrivacy.PRIVATE:
              default:
                return "nowhere";
            }
          }(_v1)
        });
      }, [_v6]);
    if (!_v2 || !_v7) return (0, _v4.jsx)(_v12.Button, {
      id: _v0,
      className: _v1,
      variant: "secondary",
      isDisabled: !0,
      children: _v41.translations.embed
    });
    {
      let _v0 = (0, _v125.parseEventIdFromURI)(_v2?.link || ""),
        _v1 = {
          entityType: "live_event",
          isOpen: _v11,
          entityTitle: _v2?.title,
          viewer: _v7,
          embedSrc: _v10,
          embedData: _v2?.embed,
          eventId: _v0,
          liveEventId: _v0,
          selectedPrivacy: _v2?.streamPrivacy || "",
          setPrivacy: _v14,
          onEmbedModalConfigurationChange: _v15,
          isPrivacyUpdating: !1,
          onClose: () => _v12(!1),
          onNotify: ({
            content: _v0
          }) => {
            _v8.emitSignal({
              type: _v101.ELiveSignal.SHOW_SIMPLE_NOTIFICATION,
              data: {
                message: _v0
              }
            }), _v12(!1);
          },
          children: (0, _v4.jsx)(_v12.Button, {
            id: _v0,
            className: _v1,
            variant: "secondary",
            onClick: _v13,
            children: _v41.translations.embed
          }),
          isAllowListedEmbed: _v2?.streamPrivacy.embed === _v29.EStreamEmbedPrivacy.WHITELIST,
          existingDomains: _v3.value || [],
          onDomainChange: _v0 => {
            _v5(_v0);
          },
          hasKollektiv: _v9
        };
      return (0, _v4.jsx)(_v170, {
        ..._v1
      });
    }
  }
  var _v173 = _v0.i(0),
    _v174 = _v0.i(0);
  let _v175 = ({
    isOpen: _v0,
    onClose: _v1,
    onConfirmClick: _v2,
    header: _v3,
    children: _v4,
    isLoading: _v5 = !1,
    cancelButtonProps: _v6,
    cancelButtonContent: _v7,
    confirmButtonProps: _v8,
    confirmButtonContent: _v9,
    modalProps: _v10,
    modalHeaderContent: _v11
  }) => (0, _v4.jsxs)(_v15.Modal, {
    isOpen: _v0,
    onClose: _v1,
    closeOnOverlayClick: !_v5,
    ..._v10,
    children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
      children: [(0, _v4.jsx)(_v95.ModalHeader, {
        children: _v11 ?? (0, _v4.jsx)(_v49.Text, {
          variant: "heading-md",
          children: _v3
        })
      }), (0, _v4.jsx)(_v97.ModalBody, {
        children: _v4
      }), (0, _v4.jsxs)(_v98.ModalFooter, {
        children: [(0, _v4.jsx)(_v12.Button, {
          variant: "tertiary",
          onClick: _v1,
          isDisabled: _v5,
          ..._v6,
          children: _v7 ?? (0, _v53.translate)({
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
        }), (0, _v4.jsx)(_v12.Button, {
          variant: "primary",
          onClick: () => _v2?.(),
          isLoading: _v5,
          ..._v8,
          children: _v9 ?? (0, _v53.translate)({
            singular: "Apply",
            dictionary: {
              es: {
                singular: "Aplicar"
              },
              "de-DE": {
                singular: "Anwenden"
              },
              "fr-FR": {
                singular: "Appliquer"
              },
              "ja-JP": {
                singular: "適用する"
              },
              "ko-KR": {
                singular: "적용"
              },
              "pt-BR": {
                singular: "Aplicar"
              },
              "zh-CN": {
                singular: "应用"
              }
            }
          })
        })]
      })]
    })]
  });
  var _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0),
    _v179 = _v0.i(0),
    _v180 = _v0.i(0),
    _v181 = _v0.i(0),
    _v182 = _v0.i(0),
    _v183 = _v0.i(0),
    _v184 = _v0.i(0),
    _v185 = _v0.i(0),
    _v186 = _v0.i(0),
    _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0),
    _v193 = _v0.i(0),
    _v194 = _v0.i(0),
    _v195 = _v0.i(0);
  let _v196 = ["lastAdded", "alphabetical", "lastModified"],
    _v197 = {
      lastAdded: {
        sort: "date",
        direction: "desc"
      },
      alphabetical: {
        sort: "alphabetical",
        direction: "asc"
      },
      lastModified: {
        sort: "last_modified",
        direction: "desc"
      }
    },
    _v198 = /\/event_series\/(\d+)/,
    _v199 = /\/live_events\/(\d+)/,
    _v200 = (0, _v11.rem)(400),
    _v201 = (0, _v11.rem)(100),
    _v202 = (0, _v11.rem)(56),
    _v203 = (0, _v11.rem)(36),
    _v204 = (0, _v11.rem)(116),
    _v205 = (0, _v11.rem)(100),
    _v206 = (0, _v11.rem)(200),
    _v207 = {
      h: (0, _v11.rem)(80),
      px: "sm",
      py: (0, _v11.rem)(12)
    },
    _v208 = _v0 => {
      switch (_v0) {
        case "lastAdded":
          return (0, _v53.translate)({
            singular: "Last added",
            dictionary: {
              es: {
                singular: "Más recientemente añadidos"
              },
              "de-DE": {
                singular: "Zuletzt hinzugefügt"
              },
              "fr-FR": {
                singular: "Ajout le plus récent"
              },
              "ja-JP": {
                singular: "最新追加"
              },
              "ko-KR": {
                singular: "최근 추가"
              },
              "pt-BR": {
                singular: "Últimos adicionados"
              },
              "zh-CN": {
                singular: "最近添加"
              }
            }
          });
        case "alphabetical":
          return (0, _v53.translate)({
            singular: "Alphabetical",
            dictionary: {
              es: {
                singular: "Orden alfabético"
              },
              "de-DE": {
                singular: "Alphabetisch"
              },
              "fr-FR": {
                singular: "Alphabétique"
              },
              "ja-JP": {
                singular: "アルファベット"
              },
              "ko-KR": {
                singular: "알파벳"
              },
              "pt-BR": {
                singular: "Ordem Alfabética"
              },
              "zh-CN": {
                singular: "按字母顺序排序"
              }
            }
          });
        case "lastModified":
          return (0, _v53.translate)({
            singular: "Last modified",
            dictionary: {
              es: {
                singular: "Última modificación"
              },
              "de-DE": {
                singular: "Zuletzt geändert"
              },
              "fr-FR": {
                singular: "Dernière modification"
              },
              "ja-JP": {
                singular: "最終更新日"
              },
              "ko-KR": {
                singular: "최근 수정"
              },
              "pt-BR": {
                singular: "Última modificação"
              },
              "zh-CN": {
                singular: "最近修改"
              }
            }
          });
        default:
          throw Error(`Unhandled sort: ${String(_v0)}`);
      }
    },
    _v209 = (_v0, _v1) => {
      let _v2 = _v1.exec(_v0);
      return _v2?.[1] === void 0 ? null : Number(_v2[1]);
    },
    _v210 = ({
      eventUri: _v0,
      onDismiss: _v1
    }) => {
      let _v2 = (0, _v34.useSessionOwnerId)(),
        {
          baseUrl: _v3,
          jwt: _v4,
          xVimeoPage: _v5,
          locale: _v6
        } = (0, _v27.useGctlConfig)(),
        _v7 = (0, _v174.useToast)(),
        [_v8, _v9] = (0, _v10.useState)(""),
        [_v10, _v11] = (0, _v10.useState)("lastAdded"),
        [_v12, _v13] = (0, _v10.useState)(new Set()),
        [_v14, _v15] = (0, _v10.useState)(!1),
        _v16 = (0, _v192.useDebouncedValue)(_v8.trim(), 400),
        _v17 = _v209(_v0, _v199),
        {
          data: _v18,
          isLoading: _v19,
          size: _v20,
          setSize: _v21,
          mutate: _v22
        } = (0, _v194.useGetUserEventSeriesInfinite)(() => _v2 <= 0 ? null : {
          select: ["uri", "name", "privacy", "createdTime", "pictures.sizes.link"],
          where: {
            userId: _v2
          },
          query: {
            perPage: 25,
            ..._v197[_v10],
            ...("" === _v16 ? {} : {
              query: _v16
            }),
            ...(null === _v17 ? {} : {
              excludeLiveEventId: _v17
            })
          }
        }),
        _v23 = (0, _v10.useMemo)(() => _v18?.flatMap(_v0 => _v0.data) ?? [], [_v18]),
        _v24 = !!_v18?.[_v18.length - 1]?.paging.next,
        _v25 = void 0 !== _v18 && _v20 > 0 && void 0 === _v18[_v20 - 1],
        _v26 = _v12.size,
        _v27 = _v23.length > 0 && _v23.every(_v0 => _v12.has(_v0.uri)),
        _v28 = (0, _v10.useCallback)(_v0 => {
          _v13(_v0 => {
            let _v1 = new Set(_v0);
            return _v1.has(_v0) ? _v1.delete(_v0) : _v1.add(_v0), _v1;
          });
        }, []),
        _v29 = (0, _v10.useCallback)(() => {
          _v13(_v27 ? new Set() : new Set(_v23.map(_v0 => _v0.uri)));
        }, [_v23, _v27]),
        _v30 = (0, _v10.useCallback)(() => {
          _v21(_v0 => _v0 + 1);
        }, [_v21]),
        _v31 = (0, _v10.useCallback)(async () => {
          let _v0 = [..._v12].flatMap(_v0 => {
            let _v1 = _v209(_v0, _v198);
            return null === _v1 ? [] : [{
              uri: _v0,
              eventSeriesId: _v1
            }];
          });
          if (0 === _v0.length) return;
          _v15(!0);
          let _v1 = {
              "Content-Type": "application/json",
              Authorization: null != _v4 && "" !== _v4 ? `jwt ${_v4}` : "",
              "Vimeo-Page": `${_v5}`,
              "Accept-Language": _v6 ?? "en"
            },
            _v2 = await Promise.allSettled(_v0.map(({
              eventSeriesId: _v0
            }) => (0, _v193.postUserEventSeryEvents)({
              baseUrl: _v3,
              headers: _v1,
              select: ["uri"],
              where: {
                userId: _v2,
                eventSeriesId: _v0
              },
              variables: {
                events: [_v0]
              }
            })));
          _v15(!1), await _v22();
          let _v3 = _v2.find(_v0 => "rejected" === _v0.status);
          if (void 0 !== _v3) {
            _v13(new Set(_v0.filter((_v0, _v1) => _v2[_v1]?.status === "rejected").map(({
              uri: _v0
            }) => _v0))), _v7({
              status: "error",
              duration: 0,
              title: (0, _v177.getErrorToastTitle)(_v3.reason, (0, _v53.translate)({
                singular: "Something went wrong adding this event to an event series. Try again.",
                dictionary: {
                  es: {
                    singular: "Se produjo un error al agregar este evento a una serie de eventos. Inténtelo de nuevo."
                  },
                  "de-DE": {
                    singular: "Beim Hinzufügen dieses Ereignisses zu einer Veranstaltungsreihe ist ein Fehler aufgetreten. Bitte erneut versuchen."
                  },
                  "fr-FR": {
                    singular: "Une erreur est survenue lors de l’ajout de cet événement à une série d’événements. Réessayez."
                  },
                  "ja-JP": {
                    singular: "このイベントをイベントシリーズに追加する際に問題が発生しました。再試行してください。"
                  },
                  "ko-KR": {
                    singular: "이 이벤트를 이벤트 시리즈에 추가하는 중 문제가 발생했습니다. 다시 시도하세요."
                  },
                  "pt-BR": {
                    singular: "Ocorreu um erro ao adicionar este evento a uma série de eventos. Tente novamente."
                  },
                  "zh-CN": {
                    singular: "将此活动添加到活动系列时出错。请重试。"
                  }
                }
              }))
            });
            return;
          }
          _v7({
            title: (0, _v53.translate)({
              singular: "Event added to {COUNT} event series",
              plural: "Event added to {COUNT} event series",
              count: _v0.length,
              replacements: {
                COUNT: _v0.length
              },
              dictionary: {
                es: {
                  singular: "Evento agregado a {COUNT} serie de eventos",
                  plural: "Evento agregado a {COUNT} series de eventos"
                },
                "de-DE": {
                  singular: "Ereignis zu {COUNT} Veranstaltungsreihe hinzugefügt",
                  plural: "Ereignis zu {COUNT} Veranstaltungsreihen hinzugefügt"
                },
                "fr-FR": {
                  singular: "Événement ajouté à {COUNT} série d’événements",
                  plural: "Événement ajouté à {COUNT} séries d’événements"
                },
                "ja-JP": {
                  singular: "イベントを{COUNT}件のイベントシリーズに追加しました",
                  plural: "イベントを{COUNT}件のイベントシリーズに追加しました"
                },
                "ko-KR": {
                  singular: "이벤트가 {COUNT}개의 이벤트 시리즈에 추가되었습니다.",
                  plural: "이벤트가 {COUNT}개의 이벤트 시리즈에 추가되었습니다."
                },
                "pt-BR": {
                  singular: "Evento adicionado a {COUNT} série de eventos",
                  plural: "Evento adicionado a {COUNT} séries de eventos"
                },
                "zh-CN": {
                  singular: "活动已添加到 {COUNT} 个活动系列",
                  plural: "活动已添加到 {COUNT} 个活动系列"
                }
              }
            })
          }), _v1();
        }, [_v12, _v4, _v5, _v6, _v3, _v2, _v0, _v22, _v7, _v1]);
      return (0, _v4.jsxs)(_v15.Modal, {
        isOpen: !0,
        onClose: _v1,
        closeOnOverlayClick: !_v14,
        size: "lg",
        children: [(0, _v4.jsx)(_v17.ModalOverlay, {}), (0, _v4.jsxs)(_v16.ModalContent, {
          children: [(0, _v4.jsx)(_v95.ModalHeader, {
            children: (0, _v4.jsx)(_v49.Text, {
              variant: "heading-md",
              children: (0, _v53.translate)({
                singular: "Add to event series",
                dictionary: {
                  es: {
                    singular: "Agregar a la serie de eventos"
                  },
                  "de-DE": {
                    singular: "Zur Veranstaltungsreihe hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter à une série d’événements"
                  },
                  "ja-JP": {
                    singular: "イベントシリーズに追加"
                  },
                  "ko-KR": {
                    singular: "이벤트 시리즈에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar à série de eventos"
                  },
                  "zh-CN": {
                    singular: "添加到活动系列"
                  }
                }
              })
            })
          }), (0, _v4.jsxs)(_v97.ModalBody, {
            display: "flex",
            flexDirection: "column",
            gap: "md",
            minH: 0,
            pb: "0",
            children: [(0, _v4.jsxs)(_v152.InputGroup, {
              flexShrink: 0,
              children: [(0, _v4.jsx)(_v153.InputLeftElement, {
                pointerEvents: "none",
                children: (0, _v4.jsx)(_v190.SearchMagnifier, {})
              }), (0, _v4.jsx)(_v135.Input, {
                "aria-label": (0, _v53.translate)({
                  singular: "Search Library",
                  dictionary: {
                    es: {
                      singular: "Buscar en la biblioteca"
                    },
                    "de-DE": {
                      singular: "Bibliothek durchsuchen"
                    },
                    "fr-FR": {
                      singular: "Rechercher dans la bibliothèque"
                    },
                    "ja-JP": {
                      singular: "ライブラリを検索"
                    },
                    "ko-KR": {
                      singular: "라이브러리 검색"
                    },
                    "pt-BR": {
                      singular: "Pesquisar na Biblioteca"
                    },
                    "zh-CN": {
                      singular: "搜索库"
                    }
                  }
                }),
                onChange: _v0 => _v9(_v0.target.value),
                placeholder: (0, _v53.translate)({
                  singular: "Search Library",
                  dictionary: {
                    es: {
                      singular: "Buscar en la biblioteca"
                    },
                    "de-DE": {
                      singular: "Bibliothek durchsuchen"
                    },
                    "fr-FR": {
                      singular: "Rechercher dans la bibliothèque"
                    },
                    "ja-JP": {
                      singular: "ライブラリを検索"
                    },
                    "ko-KR": {
                      singular: "라이브러리 검색"
                    },
                    "pt-BR": {
                      singular: "Pesquisar na Biblioteca"
                    },
                    "zh-CN": {
                      singular: "搜索库"
                    }
                  }
                }),
                value: _v8
              })]
            }), (0, _v4.jsxs)(_v13.Flex, {
              align: "center",
              flexShrink: 0,
              justify: "space-between",
              children: [(0, _v4.jsx)(_v179.Checkbox, {
                isChecked: _v27,
                isDisabled: 0 === _v23.length,
                isIndeterminate: _v26 > 0 && !_v27,
                onChange: _v29,
                size: "sm",
                children: (0, _v4.jsx)(_v49.Text, {
                  color: "text-primary",
                  variant: "body-sm",
                  children: (0, _v53.translate)({
                    singular: "{COUNT} selected",
                    replacements: {
                      COUNT: _v26
                    },
                    dictionary: {
                      es: {
                        singular: "{COUNT} seleccionado(s)"
                      },
                      "de-DE": {
                        singular: "{COUNT} ausgewählt"
                      },
                      "fr-FR": {
                        singular: "{COUNT} sélectionné(s)"
                      },
                      "ja-JP": {
                        singular: "{COUNT} 選択済み"
                      },
                      "ko-KR": {
                        singular: "{COUNT}개 선택됨"
                      },
                      "pt-BR": {
                        singular: "{COUNT} selecionado(s)"
                      },
                      "zh-CN": {
                        singular: "{COUNT} 个已选择"
                      }
                    }
                  })
                })
              }), (0, _v4.jsxs)(_v181.Menu, {
                placement: "bottom-end",
                children: [(0, _v4.jsx)(_v182.MenuButton, {
                  as: _v12.Button,
                  rightIcon: (0, _v4.jsx)(_v191.SortSmall, {
                    boxSize: "2xs"
                  }),
                  size: "sm",
                  variant: "tertiary",
                  children: _v208(_v10)
                }), (0, _v4.jsx)(_v185.MenuList, {
                  children: (0, _v4.jsx)(_v183.MenuGroup, {
                    title: (0, _v53.translate)({
                      singular: "Sort by",
                      dictionary: {
                        es: {
                          singular: "Ordenar por"
                        },
                        "de-DE": {
                          singular: "Sortieren nach"
                        },
                        "fr-FR": {
                          singular: "Trier par"
                        },
                        "ja-JP": {
                          singular: "次で並べ替え:"
                        },
                        "ko-KR": {
                          singular: "정렬 기준"
                        },
                        "pt-BR": {
                          singular: "Classificar por"
                        },
                        "zh-CN": {
                          singular: "排序方式"
                        }
                      }
                    }),
                    children: _v196.map(_v0 => (0, _v4.jsx)(_v184.MenuItemOption, {
                      isChecked: _v10 === _v0,
                      onClick: () => _v11(_v0),
                      children: _v208(_v0)
                    }, _v0))
                  })
                })]
              })]
            }), (0, _v4.jsx)(_v46.Box, {
              flex: "1",
              maxH: _v200,
              minH: _v200,
              overflowY: "auto",
              children: _v19 ? (0, _v4.jsx)(_v13.Flex, {
                align: "center",
                h: "100%",
                justify: "center",
                children: (0, _v4.jsx)(_v45.Spinner, {})
              }) : 0 === _v23.length ? (0, _v4.jsx)(_v13.Flex, {
                align: "center",
                h: "100%",
                justify: "center",
                children: (0, _v4.jsx)(_v49.Text, {
                  color: "text-secondary",
                  variant: "body-md",
                  children: (0, _v53.translate)({
                    singular: "No event series found.",
                    dictionary: {
                      es: {
                        singular: "No se encontraron series de eventos."
                      },
                      "de-DE": {
                        singular: "Keine Veranstaltungsreiihen gefunden."
                      },
                      "fr-FR": {
                        singular: "Aucune série d’événements trouvée."
                      },
                      "ja-JP": {
                        singular: "イベントシリーズが見つかりません。"
                      },
                      "ko-KR": {
                        singular: "이벤트 시리즈를 찾을 수 없습니다."
                      },
                      "pt-BR": {
                        singular: "Nenhuma série de eventos encontrada."
                      },
                      "zh-CN": {
                        singular: "未找到活动系列。"
                      }
                    }
                  })
                })
              }) : (0, _v4.jsxs)(_v4.Fragment, {
                children: [(0, _v4.jsx)(_v186.Table, {
                  variant: "unstyled",
                  children: (0, _v4.jsx)(_v187.Tbody, {
                    children: _v23.map(_v0 => {
                      let _v1 = _v0.pictures?.sizes?.at(-1)?.link;
                      return (0, _v4.jsxs)(_v189.Tr, {
                        cursor: "pointer",
                        onClick: () => _v28(_v0.uri),
                        children: [(0, _v4.jsx)(_v188.Td, {
                          w: _v203,
                          ..._v207,
                          children: (0, _v4.jsx)(_v179.Checkbox, {
                            "aria-label": _v0.name,
                            isChecked: _v12.has(_v0.uri),
                            onChange: () => _v28(_v0.uri),
                            onClick: _v0 => _v0.stopPropagation()
                          })
                        }), (0, _v4.jsx)(_v188.Td, {
                          w: _v204,
                          ..._v207,
                          children: (0, _v4.jsx)(_v13.Flex, {
                            align: "center",
                            bg: "fill-component",
                            borderRadius: "sm",
                            h: _v202,
                            justify: "center",
                            overflow: "hidden",
                            w: _v201,
                            children: null != _v1 ? (0, _v4.jsx)(_v180.Image, {
                              alt: "",
                              h: "100%",
                              objectFit: "cover",
                              src: _v1,
                              w: "100%"
                            }) : (0, _v4.jsx)(_v90.BrowserWindow, {
                              boxSize: "xs",
                              color: "text-tertiary",
                              opacity: "60%"
                            })
                          })
                        }), (0, _v4.jsx)(_v188.Td, {
                          ..._v207,
                          children: (0, _v4.jsx)(_v49.Text, {
                            color: "text-primary",
                            noOfLines: 1,
                            variant: "heading-xs",
                            children: _v0.name
                          })
                        }), (0, _v4.jsx)(_v188.Td, {
                          w: _v205,
                          ..._v207,
                          children: (0, _v4.jsx)(_v49.Text, {
                            color: "text-secondary",
                            noOfLines: 1,
                            variant: "body-md",
                            children: _v195.EVENT_SERIES_PRIVACY_OPTIONS.find(_v0 => _v0.privacy === _v0.privacy)?.title
                          })
                        }), (0, _v4.jsx)(_v188.Td, {
                          w: _v206,
                          ..._v207,
                          children: (0, _v4.jsx)(_v49.Text, {
                            color: "text-secondary",
                            noOfLines: 1,
                            variant: "body-md",
                            children: (_v0 => {
                              if (null == _v0) return null;
                              let _v1 = new Date(_v0);
                              if (Number.isNaN(_v1.getTime())) return null;
                              let _v2 = (0, _v53.getCurrentLocale)();
                              return (0, _v53.translate)({
                                singular: "{DATE} at {TIME}",
                                replacements: {
                                  DATE: new Intl.DateTimeFormat(_v2, {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                  }).format(_v1),
                                  TIME: new Intl.DateTimeFormat(_v2, {
                                    hour: "numeric",
                                    minute: "2-digit"
                                  }).format(_v1)
                                },
                                dictionary: {
                                  es: {
                                    singular: "{DATE} a las {TIME}"
                                  },
                                  "de-DE": {
                                    singular: "{DATE} am {TIME}"
                                  },
                                  "fr-FR": {
                                    singular: "Le {DATE} à {TIME}"
                                  },
                                  "ja-JP": {
                                    singular: "{DATE} {TIME}"
                                  },
                                  "ko-KR": {
                                    singular: "{DATE} {TIME}"
                                  },
                                  "pt-BR": {
                                    singular: "Em {DATE} às {TIME}"
                                  },
                                  "zh-CN": {
                                    singular: "{DATE} {TIME}"
                                  }
                                }
                              });
                            })(_v0.createdTime)
                          })
                        })]
                      }, _v0.uri);
                    })
                  })
                }), _v24 ? (0, _v4.jsx)(_v13.Flex, {
                  justify: "center",
                  py: "md",
                  children: (0, _v4.jsx)(_v12.Button, {
                    isLoading: _v25,
                    onClick: _v30,
                    size: "sm",
                    variant: "tertiary",
                    children: (0, _v53.translate)({
                      singular: "Load more",
                      dictionary: {
                        es: {
                          singular: "Cargar más"
                        },
                        "de-DE": {
                          singular: "Mehr laden"
                        },
                        "fr-FR": {
                          singular: "Afficher plus"
                        },
                        "ja-JP": {
                          singular: "もっとロードする"
                        },
                        "ko-KR": {
                          singular: "동영상 더 보기"
                        },
                        "pt-BR": {
                          singular: "Carregar mais"
                        },
                        "zh-CN": {
                          singular: "加载更多"
                        }
                      }
                    })
                  })
                }) : null]
              })
            })]
          }), (0, _v4.jsxs)(_v98.ModalFooter, {
            gap: "sm",
            children: [(0, _v4.jsx)(_v12.Button, {
              isDisabled: _v14,
              onClick: _v1,
              variant: "tertiary",
              children: (0, _v53.translate)({
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
            }), (0, _v4.jsx)(_v12.Button, {
              isDisabled: 0 === _v26,
              isLoading: _v14,
              onClick: () => void _v31(),
              variant: "primary",
              children: (0, _v53.translate)({
                singular: "Add to event series",
                dictionary: {
                  es: {
                    singular: "Agregar a la serie de eventos"
                  },
                  "de-DE": {
                    singular: "Zur Veranstaltungsreihe hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter à une série d’événements"
                  },
                  "ja-JP": {
                    singular: "イベントシリーズに追加"
                  },
                  "ko-KR": {
                    singular: "이벤트 시리즈에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar à série de eventos"
                  },
                  "zh-CN": {
                    singular: "添加到活动系列"
                  }
                }
              })
            })]
          })]
        })]
      });
    },
    _v211 = ({
      zIndex: _v0
    }) => {
      let {
          sessionId: _v1
        } = (0, _v9.useManager)(_v33.ComposerSessionManager),
        {
          settings: {
            value: _v2
          }
        } = (0, _v9.useManager)(_v36.EventSettingsManager),
        _v3 = _v2?.title ?? "",
        {
          baseUrl: _v4,
          jwt: _v5,
          xVimeoPage: _v6,
          locale: _v7
        } = (0, _v27.useGctlConfig)(),
        {
          trackLiveEventsEventMenuOpened: _v8
        } = (0, _v114.useLiveEventsTracking)(),
        _v9 = (0, _v174.useToast)(),
        [_v10, _v11] = (0, _v10.useState)(!1),
        [_v12, _v13] = (0, _v10.useState)(!1),
        [_v14, _v15] = (0, _v10.useState)(!1),
        _v16 = (0, _v10.useCallback)(async () => {
          _v15(!0);
          try {
            await (0, _v176.deleteLiveEvent)({
              baseUrl: _v4,
              headers: {
                "Content-Type": "application/json",
                Authorization: null != _v5 && "" !== _v5 ? `jwt ${_v5}` : "",
                "Vimeo-Page": `${_v6}`,
                "Accept-Language": _v7 ?? "en"
              },
              where: {
                liveEventId: Number(_v1)
              }
            });
          } catch (_v0) {
            _v15(!1), _v9({
              status: "error",
              duration: 0,
              title: (0, _v177.getErrorToastTitle)(_v0, (0, _v53.translate)({
                singular: "Something went wrong deleting this event. Try again.",
                dictionary: {
                  es: {
                    singular: "Se produjo un error al eliminar este evento. Inténtelo de nuevo."
                  },
                  "de-DE": {
                    singular: "Beim Löschen dieses Ereignisses ist ein Fehler aufgetreten. Bitte erneut versuchen."
                  },
                  "fr-FR": {
                    singular: "Une erreur est survenue lors de la suppression de cet événement. Réessayez."
                  },
                  "ja-JP": {
                    singular: "このイベントの削除中に問題が発生しました。再試行してください。"
                  },
                  "ko-KR": {
                    singular: "이벤트 삭제 중 문제가 발생했습니다. 다시 시도하세요."
                  },
                  "pt-BR": {
                    singular: "Ocorreu um erro ao excluir este evento. Tente novamente."
                  },
                  "zh-CN": {
                    singular: "删除此活动时出错。请重试。"
                  }
                }
              }))
            });
            return;
          }
          window.location.href = _v26.vimeoConfig.PATH.EVENTS_LIBRARY_PAGE;
        }, [_v4, _v5, _v6, _v7, _v1, _v9]);
      return (0, _v4.jsxs)(_v4.Fragment, {
        children: [(0, _v4.jsx)(_v178.EventMenu, {
          type: "event",
          title: _v3,
          eventLink: _v2?.link,
          zIndex: _v0,
          canEdit: !0,
          canDelete: !0,
          onClick: () => {
            _v8({
              origin: "broadcaster",
              type: "event"
            });
          },
          onDelete: () => _v13(!0),
          onAddToEventSeries: () => _v11(!0)
        }), _v10 ? (0, _v4.jsx)(_v210, {
          eventUri: `/live_events/${_v1}`,
          onDismiss: () => _v11(!1)
        }) : null, _v12 ? (0, _v4.jsx)(_v175, {
          isOpen: !0,
          isLoading: _v14,
          header: (0, _v53.translate)({
            singular: "Delete “{NAME}”?",
            replacements: {
              NAME: _v3
            },
            dictionary: {
              es: {
                singular: "¿Eliminar “{NAME}”?"
              },
              "de-DE": {
                singular: "“{NAME}” löschen?"
              },
              "fr-FR": {
                singular: "Supprimer “{NAME}” ?"
              },
              "ja-JP": {
                singular: "“{NAME}”を削除しますか?"
              },
              "ko-KR": {
                singular: "“{NAME}”을(를) 삭제하시겠습니까?"
              },
              "pt-BR": {
                singular: "Excluir “{NAME}”?"
              },
              "zh-CN": {
                singular: "删除 “{NAME}”?"
              }
            }
          }),
          confirmButtonProps: {
            variant: "destructive"
          },
          confirmButtonContent: (0, _v53.translate)({
            singular: "Delete",
            dictionary: {
              es: {
                singular: "Eliminar"
              },
              "de-DE": {
                singular: "Löschen"
              },
              "fr-FR": {
                singular: "Supprimer"
              },
              "ja-JP": {
                singular: "削除"
              },
              "ko-KR": {
                singular: "삭제"
              },
              "pt-BR": {
                singular: "Excluir"
              },
              "zh-CN": {
                singular: "删除"
              }
            }
          }),
          onClose: () => _v13(!1),
          onConfirmClick: () => void _v16(),
          children: (0, _v4.jsx)(_v49.Text, {
            variant: "body-md",
            children: (0, _v53.translate)({
              singular: "Permanently delete this event and its associated data. This event won’t play anywhere it’s embedded. Any recording associated with this event will be unaffected.",
              dictionary: {
                es: {
                  singular: "Eliminar permanentemente este evento y sus datos asociados. Este evento no se reproducirá en ningún lugar donde esté incrustado. Cualquier grabación asociada a este evento no se verá afectada."
                },
                "de-DE": {
                  singular: "Dieses Ereignis und die zugehörigen Daten dauerhaft löschen. Dieses Ereignis wird an keiner Stelle, an der es eingebettet ist, wiedergegeben. Mit diesem Ereignis verknüpfte Aufnahmen bleiben davon unberührt."
                },
                "fr-FR": {
                  singular: "Supprimer définitivement cet événement et les données qui y sont associées. Cet événement ne sera plus lisible là où il est intégré. Tout enregistrement associé à cet événement ne sera pas affecté."
                },
                "ja-JP": {
                  singular: "このイベントおよび関連データを完全に削除します。このイベントは埋め込まれている場所では再生されなくなります。該当イベントに紐づく録画は影響を受けません。"
                },
                "ko-KR": {
                  singular: "이 이벤트 및 관련 데이터를 영구 삭제합니다. 이 이벤트는 임베드된 곳 어디에서도 재생되지 않습니다. 이 이벤트와 연결된 녹화본은 영향을 받지 않습니다."
                },
                "pt-BR": {
                  singular: "Excluir permanentemente este evento e seus dados associados. Este evento não será reproduzido em nenhum local onde esteja incorporado. Qualquer gravação associada a este evento não será afetada."
                },
                "zh-CN": {
                  singular: "永久删除此活动及其关联数据。此活动在任何嵌入位置都将无法播放。与此活动相关的任何录制将不受影响。"
                }
              }
            })
          })
        }) : null]
      });
    };
  var _v212 = _v0.i(0),
    _v213 = _v0.i(0),
    _v214 = _v0.i(0);
  let _v215 = ["Owner", "Admin", "Contributor Plus"],
    _v216 = ["enterpriseAddonTrials.expiresOn", "enterpriseAddonTrials.forcedUpsell", "enterpriseAddonTrials.key", "enterpriseAddonTrials.paid", "enterpriseAddonTrials.trial"];
  var _v217 = _v0.i(0),
    _v218 = _v0.i(0),
    _v219 = _v0.i(0);
  function _v220({
    ..._v0
  }) {
    let {
        stats: _v1
      } = (0, _v9.useManager)(_v219.StreamHealthManager),
      _v2 = _v1?.streamStatus || _v218.EStreamStatus.UNKNOWN,
      _v3 = (0, _v88.useColorModeValue)("#0E1216", "#F9FAFB"),
      _v4 = (0, _v88.useColorModeValue)("#3D4751", "#B6C0CC"),
      _v5 = (0, _v88.useColorModeValue)("#68727C", "#7E8894"),
      _v6 = (0, _v10.useMemo)(() => {
        switch (_v2) {
          case _v218.EStreamStatus.GOOD:
          case _v218.EStreamStatus.READY:
            return {
              activeBars: 4,
              getColor: () => _v82.CONNECTED_STATUS_COLOR
            };
          case _v218.EStreamStatus.UNSTABLE:
            return {
              activeBars: 3,
              getColor: _v0 => _v0 < 3 ? _v82.WARNING_LAYOUT_COLOR : _v5
            };
          case _v218.EStreamStatus.OFFLINE:
          case _v218.EStreamStatus.UNKNOWN:
            return {
              activeBars: 0,
              getColor: () => _v4
            };
          default:
            return {
              activeBars: 4,
              getColor: () => _v3
            };
        }
      }, [_v2, _v3, _v4, _v5]);
    return (0, _v4.jsx)(_v217.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      children: (0, _v81.range)(4).map(_v0 => (0, _v4.jsx)("rect", {
        x: 6 + 4 * _v0,
        y: 14.5 - 3.5 * _v0,
        width: 2,
        height: 5 + 3.5 * _v0,
        rx: 2,
        ry: 2,
        fill: _v6.getColor(_v0)
      }, _v0))
    });
  }
  var _v221 = _v9,
    _v222 = _v0.i(0),
    _v223 = _v0.i(0),
    _v224 = _v0.i(0),
    _v225 = _v0.i(0);
  function _v226({
    className: _v0 = (0, _v40.createLiveDomName)("broadcaster-presence-circle-item"),
    participant: _v1,
    isBroadcaster: _v2
  }) {
    let _v3 = (0, _v10.useMemo)(() => _v82.RANDOMIZED_AVATAR_COLORS[Math.floor(Math.random() * _v82.RANDOMIZED_AVATAR_COLORS.length)], []),
      _v4 = _v1?.avatarUrl || void 0;
    return (0, _v4.jsx)(_v13.Flex, {
      className: _v0,
      position: "relative",
      marginLeft: (0, _v11.rem)(-10),
      alignItems: "center",
      justifyContent: "center",
      width: (0, _v11.rem)(_v2 ? 22 : 24),
      height: (0, _v11.rem)(_v2 ? 22 : 24),
      borderRadius: "50%",
      border: "solid",
      borderWidth: "2px",
      borderColor: _v2 ? "text-primary" : "background",
      background: "background",
      userSelect: "none",
      backgroundColor: _v4 ? void 0 : _v3,
      sx: {
        "& svg, & div, & img": {
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "100%",
          border: "none"
        }
      },
      children: (0, _v4.jsx)(_v225.Avatar, {
        className: (0, _v40.createLiveDomName)(_v0, "avatar"),
        alt: "avatar",
        src: _v4 ?? void 0,
        size: "md"
      })
    });
  }
  function _v227({
    id: _v0 = (0, _v40.createLiveDomName)("broadcaster-presence-circle-more"),
    className: _v1 = (0, _v40.createLiveDomName)("broadcaster-presence-circle-more"),
    count: _v2
  }) {
    return (0, _v4.jsxs)(_v13.Flex, {
      id: _v0,
      className: _v1,
      position: "relative",
      width: (0, _v11.rem)(24),
      height: (0, _v11.rem)(24),
      marginLeft: (0, _v11.rem)(-10),
      fontSize: (0, _v11.rem)(10),
      borderRadius: "50%",
      userSelect: "none",
      backgroundColor: "surface",
      border: "2px solid",
      borderColor: "background",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      color: "text-secondary",
      children: ["+", _v2]
    });
  }
  var _v228 = _v0.i(0),
    _v229 = _v0.i(0),
    _v230 = _v0.i(0);
  function _v231({
    className: _v0 = (0, _v40.createLiveDomName)("broadcaster-presence-list-item"),
    participant: _v1,
    isYou: _v2,
    isBroadcaster: _v3,
    onSwitchToBroadcaster: _v4
  }) {
    let _v5 = _v1?.avatarUrl;
    return (0, _v4.jsxs)(_v13.Flex, {
      className: _v0,
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      gap: (0, _v11.rem)(12),
      padding: (0, _v11.rem)(8),
      borderRadius: (0, _v11.rem)(8),
      _hover: {
        background: "fill-component-hover"
      },
      children: [(0, _v4.jsx)(_v225.Avatar, {
        className: (0, _v40.createLiveDomName)(_v0, "avatar"),
        alt: "avatar",
        src: _v5 ?? void 0,
        size: "sm"
      }), (0, _v4.jsxs)(_v13.Flex, {
        direction: "column",
        grow: 1,
        children: [(0, _v4.jsxs)(_v13.Flex, {
          gap: (0, _v11.rem)(4),
          children: [(0, _v4.jsx)(_v18.Paragraph, {
            className: (0, _v40.createLiveDomName)(_v0, "name"),
            size: "md",
            color: "text-primary",
            children: _v1.name
          }), _v2 ? (0, _v4.jsx)(_v13.Flex, {
            className: (0, _v40.createLiveDomName)(_v0, "me-badge"),
            background: "status-caution-primary",
            color: "white",
            textTransform: "capitalize",
            fontSize: (0, _v11.rem)(12),
            paddingX: (0, _v11.rem)(4),
            borderRadius: (0, _v11.rem)(4),
            alignItems: "center",
            children: _v41.translations.me
          }) : null]
        }), (0, _v4.jsx)(_v18.Paragraph, {
          className: (0, _v40.createLiveDomName)(_v0, "role"),
          size: "sm",
          color: "text-secondary",
          children: _v3 ? _v41.translations.broadcaster : _v41.translations.admin
        })]
      }), _v2 || _v3 ? (0, _v4.jsx)(_v230.TooltipIconButton, {
        className: (0, _v40.createLiveDomName)(_v0, "switch-button"),
        "aria-label": _v3 ? _v41.translations.broadcaster : _v41.translations.setAsBroadcaster,
        size: "sm",
        variant: "tertiary",
        isDisabled: _v3,
        label: _v3 ? _v41.translations.broadcaster : _v41.translations.setAsBroadcaster,
        icon: _v3 ? (0, _v4.jsx)(_v229.CameraOnFilled, {}) : (0, _v4.jsx)(_v228.CameraOn, {}),
        onClick: _v4
      }) : null]
    });
  }
  var _v232 = _v40;
  let _v233 = (0, _v10.memo)(({
    id: _v0 = (0, _v232.createLiveDomName)("broadcaster-presence-list"),
    className: _v1 = (0, _v232.createLiveDomName)("broadcaster-presence-list"),
    presenceContext: {
      eventConnections: _v2,
      broadcasterId: _v3,
      currentConnectionId: _v4,
      presenceActions: _v5
    } = (0, _v221.useManager)(_v224.PresenceManager)
  }) => {
    let {
        triggerRef: _v6,
        contentRef: _v7,
        isOpen: _v8,
        onTogglePopover: _v9
      } = (0, _v223.useControlledPopover)(),
      [_v10, _v11] = function ({
        eventConnections: _v0,
        broadcasterId: _v1,
        currentConnectionId: _v2
      }) {
        return (0, _v10.useMemo)(() => {
          let _v0 = null,
            _v1 = null,
            _v2 = Object.values(_v0).sort((_v0, _v1) => String(_v0.id).localeCompare(String(_v1.id))),
            _v3 = _v2.filter(_v0 => _v0.id === _v2 || _v0.id === _v1 || !_v0.isHidden),
            _v4 = _v2.filter(_v0 => {
              let _v1 = _v0.id === _v2,
                _v2 = _v0.id === _v1;
              return _v1 || _v2 ? (_v2 && (_v0 = _v0), _v1 && (_v1 = _v0), !1) : !_v0.isHidden;
            });
          return _v1 && _v4.unshift(_v1), _v0 && _v1 !== _v0 && _v4.unshift(_v0), [_v3, _v4, _v0, _v1];
        }, [_v0, _v1, _v2]);
      }({
        eventConnections: _v2,
        broadcasterId: _v3,
        currentConnectionId: _v4
      });
    return 0 === _v11.length ? (0, _v4.jsx)(_v13.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "center",
      children: (0, _v4.jsx)(_v45.Spinner, {
        id: (0, _v232.createLiveDomName)(_v0, "loader"),
        className: (0, _v232.createLiveDomName)(_v1, "loader"),
        size: "xs"
      })
    }) : (0, _v4.jsx)(_v222.BokehPopover, {
      isOpen: _v8,
      placement: "bottom",
      triggerContent: (0, _v4.jsx)("div", {
        children: (0, _v4.jsx)(_v94.BokehTooltip, {
          label: _v41.translations.team,
          placement: "bottom",
          children: (0, _v4.jsx)(_v13.Flex, {
            ref: _v6,
            id: _v0,
            className: _v1,
            position: "relative",
            height: (0, _v11.rem)(32),
            borderRadius: (0, _v11.rem)(8),
            justifyContent: "flex-end",
            cursor: "pointer",
            overflow: "hidden",
            _hover: {
              background: "surface"
            },
            onClick: _v9,
            children: (0, _v4.jsxs)(_v13.Flex, {
              id: (0, _v232.createLiveDomName)(_v0, "content"),
              className: (0, _v232.createLiveDomName)(_v1, "content"),
              position: "relative",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
              padding: `${(0, _v11.rem)(4)} ${(0, _v11.rem)(4)} ${(0, _v11.rem)(4)} ${(0, _v11.rem)(14)}`,
              children: [_v11.slice(0, 3).map(_v0 => (0, _v4.jsx)(_v226, {
                className: (0, _v232.createLiveDomName)(_v1, "circle-item"),
                participant: _v0,
                isBroadcaster: _v0.id === _v3
              }, _v0.id)), _v11.length > 3 ? (0, _v4.jsx)(_v227, {
                id: (0, _v232.createLiveDomName)(_v0, "circle-more"),
                className: (0, _v232.createLiveDomName)(_v1, "circle-more"),
                count: _v11.length - 3
              }) : null]
            })
          })
        })
      }),
      content: (0, _v4.jsxs)(_v13.Flex, {
        ref: _v7,
        id: (0, _v232.createLiveDomName)(_v0, "popover-content"),
        className: (0, _v232.createLiveDomName)(_v1, "popover-content"),
        direction: "column",
        width: (0, _v11.rem)(300),
        children: [(0, _v4.jsxs)(_v13.Flex, {
          id: (0, _v232.createLiveDomName)(_v0, "popover-title"),
          className: (0, _v232.createLiveDomName)(_v1, "popover-title"),
          alignItems: "center",
          gap: (0, _v11.rem)(4),
          padding: (0, _v11.rem)(4),
          children: [(0, _v4.jsx)(_v14.Header, {
            size: "sm",
            fontWeight: "bold",
            children: _v41.translations.team
          }), (0, _v4.jsx)(_v18.Paragraph, {
            color: "text-secondary",
            children: _v11.length
          })]
        }), (0, _v4.jsx)(_v13.Flex, {
          id: (0, _v232.createLiveDomName)(_v0, "popover-list"),
          className: (0, _v232.createLiveDomName)(_v1, "popover-list"),
          direction: "column",
          gap: (0, _v11.rem)(8),
          padding: (0, _v11.rem)(4),
          maxHeight: (0, _v11.rem)(400),
          overflowY: "auto",
          children: _v10.map(_v0 => (0, _v4.jsx)(_v231, {
            className: (0, _v232.createLiveDomName)(_v1, "popover-list-item"),
            participant: _v0,
            isBroadcaster: _v0.id === _v3,
            isYou: _v0.id === _v4,
            onSwitchToBroadcaster: () => _v5.switchConnectionToBroadcasterMode(_v0.id)
          }, _v0.id))
        })]
      })
    });
  });
  var _v234 = _v0.i(0),
    _v235 = _v0.i(0);
  let _v236 = _v0 => (0, _v4.jsx)(_v217.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v4.jsx)("path", {
      d: "M3 11c.6 0 1 .4 1 1 0 2.9 1.5 5.5 4 6.9 3.8 2.2 8.7.9 10.9-2.9 2.2-3.8.9-8.7-2.9-10.9-3.3-1.9-7.3-1.2-9.8 1.4h2.4c.6 0 1 .4 1 1s-.4 1-1 1H4.1c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1s1 .4 1 1v1.8C7 3 9.4 2 12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12c0-.6.4-1 1-1Z",
      fill: "currentColor"
    })
  });
  var _v237 = _v0.i(0),
    _v238 = _v0.i(0);
  function _v239({
    id: _v0,
    className: _v1,
    title: _v2,
    description: _v3,
    icon: _v4,
    submitLabel: _v5,
    ariaLabel: _v6,
    tooltipLabel: _v7,
    isDisabled: _v8,
    isOkButtonLoading: _v9,
    onSubmit: _v10
  }) {
    let {
      isOpen: _v11,
      onOpen: _v12,
      onClose: _v13
    } = (0, _v87.useDisclosure)();
    return (0, _v4.jsxs)(_v4.Fragment, {
      children: [(0, _v4.jsx)(_v94.BokehTooltip, {
        label: _v7,
        placement: "bottom",
        children: (0, _v4.jsx)(_v238.BokehIconButton, {
          id: _v0,
          className: _v1,
          ariaLabel: _v6,
          icon: _v4,
          isDisabled: _v8,
          size: "md",
          sx: {
            ...(0, _v47.createSvgStyle)()
          },
          onClick: _v12
        })
      }), (0, _v4.jsx)(_v122, {
        okText: _v5,
        isOpen: _v11,
        title: _v2,
        description: _v3,
        isOkButtonLoading: _v9,
        onOkClick: _v10,
        onClose: _v13
      })]
    });
  }
  function _v240({
    id: _v0 = (0, _v40.createLiveDomName)("recording-action-button"),
    className: _v1 = (0, _v40.createLiveDomName)("recording-action-button"),
    composerSessionStatusContext: {
      ingestStatus: _v2,
      isProvisionUpdating: _v3,
      isProvisionStarting: _v4,
      liveComposerStatusActions: _v5,
      liveComposerStatuses: _v6,
      isResumePauseLoading: _v7
    } = (0, _v9.useManager)(_v35.ComposerSessionStatusManager),
    composerSettingsContext: {
      isRecordingPaused: _v8
    } = (0, _v9.useManager)(_v100.ComposerSettingsManager)
  }) {
    let _v9 = _v2 === _v29.EIngestStatus.UNKNOWN && !_v6.isRtmpMode,
      _v10 = _v2 === _v29.EIngestStatus.PROVISION_REQUESTED || _v4,
      _v11 = _v3 || _v9 || _v10,
      _v12 = (0, _v10.useCallback)(() => {
        _v7 || (_v8 ? _v5.sendRecordStateCommand(_v6.ERecordStateCommand.RESUME) : _v5.sendRecordStateCommand(_v6.ERecordStateCommand.PAUSE));
      }, [_v7, _v8, _v5]),
      _v13 = (0, _v10.useCallback)(() => {
        _v5.sendRecordStateCommand(_v6.ERecordStateCommand.DELETE);
      }, [_v5]),
      _v14 = (0, _v10.useCallback)(() => {
        _v5.sendRecordStateCommand(_v6.ERecordStateCommand.RESTART);
      }, [_v5]);
    (0, _v88.useColorModeValue)("rgb(238 241 244)", "rgb(81 81 81)");
    let _v15 = (0, _v88.useColorModeValue)("gray.200", "gray.600");
    return (0, _v4.jsxs)(_v13.Flex, {
      id: _v0,
      className: _v1,
      direction: "row",
      alignItems: "center",
      height: 40,
      gap: 8,
      backgroundColor: _v15,
      borderRadius: "md",
      zIndex: 1,
      children: [(0, _v4.jsx)(_v94.BokehTooltip, {
        label: _v8 ? _v41.translations.resumeRecording : _v41.translations.pauseRecording,
        placement: "bottom",
        children: (0, _v4.jsx)(_v238.BokehIconButton, {
          id: (0, _v40.createLiveDomName)(_v0, _v8 ? "resume-recording" : "pause-recording"),
          className: (0, _v40.createLiveDomName)(_v1, _v8 ? "resume-recording" : "pause-recording"),
          icon: _v8 ? (0, _v4.jsx)(_v235.PlayFilled, {}) : (0, _v4.jsx)(_v234.PauseFilled, {}),
          size: "md",
          ariaLabel: _v41.translations.mediaVolume,
          isDisabled: _v11,
          sx: {
            ...(0, _v47.createSvgStyle)()
          },
          onClick: _v12
        })
      }), (0, _v4.jsx)(_v239, {
        id: (0, _v40.createLiveDomName)(_v0, "restart-recording"),
        className: (0, _v40.createLiveDomName)(_v1, "restart-recording"),
        isDisabled: _v11,
        icon: (0, _v4.jsx)(_v236, {}),
        title: _v41.translations.startOver,
        description: _v41.translations.recordingDiscardNotice,
        ariaLabel: "restart-recording",
        submitLabel: _v41.translations.startOver,
        tooltipLabel: _v41.translations.startOver,
        isOkButtonLoading: _v3,
        onSubmit: _v14
      }), (0, _v4.jsx)(_v239, {
        id: (0, _v40.createLiveDomName)(_v0, "delete-recording"),
        className: (0, _v40.createLiveDomName)(_v1, "delete-recording"),
        isDisabled: _v11,
        icon: (0, _v4.jsx)(_v237.TrashBin, {}),
        ariaLabel: "delete-recording",
        title: _v41.translations.deleteRecordingAlertNotice,
        submitLabel: _v41.translations.discard,
        tooltipLabel: _v41.translations.deleteRecording,
        isOkButtonLoading: _v3,
        onSubmit: _v13
      })]
    });
  }
  _v0.s(["LiveBroadcasterHeader", 0, function ({
    id: _v0 = (0, _v7.createDomName)("live-broadcaster-header"),
    className: _v1 = (0, _v7.createDomName)("live-broadcaster-header"),
    composerSessionStatusContext: {
      isProvisionStarting: _v2,
      liveComposerStatuses: _v3,
      streamMode: _v4
    } = (0, _v9.useManager)(_v35.ComposerSessionStatusManager),
    composerSessionContext: {
      sessionApplicationType: _v5,
      sessionType: _v6,
      sessionInfo: {
        value: _v7
      },
      permissions: _v8
    } = (0, _v9.useManager)(_v33.ComposerSessionManager),
    panelsContext: {
      rightPanel: _v9
    } = (0, _v9.useManager)(_v80.PanelsManager)
  }) {
    let {
        trackLiveStreamTopBarActionClicked: _v10
      } = (0, _v83.useLiveStreamBroadcasterTracking)(),
      _v11 = (0, _v8.useIsVpaas)(),
      _v12 = (() => {
        let _v0 = (0, _v34.useSessionOwnerId)(),
          _v1 = (0, _v214.useOrionSetting)("release_event_series_v1"),
          _v2 = (0, _v214.useOrionSetting)("enable_event_series_in_dev_features"),
          _v3 = (0, _v213.useOrionLoading)(),
          _v4 = _v0 > 0,
          {
            capabilities: _v5,
            ready: _v6
          } = (0, _v22.useCapability)(["hasEventSeriesEnabled"], _v0),
          {
            data: _v7,
            isLoading: _v8
          } = (0, _v212.useGetUserTeamRole)(() => _v4 && !_v3 && _v1 && _v2 ? {
            select: ["permissionLevel"],
            where: {
              userId: _v0
            }
          } : null, {
            revalidateOnFocus: !1
          }),
          {
            data: _v9,
            isLoading: _v10
          } = (0, _v23.useGetUser)(() => _v4 ? {
            where: {
              userId: _v0
            },
            select: _v216
          } : null, {
            revalidateOnFocus: !1
          }),
          _v11 = _v9?.enterpriseAddonTrials?.find(({
            key: _v0
          }) => "event_series" === _v0),
          _v12 = _v11?.forcedUpsell === !0,
          _v13 = _v11?.trial === !0 && !_v11.paid,
          _v14 = null != _v11 && !!_v11.expiresOn && !_v11.trial && !_v11.paid,
          _v15 = _v7?.permissionLevel,
          _v16 = _v2 && _v1 && null != _v15 && _v215.includes(_v15),
          _v17 = _v5.hasEventSeriesEnabled;
        return !(!_v4 || _v3 || _v8 || !_v6 || _v10) && _v16 && ((_v13 || _v14) && !_v12 || _v17);
      })(),
      _v13 = _v5 === _v6.EComposerApplicationType.RTMP,
      _v14 = _v5 === _v6.EComposerApplicationType.BROADCASTER,
      _v15 = _v6 === _v6.EComposerSessionType.VENUE,
      _v16 = _v4 === _v6.EComposerStreamModeType.RECORD,
      _v17 = _v14 && !_v3.isSessionEnded,
      _v18 = _v13 && !_v15,
      _v19 = _v14 && _v3.isSessionRecordStarted,
      _v20 = !_v15 && !_v16,
      _v21 = !!_v13 || !_v15,
      _v22 = !!(_v7?.owner?.capabilities?.hasLiveSubscription && !_v8.canStream),
      _v23 = (0, _v10.useMemo)(() => [{
        id: _v77.ERightPanelId.STREAM_HEALTH,
        label: _v41.translations.streamHealth,
        icon: (0, _v4.jsx)(_v220, {}),
        isVisible: _v18
      }, {
        id: _v77.ERightPanelId.ANALYTICS,
        label: _v41.translations.analytics,
        icon: (0, _v4.jsx)(_v73.Analytics, {}),
        isVisible: _v20
      }, {
        id: _v77.ERightPanelId.EVENT_SETTINGS,
        label: _v41.translations.settings,
        icon: (0, _v4.jsx)(_v74.SettingsGear, {}),
        isVisible: _v21
      }, {
        id: _v77.ERightPanelId.CHAT,
        label: _v58.T_CHAT,
        icon: (0, _v4.jsx)(_v76.PanelChatIcon, {
          isActive: _v9 === _v77.ERightPanelId.CHAT,
          isManagementAccessed: !0
        }),
        isVisible: !_v14
      }], [_v18, _v20, _v21, _v14, _v9]),
      _v24 = (0, _v10.useCallback)(_v0 => {
        switch (!0) {
          case _v9 !== _v77.ERightPanelId.ANALYTICS && _v0 === _v77.ERightPanelId.ANALYTICS:
            _v10({
              liveStreamTopBarAction: "analytics"
            });
            break;
          case _v9 !== _v77.ERightPanelId.EVENT_SETTINGS && _v0 === _v77.ERightPanelId.EVENT_SETTINGS:
            _v10({
              liveStreamTopBarAction: "settings"
            });
            break;
          case _v9 !== _v77.ERightPanelId.CHAT && _v0 === _v77.ERightPanelId.CHAT:
            _v10({
              liveStreamTopBarAction: "chat"
            });
        }
      }, [_v9, _v10]),
      _v25 = (0, _v81.inline)(() => _v2 ? _v82.WARNING_LAYOUT_COLOR : _v3.isSessionLive ? _v82.LIVE_LAYOUT_COLOR : _v3.isSessionUnknown ? _v82.INACTIVE_LAYOUT_COLOR : "transparent");
    return (0, _v4.jsxs)(_v13.Flex, {
      id: _v0,
      className: _v1,
      flexDirection: "column",
      children: [_v22 ? (0, _v4.jsx)(_v50.Alert, {
        id: (0, _v7.createDomName)(_v0, "private-folder-notice"),
        status: "error",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: 0,
        children: (0, _v4.jsx)(_v51.AlertDescription, {
          children: _v41.translations.eventPrivateToMeFolderWarning
        })
      }) : null, (0, _v4.jsx)(_v13.Flex, {
        id: (0, _v7.createDomName)(_v0, "content"),
        className: (0, _v7.createDomName)(_v1, "content"),
        align: "center",
        justify: "space-between",
        position: "relative",
        padding: `${(0, _v11.rem)(10)} ${(0, _v11.rem)(16)} ${(0, _v11.rem)(12)} ${(0, _v11.rem)(16)}`,
        minHeight: (0, _v11.rem)(64),
        height: (0, _v11.rem)(64),
        maxHeight: (0, _v11.rem)(64),
        color: "text.300",
        borderTop: "2px solid",
        borderTopColor: _v25,
        children: (0, _v4.jsxs)(_v75.LiveErrorBoundary, {
          component: "LiveBroadcasterHeader",
          isDetailed: !1,
          children: [(0, _v4.jsx)(_v84.LivePath, {
            id: (0, _v7.createDomName)(_v0, "path"),
            className: (0, _v7.createDomName)(_v1, "path")
          }), (0, _v4.jsx)(_v46.Box, {
            flexGrow: 1
          }), (0, _v4.jsxs)(_v13.Flex, {
            id: (0, _v7.createDomName)(_v0, "controls"),
            className: (0, _v7.createDomName)(_v1, "controls"),
            align: "center",
            justify: "flex-end",
            flexShrink: 0,
            gap: (0, _v11.rem)(12),
            height: "100%",
            children: [_v17 ? (0, _v4.jsx)(_v233, {
              id: (0, _v7.createDomName)(_v0, "presence"),
              className: (0, _v7.createDomName)(_v1, "presence")
            }) : null, (0, _v4.jsx)(_v78.RightPanelControls, {
              id: (0, _v7.createDomName)(_v0, "right-panel-controls"),
              className: (0, _v7.createDomName)(_v1, "right-panel-controls"),
              panels: _v23,
              onPanelChange: _v24
            }), _v3.isSessionUnknown || _v15 || _v16 || _v11 ? null : (0, _v4.jsxs)(_v4.Fragment, {
              children: [(0, _v4.jsx)(_v173.ShareButton, {
                id: (0, _v7.createDomName)(_v0, "share-button"),
                className: (0, _v7.createDomName)(_v1, "share-button")
              }), (0, _v4.jsx)(_v172, {
                id: (0, _v7.createDomName)(_v0, "embed-button"),
                className: (0, _v7.createDomName)(_v1, "embed-button")
              })]
            }), _v19 ? (0, _v4.jsx)(_v240, {
              id: (0, _v7.createDomName)(_v0, "record-button"),
              className: (0, _v7.createDomName)(_v1, "record-button")
            }) : null, (0, _v4.jsx)(_v123, {
              id: (0, _v7.createDomName)(_v0, "live-button"),
              className: (0, _v7.createDomName)(_v1, "live-button")
            }), !_v15 && _v12 && (0, _v4.jsx)(_v46.Box, {
              id: (0, _v7.createDomName)(_v0, "action-button"),
              className: (0, _v7.createDomName)(_v1, "action-button"),
              children: (0, _v4.jsx)(_v211, {
                zIndex: _v79.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL + 1
              })
            }), _v11 ? null : (0, _v4.jsx)(_v85.LiveBroadcasterHeaderProfile, {
              id: (0, _v7.createDomName)(_v0, "profile"),
              className: (0, _v7.createDomName)(_v1, "profile"),
              isLive: _v3.isSessionLive
            })]
          })]
        })
      })]
    });
  }], 0);
  var _v241 = _v0.i(0),
    _v242 = _v0.i(0),
    _v243 = _v0.i(0),
    _v244 = _v0.i(0);
  _v0.s(["LiveSubscriptionUpsell", 0, function ({
    sessionStatusContext: {
      metering: _v0
    } = (0, _v9.useManager)(_v35.ComposerSessionStatusManager)
  }) {
    let {
        open: _v1,
        upgradeModal: _v2
      } = function ({
        canOpen: _v0 = !0,
        composerSessionContext: {
          sessionInfo: {
            value: _v1
          }
        } = (0, _v9.useManager)(_v33.ComposerSessionManager)
      } = {}) {
        let _v2 = !!_v1?.owner?.capabilities?.hasEnterprise,
          _v3 = !!_v1?.owner?.capabilities?.hasLiveSubscription,
          _v4 = _v2 ? "enterprise" : "default",
          _v5 = "enterprise" === _v4 && _v3,
          _v6 = (0, _v10.useMemo)(() => "default" === _v4 ? {
            headerText: _v241.T_CREATE_ENGAGING_EVENTS,
            subHeaderText: _v241.T_HOST_ANY_TYPE_OF_EVENT,
            excludePlans: ["starter", "standard", "creator"],
            planOverrides: {
              advanced: {
                subHeading: _v241.T_STREAM_HIGH_QUALITY_EVENTS,
                featuresList: _v241.T_ADVANCE_FEATURES_LIST
              },
              enterprise: {
                subHeading: _v241.T_SUPERIOR_ENGAGEMENT_QUALITY,
                featuresList: _v241.T_ENTERPRISE_FEATURES_LIST
              }
            },
            mkcCode: "ent-upgrade-bottom"
          } : _v5 ? {
            enterpriseTitle: _v241.T_CAPTURE_LEADS_AND_VIEWER_LEVEL_INSIGHTS,
            enterpriseSubtitle: _v241.T_TALK_TO_TEAM_ENTERPRISE,
            customFeaturesList: (0, _v4.jsx)(_v242.UpsellFeaturesList, {
              featuresList: _v241.T_TIER_1_ENTERPRISE_FEATURES_LIST
            }),
            mkcCode: "ent-upgrade-bottom"
          } : {
            headerText: _v241.T_CREATE_ENGAGING_EVENTS,
            subHeaderText: _v241.T_HOST_ANY_TYPE_OF_EVENT,
            customFeaturesList: (0, _v4.jsx)(_v242.UpsellFeaturesList, {
              featuresList: _v241.T_DEMO_ENTERPRISE_FEATURES_LIST
            }),
            mkcCode: "ent-upgrade-bottom"
          }, [_v4, _v5]);
        return (0, _v243.useUpgradeModal)({
          canOpen: _v0,
          templateType: _v4,
          modalConfig: _v6,
          tracking: {
            params: {
              feature: "unified event",
              location: window.location.href,
              page: "registration",
              upsell_name: "registration_in_unified_event"
            },
            paywallTracking: {
              paywallTrigger: "live_event_subscription_upgrade_button",
              paywallLocation: "live_event",
              paywallType: "popup",
              paywallFeature: "live"
            }
          }
        });
      }(),
      _v3 = (0, _v8.useIsVpaas)(),
      [_v4, _v5] = (0, _v10.useMemo)(() => (0, _v244.getTimeComponents)(Math.max(_v0?.secondsRemaining || 0, 0)), [_v0?.secondsRemaining]),
      _v6 = (0, _v10.useCallback)(() => {
        _v1();
      }, [_v1]);
    return (0, _v4.jsxs)(_v46.Box, {
      id: (0, _v40.createLiveDomName)("broadcaster-subscription-upsell"),
      display: "grid",
      gridColumnGap: 16,
      bottom: 16,
      right: 0,
      left: 0,
      alignItems: "center",
      margin: "auto",
      justifyItems: "center",
      zIndex: 0,
      background: "upsell-secondary",
      padding: `${(0, _v11.rem)(8)} ${(0, _v11.rem)(24)}`,
      gridTemplateColumns: "1fr repeat(2, auto) 1fr",
      width: "100%",
      children: [(0, _v4.jsx)(_v14.Header, {
        marginBottom: 0,
        gridColumnStart: 2,
        color: "text-primary",
        size: "xs",
        children: _v3 ? _v41.translations.demoEventNotice : _v41.translations.upgradeToGoLiveDescription
      }), _v3 ? null : (0, _v4.jsx)(_v12.Button, {
        gridColumnStart: 3,
        flexShrink: 0,
        variant: "upsell",
        size: "sm",
        onClick: _v6,
        children: _v41.translations.upgrade
      }), (0, _v4.jsxs)(_v14.Header, {
        gridColumnStart: 4,
        display: "flex",
        alignItems: "center",
        color: "text-primary",
        marginLeft: "auto",
        gap: (0, _v11.rem)(4),
        size: "xs",
        children: [(0, _v4.jsx)(_v107.Clock, {
          color: "text-primary",
          height: (0, _v11.rem)(20)
        }), _v41.translations.streamTimeRemaining(_v4, _v5)]
      }), _v2]
    });
  }], 0);
  var _v245 = _v0.i(0);
  let _v246 = _v0 => (0, _v4.jsx)(_v217.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v4.jsx)("path", {
      d: "M14.36 14.23a3.76 3.76 0 0 1-4.72 0 1.001 1.001 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1.001 1.001 0 0 0-1.28-1.54Zm-5.15-3.69a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41 3.08 3.08 0 0 0-4.24 0 1 1 0 1 0 1.41 1.41 1.001 1.001 0 0 1 1.42 0Zm8.41-1.41a3.08 3.08 0 0 0-4.24 0 1 1 0 0 0 1.41 1.41 1.002 1.002 0 0 1 1.42 0 1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z",
      fill: "currentColor"
    })
  });
  function _v247({
    id: _v0 = (0, _v7.createDomName)("reactions-toggle-row"),
    className: _v1 = (0, _v7.createDomName)("reactions-toggle-row"),
    isEnabled: _v2,
    onChange: _v3
  }) {
    return (0, _v4.jsxs)(_v13.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "space-between",
      pt: (0, _v11.rem)(16),
      pb: (0, _v11.rem)(16),
      pr: (0, _v11.rem)(8),
      pl: 0,
      gap: (0, _v11.rem)(16),
      children: [(0, _v4.jsxs)(_v69.Center, {
        gap: "sm",
        alignItems: "center",
        flex: "1",
        minWidth: "0",
        children: [(0, _v4.jsx)(_v69.Center, {
          boxSize: "md",
          borderRadius: "full",
          position: "relative",
          flexShrink: 0,
          children: (0, _v4.jsx)(_v246, {
            boxSize: "xs"
          })
        }), (0, _v4.jsxs)(_v13.Flex, {
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "px",
          flex: "1",
          minWidth: "0",
          children: [(0, _v4.jsxs)(_v69.Center, {
            gap: (0, _v11.rem)(6),
            alignItems: "center",
            children: [(0, _v4.jsx)(_v14.Header, {
              size: "xs",
              textAlign: "start",
              children: (0, _v53.translate)({
                singular: "Reactions",
                dictionary: {
                  es: {
                    singular: "Reacciones"
                  },
                  "de-DE": {
                    singular: "Reaktionen"
                  },
                  "fr-FR": {
                    singular: "Réactions"
                  },
                  "ja-JP": {
                    singular: "リアクション"
                  },
                  "ko-KR": {
                    singular: "반응"
                  },
                  "pt-BR": {
                    singular: "Reações"
                  },
                  "zh-CN": {
                    singular: "反应"
                  }
                }
              })
            }), (0, _v4.jsx)(_v245.Badge, {
              size: "xs",
              variant: "new",
              height: (0, _v11.rem)(16),
              paddingY: "0",
              children: (0, _v53.translate)({
                singular: "New",
                dictionary: {
                  es: {
                    singular: "Nuevo"
                  },
                  "de-DE": {
                    singular: "Neu"
                  },
                  "fr-FR": {
                    singular: "Nouveau"
                  },
                  "ja-JP": {
                    singular: "新規作成"
                  },
                  "ko-KR": {
                    singular: "신규"
                  },
                  "pt-BR": {
                    singular: "Novo"
                  },
                  "zh-CN": {
                    singular: "新"
                  }
                }
              })
            })]
          }), (0, _v4.jsx)(_v18.Paragraph, {
            size: "sm",
            textAlign: "start",
            color: "text-secondary",
            children: (0, _v53.translate)({
              singular: "Let viewers send emoji that float over your stream.",
              dictionary: {
                es: {
                  singular: "Permite a los espectadores enviar emojis que flotan sobre tu transmisión."
                },
                "de-DE": {
                  singular: "Erlaube Zuschauern, Emojis zu senden, die über deinen Stream schweben."
                },
                "fr-FR": {
                  singular: "Permettez aux spectateurs d'envoyer des emoji qui flottent au-dessus de votre diffusion."
                },
                "ja-JP": {
                  singular: "視聴者が配信上に浮かぶ絵文字を送信できるようにします。"
                },
                "ko-KR": {
                  singular: "시청자가 스트림 위에 떠다니는 이모지를 보낼 수 있도록 허용합니다."
                },
                "pt-BR": {
                  singular: "Permita que os espectadores enviem emojis que flutuam sobre sua transmissão."
                },
                "zh-CN": {
                  singular: "允许观众发送在直播画面上漂浮的表情符号。"
                }
              }
            })
          })]
        })]
      }), (0, _v4.jsx)(_v133.Switch, {
        flexShrink: 0,
        "aria-label": (0, _v53.translate)({
          singular: "Enable reactions",
          dictionary: {
            es: {
              singular: "Activar reacciones"
            },
            "de-DE": {
              singular: "Reaktionen aktivieren"
            },
            "fr-FR": {
              singular: "Activer les réactions"
            },
            "ja-JP": {
              singular: "リアクションを有効にする"
            },
            "ko-KR": {
              singular: "리액션 활성화"
            },
            "pt-BR": {
              singular: "Ativar reações"
            },
            "zh-CN": {
              singular: "启用实时互动表情"
            }
          }
        }),
        isChecked: !!_v2,
        isDisabled: null === _v2,
        onChange: _v3
      })]
    });
  }
  _v0.s(["ReactionsToggleRow", 0, _v247], 0);
  var _v248 = _v0.i(0),
    _v249 = _v0.i(0),
    _v250 = _v0.i(0),
    _v251 = _v0.i(0);
  _v0.s(["ReactionsTab", 0, function ({
    id: _v0 = (0, _v7.createDomName)("reactions-tab"),
    className: _v1 = (0, _v7.createDomName)("reactions-tab")
  }) {
    let {
        isEnabled: _v2,
        reactionActions: _v3
      } = (0, _v9.useManager)(_v248.ReactionManager),
      {
        trackLiveStreamReactionsToggled: _v4
      } = (0, _v83.useLiveStreamBroadcasterTracking)(),
      _v5 = (0, _v10.useCallback)(_v0 => {
        _v0 ? _v3.enableReactions() : _v3.disableReactions(), _v4({
          liveStreamNewStatus: _v0
        });
      }, [_v3, _v4]),
      _v6 = (0, _v10.useCallback)(() => {
        _v5(!0 !== _v2);
      }, [_v2, _v5]);
    return (0, _v4.jsxs)(_v4.Fragment, {
      children: [(0, _v4.jsx)(_v251.LeftPanelHeader, {
        id: (0, _v7.createDomName)(_v0, "header"),
        className: (0, _v7.createDomName)(_v1, "header"),
        label: (0, _v53.translate)({
          singular: "Reactions",
          dictionary: {
            es: {
              singular: "Reacciones"
            },
            "de-DE": {
              singular: "Reaktionen"
            },
            "fr-FR": {
              singular: "Réactions"
            },
            "ja-JP": {
              singular: "リアクション"
            },
            "ko-KR": {
              singular: "반응"
            },
            "pt-BR": {
              singular: "Reações"
            },
            "zh-CN": {
              singular: "反应"
            }
          }
        }),
        controls: (0, _v4.jsx)(_v250.LeftPanelDismiss, {
          id: (0, _v7.createDomName)(_v0, "dismiss-button"),
          className: (0, _v7.createDomName)(_v1, "dismiss-button")
        })
      }), (0, _v4.jsx)(_v249.LeftPanelContent, {
        fitContent: !0,
        children: (0, _v4.jsx)(_v247, {
          id: (0, _v7.createDomName)(_v0, "toggle-row"),
          className: (0, _v7.createDomName)(_v1, "toggle-row"),
          isEnabled: _v2,
          onChange: _v6
        })
      })]
    });
  }], 0);
  var _v252 = _v0.i(0);
  _v0.s(["useLiveReactionsAvailable", 0, function () {
    let _v0 = (0, _v34.useSessionOwnerId)(),
      {
        capabilities: _v1
      } = (0, _v22.useCapability)(["canEnableLiveReactions"], _v0);
    return (0, _v252.useOrionSettingsFields)(["enable_live_reactions"]).enable_live_reactions && !!_v1.canEnableLiveReactions;
  }], 0);
}