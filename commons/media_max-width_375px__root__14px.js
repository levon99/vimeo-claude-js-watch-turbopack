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
  function _v11({
    pollContext: {
      polls: _v0,
      activePollId: _v1
    } = (0, _v4.useManager)(_v7.PollManager),
    qnaContext: {
      activeSession: _v2
    } = (0, _v4.useManager)(_v8.QnAManager, ({
      activeSession: _v0
    }) => [_v0])
  }) {
    let _v3 = (0, _v6.useRef)(null),
      _v4 = (0, _v6.useRef)(null);
    return (0, _v6.useEffect)(() => {
      let _v0 = _v3.current,
        _v1 = Object.values(_v0).find(_v0 => _v0.id === _v1) ?? null;
      _v0?.id !== _v1?.id && (_v3.current = _v1, (0, _v9.postPageMessage)(_v10.EInteractionEmbedSignal.ACTIVE_POLL_CHANGED, _v1 ? (0, _v5.default)(_v1) : null, !0));
    }, [_v0, _v1]), (0, _v6.useEffect)(() => {
      let _v0 = _v4.current;
      _v0?.id !== _v2?.id && (_v4.current = _v2, (0, _v9.postPageMessage)(_v10.EInteractionEmbedSignal.ACTIVE_QNA_CHANGED, _v2 ? (0, _v5.default)(_v2) : null, !0));
    }, [_v2]), null;
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  function _v14() {
    return _v13.browserConfig.IS_IN_IFRAME ? (0, _v1.jsx)(_v12.Global, {
      styles: {
        "@media (max-width: 375px)": {
          ":root": {
            fontSize: "14px"
          }
        },
        "@media (max-width: 300px)": {
          ":root": {
            fontSize: "12px"
          }
        }
      }
    }) : null;
  }
  _v0.s(["InteractionToolsAmbient", 0, function () {
    return (0, _v3.useInteractionToolsConfigUpdater)(), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v14, {}), (0, _v1.jsx)(_v11, {}), (0, _v1.jsx)(_v2.SimpleNotifications, {})]
    });
  }], 0);
}