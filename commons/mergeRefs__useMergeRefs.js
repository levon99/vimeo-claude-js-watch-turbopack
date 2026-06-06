{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(..._v0) {
    return _v0 => {
      _v0.forEach(_v0 => {
        !function (_v0, _v1) {
          if (null != _v0) {
            if ("function" == typeof _v0) return _v0(_v1);
            try {
              _v0.current = _v1;
            } catch (_v0) {
              throw Error(`Cannot assign value '${_v1}' to ref '${_v0}'`);
            }
          }
        }(_v0, _v0);
      });
    };
  }
  _v0.s(["mergeRefs", 0, _v2, "useMergeRefs", 0, function (..._v0) {
    return (0, _v1.useMemo)(() => _v2(..._v0), _v0);
  }]);
}