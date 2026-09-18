{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useEscapeKey", 0, (_v0, _v1) => (0, _v1.useCallback)(_v0 => {
    _v0.key === _v2.KEY_CODES.ESCAPE && _v0 && (_v1?.(), _v0.preventDefault(), _v0.stopPropagation());
  }, [_v0, _v1])]);
}