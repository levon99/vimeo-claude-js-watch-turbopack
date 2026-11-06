{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = new Set(["free", "full"]),
    _v4 = _v0 => void 0 !== _v0 && _v3.has(_v0),
    _v5 = {
      revalidateOnFocus: !1
    };
  _v0.s(["isAiAnalyticsAccess", 0, _v4, "useAnalyticsAiAccess", 0, ({
    enabled: _v0
  }) => {
    let _v1 = (0, _v2.useViewer)(),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        data: _v3,
        isLoading: _v4
      } = (0, _v1.useGetUser)(() => _v0 && _v2 ? {
        where: {
          userId: _v2
        },
        select: ["aiAnalyticsAccess"]
      } : null, _v5);
    return {
      hasAccess: _v4(_v3?.aiAnalyticsAccess),
      isLoading: _v4
    };
  }]);
}