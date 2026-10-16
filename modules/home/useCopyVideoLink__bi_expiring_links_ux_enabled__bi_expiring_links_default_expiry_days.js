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
    _v16 = _v0.i(0);
  _v0.s(["useCopyVideoLink", 0, ({
    video: _v0,
    surface: _v1,
    manageActionLocation: _v2,
    pageNameOverride: _v3
  }) => {
    let _v4 = (0, _v7.useViewer)(),
      _v5 = (0, _v12.useNotification)(),
      _v6 = (0, _v13.usePageName)(),
      _v7 = _v3 ?? _v6,
      {
        bi_expiring_links_ux_enabled: _v8,
        bi_expiring_links_default_expiry_days: _v9
      } = (0, _v2.useOrionSettingsFields)(["bi_expiring_links_ux_enabled", "bi_expiring_links_default_expiry_days"]),
      {
        reviewId: _v10
      } = (0, _v1.useContext)(_v4.ReviewLinkContext),
      {
        getVideoShareLoopTrackingParams: _v11
      } = (0, _v14.useShareLoopTrackingParams)(),
      {
        trackVideoLinkCopied: _v12
      } = (0, _v3.useDistributionTracking)(),
      _v13 = (0, _v9.useCopyVideoLinkToast)(),
      _v14 = !!_v0?.metadata?.interactions?.edit?.uri,
      _v15 = (0, _v11.useManageShareAction)({
        canEdit: _v14,
        entityUri: _v0.uri,
        location: _v2,
        panel: "COPY_LINK_PANEL"
      }),
      _v16 = !!_v8,
      _v17 = (0, _v10.useCreateAndCopySharingLink)(_v1, _v0, () => _v5({
        content: _v15.linkCopyFailed,
        status: "error"
      })),
      _v18 = Math.min(Math.max(_v9 ?? 0, 0), _v6.MAX_EXPIRY_DAYS);
    return (0, _v1.useCallback)(() => {
      let _v0,
        _v1 = _v11(_v7, !!_v0?.parentProject?.isPrivateToUser);
      if (_v16 && _v14 && !_v10) {
        let _v0 = (0, _v16.idFromUri)(_v0.uri),
          _v1 = /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v4?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
        _v17(_v0, _v1, _v1, _v18);
        return;
      }
      _v0 = _v10 ? `${_v4?.vimeoHttpsUrl}/reviews/${_v10}${_v0.uri}${_v1}` : /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v4?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
      let _v2 = (0, _v5.default)(_v0);
      _v13({
        video: _v0,
        isSuccess: _v2,
        onManage: _v15
      }), _v2 && _v12({
        clipId: String((0, _v16.idFromUri)(_v0.uri)),
        source: (0, _v8.surfaceToVideoLinkCopiedSource)(_v1)
      });
    }, [_v14, _v17, _v18, _v11, _v16, _v15, _v7, _v10, _v13, _v1, _v12, _v0, _v4?.vimeoHttpsUrl]);
  }]);
}