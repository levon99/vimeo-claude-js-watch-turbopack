{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useLeadFormPrefillParentListener", 0, (_v0, _v1) => {
    let _v2 = (() => {
      let [_v0, _v1] = (0, _v2.useState)(!0);
      return (0, _v2.useEffect)(() => {
        let _v0 = () => {
          _v1("visible" === document.visibilityState);
        };
        return document.addEventListener("visibilitychange", _v0), () => {
          document.removeEventListener("visibilitychange", _v0);
        };
      }, []), _v0;
    })();
    (0, _v1.useBroadcastChannel)(_v3.DOUBLE_GATE_BROADCAST_CHANNEL, (_v0, _v1) => {
      if (_v2 && _v0?.type === _v3.DOUBLE_GATE_MESSAGE_TYPE.REQUEST_PARENT_LEAD_DETAILS) {
        let _v0 = (0, _v4.getCookie)(_v0);
        _v0 && _v1.postMessage({
          leadUuid: _v0,
          entityId: _v0,
          entityType: _v1,
          type: _v3.DOUBLE_GATE_MESSAGE_TYPE.RESPONSE_PARENT_LEAD_DETAILS,
          requestId: _v0.requestId
        });
      }
    });
  }], 0);
}