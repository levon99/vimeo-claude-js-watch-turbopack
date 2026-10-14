{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v1.default.div.withConfig({
    displayName: "style__IframeContent",
    componentId: "sc-a95f7f8d-0"
  })`
  position: relative;
  overflow: hidden;
  height: ${({
    shareModalSize: _v0
  }) => (0, _v2.rem)(_v0)};

  & > iframe {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border: 0;
    overflow: hidden;
  }
`;
  _v1.default.a.withConfig({
    displayName: "style__BadgeWrapper",
    componentId: "sc-a95f7f8d-1"
  })`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: ${(0, _v2.rem)(8)};
`;
  let _v5 = _v1.default.span.withConfig({
      displayName: "style__ToggleSpan",
      componentId: "sc-a95f7f8d-2"
    })`
  width: ${(0, _v2.rem)(40)};
`,
    _v6 = {
      marginBottom: (0, _v2.rem)(8)
    },
    _v7 = {
      paddingLeft: (0, _v2.rem)(24),
      paddingRight: (0, _v2.rem)(24)
    },
    _v8 = (0, _v1.default)(_v3.Skeleton).withConfig({
      displayName: "style__PrivacyDropdownSkeleton",
      componentId: "sc-a95f7f8d-3"
    })`
  border-radius: ${(0, _v2.rem)(6)};
  width: 100%;
  height: ${({
      hasDescription: _v0 = !0,
      isMobile: _v1 = !1
    }) => _v1 ? (0, _v2.rem)(40) : _v0 ? (0, _v2.rem)(60) : (0, _v2.rem)(48)};
`,
    _v9 = _v1.default.span.withConfig({
      displayName: "style__CustomAlertDescription",
      componentId: "sc-a95f7f8d-4"
    })`
  font-size: ${(0, _v2.rem)(14)};
`,
    _v10 = {
      "&::-webkit-scrollbar": {
        width: (0, _v2.rem)(10),
        backgroundColor: "inherit"
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: (0, _v2.rem)(100),
        backgroundColor: "gray.200"
      }
    },
    _v11 = {
      width: "100%",
      resize: "vertical",
      wordBreak: "break-all",
      "&::-webkit-scrollbar-track": {
        mt: "sm"
      },
      ..._v10
    },
    _v12 = {
      color: "transparent",
      textShadow: `0 0 ${(0, _v2.rem)(5)} rgba(0, 0, 0, 0.25)`
    },
    _v13 = {
      display: "flex",
      justifyContent: "right",
      paddingTop: (0, _v2.rem)(16),
      gap: (0, _v2.rem)(12),
      md: {
        gap: (0, _v2.rem)(16)
      }
    };
  _v0.s(["CustomAlertDescription", 0, _v9, "DESKTOP_TEXT_AREA_HEIGHT", 0, 72, "EmbedCodeFooterStyle", 0, _v13, "EmbedTextAreaStyle", 0, _v11, "EmbedTextAreaStyleDisabled", 0, _v12, "IframeContent", 0, _v4, "MOBILE_TEXT_AREA_HEIGHT", 0, 40, "MarginBottomStyle", 0, _v6, "PrivacyDropdownSkeleton", 0, _v8, "ScrollbarStyle", 0, _v10, "ToggleSpan", 0, _v5, "XPaddingStyle", 0, _v7]);
}