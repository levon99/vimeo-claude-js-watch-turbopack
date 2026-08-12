{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "1100px",
    _v6 = {
      small: 480,
      medium: 769,
      mediumLarge: 0,
      large: 0
    },
    _v7 = _v2.default.div.withConfig({
      displayName: "Header__DesktopHeaderContainer",
      componentId: "sc-73684cb2-0"
    })`
  height: ${(0, _v1.rem)(60)};
  padding: 0 ${(0, _v1.rem)(30)};
  justify-content: normal;
  width: 100%;
  display: flex;
  align-items: center;
`,
    _v8 = _v2.default.div.withConfig({
      displayName: "Header__WayfinderContainer",
      componentId: "sc-73684cb2-1"
    })`
  height: ${(0, _v1.rem)(64)};
  padding: 0;
  justify-content: normal;
  width: 100%;
  display: flex;
  align-items: center;
`,
    _v9 = _v2.default.div.withConfig({
      displayName: "Header__MobileHeaderContainer",
      componentId: "sc-73684cb2-2"
    })`
  width: 100%;
`,
    _v10 = _v0 => {
      switch (_v0) {
        case "es":
        case "pt-BR":
        case "de-DE":
          return "1152px";
        case "fr-FR":
          return "1200px";
        default:
          return _v5;
      }
    },
    _v11 = _v2.default.header.withConfig({
      displayName: "Header",
      componentId: "sc-73684cb2-3"
    })`
  position: relative;
  background: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v3.bokehTheme.colors.gray["900"] : _v3.bokehTheme.colors.gray["50"]};
  border-bottom: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v3.bokehTheme.colors.gray["700"] : "#d0d8db"};
  z-index: 999;

  ${({
      isBokeh: _v0,
      theme: _v1
    }) => _v0 && _v2.css`
        background: var(--vimeo-colors-background);
        border-bottom: unset;
        #global-nav {
          box-shadow: unset;
        }
        #new_video_button.activeState {
          background: ${_v1?.name === "dark" ? "var(--vimeo-colors-gray-200)" : "var(--vimeo-colors-gray-700)"};
        }
      `}

  & > ${_v7} {
    display: none;
  }
  & > ${_v9} {
    display: flex;
  }
  ${({
      locale: _v0
    }) => _v2.css`
    @media (min-width: ${_v10(_v0)}) {
      & > ${_v7} {
        display: flex;
      }
      & > ${_v9} {
        display: none;
      }
    }
  `}
`,
    _v12 = _v2.default.div.withConfig({
      displayName: "Header__HeaderMinimalWrapper",
      componentId: "sc-73684cb2-4"
    })`
  z-index: 1;
  height: ${(0, _v1.rem)(63)};
  width: 100%;
  background: ${({
      theme: _v0
    }) => `linear-gradient(${_v0.content.background}, ${(0, _v1.transparentize)(1, _v0.content.background)})`};
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: ${(0, _v1.rem)(0)} ${(0, _v1.rem)(10)};
  color: ${_v3.bokehTheme.colors.white};
  @media screen and (max-width: ${(0, _v1.rem)(_v6.medium)}) {
    padding-left: ${(0, _v1.rem)(16)};
  }
`,
    _v13 = _v2.default.div.withConfig({
      displayName: "Header__HeaderLeftContent",
      componentId: "sc-73684cb2-5"
    })`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,
    _v14 = _v2.default.div.withConfig({
      displayName: "Header__HeaderCenterContent",
      componentId: "sc-73684cb2-6"
    })`
  display: block;
  // Centers the logo on the header
  position: absolute;
  left: 50%;
  margin-right: -50%;
  margin-top: ${(0, _v1.rem)(40)};
  transform: translate(-50%, -50%);
  height: ${(0, _v1.rem)(63)};
`,
    _v15 = _v2.default.div.withConfig({
      displayName: "Header__HeaderRightContent",
      componentId: "sc-73684cb2-7"
    })`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > * {
    margin: 0 ${(0, _v1.rem)(4)};
  }
`,
    _v16 = (0, _v2.default)(_v4.Button).attrs({
      format: "soft"
    }).withConfig({
      displayName: "Header__HeaderButton",
      componentId: "sc-73684cb2-8"
    })`
  border-radius: ${(0, _v1.rem)(6)};
  text-decoration: none;
  height: ${(0, _v1.rem)(40)};
  padding: 0 ${(0, _v1.rem)(21)};
  box-sizing: border-box;
`,
    _v17 = _v0 => "es" === _v0 || "de-DE" === _v0 || "fr-FR" === _v0 || "pt-BR" === _v0;
  _v0.s(["BREAKPOINTS", 0, _v6, "DesktopHeaderContainer", 0, _v7, "Header", 0, _v11, "HeaderButton", 0, _v16, "HeaderCenterContent", 0, _v14, "HeaderLeftContent", 0, _v13, "HeaderMinimalWrapper", 0, _v12, "HeaderRightContent", 0, _v15, "MINIMUM_HEADER_HEIGHT", 0, 63, "MobileHeaderContainer", 0, _v9, "WayfinderContainer", 0, _v8, "getHeaderThresholdWidth", 0, _v10, "insertLatinStyling", 0, (_v0, _v1) => `@media (min-width: ${_v17(_v0) ? "1152px" : _v5}) and (max-width: ${(_v0 => {
    switch (_v0) {
      case "fr-FR":
      case "es":
      case "pt-BR":
        return "1400px";
      default:
        return "1294px";
    }
  })(_v0)}) {
    ${_v1}
  }`, "isLatinLang", 0, _v17, "localeBasedFontSize", 0, _v0 => _v2.css`
  @media (min-width: ${_v5}) {
    font-size: ${_v17(_v0) ? 13 : 15}px;
  }
  @media (min-width: 1440px) {
    font-size: ${_v17(_v0) ? 14 : 15}px;
  }
`]);
}