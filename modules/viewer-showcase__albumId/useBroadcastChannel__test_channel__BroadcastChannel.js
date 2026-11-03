{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useBroadcastChannel", 0, function ({
    name: _v0,
    isActive: _v1 = !0
  }) {
    let [_v2, _v3] = (0, _v1.useState)(!1),
      _v4 = (0, _v1.useRef)(null),
      _v5 = (0, _v1.useRef)([]),
      _v6 = (0, _v1.useMemo)(() => {
        try {
          return new window.BroadcastChannel("test_channel").close(), !0;
        } catch (_v0) {
          return !1;
        }
      }, []),
      _v7 = (0, _v1.useMemo)(() => !!(_v1 && _v2 && _v4.current), [_v1, _v2]),
      _v8 = (0, _v1.useCallback)(_v0 => (_v5.current.push(_v0), () => {
        _v5.current.splice(_v5.current.indexOf(_v0), 1);
      }), []),
      _v9 = (0, _v1.useCallback)(_v0 => {
        _v2 && _v4.current && (_v4.current.postMessage(_v0), _v5.current.forEach(_v0 => _v0(_v0)));
      }, [_v2]),
      _v10 = (0, _v1.useCallback)(() => {
        if ("BroadcastChannel" in window && _v6) {
          if (!_v4.current) {
            let _v0 = new window.BroadcastChannel(_v0);
            _v0.onmessage = _v0 => {
              _v5.current.forEach(_v0 => _v0(_v0.data, _v0));
            }, _v0.onmessageerror = _v0 => {
              console.error(_v0);
            }, _v4.current = _v0, _v3(!0);
          }
        } else console.error("BroadcastChannel is not available in this browser");
      }, [_v0, _v6]),
      _v11 = (0, _v1.useCallback)(() => {
        _v4.current && (_v3(!1), _v4.current.close(), _v4.current = null, _v5.current = []);
      }, []);
    return (0, _v1.useEffect)(() => {
      _v1 && _v10();
    }, [_v10, _v1]), (0, _v1.useMemo)(() => ({
      isChannelActive: _v7,
      broadcastChannel: _v4.current,
      subscribe: _v8,
      sendChannelMessage: _v9,
      closeChannel: _v11
    }), [_v7, _v8, _v9, _v11]);
  }]);
}