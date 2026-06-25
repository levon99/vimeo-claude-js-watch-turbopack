{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v4.default.div.withConfig({
    displayName: "style__Divider",
    componentId: "sc-85e9034c-0"
  })`
  margin: 0;
  transform: translateY(-2px);
  background-color: ${_v7.core.color.stroke};
  height: ${(0, _v3.rem)(1)};
`, _v4.default.div.withConfig({
    displayName: "style__FlexWrapper",
    componentId: "sc-85e9034c-1"
  })`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 ${(0, _v3.rem)(8)};
`;
  let _v8 = (0, _v4.default)(_v5.Button).withConfig({
      displayName: "style__CloseIconStyle",
      componentId: "sc-85e9034c-2"
    })`
  position: absolute;
  top: ${(0, _v3.rem)(16)};
  right: ${(0, _v3.rem)(24)};
`,
    _v9 = (0, _v4.default)(_v6.Modal.Header).withConfig({
      displayName: "style__ModalHeader",
      componentId: "sc-85e9034c-3"
    })`
  margin-bottom: ${(0, _v3.rem)(28)};
  font-size: ${(0, _v3.rem)(18)};
  position: 'relative';
`,
    _v10 = _v4.default.div.withConfig({
      displayName: "style__Row",
      componentId: "sc-85e9034c-4"
    })`
  display: flex;
  width: 100%;
  ${({
      justifyContent: _v0,
      alignItems: _v1,
      flexDirection: _v2
    }) => _v4.css`
    justify-content: ${_v0 ?? "center"};
    align-items: ${_v1 ?? "center"};
    flex-direction: ${_v2 ?? "row"};
  `}
`,
    _v11 = _v4.default.div.withConfig({
      displayName: "style__Column",
      componentId: "sc-85e9034c-5"
    })`
  display: flex;
  ${({
      flexGrow: _v0,
      justifyContent: _v1,
      alignItems: _v2,
      flexDirection: _v3
    }) => _v4.css`
    flex-grow: ${_v0 ?? 1};
    justify-content: ${_v1 ?? "center"};
    align-items: ${_v2 ?? "center"};
    flex-direction: ${_v3 ?? "row"};
  `}
`;
  _v0.s(["CloseIconStyle", 0, _v8, "Column", 0, _v11, "ModalHeader", 0, _v9, "Row", 0, _v10], 0), _v0.s(["CloseButton", 0, _v0 => (0, _v1.jsx)(_v8, {
    icon: (0, _v1.jsx)(_v2.CloseX, {}),
    size: "sm",
    variant: "minimalTransparent",
    format: "basic",
    ..._v0
  })], 0);
}