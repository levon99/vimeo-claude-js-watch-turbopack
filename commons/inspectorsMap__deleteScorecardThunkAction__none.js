{
  "use strict";

  _v0.s(["inspectorsMap", () => _v109], 0);
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
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = () => (_v0, _v1) => {
    let _v2 = _v1(),
      _v3 = (0, _v66.scorecardTimeTriggerSelector)(_v2);
    _v3 && _v0((0, _v64.isEditingInteractiveOverlaySelector)(_v2) ? (0, _v64.removeTimeTriggerFromMainTimelineAction)({
      timeTriggerId: _v3.id
    }) : (0, _v65.deleteElementAction)({
      ceId: _v3.id
    }));
  };
  _v0.s(["deleteScorecardThunkAction", 0, _v67], 0);
  var _v68 = _v0.i(0);
  let _v69 = (0, _v60.forwardRef)((_v0, _v1) => (0, _v29.jsx)("svg", {
      ref: _v1,
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ..._v0,
      children: (0, _v29.jsx)("path", {
        d: "M11.8691 4.94824C12.3095 4.94849 12.666 5.3057 12.666 5.74609V10.5312C12.666 10.9716 12.3095 11.3289 11.8691 11.3291C11.4286 11.3291 11.0713 10.9718 11.0713 10.5312V5.74609C11.0713 5.30555 11.4286 4.94824 11.8691 4.94824ZM6.28516 5.34668C6.59665 5.03537 7.10166 5.03525 7.41309 5.34668L9.64062 7.57422C9.95198 7.88566 9.95187 8.39064 9.64062 8.70215L7.41309 10.9307C7.10167 11.2421 6.59665 11.242 6.28516 10.9307C5.97367 10.6192 5.97369 10.1142 6.28516 9.80273L7.15137 8.93652H2.66602V7.34082H7.15137L6.28516 6.47461C5.97368 6.16313 5.97368 5.65816 6.28516 5.34668Z",
        fill: "currentcolor"
      })
    })),
    _v70 = () => ({
      Delete: (0, _v43.translate)({
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
      })
    }),
    _v71 = () => {
      let _v0 = (0, _v60.useMemo)(_v70, []),
        _v1 = (0, _v68.useAppDispatch)(),
        _v2 = (0, _v68.useAppSelector)(_v65.scorecardTitleCompositionSelector),
        [_v3, _v4] = (0, _v60.useState)(!1),
        {
          selectScorecard: _v5
        } = (0, _v63.useScorecardOverlay)();
      return (0, _v29.jsxs)(_v45.Flex, {
        gap: "xs",
        p: "0.625rem .5rem",
        alignItems: "center",
        height: "2.5rem",
        borderRadius: "sm",
        width: "100%",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        cursor: "pointer",
        "data-testid": _v62.testIds.polls.inspector.overview.scorecard,
        onMouseEnter: () => _v4(!0),
        onMouseLeave: () => _v4(!1),
        onClick: _v0 => {
          _v0.stopPropagation(), _v5();
        },
        children: [(0, _v29.jsx)(_v45.Flex, {
          justifyContent: "center",
          alignItems: "center",
          children: (0, _v29.jsx)(_v69, {})
        }), (0, _v29.jsx)(_v39.Text, {
          variant: "heading-xs",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          children: _v2?.textContent ?? _v61.SCORECARD_TEMPLATE_DEFAULT_TEXTS.title
        }), (0, _v29.jsx)(_v51.Spacer, {}), _v3 && (0, _v29.jsxs)(_v47.Menu, {
          placement: "bottom",
          autoSelect: !1,
          children: [(0, _v29.jsx)(_v48.MenuButton, {
            as: _v46.IconButton,
            icon: (0, _v29.jsx)(_v54.EllipsisV, {}),
            variant: "tertiary",
            size: "xs",
            _groupHover: {
              display: "block"
            },
            onClick: _v0 => _v0.stopPropagation()
          }), (0, _v29.jsx)(_v50.MenuList, {
            children: (0, _v29.jsx)(_v49.MenuItem, {
              icon: (0, _v29.jsx)(_v55.TrashBin, {
                boxSize: "xs"
              }),
              color: "status-destructive-primary",
              onClick: _v0 => {
                _v0.stopPropagation(), _v1(_v67());
              },
              children: (0, _v29.jsx)(_v39.Text, {
                variant: "body-md",
                children: _v0.Delete
              })
            })
          })]
        })]
      });
    },
    _v72 = () => {
      let _v0 = (0, _v68.useAppSelector)(_v66.hasTimeTriggerScorecardSelector),
        _v1 = (0, _v68.useAppSelector)(_v66.hasQuizzesSelector),
        {
          addScorecard: _v2
        } = (0, _v63.useScorecardOverlay)(),
        _v3 = _v0 || !_v1,
        _v4 = (0, _v43.translate)({
          singular: "Add result screen",
          dictionary: {
            es: {
              singular: "Agregar pantalla de resultados"
            },
            "de-DE": {
              singular: "Ergebnisseite hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter un écran de résultat"
            },
            "ja-JP": {
              singular: "結果画面を追加"
            },
            "ko-KR": {
              singular: "결과 화면 추가"
            },
            "pt-BR": {
              singular: "Adicionar tela de resultados"
            },
            "zh-CN": {
              singular: "添加结果屏幕"
            }
          }
        }),
        _v5 = _v1 ? _v0 ? (0, _v43.translate)({
          singular: "Result screen already exists",
          dictionary: {
            es: {
              singular: "La pantalla de resultados ya existe"
            },
            "de-DE": {
              singular: "Ergebnisseite existiert bereits"
            },
            "fr-FR": {
              singular: "L'écran de résultat existe déjà"
            },
            "ja-JP": {
              singular: "結果画面はすでに存在します"
            },
            "ko-KR": {
              singular: "결과 화면이 이미 존재합니다."
            },
            "pt-BR": {
              singular: "A tela de resultado já existe"
            },
            "zh-CN": {
              singular: "结果屏幕已存在"
            }
          }
        }) : _v4 : (0, _v43.translate)({
          singular: "To add a Result screen, add a quiz question",
          dictionary: {
            es: {
              singular: "Para agregar una pantalla de Resultados, agregue una pregunta de cuestionario."
            },
            "de-DE": {
              singular: "Fügen Sie eine Quizfrage hinzu, um eine Ergebnisseite hinzuzufügen"
            },
            "fr-FR": {
              singular: "Pour ajouter un écran de résultat, ajoutez une question de quiz."
            },
            "ja-JP": {
              singular: "結果画面を追加するには、クイズの質問を追加してください。"
            },
            "ko-KR": {
              singular: "결과 화면을 추가하려면 퀴즈 질문을 추가하세요."
            },
            "pt-BR": {
              singular: "Para adicionar uma tela de resultados, acrescente uma pergunta ao questionário"
            },
            "zh-CN": {
              singular: "要添加结果屏幕，您需要添加一个测验问题"
            }
          }
        });
      return (0, _v29.jsxs)(_v29.Fragment, {
        children: [(0, _v29.jsxs)(_v57.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: "sm",
          children: [(0, _v29.jsx)(_v39.Text, {
            variant: "heading-xs",
            children: (0, _v43.translate)({
              singular: "Result screen",
              dictionary: {
                es: {
                  singular: "Pantalla de resultados"
                },
                "de-DE": {
                  singular: "Ergebnisseite"
                },
                "fr-FR": {
                  singular: "Écran de résultat"
                },
                "ja-JP": {
                  singular: "結果画面"
                },
                "ko-KR": {
                  singular: "결과 화면"
                },
                "pt-BR": {
                  singular: "Tela de resultados"
                },
                "zh-CN": {
                  singular: "结果屏幕"
                }
              }
            })
          }), (0, _v29.jsx)(_v58.Tooltip, {
            label: _v5,
            children: (0, _v29.jsx)(_v46.IconButton, {
              size: "sm",
              variant: "tertiary",
              "aria-label": _v4,
              "data-testid": _v62.testIds.polls.inspector.overview.addScorecard,
              icon: (0, _v29.jsx)(_v59.Plus, {}),
              onClick: _v2,
              isDisabled: _v3
            })
          })]
        }), _v0 && (0, _v29.jsx)(_v71, {})]
      });
    };
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = {
      backgroundColor: "fill-component-hover"
    },
    _v81 = {
      width: "1rem",
      height: "1rem"
    },
    _v82 = _v0 => {
      _v0.stopPropagation();
    },
    _v83 = () => {
      let _v0 = (0, _v68.useAppDispatch)(),
        _v1 = (0, _v68.useAppSelector)(_v3.selectedElementsIdsSelector),
        _v2 = (0, _v68.useAppSelector)(_v66.pollListSelector),
        _v3 = (0, _v68.useAppSelector)(_v64.isEditingInteractiveOverlaySelector),
        _v4 = (0, _v68.useAppSelector)(_v64.hasUnsavedOverlayChangesSelector),
        _v5 = (0, _v68.useAppSelector)(_v64.activeOverlayIdSelector),
        {
          alertDiscardOrSaveOverlayChanges: _v6
        } = (0, _v75.useAlerts)(),
        {
          toggleInspector: _v7
        } = (0, _v76.useInspector)(),
        {
          seek: _v8
        } = (0, _v73.useDragonfly)(),
        {
          editOverlay: _v9,
          switchToAnotherOverlay: _v10,
          closeOverlayEditor: _v11
        } = (0, _v74.useInteractiveOverlay)(),
        _v12 = (_v0, _v1) => {
          _v0((0, _v3.selectCEsAction)({
            ceIds: [_v0]
          })), _v7(_v4.InspectorType.POLL_EDIT), _v8(_v1);
        };
      return (0, _v29.jsxs)(_v30.Box, {
        display: "grid",
        height: "100%",
        alignContent: "start",
        children: [(0, _v29.jsx)(_v39.Text, {
          variant: "heading-xs",
          mb: "sm",
          children: (0, _v43.translate)({
            singular: "Questions",
            dictionary: {
              es: {
                singular: "Preguntas"
              },
              "de-DE": {
                singular: "Fragen"
              },
              "ja-JP": {
                singular: "質問"
              },
              "ko-KR": {
                singular: "질문"
              },
              "pt-BR": {
                singular: "Dúvidas"
              },
              "zh-CN": {
                singular: "问题"
              }
            }
          })
        }), (0, _v29.jsx)(_v40.VStack, {
          sx: _v79.ScrollerSX,
          overflowY: "auto",
          "data-testid": "poll-overview-list",
          children: _v2.map(({
            poll: _v0,
            overlayId: _v1,
            linkedElementId: _v2
          }, _v3) => {
            let _v4 = _v1.includes(_v0.id);
            return (0, _v29.jsxs)(_v45.Flex, {
              onClick: () => {
                let _v0 = _v1 && _v2,
                  _v1 = _v5 === _v1,
                  _v2 = _v3 && !_v1;
                if (_v0 && !_v1) {
                  let _v0 = {
                    overlayId: _v1,
                    linkedElementId: _v2,
                    selectedElements: [_v0.id],
                    selectedInspector: _v4.InspectorType.POLL_EDIT,
                    seekTo: _v0.compositionTiming.start
                  };
                  _v3 ? _v4 ? _v6({
                    onPrimaryClick: () => {
                      _v10({
                        saveChanges: !0,
                        switchTo: _v0
                      });
                    },
                    onSecondaryClick: () => {
                      _v10({
                        saveChanges: !1,
                        switchTo: _v0
                      });
                    }
                  }) : _v10({
                    saveChanges: !1,
                    switchTo: _v0
                  }) : _v9(_v0);
                  return;
                }
                if (_v2) return void (_v4 ? _v6({
                  onPrimaryClick: () => {
                    _v11({
                      saveChanges: !0,
                      afterCloseCallback: () => queueMicrotask(() => _v12(_v0.id, _v0.compositionTiming.start))
                    });
                  },
                  onSecondaryClick: () => {
                    _v11({
                      saveChanges: !1,
                      afterCloseCallback: () => queueMicrotask(() => _v12(_v0.id, _v0.compositionTiming.start))
                    });
                  }
                }) : _v11({
                  saveChanges: !1,
                  afterCloseCallback: () => queueMicrotask(() => _v12(_v0.id, _v0.compositionTiming.start))
                }));
                _v12(_v0.id, _v0.compositionTiming.start);
              },
              gap: "xs",
              p: "0.625rem .5rem",
              alignItems: "center",
              height: "2.5rem",
              borderRadius: "sm",
              width: "100%",
              _hover: _v80,
              cursor: "pointer",
              role: "group",
              ...(_v4 && _v80),
              "data-testid": `poll-question-${_v0.id}`,
              children: [(0, _v29.jsxs)(_v45.Flex, {
                justifyContent: "center",
                alignItems: "center",
                children: [_v1 ? (0, _v29.jsx)(_v56.OverlayTemplate, {
                  ..._v81
                }) : _v0.variant === _v44.POLL_VARIANT.POLL ? (0, _v29.jsx)(_v41.ChartGrowthAlt, {
                  ..._v81
                }) : (0, _v29.jsx)(_v78.QuizIcon, {}), (0, _v29.jsx)(_v39.Text, {
                  variant: "body-xs",
                  children: _v3 + 1
                })]
              }), (0, _v29.jsx)(_v39.Text, {
                variant: "heading-xs",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                children: _v0.questionText
              }), (0, _v29.jsx)(_v51.Spacer, {}), !_v1 && (0, _v29.jsxs)(_v47.Menu, {
                placement: "bottom",
                autoSelect: !1,
                children: [(0, _v29.jsx)(_v48.MenuButton, {
                  as: _v46.IconButton,
                  icon: (0, _v29.jsx)(_v54.EllipsisV, {}),
                  variant: "tertiary",
                  size: "xs",
                  display: "none",
                  _groupHover: {
                    display: "block"
                  },
                  onClick: _v82
                }), (0, _v29.jsxs)(_v50.MenuList, {
                  children: [(0, _v29.jsx)(_v49.MenuItem, {
                    icon: (0, _v29.jsx)(_v53.DropShadow, {
                      boxSize: "xs"
                    }),
                    onClick: _v0 => {
                      _v0.stopPropagation(), _v0((0, _v77.duplicateElementsThunkAction)([_v0]));
                    },
                    children: (0, _v29.jsx)(_v39.Text, {
                      variant: "body-md",
                      children: (0, _v43.translate)({
                        singular: "Duplicate",
                        dictionary: {
                          es: {
                            singular: "Duplicar"
                          },
                          "de-DE": {
                            singular: "Duplizieren"
                          },
                          "fr-FR": {
                            singular: "Dupliquer"
                          },
                          "ja-JP": {
                            singular: "重複"
                          },
                          "ko-KR": {
                            singular: "사본 만들기"
                          },
                          "pt-BR": {
                            singular: "Duplicar"
                          },
                          "zh-CN": {
                            singular: "复制"
                          }
                        }
                      })
                    })
                  }), (0, _v29.jsx)(_v49.MenuItem, {
                    icon: (0, _v29.jsx)(_v55.TrashBin, {
                      boxSize: "xs"
                    }),
                    color: "status-destructive-primary",
                    onClick: _v0 => {
                      _v0.stopPropagation(), _v0((0, _v65.deleteElementAction)({
                        ceId: _v0.id
                      }));
                    },
                    children: (0, _v29.jsx)(_v39.Text, {
                      variant: "body-md",
                      children: (0, _v43.translate)({
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
                      })
                    })
                  })]
                })]
              })]
            }, _v0.id);
          })
        }), (0, _v29.jsx)(_v52.Divider, {
          borderColor: "stroke",
          my: "4"
        }), (0, _v29.jsx)(_v72, {})]
      });
    };
  _v0.i(0);
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = {
      width: "100%",
      height: (0, _v33.rem)(32),
      justifyContent: "space-between"
    },
    _v90 = {
      width: (0, _v33.rem)(66),
      variant: "outlined",
      size: "sm"
    },
    _v91 = () => {
      let _v0 = (0, _v68.useAppDispatch)(),
        _v1 = (0, _v68.useAppSelector)(_v66.quizQuestionCountSelector),
        _v2 = (0, _v68.useAppSelector)(_v65.quizScorePassPercentageSelector),
        _v3 = (0, _v68.useAppSelector)(_v65.quizShowCorrectAnswerIfIncorrectSelectedSelector),
        _v4 = (0, _v68.useAppSelector)(_v65.quizShuffleAnswersSelector),
        _v5 = (0, _v68.useAppSelector)(_v65.quizQuestionProgressSelector),
        _v6 = (0, _v68.useAppSelector)(_v65.quizRetakesAmountSelector),
        [_v7, _v8] = (0, _v60.useState)(_v2),
        _v9 = Math.ceil(_v1 * _v2 / 100),
        _v10 = (0, _v87.shouldShowInDevelopmentFeature)("question_progress", !0);
      return (0, _v29.jsxs)(_v40.VStack, {
        alignItems: "flex-start",
        gap: "md",
        children: [(0, _v29.jsxs)(_v40.VStack, {
          alignItems: "flex-start",
          width: "100%",
          gap: "0",
          "data-testid": "passing-score",
          children: [(0, _v29.jsxs)(_v57.HStack, {
            ..._v89,
            children: [(0, _v29.jsx)(_v39.Text, {
              variant: "body-md",
              children: (0, _v43.translate)({
                singular: "Passing score",
                dictionary: {
                  es: {
                    singular: "Puntuación de aprobación"
                  },
                  "de-DE": {
                    singular: "Notwendige Punktzahl"
                  },
                  "fr-FR": {
                    singular: "Score de réussite"
                  },
                  "ja-JP": {
                    singular: "合格スコア"
                  },
                  "ko-KR": {
                    singular: "합격 점수"
                  },
                  "pt-BR": {
                    singular: "Nota de aprovação"
                  },
                  "zh-CN": {
                    singular: "通过分数"
                  }
                }
              })
            }), (0, _v29.jsxs)(_v85.NumberInput, {
              step: 1,
              min: 1,
              max: 100,
              precision: 0,
              format: _v0 => `${_v0}%`,
              value: _v7,
              onChange: (_v0, _v1) => {
                _v8(_v0), isNaN(_v1) || _v0((0, _v65.updateInteractiveQuizAction)({
                  passPercentage: _v1
                }));
              },
              ..._v90,
              children: [(0, _v29.jsx)(_v85.NumberInputField, {}), (0, _v29.jsxs)(_v85.NumberInputStepper, {
                children: [(0, _v29.jsx)(_v85.NumberIncrementStepper, {}), (0, _v29.jsx)(_v85.NumberDecrementStepper, {})]
              })]
            })]
          }), (0, _v29.jsx)(_v39.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: (0, _v43.translate)({
              singular: "{REQUIRED} out of {TOTAL} correct answers",
              replacements: {
                REQUIRED: _v9,
                TOTAL: _v1
              },
              dictionary: {
                es: {
                  singular: "{REQUIRED} de {TOTAL} respuestas correctas"
                },
                "de-DE": {
                  singular: "{REQUIRED} von {TOTAL} richtigen Antworten"
                },
                "fr-FR": {
                  singular: "{REQUIRED} sur {TOTAL} réponses correctes"
                },
                "ja-JP": {
                  singular: "{TOTAL}件中{REQUIRED}件が正解です"
                },
                "ko-KR": {
                  singular: "정답 {TOTAL}개 중 {REQUIRED}개"
                },
                "pt-BR": {
                  singular: "{REQUIRED} de {TOTAL} respostas corretas"
                },
                "zh-CN": {
                  singular: "{REQUIRED} 个正确答案，共 {TOTAL} 个"
                }
              }
            })
          })]
        }), (0, _v29.jsx)(_v52.Divider, {
          borderColor: "stroke"
        }), (0, _v29.jsxs)(_v40.VStack, {
          alignItems: "left",
          width: "100%",
          gap: 0,
          children: [(0, _v29.jsx)(_v39.Text, {
            variant: "heading-xs",
            children: (0, _v43.translate)({
              singular: "Quiz experience",
              dictionary: {
                es: {
                  singular: "Experiencia con el cuestionario"
                },
                "de-DE": {
                  singular: "Quiz-Erlebnis"
                },
                "fr-FR": {
                  singular: "Expérience de quiz"
                },
                "ja-JP": {
                  singular: "クイズ体験"
                },
                "ko-KR": {
                  singular: "퀴즈 경험"
                },
                "pt-BR": {
                  singular: "Experiência do questionário"
                },
                "zh-CN": {
                  singular: "测验体验"
                }
              }
            })
          }), (0, _v29.jsxs)(_v40.VStack, {
            width: "100%",
            gap: "sm",
            children: [(0, _v29.jsxs)(_v57.HStack, {
              ..._v89,
              children: [(0, _v29.jsx)(_v39.Text, {
                variant: "body-md",
                children: (0, _v43.translate)({
                  singular: "Show correct answer",
                  dictionary: {
                    es: {
                      singular: "Mostrar la respuesta correcta"
                    },
                    "de-DE": {
                      singular: "Richtige Antwort anzeigen"
                    },
                    "fr-FR": {
                      singular: "Afficher la bonne réponse"
                    },
                    "ja-JP": {
                      singular: "正解を表示"
                    },
                    "ko-KR": {
                      singular: "정답 표시"
                    },
                    "pt-BR": {
                      singular: "Mostrar resposta correta"
                    },
                    "zh-CN": {
                      singular: "显示正确答案"
                    }
                  }
                })
              }), (0, _v29.jsx)(_v86.Switch, {
                size: "md",
                "data-testid": _v62.testIds.polls.inspector.settings.showCorrectAnswerIfIncorrectSelected,
                isChecked: _v3,
                onChange: _v0 => {
                  _v0((0, _v65.updateInteractiveQuizAction)({
                    showCorrectAnswerIfIncorrectSelected: _v0.target.checked
                  }));
                }
              })]
            }), (0, _v29.jsxs)(_v57.HStack, {
              ..._v89,
              children: [(0, _v29.jsx)(_v39.Text, {
                variant: "body-md",
                children: (0, _v43.translate)({
                  singular: "Shuffle answers",
                  dictionary: {
                    es: {
                      singular: "Barajar las respuestas"
                    },
                    "de-DE": {
                      singular: "Antworten mischen"
                    },
                    "fr-FR": {
                      singular: "Mélanger les réponses"
                    },
                    "ja-JP": {
                      singular: "回答をシャッフルする"
                    },
                    "ko-KR": {
                      singular: "답변 순서 섞기"
                    },
                    "pt-BR": {
                      singular: "Embaralhar respostas"
                    },
                    "zh-CN": {
                      singular: "随机打乱答案"
                    }
                  }
                })
              }), (0, _v29.jsx)(_v86.Switch, {
                size: "md",
                "data-testid": _v62.testIds.polls.inspector.settings.shuffleAnswers,
                isChecked: _v4,
                onChange: _v0 => {
                  _v0((0, _v65.updateInteractiveQuizAction)({
                    shuffleAnswers: _v0.target.checked
                  }));
                }
              })]
            }), _v10 && (0, _v29.jsxs)(_v57.HStack, {
              ..._v89,
              children: [(0, _v29.jsx)(_v39.Text, {
                variant: "body-md",
                children: (0, _v43.translate)({
                  singular: "Question progress",
                  dictionary: {
                    es: {
                      singular: "Progreso de las preguntas"
                    },
                    "de-DE": {
                      singular: "Fragefortschritt"
                    },
                    "fr-FR": {
                      singular: "Progression des questions"
                    },
                    "ja-JP": {
                      singular: "質問の進行状況"
                    },
                    "ko-KR": {
                      singular: "질문 진행 상황"
                    },
                    "pt-BR": {
                      singular: "Progresso da pergunta"
                    },
                    "zh-CN": {
                      singular: "问题进度"
                    }
                  }
                })
              }), (0, _v29.jsx)(_v86.Switch, {
                size: "md",
                "data-testid": _v62.testIds.polls.inspector.settings.questionProgress,
                isChecked: _v5,
                onChange: _v0 => {
                  _v0((0, _v65.updateInteractiveQuizAction)({
                    questionProgress: _v0.target.checked
                  }));
                }
              })]
            }), (0, _v29.jsxs)(_v57.HStack, {
              ..._v89,
              children: [(0, _v29.jsx)(_v39.Text, {
                variant: "body-md",
                children: (0, _v43.translate)({
                  singular: "Limit number of retakes",
                  dictionary: {
                    es: {
                      singular: "Limitar el número de repeticiones"
                    },
                    "de-DE": {
                      singular: "Anzahl der Wiederholungen begrenzen"
                    },
                    "fr-FR": {
                      singular: "Limiter le nombre de reprises"
                    },
                    "ja-JP": {
                      singular: "再試行回数を制限する"
                    },
                    "ko-KR": {
                      singular: "재촬영 횟수 제한"
                    },
                    "pt-BR": {
                      singular: "Limitar o número de regravações"
                    },
                    "zh-CN": {
                      singular: "限制重考次数"
                    }
                  }
                })
              }), (0, _v29.jsx)(_v86.Switch, {
                size: "md",
                "data-testid": _v62.testIds.polls.inspector.settings.limitRetakes,
                isChecked: _v6 !== _v88.UNLIMITED_RETAKES_VALUE,
                onChange: _v0 => {
                  let _v1 = _v0.target.checked ? _v88.MAX_ALLOWED_RETAKES : _v88.UNLIMITED_RETAKES_VALUE;
                  (0, _v84.batch)(() => {
                    _v0((0, _v65.updateInteractiveQuizAction)({
                      retakesAmount: _v1
                    })), _v0((0, _v65.updateScorecardRetakesLeftTextThunkAction)(_v1));
                  });
                }
              })]
            }), _v6 !== _v88.UNLIMITED_RETAKES_VALUE && (0, _v29.jsxs)(_v57.HStack, {
              ..._v89,
              children: [(0, _v29.jsx)(_v39.Text, {
                variant: "body-md",
                children: (0, _v43.translate)({
                  singular: "Number of retakes allowed",
                  dictionary: {
                    es: {
                      singular: "Número de repeticiones permitidas"
                    },
                    "de-DE": {
                      singular: "Anzahl der zulässigen Wiederholungen"
                    },
                    "fr-FR": {
                      singular: "Nombre de reprises autorisées"
                    },
                    "ja-JP": {
                      singular: "再試行回数"
                    },
                    "ko-KR": {
                      singular: "허용되는 재촬영 횟수"
                    },
                    "pt-BR": {
                      singular: "Número de regravações permitidas"
                    },
                    "zh-CN": {
                      singular: "允许的重考次数"
                    }
                  }
                })
              }), (0, _v29.jsxs)(_v85.NumberInput, {
                defaultValue: _v88.UNLIMITED_RETAKES_VALUE,
                step: 1,
                min: _v88.MIN_ALLOWED_RETAKES,
                max: _v88.MAX_ALLOWED_RETAKES,
                maxWidth: (0, _v33.rem)(66),
                size: "sm",
                "data-testid": _v62.testIds.polls.inspector.settings.retakesAmount,
                isDisabled: _v6 === _v88.UNLIMITED_RETAKES_VALUE,
                value: _v6,
                onChange: (_v0, _v1) => {
                  isNaN(_v1) || (0, _v84.batch)(() => {
                    _v0((0, _v65.updateInteractiveQuizAction)({
                      retakesAmount: _v1
                    })), _v0((0, _v65.updateScorecardRetakesLeftTextThunkAction)(_v1));
                  });
                },
                children: [(0, _v29.jsx)(_v85.NumberInputField, {}), (0, _v29.jsxs)(_v85.NumberInputStepper, {
                  children: [(0, _v29.jsx)(_v85.NumberIncrementStepper, {}), (0, _v29.jsx)(_v85.NumberDecrementStepper, {})]
                })]
              })]
            })]
          })]
        })]
      });
    };
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = () => {
    let {
      createPoll: _v0
    } = (0, _v92.usePoll)();
    return (0, _v29.jsxs)(_v32.Center, {
      flexDirection: "column",
      h: "100%",
      gap: "1rem",
      children: [(0, _v29.jsxs)(_v40.VStack, {
        gap: "sm",
        maxWidth: "15.875rem",
        children: [(0, _v29.jsx)(_v41.ChartGrowthAlt, {
          height: 48,
          width: 48
        }), (0, _v29.jsx)(_v39.Text, {
          variant: "heading-md",
          children: (0, _v43.translate)({
            singular: "Add your first question",
            dictionary: {
              es: {
                singular: "Agregue su primera pregunta"
              },
              "de-DE": {
                singular: "Fügen Sie Ihre erste Frage hinzu"
              },
              "fr-FR": {
                singular: "Ajoutez votre première question"
              },
              "ja-JP": {
                singular: "最初の質問を追加"
              },
              "ko-KR": {
                singular: "첫 번째 질문을 추가하세요."
              },
              "pt-BR": {
                singular: "Faça sua primeira pergunta"
              },
              "zh-CN": {
                singular: "添加您的第一个问题"
              }
            }
          })
        }), (0, _v29.jsx)(_v39.Text, {
          variant: "body-md",
          color: "text-secondary",
          textAlign: "center",
          children: (0, _v43.translate)({
            singular: "Create a poll or make it a quiz by marking a correct answer. All your questions will appear here. ",
            dictionary: {
              es: {
                singular: "Cree una encuesta o conviértala en un cuestionario marcando una respuesta correcta. Todas sus preguntas aparecerán aquí. "
              },
              "de-DE": {
                singular: "Erstellen Sie eine Umfrage oder machen Sie ein Quiz daraus, indem Sie eine richtige Antwort markieren. Alle Ihre Fragen werden hier angezeigt. "
              },
              "fr-FR": {
                singular: "Créez un sondage ou transformez-le en questionnaire en indiquant la bonne réponse. Toutes vos questions apparaîtront ici. "
              },
              "ja-JP": {
                singular: "アンケートを作成するか、正解をマークしてクイズにすることができます。すべての質問がここに表示されます。 "
              },
              "ko-KR": {
                singular: "투표를 만들거나 정답을 표시하여 퀴즈로 만들어 보세요. 모든 질문이 여기에 표시됩니다. "
              },
              "pt-BR": {
                singular: "Crie uma enquete ou transforme-a em um questionário, marcando uma resposta correta. Todas as suas perguntas aparecerão aqui. "
              },
              "zh-CN": {
                singular: "创建投票，或通过标记正确答案将其设为测验。您的所有问题将显示在此处。 "
              }
            }
          })
        })]
      }), (0, _v29.jsxs)(_v31.Button, {
        variant: "primary",
        size: "sm",
        "data-testid": _v62.testIds.polls.inspector.addQuestion,
        onClick: () => {
          _v0({
            pollStyleId: _v88.DEFAULT_POLL_STYLE,
            addToStoryboard: !0,
            variant: _v44.POLL_VARIANT.QUIZ
          });
        },
        children: [(0, _v29.jsx)(_v42.PlusSmall, {
          height: "1.25rem",
          width: "1.25rem"
        }), " ", (0, _v43.translate)({
          singular: "Add question",
          dictionary: {
            es: {
              singular: "Agregar pregunta"
            },
            "de-DE": {
              singular: "Frage hinzufügen"
            },
            "fr-FR": {
              singular: "Ajoutez une question"
            },
            "ja-JP": {
              singular: "質問を追加"
            },
            "ko-KR": {
              singular: "질문 추가하기"
            },
            "pt-BR": {
              singular: "Adicionar pergunta"
            },
            "zh-CN": {
              singular: "添加问题"
            }
          }
        })]
      })]
    });
  };
  var _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0);
  let _v105 = _v100.GraphicsTag.OVERLAY_ELEMENTS,
    _v106 = (0, _v1.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v107 = (0, _v1.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v108 = (0, _v1.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v109 = {
      [_v4.InspectorType.MEDIA]: {
        component: _v17.default
      },
      [_v4.InspectorType.TEMPLATES]: {
        component: _v19.default
      },
      [_v4.InspectorType.GRAPHICS]: {
        component: _v14.default
      },
      [_v4.InspectorType.TEXT_ADD]: {
        component: _v7.default
      },
      [_v4.InspectorType.TEXT_EDIT]: {
        component: _v106,
        isApplicable: _v0 => (0, _v5.isTextElement)((0, _v3.firstSelectedElementSelector)(_v0))
      },
      [_v4.InspectorType.BUTTON_TEXT_EDIT]: {
        component: _v107,
        isApplicable: _v0 => (0, _v5.isButtonElement)((0, _v3.firstSelectedElementSelector)(_v0))
      },
      [_v4.InspectorType.MUSIC]: {
        component: _v18.default
      },
      [_v4.InspectorType.OVERLAYS]: {
        component: _v28.OverlaysInspector
      },
      [_v4.InspectorType.IFRAMES]: {
        component: _v27.IframesInspector
      },
      [_v4.InspectorType.HOTSPOTS]: {
        component: _v26.HotspotsInspector
      },
      [_v4.InspectorType.HOTSPOTS_SETTINGS]: {
        component: _v25.HotspotSettingsInspector,
        isApplicable: _v0 => (0, _v5.isInteractiveHotspot)((0, _v3.firstSelectedElementSelector)(_v0))
      },
      [_v4.InspectorType.POLLS]: {
        component: () => {
          let _v0 = !(0, _v68.useAppSelector)(_v66.hasPollOrQuizQuestionsSelector);
          return (0, _v29.jsxs)(_v93.Inspector, {
            children: [(0, _v29.jsx)(_v94.InspectorHeader, {
              title: (0, _v43.translate)({
                singular: "Polls and quizzes",
                dictionary: {
                  es: {
                    singular: "Encuestas y cuestionarios"
                  },
                  "de-DE": {
                    singular: "Umfragen und Quizfragen"
                  },
                  "fr-FR": {
                    singular: "Sondages et quiz"
                  },
                  "ja-JP": {
                    singular: "投票とクイズ"
                  },
                  "ko-KR": {
                    singular: "투표 및 퀴즈"
                  },
                  "pt-BR": {
                    singular: "Enquetes e questionários"
                  },
                  "zh-CN": {
                    singular: "调查和测验"
                  }
                }
              }),
              quickActions: _v0 ? null : (0, _v29.jsx)(_v95.NewPollMenu, {})
            }), _v0 ? (0, _v29.jsx)(_v96, {}) : (0, _v29.jsx)(_v30.Box, {
              paddingX: "md",
              height: "100%",
              children: (0, _v29.jsxs)(_v35.Tabs, {
                variant: "primary",
                width: "100%",
                size: "sm",
                height: "100%",
                children: [(0, _v29.jsxs)(_v36.TabList, {
                  mb: "lg",
                  height: (0, _v33.rem)(40),
                  children: [(0, _v29.jsx)(_v34.Tab, {
                    "data-testid": _v62.testIds.polls.inspector.overviewTab,
                    children: (0, _v43.translate)({
                      singular: "Overview",
                      dictionary: {
                        es: {
                          singular: "Resumen"
                        },
                        "de-DE": {
                          singular: "Übersicht"
                        },
                        "fr-FR": {
                          singular: "Aperçu"
                        },
                        "ja-JP": {
                          singular: "概要"
                        },
                        "ko-KR": {
                          singular: "개요"
                        },
                        "pt-BR": {
                          singular: "Visão geral"
                        },
                        "zh-CN": {
                          singular: "概览"
                        }
                      }
                    })
                  }), (0, _v29.jsx)(_v34.Tab, {
                    "data-testid": _v62.testIds.polls.inspector.settingsTab,
                    children: (0, _v43.translate)({
                      singular: "Settings",
                      dictionary: {
                        es: {
                          singular: "Configuración"
                        },
                        "de-DE": {
                          singular: "Einstellungen"
                        },
                        "fr-FR": {
                          singular: "Paramètres"
                        },
                        "ja-JP": {
                          singular: "設定"
                        },
                        "ko-KR": {
                          singular: "설정"
                        },
                        "pt-BR": {
                          singular: "Configurações"
                        },
                        "zh-CN": {
                          singular: "设置"
                        }
                      }
                    })
                  }), (0, _v29.jsx)(_v35.TabIndicator, {})]
                }), (0, _v29.jsxs)(_v38.TabPanels, {
                  height: `calc(100% - ${(0, _v33.rem)(150)})`,
                  children: [(0, _v29.jsx)(_v37.TabPanel, {
                    height: "100%",
                    children: (0, _v29.jsx)(_v83, {})
                  }), (0, _v29.jsx)(_v37.TabPanel, {
                    children: (0, _v29.jsx)(_v91, {})
                  })]
                })]
              })
            })]
          });
        }
      },
      [_v4.InspectorType.POLL_EDIT]: {
        component: _v24.EditPollInspector,
        isApplicable: _v0 => (0, _v5.isPollElement)((0, _v3.firstSelectedElementSelector)(_v0))
      },
      [_v4.InspectorType.COLOR_PALETTE]: {
        component: _v12.default
      },
      [_v4.InspectorType.FONT_EDIT]: {
        component: _v13.default,
        isApplicable: _v0 => (0, _v5.isTextElement)((0, _v3.firstSelectedElementSelector)(_v0))
      },
      [_v4.InspectorType.POLL_FONT_EDIT]: {
        component: _v13.default,
        isApplicable: _v0 => (0, _v5.isPollElement)((0, _v3.firstSelectedElementSelector)(_v0))
      },
      [_v4.InspectorType.BUTTON_FONT_EDIT]: {
        component: _v13.default,
        isApplicable: _v0 => (0, _v5.isButtonElement)((0, _v3.firstSelectedElementSelector)(_v0))
      },
      [_v4.InspectorType.BUTTON_TEXT_ADD]: {
        component: _v23.ButtonAddTextInspector
      },
      [_v4.InspectorType.SHAPES]: {
        component: () => {
          let _v0 = (0, _v68.useAppSelector)(_v65.brandSecondaryColorSelector),
            {
              handleAddButtonFromLibrary: _v1
            } = (0, _v98.useButton)(),
            {
              createOrReplaceAndAddHotspotFromGraphic: _v2
            } = (0, _v99.useHotspot)(),
            _v3 = (0, _v68.useAppSelector)(_v65.orientationSelector),
            _v4 = (0, _v60.useRef)(1),
            {
              data: _v5
            } = (0, _v101.useFetchGraphicsCategoriesQuery)({
              tag: _v105
            }),
            [_v6, {
              data: _v7,
              isFetching: _v8
            }] = (0, _v101.useLazyFetchGraphicsQuery)(),
            _v9 = (0, _v60.useCallback)(() => {
              _v1({
                preset: {
                  rect: {
                    x: 0,
                    y: 0,
                    width: 1,
                    height: 1
                  },
                  backgroundColor: _v0,
                  textContent: "",
                  ..._v97.NO_ACTION_PRESET
                },
                shouldAddElement: !0,
                shouldUseBrandColors: !1,
                draggableData: void 0
              });
            }, [_v0, _v1]),
            _v10 = _v5 ? Object.values(_v5)[0]?.id : null;
          (0, _v60.useEffect)(function () {
            if (_v10) {
              if (!_v7) return void _v6({
                categoryId: _v10,
                page: _v4.current,
                tag: _v105
              });
              _v7.hasNextPage && (_v6({
                page: _v4.current + 1,
                categoryId: _v10,
                tag: _v105
              }), _v4.current++);
            }
          }, [_v4, _v7, _v6, _v10]);
          let _v11 = (0, _v60.useMemo)(() => [..._v97.BUTTON_HOTSPOT_SHAPES_PRESETS.map(_v102.createGraphicItemFromButtonPreset), ...(_v7?.items ?? [])], [_v7?.items]),
            _v12 = (0, _v60.useCallback)(async (_v0, _v1) => {
              let _v2 = _v97.BUTTON_HOTSPOT_SHAPES_PRESETS.find(({
                  id: _v0
                }) => _v0 === _v0.id),
                _v3 = !_v1;
              return _v2 ? _v1({
                preset: _v2.preset[_v3],
                shouldAddElement: _v3,
                draggableData: _v1,
                shouldUseBrandColors: !1
              }) : _v2(_v0, _v1, {
                shouldAddElement: _v3,
                ..._v97.NO_ACTION_PRESET
              });
            }, [_v2, _v1, _v3]);
          return (0, _v29.jsxs)(_v93.Inspector, {
            children: [(0, _v29.jsx)(_v94.InspectorHeader, {
              title: (0, _v43.translate)({
                singular: "Graphics",
                dictionary: {
                  es: {
                    singular: "Gráficos"
                  },
                  "de-DE": {
                    singular: "Grafiken"
                  },
                  "fr-FR": {
                    singular: "Graphiques"
                  },
                  "ja-JP": {
                    singular: "グラフィック"
                  },
                  "ko-KR": {
                    singular: "그래픽"
                  },
                  "pt-BR": {
                    singular: "Gráficos"
                  },
                  "zh-CN": {
                    singular: "图形"
                  }
                }
              })
            }), (0, _v29.jsx)(_v104.InspectorPaddedRow, {
              padRight: !0,
              children: (0, _v29.jsx)(_v31.Button, {
                leftIcon: (0, _v29.jsx)(_v59.Plus, {}),
                variant: "primary",
                onClick: _v9,
                "data-testid": _v62.testIds.shapes.addBackgroundButton,
                width: "100%",
                size: "sm",
                children: (0, _v43.translate)({
                  singular: "Add background",
                  dictionary: {
                    es: {
                      singular: "Agregar fondo"
                    },
                    "de-DE": {
                      singular: "Hintergrund hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Ajouter un arrière-plan"
                    },
                    "ja-JP": {
                      singular: "背景を追加"
                    },
                    "ko-KR": {
                      singular: "배경 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionar plano de fundo"
                    },
                    "zh-CN": {
                      singular: "添加背景"
                    }
                  }
                })
              })
            }), (0, _v29.jsx)(_v30.Box, {
              mt: "8px",
              px: "8px",
              height: "100%",
              children: (0, _v29.jsx)(_v103.ImageLibraryItemsView, {
                testIdPrefix: "shapes",
                items: _v11,
                onImageSelect: _v12,
                isLoading: _v8 || !_v7
              })
            })]
          });
        }
      },
      [_v4.InspectorType.TEXT_ANIMATIONS]: {
        component: _v20.default,
        isApplicable: _v0 => (0, _v5.isTextElement)((0, _v3.firstSelectedElementSelector)(_v0))
      },
      [_v4.InspectorType.MEDIA_ANIMATIONS]: {
        component: _v16.default,
        isApplicable: _v0 => {
          let _v1 = (0, _v3.firstSelectedElementSelector)(_v0);
          return (0, _v5.isGraphicElement)(_v1) || (0, _v5.isMediaElement)(_v1);
        }
      },
      [_v4.InspectorType.TRANSCRIPT]: {
        component: _v21.default
      },
      [_v4.InspectorType.BRAND_KIT]: {
        component: _v10.default
      },
      [_v4.InspectorType.BRAND_LOGOS]: {
        component: _v11.default
      },
      [_v4.InspectorType.BRAND_COLORS]: {
        component: _v8.default
      },
      [_v4.InspectorType.BRAND_FONTS]: {
        component: _v9.default
      },
      [_v4.InspectorType.BRAND_INTRO]: {
        component: _v15.default
      },
      [_v4.InspectorType.BRAND_OUTRO]: {
        component: _v15.default
      },
      [_v4.InspectorType.ADD_BRAND_FONT]: {
        component: _v6.default
      },
      [_v4.InspectorType.MEDIA_TRANSITIONS]: {
        component: _v22.default,
        isApplicable: _v0 => (0, _v3.selectedTransitionsIdsSelector)(_v0).length > 0
      },
      [_v4.InspectorType.SCORECARD]: {
        component: _v108,
        isApplicable: _v0 => {
          let _v1 = (0, _v3.firstSelectedElementSelector)(_v0);
          return (0, _v5.isTimeTriggerElement)(_v1) && _v1.action.type === _v2.TimeTriggerActionType.SHOW_OVERLAY;
        }
      }
    };
}