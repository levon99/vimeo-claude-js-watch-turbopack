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
    _v15 = _v0.i(0);
  let _v16 = ({
      ..._v0
    }) => (0, _v1.jsx)(_v18, {
      fontSize: "14px",
      fontWeight: "700",
      whiteSpace: "normal",
      textAlign: "left",
      variant: "body-xl",
      ..._v0
    }),
    _v17 = ({
      ..._v0
    }) => (0, _v1.jsx)(_v15.Text, {
      color: "text-primary",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      whiteSpace: "pre-wrap",
      variant: "body-xl",
      ..._v0
    });
  var _v18 = (0, _v14.default)(_v15.Text).withConfig({
    displayName: "QuestionDisplay.style___StyledText",
    componentId: "sc-a231d6db-0"
  })`
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    `;
  _v0.s(["QuestionDisplay", 0, ({
    onMomentSelect: _v0,
    onAskQuestion: _v1,
    showPrompt: _v2 = !0
  }) => {
    let [_v3, _v4] = (0, _v2.useState)(!1),
      {
        question: _v5,
        answer: _v6,
        moments: _v7,
        relatedQuestions: _v8
      } = (0, _v6.useQuestionContext)(),
      _v9 = (0, _v8.useAiGenerationStore)(_v0 => _v0.getGenerationId),
      [_v10] = (0, _v2.useState)(() => _v9("ask_ai")),
      {
        sendViewSuggestedAIAnswerEvent: _v11,
        sendSelectSuggestedAIQuestionEvent: _v12,
        sendPlayMomentClickEvent: _v13,
        sendAskAQuestionEvent: _v14
      } = (0, _v5.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v11(_v5, _v6);
    }, []), (0, _v1.jsxs)(_v13.ResponsiveBox, {
      height: "100%",
      alignItems: "flex-start",
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column",
      onMouseOver: () => _v4(!0),
      onMouseLeave: () => _v4(!1),
      children: [(0, _v1.jsxs)(_v10.Section, {
        children: [(0, _v1.jsxs)(_v10.SectionTitle, {
          children: [(0, _v1.jsx)(_v10.SectionLabel, {
            children: _v5
          }), (0, _v1.jsx)(_v12.QuickActions, {
            showThumbs: _v3,
            ratedFeature: "ask_ai",
            generationId: _v10
          })]
        }), (0, _v1.jsx)(_v17, {
          role: "alert",
          "aria-live": "polite",
          children: _v6
        })]
      }), _v7.length > 0 ? (0, _v1.jsx)(_v10.Section, {
        pt: 0,
        children: _v7.map(_v0 => {
          let _v1 = _v0.quoteTitle ?? _v7.playMoment;
          return (0, _v1.jsx)(_v9.Choice.PlayMoment, {
            isPrimary: !0,
            onClick: () => {
              _v13(_v0.timecode, _v1), _v0?.(_v0.timecode);
            },
            children: (0, _v1.jsx)(_v16, {
              children: _v1
            })
          }, _v0.timecode);
        })
      }) : null, _v8.length > 0 ? (0, _v1.jsx)(_v3.Box, {
        mt: "auto",
        width: "100%",
        children: (0, _v1.jsxs)(_v10.Section, {
          children: [(0, _v1.jsx)(_v10.SectionLabel, {
            children: _v7.related
          }), (0, _v1.jsxs)(_v4.Flex, {
            flexDirection: "column",
            gap: "8px",
            alignSelf: "stretch",
            children: [_v8.map((_v0, _v1) => (0, _v1.jsx)(_v9.Choice, {
              shouldWrap: !0,
              onClick: () => {
                _v1(_v0), _v12({
                  copy: _v0,
                  isRelated: !0
                });
              },
              children: _v0
            }, `question-${_v1}`)), _v2 && (0, _v1.jsx)(_v11.PromptInput, {
              onSubmit: _v0 => {
                _v14(_v0), _v1(_v0);
              }
            })]
          })]
        })
      }) : null]
    });
  }], 0);
}