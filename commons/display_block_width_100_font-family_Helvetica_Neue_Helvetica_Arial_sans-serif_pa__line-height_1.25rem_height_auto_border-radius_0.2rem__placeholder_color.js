{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v6.default.textarea(_v2 || (_v2 = (0, _v4.a)(["\n  display: block;\n  width: 100%;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  padding: 1rem;\n  font-size: ", ";\n  line-height: 1.25rem;\n  height: auto;\n  border-radius: 0.2rem;\n  ", ";\n\n  &:placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  ", ";\n"], ["\n  display: block;\n  width: 100%;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  padding: 1rem;\n  font-size: ", ";\n  line-height: 1.25rem;\n  height: auto;\n  border-radius: 0.2rem;\n  ", ";\n\n  &:placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  ", ";\n"])), (0, _v7.rem)(14), _v8.inputColors, (0, _v9.slate)(200), function (_v0) {
      return _v0.hasIcon && (0, _v6.css)(_v1 || (_v1 = (0, _v4.a)(["\n      padding-left: 2.25rem;\n    "], ["\n      padding-left: 2.25rem;\n    "])));
    }),
    _v12 = (0, _v6.default)(_v10.CircleInfoSmall)(_v3 || (_v3 = (0, _v4.a)(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  width: ", ";\n  height: ", ";\n\n  * {\n    fill: ", ";\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  width: ", ";\n  height: ", ";\n\n  * {\n    fill: ", ";\n  }\n"])), (0, _v7.rem)(18), (0, _v7.rem)(10), (0, _v7.rem)(20), (0, _v7.rem)(20), (0, _v9.red)(500)),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = (0, _v14.withIris)(function (_v0) {
      var _v1 = _v0.disabled;
      _v0.errorMsg;
      var _v2 = _v0.forwardRef,
        _v3 = _v0.format,
        _v4 = _v0.messages;
      _v0.helperMsg;
      var _v5 = _v0.id,
        _v6 = _v0.label;
      _v0.preMessage;
      var _v7 = (0, _v4.b)(_v0, ["disabled", "errorMsg", "forwardRef", "format", "messages", "helperMsg", "id", "label", "preMessage"]);
      return _v5.default.createElement(_v13.Wrapper, {
        disabled: _v1,
        label: _v6,
        messages: _v4,
        status: _v3
      }, _v5.default.createElement("div", {
        style: {
          position: "relative"
        }
      }, _v5.default.createElement(_v11, (0, _v4.c)({
        id: _v5,
        "aria-label": _v6,
        "aria-invalid": "negative" === _v3,
        disabled: _v1,
        hasIcon: "negative" === _v3,
        format: _v3,
        ref: _v2
      }, _v7)), "negative" === _v3 ? _v5.default.createElement(_v12, null) : null, _v5.default.createElement(_v15.Focus, {
        parent: _v11,
        distance: 1
      })));
    });
  _v0.s(["TextArea", 0, _v16], 0);
}