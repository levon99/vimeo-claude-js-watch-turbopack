{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v3.createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  :root {
    color-scheme: ${({
    theme: _v0
  }) => _v0.name}
  }

  html {
      box-sizing: border-box;
      font-family: Arial, system-ui, sans-serif;
      background-color: ${({
    theme: _v0
  }) => _v0.content.background};
  }

  // for Bokeh html
  html[data-theme='dark'] {
    background-color: var(--vimeo-colors-background);
  }

  #root {
      min-height: 100%;
  }
  body {
      overflow-y: auto;
  }
  body,
  form {
      margin: 0;
      padding: 0;
  }
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre {
      margin: 0;
  }
  p:first-child,
  p {
      margin-top: 0;
  }
  img {
      border: 0;
  }
  fieldset,
  legend {
      margin: 0;
      padding: 0;
      border: 0;
  }
  acronym {
      cursor: help;
  }
  time {
      cursor: default;
  }
  em {
      font-style: italic;
  }
  sup {
      vertical-align: top;
  }
  /**
  * Suppress the focus outline on links that cannot be accessed via keyboard.
  * This prevents an unwanted focus outline from appearing around elements that
  * might still respond to pointer events.
  */
  [tabindex='-1']:focus {
      outline: none !important;
  }
  ol,
  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
  }
`;
  var _v7 = _v0.i(0);
  let _v8 = (0, _v2.createContext)({});
  function _v9(_v0, _v1) {
    switch (_v1.type) {
      case "TOGGLE":
        return {
          ..._v0,
          ...("light" === _v0.name ? _v4.themes.dark : _v4.themes.light)
        };
      case "SET":
        return {
          ..._v0,
          ..._v1.payload
        };
      case "INIT":
        return {
          ..._v0,
          isReady: !0
        };
      default:
        return _v0;
    }
  }
  _v0.s(["ThemeDispatchContext", 0, _v8, "ThemeProvider", 0, ({
    children: _v0,
    hasThemeProvider: _v1 = !0,
    hasThemeSupport: _v2 = !1,
    isThemePersistent: _v3 = !0,
    defaultTheme: _v4 = "light",
    forceTheme: _v5
  }) => {
    let [_v6, _v7] = (0, _v7.default)("theme-preference", _v4),
      [_v8, _v9] = (0, _v2.useReducer)(_v9, _v2 && "dark" === _v6 ? {
        ..._v4.themes.dark
      } : {
        ..._v4.themes.light
      }),
      _v10 = (0, _v2.useMemo)(() => ({
        toggleTheme: _v0 => {
          _v9({
            type: "TOGGLE"
          });
        },
        setTheme: _v0 => {
          _v9({
            type: "SET",
            payload: _v0
          });
        },
        initTheme: () => _v9({
          type: "INIT"
        })
      }), [_v9]);
    return ((0, _v2.useEffect)(() => {
      document.documentElement.hasAttribute("style") && document.documentElement.removeAttribute("style"), _v10.initTheme();
    }, []), (0, _v2.useEffect)(() => {
      _v2 && _v3 && _v7(_v8.name);
    }, [_v2, _v3, _v8.name, _v7]), _v1) ? (0, _v1.jsx)(_v3.ThemeProvider, {
      theme: _v8,
      children: (0, _v1.jsxs)(_v8.Provider, {
        value: _v10,
        children: [(0, _v1.jsx)(_v6, {}), (0, _v1.jsx)(_v5.default, {
          colorMode: _v5 || _v8.name,
          children: _v0
        })]
      })
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    });
  }, "useThemeContext", 0, function () {
    return (0, _v2.useContext)(_v8);
  }], 0);
}