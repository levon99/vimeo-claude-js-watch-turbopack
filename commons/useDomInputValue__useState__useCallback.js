{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useDomInputValue", 0, function (_v0, _v1) {
    let [_v2, _v3] = (0, _v1.useState)(_v0),
      _v4 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v0.target.value;
        (!_v1 || _v1(_v1)) && _v3(_v1);
      }, []);
    return [_v2, _v3, _v4];
  }]);
}