{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["default", 0, function (_v0, _v1, _v2 = 0, _v3 = sessionStorage) {
    let [_v4, _v5] = (0, _v1.useState)(_v6(_v0));
    function _v6(_v0) {
      let _v1 = _v3.getItem(_v0);
      if (!_v1) return null;
      let _v2 = JSON.parse(_v1);
      return new Date().getTime() > _v2?.expiry ? (_v3.removeItem(_v0), null) : _v2?.value || null;
    }
    function _v7(_v0) {
      var _v1;
      let _v2 = {
        value: _v0,
        expiry: new Date().getTime() + 0 * _v2
      };
      _v5(_v0), _v1 = JSON.stringify(_v2), _v3.setItem(_v0, _v1);
    }
    return (0, _v1.useEffect)(() => {
      null === _v6(_v0) && _v7(_v1);
    }, []), {
      value: _v4,
      set: _v7,
      remove: function () {
        _v7(null), _v3.removeItem(_v0);
      }
    };
  }]);
}