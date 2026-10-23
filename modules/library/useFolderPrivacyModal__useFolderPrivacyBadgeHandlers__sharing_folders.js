{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v6.FolderPrivacyModalDispatch);
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
  _v0.s(["useFolderPrivacyModal", 0, _v7], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["useFolderPrivacyBadgeHandlers", 0, function ({
    surface: _v0,
    badgeVariant: _v1
  }) {
    let _v2,
      _v3 = (0, _v1.useContext)(_v5.ViewerContext),
      _v4 = (0, _v2.useOrionSetting)("sharing_folders"),
      {
        openFolderPrivacyModal: _v5
      } = _v7(),
      {
        trackFolderPrivacyBadgeClicked: _v6
      } = (_v2 = (0, _v3.usePico)(), {
        trackFolderPrivacyBadgeClicked: (0, _v1.useCallback)(_v0 => {
          null !== _v2 && _v2.track("folder_privacy_badge_clicked", {
            folder_id: _v0.folderId,
            badge_variant: _v0.badgeVariant,
            surface: _v0.surface
          });
        }, [_v2])
      });
    return _v0 => {
      let _v1 = _v0.privacy?.view;
      if (!_v4 || void 0 === _v1 || !(0, _v4.isFolderPrivacyView)(_v1)) return {
        folderPrivacy: void 0,
        onPrivacyBadgeClick: void 0
      };
      let _v2 = (0, _v8.getPrivacyTypeIconAndLabel)(_v1, _v3?.teamUser),
        _v3 = !!_v0.metadata?.interactions?.edit?.uri,
        _v4 = (0, _v9.getResourceIdFromUri)(_v0.uri),
        _v5 = _v2 && _v3 ? () => {
          _v6({
            folderId: String(_v4),
            badgeVariant: _v1,
            surface: _v0
          }), _v5({
            folderOwnerId: Number(_v0.uri.split("/")[2]),
            folderId: _v4,
            folderName: _v0.name,
            initialPrivacy: _v1
          });
        } : void 0;
      return {
        folderPrivacy: _v2,
        onPrivacyBadgeClick: _v5
      };
    };
  }], 0);
}