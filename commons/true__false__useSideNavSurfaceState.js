{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, _v1) => `wayfinder-side-nav-open:${_v0}:${_v1}`,
    _v4 = (_v0, _v1) => {
      if (!_v0 || !_v1) return;
      let _v2 = window.localStorage.getItem(_v3(_v0, _v1));
      return "true" === _v2 || "false" !== _v2 && void 0;
    },
    _v5 = (_v0, _v1, _v2) => {
      try {
        window.localStorage.setItem(_v3(_v0, _v1), _v2 ? "true" : "false");
      } catch {}
    };
  _v0.s(["useSideNavSurfaceState", 0, ({
    surface: _v0,
    userId: _v1,
    isMobile: _v2
  }) => {
    let {
        settings: _v3
      } = (0, _v2.useOrionSettings)(),
      _v4 = _v3.enable_new_sidebar,
      [_v5, _v6] = (0, _v1.useState)(!_v2),
      _v7 = (0, _v1.useRef)(_v0);
    (0, _v1.useLayoutEffect)(() => {
      let _v0 = _v7.current !== _v0;
      _v7.current = _v0;
      let _v1 = !_v2 && (_v4 ? _v0 ? _v4(_v1, _v0) ?? !0 : _v4(_v1, _v0) : void 0);
      void 0 !== _v1 && _v6(_v1);
    }, [_v1, _v0, _v2, _v4]);
    let _v8 = (0, _v1.useCallback)(() => {
        _v6(_v0 => {
          let _v1 = !_v0;
          return _v4 && !_v2 && _v1 && _v5(_v1, _v0, _v1), _v1;
        });
      }, [_v4, _v2, _v1, _v0]),
      _v9 = (0, _v1.useCallback)(() => {
        _v6(!0), _v4 && !_v2 && _v1 && _v5(_v1, _v0, !0);
      }, [_v4, _v2, _v1, _v0]),
      _v10 = (0, _v1.useCallback)(() => {
        _v6(!1), _v4 && !_v2 && _v1 && _v5(_v1, _v0, !1);
      }, [_v4, _v2, _v1, _v0]),
      _v11 = _v4 && !_v2;
    return {
      isOpen: _v5,
      collapsed: _v11 && !_v5,
      isNewSidebar: _v4,
      isNewDesktopSidebar: _v11,
      toggle: _v8,
      open: _v9,
      close: _v10
    };
  }]);
}