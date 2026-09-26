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
  let _v10 = _v4.default.div.withConfig({
      displayName: "ContactUsBanner__UpsellBar",
      componentId: "sc-fe8c4d3e-0"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(0, _v2.rem)(6)} ${(0, _v2.rem)(16)};
  background: ${_v7.color.upsell.New};
`,
    _v11 = (0, _v4.default)(_v6.Button).withConfig({
      displayName: "ContactUsBanner__ContactUsButton",
      componentId: "sc-fe8c4d3e-1"
    })`
  height: ${(0, _v2.rem)(33)};
  margin-left: ${(0, _v2.rem)(25)};
  color: ${_v5.white};
  flex: none;
  background: ${(0, _v2.rgba)(_v5.black, .2)};
  text-decoration: none;
  font-weight: 500;
  border-radius: ${(0, _v2.rem)(6)};

  &:hover {
    color: ${_v5.white};
    background: ${(0, _v2.rgba)(_v5.black, .2)};
  }

  &:active {
    background: ${(0, _v2.rgba)(_v5.black, .2)};
  }
  > span {
    overflow: unset;
  }
`,
    _v12 = (0, _v4.default)(_v8.Text).withConfig({
      displayName: "ContactUsBanner__UpsellText",
      componentId: "sc-fe8c4d3e-2"
    })`
  color: ${_v5.white};
  font-weight: 700;
  font-size: ${(0, _v2.rem)(14)};
  line-height: ${(0, _v2.rem)(22)};
`,
    _v13 = (0, _v4.default)(_v6.Button).withConfig({
      displayName: "ContactUsBanner__Dismiss",
      componentId: "sc-fe8c4d3e-3"
    })`
  color: ${_v5.white};
  border: none;
  left: ${(0, _v2.rem)(10)};
  flex: none;
  &:hover {
    border: none;
    color: ${_v5.white};
    background: ${(0, _v2.rgba)(_v5.black, .2)};
  }
  svg {
    width: ${(0, _v2.rem)(12)};
    height: ${(0, _v2.rem)(12)};
  }
`;
  _v0.s(["ContactUsBanner", 0, ({
    message: _v0,
    buttonMessage: _v1,
    buttonLink: _v2,
    isDismissable: _v3 = !1,
    onClick: _v4 = () => {},
    style: _v5,
    openInNewTab: _v6 = !0
  }) => {
    let [_v7, _v8] = (0, _v3.useState)(!0);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v7 && (0, _v1.jsxs)(_v10, {
        style: _v5,
        children: [(0, _v1.jsx)(_v12, {
          children: _v0
        }), _v2 && (0, _v1.jsx)(_v11, {
          variant: "hyperminimal",
          target: "_blank",
          onClick: () => {
            _v4(), _v6 && window.open(_v2, "_blank");
          },
          children: _v1
        }), _v3 && (0, _v1.jsx)(_v13, {
          size: "sm",
          variant: "minimalTransparent",
          format: "basic",
          onClick: () => {
            _v8(!1);
          },
          children: _v9.T.Dismiss
        })]
      })
    });
  }]);
}