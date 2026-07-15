{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useReviewLinkVideoDownloads", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let {
      error: _v5,
      data: _v6,
      isLoading: _v7
    } = (0, _v1.useGetVideoVersionDownloads)(() => {
      if (!_v0 || !_v2 || !_v1 || _v3) return null;
      let _v0 = (0, _v3.getReviewPasswordHashFromCookie)(_v1);
      return {
        where: {
          videoId: _v0,
          versionId: _v2
        },
        headers: {
          Accept: _v2.API_ACCEPT_HEADER,
          ..._v4
        },
        query: {
          reviewId: _v1,
          password: _v0
        }
      };
    }, {
      keepPreviousData: !0,
      refreshWhenHidden: !1,
      revalidateOnFocus: !1,
      shouldRetryOnError: !1
    });
    return {
      downloadsError: _v5,
      isDownloadsLoading: _v7,
      downloadConfig: {
        files: _v6?.download
      }
    };
  }]);
}