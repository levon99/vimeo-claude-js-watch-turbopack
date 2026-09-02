{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["usePlayer", 0, function (_v0, _v1, _v2, _v3, _v4 = !0, _v5 = "540p", _v6 = 1, _v7, _v8) {
    let {
        PlayerConstructor: _v9,
        playerType: _v10
      } = (0, _v1.useContext)(_v2.PlayerContext),
      _v11 = (0, _v1.useRef)(!1),
      [_v12, _v13] = (0, _v1.useState)(null),
      _v14 = (0, _v1.useRef)(null),
      _v15 = (0, _v1.useRef)(_v8);
    (0, _v1.useEffect)(() => {
      _v15.current = _v8;
    }, [_v8]);
    let [_v16, _v17] = (0, _v1.useReducer)(_v0 => _v0 + 1, 0),
      _v18 = (0, _v1.useCallback)(() => {
        if (_v11.current = !0, _v10 === _v3.PlayerType.BarebonePlayer) new _v9(_v0.current, _v3).then(_v0 => {
          _v0.loop = _v4, _v0.quality = _v5, _v0.volume = _v6, _v13(_v0), _v14.current = _v0, _v11.current = !1;
        }).catch(() => {
          _v11.current = !1, _v15.current?.();
        });else {
          let _v0 = new _v9(_v0.current, _v3, !0, _v7 || {});
          _v13(_v0), _v14.current = _v0, _v11.current = !1;
        }
      }, [_v9, _v0, _v3, _v10, _v4, _v5, _v6, _v7]),
      _v19 = (0, _v1.useCallback)(() => {
        _v14.current && (_v14.current.unload?.(), _v13(null), _v14.current = null);
      }, []),
      _v20 = (0, _v1.useCallback)(() => {
        _v19(), _v17();
      }, [_v19]);
    return (0, _v1.useEffect)(function () {
      if (_v12?.videoId !== Number(_v1) && (!_v14.current || !_v12 || !_v3) && _v9 && _v2 && _v0.current && _v1 && _v3 && !_v11.current) {
        _v0.current.innerHTML = "";
        let _v0 = setTimeout(_v18, 0);
        return () => {
          clearTimeout(_v0);
        };
      }
    }, [_v9, _v12, _v12?.videoId, _v16, _v0, _v1, _v3, _v2, _v4, _v5, _v18]), (0, _v1.useEffect)(function () {
      return () => {
        _v14.current && (_v14.current.destroy?.(), _v13(null), _v14.current = null);
      };
    }, []), {
      player: _v12,
      flushPlayer: _v19,
      forceReload: _v20
    };
  }], 0);
}