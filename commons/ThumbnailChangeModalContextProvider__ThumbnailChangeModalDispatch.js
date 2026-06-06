{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.createContext)({
    setModalState: () => void 0
  });
  _v0.s(["ThumbnailChangeModalContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)({
      isOpen: !1
    });
    return (0, _v1.jsxs)(_v4.Provider, {
      value: {
        setModalState: _v2
      },
      children: [_v0, _v1.isOpen && (0, _v1.jsx)(_v3.ThumbnailChangeModal, {
        clipId: _v1.clipId,
        isOpen: !0,
        showChooseExisting: _v1.showChooseExisting,
        onClose: () => _v2({
          isOpen: !1
        }),
        onSaveSuccess: _v1.onSaveSuccess
      })]
    });
  }, "ThumbnailChangeModalDispatch", 0, _v4]);
}