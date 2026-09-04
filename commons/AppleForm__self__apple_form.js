{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["AppleForm", 0, function ({
    xsrft: _v0,
    action: _v1,
    children: _v2,
    optIn: _v3,
    redirectUrl: _v4,
    redirectUrlAfterSocialLogin: _v5,
    redirectUrlAfterSocialJoin: _v6,
    onClick: _v7,
    onSubmit: _v8,
    className: _v9,
    turnstileToken: _v10,
    target: _v11 = "_self"
  }) {
    let _v12 = {
      id: "apple_form",
      method: "POST",
      action: "join" === _v1 ? "/join" : "/log_in",
      noValidate: !0,
      onSubmit: _v8,
      target: _v11
    };
    return "_blank" === _v11 && (_v12.rel = "opener"), (0, _v1.jsxs)("form", {
      ..._v12,
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
      }), null !== _v10 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "cf-turnstile-response",
        value: `${_v10}`
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
      }), (0, _v1.jsx)(_v2.SocialButton, {
        className: _v9,
        icon: (0, _v1.jsx)(_v2.AppleIcon, {}),
        format: "secondary",
        onClick: () => _v7?.(),
        children: _v2
      })]
    });
  }]);
}