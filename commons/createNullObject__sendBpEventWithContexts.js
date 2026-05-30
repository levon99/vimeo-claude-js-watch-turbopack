{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["createNullObject", 0, function (_v0) {
    let _v1 = {};
    for (let _v0 of _v0) _v1[_v0] = null;
    return _v1;
  }, "sendBpEventWithContexts", 0, function (_v0, _v1, _v2 = -1, _v3 = {}) {
    let _v4 = new _v1.Event(_v0, _v2, _v3);
    _v1.BigPictureClient.sendEventWithContexts(_v4, _v1);
  }]);
}