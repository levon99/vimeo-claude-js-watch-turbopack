{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = (0, _v4.forwardRef)(function (_v0, _v1) {
      var _v2 = _v0.children,
        _v3 = _v0.className,
        _v4 = _v0.floating,
        _v5 = _v0.format,
        _v6 = _v0.height,
        _v7 = _v0.label,
        _v8 = _v0.size,
        _v9 = _v0.style,
        _v10 = _v0.tooltipPosition,
        _v11 = _v0.tooltipProps,
        _v12 = _v0.tooltipText,
        _v13 = _v0.variant,
        _v14 = (0, _v3.b)(_v0, ["children", "className", "floating", "format", "height", "label", "size", "style", "tooltipPosition", "tooltipProps", "tooltipText", "variant"]),
        _v15 = _v4.default.createElement(_v9, (0, _v3.c)({
          size: void 0 === _v8 ? "md" : _v8,
          height: _v6,
          format: void 0 === _v5 ? "primary" : _v5,
          variant: _v13,
          icon: _v2,
          ref: _v1,
          style: {
            minHeight: 0
          }
        }, _v14));
      return _v4.default.createElement(_v10, {
        className: _v3,
        style: _v9,
        height: _v6,
        label: _v7,
        floating: _v4
      }, _v12 ? _v4.default.createElement(_v7.Tip, (0, _v3.c)({
        content: _v12,
        attach: void 0 === _v10 ? "top" : _v10
      }, _v11), _v15) : _v15);
    }),
    _v9 = (0, _v5.default)(_v6.Button)(_v1 || (_v1 = (0, _v3.a)(["\n  font-weight: 400;\n  border-radius: 0 0.2rem 0.2rem 0;\n  min-width: ", "px;\n  height: calc(100% - 2px);\n  transition: background 120ms ease-in-out;\n\n  svg {\n    margin: 0;\n  }\n\n  > span {\n    margin: 0;\n    padding: 0;\n    line-height: 1rem;\n  }\n"], ["\n  font-weight: 400;\n  border-radius: 0 0.2rem 0.2rem 0;\n  min-width: ", "px;\n  height: calc(100% - 2px);\n  transition: background 120ms ease-in-out;\n\n  svg {\n    margin: 0;\n  }\n\n  > span {\n    margin: 0;\n    padding: 0;\n    line-height: 1rem;\n  }\n"])), function (_v0) {
      return _v0.height;
    }),
    _v10 = _v5.default.div(_v2 || (_v2 = (0, _v3.a)(["\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  height: ", "px;\n"], ["\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  height: ", "px;\n"])), function (_v0) {
      return _v0.height;
    });
  _v0.s(["InnerButton", 0, _v8]);
}