{
  "use strict";

  let _v1 = "bundle_offer_toggle";
  _v0.s(["BUNDLE_OFFER_TOGGLE_PARAM", 0, _v1, "consumeBundleOfferToggleParam", 0, () => {
    let _v0 = new URLSearchParams(window.location.search);
    if ("1" !== _v0.get(_v1)) return !1;
    _v0.delete(_v1);
    let _v1 = _v0.toString();
    return window.history.replaceState(window.history.state, "", _v1 ? `${window.location.pathname}?${_v1}` : window.location.pathname), !0;
  }, "withBundleOfferToggleParam", 0, (_v0, _v1) => {
    if (!_v1) return _v0;
    let [_v2, _v3 = ""] = _v0.split("?"),
      _v4 = new URLSearchParams(_v3);
    _v4.set(_v1, "1");
    let _v5 = _v4.toString();
    return _v5 ? `${_v2}?${_v5}` : _v2;
  }]);
}