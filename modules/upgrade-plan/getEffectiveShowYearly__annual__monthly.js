{
  "use strict";

  _v0.s(["getEffectiveShowYearly", 0, (_v0, _v1) => {
    let _v2 = _v0.id,
      _v3 = _v2?.annual != null,
      _v4 = _v2?.monthly != null;
    return (!_v1 || !!_v3 || !_v4) && (!_v1 && !_v4 && !!_v3 || _v1);
  }]);
}