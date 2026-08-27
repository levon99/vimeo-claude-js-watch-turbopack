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
    isMobile: _v2,
    persist: _v3 = !0
  }) => {
    let [_v4, _v5] = (0, _v1.useState)(!_v2),
      _v6 = (0, _v1.useRef)(_v0);
    (0, _v1.useLayoutEffect)(() => {
      let _v0,
        _v1 = _v6.current !== _v0;
      _v6.current = _v0, void 0 !== (_v0 = !_v2 && (!_v3 || (_v1 ? _v3(_v1, _v0) ?? !0 : _v3(_v1, _v0)))) && _v5(_v0);
    }, [_v1, _v0, _v2, _v3]);
    let _v7 = (0, _v1.useCallback)(() => {
        _v5(_v0 => {
          let _v1 = !_v0;
          return _v3 && !_v2 && _v1 && _v4(_v1, _v0, _v1), _v1;
        });
      }, [_v2, _v1, _v0, _v3]),
      _v8 = (0, _v1.useCallback)(() => {
        _v5(!0), _v3 && !_v2 && _v1 && _v4(_v1, _v0, !0);
      }, [_v2, _v1, _v0, _v3]),
      _v9 = (0, _v1.useCallback)(() => {
        _v5(!1), _v3 && !_v2 && _v1 && _v4(_v1, _v0, !1);
      }, [_v2, _v1, _v0, _v3]),
      _v10 = !_v2 && !_v4;
    return {
      isOpen: _v4,
      collapsed: _v10,
      toggle: _v7,
      open: _v8,
      close: _v9
    };
  }]);
}