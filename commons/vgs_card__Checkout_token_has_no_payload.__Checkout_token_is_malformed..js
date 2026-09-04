{
  "use strict";

  function _v1(_v0) {
    return "vgs_card" === _v0.type;
  }
  function _v2(_v0) {
    let _v1 = _v0.split(".")[1];
    if (!_v1) throw Error("Checkout token has no payload.");
    let _v2 = JSON.parse(atob(_v1.replace(/-/g, "+").replace(/_/g, "/")));
    if (!("object" == typeof _v2 && null !== _v2 && "string" == typeof _v2.product_id && "string" == typeof _v2.user_id && "string" == typeof _v2.reference_key && Array.isArray(_v2.authorized_payment_methods) && _v2.authorized_payment_methods.every(_v0 => _v1(_v0)) && (void 0 === _v2.expires_at || "number" == typeof _v2.expires_at) && (void 0 === _v2.hcaptcha_site_key || "string" == typeof _v2.hcaptcha_site_key))) throw Error("Checkout token is malformed.");
    return _v2;
  }
  _v0.s(["decodeCheckoutToken", 0, _v2, "firstAuthorization", 0, function (_v0) {
    let _v1 = _v0.authorized_payment_methods[0];
    if (!_v1) throw Error("Checkout token authorizes no payment method.");
    return _v1;
  }, "isVgsCardAuthorization", 0, _v1], 0);
  let _v3 = "juno_checkout_token";
  function _v4() {
    try {
      sessionStorage.removeItem(_v3);
    } catch {}
  }
  _v0.s(["clearCachedToken", 0, _v4, "readCachedToken", 0, function (_v0) {
    try {
      let _v0 = sessionStorage.getItem(_v3);
      if (!_v0) return null;
      let _v1 = JSON.parse(_v0);
      if (!_v1.token || _v1.expiresAt <= Date.now() || void 0 === _v0 || _v2(_v1.token).user_id !== _v0) return _v4(), null;
      return _v1.token;
    } catch {
      return _v4(), null;
    }
  }, "writeCachedToken", 0, function (_v0, _v1) {
    try {
      sessionStorage.setItem(_v3, JSON.stringify({
        token: _v0,
        expiresAt: _v1
      }));
    } catch {}
  }], 0);
}