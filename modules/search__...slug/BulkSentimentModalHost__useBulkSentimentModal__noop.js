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
  })], 0);
  var _v6 = _v0.i(0);
  let _v7 = (0, _v2.default)(() => _v0.A(0).then(_v0 => _v0.DeleteVideoModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v8 = (0, _v6.createContext)({
      setModalContextState: () => console.log("noop")
    });
  _v0.s(["DeleteVideoModalContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v6.useState)({
        isOpen: !1,
        state: null
      }),
      {
        isOpen: _v3,
        state: _v4
      } = _v1;
    return (0, _v1.jsxs)(_v8.Provider, {
      value: {
        setModalContextState: _v2
      },
      children: [_v0, _v3 && (0, _v1.jsx)(_v7, {
        ..._v4,
        isOpen: !0,
        setIsOpen: () => _v2({
          isOpen: !1,
          state: null
        })
      })]
    });
  }, "ModalContextDispatch", 0, _v8], 0);
}