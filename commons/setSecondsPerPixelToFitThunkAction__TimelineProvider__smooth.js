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
  let _v9 = (_v0 = !1) => (_v0, _v1) => {
    let _v2 = (0, _v8.fitZoomValueSelector)(_v1()),
      _v3 = _v0 ? Math.max(_v2, _v6.TIMELINE_MIN_FIT_RATIO) : _v2;
    _v0((0, _v7.setSecondsPerPixelAction)({
      secondsPerPixel: _v3
    }));
  };
  _v0.s(["setSecondsPerPixelToFitThunkAction", 0, _v9], 0);
  var _v10 = _v0.i(0);
  let _v11 = (0, _v3.createContext)({
    timelineOuterNodeRef: {
      current: null
    },
    timelineInnerNodeRef: {
      current: null
    },
    layersNodeRef: {
      current: null
    },
    timelineRect: {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    },
    staticCurrentTimeRef: {
      current: -1
    },
    scrollToLayerByIndex: _v2.default,
    scrollToLayerOrElementById: _v2.default,
    animateSeek: _v2.default,
    handleFit: _v2.default,
    timelineScrollOffset: 0,
    setTimelineScrollOffset: _v2.default,
    setStaticCurrentTime: _v2.default
  });
  _v0.s(["TimelineProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v10.useAppDispatch)(),
      _v2 = (0, _v10.useAppSelector)(_v7.secondsPerPixelSelector),
      _v3 = (0, _v3.useRef)(null),
      _v4 = (0, _v3.useRef)(null),
      _v5 = (0, _v3.useRef)(null),
      _v6 = (0, _v3.useRef)(-1),
      {
        seek: _v7
      } = (0, _v4.useDragonfly)(),
      _v8 = (0, _v5.default)(_v3),
      [_v9, _v10] = (0, _v3.useState)(0),
      _v11 = (0, _v3.useCallback)((_v0, _v1) => {
        if (!_v3.current) return;
        let _v2 = _v0 * _v2 * 60,
          _v3 = _v8.width,
          _v4 = _v3.current.scrollLeft;
        (_v2 >= _v3 + _v4 || _v2 <= _v4) && _v3.current.scrollTo({
          left: _v2 - (_v1 ? _v3 / 2 : 0),
          behavior: "smooth"
        });
      }, [_v2, _v8.width]),
      _v12 = (0, _v3.useCallback)((_v0, _v1) => {
        _v7(_v0), _v11(_v0, _v1);
      }, [_v11, _v7]),
      _v13 = (0, _v3.useCallback)(() => {
        _v1(_v9()), setTimeout(() => {
          _v3.current && (_v3.current.scrollLeft = 0), _v10(0);
        });
      }, [_v1, _v3]),
      _v14 = (0, _v3.useCallback)(_v0 => {
        -1 === _v0 && _v6.current > -1 ? (_v7(_v6.current), _v6.current = -1) : _v6.current = _v0;
      }, [_v7]);
    return (0, _v1.jsx)(_v11.Provider, {
      value: {
        timelineOuterNodeRef: _v3,
        timelineInnerNodeRef: _v4,
        layersNodeRef: _v5,
        staticCurrentTimeRef: _v6,
        timelineRect: _v8,
        scrollToLayerByIndex: _v0 => {
          if (!_v5.current || !_v4.current) return;
          let _v1 = _v5.current.querySelector(`[data-layerindex="${_v0}"]`);
          if (_v1) {
            let _v0 = _v5.current.getBoundingClientRect().top,
              _v1 = _v1?.getBoundingClientRect().top - _v0;
            _v4.current.scrollTop = _v1;
          }
        },
        scrollToLayerOrElementById: _v0 => {
          if (!_v5.current || !_v4.current) return;
          let _v1 = _v5.current.querySelector(`[data-id=${_v0}]`);
          if (_v1) {
            let _v0 = _v5.current.getBoundingClientRect().top,
              _v1 = _v1?.getBoundingClientRect().top - _v0;
            _v4.current.scrollTop = _v1;
          }
        },
        animateSeek: _v12,
        handleFit: _v13,
        timelineScrollOffset: _v9,
        setTimelineScrollOffset: _v10,
        setStaticCurrentTime: _v14
      },
      children: _v0
    });
  }, "useTimelineContext", 0, () => (0, _v3.useContext)(_v11)], 0);
}