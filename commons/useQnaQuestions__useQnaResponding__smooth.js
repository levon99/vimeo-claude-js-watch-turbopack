{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9(_v0, _v1) {
    let _v2 = (0, _v3.useMemo)(() => Object.values(_v1).filter(_v0 => _v0.state === _v7.EQuestionState.ASKED || _v0.state === _v7.EQuestionState.ANSWERING), [_v1]),
      _v3 = (0, _v3.useMemo)(() => Object.values(_v0).filter(_v0 => _v0.state === _v7.EQuestionState.PENDING), [_v0]),
      _v4 = (0, _v3.useMemo)(() => Object.values({
        ..._v0,
        ..._v1
      }).filter(_v0 => _v0.state === _v7.EQuestionState.ARCHIVED), [_v0, _v1]);
    return {
      activeQuestions: _v2,
      pendingQuestions: _v3,
      archivedQuestions: _v4,
      count: _v2.length + _v3.length + _v4.length
    };
  }
  _v0.s(["useQnaQuestions", 0, _v9, "useQnaResponding", 0, function () {
    let {
        activeSessionQuestions: _v0,
        activeSessionPendingQuestions: _v1
      } = (0, _v2.useManager)(_v6.QnAManager),
      [_v2, _v3] = (0, _v3.useState)(null),
      [_v4, _v5] = (0, _v3.useState)(null),
      [_v6, _v7] = (0, _v3.useState)(null),
      _v8 = (0, _v3.useCallback)((_v0, _v1) => {
        _v5(_v0.id), _v3(_v0.state), _v7(_v1);
        let _v2 = _v1.parentElement,
          _v3 = _v2?.parentElement?.parentElement,
          _v4 = _v3.scrollTop > _v2.offsetTop,
          _v5 = _v2.offsetTop + _v2.clientHeight > _v3.scrollTop + _v3.clientHeight;
        (_v4 || _v5) && setTimeout(() => (0, _v8.scrollElementIntoView)(_v1, {
          behavior: "smooth",
          block: _v4 ? "start" : _v5 ? "end" : "center"
        }));
      }, []),
      _v9 = (0, _v3.useCallback)(() => {
        _v5(null), _v3(null), _v7(null);
      }, []);
    return (0, _v3.useEffect)(() => {
      let _v0 = {
        ..._v0,
        ..._v1
      }[_v4];
      _v0 && _v2 === _v0.state || _v9();
    }, [_v9, _v0, _v1, _v4, _v2]), {
      selectedQuestionId: _v4,
      selectedQuestionState: _v2,
      selectedQuestionElement: _v6,
      onSelectedQuestion: _v8,
      onDeselectQuestion: _v9
    };
  }], 0);
  var _v10 = _v0.i(0);
  _v0.s(["PanelQnaIcon", 0, function ({
    isActive: _v0,
    isManagementAccessed: _v1,
    qnaContext: {
      activeSession: _v2,
      isEventModerated: _v3,
      activeSessionQuestions: _v4,
      activeSessionPendingQuestions: _v5
    } = (0, _v2.useManager)(_v6.QnAManager)
  }) {
    let {
        initialState: {
          renderAt: _v6
        }
      } = (0, _v10.useLiveGlobals)(),
      _v7 = (0, _v3.useRef)(_v6 + 100),
      [_v8, _v9] = (0, _v3.useState)(!1),
      {
        pendingQuestions: _v10,
        activeQuestions: _v11
      } = _v9(_v5, _v4),
      _v12 = _v1 && _v3 ? _v10 : _v11,
      _v13 = _v12[_v12.length - 1];
    return (0, _v3.useEffect)(() => {
      _v9(_v0 => {
        if (_v13) if (_v0) return _v7.current = _v13.createdAt, !1;else return _v13.createdAt > _v7.current;
        if (_v2) {
          let _v0 = _v2.startedAt || _v2.createdAt;
          if (_v0) _v7.current = _v0;else if (_v0 > _v7.current !== _v0) return !0;
        }
        return !1;
      });
    }, [_v0, _v13, _v2]), (0, _v1.jsx)(_v5.IconNotification, {
      isVisible: _v8,
      children: (0, _v1.jsx)(_v4.ReviewQuestion, {})
    });
  }], 0);
}