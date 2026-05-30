{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useCallbackRef", 0, function (_v0, _v1) {
    var _v2 = (0, _v1.useState)(function () {
      return {
        value: _v0,
        callback: _v1,
        facade: {
          get current() {
            return _v2.value;
          },
          set current(_v0) {
            var _v1 = _v2.value;
            _v1 !== _v0 && (_v2.value = _v0, _v2.callback(_v0, _v1));
          }
        }
      };
    })[0];
    return _v2.callback = _v1, _v2.facade;
  }]);
}