{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["Zoom", 0, _v0 => (0, _v1.jsxs)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: [(0, _v1.jsx)("path", {
      d: "M22 12C22 13.0694 21.914 14.1179 21.7498 15.1404C21.2062 18.5251 18.5251 21.2062 15.1403 21.7498C14.1179 21.914 13.0693 22 12 22C10.9307 22 9.88212 21.914 8.85967 21.7498C5.47494 21.2062 2.79382 18.5251 2.25018 15.1404C2.08596 14.1179 2 13.0694 2 12C2 10.9306 2.08596 9.88206 2.25018 8.85964C2.79381 5.4749 5.47494 2.7938 8.85967 2.25018C9.88212 2.08596 10.9307 2 12 2C13.0693 2 14.1179 2.08596 15.1403 2.25018C18.5251 2.7938 21.2062 5.4749 21.7498 8.85964C21.914 9.88206 22 10.9306 22 12Z",
      fill: "url(#paint0_linear_2053_94)"
    }), (0, _v1.jsx)("path", {
      d: "M10.5029 15.0552H5.55379C5.20655 15.0552 4.89631 14.8479 4.76343 14.5271C4.63055 14.2063 4.70336 13.8404 4.9489 13.5949L8.37697 10.1668H5.92001C5.24505 10.1668 4.6979 9.61965 4.6979 8.94469H9.26208C9.60928 8.94469 9.91951 9.15194 10.0524 9.47274C10.1853 9.79355 10.1126 10.1595 9.86705 10.4051L6.43896 13.8331H9.28081C9.95577 13.8331 10.5029 14.3803 10.5029 15.0552ZM19.3021 11.2361C19.3021 9.92208 18.233 8.85303 16.919 8.85303C16.2161 8.85303 15.5835 9.15909 15.1469 9.64474C14.7104 9.15909 14.0778 8.85303 13.3749 8.85303C12.0608 8.85303 10.9918 9.92208 10.9918 11.2361V15.0552C11.6667 15.0552 12.2139 14.5081 12.2139 13.8331V11.2361C12.2139 10.596 12.7347 10.0751 13.3749 10.0751C14.015 10.0751 14.5359 10.596 14.5359 11.2361V13.8331C14.5359 14.5081 15.083 15.0552 15.758 15.0552V11.2361C15.758 10.596 16.2788 10.0751 16.919 10.0751C17.5592 10.0751 18.08 10.596 18.08 11.2361V13.8331C18.08 14.5081 18.6271 15.0552 19.3021 15.0552L19.3021 11.2361Z",
      fill: "white"
    }), (0, _v1.jsx)("defs", {
      children: (0, _v1.jsxs)("linearGradient", {
        id: "paint0_linear_2053_94",
        x1: "6.73321",
        y1: "21.1223",
        x2: "17.2668",
        y2: "2.87765",
        gradientUnits: "userSpaceOnUse",
        children: [(0, _v1.jsx)("stop", {
          stopColor: "#0845BF"
        }), (0, _v1.jsx)("stop", {
          offset: "0.6",
          stopColor: "#0B5CFF"
        }), (0, _v1.jsx)("stop", {
          offset: "1",
          stopColor: "#4F90EE"
        })]
      })
    })]
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    where: {
      appType: _v2
    },
    ..._v3
  }) {
    return (0, _v4.measureLatency)("getMeImportApp", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/import_apps/${_v2}?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v7.default)(_v2 ? `/me/import_apps/${_v2.where.appType}${(0, _v9.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v6({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(_v12, {
    endpoint: "/me/import_apps/:appType",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v9.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v8.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/import_apps/${_v0.where.appType}${(0, _v9.serializeQuery)(_v0)}`, _v6({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/me/import_apps/:appType",
    method: "GET"
  }), _v0.s(["useGetMeImportApp", 0, _v12], 0);
}