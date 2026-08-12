{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = String.raw,
    _v4 = _v3`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
    _v5 = () => (0, _v1.jsx)(_v2.Global, {
      styles: _v4
    }),
    _v6 = ({
      scope: _v0 = ""
    }) => (0, _v1.jsx)(_v2.Global, {
      styles: _v3`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${_v0} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${_v0} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${_v0} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${_v0} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${_v0} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${_v0} :where(b, strong) {
        font-weight: bold;
      }

      ${_v0} small {
        font-size: 80%;
      }

      ${_v0} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${_v0} sub {
        bottom: -0.25em;
      }

      ${_v0} sup {
        top: -0.5em;
      }

      ${_v0} img {
        border-style: none;
      }

      ${_v0} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${_v0} :where(button, input) {
        overflow: visible;
      }

      ${_v0} :where(button, select) {
        text-transform: none;
      }

      ${_v0} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${_v0} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${_v0} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${_v0} progress {
        vertical-align: baseline;
      }

      ${_v0} textarea {
        overflow: auto;
      }

      ${_v0} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${_v0} input[type="number"]::-webkit-inner-spin-button,
      ${_v0} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${_v0} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${_v0} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${_v0} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${_v0} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${_v0} details {
        display: block;
      }

      ${_v0} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${_v0} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${_v0} button {
        background: transparent;
        padding: 0;
      }

      ${_v0} fieldset {
        margin: 0;
        padding: 0;
      }

      ${_v0} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${_v0} textarea {
        resize: vertical;
      }

      ${_v0} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${_v0} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${_v0} table {
        border-collapse: collapse;
      }

      ${_v0} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${_v0} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${_v0} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${_v0} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${_v0} select::-ms-expand {
        display: none;
      }

      ${_v4}
    `
    }),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0 => {
      let {
          children: _v1,
          colorModeManager: _v2,
          portalZIndex: _v3,
          resetScope: _v4,
          resetCSS: _v5 = !0,
          theme: _v6 = {},
          environment: _v7,
          cssVarsRoot: _v8,
          disableEnvironment: _v9,
          disableGlobalStyle: _v10
        } = _v0,
        _v11 = (0, _v1.jsx)(_v10.EnvironmentProvider, {
          environment: _v7,
          disabled: _v9,
          children: _v1
        });
      return (0, _v1.jsx)(_v9.ThemeProvider, {
        theme: _v6,
        cssVarsRoot: _v8,
        children: (0, _v1.jsxs)(_v8.ColorModeProvider, {
          colorModeManager: _v2,
          options: _v6.config,
          children: [_v5 ? (0, _v1.jsx)(_v6, {
            scope: _v4
          }) : (0, _v1.jsx)(_v5, {}), !_v10 && (0, _v1.jsx)(_v9.GlobalStyle, {}), _v3 ? (0, _v1.jsx)(_v7.PortalManager, {
            zIndex: _v3,
            children: _v11
          }) : _v11]
        })
      });
    },
    _v12 = _v0.i(0);
  _v0.s(["ThemeProvider", 0, function ({
    children: _v0,
    theme: _v1 = _v12.bokehTheme,
    resetCSS: _v2 = !1,
    ..._v3
  }) {
    return (0, _v1.jsx)(_v11, {
      theme: _v1,
      resetCSS: _v2,
      ..._v3,
      children: _v0
    });
  }], 0);
}