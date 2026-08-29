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
    _v32 = _v0.i(0);
  function _v33(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v19.useGctlConfig)();
    return (0, _v31.default)(_v2 ? `/me/surveys/${_v2.where.surveyType}${(0, _v30.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v18.getMeSurvey)({
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
  "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(_v33, {
    endpoint: "/me/surveys/:surveyType",
    method: "GET"
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v32.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v19.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/surveys/${_v0.where.surveyType}${(0, _v30.serializeQuery)(_v0)}`, (0, _v18.getMeSurvey)({
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
  }), "true" === _v29.default.env.STORYBOOK && (0, _v30.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v32.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v19.useGctlConfig)(),
      [_v5, _v6] = (0, _v30.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/surveys/${_v0.where.surveyType}${(0, _v30.serializeQuery)(_v0)}`, (0, _v18.putMeSurvey)({
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
  let _v34 = "b2b_repack",
    _v35 = "respondent_type",
    _v36 = "vimeo_usage",
    _v37 = "team_size",
    _v38 = "switch_reason",
    _v39 = "reason",
    _v40 = {
      step1_respondent_type: {
        questionId: _v35,
        stepIndex: 1
      },
      step2_vimeo_usage: {
        questionId: _v36,
        stepIndex: 2
      },
      step3_team_size: {
        questionId: _v37,
        stepIndex: 3
      },
      step4_reason: {
        questionId: _v38,
        stepIndex: 4
      }
    };
  function _v41({
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
      } = _v33(() => _v0 ? {
        select: ["questions"],
        where: {
          surveyType: _v34
        }
      } : null),
      {
        baseUrl: _v20,
        jwt: _v21,
        xVimeoPage: _v22,
        locale: _v23
      } = (0, _v19.useGctlConfig)(),
      _v24 = (0, _v2.useMemo)(() => {
        let _v0 = new Map();
        return _v18?.questions?.forEach(_v0 => _v0.set(_v0.id, _v0)), {
          respondentType: _v0.get(_v35),
          usage: _v0.get(_v36),
          teamSize: _v0.get(_v37),
          reason: _v0.get(_v38)
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
      } = (0, _v23.useIndividualEligibilityTracking)(),
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
      let _v0 = _v40[_v6],
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
        let _v0 = _v40[_v6];
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
          let [_v0] = await Promise.all([(0, _v18.putMeSurvey)({
            baseUrl: _v20,
            select: ["outcome"],
            where: {
              surveyType: _v34
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
            id: _v35,
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
            id: _v36,
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
            id: _v37,
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
            id: _v38,
            question: _v24.reason?.question ?? "",
            stepIndex: 4
          },
          answers: [{
            id: _v39
          }]
        }), _v30({
          entryPoint: _v4,
          respondentType: _v8,
          vimeoUsage: _v10,
          teamSize: _v12,
          reasonLength: _v25
        }), _v42([{
          id: _v35,
          answers: [{
            id: _v8
          }]
        }, {
          id: _v36,
          answers: [{
            id: _v10
          }]
        }, {
          id: _v37,
          answers: [{
            id: _v12
          }]
        }, {
          id: _v38,
          answers: [{
            id: _v39,
            text: _v14.trim()
          }]
        }], _v0 => _v7("qualified" === _v0 ? "qualified" : "not_qualified")));
      }, [_v26, _v14, _v8, _v42, _v12, _v10, _v25, _v4, _v24.reason, _v29, _v30]),
      _v47 = (0, _v2.useCallback)(() => {
        _v32({
          entryPoint: _v4,
          outcome: "qualified"
        }), _v2?.(), window.location.href = (0, _v22.buildUpgradePlanUrl)({
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
    return (0, _v1.jsxs)(_v8.Modal, {
      isOpen: _v0,
      onClose: _v50,
      size: ["full", "md"],
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
        borderRadius: "md",
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v10.ModalCloseButton, {
          onClick: _v50,
          zIndex: 1
        }), "step1_respondent_type" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: _v24.respondentType?.question ?? (0, _v20.translate)("Tell us about yourself")
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 4,
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v24.respondentType?.description ?? (0, _v20.translate)("Help us understand who you are so we can review your switch to a dedicated plan.")
              }), !_v49 && (0, _v1.jsx)(_v15.Text, {
                variant: "body-sm",
                children: (0, _v20.translate)("Loading…")
              }), _v49 && _v24.respondentType && (0, _v1.jsx)(_v25.RadioGroup, {
                value: _v8,
                onChange: _v0 => _v9(_v0),
                children: (0, _v1.jsx)(_v16.VStack, {
                  align: "stretch",
                  gap: 3,
                  children: _v24.respondentType.answers.map(_v0 => (0, _v1.jsx)(_v24.Radio, {
                    value: _v0.id,
                    id: `b2b-repack-respondent-${_v0.id}`,
                    size: "sm",
                    children: _v0.label
                  }, _v0.id))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v12.ModalFooter, {
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
              children: (0, _v20.translate)({
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
              children: (0, _v20.translate)({
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
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: _v24.usage?.question ?? (0, _v20.translate)("Tell us about yourself")
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 4,
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v24.usage?.description ?? (0, _v20.translate)("Help us understand what you will use Vimeo for.")
              }), _v24.usage && (0, _v1.jsx)(_v25.RadioGroup, {
                value: _v10,
                onChange: _v0 => _v11(_v0),
                children: (0, _v1.jsx)(_v16.VStack, {
                  align: "stretch",
                  gap: 3,
                  children: _v24.usage.answers.map(_v0 => (0, _v1.jsx)(_v24.Radio, {
                    value: _v0.id,
                    id: `b2b-repack-usage-${_v0.id}`,
                    size: "sm",
                    children: _v0.label
                  }, _v0.id))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v12.ModalFooter, {
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
              children: (0, _v20.translate)({
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
              children: (0, _v20.translate)({
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
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: _v24.teamSize?.question ?? (0, _v20.translate)("Tell us about yourself")
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 4,
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v24.teamSize?.description ?? (0, _v20.translate)("How many people work on this account?")
              }), _v24.teamSize && (0, _v1.jsx)(_v25.RadioGroup, {
                value: _v12,
                onChange: _v0 => _v13(_v0),
                children: (0, _v1.jsx)(_v16.VStack, {
                  align: "stretch",
                  gap: 3,
                  children: _v24.teamSize.answers.map(_v0 => (0, _v1.jsx)(_v24.Radio, {
                    value: _v0.id,
                    id: `b2b-repack-team-size-${_v0.id}`,
                    size: "sm",
                    children: _v0.label
                  }, _v0.id))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v12.ModalFooter, {
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
              children: (0, _v20.translate)({
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
              children: (0, _v20.translate)({
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
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: _v24.reason?.question ?? (0, _v20.translate)("Why does the individual plan fit you better?")
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 3,
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v24.reason?.description ?? (0, _v20.translate)("Tell us in a few words why you would like to switch from business to individual.")
              }), (0, _v1.jsx)(_v27.Textarea, {
                value: _v14,
                onChange: _v0 => _v15(_v0.target.value),
                placeholder: _v24.reason?.placeholder ?? (0, _v20.translate)("e.g. I no longer collaborate with a team and only need to host my personal showreel for clients..."),
                rows: 4,
                "aria-label": (0, _v20.translate)({
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
                children: [(0, _v1.jsx)(_v15.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  children: (0, _v20.translate)("Minimum 50 characters")
                }), (0, _v1.jsx)(_v15.Text, {
                  variant: "body-sm",
                  color: _v26 ? "status-positive-primary" : "text-tertiary",
                  children: `${_v25} / 50`
                })]
              })]
            })
          }), (0, _v1.jsxs)(_v12.ModalFooter, {
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
              children: (0, _v20.translate)({
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
              children: (0, _v20.translate)({
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
        }), "submitting" === _v6 && (0, _v1.jsx)(_v9.ModalBody, {
          py: 14,
          px: 6,
          children: (0, _v1.jsxs)(_v16.VStack, {
            align: "center",
            gap: 4,
            children: [(0, _v1.jsx)(_v26.Spinner, {
              size: "lg"
            }), (0, _v1.jsx)(_v15.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v20.translate)("Checking eligibility…")
            })]
          })
        }), "qualified" === _v6 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: (0, _v20.translate)("You're approved for the individual plan")
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 5,
              children: [(0, _v1.jsx)(_v3.Box, {
                display: "flex",
                justifyContent: "center",
                children: (0, _v1.jsx)(_v17.CircleCheckFilled, {
                  boxSize: "72px",
                  color: "status-positive-primary"
                })
              }), (0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v20.translate)("Great news, we have reviewed your request and your account is eligible to switch to the individual plan.")
              })]
            })
          }), (0, _v1.jsx)(_v12.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v47,
              children: (0, _v20.translate)({
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
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: (0, _v20.translate)("You are not eligible for Individual plans")
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 5,
              children: [(0, _v1.jsx)(_v3.Box, {
                display: "flex",
                justifyContent: "center",
                children: (0, _v1.jsx)(_v28.CloseXCircleFilled, {
                  boxSize: "72px",
                  color: "status-destructive-primary"
                })
              }), (0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v20.translate)({
                  singular: "We have reviewed your request and your account is not eligible to switch to the individual plan. If you think you should be eligible for individual plans and you want to request a deeper analysis, {A}contact customer support{/A}.",
                  replacements: {
                    A: _v0 => (0, _v1.jsx)(_v7.Link, {
                      href: "/help/contact",
                      variant: "inline-primary",
                      children: _v0
                    }, "contact-support")
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v12.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v48,
              children: (0, _v20.translate)({
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
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 2,
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v20.translate)({
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
                children: (0, _v1.jsx)(_v15.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  children: _v16
                })
              })]
            })
          }), (0, _v1.jsxs)(_v12.ModalFooter, {
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
              children: (0, _v20.translate)({
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
              children: (0, _v20.translate)({
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
  let _v42 = [{
    id: "self_declaration",
    answers: [{
      id: "confirmed"
    }]
  }];
  function _v43({
    isOpen: _v0,
    onClose: _v1,
    onQualified: _v2,
    entryPoint: _v3 = null
  }) {
    let [_v4, _v5] = (0, _v2.useState)("consent"),
      [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)(""),
      {
        baseUrl: _v10,
        jwt: _v11,
        xVimeoPage: _v12,
        locale: _v13
      } = (0, _v19.useGctlConfig)(),
      {
        trackIndividualEligibilityDeclarationViewed: _v14,
        trackIndividualEligibilityDeclarationSubmitted: _v15,
        trackIndividualEligibilityDeclarationOutcomeShown: _v16,
        trackIndividualEligibilityDeclarationOutcomeCtaClicked: _v17,
        trackIndividualEligibilityDeclarationAbandoned: _v18,
        trackIndividualEligibilityDeclarationError: _v19
      } = (0, _v23.useIndividualEligibilityTracking)(),
      _v20 = (0, _v2.useRef)(!1),
      _v21 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      _v0 || (_v20.current = !1, _v21.current = !1);
    }, [_v0]), (0, _v2.useEffect)(() => {
      _v0 && !_v20.current && (_v20.current = !0, _v14(_v3));
    }, [_v0, _v3, _v14]), (0, _v2.useEffect)(() => {
      !_v0 || _v21.current || ("qualified" === _v4 || "error" === _v4) && (_v21.current = !0, _v16({
        entryPoint: _v3,
        outcome: _v4
      }));
    }, [_v0, _v4, _v3, _v16]);
    let _v22 = (0, _v2.useCallback)(() => {
        _v5("consent"), _v7(!1), _v9("");
      }, []),
      _v23 = (0, _v2.useCallback)(() => {
        "consent" === _v4 && _v18(_v3), _v22(), _v1();
      }, [_v1, _v22, _v4, _v3, _v18]),
      _v24 = (0, _v2.useCallback)(() => {
        window.location.reload();
      }, [_v23]),
      _v25 = (0, _v2.useCallback)(async () => {
        _v5("submitting"), _v15(_v3);
        try {
          await (0, _v18.putMeSurvey)({
            baseUrl: _v10,
            select: ["outcome"],
            where: {
              surveyType: "b2b_repack"
            },
            variables: _v42,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v11 ? `jwt ${_v11}` : "",
              "Vimeo-Page": `${_v12}`,
              "Accept-Language": _v13 ?? "en"
            }
          }), _v5("qualified");
        } catch (_v0) {
          let _v1 = _v0 instanceof Error ? _v0.message : String(_v0);
          _v9(_v1), _v5("error"), _v19({
            entryPoint: _v3,
            errorMessage: _v1
          });
        }
      }, [_v10, _v11, _v13, _v12, _v3, _v15, _v19]),
      _v26 = (0, _v2.useCallback)(() => {
        _v25();
      }, [_v25]),
      _v27 = (0, _v2.useCallback)(() => {
        _v17({
          entryPoint: _v3,
          outcome: "qualified"
        }), _v2?.(), window.location.href = (0, _v22.buildUpgradePlanUrl)({
          paywallTrigger: "b2b_eligibility_modal_qualified",
          paywallLocation: "billing",
          paywallFeature: "b2b_repackaging"
        });
      }, [_v23, _v2, _v3, _v17]);
    if (!_v0) return null;
    let _v28 = "consent" === _v4 ? _v23 : _v24;
    return (0, _v1.jsxs)(_v8.Modal, {
      isOpen: _v0,
      onClose: _v28,
      size: ["full", "md"],
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
        borderRadius: "md",
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v10.ModalCloseButton, {
          onClick: _v28,
          zIndex: 1
        }), "consent" === _v4 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: (0, _v20.translate)({
                singular: "Confirm eligibility for Individual plans",
                dictionary: {
                  es: {
                    singular: "Confirmar elegibilidad para planes individuales"
                  },
                  "de-DE": {
                    singular: "Berechtigung für Einzelpläne bestätigen"
                  },
                  "fr-FR": {
                    singular: "Confirmer l'éligibilité aux forfaits individuels"
                  },
                  "ja-JP": {
                    singular: "個人プランの適格性を確認する"
                  },
                  "ko-KR": {
                    singular: "개인 플랜 자격을 확인하세요"
                  },
                  "pt-BR": {
                    singular: "Confirmar elegibilidade para Individual plans"
                  },
                  "zh-CN": {
                    singular: "确认是否符合个人计划资格"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 36,
            pb: 5,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 4,
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v20.translate)({
                  singular: "Your account has been classified as a Business account and is not eligible for individual plans. If you are a non profit organization or you believe this is incorrect, you can submit a self-declaration by checking the box below.",
                  dictionary: {
                    es: {
                      singular: "Su cuenta ha sido clasificada como una cuenta Business y no es elegible para planes individuales. Si usted es una organización sin fines de lucro o cree que esto es incorrecto, puede enviar una autodeclaración marcando la casilla de abajo."
                    },
                    "de-DE": {
                      singular: "Ihr Konto wurde als Geschäftskonto eingestuft und ist nicht für Einzelpläne zugelassen. Wenn Sie eine gemeinnützige Organisation sind oder glauben, dass dies nicht korrekt ist, können Sie durch Ankreuzen des untenstehenden Feldes eine Selbsterklärung einreichen."
                    },
                    "fr-FR": {
                      singular: "Votre compte a été classé comme compte Business et n'est pas éligible aux forfaits individuels. Si vous êtes une organisation à but non lucratif ou si vous pensez que cela est incorrect, vous pouvez soumettre une auto-déclaration en cochant la case ci-dessous."
                    },
                    "ja-JP": {
                      singular: "お客様のアカウントはビジネスアカウントとして分類されており、個人プランの対象ではありません。非営利団体である場合、またはこの分類が誤っていると思われる場合は、以下のチェックボックスにチェックすることで自己申告を提出できます。"
                    },
                    "ko-KR": {
                      singular: "귀하의 계정은 비즈니스 계정으로 분류되어 개인 플랜 자격이 없습니다. 비영리 단체이거나 분류가 잘못되었다고 생각하시면 아래 확인란을 선택하여 자가 신고를 제출할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Sua conta foi classificada como uma Business account e não é elegível para individual plans. Se você é uma organização sem fins lucrativos ou acredita que isso está incorreto, você pode enviar uma autodeclaração marcando a caixa abaixo."
                    },
                    "zh-CN": {
                      singular: "您的账户已被归类为企业账户，不符合个人计划资格。如果您是非营利组织或您认为此判定有误，您可以通过勾选下面的复选框提交自我声明。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v20.translate)({
                  singular: "Vimeo may use account and usage information to verify eligibility and ensure compliance with our {A}Plan Usage Policy{/A}. If the account does not meet the criteria, we may remove access to Individual plans and move the account to an eligible plan after notice. Deliberate false statements or abuse may result in restrictions under our Terms of Service.",
                  replacements: {
                    A: _v0 => (0, _v1.jsx)(_v7.Link, {
                      href: "https://vimeo.com/legal/policies/plan-usage",
                      isExternal: !0,
                      children: _v0
                    }, "plan-usage-policy")
                  },
                  dictionary: {
                    es: {
                      singular: "Vimeo puede usar la información de la cuenta y de uso para verificar la elegibilidad y asegurar el cumplimiento de nuestra {A}Política de uso del Plan{/A}. Si la cuenta no cumple con los criterios, podemos revocar el acceso a los planes individuales y trasladar la cuenta a un plan elegible previa notificación. Las declaraciones falsas deliberadas o el abuso pueden dar lugar a restricciones conforme a nuestros Términos de Servicio."
                    },
                    "de-DE": {
                      singular: "Vimeo kann Konto- und Nutzungsinformationen verwenden, um die Berechtigung zu überprüfen und die Einhaltung unserer {A}Richtlinie zur Nutzung von Plänen{/A} sicherzustellen. Wenn das Konto die Kriterien nicht erfüllt, können wir den Zugriff auf Einzelpläne entfernen und das Konto nach Benachrichtigung auf einen berechtigten Plan umstellen. Vorsätzlich falsche Angaben oder Missbrauch können gemäß unseren Nutzungsbedingungen zu Einschränkungen führen."
                    },
                    "fr-FR": {
                      singular: "Vimeo peut utiliser les informations de compte et d'utilisation pour vérifier l'éligibilité et garantir le respect de notre {A}Politique d'utilisation des forfaits{/A}. Si le compte ne satisfait pas aux critères, nous pouvons supprimer l'accès aux forfaits individuels et transférer le compte vers un forfait éligible après notification. Des déclarations délibérément fausses ou des abus peuvent entraîner des restrictions conformément à nos Conditions d'utilisation."
                    },
                    "ja-JP": {
                      singular: "Vimeo はアカウントおよび利用状況の情報を使用して、適格性を確認し、{A}プラン利用ポリシー{/A}への準拠を確保することがあります。アカウントが基準を満たさない場合、事前通知のうえ個人プランへのアクセスを削除し、該当するプランに移行することがあります。故意の虚偽申告や悪用は、利用規約に基づく制限の対象となる場合があります。"
                    },
                    "ko-KR": {
                      singular: "Vimeo는 계정 및 사용 정보를 사용하여 자격을 확인하고 당사의 {A}Plan Usage Policy{/A} 준수를 보장할 수 있습니다. 계정이 기준을 충족하지 않는 경우, 사전 통지 후 개인 플랜 이용 권한을 제거하고 계정을 적합한 플랜으로 이전할 수 있습니다. 고의적인 허위 진술 또는 악용은 당사의 서비스 약관에 따른 제재를 초래할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "A Vimeo pode usar informações da conta e de uso para verificar a elegibilidade e garantir conformidade com nossa {A}Plan Usage Policy{/A}. Se a conta não atender aos critérios, poderemos remover o acesso aos Individual plans e mover a conta para um plano elegível após notificação. Declarações falsas deliberadas ou abuso podem resultar em restrições conforme nossos Termos de Serviço."
                    },
                    "zh-CN": {
                      singular: "Vimeo 可能会使用账户及使用信息来核实资格并确保遵守我们的{A}计划使用政策{/A}。如果该账户不符合条件，我们可能会在通知后移除对个人计划的访问并将账户转移到符合资格的计划。故意作出虚假陈述或滥用可能会根据我们的服务条款导致限制。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v5.Checkbox, {
                isChecked: _v6,
                onChange: _v0 => _v7(_v0.target.checked),
                size: "md",
                sx: {
                  alignItems: "flex-start"
                },
                children: (0, _v20.translate)({
                  singular: "I confirm that this account meets the Individual Plan eligibility criteria",
                  dictionary: {
                    es: {
                      singular: "Confirmo que esta cuenta cumple con los criterios de elegibilidad del Plan Individual"
                    },
                    "de-DE": {
                      singular: "Ich bestätige, dass dieses Konto die Voraussetzungen für Einzelpläne erfüllt"
                    },
                    "fr-FR": {
                      singular: "Je confirme que ce compte répond aux critères d'éligibilité au plan individuel"
                    },
                    "ja-JP": {
                      singular: "このアカウントが個人プランの適格基準を満たしていることを確認します"
                    },
                    "ko-KR": {
                      singular: "이 계정이 개인 플랜 자격 기준을 충족함을 확인합니다"
                    },
                    "pt-BR": {
                      singular: "Confirmo que esta conta atende aos critérios de elegibilidade para o Individual Plan"
                    },
                    "zh-CN": {
                      singular: "我确认此账户符合个人计划的资格标准"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsxs)(_v12.ModalFooter, {
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
              isDisabled: !_v6,
              onClick: _v26,
              children: (0, _v20.translate)({
                singular: "Submit self-declaration",
                dictionary: {
                  es: {
                    singular: "Enviar autodeclaración"
                  },
                  "de-DE": {
                    singular: "Selbsterklärung einreichen"
                  },
                  "fr-FR": {
                    singular: "Soumettre une auto-déclaration"
                  },
                  "ja-JP": {
                    singular: "自己申告を提出する"
                  },
                  "ko-KR": {
                    singular: "자가 신고 제출"
                  },
                  "pt-BR": {
                    singular: "Enviar autodeclaração"
                  },
                  "zh-CN": {
                    singular: "提交自我声明"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              size: "md",
              width: "100%",
              onClick: _v23,
              children: (0, _v20.translate)({
                singular: "Not now",
                dictionary: {
                  es: {
                    singular: "Ahora no"
                  },
                  "de-DE": {
                    singular: "Nicht jetzt"
                  },
                  "fr-FR": {
                    singular: "Plus tard"
                  },
                  "ja-JP": {
                    singular: "後でする"
                  },
                  "ko-KR": {
                    singular: "나중에"
                  },
                  "pt-BR": {
                    singular: "Agora não"
                  },
                  "zh-CN": {
                    singular: "现在不行"
                  }
                }
              })
            })]
          })]
        }), "submitting" === _v4 && (0, _v1.jsx)(_v9.ModalBody, {
          pt: 14,
          pb: 14,
          px: 6,
          children: (0, _v1.jsx)(_v16.VStack, {
            align: "center",
            gap: 4,
            children: (0, _v1.jsx)(_v15.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v20.translate)({
                singular: "Submitting…",
                dictionary: {
                  es: {
                    singular: "Enviando…"
                  },
                  "de-DE": {
                    singular: "Wird gesendet…"
                  },
                  "fr-FR": {
                    singular: "Envoi en cours…"
                  },
                  "ja-JP": {
                    singular: "送信中…"
                  },
                  "ko-KR": {
                    singular: "제출 중…"
                  },
                  "pt-BR": {
                    singular: "Enviando…"
                  },
                  "zh-CN": {
                    singular: "正在提交…"
                  }
                }
              })
            })
          })
        }), "qualified" === _v4 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 3,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: (0, _v20.translate)({
                singular: "Eligibility confirmed",
                dictionary: {
                  es: {
                    singular: "Elegibilidad confirmada"
                  },
                  "de-DE": {
                    singular: "Berechtigung bestätigt"
                  },
                  "fr-FR": {
                    singular: "Éligibilité confirmée"
                  },
                  "ja-JP": {
                    singular: "適格性が確認されました"
                  },
                  "ko-KR": {
                    singular: "자격이 확인되었습니다"
                  },
                  "pt-BR": {
                    singular: "Elegibilidade confirmada"
                  },
                  "zh-CN": {
                    singular: "资格已确认"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 9,
            pb: 5,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 4,
              children: [(0, _v1.jsx)(_v3.Box, {
                display: "flex",
                justifyContent: "center",
                py: 2,
                children: (0, _v1.jsx)(_v17.CircleCheckFilled, {
                  boxSize: "64px",
                  color: "status-positive-primary"
                })
              }), (0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                pt: 0,
                children: (0, _v20.translate)({
                  singular: "Your self-declaration has been accepted. You can now view and switch to Individual plans.",
                  dictionary: {
                    es: {
                      singular: "Su autodeclaración ha sido aceptada. Ahora puede ver y cambiar a planes individuales."
                    },
                    "de-DE": {
                      singular: "Ihre Selbsterklärung wurde akzeptiert. Sie können nun Einzelpläne ansehen und zu einem Einzelplan wechseln."
                    },
                    "fr-FR": {
                      singular: "Votre auto-déclaration a été acceptée. Vous pouvez désormais consulter et passer aux forfaits individuels."
                    },
                    "ja-JP": {
                      singular: "あなたの自己申告は承認されました。これで個人プランを表示して、個人プランに切り替えることができます。"
                    },
                    "ko-KR": {
                      singular: "귀하의 자가 신고가 수락되었습니다. 이제 개인 플랜을 확인하고 전환할 수 있습니다"
                    },
                    "pt-BR": {
                      singular: "Sua autodeclaração foi aceita. Agora você pode ver e mudar para Individual plans."
                    },
                    "zh-CN": {
                      singular: "您的自我声明已被接受。您现在可以查看并切换到个人计划。"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v12.ModalFooter, {
            pt: 4,
            pb: 6,
            px: 6,
            children: (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v27,
              children: (0, _v20.translate)({
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
        }), "error" === _v4 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v13.ModalHeader, {
            pt: 6,
            pb: 0,
            px: 6,
            children: (0, _v1.jsx)(_v6.Header, {
              as: "h3",
              size: "md",
              children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v9.ModalBody, {
            pt: 5,
            pb: 4,
            px: 6,
            children: (0, _v1.jsxs)(_v16.VStack, {
              align: "stretch",
              gap: 2,
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v20.translate)({
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
              }), _v8 && (0, _v1.jsx)(_v3.Box, {
                children: (0, _v1.jsx)(_v15.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  children: _v8
                })
              })]
            })
          }), (0, _v1.jsxs)(_v12.ModalFooter, {
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
              onClick: _v22,
              children: (0, _v20.translate)({
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
              onClick: _v23,
              children: (0, _v20.translate)({
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
    let {
        settings: _v1
      } = (0, _v21.useOrionSettings)(),
      [_v2, _v3] = (0, _v2.useState)(!1),
      [_v4, _v5] = (0, _v2.useState)(null),
      _v6 = (0, _v2.useCallback)(() => _v3(!1), []);
    return {
      open: _v0 => {
        _v5(_v0 ?? null), _v3(!0);
      },
      modal: _v1.show_whitelisting_confirmation_modal ? (0, _v1.jsx)(_v43, {
        isOpen: _v2,
        onClose: _v6,
        onQualified: _v0.onQualified,
        entryPoint: _v4
      }) : (0, _v1.jsx)(_v41, {
        isOpen: _v2,
        onClose: _v6,
        onQualified: _v0.onQualified,
        initialStep: _v0.initialStep,
        entryPoint: _v4
      }, _v0.initialStep ?? "survey")
    };
  }], 0);
}