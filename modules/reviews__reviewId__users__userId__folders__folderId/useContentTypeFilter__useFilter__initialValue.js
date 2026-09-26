{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useContentTypeFilter", 0, _v0 => {
    let _v1 = (0, _v1.useFilter)({
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
        _v2((0, _v2.toggleContentTypeSelection)(_v0, _v2, _v0), _v1);
      }
    };
  }]);
}