{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["FooterContainer", 0, ({
    onLoginSuccess: _v0,
    viewer: _v1
  }) => {
    let _v2 = null === _v1,
      _v3 = !!_v1?.user,
      _v4 = !!_v1?.impressumQualifies,
      _v5 = !!_v1?.terminateContractQualifies;
    return (0, _v1.jsx)(_v3.LoginJoinModal, {
      type: "join",
      xsrft: _v1?.xsrft || "",
      onSuccess: _v0,
      children: () => (0, _v1.jsxs)(_v2.Footer, {
        children: [!_v2 && !_v3 && (0, _v1.jsx)(_v2.Footer.Widgets, {
          onSignUpCtaClick: () => {
            window.location.href = "/join";
          }
        }), !_v3 && (0, _v1.jsx)(_v2.Footer.Links, {}), (0, _v1.jsx)(_v2.Footer.Legal, {
          impressumQualifies: _v4,
          terminateContractQualifies: _v5
        })]
      })
    });
  }]);
}