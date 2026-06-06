{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["usePlayer", 0, function (_v0, _v1, _v2, _v3, _v4 = !0, _v5 = "540p", _v6 = 1, _v7) {
    let {
        PlayerConstructor: _v8,
        playerType: _v9
      } = (0, _v1.useContext)(_v2.PlayerContext),
      _v10 = (0, _v1.useRef)(!1),
      [_v11, _v12] = (0, _v1.useState)(null),
      _v13 = (0, _v1.useRef)(null),
      [_v14, _v15] = (0, _v1.useReducer)(_v0 => _v0 + 1, 0),
      _v16 = (0, _v1.useCallback)(() => {
        if (_v10.current = !0, _v9 === _v3.PlayerType.BarebonePlayer) new _v8(_v0.current, _v3).then(_v0 => {
          _v0.loop = _v4, _v0.quality = _v5, _v0.volume = _v6, _v12(_v0), _v13.current = _v0, _v10.current = !1;
        }).catch(() => {
          _v10.current = !1;
        });else {
          let _v0 = new _v8(_v0.current, _v3, !0, _v7 || {});
          _v12(_v0), _v13.current = _v0, _v10.current = !1;
        }
      }, [_v8, _v0, _v3, _v9, _v4, _v5, _v6, _v7]),
      _v17 = (0, _v1.useCallback)(() => {
        _v13.current && (_v13.current.unload?.(), _v12(null), _v13.current = null);
      }, []),
      _v18 = (0, _v1.useCallback)(() => {
        _v17(), _v15();
      }, [_v17]);
    return (0, _v1.useEffect)(function () {
      if (_v11?.videoId !== Number(_v1) && (!_v13.current || !_v11 || !_v3) && _v8 && _v2 && _v0.current && _v1 && _v3 && !_v10.current) {
        _v0.current.innerHTML = "";
        let _v0 = setTimeout(_v16, 0);
        return () => {
          clearTimeout(_v0);
        };
      }
    }, [_v8, _v11, _v11?.videoId, _v14, _v0, _v1, _v3, _v2, _v4, _v5, _v16]), (0, _v1.useEffect)(function () {
      return () => {
        _v13.current && (_v13.current.destroy?.(), _v12(null), _v13.current = null);
      };
    }, []), {
      player: _v11,
      flushPlayer: _v17,
      forceReload: _v18
    };
  }], 0);
}