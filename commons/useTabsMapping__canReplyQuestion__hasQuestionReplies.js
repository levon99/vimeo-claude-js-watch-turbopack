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
  }], 0);
  var _v2 = _v0.i(0);
  _v0.s(["canReplyQuestion", 0, function (_v0) {
    return !!(_v0 && _v0.state !== _v2.EQuestionState.ARCHIVED);
  }, "hasQuestionReplies", 0, function (_v0 = null) {
    return !!(_v0 && Object.keys(_v0).length > 0);
  }], 0);
}