{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useDebouncedEffect", 0, function (_v0, _v1, _v2 = 300, _v3 = {
    trailing: !0,
    leading: !1
  }) {
    let {
        leading: _v4,
        trailing: _v5
      } = _v3,
      [_v6, _v7] = (0, _v2.useState)(_v1),
      _v8 = (0, _v2.useCallback)((0, _v1.default)(_v0 => {
        _v7(_v0);
      }, _v2, {
        trailing: _v5,
        leading: _v4
      }), [_v5, _v4, _v2]);
    (0, _v2.useEffect)(() => (_v1 && _v8(_v1), () => _v8.cancel()), _v1), (0, _v2.useEffect)(() => () => _v8.cancel(), [_v8]), (0, _v2.useEffect)(_v0, _v6);
  }]);
}