{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v2.default)(_v3.Spinner).withConfig({
      displayName: "Layout__Loader",
      componentId: "sc-3e3de884-0"
    })`
  margin-top: ${(0, _v1.rem)(40)};
`,
    _v7 = (0, _v2.default)(_v4.Header).withConfig({
      displayName: "Layout__PromptHeading",
      componentId: "sc-3e3de884-1"
    })`
  margin-top: ${(0, _v1.rem)(12)};
`,
    _v8 = (0, _v2.default)(_v5.Paragraph).withConfig({
      displayName: "Layout__PromptMessage",
      componentId: "sc-3e3de884-2"
    })`
  max-width: ${(0, _v1.rem)(360)};
  margin-top: ${(0, _v1.rem)(8)};
`,
    _v9 = _v2.default.main.withConfig({
      displayName: "Layout",
      componentId: "sc-3e3de884-3"
    })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: ${(0, _v1.rem)(320)};
  max-width: ${(0, _v1.rem)(400)};
  padding: ${(0, _v1.rem)(20)};
  margin: auto;
  text-align: center;
  background-color: ${_v0 => _v0.theme.content.background};
`,
    _v10 = (0, _v2.default)(_v5.Paragraph).withConfig({
      displayName: "Layout__Disclaimer",
      componentId: "sc-3e3de884-4"
    })`
  max-width: ${(0, _v1.rem)(360)};
  margin-top: ${(0, _v1.rem)(8)};
`,
    _v11 = _v2.default.div.withConfig({
      displayName: "Layout__LoginWrapper",
      componentId: "sc-3e3de884-5"
    })`
  background-color: ${_v0 => _v0.theme.content.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;
  _v0.s(["Disclaimer", 0, _v10, "Layout", 0, _v9, "Loader", 0, _v6, "LoginWrapper", 0, _v11, "PromptHeading", 0, _v7, "PromptMessage", 0, _v8]);
}