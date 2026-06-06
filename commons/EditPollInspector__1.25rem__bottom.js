{
  "use strict";

  _v0.s(["EditPollInspector", () => _v59], 0);
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
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = "1.25rem",
    _v44 = ({
      startTime: _v0
    }) => {
      let {
          createPoll: _v1
        } = (0, _v21.usePoll)(),
        {
          seek: _v2
        } = (0, _v41.useDragonfly)(),
        _v3 = _v0 => {
          _v2(_v1({
            pollStyleId: _v18.DEFAULT_POLL_STYLE,
            addToStoryboard: !0,
            variant: _v0,
            startTime: _v0
          }).compositionTiming.start);
        };
      return (0, _v1.jsxs)(_v34.Menu, {
        placement: "bottom",
        autoSelect: !1,
        children: [(0, _v1.jsx)(_v35.MenuButton, {
          as: _v38.IconButton,
          icon: (0, _v1.jsx)(_v40.Plus, {}),
          variant: "tertiary",
          size: "sm",
          "data-testid": _v19.testIds.polls.inspector.newPollMenuButton
        }), (0, _v1.jsxs)(_v37.MenuList, {
          minWidth: "12.5rem",
          "data-testid": _v19.testIds.polls.inspector.newPollMenuList,
          children: [(0, _v1.jsx)(_v36.MenuItem, {
            icon: (0, _v1.jsx)(_v42.QuizIcon, {
              height: _v43,
              width: _v43
            }),
            onClick: () => {
              _v3(_v17.POLL_VARIANT.QUIZ);
            },
            children: (0, _v1.jsx)(_v13.Text, {
              variant: "body-md",
              children: (0, _v16.translate)({
                singular: "Add quiz question",
                dictionary: {
                  es: {
                    singular: "Añadir pregunta de cuestionario"
                  },
                  "de-DE": {
                    singular: "Quizfrage hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter une question de quiz"
                  },
                  "ja-JP": {
                    singular: "クイズの質問を追加"
                  },
                  "ko-KR": {
                    singular: "퀴즈 질문 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar pergunta do questionário"
                  },
                  "zh-CN": {
                    singular: "添加测验题目"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v36.MenuItem, {
            icon: (0, _v1.jsx)(_v39.ChartGrowthAlt, {
              boxSize: _v43
            }),
            onClick: () => {
              _v3(_v17.POLL_VARIANT.POLL);
            },
            children: (0, _v1.jsx)(_v13.Text, {
              variant: "body-md",
              children: (0, _v16.translate)({
                singular: "Add poll question",
                dictionary: {
                  es: {
                    singular: "Añadir pregunta de encuesta"
                  },
                  "de-DE": {
                    singular: "Umfragefrage hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter une question de sondage"
                  },
                  "ja-JP": {
                    singular: "アンケートの質問を追加"
                  },
                  "ko-KR": {
                    singular: "투표 질문 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar pergunta da enquete"
                  },
                  "zh-CN": {
                    singular: "添加民意调查问题"
                  }
                }
              })
            })
          })]
        })]
      });
    };
  _v0.s(["NewPollMenu", 0, _v44], 0);
  let _v45 = new Map();
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = [(0, _v4.forwardRef)(({
      backgroundFill: _v0 = "var(--vimeo-colors-button-secondary-default)",
      letterFill: _v1 = "var(--vimeo-colors-text-primary)",
      ..._v2
    }, _v3) => (0, _v1.jsxs)("svg", {
      ref: _v3,
      ..._v2,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v1.jsx)("path", {
        d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
        fill: _v0
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.0462 6.11109L8.17222 10.2777H11.8773L10.0504 6.11109H10.0462ZM13.3792 10.6436C13.3759 10.6355 13.3724 10.6276 13.3687 10.6197L11.1332 5.52077L11.1326 5.51943C10.9941 5.20608 10.654 5 10.2753 5H9.82347C9.44557 5 9.1061 5.20519 8.96709 5.51741L6.67422 10.6153C6.67047 10.6231 6.66691 10.631 6.66356 10.639L5.04483 14.2381C4.91669 14.523 5.07263 14.8463 5.39313 14.9602C5.71364 15.0741 6.07733 14.9354 6.20546 14.6505L7.67249 11.3888H12.3644L13.7925 14.646C13.9179 14.9319 14.2802 15.0733 14.6018 14.9619C14.9234 14.8505 15.0825 14.5284 14.9572 14.2426L13.3792 10.6436Z",
        fill: _v1
      })]
    })), (0, _v4.forwardRef)(({
      backgroundFill: _v0 = "var(--vimeo-colors-button-secondary-default)",
      letterFill: _v1 = "var(--vimeo-colors-text-primary)",
      ..._v2
    }, _v3) => (0, _v1.jsxs)("svg", {
      ref: _v3,
      ..._v2,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v1.jsx)("path", {
        d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
        fill: _v0
      }), (0, _v1.jsx)("path", {
        d: "M10.625 15.5C11.4206 15.5 12.1835 15.1837 12.7461 14.6211C13.3087 14.0585 13.625 13.2956 13.625 12.5C13.625 11.7044 13.3087 10.9415 12.7461 10.3789C12.6035 10.2363 12.4479 10.1098 12.2822 10C12.4479 9.8902 12.6035 9.76371 12.7461 9.62109C13.3087 9.05848 13.625 8.29565 13.625 7.5C13.625 6.70435 13.3087 5.94151 12.7461 5.37891C12.1835 4.8163 11.4206 4.5 10.625 4.5H6.875C6.59886 4.5 6.375 4.72386 6.375 5V15C6.375 15.2761 6.59886 15.5 6.875 15.5H10.625ZM7.375 9.5V5.5H10.625C11.1554 5.5 11.664 5.71087 12.0391 6.08594C12.4141 6.46101 12.625 6.96957 12.625 7.5C12.625 8.03043 12.4141 8.53899 12.0391 8.91406C11.7108 9.24235 11.2803 9.44485 10.8223 9.49023L10.625 9.5H7.375ZM7.375 10.5H10.625L10.8223 10.5098C11.2803 10.5551 11.7108 10.7577 12.0391 11.0859C12.4141 11.461 12.625 11.9696 12.625 12.5C12.625 13.0304 12.4141 13.539 12.0391 13.9141C11.664 14.2891 11.1554 14.5 10.625 14.5H7.375V10.5Z",
        fill: _v1
      })]
    })), (0, _v4.forwardRef)(({
      backgroundFill: _v0 = "var(--vimeo-colors-button-secondary-default)",
      letterFill: _v1 = "var(--vimeo-colors-text-primary)",
      ..._v2
    }, _v3) => (0, _v1.jsxs)("svg", {
      ref: _v3,
      ..._v2,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v1.jsx)("path", {
        d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
        fill: _v0
      }), (0, _v1.jsx)("path", {
        d: "M13.125 8.125C13.125 7.46196 12.8614 6.82626 12.3926 6.35742C11.9237 5.88858 11.288 5.625 10.625 5.625H9.375C8.71196 5.625 8.07626 5.88858 7.60742 6.35742C7.13858 6.82626 6.875 7.46196 6.875 8.125V11.875C6.875 12.538 7.13858 13.1737 7.60742 13.6426C8.07626 14.1114 8.71196 14.375 9.375 14.375H10.625C11.288 14.375 11.9237 14.1114 12.3926 13.6426C12.8614 13.1737 13.125 12.538 13.125 11.875C13.125 11.5298 13.4048 11.25 13.75 11.25C14.0952 11.25 14.375 11.5298 14.375 11.875C14.375 12.8696 13.9796 13.8231 13.2764 14.5264C12.5731 15.2296 11.6196 15.625 10.625 15.625H9.375C8.38044 15.625 7.42689 15.2296 6.72363 14.5264C6.02037 13.8231 5.625 12.8696 5.625 11.875V8.125C5.625 7.13044 6.02037 6.17689 6.72363 5.47363C7.42689 4.77037 8.38044 4.375 9.375 4.375H10.625C11.6196 4.375 12.5731 4.77037 13.2764 5.47363C13.9796 6.17689 14.375 7.13044 14.375 8.125C14.375 8.47018 14.0952 8.75 13.75 8.75C13.4048 8.75 13.125 8.47018 13.125 8.125Z",
        fill: _v1
      })]
    })), (0, _v4.forwardRef)(({
      backgroundFill: _v0 = "var(--vimeo-colors-button-secondary-default)",
      letterFill: _v1 = "var(--vimeo-colors-text-primary)",
      ..._v2
    }, _v3) => (0, _v1.jsxs)("svg", {
      ref: _v3,
      ..._v2,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v1.jsx)("path", {
        d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
        fill: _v0
      }), (0, _v1.jsx)("path", {
        d: "M13.125 8.125C13.125 7.46196 12.8614 6.82626 12.3926 6.35742C11.9237 5.88858 11.288 5.625 10.625 5.625H7.5V14.375H10.625C11.288 14.375 11.9237 14.1114 12.3926 13.6426C12.8614 13.1737 13.125 12.538 13.125 11.875V8.125ZM14.375 11.875C14.375 12.8696 13.9796 13.8231 13.2764 14.5264C12.5731 15.2296 11.6196 15.625 10.625 15.625H6.875C6.52982 15.625 6.25 15.3452 6.25 15V5L6.26221 4.87427C6.32036 4.58931 6.57286 4.375 6.875 4.375H10.625C11.6196 4.375 12.5731 4.77037 13.2764 5.47363C13.9796 6.17689 14.375 7.13044 14.375 8.125V11.875Z",
        fill: _v1
      })]
    })), (0, _v4.forwardRef)(({
      backgroundFill: _v0 = "var(--vimeo-colors-button-secondary-default)",
      letterFill: _v1 = "var(--vimeo-colors-text-primary)",
      ..._v2
    }, _v3) => (0, _v1.jsxs)("svg", {
      ref: _v3,
      ..._v2,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v1.jsx)("path", {
        d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
        fill: _v0
      }), (0, _v1.jsx)("path", {
        d: "M13.125 4.375C13.4702 4.375 13.75 4.65482 13.75 5C13.75 5.34518 13.4702 5.625 13.125 5.625H7.5V14.375H13.125C13.4702 14.375 13.75 14.6548 13.75 15C13.75 15.3452 13.4702 15.625 13.125 15.625H6.875C6.52982 15.625 6.25 15.3452 6.25 15V5L6.26221 4.87427C6.32036 4.58931 6.57286 4.375 6.875 4.375H13.125Z",
        fill: _v1
      }), (0, _v1.jsx)("path", {
        d: "M11.875 9.375C12.2202 9.375 12.5 9.65482 12.5 10C12.5 10.3452 12.2202 10.625 11.875 10.625H6.875C6.52982 10.625 6.25 10.3452 6.25 10C6.25 9.65482 6.52982 9.375 6.875 9.375H11.875Z",
        fill: _v1
      })]
    }))],
    _v53 = (0, _v10.rem)(3),
    _v54 = _v0 => ({
      marginTop: _v53,
      textAlign: "right",
      opacity: +!!_v0,
      transition: "all 120ms ease-in-out 0s",
      cursor: "default"
    }),
    _v55 = {
      height: (0, _v10.rem)(20),
      outlineOffset: "0",
      outline: "none",
      borderRadius: 0,
      p: 0,
      _hover: {
        outline: "none"
      },
      _focus: {
        outline: "none"
      }
    },
    _v56 = {
      height: (0, _v10.rem)(20),
      width: (0, _v10.rem)(20),
      borderRadius: (0, _v10.rem)(4),
      '&[data-type="icon-button"]': {
        padding: 0
      },
      svg: {
        borderRadius: (0, _v10.rem)(4)
      }
    },
    _v57 = ({
      id: _v0,
      index: _v1,
      text: _v2,
      inputId: _v3,
      shouldShowCharCounter: _v4,
      shouldShowDeleteButtons: _v5,
      isCorrectAnswer: _v6,
      placeholder: _v7,
      handleDeleteAnswer: _v8,
      handleAnswerChange: _v9,
      updateCorrectAnswer: _v10,
      inputFocusProps: _v11
    }) => {
      let {
          attributes: _v12,
          listeners: _v13,
          setNodeRef: _v14,
          transform: _v15,
          transition: _v16,
          isDragging: _v17
        } = (0, _v3.useSortable)({
          id: _v0
        }),
        [_v18, _v19] = (0, _v4.useState)(!1),
        [_v20, _v21] = (0, _v4.useState)(!1),
        _v22 = {
          transform: _v15 ? `translate3d(${_v15.x}px, ${_v15.y}px, 0)` : void 0,
          transition: _v16,
          zIndex: +!!_v17,
          position: "relative",
          opacity: _v17 ? .5 : 1,
          alignItems: "start",
          gap: (0, _v10.rem)(4),
          justifyContent: "space-between"
        },
        _v23 = _v52[_v1];
      return (0, _v1.jsxs)(_v9.HStack, {
        ref: _v14,
        ..._v22,
        onMouseEnter: () => _v21(!0),
        onMouseLeave: () => _v21(!1),
        children: [(0, _v1.jsxs)(_v48.VStack, {
          flex: 1,
          gap: 0,
          children: [(0, _v1.jsxs)(_v9.HStack, {
            ...{
              height: (0, _v10.rem)(40),
              width: "100%",
              py: (0, _v10.rem)(10),
              px: (0, _v10.rem)(16),
              borderRadius: "sm",
              ...(_v18 ? {
                outline: "2px solid",
                outlineOffset: "-2px",
                outlineColor: "focus-alt",
                transition: "outline 120ms ease-in-out"
              } : {
                outline: "1px solid",
                outlineOffset: "-1px",
                outlineColor: "input-stroke",
                _hover: {
                  outlineColor: "input-stroke-hover"
                }
              })
            },
            children: [(0, _v1.jsx)(_v38.IconButton, {
              "aria-label": (0, _v16.translate)({
                singular: "Answer order",
                dictionary: {
                  es: {
                    singular: "Orden de las respuestas"
                  },
                  "de-DE": {
                    singular: "Antwortreihenfolge"
                  },
                  "fr-FR": {
                    singular: "Ordre des réponses"
                  },
                  "ja-JP": {
                    singular: "回答順"
                  },
                  "ko-KR": {
                    singular: "답변 순서"
                  },
                  "pt-BR": {
                    singular: "Ordem das respostas"
                  },
                  "zh-CN": {
                    singular: "回答顺序"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v23, {}),
              size: "sm",
              variant: "tertiary",
              cursor: "grab",
              sx: _v56,
              ..._v12,
              ..._v13,
              tabIndex: -1
            }), (0, _v1.jsx)(_v47.Input, {
              value: _v2,
              placeholder: _v7,
              onChange: _v0 => _v9(_v1, _v0.target.value),
              size: "sm",
              "data-testid": "poll-answer-text",
              variant: "outlined",
              "data-inputid": _v3,
              onClick: _v0 => _v0.stopPropagation(),
              onFocus: () => {
                _v19(!0), _v11(_v3).onFocus();
              },
              onBlur: () => {
                _v19(!1), _v11(_v3).onBlur();
              },
              ..._v55
            }), (0, _v1.jsxs)(_v7.Flex, {
              children: [!_v6 && (0, _v1.jsx)(_v46.Tooltip, {
                label: (0, _v16.translate)({
                  singular: "Select as correct",
                  dictionary: {
                    es: {
                      singular: "Seleccione como correcto"
                    },
                    "de-DE": {
                      singular: "Als korrekt markieren"
                    },
                    "fr-FR": {
                      singular: "Sélectionnez comme correct"
                    },
                    "ja-JP": {
                      singular: "正解として選択"
                    },
                    "ko-KR": {
                      singular: "선택"
                    },
                    "pt-BR": {
                      singular: "Selecione como correto"
                    },
                    "zh-CN": {
                      singular: "选择为正确"
                    }
                  }
                }),
                placement: "top",
                children: (0, _v1.jsx)(_v38.IconButton, {
                  "aria-label": (0, _v16.translate)({
                    singular: "Select as correct",
                    dictionary: {
                      es: {
                        singular: "Seleccione como correcto"
                      },
                      "de-DE": {
                        singular: "Als korrekt markieren"
                      },
                      "fr-FR": {
                        singular: "Sélectionnez comme correct"
                      },
                      "ja-JP": {
                        singular: "正解として選択"
                      },
                      "ko-KR": {
                        singular: "선택"
                      },
                      "pt-BR": {
                        singular: "Selecione como correto"
                      },
                      "zh-CN": {
                        singular: "选择为正确"
                      }
                    }
                  }),
                  icon: (0, _v1.jsx)(_v49.Star, {}),
                  size: "sm",
                  onClick: () => _v10(_v0),
                  "data-testid": _v19.testIds.polls.markAsCorrectOption,
                  variant: "tertiary",
                  opacity: +!!_v20,
                  ...(!_v20 && {
                    tabIndex: -1
                  }),
                  transition: "opacity 120ms ease-in-out"
                })
              }), _v6 && (0, _v1.jsx)(_v46.Tooltip, {
                label: (0, _v16.translate)({
                  singular: "Unselect as correct",
                  dictionary: {
                    es: {
                      singular: "Desmarcar como correcta"
                    },
                    "de-DE": {
                      singular: "Nicht als korrekt markieren"
                    },
                    "fr-FR": {
                      singular: "Annuler la sélection « correcte »"
                    },
                    "ja-JP": {
                      singular: "正解としての選択を解除"
                    },
                    "ko-KR": {
                      singular: "선택 취소"
                    },
                    "pt-BR": {
                      singular: "Desmarcar como correto"
                    },
                    "zh-CN": {
                      singular: "取消选择为正确"
                    }
                  }
                }),
                placement: "top",
                children: (0, _v1.jsx)(_v38.IconButton, {
                  "aria-label": (0, _v16.translate)({
                    singular: "Unselect as correct",
                    dictionary: {
                      es: {
                        singular: "Desmarcar como correcta"
                      },
                      "de-DE": {
                        singular: "Nicht als korrekt markieren"
                      },
                      "fr-FR": {
                        singular: "Annuler la sélection « correcte »"
                      },
                      "ja-JP": {
                        singular: "正解としての選択を解除"
                      },
                      "ko-KR": {
                        singular: "선택 취소"
                      },
                      "pt-BR": {
                        singular: "Desmarcar como correto"
                      },
                      "zh-CN": {
                        singular: "取消选择为正确"
                      }
                    }
                  }),
                  icon: (0, _v1.jsx)(_v50.StarFilled, {}),
                  size: "sm",
                  onClick: () => _v10(),
                  "data-testid": _v19.testIds.polls.unmarkAsCorrectOption,
                  variant: "tertiary",
                  opacity: 1,
                  transition: "opacity 120ms ease-in-out"
                })
              })]
            })]
          }), (0, _v1.jsx)(_v31.CharacterCounter, {
            currentLength: _v2.length,
            maxLength: _v18.POLL_MAX_INPUT_LENGTH,
            width: "100%",
            ..._v54(_v4)
          })]
        }), _v5 && (0, _v1.jsx)(_v1.Fragment, {
          children: (0, _v1.jsx)(_v7.Flex, {
            h: (0, _v10.rem)(40),
            alignItems: "center",
            children: (0, _v1.jsx)(_v46.Tooltip, {
              label: (0, _v16.translate)({
                singular: "Delete answer",
                dictionary: {
                  es: {
                    singular: "Eliminar respuesta"
                  },
                  "de-DE": {
                    singular: "Antwort löschen"
                  },
                  "fr-FR": {
                    singular: "Supprimer la réponse"
                  },
                  "ja-JP": {
                    singular: "回答を削除する"
                  },
                  "ko-KR": {
                    singular: "답변 삭제"
                  },
                  "pt-BR": {
                    singular: "Excluir resposta"
                  },
                  "zh-CN": {
                    singular: "删除答案"
                  }
                }
              }),
              placement: "top",
              children: (0, _v1.jsx)(_v38.IconButton, {
                "aria-label": (0, _v16.translate)({
                  singular: "Delete answer",
                  dictionary: {
                    es: {
                      singular: "Eliminar respuesta"
                    },
                    "de-DE": {
                      singular: "Antwort löschen"
                    },
                    "fr-FR": {
                      singular: "Supprimer la réponse"
                    },
                    "ja-JP": {
                      singular: "回答を削除する"
                    },
                    "ko-KR": {
                      singular: "답변 삭제"
                    },
                    "pt-BR": {
                      singular: "Excluir resposta"
                    },
                    "zh-CN": {
                      singular: "删除答案"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v51.CloseX, {}),
                size: "sm",
                onClick: () => _v8(_v0),
                "data-testid": _v19.testIds.polls.deletePollAnswer,
                variant: "tertiary"
              })
            })
          })
        })]
      });
    },
    _v58 = "question",
    _v59 = () => {
      let _v0 = (0, _v20.getTranslations)(),
        _v1 = (0, _v26.useAppDispatch)(),
        {
          updatePollSettings: _v2
        } = (0, _v21.usePoll)(),
        {
          toggleInspector: _v3
        } = (0, _v22.useInspector)(),
        _v4 = (0, _v26.useAppSelector)(_v24.selectedElementsSelector),
        {
          notifyPollToQuizInstruction: _v5
        } = (0, _v23.useNotifications)(),
        _v6 = [_v0.yellowBlueAndRed, _v0.redWhiteAndBlue, _v0.answer, _v0.answer, _v0.answer],
        _v7 = (0, _v2.useSensors)((0, _v2.useSensor)(_v2.PointerSensor), (0, _v2.useSensor)(_v2.KeyboardSensor, {
          coordinateGetter: _v3.sortableKeyboardCoordinates
        }));
      0 !== _v4.length && (0, _v29.isPollElement)(_v4[0]) || _v3(_v27.InspectorType.POLLS);
      let _v8 = _v4[0],
        _v9 = (0, _v29.isPollElement)(_v8),
        [_v10, _v11] = (0, _v4.useState)(_v8 ? _v45.get(_v8.id) ?? _v8.questionText : ""),
        [_v12, _v13] = (0, _v4.useState)((_v8?.answers ?? []).map(_v0 => ({
          ..._v0,
          text: _v45.get(_v0.id) ?? _v0.text
        }))),
        [_v14, _v15] = (0, _v4.useState)(""),
        _v16 = (0, _v4.useRef)(!1);
      (0, _v4.useEffect)(function () {
        !_v9 || _v16.current || (_v8.questionText.length <= _v18.POLL_MAX_INPUT_LENGTH ? _v11(_v8.questionText) : _v11(_v45.get(_v8.id) ?? _v8.questionText), _v13(_v8.answers));
      }, [_v9, _v8.answers, _v8.id, _v8.questionText]);
      let _v17 = (0, _v4.useCallback)(_v0 => {
        if (!_v8?.id) return;
        let _v1 = _v0.target.value;
        _v1.length > _v18.POLL_MAX_INPUT_LENGTH && (_v1 = _v1.slice(0, _v18.POLL_MAX_INPUT_LENGTH)), _v1 !== _v8.questionText && (_v16.current = !0, _v11(_v1), _v45.set(_v8.id, _v1), _v2({
          questionText: _v1,
          answers: _v8.answers,
          pollId: _v8.id,
          pollRectWidth: _v8.rect.width,
          pollStyleId: _v8.styleId,
          font: _v8.font
        }), queueMicrotask(() => {
          _v16.current = !1;
        }));
      }, [_v8, _v2]);
      if (!_v9) return null;
      let _v18 = (_v0, _v1) => {
          _v8?.id && (_v1.length > _v18.POLL_MAX_INPUT_LENGTH && (_v1 = _v1.slice(0, _v18.POLL_MAX_INPUT_LENGTH)), _v1 !== _v8.answers[_v0].text && (_v13(_v0 => {
            let _v1 = [..._v0];
            return _v1[_v0] = {
              ..._v1[_v0],
              text: _v1
            }, _v1;
          }), _v45.set(_v12[_v0].id, _v1), _v2({
            questionText: _v8.questionText,
            answers: _v8.answers.map((_v0, _v1) => _v1 === _v0 ? {
              ..._v0,
              text: _v1
            } : _v0),
            pollId: _v8.id,
            pollRectWidth: _v8.rect.width,
            pollStyleId: _v8.styleId,
            font: _v8.font
          })));
        },
        _v19 = _v0 => {
          _v8?.id && (_v13(_v0 => _v0.filter(_v0 => _v0.id !== _v0)), _v2({
            questionText: _v8.questionText,
            answers: _v8.answers.filter(_v0 => _v0.id !== _v0),
            pollId: _v8.id,
            pollRectWidth: _v8.rect.width,
            pollStyleId: _v8.styleId,
            font: _v8.font,
            ...(_v8.correctAnswerId === _v0 && {
              correctAnswerId: null,
              variant: _v17.POLL_VARIANT.POLL
            })
          }));
        },
        _v20 = _v0 => ({
          onFocus: () => _v15(_v0),
          onBlur: () => _v15("")
        }),
        _v21 = _v0 => {
          if (!_v9) return;
          let _v1 = {
            ..._v8,
            correctAnswerId: _v0,
            variant: _v0 ? _v17.POLL_VARIANT.QUIZ : _v17.POLL_VARIANT.POLL
          };
          _v1((0, _v25.updateElementAction)({
            ceId: _v8.id,
            element: _v1
          })), _v0 ? (0, _v28.sendTrackMarkCorrectOption)() : ((0, _v28.sendTrackUnmarkCorrectOption)(), _v5());
        };
      if (!_v8) return null;
      let _v22 = _v12.length > _v18.MIN_ANSWERS_PER_POLL;
      return (0, _v1.jsxs)(_v32.Inspector, {
        children: [(0, _v1.jsx)(_v33.InspectorHeader, {
          title: _v0.editQuestion,
          quickActions: (0, _v1.jsx)(_v44, {
            startTime: _v8.compositionTiming.end
          })
        }), (0, _v1.jsxs)(_v5.Box, {
          display: "flex",
          flexDirection: "column",
          padding: "0 24px",
          gap: "xs",
          children: [(0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            gap: (0, _v10.rem)(6),
            children: [(0, _v1.jsx)(_v8.Header, {
              as: "h4",
              size: "xs",
              "data-testid": "poll-question-header",
              marginBottom: "xs",
              children: _v0.question
            }), (0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              children: [(0, _v1.jsx)(_v14.Textarea, {
                size: "sm",
                placeholder: _v0.whatAreThePrimaryColors,
                value: _v10,
                isInvalid: _v10.length > _v18.POLL_MAX_INPUT_LENGTH || 0 === _v10.length,
                onChange: _v17,
                "data-testid": "poll-question-text",
                "data-inputid": _v58,
                backgroundColor: "transparent",
                height: "5rem",
                paddingY: "0.4rem",
                overflow: "hidden",
                ..._v20(_v58)
              }), (0, _v1.jsx)(_v31.CharacterCounter, {
                currentLength: _v10.length,
                maxLength: _v18.POLL_MAX_INPUT_LENGTH,
                ..._v54(_v14 === _v58)
              })]
            })]
          }), (0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            gap: (0, _v10.rem)(6),
            children: [(0, _v1.jsx)(_v8.Header, {
              as: "h4",
              size: "xs",
              "data-testid": "poll-answers-header",
              marginBottom: "xs",
              children: (0, _v16.translate)({
                singular: "Answers",
                dictionary: {
                  es: {
                    singular: "Respuestas"
                  },
                  "de-DE": {
                    singular: "Antworten"
                  },
                  "fr-FR": {
                    singular: "Réponses"
                  },
                  "ja-JP": {
                    singular: "回答"
                  },
                  "ko-KR": {
                    singular: "답변"
                  },
                  "pt-BR": {
                    singular: "Respostas"
                  },
                  "zh-CN": {
                    singular: "回答"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              gap: (0, _v10.rem)(15),
              children: [(0, _v1.jsx)(_v2.DndContext, {
                sensors: _v7,
                collisionDetection: _v2.closestCenter,
                onDragEnd: _v0 => {
                  let {
                    active: _v1,
                    over: _v2
                  } = _v0;
                  if (_v2 && _v1.id !== _v2.id) {
                    let _v0 = _v12.findIndex(_v0 => _v0.id === _v1.id),
                      _v1 = _v12.findIndex(_v0 => _v0.id === _v2.id),
                      _v2 = (0, _v3.arrayMove)(_v12, _v0, _v1);
                    if (_v13(_v2), _v9) {
                      let _v0 = {
                        ..._v8,
                        answers: _v2
                      };
                      _v1((0, _v25.updateElementAction)({
                        ceId: _v8.id,
                        element: _v0
                      }));
                    }
                  }
                },
                children: (0, _v1.jsx)(_v3.SortableContext, {
                  items: _v12.map(_v0 => _v0.id),
                  strategy: _v3.verticalListSortingStrategy,
                  children: (0, _v1.jsx)(_v7.Flex, {
                    direction: "column",
                    gap: (0, _v10.rem)(15),
                    children: _v12.map(({
                      id: _v0,
                      text: _v1
                    }, _v2) => {
                      let _v3 = `answer-${_v2}`;
                      return (0, _v1.jsx)(_v57, {
                        id: _v0,
                        index: _v2,
                        text: _v1,
                        inputId: _v3,
                        placeholder: _v6[_v2],
                        shouldShowCharCounter: _v14 === _v3,
                        shouldShowDeleteButtons: _v22,
                        isCorrectAnswer: _v0 === _v8.correctAnswerId,
                        handleDeleteAnswer: _v19,
                        handleAnswerChange: _v18,
                        updateCorrectAnswer: _v21,
                        inputFocusProps: _v20
                      }, _v0);
                    })
                  })
                })
              }), _v12.length < _v18.LMS_MAX_ANSWERS_PER_POLL && (0, _v1.jsx)(_v6.Button, {
                leftIcon: (0, _v1.jsx)(_v15.PlusSmall, {}),
                variant: "secondary",
                onClick: () => {
                  if (!_v8?.id) return;
                  let _v0 = (0, _v30.generateRandomUInt32Id)(),
                    _v1 = {
                      id: _v0,
                      text: "",
                      analyticsId: _v0
                    };
                  _v13(_v0 => [..._v0, _v1]), _v2({
                    questionText: _v8.questionText,
                    answers: [..._v8.answers, _v1],
                    pollId: _v8.id,
                    pollRectWidth: _v8.rect.width,
                    pollStyleId: _v8.styleId,
                    font: _v8.font
                  });
                },
                "data-testid": _v19.testIds.polls.inspector.addOption,
                children: _v0.addAnswer
              })]
            })]
          }), (0, _v1.jsxs)(_v9.HStack, {
            marginTop: "lg",
            children: [(0, _v1.jsx)(_v13.Text, {
              variant: "body-md",
              children: _v0.pauseVideoWhenQuestionAppears
            }), (0, _v1.jsx)(_v11.Spacer, {}), (0, _v1.jsx)(_v12.Switch, {
              "data-testid": _v19.testIds.polls.inspector.pauseOnShowController,
              size: "sm",
              isChecked: _v8.pauseOnShow,
              onChange: _v0 => {
                let _v1 = _v0.target.checked;
                _v1((0, _v25.updateElementAction)({
                  ceId: _v8.id,
                  element: {
                    pauseOnShow: _v1
                  }
                }));
              }
            })]
          })]
        })]
      });
    };
}