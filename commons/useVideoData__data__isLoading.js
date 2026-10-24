{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useVideoData", 0, (_v0, _v1, _v2, _v3, _v4) => {
    var _v5, _v6, _v7, _v8, _v9;
    let _v10,
      _v11,
      _v12,
      _v13,
      {
        data: _v14,
        isLoading: _v15,
        ..._v16
      } = (_v5 = _v0, _v6 = _v1, _v7 = _v2, _v8 = _v3, _v9 = _v4, _v10 = (0, _v4.useViewer)(), _v11 = (0, _v1.useGetVideo)(() => {
        if (!_v10 || !_v5 || !_v7 && !_v8 || _v6) return null;
        let _v0 = _v7 ? (0, _v6.getReviewPasswordHashFromCookie)(_v7) : void 0;
        return {
          where: {
            videoId: _v5
          },
          select: _v5.VIDEO_DATA_FIELDS,
          query: {
            reviewId: _v7,
            password: _v0,
            ...(0, _v6.getFolderShareQuery)(_v8, _v9)
          }
        };
      }, {
        revalidateOnFocus: !1
      }), _v12 = (0, _v2.useGetAlbumVideoData)(_v6 || null, Number((0, _v6.getVideoIdFromClipRequestId)(_v5)), (0, _v6.mapToClipFields)(_v5.VIDEO_DATA_FIELDS), !_v6), _v13 = (0, _v3.useGetUnlockedVideo)(() => !_v10 || _v6 || _v7 || _v8 ? null : {
        where: {
          videoId: _v5
        },
        select: _v5.VIDEO_DATA_FIELDS
      }, {
        revalidateOnFocus: !1
      }), _v7 || _v8 ? _v11 : _v6 ? {
        ..._v12,
        data: (0, _v6.extractClipData)(_v12.data),
        isLoading: _v12.isLoading
      } : _v13);
    return {
      videoData: _v14,
      videoDataLoading: _v15 || !_v14,
      ..._v16
    };
  }]);
}