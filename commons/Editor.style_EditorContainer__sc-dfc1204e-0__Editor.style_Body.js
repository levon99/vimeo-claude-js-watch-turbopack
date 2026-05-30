{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v1.createGlobalStyle`
:root {
  --editor-primary-color: ${_v2.core.color.text.primary};
  --editor-secondary-color: ${_v2.core.color.text.secondary};
}

html {
  color: var(--editor-primary-color);
}

body {
  overflow-x: hidden;
}
`,
    _v4 = _v1.default.div.withConfig({
      displayName: "Editor.style__EditorContainer",
      componentId: "sc-dfc1204e-0"
    })`
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  flex-direction: column;
  background: ${({
      backgroundColor: _v0
    }) => _v0};
  isolation: isolate;
`,
    _v5 = _v1.default.div.withConfig({
      displayName: "Editor.style__Body",
      componentId: "sc-dfc1204e-1"
    })`
  display: flex;
  width: 100%;
  height: calc(100vh - ${63}px);
  flex-direction: row;
`,
    _v6 = _v1.default.div.withConfig({
      displayName: "Editor.style__Content",
      componentId: "sc-dfc1204e-2"
    })`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 0;
  flex-direction: column;
`,
    _v7 = _v1.default.div.withConfig({
      displayName: "Editor.style__ContentLoaderContainer",
      componentId: "sc-dfc1204e-3"
    })`
  position: absolute;
  display: flex;
  ${({
      inspectorWidth: _v0
    }) => _v0 && _v1.css`
      width: calc(100% - ${_v0}px - ${80}px);
    `}
  height: 100%;
  z-index: ${0};
  justify-content: center;
  align-items: center;
  background-color: rgba(50, 50, 50, 0.667);
`;
  _v0.s(["Body", 0, _v5, "Content", 0, _v6, "ContentLoaderContainer", 0, _v7, "EditorContainer", 0, _v4, "FOOTER_HEIGHT", 0, 260, "FOOTER_MIN_HEIGHT", 0, 180, "GlobalStyles", 0, _v3, "HEADER_HEIGHT", 0, 63], 0);
  let _v8 = _v1.default.div.withConfig({
      displayName: "Inspector.style__InspectorPaddedRow",
      componentId: "sc-404a08e8-0"
    })`
  width: 100%;

  padding: 0 ${24}px;
  padding-right: ${({
      padRight: _v0 = !0
    }) => `${16 * !!_v0}px`};
  padding-left: ${({
      padLeft: _v0 = !0
    }) => `${16 * !!_v0}px`};

  ${({
      marginTop: _v0
    }) => _v0 && _v1.css`
      margin-top: ${16}px;
    `};
`,
    _v9 = (0, _v1.default)(_v8).withConfig({
      displayName: "Inspector.style__SubSelectionContainer",
      componentId: "sc-404a08e8-1"
    })`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin-bottom: 16px;
  margin-top: 8px;
`;
  _v0.s(["BOKEH_MARGIN", 0, 16, "INSPECTOR_HEADER_HEIGHT", 0, 64, "INSPECTOR_TRANSITION_TIME", 0, 300, "InspectorPaddedRow", 0, _v8, "MARGIN", 0, 24, "PADDING", 0, 24, "SubSelectionContainer", 0, _v9], 0);
}