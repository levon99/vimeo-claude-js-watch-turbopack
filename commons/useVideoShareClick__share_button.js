{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useVideoShareClick", 0, ({
    video: _v0,
    analytics: _v1,
    canShare: _v2
  }) => {
    let {
        openShareFolderModal: _v3
      } = (0, _v2.useShareFolderModal)(),
      {
        pathname: _v4
      } = (0, _v1.useRouter)(),
      _v5 = _v2 ?? !!_v0.metadata?.interactions?.invite?.uri,
      {
        uri: _v6
      } = _v0,
      _v7 = {
        pageSource: (0, _v3.getPrivacyChangePageSource)(_v4),
        entryPoint: "share_button"
      };
    return _v5 ? () => {
      _v3?.(_v6, _v1.shareModalEntryPoint, void 0, void 0, void 0, _v7);
    } : void 0;
  }]);
}