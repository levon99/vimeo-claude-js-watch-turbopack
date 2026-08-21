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
    _v27 = _v0.i(0);
  function _v28(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v23.useGctlConfig)();
    return (0, _v26.default)(_v2 ? `/me/surveys/${_v2.where.surveyType}${(0, _v25.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v22.getMeSurvey)({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v24.default.env.STORYBOOK && (0, _v25.assignMswData)(_v28, {
    endpoint: "/me/surveys/:surveyType",
    method: "GET"
  }), "true" === _v24.default.env.STORYBOOK && (0, _v25.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v27.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v25.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/surveys/${_v0.where.surveyType}${(0, _v25.serializeQuery)(_v0)}`, (0, _v22.getMeSurvey)({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/me/surveys/:surveyType",
    method: "GET"
  }), "true" === _v24.default.env.STORYBOOK && (0, _v25.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v27.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v25.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/surveys/${_v0.where.surveyType}${(0, _v25.serializeQuery)(_v0)}`, (0, _v22.putMeSurvey)({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/me/surveys/:surveyType",
    method: "PUT"
  });
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = "b2b_repack",
    _v33 = "respondent_type",
    _v34 = "vimeo_usage",
    _v35 = "team_size",
    _v36 = "switch_reason",
    _v37 = "reason",
    _v38 = {
      step1_respondent_type: {
        questionId: _v33,
        stepIndex: 1
      },
      step2_vimeo_usage: {
        questionId: _v34,
        stepIndex: 2
      },
      step3_team_size: {
        questionId: _v35,
        stepIndex: 3
      },
      step4_reason: {
        questionId: _v36,
        stepIndex: 4
      }
    };
  function _v39({
    isOpen: _v0,
    onClose: _v1,
    onQualified: _v2,
    initialStep: _v3,
    entryPoint: _v4 = null
  }) {
    let _v5 = _v3 ?? "step1_respondent_type",
      [_v6, _v7] = (0, _v2.useState)(_v5),
      [_v8, _v9] = (0, _v2.useState)(""),
      [_v10, _v11] = (0, _v2.useState)(""),
      [_v12, _v13] = (0, _v2.useState)(""),
      [_v14, _v15] = (0, _v2.useState)(""),
      [_v16, _v17] = (0, _v2.useState)(""),
      {
        data: _v18,
        isLoading: _v19
      } = _v28(() => _v0 ? {
        select: ["questions"],
        where: {
          surveyType: _v32
        }
      } : null),
      {
        baseUrl: _v20,
        jwt: _v21,
        xVimeoPage: _v22,
        locale: _v23
      } = (0, _v23.useGctlConfig)(),
      _v24 = (0, _v2.useMemo)(() => {
        let _v0 = new Map();
        return _v18?.questions?.forEach(_v0 => _v0.set(_v0.id, _v0)), {
          respondentType: _v0.get(_v33),
          usage: _v0.get(_v34),
          teamSize: _v0.get(_v35),
          reason: _v0.get(_v36)
        };
      }, [_v18]),
      _v25 = _v14.trim().length,
      _v26 = _v25 >= 50,
      {
        trackIndividualEligibilitySurveyViewed: _v27,
        trackIndividualEligibilitySurveyQuestionViewed: _v28,
        trackIndividualEligibilitySurveyQuestionAnswered: _v29,
        trackIndividualEligibilitySurveySubmitted: _v30,
        trackIndividualEligibilitySurveyOutcomeShown: _v31,
        trackIndividualEligibilitySurveyOutcomeCtaClicked: _v32,
        trackIndividualEligibilitySurveyAbandoned: _v33,
        trackIndividualEligibilitySurveyError: _v34
      } = (0, _v31.useIndividualEligibilityTracking)(),
      _v35 = (0, _v2.useMemo)(() => ({
        step1_respondent_type: _v24.respondentType,
        step2_vimeo_usage: _v24.usage,
        step3_team_size: _v24.teamSize,
        step4_reason: _v24.reason
      }), [_v24]),
      _v36 = (0, _v2.useRef)(!1),
      _v37 = (0, _v2.useRef)(null),
      _v38 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      _v0 || (_v36.current = !1, _v37.current = null, _v38.current = !1);
    }, [_v0]), (0, _v2.useEffect)(() => {
      _v0 && !_v36.current && (_v36.current = !0, _v27(_v4));
    }, [_v0, _v4, _v27]), (0, _v2.useEffect)(() => {
      let _v0 = _v38[_v6],
        _v1 = _v35[_v6];
      _v0 && _v0 && _v1 && _v37.current !== _v6 && (_v37.current = _v6, _v28({
        entryPoint: _v4,
        question: {
          id: _v0.questionId,
          question: _v1.question,
          stepIndex: _v0.stepIndex
        }
      }));
    }, [_v0, _v6, _v35, _v4, _v28]), (0, _v2.useEffect)(() => {
      !_v0 || _v38.current || ("qualified" === _v6 || "not_qualified" === _v6) && (_v38.current = !0, _v31({
        entryPoint: _v4,
        outcome: _v6
      }));
    }, [_v0, _v6, _v4, _v31]);
    let _v39 = (0, _v2.useCallback)(() => {
        _v7(_v5), _v9(""), _v11(""), _v13(""), _v15(""), _v17("");
      }, [_v5]),
      _v40 = (0, _v2.useCallback)(() => {
        let _v0 = _v38[_v6];
        _v0 && _v33({
          entryPoint: _v4,
          lastQuestionId: _v0.questionId,
          lastStepIndex: _v0.stepIndex
        }), _v39(), _v1();
      }, [_v1, _v39, _v6, _v4, _v33]),
      _v41 = (0, _v2.useCallback)(() => {
        _v3 ? _v40() : window.location.reload();
      }, [_v40, _v3]),
      _v42 = (0, _v2.useCallback)(async (_v0, _v1) => {
        _v7("submitting");
        let _v2 = new Promise(_v0 => setTimeout(_v0, 0 + Math.floor(0 * Math.random())));
        try {
          let [_v0] = await Promise.all([(0, _v22.putMeSurvey)({
            baseUrl: _v20,
            select: ["outcome"],
            where: {
              surveyType: _v32
            },
            variables: _v0,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v21 ? `jwt ${_v21}` : "",
              "Vimeo-Page": `${_v22}`,
              "Accept-Language": _v23 ?? "en"
            }
          }), _v2]);
          _v1(_v0?.outcome);
        } catch (_v0) {
          let _v1 = _v0 instanceof Error ? _v0.message : String(_v0);
          _v17(_v1), _v7("error"), _v34({
            entryPoint: _v4,
            errorMessage: _v1
          });
        }
      }, [_v20, _v21, _v23, _v22, _v4, _v34]),
      _v43 = (0, _v2.useCallback)(() => {
        _v8 && (_v29({
          entryPoint: _v4,
          question: {
            id: _v33,
            question: _v24.respondentType?.question ?? "",
            stepIndex: 1
          },
          answers: [{
            id: _v8,
            label: _v24.respondentType?.answers.find(_v0 => _v0.id === _v8)?.label
          }]
        }), _v7("step2_vimeo_usage"));
      }, [_v8, _v4, _v24.respondentType, _v29]),
      _v44 = (0, _v2.useCallback)(() => {
        _v10 && (_v29({
          entryPoint: _v4,
          question: {
            id: _v34,
            question: _v24.usage?.question ?? "",
            stepIndex: 2
          },
          answers: [{
            id: _v10,
            label: _v24.usage?.answers.find(_v0 => _v0.id === _v10)?.label
          }]
        }), _v7("step3_team_size"));
      }, [_v10, _v4, _v24.usage, _v29]),
      _v45 = (0, _v2.useCallback)(() => {
        _v12 && (_v29({
          entryPoint: _v4,
          question: {
            id: _v35,
            question: _v24.teamSize?.question ?? "",
            stepIndex: 3
          },
          answers: [{
            id: _v12,
            label: _v24.teamSize?.answers.find(_v0 => _v0.id === _v12)?.label
          }]
        }), _v7("step4_reason"));
      }, [_v12, _v4, _v24.teamSize, _v29]),
      _v46 = (0, _v2.useCallback)(() => {
        _v26 && (_v29({
          entryPoint: _v4,
          question: {
            id: _v36,
            question: _v24.reason?.question ?? "",
            stepIndex: 4
          },
          answers: [{
            id: _v37
          }]
        }), _v30({
          entryPoint: _v4,
          respondentType: _v8,
          vimeoUsage: _v10,
          teamSize: _v12,
          reasonLength: _v25
        }), _v42([{
          id: _v33,
          answers: [{
            id: _v8
          }]
        }, {
          id: _v34,
          answers: [{
            id: _v10
          }]
        }, {
          id: _v35,
          answers: [{
            id: _v12
          }]
        }, {
          id: _v36,
          answers: [{
            id: _v37,
            text: _v14.trim()
          }]
        }], _v0 => _v7("qualified" === _v0 ? "qualified" : "not_qualified")));
      }, [_v26, _v14, _v8, _v42, _v12, _v10, _v25, _v4, _v24.reason, _v29, _v30]),
      _v47 = (0, _v2.useCallback)(() => {
        _v32({
          entryPoint: _v4,
          outcome: "qualified"
        }), _v2?.(), window.location.href = (0, _v30.buildUpgradePlanUrl)({
          paywallTrigger: "b2b_eligibility_modal_qualified",
          paywallLocation: "billing",
          paywallFeature: "b2b_repackaging"
        });
      }, [_v40, _v2, _v4, _v32]),
      _v48 = (0, _v2.useCallback)(() => {
        _v32({
          entryPoint: _v4,
          outcome: "not_qualified"
        }), _v41();
      }, [_v41, _v4, _v32]);
    if (!_v0) return null;
    let _v49 = !_v19 && !!(_v24.respondentType && _v24.usage && _v24.teamSize && _v24.reason),
      _v50 = "qualified" === _v6 || "not_qualified" === _v6 ? _v41 : _v40;
    return (0, _v1.jsxs)(_v7.Modal, {
      isOpen: _v0,
      onClose: _v50,
      size: ["full", "md"],
      children: [(0, _v1.jsx)(_v13.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        borderRadius: "md",
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v9.ModalCloseButton, {
          onClick: _v50,
          zIndex: 1
        }), "step1_respondent_type" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v12.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v5.Header, {
              as: "h3",
              size: "md",
              children: _v24.respondentType?.question ?? (0, _v29.translate)({
                singular: "Tell us about yourself",
                dictionary: {
                  es: {
                    singular: "Cuéntenos sobre usted"
                  },
                  "de-DE": {
                    singular: "Erzählen Sie uns etwas über sich"
                  },
                  "fr-FR": {
                    singular: "Parlez-nous de vous"
                  },
                  "ja-JP": {
                    singular: "お客様について教えてください"
                  },
                  "ko-KR": {
                    singular: "본인에 대해 알려주세요"
                  },
                  "pt-BR": {
                    singular: "Conte-nos sobre você"
                  },
                  "zh-CN": {
                    singular: "告诉我们您的情况"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v8.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v19.VStack, {
              align: "stretch",
              gap: 4,
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v24.respondentType?.description ?? (0, _v29.translate)({
                  singular: "Help us understand who you are so we can review your switch to a dedicated plan.",
                  dictionary: {
                    es: {
                      singular: "Ayúdenos a comprender quién es para que podamos revisar su cambio a un plan dedicado."
                    },
                    "de-DE": {
                      singular: "Helfen Sie uns zu verstehen, wer Sie sind, damit wir Ihren Wechsel zu einem dedizierten Plan prüfen können."
                    },
                    "fr-FR": {
                      singular: "Aidez-nous à comprendre qui vous êtes afin que nous puissions examiner votre passage à un plan dédié."
                    },
                    "ja-JP": {
                      singular: "専用プランへの切り替えを審査するために、お客様がどのような方か教えてください。"
                    },
                    "ko-KR": {
                      singular: "전용 요금제로의 전환을 검토할 수 있도록 귀하에 대해 알려주세요."
                    },
                    "pt-BR": {
                      singular: "Ajude-nos a entender quem você é para que possamos revisar sua solicitação de mudança para um plano dedicado."
                    },
                    "zh-CN": {
                      singular: "请告诉我们您的身份，以便我们审核您切换到专属计划的请求。"
                    }
                  }
                })
              }), !_v49 && (0, _v1.jsx)(_v17.Text, {
                variant: "body-sm",
                children: (0, _v29.translate)({
                  singular: "Loading…",
                  dictionary: {
                    es: {
                      singular: "Cargando…"
                    },
                    "de-DE": {
                      singular: "Lädt…"
                    },
                    "fr-FR": {
                      singular: "Chargement…"
                    },
                    "ja-JP": {
                      singular: "読み込み中…"
                    },
                    "ko-KR": {
                      singular: "로딩 중…"
                    },
                    "pt-BR": {
                      singular: "Carregando…"
                    },
                    "zh-CN": {
                      singular: "加载中…"
                    }
                  }
                })
              }), _v49 && _v24.respondentType && (0, _v1.jsx)(_v15.RadioGroup, {
                value: _v8,
                onChange: _v0 => _v9(_v0),
                children: (0, _v1.jsx)(_v19.VStack, {
                  align: "stretch",
                  gap: 3,
                  children: _v24.respondentType.answers.map(_v0 => (0, _v1.jsx)(_v14.Radio, {
                    value: _v0.id,
                    id: `b2b-repack-respondent-${_v0.id}`,
                    size: "sm",
                    children: _v0.label
                  }, _v0.id))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v11.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              isDisabled: !_v8,
              onClick: _v43,
              children: (0, _v29.translate)({
                singular: "Continue",
                dictionary: {
                  es: {
                    singular: "Continuar"
                  },
                  "de-DE": {
                    singular: "Weiter"
                  },
                  "fr-FR": {
                    singular: "Continuer"
                  },
                  "ja-JP": {
                    singular: "次へ"
                  },
                  "ko-KR": {
                    singular: "계속"
                  },
                  "pt-BR": {
                    singular: "Continuar"
                  },
                  "zh-CN": {
                    singular: "继续"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              size: "md",
              width: "100%",
              onClick: _v40,
              children: (0, _v29.translate)({
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
            })]
          })]
        }), "step2_vimeo_usage" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v12.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v5.Header, {
              as: "h3",
              size: "md",
              children: _v24.usage?.question ?? (0, _v29.translate)({
                singular: "Tell us about yourself",
                dictionary: {
                  es: {
                    singular: "Cuéntenos sobre usted"
                  },
                  "de-DE": {
                    singular: "Erzählen Sie uns etwas über sich"
                  },
                  "fr-FR": {
                    singular: "Parlez-nous de vous"
                  },
                  "ja-JP": {
                    singular: "お客様について教えてください"
                  },
                  "ko-KR": {
                    singular: "본인에 대해 알려주세요"
                  },
                  "pt-BR": {
                    singular: "Conte-nos sobre você"
                  },
                  "zh-CN": {
                    singular: "告诉我们您的情况"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v8.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v19.VStack, {
              align: "stretch",
              gap: 4,
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v24.usage?.description ?? (0, _v29.translate)({
                  singular: "Help us understand what you will use Vimeo for.",
                  dictionary: {
                    es: {
                      singular: "Ayúdanos a entender para qué utilizarás Vimeo."
                    },
                    "de-DE": {
                      singular: "Hilf uns zu verstehen, wofür du Vimeo nutzen wirst."
                    },
                    "fr-FR": {
                      singular: "Aidez-nous à comprendre à quoi vous utiliserez Vimeo."
                    },
                    "ja-JP": {
                      singular: "Vimeo を何にご利用になるか教えてください."
                    },
                    "ko-KR": {
                      singular: "Vimeo를 어떤 용도로 사용하실 예정인지 알려주세요."
                    },
                    "pt-BR": {
                      singular: "Ajude-nos a entender para que você usará o Vimeo."
                    },
                    "zh-CN": {
                      singular: "请告诉我们您将如何使用 Vimeo."
                    }
                  }
                })
              }), _v24.usage && (0, _v1.jsx)(_v15.RadioGroup, {
                value: _v10,
                onChange: _v0 => _v11(_v0),
                children: (0, _v1.jsx)(_v19.VStack, {
                  align: "stretch",
                  gap: 3,
                  children: _v24.usage.answers.map(_v0 => (0, _v1.jsx)(_v14.Radio, {
                    value: _v0.id,
                    id: `b2b-repack-usage-${_v0.id}`,
                    size: "sm",
                    children: _v0.label
                  }, _v0.id))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v11.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              isDisabled: !_v10,
              onClick: _v44,
              children: (0, _v29.translate)({
                singular: "Continue",
                dictionary: {
                  es: {
                    singular: "Continuar"
                  },
                  "de-DE": {
                    singular: "Weiter"
                  },
                  "fr-FR": {
                    singular: "Continuer"
                  },
                  "ja-JP": {
                    singular: "次へ"
                  },
                  "ko-KR": {
                    singular: "계속"
                  },
                  "pt-BR": {
                    singular: "Continuar"
                  },
                  "zh-CN": {
                    singular: "继续"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              size: "md",
              width: "100%",
              onClick: _v40,
              children: (0, _v29.translate)({
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
            })]
          })]
        }), "step3_team_size" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v12.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v5.Header, {
              as: "h3",
              size: "md",
              children: _v24.teamSize?.question ?? (0, _v29.translate)({
                singular: "Tell us about yourself",
                dictionary: {
                  es: {
                    singular: "Cuéntenos sobre usted"
                  },
                  "de-DE": {
                    singular: "Erzählen Sie uns etwas über sich"
                  },
                  "fr-FR": {
                    singular: "Parlez-nous de vous"
                  },
                  "ja-JP": {
                    singular: "お客様について教えてください"
                  },
                  "ko-KR": {
                    singular: "본인에 대해 알려주세요"
                  },
                  "pt-BR": {
                    singular: "Conte-nos sobre você"
                  },
                  "zh-CN": {
                    singular: "告诉我们您的情况"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v8.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v19.VStack, {
              align: "stretch",
              gap: 4,
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v24.teamSize?.description ?? (0, _v29.translate)({
                  singular: "How many people work on this account?",
                  dictionary: {
                    es: {
                      singular: "¿Cuántas personas trabajan en esta cuenta?"
                    },
                    "de-DE": {
                      singular: "Wie viele Personen arbeiten an diesem Konto?"
                    },
                    "fr-FR": {
                      singular: "Combien de personnes travaillent sur ce compte ?"
                    },
                    "ja-JP": {
                      singular: "このアカウントには何人が関わっていますか?"
                    },
                    "ko-KR": {
                      singular: "이 계정에서 몇 명이 작업하나요?"
                    },
                    "pt-BR": {
                      singular: "Quantas pessoas trabalham nesta conta?"
                    },
                    "zh-CN": {
                      singular: "有多少人在这个账户上工作?"
                    }
                  }
                })
              }), _v24.teamSize && (0, _v1.jsx)(_v15.RadioGroup, {
                value: _v12,
                onChange: _v0 => _v13(_v0),
                children: (0, _v1.jsx)(_v19.VStack, {
                  align: "stretch",
                  gap: 3,
                  children: _v24.teamSize.answers.map(_v0 => (0, _v1.jsx)(_v14.Radio, {
                    value: _v0.id,
                    id: `b2b-repack-team-size-${_v0.id}`,
                    size: "sm",
                    children: _v0.label
                  }, _v0.id))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v11.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              isDisabled: !_v12,
              onClick: _v45,
              children: (0, _v29.translate)({
                singular: "Continue",
                dictionary: {
                  es: {
                    singular: "Continuar"
                  },
                  "de-DE": {
                    singular: "Weiter"
                  },
                  "fr-FR": {
                    singular: "Continuer"
                  },
                  "ja-JP": {
                    singular: "次へ"
                  },
                  "ko-KR": {
                    singular: "계속"
                  },
                  "pt-BR": {
                    singular: "Continuar"
                  },
                  "zh-CN": {
                    singular: "继续"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              size: "md",
              width: "100%",
              onClick: _v40,
              children: (0, _v29.translate)({
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
            })]
          })]
        }), "step4_reason" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v12.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v5.Header, {
              as: "h3",
              size: "md",
              children: _v24.reason?.question ?? (0, _v29.translate)({
                singular: "Why does the individual plan fit you better?",
                dictionary: {
                  es: {
                    singular: "¿Por qué el plan individual se adapta mejor a tus necesidades?"
                  },
                  "de-DE": {
                    singular: "Warum passt der Individualtarif besser zu dir?"
                  },
                  "fr-FR": {
                    singular: "Pourquoi le forfait individuel vous convient-il mieux ?"
                  },
                  "ja-JP": {
                    singular: "個人プランの方が適している理由を教えてください?"
                  },
                  "ko-KR": {
                    singular: "개인 플랜이 왜 더 적합한가요?"
                  },
                  "pt-BR": {
                    singular: "Por que o plano Individual é mais adequado para você?"
                  },
                  "zh-CN": {
                    singular: "为什么个人计划更适合您?"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v8.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v19.VStack, {
              align: "stretch",
              gap: 3,
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v24.reason?.description ?? (0, _v29.translate)({
                  singular: "Tell us in a few words why you would like to switch from business to individual.",
                  dictionary: {
                    es: {
                      singular: "Cuéntanos en pocas palabras por qué te gustaría cambiar de plan empresarial a individual."
                    },
                    "de-DE": {
                      singular: "Erzähle uns in wenigen Worten, warum du vom Business- zum Individualtarif wechseln möchtest."
                    },
                    "fr-FR": {
                      singular: "Dites-nous en quelques mots pourquoi vous souhaitez passer d'un compte professionnel à un compte individuel."
                    },
                    "ja-JP": {
                      singular: "ビジネスから個人に切り替えたい理由を簡潔にお聞かせください."
                    },
                    "ko-KR": {
                      singular: "비즈니스에서 개인으로 전환하려는 이유를 간단히 알려주세요."
                    },
                    "pt-BR": {
                      singular: "Conte-nos em poucas palavras por que você gostaria de mudar do plano Business para o plano Individual."
                    },
                    "zh-CN": {
                      singular: "请简要说明您为何想将账户从企业计划切换为个人计划."
                    }
                  }
                })
              }), (0, _v1.jsx)(_v18.Textarea, {
                value: _v14,
                onChange: _v0 => _v15(_v0.target.value),
                placeholder: _v24.reason?.placeholder ?? (0, _v29.translate)({
                  singular: "e.g. I no longer collaborate with a team and only need to host my personal showreel for clients...",
                  dictionary: {
                    es: {
                      singular: "p. ej. Ya no colaboro con un equipo y solo necesito alojar mi showreel personal para clientes..."
                    },
                    "de-DE": {
                      singular: "z. B. Ich arbeite nicht mehr mit einem Team zusammen und muss nur noch mein persönliches Showreel für Kunden hosten..."
                    },
                    "fr-FR": {
                      singular: "Par ex. : je ne collabore plus avec une équipe et j’ai seulement besoin d’héberger ma bande-démo personnelle pour des clients..."
                    },
                    "ja-JP": {
                      singular: "e.g. もはやチームと共同作業しておらず、クライアント向けに個人のショーリールをホストするだけで十分です..."
                    },
                    "ko-KR": {
                      singular: "예: 더 이상 팀과 협업하지 않으며, 고객을 위해 개인 포트폴리오 영상만 호스팅하면 됩니다..."
                    },
                    "pt-BR": {
                      singular: "Ex.: Não colaboro mais com uma equipe e só preciso hospedar meu showreel pessoal para clientes..."
                    },
                    "zh-CN": {
                      singular: "例如：我不再与团队合作，只需为客户托管我的个人作品集..."
                    }
                  }
                }),
                rows: 4,
                "aria-label": (0, _v29.translate)({
                  singular: "Reason",
                  dictionary: {
                    es: {
                      singular: "Razón"
                    },
                    "de-DE": {
                      singular: "Grund"
                    },
                    "fr-FR": {
                      singular: "Motif"
                    },
                    "ja-JP": {
                      singular: "理由"
                    },
                    "ko-KR": {
                      singular: "이유"
                    },
                    "pt-BR": {
                      singular: "Motivo"
                    },
                    "zh-CN": {
                      singular: "原因"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v3.Box, {
                display: "flex",
                justifyContent: "space-between",
                children: [(0, _v1.jsx)(_v17.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  children: (0, _v29.translate)({
                    singular: "Minimum 50 characters",
                    dictionary: {
                      es: {
                        singular: "Mínimo 50 caracteres"
                      },
                      "de-DE": {
                        singular: "Mindestens 50 Zeichen"
                      },
                      "fr-FR": {
                        singular: "Minimum 50 caractères"
                      },
                      "ja-JP": {
                        singular: "最低 50 文字"
                      },
                      "ko-KR": {
                        singular: "최소 50자"
                      },
                      "pt-BR": {
                        singular: "Mínimo de 50 caracteres"
                      },
                      "zh-CN": {
                        singular: "至少 50 个字符"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v17.Text, {
                  variant: "body-sm",
                  color: _v26 ? "status-positive-primary" : "text-tertiary",
                  children: `${_v25} / 50`
                })]
              })]
            })
          }), (0, _v1.jsxs)(_v11.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              isDisabled: !_v26,
              onClick: _v46,
              children: (0, _v29.translate)({
                singular: "Continue",
                dictionary: {
                  es: {
                    singular: "Continuar"
                  },
                  "de-DE": {
                    singular: "Weiter"
                  },
                  "fr-FR": {
                    singular: "Continuer"
                  },
                  "ja-JP": {
                    singular: "次へ"
                  },
                  "ko-KR": {
                    singular: "계속"
                  },
                  "pt-BR": {
                    singular: "Continuar"
                  },
                  "zh-CN": {
                    singular: "继续"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              size: "md",
              width: "100%",
              onClick: _v40,
              children: (0, _v29.translate)({
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
            })]
          })]
        }), "submitting" === _v6 && (0, _v1.jsx)(_v8.ModalBody, {
          py: 14,
          px: 6,
          children: (0, _v1.jsxs)(_v19.VStack, {
            align: "center",
            gap: 4,
            children: [(0, _v1.jsx)(_v16.Spinner, {
              size: "lg"
            }), (0, _v1.jsx)(_v17.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v29.translate)({
                singular: "Checking eligibility…",
                dictionary: {
                  es: {
                    singular: "Comprobando la elegibilidad…"
                  },
                  "de-DE": {
                    singular: "Berechtigung wird geprüft…"
                  },
                  "fr-FR": {
                    singular: "Vérification de l'éligibilité…"
                  },
                  "ja-JP": {
                    singular: "適格性を確認しています…"
                  },
                  "ko-KR": {
                    singular: "자격 확인 중…"
                  },
                  "pt-BR": {
                    singular: "Verificando elegibilidade…"
                  },
                  "zh-CN": {
                    singular: "正在检查资格…"
                  }
                }
              })
            })]
          })
        }), "qualified" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v12.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v5.Header, {
              as: "h3",
              size: "md",
              children: (0, _v29.translate)({
                singular: "You're approved for the individual plan",
                dictionary: {
                  es: {
                    singular: "Ha sido aprobado para el plan individual"
                  },
                  "de-DE": {
                    singular: "Sie wurden für den Individualplan zugelassen"
                  },
                  "fr-FR": {
                    singular: "Votre compte est approuvé pour le plan individuel"
                  },
                  "ja-JP": {
                    singular: "個人プランへの切り替えが承認されました"
                  },
                  "ko-KR": {
                    singular: "귀하의 개인 요금제 전환이 승인되었습니다"
                  },
                  "pt-BR": {
                    singular: "Você foi aprovado para o plano individual"
                  },
                  "zh-CN": {
                    singular: "您已获准使用个人计划"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v8.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v19.VStack, {
              align: "stretch",
              gap: 5,
              children: [(0, _v1.jsx)(_v3.Box, {
                display: "flex",
                justifyContent: "center",
                children: (0, _v1.jsx)(_v20.CircleCheckFilled, {
                  boxSize: "72px",
                  color: "status-positive-primary"
                })
              }), (0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v29.translate)({
                  singular: "Great news, we have reviewed your request and your account is eligible to switch to the individual plan.",
                  dictionary: {
                    es: {
                      singular: "Buenas noticias: hemos revisado su solicitud y su cuenta es elegible para cambiar al plan individual."
                    },
                    "de-DE": {
                      singular: "Gute Nachrichten, wir haben Ihre Anfrage geprüft und Ihr Konto ist berechtigt, zum Individualplan zu wechseln."
                    },
                    "fr-FR": {
                      singular: "Bonne nouvelle, nous avons examiné votre demande et votre compte est éligible pour passer au plan individuel."
                    },
                    "ja-JP": {
                      singular: "良い知らせです。リクエストを確認した結果、お客様のアカウントは個人プランへ切り替える対象となります。"
                    },
                    "ko-KR": {
                      singular: "좋은 소식입니다. 요청을 검토한 결과 귀하의 계정은 개인 요금제로 전환할 수 있는 자격이 있습니다."
                    },
                    "pt-BR": {
                      singular: "Ótima notícia: revisamos sua solicitação e sua conta é elegível para mudar para o plano individual."
                    },
                    "zh-CN": {
                      singular: "好消息，我们已审核您的请求，您的账户符合切换到个人计划的资格。"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v11.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v47,
              children: (0, _v29.translate)({
                singular: "Got it",
                dictionary: {
                  es: {
                    singular: "Entendido"
                  },
                  "de-DE": {
                    singular: "Alles klar"
                  },
                  "fr-FR": {
                    singular: "J'ai compris"
                  },
                  "ja-JP": {
                    singular: "了解"
                  },
                  "ko-KR": {
                    singular: "확인"
                  },
                  "pt-BR": {
                    singular: "Entendi"
                  },
                  "zh-CN": {
                    singular: "明白"
                  }
                }
              })
            })
          })]
        }), "not_qualified" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v12.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v5.Header, {
              as: "h3",
              size: "md",
              children: (0, _v29.translate)({
                singular: "You are not eligible for Individual plans",
                dictionary: {
                  es: {
                    singular: "No es elegible para planes individuales"
                  },
                  "de-DE": {
                    singular: "Sie sind nicht für Individualpläne berechtigt"
                  },
                  "fr-FR": {
                    singular: "Vous n'êtes pas éligible aux plans individuels"
                  },
                  "ja-JP": {
                    singular: "個人プランの対象ではありません"
                  },
                  "ko-KR": {
                    singular: "귀하는 개인 요금제 자격이 없습니다"
                  },
                  "pt-BR": {
                    singular: "Você não é elegível para planos individuais"
                  },
                  "zh-CN": {
                    singular: "您不符合个人计划资格"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v8.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v19.VStack, {
              align: "stretch",
              gap: 5,
              children: [(0, _v1.jsx)(_v3.Box, {
                display: "flex",
                justifyContent: "center",
                children: (0, _v1.jsx)(_v21.CloseXCircleFilled, {
                  boxSize: "72px",
                  color: "status-destructive-primary"
                })
              }), (0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v29.translate)({
                  singular: "We have reviewed your request and your account is not eligible to switch to the individual plan. If you think you should be eligible for individual plans and you want to request a deeper analysis, {A}contact customer support{/A}.",
                  replacements: {
                    A: _v0 => (0, _v1.jsx)(_v6.Link, {
                      href: "/help/contact",
                      variant: "inline-primary",
                      children: _v0
                    }, "contact-support")
                  },
                  dictionary: {
                    es: {
                      singular: "Hemos revisado su solicitud y su cuenta no es elegible para cambiar al plan individual. Si considera que debería ser elegible para planes individuales y desea solicitar un análisis más profundo, {A}póngase en contacto con el servicio de atención al cliente{/A}."
                    },
                    "de-DE": {
                      singular: "Wir haben Ihre Anfrage geprüft und Ihr Konto ist nicht berechtigt, auf den Individualplan zu wechseln. Wenn Sie der Meinung sind, dass Sie für Individualpläne berechtigt sein sollten und eine genauere Prüfung wünschen, {A}kontaktieren Sie den Kundensupport{/A}."
                    },
                    "fr-FR": {
                      singular: "Nous avons examiné votre demande et votre compte n'est pas éligible au passage au forfait individuel. Si vous pensez que vous devriez être éligible aux forfaits individuels et que vous souhaitez demander une analyse plus approfondie, {A}contactez le support client{/A}."
                    },
                    "ja-JP": {
                      singular: "ご依頼を確認しましたが、お客様のアカウントは個人プランへ切り替える対象ではありません。個人プランの対象であるとお考えで、より詳細な審査を希望される場合は, {A}カスタマーサポートにお問い合わせください{/A}."
                    },
                    "ko-KR": {
                      singular: "요청을 검토한 결과 귀하의 계정은 개인 플랜으로 전환할 자격이 없습니다. 개인 플랜에 자격이 있다고 생각하시고 더 심층 분석을 요청하시려면 {A}고객 지원에 문의해 주세요{/A}."
                    },
                    "pt-BR": {
                      singular: "Analisamos sua solicitação e sua conta não é elegível para migrar para o plano individual. Se você acredita que sua conta deveria ser elegível para planos individuais e deseja solicitar uma análise mais aprofundada, {A}entre em contato com o suporte ao cliente{/A}."
                    },
                    "zh-CN": {
                      singular: "我们已审核您的请求，但您的账户不符合切换到个人计划的资格。如果您认为自己应当符合个人计划的资格并希望请求更深入的审核，请{A}联系客户支持{/A}。"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v11.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v48,
              children: (0, _v29.translate)({
                singular: "Got it",
                dictionary: {
                  es: {
                    singular: "Entendido"
                  },
                  "de-DE": {
                    singular: "Alles klar"
                  },
                  "fr-FR": {
                    singular: "J'ai compris"
                  },
                  "ja-JP": {
                    singular: "了解"
                  },
                  "ko-KR": {
                    singular: "확인"
                  },
                  "pt-BR": {
                    singular: "Entendi"
                  },
                  "zh-CN": {
                    singular: "明白"
                  }
                }
              })
            })
          })]
        }), "error" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v12.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v5.Header, {
              as: "h3",
              size: "md",
              children: (0, _v29.translate)({
                singular: "Something went wrong",
                dictionary: {
                  es: {
                    singular: "Se ha producido un error"
                  },
                  "de-DE": {
                    singular: "Hier ist etwas schief gelaufen"
                  },
                  "fr-FR": {
                    singular: "Quelque chose a planté"
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다"
                  },
                  "pt-BR": {
                    singular: "Alguma coisa deu errado"
                  },
                  "zh-CN": {
                    singular: "出错了"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v8.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v19.VStack, {
              align: "stretch",
              gap: 2,
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v29.translate)({
                  singular: "We could not record your answer. Please try again.",
                  dictionary: {
                    es: {
                      singular: "No pudimos registrar su respuesta. Por favor, inténtelo de nuevo."
                    },
                    "de-DE": {
                      singular: "Wir konnten Ihre Antwort nicht erfassen. Bitte versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Nous n'avons pas pu enregistrer votre réponse. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "回答を記録できませんでした。もう一度お試しください。"
                    },
                    "ko-KR": {
                      singular: "응답을 기록할 수 없습니다. 다시 시도해 주세요."
                    },
                    "pt-BR": {
                      singular: "Não conseguimos gravar sua resposta. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "我们无法记录您的回答。请重试。"
                    }
                  }
                })
              }), _v16 && (0, _v1.jsx)(_v3.Box, {
                children: (0, _v1.jsx)(_v17.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  children: _v16
                })
              })]
            })
          }), (0, _v1.jsxs)(_v11.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v39,
              children: (0, _v29.translate)({
                singular: "Try again",
                dictionary: {
                  es: {
                    singular: "Intentar de nuevo"
                  },
                  "de-DE": {
                    singular: "Nochmal versuchen"
                  },
                  "fr-FR": {
                    singular: "Veuillez réessayer"
                  },
                  "ja-JP": {
                    singular: "再試行してください"
                  },
                  "ko-KR": {
                    singular: "다시 시도하세요"
                  },
                  "pt-BR": {
                    singular: "Tente de novo"
                  },
                  "zh-CN": {
                    singular: "再试一次"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              size: "md",
              width: "100%",
              onClick: _v40,
              children: (0, _v29.translate)({
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
            })]
          })]
        })]
      })]
    });
  }
  _v0.s(["useIndividualEligibilityModal", 0, function (_v0 = {}) {
    let [_v1, _v2] = (0, _v2.useState)(!1),
      [_v3, _v4] = (0, _v2.useState)(null);
    return {
      open: _v0 => {
        _v4(_v0 ?? null), _v2(!0);
      },
      modal: (0, _v1.jsx)(_v39, {
        isOpen: _v1,
        onClose: () => _v2(!1),
        onQualified: _v0.onQualified,
        initialStep: _v0.initialStep,
        entryPoint: _v3
      }, _v0.initialStep ?? "survey")
    };
  }], 0);
}