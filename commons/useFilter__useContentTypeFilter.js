{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ({
    initialValue: _v0
  }) => {
    let [_v1, _v2] = (0, _v1.useState)(_v0),
      [_v3, _v4] = (0, _v1.useState)(_v0);
    return {
      clearDraft: () => {
        _v4(_v1);
      },
      clearFilter: () => {
        _v4(_v0), _v2(_v0);
      },
      commitDraft: () => {
        _v2(_v3);
      },
      draft: _v3,
      isFilterApplied: _v1 !== _v0,
      setDraft: _v4,
      setValue: _v0 => {
        _v4(_v0), _v2(_v0);
      },
      value: _v1
    };
  };
  _v0.s(["useFilter", 0, _v2], 0);
  var _v3 = _v0.i(0);
  _v0.s(["useContentTypeFilter", 0, _v0 => {
    let _v1 = _v2({
        initialValue: new Set()
      }),
      _v2 = (_v0, _v1) => {
        _v1 ? _v1.setDraft(_v0) : _v1.setValue(_v0);
      };
    return {
      ..._v1,
      isFilterApplied: _v1.value.size > 0,
      options: _v0,
      setSelection: _v2,
      toggle: (_v0, _v1) => {
        let _v2 = _v1 ? _v1.draft : _v1.value;
        _v2((0, _v3.toggleContentTypeSelection)(_v0, _v2, _v0), _v1);
      }
    };
  }], 0);
}