{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v7.forwardRef)(function (_v0, _v1) {
      return _v7.default.createElement("svg", (0, _v6.c)({
        viewBox: "0 0 24 24",
        ref: _v1
      }, _v0), _v7.default.createElement("path", {
        d: "M21.71 13.29l-7-7-1.42 1.42 5.3 5.29H12c-4.77 0-7-2.23-7-7V3H3v3c0 5.89 3.11 9 9 9h6.59l-5.29 5.29 1.41 1.41 7-7a1 1 0 0 0 0-1.41z",
        fill: "#1a2e3b"
      }));
    }),
    _v9 = _v0.i(0);
  ({
    ...{
      background: _v4.bokehTheme.colors.gray["50"]
    },
    borderRadius: "4px",
    position: "relative"
  });
  let _v10 = _v2.default.div.withConfig({
    displayName: "styles__StyledNoticeWrapper",
    componentId: "sc-579b4229-0"
  })`
  margin: ${(0, _v3.rem)(10)} ${(0, _v3.rem)(21)} 0;
  p {
    font-size: ${(0, _v3.rem)(13)};
  }
  div {
    margin-bottom: 0;
  }
  span[format] {
    top: 0.85rem;
    left: 0.75rem;
  }
`;
  (0, _v2.default)(_v5.Badge).withConfig({
    displayName: "styles__StyledNewBadge",
    componentId: "sc-579b4229-1"
  })`
  margin-top: 0;
  background-color: #1140c6;
  color: ${_v4.bokehTheme.colors.white};
`;
  let _v11 = (0, _v2.default)(_v1.Menu).withConfig({
      displayName: "styles__StyleMenu",
      componentId: "sc-579b4229-2"
    })`
  ${_v9.core.edge(600)};
`,
    _v12 = (0, _v2.default)(_v8).withConfig({
      displayName: "styles__StyledArrowReply",
      componentId: "sc-579b4229-3"
    })`
  transform: scale(-1, 1);

  path {
    fill: ${({
      theme: _v0,
      hasMoments: _v1
    }) => _v1 && _v2.css`
        ${"light" === _v0.name ? "#3D4751" : _v9.core.color.text.secondary} !important
      `};
  }
`;
  _v0.s(["EXPANDED_SEARCH_WIDTH", 0, 500, "PADDING_FOR_MODE_SWITCHER", 0, 50, "StyleMenu", 0, _v11, "StyledArrowReply", 0, _v12, "StyledNoticeWrapper", 0, _v10], 0);
}