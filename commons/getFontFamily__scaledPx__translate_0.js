{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, _v1) => _v0 * _v1 + "px",
    _v4 = _v0 => `${_v0}${_v0.includes(_v2.BRAND_INDICATOR) ? ` ,${_v0.split(_v2.BRAND_INDICATOR)[0]}` : ""}`;
  _v0.s(["getFontFamily", 0, _v4, "scaledPx", 0, _v3], 0);
  let _v5 = ({
      backgroundColor: _v0,
      color: _v1,
      fontFamily: _v2,
      styleId: _v3,
      scale: _v4,
      opacity: _v5,
      transform: _v6,
      orientation: _v7,
      zIndex: _v8,
      appendTranslateZero: _v9 = !1
    }) => {
      let {
          general: _v10,
          container: _v11,
          hasBackgroundColor: _v12
        } = _v2.POLL_STYLES[_v3][_v7],
        {
          fontSize: _v13,
          spacing: _v14
        } = _v10,
        {
          borderRadius: _v15,
          padding: _v16,
          paddingTop: _v17,
          paddingBottom: _v18
        } = _v11,
        _v19 = _v15 ?? _v10.borderRadius,
        _v20 = _v17 ?? _v16 ?? _v14,
        _v21 = _v18 ?? _v16 ?? _v14,
        _v22 = _v12 && _v0 ? _v0 : _v2.TRANSPARENT,
        _v23 = _v4(_v2);
      return {
        style: {
          padding: _v3(_v16, _v4),
          paddingTop: _v3(_v20, _v4),
          paddingBottom: _v3(_v21, _v4),
          borderRadius: _v3(_v19, _v4),
          fontFamily: _v23,
          backgroundColor: _v22,
          color: _v1,
          zIndex: _v8,
          opacity: String(_v5),
          transform: _v6 ?? (_v9 ? "translate(0)" : ""),
          display: "flex",
          flexDirection: "column",
          fontSize: _v3(_v13, _v4),
          lineHeight: _v3(_v13 * _v2.LINE_HEIGHT_RATIO, _v4)
        }
      };
    },
    _v6 = _v1.default.div.attrs(_v5).withConfig({
      displayName: "FixedRatioPoll.style__PollContainer",
      componentId: "sc-3b1ee00e-0"
    })``,
    _v7 = ({
      orientation: _v0,
      scale: _v1,
      styleId: _v2,
      questionBackgroundColor: _v3
    }) => {
      let _v4 = _v2.POLL_STYLES[_v2][_v0],
        {
          hasQuestionBackgroundColor: _v5,
          general: _v6
        } = _v4,
        {
          fontSize: _v7,
          spacing: _v8
        } = _v6,
        {
          textAlign: _v9 = "start",
          padding: _v10,
          marginBottom: _v11,
          borderRadius: _v12
        } = _v4.question,
        _v13 = _v5 ? _v3 : _v2.TRANSPARENT,
        _v14 = _v12 ?? _v6.borderRadius;
      return {
        style: {
          textAlign: _v9,
          padding: _v3(_v10 ?? _v8, _v1),
          marginBottom: _v3(_v11 ?? _v8, _v1),
          fontSize: _v3(_v7, _v1),
          lineHeight: _v3(_v7 * _v2.LINE_HEIGHT_RATIO, _v1),
          backgroundColor: _v13,
          borderRadius: _v3(_v14, _v1)
        }
      };
    },
    _v8 = _v1.default.div.attrs(_v7).withConfig({
      displayName: "FixedRatioPoll.style__QuestionContainer",
      componentId: "sc-3b1ee00e-1"
    })``,
    _v9 = ({
      scale: _v0,
      styleId: _v1,
      orientation: _v2
    }) => {
      let _v3 = _v2.POLL_STYLES[_v1][_v2],
        _v4 = _v3.answers,
        _v5 = _v4.flexDirection ?? "column";
      return {
        style: {
          gap: _v3(_v4.gap ?? _v3.general.spacing, _v0),
          display: "flex",
          flexDirection: _v5,
          flexGrow: "1"
        }
      };
    },
    _v10 = _v1.default.div.attrs(_v9).withConfig({
      displayName: "FixedRatioPoll.style__AnswersContainer",
      componentId: "sc-3b1ee00e-2"
    })``,
    _v11 = ({
      scale: _v0,
      styleId: _v1,
      backgroundColor: _v2,
      color: _v3,
      opacity: _v4,
      orientation: _v5
    }) => {
      let _v6 = _v2.POLL_STYLES[_v1][_v5],
        {
          general: _v7,
          answer: _v8
        } = _v6,
        _v9 = _v8.fontSize ?? _v7.fontSize,
        _v10 = _v8.padding ?? _v7.spacing,
        _v11 = _v8.paddingLeft ?? _v8.padding ?? _v7.spacing,
        _v12 = _v8.borderRadius ?? _v7.borderRadius;
      return {
        style: {
          fontSize: _v3(_v9, _v0),
          lineHeight: _v3(_v9 * _v2.LINE_HEIGHT_RATIO, _v0),
          padding: _v3(_v10, _v0),
          paddingLeft: _v3(_v11, _v0),
          paddingBottom: _v3(_v10 / _v2.LINE_HEIGHT_RATIO, _v0),
          backgroundColor: _v2,
          color: _v3,
          borderRadius: _v3(_v12, _v0),
          flexGrow: "1",
          flexShrink: "1",
          flexBasis: "50%",
          textAlign: _v6.answer.textAlign ?? "start",
          ...(void 0 !== _v4 && {
            opacity: String(_v4)
          })
        }
      };
    },
    _v12 = _v1.default.div.attrs(_v11).withConfig({
      displayName: "FixedRatioPoll.style__AnswerContainer",
      componentId: "sc-3b1ee00e-3"
    })``;
  _v0.s(["AnswerContainer", 0, _v12, "AnswersContainer", 0, _v10, "PollContainer", 0, _v6, "QuestionContainer", 0, _v8, "getAnswerContainerStyles", 0, _v11, "getAnswersContainerStyles", 0, _v9, "getPollContainerStyles", 0, _v5, "getQuestionContainerStyles", 0, _v7], 0), _v0.s(["getPollScale", 0, function ({
    width: _v0,
    pollStyleId: _v1,
    frameWidth: _v2,
    orientation: _v3
  }) {
    return _v0 * _v2 / _v2.POLL_STYLES[_v1][_v3].width;
  }, "handleNewlines", 0, _v0 => _v0 ? _v0.replace(/\n/g, `
${_v2.NO_BRAKE_SPACE}`) : _v2.NO_BRAKE_SPACE], 0);
}