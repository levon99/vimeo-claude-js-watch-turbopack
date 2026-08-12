{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useFolderShareClick", 0, ({
    folder: _v0,
    analytics: _v1,
    analyticsV2: _v2
  }) => {
    let {
        openShareFolderModal: _v3
      } = (0, _v4.useShareFolderModal)(),
      {
        open: _v4,
        close: _v5
      } = (0, _v5.useUpsellModal)(),
      _v6 = (0, _v3.usePageName)(),
      _v7 = (0, _v2.useViewer)(),
      {
        uri: _v8
      } = _v0,
      {
        capabilities: _v9
      } = (0, _v1.useCapability)(["canSeeUpsellModalOnShare"], _v8),
      {
        canInvite: _v10
      } = (0, _v7.getFolderPermissions)(_v0),
      _v11 = _v1.page ? _v1.page : _v6.toUpperCase();
    return _v10 ? (_v0, _v1) => {
      _v6.BPAnalyticsV2.openFolderShare({
        location: _v2.location,
        element: _v2.element,
        teamUser: _v7?.teamUser,
        folder: _v0,
        webCtx: {
          path: window.location.pathname,
          page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
        }
      }), _v3?.(_v8, _v1.shareModalEntryPoint, _v0, _v1);
    } : _v9.canSeeUpsellModalOnShare ? () => {
      _v4({
        tracking: {
          params: {
            feature: "teams",
            location: _v1.location,
            page: _v11,
            upsell_name: "share_folder_with_team"
          },
          paywallTracking: {
            paywallTrigger: "folder_library_share_click_button",
            paywallLocation: "folder_library",
            paywallType: "popup",
            paywallFeature: "collaboration"
          }
        },
        onClose: _v5
      });
    } : void 0;
  }]);
}