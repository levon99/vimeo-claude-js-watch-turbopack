{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useClipPrivacyFilter", 0, (_v0, _v1 = !1) => {
    let _v2 = (0, _v1.useFilter)({
        initialValue: new Set()
      }),
      _v3 = _v2.value.size > 0,
      _v4 = _v2.draft.size > 0;
    return _v1 || (_v0 = _v0.filter(_v0 => "team" !== _v0)), {
      ..._v2,
      updateFilterValues: (_v0, _v1) => {
        let _v2 = Array.from(_v2.value),
          _v3 = Array.from(_v2.draft);
        if (_v1) {
          let _v0 = _v3.includes(_v0) ? _v3.filter(_v0 => _v0 !== _v0) : [..._v3, _v0];
          _v2.setDraft(new Set(_v0));
        } else {
          let _v0 = _v2.includes(_v0) ? _v2.filter(_v0 => _v0 !== _v0) : [..._v2, _v0];
          _v2.setDraft(new Set(_v0)), _v2.setValue(new Set(_v0));
        }
      },
      isDraftActive: _v4,
      isFilterActive: _v3,
      isDraftUpdated: () => {
        let _v0 = Array.from(_v2.value),
          _v1 = Array.from(_v2.draft);
        return _v0.length !== _v1.length || !_v0.every(_v0 => _v1.includes(_v0));
      },
      options: _v0
    };
  }]);
}