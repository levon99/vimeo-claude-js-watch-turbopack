{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["decodeOAuthQuery", 0, function (_v0) {
    return {
      email_policy: _v0?.email_policy && decodeURIComponent(_v0.email_policy),
      client_id: _v0?.client_id && decodeURIComponent(_v0.client_id),
      managed_user: _v0?.managed_user && decodeURIComponent(_v0.managed_user)
    };
  }, "useManagedUserOauthInfo", 0, function (_v0) {
    let [_v1, _v2] = (0, _v1.useState)(!0),
      [_v3, _v4] = (0, _v1.useState)({
        vimeo_user_exists: !1
      });
    return (0, _v1.useEffect)(() => {
      if (!_v0.client_id || _v0.client_id.length < 1) return;
      let _v0 = new URLSearchParams();
      _v0.client_id && _v0.append("client_id", _v0.client_id), _v0.managed_user && _v0.append("managed_user", _v0.managed_user), _v0.email_policy && _v0.append("email_policy", _v0.email_policy), fetch("/_next/oauth_user?" + _v0.toString(), {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      }).then(async _v0 => {
        _v4(await _v0.json()), _v2(!1);
      }).catch(() => {
        _v2(!1);
      });
    }, [_v0.client_id, _v0.managed_user, _v0.email_policy]), {
      isLoading: _v1,
      userInfo: _v3
    };
  }]);
}