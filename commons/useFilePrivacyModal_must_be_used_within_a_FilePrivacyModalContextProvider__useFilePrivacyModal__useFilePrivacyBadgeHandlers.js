{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v3.FilePrivacyModalDispatch);
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
  _v0.s(["useFilePrivacyModal", 0, _v4], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useFilePrivacyBadgeHandlers", 0, function () {
    let _v0 = (0, _v1.useContext)(_v2.ViewerContext),
      {
        openFilePrivacyModal: _v1
      } = _v4(),
      {
        revalidateItemLists: _v2
      } = (0, _v5.useRevalidate)();
    return _v0 => {
      let _v1 = (0, _v6.getPrivacyTypeIconAndLabel)(_v0.privacy, _v0?.teamUser),
        _v2 = Number(_v0.uri.split("/")[2]),
        _v3 = _v1 ? () => _v1({
          userId: _v2,
          fileId: _v0.publicId,
          fileName: _v0.name,
          currentPrivacy: _v0.privacy,
          currentPassword: _v0.password ?? "",
          onSuccess: () => _v2()
        }) : void 0;
      return {
        filePrivacy: _v1,
        onPrivacyBadgeClick: _v3
      };
    };
  }], 0);
}