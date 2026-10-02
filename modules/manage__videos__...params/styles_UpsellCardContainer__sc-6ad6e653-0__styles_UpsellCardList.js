{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v5.default.div.withConfig({
      displayName: "styles__UpsellCardContainer",
      componentId: "sc-6ad6e653-0"
    })`
  padding: ${(0, _v4.rem)(20)};
  background: ${_v6.UPGRADE_VIOLET_BG};
  border-radius: ${(0, _v4.rem)(12)};
  margin: ${(0, _v4.rem)(24)};
`,
    _v8 = _v5.default.ul.withConfig({
      displayName: "styles__UpsellCardList",
      componentId: "sc-6ad6e653-1"
    })`
  margin: 0 auto 0 ${(0, _v4.rem)(20)};
  line-height: 120%;
  list-style-type: disc;
  font-size: ${(0, _v4.rem)(16)};
  font-weight: 400;
  letter-spacing: ${(0, _v4.rem)(.32)};
  * {
    color: var(--vimeo-colors-purple-800, #5527a0);
  }
  li {
    margin-top: ${(0, _v4.rem)(12)};
  }
`,
    _v9 = _v5.default.div.withConfig({
      displayName: "styles__ButtonsWrapper",
      componentId: "sc-6ad6e653-2"
    })`
  margin-top: ${(0, _v4.rem)(24)};
`;
  var _v10 = _v0.i(0);
  _v0.s(["LargeUpgradeBanner", 0, ({
    list: _v0,
    button: _v1,
    secondaryButton: _v2,
    header: _v3,
    style: _v4
  }) => (0, _v1.jsxs)(_v7, {
    style: _v4,
    children: [(0, _v1.jsx)(_v3.Header, {
      size: "lg",
      color: "purple.800",
      fontWeight: 700,
      children: _v3
    }), _v0 && (0, _v1.jsx)(_v8, {
      children: _v0 && _v0.map((_v0, _v1) => (0, _v1.jsx)("li", {
        children: _v0
      }, `${_v1}-upsell-card-list`))
    }), (0, _v1.jsxs)(_v9, {
      children: [_v1 && (0, _v1.jsx)(_v10.UpgradeButton, {
        w: "100%",
        size: "md",
        noMargin: !0,
        onClick: _v1?.onClick,
        href: _v1?.href,
        children: _v1?.label
      }), _v2 && (0, _v1.jsx)(_v2.Button, {
        width: "100%",
        variant: "tertiary",
        href: _v2?.href,
        as: "a",
        target: _v1?.href ? "_blank" : "_self",
        onClick: _v2?.onClick,
        color: "slate.800",
        children: _v2?.label
      })]
    })]
  })], 0);
}