{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useClipPrivacyFilter", 0, (_v0, _v1 = !1) => {
    let _v2 = (0, _v2.useFilter)({
        initialValue: new Set()
      }),
      _v3 = (0, _v1.useMemo)(() => _v1 ? _v0 : _v0.filter(_v0 => "team" !== _v0), [_v1, _v0]),
      _v4 = (0, _v1.useCallback)(() => {
        let _v0 = Array.from(_v2.value),
          _v1 = Array.from(_v2.draft);
        return _v0.length !== _v1.length || !_v0.every(_v0 => _v1.includes(_v0));
      }, [_v2]),
      _v5 = (0, _v1.useCallback)((_v0, _v1) => {
        let _v2 = Array.from(_v2.value),
          _v3 = Array.from(_v2.draft);
        if (_v1) {
          let _v0 = _v3.includes(_v0) ? _v3.filter(_v0 => _v0 !== _v0) : [..._v3, _v0];
          _v2.setDraft(new Set(_v0));
        } else {
          let _v0 = _v2.includes(_v0) ? _v2.filter(_v0 => _v0 !== _v0) : [..._v2, _v0];
          _v2.setDraft(new Set(_v0)), _v2.setValue(new Set(_v0));
        }
      }, [_v2]),
      _v6 = _v2.value.size > 0,
      _v7 = _v2.draft.size > 0;
    return (0, _v1.useMemo)(() => ({
      ..._v2,
      updateFilterValues: _v5,
      isDraftActive: _v7,
      isFilterActive: _v6,
      isDraftUpdated: _v4,
      options: _v3
    }), [_v2, _v5, _v7, _v6, _v4, _v3]);
  }]);
}