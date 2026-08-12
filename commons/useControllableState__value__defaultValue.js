{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useControllableState", 0, function (_v0) {
    let {
        value: _v1,
        defaultValue: _v2,
        onChange: _v3,
        shouldUpdate: _v4 = (_v0, _v1) => _v0 !== _v1
      } = _v0,
      _v5 = (0, _v2.useCallbackRef)(_v3),
      _v6 = (0, _v2.useCallbackRef)(_v4),
      [_v7, _v8] = (0, _v1.useState)(_v2),
      _v9 = void 0 !== _v1,
      _v10 = _v9 ? _v1 : _v7,
      _v11 = (0, _v2.useCallbackRef)(_v0 => {
        let _v1 = "function" == typeof _v0 ? _v0(_v10) : _v0;
        _v6(_v10, _v1) && (_v9 || _v8(_v1), _v5(_v1));
      }, [_v9, _v5, _v10, _v6]);
    return [_v10, _v11];
  }]);
}