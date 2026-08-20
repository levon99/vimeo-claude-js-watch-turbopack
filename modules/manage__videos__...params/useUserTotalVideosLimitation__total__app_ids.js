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
  _v0.s(["default", 0, function () {
    let _v0 = (0, _v7.loadCookie)("create_context.shopify"),
      _v1 = (0, _v1.useContext)(_v3.ViewerContext),
      _v2 = {
        platform: window.navigator.platform,
        lang: _v1?.locale ?? null,
        path: window.location.pathname,
        third_party_integration: null != _v0 ? "shopify" : null,
        device_id: _v1?.vuid ?? null,
        is_guest: !1,
        in_background: !1,
        vsid: null,
        debug_mode: !1,
        session_id: _v1?.xsrft && parseInt(_v1.xsrft),
        client_ver: null,
        clients_session_start_ts: null,
        client_timestamp: Date.now().toString(),
        user_id: JSON.stringify(_v1?.user?.id) || null,
        user_package_type: _v1?.user?.account || null,
        product: "Vimeo Create"
      };
    return {
      genericBi: (_v0, _v1, _v2) => {
        let _v3 = _v2 ? {
          ..._v2,
          ..._v2
        } : {};
        _v6.BigPictureClient.sendEvent(new _v6.Event(_v0, _v1, _v3));
      }
    };
  }], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["useHasDownloadFiles", 0, _v0 => {
    let {
      data: _v1,
      error: _v2,
      isLoading: _v3
    } = (0, _v8.useGetVideo)(() => _v0 ? {
      where: {
        videoId: _v0
      },
      select: ["download.quality"]
    } : null);
    return {
      hasFiles: (0, _v9.filterVideoFiles)(_v1?.download || []).length > 0,
      isLoading: _v3 || !!_v2
    };
  }], 0);
}