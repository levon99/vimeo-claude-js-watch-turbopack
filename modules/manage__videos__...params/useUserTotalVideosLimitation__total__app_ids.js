{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useUserTotalVideosLimitation", 0, () => {
    let {
        user: _v0
      } = (0, _v1.useContext)(_v3.ViewerContext) ?? {},
      _v1 = _v0?.id || 0,
      [_v2, {
        data: _v3,
        isLoading: _v4
      }] = (0, _v5.useLazyFetchUserClipsWithFieldsQuery)(),
      {
        activePackage: _v5
      } = (0, _v1.useContext)(_v4.MagistoSessionContext),
      _v6 = !_v5?.maxMoviesAllowed;
    return (0, _v1.useLayoutEffect)(() => {
      _v6 || _v2({
        userId: _v1,
        fields: ["total"],
        query: {
          filter: "app_ids",
          filterAppIds: `${_v2.VIMEO_CREATE_WEB_APP_ID},${_v2.VIMEO_CREATE_ANDROID_APP_ID},${_v2.VIMEO_CREATE_IOS_APP_ID},${_v2.VIMEO_CREATE_BACKEND_APP_ID}`
        }
      });
    }, [_v6, _v2, _v1]), {
      isUserCanCreateClips: (0, _v1.useMemo)(() => !!_v6 || !(_v3?.total && _v5?.maxMoviesAllowed) || _v3.total < _v5.maxMoviesAllowed, [_v5?.maxMoviesAllowed, _v6, _v3?.total]),
      isUserCanCreateClipsDataLoaded: _v6 || !_v4
    };
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useHasDownloadFiles", 0, _v0 => {
    let {
      data: _v1,
      error: _v2,
      isLoading: _v3
    } = (0, _v6.useGetVideo)(() => _v0 ? {
      where: {
        videoId: _v0
      },
      select: ["download.quality"]
    } : null);
    return {
      hasFiles: (0, _v7.filterVideoFiles)(_v1?.download || []).length > 0,
      isLoading: _v3 || !!_v2
    };
  }], 0);
}