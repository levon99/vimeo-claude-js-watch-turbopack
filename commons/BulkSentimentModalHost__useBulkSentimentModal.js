{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.BulkSentimentModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v5 = (0, _v3.create)(_v0 => ({
      modalProps: null,
      openBulkSentimentModal: _v0 => _v0({
        modalProps: _v0
      }),
      closeBulkSentimentModal: () => _v0({
        modalProps: null
      })
    }));
  _v0.s(["BulkSentimentModalHost", 0, () => {
    let _v0 = _v5(_v0 => _v0.modalProps),
      _v1 = _v5(_v0 => _v0.closeBulkSentimentModal);
    return _v0 ? (0, _v1.jsx)(_v4, {
      ..._v0,
      isOpen: !!_v0,
      onClose: _v1
    }) : null;
  }, "useBulkSentimentModal", 0, () => ({
    openBulkSentimentModal: _v5(_v0 => _v0.openBulkSentimentModal),
    closeBulkSentimentModal: _v5(_v0 => _v0.closeBulkSentimentModal)
  })]);
}