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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useContext)(_v10.ViewerContext),
      [_v2, _v3] = (0, _v2.useState)(!1);
    return !_v1 || _v2 ? (0, _v1.jsx)(_v5.Flex, {
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      children: (0, _v1.jsx)(_v6.Spinner, {
        size: "lg"
      })
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v8.DefaultNavigation, {}), (0, _v1.jsx)(_v5.Flex, {
        marginTop: "2xl",
        marginLeft: "xl",
        children: (0, _v1.jsx)(_v4.Button, {
          size: "lg",
          variant: "tertiary",
          leftIcon: (0, _v1.jsx)(_v7.ArrowLeft, {}),
          onClick: () => {
            _v3(!0), window.location.href = _v11.settingsPageUrl;
          },
          children: _v12.default.BackToSettings
        })
      }), (0, _v1.jsx)(_v3.Box, {
        sx: {
          width: "56%",
          alignSelf: "center",
          overflow: "auto",
          height: "calc(100vh - 12rem)"
        },
        children: (0, _v1.jsx)(_v3.Box, {
          padding: 16,
          children: _v0
        })
      }), (0, _v1.jsx)(_v3.Box, {
        height: "60",
        children: _v1 && (0, _v1.jsx)(_v9.EssentialFooter, {
          ..._v1,
          enableQuotaMenu: !1
        })
      })]
    });
  };
  _v0.s(["getSharedContentLayout", 0, _v0 => (0, _v1.jsx)(_v13, {
    children: _v0
  })]);
}