{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["useCopyVideoLink", 0, ({
    video: _v0,
    surface: _v1,
    analyticsElement: _v2,
    manageActionLocation: _v3,
    analyticsLocation: _v4 = "card",
    pageNameOverride: _v5
  }) => {
    let _v6 = (0, _v7.useViewer)(),
      _v7 = (0, _v12.useNotification)(),
      _v8 = (0, _v13.usePageName)(),
      _v9 = _v5 ?? _v8,
      {
        bi_expiring_links_ux_enabled: _v10,
        bi_expiring_links_default_expiry_days: _v11
      } = (0, _v2.useOrionSettingsFields)(["bi_expiring_links_ux_enabled", "bi_expiring_links_default_expiry_days"]),
      {
        reviewId: _v12
      } = (0, _v1.useContext)(_v4.ReviewLinkContext),
      {
        getVideoShareLoopTrackingParams: _v13
      } = (0, _v14.useShareLoopTrackingParams)(),
      {
        trackVideoLinkCopied: _v14
      } = (0, _v3.useDistributionTracking)(),
      _v15 = (0, _v9.useCopyVideoLinkToast)(),
      _v16 = !!_v0?.metadata?.interactions?.edit?.uri,
      _v17 = (0, _v11.useManageShareAction)({
        canEdit: _v16,
        entityUri: _v0.uri,
        location: _v3,
        panel: "COPY_LINK_PANEL"
      }),
      _v18 = !!_v10,
      _v19 = (0, _v10.useCreateAndCopySharingLink)(_v1, _v0, () => _v7({
        content: _v16.linkCopyFailed,
        status: "error"
      })),
      _v20 = Math.min(Math.max(_v11 ?? 0, 0), _v6.MAX_EXPIRY_DAYS);
    return (0, _v1.useCallback)(() => {
      let _v0,
        _v1 = _v13(_v9, !!_v0?.parentProject?.isPrivateToUser);
      if (_v18 && _v16 && !_v12) {
        let _v0 = (0, _v17.idFromUri)(_v0.uri),
          _v1 = /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v6?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
        _v19(_v0, _v1, _v1, _v20), _v15.BPAnalyticsV2.copyVideoShareLink({
          location: _v4,
          element: _v2,
          teamUser: _v6?.teamUser,
          folder: _v0.parentProject,
          video: _v0,
          webCtx: {
            path: _v9,
            target_path: null
          }
        });
        return;
      }
      _v0 = _v12 ? `${_v6?.vimeoHttpsUrl}/reviews/${_v12}${_v0.uri}${_v1}` : /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v6?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
      let _v2 = (0, _v5.default)(_v0);
      _v15({
        video: _v0,
        isSuccess: _v2,
        onManage: _v17
      }), _v2 && _v14({
        clipId: String((0, _v17.idFromUri)(_v0.uri)),
        source: (0, _v8.surfaceToVideoLinkCopiedSource)(_v1)
      }), _v15.BPAnalyticsV2.copyVideoShareLink({
        location: _v4,
        element: _v2,
        teamUser: _v6?.teamUser,
        folder: _v0.parentProject,
        video: _v0,
        webCtx: {
          path: _v9,
          target_path: _v0 ?? null
        }
      });
    }, [_v2, _v4, _v16, _v19, _v20, _v13, _v18, _v17, _v9, _v12, _v15, _v1, _v14, _v0, _v6?.teamUser, _v6?.vimeoHttpsUrl]);
  }]);
}