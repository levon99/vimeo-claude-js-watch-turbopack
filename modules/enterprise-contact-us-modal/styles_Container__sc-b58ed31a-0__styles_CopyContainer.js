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
  let _v10 = _v2.createGlobalStyle`
  body {
    overflow: hidden; // Hide scrollbar
  }
`,
    _v11 = _v2.default.div.withConfig({
      displayName: "styles__Container",
      componentId: "sc-b58ed31a-0"
    })`
  display: grid;
  grid-template-columns: ${(0, _v1.rem)(400)} 1fr;
  height: ${(0, _v1.rem)(770)};
  overflow: hidden;
`,
    _v12 = _v2.default.div.withConfig({
      displayName: "styles__CopyContainer",
      componentId: "sc-b58ed31a-1"
    })`
  background-color: ${(0, _v3.blue)(900)};
  padding: ${(0, _v1.rem)(52)};
  flex: 1;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: ${(0, _v1.rem)(_v6.core.typography.size(500))};
    letter-spacing: -${(0, _v1.rem)(.8)};
  }

  > h1,
  > h2,
  > p {
    color: ${_v3.white};
    margin-bottom: ${(0, _v1.rem)(16)};
  }
`,
    _v13 = _v2.default.ul.withConfig({
      displayName: "styles__CheckmarkListContainer",
      componentId: "sc-b58ed31a-2"
    })`
  display: flex;
  flex-direction: column;

  > li {
    align-items: baseline;
    display: flex;
    line-height: ${(0, _v1.rem)(24)};
    margin-bottom: ${(0, _v1.rem)(8)};
  }
`,
    _v14 = (0, _v2.default)(_v9.Text).withConfig({
      displayName: "styles__CheckmarkListText",
      componentId: "sc-b58ed31a-3"
    })`
  color: ${_v3.white}!important;
  line-height: ${(0, _v1.rem)(24)}!important;
  margin-bottom: 0;
  max-width: ${(0, _v1.rem)(260)};
`;
  (0, _v2.default)(_v9.Text).withConfig({
    displayName: "styles__FeatureCheckmarkListText",
    componentId: "sc-b58ed31a-4"
  })`
  color: ${_v3.white}!important;
  line-height: ${(0, _v1.rem)(24)}!important;
  margin-bottom: 0;
  font-weight: 500;
`;
  let _v15 = (0, _v2.default)(_v5.Checkmark).withConfig({
      displayName: "styles__Checkmark",
      componentId: "sc-b58ed31a-5"
    })`
  margin-right: ${(0, _v1.rem)(12)};
  margin-top: ${(0, _v1.rem)(1)};
  max-width: ${(0, _v1.rem)(16)};
  position: relative;
  top: ${(0, _v1.rem)(1)};
  width: 100%;

  path {
    fill: ${_v6.core.color.format.primary};
  }
`,
    _v16 = _v2.default.div.withConfig({
      displayName: "styles__LinkContainer",
      componentId: "sc-b58ed31a-6"
    })`
  margin-top: auto;
`,
    _v17 = (0, _v2.default)(_v8.Link).withConfig({
      displayName: "styles__StyledLink",
      componentId: "sc-b58ed31a-7"
    })`
  color: ${_v3.white};
  display: inline-flex;
  align-items: center;

  svg {
    width: ${(0, _v1.rem)(16)};
    margin-left: ${(0, _v1.rem)(6)};
    path {
      fill: ${_v3.white};
    }
  }

  &:hover {
    color: ${(0, _v3.blue)(400)};
    svg {
      path {
        transition: all 0.1s ease-in-out;
        fill: ${(0, _v3.blue)(400)} !important;
      }
    }
  }
`,
    _v18 = (0, _v2.default)(_v4.Button).withConfig({
      displayName: "styles__Dismiss",
      componentId: "sc-b58ed31a-8"
    })`
  position: absolute;
  top: ${(0, _v1.rem)(8)};
  right: ${(0, _v1.rem)(8)};
`;
  _v2.default.div.withConfig({
    displayName: "styles__StyledWrapper",
    componentId: "sc-b58ed31a-9"
  })`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000000;
  padding: ${(0, _v1.rem)(32)} ${(0, _v1.rem)(40)};
  height: 100%;
`, _v2.default.div.withConfig({
    displayName: "styles__StyledRow",
    componentId: "sc-b58ed31a-10"
  })`
  padding-right: ${(0, _v1.rem)(24)};
  flex: 1;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: ${(0, _v1.rem)(_v6.core.typography.size(500))};
    letter-spacing: -${(0, _v1.rem)(.8)};
  }

  > h1,
  > h2,
  > h3,
  > p {
    color: ${_v3.white};
    margin-bottom: ${(0, _v1.rem)(8)};
  }

  > h3 {
    font-weight: 400;
    margin-bottom: ${(0, _v1.rem)(24)};
  }

  > p {
    margin-bottom: ${(0, _v1.rem)(16)};
  }
`;
  let _v19 = _v2.default.div.withConfig({
      displayName: "styles__MarketoFormContainer",
      componentId: "sc-b58ed31a-11"
    })`
  max-width: fit-content;
  min-width: ${(0, _v1.rem)(600)};
  padding: ${(0, _v1.rem)(32)} ${(0, _v1.rem)(48)} ${(0, _v1.rem)(24)};
  max-height: ${(0, _v1.rem)(687)};
  background: var(--vimeo-colors-fill-surface);
`,
    _v20 = _v2.default.div.withConfig({
      displayName: "styles__StyledContainer",
      componentId: "sc-b58ed31a-12"
    })`
  display: flex;
  justify-content: center;
  min-height: ${(0, _v1.rem)(687)};
  height: ${(0, _v1.rem)(687)};
  overflow: hidden;
  ${({
      themeMode: _v0
    }) => _v0 && "dark" === _v0 && _v2.css`
      background-color: #1b1b1b;
    `}
`,
    _v21 = (0, _v2.default)(_v7.Header).withConfig({
      displayName: "styles__StyledFormHeader",
      componentId: "sc-b58ed31a-13"
    })`
  margin-bottom: ${(0, _v1.rem)(6)};
  color: var(--vimeo-colors-text-primary);
  line-height: ${(0, _v1.rem)(26.4)};
`;
  _v0.s(["Checkmark", 0, _v15, "CheckmarkListContainer", 0, _v13, "CheckmarkListText", 0, _v14, "Container", 0, _v11, "CopyContainer", 0, _v12, "Dismiss", 0, _v18, "GlobalStyles", 0, _v10, "LinkContainer", 0, _v16, "MarketoFormContainer", 0, _v19, "StyledContainer", 0, _v20, "StyledFormHeader", 0, _v21, "StyledLink", 0, _v17]);
}