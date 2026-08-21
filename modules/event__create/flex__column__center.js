{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ({
    children: _v0
  }) => (0, _v1.jsx)(_v2.Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    flexGrow: 1,
    width: "100%",
    minWidth: "100%",
    maxWidth: (0, _v3.rem)(0),
    maxHeight: (0, _v3.rem)(768),
    height: "100vh",
    position: "relative",
    children: _v0
  });
  (0, _v4.withPageSetup)(() => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      },
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v6.useCloseModalButtonRef)()?.current;
    return (0, _v1.jsx)(_v7, {
      children: (0, _v1.jsx)(_v5.EventCreationWizard, {
        isCreatePage: !0,
        onCancel: () => _v0?.click()
      })
    });
  }], 0);
}