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
    } = (0, _v1.useContext)(_v5.FilePrivacyModalDispatch);
    if (!_v0) throw Error("useFilePrivacyModal must be used within a FilePrivacyModalContextProvider");
    return {
      openFilePrivacyModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      }),
      closeFilePrivacyModal: () => _v0({
        isOpen: !1,
        state: null
      })
    };
  };
  _v0.s(["useFilePrivacyModal", 0, _v6], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useFilePrivacyBadgeHandlers", 0, function ({
    surface: _v0,
    badgeVariant: _v1
  }) {
    let _v2,
      _v3 = (0, _v1.useContext)(_v4.ViewerContext),
      {
        openFilePrivacyModal: _v4
      } = _v6(),
      {
        revalidateItemLists: _v5
      } = (0, _v7.useRevalidate)(),
      {
        trackFilePrivacyBadgeClicked: _v6
      } = (_v2 = (0, _v2.usePico)(), {
        trackFilePrivacyBadgeClicked: (0, _v1.useCallback)(_v0 => {
          null !== _v2 && _v2.track("file_privacy_badge_clicked", {
            file_id: _v0.fileId,
            file_type: (0, _v3.deriveFileType)(_v0.contentType),
            badge_variant: _v0.badgeVariant,
            surface: _v0.surface
          });
        }, [_v2])
      });
    return _v0 => {
      let _v1 = _v0.isColdStorage,
        _v2 = _v1 ? (0, _v8.getPrivacyTypeIconAndLabel)("cold_storage") : (0, _v8.getPrivacyTypeIconAndLabel)(_v0.privacy, _v3?.teamUser),
        _v3 = Number(_v0.uri.split("/")[2]),
        _v4 = _v2 && !_v1 ? () => _v4({
          userId: _v3,
          fileId: _v0.publicId,
          fileName: _v0.name,
          currentPrivacy: _v0.privacy,
          currentPassword: _v0.password ?? "",
          onSuccess: () => _v5()
        }) : void 0;
      return {
        filePrivacy: _v2,
        onPrivacyBadgeClick: _v4 ? () => {
          _v6({
            fileId: _v0.publicId,
            contentType: _v0.contentType,
            badgeVariant: _v1,
            surface: _v0
          }), _v4();
        } : void 0
      };
    };
  }], 0);
}