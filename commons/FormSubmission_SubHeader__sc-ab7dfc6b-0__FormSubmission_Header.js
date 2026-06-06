{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = _v4.default.div.withConfig({
      displayName: "FormSubmission__SubHeader",
      componentId: "sc-ab7dfc6b-0"
    })`
  font-size: ${(0, _v5.rem)(16)};
  line-height: ${(0, _v5.rem)(24)};
  margin-bottom: ${(0, _v5.rem)(32)};
  text-align: center;
  max-width: ${(0, _v5.rem)(640)};
`,
    _v10 = _v4.default.div.withConfig({
      displayName: "FormSubmission__Header",
      componentId: "sc-ab7dfc6b-1"
    })`
  font-size: ${(0, _v5.rem)(36)};
  line-height: ${(0, _v5.rem)(42)};
  margin-top: ${(0, _v5.rem)(32)};
  margin-bottom: ${(0, _v5.rem)(32)};
  text-align: center;
  font-weight: 700;
`;
  _v4.default.div.withConfig({
    displayName: "FormSubmission__Icon",
    componentId: "sc-ab7dfc6b-2"
  })`
  font-size: ${(0, _v5.rem)(64)};
`;
  let _v11 = _v4.default.div.withConfig({
    displayName: "FormSubmission__Container",
    componentId: "sc-ab7dfc6b-3"
  })`
  min-height: calc(100vh - ${(0, _v5.rem)(130)});
  padding: ${(0, _v5.rem)(72)} ${(0, _v5.rem)(24)};
  background: linear-gradient(107.96deg, #bcd9ff 14.43%, #edd0ff 96.02%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
  _v0.s(["default", 0, function ({
    header: _v0,
    subheader: _v1,
    eventKey: _v2
  }) {
    let _v3 = (0, _v3.useMemo)(_v7.getTranslatedStrings, []);
    return (0, _v1.jsxs)(_v11, {
      children: [(0, _v1.jsx)(_v10, {
        children: _v0
      }), (0, _v1.jsx)(_v9, {
        children: _v1
      }), (0, _v1.jsx)(_v2.default, {
        href: "/experts/dashboard",
        children: (0, _v1.jsx)(_v6.Button, {
          size: "lg",
          onClick: () => {
            _v2 && (0, _v8.trackEvent)({
              eventKey: _v2
            });
          },
          children: _v3.TrialSuccessButton
        })
      })]
    });
  }]);
}