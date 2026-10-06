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
      teamOwnerId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v4.measureLatency)("getUserAnnouncements", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/announcements?${(0, _v5.searchQueryString)(_v3)}&fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
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
  var _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  async function _v11({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v4.measureLatency)("getWhatsNew", "GET", async () => {
      let _v0 = await fetch(`${_v0}/whats_new?${(0, _v5.searchQueryString)(_v2)}&fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
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
  _v0.s(["getWhatsNew", 0, _v11], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = ["description", "imageUrl", "clipId", "clipEmbedUrl", "releaseDate", "blogPostUrl", "title", "name", "startDate", "ctaText", "ctaUrl", "clipConfigUrl", "announcementType"],
    _v15 = (0, _v2.createContext)(void 0);
  _v0.s(["ChangelogProvider", 0, ({
    children: _v0,
    lastSeenSource: _v1
  }) => {
    let _v2 = (({
      lastSeenSource: _v0 = "local"
    } = {}) => {
      let _v1 = (0, _v13.useViewer)(),
        _v2 = "server" === _v0,
        [_v3, _v4] = (0, _v2.useState)({
          count: "",
          showPlus: !1
        }),
        [_v5, _v6] = (0, _v2.useState)([]),
        _v7 = `LAST_SEEN_ANNOUNCEMENTS_${_v1?.user?.id}`,
        [_v8, _v9] = (0, _v3.default)(_v7, ""),
        _v10 = _v1?.teamUser?.ownerId || _v1?.user?.id,
        {
          data: _v11,
          isLoading: _v12,
          isValidating: _v13,
          size: _v14,
          setSize: _v15,
          error: _v16
        } = function (_v0) {
          let _v1 = "function" == typeof _v0 ? _v0() : _v0,
            {
              baseUrl: _v2,
              jwt: _v3,
              xVimeoPage: _v4,
              locale: _v5
            } = (0, _v10.useGctlConfig)();
          return (0, _v9.default)((_v0, _v1) => {
            if (null === _v1 || _v1 && !_v1.paging.next) return null;
            let {
                perPage: _v2 = 25,
                page: _v3,
                ..._v4
              } = _v1.query ?? {},
              _v5 = _v1.select.join(","),
              _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
            return [`/users/${_v1.where.teamOwnerId}/announcements?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
          }, null !== _v1 ? ([_v0, _v1]) => _v6({
            ..._v1,
            baseUrl: _v2,
            headers: {
              ..._v1.headers,
              "Content-Type": "application/json",
              Authorization: _v3 ? `jwt ${_v3}` : "",
              "Vimeo-Page": `${_v4}`,
              "Accept-Language": _v5 ?? "en"
            },
            query: {
              ..._v1.query,
              page: _v1 + 1
            }
          }) : null, void 0);
        }(() => _v2 ? null : {
          select: _v14,
          where: {
            teamOwnerId: _v10
          },
          query: {
            perPage: 5,
            page: 1
          }
        }),
        {
          data: _v17,
          isLoading: _v18,
          error: _v19
        } = function (_v0) {
          let _v1 = "function" == typeof _v0 ? _v0() : _v0,
            {
              baseUrl: _v2,
              jwt: _v3,
              xVimeoPage: _v4,
              locale: _v5
            } = (0, _v10.useGctlConfig)();
          return (0, _v7.default)(_v1 ? `/whats_new${(0, _v8.serializeQuery)(_v1)}` : () => null, _v1 ? () => _v11({
            ..._v1,
            headers: {
              ..._v1.headers,
              "Content-Type": "application/json",
              Authorization: _v3 ? `jwt ${_v3}` : "",
              "Vimeo-Page": `${_v4}`,
              "Accept-Language": _v5 ?? "en"
            },
            baseUrl: _v2
          }) : null, void 0);
        }(() => _v2 ? {
          query: {
            tab: "released",
            perPage: 5
          },
          select: ["entries.isNew", "total"]
        } : null),
        _v20 = (0, _v2.useMemo)(() => {
          if (!_v17) return {
            count: "",
            showPlus: !1
          };
          let _v0 = _v17.entries.filter(_v0 => _v0.isNew).length,
            _v1 = _v0 >= 5 && _v17.total > 5;
          return {
            count: _v1 ? "5" : `${_v0}`,
            showPlus: _v1
          };
        }, [_v17]);
      (0, _v2.useEffect)(() => {
        if (_v2 || !_v11 || _v12 || _v13) return;
        let _v0 = _v11[0].data,
          _v1 = _v11[0].paging.next,
          _v2 = [];
        if ("" !== _v8) {
          let _v0 = new Date(_v8);
          _v2 = _v0.filter(_v0 => new Date(_v0.releaseDate) > _v0);
        } else _v2 = _v0;
        let _v3 = null !== _v1 && _v2.length >= 5;
        _v4({
          count: _v3 ? "5" : `${_v2.length}`,
          showPlus: _v3
        }), _v6(_v11.reduce((_v0, _v1) => [..._v0, ..._v1.data], []));
      }, [_v2, _v11, _v8, _v14, _v12, _v13]);
      let {
        isLoadingMore: _v21,
        isDone: _v22
      } = (0, _v12.getInfiniteRequestLoadingState)({
        data: _v11 || [],
        size: _v14,
        itemsPerPage: 5
      });
      return {
        newAnnouncementsCount: _v2 ? _v20 : _v3,
        isLoading: _v2 ? _v18 : _v12,
        setUserLastSeenAnnouncement: _v9,
        announcementsList: _v5,
        size: _v14,
        setSize: _v15,
        isLoadingMore: _v21,
        isDone: _v22,
        error: _v2 ? _v19 : _v16
      };
    })({
      lastSeenSource: _v1
    });
    return (0, _v1.jsx)(_v15.Provider, {
      value: _v2,
      children: _v0
    });
  }, "useChangelog", 0, () => {
    let _v0 = (0, _v2.useContext)(_v15);
    if (void 0 === _v0) throw Error("useChangelog must be used within a ChangelogProvider");
    return _v0;
  }], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
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
    return void 0 !== _v9 && Number.isFinite(_v9) ? (0, _v1.jsx)(_v17.QuotaMeter, {
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
      icon: (0, _v1.jsx)(_v16.VimeoCoin, {
        h: "16px",
        w: "16px",
        color: "text-secondary"
      }),
      hideQuotaTooltip: _v6
    }) : null;
  }], 0);
}