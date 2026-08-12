{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["SmallUpgradeBanner", 0, ({
    button: _v0,
    cta: _v1,
    sideNav: _v2 = !1,
    stacked: _v3 = !0,
    style: _v4
  }) => {
    let {
        colorMode: _v5
      } = (0, _v5.useColorMode)(),
      {
        label: _v6,
        ..._v7
      } = _v0 || {},
      {
        label: _v8,
        ..._v9
      } = "string" == typeof _v1 ? {
        label: _v1
      } : _v1 || {};
    return (0, _v1.jsx)(_v2.Box, {
      paddingX: _v2 ? 0 : (0, _v6.rem)(16),
      marginY: (0, _v6.rem)(16),
      style: _v4,
      children: (0, _v1.jsxs)(_v3.Flex, {
        borderRadius: _v2 ? 0 : (0, _v6.rem)(12),
        padding: _v2 ? `${(0, _v6.rem)(16)} ${(0, _v6.rem)(24)}` : `${(0, _v6.rem)(16)} ${(0, _v6.rem)(20)}`,
        direction: _v3 ? "column" : "row",
        gap: _v3 ? (0, _v6.rem)(12) : (0, _v6.rem)(16),
        alignItems: _v3 ? "flex-start" : "center",
        justifyContent: _v3 ? "flex-start" : "space-between",
        background: "light" === _v5 ? "upsell-secondary" : "purple.800",
        children: [(0, _v1.jsx)(_v4.Paragraph, {
          color: "text-primary",
          size: "md",
          ..._v9,
          children: _v8
        }), _v6 && (0, _v1.jsx)(_v7.UpgradeButton, {
          size: "sm",
          noMargin: !0,
          ..._v7,
          children: _v6
        })]
      })
    });
  }], 0);
}