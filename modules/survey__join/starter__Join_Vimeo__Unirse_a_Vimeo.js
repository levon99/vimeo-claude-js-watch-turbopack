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
    _v24 = _v0.i(0);
  function _v25({
    tier: _v0 = "starter",
    paywallTracking: _v1,
    isUserEligibleForFreeTrial: _v2 = !1,
    postCheckoutUrl: _v3
  }) {
    let _v4 = (0, _v20.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v5 = _v4?.find(_v0 => _v0.tier === _v0) ?? _v4?.[0],
      _v6 = _v5?.metadata?.entitlements?.params?.videoStoragePeriodicQuota,
      _v7 = _v5?.name ?? (0, _v14.default)(`${_v0}`),
      _v8 = !!_v5?.metadata?.interactions?.purchase?.uri?.freeTrial,
      _v9 = (0, _v19.translate)({
        singular: "Join Vimeo",
        dictionary: {
          es: {
            singular: "Unirse a Vimeo"
          },
          "de-DE": {
            singular: "Registriere dich bei Vimeo"
          },
          "fr-FR": {
            singular: "S'inscrire à Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに登録"
          },
          "ko-KR": {
            singular: "Vimeo 가입"
          },
          "pt-BR": {
            singular: "Cadastre-se no Vimeo"
          },
          "zh-CN": {
            singular: "加入 Vimeo"
          }
        }
      }),
      _v10 = _v9.length > 12,
      _v11 = (0, _v18.useColorModeValue)("https://i.vimeocdn.com/custom_asset/4a6f0f615c4cf9d30b48f79df970438e", "https://i.vimeocdn.com/custom_asset/edb2ec4f5620a90adb065894bbb08419");
    return (0, _v1.jsxs)(_v12.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: "calc(100vh - 120px)",
      position: "relative",
      children: [(0, _v1.jsxs)(_v12.Flex, {
        direction: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        gap: "24px",
        flex: "1",
        pb: {
          base: "24px",
          md: "48px"
        },
        mx: {
          base: "0",
          md: "32px"
        },
        overflow: "auto",
        children: [(0, _v1.jsxs)(_v12.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "md",
          width: "100%",
          paddingX: "32px",
          children: [(0, _v1.jsxs)(_v12.Flex, {
            direction: {
              base: "column",
              md: "row"
            },
            alignItems: "center",
            gap: {
              base: "xs",
              md: "sm"
            },
            justifyContent: "center",
            children: [(0, _v1.jsx)(_v16.Text, {
              variant: {
                base: "heading-lg",
                md: _v10 ? "heading-xl" : "heading-2xl"
              },
              whiteSpace: "nowrap",
              children: _v9
            }), (0, _v1.jsx)(_v15.Box, {
              pt: {
                base: "0",
                md: _v10 ? "4px" : "8px"
              },
              children: (0, _v1.jsx)(_v15.Box, {
                bg: "#8a5ee8",
                px: "6px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                children: (0, _v1.jsx)(_v16.Text, {
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "white",
                  children: (0, _v14.default)(`${_v0}`)
                })
              })
            })]
          }), (0, _v1.jsx)(_v16.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            textAlign: "center",
            children: (0, _v19.translate)({
              singular: "All the tools to create, manage, and showcase video.",
              dictionary: {
                es: {
                  singular: "Todas las herramientas para crear, gestionar y mostrar vídeo."
                },
                "de-DE": {
                  singular: "Alle Tools, mit denen Sie Videos erstellen, verwalten und präsentieren können."
                },
                "fr-FR": {
                  singular: "Tous les outils pour créer, gérer et mettre en valeur la vidéo."
                },
                "ja-JP": {
                  singular: "動画を作成、管理、公開するためのすべてのツール。"
                },
                "ko-KR": {
                  singular: "비디오를 제작, 관리 및 전시할 수 있는 모든 도구."
                },
                "pt-BR": {
                  singular: "Todas as ferramentas para criar, gerenciar e exibir vídeos."
                },
                "zh-CN": {
                  singular: "创建、管理和展示视频的所有工具。"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v15.Box, {
          width: "100%",
          maxWidth: "252px",
          maxHeight: "200px",
          minHeight: "120px",
          aspectRatio: "1333/1058",
          children: (0, _v1.jsx)("img", {
            src: _v11,
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }
          })
        }), (0, _v1.jsx)(_v17.VStack, {
          gap: "md",
          alignItems: "start",
          width: "100%",
          children: (0, _v24.getFeatures)(_v6).map((_v0, _v1) => (0, _v1.jsx)(_v21.FeatureRow, {
            ..._v0
          }, `row${_v1}`))
        })]
      }), (0, _v1.jsx)(_v22.PaywallCTAsWrapper, {
        children: (0, _v1.jsx)(_v23.PurchaseButton, {
          subscriptionTier: _v0,
          isTrial: _v8 && _v2,
          planName: _v7,
          paywallTracking: _v1,
          postCheckoutUrl: _v3
        })
      })]
    });
  }
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16
      }
    },
    _v33 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16,
        delay: .16
      }
    };
  function _v34({
    onDismiss: _v0,
    postCheckoutUrl: _v1
  }) {
    let _v2 = (0, _v30.useViewer)(),
      _v3 = _v2?.user?.capabilities?.hasFreeTrialEligibility ?? !1,
      {
        settings: _v4
      } = (0, _v9.useOrionSettings)(),
      _v5 = _v4.onboarding_paywall_kind,
      _v6 = _v4.onboarding_paywall_tier,
      _v7 = _v4.onboarding_paywall_default_periodicity,
      _v8 = _v4.onboarding_paywall_monthly_free_trial,
      _v9 = _v4.onboarding_paywall_dismiss_button_position,
      _v10 = _v4.reverse_free_trial_arm,
      _v11 = "control" !== _v10,
      _v12 = _v11 && _v3,
      _v13 = _v11 && !_v3,
      [_v14, _v15] = (0, _v7.useState)(!1),
      _v16 = {
        paywallTrigger: _v12 ? `registration_survey_reverse_trial_${_v10}` : `registration_survey_trial_upsell_page_${_v5}`,
        paywallLocation: "registration_survey",
        paywallType: "page",
        paywallFeature: "registration_survey"
      },
      {
        trackPaywallDismissed: _v17
      } = (0, _v29.usePaywallTracking)({
        ..._v16,
        isVisible: !_v11
      }),
      _v18 = (0, _v7.useRef)(!1);
    (0, _v7.useEffect)(() => {
      _v13 && !_v18.current && (_v18.current = !0, _v0());
    }, [_v13, _v0]);
    let _v19 = () => {
      _v17(), _v0();
    };
    return _v13 ? (0, _v1.jsx)(_v31.default, {}) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v12.Flex, {
        grow: "1",
        gap: "3",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        children: [(0, _v1.jsx)(_v13.SlideFade, {
          in: !0,
          transition: _v32,
          children: (0, _v1.jsx)(_v1.Fragment, {})
        }, "animate-title"), (0, _v1.jsx)(_v12.Flex, {
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v1.jsxs)(_v13.SlideFade, {
            in: !0,
            transition: _v33,
            style: {
              width: "100%"
            },
            children: [_v12 && (0, _v1.jsx)(_v28.ReverseTrialPaywall, {
              trialDays: "14d" === _v10 ? 14 : 7,
              paywallTracking: _v16,
              onComplete: _v19,
              onActivated: () => _v15(!0),
              postActivationUrl: _v1
            }), !_v11 && "plansComparison" === _v5 && (0, _v1.jsx)(_v26.PlansComparisonPaywall, {
              tier: _v6,
              paywallTracking: _v16,
              defaultPeriodicity: _v7,
              monthlyFreeTrial: _v8,
              postCheckoutUrl: _v1
            }), !_v11 && "featureList" === _v5 && (0, _v1.jsx)(_v25, {
              tier: _v6,
              paywallTracking: _v16,
              isUserEligibleForFreeTrial: _v3,
              postCheckoutUrl: _v1
            })]
          }, "animate-content")
        })]
      }), _v12 && !_v14 && (0, _v1.jsx)(_v27.PlansComparisonPaywallNavigation, {
        dismissButtonPosition: "responsive",
        onDismiss: _v19
      }), !_v11 && (0, _v1.jsx)(_v27.PlansComparisonPaywallNavigation, {
        dismissButtonPosition: _v9,
        onDismiss: _v19
      })]
    });
  }
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = _v0 => ({
    question_id: _v0.id,
    question_text: _v0.question,
    question_description: _v0.description ?? null
  });
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  function _v42({
    text: _v0,
    Icon: _v1,
    isSelected: _v2,
    onToggle: _v3,
    ..._v4
  }) {
    return (0, _v1.jsx)(_v41.Card, {
      onKeyDown: _v0 => {
        "Enter" === _v0.key && _v3();
      },
      onClick: _v3,
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: _v2 ? "stroke-focus" : "input-stroke",
      _hover: {
        borderColor: "var(--vimeo-colors-input-stroke-hover)"
      },
      outline: _v2 ? "1px solid" : void 0,
      ..._v4,
      p: "0.5rem 1rem",
      style: {
        cursor: "pointer",
        userSelect: "none"
      },
      "aria-selected": _v2,
      "aria-label": _v0,
      tabIndex: 0,
      children: (0, _v1.jsxs)(_v12.Flex, {
        justifyContent: "space-between",
        alignItems: {
          base: "center",
          md: "flex-start"
        },
        gap: {
          base: "sm",
          md: "lg"
        },
        textAlign: _v1 ? "left" : "center",
        height: "100%",
        children: [_v1 && (0, _v1.jsx)(_v1, {}), (0, _v1.jsx)(_v16.Text, {
          variant: {
            base: "heading-xs",
            md: "heading-sm"
          },
          width: "100%",
          children: _v0
        })]
      })
    });
  }
  function _v43({
    answers: _v0,
    onToggleAnswer: _v1,
    gridProps: _v2,
    renderSubAnswers: _v3
  }) {
    return _v0 && 0 !== _v0.length ? (0, _v1.jsx)(_v39.Grid, {
      gap: 3,
      ..._v2,
      width: "100%",
      minWidth: {
        base: "auto",
        md: "320px"
      },
      children: _v0.map(_v0 => {
        let _v1 = _v0.icon,
          _v2 = _v3?.(_v0.id),
          _v3 = (0, _v1.jsx)(_v42, {
            text: _v0.label,
            Icon: _v1,
            isSelected: _v0.isSelected,
            onToggle: () => _v1(_v0.id)
          });
        return _v2 ? (0, _v1.jsxs)(_v12.Flex, {
          direction: "column",
          gap: "3",
          children: [_v3, _v2]
        }, _v0.id) : (0, _v1.jsx)(_v42, {
          text: _v0.label,
          Icon: _v1,
          isSelected: _v0.isSelected,
          onToggle: () => _v1(_v0.id)
        }, _v0.id);
      })
    }) : (0, _v1.jsx)(_v40.Spinner, {});
  }
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = _v0 => (0, _v1.jsx)(_v47.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M19 6h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-9-1h4v1h-4V5Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h4v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1h4v5Zm0-7H4V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2Z",
        fill: "currentColor"
      })
    }),
    _v53 = "profile",
    _v54 = "upload_audience",
    _v55 = "usage",
    _v56 = "org_size",
    _v57 = "video_professional",
    _v58 = [{
      id: "video_professional_freelance",
      label: (0, _v19.translate)({
        singular: "Freelance",
        dictionary: {
          "de-DE": {
            singular: "Freiberufler"
          },
          "fr-FR": {
            singular: "Indépendant"
          },
          "ja-JP": {
            singular: "フリーランス"
          },
          "ko-KR": {
            singular: "프리랜서"
          },
          "pt-BR": {
            singular: "Freelancer"
          },
          "zh-CN": {
            singular: "自由职业者"
          }
        }
      }),
      icon: _v48.PersonUser
    }, {
      id: "video_professional_agency",
      label: (0, _v19.translate)({
        singular: "Agency / production company",
        dictionary: {
          es: {
            singular: "Agencia / productora"
          },
          "de-DE": {
            singular: "Agentur / Produktionsfirma"
          },
          "fr-FR": {
            singular: "Agence / société de production"
          },
          "ja-JP": {
            singular: "代理店 / 制作会社"
          },
          "ko-KR": {
            singular: "에이전시 / 제작사"
          },
          "pt-BR": {
            singular: "Agência / produtora"
          },
          "zh-CN": {
            singular: "代理机构 / 制作公司"
          }
        }
      }),
      icon: _v52
    }, {
      id: "video_professional_in_house",
      label: (0, _v19.translate)({
        singular: "In-house at a business",
        dictionary: {
          es: {
            singular: "En el equipo interno de una empresa"
          },
          "de-DE": {
            singular: "Unternehmensintern"
          },
          "fr-FR": {
            singular: "En interne dans une entreprise"
          },
          "ja-JP": {
            singular: "企業内（社内）"
          },
          "ko-KR": {
            singular: "회사 내(사내)"
          },
          "pt-BR": {
            singular: "Na equipe interna de uma empresa"
          },
          "zh-CN": {
            singular: "在公司内部"
          }
        }
      }),
      icon: _v44.Building
    }],
    _v59 = [{
      id: _v53,
      question: (0, _v19.translate)({
        singular: "Which best describes you?",
        dictionary: {
          es: {
            singular: "¿Cuál te describe mejor?"
          },
          "de-DE": {
            singular: "Welche Beschreibung trifft am besten auf Sie zu?"
          },
          "fr-FR": {
            singular: "Laquelle vous décrit le mieux ?"
          },
          "ja-JP": {
            singular: "どれがあなたに最も当てはまりますか？"
          },
          "ko-KR": {
            singular: "어떤 항목이 귀하를 가장 잘 설명하나요?"
          },
          "pt-BR": {
            singular: "Qual das opções melhor descreve você?"
          },
          "zh-CN": {
            singular: "下列哪项最能描述您？"
          }
        }
      }),
      placeholder: "",
      isMultiChoice: !1,
      answers: [{
        id: _v57,
        label: (0, _v19.translate)({
          singular: "Video professional",
          dictionary: {
            es: {
              singular: "Profesional de video"
            },
            "de-DE": {
              singular: "Video-Profi"
            },
            "fr-FR": {
              singular: "Professionnel de la vidéo"
            },
            "ja-JP": {
              singular: "映像のプロフェッショナル"
            },
            "ko-KR": {
              singular: "영상 전문가"
            },
            "pt-BR": {
              singular: "Profissional de vídeo"
            },
            "zh-CN": {
              singular: "视频专业人士"
            }
          }
        }),
        icon: _v49.PresentationPlay
      }, {
        id: "independent_filmmaker",
        label: (0, _v19.translate)({
          singular: "Independent filmmaker",
          dictionary: {
            es: {
              singular: "Cineasta independiente"
            },
            "de-DE": {
              singular: "Unabhängiger Filmemacher"
            },
            "fr-FR": {
              singular: "Réalisateur indépendant"
            },
            "ja-JP": {
              singular: "独立系映画製作者"
            },
            "ko-KR": {
              singular: "독립 영화 제작자"
            },
            "pt-BR": {
              singular: "Cineasta independente"
            },
            "zh-CN": {
              singular: "独立电影制片人"
            }
          }
        }),
        icon: _v49.PresentationPlay
      }, {
        id: "non_video_freelancer",
        label: (0, _v19.translate)({
          singular: "Non-video freelancer",
          dictionary: {
            es: {
              singular: "Freelance no centrado en video"
            },
            "de-DE": {
              singular: "Nicht-Video-Freiberufler"
            },
            "fr-FR": {
              singular: "Indépendant non spécialisé en vidéo"
            },
            "ja-JP": {
              singular: "動画以外のフリーランス"
            },
            "ko-KR": {
              singular: "비영상 프리랜서"
            },
            "pt-BR": {
              singular: "Freelancer não de vídeo"
            },
            "zh-CN": {
              singular: "非视频自由职业者"
            }
          }
        }),
        icon: _v48.PersonUser
      }, {
        id: "business_owner_employee",
        label: (0, _v19.translate)({
          singular: "Business owner or employee",
          dictionary: {
            es: {
              singular: "Propietario o empleado de una empresa"
            },
            "de-DE": {
              singular: "Geschäftsinhaber oder Mitarbeiter"
            },
            "fr-FR": {
              singular: "Propriétaire d'entreprise ou employé"
            },
            "ja-JP": {
              singular: "事業主または従業員"
            },
            "ko-KR": {
              singular: "사업주 또는 직원"
            },
            "pt-BR": {
              singular: "Proprietário ou funcionário de empresa"
            },
            "zh-CN": {
              singular: "企业主或员工"
            }
          }
        }),
        icon: _v44.Building
      }, {
        id: "viewer_only",
        label: (0, _v19.translate)({
          singular: "Viewer only",
          dictionary: {
            es: {
              singular: "Solo espectador"
            },
            "de-DE": {
              singular: "Nur Zuschauer"
            },
            "fr-FR": {
              singular: "Spectateur uniquement"
            },
            "ja-JP": {
              singular: "視聴者のみ"
            },
            "ko-KR": {
              singular: "시청자 전용"
            },
            "pt-BR": {
              singular: "Apenas espectador"
            },
            "zh-CN": {
              singular: "仅作为观众"
            }
          }
        }),
        icon: _v50.SearchMagnifier
      }]
    }, {
      id: _v54,
      question: (0, _v19.translate)({
        singular: "Do you upload videos? Who are these videos for?",
        dictionary: {
          es: {
            singular: "¿Subes videos? ¿Para quiénes son estos videos?"
          },
          "de-DE": {
            singular: "Laden Sie Videos hoch? Für wen sind diese Videos?"
          },
          "fr-FR": {
            singular: "Téléversez-vous des vidéos ? Pour qui sont ces vidéos ?"
          },
          "ja-JP": {
            singular: "動画をアップロードしますか？これらの動画は誰のためのものですか？"
          },
          "ko-KR": {
            singular: "동영상을 업로드하나요? 이 동영상들은 누구를 위한 것인가요?"
          },
          "pt-BR": {
            singular: "Você envia vídeos? Para quem são esses vídeos?"
          },
          "zh-CN": {
            singular: "您会上传视频吗？这些视频是为谁准备的？"
          }
        }
      }),
      description: (0, _v19.translate)({
        singular: "Choose as many as you like",
        dictionary: {
          es: {
            singular: "Selecciona tantas como desees"
          },
          "de-DE": {
            singular: "Wählen Sie so viele, wie Sie möchten"
          },
          "fr-FR": {
            singular: "Choisissez autant que vous le souhaitez"
          },
          "ja-JP": {
            singular: "いくつでも選択できます"
          },
          "ko-KR": {
            singular: "원하시는 만큼 선택하세요"
          },
          "pt-BR": {
            singular: "Escolha quantos quiser"
          },
          "zh-CN": {
            singular: "可选择任意多个"
          }
        }
      }),
      placeholder: "",
      isMultiChoice: !0,
      answers: [{
        id: "clients",
        label: (0, _v19.translate)({
          singular: "Clients",
          dictionary: {
            es: {
              singular: "Clientes"
            },
            "de-DE": {
              singular: "Kunden"
            },
            "ja-JP": {
              singular: "クライアント"
            },
            "ko-KR": {
              singular: "클라이언트"
            },
            "pt-BR": {
              singular: "Clientes"
            },
            "zh-CN": {
              singular: "客户"
            }
          }
        }),
        icon: _v45.Chats
      }, {
        id: "own_brand",
        label: (0, _v19.translate)({
          singular: "My own brand or business",
          dictionary: {
            es: {
              singular: "Mi propia marca o negocio"
            },
            "de-DE": {
              singular: "Meine eigene Marke oder mein eigenes Unternehmen"
            },
            "fr-FR": {
              singular: "Ma propre marque ou entreprise"
            },
            "ja-JP": {
              singular: "自身のブランドまたは事業"
            },
            "ko-KR": {
              singular: "자신의 브랜드나 사업"
            },
            "pt-BR": {
              singular: "Minha própria marca ou negócio"
            },
            "zh-CN": {
              singular: "我的品牌或业务"
            }
          }
        }),
        icon: _v0 => (0, _v1.jsx)(_v47.Icon, {
          viewBox: "0 0 24 24",
          ..._v0,
          fill: "none",
          children: (0, _v1.jsx)("path", {
            d: "M6.5 14h-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Zm-1 5h-1v-3h1v3Zm15-9h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-1 9h-1v-7h1v7Zm-6-16h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16h-1V5h1v14Z",
            fill: "currentColor"
          })
        })
      }, {
        id: "my_company",
        label: (0, _v19.translate)({
          singular: "My company",
          dictionary: {
            es: {
              singular: "Mi empresa"
            },
            "de-DE": {
              singular: "Mein Unternehmen"
            },
            "fr-FR": {
              singular: "Mon entreprise"
            },
            "ja-JP": {
              singular: "自社"
            },
            "ko-KR": {
              singular: "내 회사"
            },
            "pt-BR": {
              singular: "Minha empresa"
            },
            "zh-CN": {
              singular: "我的公司"
            }
          }
        }),
        icon: _v44.Building
      }, {
        id: "creative_audience",
        label: (0, _v19.translate)({
          singular: "A creative audience",
          dictionary: {
            es: {
              singular: "Una audiencia creativa"
            },
            "de-DE": {
              singular: "Ein kreatives Publikum"
            },
            "fr-FR": {
              singular: "Un public créatif"
            },
            "ja-JP": {
              singular: "クリエイティブな視聴者"
            },
            "ko-KR": {
              singular: "창의적인 관객"
            },
            "pt-BR": {
              singular: "Um público criativo"
            },
            "zh-CN": {
              singular: "创意型受众"
            }
          }
        }),
        icon: _v51.Share
      }, {
        id: "just_me",
        label: (0, _v19.translate)({
          singular: "Just me",
          dictionary: {
            es: {
              singular: "Solo yo"
            },
            "de-DE": {
              singular: "Nur ich"
            },
            "fr-FR": {
              singular: "Seulement moi"
            },
            "ja-JP": {
              singular: "自分のみ"
            },
            "ko-KR": {
              singular: "나만"
            },
            "pt-BR": {
              singular: "Somente eu"
            },
            "zh-CN": {
              singular: "仅限我"
            }
          }
        }),
        icon: _v48.PersonUser
      }, {
        id: "mainly_watch",
        label: (0, _v19.translate)({
          singular: "I mainly watch videos",
          dictionary: {
            es: {
              singular: "Principalmente veo videos"
            },
            "de-DE": {
              singular: "Ich schaue hauptsächlich Videos"
            },
            "fr-FR": {
              singular: "Je regarde principalement des vidéos"
            },
            "ja-JP": {
              singular: "主に動画を視聴します"
            },
            "ko-KR": {
              singular: "주로 동영상을 시청합니다"
            },
            "pt-BR": {
              singular: "Eu assisto principalmente vídeos"
            },
            "zh-CN": {
              singular: "我主要观看视频"
            }
          }
        }),
        icon: _v50.SearchMagnifier
      }]
    }, {
      id: _v55,
      question: (0, _v19.translate)({
        singular: "What are you using Vimeo for?",
        dictionary: {
          es: {
            singular: "¿Para qué usas Vimeo?"
          },
          "de-DE": {
            singular: "Wofür nutzen Sie Vimeo?"
          },
          "fr-FR": {
            singular: "À quoi utilisez-vous Vimeo ?"
          },
          "ja-JP": {
            singular: "Vimeoを何に使用していますか？"
          },
          "ko-KR": {
            singular: "Vimeo를 어떤 목적으로 사용하시나요?"
          },
          "pt-BR": {
            singular: "Para que você usa o Vimeo?"
          },
          "zh-CN": {
            singular: "您将 Vimeo 用于什么目的？"
          }
        }
      }),
      description: (0, _v19.translate)({
        singular: "Choose as many as you like",
        dictionary: {
          es: {
            singular: "Selecciona tantas como desees"
          },
          "de-DE": {
            singular: "Wählen Sie so viele, wie Sie möchten"
          },
          "fr-FR": {
            singular: "Choisissez autant que vous le souhaitez"
          },
          "ja-JP": {
            singular: "いくつでも選択できます"
          },
          "ko-KR": {
            singular: "원하시는 만큼 선택하세요"
          },
          "pt-BR": {
            singular: "Escolha quantos quiser"
          },
          "zh-CN": {
            singular: "可选择任意多个"
          }
        }
      }),
      placeholder: "",
      isMultiChoice: !0,
      answers: [{
        id: "share_links",
        label: (0, _v19.translate)({
          singular: "Share video links and files",
          dictionary: {
            es: {
              singular: "Compartir enlaces y archivos de video"
            },
            "de-DE": {
              singular: "Video-Links und Dateien teilen"
            },
            "fr-FR": {
              singular: "Partager des liens et fichiers vidéo"
            },
            "ja-JP": {
              singular: "動画のリンクやファイルを共有する"
            },
            "ko-KR": {
              singular: "동영상 링크 및 파일 공유"
            },
            "pt-BR": {
              singular: "Compartilhar links e arquivos de vídeo"
            },
            "zh-CN": {
              singular: "分享视频链接和文件"
            }
          }
        }),
        icon: _v51.Share
      }, {
        id: "review_feedback",
        label: (0, _v19.translate)({
          singular: "Review videos for feedback with others",
          dictionary: {
            es: {
              singular: "Revisar videos para recibir comentarios con otros"
            },
            "de-DE": {
              singular: "Videos gemeinsam mit anderen zur Rückmeldung prüfen"
            },
            "fr-FR": {
              singular: "Revoir des vidéos pour obtenir des retours avec d'autres"
            },
            "ja-JP": {
              singular: "他者とフィードバックのために動画をレビューする"
            },
            "ko-KR": {
              singular: "다른 사람들과 피드백을 위해 동영상을 검토"
            },
            "pt-BR": {
              singular: "Revisar vídeos para obter feedback com outras pessoas"
            },
            "zh-CN": {
              singular: "与他人一起审看视频以获取反馈"
            }
          }
        }),
        icon: _v45.Chats
      }, {
        id: "embed_videos",
        label: (0, _v19.translate)({
          singular: "Embed videos",
          dictionary: {
            es: {
              singular: "Incrustar videos"
            },
            "de-DE": {
              singular: "Videos einbetten"
            },
            "fr-FR": {
              singular: "Intégrer des vidéos"
            },
            "ja-JP": {
              singular: "動画を埋め込む"
            },
            "ko-KR": {
              singular: "동영상 삽입"
            },
            "pt-BR": {
              singular: "Incorporar vídeos"
            },
            "zh-CN": {
              singular: "嵌入视频"
            }
          }
        }),
        icon: _v49.PresentationPlay
      }, {
        id: "store_organize",
        label: (0, _v19.translate)({
          singular: "Store and organize videos",
          dictionary: {
            es: {
              singular: "Almacenar y organizar videos"
            },
            "de-DE": {
              singular: "Videos speichern und organisieren"
            },
            "fr-FR": {
              singular: "Stocker et organiser des vidéos"
            },
            "ja-JP": {
              singular: "動画を保存・整理する"
            },
            "ko-KR": {
              singular: "동영상 저장 및 정리"
            },
            "pt-BR": {
              singular: "Armazenar e organizar vídeos"
            },
            "zh-CN": {
              singular: "存储并整理视频"
            }
          }
        }),
        icon: _v52
      }, {
        id: "showcase_portfolio",
        label: (0, _v19.translate)({
          singular: "Showcase my work/portfolio",
          dictionary: {
            es: {
              singular: "Mostrar mi trabajo/portafolio"
            },
            "de-DE": {
              singular: "Meine Arbeit/Portfolio präsentieren"
            },
            "fr-FR": {
              singular: "Mettre en valeur mon travail/portfolio"
            },
            "ja-JP": {
              singular: "作品/ポートフォリオを公開する"
            },
            "ko-KR": {
              singular: "내 작품/포트폴리오 전시"
            },
            "pt-BR": {
              singular: "Exibir meu trabalho/portfólio"
            },
            "zh-CN": {
              singular: "展示我的作品/作品集"
            }
          }
        }),
        icon: _v52
      }, {
        id: "share_films",
        label: (0, _v19.translate)({
          singular: "Share films on vimeo.com",
          dictionary: {
            es: {
              singular: "Compartir películas en vimeo.com"
            },
            "de-DE": {
              singular: "Filme auf vimeo.com teilen"
            },
            "fr-FR": {
              singular: "Partager des films sur vimeo.com"
            },
            "ja-JP": {
              singular: "映画を vimeo.com で共有する"
            },
            "ko-KR": {
              singular: "vimeo.com에 영화 공유"
            },
            "pt-BR": {
              singular: "Compartilhar filmes no vimeo.com"
            },
            "zh-CN": {
              singular: "在 vimeo.com 分享影片"
            }
          }
        }),
        icon: _v51.Share
      }, {
        id: "inspiration_discovery",
        label: (0, _v19.translate)({
          singular: "Inspiration or discovery",
          dictionary: {
            es: {
              singular: "Inspiración o descubrimiento"
            },
            "de-DE": {
              singular: "Inspiration oder Entdeckung"
            },
            "fr-FR": {
              singular: "Inspiration ou découverte"
            },
            "ja-JP": {
              singular: "インスピレーションや発見"
            },
            "ko-KR": {
              singular: "영감 또는 발견"
            },
            "pt-BR": {
              singular: "Inspiração ou descoberta"
            },
            "zh-CN": {
              singular: "寻找灵感或发现"
            }
          }
        }),
        icon: _v50.SearchMagnifier
      }, {
        id: "other",
        label: (0, _v19.translate)({
          singular: "Other",
          dictionary: {
            es: {
              singular: "Otro"
            },
            "de-DE": {
              singular: "Sonstiges"
            },
            "fr-FR": {
              singular: "Autre"
            },
            "ja-JP": {
              singular: "その他"
            },
            "ko-KR": {
              singular: "기타"
            },
            "pt-BR": {
              singular: "Outro"
            },
            "zh-CN": {
              singular: "其他"
            }
          }
        }),
        icon: _v46.EllipsisV
      }]
    }, {
      id: _v56,
      question: (0, _v19.translate)({
        singular: "Organization size?",
        dictionary: {
          es: {
            singular: "¿Tamaño de la organización?"
          },
          "de-DE": {
            singular: "Größe der Organisation?"
          },
          "fr-FR": {
            singular: "Taille de l'organisation ?"
          },
          "ja-JP": {
            singular: "組織の規模は？"
          },
          "ko-KR": {
            singular: "조직 규모는?"
          },
          "pt-BR": {
            singular: "Tamanho da organização?"
          },
          "zh-CN": {
            singular: "组织规模？"
          }
        }
      }),
      placeholder: "",
      isMultiChoice: !1,
      answers: [{
        id: "only_me",
        label: (0, _v19.translate)({
          singular: "Just me",
          dictionary: {
            es: {
              singular: "Solo yo"
            },
            "de-DE": {
              singular: "Nur ich"
            },
            "fr-FR": {
              singular: "Seulement moi"
            },
            "ja-JP": {
              singular: "自分のみ"
            },
            "ko-KR": {
              singular: "나만"
            },
            "pt-BR": {
              singular: "Somente eu"
            },
            "zh-CN": {
              singular: "仅限我"
            }
          }
        }),
        icon: _v48.PersonUser
      }, {
        id: "2_10",
        label: (0, _v19.translate)("2-10"),
        icon: _v48.PersonUser
      }, {
        id: "11_50",
        label: (0, _v19.translate)("11-50"),
        icon: _v48.PersonUser
      }, {
        id: "51_200",
        label: (0, _v19.translate)("51-200"),
        icon: _v48.PersonUser
      }, {
        id: "201_1000",
        label: (0, _v19.translate)("201-1,000"),
        icon: _v48.PersonUser
      }, {
        id: "1000_plus",
        label: (0, _v19.translate)("1,000+"),
        icon: _v48.PersonUser
      }]
    }],
    _v60 = _v0 => {
      let _v1 = [..._v0];
      for (let _v0 = _v1.length - 1; _v0 > 0; _v0 -= 1) {
        let _v0 = Math.floor(Math.random() * (_v0 + 1));
        [_v1[_v0], _v1[_v0]] = [_v1[_v0], _v1[_v0]];
      }
      return _v1;
    };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  function _v63({
    progressPct: _v0,
    onBack: _v1,
    onNext: _v2,
    onSkip: _v3,
    isDisabled: _v4 = !1,
    isNextDisabled: _v5 = !1,
    showFinishLabel: _v6 = !0,
    activeNavigation: _v7
  }) {
    return (0, _v1.jsxs)(_v12.Flex, {
      flexDirection: "column",
      gap: "6",
      grow: "1",
      alignItems: "center",
      justifyContent: "flex-end",
      width: {
        base: "100%",
        md: "148px"
      },
      mb: "4rem",
      children: [(0, _v1.jsx)(_v15.Box, {
        bg: "fill-component",
        borderRadius: "4px",
        flexShrink: "0",
        height: "0.25rem",
        hidden: 0 === _v0,
        overflow: "hidden",
        width: {
          base: "240px",
          md: "120px"
        },
        children: (0, _v1.jsx)(_v15.Box, {
          as: _v61.motion.div,
          bg: "fill-brand",
          height: "100%",
          animate: {
            width: `${_v0}%`
          }
        })
      }), (0, _v1.jsxs)(_v12.Flex, {
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "40",
        width: "100%",
        children: [(0, _v1.jsxs)(_v12.Flex, {
          justifyContent: "center",
          gap: "2",
          width: "100%",
          children: [(0, _v1.jsx)(_v64, {
            variant: "secondary",
            onClick: _v1,
            hidden: 0 === _v0,
            isDisabled: _v4,
            loading: "back" === _v7,
            width: "100%",
            children: (0, _v19.translate)({
              singular: "Back",
              dictionary: {
                es: {
                  singular: "Atrás"
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
                  singular: "뒤로"
                },
                "pt-BR": {
                  singular: "Voltar"
                },
                "zh-CN": {
                  singular: "返回"
                }
              }
            })
          }), (0, _v1.jsx)(_v64, {
            variant: "primary",
            onClick: _v2,
            isDisabled: _v4 || _v5,
            loading: "next" === _v7,
            width: "100%",
            children: 100 === _v0 && _v6 ? (0, _v19.translate)({
              singular: "Finish",
              dictionary: {
                es: {
                  singular: "Terminar"
                },
                "de-DE": {
                  singular: "Beenden"
                },
                "fr-FR": {
                  singular: "Terminer"
                },
                "ja-JP": {
                  singular: "終了"
                },
                "ko-KR": {
                  singular: "다음"
                },
                "pt-BR": {
                  singular: "Terminar"
                },
                "zh-CN": {
                  singular: "完成"
                }
              }
            }) : (0, _v19.translate)({
              singular: "Next",
              dictionary: {
                es: {
                  singular: "Siguiente"
                },
                "de-DE": {
                  singular: "Weiter"
                },
                "fr-FR": {
                  singular: "Suivant"
                },
                "ja-JP": {
                  singular: "次へ"
                },
                "ko-KR": {
                  singular: "다음"
                },
                "pt-BR": {
                  singular: "Próxima"
                },
                "zh-CN": {
                  singular: "下一步"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v64, {
          variant: "tertiary",
          onClick: _v3,
          isDisabled: _v4,
          loading: "skip" === _v7,
          top: "2rem",
          right: "2rem",
          position: "absolute",
          width: "auto",
          padding: "md",
          children: (0, _v19.translate)({
            singular: "Skip",
            dictionary: {
              es: {
                singular: "Omitir"
              },
              "de-DE": {
                singular: "Überspringen"
              },
              "fr-FR": {
                singular: "Sauter"
              },
              "ja-JP": {
                singular: "スキップ"
              },
              "ko-KR": {
                singular: "건너뛰기"
              },
              "pt-BR": {
                singular: "PULAR"
              },
              "zh-CN": {
                singular: "跳过"
              }
            }
          })
        })]
      })]
    });
  }
  let _v64 = ({
      children: _v0,
      loading: _v1,
      ..._v2
    }) => (0, _v1.jsxs)(_v62.Button, {
      size: "sm",
      p: "1.25rem",
      borderRadius: "md",
      ..._v2,
      children: [_v1 && (0, _v1.jsx)(_v40.Spinner, {
        size: "sm",
        position: "absolute"
      }), (0, _v1.jsx)(_v15.Box, {
        as: _v61.motion.div,
        animate: {
          opacity: +!_v1
        },
        children: _v0
      })]
    }),
    _v65 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16
      }
    },
    _v66 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16,
        delay: .16
      }
    };
  function _v67({
    randomizeAnswers: _v0 = !0,
    isFinalPhase: _v1,
    onComplete: _v2
  }) {
    let _v3,
      _v4,
      _v5,
      {
        trackOnboardingSurveyViewed: _v6,
        trackOnboardingSurveyAnswered: _v7,
        trackOnboardingSurveySkipped: _v8
      } = (_v3 = (0, _v37.usePico)(), _v4 = (0, _v7.useRef)(!1), _v5 = (0, _v7.useCallback)(() => {
        null === _v3 || _v4.current || (_v3.track("onboarding_survey_viewed", {}), _v4.current = !0);
      }, [_v3]), {
        trackOnboardingSurveyViewed: _v5,
        trackOnboardingSurveyAnswered: (0, _v7.useCallback)(_v0 => {
          null !== _v3 && _v3.track("onboarding_survey_answered", {
            ..._v38(_v0.question),
            answers: _v0.answers.map(_v0 => ({
              answer_id: _v0.id,
              answer_text: _v0.label,
              answer_description: _v0.description ?? null,
              answer_input: _v0.text ?? null
            }))
          });
        }, [_v3]),
        trackOnboardingSurveySkipped: (0, _v7.useCallback)((_v0, _v1 = !1) => {
          null !== _v3 && _v3.track("onboarding_survey_skipped", {
            ..._v38(_v0),
            skipped_to_paywall: _v1
          });
        }, [_v3])
      }),
      {
        colorMode: _v9
      } = (0, _v18.useColorMode)(),
      [_v10, _v11] = (0, _v7.useState)(),
      [_v12, _v13] = (0, _v7.useState)({}),
      [_v14, _v15] = (0, _v7.useState)({}),
      _v16 = _v12[_v53] ?? [],
      _v17 = _v16.find(_v0 => !_v58.some(_v0 => _v0.id === _v0)) ?? null,
      _v18 = _v58.find(_v0 => _v16.includes(_v0.id))?.id ?? null,
      _v19 = _v17 === _v57,
      _v20 = _v19 || "non_video_freelancer" === _v17 || "business_owner_employee" === _v17;
    (0, _v7.useEffect)(() => {
      !_v19 && _v18 && _v13(_v0 => ({
        ..._v0,
        [_v53]: (_v0[_v53] ?? []).filter(_v0 => !_v58.some(_v0 => _v0.id === _v0))
      }));
    }, [_v19, _v18]), (0, _v7.useEffect)(() => {
      let _v0 = _v12[_v56] ?? [];
      !_v20 && _v0.length > 0 && _v13(_v0 => ({
        ..._v0,
        [_v56]: []
      }));
    }, [_v12, _v20]);
    let _v21 = (0, _v7.useMemo)(() => _v20 ? _v59 : _v59.filter(_v0 => _v0.id !== _v56), [_v20]),
      _v22 = (0, _v7.useRef)({}),
      _v23 = (0, _v7.useMemo)(() => _v21.map(_v0 => {
        let _v1 = _v12[_v0.id] ?? [],
          _v2 = _v0.answers.map(_v0 => ({
            ..._v0,
            isSelected: _v1.includes(_v0.id)
          })),
          _v3 = (({
            questionId: _v0,
            answers: _v1,
            randomizeAnswers: _v2,
            randomizedOrders: _v3
          }) => {
            if (!_v2 || _v0 === _v56) return _v1;
            let _v4 = _v1.map(_v0 => _v0.id),
              _v5 = _v3.current?.[_v0],
              _v6 = _v5 && _v5.length === _v4.length && _v4.every(_v0 => _v5.includes(_v0)),
              _v7 = _v6 ? _v5 : ((_v0, _v1) => {
                if (_v0 === _v55) {
                  let _v0 = _v60(_v1.filter(_v0 => "other" !== _v0));
                  return _v1.includes("other") && _v0.push("other"), _v0;
                }
                return _v60(_v1);
              })(_v0, _v4);
            !_v6 && _v3.current && (_v3.current[_v0] = _v7);
            let _v8 = new Map(_v1.map(_v0 => [_v0.id, _v0]));
            return _v7.map(_v0 => _v8.get(_v0)).filter(_v0 => !!_v0);
          })({
            questionId: _v0.id,
            answers: _v2,
            randomizeAnswers: _v0,
            randomizedOrders: _v22
          });
        return {
          ..._v0,
          answers: _v3
        };
      }), [_v12, _v21, _v0]),
      {
        navigateToPage: _v24,
        numPages: _v25,
        pageNumber: _v26,
        isBeyondLastPage: _v27
      } = function ({
        questions: _v0,
        numAdditionalPages: _v1 = 0
      }) {
        let _v2 = (0, _v6.useRouter)(),
          _v3 = (0, _v5.useSearchParams)(),
          _v4 = _v0.length + _v1,
          _v5 = _v3.get("page"),
          _v6 = Number(_v5),
          _v7 = null !== _v5 && !isNaN(_v6) && _v6 > _v4,
          _v8 = _v6;
        if (isNaN(_v8) || _v8 < 1 || _v8 > _v4) {
          let _v0 = -1;
          for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) if (_v0[_v0].answers.some(_v0 => _v0.isSelected)) {
            _v0 = _v0;
            break;
          }
          _v8 = Math.min(_v4, _v0 + 1 + 1);
        }
        let _v9 = (0, _v7.useCallback)((_v0, _v1 = !1) => {
          if (_v0 < 1 || _v0 > _v4) return;
          let _v2 = new URLSearchParams(_v3.toString());
          _v2.set("page", String(_v0)), _v1 ? _v2.replace({
            pathname: _v2.pathname,
            search: _v2.toString()
          }) : _v2.push({
            pathname: _v2.pathname,
            search: _v2.toString()
          });
        }, [_v3, _v2, _v4]);
        return (0, _v7.useEffect)(() => {
          0 === _v0.length || _v7 || _v5 === String(_v8) || _v9(_v8);
        }, [_v9, _v5, _v8, _v0.length, _v7]), {
          numPages: _v4,
          navigateToPage: _v9,
          pageNumber: _v8,
          isBeyondLastPage: _v7
        };
      }({
        questions: _v23
      }),
      _v28 = _v26 <= _v23.length ? _v23[_v26 - 1] : null;
    (0, _v7.useEffect)(() => {
      _v11(void 0);
    }, [_v26]);
    let _v29 = (0, _v7.useRef)(!1);
    (0, _v7.useEffect)(() => {
      _v27 && !_v29.current && (_v29.current = !0, _v2());
    }, [_v27, _v2]), (0, _v7.useEffect)(() => {
      _v27 || _v6();
    }, [_v6, _v27]);
    let _v30 = _v12[_v55] ?? [],
      _v31 = _v30.includes("other"),
      _v32 = _v14[_v55]?.other ?? "",
      _v33 = _v28?.id === _v55 && _v31,
      _v34 = (() => {
        if (!_v28) return !1;
        switch (_v28.id) {
          case _v53:
            if (!_v17) return !1;
            if (_v17 === _v57) return !!_v18;
            return !0;
          case _v54:
            return (_v12[_v54] ?? []).length > 0;
          case _v55:
            if (0 === _v30.length) return !1;
            if (_v31) return _v32.trim().length > 0;
            return !0;
          case _v56:
            return (_v12[_v56] ?? []).length > 0;
          default:
            return !1;
        }
      })(),
      _v35 = () => {
        _v26 >= _v25 ? _v2() : _v24(_v26 + 1);
      },
      _v36 = _v0 => {
        _v28 && _v11(_v0);
      },
      _v37 = _v0 => {
        _v13(_v0 => {
          let _v1 = (_v0[_v53] ?? []).includes(_v0) ? [] : [_v0];
          return {
            ..._v0,
            [_v53]: [_v57, ..._v1]
          };
        });
      },
      _v38 = _v58.map(_v0 => ({
        ..._v0,
        isSelected: _v16.includes(_v0.id)
      }));
    return _v27 ? null : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v12.Flex, {
        gap: "3",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        children: [(0, _v1.jsx)(_v13.SlideFade, {
          in: !_v10,
          transition: _v65,
          children: (0, _v1.jsx)(_v1.Fragment, {
            children: _v28 && (0, _v1.jsxs)(_v12.Flex, {
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              width: "100%",
              marginBottom: 5,
              children: [(0, _v1.jsx)(_v16.Text, {
                variant: {
                  base: "heading-md",
                  md: "heading-lg"
                },
                children: _v28.question
              }), _v28.description && (0, _v1.jsx)(_v16.Text, {
                variant: {
                  base: "body-sm",
                  md: "body-md"
                },
                color: "text-secondary",
                children: _v28.description
              })]
            })
          })
        }, `animate-title-${_v26}`), (0, _v1.jsx)(_v12.Flex, {
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          sx: {
            div: {
              width: {
                base: "100%",
                md: "auto"
              }
            }
          },
          children: (0, _v1.jsx)(_v13.SlideFade, {
            in: !_v10,
            transition: _v66,
            children: _v28 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v43, {
                answers: _v28.answers,
                onToggleAnswer: _v0 => {
                  _v28.id === _v53 ? _v13(_v0 => {
                    let _v1 = _v0[_v53] ?? [],
                      _v2 = _v58.find(_v0 => _v1.includes(_v0.id))?.id ?? null;
                    if (_v1.includes(_v0)) return {
                      ..._v0,
                      [_v53]: [],
                      [_v56]: []
                    };
                    let _v3 = _v0 === _v57 ? [_v57, ...(_v2 ? [_v2] : [])] : [_v0];
                    return {
                      ..._v0,
                      [_v53]: _v3
                    };
                  }) : _v28.id === _v54 ? _v13(_v0 => {
                    let _v1 = _v0[_v54] ?? [];
                    if ("mainly_watch" === _v0) return {
                      ..._v0,
                      [_v54]: _v1.includes(_v0) ? [] : [_v0]
                    };
                    let _v2 = _v1.includes(_v0) ? _v1.filter(_v0 => _v0 !== _v0) : [..._v1, _v0];
                    return {
                      ..._v0,
                      [_v54]: _v2.filter(_v0 => "mainly_watch" !== _v0)
                    };
                  }) : _v28.id === _v55 ? _v13(_v0 => {
                    let _v1 = _v0[_v55] ?? [],
                      _v2 = _v1.includes(_v0) ? _v1.filter(_v0 => _v0 !== _v0) : [..._v1, _v0];
                    return _v2.includes("other") || _v15(_v0 => ({
                      ..._v0,
                      [_v55]: {
                        ...(_v0[_v55] ?? {}),
                        other: ""
                      }
                    })), {
                      ..._v0,
                      [_v55]: _v2
                    };
                  }) : _v28.id === _v56 && _v13(_v0 => {
                    let _v1 = _v0[_v56] ?? [];
                    return {
                      ..._v0,
                      [_v56]: _v1.includes(_v0) ? [] : [_v0]
                    };
                  });
                },
                gridProps: {
                  [_v53]: {
                    gridAutoFlow: "row"
                  },
                  [_v54]: {
                    gridAutoFlow: "row"
                  },
                  [_v55]: {
                    gridAutoFlow: "row"
                  },
                  [_v56]: {
                    gridAutoFlow: "row"
                  }
                }[_v28.id],
                renderSubAnswers: _v0 => _v28.id === _v53 && _v0 === _v57 && _v19 ? (0, _v1.jsx)(_v13.SlideFade, {
                  in: _v19,
                  transition: _v65,
                  offsetY: "-20px",
                  children: (0, _v1.jsx)(_v15.Box, {
                    width: "100%",
                    pl: {
                      base: 2,
                      md: 4
                    },
                    children: (0, _v1.jsx)(_v43, {
                      answers: _v38,
                      onToggleAnswer: _v37,
                      gridProps: {
                        gridAutoFlow: "row"
                      }
                    })
                  })
                }) : null
              }), (0, _v1.jsx)(_v13.SlideFade, {
                in: _v33,
                transition: _v65,
                offsetY: "-20px",
                children: (0, _v1.jsxs)(_v12.Flex, {
                  visibility: _v33 ? "visible" : "hidden",
                  mt: 5,
                  width: "100%",
                  position: "relative",
                  children: [(0, _v1.jsx)(_v15.Box, {
                    position: "absolute",
                    left: "12px",
                    top: "-8px",
                    p: "0 4px",
                    bg: "dark" === _v9 ? "background" : "#fff",
                    width: "fit-content",
                    children: (0, _v1.jsx)(_v16.Text, {
                      variant: "heading-2xs",
                      children: (0, _v19.translate)({
                        singular: "Other",
                        dictionary: {
                          es: {
                            singular: "Otro"
                          },
                          "de-DE": {
                            singular: "Sonstiges"
                          },
                          "fr-FR": {
                            singular: "Autre"
                          },
                          "ja-JP": {
                            singular: "その他"
                          },
                          "ko-KR": {
                            singular: "기타"
                          },
                          "pt-BR": {
                            singular: "Outro"
                          },
                          "zh-CN": {
                            singular: "其他"
                          }
                        }
                      })
                    })
                  }), (0, _v1.jsx)(_v36.Input, {
                    autoFocus: !0,
                    bg: "transparent",
                    value: _v32,
                    onChange: _v0 => _v15(_v0 => ({
                      ..._v0,
                      [_v55]: {
                        ...(_v0[_v55] ?? {}),
                        other: _v0.target.value
                      }
                    }))
                  }, `autoFocus-${_v33}`)]
                })
              })]
            })
          }, `animate-content-${_v26}`)
        })]
      }), (0, _v1.jsx)(_v63, {
        progressPct: (_v26 - 1) / (_v25 - 1) * 100,
        showFinishLabel: _v1,
        isNextDisabled: !_v34,
        onBack: () => {
          _v28 && (_v36("back"), _v24(_v26 - 1));
        },
        onNext: () => {
          var _v0;
          let _v1, _v2, _v3, _v4;
          _v28 && (_v36("next"), _v7({
            question: {
              id: _v28.id,
              question: _v28.question,
              description: _v28.description
            },
            answers: (_v2 = _v12[_v1 = (_v0 = _v28).id] ?? [], _v3 = _v1 === _v53 ? [..._v0.answers, ..._v58] : _v0.answers, _v4 = _v1 === _v53 && _v2.includes(_v57) ? _v2.filter(_v0 => _v0 !== _v57) : _v2, _v3.filter(_v0 => _v4.includes(_v0.id)).map(_v0 => ({
              id: _v0.id,
              label: _v0.label,
              text: _v1 === _v55 && "other" === _v0.id ? _v32 : void 0
            })))
          }), _v35());
        },
        onSkip: () => {
          _v28 && (_v36("skip"), _v8({
            id: _v28.id,
            question: _v28.question,
            description: _v28.description
          }), _v28 && (_v13(_v0 => ({
            ..._v0,
            [_v28.id]: [],
            ...(_v28.id === _v53 ? {
              [_v56]: []
            } : {})
          })), _v28.id === _v55 && _v15(_v0 => ({
            ..._v0,
            [_v55]: {
              ...(_v0[_v55] ?? {}),
              other: ""
            }
          }))), _v35());
        },
        isDisabled: !!_v10,
        activeNavigation: _v10
      })]
    });
  }
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0);
  let _v76 = {
      upload: "/upload/videos",
      record: "/upload/screen-recording",
      create: "/upload/video-maker"
    },
    _v77 = `${_v76.upload}?upload_notice=reselect`,
    _v78 = [{
      id: "upload",
      label: (0, _v19.translate)({
        singular: "Upload",
        dictionary: {
          es: {
            singular: "Subir"
          },
          "de-DE": {
            singular: "Hochladen"
          },
          "fr-FR": {
            singular: "Importer"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregar"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      }),
      heading: (0, _v19.translate)({
        singular: "Upload your first video",
        dictionary: {
          es: {
            singular: "Sube tu primer vídeo"
          },
          "de-DE": {
            singular: "Laden Sie Ihr erstes Video hoch"
          },
          "fr-FR": {
            singular: "Mettez en ligne votre première vidéo"
          },
          "ja-JP": {
            singular: "最初の動画をアップロードしてください"
          },
          "ko-KR": {
            singular: "첫 동영상을 업로드하세요"
          },
          "pt-BR": {
            singular: "Envie seu primeiro vídeo"
          },
          "zh-CN": {
            singular: "上传你的第一段视频"
          }
        }
      }),
      ctaLabel: (0, _v19.translate)({
        singular: "Upload now",
        dictionary: {
          es: {
            singular: "Subir ahora"
          },
          "de-DE": {
            singular: "Jetzt hochladen"
          },
          "fr-FR": {
            singular: "Importer maintenant"
          },
          "ja-JP": {
            singular: "今すぐアップロード"
          },
          "ko-KR": {
            singular: "지금 업로드"
          },
          "pt-BR": {
            singular: "Enviar agora"
          },
          "zh-CN": {
            singular: "立即上传"
          }
        }
      }),
      Icon: _v75.Upload
    }, {
      id: "record",
      label: (0, _v19.translate)({
        singular: "Record",
        dictionary: {
          es: {
            singular: "Grabar"
          },
          "de-DE": {
            singular: "Aufnehmen"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "録画"
          },
          "ko-KR": {
            singular: "녹화"
          },
          "pt-BR": {
            singular: "Gravar"
          },
          "zh-CN": {
            singular: "录制"
          }
        }
      }),
      heading: (0, _v19.translate)({
        singular: "Record your screen, webcam, or both",
        dictionary: {
          es: {
            singular: "Grabe la pantalla, la cámara web o ambas"
          },
          "de-DE": {
            singular: "Bildschirm, Webcam oder beides aufzeichnen"
          },
          "fr-FR": {
            singular: "Enregistrez votre écran et/ou votre webcam"
          },
          "ja-JP": {
            singular: "画面、ウェブカメラ、または両方を録画"
          },
          "ko-KR": {
            singular: "화면, 웹캠 또는 둘 다 녹화"
          },
          "pt-BR": {
            singular: "Grave sua tela, webcam ou ambas"
          },
          "zh-CN": {
            singular: "录制屏幕、摄像头或屏幕和摄像头"
          }
        }
      }),
      ctaLabel: (0, _v19.translate)({
        singular: "Record video",
        dictionary: {
          es: {
            singular: "Grabar video"
          },
          "de-DE": {
            singular: "Video aufzeichnen"
          },
          "fr-FR": {
            singular: "Enregistrer une vidéo"
          },
          "ja-JP": {
            singular: "動画を録画する"
          },
          "ko-KR": {
            singular: "동영상 녹화하기"
          },
          "pt-BR": {
            singular: "Gravar vídeo"
          },
          "zh-CN": {
            singular: "录制视频"
          }
        }
      }),
      Icon: _v74.Record
    }, {
      id: "create",
      label: (0, _v19.translate)({
        singular: "Create",
        dictionary: {
          es: {
            singular: "Crear"
          },
          "de-DE": {
            singular: "Erstellen"
          },
          "fr-FR": {
            singular: "Créer"
          },
          "ja-JP": {
            singular: "作成"
          },
          "ko-KR": {
            singular: "만들기"
          },
          "pt-BR": {
            singular: "Criar"
          },
          "zh-CN": {
            singular: "创建"
          }
        }
      }),
      heading: (0, _v19.translate)({
        singular: "Start editing videos from scratch or choose a template",
        dictionary: {
          es: {
            singular: "Comienza a editar vídeos desde cero o elige una plantilla"
          },
          "de-DE": {
            singular: "Bearbeiten Sie Videos von Grund auf neu oder wählen Sie eine Vorlage"
          },
          "fr-FR": {
            singular: "Commencez le montage de vidéos depuis zéro ou choisissez un modèle"
          },
          "ja-JP": {
            singular: "動画編集を一から始めるか、テンプレートを選択する"
          },
          "ko-KR": {
            singular: "동영상을 처음부터 편집하거나 템플릿을 선택"
          },
          "pt-BR": {
            singular: "Comece a editar vídeos do zero ou escolha um modelo"
          },
          "zh-CN": {
            singular: "从头开始编辑视频或选择模板"
          }
        }
      }),
      ctaLabel: (0, _v19.translate)({
        singular: "Create now",
        dictionary: {
          es: {
            singular: "Crear ahora"
          },
          "de-DE": {
            singular: "Jetzt erstellen"
          },
          "fr-FR": {
            singular: "Créer maintenant"
          },
          "ja-JP": {
            singular: "今すぐ作成"
          },
          "ko-KR": {
            singular: "지금 만들기"
          },
          "pt-BR": {
            singular: "Criar agora"
          },
          "zh-CN": {
            singular: "立即创建"
          }
        }
      }),
      Icon: _v73.CreateVideo
    }],
    _v79 = {
      position: "relative",
      width: "100%",
      height: `clamp(${(0, _v69.rem)(400)}, 56vh, ${(0, _v69.rem)(518)})`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "5",
      px: "6",
      py: "10",
      bg: "fill-component",
      border: "1px solid",
      borderColor: "stroke",
      borderRadius: "2xl"
    };
  function _v80({
    onComplete: _v0,
    onSkip: _v1,
    defaultTab: _v2 = "upload",
    showCreate: _v3 = !0,
    enableFileSelector: _v4 = !1
  }) {
    let _v5,
      _v6,
      _v7,
      _v8,
      [_v9, _v10] = (0, _v7.useState)(_v2),
      {
        trackOnboardingUploadViewed: _v11,
        trackOnboardingUploadTabSelected: _v12,
        trackOnboardingUploadCtaClicked: _v13,
        trackOnboardingUploadSkipped: _v14
      } = (_v5 = (0, _v37.usePico)(), _v6 = (0, _v7.useRef)(!1), _v7 = (0, _v7.useCallback)(_v0 => {
        null === _v5 || _v6.current || (_v5.track("onboarding_upload_viewed", {
          default_tab: _v0.defaultTab,
          show_create: _v0.showCreate
        }), _v6.current = !0);
      }, [_v5]), _v8 = (0, _v7.useCallback)(_v0 => {
        null !== _v5 && _v5.track("onboarding_upload_tab_selected", {
          from_tab: _v0.fromTab,
          to_tab: _v0.toTab
        });
      }, [_v5]), {
        trackOnboardingUploadViewed: _v7,
        trackOnboardingUploadTabSelected: _v8,
        trackOnboardingUploadCtaClicked: (0, _v7.useCallback)(_v0 => {
          null !== _v5 && _v5.track("onboarding_upload_cta_clicked", {
            tab: _v0.tab,
            destination: _v0.destination
          });
        }, [_v5]),
        trackOnboardingUploadSkipped: (0, _v7.useCallback)(_v0 => {
          null !== _v5 && _v5.track("onboarding_upload_skipped", {
            active_tab: _v0.activeTab
          });
        }, [_v5])
      });
    (0, _v7.useEffect)(() => {
      _v11({
        defaultTab: _v2,
        showCreate: _v3
      });
    }, [_v11, _v2, _v3]);
    let _v15 = _v78.filter(_v0 => "create" !== _v0.id || _v3),
      _v16 = Math.max(0, _v15.findIndex(_v0 => _v0.id === _v9)),
      _v17 = _v15[_v16],
      _v18 = _v17.Icon,
      _v19 = _v4 && "upload" === _v17.id,
      _v20 = (0, _v7.useRef)(null),
      _v21 = _v0 => {
        _v13({
          tab: _v17.id,
          destination: _v0
        }), _v0(_v0);
      },
      _v22 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v18, {
          width: 40,
          height: 40
        }), (0, _v1.jsx)(_v16.Text, {
          variant: {
            base: "heading-md",
            md: "heading-lg"
          },
          textAlign: "center",
          maxWidth: "520px",
          children: _v17.heading
        }), (0, _v1.jsx)(_v62.Button, {
          variant: "brand",
          onClick: _v19 ? () => _v20.current?.click() : () => _v21(_v76[_v17.id]),
          children: _v17.ctaLabel
        })]
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v62.Button, {
        variant: "tertiary",
        size: "sm",
        onClick: () => {
          _v14({
            activeTab: _v17.id
          }), _v1();
        },
        position: "absolute",
        top: "2rem",
        right: "2rem",
        children: (0, _v19.translate)({
          singular: "Skip",
          dictionary: {
            es: {
              singular: "Omitir"
            },
            "de-DE": {
              singular: "Überspringen"
            },
            "fr-FR": {
              singular: "Sauter"
            },
            "ja-JP": {
              singular: "スキップ"
            },
            "ko-KR": {
              singular: "건너뛰기"
            },
            "pt-BR": {
              singular: "PULAR"
            },
            "zh-CN": {
              singular: "跳过"
            }
          }
        })
      }), (0, _v1.jsxs)(_v12.Flex, {
        grow: "1",
        flexDirection: "column",
        alignItems: "center",
        gap: "6",
        width: "100%",
        maxWidth: (0, _v69.rem)(896),
        children: [(0, _v1.jsx)(_v16.Text, {
          variant: {
            base: "heading-md",
            md: "heading-lg"
          },
          textAlign: "center",
          marginBottom: "2",
          children: (0, _v19.translate)({
            singular: "Everything you build starts with a video",
            dictionary: {
              es: {
                singular: "Todo lo que construyes comienza con un vídeo"
              },
              "de-DE": {
                singular: "Alles, was Sie erstellen, beginnt mit einem Video"
              },
              "fr-FR": {
                singular: "Tout ce que vous créez commence par une vidéo"
              },
              "ja-JP": {
                singular: "あなたが構築するすべては動画から始まります"
              },
              "ko-KR": {
                singular: "당신이 만드는 모든 것은 동영상에서 시작됩니다"
              },
              "pt-BR": {
                singular: "Tudo o que você constrói começa com um vídeo"
              },
              "zh-CN": {
                singular: "你所构建的一切都始于一段视频"
              }
            }
          })
        }), (0, _v1.jsx)(_v71.Tabs, {
          variant: "default",
          size: "md",
          width: {
            base: "100%",
            md: (0, _v69.rem)(576)
          },
          maxWidth: "100%",
          index: _v16,
          onChange: _v0 => {
            let _v1 = _v15[_v0].id;
            _v1 !== _v17.id && _v12({
              fromTab: _v17.id,
              toTab: _v1
            }), _v10(_v1);
          },
          children: (0, _v1.jsxs)(_v72.TabList, {
            children: [_v15.map(_v0 => (0, _v1.jsx)(_v70.Tab, {
              children: _v0.label
            }, _v0.id)), (0, _v1.jsx)(_v71.TabIndicator, {})]
          })
        }, _v15.length), _v19 ? (0, _v1.jsx)(_v68.Dropzone, {
          ref: _v20,
          accept: "video/*",
          ..._v79,
          sx: {
            input: {
              position: "absolute",
              inset: 0,
              opacity: 0,
              cursor: "pointer"
            },
            "&[data-isdragging]": {
              borderColor: "fill-brand"
            }
          },
          onChange: _v0 => {
            (_v0.target.files?.[0] ?? _v0.dataTransfer?.files?.[0]) && _v21(_v77);
          },
          children: _v22
        }) : (0, _v1.jsx)(_v12.Flex, {
          ..._v79,
          children: _v22
        })]
      })]
    });
  }
  function _v81(_v0, _v1) {
    return _v0[_v0.indexOf(_v1) + 1] ?? null;
  }
  function _v82({
    randomizeAnswers: _v0 = !0
  }) {
    var _v1;
    let _v2 = (0, _v6.useRouter)(),
      _v3 = (0, _v5.useSearchParams)(),
      {
        settings: _v4,
        isLoadingResponse: _v5
      } = (0, _v9.useOrionSettings)(),
      {
        capabilities: _v6
      } = (0, _v8.useCapability)(["hasCreation"]),
      [_v7, _v8] = (0, _v7.useState)(!1),
      [_v9, _v10] = (0, _v7.useState)(null),
      _v11 = _v4.video_upload_onboarding_arm,
      _v12 = (0, _v7.useMemo)(() => function (_v0) {
        switch (_v0) {
          case "t1":
            return ["survey", "upload", "paywall"];
          case "t2":
          case "t3":
            return ["upload", "paywall"];
          default:
            return ["survey", "paywall"];
        }
      }(_v11), [_v11]),
      _v13 = (_v1 = _v3.get("phase")) ? _v12.find(_v0 => _v0 === _v1) ?? null : _v12[0],
      _v14 = _v9 && (0, _v10.isVimeoRedirectableUrl)(_v9) ? _v9 : void 0,
      [_v15] = (0, _v7.useState)(() => (0, _v11.peekPostSurveyRedirect)()),
      _v16 = _v14 ?? _v15,
      _v17 = () => {
        _v8(!0), (0, _v11.clearPostSurveyRedirect)(), _v2.push(_v16 ?? "/home");
      },
      _v18 = () => {
        if (!_v13) return;
        let _v0 = _v81(_v12, _v13);
        if (!_v0) return void _v17();
        let _v1 = new URLSearchParams(_v3.toString());
        _v1.delete("page"), _v1.set("phase", _v0), _v2.push({
          pathname: _v2.pathname,
          search: _v1.toString()
        });
      };
    return _v5 || _v7 ? (0, _v1.jsx)(_v31.default, {}) : (0, _v1.jsxs)(_v35.OnboardingShell, {
      children: ["survey" === _v13 && (0, _v1.jsx)(_v67, {
        randomizeAnswers: _v0,
        isFinalPhase: null === _v81(_v12, "survey"),
        onComplete: _v18
      }), "upload" === _v13 && (0, _v1.jsx)(_v80, {
        showCreate: !!_v6?.hasCreation,
        enableFileSelector: "t3" === _v11,
        onComplete: _v0 => {
          _v10(_v0), _v18();
        },
        onSkip: _v18
      }), ("paywall" === _v13 || null === _v13) && (0, _v1.jsx)(_v34, {
        postCheckoutUrl: _v16,
        onDismiss: _v17
      })]
    });
  }
  (0, _v2.withPageSetup)(async _v0 => {
    if (!(await (0, _v3.getMeCapabilities)({
      baseUrl: _v0.baseUrl,
      headers: _v0.headers,
      select: ["registrationSurvey"]
    })).registrationSurvey) return {
      redirect: {
        destination: "/home",
        statusCode: 302
      }
    };
    if (!(_v0.query.page || _v0.query.phase)) try {
      if ((await (0, _v4.getMeSurvey)({
        baseUrl: _v0.baseUrl,
        headers: _v0.headers,
        select: ["isCompleted"],
        where: {
          surveyType: "reg_prof_v2"
        }
      })).isCompleted) return {
        redirect: {
          destination: "/home",
          statusCode: 302
        }
      };
    } catch (_v0) {
      console.warn("Failed to fetch survey data:", _v0);
    }
    return {
      props: {
        hasThemeSupport: !0,
        omitEsi: !0
      }
    };
  }, {
    requireLogin: !0,
    noIndex: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v1.jsx)(_v82, {})], 0);
}