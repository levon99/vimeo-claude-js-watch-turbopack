{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (_v0, _v1) => {
    for (let [_v0, _v1] of Object.entries(_v1)) void 0 !== _v1 && (_v0.style[_v0] = _v1);
  };
  _v0.s(["measurePoll", 0, function ({
    question: _v0,
    orientation: _v1,
    answers: _v2,
    styleId: _v3,
    font: _v4
  }) {
    let _v5 = document.createElement("div"),
      _v6 = _v2.POLL_STYLES[_v3][_v1];
    _v6(_v5, {
      ...(0, _v4.getPollContainerStyles)({
        backgroundColor: "transparent",
        color: "transparent",
        styleId: _v3,
        scale: 1,
        fontFamily: (0, _v1.getFontFamily)(_v4),
        orientation: _v1
      }).style,
      position: "absolute",
      width: (0, _v3.scaledPx)(_v6.width, 1),
      zIndex: void 0
    });
    let _v7 = document.createElement("div");
    _v7.innerText = (0, _v5.handleNewlines)(_v0), _v6(_v7, (0, _v4.getQuestionContainerStyles)({
      scale: 1,
      styleId: _v3,
      orientation: _v1,
      questionBackgroundColor: "transparent"
    }).style), _v5.appendChild(_v7);
    let _v8 = document.createElement("div");
    _v6(_v8, (0, _v4.getAnswersContainerStyles)({
      scale: 1,
      styleId: _v3,
      orientation: _v1
    }).style);
    let _v9 = (0, _v4.getAnswerContainerStyles)({
      scale: 1,
      styleId: _v3,
      orientation: _v1,
      backgroundColor: "transparent",
      color: "transparent"
    }).style;
    _v2.forEach(_v0 => {
      let _v1 = document.createElement("div");
      _v1.innerText = _v0.text, _v6(_v1, _v9), _v8.appendChild(_v1);
    }), _v5.appendChild(_v8), document.body.appendChild(_v5);
    let {
      width: _v10,
      height: _v11
    } = _v5.getBoundingClientRect();
    return _v5.remove(), {
      height: _v11 / 1,
      width: _v10 / 1
    };
  }]);
}