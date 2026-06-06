{
  "use strict";

  _v0.s(["logError", 0, (_v0, _v1, _v2) => {
    console.error(`[VA] ${_v0}`), window.DD_RUM && window.DD_RUM.onReady(() => {
      _v1 ? window.DD_RUM.addError(_v1, {
        message: _v0,
        ..._v2
      }) : window.DD_RUM.addError(_v0, {
        ..._v2
      });
    });
  }]);
}