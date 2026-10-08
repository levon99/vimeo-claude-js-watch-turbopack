{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => _v0.has("restricted") === _v0.has("available") ? "all" : _v0.has("restricted") ? "restricted" : "available";
  _v0.s(["isVideoAvailabilityFilterExplicitlyEngaged", 0, _v0 => 0 !== _v0.size && ("all" !== _v2(_v0) || _v0.has("restricted") && _v0.has("available")), "useVideoAvailabilityFilter", 0, () => {
    let _v0 = (0, _v1.useFilter)({
        initialValue: new Set()
      }),
      _v1 = "all" !== _v2(_v0.value),
      _v2 = "all" !== _v2(_v0.draft);
    return {
      ..._v0,
      updateFilterValues: (_v0, _v1) => {
        let _v2 = Array.from(_v0.value),
          _v3 = Array.from(_v0.draft);
        if (_v1) {
          let _v0 = _v3.includes(_v0) ? _v3.filter(_v0 => _v0 !== _v0) : [..._v3, _v0];
          _v0.setDraft(new Set(_v0));
        } else {
          let _v0 = _v2.includes(_v0) ? _v2.filter(_v0 => _v0 !== _v0) : [..._v2, _v0];
          _v0.setDraft(new Set(_v0)), _v0.setValue(new Set(_v0));
        }
      },
      isDraftActive: _v2,
      isDraftUpdated: () => _v2(_v0.value) !== _v2(_v0.draft),
      isFilterActive: _v1
    };
  }]);
}