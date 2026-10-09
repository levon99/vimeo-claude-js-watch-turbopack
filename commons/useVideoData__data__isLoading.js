{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useVideoData", 0, (_v0, _v1, _v2) => {
    var _v3, _v4, _v5;
    let _v6,
      _v7,
      _v8,
      _v9,
      {
        data: _v10,
        isLoading: _v11,
        ..._v12
      } = (_v3 = _v0, _v4 = _v1, _v5 = _v2, _v6 = (0, _v4.useViewer)(), _v7 = (0, _v1.useGetVideo)(() => {
        if (!_v6 || !_v3 || !_v5 || _v4) return null;
        let _v0 = (0, _v6.getReviewPasswordHashFromCookie)(_v5);
        return {
          where: {
            videoId: _v3
          },
          select: _v5.VIDEO_DATA_FIELDS,
          query: {
            reviewId: _v5,
            password: _v0
          }
        };
      }, {
        revalidateOnFocus: !1
      }), _v8 = (0, _v2.useGetAlbumVideoData)(_v4 || null, Number((0, _v6.getVideoIdFromClipRequestId)(_v3)), (0, _v6.mapToClipFields)(_v5.VIDEO_DATA_FIELDS), !_v4), _v9 = (0, _v3.useGetUnlockedVideo)(() => !_v6 || _v4 || _v5 ? null : {
        where: {
          videoId: _v3
        },
        select: _v5.VIDEO_DATA_FIELDS
      }, {
        revalidateOnFocus: !1
      }), _v5 ? _v7 : _v4 ? {
        ..._v8,
        data: (0, _v6.extractClipData)(_v8.data),
        isLoading: _v8.isLoading
      } : _v9);
    return {
      videoData: _v10,
      videoDataLoading: _v11 || !_v10,
      ..._v12
    };
  }]);
}