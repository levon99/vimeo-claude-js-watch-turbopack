{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ({
    initialValue: _v0
  }) => {
    let [_v1] = (0, _v1.useState)(_v0),
      [_v2, _v3] = (0, _v1.useState)(_v1),
      [_v4, _v5] = (0, _v1.useState)(_v1),
      _v6 = (0, _v1.useCallback)(() => {
        _v5(_v2);
      }, [_v2]),
      _v7 = (0, _v1.useCallback)(() => {
        _v5(_v1), _v3(_v1);
      }, [_v1]),
      _v8 = (0, _v1.useCallback)(() => {
        _v3(_v4);
      }, [_v4]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        _v5(_v0), _v3(_v0);
      }, []),
      _v10 = _v2 !== _v1;
    return (0, _v1.useMemo)(() => ({
      clearDraft: _v6,
      clearFilter: _v7,
      commitDraft: _v8,
      draft: _v4,
      isFilterApplied: _v10,
      setDraft: _v5,
      setValue: _v9,
      value: _v2
    }), [_v6, _v7, _v8, _v4, _v10, _v9, _v2]);
  };
  _v0.s(["useFilter", 0, _v2], 0);
  var _v3 = _v0.i(0);
  _v0.s(["useContentTypeFilter", 0, _v0 => {
    let _v1 = _v2({
        initialValue: new Set()
      }),
      _v2 = (0, _v1.useCallback)((_v0, _v1) => {
        _v1 ? _v1.setDraft(_v0) : _v1.setValue(_v0);
      }, [_v1]),
      _v3 = (0, _v1.useCallback)((_v0, _v1) => {
        let _v2 = _v1 ? _v1.draft : _v1.value;
        _v2((0, _v3.toggleContentTypeSelection)(_v0, _v2, _v0), _v1);
      }, [_v1, _v0, _v2]);
    return (0, _v1.useMemo)(() => ({
      ..._v1,
      isFilterApplied: _v1.value.size > 0,
      options: _v0,
      setSelection: _v2,
      toggle: _v3
    }), [_v1, _v0, _v2, _v3]);
  }], 0);
}