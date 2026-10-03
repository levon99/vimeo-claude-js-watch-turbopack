{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v5.measureLatency)("getUserEventSeries", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/event_series?${(0, _v6.searchQueryString)(_v3)}&fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  async function _v8({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v5.measureLatency)("postUserEventSeries", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/event_series?fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v6.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v6.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v6.deepCamelCase)(_v1);
    });
  }
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  function _v14(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v10.default)(_v2 ? `/users/${_v2.where.userId}/event_series${(0, _v4.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v7({
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
  function _v15(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v12.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/event_series?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v7({
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
  function _v16() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v13.useGctlConfig)(),
      [_v4, _v5] = (0, _v4.useInternalState)();
    return [(0, _v9.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v8({
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
  }
  "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v14, {
    endpoint: "/users/:userId/event_series",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v11.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v4.useInternalState)();
    return [(0, _v9.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/event_series${(0, _v4.serializeQuery)(_v0)}`, _v7({
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
    endpoint: "/users/:userId/event_series",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v15, {
    endpoint: "/users/:userId/event_series",
    method: "GET"
  }), "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v16, {
    endpoint: "/users/:userId/event_series",
    method: "POST"
  }), _v0.s(["useGetUserEventSeries", 0, _v14, "useGetUserEventSeriesInfinite", 0, _v15, "usePostUserEventSeries", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = ["Owner", "Admin", "Contributor Plus"],
    _v21 = ["enterpriseAddonTrials.expiresOn", "enterpriseAddonTrials.forcedUpsell", "enterpriseAddonTrials.key", "enterpriseAddonTrials.paid", "enterpriseAddonTrials.trial"];
  _v0.s(["useAccessEventSeriesEditor", 0, () => {
    let _v0 = (0, _v19.useViewer)(),
      {
        settings: _v1,
        isLoadingResponse: _v2
      } = (0, _v18.useOrionSettings)(),
      _v3 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        capabilities: _v4,
        ready: _v5
      } = (0, _v1.useCapability)(["hasEventSeriesEnabled"], _v3),
      _v6 = _v1.release_event_series_v1,
      {
        data: _v7,
        isLoading: _v8
      } = (0, _v17.useGetUserTeamRole)(() => _v3 && !_v2 && _v6 ? {
        select: ["permissionLevel"],
        where: {
          userId: _v3
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      {
        data: _v9,
        isLoading: _v10
      } = (0, _v2.useGetUser)(() => _v3 ? {
        where: {
          userId: _v3
        },
        select: _v21
      } : null, {
        revalidateOnFocus: !1
      }),
      _v11 = _v9?.enterpriseAddonTrials?.find(({
        key: _v0
      }) => "event_series" === _v0),
      _v12 = !!_v3 && _v10,
      _v13 = _v11?.expiresOn,
      _v14 = _v11?.forcedUpsell === !0,
      _v15 = _v11?.trial === !0 && !_v11.paid,
      _v16 = null != _v11 && !!_v11.expiresOn && !_v11.trial && !_v11.paid,
      _v17 = _v2 || _v8 || !_v5 || _v12,
      _v18 = _v7?.permissionLevel,
      _v19 = _v6 && !!_v18 && _v20.includes(_v18),
      _v20 = _v4.hasEventSeriesEnabled,
      _v21 = !_v17 && _v19 && ((_v15 || _v16) && !_v14 || _v20),
      _v22 = _v21 && _v16 && !_v20,
      {
        data: _v23,
        mutate: _v24
      } = _v14(() => (_v15 || _v22) && _v3 ? {
        select: ["uri"],
        where: {
          userId: _v3
        },
        query: {
          perPage: 1
        }
      } : null),
      _v25 = _v15 && null !== _v23 && "object" == typeof _v23 && !0 === _v23.trialLimitReached,
      _v26 = _v22 && _v23?.total === 0;
    return {
      canAccessEventSeriesEditor: _v21,
      canCreateNewEventSeries: _v21 && !_v22 && !_v25,
      canUpsellEventSeries: _v26,
      revalidateEventSeriesProbe: _v24,
      isLoading: _v17,
      expiresOn: _v13,
      isTrialing: _v15,
      isTrialExpired: _v16
    };
  }], 0);
}