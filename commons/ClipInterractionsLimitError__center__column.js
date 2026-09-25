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
}