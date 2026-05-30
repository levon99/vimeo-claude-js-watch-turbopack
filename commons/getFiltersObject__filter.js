{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["getFiltersObject", 0, _v0 => _v2.FILTER_KEYS.reduce((_v0, _v1) => _v0[_v1] && _v0[_v1].length > 0 ? {
    ..._v0,
    ["filter_" + _v1.FILTER_LIST_STRING_MAP[_v1]]: _v0[_v1] && _v0[_v1].map ? _v0[_v1].map(_v0 => _v0.id).join(",") : ""
  } : _v0, {})]);
}