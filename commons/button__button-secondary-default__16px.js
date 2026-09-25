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
    _v19 = _v0.i(0);
  let _v20 = ({
      title: _v0,
      timecode: _v1,
      thumbnailUrl: _v2,
      onClick: _v3
    }) => (0, _v1.jsxs)(_v3.Box, {
      as: "button",
      type: "button",
      onClick: _v3,
      width: "100%",
      bg: "button-secondary-default",
      borderRadius: "16px",
      padding: "6px 12px 6px 6px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      border: "none",
      textAlign: "left",
      _hover: {
        bg: "button-secondary-hover"
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "stroke"
      },
      "data-testid": "moment-card",
      children: [(0, _v1.jsx)(_v4.Flex, {
        bg: "fill-component-hover",
        borderRadius: "12px",
        width: "32px",
        height: "32px",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexShrink: 0,
        "aria-hidden": "true",
        children: _v2 ? (0, _v1.jsx)(_v3.Box, {
          as: "img",
          src: _v2,
          alt: "",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }) : (0, _v1.jsx)(_v18.Video, {
          boxSize: "16px",
          color: "text-primary"
        })
      }), (0, _v1.jsx)(_v16.Text, {
        color: "text-primary",
        fontFamily: "heading",
        fontSize: "heading-xs",
        lineHeight: 1.4,
        noOfLines: 2,
        flex: "1 1 0",
        minWidth: "0px",
        overflowWrap: "anywhere",
        children: _v0
      }), (0, _v1.jsx)(_v3.Box, {
        bg: "fill-component-hover",
        borderRadius: "8px",
        padding: "4px 8px",
        flexShrink: 0,
        children: (0, _v1.jsx)(_v16.Text, {
          color: "text-secondary",
          fontFamily: "heading",
          fontSize: "body-sm",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          children: (0, _v19.secondsToTimecode)(_v1)
        })
      }), (0, _v1.jsx)(_v17.ArrowRightSmall, {
        boxSize: "20px",
        color: "text-primary",
        flexShrink: 0
      })]
    }),
    _v21 = ({
      children: _v0,
      onClick: _v1
    }) => (0, _v1.jsxs)(_v3.Box, {
      as: "button",
      type: "button",
      onClick: _v1,
      width: "100%",
      bg: "button-secondary-default",
      borderRadius: "12px",
      padding: "8px 12px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      cursor: "pointer",
      border: "none",
      textAlign: "left",
      _hover: {
        bg: "button-secondary-hover"
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "stroke"
      },
      "data-testid": "question-row",
      children: [(0, _v1.jsx)(_v16.Text, {
        color: "text-primary",
        fontSize: "body-md",
        lineHeight: 1.4,
        flex: "1 1 0",
        minWidth: "0px",
        overflowWrap: "anywhere",
        whiteSpace: "normal",
        textAlign: "left",
        children: _v0
      }), (0, _v1.jsx)(_v17.ArrowRightSmall, {
        boxSize: "20px",
        color: "text-primary",
        flexShrink: 0
      })]
    });
  _v0.s(["QuestionRow", 0, _v21], 0), _v0.s(["QuestionDisplay", 0, ({
    onMomentSelect: _v0,
    onAskQuestion: _v1,
    showPrompt: _v2 = !0,
    isUiRefresh: _v3 = !1
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(!0),
      {
        question: _v8,
        answer: _v9,
        answerOrigin: _v10,
        questionSource: _v11,
        moments: _v12,
        relatedQuestions: _v13
      } = (0, _v8.useQuestionContext)(),
      _v14 = (0, _v10.useAiGenerationStore)(_v0 => _v0.getGenerationId),
      [_v15] = (0, _v2.useState)(() => _v14("ask_ai")),
      {
        sendViewSuggestedAIAnswerEvent: _v16,
        sendAskAiAnswerShownEvent: _v17,
        sendSelectSuggestedAIQuestionEvent: _v18,
        sendPlayMomentClickEvent: _v19,
        sendAskAQuestionEvent: _v20
      } = (0, _v7.useGetSvvManageBpEvents)(),
      _v21 = _v0 => {
        _v20(_v0), _v1(_v0, "typed");
      };
    return (0, _v2.useEffect)(function () {
      _v16(_v8, _v9), null !== _v10 && null !== _v11 && _v17(_v8, _v9, _v10, _v11);
    }, []), (0, _v2.useEffect)(function () {
      _v7(!0);
    }, [_v8]), (0, _v1.jsxs)(_v15.ResponsiveBox, {
      height: "100%",
      alignItems: "flex-start",
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column",
      onMouseOver: () => _v5(!0),
      onMouseLeave: () => _v5(!1),
      children: [_v3 ? (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v3.Box, {
          flex: "1 1 auto",
          minHeight: "0px",
          overflowY: "auto",
          width: "100%",
          paddingBottom: "56px",
          sx: {
            scrollbarWidth: "thin"
          },
          children: [_v8 ? (0, _v1.jsx)(_v4.Flex, {
            justifyContent: "flex-end",
            width: "100%",
            pt: "16px",
            mb: "24px",
            px: "16px",
            children: (0, _v1.jsx)(_v3.Box, {
              bg: "button-secondary-default",
              borderRadius: "12px 0px 12px 12px",
              px: "12px",
              py: "8px",
              maxWidth: "320px",
              width: "100%",
              children: (0, _v1.jsx)(_v3.Box, {
                color: "text-primary",
                fontSize: "body-md",
                lineHeight: 1.4,
                children: _v8
              })
            })
          }) : null, (0, _v1.jsx)(_v3.Box, {
            px: "16px",
            width: "100%",
            children: (0, _v1.jsx)(_v4.Flex, {
              flexDirection: "column",
              gap: "12px",
              width: "100%",
              role: "alert",
              "aria-live": "polite",
              children: _v9.split(/\n{2,}/).filter(_v0 => _v0.trim().length > 0).map((_v0, _v1) => {
                let _v2 = `${_v1}-${_v0}`;
                return (0, _v1.jsx)(_v3.Box, {
                  color: "text-primary",
                  fontSize: "body-md",
                  lineHeight: 1.4,
                  whiteSpace: "pre-wrap",
                  children: _v0
                }, _v2);
              })
            })
          }), _v12.length > 0 ? (0, _v1.jsx)(_v4.Flex, {
            px: "16px",
            pt: "20px",
            width: "100%",
            flexDirection: "column",
            gap: "12px",
            children: _v12.map(_v0 => {
              let _v1 = _v0.quoteTitle ?? _v9.playMoment;
              return (0, _v1.jsx)(_v20, {
                title: _v1,
                timecode: _v0.timecode,
                thumbnailUrl: _v0.thumbnailUrl,
                onClick: () => {
                  _v19(_v0.timecode, _v1), _v0?.(_v0.timecode);
                }
              }, _v0.timecode);
            })
          }) : null, (0, _v1.jsx)(_v3.Box, {
            pt: "20px",
            pl: "16px",
            pb: "12px",
            children: (0, _v1.jsx)(_v14.QuickActions, {
              showThumbs: !0,
              ratedFeature: "ask_ai",
              generationId: _v15,
              align: "start"
            })
          })]
        })
      }) : (0, _v1.jsxs)(_v12.Section, {
        children: [(0, _v1.jsxs)(_v12.SectionTitle, {
          children: [(0, _v1.jsx)(_v12.SectionLabel, {
            children: _v8
          }), (0, _v1.jsx)(_v14.QuickActions, {
            showThumbs: _v4,
            ratedFeature: "ask_ai",
            generationId: _v15
          })]
        }), (0, _v1.jsx)(_v6.Description, {
          role: "alert",
          "aria-live": "polite",
          children: _v9
        })]
      }), !_v3 && _v12.length > 0 ? (0, _v1.jsx)(_v12.Section, {
        pt: 0,
        children: _v12.map(_v0 => {
          let _v1 = _v0.quoteTitle ?? _v9.playMoment;
          return (0, _v1.jsx)(_v11.Choice.PlayMoment, {
            isPrimary: !0,
            onClick: () => {
              _v19(_v0.timecode, _v1), _v0?.(_v0.timecode);
            },
            children: (0, _v1.jsx)(_v6.TruncateTextWrapper, {
              children: _v1
            })
          }, _v0.timecode);
        })
      }) : null, _v3 ? _v13.length > 0 || _v2 ? (0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        mt: "auto",
        width: "100%",
        px: "16px",
        pb: "16px",
        flexShrink: 0,
        children: [(0, _v1.jsx)(_v3.Box, {
          position: "absolute",
          top: "-48px",
          left: "0",
          right: "0",
          height: "48px",
          background: "linear-gradient(to top, var(--vimeo-colors-fill-surface), transparent)",
          pointerEvents: "none",
          "aria-hidden": "true"
        }), (0, _v1.jsxs)(_v3.Box, {
          bg: "fill-component",
          p: "8px",
          borderRadius: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          children: [_v13.length > 0 && (0, _v1.jsxs)(_v3.Box, {
            as: "button",
            type: "button",
            onClick: () => _v7(_v0 => !_v0),
            color: "text-primary",
            fontFamily: "heading",
            fontSize: "heading-xs",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            bg: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0 4px",
            "aria-expanded": _v6,
            _hover: {
              "& .related-chevron": {
                color: "text-primary"
              }
            },
            children: [_v9.related, (0, _v1.jsx)(_v5.ChevronDownSmall, {
              className: "related-chevron",
              boxSize: "16px",
              color: "text-secondary",
              transform: _v6 ? "none" : "rotate(-90deg)",
              transition: "transform 0.15s ease",
              "aria-hidden": "true"
            })]
          }), _v13.length > 0 && _v6 && (0, _v1.jsx)(_v4.Flex, {
            flexDirection: "column",
            gap: "12px",
            alignSelf: "stretch",
            children: _v13.map((_v0, _v1) => {
              let _v2 = `${_v0}-${_v1}`;
              return (0, _v1.jsx)(_v21, {
                onClick: () => {
                  _v1(_v0, "related_question"), _v18({
                    copy: _v0,
                    isRelated: !0
                  });
                },
                children: _v0
              }, _v2);
            })
          }), _v2 && (0, _v1.jsx)(_v13.PromptInput, {
            onSubmit: _v21,
            isUiRefresh: !0
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          textAlign: "center",
          color: "text-secondary",
          fontSize: "text-xs",
          lineHeight: 1.2,
          pt: "8px",
          px: "4px",
          children: _v9.aiCanBeWrong
        })]
      }) : null : _v13.length > 0 ? (0, _v1.jsx)(_v3.Box, {
        mt: "auto",
        width: "100%",
        children: (0, _v1.jsxs)(_v12.Section, {
          children: [(0, _v1.jsx)(_v12.SectionLabel, {
            children: _v9.related
          }), (0, _v1.jsxs)(_v4.Flex, {
            flexDirection: "column",
            gap: "8px",
            alignSelf: "stretch",
            children: [_v13.map(_v0 => (0, _v1.jsx)(_v11.Choice, {
              shouldWrap: !0,
              onClick: () => {
                _v1(_v0, "related_question"), _v18({
                  copy: _v0,
                  isRelated: !0
                });
              },
              children: _v0
            }, _v0)), _v2 && (0, _v1.jsx)(_v13.PromptInput, {
              onSubmit: _v21
            })]
          })]
        })
      }) : null]
    });
  }], 0);
}