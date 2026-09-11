{
  "use strict";

  function _v1(_v0, _v1) {
    return fetch(_v0, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      body: _v1
    });
  }
  async function _v2() {
    let _v0 = await fetch("/survey/optout_auto_renew", {
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      credentials: "include"
    });
    if (!_v0.ok) throw Error(_v0.statusText);
    return _v0.json();
  }
  async function _v3({
    token: _v0,
    reason: _v1,
    comment: _v2
  }) {
    let _v3 = new FormData();
    return _v3.append("token", _v0), _v3.append("reason", _v1), _v2 && _v3.append("comment", _v2), _v1("/survey/optout_auto_renew", _v3);
  }
  async function _v4({
    token: _v0,
    userEntity: _v1
  }) {
    let _v2 = new FormData();
    _v2.append("token", _v0), _v2.append("no_redirect", "1"), "personal" === _v1 && _v2.append("is_force_optout", "1");
    let _v3 = await _v1("/store/optout", _v2);
    if (!_v3.ok) throw Error(_v3.statusText);
    window.location.href = "/settings/billing/membership_plan";
  }
  _v0.s(["getOptOutData", 0, _v2, "logRequest", 0, _v3, "submitOptOutRequest", 0, _v4]);
}