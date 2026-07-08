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
    _v17 = _v0.i(0);
  let _v18 = {
      value: _v16.EEventLatency.Low,
      title: (0, _v6.translate)({
        singular: "Low (5–7 second delay)",
        dictionary: {
          es: {
            singular: "Baja (5–7 segundos de retraso)"
          },
          "de-DE": {
            singular: "Niedrig (5–7 Sekunden Verzögerung)"
          },
          "fr-FR": {
            singular: "Faible (délai de 5–7 secondes)"
          },
          "ja-JP": {
            singular: "低（5〜7秒の遅延）"
          },
          "ko-KR": {
            singular: "저(5–7초 지연)"
          },
          "pt-BR": {
            singular: "Baixa (atraso de 5–7 segundos)"
          },
          "zh-CN": {
            singular: "低（5–7 秒延迟）"
          }
        }
      }),
      description: (0, _v6.translate)({
        singular: "Best for real-time audience interaction",
        dictionary: {
          es: {
            singular: "Ideal para interacción en tiempo real con la audiencia"
          },
          "de-DE": {
            singular: "Am besten für Echtzeit‑Interaktion mit dem Publikum"
          },
          "fr-FR": {
            singular: "Idéal pour l'interaction en temps réel avec l'audience"
          },
          "ja-JP": {
            singular: "リアルタイムの視聴者交流に最適"
          },
          "ko-KR": {
            singular: "실시간 관객 상호작용에 최적"
          },
          "pt-BR": {
            singular: "Ideal para interação em tempo real com o público"
          },
          "zh-CN": {
            singular: "适合实时观众互动"
          }
        }
      })
    },
    _v19 = {
      value: _v16.EEventLatency.Standard,
      title: (0, _v6.translate)({
        singular: "Standard (15–20 second delay)",
        dictionary: {
          es: {
            singular: "Estándar (15–20 segundos de retraso)"
          },
          "de-DE": {
            singular: "Standard (15–20 Sekunden Verzögerung)"
          },
          "fr-FR": {
            singular: "Standard (délai de 15–20 secondes)"
          },
          "ja-JP": {
            singular: "スタンダード（15〜20秒の遅延）"
          },
          "ko-KR": {
            singular: "표준(15–20초 지연)"
          },
          "pt-BR": {
            singular: "Padrão (atraso de 15–20 segundos)"
          },
          "zh-CN": {
            singular: "标准（15–20 秒延迟）"
          }
        }
      }),
      description: (0, _v6.translate)({
        singular: "Best for high-quality viewer playback",
        dictionary: {
          es: {
            singular: "Ideal para reproducción de alta calidad para los espectadores"
          },
          "de-DE": {
            singular: "Am besten für hochwertige Wiedergabe beim Zuschauer"
          },
          "fr-FR": {
            singular: "Idéal pour une lecture de haute qualité pour les spectateurs"
          },
          "ja-JP": {
            singular: "高品質な視聴体験に最適"
          },
          "ko-KR": {
            singular: "고품질 시청자 재생에 최적"
          },
          "pt-BR": {
            singular: "Ideal para reprodução de alta qualidade para os espectadores"
          },
          "zh-CN": {
            singular: "适合高质量观众回放"
          }
        }
      })
    },
    _v20 = {
      value: _v16.EEventLatency.FailSafe,
      title: (0, _v6.translate)({
        singular: "Fail-safe streaming (60–70 second delay)",
        dictionary: {
          es: {
            singular: "Transmisión a prueba de fallos (60–70 segundos de retraso)"
          },
          "de-DE": {
            singular: "Ausfallsicheres Streaming (60–70 Sekunden Verzögerung)"
          },
          "fr-FR": {
            singular: "Streaming tolérant aux pannes (délai de 60–70 secondes)"
          },
          "ja-JP": {
            singular: "フェールセーフ配信（60〜70秒の遅延）"
          },
          "ko-KR": {
            singular: "페일세이프 스트리밍(60–70초 지연)"
          },
          "pt-BR": {
            singular: "Streaming com tolerância a falhas (atraso de 60–70 segundos)"
          },
          "zh-CN": {
            singular: "故障保护流（60–70 秒延迟）"
          }
        }
      }),
      description: (0, _v6.translate)({
        singular: "Best for overall reliability and stability",
        dictionary: {
          es: {
            singular: "Ideal para fiabilidad y estabilidad generales"
          },
          "de-DE": {
            singular: "Am besten für Zuverlässigkeit und Stabilität insgesamt"
          },
          "fr-FR": {
            singular: "Idéal pour la fiabilité et la stabilité globales"
          },
          "ja-JP": {
            singular: "信頼性と安定性に最適"
          },
          "ko-KR": {
            singular: "전반적인 안정성과 신뢰성에 최적"
          },
          "pt-BR": {
            singular: "Ideal para confiabilidade e estabilidade gerais"
          },
          "zh-CN": {
            singular: "适合整体可靠性和稳定性"
          }
        }
      })
    },
    _v21 = [_v18, _v19, _v20];
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = (0, _v0.i(0).buildProductAnalyticsBpContext)({
      feature: "fail_safe_stream",
      location: "modal",
      product: "events",
      copy: "enterprise",
      modal_name: "event_creation_wizard_modal"
    }),
    _v29 = (0, _v26.buildThirdPartyIntegrationBpContext)({
      is_partner: !1,
      integration_name: null,
      integration_id: null
    }),
    _v30 = (0, _v24.buildViewBpContext)({
      feature: null,
      view_type: "impression"
    }),
    _v31 = (0, _v25.buildActionBpContext)({
      feature: null,
      action_type: "click"
    }),
    _v32 = (0, _v23.createNullObject)(["add_on_feature", "currency", "duration", "usd_price", "is_discount", "selected_plan", "purchase_type", "discount_offer", "promo_code_id", "is_dismissible", "interface_type"]),
    _v33 = _v0 => {
      let _v1 = {
        ..._v28,
        ...(0, _v27.buildWebBpContext)({
          page_name: "event_library",
          location: null,
          path: window.location.pathname,
          target: "contact_us",
          copy: "enterprise"
        }),
        ..._v29
      };
      "impression" === _v0 ? (0, _v23.sendBpEventWithContexts)("vimeo.upsell_trigger_impression", {
        ..._v30,
        ..._v1
      }, 10, {
        ..._v32,
        upsell_name: "fail_safe_stream"
      }) : (0, _v23.sendBpEventWithContexts)("vimeo.trigger_upsell", {
        ..._v31,
        ..._v1
      }, 12, {
        ..._v32,
        upsell_name: "fail_safe_stream"
      });
    };
  function _v34({
    capabilities: _v0,
    onFailSafeUpsell: _v1
  }) {
    let _v2 = _v0?.hasDashStreaming,
      _v3 = _v0?.liveSubscription || _v0?.hasLiveSubscription,
      _v4 = _v0?.hasEnterprise || _v0?.enterprise,
      _v5 = (0, _v7.useCallback)(() => {
        _v4 || (_v33("click"), _v1 ? _v1() : (window?.top ?? window.self).open("https://vimeo.com/enterprise/contact-us?mkc=368ip-fs-mp", "_blank"));
      }, [_v4, _v1]);
    return (0, _v7.useEffect)(() => {
      _v4 || _v33("impression");
    }, [_v4]), _v2 || _v4 ? null : (0, _v1.jsx)(_v22.Badge, {
      size: "sm",
      variant: "upgrade",
      onClick: _v5,
      cursor: "pointer",
      children: _v3 ? (0, _v6.translate)({
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
      }) : (0, _v6.translate)({
        singular: "Enterprise",
        dictionary: {
          "fr-FR": {
            singular: "Entreprise"
          },
          "zh-CN": {
            singular: "企业"
          }
        }
      })
    });
  }
  function _v35({
    isDisabled: _v0,
    streamingMethod: _v1,
    capabilities: _v2
  }) {
    let _v3 = !!_v2?.hasDashStreaming,
      _v4 = !!(_v2?.ecdn || _v2?.hasEcdn),
      _v5 = !!(_v2?.hasEnterprise || _v2?.enterprise);
    return (0, _v7.useMemo)(() => ({
      [_v16.EEventLatency.FailSafe]: {
        option: _v20,
        isDisabled: !!(_v0 || !_v3 || _v1 === _v16.EEventStreamingMethodVariant.Browser),
        tooltip: !_v3 && _v5 ? (0, _v6.translate)({
          singular: "Fail-safe streaming is not available for demo events",
          dictionary: {
            es: {
              singular: "La transmisión a prueba de fallos no está disponible para eventos de demostración"
            },
            "de-DE": {
              singular: "Ausfallsicheres Streaming ist für Demoveranstaltungen nicht verfügbar"
            },
            "fr-FR": {
              singular: "Le streaming tolérant aux pannes n'est pas disponible pour les événements de démonstration"
            },
            "ja-JP": {
              singular: "デモイベントではフェールセーフ配信は利用できません"
            },
            "ko-KR": {
              singular: "데모 이벤트에는 페일세이프 스트리밍을 제공하지 않습니다"
            },
            "pt-BR": {
              singular: "Streaming com tolerância a falhas não está disponível para eventos de demonstração"
            },
            "zh-CN": {
              singular: "演示活动不可用故障保护流"
            }
          }
        }) : _v1 === _v16.EEventStreamingMethodVariant.Browser ? (0, _v6.translate)({
          singular: "Fail-safe streaming is only available when streaming with an encoder",
          dictionary: {
            es: {
              singular: "La transmisión a prueba de fallos solo está disponible al transmitir con un encoder"
            },
            "de-DE": {
              singular: "Ausfallsicheres Streaming ist nur beim Streaming mit einem Encoder verfügbar"
            },
            "fr-FR": {
              singular: "Le streaming tolérant aux pannes n'est disponible que lors d'un streaming avec encodeur"
            },
            "ja-JP": {
              singular: "フェールセーフ配信はエンコーダーで配信している場合のみ利用可能です"
            },
            "ko-KR": {
              singular: "인코더로 스트리밍할 때만 페일세이프 스트리밍을 사용할 수 있습니다"
            },
            "pt-BR": {
              singular: "Streaming com tolerância a falhas está disponível apenas ao transmitir com um encoder"
            },
            "zh-CN": {
              singular: "仅在使用编码器推流时可用故障保护流"
            }
          }
        }) : null
      },
      [_v16.EEventLatency.Low]: {
        option: _v18,
        isDisabled: !!(_v0 || _v4),
        tooltip: _v4 ? (0, _v6.translate)({
          singular: "Low latency is not available for accounts using eCDN",
          dictionary: {
            es: {
              singular: "La baja latencia no está disponible para cuentas que usan eCDN"
            },
            "de-DE": {
              singular: "Low‑Latency ist für Konten mit eCDN nicht verfügbar"
            },
            "fr-FR": {
              singular: "La faible latence n'est pas disponible pour les comptes utilisant eCDN"
            },
            "ja-JP": {
              singular: "eCDNを使用しているアカウントでは低レイテンシは利用できません"
            },
            "ko-KR": {
              singular: "eCDN을 사용하는 계정은 저지연을 사용할 수 없습니다"
            },
            "pt-BR": {
              singular: "Baixa latência não está disponível para contas que usam eCDN"
            },
            "zh-CN": {
              singular: "使用 eCDN 的账户不可用低延迟"
            }
          }
        }) : null
      },
      [_v16.EEventLatency.Standard]: {
        option: _v19,
        isDisabled: !1,
        tooltip: null
      }
    }), [_v4, _v3, _v0, _v5, _v1]);
  }
  function _v36({
    isDisabled: _v0,
    isMutationAllowed: _v1,
    latency: _v2,
    streamingMethod: _v3,
    capabilities: _v4,
    onLatencyChange: _v5,
    onFailSafeUpsell: _v6
  }) {
    let _v7 = (0, _v13.useColorModeValue)("slate.50", "grayscale.800"),
      _v8 = (0, _v7.useRef)(null),
      _v9 = (0, _v7.useRef)(null),
      _v10 = _v35({
        isDisabled: _v0,
        capabilities: _v4,
        streamingMethod: _v3
      }),
      [_v11, _v12] = (0, _v7.useState)(!1),
      _v13 = (0, _v7.useCallback)(() => _v12(_v0 => !_v0), []);
    return (0, _v7.useLayoutEffect)(() => {
      _v1 && _v10[_v2].isDisabled && _v5(_v19.value);
    }, [_v1, _v2, _v5, _v10]), (0, _v8.useOutsideClick)({
      enabled: _v11,
      ref: _v8,
      handler: _v0 => {
        _v0.target && _v9?.current?.contains(_v0.target) || _v12(!1);
      }
    }), (0, _v1.jsxs)(_v10.Popover, {
      isOpen: _v11 && !_v0,
      placement: "bottom",
      matchWidth: !0,
      children: [(0, _v1.jsx)(_v12.PopoverTrigger, {
        children: (0, _v1.jsxs)(_v2.Flex, {
          ref: _v8,
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: (0, _v4.rem)(32),
          borderRadius: "sm",
          padding: `${(0, _v4.rem)(6)} ${(0, _v4.rem)(12)}`,
          cursor: _v0 ? "not-allowed" : "pointer",
          tabIndex: 0,
          opacity: _v0 ? .6 : 1,
          background: "surface",
          outline: _v11 ? "2px solid" : "1px solid",
          outlineColor: _v11 ? "inherit" : "stroke",
          sx: {
            "&:hover": {
              background: "fill-component-hover"
            },
            "&:focus, &:active": _v0 ? {} : {
              outline: "2px solid",
              outlineColor: "inherit"
            }
          },
          onClick: _v0 ? void 0 : _v13,
          children: [(0, _v1.jsx)(_v9.Paragraph, {
            "data-testid": "event-latency-active-header",
            size: "md",
            color: "text-primary",
            letterSpacing: (0, _v4.rem)(-.14),
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            children: _v10[_v2]?.option.title ?? ""
          }), (0, _v1.jsx)(_v15.ChevronDown, {})]
        })
      }), (0, _v1.jsx)(_v11.PopoverContent, {
        children: (0, _v1.jsx)(_v2.Flex, {
          ref: _v9,
          direction: "column",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%",
          gap: (0, _v4.rem)(8),
          children: _v21.map(_v0 => {
            let _v1 = _v2 === _v0.value,
              _v2 = _v10[_v0.value].isDisabled;
            return (0, _v1.jsx)(_v2.Flex, {
              "data-testid": `event-latency-option-${_v0.value}`,
              direction: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              opacity: _v2 ? .6 : 1,
              padding: `${(0, _v4.rem)(8)} ${(0, _v4.rem)(12)}`,
              borderRadius: "sm",
              cursor: _v2 ? "not-allowed" : "pointer",
              background: _v2 ? _v7 : "transparent",
              _hover: {
                background: "fill-component-hover"
              },
              onClick: () => {
                _v2 || (_v12(!1), _v5(_v0.value));
              },
              children: (0, _v1.jsx)(_v17.BokehTooltip, {
                placement: "bottom",
                maxWidth: (0, _v4.rem)(300),
                label: _v10[_v0.value].tooltip,
                children: (0, _v1.jsxs)(_v2.Flex, {
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: (0, _v4.rem)(8),
                  children: [(0, _v1.jsxs)(_v2.Flex, {
                    direction: "column",
                    alignItems: "start",
                    children: [(0, _v1.jsx)(_v3.Header, {
                      color: "text-primary",
                      size: "xs",
                      children: _v0.title
                    }), (0, _v1.jsx)(_v9.Paragraph, {
                      size: "sm",
                      color: "text-secondary",
                      children: _v0.description
                    })]
                  }), _v0.value === _v16.EEventLatency.FailSafe ? (0, _v1.jsx)(_v34, {
                    capabilities: _v4,
                    onFailSafeUpsell: _v6
                  }) : null, _v1 ? (0, _v1.jsx)(_v14.CheckmarkFilled, {
                    boxSize: (0, _v4.rem)(20),
                    marginLeft: "auto"
                  }) : null]
                })
              })
            }, _v0.value);
          })
        })
      })]
    });
  }
  function _v37({
    isDisabled: _v0,
    isMutationAllowed: _v1,
    latency: _v2,
    streamingMethod: _v3,
    capabilities: _v4,
    onLatencyChange: _v5,
    onFailSafeUpsell: _v6
  }) {
    let _v7 = _v35({
      isDisabled: _v0,
      capabilities: _v4,
      streamingMethod: _v3
    });
    return (0, _v7.useLayoutEffect)(() => {
      _v1 && _v7[_v2].isDisabled && _v5(_v19.value);
    }, [_v1, _v2, _v5, _v7]), (0, _v1.jsx)(_v2.Flex, {
      flexDirection: "column",
      gap: (0, _v4.rem)(8),
      children: _v21.map(_v0 => {
        let _v1 = _v2 === _v0.value,
          _v2 = _v7[_v0.value].isDisabled;
        return (0, _v1.jsx)(_v17.BokehTooltip, {
          placement: "bottom",
          maxWidth: (0, _v4.rem)(300),
          label: _v7[_v0.value].tooltip,
          children: (0, _v1.jsxs)(_v2.Flex, {
            "data-value": _v0.value,
            "data-selected": _v1,
            "data-testid": `event-latency-${_v0.value}`,
            alignItems: "center",
            gap: (0, _v4.rem)(4),
            opacity: _v2 ? .6 : 1,
            cursor: _v2 ? "not-allowed" : "pointer",
            padding: `${(0, _v4.rem)(12)} ${(0, _v4.rem)(16)}`,
            borderRadius: "sm",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: _v1 ? "inherit" : "transparent",
            outline: _v1 ? "1px solid" : "unset",
            outlineColor: _v1 ? "inherit" : "transparent",
            background: "fill-component",
            _hover: {
              background: _v2 ? "transparent" : "fill-component-hover"
            },
            onClick: () => _v2 ? void 0 : _v5(_v0.value),
            children: [(0, _v1.jsxs)(_v2.Flex, {
              direction: "column",
              grow: 1,
              children: [(0, _v1.jsx)(_v3.Header, {
                size: "xs",
                children: _v0.title
              }), (0, _v1.jsx)(_v9.Paragraph, {
                size: "sm",
                color: "text-secondary",
                letterSpacing: (0, _v4.rem)(-.24),
                children: _v0.description
              })]
            }), _v0.value === _v16.EEventLatency.FailSafe ? (0, _v1.jsx)(_v34, {
              capabilities: _v4,
              onFailSafeUpsell: _v6
            }) : null]
          })
        }, _v0.value);
      })
    });
  }
  _v0.s(["EventLatency", 0, function ({
    className: _v0,
    isDisabled: _v1,
    isMutationAllowed: _v2,
    latency: _v3,
    capabilities: _v4,
    streamingMethod: _v5,
    viewType: _v6,
    label: _v7,
    location: _v8,
    onLatencyChange: _v9,
    onFailSafeUpsell: _v10
  }) {
    let _v11 = {
      latency: _v3,
      capabilities: _v4,
      streamingMethod: _v5,
      isDisabled: _v1,
      isMutationAllowed: _v2,
      onLatencyChange: _v9,
      onFailSafeUpsell: _v10
    };
    return (0, _v1.jsxs)(_v2.Flex, {
      width: "100%",
      direction: "column",
      className: _v0,
      "data-testid": "latency-selector-wrapper",
      children: [(0, _v1.jsxs)(_v2.Flex, {
        alignItems: "center",
        gap: (0, _v4.rem)(4),
        marginBottom: (0, _v4.rem)(4),
        children: [_v7 || (0, _v1.jsx)(_v3.Header, {
          size: "xs",
          color: "text-primary",
          children: (0, _v6.translate)({
            singular: "Latency",
            dictionary: {
              es: {
                singular: "Latencia"
              },
              "de-DE": {
                singular: "Latenz"
              },
              "fr-FR": {
                singular: "Latence"
              },
              "ja-JP": {
                singular: "レイテンシ"
              },
              "ko-KR": {
                singular: "지연"
              },
              "pt-BR": {
                singular: "Latência"
              },
              "zh-CN": {
                singular: "延迟"
              }
            }
          })
        }), _v8 === _v16.ESettingsLocation.Settings ? null : (0, _v1.jsx)(_v17.BokehTooltip, {
          placement: "right",
          maxWidth: (0, _v4.rem)(300),
          label: (0, _v6.translate)({
            singular: "Latency affects the delay between you and what your audience sees.",
            dictionary: {
              es: {
                singular: "La latencia afecta el retraso entre lo que haces y lo que ve tu audiencia."
              },
              "de-DE": {
                singular: "Die Latenz beeinflusst die Verzögerung zwischen Ihnen und dem, was Ihr Publikum sieht."
              },
              "fr-FR": {
                singular: "La latence affecte le délai entre vous et ce que voit votre audience."
              },
              "ja-JP": {
                singular: "レイテンシはあなたと視聴者が見る内容との遅延に影響します。"
              },
              "ko-KR": {
                singular: "지연은 당신과 청중이 보는 화면 사이의 딜레이에 영향을 줍니다."
              },
              "pt-BR": {
                singular: "A latência afeta o atraso entre você e o que seu público vê."
              },
              "zh-CN": {
                singular: "延迟会影响您与观众所看到内容之间的时间差。"
              }
            }
          }),
          children: (0, _v1.jsx)(_v5.InfoCircle, {
            boxSize: (0, _v4.rem)(16),
            color: "text-tertiary"
          })
        })]
      }), "dropdown" === _v6 && (0, _v1.jsx)(_v36, {
        ..._v11
      }, "latency-dropdown"), "radio" === _v6 && (0, _v1.jsx)(_v37, {
        ..._v11
      }, "latency-radio")]
    });
  }], 0);
}