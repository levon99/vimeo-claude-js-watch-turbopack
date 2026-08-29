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
  let _v12 = [];
  _v0.s(["AdminLimitUpsellModal", 0, ({
    cancelLabel: _v0,
    isOpen: _v1,
    message: _v2,
    onClose: _v3,
    paywallStyle: _v4,
    paywallTrigger: _v5,
    primaryButtonLabel: _v6,
    title: _v7,
    upgradeUrl: _v8
  }) => {
    let {
        trackPaywallCtaClicked: _v9,
        trackPaywallDismissed: _v10
      } = (0, _v11.usePaywallTracking)({
        paywallTrigger: _v5,
        paywallLocation: "teams_settings",
        paywallType: "popup",
        paywallFeature: "team_admin_seats",
        paywallStyle: _v4,
        paywallPlansDisplayed: _v12,
        paywallPeriodicitiesDisplayed: _v12,
        isVisible: _v1
      }),
      _v11 = () => {
        _v10(), _v3();
      };
    return (0, _v1.jsxs)(_v4.Modal, {
      isOpen: _v1,
      onClose: _v11,
      size: "md",
      children: [(0, _v1.jsx)(_v9.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
        children: [(0, _v1.jsx)(_v6.ModalCloseButton, {}), (0, _v1.jsxs)(_v5.ModalBody, {
          pt: "40px",
          children: [(0, _v1.jsx)(_v3.Header, {
            size: "md",
            children: _v7
          }), (0, _v1.jsx)(_v10.Text, {
            variant: "body-md",
            color: "text-secondary",
            mt: "12px",
            children: _v2
          })]
        }), (0, _v1.jsxs)(_v8.ModalFooter, {
          children: [(0, _v1.jsx)(_v2.Button, {
            variant: "secondary",
            onClick: _v11,
            children: _v0
          }), (0, _v1.jsx)(_v2.Button, {
            variant: "primary",
            onClick: () => {
              _v9("upgrade"), window.open(_v8, "_blank"), _v3();
            },
            children: _v6
          })]
        })]
      })]
    });
  }]);
}