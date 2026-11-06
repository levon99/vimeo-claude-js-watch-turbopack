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
    manageActionLocation: _v2,
    pageNameOverride: _v3,
    linkOverride: _v4
  }) => {
    let _v5 = (0, _v8.useViewer)(),
      _v6 = (0, _v13.useNotification)(),
      _v7 = (0, _v14.usePageName)(),
      _v8 = _v3 ?? _v7,
      {
        bi_expiring_links_ux_enabled: _v9,
        bi_expiring_links_default_expiry_days: _v10
      } = (0, _v2.useOrionSettingsFields)(["bi_expiring_links_ux_enabled", "bi_expiring_links_default_expiry_days"]),
      {
        reviewId: _v11
      } = (0, _v1.useContext)(_v5.ReviewLinkContext),
      {
        getVideoShareLoopTrackingParams: _v12
      } = (0, _v15.useShareLoopTrackingParams)(),
      {
        trackVideoLinkCopied: _v13
      } = (0, _v3.useDistributionTracking)(),
      _v14 = (0, _v10.useCopyVideoLinkToast)(),
      _v15 = !!_v0?.metadata?.interactions?.edit?.uri,
      _v16 = (0, _v12.useManageShareAction)({
        canEdit: _v15,
        entityUri: _v0.uri,
        location: _v2,
        panel: "COPY_LINK_PANEL"
      }),
      _v17 = !!_v9,
      _v18 = (0, _v11.useCreateAndCopySharingLink)(_v1, _v0, () => _v6({
        content: _v16.linkCopyFailed,
        status: "error"
      })),
      _v19 = _v0.user?.uri ? (0, _v17.idFromUri)(_v0.user.uri) : void 0,
      _v20 = (0, _v4.useIsFreeTierUnlisted)(_v0.privacy?.view, _v19),
      _v21 = (0, _v4.useFreeTierUnlistedGrantIntervalDays)(),
      _v22 = Math.min(Math.max(_v10 ?? 0, 0), _v7.MAX_EXPIRY_DAYS);
    return (0, _v1.useCallback)(() => {
      let _v0,
        _v1 = _v12(_v8, !!_v0?.parentProject?.isPrivateToUser);
      if (_v4) {
        let _v0 = (0, _v6.default)(_v4);
        _v14({
          video: _v0,
          isSuccess: _v0,
          onManage: _v16
        }), _v0 && _v13({
          clipId: String((0, _v17.idFromUri)(_v0.uri)),
          source: (0, _v9.surfaceToVideoLinkCopiedSource)(_v1)
        });
        return;
      }
      if (_v20 && !_v11) {
        let _v0 = /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v5?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
        return (0, _v6.default)(_v0) ? (_v14({
          video: _v0,
          isSuccess: !0
        }), void _v13({
          clipId: String((0, _v17.idFromUri)(_v0.uri)),
          source: (0, _v9.surfaceToVideoLinkCopiedSource)(_v1),
          ...(null !== _v21 ? {
            intervalDays: _v21
          } : {})
        })) : void _v6({
          content: _v16.linkCopyFailed,
          status: "error"
        });
      }
      if (_v17 && _v15 && !_v11) {
        let _v0 = (0, _v17.idFromUri)(_v0.uri),
          _v1 = /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v5?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
        _v18(_v0, _v1, _v1, _v22);
        return;
      }
      _v0 = _v11 ? `${_v5?.vimeoHttpsUrl}/reviews/${_v11}${_v0.uri}${_v1}` : /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v5?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
      let _v2 = (0, _v6.default)(_v0);
      _v14({
        video: _v0,
        isSuccess: _v2,
        onManage: _v16
      }), _v2 && _v13({
        clipId: String((0, _v17.idFromUri)(_v0.uri)),
        source: (0, _v9.surfaceToVideoLinkCopiedSource)(_v1)
      });
    }, [_v15, _v18, _v21, _v20, _v6, _v22, _v12, _v17, _v4, _v16, _v8, _v11, _v14, _v1, _v13, _v0, _v5?.vimeoHttpsUrl]);
  }]);
}