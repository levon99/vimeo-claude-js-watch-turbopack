{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
    AI_CREDITS: "aiCredits",
    STORAGE: "storage"
  };
  _v0.s(["USAGE_PAGES", 0, _v7, "USAGE_PENDO_IDS", 0, {
    ORG_OUT_OF_CREDITS_AND_OUT_OF_STORAGE_ID: "B2ioqUX94-gZlDNz6odva7y1MKc",
    ORG_OUT_OF_CREDITS_ID: "ys4iogEmFSHR0T1BtbjLwpNEbMY",
    ORG_OUT_OF_STORAGE_ID: "Ym5pv1zbMUg3sjVSPzd3amxIofg",
    WORKSPACE_OUT_OF_CREDITS_ID: "AWb6bRKLdQdrndogTqvd4ClnhA8"
  }], 0);
  let _v8 = (_v0, _v1) => _v0 ? new Date(_v0).toLocaleDateString(_v1 || "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }) : "N/A";
  _v0.s(["useOrganizationUsage", 0, ({
    organizationUuid: _v0
  }) => {
    let _v1 = (0, _v6.useViewer)(),
      _v2 = (0, _v5.useLocale)(),
      {
        data: _v3,
        size: _v4 = 1,
        setSize: _v5
      } = (0, _v3.useGetOrganizationWorkspacesInfinite)(() => _v1 ? {
        where: {
          orgUuid: _v0
        },
        select: ["primitives", "displayName", "icon", "uri"],
        query: {
          perPage: 10
        }
      } : null),
      _v6 = _v3?.[0]?.total || 0,
      _v7 = _v1?.team?.ownerId || _v1?.user?.id,
      {
        data: _v8
      } = (0, _v4.useGetUserSettingsBillingMembership)(() => _v7 ? {
        where: {
          userId: Number(_v7)
        },
        select: ["endDate", "startDate"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.14"
        }
      } : null),
      {
        data: _v9
      } = (0, _v2.useGetOrganization)(() => _v1 && _v0 ? {
        where: {
          orgUuid: _v0
        },
        select: ["primitives"]
      } : null),
      [_v10, _v11] = (0, _v1.useState)({
        [_v7.AI_CREDITS]: [],
        [_v7.STORAGE]: []
      });
    (0, _v1.useEffect)(() => {
      let _v0 = (({
          nextNumberOfResults: _v0
        }) => ({
          [_v7.AI_CREDITS]: Array.from({
            length: _v0
          }, () => ({})),
          [_v7.STORAGE]: Array.from({
            length: _v0
          }, () => ({}))
        }))({
          nextNumberOfResults: _v6 ? Math.max(_v6 - (_v4 - 1) * 10, 0) : 10
        }),
        _v1 = !_v3?.[_v4 - 1],
        _v2 = _v3?.reduce((_v0, _v1) => (_v1?.data.forEach(_v0 => {
          let _v1 = {
              name: _v0.displayName,
              ..._v0.primitives?.aiCreditsQuota
            },
            _v2 = {
              name: _v0.displayName,
              ..._v0.primitives?.uploadQuota
            };
          _v0[_v7.AI_CREDITS] = _v0[_v7.AI_CREDITS] || [], _v0[_v7.STORAGE] = _v0[_v7.STORAGE] || [], _v0[_v7.AI_CREDITS].push(_v1), _v0[_v7.STORAGE].push(_v2);
        }), _v0), {
          [_v7.AI_CREDITS]: [],
          [_v7.STORAGE]: []
        }) || {
          [_v7.AI_CREDITS]: [],
          [_v7.STORAGE]: []
        };
      _v1 && (_v2[_v7.AI_CREDITS] = [..._v2[_v7.AI_CREDITS], ..._v0[_v7.AI_CREDITS]], _v2[_v7.STORAGE] = [..._v2[_v7.STORAGE], ..._v0[_v7.STORAGE]]), _v11(_v2);
    }, [_v3, _v4, _v6]);
    let _v12 = (0, _v1.useCallback)(() => {
        _v5(_v0 => _v0 + 1);
      }, [_v5]),
      _v13 = {
        [_v7.AI_CREDITS]: {
          currentCount: _v9?.primitives?.aiCreditsQuota?.used,
          resetDate: _v8(_v9?.primitives?.aiCreditsQuota?.resetDate, _v2),
          totalCount: _v9?.primitives?.aiCreditsQuota?.available,
          remaining: _v9?.primitives?.aiCreditsQuota?.remaining
        },
        [_v7.STORAGE]: {
          currentCount: _v9?.primitives?.uploadQuota?.used,
          totalCount: _v9?.primitives?.uploadQuota?.available,
          remaining: _v9?.primitives?.uploadQuota?.remaining
        }
      },
      _v14 = _v6 - 10 * _v4 > 0,
      _v15 = _v13?.[_v7.STORAGE],
      _v16 = _v13?.[_v7.AI_CREDITS],
      _v17 = !!(_v15?.totalCount && _v15?.remaining) && (_v15.totalCount - _v15.remaining) / _v15.totalCount >= .9,
      _v18 = !!(_v16?.totalCount && _v16?.remaining) && (_v16.totalCount - _v16.remaining) / _v16.totalCount >= .9,
      _v19 = _v10?.[_v7.AI_CREDITS]?.some(_v0 => Number.isFinite(_v0.limit) && _v0.limit && _v0.used && (_v0.limit - _v0.used) / _v0.limit <= .1);
    return {
      billingStartDate: _v8(_v8?.startDate, _v2),
      billingEndDate: _v8(_v8?.endDate, _v2),
      loadNextWorkspaceResults: _v12,
      totalWorkspaceResults: _v6,
      areMoreWorkspaceResultsAvailable: _v14,
      workspacesList: _v10,
      totalOrganizationUsage: _v13,
      isOrganizationOutOfStorage: _v17,
      isOrganizationOutOfCredits: _v18,
      isAtLeastOneWorkspaceOutOfCredits: _v19
    };
  }], 0);
}