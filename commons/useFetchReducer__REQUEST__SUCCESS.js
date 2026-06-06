{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useFetchReducer", 0, function (_v0) {
    return (0, _v1.useReducer)(function (_v0, _v1) {
      switch (_v1.type) {
        case "REQUEST":
          return {
            ..._v0,
            called: !0,
            loading: !0
          };
        case "SUCCESS":
          return {
            ..._v0,
            loading: !1,
            data: (0, _v2.standardizeResponseObject)(_v1.payload)
          };
        case "CACHE_HIT":
          return {
            ..._v0,
            data: (0, _v2.standardizeResponseObject)(_v1.payload)
          };
        case "FAILURE":
          return {
            ..._v0,
            loading: !1,
            error: _v1.payload
          };
        default:
          return _v0;
      }
    }, _v0, _v0 => ({
      loading: !1,
      called: !1,
      data: _v0 ? (0, _v2.standardizeResponseObject)(_v0) : null,
      error: null
    }));
  }]);
}