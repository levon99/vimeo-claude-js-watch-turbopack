{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ["uri"];
  _v0.s(["useUserHasColdStorageVideos", 0, (_v0 = {}) => {
    let {
        forceFetch: _v1 = !1
      } = _v0,
      _v2 = (0, _v4.useViewer)(),
      _v3 = _v2?.user?.id ?? null,
      _v4 = (0, _v3.useStorageLimitLocking)({
        userId: _v3
      }),
      _v5 = _v4.isEnabled && !_v1,
      _v6 = (0, _v2.shouldFetchColdStorageVideoFallback)(_v2),
      {
        data: _v7,
        isLoading: _v8
      } = (0, _v1.useGetUserVideos)(() => !_v5 && _v3 && _v6 ? {
        where: {
          userId: _v3
        },
        select: _v5,
        query: {
          filter: "cold_storage",
          perPage: 1
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null, {
        revalidateOnFocus: !1
      });
    if (_v5) return {
      hasColdStorage: _v4.lockedVideoCount > 0,
      isLoading: _v4.isLoading,
      count: _v4.lockedVideoCount
    };
    if (!_v3 || !_v6) return {
      hasColdStorage: !1,
      isLoading: !1,
      count: 0
    };
    let _v9 = _v7?.total ?? 0;
    return {
      hasColdStorage: _v9 > 0,
      isLoading: _v8,
      count: _v9
    };
  }]);
}