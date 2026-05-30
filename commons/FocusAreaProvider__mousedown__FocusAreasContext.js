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
  let _v9 = (0, _v4.createContext)({
    setNodeRef: _v3.default
  });
  _v0.s(["FocusAreaProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v4.useRef)({}),
      _v2 = (0, _v6.useAppDispatch)(),
      _v3 = (0, _v4.useRef)(null),
      _v4 = (0, _v4.useCallback)(_v0 => {
        _v0 !== _v8.FocusAreaType.IGNORE && (_v3.current !== _v0 && (_v0 ? _v2((0, _v5.focusAction)({
          uiArea: _v0
        })) : _v2((0, _v5.blurAction)())), _v3.current = _v0);
      }, [_v2]),
      _v5 = (0, _v4.useCallback)(_v0 => {
        let _v1 = _v0.target,
          _v2 = null;
        Object.keys(_v1.current).forEach(_v0 => {
          let _v1 = _v1.current[_v0];
          (_v1?.current?.contains(_v1) || 0) && (_v2 = _v0);
        }), _v4(_v2);
      }, [_v4]),
      _v6 = (0, _v4.useCallback)(_v0 => {
        let {
            over: _v1
          } = _v0,
          _v2 = _v1?.data.current?.type,
          _v3 = null;
        _v2 === _v7.DndDropAreaType.TIMELINE || _v2 === _v7.DndDropAreaType.EMPTY_TIMELINE ? _v3 = _v8.FocusAreaType.TIMELINE : _v2 === _v7.DndDropAreaType.STAGE && (_v3 = _v8.FocusAreaType.STAGE), _v4(_v3);
      }, [_v4]),
      _v7 = (0, _v4.useCallback)((_v0, _v1) => {
        _v1.current[_v1] = _v0;
      }, []);
    return (0, _v2.useDndMonitor)({
      onDragEnd(_v0) {
        _v6(_v0);
      }
    }), (0, _v4.useEffect)(() => (document.addEventListener("mousedown", _v5, !0), () => {
      document.removeEventListener("mousedown", _v5, !0);
    }), [_v5]), (0, _v1.jsx)(_v9.Provider, {
      value: {
        setNodeRef: _v7
      },
      children: _v0
    });
  }, "FocusAreasContext", 0, _v9]);
}