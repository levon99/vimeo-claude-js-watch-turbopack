{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    let {
        colorScheme: _v1,
        size: _v2,
        variant: _v3,
        children: _v4,
        isDisabled: _v5
      } = _v0,
      {
        value: _v6,
        onChange: _v7
      } = (0, _v2.useCheckboxGroup)(_v0),
      _v8 = (0, _v3.useMemo)(() => ({
        size: _v2,
        onChange: _v7,
        colorScheme: _v1,
        value: _v6,
        variant: _v3,
        isDisabled: _v5
      }), [_v2, _v7, _v1, _v6, _v3, _v5]);
    return (0, _v4.jsx)(_v1.CheckboxGroupProvider, {
      value: _v8,
      children: _v4
    });
  }
  _v5.displayName = "CheckboxGroup", _v0.s(["CheckboxGroup", 0, _v5]);
}