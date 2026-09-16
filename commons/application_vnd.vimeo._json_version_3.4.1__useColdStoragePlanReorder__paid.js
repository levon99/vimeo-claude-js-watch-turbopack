{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ["uri"],
    _v6 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    };
  _v0.s(["useColdStoragePlanReorder", 0, () => {
    let {
        settings: _v0
      } = (0, _v2.useOrionSettings)(),
      _v1 = (0, _v4.useViewer)(),
      _v2 = _v1?.user?.id ?? null,
      _v3 = _v0.enable_cold_storage_plan_reorder,
      _v4 = !!_v2 && _v3 && "paid" !== (0, _v3.deriveViewerAuthStatus)(_v1),
      {
        data: _v5,
        isLoading: _v6
      } = (0, _v1.useGetUserVideos)(() => _v4 && _v2 ? {
        where: {
          userId: _v2
        },
        select: _v5,
        query: {
          filter: "cold_storage",
          perPage: 1
        },
        headers: _v6
      } : null, {
        revalidateOnFocus: !1
      }),
      {
        data: _v7,
        isLoading: _v8
      } = (0, _v1.useGetUserVideos)(() => _v4 && _v2 ? {
        where: {
          userId: _v2
        },
        select: _v5,
        query: {
          filter: "cold_privacy",
          perPage: 1
        },
        headers: _v6
      } : null, {
        revalidateOnFocus: !1
      });
    if (!_v4) return {
      shouldReorder: !1,
      isResolving: !1
    };
    let _v9 = (_v5?.total ?? 0) > 0,
      _v10 = (_v7?.total ?? 0) > 0;
    return {
      shouldReorder: _v9 || _v10,
      isResolving: _v6 || _v8
    };
  }]);
}