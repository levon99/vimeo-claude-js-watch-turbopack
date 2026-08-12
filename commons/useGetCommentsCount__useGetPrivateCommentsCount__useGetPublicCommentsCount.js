{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0, _v1, _v2) {
    let _v3 = (0, _v5.getReviewPasswordHashFromCookie)(_v2),
      {
        data: _v4,
        isLoading: _v5,
        error: _v6,
        mutate: _v7
      } = (0, _v3.useGetVideoPrivateCommentsInfinite)(() => _v0 && _v1.shouldFetch ? {
        where: {
          videoId: _v0
        },
        select: ["uri"],
        query: {
          includeDeletedComments: !0,
          page: 1,
          perPage: 1,
          versionUri: _v1?.videoVersionUri || void 0,
          reviewId: _v2,
          password: _v3
        },
        headers: {
          ...(_v1?.targetApiVersion ? {
            Accept: `application/vnd.vimeo.*+json;version=${_v1.targetApiVersion}`
          } : {})
        }
      } : null, {
        revalidateOnFocus: !1,
        revalidateAll: !0,
        revalidateFirstPage: !1,
        revalidateIfStale: !1,
        parallel: !1
      });
    return {
      commentsCount: _v4?.[0]?.filteredTotal ?? 0,
      changeCommentsCount: {
        increaseCommentsCount: () => {
          _v7(_v0 => _v0?.filter(_v0 => !!_v0).map(_v0 => ({
            ..._v0,
            data: [..._v0.data],
            total: _v0.total ? _v0.total + 1 : 1
          })));
        },
        decreaseCommentsCount: () => {
          _v7(_v0 => _v0?.filter(_v0 => !!_v0).map(_v0 => ({
            ..._v0,
            data: [..._v0.data],
            total: _v0.total && _v0.total > 0 ? _v0.total - 1 : 0
          })));
        }
      },
      revalidateCommentCount: _v7,
      isLoading: _v5,
      isReady: !!_v4 || !!_v6,
      error: _v6
    };
  }
  function _v7(_v0, _v1, _v2) {
    let _v3 = (0, _v2.useGetVideoCommentsInfinite)(() => {
        if (!_v0 || !_v1.shouldFetch || _v2) return null;
        let _v0 = (0, _v4.getPasswordHashFromCookie)(_v0);
        return {
          where: {
            videoId: _v0
          },
          select: ["uri"],
          query: (0, _v5.getPublicCommentsCountQuery)(_v0)
        };
      }),
      _v4 = (0, _v1.useGetAlbumVideoCommentsInfinite)(() => {
        if (!_v0 || !_v1.shouldFetch || !_v2) return null;
        let _v0 = (0, _v5.getShowcasePasswordHashFromCookie)(_v2);
        return {
          where: {
            albumId: _v2,
            videoId: _v0
          },
          select: ["uri"],
          query: (0, _v5.getPublicCommentsCountQuery)(_v0)
        };
      }),
      {
        data: _v5,
        mutate: _v6,
        isLoading: _v7,
        error: _v8
      } = _v2 ? _v4 : _v3;
    return {
      commentsCount: _v5?.[0]?.filteredTotal ?? 0,
      changeCommentsCount: {
        increaseCommentsCount: () => {
          _v6(_v0 => _v0?.filter(_v0 => !!_v0).map(_v0 => ({
            ..._v0,
            data: [..._v0.data],
            filteredTotal: _v0.filteredTotal ? _v0.filteredTotal + 1 : 1
          })));
        },
        decreaseCommentsCount: () => {
          _v6(_v0 => _v0?.filter(_v0 => !!_v0).map(_v0 => ({
            ..._v0,
            data: [..._v0.data],
            filteredTotal: _v0.filteredTotal && _v0.filteredTotal > 0 ? _v0.filteredTotal - 1 : 0
          })));
        }
      },
      revalidateCommentCount: _v6,
      isLoading: _v7,
      isReady: !!_v5 || !!_v8,
      error: _v8
    };
  }
  _v0.s(["useGetCommentsCount", 0, function (_v0, _v1, _v2, _v3, _v4) {
    let _v5 = _v7(_v0, {
        shouldFetch: _v1
      }, _v3),
      _v6 = _v6(_v0, {
        shouldFetch: !_v1,
        videoVersionUri: _v2?.videoVersionUri,
        targetApiVersion: _v2?.targetApiVersion
      }, _v4);
    return _v1 ? _v5 : _v6;
  }, "useGetPrivateCommentsCount", 0, _v6, "useGetPublicCommentsCount", 0, _v7]);
}