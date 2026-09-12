{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useFolderDefaultsModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v2.ModalContextDispatch);
    return {
      openFolderDefaultsModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      })
    };
  }]);
}