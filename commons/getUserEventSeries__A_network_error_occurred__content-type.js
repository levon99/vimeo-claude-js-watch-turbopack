{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v4.measureLatency)("getUserEventSeries", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/event_series?${(0, _v5.searchQueryString)(_v3)}&fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  async function _v7({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v4.measureLatency)("postUserEventSeries", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/event_series?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v5.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.i(0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v9.default)(_v2 ? `/users/${_v2.where.userId}/event_series${(0, _v3.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v6({
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
  _v0.s(["useGetUserEventSeries", 0, _v12, "useGetUserEventSeriesInfinite", 0, function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v10.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/event_series?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v6({
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
  }, "usePostUserEventSeries", 0, function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v11.useGctlConfig)(),
      [_v4, _v5] = (0, _v3.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v7({
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
  }], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ["Owner", "Admin", "Contributor Plus"],
    _v18 = ["Owner", "Admin"],
    _v19 = ["enterpriseAddonTrials.expiresOn", "enterpriseAddonTrials.forcedUpsell", "enterpriseAddonTrials.key", "enterpriseAddonTrials.paid", "enterpriseAddonTrials.trial"];
  _v0.s(["useAccessEventSeriesEditor", 0, () => {
    let _v0 = (0, _v16.useViewer)(),
      {
        release_event_series_v1: _v1
      } = (0, _v15.useOrionSettingsFields)(["release_event_series_v1"]),
      _v2 = (0, _v14.useOrionLoading)(),
      _v3 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        capabilities: _v4,
        ready: _v5
      } = (0, _v1.useCapability)(["hasEventSeriesEnabled"], _v3),
      {
        data: _v6,
        isLoading: _v7
      } = (0, _v13.useGetUserTeamRole)(() => _v3 && !_v2 && _v1 ? {
        select: ["permissionLevel"],
        where: {
          userId: _v3
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      {
        data: _v8,
        isLoading: _v9
      } = (0, _v2.useGetUser)(() => _v3 ? {
        where: {
          userId: _v3
        },
        select: _v19
      } : null, {
        revalidateOnFocus: !1
      }),
      _v10 = _v8?.enterpriseAddonTrials?.find(({
        key: _v0
      }) => "event_series" === _v0),
      _v11 = !!_v3 && _v9,
      _v12 = _v10?.expiresOn,
      _v13 = _v10?.forcedUpsell === !0,
      _v14 = _v10?.trial === !0 && !_v10.paid,
      _v15 = null != _v10 && !!_v10.expiresOn && !_v10.trial && !_v10.paid,
      _v16 = _v2 || _v7 || !_v5 || _v11,
      _v17 = _v6?.permissionLevel,
      _v18 = _v1 && null != _v17 && _v17.includes(_v17),
      _v19 = null != _v17 && _v18.includes(_v17),
      _v20 = _v4.hasEventSeriesEnabled,
      _v21 = !_v16 && _v18 && ((_v14 || _v15) && !_v13 || _v20),
      _v22 = _v21 && _v15 && !_v20,
      {
        data: _v23,
        mutate: _v24
      } = _v12(() => (_v14 || _v22) && _v3 ? {
        select: ["uri"],
        where: {
          userId: _v3
        },
        query: {
          perPage: 1
        }
      } : null),
      _v25 = _v14 && null !== _v23 && "object" == typeof _v23 && !0 === _v23.trialLimitReached,
      _v26 = _v22 && _v23?.total === 0;
    return {
      canAccessEventSeriesEditor: _v21,
      canCreateNewEventSeries: _v21 && !_v22 && !_v25,
      canUpsellEventSeries: _v26,
      revalidateEventSeriesProbe: _v24,
      isLoading: _v16,
      expiresOn: _v12,
      isTrialing: _v14,
      isTrialExpired: _v15,
      isForcedUpsell: _v13,
      isAccountManager: _v19
    };
  }], 0);
}