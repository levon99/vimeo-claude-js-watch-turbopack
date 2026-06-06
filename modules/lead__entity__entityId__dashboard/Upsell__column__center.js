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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["Upsell", 0, ({
    hasEnterprise: _v0,
    hasLiveSubscription: _v1 = !1,
    isEntityOwner: _v2,
    entityType: _v3,
    showExploreButton: _v4 = !0,
    onExploreForm: _v5,
    onUpsellClick: _v6
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(!1);
    return (0, _v1.jsxs)(_v6.Flex, {
      flex: 1,
      flexFlow: "column",
      alignItems: "center",
      textAlign: "center",
      height: "100%",
      children: [(0, _v1.jsx)(_v3.Box, {
        children: (0, _v1.jsx)(_v9.Registration, {
          boxSize: (0, _v8.rem)(54)
        })
      }), (0, _v1.jsx)(_v7.Paragraph, {
        mt: "md",
        mb: (0, _v8.rem)(20),
        color: "text-secondary",
        children: _v2 ? _v11.default.UpgradePromptText : _v11.default.UpgradeInfoForTeamUsers
      }), (0, _v1.jsxs)(_v5.Center, {
        width: "100%",
        flexDirection: "column",
        gap: (0, _v8.rem)(8),
        children: [_v2 && (0, _v1.jsx)(_v4.Button, {
          mt: "sm",
          width: _v4 ? "100%" : "auto",
          variant: "upsell",
          onClick: () => {
            _v6?.(), _v8(!0);
          },
          children: _v0 ? _v11.default.ContactUs : _v11.default.Upgrade
        }), _v4 && (0, _v1.jsx)(_v4.Button, {
          variant: "secondary",
          width: "100%",
          onClick: () => {
            _v5?.();
          },
          children: _v11.default.Explore
        })]
      }), _v7 && (0, _v1.jsx)(_v10.UpsellModal, {
        templateType: _v0 ? "enterprise" : "default",
        hasLiveSubscription: _v1,
        hideModal: () => {
          _v8(!1);
        },
        entityType: _v3
      })]
    });
  }]);
}