{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useDownloadModal", 0, () => {
    let _v0 = (0, _v1.useContext)(_v2.ModalContextDispatch);
    if (!_v0) throw Error("useDownloadlModal must be used within a Download Modal Provider");
    return {
      close: () => _v0.setModalContextState({
        isActive: !1,
        state: null
      }),
      open: _v0 => _v0.setModalContextState({
        isActive: !0,
        state: _v0
      })
    };
  }], 0), _v0.s(["getAnalyticsPageLinkForVideo", 0, _v0 => `${_v0}/analytics`, "getReplaceLinkForVideo", 0, _v0 => `${_v0}/replace`], 0);
}