{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useRegistrationRequiredToast", 0, function () {
    let _v0 = (0, _v3.useToast)(),
      _v1 = (0, _v1.useRouter)();
    return (0, _v2.useCallback)(_v0 => (0, _v4.showRegistrationRequiredToast)({
      toast: _v0,
      router: _v1,
      managePath: (0, _v5.getVideoManagePath)(_v0)
    }), [_v0, _v1]);
  }]);
}