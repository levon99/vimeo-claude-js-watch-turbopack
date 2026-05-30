{
  "use strict";

  function _v3() {
    let _v0 = Object.create(null);
    return {
      on(_v0, _v1) {
        (_v0[_v0] || (_v0[_v0] = [])).push(_v1);
      },
      off(_v0, _v1) {
        _v0[_v0] && _v0[_v0].splice(_v0[_v0].indexOf(_v1) >>> 0, 1);
      },
      emit(_v0, ..._v1) {
        (_v0[_v0] || []).slice().map(_v0 => {
          _v0(..._v1);
        });
      }
    };
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "default", {
    enumerable: !0,
    get: function () {
      return _v3;
    }
  });
}