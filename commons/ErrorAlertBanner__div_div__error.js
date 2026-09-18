{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["ErrorAlertBanner", 0, ({
    message: _v0,
    secondaryMsg: _v1,
    buttonText: _v2,
    onClose: _v3,
    buttonIcon: _v4,
    onButtonClick: _v5,
    secondaryMsgClick: _v6
  }) => (0, _v1.jsx)(_v4.Box, {
    sx: {
      "> div > div": {
        width: "100%"
      }
    },
    children: (0, _v1.jsx)(_v2.Alert, {
      status: "error",
      onClose: _v3,
      borderRadius: "sm",
      mt: "sm",
      children: (0, _v1.jsx)(_v3.AlertDescription, {
        children: (0, _v1.jsxs)(_v6.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          mr: "md",
          children: [(0, _v1.jsx)(_v7.Text, {
            variant: "body-md",
            children: _v0
          }), (0, _v1.jsxs)(_v6.Flex, {
            gap: "sm",
            children: [_v1 && (0, _v1.jsx)(_v5.Button, {
              size: "xs",
              variant: "tertiary",
              borderRadius: "input-xs",
              onClick: _v6,
              children: _v1
            }), _v2 && (0, _v1.jsx)(_v5.Button, {
              size: "xs",
              variant: "secondary",
              leftIcon: _v4,
              borderRadius: "input-xs",
              onClick: _v5,
              children: _v2
            })]
          })]
        })
      })
    })
  })]);
}