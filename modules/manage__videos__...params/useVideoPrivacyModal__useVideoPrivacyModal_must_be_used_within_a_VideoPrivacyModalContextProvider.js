{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useVideoPrivacyModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v2.VideoPrivacyModalDispatch);
    if (!_v0) throw Error("useVideoPrivacyModal must be used within a VideoPrivacyModalContextProvider");
    return {
      openVideoPrivacyModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      }),
      closeVideoPrivacyModal: () => _v0({
        isOpen: !1,
        state: null
      })
    };
  }]);
}