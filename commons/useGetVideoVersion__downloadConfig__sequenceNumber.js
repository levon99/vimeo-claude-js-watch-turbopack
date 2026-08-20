{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useGetVideoVersion", 0, ({
    versionId: _v0,
    videoId: _v1,
    reviewId: _v2
  }) => {
    let _v3 = (0, _v2.useViewer)(),
      {
        data: _v4,
        isLoading: _v5,
        mutate: _v6
      } = (0, _v1.useGetVideoVersion)(() => {
        if (!_v0 || !_v1 || !_v3) return null;
        let _v0 = (0, _v4.getReviewPasswordHashFromCookie)(_v2);
        return {
          where: {
            videoId: _v1,
            versionId: _v0
          },
          select: ["uri", "downloadConfig", "sequenceNumber", "width", "height", "filesize", "filename", "uploadDate", "user.name", "versionType", "isDeleted", "active"],
          query: {
            reviewId: _v2,
            password: _v0
          },
          headers: {
            Accept: _v3.API_ACCEPT_HEADER
          }
        };
      }, {
        revalidateOnFocus: !1
      });
    return {
      data: _v4,
      isLoading: _v5 || !_v4,
      mutateVideoVersion: _v6
    };
  }]);
}