{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = () => {};
  function _v8(_v0, _v1) {
    return "cookie" === _v0.type && _v0.ssr ? _v0.get(_v1) : _v1;
  }
  function _v9(_v0) {
    let {
        value: _v1,
        children: _v2,
        options: {
          useSystemColorMode: _v3,
          initialColorMode: _v4,
          disableTransitionOnChange: _v5
        } = {},
        colorModeManager: _v6 = _v3.localStorageManager
      } = _v0,
      _v7 = "dark" === _v4 ? "dark" : "light",
      [_v8, _v9] = (0, _v5.useState)(() => _v8(_v6, _v7)),
      [_v10, _v11] = (0, _v5.useState)(() => _v8(_v6)),
      {
        getSystemTheme: _v12,
        setClassName: _v13,
        setDataset: _v14,
        addListener: _v15
      } = (0, _v5.useMemo)(() => (0, _v2.getColorModeUtils)({
        preventTransition: _v5
      }), [_v5]),
      _v16 = "system" !== _v4 || _v8 ? _v8 : _v10,
      _v17 = (0, _v5.useCallback)(_v0 => {
        let _v1 = "system" === _v0 ? _v12() : _v0;
        _v9(_v1), _v13("dark" === _v1), _v14(_v1), _v6.set(_v1);
      }, [_v6, _v12, _v13, _v14]);
    (0, _v4.useSafeLayoutEffect)(() => {
      "system" === _v4 && _v11(_v12());
    }, []), (0, _v5.useEffect)(() => {
      let _v0 = _v6.get();
      _v0 ? _v17(_v0) : "system" === _v4 ? _v17("system") : _v17(_v7);
    }, [_v6, _v7, _v4, _v17]);
    let _v18 = (0, _v5.useCallback)(() => {
      _v17("dark" === _v16 ? "light" : "dark");
    }, [_v16, _v17]);
    (0, _v5.useEffect)(() => {
      if (_v3) return _v15(_v17);
    }, [_v3, _v15, _v17]);
    let _v19 = (0, _v5.useMemo)(() => ({
      colorMode: null != _v1 ? _v1 : _v16,
      toggleColorMode: _v1 ? _v7 : _v18,
      setColorMode: _v1 ? _v7 : _v17,
      forced: void 0 !== _v1
    }), [_v16, _v18, _v17, _v1]);
    return (0, _v6.jsx)(_v1.ColorModeContext.Provider, {
      value: _v19,
      children: _v2
    });
  }
  function _v10(_v0) {
    let _v1 = (0, _v5.useMemo)(() => ({
      colorMode: "dark",
      toggleColorMode: _v7,
      setColorMode: _v7,
      forced: !0
    }), []);
    return (0, _v6.jsx)(_v1.ColorModeContext.Provider, {
      value: _v1,
      ..._v0
    });
  }
  function _v11(_v0) {
    let _v1 = (0, _v5.useMemo)(() => ({
      colorMode: "light",
      toggleColorMode: _v7,
      setColorMode: _v7,
      forced: !0
    }), []);
    return (0, _v6.jsx)(_v1.ColorModeContext.Provider, {
      value: _v1,
      ..._v0
    });
  }
  _v9.displayName = "ColorModeProvider", _v10.displayName = "DarkMode", _v11.displayName = "LightMode", _v0.s(["ColorModeProvider", 0, _v9, "DarkMode", 0, _v10, "LightMode", 0, _v11]);
}