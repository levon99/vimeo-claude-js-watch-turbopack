{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0).default.input(_v1 || (_v1 = (0, _v2.a)(["\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  outline: none;\n"], ["\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  outline: none;\n"]))),
    _v5 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1 = _v0.children;
      _v0.defaultValue;
      var _v2 = _v0.forwardRef,
        _v3 = _v0.onChange,
        _v4 = _v0.disabled,
        _v5 = _v0.accept,
        _v6 = _v0.multiple,
        _v7 = _v0.name,
        _v8 = (0, _v2.b)(_v0, ["children", "defaultValue", "forwardRef", "onChange", "disabled", "accept", "multiple", "name"]),
        _v9 = (0, _v3.useRef)(null);
      return _v3.default.createElement("div", (0, _v2.c)({
        onClick: function () {
          return _v9.current && _v9.current.click();
        },
        ref: _v2,
        style: {
          display: "inline-flex"
        }
      }, _v8), _v3.default.createElement(_v4, {
        tabIndex: -1,
        ref: _v9,
        type: "file",
        accept: _v5,
        disabled: _v4,
        onChange: _v3,
        multiple: _v6,
        name: _v7
      }), _v1);
    });
  _v0.s(["FileUpload", 0, _v5], 0);
}