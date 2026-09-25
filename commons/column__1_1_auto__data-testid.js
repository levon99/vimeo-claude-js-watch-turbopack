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
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = ({
    onSelectLanguage: _v0,
    selectedLanguage: _v1,
    uniqueLanguages: _v2,
    questions: _v3,
    onAskPredefinedQuestion: _v4,
    isEmbeded: _v5,
    isUiRefresh: _v6 = !1,
    questionText: _v7 = "",
    onQuestionTextChange: _v8,
    onQuestionSubmit: _v9,
    onQuestionSubmitClick: _v10,
    onQuestionCompositionStart: _v11,
    onQuestionCompositionEnd: _v12
  }) => {
    let _v13 = (0, _v2.useRef)(null),
      _v14 = (0, _v2.useRef)(null),
      {
        sendViewSuggestedAskAIEvent: _v15
      } = (0, _v20.useGetSvvManageBpEvents)(),
      _v16 = _v13.current?.getBoundingClientRect()?.height,
      _v17 = _v14.current?.getBoundingClientRect()?.height;
    (0, _v2.useEffect)(function () {
      _v15();
    }, []);
    let _v18 = (0, _v32.useBreakpointValue)({
      base: !!(_v16 && _v17 && _v16 - _v17 > 100)
    });
    return _v6 ? (0, _v1.jsxs)(_v16.Flex, {
      h: "100%",
      flexDirection: "column",
      flex: "1 1 auto",
      "data-testid": "viewer-qna-questions",
      children: [(0, _v1.jsx)(_v16.Flex, {
        justifyContent: "flex-end",
        px: "16px",
        pt: "16px",
        children: (0, _v1.jsx)(_v37.MultilingualSelector, {
          languages: _v2,
          selectedLanguage: _v1,
          onSelectLanguage: _v0,
          isEmbeded: _v5,
          isUiRefresh: !0
        })
      }), (0, _v1.jsxs)(_v16.Flex, {
        ref: _v13,
        flexDirection: "column",
        flex: "1 1 auto",
        justifyContent: "flex-end",
        px: "16px",
        children: [(0, _v1.jsxs)(_v16.Flex, {
          ref: _v14,
          flexDirection: "column",
          gap: "8px",
          px: "12px",
          mb: "24px",
          width: "100%",
          children: [(0, _v1.jsx)(_v35.AiSparkles, {
            boxSize: "32px",
            color: "text-primary"
          }), (0, _v1.jsx)(_v12.Box, {
            color: "text-primary",
            fontFamily: "heading",
            fontSize: "heading-md",
            lineHeight: 1.4,
            children: _v21.askVimeoAi
          }), (0, _v1.jsx)(_v12.Box, {
            color: "text-secondary",
            fontSize: "body-lg",
            lineHeight: 1.4,
            children: _v21.askVimeoAiSubtitle
          })]
        }), (0, _v1.jsxs)(_v12.Box, {
          bg: "fill-component",
          p: "8px",
          borderRadius: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          children: [(0, _v1.jsx)(_v16.Flex, {
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            children: _v3?.map((_v0, _v1) => {
              let _v2 = `${_v0.question ?? "question"}-${_v1}`;
              return (0, _v1.jsx)(_v38.QuestionRow, {
                onClick: () => _v4(_v0),
                children: _v0.question
              }, _v2);
            })
          }), (0, _v1.jsxs)(_v13.InputGroup, {
            children: [(0, _v1.jsx)(_v34.Input, {
              "data-testid": "custom-question-input",
              maxLength: 500,
              value: _v7,
              placeholder: _v21.askAboutThisVideo,
              onChange: _v8,
              onKeyDown: _v9,
              onCompositionStart: _v11,
              onCompositionEnd: _v12,
              borderRadius: "12px"
            }), (0, _v1.jsx)(_v14.InputRightElement, {
              children: (0, _v1.jsx)(_v15.IconButton, {
                "aria-label": "Submit question",
                variant: "tertiary",
                isDisabled: !_v7?.trim().length,
                icon: (0, _v1.jsx)(_v17.ArrowUp, {}),
                size: "sm",
                onClick: _v10
              })
            })]
          })]
        })]
      })]
    }) : (0, _v1.jsxs)(_v16.Flex, {
      h: "100%",
      flexDirection: "column",
      flex: "1 1 auto",
      gap: "8px",
      ref: _v13,
      p: "16px",
      me: "auto",
      "data-testid": "viewer-qna-questions",
      children: [(0, _v1.jsx)(_v16.Flex, {
        ref: _v14,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        children: _v18 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v35.AiSparkles, {
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
      }), (0, _v1.jsx)(_v37.MultilingualSelector, {
        languages: _v2,
        selectedLanguage: _v1,
        onSelectLanguage: _v0,
        isEmbeded: _v5
      }), _v3?.map(_v0 => (0, _v1.jsx)(_v36.Choice, {
        icon: "empty",
        shouldWrap: !0,
        onClick: () => _v4(_v0),
        children: _v0.question
      }, _v0.question))]
    });
  };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = ({
      onClose: _v0,
      activePanel: _v1,
      onBack: _v2,
      overrideBreakpoint: _v3,
      isUiRefresh: _v4 = !1
    }) => {
      let _v5 = (0, _v2.useMemo)(() => {
          if (_v4) return _v21.vimeoAi;
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
        }, [_v1, _v4]),
        _v6 = (0, _v2.useCallback)(() => {
          _v2(_v27.ViewerQnAPanels.QUESTIONS);
        }, []),
        _v7 = (0, _v2.useMemo)(() => {
          if (_v4) return {
            padding: "8px 8px 8px 12px",
            fontSize: "18px",
            iconSize: "sm"
          };
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
        }, [_v3, _v4]),
        _v8 = _v4 && _v1 === _v27.ViewerQnAPanels.QUESTIONS || !_v4 && _v1 !== _v27.ViewerQnAPanels.ASK_QUESTION;
      return (0, _v1.jsxs)(_v40.ViewerQnAHeaderWrapper, {
        align: "center",
        justify: "space-between",
        pb: _v3 ? "inherit" : 100,
        p: _v7.padding,
        width: "100%",
        position: "relative",
        ...(_v4 ? {
          borderBottom: "none",
          maxH: "56px"
        } : {}),
        children: [(_v1 === _v27.ViewerQnAPanels.ASK_QUESTION || _v1 === _v27.ViewerQnAPanels.ANSWER) && (0, _v1.jsx)(_v15.IconButton, {
          "aria-label": "Back",
          icon: (0, _v1.jsx)(_v43.ChevronLeftSmall, {}),
          variant: "tertiary",
          size: _v7.iconSize,
          onClick: _v6,
          isDisabled: _v1 === _v27.ViewerQnAPanels.ASK_QUESTION,
          position: "absolute"
        }), (0, _v1.jsxs)(_v41.HStack, {
          flexWrap: "nowrap",
          m: _v4 ? _v1 === _v27.ViewerQnAPanels.ASK_QUESTION || _v1 === _v27.ViewerQnAPanels.ANSWER ? "0 0 0 32px" : "unset" : _v1 === _v27.ViewerQnAPanels.QUESTIONS || _v1 === _v27.ViewerQnAPanels.LOADER ? "unset" : "0 auto",
          gap: _v4 ? "10px" : void 0,
          children: [_v8 && (0, _v1.jsx)(_v35.AiSparkles, {
            color: "text-primary"
          }), (0, _v1.jsx)(_v42.Text, {
            variant: _v3 ? void 0 : "heading-md",
            fontFamily: _v4 ? "heading" : void 0,
            as: "h4",
            fontSize: _v7.fontSize,
            color: "text-primary",
            children: _v5
          })]
        }), _v0 && (0, _v1.jsx)(_v15.IconButton, {
          "aria-label": "Close",
          variant: "tertiary",
          size: _v7.iconSize,
          icon: (0, _v1.jsx)(_v44.CloseX, {}),
          onClick: _v0
        })]
      });
    },
    _v46 = ["xs", "xxs", "tiny", "mini"],
    _v47 = ({
      onMomentPlay: _v0,
      onClose: _v1,
      videoId: _v2,
      onLoginRequired: _v3,
      isPlayer: _v4 = !1,
      isUiRefresh: _v5 = !1
    }) => {
      let _v6,
        _v7 = (0, _v9.useUIStore)(_v0 => _v0.overrideBreakpoint),
        _v8 = (0, _v19.useViewer)(),
        [_v9, _v10] = (0, _v2.useState)(_v27.ViewerQnAPanels.LOADER),
        [_v11, _v12] = (0, _v2.useState)(""),
        [_v13, _v14] = (0, _v2.useState)(!1),
        [_v15, _v16] = (0, _v2.useState)(!1),
        [_v17, _v18] = (0, _v2.useState)(!1),
        _v19 = (0, _v22.useBokehToast)(),
        {
          questions: _v20,
          error: _v21,
          isQuestionsLoading: _v22,
          isActivatingAi: _v23,
          forceRefresh: _v24,
          hasValidStatus: _v25,
          isReadyToAsk: _v26
        } = (0, _v6.useQuestionsDataContext)(),
        _v27 = (_v6 = new Map(), _v20 && _v20.forEach(_v0 => {
          _v0.languageLabel && _v0.languageCode && _v6.set(_v0.languageCode, _v0.languageLabel);
        }), Array.from(_v6.entries()).map(([_v0, _v1]) => ({
          value: _v0,
          label: _v1
        }))),
        [_v28, _v29] = (0, _v18.default)("ai-qna-lang", _v8?.locale ?? "en");
      function _v30(_v0, _v1) {
        let _v2 = _v0 && _v0.filter(_v0 => _v0.languageCode && _v0.languageCode.toLocaleLowerCase() === _v1.toLocaleLowerCase());
        return _v2?.length ? _v2 : _v0;
      }
      let [_v31, _v32] = (0, _v2.useState)([]);
      (0, _v2.useEffect)(function () {
        _v32(_v30(_v20, _v28));
      }, [_v20, _v28]);
      let _v33 = _v27.length > 1,
        {
          askPredefinedQuestion: _v34,
          askNewQuestion: _v35,
          questionResponseLoading: _v36,
          question: _v37,
          answer: _v38,
          questionResponseError: _v39
        } = (0, _v5.useQuestionContext)(),
        {
          sendAskAQuestionEvent: _v40,
          sendSelectSuggestedAIQuestionEvent: _v41,
          sendViewGenerateAIAnswerEvent: _v42
        } = (0, _v20.useGetSvvManageBpEvents)(),
        _v43 = (0, _v2.useRef)(null),
        _v44 = _v9 === _v27.ViewerQnAPanels.ASK_QUESTION,
        _v45 = _v5 ? _v44 : _v9 === _v27.ViewerQnAPanels.QUESTIONS || _v44 || _v9 === _v27.ViewerQnAPanels.ANSWER,
        _v46 = _v44 || _v9 === _v27.ViewerQnAPanels.AI_ACTIVATION || _v9 === _v27.ViewerQnAPanels.LOADER || _v9 === _v27.ViewerQnAPanels.LOGIN_REQUIRED,
        _v47 = window?.self !== window?.top,
        _v48 = (0, _v2.useCallback)((_v0, _v1 = "typed") => {
          _v12(""), _v35(_v0, _v1), _v10(_v27.ViewerQnAPanels.ASK_QUESTION);
        }, [_v35]),
        _v49 = (0, _v2.useCallback)(_v0 => {
          if (_v0.question) {
            if (_v41({
              copy: _v0.question,
              isRelated: !1
            }), !_v0.answer) return void _v48(_v0.question, "suggested_question");
            _v34(_v0.question, _v0.answer, _v0.relevantQuotes, _v0.relatedQuestions, "suggested_question"), _v10(_v27.ViewerQnAPanels.ANSWER);
          }
        }, [_v34, _v48, _v41]),
        _v50 = (0, _v2.useCallback)(_v0 => {
          _v0(_v0), _v47 && _v1 && _v7 && _v46.includes(_v7) && _v1();
        }, [_v47, _v1, _v0, _v7]),
        _v51 = (0, _v2.useCallback)(_v0 => {
          "Enter" !== _v0.key || !_v11.trim().length || _v17 || _v0.nativeEvent.isComposing || (_v48(_v11), _v40(_v11));
        }, [_v48, _v40, _v11, _v17]),
        _v52 = (0, _v2.useCallback)(() => {
          _v11.trim().length && (_v48(_v11), _v40(_v11));
        }, [_v48, _v40, _v11]);
      return ((0, _v2.useEffect)(function () {
        _v9 !== _v27.ViewerQnAPanels.LOADER || _v23 || _v22 || _v21 || !_v26 || setTimeout(() => {
          _v10(_v27.ViewerQnAPanels.QUESTIONS);
        }, 300);
      }, [_v9, _v23, _v22, _v21, _v2, _v26]), (0, _v2.useEffect)(function () {
        _v36 ? (_v10(_v27.ViewerQnAPanels.ASK_QUESTION), _v42()) : _v44 && !_v36 && _v10(_v27.ViewerQnAPanels.ANSWER);
      }, [_v9, _v36, _v42]), (0, _v2.useEffect)(() => {
        _v43?.current && _v9 === _v27.ViewerQnAPanels.ANSWER && _v43.current.scrollTo(0, 0);
      }, [_v9]), (0, _v2.useEffect)(function () {
        if (_v9 === _v27.ViewerQnAPanels.ANSWER && !_v38) {
          let _v0 = `${_v21.failedToAskTheVimeoAi}. ${_v39?.message}`;
          _v10(_v27.ViewerQnAPanels.QUESTIONS), _v19(_v0, "warning", 0);
        }
      }, [_v9, _v38, _v39, _v19]), (0, _v2.useEffect)(function () {
        _v23 ? _v10(_v27.ViewerQnAPanels.AI_ACTIVATION) : _v10(_v27.ViewerQnAPanels.LOADER);
      }, [_v23]), (0, _v2.useEffect)(() => {
        !async function () {
          if (_v21 && !_v13) try {
            let _v0 = await (0, _v23.isClipInterractionsLimitError)(_v21);
            _v14(_v0);
          } catch {
            _v14(!1);
          }
        }();
      }, [_v21, _v13]), (0, _v2.useEffect)(() => {
        !async function () {
          if (_v39 && !_v15) try {
            let _v0 = await (0, _v23.isClipInterractionsLimitError)(_v39);
            _v16(_v0);
          } catch {
            _v16(!1);
          }
        }();
      }, [_v15, _v39]), (0, _v2.useEffect)(function () {
        _v4 && _v25 && (0, _v24.sendAppReady)();
      }, [_v4, _v25]), !_v23 && _v21) ? _v13 ? (0, _v1.jsxs)(_v40.ResponsiveWrapper, {
        "data-testid": "viewer-qna",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        aiThinking: _v44 && !_v47,
        id: "viewerqna",
        isPlayer: _v4,
        children: [(0, _v1.jsx)(_v45, {
          overrideBreakpoint: _v7,
          onClose: _v1,
          activePanel: _v9,
          onBack: _v10,
          isUiRefresh: _v5
        }), (0, _v1.jsx)(_v26.ClipInterractionsLimitError, {
          iconSize: "sm"
        })]
      }) : (0, _v1.jsx)(_v28.ErrorState, {
        error: _v21,
        onRetry: _v24
      }) : (0, _v1.jsxs)(_v40.ResponsiveWrapper, {
        "data-testid": "viewer-qna",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        aiThinking: _v44 && !_v47,
        id: "viewerqna",
        isPlayer: _v4,
        children: [(0, _v1.jsx)(_v45, {
          overrideBreakpoint: _v7,
          onClose: _v1,
          activePanel: _v9,
          onBack: _v10,
          isUiRefresh: _v5
        }), (0, _v1.jsxs)(_v12.Box, {
          ...(_v5 ? {
            flex: "1 1 auto",
            minHeight: "0px"
          } : {
            h: "100%"
          }),
          overflowY: "auto",
          ref: _v43,
          children: [_v9 === _v27.ViewerQnAPanels.LOADER && (0, _v1.jsx)(_v40.LoaderWrapper, {
            "data-testid": "viewer-qna-loader",
            children: (0, _v1.jsx)(_v11.Spinner, {
              size: "xl",
              color: _v5 ? "text-secondary" : void 0
            })
          }), _v9 === _v27.ViewerQnAPanels.QUESTIONS && (0, _v1.jsx)(_v39, {
            onSelectLanguage: _v0 => {
              _v33 ? (_v29(_v0), _v32(_v30(_v20, _v0))) : _v32(_v20);
            },
            selectedLanguage: _v28,
            uniqueLanguages: _v27,
            questions: _v31,
            onAskPredefinedQuestion: _v49,
            isEmbeded: _v4,
            isUiRefresh: _v5,
            questionText: _v11,
            onQuestionTextChange: _v0 => {
              _v12(_v0.target.value);
            },
            onQuestionSubmit: _v51,
            onQuestionSubmitClick: _v52,
            onQuestionCompositionStart: () => _v18(!0),
            onQuestionCompositionEnd: () => _v18(!1)
          }), _v44 && (0, _v1.jsx)(_v30.AskQuestionPanel, {
            isUiRefresh: _v5
          }), _v9 === _v27.ViewerQnAPanels.AI_ACTIVATION && (0, _v1.jsx)(_v29.AiActivationPanel, {
            isUiRefresh: _v5
          }), _v9 === _v27.ViewerQnAPanels.LOGIN_REQUIRED && (0, _v1.jsx)(_v31.LoginRequiredPanel, {
            onLoginRequired: _v3
          }), _v9 === _v27.ViewerQnAPanels.ANSWER && (0, _v1.jsx)(_v12.Box, {
            height: "100%",
            w: "100%",
            sx: {
              "> :first-child": {
                width: "100%"
              }
            },
            children: (0, _v1.jsx)(_v25.QuestionDisplay, {
              showPrompt: _v5,
              onMomentSelect: _v50,
              onAskQuestion: _v48,
              isUiRefresh: _v5
            })
          })]
        }), (!_v5 || _v45 || _v9 === _v27.ViewerQnAPanels.QUESTIONS) && (0, _v1.jsxs)(_v12.Box, {
          p: "16px",
          children: [_v5 && _v9 === _v27.ViewerQnAPanels.QUESTIONS && (0, _v1.jsx)(_v12.Box, {
            textAlign: "center",
            color: "text-secondary",
            fontSize: "text-xs",
            lineHeight: 1.2,
            pt: "4px",
            px: "4px",
            children: _v21.qnaTermAndConditions()
          }), _v45 && _v15 ? (0, _v1.jsx)(_v16.Flex, {
            borderTop: "1px solid",
            borderColor: "stroke",
            pt: "24px",
            children: (0, _v1.jsx)(_v26.ClipInterractionsLimitError, {
              iconSize: "xs"
            })
          }) : null, _v45 && !_v15 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v5 ? (0, _v1.jsx)(_v12.Box, {
              bg: "fill-component",
              p: "8px",
              borderRadius: "16px",
              width: "100%",
              children: (0, _v1.jsx)(_v13.InputGroup, {
                children: (0, _v1.jsx)(_v40.QuestionInput, {
                  isLoading: _v44,
                  "data-testid": "custom-question-input",
                  isDisabled: _v46,
                  maxLength: 500,
                  isPlayer: _v4,
                  value: _v5 ? _v11 : _v46 ? _v37 : _v11,
                  placeholder: _v21.askAboutThisVideo,
                  onChange: _v0 => {
                    _v12(_v0.target.value);
                  },
                  onCompositionEnd: () => _v18(!1),
                  onCompositionStart: () => _v18(!0),
                  onKeyDown: _v51
                })
              })
            }) : (0, _v1.jsxs)(_v13.InputGroup, {
              children: [(0, _v1.jsx)(_v40.QuestionInput, {
                isLoading: _v44,
                "data-testid": "custom-question-input",
                autoFocus: !0,
                isDisabled: _v46,
                maxLength: 500,
                isPlayer: _v4,
                value: _v46 ? _v37 : _v11,
                placeholder: _v21.askAboutThisVideo,
                onChange: _v0 => {
                  _v12(_v0.target.value);
                },
                onCompositionEnd: () => _v18(!1),
                onCompositionStart: () => _v18(!0),
                onKeyDown: _v51
              }), (0, _v1.jsx)(_v14.InputRightElement, {
                children: (0, _v1.jsx)(_v15.IconButton, {
                  "aria-label": "Submit question",
                  variant: "tertiary",
                  isDisabled: _v46 || 0 === _v11.trim().length,
                  isLoading: _v44,
                  icon: (0, _v1.jsx)(_v17.ArrowUp, {}),
                  size: "sm",
                  sx: {
                    ">div>div": {
                      width: "24px",
                      height: "24px"
                    }
                  },
                  onClick: () => {
                    _v11.trim().length && (_v48(_v11), _v40(_v11));
                  }
                })
              })]
            }), _v5 ? (0, _v1.jsx)(_v12.Box, {
              textAlign: "center",
              color: "text-secondary",
              fontSize: "text-xs",
              lineHeight: 1.2,
              pt: "8px",
              px: "4px",
              children: _v21.aiCanBeWrong
            }) : (0, _v1.jsx)(_v12.Box, {
              textAlign: "center",
              color: "text-secondary",
              fontSize: "text-xs",
              pt: "16px",
              children: _v9 === _v27.ViewerQnAPanels.QUESTIONS ? _v21.qnaTermAndConditions() : _v21.aiCanBeWrong
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
    guestSignature: _v8,
    isUiRefresh: _v9 = !1
  }) => {
    let _v10 = (0, _v2.useContext)(_v3.ViewerContext),
      _v11 = (0, _v8.useContainerDataStore)(_v0 => _v0.initialize),
      _v12 = (0, _v8.useContainerDataStore)(_v0 => _v0.reset),
      _v13 = (0, _v9.useUIStore)(_v0 => _v0.initializeUIStore),
      _v14 = (0, _v9.useUIStore)(_v0 => _v0.reset);
    return (0, _v2.useLayoutEffect)(function () {
      return _v11(_v0, _v2), _v13(_v7, _v6), () => {
        _v12(), _v14();
      };
    }, []), (0, _v1.jsx)(_v10.ErrorBoundary, {
      viewer: _v10,
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
              children: (0, _v1.jsx)(_v47, {
                onMomentPlay: _v4,
                onClose: _v3,
                videoId: _v1,
                onLoginRequired: _v5,
                isPlayer: "player" === _v2,
                isUiRefresh: _v9
              })
            })
          })
        })
      })
    });
  }], 0);
}