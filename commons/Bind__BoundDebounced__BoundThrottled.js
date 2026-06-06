{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0, _v1, _v2, _v3, ..._v4) {
    let _v5 = _v2.value,
      _v6 = !1;
    return {
      configurable: !0,
      get() {
        if (_v6 || this === _v0.prototype || this.hasOwnProperty(_v1) || "function" != typeof _v5) return _v5;
        let _v0 = _v3(_v5.bind(this), ..._v4);
        return _v6 = !0, Object.defineProperty(this, _v1, {
          configurable: !0,
          get: () => _v0,
          set(_v0) {
            _v5 = _v0, delete this[_v1];
          }
        }), _v6 = !1, _v0;
      },
      set(_v0) {
        _v5 = _v0;
      }
    };
  }
  _v0.s(["Bind", 0, function () {
    return (_v0, _v1, _v2) => _v3(_v0, _v1, _v2, _v0 => _v0);
  }, "BoundDebounced", 0, function (_v0, _v1) {
    return (_v0, _v1, _v2) => _v3(_v0, _v1, _v2, _v1.default, _v0, {
      leading: _v1
    });
  }, "BoundThrottled", 0, function (_v0, _v1) {
    return (_v0, _v1, _v2) => _v3(_v0, _v1, _v2, _v2.default, _v0, {
      leading: _v1
    });
  }]);
}