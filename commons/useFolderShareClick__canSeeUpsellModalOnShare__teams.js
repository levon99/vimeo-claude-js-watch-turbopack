{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useFolderShareClick", 0, ({
    folder: _v0,
    analytics: _v1
  }) => {
    let {
        openShareFolderModal: _v2
      } = (0, _v3.useShareFolderModal)(),
      {
        open: _v3,
        close: _v4
      } = (0, _v4.useUpsellModal)(),
      _v5 = (0, _v2.usePageName)(),
      {
        uri: _v6
      } = _v0,
      {
        capabilities: _v7
      } = (0, _v1.useCapability)(["canSeeUpsellModalOnShare"], _v6),
      {
        canInvite: _v8
      } = (0, _v5.getFolderPermissions)(_v0),
      _v9 = _v1.page ? _v1.page : _v5.toUpperCase();
    return _v8 ? (_v0, _v1) => {
      _v2?.(_v6, _v1.shareModalEntryPoint, _v0, _v1);
    } : _v7.canSeeUpsellModalOnShare ? () => {
      _v3({
        tracking: {
          params: {
            feature: "teams",
            location: _v1.location,
            page: _v9,
            upsell_name: "share_folder_with_team"
          },
          paywallTracking: {
            paywallTrigger: "folder_library_share_click_button",
            paywallLocation: "folder_library",
            paywallType: "popup",
            paywallFeature: "collaboration"
          }
        },
        onClose: _v4
      });
    } : void 0;
  }]);
}