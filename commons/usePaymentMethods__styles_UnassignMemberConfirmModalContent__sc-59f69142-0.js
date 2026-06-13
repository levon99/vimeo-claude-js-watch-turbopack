{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["usePaymentMethods", () => _v1.default], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v3.default.div.withConfig({
      displayName: "styles__UnassignMemberConfirmModalContent",
      componentId: "sc-59f69142-0"
    })`
  ${({
      theme: _v0
    }) => _v0.shadows[200]};
  position: relative;
  padding: ${(0, _v2.rem)(24)};
  border-radius: ${(0, _v2.rem)(8)};
  background: ${_v5.core.color.surface(500)};
  width: ${(0, _v2.rem)(360)};

  ${_v7.media.xmd`
    width: ${(0, _v2.rem)(500)};
  `}
`,
    _v9 = _v3.default.div.withConfig({
      displayName: "styles__ModalFooterBtnContainer",
      componentId: "sc-59f69142-1"
    })`
  display: flex;
  justify-content: flex-end;
`,
    _v10 = (0, _v3.default)(_v6.Paragraph).withConfig({
      displayName: "styles__SecondaryParagraph",
      componentId: "sc-59f69142-2"
    })`
  color: ${_v5.core.color.text(600)};
`,
    _v11 = (0, _v3.default)(_v4.Button).withConfig({
      displayName: "styles__CancelButton",
      componentId: "sc-59f69142-3"
    })`
  margin: 0 ${(0, _v2.rem)(10)};
  font-weight: 700;
`,
    _v12 = (0, _v3.default)(_v4.Button).withConfig({
      displayName: "styles__RemoveButton",
      componentId: "sc-59f69142-4"
    })`
  font-weight: 700;
`;
  _v0.s(["CancelButton", 0, _v11, "ModalFooterBtnContainer", 0, _v9, "RemoveButton", 0, _v12, "SecondaryParagraph", 0, _v10, "UnassignMemberConfirmModalContent", 0, _v8], 0);
}