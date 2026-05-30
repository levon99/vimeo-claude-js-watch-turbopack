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
    _v10 = _v0.i(0);
  function _v11(_v0) {
    return _v0.trim().length > 0 && _v0.trim().length <= _v8.interactionToolsConfig.POLLS.MAX_QUESTION_LENGTH;
  }
  _v0.s(["PollQuestionField", 0, function ({
    onQuestionChange: _v0,
    question: _v1,
    hasSubmitError: _v2,
    onValidate: _v3
  }) {
    let [_v4, _v5] = (0, _v2.useState)(!1);
    (0, _v2.useEffect)(() => {
      _v5(_v2);
    }, [_v2]);
    let _v6 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v11(_v0.target.value);
        _v5(!_v1), _v3?.(_v1), _v0(_v0);
      }, [_v0, _v3]),
      _v7 = _v4 && !_v11(_v1);
    return (0, _v1.jsxs)(_v4.InputGroup, {
      display: "flex",
      flexDirection: "column",
      gap: (0, _v5.rem)(8),
      children: [(0, _v1.jsx)(_v6.Text, {
        variant: "body-xl",
        fontSize: "text-sm",
        children: _v9.T_QUESTION
      }), (0, _v1.jsx)(_v7.Textarea, {
        className: (0, _v10.createDomName)("poll-form-question"),
        tabIndex: 1,
        minHeight: (0, _v5.rem)(120),
        maxHeight: (0, _v5.rem)(200),
        resize: "vertical",
        placeholder: _v9.T_ASK_YOUR_VIEWERS_QUESTION,
        value: _v1,
        isInvalid: _v7,
        onChange: _v6
      }), (0, _v1.jsx)(_v3.Box, {
        position: "relative",
        height: (0, _v5.rem)(12),
        children: _v1.length ? (0, _v1.jsxs)(_v6.Text, {
          variant: "body-sm",
          position: "absolute",
          width: "100%",
          align: "right",
          lineHeight: (0, _v5.rem)(14),
          color: _v7 ? "status-destructive-primary" : "text-secondary",
          children: [_v1.trim().length, " / ", _v8.interactionToolsConfig.POLLS.MAX_QUESTION_LENGTH]
        }) : null
      })]
    });
  }]);
}