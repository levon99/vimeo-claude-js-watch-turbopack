{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v8.useGctlConfig)();
    return (0, _v5.default)(_v2 ? `/users/${_v2.where.userId}/lead_capture_forms${(0, _v2.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v3.getUserLeadCaptureForms)({
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
  function _v10() {
    let {
        mutate: _v0
      } = (0, _v6.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/lead_capture_forms${(0, _v2.serializeQuery)(_v0)}`, (0, _v3.getUserLeadCaptureForms)({
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
  }
  function _v11(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v8.useGctlConfig)();
    return (0, _v7.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/lead_capture_forms?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => (0, _v3.getUserLeadCaptureForms)({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }
  "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v9, {
    endpoint: "/users/:userId/lead_capture_forms",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v10, {
    endpoint: "/users/:userId/lead_capture_forms",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v11, {
    endpoint: "/users/:userId/lead_capture_forms",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v8.useGctlConfig)(),
      [_v4, _v5] = (0, _v2.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await (0, _v3.putUserLeadCaptureForms)({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }, {
    endpoint: "/users/:userId/lead_capture_forms",
    method: "PUT"
  }), _v0.s(["useGetUserLeadCaptureForms", 0, _v9, "useGetUserLeadCaptureFormsInfinite", 0, _v11, "useGetUserLeadCaptureFormsLazy", 0, _v10]);
}