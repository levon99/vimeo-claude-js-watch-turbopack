{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1) => `wayfinder-side-nav-open:${_v0}:${_v1}`,
    _v3 = (_v0, _v1) => {
      if (!_v0 || !_v1) return;
      let _v2 = window.localStorage.getItem(_v2(_v0, _v1));
      return "true" === _v2 || "false" !== _v2 && void 0;
    },
    _v4 = (_v0, _v1, _v2) => {
      try {
        window.localStorage.setItem(_v2(_v0, _v1), _v2 ? "true" : "false");
      } catch {}
    };
  _v0.s(["useSideNavSurfaceState", 0, ({
    surface: _v0,
    userId: _v1,
    isMobile: _v2
  }) => {
    let [_v3, _v4] = (0, _v1.useState)(!_v2),
      _v5 = (0, _v1.useRef)(_v0);
    (0, _v1.useLayoutEffect)(() => {
      let _v0 = _v5.current !== _v0;
      _v5.current = _v0;
      let _v1 = !_v2 && (_v0 ? _v3(_v1, _v0) ?? !0 : _v3(_v1, _v0));
      void 0 !== _v1 && _v4(_v1);
    }, [_v1, _v0, _v2]);
    let _v6 = (0, _v1.useCallback)(() => {
        _v4(_v0 => {
          let _v1 = !_v0;
          return !_v2 && _v1 && _v4(_v1, _v0, _v1), _v1;
        });
      }, [_v2, _v1, _v0]),
      _v7 = (0, _v1.useCallback)(() => {
        _v4(!0), !_v2 && _v1 && _v4(_v1, _v0, !0);
      }, [_v2, _v1, _v0]),
      _v8 = (0, _v1.useCallback)(() => {
        _v4(!1), !_v2 && _v1 && _v4(_v1, _v0, !1);
      }, [_v2, _v1, _v0]),
      _v9 = !_v2 && !_v3;
    return {
      isOpen: _v3,
      collapsed: _v9,
      toggle: _v6,
      open: _v7,
      close: _v8
    };
  }]);
}