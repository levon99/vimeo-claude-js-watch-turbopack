{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useBulkPrivacyModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v2.ModalContextDispatch);
    if (!_v0) throw Error("useBulkPrivacyModal must be used within a BulkPrivacyModalProvider");
    return {
      openBulkPrivacyModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      }),
      closeBulkPrivacyModal: () => _v0({
        isOpen: !1,
        state: null
      })
    };
  }], 0);
  var _v3 = _v0.i(0);
  _v0.s(["useBulkShareInChinaModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v3.ModalContextDispatch);
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
  }], 0);
}