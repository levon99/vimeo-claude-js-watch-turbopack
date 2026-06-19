{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["ClipInterractionsLimitError", 0, function ({
    iconSize: _v0
  }) {
    return (0, _v1.jsxs)(_v2.Flex, {
      w: "100%",
      h: "100%",
      gap: "8px",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      children: [(0, _v1.jsx)(_v4.CircleExclamation, {
        boxSize: _v0,
        color: "text-primary"
      }), (0, _v1.jsx)(_v3.Paragraph, {
        p: "0 12px",
        textAlign: "center",
        size: "md",
        color: "text-primary",
        children: _v5.qnaInterractionsLimitError
      })]
    });
  }], 0), _v0.s(["ViewerQnAPanels", 0, {
    ANSWER: "answer",
    ASK_QUESTION: "ask-question",
    LOADER: "loader",
    QUESTIONS: "questions",
    AI_ACTIVATION: "ai_activation",
    LOGIN_REQUIRED: "login_required"
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["ErrorState", 0, ({
    error: _v0,
    onRetry: _v1
  }) => (0, _v1.jsxs)(_v2.Flex, {
    w: "100%",
    h: "100%",
    gap: "12px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    children: [(0, _v1.jsx)(_v4.CircleExclamation, {
      boxSize: "xl",
      color: "text-primary"
    }), (0, _v1.jsx)(_v3.Paragraph, {
      p: "12px",
      textAlign: "center",
      color: "text-primary",
      children: `${_v7.errorOccurred}${_v0 ? `: ${_v0}.` : "."}`
    }), (0, _v1.jsx)(_v6.Button, {
      variant: "secondary",
      onClick: _v1,
      children: _v7.refresh
    })]
  })], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.i(0);
  var _v15 = _v0.i(0);
  let _v16 = ({
    ..._v0
  }) => (0, _v1.jsx)(_v2.Flex, {
    w: "100%",
    h: "100%",
    alignItems: "center",
    justifyContent: "center",
    ..._v0
  });
  var _v17 = (0, _v10.default)(_v12.Box).withConfig({
    displayName: "ViewerQnA.styles___StyledBox",
    componentId: "sc-3977fb16-0"
  })`${_v0 => _v0.$_css}`;
  (0, _v10.default)(_v12.Box).withConfig({
    displayName: "ViewerQnA.styles___StyledBox2",
    componentId: "sc-3977fb16-1"
  })`${_v15.VIEWER_QNA_ANSWER_PLACEHOLDER_ANIMATION}`;
  var _v18 = (0, _v10.default)(_v13.Input).withConfig({
    displayName: "ViewerQnA.styles___StyledInput",
    componentId: "sc-3977fb16-2"
  })`
        &:disabled {
          pointer-events: none;
          opacity: 60%;
        }
      `;
  _v0.s(["LoaderWrapper", 0, _v16, "QuestionInput", 0, ({
    isPlayer: _v0 = !1,
    isLoading: _v1,
    ..._v2
  }) => {
    let _v3 = (0, _v11.useRef)(null);
    return (0, _v11.useEffect)(() => {
      _v0 && window.addEventListener("message", _v0 => {
        "componentVisibilityChange" === _v0.data.event && _v0.data.data && _v3.current?.focus();
      });
    }, []), (0, _v1.jsx)(_v18, {
      alignSelf: "flex-end",
      ref: _v3,
      sx: {
        paddingRight: "40px",
        ...(_v1 ? {
          overflow: "hidden",
          textOverflow: "ellipsis"
        } : {})
      },
      ..._v2
    });
  }, "ResponsiveWrapper", 0, ({
    aiThinking: _v0,
    isPlayer: _v1 = !1,
    ..._v2
  }) => (0, _v1.jsx)(_v17, {
    w: "100%",
    h: "100%",
    flex: "1 0 auto",
    maxH: "100%",
    minH: "0",
    borderRadius: "1rem",
    ..._v2,
    $_css: _v0 ? "" : _v1 ? `
      background-color: transparent;
    ` : ""
  }), "ViewerQnAHeaderWrapper", 0, ({
    ..._v0
  }) => (0, _v1.jsx)(_v14.HStack, {
    borderBottom: "0.5pt solid",
    borderBottomColor: "stroke",
    maxH: "80px",
    ..._v0
  })], 0), _v0.s(["AiActivationPanel", 0, () => (0, _v1.jsxs)(_v16, {
    flexDirection: "column",
    p: "16px",
    children: [(0, _v1.jsx)(_v8.Spinner, {
      size: "xl"
    }), (0, _v1.jsx)(_v9.Text, {
      marginTop: "16px",
      fontSize: "16px",
      textAlign: "center",
      color: "text-primary",
      variant: "body-xl",
      children: _v7.aiIsAnalyzing
    })]
  })], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ({
      maxWidth: _v0,
      bgOffset: _v1 = 0
    }) => (0, _v1.jsx)(_v20.motion.div, {
      style: {
        width: _v0,
        height: "200%",
        opacity: "100%",
        borderRadius: "inherit",
        position: "relative",
        bottom: "50%",
        filter: "blur(16px)"
      },
      initial: {
        left: -(1.5 * _v0 - _v1)
      },
      animate: {
        left: 1.5 * _v0 + _v1,
        opacity: [0, .3, .7, .5, .1, 0],
        transition: {
          duration: 2,
          repeatType: "loop",
          ease: "linear",
          repeat: 1 / 0
        }
      },
      children: (0, _v1.jsx)(_v12.Box, {
        w: "200%",
        h: "200%",
        bg: _v15.SHIMMER_GRADIENT
      })
    }),
    _v22 = ({
      ..._v0
    }) => (0, _v1.jsx)(_v12.Box, {
      borderRadius: "8px",
      bg: "background-blur",
      overflow: "hidden",
      ..._v0,
      children: _v0.maxWidth && _v0.bgOffset && (0, _v1.jsx)(_v21, {
        maxWidth: _v0.maxWidth,
        bgOffset: _v0.bgOffset
      })
    });
  _v0.s(["AskQuestionPanel", 0, () => {
    let [_v0, _v1] = (0, _v11.useState)(),
      _v2 = (0, _v11.useRef)(null);
    return (0, _v11.useLayoutEffect)(() => {
      _v1(_v2.current?.offsetWidth);
    }, []), (0, _v1.jsx)(_v2.Flex, {
      ref: _v2,
      w: "100%",
      h: "100%",
      p: "16px",
      flexDirection: "column",
      justifyContent: "space-between",
      "data-testid": "ask-question-panel",
      children: (0, _v1.jsxs)(_v19.VStack, {
        gap: "8px",
        w: "100%",
        alignItems: "flex-start",
        children: [(0, _v1.jsx)(_v22, {
          h: "16px",
          w: "70%",
          maxWidth: _v0,
          bgOffset: 15
        }), (0, _v1.jsx)(_v22, {
          h: "16px",
          w: "100%",
          maxWidth: _v0,
          bgOffset: 30
        }), (0, _v1.jsx)(_v22, {
          h: "16px",
          w: "70%",
          maxWidth: _v0,
          bgOffset: 45
        }), (0, _v1.jsx)(_v22, {
          h: "16px",
          w: "60%",
          maxWidth: _v0,
          bgOffset: 60
        })]
      })
    });
  }], 0);
  var _v23 = _v0.i(0);
  _v0.s(["LoginRequiredPanel", 0, ({
    onLoginRequired: _v0
  }) => ((0, _v11.useEffect)(() => {
    _v0();
  }, []), (0, _v1.jsxs)(_v2.Flex, {
    h: "100%",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    children: [(0, _v1.jsx)(_v23.InfoCircle, {
      boxSize: "md",
      fill: "text-primary"
    }), (0, _v1.jsx)(_v3.Paragraph, {
      children: _v7.youMustBeLoggedIn
    }), (0, _v1.jsx)(_v6.Button, {
      onClick: _v0,
      children: _v7.logIn
    })]
  }))], 0);
}