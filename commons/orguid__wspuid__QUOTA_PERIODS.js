{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
    PREF_ORGANIZATION_UUID: "orguid",
    PREF_WORKSPACE_UUID: "wspuid"
  };
  _v0.s(["QUOTA_PERIODS", 0, {
    WEEKLY: "week",
    YEARLY: "year",
    MONTHLY: "month",
    LIFETIME: "lifetime"
  }, "QUOTA_UNITS", 0, {
    AI_TOKEN: "ai_token",
    COUNT: "video_count",
    DRM_LICENSE: "drm_license",
    SIZE: "video_size"
  }, "USER_PREFERENCE_ID", 0, _v5], 0), _v0.s(["useUserQuotaApi", 0, function (_v0) {
    let _v1 = (0, _v4.useViewer)(),
      {
        data: _v2,
        ..._v3
      } = (0, _v2.useGetUser)(() => {
        let _v0 = _v0 ?? _v1?.teamUser?.ownerId ?? _v1?.user?.id;
        return _v0 ? {
          select: ["uploadQuota", "aiCreditsQuota", "drmLicensesQuota"],
          where: {
            userId: _v0
          }
        } : null;
      }),
      {
        data: _v4
      } = (0, _v1.useGetMePreferences)(() => _v1 ? {
        select: [_v5.PREF_ORGANIZATION_UUID, _v5.PREF_WORKSPACE_UUID]
      } : null, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      }),
      _v5 = _v4?.[_v5.PREF_WORKSPACE_UUID],
      {
        data: _v6
      } = (0, _v3.useGetWorkspace)(() => _v5 ? {
        where: {
          workspaceUuid: _v5
        },
        select: ["primitives"]
      } : null),
      _v7 = _v6?.primitives,
      _v8 = _v7?.uploadQuota,
      _v9 = _v2?.uploadQuota && {
        ..._v2.uploadQuota,
        lifetime: {
          ..._v2.uploadQuota.lifetime,
          free: _v8?.remaining ?? _v2.uploadQuota.lifetime?.free ?? null,
          used: _v8?.used ?? _v2.uploadQuota.lifetime?.used ?? null,
          max: _v8?.available ?? _v2.uploadQuota.lifetime?.max ?? null
        }
      };
    return {
      uploadQuota: _v9,
      aiCreditsQuota: _v2?.aiCreditsQuota && {
        ..._v2.aiCreditsQuota,
        ..._v7?.aiCreditsQuota
      },
      drmLicensesQuota: _v2?.drmLicensesQuota,
      ..._v3
    };
  }], 0);
}