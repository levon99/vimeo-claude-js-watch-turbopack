{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0, _v1) {
    var _v2 = _v1.type,
      _v3 = _v1.payload;
    switch (_v2) {
      case "SET_ERROR":
        return (0, _v1.c)((0, _v1.c)({}, _v0), {
          error: !0,
          warning: !1
        });
      case "SET_WARNING":
        return (0, _v1.c)((0, _v1.c)({}, _v0), {
          warning: !0,
          error: !1
        });
      case "RESET_STATUS":
        return (0, _v1.c)((0, _v1.c)({}, _v0), {
          warning: !1,
          error: !1
        });
      case "SET_REMAINING_CHARACTERS":
        return (0, _v1.c)((0, _v1.c)({}, _v0), {
          remainingCharacters: _v3
        });
    }
  }
  _v0.s(["useCharacterCount", 0, function (_v0) {
    var _v1 = _v0.maxCharacters,
      _v2 = void 0 === _v1 ? 10 : _v1,
      _v3 = _v0.warningThreshold,
      _v4 = void 0 === _v3 ? 5 : _v3,
      _v5 = (0, _v1._)((0, _v2.useReducer)(_v3, {
        remainingCharacters: _v2
      }), 2),
      _v6 = _v5[0],
      _v7 = _v5[1],
      _v8 = (0, _v2.useCallback)(function () {
        _v7({
          type: "RESET_STATUS"
        });
      }, []),
      _v9 = (0, _v2.useCallback)(function (_v0) {
        var _v1 = _v2 - _v0.length;
        _v1 <= _v4 && _v1 > 0 ? _v7({
          type: "SET_WARNING"
        }) : _v1 <= 0 ? _v7({
          type: "SET_ERROR"
        }) : _v8(), _v7({
          type: "SET_REMAINING_CHARACTERS",
          payload: _v1
        });
      }, [_v8, _v2, _v4]);
    return {
      state: _v6,
      dispatch: _v7,
      handleChange: _v9,
      clean: _v8
    };
  }], 0);
}