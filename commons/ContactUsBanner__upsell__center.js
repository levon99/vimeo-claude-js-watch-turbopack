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
  _v0.s(["ContactUsBanner", 0, ({
    message: _v0,
    buttonMessage: _v1,
    buttonLink: _v2,
    isDismissable: _v3 = !1,
    onClick: _v4 = () => {},
    style: _v5,
    openInNewTab: _v6 = !0
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(!0);
    if (!_v7) return null;
    let _v9 = _v3 ? () => {
      _v8(!1);
    } : void 0;
    return (0, _v1.jsxs)(_v3.AlertRoot, {
      variant: "upsell",
      alignItems: "center",
      style: _v5,
      sx: {
        paddingRight: _v9 ? "3rem" : "1rem"
      },
      children: [(0, _v1.jsx)(_v5.AlertIcon, {
        children: (0, _v1.jsx)(_v8.CircleExclamationFilled, {})
      }), (0, _v1.jsxs)(_v7.Flex, {
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "3",
        children: [(0, _v1.jsx)(_v4.AlertDescription, {
          children: _v0
        }), _v2 && (0, _v1.jsx)(_v6.Button, {
          variant: "upsell",
          size: "sm",
          flex: "none",
          onClick: () => {
            _v4(), _v6 && window.open(_v2, "_blank");
          },
          children: _v1
        })]
      }), _v9 && (0, _v1.jsx)(_v3.AlertCloseButton, {
        color: "upsell-primary",
        "aria-label": "Dismiss notice",
        onClick: _v9
      })]
    });
  }]);
}