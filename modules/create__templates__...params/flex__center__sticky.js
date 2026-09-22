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
  _v0.s(["default", 0, _v0 => {
    let {
        children: _v1,
        location: _v2
      } = _v0,
      {
        partnerConfig: _v3
      } = (0, _v2.useContext)(_v8.ConfigContext);
    return (0, _v1.jsx)(_v7.ThemeProvider, {
      children: (0, _v1.jsxs)(_v3.Box, {
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 999,
        width: "100%",
        padding: `${(0, _v4.rem)(15)} ${(0, _v4.rem)(30)}`,
        boxShadow: `0 ${(0, _v4.rem)(1)} 0 0 ${_v9.greyShade1}`,
        backgroundColor: _v9.greyShade2,
        flexBasis: "auto",
        children: [(0, _v1.jsx)(_v3.Box, {
          display: "flex",
          flex: "0 1 auto",
          width: "100%",
          children: (0, _v1.jsx)(_v5.Button, {
            backgroundColor: _v9.greyShade2,
            leftIcon: (0, _v1.jsx)(_v6.ArrowLeft, {}),
            fontWeight: 500,
            variant: "blur",
            onClick: () => _v3?.iframeModeConfig?.headerConfig?.onBackButtonClick(!1, _v2),
            children: _v3?.iframeModeConfig?.headerConfig?.backButtonText
          })
        }), (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          justifyContent: "center",
          sx: {
            "div: first-child": {
              display: "flex"
            }
          },
          children: _v3?.logo
        }), (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          flex: "0 1 auto",
          width: "100%",
          children: _v1
        })]
      })
    });
  }]);
}