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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["SmallUpgradeBanner", 0, ({
    cta: _v0,
    sideNav: _v1 = !1,
    stacked: _v2 = !0,
    hasEnterprise: _v3,
    hasLiveSubscription: _v4 = !1,
    message: _v5,
    onUpsellClick: _v6,
    tracking: _v7,
    variant: _v8
  }) => {
    let {
        colorMode: _v9
      } = (0, _v7.useColorMode)(),
      _v10 = "light" === _v9 ? "upsell-secondary" : "purple.800",
      [_v11, _v12] = (0, _v2.useState)(!1),
      _v13 = _v3 ? _v9.ENTERPRISE_TEMPLATE_TYPE : _v9.DEFAULT_TEMPLATE_TYPE,
      _v14 = _v0 => {
        _v0.stopPropagation(), _v6?.(), _v12(!0);
      },
      _v15 = () => {
        _v12(!1);
      };
    return "BadgeOnly" === _v8 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v4.Button, {
        onClick: _v14,
        variant: "upsell",
        size: "xs",
        mx: (0, _v6.rem)(8),
        children: _v0
      }), _v11 && (0, _v1.jsx)(_v8.UpsellModal, {
        templateType: _v13,
        hasLiveSubscription: _v4,
        hideModal: _v15,
        entityType: _v10.ENTITY_TYPE.VIDEO,
        tracking: _v7
      })]
    }) : (0, _v1.jsx)(_v3.Box, {
      px: _v1 ? 0 : "md",
      my: "md",
      background: _v10,
      borderRadius: _v1 ? 0 : (0, _v6.rem)(12),
      children: (0, _v1.jsxs)(_v3.Box, {
        border: "none",
        background: _v10,
        borderRadius: _v1 ? 0 : (0, _v6.rem)(12),
        py: "md",
        px: (0, _v6.rem)(_v1 ? "lg" : (0, _v6.rem)(20)),
        display: _v2 ? "block" : "flex",
        alignItems: _v2 ? "flex-start" : "center",
        children: [(0, _v1.jsx)(_v5.Paragraph, {
          size: "md",
          color: "text-primary",
          display: _v2 ? "inline-block" : void 0,
          children: _v5
        }), (0, _v1.jsx)(_v4.Button, {
          onClick: _v14,
          variant: "upsell",
          width: "auto",
          mt: _v2 ? (0, _v6.rem)(12) : 0,
          ml: _v2 ? 0 : (0, _v6.rem)(20),
          size: "sm",
          children: _v0
        }), _v11 && (0, _v1.jsx)(_v8.UpsellModal, {
          templateType: _v13,
          hasLiveSubscription: _v4,
          hideModal: _v15,
          entityType: _v10.ENTITY_TYPE.VIDEO,
          tracking: _v7
        })]
      })
    });
  }]);
}