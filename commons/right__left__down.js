{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = ((_v1 = {}).RIGHT = "right", _v1.LEFT = "left", _v1.UP = "up", _v1.DOWN = "down", _v1);
  _v0.s(["ESwipeDirection", () => _v6, "useSwipe", 0, function ({
    ref: _v0,
    threshold: _v1 = 5,
    dependencies: _v2 = []
  }) {
    let [_v3, _v4] = (0, _v2.useState)(null),
      [_v5, _v6] = (0, _v2.useState)(0),
      _v7 = _v4.browserConfig.BROWSER?.isMobile,
      _v8 = (0, _v2.useRef)({
        x: 0,
        y: 0
      }),
      _v9 = (0, _v2.useRef)({
        x: 0,
        y: 0
      }),
      _v10 = (0, _v2.useCallback)(() => {
        _v8.current = {
          x: 0,
          y: 0
        }, _v9.current = {
          x: 0,
          y: 0
        }, _v4(null), _v6(0);
      }, []),
      _v11 = (0, _v2.useCallback)(() => {
        Math.abs(_v9.current.x - _v8.current.x) > Math.abs(_v9.current.y - _v8.current.y) && Math.abs(_v9.current.x - _v8.current.x) > _v1 ? (_v4(_v9.current.x > _v8.current.x ? "right" : "left"), _v6(Math.ceil(Math.abs(_v9.current.x - _v8.current.x)))) : Math.abs(_v9.current.y - _v8.current.y) > _v1 && (_v4(_v9.current.y > _v8.current.y ? "down" : "up"), _v6(Math.ceil(Math.abs(_v9.current.y - _v8.current.y))));
      }, [_v1]),
      _v12 = (0, _v5.useThrottledCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v0.changedTouches && _v0.changedTouches.length > 0 && (_v9.current.x = _v0.changedTouches[0].clientX, _v9.current.y = _v0.changedTouches[0].clientY), _v11();
      }, 16, [_v11]),
      _v13 = (0, _v2.useCallback)(_v0 => {
        _v0.changedTouches && _v0.changedTouches.length > 0 && (_v9.current.x = _v0.changedTouches[0].clientX, _v9.current.y = _v0.changedTouches[0].clientY), _v11(), _v10();
        let _v1 = _v0.current;
        _v1 && (_v1.removeEventListener("touchmove", _v12), _v1.removeEventListener("touchend", _v13), _v1.removeEventListener("touchcancel", _v13));
      }, [_v10, _v11, _v12, _v0]),
      _v14 = (0, _v2.useCallback)(_v0 => {
        _v0.changedTouches && _v0.changedTouches.length > 0 && (_v8.current.x = _v0.changedTouches[0].clientX, _v8.current.y = _v0.changedTouches[0].clientY);
        let _v1 = _v0.current;
        _v1.addEventListener("touchmove", _v12, {
          passive: !1
        }), _v1.addEventListener("touchend", _v13), _v1.addEventListener("touchcancel", _v13);
      }, [_v13, _v12, _v0]);
    return (0, _v2.useEffect)(() => {
      if (_v0 && _v0.current) {
        let _v0 = _v0.current;
        if (_v7) return _v0.addEventListener("touchstart", _v14), () => {
          _v10(), _v0.removeEventListener("touchstart", _v14), _v0.removeEventListener("touchmove", _v12), _v0.removeEventListener("touchend", _v13), _v0.removeEventListener("touchcancel", _v13);
        };
      }
    }, [_v10, _v7, _v14, _v0, ..._v2]), {
      direction: _v3,
      offset: _v5,
      start: _v8.current,
      end: _v9.current
    };
  }], 0);
  var _v7 = _v0.i(0);
  let _v8 = (0, _v2.createContext)({
    isHeaderEnabled: !1,
    setIsHeaderEnabled: _v7.CallablePlaceholder
  });
  _v0.s(["ResponsiveSidebarContext", 0, _v8, "useResponsiveSidebarContext", 0, function () {
    return (0, _v2.useContext)(_v8);
  }, "useSidebarPropConfigValue", 0, function (_v0) {
    return (0, _v2.useMemo)(() => "object" == typeof _v0 ? _v4.browserConfig.BROWSER?.isMobile && _v0.mobile || _v0.web : _v0, [_v0]);
  }, "useSidebarSwipeDirection", 0, function (_v0, _v1) {
    return (0, _v2.useMemo)(() => _v0 ? _v0 === _v3.ESidebarAttach.TOP ? {
      swipeSameDirection: _v6.UP,
      swipeOppositeDirection: _v6.DOWN
    } : _v0 === _v3.ESidebarAttach.BOTTOM || _v0 === _v3.ESidebarAttach.RIGHT && _v1 || _v0 === _v3.ESidebarAttach.LEFT && _v1 ? {
      swipeSameDirection: _v6.DOWN,
      swipeOppositeDirection: _v6.UP
    } : _v0 === _v3.ESidebarAttach.RIGHT ? {
      swipeSameDirection: _v6.RIGHT,
      swipeOppositeDirection: _v6.LEFT
    } : _v0 === _v3.ESidebarAttach.LEFT ? {
      swipeSameDirection: _v6.LEFT,
      swipeOppositeDirection: _v6.RIGHT
    } : {
      swipeSameDirection: null,
      swipeOppositeDirection: null
    } : {
      swipeSameDirection: null,
      swipeOppositeDirection: null
    }, [_v0, _v1]);
  }], 0);
}