{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useSlackIntegrationModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v2.ModalContextDispatch);
    return {
      openSlackIntegrationModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      })
    };
  }]);
}