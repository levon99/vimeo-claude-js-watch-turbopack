{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    return _v0 && (0, _v3.isObject)(_v0) && (0, _v3.isObject)(_v0.target);
  }
  _v0.s(["useCheckboxGroup", 0, function (_v0 = {}) {
    let {
        defaultValue: _v1,
        value: _v2,
        onChange: _v3,
        isDisabled: _v4,
        isNative: _v5
      } = _v0,
      _v6 = (0, _v1.useCallbackRef)(_v3),
      [_v7, _v8] = (0, _v2.useControllableState)({
        value: _v2,
        defaultValue: _v1 || [],
        onChange: _v6
      }),
      _v9 = (0, _v4.useCallback)(_v0 => {
        if (!_v7) return;
        let _v1 = _v5(_v0) ? _v0.target.checked : !_v7.includes(_v0),
          _v2 = _v5(_v0) ? _v0.target.value : _v0;
        _v8(_v1 ? [..._v7, _v2] : _v7.filter(_v0 => String(_v0) !== String(_v2)));
      }, [_v8, _v7]),
      _v10 = (0, _v4.useCallback)((_v0 = {}) => {
        let _v1 = _v5 ? "checked" : "isChecked";
        return {
          ..._v0,
          [_v1]: _v7.some(_v0 => String(_v0.value) === String(_v0)),
          onChange: _v9
        };
      }, [_v9, _v5, _v7]);
    return {
      value: _v7,
      isDisabled: _v4,
      onChange: _v9,
      setValue: _v8,
      getCheckboxProps: _v10
    };
  }]);
}