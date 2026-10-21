{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = "bokeh-color-mode",
    _v12 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v13 = _v3.useLayoutEffect;
  function _v14({
    colorMode: _v0
  }) {
    let {
      setColorMode: _v1
    } = (0, _v8.useColorMode)();
    return _v13(() => {
      _v1(_v0);
    }, [_v0, _v1]), null;
  }
  _v0.s(["BokehOnly", 0, ({
    children: _v0
  }) => (0, _v10.useIsBokeh)() ? (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }) : null, "BokehProvider", 0, ({
    children: _v0,
    colorMode: _v1,
    bokehStorageKey: _v2 = _v11
  }) => {
    let _v3 = (0, _v3.useMemo)(() => (0, _v7.createLocalStorageManager)(_v2), [_v2]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v12, {}), (0, _v1.jsx)(_v4.ColorModeScript, {
        storageKey: _v2,
        initialColorMode: "system",
        type: "localStorage"
      }), (0, _v1.jsxs)(_v5.ThemeProvider, {
        theme: _v9.bokehTheme,
        colorModeManager: _v3,
        children: [(0, _v1.jsx)(_v14, {
          colorMode: _v1
        }), (0, _v1.jsx)(_v6.ToastProvider, {
          children: _v0
        })]
      })]
    });
  }, "IrisOnly", 0, ({
    children: _v0
  }) => (0, _v10.useIsBokeh)() ? null : (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }), "STORAGE_KEY", 0, _v11]);
}