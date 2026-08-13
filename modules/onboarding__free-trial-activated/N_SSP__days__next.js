{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  (0, _v4.withPageSetup)(() => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v2.useSearchParams)(),
      _v1 = _v0?.get("days") === "14" ? 14 : 7,
      _v2 = _v0?.get("next"),
      _v3 = _v2 && (0, _v7.isVimeoRedirectableUrl)(_v2) ? _v2 : "/home";
    return (0, _v1.jsx)(_v6.OnboardingShell, {
      children: (0, _v1.jsx)(_v3.Flex, {
        grow: "1",
        gap: "3",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v3.Flex, {
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v1.jsx)(_v5.ActivatedScreen, {
            trialDays: _v1,
            onGotIt: () => {
              window.location.assign(_v3);
            }
          })
        })
      })
    });
  }], 0);
}