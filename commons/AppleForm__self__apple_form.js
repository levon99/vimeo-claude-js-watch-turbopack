{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["AppleForm", 0, function ({
    xsrft: _v0,
    action: _v1,
    children: _v2,
    optIn: _v3,
    redirectUrl: _v4,
    redirectUrlAfterSocialLogin: _v5,
    redirectUrlAfterSocialJoin: _v6,
    postSignupRedirect: _v7,
    postLoginRedirect: _v8,
    onClick: _v9,
    onSubmit: _v10,
    className: _v11,
    turnstileToken: _v12,
    target: _v13 = "_self",
    attribution: _v14
  }) {
    let _v15 = {
      id: "apple_form",
      method: "POST",
      action: "join" === _v1 ? "/join" : "/log_in",
      noValidate: !0,
      onSubmit: _v10,
      target: _v13
    };
    return "_blank" === _v13 && (_v15.rel = "opener"), (0, _v1.jsxs)("form", {
      ..._v15,
      children: [(0, _v1.jsx)("input", {
        type: "hidden",
        name: "service",
        value: "apple"
      }), (0, _v1.jsx)("input", {
        type: "hidden",
        name: "action",
        value: _v1
      }), (0, _v1.jsx)("input", {
        type: "hidden",
        name: "token",
        value: _v0
      }), null !== _v12 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "cf-turnstile-response",
        value: `${_v12}`
      }), _v4 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "redirect",
        value: _v4
      }), _v5 && "undefined" !== _v5 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "redirect_url_after_social_login",
        value: _v5
      }), _v6 && "undefined" !== _v6 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "redirect_url_after_social_join",
        value: _v6
      }), null !== _v3 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "marketing_opt_in",
        value: `${_v3}`
      }), (0, _v1.jsx)(_v3.PostAuthRoutingInputs, {
        signupRedirect: _v7,
        loginRedirect: _v8
      }), (0, _v1.jsx)(_v2.AuthAttributionInputs, {
        attribution: _v14
      }), (0, _v1.jsx)(_v4.SocialButton, {
        className: _v11,
        icon: (0, _v1.jsx)(_v4.AppleIcon, {}),
        format: "secondary",
        onClick: () => _v9?.(),
        children: _v2
      })]
    });
  }]);
}