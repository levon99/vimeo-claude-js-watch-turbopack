{
  "use strict";

  let _v1 = "post_signup_redirect",
    _v2 = "post_login_redirect",
    _v3 = _v0 => "routed" === _v0.status ? _v0.signupRedirect : void 0,
    _v4 = _v0 => "routed" === _v0.status ? _v0.loginRedirect : void 0,
    _v5 = async _v0 => {
      if (void 0 === _v0) return;
      let _v1 = await _v0;
      return "routed" === _v1.status ? _v1.signupRedirect : void 0;
    },
    _v6 = async _v0 => {
      if (void 0 === _v0) return;
      let _v1 = await _v0;
      return "routed" === _v1.status ? _v1.loginRedirect : void 0;
    };
  _v0.s(["POST_LOGIN_REDIRECT_PARAM", 0, _v2, "POST_SIGNUP_REDIRECT_PARAM", 0, _v1, "loginRedirectFromResolution", 0, _v4, "resolveLoginRedirect", 0, _v6, "resolveSignupRedirect", 0, _v5, "serializeRoutingOverrides", 0, _v0 => {
    let _v1 = new URLSearchParams(),
      _v2 = _v3(_v0),
      _v3 = _v4(_v0);
    return void 0 !== _v2 && _v1.set(_v1, _v2), void 0 !== _v3 && _v1.set(_v2, _v3), _v1.toString();
  }, "signupRedirectFromResolution", 0, _v3]);
}