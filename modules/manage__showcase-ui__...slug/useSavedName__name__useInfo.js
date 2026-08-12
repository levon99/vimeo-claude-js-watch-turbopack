{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useSavedName", 0, () => {
    let {
        name: _v0
      } = (0, _v3.useInfo)(),
      {
        isDeltaEmpty: _v1
      } = (0, _v2.useForm)(),
      [_v2, _v3] = (0, _v1.useState)(null);
    return (0, _v1.useEffect)(() => {
      _v1() && _v0 && _v3(_v0);
    }, [_v1, _v0]), {
      name: _v2
    };
  }]);
}