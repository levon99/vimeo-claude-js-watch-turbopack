{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0, _v1) {
    var _v2 = _v1.type,
      _v3 = _v1.payload,
      _v4 = void 0 === _v3 ? null : _v3;
    switch (_v2) {
      case "SET_ERROR":
        return (0, _v2.c)((0, _v2.c)({}, _v0), {
          error: _v4,
          warning: !1
        });
      case "SET_WARNING":
        return (0, _v2.c)((0, _v2.c)({}, _v0), {
          warning: _v4,
          error: !1
        });
      case "SET_REMAINING_CHARACTERS":
        return (0, _v2.c)((0, _v2.c)({}, _v0), {
          remainingCharacters: _v4
        });
    }
  }
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v5.default)(_v6.Paragraph).attrs(function (_v0) {
      return {
        size: 3,
        format: "dark" === _v0.theme.name ? "soft" : "alternative"
      };
    })(_v1 || (_v1 = (0, _v2.a)(["\n  margin-top: 0.25rem;\n  margin-bottom: 0;\n\n  ", ";\n  ", ";\n"], ["\n  margin-top: 0.25rem;\n  margin-bottom: 0;\n\n  ", ";\n  ", ";\n"])), function (_v0) {
      return _v0.warning && {
        fontWeight: 800,
        color: (0, _v7.yellow)(600)
      };
    }, function (_v0) {
      return _v0.error && {
        fontWeight: 600,
        color: (0, _v7.red)(500)
      };
    });
  _v0.s(["withCharacterCount", 0, function (_v0) {
    return function (_v0) {
      var _v1 = _v0.defaultValue,
        _v2 = _v0.maxCharacters,
        _v3 = void 0 === _v2 ? 30 : _v2,
        _v4 = _v0.onChange,
        _v5 = _v0.onError,
        _v6 = _v0.onWarn,
        _v7 = _v0.plural,
        _v8 = _v0.singular,
        _v9 = _v0.warningThreshold,
        _v10 = void 0 === _v9 ? 5 : _v9,
        _v11 = _v0.messages,
        _v12 = (0, _v2.b)(_v0, ["defaultValue", "maxCharacters", "onChange", "onError", "onWarn", "plural", "singular", "warningThreshold", "messages"]),
        _v13 = {
          remainingCharacters: _v1 ? _v3 - _v1.length : _v3
        },
        _v14 = (0, _v2._)((0, _v3.useReducer)(_v4, _v13), 2),
        _v15 = _v14[0],
        _v16 = _v14[1],
        _v17 = _v15.error,
        _v18 = _v15.warning,
        _v19 = _v15.remainingCharacters,
        _v20 = 1 === Math.abs(_v19) ? void 0 === _v8 ? "character" : _v8 : void 0 === _v7 ? "characters" : _v7;
      function _v21(_v0, _v1) {
        void 0 === _v1 && (_v1 = !0), _v16({
          type: "SET_WARNING",
          payload: _v1
        }), _v6 && _v6(_v0);
      }
      function _v22(_v0, _v1) {
        void 0 === _v1 && (_v1 = !0), _v16({
          type: "SET_ERROR",
          payload: _v1
        }), _v5 && _v5(_v0);
      }
      var _v23 = _v3.default.createElement(_v8, {
        error: _v17,
        warning: _v18
      }, _v19, " ", _v20);
      return _v3.default.createElement(_v0, (0, _v2.c)({}, _v12, {
        defaultValue: _v1,
        onChange: function (_v0) {
          var _v1 = _v3 - _v0.target.value.length;
          _v1 < 0 ? _v22(_v0) : _v1 <= _v10 ? _v21(_v0) : (_v22(_v0, !1), _v21(_v0, !1)), _v16({
            type: "SET_REMAINING_CHARACTERS",
            payload: _v1
          }), _v4 && _v4(_v0);
        },
        messages: _v11 || {
          post: _v23
        }
      }));
    };
  }], 0);
}