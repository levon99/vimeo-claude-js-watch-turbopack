{
  "use strict";

  var _v3 = _v0.i(0);
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v4 = {
    atLeastOneTask: function () {
      return _v8;
    },
    scheduleImmediate: function () {
      return _v7;
    },
    scheduleOnNextTick: function () {
      return _v6;
    },
    waitAtLeastOneReactRenderTask: function () {
      return _v9;
    }
  };
  for (var _v5 in _v4) Object.defineProperty(_v2, _v5, {
    enumerable: !0,
    get: _v4[_v5]
  });
  let _v6 = _v0 => {
      Promise.resolve().then(() => {
        _v3.default.nextTick(_v0);
      });
    },
    _v7 = _v0 => {
      setImmediate(_v0);
    };
  function _v8() {
    return new Promise(_v0 => _v7(_v0));
  }
  function _v9() {
    return new Promise(_v0 => setImmediate(_v0));
  }
}