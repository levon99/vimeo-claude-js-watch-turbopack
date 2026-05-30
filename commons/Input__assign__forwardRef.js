{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = Object.assign((0, _v2.forwardRef)((_v0, _v1) => {
    let {
        onKeyDown: _v2,
        ..._v3
      } = _v0,
      _v4 = (0, _v4.useCallback)(_v0 => {
        _v0.nativeEvent.isComposing || _v2?.(_v0);
      }, [_v2]);
    return (0, _v1.jsx)(_v3.Input, {
      ref: _v1,
      onKeyDown: _v2 ? _v4 : void 0,
      ..._v3
    });
  }), {
    id: "Input"
  });
  _v0.s(["Input", 0, _v5]);
}