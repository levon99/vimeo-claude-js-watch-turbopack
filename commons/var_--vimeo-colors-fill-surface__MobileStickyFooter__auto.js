{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "var(--vimeo-colors-fill-surface)",
    _v5 = (0, _v3.rem)(20),
    _v6 = (0, _v3.rem)(24),
    _v7 = (0, _v3.rem)(20),
    _v8 = (0, _v3.rem)(400);
  _v0.s(["MobileStickyFooter", 0, function ({
    children: _v0,
    active: _v1,
    background: _v2 = _v4,
    desktopMarginTop: _v3 = 0,
    terms: _v4
  }) {
    return _v1 ? (0, _v1.jsx)(_v2.Box, {
      marginTop: "auto",
      position: "sticky",
      bottom: 0,
      width: "100vw",
      marginLeft: "50%",
      transform: "translateX(-50%)",
      background: _v2,
      paddingY: _v6,
      borderTopRadius: (0, _v3.rem)(20),
      boxShadow: "0 -4px 8px 0 rgba(0, 0, 0, 0.04)",
      children: (0, _v1.jsx)(_v2.Box, {
        width: "100%",
        maxW: _v8,
        marginInline: "auto",
        paddingX: _v7,
        children: null == _v4 ? _v0 : (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v4, (0, _v1.jsx)(_v2.Box, {
            marginTop: _v5,
            children: _v0
          })]
        })
      })
    }) : null == _v4 ? (0, _v1.jsx)(_v2.Box, {
      marginTop: _v3,
      children: _v0
    }) : (0, _v1.jsxs)(_v2.Box, {
      marginTop: _v3,
      children: [_v4, (0, _v1.jsx)(_v2.Box, {
        marginTop: _v5,
        children: _v0
      })]
    });
  }, "getStickyFooterBackground", 0, function (_v0) {
    return _v0 ? "white" : _v4;
  }]);
}