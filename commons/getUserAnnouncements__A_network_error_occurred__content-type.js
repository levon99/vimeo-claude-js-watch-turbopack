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
      teamOwnerId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v5.measureLatency)("getUserAnnouncements", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/announcements?${(0, _v6.searchQueryString)(_v3)}&fields=${_v1.map(_v6.intoSnakeCase).join(",")}`, {
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
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  function _v13(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v12.useGctlConfig)();
    return (0, _v11.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.teamOwnerId}/announcements?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
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
  "true" === _v4.default.env.STORYBOOK && (0, _v10.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v12.useGctlConfig)();
    return (0, _v8.default)(_v2 ? `/users/${_v2.where.teamOwnerId}/announcements${(0, _v10.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v7({
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
  }, {
    endpoint: "/users/:teamOwnerId/announcements",
    method: "GET"
  }), "true" === _v4.default.env.STORYBOOK && (0, _v10.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v9.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v12.useGctlConfig)(),
      [_v5, _v6] = (0, _v10.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.teamOwnerId}/announcements${(0, _v10.serializeQuery)(_v0)}`, _v7({
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
    endpoint: "/users/:teamOwnerId/announcements",
    method: "GET"
  }), "true" === _v4.default.env.STORYBOOK && (0, _v10.assignMswData)(_v13, {
    endpoint: "/users/:teamOwnerId/announcements",
    method: "GET"
  });
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = ["description", "imageUrl", "clipId", "clipEmbedUrl", "releaseDate", "blogPostUrl", "title", "name", "startDate", "ctaText", "ctaUrl", "clipConfigUrl", "announcementType"],
    _v17 = (0, _v2.createContext)(void 0);
  _v0.s(["ChangelogProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (() => {
      let _v0 = (0, _v15.useViewer)(),
        [_v1, _v2] = (0, _v2.useState)({
          count: "",
          showPlus: !1
        }),
        [_v3, _v4] = (0, _v2.useState)([]),
        _v5 = `LAST_SEEN_ANNOUNCEMENTS_${_v0?.user?.id}`,
        [_v6, _v7] = (0, _v3.default)(_v5, ""),
        {
          data: _v8,
          isLoading: _v9,
          isValidating: _v10,
          size: _v11,
          setSize: _v12,
          error: _v13
        } = _v13({
          select: _v16,
          where: {
            teamOwnerId: _v0?.teamUser?.ownerId || _v0?.user?.id
          },
          query: {
            perPage: 5,
            page: 1
          }
        });
      (0, _v2.useEffect)(() => {
        if (_v8 && !_v9 && !_v10) {
          let _v0 = _v8[0].data,
            _v1 = _v8[0].paging.next,
            _v2 = [];
          if ("" !== _v6) {
            let _v0 = new Date(_v6);
            _v2 = _v0.filter(_v0 => new Date(_v0.releaseDate) > _v0);
          } else _v2 = _v0;
          let _v3 = null !== _v1 && _v2.length >= 5;
          _v2({
            count: _v3 ? "5" : `${_v2.length}`,
            showPlus: _v3
          }), _v4(_v8.reduce((_v0, _v1) => [..._v0, ..._v1.data], []));
        }
      }, [_v8, _v6, _v11, _v9, _v10]);
      let {
        isLoadingMore: _v14,
        isDone: _v15
      } = (0, _v14.getInfiniteRequestLoadingState)({
        data: _v8 || [],
        size: _v11,
        itemsPerPage: 5
      });
      return {
        newAnnouncementsCount: _v1,
        isLoading: _v9,
        setUserLastSeenAnnouncement: _v7,
        announcementsList: _v3,
        size: _v11,
        setSize: _v12,
        isLoadingMore: _v14,
        isDone: _v15,
        error: _v13
      };
    })();
    return (0, _v1.jsx)(_v17.Provider, {
      value: _v1,
      children: _v0
    });
  }, "useChangelog", 0, () => {
    let _v0 = (0, _v2.useContext)(_v17);
    if (void 0 === _v0) throw Error("useChangelog must be used within a ChangelogProvider");
    return _v0;
  }], 0);
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  _v0.s(["AiCreditsQuotaMeter", 0, ({
    isMobile: _v0,
    onUpgradeClick: _v1,
    quota: _v2,
    showTotal: _v3,
    showUpgrade: _v4,
    showZeroCreditsMessage: _v5,
    isWorkspaceAdminUser: _v6
  }) => {
    let _v7 = _v2?.limit,
      _v8 = Number.isFinite(_v7),
      _v9 = _v7 ?? _v2?.available,
      _v10 = _v2?.period ?? null,
      _v11 = _v2?.used ?? null,
      _v12 = _v6 ? _v11 : null,
      _v13 = _v2?.remaining ?? null,
      _v14 = !_v6 || _v6 && _v8;
    return void 0 !== _v9 && Number.isFinite(_v9) ? (0, _v1.jsx)(_v19.QuotaMeter, {
      isMobile: _v0,
      onUpgradeClick: _v1,
      showTotal: _v3,
      showUpgrade: _v4,
      quotaAvailable: _v9,
      quotaUsed: _v11,
      totalUsed: _v12,
      totalAvailable: _v7,
      quotaPeriod: _v10,
      lifetimeUnit: null,
      periodicUnit: "ai_token",
      resetDate: _v2?.resetDate || "",
      showZeroCreditsMessage: _v5,
      isWorkspaceAdminUser: _v6,
      totalRemaining: _v13,
      isAllocated: _v8,
      showProgressBar: _v14,
      icon: (0, _v1.jsx)(_v18.VimeoCoin, {
        h: "16px",
        w: "16px",
        color: "text-secondary"
      }),
      hideQuotaTooltip: _v6
    }) : null;
  }], 0);
}