{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useBroadcastChannel", 0, (_v0, _v1) => {
    let _v2 = (0, _v1.useRef)(null),
      _v3 = _v2.current,
      [_v4, _v5] = (0, _v1.useState)(!1),
      _v6 = (0, _v1.useRef)(void 0);
    _v6.current = _v1;
    let _v7 = (0, _v1.useCallback)(_v0 => {
      _v3?.postMessage(_v0);
    }, [_v3]);
    return (0, _v1.useEffect)(() => {
      try {
        return _v2.current = new BroadcastChannel(_v0), _v2.current.onmessage = _v0 => {
          let _v1 = _v2.current;
          _v6.current?.(_v0.data, _v1);
        }, _v5(!0), () => {
          _v2.current?.close(), _v5(!1);
        };
      } catch (_v0) {
        console.error("Broadcast channel not supported");
      }
    }, [_v0]), {
      broadcastChannel: _v3,
      isOpen: _v4,
      closeBroadcastChannel: () => {
        _v3?.close(), _v5(!1);
      },
      emitMessage: _v7
    };
  }]);
}