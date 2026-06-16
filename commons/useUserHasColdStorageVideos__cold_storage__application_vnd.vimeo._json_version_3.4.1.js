{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["uri"];
  _v0.s(["useUserHasColdStorageVideos", 0, () => {
    let _v0 = (0, _v3.useViewer)(),
      _v1 = _v0?.user?.id ?? null,
      _v2 = (0, _v2.shouldFetchColdStorageVideoFallback)(_v0),
      {
        data: _v3,
        isLoading: _v4
      } = (0, _v1.useGetUserVideos)(() => _v1 && _v2 ? {
        where: {
          userId: _v1
        },
        select: _v4,
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
    if (!_v1 || !_v2) return {
      hasColdStorage: !1,
      isLoading: !1,
      count: 0
    };
    let _v5 = _v3?.total ?? 0;
    return {
      hasColdStorage: _v5 > 0,
      isLoading: _v4,
      count: _v5
    };
  }]);
}