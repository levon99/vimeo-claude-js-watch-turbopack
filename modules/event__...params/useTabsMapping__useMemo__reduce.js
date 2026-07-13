{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useTabsMapping", 0, function (_v0) {
    let _v1 = (0, _v1.useMemo)(() => _v0.reduce((_v0, _v1, _v2) => (_v0[_v1.id] = _v2, _v0), {}), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => _v1[_v0] ?? -1, [_v1]);
    return {
      map: _v1,
      getIndexById: _v2,
      getIdByIndex: (0, _v1.useCallback)(_v0 => _v0[_v0]?.id ?? "", [_v0])
    };
  }]);
}