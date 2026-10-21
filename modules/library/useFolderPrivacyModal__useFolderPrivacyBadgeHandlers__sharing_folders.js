{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v5.FolderPrivacyModalDispatch);
    return {
      openFolderPrivacyModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      }),
      closeFolderPrivacyModal: () => _v0({
        isOpen: !1,
        state: null
      })
    };
  };
  _v0.s(["useFolderPrivacyModal", 0, _v6], 0);
  var _v7 = _v0.i(0);
  _v0.s(["useFolderPrivacyBadgeHandlers", 0, function () {
    let _v0 = (0, _v1.useContext)(_v4.ViewerContext),
      _v1 = (0, _v2.useOrionSetting)("sharing_folders"),
      {
        openFolderPrivacyModal: _v2
      } = _v6();
    return _v0 => {
      let _v1 = _v0.privacy?.view;
      if (!_v1 || void 0 === _v1 || !(0, _v3.isFolderPrivacyView)(_v1)) return {
        folderPrivacy: void 0,
        onPrivacyBadgeClick: void 0
      };
      let _v2 = (0, _v7.getPrivacyTypeIconAndLabel)(_v1, _v0?.teamUser),
        _v3 = !!_v0.metadata?.interactions?.edit?.uri,
        _v4 = _v2 && _v3 ? () => {
          _v2({
            folderOwnerId: Number(_v0.uri.split("/")[2]),
            folderId: Number(_v0.uri.split("/")[4]),
            folderName: _v0.name,
            initialPrivacy: _v1
          });
        } : void 0;
      return {
        folderPrivacy: _v2,
        onPrivacyBadgeClick: _v4
      };
    };
  }], 0);
}