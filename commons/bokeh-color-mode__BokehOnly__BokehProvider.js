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
    _v9 = _v0.i(0);
  let _v10 = "bokeh-color-mode",
    _v11 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v12 = _v3.useLayoutEffect;
  _v0.s(["BokehOnly", 0, ({
    children: _v0
  }) => (0, _v9.useIsBokeh)() ? (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }) : null, "BokehProvider", 0, ({
    children: _v0,
    colorMode: _v1,
    bokehStorageKey: _v2 = _v10
  }) => {
    let _v3 = (0, _v7.createLocalStorageManager)(_v2);
    return _v12(() => {
      _v3.set(_v1);
    }, [_v1, _v3]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v11, {}), (0, _v1.jsx)(_v4.ColorModeScript, {
        storageKey: _v2,
        initialColorMode: "system",
        type: "localStorage"
      }), (0, _v1.jsx)(_v5.ThemeProvider, {
        theme: _v8.bokehTheme,
        colorModeManager: _v3,
        children: (0, _v1.jsx)(_v6.ToastProvider, {
          children: _v0
        })
      })]
    });
  }, "IrisOnly", 0, ({
    children: _v0
  }) => (0, _v9.useIsBokeh)() ? null : (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }), "STORAGE_KEY", 0, _v10]);
}