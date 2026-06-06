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
    _v11 = {
      Header: function (_v0) {
        var _v1 = _v0.children,
          _v2 = (0, _v4.b)(_v0, ["children"]);
        return _v5.default.createElement(_v8.Header, (0, _v4.c)({
          size: "6",
          style: {
            padding: "0.5rem 1.5rem",
            margin: 0
          }
        }, _v2), _v1);
      },
      List: function (_v0) {
        var _v1 = _v0.children;
        return _v5.default.createElement(_v5.default.Fragment, null, _v1);
      },
      Item: function (_v0) {
        var _v1 = _v0.children,
          _v2 = _v0.selected,
          _v3 = (0, _v4.b)(_v0, ["children", "selected"]);
        return _v5.default.createElement(_v12, (0, _v4.c)({}, _v3), _v2 && _v5.default.createElement(_v13, null), _v1);
      },
      Divider: _v6.default.div(_v1 || (_v1 = (0, _v4.a)(["\n    border-bottom: 1px solid\n      ", ";\n    width: 100%;\n  "], ["\n    border-bottom: 1px solid\n      ", ";\n    width: 100%;\n  "])), function (_v0) {
        var _v1 = _v0.theme;
        return (0, _v7.rgba)(_v1.content.color, .25);
      })
    },
    _v12 = (0, _v6.default)(_v9.Text)(_v2 || (_v2 = (0, _v4.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  color: ", ";\n  padding: 0.5rem 1.5rem;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n\n  svg {\n    width: 1rem;\n    margin-right: 0.75rem;\n\n    * {\n      fill: currentColor;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  color: ", ";\n  padding: 0.5rem 1.5rem;\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n\n  svg {\n    width: 1rem;\n    margin-right: 0.75rem;\n\n    * {\n      fill: currentColor;\n    }\n  }\n"])), function (_v0) {
      return _v0.theme.content.color;
    }, function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v7.rgba)(_v1.content.color, "light" === _v1.name ? .075 : .125);
    }),
    _v13 = (0, _v6.default)(_v10.Checkmark)(_v3 || (_v3 = (0, _v4.a)(["\n  position: absolute;\n  width: 1rem;\n  top: 0.75rem;\n  left: 0.25rem;\n  color: ", ";\n"], ["\n  position: absolute;\n  width: 1rem;\n  top: 0.75rem;\n  left: 0.25rem;\n  color: ", ";\n"])), function (_v0) {
      return _v0.theme.formats.primary;
    });
  _v0.s(["Pop", 0, _v11]);
}