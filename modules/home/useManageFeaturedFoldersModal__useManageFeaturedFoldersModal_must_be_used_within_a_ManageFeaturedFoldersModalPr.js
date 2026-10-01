{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useManageFeaturedFoldersModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v2.ModalContextDispatch);
    if (!_v0) throw Error("useManageFeaturedFoldersModal must be used within a ManageFeaturedFoldersModalProvider");
    return {
      openManageFeaturedFoldersModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      }),
      closeManageFeaturedFoldersModal: () => _v0({
        isOpen: !1,
        state: null
      })
    };
  }]);
}