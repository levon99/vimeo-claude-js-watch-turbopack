{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useVideoShareClick", 0, ({
    video: _v0,
    analytics: _v1,
    analyticsV2: _v2,
    parentFolder: _v3,
    canShare: _v4
  }) => {
    let {
        openShareFolderModal: _v5
      } = (0, _v5.useShareFolderModal)(),
      _v6 = (0, _v4.usePageName)(),
      {
        pathname: _v7
      } = (0, _v1.useRouter)(),
      _v8 = (0, _v3.useViewer)(),
      _v9 = _v4 ?? !!_v0.metadata?.interactions?.invite?.uri,
      {
        uri: _v10
      } = _v0,
      _v11 = (0, _v2.useAnalyticsEvent)(),
      _v12 = _v1.page ? _v1.page : _v6.toUpperCase(),
      _v13 = {
        pageSource: (0, _v8.getPrivacyChangePageSource)(_v7),
        entryPoint: "share_button"
      };
    return _v9 ? () => {
      _v11((0, _v6.genericClick)({
        copy: "Share",
        feature: _v1.feature,
        location: _v1.location,
        name: "select_folder_menu_item",
        page: _v12,
        target: null,
        type: "general",
        target_path: null
      })), _v7.BPAnalyticsV2.openVideoShare({
        location: _v2.location,
        element: _v2.element,
        teamUser: _v8?.teamUser,
        folder: _v3,
        video: _v0
      }), _v5?.(_v10, _v1.shareModalEntryPoint, void 0, void 0, void 0, _v13);
    } : void 0;
  }]);
}