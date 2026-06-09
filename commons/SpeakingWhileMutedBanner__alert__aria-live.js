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
    _v12 = _v0.i(0);
  _v0.s(["SpeakingWhileMutedBanner", 0, function (_v0) {
    let _v1 = (0, _v2.useScope)(),
      {
        audio: _v2,
        mediaActions: _v3
      } = (0, _v2.useManager)(_v10.LocalMediaManager),
      [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(!1),
      _v8 = (0, _v3.useRef)(void 0);
    (0, _v3.useEffect)(() => {
      let _v0 = _v1.subscribeToSignals(_v0 => {
        _v0.type === _v11.ELiveSignal.USER_TALKING_WHILE_MUTED && (_v5(!0), _v8.current && clearTimeout(_v8.current), _v8.current = setTimeout(() => {
          _v5(!1), _v7(!1);
        }, 0));
      });
      return () => {
        _v0(), _v8.current && clearTimeout(_v8.current);
      };
    }, [_v1]), (0, _v3.useEffect)(() => {
      !_v2.isMuted && (queueMicrotask(() => {
        _v5(!1), _v7(!1);
      }), _v8.current && clearTimeout(_v8.current));
    }, [_v2.isMuted]);
    let _v9 = (0, _v3.useCallback)(() => {
        _v3.setAudioMuted(!1);
      }, [_v3]),
      _v10 = (0, _v3.useCallback)(() => {
        _v7(!0);
      }, []);
    return !_v6 && _v2.isMuted && _v4 ? (0, _v1.jsx)(_v4.Alert, {
      ..._v0,
      role: "alert",
      "aria-live": "assertive",
      status: "error",
      size: "sm",
      width: "fit-content",
      alignItems: "center",
      paddingX: (0, _v9.rem)(16),
      paddingY: (0, _v9.rem)(10),
      children: (0, _v1.jsxs)(_v7.Flex, {
        align: "center",
        gap: (0, _v9.rem)(8),
        children: [(0, _v1.jsxs)(_v5.AlertDescription, {
          margin: 0,
          textStyle: "body-md",
          children: [_v12.T_TRYING_TO_SPEAK_YOUR_MIC_IS_OFF, " ", (0, _v1.jsx)(_v8.Link, {
            variant: "inline-primary",
            color: "status-destructive-primary",
            cursor: "pointer",
            onClick: _v9,
            children: _v12.T_UNMUTE
          })]
        }), (0, _v1.jsx)(_v6.CloseButton, {
          variant: "minimal",
          size: "xs",
          "aria-label": _v12.T_DISMISS_NOTICE,
          onClick: _v10
        })]
      })
    }) : null;
  }]);
}