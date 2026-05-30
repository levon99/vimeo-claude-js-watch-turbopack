{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.BulkPrivacyModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v5 = (0, _v3.create)(_v0 => ({
      modalProps: null,
      openBulkPrivacyModal: _v0 => _v0({
        modalProps: _v0
      }),
      closeBulkPrivacyModal: () => _v0({
        modalProps: null
      })
    }));
  _v0.s(["BulkPrivacyModalHost", 0, () => {
    let _v0 = _v5(_v0 => _v0.modalProps),
      _v1 = _v5(_v0 => _v0.closeBulkPrivacyModal);
    return _v0 ? (0, _v1.jsx)(_v4, {
      ..._v0,
      isOpen: !!_v0,
      onClose: _v1
    }) : null;
  }, "useBulkPrivacyModal", 0, () => ({
    openBulkPrivacyModal: _v5(_v0 => _v0.openBulkPrivacyModal),
    closeBulkPrivacyModal: _v5(_v0 => _v0.closeBulkPrivacyModal)
  })], 0);
  var _v6 = _v0.i(0);
  _v0.s(["useEnableFolderBulkPrivacy", 0, () => {
    let {
      settings: _v0
    } = (0, _v6.useOrionSettings)();
    return _v0?.is_folder_bulk_privacy_enabled || !1;
  }], 0);
}