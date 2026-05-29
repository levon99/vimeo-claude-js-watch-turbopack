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
    _v36 = _v0.i(0);
  let _v37 = ({
    onSelectLanguage: _v0,
    selectedLanguage: _v1,
    uniqueLanguages: _v2,
    questions: _v3,
    onAskPredefinedQuestion: _v4,
    isEmbeded: _v5
  }) => {
    let _v6 = (0, _v2.useRef)(null),
      _v7 = (0, _v2.useRef)(null),
      {
        sendViewSuggestedAskAIEvent: _v8
      } = (0, _v20.useGetSvvManageBpEvents)(),
      _v9 = _v6.current?.getBoundingClientRect()?.height,
      _v10 = _v7.current?.getBoundingClientRect()?.height;
    (0, _v2.useEffect)(function () {
      _v8();
    }, []);
    let _v11 = (0, _v32.useBreakpointValue)({
      base: !!(_v9 && _v10 && _v9 - _v10 > 100)
    });
    return (0, _v1.jsxs)(_v16.Flex, {
      h: "100%",
      flexDirection: "column",
      flex: "1 1 auto",
      gap: "8px",
      ref: _v6,
      p: "16px",
      me: "auto",
      "data-testid": "viewer-qna-questions",
      children: [(0, _v1.jsx)(_v16.Flex, {
        ref: _v7,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        children: _v11 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v34.AiSparkles, {
            h: "36px",
            w: "36px",
            color: "text-secondary"
          }), (0, _v1.jsx)(_v12.Box, {
            mt: (0, _v33.rem)(10),
            textAlign: "center",
            color: "text-secondary",
            fontSize: "text-sm",
            children: _v21.chooseAQuestion
          })]
        })
      }), (0, _v1.jsx)(_v36.MultilingualSelector, {
        languages: _v2,
        selectedLanguage: _v1,
        onSelectLanguage: _v0,
        isEmbeded: _v5
      }), _v3?.map(_v0 => (0, _v1.jsx)(_v35.Choice, {
        icon: "empty",
        shouldWrap: !0,
        onClick: () => _v4(_v0),
        children: _v0.question
      }, _v0.question))]
    });
  };
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = ({
      onClose: _v0,
      activePanel: _v1,
      onBack: _v2,
      overrideBreakpoint: _v3
    }) => {
      let _v4 = (0, _v2.useMemo)(() => {
          switch (_v1) {
            case _v27.ViewerQnAPanels.ASK_QUESTION:
              return _v21.generatingAnswer;
            case _v27.ViewerQnAPanels.ANSWER:
              return _v21.answer;
            case _v27.ViewerQnAPanels.AI_ACTIVATION:
              return _v21.activatingAiShort;
            default:
              return _v21.vimeoAi;
          }
        }, [_v1]),
        _v5 = (0, _v2.useCallback)(() => {
          _v2(_v27.ViewerQnAPanels.QUESTIONS);
        }, []),
        _v6 = (0, _v2.useMemo)(() => {
          switch (_v3) {
            case "xxs":
            case "xs":
              return {
                padding: "8px 8px 8px 12px",
                fontSize: "14px",
                iconSize: "sm"
              };
            case "sm":
              return {
                padding: "8px 16px 8px 16px",
                fontSize: "16px",
                iconSize: "sm"
              };
            case "md":
              return {
                padding: "12px 16px 12px 16px",
                fontSize: "18px",
                iconSize: "sm"
              };
            case "lg":
            case "xl":
              return {
                padding: "16px 24px 16px 24px",
                fontSize: "18px",
                iconSize: "sm"
              };
            case "xxl":
              return {
                padding: "16px 24px 16px 24px",
                fontSize: "24px",
                iconSize: "md"
              };
            default:
              return {
                padding: {
                  base: 200,
                  md: 300
                },
                fontSize: "inherit",
                iconSize: "md"
              };
          }
        }, [_v3]);
      return (0, _v1.jsxs)(_v38.ViewerQnAHeaderWrapper, {
        align: "center",
        justify: "space-between",
        pb: _v3 ? "inherit" : 100,
        p: _v6.padding,
        width: "100%",
        position: "relative",
        children: [(_v1 === _v27.ViewerQnAPanels.ASK_QUESTION || _v1 === _v27.ViewerQnAPanels.ANSWER) && (0, _v1.jsx)(_v15.IconButton, {
          "aria-label": "Back",
          icon: (0, _v1.jsx)(_v41.ChevronLeftSmall, {}),
          variant: "tertiary",
          size: _v6.iconSize,
          onClick: _v5,
          isDisabled: _v1 === _v27.ViewerQnAPanels.ASK_QUESTION,
          position: "absolute"
        }), (0, _v1.jsxs)(_v39.HStack, {
          flexWrap: "nowrap",
          m: _v1 === _v27.ViewerQnAPanels.QUESTIONS || _v1 === _v27.ViewerQnAPanels.LOADER ? "unset" : "0 auto",
          children: [_v1 !== _v27.ViewerQnAPanels.ASK_QUESTION ? (0, _v1.jsx)(_v34.AiSparkles, {
            color: "text-primary"
          }) : null, (0, _v1.jsx)(_v40.Text, {
            variant: _v3 ? void 0 : "heading-md",
            as: "h4",
            fontSize: _v6.fontSize,
            color: "text-primary",
            children: _v4
          })]
        }), _v0 && (0, _v1.jsx)(_v15.IconButton, {
          "aria-label": "Close",
          variant: "tertiary",
          size: _v6.iconSize,
          icon: (0, _v1.jsx)(_v42.CloseX, {}),
          onClick: _v0
        })]
      });
    },
    _v44 = ["xs", "xxs", "tiny", "mini"],
    _v45 = ({
      onMomentPlay: _v0,
      onClose: _v1,
      videoId: _v2,
      onLoginRequired: _v3,
      isPlayer: _v4 = !1
    }) => {
      let _v5,
        _v6 = (0, _v9.useUIStore)(_v0 => _v0.overrideBreakpoint),
        _v7 = (0, _v19.useViewer)(),
        [_v8, _v9] = (0, _v2.useState)(_v27.ViewerQnAPanels.LOADER),
        [_v10, _v11] = (0, _v2.useState)(""),
        [_v12, _v13] = (0, _v2.useState)(!1),
        [_v14, _v15] = (0, _v2.useState)(!1),
        [_v16, _v17] = (0, _v2.useState)(!1),
        _v18 = (0, _v22.useBokehToast)(),
        {
          questions: _v19,
          error: _v20,
          isQuestionsLoading: _v21,
          isActivatingAi: _v22,
          forceRefresh: _v23,
          hasValidStatus: _v24
        } = (0, _v6.useQuestionsDataContext)(),
        _v25 = (_v5 = new Map(), _v19 && _v19.forEach(_v0 => {
          _v0.languageLabel && _v0.languageCode && _v5.set(_v0.languageCode, _v0.languageLabel);
        }), Array.from(_v5.entries()).map(([_v0, _v1]) => ({
          value: _v0,
          label: _v1
        }))),
        [_v26, _v27] = (0, _v18.default)("ai-qna-lang", _v7?.locale ?? "en");
      function _v28(_v0, _v1) {
        let _v2 = _v0 && _v0.filter(_v0 => _v0.languageCode && _v0.languageCode.toLocaleLowerCase() === _v1.toLocaleLowerCase());
        return _v2?.length ? _v2 : _v0;
      }
      let [_v29, _v30] = (0, _v2.useState)([]);
      (0, _v2.useEffect)(function () {
        _v30(_v28(_v19, _v26));
      }, [_v19, _v26]);
      let _v31 = _v25.length > 1,
        {
          askPredefinedQuestion: _v32,
          askNewQuestion: _v33,
          questionResponseLoading: _v34,
          question: _v35,
          answer: _v36,
          questionResponseError: _v37
        } = (0, _v5.useQuestionContext)(),
        {
          sendAskAQuestionEvent: _v38,
          sendSelectSuggestedAIQuestionEvent: _v39,
          sendViewGenerateAIAnswerEvent: _v40
        } = (0, _v20.useGetSvvManageBpEvents)(),
        _v41 = (0, _v2.useRef)(null),
        _v42 = _v8 === _v27.ViewerQnAPanels.ASK_QUESTION,
        _v43 = _v8 === _v27.ViewerQnAPanels.QUESTIONS || _v42 || _v8 === _v27.ViewerQnAPanels.ANSWER,
        _v44 = _v42 || _v8 === _v27.ViewerQnAPanels.AI_ACTIVATION || _v8 === _v27.ViewerQnAPanels.LOADER || _v8 === _v27.ViewerQnAPanels.LOGIN_REQUIRED,
        _v45 = window?.self !== window?.top,
        _v46 = (0, _v2.useCallback)(_v0 => {
          _v0.question && _v0.answer && (_v39({
            copy: _v0.question,
            isRelated: !1
          }), _v32(_v0.question, _v0.answer, _v0.relevantQuotes, _v0.relatedQuestions), _v9(_v27.ViewerQnAPanels.ANSWER));
        }, [_v32, _v39]),
        _v47 = (0, _v2.useCallback)(_v0 => {
          _v11(""), _v33(_v0), _v9(_v27.ViewerQnAPanels.ASK_QUESTION);
        }, [_v33]),
        _v48 = (0, _v2.useCallback)(_v0 => {
          _v0(_v0), _v45 && _v1 && _v6 && _v44.includes(_v6) && _v1();
        }, [_v45, _v1, _v0, _v6]),
        _v49 = (0, _v2.useCallback)(_v0 => {
          "Enter" === _v0.key && _v10.trim().length && !_v16 && (_v47(_v10), _v38(_v10));
        }, [_v47, _v38, _v10, _v16]);
      return ((0, _v2.useEffect)(function () {
        _v8 === _v27.ViewerQnAPanels.LOADER && !_v22 && !_v21 && !_v20 && _v19?.length && setTimeout(() => {
          _v9(_v27.ViewerQnAPanels.QUESTIONS);
        }, 300);
      }, [_v8, _v22, _v21, _v20, _v2, _v19?.length]), (0, _v2.useEffect)(function () {
        _v34 ? (_v9(_v27.ViewerQnAPanels.ASK_QUESTION), _v40()) : _v42 && !_v34 && _v9(_v27.ViewerQnAPanels.ANSWER);
      }, [_v8, _v34, _v40]), (0, _v2.useEffect)(() => {
        _v41?.current && _v8 === _v27.ViewerQnAPanels.ANSWER && _v41.current.scrollTo(0, 0);
      }, [_v8]), (0, _v2.useEffect)(function () {
        if (_v8 === _v27.ViewerQnAPanels.ANSWER && !_v36) {
          let _v0 = `${_v21.failedToAskTheVimeoAi}. ${_v37?.message}`;
          _v9(_v27.ViewerQnAPanels.QUESTIONS), _v18(_v0, "warning", 0);
        }
      }, [_v8, _v36, _v37, _v18]), (0, _v2.useEffect)(function () {
        _v22 ? _v9(_v27.ViewerQnAPanels.AI_ACTIVATION) : _v9(_v27.ViewerQnAPanels.LOADER);
      }, [_v22]), (0, _v2.useEffect)(() => {
        !async function () {
          if (_v20 && !_v12) try {
            let _v0 = await (0, _v23.isClipInterractionsLimitError)(_v20);
            _v13(_v0);
          } catch {
            _v13(!1);
          }
        }();
      }, [_v20, _v12]), (0, _v2.useEffect)(() => {
        !async function () {
          if (_v37 && !_v14) try {
            let _v0 = await (0, _v23.isClipInterractionsLimitError)(_v37);
            _v15(_v0);
          } catch {
            _v15(!1);
          }
        }();
      }, [_v14, _v37]), (0, _v2.useEffect)(function () {
        _v4 && _v24 && (0, _v24.sendAppReady)();
      }, [_v4, _v24]), !_v22 && _v20) ? _v12 ? (0, _v1.jsxs)(_v38.ResponsiveWrapper, {
        "data-testid": "viewer-qna",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        aiThinking: _v42 && !_v45,
        id: "viewerqna",
        isPlayer: _v4,
        children: [(0, _v1.jsx)(_v43, {
          overrideBreakpoint: _v6,
          onClose: _v1,
          activePanel: _v8,
          onBack: _v9
        }), (0, _v1.jsx)(_v26.ClipInterractionsLimitError, {
          iconSize: "sm"
        })]
      }) : (0, _v1.jsx)(_v28.ErrorState, {
        error: _v20,
        onRetry: _v23
      }) : (0, _v1.jsxs)(_v38.ResponsiveWrapper, {
        "data-testid": "viewer-qna",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        aiThinking: _v42 && !_v45,
        id: "viewerqna",
        isPlayer: _v4,
        children: [(0, _v1.jsx)(_v43, {
          overrideBreakpoint: _v6,
          onClose: _v1,
          activePanel: _v8,
          onBack: _v9
        }), (0, _v1.jsxs)(_v12.Box, {
          h: "100%",
          overflowY: "auto",
          ref: _v41,
          children: [_v8 === _v27.ViewerQnAPanels.LOADER && (0, _v1.jsx)(_v38.LoaderWrapper, {
            "data-testid": "viewer-qna-loader",
            children: (0, _v1.jsx)(_v11.Spinner, {
              size: "xl"
            })
          }), _v8 === _v27.ViewerQnAPanels.QUESTIONS && (0, _v1.jsx)(_v37, {
            onSelectLanguage: _v0 => {
              _v31 ? (_v27(_v0), _v30(_v28(_v19, _v0))) : _v30(_v19);
            },
            selectedLanguage: _v26,
            uniqueLanguages: _v25,
            questions: _v29,
            onAskPredefinedQuestion: _v46,
            isEmbeded: _v4
          }), _v42 && (0, _v1.jsx)(_v30.AskQuestionPanel, {}), _v8 === _v27.ViewerQnAPanels.AI_ACTIVATION && (0, _v1.jsx)(_v29.AiActivationPanel, {}), _v8 === _v27.ViewerQnAPanels.LOGIN_REQUIRED && (0, _v1.jsx)(_v31.LoginRequiredPanel, {
            onLoginRequired: _v3
          }), _v8 === _v27.ViewerQnAPanels.ANSWER && (0, _v1.jsx)(_v12.Box, {
            height: "100%",
            w: "100%",
            sx: {
              "> :first-child": {
                width: "100%"
              }
            },
            children: (0, _v1.jsx)(_v25.QuestionDisplay, {
              showPrompt: !1,
              onMomentSelect: _v48,
              onAskQuestion: _v47
            })
          })]
        }), (0, _v1.jsxs)(_v12.Box, {
          p: "16px",
          children: [_v43 && _v14 ? (0, _v1.jsx)(_v16.Flex, {
            borderTop: "1px solid",
            borderColor: "stroke",
            pt: "24px",
            children: (0, _v1.jsx)(_v26.ClipInterractionsLimitError, {
              iconSize: "xs"
            })
          }) : null, _v43 && !_v14 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v13.InputGroup, {
              children: [(0, _v1.jsx)(_v38.QuestionInput, {
                isLoading: _v42,
                "data-testid": "custom-question-input",
                autoFocus: !0,
                isDisabled: _v44,
                maxLength: 500,
                isPlayer: _v4,
                value: _v44 ? _v35 : _v10,
                placeholder: _v21.askAboutThisVideo,
                onChange: _v0 => {
                  _v11(_v0.target.value);
                },
                onCompositionEnd: () => _v17(!1),
                onCompositionStart: () => _v17(!0),
                onKeyDown: _v49
              }), (0, _v1.jsx)(_v14.InputRightElement, {
                children: (0, _v1.jsx)(_v15.IconButton, {
                  "aria-label": "Submit question",
                  variant: "tertiary",
                  isDisabled: _v44 || 0 === _v10.trim().length,
                  isLoading: _v42,
                  icon: (0, _v1.jsx)(_v17.ArrowUp, {}),
                  size: "sm",
                  sx: {
                    ">div>div": {
                      width: "24px",
                      height: "24px"
                    }
                  },
                  onClick: () => {
                    _v10.trim().length && (_v47(_v10), _v38(_v10));
                  }
                })
              })]
            }), (0, _v1.jsx)(_v12.Box, {
              textAlign: "center",
              color: "text-secondary",
              fontSize: "text-xs",
              pt: "16px",
              children: _v8 === _v27.ViewerQnAPanels.QUESTIONS ? _v21.qnaTermAndConditions() : _v21.aiCanBeWrong
            })]
          })]
        })]
      });
    };
  _v0.s(["ViewerAiModule", 0, ({
    videoId: _v0,
    videoRequestId: _v1,
    pageName: _v2,
    onClose: _v3,
    onMomentPlay: _v4,
    onLoginRequired: _v5,
    overrideBreakpoint: _v6,
    inheritColors: _v7,
    guestSignature: _v8
  }) => {
    let _v9 = (0, _v2.useContext)(_v3.ViewerContext),
      _v10 = (0, _v8.useContainerDataStore)(_v0 => _v0.initialize),
      _v11 = (0, _v8.useContainerDataStore)(_v0 => _v0.reset),
      _v12 = (0, _v9.useUIStore)(_v0 => _v0.initializeUIStore),
      _v13 = (0, _v9.useUIStore)(_v0 => _v0.reset);
    return (0, _v2.useLayoutEffect)(function () {
      return _v10(_v0, _v2), _v12(_v7, _v6), () => {
        _v11(), _v13();
      };
    }, []), (0, _v1.jsx)(_v10.ErrorBoundary, {
      viewer: _v9,
      children: (0, _v1.jsx)(_v4.ViewerAiContainer, {
        "data-testid": "viewer-ai-module",
        children: (0, _v1.jsx)(_v6.QuestionsDataContextProvider, {
          videoId: _v1,
          guestSignature: _v8,
          children: (0, _v1.jsx)(_v5.QuestionContextProvider, {
            videoId: _v1,
            guestSignature: _v8,
            children: (0, _v1.jsx)(_v7.TokensContextProvider, {
              videoId: _v0,
              children: (0, _v1.jsx)(_v45, {
                onMomentPlay: _v4,
                onClose: _v3,
                videoId: _v1,
                onLoginRequired: _v5,
                isPlayer: "player" === _v2
              })
            })
          })
        })
      })
    });
  }], 0);
}