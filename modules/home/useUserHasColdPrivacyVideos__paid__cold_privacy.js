{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["uri"];
  _v0.s(["useUserHasColdPrivacyVideos", 0, (_v0 = {}) => {
    let {
        enabled: _v1 = !1
      } = _v0,
      _v2 = (0, _v3.useViewer)(),
      _v3 = _v2?.user?.id ?? null,
      _v4 = _v1 && !!_v3 && "paid" !== (0, _v2.deriveViewerAuthStatus)(_v2),
      {
        data: _v5,
        isLoading: _v6
      } = (0, _v1.useGetUserVideos)(() => _v4 && _v3 ? {
        where: {
          userId: _v3
        },
        select: _v4,
        query: {
          filter: "cold_privacy",
          perPage: 1
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null, {
        revalidateOnFocus: !1
      });
    if (!_v4) return {
      hasColdPrivacy: !1,
      isLoading: !1,
      count: 0
    };
    let _v7 = _v5?.total ?? 0;
    return {
      hasColdPrivacy: _v7 > 0,
      isLoading: _v6,
      count: _v7
    };
  }]);
}