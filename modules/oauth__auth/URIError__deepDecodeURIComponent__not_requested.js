{
  "use strict";

  function _v1(_v0) {
    return function _v0(_v1, _v2) {
      if (5 === _v2) return _v1;
      try {
        let _v0 = decodeURIComponent(_v1);
        return _v0 === _v1 ? _v0 : _v0(_v0, _v2 + 1);
      } catch (_v0) {
        if ("URIError" === _v0.name) return _v1;
        throw _v0;
      }
    }(_v0, 0);
  }
  _v0.s(["deepDecodeURIComponent", 0, _v1], 0);
  var _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = ((_v2 = {}).TRANSFER_NOT_REQUESTED = "not_requested", _v2.TRANSFER_IN_PROGRESS = "in_progress", _v2.TRANSFER_COMPLETED = "completed", _v2.TRANSFER_FAILED = "failed", _v2);
  let _v6 = 0;
  _v0.s(["TransferStatus", () => _v5, "useManagedUserTransferStatus", 0, function (_v0, _v1, _v2, _v3) {
    let [_v4, _v5] = (0, _v3.useState)("not_requested"),
      [_v6, _v7] = (0, _v3.useState)();
    (0, _v3.useEffect)(() => {
      !async function () {
        let _v0 = await fetch(`/_next/jwt?managed_user=${_v2}`, {
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            }
          }),
          {
            token: _v1
          } = await _v0.json();
        _v7(_v1);
      }();
    }, [_v2]);
    let [_v8, {
        data: _v9,
        error: _v10,
        loading: _v11
      }] = (0, _v4.useLazyQuery)(`/apps/${_v0}/managed_users/${_v1}`),
      _v12 = (0, _v3.useRef)(void 0);
    return (0, _v3.useEffect)(() => (_v6 && (_v3 ? _v12.current = setInterval(() => {
      _v8({
        variables: {
          fields: "transfer_status"
        },
        headerOverride: {
          Authorization: `jwt ${_v6}`
        },
        resourceKey: (_v6++).toString()
      });
    }, _v3) : _v8({
      variables: {
        fields: "transfer_status"
      },
      headerOverride: {
        Authorization: `jwt ${_v6}`
      }
    })), () => {
      clearInterval(_v12.current);
    }), [_v6, _v3, _v8]), (0, _v3.useEffect)(() => {
      if (_v10 || _v9?.error) {
        _v5("failed"), clearInterval(_v12.current);
        return;
      }
      let _v0 = _v9?.transferStatus;
      switch (_v0) {
        case "in_progress":
          break;
        case "not_requested":
        case "completed":
        case "failed":
          clearInterval(_v12.current);
          break;
        default:
          return;
      }
      _v5(_v0);
    }, [_v9, _v10]), {
      transferStatus: _v4,
      error: _v10,
      loading: _v11
    };
  }], 0), _v0.s(["getSingleRedirectUri", 0, function (_v0) {
    return "string" != typeof _v0 ? null : _v1(_v0);
  }], 0);
  let _v7 = ["http:", "https:"],
    _v8 = /^[a-z][a-z0-9+\-.]*:/i;
  function _v9(_v0, _v1) {
    let _v2,
      _v3,
      _v4 = function (_v0) {
        let _v1 = _v0.trim();
        if (!_v1) return _v1;
        if (_v1.startsWith("//")) throw Error("Protocol-relative links are not allowed.");
        let _v2 = _v1.match(_v8);
        if (_v2) {
          let _v0 = _v2[0].toLowerCase();
          if (!_v7.includes(_v0)) throw Error(`Unsupported link protocol: ${_v0}`);
          throw Error("Absolute links are not allowed.");
        }
        return _v1;
      }(_v0),
      _v5 = _v1 ? {
        ..._v1
      } : null;
    if (_v4.match(/^\/apps\/([0-9]+)\/create\/login-provider-landing-page.*/)) return _v4;
    if (_v4.match(/^videos\/([0-9]+)/)) {
      let _v0 = _v4.split("/")[1];
      _v2 = `/manage/${_v0}/general`;
    } else if ("upgrade" === _v4) _v2 = "/oauth/upgrade", _v5?.redirect_uri && (_v5.redirect_uri = encodeURIComponent(_v5?.redirect_uri));else if (_v4.match(/^\/apps\/([0-9]+)\/create\/templates.*/)) {
      let _v0 = _v4.indexOf("?"),
        _v1 = _v4.indexOf("redirect_uri=");
      if (_v2 = _v4, _v0 >= 0 && _v1 >= 0) {
        _v2 = _v4.substring(0, _v0);
        let _v0 = encodeURIComponent(_v4.substring(_v1 + 13, _v4.length));
        _v5 ? _v5.redirect_uri = _v0 : _v2 += `?redirect_uri=${_v0}`;
      }
    } else if (_v4.match(/^\/cart\/.*/) || _v4.match(/^\/store\/.*/)) _v2 = _v4, _v5?.redirect_uri && (_v5.redirect_uri = encodeURIComponent(_v5?.redirect_uri));else throw Error(`Unhandled link ${_v4}`);
    return _v5 && (_v3 = Object.entries(_v5).reduce((_v0, [_v1, _v2]) => (_v0.push(`${_v1}=${_v2}`), _v0), []).join("&")), [_v2, _v3].filter(Boolean).join(-1 === _v2.indexOf("?") ? "?" : "&");
  }
  _v0.s(["httpBuildQuery", 0, _v0 => {
    let _v1 = [];
    for (let _v0 in _v0) {
      let _v0 = _v0[_v0];
      if (_v0) {
        let _v0 = encodeURIComponent(_v0),
          _v1 = encodeURIComponent(_v0);
        _v1.push(_v0 + "=" + _v1);
      }
    }
    return _v1.join("&");
  }, "transformLink", 0, _v9, "tryTransformLink", 0, function (_v0, _v1) {
    try {
      return _v9(_v0, _v1);
    } catch {
      return;
    }
  }], 0);
}