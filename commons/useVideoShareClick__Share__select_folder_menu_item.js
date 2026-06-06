{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useVideoShareClick", 0, ({
    video: _v0,
    analytics: _v1,
    analyticsV2: _v2,
    parentFolder: _v3,
    canShare: _v4
  }) => {
    let {
        openShareFolderModal: _v5
      } = (0, _v4.useShareFolderModal)(),
      _v6 = (0, _v3.usePageName)(),
      _v7 = (0, _v2.useViewer)(),
      _v8 = _v4 ?? !!_v0.metadata?.interactions?.invite?.uri,
      {
        uri: _v9
      } = _v0,
      _v10 = (0, _v1.useAnalyticsEvent)(),
      _v11 = _v1.page ? _v1.page : _v6.toUpperCase();
    return _v8 ? () => {
      _v10((0, _v5.genericClick)({
        copy: "Share",
        feature: _v1.feature,
        location: _v1.location,
        name: "select_folder_menu_item",
        page: _v11,
        target: null,
        type: "general",
        target_path: null
      })), _v6.BPAnalyticsV2.openVideoShare({
        location: _v2.location,
        element: _v2.element,
        teamUser: _v7?.teamUser,
        folder: _v3,
        video: _v0
      }), _v5?.(_v9, _v1.shareModalEntryPoint);
    } : void 0;
  }]);
}