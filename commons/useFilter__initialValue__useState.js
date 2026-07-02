{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useFilter", 0, ({
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
  }]);
}