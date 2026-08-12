{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useBokehToast", 0, () => {
    let _v0 = (0, _v2.useToast)();
    return (0, _v1.useCallback)((_v0, _v1 = "neutral", _v2) => {
      _v0({
        title: _v0,
        variant: _v1,
        duration: _v2
      });
    }, [_v0]);
  }]);
}