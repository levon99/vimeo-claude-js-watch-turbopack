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
  }, "USER_PREFERENCE_ID", 0, _v5], 0), _v0.s(["useUserQuotaApi", 0, function () {
    let _v0 = (0, _v4.useViewer)(),
      {
        data: _v1,
        ..._v2
      } = (0, _v2.useGetUser)(() => {
        let _v0 = _v0?.teamUser?.ownerId ?? _v0?.user?.id;
        return _v0 ? {
          select: ["uploadQuota", "aiCreditsQuota", "drmLicensesQuota", "bandwidthQuota"],
          where: {
            userId: _v0
          }
        } : null;
      }),
      {
        data: _v3
      } = (0, _v1.useGetMePreferences)(() => _v0 ? {
        select: [_v5.PREF_ORGANIZATION_UUID, _v5.PREF_WORKSPACE_UUID]
      } : null, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      }),
      _v4 = _v3?.[_v5.PREF_WORKSPACE_UUID],
      {
        data: _v5
      } = (0, _v3.useGetWorkspace)(() => _v4 ? {
        where: {
          workspaceUuid: _v4
        },
        select: ["primitives"]
      } : null),
      _v6 = _v5?.primitives,
      _v7 = _v6?.uploadQuota,
      _v8 = _v1?.uploadQuota && {
        ..._v1.uploadQuota,
        lifetime: {
          ..._v1.uploadQuota.lifetime,
          free: _v7?.remaining ?? _v1.uploadQuota.lifetime?.free ?? null,
          used: _v7?.used ?? _v1.uploadQuota.lifetime?.used ?? null,
          max: _v7?.available ?? _v1.uploadQuota.lifetime?.max ?? null
        }
      };
    return {
      uploadQuota: _v8,
      aiCreditsQuota: _v1?.aiCreditsQuota && {
        ..._v1.aiCreditsQuota,
        ..._v6?.aiCreditsQuota
      },
      drmLicensesQuota: _v1?.drmLicensesQuota,
      bandwidthQuota: _v1?.bandwidthQuota,
      ..._v2
    };
  }], 0);
}