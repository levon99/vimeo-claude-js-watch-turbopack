{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useBulkShareInChinaModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v2.ModalContextDispatch);
    if (!_v0) throw Error("useBulkShareInChinaModal must be used within a BulkShareInChinaModalProvider");
    return {
      openBulkShareInChinaModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      }),
      closeBulkShareInChinaModal: () => _v0({
        isOpen: !1,
        state: null
      })
    };
  }]);
}