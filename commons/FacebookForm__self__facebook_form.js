{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["FacebookForm", 0, function ({
    xsrft: _v0,
    action: _v1,
    children: _v2,
    optIn: _v3,
    onClick: _v4,
    onSubmit: _v5,
    redirectUrl: _v6,
    target: _v7 = "_self",
    className: _v8,
    turnstileToken: _v9
  }) {
    let _v10 = {
      id: "facebook_form",
      method: "POST",
      action: "join" === _v1 ? "/join" : "/log_in",
      noValidate: !0,
      onSubmit: _v5,
      target: _v7
    };
    return "_blank" === _v7 && (_v10.rel = "opener"), (0, _v1.jsxs)("form", {
      ..._v10,
      children: [(0, _v1.jsx)("input", {
        type: "hidden",
        name: "service",
        value: "facebook"
      }), (0, _v1.jsx)("input", {
        type: "hidden",
        name: "action",
        value: _v1
      }), (0, _v1.jsx)("input", {
        type: "hidden",
        name: "token",
        value: _v0
      }), null !== _v9 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "cf-turnstile-response",
        value: `${_v9}`
      }), _v6 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "redirect",
        value: _v6
      }), null !== _v3 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "marketing_opt_in",
        value: `${_v3}`
      }), (0, _v1.jsx)(_v2.SocialButton, {
        className: _v8,
        icon: (0, _v1.jsx)(_v2.FacebookIconContainer, {
          children: (0, _v1.jsx)(_v2.FacebookIcon, {})
        }),
        format: "secondary",
        onClick: () => _v4?.(),
        children: _v2
      })]
    });
  }], 0), _v0.s(["GoogleForm", 0, function ({
    id: _v0 = "google_form",
    xsrft: _v1,
    action: _v2,
    children: _v3,
    optIn: _v4,
    turnstileToken: _v5,
    redirectUrl: _v6,
    onClick: _v7,
    onSubmit: _v8,
    redirectUrlAfterSocialLogin: _v9,
    redirectUrlAfterSocialJoin: _v10,
    socialSubmitBtn: _v11,
    target: _v12 = "_self",
    source: _v13,
    className: _v14
  }) {
    let _v15 = {
      id: _v0,
      method: "POST",
      action: "join" === _v2 ? "/join" : "/log_in",
      noValidate: !0,
      onSubmit: _v8,
      target: _v12
    };
    return "_blank" === _v12 && (_v15.rel = "opener"), (0, _v1.jsxs)("form", {
      ..._v15,
      children: [(0, _v1.jsx)("input", {
        type: "hidden",
        name: "service",
        value: "google"
      }), (0, _v1.jsx)("input", {
        type: "hidden",
        name: "action",
        value: _v2
      }), (0, _v1.jsx)("input", {
        type: "hidden",
        name: "token",
        value: _v1
      }), _v6 && "undefined" !== _v6 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "redirect",
        value: _v6
      }), _v9 && "undefined" !== _v9 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "redirect_url_after_social_login",
        value: _v9
      }), _v10 && "undefined" !== _v10 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "redirect_url_after_social_join",
        value: _v10
      }), null !== _v4 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "marketing_opt_in",
        value: `${_v4}`
      }), null !== _v5 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "cf-turnstile-response",
        value: `${_v5}`
      }), _v13 && (0, _v1.jsx)("input", {
        type: "hidden",
        name: "source",
        value: _v13
      }), _v11 || (0, _v1.jsx)(_v2.SocialButton, {
        className: _v14,
        icon: (0, _v1.jsx)(_v2.GoogleIcon, {}),
        format: "secondary",
        onClick: () => _v7?.(),
        children: _v3
      })]
    });
  }], 0);
}