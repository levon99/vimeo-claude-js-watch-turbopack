{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.default)(_v4.Apple).withConfig({
      displayName: "styles__AppleIcon",
      componentId: "sc-cb9df8d8-0"
    })`
  &&& {
    width: ${(0, _v1.rem)(18)};
  }
`,
    _v8 = (0, _v2.default)(_v6.GoogleGColor).withConfig({
      displayName: "styles__GoogleIcon",
      componentId: "sc-cb9df8d8-1"
    })`
  &&& {
    width: ${(0, _v1.rem)(21)};
  }
`,
    _v9 = (0, _v2.default)(_v5.Facebook).withConfig({
      displayName: "styles__FacebookIcon",
      componentId: "sc-cb9df8d8-2"
    })`
  &&& {
    width: ${(0, _v1.rem)(18)};
    vertical-align: top;
    margin-top: ${(0, _v1.rem)(3)};
    & > * {
      fill: white;
    }
  }
`,
    _v10 = _v2.default.div.withConfig({
      displayName: "styles__FacebookIconContainer",
      componentId: "sc-cb9df8d8-3"
    })`
  border-radius: 100%;
  overflow: hidden;
  background-color: #1877f2;
  margin-right: ${(0, _v1.rem)(10)};
  width: ${(0, _v1.rem)(21)};
  height: ${(0, _v1.rem)(21)};
`,
    _v11 = (0, _v2.default)(_v3.Button).attrs({
      size: "lg"
    }).withConfig({
      displayName: "styles__SocialButton",
      componentId: "sc-cb9df8d8-4"
    })`
  &&& {
    &.f2pPilotRegLogin {
      width: 100%;
      font-size: ${(0, _v1.rem)(14)};
    }
    width: ${(0, _v1.rem)(300)};
    margin: 0 auto;
    background-color: var(--vimeo-colors-fill-surface);
    color: var(--vimeo-colors-text-primary);
    border: ${(0, _v1.rem)(1)} solid var(--vimeo-colors-stroke);
    svg {
      min-width: auto;
    }
    &:hover {
      background-color: var(--vimeo-colors-fill-surface);
    }
  }
`;
  _v0.s(["AppleIcon", 0, _v7, "FacebookIcon", 0, _v9, "FacebookIconContainer", 0, _v10, "GoogleIcon", 0, _v8, "SocialButton", 0, _v11]);
}