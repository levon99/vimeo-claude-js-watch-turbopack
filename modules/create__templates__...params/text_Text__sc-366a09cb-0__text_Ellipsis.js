{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v2.default.div.withConfig({
      displayName: "text__Text",
      componentId: "sc-366a09cb-0"
    })`
  font-family: Arial, system-ui, sans-serif;
  color: ${_v0 => _v0.color};
  font-size: ${_v0 => _v0.fontSize || (0, _v1.rem)(14)};
  font-weight: ${_v0 => _v0.weight};
`,
    _v9 = _v2.default.div.withConfig({
      displayName: "text__Ellipsis",
      componentId: "sc-366a09cb-1"
    })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,
    _v10 = (0, _v2.default)(_v9).withConfig({
      displayName: "text__DisplayTextEllipsis",
      componentId: "sc-366a09cb-2"
    })`
  color: #1a2e3b;
`;
  (0, _v2.default)(_v9).withConfig({
    displayName: "text__MutedTextEllipsis",
    componentId: "sc-366a09cb-3"
  })`
  color: #8498a4;
`;
  let _v11 = (0, _v2.default)(_v8).withConfig({
    displayName: "text__MutedText",
    componentId: "sc-366a09cb-4"
  })`
  color: #8498a4;
`;
  (0, _v2.default)(_v11).withConfig({
    displayName: "text__MutedTextNoSpaceWrap",
    componentId: "sc-366a09cb-5"
  })`
  white-space: nowrap;
`;
  let _v12 = (0, _v2.default)(_v8).withConfig({
    displayName: "text__DisplayText",
    componentId: "sc-366a09cb-6"
  })`
  color: #1a2e3b;
`;
  (0, _v2.default)(_v8).withConfig({
    displayName: "text__Link",
    componentId: "sc-366a09cb-7"
  })`
  cursor: pointer;
  color: ${_v7.vimeoBlue};
`, (0, _v2.default)(_v12).withConfig({
    displayName: "text__ModalTitle",
    componentId: "sc-366a09cb-8"
  })`
  font-size: ${(0, _v1.rem)(28)};
  font-weight: 500;
`, _v0.s(["DisplayText", 0, _v12, "DisplayTextEllipsis", 0, _v10, "Ellipsis", 0, _v9, "Text", 0, _v8], 0);
  let _v13 = _v2.default.div.withConfig({
      displayName: "popup.component__Overlay",
      componentId: "sc-5c63e19d-0"
    })`
  position: ${_v0 => _v0.overlayPosition};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
`,
    _v14 = (0, _v2.default)(_v6.CenterAbsoluteChild).withConfig({
      displayName: "popup.component__PopupWrapper",
      componentId: "sc-5c63e19d-1"
    })`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: ${(0, _v1.rem)(20)};
  border-radius: ${(0, _v1.rem)(3)};
  box-shadow: 0 ${(0, _v1.rem)(6)} ${(0, _v1.rem)(10)} 0 rgba(0, 0, 0, 0.12);
`,
    _v15 = (0, _v2.default)(_v6.HBox).withConfig({
      displayName: "popup.component__PopupHeader",
      componentId: "sc-5c63e19d-2"
    })``,
    _v16 = (0, _v2.default)(_v12).withConfig({
      displayName: "popup.component__PopupTitle",
      componentId: "sc-5c63e19d-3"
    })`
  font-size: ${(0, _v1.rem)(18)};
  letter-spacing: ${(0, _v1.rem)(.2)};
  line-height: ${(0, _v1.rem)(24)};
  font-weight: 600;
  max-width: 80%;
`,
    _v17 = (0, _v2.default)(_v6.HBox).withConfig({
      displayName: "popup.component__PopupContent",
      componentId: "sc-5c63e19d-4"
    })`
  flex: 1;
  position: relative;
`,
    _v18 = ({
      title: _v0,
      content: _v1,
      footer: _v2,
      onClose: _v3,
      className: _v4,
      overlayPosition: _v5,
      disableXCloseButton: _v6
    }) => (0, _v4.jsx)(_v13, {
      overlayPosition: void 0 === _v5 ? "absolute" : _v5,
      children: (0, _v4.jsxs)(_v14, {
        className: _v4,
        children: [(0, _v4.jsxs)(_v15, {
          align: "center",
          justify: "space-between",
          children: [(0, _v4.jsx)(_v16, {
            children: (0, _v4.jsx)(_v9, {
              children: _v0
            })
          }), _v6 ? null : (0, _v4.jsx)(_v5.default, {
            onClick: () => {
              _v3();
            }
          })]
        }), (0, _v4.jsx)(_v17, {
          children: _v1
        }), _v2]
      })
    });
  _v0.s(["default", 0, _v18], 0);
  let _v19 = (0, _v2.default)(_v3.Button).withConfig({
      displayName: "preview-edit-save-buttons-style__EditButton",
      componentId: "sc-702865c2-0"
    })`
  margin-right: ${(0, _v1.rem)(15)};
  min-width: ${(0, _v1.rem)(112)};
`,
    _v20 = _v2.default.div.withConfig({
      displayName: "preview-edit-save-buttons-style__ThemeModalOverlay",
      componentId: "sc-702865c2-1"
    })`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
`,
    _v21 = (0, _v2.default)(_v6.CenterAbsoluteChild).withConfig({
      displayName: "preview-edit-save-buttons-style__ThemeModal",
      componentId: "sc-702865c2-2"
    })`
  height: ${(0, _v1.rem)(544)};
  width: ${(0, _v1.rem)(520)};
`,
    _v22 = (0, _v2.default)(_v18).withConfig({
      displayName: "preview-edit-save-buttons-style__ErrorPopup",
      componentId: "sc-702865c2-3"
    })`
  width: 80%;
`,
    _v23 = (0, _v2.default)(_v12).withConfig({
      displayName: "preview-edit-save-buttons-style__ErrorPopupContent",
      componentId: "sc-702865c2-4"
    })`
  padding: ${(0, _v1.rem)(20)} 0;
  line-height: ${(0, _v1.rem)(24)};
`,
    _v24 = (0, _v2.default)(_v20).withConfig({
      displayName: "preview-edit-save-buttons-style__StyledThemeModalOverlay",
      componentId: "sc-702865c2-5"
    })`
  position: fixed;
`;
  _v0.s(["EditButton", 0, _v19, "ErrorPopup", 0, _v22, "ErrorPopupContent", 0, _v23, "StyledThemeModalOverlay", 0, _v24, "ThemeModal", 0, _v21], 0);
}