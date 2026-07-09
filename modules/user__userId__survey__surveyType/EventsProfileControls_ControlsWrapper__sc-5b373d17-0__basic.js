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
  let _v19 = _v3.default.div.withConfig({
      displayName: "EventsProfileControls__ControlsWrapper",
      componentId: "sc-5b373d17-0"
    })`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: ${(0, _v6.rem)(32)};
  margin-right: ${(0, _v6.rem)(40)};
  margin-top: ${(0, _v6.rem)(30)};
  align-self: flex-end;
`,
    _v20 = ({
      isLoading: _v0,
      onSubmitClick: _v1,
      onSkipClick: _v2,
      formData: _v3
    }) => (0, _v1.jsxs)(_v19, {
      children: [(0, _v1.jsx)(_v18.Button, {
        format: "basic",
        variant: "hyperminimal",
        onClick: _v2,
        disabled: _v0,
        children: (0, _v10.translate)({
          singular: "Skip survey",
          dictionary: {
            es: {
              singular: "Saltar encuesta"
            },
            "de-DE": {
              singular: "Umfrage überspringen"
            },
            "fr-FR": {
              singular: "Ignorer l'enquête"
            },
            "ja-JP": {
              singular: "アンケートをスキップ"
            },
            "ko-KR": {
              singular: "설문조사 건너뛰기"
            },
            "pt-BR": {
              singular: "Pular pesquisa"
            },
            "zh-CN": {
              singular: "跳过调查"
            }
          }
        })
      }), (0, _v1.jsx)(_v18.Button, {
        onClick: _v1,
        loading: _v0,
        disabled: _v0 || _v3.answersData.length < 1,
        children: (0, _v10.translate)({
          singular: "Submit",
          dictionary: {
            es: {
              singular: "Enviar"
            },
            "de-DE": {
              singular: "Senden"
            },
            "fr-FR": {
              singular: "Envoyer"
            },
            "ja-JP": {
              singular: "送信"
            },
            "ko-KR": {
              singular: "제출"
            },
            "pt-BR": {
              singular: "Enviar"
            },
            "zh-CN": {
              singular: "提交"
            }
          }
        })
      })]
    });
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = _v3.default.div.withConfig({
      displayName: "EventsProfileHeader__NavWrapper",
      componentId: "sc-6573b75b-0"
    })`
  display: flex;
  position: absolute;
  flex-flow: row nowrap;
  left: ${(0, _v6.rem)(28)};
  top: ${(0, _v6.rem)(14)};
  align-items: center;
`,
    _v24 = _v3.default.div.withConfig({
      displayName: "EventsProfileHeader__VimeoLogoWrapper",
      componentId: "sc-6573b75b-1"
    })`
  cursor: pointer;
  display: flex;

  svg {
    height: ${(0, _v6.rem)(36)};
    width: ${(0, _v6.rem)(106)};
    path {
      fill: ${_v13.core.color.text(170)};
    }
  }
`,
    _v25 = (0, _v3.default)(_v21.ArrowLeft).withConfig({
      displayName: "EventsProfileHeader__ArrowLeftWrapper",
      componentId: "sc-6573b75b-2"
    })`
  display: flex;
  width: ${(0, _v6.rem)(24)};
  height: ${(0, _v6.rem)(24)};
  cursor: pointer;
`,
    _v26 = () => {
      let _v0 = (0, _v2.useRouter)(),
        _v1 = (0, _v7.useCallback)(() => {
          _v0.push("/");
        }, [_v0]);
      return (0, _v1.jsxs)(_v23, {
        onClick: _v1,
        children: [(0, _v1.jsx)(_v25, {}), (0, _v1.jsx)(_v24, {
          children: (0, _v1.jsx)(_v22.default, {})
        })]
      });
    },
    _v27 = _v3.default.div.withConfig({
      displayName: "QuestionAnswersList__QuestionAnswersListWrapper",
      componentId: "sc-6f53a4a9-0"
    })`
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  width: 100%;
  background-color: ${(0, _v11.blue)(0)};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: ${(0, _v6.rem)(4)};

  &[data-selected='show'] {
    display: flex;
  }

  &[data-positioning='top'] {
    top: 101%;
  }

  &[data-positioning='bottom'] {
    bottom: 101%;
  }
`,
    _v28 = _v3.default.div.withConfig({
      displayName: "QuestionAnswersList__QuestionAnswer",
      componentId: "sc-6f53a4a9-1"
    })`
  display: flex;
  padding: ${(0, _v6.rem)(6)} ${(0, _v6.rem)(12)};
  font-style: normal;
  font-weight: 400;
  font-size: ${(0, _v6.rem)(14)};
  line-height: ${(0, _v6.rem)(20)};
  color: ${_v13.core.color.text(170)};
  cursor: pointer;

  &:hover {
    background-color: ${(0, _v11.slate)(30)};
  }
`,
    _v29 = ({
      index: _v0,
      question: _v1,
      formData: _v2,
      answersListOpenId: _v3,
      setFormData: _v4
    }) => {
      let _v5 = (0, _v7.useCallback)((_v0, _v1) => {
        if (_v2.answersData.some(_v0 => _v0.id === _v0)) {
          let _v0 = _v2.answersData.find(_v0 => _v0.id === _v0);
          _v0 && (_v0.answers = [{
            id: _v1
          }]);
        } else _v2.answersData.push({
          id: _v0,
          answers: [{
            id: _v1
          }]
        });
        _v4({
          ..._v2
        });
      }, [_v2, _v4]);
      return (0, _v1.jsx)(_v27, {
        "data-selected": _v3 === _v1.id ? "show" : "hide",
        "data-positioning": _v0 > 3 ? "bottom" : "top",
        children: _v1.answers.map(_v0 => (0, _v1.jsx)(_v28, {
          onClick: () => {
            _v5(_v1.id, _v0.id);
          },
          children: _v0.label
        }, _v0.id))
      });
    };
  var _v30 = _v0.i(0);
  let _v31 = (0, _v3.default)(_v30.ChevronDown).withConfig({
      displayName: "SelectedAnswerView__ChevronWrapper",
      componentId: "sc-c3f1f501-0"
    })`
  display: flex;
  width: ${(0, _v6.rem)(22)};
  min-width: ${(0, _v6.rem)(22)};
  margin-left: auto;

  &[data-selected='rotate'] {
    transform: rotate(180deg);
  }
`,
    _v32 = _v3.default.div.withConfig({
      displayName: "SelectedAnswerView__SelectedAnswerWrapper",
      componentId: "sc-c3f1f501-1"
    })`
  display: flex;
  color: ${_v13.core.color.text(0)};
  padding: ${(0, _v6.rem)(8)} 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-weight: 700;
  font-size: ${(0, _v6.rem)(18)};

  &[data-selected='selected'] {
    border-bottom-color: ${(0, _v11.blue)(500)};
  }

  &[data-answered='answered'] {
    color: ${_v13.core.color.text(170)};
  }
`,
    _v33 = ({
      question: _v0,
      selectedAnswer: _v1,
      isAnswered: _v2,
      answersListOpenId: _v3,
      setAnswersListOpenId: _v4
    }) => {
      let _v5 = (0, _v7.useCallback)(_v0 => {
          _v4(_v0);
        }, [_v4]),
        _v6 = _v2 ? _v0.answers.find(_v0 => _v1?.answers.some(_v0 => _v0.id === _v0.id))?.label : _v0.placeholder;
      return (0, _v1.jsxs)(_v32, {
        "data-selected": _v3 === _v0.id ? "selected" : "",
        "data-answered": _v2 ? "answered" : "",
        onClick: () => {
          _v5(_v0.id);
        },
        children: [_v6, (0, _v1.jsx)(_v31, {
          "data-selected": _v3 === _v0.id ? "rotate" : ""
        })]
      });
    };
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = _v3.default.div.withConfig({
      displayName: "EventsProfile__SurveyViewWrapper",
      componentId: "sc-6051572-0"
    })`
  display: flex;
  background: linear-gradient(to bottom, ${(0, _v11.blue)(50)} 0 ${(0, _v6.rem)(292)}, ${(0, _v11.blue)(0)} ${(0, _v6.rem)(292)});
  height: 100vh;
  align-items: center;
  flex-direction: column;
  position: relative;
`,
    _v38 = (0, _v3.default)(_v14.Header).withConfig({
      displayName: "EventsProfile__HeaderWrapper",
      componentId: "sc-6051572-1"
    })`
  display: flex;
  margin-top: ${(0, _v6.rem)(86)};
  margin-bottom: 0;
`,
    _v39 = (0, _v3.default)(_v15.Paragraph).withConfig({
      displayName: "EventsProfile__DescriptionWrapper",
      componentId: "sc-6051572-2"
    })`
  display: flex;
  margin-top: ${(0, _v6.rem)(4)};
  margin-bottom: ${(0, _v6.rem)(24)};
`,
    _v40 = _v3.default.div.withConfig({
      displayName: "EventsProfile__QuestionsWrapper",
      componentId: "sc-6051572-3"
    })`
  display: flex;
  border-top-right-radius: ${(0, _v6.rem)(16)};
  border-top-left-radius: ${(0, _v6.rem)(16)};
  width: ${(0, _v6.rem)(688)};
  padding: 0 ${(0, _v6.rem)(48)};
  background-color: ${(0, _v11.blue)(0)};
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
`,
    _v41 = _v3.default.div.withConfig({
      displayName: "EventsProfile__QuestionWrapper",
      componentId: "sc-6051572-4"
    })`
  display: flex;
  margin-top: ${(0, _v6.rem)(24)};
  flex-direction: column;
  position: relative;
`,
    _v42 = (0, _v3.default)(_v15.Paragraph).withConfig({
      displayName: "EventsProfile__QuestionTitle",
      componentId: "sc-6051572-5"
    })`
  color: ${_v13.core.color.text(170)};
  margin-bottom: 0;
`,
    _v43 = (0, _v3.default)(_v12.Input).withConfig({
      displayName: "EventsProfile__OtherInputWrapper",
      componentId: "sc-6051572-6"
    })`
  margin-top: ${(0, _v6.rem)(8)};
  outline: none;

  & input {
    color: ${_v13.core.color.text(170)};
    font-weight: 700;
    font-size: ${(0, _v6.rem)(18)};
    padding-bottom: ${(0, _v6.rem)(8)};

    &::placeholder {
      color: ${_v13.core.color.text(0)};
    }
  }
`,
    _v44 = () => {
      let _v0 = (0, _v2.useRouter)(),
        {
          userId: _v1,
          surveyType: _v2
        } = _v0.query,
        _v3 = (0, _v7.useContext)(_v17.ViewerContext),
        [_v4, _v5] = (0, _v7.useState)(!1),
        [_v6, _v7] = (0, _v7.useState)({
          answersData: [],
          otherInputsData: []
        }),
        [_v8, _v9] = (0, _v7.useState)(""),
        [_v10, _v11] = (0, _v7.useState)(!1),
        {
          data: _v12,
          loading: _v13,
          error: _v14
        } = (0, _v8.useQuery)(`/users/${_v1}/surveys/${_v2}`);
      (0, _v7.useEffect)(() => {
        !_v10 && !_v14 && !_v13 && _v12?.shouldShow && (_v34.BigPictureClient.sendEvent(new _v34.Event("vimeo.show_live_user_profiling_survey", 1, {})), _v11(!0));
      }, [_v10, _v14, _v13, _v12]);
      let _v15 = (0, _v7.useCallback)(() => {
          _v8 && _v9("");
        }, [_v8]),
        _v16 = (0, _v7.useCallback)((_v0, _v1) => {
          if (_v6.otherInputsData.some(_v0 => _v0.question === _v1)) {
            let _v0 = _v6.otherInputsData.find(_v0 => _v0.question === _v1);
            _v0 && (_v0.value = _v0.target.value);
          } else _v6.otherInputsData.push({
            question: _v1,
            value: _v0.target.value
          });
          _v7({
            ..._v6,
            otherInputsData: [..._v6.otherInputsData]
          });
        }, [_v6]),
        _v17 = (0, _v7.useCallback)(() => {
          _v5(!0), _v34.BigPictureClient.sendEvent(new _v34.Event("vimeo.skip_live_user_profiling_survey", 1, {})), _v3 && fetch(`https://${_v3.apiUrl}/users/${_v1}/surveys/${_v2}/skip`, {
            method: "POST",
            headers: {
              Authorization: `jwt ${_v3.jwt}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              survey_type: _v2
            })
          }).then(() => {
            _v0.push((0, _v36.getRedirectUrl)());
          }).catch(() => {
            _v0.push((0, _v36.getRedirectUrl)());
          });
        }, [_v0, _v2, _v1, _v3]),
        _v18 = (0, _v7.useCallback)(() => {
          var _v0;
          _v5(!0), _v12 && (_v0 = (0, _v36.prepareDataForSubmitBP)(_v12.questions, _v6), _v34.BigPictureClient.sendEvent(new _v34.Event("vimeo.submit_live_user_profiling_survey_response", 2, _v0))), _v3 && fetch(`https://${_v3.apiUrl}/users/${_v1}/surveys/${_v2}`, {
            method: "PUT",
            headers: {
              Authorization: `jwt ${_v3.jwt}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(_v6.answersData)
          }).then(() => {
            _v0.push((0, _v36.getRedirectUrl)());
          }).catch(() => {
            _v0.push((0, _v36.getRedirectUrl)());
          });
        }, [_v6, _v0, _v2, _v12, _v1, _v3]);
      return _v3 && !_v3.user ? (0, _v1.jsx)(_v16.ErrorPage, {
        error: new _v9.UnauthorizedError("Event Profiling survey Access")
      }) : ((_v14 || !_v13 && _v12 && !_v12.shouldShow) && _v0.push("/"), _v13) ? (0, _v1.jsx)(_v35.default, {}) : _v12?.shouldShow ? (0, _v1.jsxs)(_v37, {
        onClick: _v15,
        children: [(0, _v1.jsx)(_v26, {}), (0, _v1.jsx)(_v38, {
          size: "2",
          children: (0, _v10.translate)({
            singular: "Before getting started, tell us about yourself",
            dictionary: {
              es: {
                singular: "Antes de comenzar, háblanos de ti"
              },
              "de-DE": {
                singular: "Erzähle uns ein wenig mehr über dich, bevor du loslegst"
              },
              "fr-FR": {
                singular: "Avant de commencer, parlez-nous un peu de vous"
              },
              "ja-JP": {
                singular: "利用開始の前に、アンケートにご協力ください"
              },
              "ko-KR": {
                singular: "시작하기 전에 회원님에 대해 알려주세요."
              },
              "pt-BR": {
                singular: "Antes de começar, conte um pouco sobre você"
              },
              "zh-CN": {
                singular: "请先介绍一下自己"
              }
            }
          })
        }), (0, _v1.jsx)(_v39, {
          size: "2",
          children: (0, _v10.translate)({
            singular: "Your answers will help us improve your experience",
            dictionary: {
              es: {
                singular: "Tus respuestas nos ayudarán a mejorar tu experiencia"
              },
              "de-DE": {
                singular: "Deine Antworten helfen uns dabei, dein Erlebnis zu verbessern"
              },
              "fr-FR": {
                singular: "Vos réponses nous aideront à améliorer votre expérience"
              },
              "ja-JP": {
                singular: "ご回答いただく内容は、今後のサービス改善の参考とさせていただきます"
              },
              "ko-KR": {
                singular: "답변해주시면 회원님의 경험을 개선하는 데 도움이 됩니다."
              },
              "pt-BR": {
                singular: "Suas respostas nos ajudarão a melhorar sua experiência"
              },
              "zh-CN": {
                singular: "您的回答将可帮助我们改善您的体验"
              }
            }
          })
        }), (0, _v1.jsx)(_v40, {
          children: _v12.questions.map((_v0, _v1) => {
            let _v2 = _v6.answersData.some(_v0 => _v0.id === _v0.id),
              _v3 = _v6.answersData.some(_v0 => _v0.id === _v0.id && _v0.answers.some(_v0 => "other" === _v0.id)),
              _v4 = _v6.answersData.find(_v0 => _v0.id === _v0.id),
              _v5 = _v0.answers.find(_v0 => _v0.placeholder)?.placeholder;
            return (0, _v1.jsxs)(_v41, {
              children: [(0, _v1.jsx)(_v29, {
                index: _v1,
                question: _v0,
                formData: _v6,
                answersListOpenId: _v8,
                setFormData: _v7
              }), (0, _v1.jsx)(_v42, {
                size: "2",
                children: _v0.question
              }), (0, _v1.jsx)(_v33, {
                isAnswered: _v2,
                question: _v0,
                answersListOpenId: _v8,
                setAnswersListOpenId: _v9,
                selectedAnswer: _v4 ?? null
              }), _v3 && _v5 && (0, _v1.jsx)(_v43, {
                placeholder: _v5,
                variant: "underline",
                maxLength: 140,
                onChange: _v0 => {
                  _v16(_v0, _v0.id);
                }
              })]
            }, _v0.id);
          })
        }), (0, _v1.jsx)(_v20, {
          onSkipClick: _v17,
          onSubmitClick: _v18,
          isLoading: _v4,
          formData: _v6
        })]
      }) : null;
    };
  var _v45 = _v0.i(0);
  (0, _v4.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  })), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v45.useViewer)(),
      {
        surveyType: _v1,
        userId: _v2
      } = (0, _v2.useRouter)().query;
    return _v2 && _v1 && _v0 && "events_prof" === _v1 ? (0, _v1.jsx)(_v3.ThemeProvider, {
      theme: _v5.themes.light,
      children: (0, _v1.jsx)(_v44, {})
    }) : null;
  }], 0);
}