{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["ListViewHoverActionsContainer", 0, ({
    children: _v0,
    onRename: _v1,
    disableHoverBackground: _v2 = !1
  }) => {
    let _v3 = (0, _v6.useColorModeValue)("linear-gradient(to right, transparent, #E8EAEE 30%)", "linear-gradient(to right, transparent, #1A2326 30%)");
    return (0, _v1.jsxs)(_v3.Box, {
      position: "absolute",
      right: "92px",
      display: {
        base: "none",
        md: "block"
      },
      children: [(0, _v1.jsx)(_v4.Flex, {
        width: (0, _v5.rem)(175),
        height: (0, _v5.rem)(40),
        position: "absolute",
        opacity: 0,
        right: (0, _v5.rem)(-45),
        bottom: "0",
        top: (0, _v5.rem)(4),
        _groupHover: _v2 ? void 0 : {
          background: _v3,
          opacity: 1,
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-in-out"
        }
      }), (0, _v1.jsx)(_v3.Box, {
        position: "absolute",
        top: (0, _v5.rem)(3),
        right: (0, _v5.rem)(-55),
        children: _v1 ? _v2.default.Children.map(_v0, _v0 => _v2.default.isValidElement(_v0) ? _v2.default.cloneElement(_v0, {
          onRename: _v1
        }) : _v0) : _v0
      })]
    });
  }]);
}