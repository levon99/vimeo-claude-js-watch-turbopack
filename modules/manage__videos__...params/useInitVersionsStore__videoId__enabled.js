{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useInitVersionsStore", 0, ({
    videoId: _v0,
    enabled: _v1,
    fields: _v2,
    acceptHeader: _v3,
    itemsPerPage: _v4,
    reviewId: _v5,
    password: _v6
  }) => {
    let {
        addVersions: _v7,
        resetVersions: _v8
      } = (0, _v3.useVersionsStore)(_v0 => ({
        addVersions: _v0.addVersions,
        resetVersions: _v0.resetVersions
      })),
      {
        data: _v9
      } = (0, _v2.useGetVideoVersions)(() => _v1 && _v0 ? {
        where: {
          videoId: _v0
        },
        select: _v2,
        query: {
          perPage: _v4,
          includeDeletedVersions: !0,
          reviewId: _v5,
          password: _v6
        },
        headers: {
          Accept: _v3
        }
      } : null, {
        revalidateOnFocus: !1
      });
    return (0, _v1.useEffect)(() => {
      _v8();
    }, [_v0, _v8]), (0, _v1.useEffect)(() => {
      _v1 && _v9?.data && _v7(_v9.data);
    }, [_v9, _v1, _v7]), {
      canLoadMore: !!_v9?.paging?.next
    };
  }]);
}