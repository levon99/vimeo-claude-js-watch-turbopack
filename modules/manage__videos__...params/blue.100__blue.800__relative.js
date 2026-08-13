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
  let _v10 = (0, _v2.forwardRef)(({
    alertLinkText: _v0,
    alertText: _v1,
    isRichText: _v2,
    onAlertClose: _v3,
    onAlertLinkClick: _v4
  }, _v5) => {
    let _v6 = (0, _v8.useColorModeValue)("blue.100", "blue.800");
    return (0, _v1.jsxs)(_v5.Flex, {
      mt: _v2 ? (0, _v7.rem)(30) : (0, _v7.rem)(10),
      width: "100%",
      position: "relative",
      backgroundColor: _v6,
      height: (0, _v7.rem)(36),
      borderRadius: (0, _v7.rem)(8),
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: (0, _v7.rem)(12),
      padding: `0 ${(0, _v7.rem)(8)} 0 ${(0, _v7.rem)(16)}`,
      _before: {
        content: '""',
        position: "absolute",
        top: (0, _v7.rem)(-8),
        right: (0, _v7.rem)(14),
        width: "0",
        height: "0",
        borderLeft: `${(0, _v7.rem)(8)} solid transparent`,
        borderRight: `${(0, _v7.rem)(8)} solid transparent`,
        borderBottom: `${(0, _v7.rem)(8)} solid ${_v6}`
      },
      children: [(0, _v1.jsxs)(_v3.Box, {
        children: [(0, _v1.jsx)(_v3.Box, {
          as: "span",
          mr: (0, _v7.rem)(4),
          children: _v1
        }), (0, _v1.jsx)(_v4.Button, {
          p: 0,
          _hover: {
            backgroundColor: "transparent !important"
          },
          fontSize: (0, _v7.rem)(12),
          variant: "tertiary",
          textDecoration: "underline",
          ref: _v5,
          onClick: _v4,
          children: _v0
        })]
      }), (0, _v1.jsx)(_v6.IconButton, {
        icon: (0, _v1.jsx)(_v9.CloseXSmallFilled, {}),
        "aria-label": "close alert",
        onClick: _v3,
        size: "xs",
        variant: "tertiary"
      })]
    });
  });
  _v0.s(["AiAlert", 0, _v10]);
}