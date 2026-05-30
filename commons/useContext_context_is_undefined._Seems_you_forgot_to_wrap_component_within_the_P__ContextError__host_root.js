{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0 = {}) {
    let {
        strict: _v1 = !0,
        errorMessage: _v2 = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
        name: _v3
      } = _v0,
      _v4 = (0, _v2.createContext)(void 0);
    return _v4.displayName = _v3, [_v4.Provider, function _v0() {
      var _v1;
      let _v2 = (0, _v2.useContext)(_v4);
      if (!_v2 && _v1) {
        let _v0 = Error(_v2);
        throw _v0.name = "ContextError", null == (_v1 = Error.captureStackTrace) || _v1.call(Error, _v0, _v0), _v0;
      }
      return _v2;
    }, _v4];
  }
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v8 = _v8,
    _v9 = _v0.i(0);
  function _v10({
    root: _v0 = ":host, :root"
  }) {
    let _v1 = [_v0, "[data-theme]"].join(",");
    return (0, _v9.jsx)(_v7.Global, {
      styles: _v0 => ({
        [_v1]: _v0.__cssVars
      })
    });
  }
  var [_v11, _v12] = _v3({
    name: "StylesContext",
    errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
  });
  _v0.s(["GlobalStyle", 0, function () {
    let {
      colorMode: _v0
    } = (0, _v1.useColorMode)();
    return (0, _v9.jsx)(_v7.Global, {
      styles: _v0 => {
        let _v1 = (0, _v5.memoizedGet)(_v0, "styles.global"),
          _v2 = (0, _v6.runIfFn)(_v1, {
            theme: _v0,
            colorMode: _v0
          });
        if (_v2) return (0, _v4.css)(_v2)(_v0);
      }
    });
  }, "ThemeProvider", 0, function (_v0) {
    let {
        cssVarsRoot: _v1,
        theme: _v2,
        children: _v3
      } = _v0,
      _v4 = (0, _v2.useMemo)(() => (0, _v4.toCSSVar)(_v2), [_v2]);
    return (0, _v9.jsxs)(_v8.a, {
      theme: _v4,
      children: [(0, _v9.jsx)(_v10, {
        root: _v1
      }), _v3]
    });
  }, "createStylesContext", 0, function (_v0) {
    return _v3({
      name: `${_v0}StylesContext`,
      errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${_v0} />" `
    });
  }], 0);
}