{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.createContext)((0, _v2.createRef)());
  _v0.s(["DragonflyProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useRef)(null);
    return (0, _v1.jsx)(_v7.Provider, {
      value: _v1,
      children: _v0
    });
  }, "useDragonfly", 0, () => {
    let _v0 = (0, _v2.useContext)(_v7),
      _v1 = (0, _v5.useAppSelector)(_v3.isInitializedSelector),
      _v2 = (0, _v5.useAppDispatch)();
    (0, _v2.useEffect)(() => {
      !_v1 && _v0.current && _v2((0, _v3.setDragonflyInitializedAction)()), window.editorPlayerRef = _v0.current, window.setEditorPlayerSize = (_v0, _v1) => {
        _v2((0, _v4.setSizeAction)({
          width: _v0,
          height: _v1
        }));
      };
    }, [_v0, _v2, _v1]);
    let _v3 = (0, _v2.useCallback)(_v0 => {
        _v2((0, _v3.setDragonflyCurrentTimeAction)(_v0));
      }, [_v2]),
      _v4 = (0, _v2.useCallback)(() => {
        _v0.current?.play(), _v2((0, _v3.setDragonflyPausedAction)(!1));
      }, [_v0, _v2]),
      _v5 = (0, _v2.useCallback)(() => {
        _v0.current?.pause(), _v2((0, _v3.setDragonflyPausedAction)(!0));
        let _v0 = _v0.current?.currentTime;
        if (void 0 !== _v0) {
          let _v0 = (0, _v6.toNearestFrame)(_v0);
          _v0.current?.seek(_v0), _v2((0, _v3.setDragonflyCurrentTimeAction)(_v0));
        }
      }, [_v0, _v2]),
      _v6 = (0, _v2.useCallback)(_v0 => {
        _v0.current?.seek(_v0), _v2((0, _v3.setDragonflyCurrentTimeAction)(_v0)), _v2((0, _v3.setDragonflySeekTimeAction)(_v0));
      }, [_v0, _v2]),
      _v7 = (0, _v2.useCallback)(() => {
        _v5();
      }, [_v5]),
      _v8 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = _v0.current?.currentTime || 0;
        return {
          start: _v2 + _v0,
          end: _v2 + _v0 + (_v1 - _v0)
        };
      }, [_v0]),
      _v9 = (0, _v2.useCallback)(() => _v0.current?.currentTime || 0, [_v0]);
    return {
      DFRef: _v0,
      handleEnded: _v7,
      handleTimeUpdate: _v3,
      play: _v4,
      pause: _v5,
      seek: _v6,
      getCompositionTimingByCurrentTime: _v8,
      getCurrentTimeFromRef: _v9
    };
  }]);
}