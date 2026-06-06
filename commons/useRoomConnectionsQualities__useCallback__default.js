{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useRoomConnectionsQualities", 0, function (_v0, _v1, _v2) {
    let _v3 = (0, _v2.useCallback)(_v0 => {
      let _v1 = _v2();
      return (0, _v1.default)(_v0, _v1) ? _v0 : _v1;
    }, [_v2]);
    return (0, _v3.usePolling)(_v0, _v3, {}, _v1);
  }]);
}