{
  "use strict";

  let _v1, _v2;
  var _v3,
    _v4 = _v0.i(0);
  _v0.i(0);
  var _v5 = _v0.i(0),
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
    _v23 = _v0.i(0);
  let _v24 = `${(0, _v13.rem)(768)}`,
    _v25 = _v14.default.header.withConfig({
      displayName: "Page__Header",
      componentId: "sc-4d24d7f4-0"
    })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${(0, _v13.rem)(30)};

  @media (min-width: ${_v24}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`,
    _v26 = _v14.default.div.withConfig({
      displayName: "Page__Content",
      componentId: "sc-4d24d7f4-1"
    })`
  margin: 0 auto;
  max-width: ${(0, _v13.rem)(500)};
  width: 100%;
`,
    _v27 = _v14.default.div.withConfig({
      displayName: "Page",
      componentId: "sc-4d24d7f4-2"
    })`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background: ${(0, _v21.blue)(50)};
  padding: ${(0, _v13.rem)(20)} ${(0, _v13.rem)(32)};
`,
    _v28 = _v14.default.footer.withConfig({
      displayName: "styles__StyledFooter",
      componentId: "sc-8415cb88-0"
    })`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  padding-bottom: 20px;

  @media (max-width: ${_v24}) {
    .skip-link {
      order: 1;
    }
    .step-count {
      order: 2;
    }
    .submit-button {
      width: 100%;
      margin-bottom: ${(0, _v13.rem)(16)};
    }
  }
`,
    _v29 = ({
      step: _v0,
      steps: _v1,
      disabled: _v2,
      onSkip: _v3,
      onSubmit: _v4
    }) => {
      let [_v5, _v6] = (0, _v8.useState)(!1);
      return (0, _v4.jsxs)(_v28, {
        children: [(0, _v4.jsx)(_v23.Link, {
          className: "skip-link",
          variant: "minimal",
          style: {
            fontSize: 14,
            color: (0, _v21.grayscale)(200)
          },
          onClick: _v3,
          children: (0, _v17.translate)({
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
        }), _v1 > 1 && (0, _v4.jsx)(_v19.Paragraph, {
          className: "step-count",
          size: "2",
          style: {
            marginBottom: 0,
            color: (0, _v21.blue)(400)
          },
          children: (0, _v17.translate)({
            singular: "Step {STEP} of {STEPS}",
            replacements: {
              STEP: _v0,
              STEPS: _v1
            },
            dictionary: {
              es: {
                singular: "Paso {STEP} de {STEPS}"
              },
              "de-DE": {
                singular: "Schritt {STEP} von {STEPS}"
              },
              "fr-FR": {
                singular: "Étape {STEP} de {STEPS}"
              },
              "ja-JP": {
                singular: "ステップ {STEP} / {STEPS}"
              },
              "ko-KR": {
                singular: "{STEP} / {STEPS} 페이지"
              },
              "pt-BR": {
                singular: "Passo {STEP} de {STEPS}"
              },
              "zh-CN": {
                singular: "步骤 {STEP} / {STEPS}"
              }
            }
          })
        }), (0, _v4.jsx)(_v22.Button, {
          className: "submit-button",
          loading: _v5,
          disabled: _v2,
          onClick: _v0 => {
            _v0 === _v1 && _v6(!0), _v4(_v0);
          },
          children: _v0 === _v1 ? (0, _v17.translate)({
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
          }) : (0, _v17.translate)({
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
        })]
      });
    };
  var _v30 = _v0.i(0),
    _v31 = ((_v3 = {}).livestream = "livestream", _v3.watch = "watch", _v3.upload = "upload", _v3.record = "record", _v3.create = "create", _v3.other = "other", _v3);
  let _v32 = {
      [_v31.livestream]: (0, _v17.translate)({
        singular: "Let’s get you started creating live events",
        dictionary: {
          es: {
            singular: "Te mostraremos cómo crear eventos en vivo"
          },
          "de-DE": {
            singular: "Die ersten Schritte zum Erstellen von Live-Events"
          },
          "fr-FR": {
            singular: "Commençons à créer des événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベントの作成を始めましょう"
          },
          "ko-KR": {
            singular: "라이브 이벤트를 만들어볼까요?"
          },
          "pt-BR": {
            singular: "Vamos começar criando eventos ao vivo"
          },
          "zh-CN": {
            singular: "开始创建直播活动"
          }
        }
      }),
      [_v31.create]: (0, _v17.translate)({
        singular: "Let’s get you started making your first video",
        dictionary: {
          es: {
            singular: "Te mostraremos cómo crear tu primer video"
          },
          "de-DE": {
            singular: "Die ersten Schritte zum Erstellen deines ersten Videos"
          },
          "fr-FR": {
            singular: "Commençons à créer votre première vidéo"
          },
          "ja-JP": {
            singular: "最初の動画を作成しましょう"
          },
          "ko-KR": {
            singular: "첫 동영상을 만들어볼까요?"
          },
          "pt-BR": {
            singular: "Vamos começar fazendo seu primeiro vídeo"
          },
          "zh-CN": {
            singular: "开始制作您的第一个视频"
          }
        }
      }),
      [_v31.record]: (0, _v17.translate)({
        singular: "Let’s get you started with recording tools",
        dictionary: {
          es: {
            singular: "Te mostraremos cómo empezar a usar las herramientas de grabación"
          },
          "de-DE": {
            singular: "Die ersten Schritte mit Aufnahmetools"
          },
          "fr-FR": {
            singular: "Commençons à utiliser les outils d'enregistrement"
          },
          "ja-JP": {
            singular: "録画ツールを使い始めましょう"
          },
          "ko-KR": {
            singular: "녹화 도구를 사용해볼까요?"
          },
          "pt-BR": {
            singular: "Vamos começar usando ferramentas de gravação"
          },
          "zh-CN": {
            singular: "开始使用录制工具"
          }
        }
      }),
      [_v31.upload]: (0, _v17.translate)({
        singular: "Let’s get you started with uploading videos",
        dictionary: {
          es: {
            singular: "Te mostraremos cómo subir videos"
          },
          "de-DE": {
            singular: "Die ersten Schritte zum Hochladen von Videos"
          },
          "fr-FR": {
            singular: "Commençons à mettre en ligne des vidéos"
          },
          "ja-JP": {
            singular: "動画のアップロードを始めましょう"
          },
          "ko-KR": {
            singular: "동영상 업로드를 시작해볼까요?"
          },
          "pt-BR": {
            singular: "Vamos começar carregando vídeos"
          },
          "zh-CN": {
            singular: "开始上传视频"
          }
        }
      }),
      [_v31.watch]: (0, _v17.translate)({
        singular: "Let’s get you started with watching videos",
        dictionary: {
          es: {
            singular: "Te mostraremos cómo empezar a ver videos"
          },
          "de-DE": {
            singular: "Die ersten Schritte zum Ansehen von Videos"
          },
          "fr-FR": {
            singular: "Commençons à regarder des vidéos"
          },
          "ja-JP": {
            singular: "動画の視聴を始めましょう"
          },
          "ko-KR": {
            singular: "동영상 시청을 시작해볼까요?"
          },
          "pt-BR": {
            singular: "Vamos começar assistindo vídeos"
          },
          "zh-CN": {
            singular: "我们从观看视频开始吧"
          }
        }
      })
    },
    _v33 = ({
      usageAnswer: _v0
    }) => void 0 === _v0 ? (0, _v4.jsx)(_v4.Fragment, {}) : (0, _v4.jsx)(_v4.Fragment, {
      children: (0, _v4.jsx)(_v35, {
        children: (0, _v4.jsxs)(_v34, {
          children: [(0, _v4.jsx)(_v18.Header, {
            format: "soft",
            size: "2",
            style: {
              marginBottom: `${(0, _v13.rem)(30)}`
            },
            children: _v32[_v0]
          }), (0, _v4.jsx)(_v30.Progress, {
            value: 75,
            size: "sm",
            width: (0, _v13.rem)(250),
            colorScheme: "green",
            hasStripe: !0,
            isAnimated: !0
          })]
        })
      })
    }),
    _v34 = _v14.default.div.withConfig({
      displayName: "RedirectIntersitial__TransitionWrapper",
      componentId: "sc-4bf2e2d5-0"
    })`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: ${(0, _v13.rem)(301)};
  margin-bottom: ${(0, _v13.rem)(30)};
`,
    _v35 = _v14.default.div.withConfig({
      displayName: "RedirectIntersitial__Wrapper",
      componentId: "sc-4bf2e2d5-1"
    })`
  align-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50%;
`;
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = (0, _v14.default)(_v39.TextArea).withConfig({
      displayName: "TextInput",
      componentId: "sc-20c1bbe3-0"
    })`
  display: ${({
      hidden: _v0
    }) => _v0 ? "none" : "block"} !important;
  margin-top: 0.75rem !important;
  resize: none;

  &:focus {
    box-shadow: none !important;
    border-color: initial !important;
  }
`,
    _v41 = ({
      label: _v0,
      tip: _v1
    }) => (0, _v4.jsxs)("div", {
      children: [(0, _v4.jsx)(_v38.Text, {
        children: _v0
      }), _v1 && (0, _v4.jsxs)(_v4.Fragment, {
        children: [(0, _v4.jsx)("br", {}), (0, _v4.jsx)(_v38.Text, {
          style: {
            color: (0, _v21.grayscale)(200)
          },
          children: _v1
        })]
      })]
    }),
    _v42 = _v14.default.div.withConfig({
      displayName: "RadioCard__Content",
      componentId: "sc-f82c31ba-0"
    })`
  padding: 0.75rem 1.5rem;
  width: 100%;
`,
    _v43 = ({
      id: _v0,
      label: _v1,
      tip: _v2,
      checked: _v3,
      value: _v4
    }) => (0, _v4.jsx)(_v4.Fragment, {
      children: (0, _v4.jsx)(_v36.Card, {
        style: {
          display: "flex"
        },
        children: (0, _v4.jsxs)(_v42, {
          children: [(0, _v4.jsx)(_v37.Radio, {
            id: _v0,
            name: "answer",
            value: _v4,
            checked: _v3,
            label: (0, _v4.jsx)(_v41, {
              label: _v1,
              tip: _v2
            })
          }, _v0), "other" === _v0 && (0, _v4.jsx)(_v40, {
            id: "other",
            hidden: !_v3,
            onClick: _v0 => {
              _v0.preventDefault();
            }
          })]
        })
      })
    }),
    _v44 = () => {
      let _v0 = RegExp("[?&]type=([^&]*)").exec(window.location.search);
      return _v0 ? decodeURIComponent(_v0[1].replace("‎", "")) : "welcome";
    },
    _v45 = async _v0 => {
      let _v1 = _v0 ?? _v44(),
        _v2 = `/survey/registration?type=${_v1}`,
        _v3 = await fetch(_v2, {
          credentials: "include",
          method: "GET",
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        });
      if (_v3.ok) return _v3.json();
      throw Error(_v3.statusText);
    },
    _v46 = async _v0 => {
      let _v1 = new FormData();
      _v1.append("answers", JSON.stringify(_v0.answers)), _v1.append("token", window?.bootstrap_data?.viewer?.xsrft || ""), _v9.GoogleTagManager.trackEvent("survey_response_submitted", {
        survey_type: _v44(),
        survey_question: _v0.answers[0].question_key,
        survey_response: _v0.answers.map(({
          answer_key: _v0
        }) => _v0).join(",")
      });
      let _v2 = await fetch("/survey/registration", {
        credentials: "include",
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        },
        body: _v1
      });
      if (_v2.ok) return _v2.json();
      throw Error(_v2.statusText);
    };
  var _v47 = _v0.i(0);
  let _v48 = {
      segment: {
        container: "reg_survey",
        component: "segment"
      },
      usage: {
        container: "reg_survey",
        component: "usage"
      }
    },
    _v49 = {};
  function _v50(_v0, _v1) {
    let _v2 = _v48[_v0] || {};
    _v9.FatalAttraction.trackClick({
      ref_path: window.location.pathname,
      ..._v2,
      ...(_v1 || {})
    }), _v9.GoogleTagManager.trackEvent((0, _v47.default)(_v49, `[${_v0}].event`, ""), _v2);
  }
  let _v51 = {
    answers: []
  };
  function _v52(_v0 = _v51, _v1) {
    let {
      type: _v2,
      payload: _v3
    } = _v1;
    if (_v3 instanceof Array) if ("reset" === _v2) return {
      answers: [..._v3]
    };else return _v0;
    switch (_v2) {
      case "checkbox":
        return {
          ..._v0,
          answers: _v0.answers.map(_v0 => ({
            ..._v0,
            checked: _v0.id === _v3.id ? _v3.checked : _v0.checked
          }))
        };
      case "radio":
        return {
          ..._v0,
          answers: _v0.answers.map(_v0 => ({
            ..._v0,
            checked: _v0.id === _v3.id && _v3.checked
          }))
        };
      case "textarea":
        return {
          ..._v0,
          answers: _v0.answers.map(_v0 => ({
            ..._v0,
            note: _v0.id === _v3.id ? _v3.value : void 0
          }))
        };
      default:
        return _v0;
    }
  }
  let _v53 = _v14.default.div.withConfig({
      displayName: "_components__LoaderContainer",
      componentId: "sc-21b6239e-0"
    })`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(0, _v13.rem)(200)};
`,
    _v54 = {
      segment: ({
        answers: _v0
      }) => (0, _v4.jsx)(_v4.Fragment, {
        children: _v0.map(({
          id: _v0,
          checked: _v1,
          label: _v2,
          tip: _v3
        }) => (0, _v4.jsx)(_v43, {
          id: _v0,
          checked: _v1,
          label: _v2,
          tip: _v3,
          value: _v0
        }, `radio-card-${_v0}`))
      }),
      usage: ({
        answers: _v0
      }) => (0, _v4.jsx)(_v4.Fragment, {
        children: _v0.map(({
          id: _v0,
          label: _v1,
          tip: _v2,
          checked: _v3
        }) => (0, _v4.jsx)(_v43, {
          id: _v0,
          value: _v0,
          label: _v1,
          tip: _v2,
          checked: _v3
        }, _v0))
      })
    },
    _v55 = ({
      answers: _v0,
      question: _v1
    }) => {
      let _v2 = _v54[_v1.id];
      return (0, _v4.jsx)(_v2, {
        answers: _v0
      });
    },
    _v56 = (_v0 = "/", _v1 = !1, _v2) => {
      let _v3 = "getstarted",
        _v4 = {
          [_v31.livestream]: `/manage/webinars/create?${_v3}=1`,
          [_v31.create]: `/create/templates?${_v3}=1`,
          [_v31.record]: `/features/screen-recorder?${_v3}=1`,
          [_v31.watch]: `/watch?${_v3}=1`,
          [_v31.upload]: `/upload/videos?${_v3}=1`
        };
      _v1 && _v2 && (_v0 = _v4[_v2]);
      let _v5 = (0, _v20.isVimeoRedirectableUrl)(_v0) ? _v0 : "/";
      _v2 || 0 !== _v5.indexOf("/sign_up") ? window.location.href = _v5 : _v1.push(_v5, void 0, {
        shallow: !0
      });
    },
    _v57 = () => {
      let _v0 = (0, _v8.useContext)(_v11.ViewerContext);
      _v1 = (0, _v12.useRouter)(), _v2 = _v0?.isMobile;
      let [_v1, _v2] = (0, _v8.useState)(0),
        [_v3, _v4] = (0, _v8.useState)([]),
        [_v5, _v6] = (0, _v8.useState)("/"),
        [_v7, _v8] = (0, _v8.useReducer)(_v52, _v51),
        [_v9, _v10] = (0, _v8.useState)(!1),
        [_v11, _v12] = (0, _v8.useState)(void 0),
        [_v13, _v14] = (0, _v8.useState)(!1),
        _v15 = _v3[_v1],
        _v16 = _v1 + 1,
        _v17 = {
          dispatch: _v8,
          hasProgressiveProfileVariant: _v13,
          question: _v15,
          questionIndex: _v1,
          questions: _v3,
          redirectUrl: _v5,
          setQuestionIndex: _v2,
          setQuestions: _v4,
          setRedirectUrl: _v6,
          setShowRedirectLoading: _v10,
          setUsageAnswer: _v12,
          showRedirectLoading: _v9,
          state: _v7,
          step: _v16,
          userId: _v0?.user?.id,
          vuid: _v0?.vuid,
          viewer: _v0
        };
      (0, _v8.useEffect)((({
        dispatch: _v0,
        questionIndex: _v1,
        setQuestions: _v2,
        setRedirectUrl: _v3
      }) => () => {
        _v45().then(_v0 => {
          _v0({
            type: "reset",
            payload: _v0.questions[_v1].answers.map(({
              id: _v0,
              label: _v1,
              tip: _v2,
              checked: _v3 = !1,
              value: _v4 = _v0
            }) => ({
              id: _v0,
              label: _v1,
              tip: _v2,
              checked: _v3,
              value: _v4
            }))
          }), _v2(_v0.questions);
          let _v1 = _v1.query.vimeoHref || _v0.redirectUrl;
          _v3((0, _v20.isVimeoRedirectableUrl)(_v1) ? _v1 : "/");
        }).catch(() => {
          let _v0 = _v1.query.vimeoHref || "/";
          _v56((0, _v20.isVimeoRedirectableUrl)(_v0) ? _v0 : "/");
        });
      })(_v17), []), (0, _v8.useEffect)(() => {
        _v14("1" === new URLSearchParams(window.location.search).get("abpp"));
      }, [_v17.hasProgressiveProfileVariant]), (0, _v8.useEffect)(() => {
        _v9 && setTimeout(() => {
          _v56(_v5, _v17.hasProgressiveProfileVariant, _v11);
        }, 0);
      }, [_v17.hasProgressiveProfileVariant, _v9, _v5, _v11]), (0, _v8.useEffect)(() => {
        _v0 && _v3.length && (({
          xsrft: _v0,
          placement: _v1,
          questionKeys: _v2 = []
        }) => {
          let _v3 = new FormData();
          _v3.append("token", _v0), _v3.append("placement", _v1), _v3.append("question_keys", _v2.join(",")), fetch("/survey/log_impression", {
            credentials: "include",
            method: "POST",
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            },
            body: _v3
          });
        })({
          xsrft: _v0.xsrft,
          placement: "welcome_survey",
          questionKeys: _v3.map(_v0 => _v0.id)
        });
      }, [_v0, _v3]), (0, _v8.useEffect)(() => {
        if (!_v17.question || !_v17.vuid) return;
        let {
          id: _v0
        } = _v17.question;
        _v15.BigPictureClient.sendEvent(new _v15.Event("vimeo.view_intent_question_modal", 1, {
          product: "Vimeo",
          path: window.location.pathname,
          location: "intent_question_modal",
          device_id: _v17.vuid,
          question_num: _v17.step,
          question_id: _v0
        }));
      }, [_v17.vuid, _v17.question, _v17.step]);
      let _v18 = (0, _v8.useCallback)((({
          redirectUrl: _v0,
          question: _v1,
          questionIndex: _v2,
          vuid: _v3
        }) => () => {
          _v50(_v1.id, {
            keyword: "skip",
            target: _v0
          }), _v15.BigPictureClient.sendEvent(new _v15.Event("vimeo.click_to_skip_intent_question_modal", 1, {
            product: "Vimeo",
            path: window.location.pathname,
            location: "intent_question_modal",
            device_id: _v3 ?? null,
            question_id: _v1.id,
            question_num: _v2 + 1
          })), _v56(_v0);
        })({
          redirectUrl: _v5,
          question: _v15,
          questionIndex: _v1,
          vuid: _v17.vuid
        }), [_v5, _v15, _v1, _v17.vuid]),
        _v19 = (0, _v8.useCallback)((({
          dispatch: _v0
        }) => _v0 => {
          let _v1 = _v0.target,
            {
              id: _v2,
              type: _v3,
              value: _v4
            } = _v1;
          _v0({
            type: _v3,
            payload: {
              id: _v2,
              checked: _v1 instanceof HTMLInputElement && _v1.checked,
              value: _v4,
              label: ""
            }
          });
        })(_v17), [_v8]),
        _v20 = (0, _v8.useCallback)((({
          dispatch: _v0,
          hasProgressiveProfileVariant: _v1,
          question: _v2,
          questionIndex: _v3,
          questions: _v4,
          redirectUrl: _v5,
          setQuestionIndex: _v6,
          setShowRedirectLoading: _v7,
          setUsageAnswer: _v8,
          state: _v9,
          step: _v10,
          userId: _v11,
          vuid: _v12
        }) => () => {
          let {
              answers: _v0
            } = _v9,
            _v1 = _v4[_v10],
            _v2 = _v0.map((_v0, _v1) => ({
              ..._v0,
              index: _v1
            })).filter(_v0 => _v0.checked);
          _v50(_v2.id, {
            keyword: JSON.stringify(_v2.map(({
              id: _v0,
              index: _v1
            }) => ({
              option: _v0,
              index: _v1
            }))),
            redirectUrl: _v5
          });
          let _v3 = {
            answers: _v2.map(_v0 => ({
              note: _v0.note,
              question_key: _v2.id,
              answer_key: _v0.id
            }))
          };
          _v46(_v3).then(() => {
            _v4.length <= _v10 && (_v1 && "usage" === _v3.answers[0].question_key && _v3.answers[0].answer_key !== _v31.other ? (_v8(_v3.answers[0].answer_key), _v7(!0)) : _v56(_v5));
          }), _v15.BigPictureClient.sendEvent(new _v15.Event("vimeo.click_on_intent_answer_in_intent_question_modal", 1, {
            product: "Vimeo",
            path: window.location.pathname,
            location: "intent_question_modal",
            device_id: _v12 ?? null,
            question_id: _v2.id,
            answer_id: _v2[0].id,
            answer_num: _v2[0].index + 1,
            question_num: _v3 + 1
          })), _v15.BigPictureClient.sendEvent(new _v15.Event("vimeo.prediction_results", 2, {
            user_id: _v11 ?? null,
            vuid: _v12 ?? null,
            clip_id: null,
            model_name: `post_reg_${_v2.id}`,
            model_version: "001",
            meta: null,
            top_prediction: _v2[0].id,
            top_prediction_score: 1,
            predictions: [{
              meta: null,
              score: 1,
              target_id: _v2[0].id,
              target_type: _v2.id
            }]
          })), _v1 && (_v0({
            type: "reset",
            payload: _v1.answers.map(({
              id: _v0,
              label: _v1,
              tip: _v2
            }) => ({
              id: _v0,
              label: _v1,
              tip: _v2,
              checked: !1,
              value: _v0
            }))
          }), _v6(_v3 + 1), window.scrollTo(0, 0));
        })(_v17), [_v8, _v15, _v1, _v3, _v5, _v2, _v6, _v10, _v12, _v7, _v16, _v17.hasProgressiveProfileVariant, _v17.userId, _v17.vuid]);
      return _v9 ? (0, _v4.jsx)(_v33, {
        usageAnswer: _v11
      }) : (0, _v4.jsx)(_v4.Fragment, {
        children: _v15 ? (0, _v4.jsxs)(_v4.Fragment, {
          children: [(0, _v4.jsxs)("div", {
            style: {
              textAlign: "center"
            },
            children: [(0, _v4.jsx)(_v18.Header, {
              size: "2",
              children: _v15.question
            }), (0, _v4.jsx)(_v19.Paragraph, {
              style: {
                lineHeight: "1"
              },
              size: "1",
              children: (0, _v17.translate)({
                singular: "Your answers help us build more tools and features. You'll still have the full Vimeo experience.",
                dictionary: {
                  es: {
                    singular: "Tus respuestas nos ayudan a desarrollar más herramientas y funciones. Seguirás disfrutando de la experiencia completa de Vimeo."
                  },
                  "de-DE": {
                    singular: "Deine Antworten helfen uns bei der Entwicklung weiterer Tools und Funktionen. Du profitierst weiterhin vom vollen Vimeo-Erlebnis."
                  },
                  "fr-FR": {
                    singular: "Vos réponses nous aident à développer d'autres outils et fonctionnalités. Vous profiterez toujours de l'expérience Vimeo complète."
                  },
                  "ja-JP": {
                    singular: "より多くのツールや機能を構築するため、アンケートにご協力ください。Vimeoの機能は引き続きすべてご利用いただけます。"
                  },
                  "ko-KR": {
                    singular: "답변해주시면 Vimeo가 더 많은 도구와 기능을 구축하는 데 도움이 됩니다. 답변과 관계없이 계속해서 Vimeo의 모든 기능을 사용할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Suas respostas nos ajudam a desenvolver mais ferramentas e recursos. Você ainda terá a experiência completa do Vimeo."
                  },
                  "zh-CN": {
                    singular: "您的回答有助于我们构建更多工具和功能。您仍然可以获得完整的 Vimeo 体验。"
                  }
                }
              })
            })]
          }), (0, _v4.jsx)(_v58, {
            onChange: _v19,
            children: (0, _v4.jsx)(_v55, {
              answers: _v7.answers,
              question: _v15
            })
          }), (0, _v4.jsx)(_v29, {
            step: _v16,
            steps: _v3.length,
            disabled: !_v7.answers.some(({
              checked: _v0
            }) => !!_v0),
            onSkip: _v18,
            onSubmit: _v20
          })]
        }) : (0, _v4.jsx)(_v53, {
          children: (0, _v4.jsx)(_v16.Spinner, {
            size: "xl"
          })
        })
      });
    };
  var _v58 = (0, _v14.default)("section").withConfig({
    displayName: "_components___StyledSection",
    componentId: "sc-21b6239e-1"
  })`display: grid; grid-row-gap: 1rem; margin: 1.5rem 0;`;
  let _v59 = _v0 => {
    let _v1 = !!(0, _v8.useContext)(_v11.ViewerContext),
      {
        gtm: _v2
      } = _v0;
    return (0, _v8.useEffect)(() => {
      _v1 && _v2 && _v9.GoogleTagManager.addData(_v2);
    }, [_v1, _v2]), (0, _v4.jsxs)(_v27, {
      children: [(0, _v4.jsx)(_v25, {
        children: (0, _v4.jsx)(_v10.Logo, {
          width: "109",
          height: "31"
        })
      }), (0, _v4.jsx)(_v26, {
        children: (0, _v4.jsx)(_v57, {})
      })]
    });
  };
  var _v60 = _v0.i(0);
  let _v61 = {
    gtm: _v5.JsonParam
  };
  function _v62() {
    let [_v0] = (0, _v6.useQueryParams)(_v61);
    return (0, _v4.jsx)(_v59, {
      ..._v0
    });
  }
  (0, _v7.withPageSetup)(() => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v62.getLayout = _v0 => (0, _v4.jsx)(_v60.QueryParamProvider, {
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v62], 0);
}