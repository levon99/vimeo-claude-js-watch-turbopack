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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v3.useContext)(_v11.ViewerContext),
      _v2 = (0, _v2.useRouter)(),
      [_v3, _v4] = (0, _v3.useState)(!1),
      _v5 = (0, _v13.getValidatedReturnUrl)(_v2?.query),
      _v6 = _v2?.pathname?.includes("/registration/email-defaults"),
      _v7 = _v5 ? _v14.default.BackToEvent : _v6 ? _v14.default.BackToRegistration : _v14.default.BackToSettings;
    return !_v1 || _v3 ? (0, _v1.jsx)(_v6.Flex, {
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      children: (0, _v1.jsx)(_v7.Spinner, {
        size: "lg"
      })
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v9.DefaultNavigation, {}), (0, _v1.jsx)(_v6.Flex, {
        marginTop: "2xl",
        marginLeft: "xl",
        children: (0, _v1.jsx)(_v5.Button, {
          size: "lg",
          variant: "tertiary",
          leftIcon: (0, _v1.jsx)(_v8.ArrowLeft, {}),
          onClick: () => {
            _v5 ? _v2.push(_v5) : _v6 ? _v2.push(_v12.REGISTRATION_SETTINGS_URL) : (_v4(!0), window.location.href = _v12.settingsPageUrl);
          },
          "data-id": "page-layout-back-button",
          children: _v7
        })
      }), (0, _v1.jsx)(_v4.Box, {
        sx: {
          width: "56%",
          alignSelf: "center",
          overflow: "auto",
          height: "calc(100vh - 12rem)"
        },
        children: (0, _v1.jsx)(_v4.Box, {
          padding: 16,
          children: _v0
        })
      }), (0, _v1.jsx)(_v4.Box, {
        height: "60",
        children: _v1 && (0, _v1.jsx)(_v10.EssentialFooter, {
          ..._v1,
          enableQuotaMenu: !1
        })
      })]
    });
  };
  _v0.s(["getSharedContentLayout", 0, _v0 => (0, _v1.jsx)(_v15, {
    children: _v0
  })]);
}