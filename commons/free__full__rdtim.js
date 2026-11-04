{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = new Set(["free", "full"]),
    _v6 = _v0 => void 0 !== _v0 && _v5.has(_v0),
    _v7 = ["rdtim", "spdot", "orguid"],
    _v8 = {
      revalidateOnFocus: !1
    };
  _v0.s(["ANALYTICS_ME_PREFERENCES_FIELDS", 0, _v7, "isAiAnalyticsAccess", 0, _v6, "useAnalyticsAiDestination", 0, ({
    enabled: _v0
  }) => {
    let _v1 = (0, _v3.useViewer)(),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        data: _v3,
        isLoading: _v4
      } = (0, _v1.useGetMePreferences)(() => _v0 ? {
        select: _v7
      } : null, _v8),
      {
        data: _v5,
        isLoading: _v6
      } = (0, _v2.useGetUser)(() => _v0 && _v2 ? {
        where: {
          userId: _v2
        },
        select: ["aiAnalyticsAccess"]
      } : null, _v8),
      _v7 = !!_v3?.orguid;
    return {
      hasAccess: _v6(_v5?.aiAnalyticsAccess),
      isLoading: _v4 || _v6,
      href: _v7 ? _v4.Path.OrganizationAnalyticsAi : _v4.Path.AnalyticsAi
    };
  }]);
}