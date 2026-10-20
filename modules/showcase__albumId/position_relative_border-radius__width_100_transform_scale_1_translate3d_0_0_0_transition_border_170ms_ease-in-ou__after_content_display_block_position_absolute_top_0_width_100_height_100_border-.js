{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v7.default.div(_v1 || (_v1 = (0, _v5.a)(["\n  position: relative;\n  border-radius: ", ";\n  width: 100%;\n  transform: scale(1) translate3d(0, 0, 0);\n  transition: border 170ms ease-in-out;\n\n  ", ";\n  ", ";\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    transition: box-shadow 120ms ease-in-out,\n      transform 120ms ease-in-out, opacity 120ms ease-in-out;\n    pointer-events: none;\n\n    ", ";\n  }\n"], ["\n  position: relative;\n  border-radius: ", ";\n  width: 100%;\n  transform: scale(1) translate3d(0, 0, 0);\n  transition: border 170ms ease-in-out;\n\n  ", ";\n  ", ";\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n    transition: box-shadow 120ms ease-in-out,\n      transform 120ms ease-in-out, opacity 120ms ease-in-out;\n    pointer-events: none;\n\n    ", ";\n  }\n"])), (0, _v8.rem)(3), function (_v0) {
      var _v1 = _v0.theme,
        _v2 = _v1.formats,
        _v3 = _v1.item,
        _v4 = _v1.content,
        _v5 = _v0.$loading,
        _v6 = _v0.selected,
        _v7 = _v5 ? _v3.locked : _v3.bg,
        _v8 = _v6 ? _v2.primary : _v2.secondary;
      return (0, _v7.css)(_v2 || (_v2 = (0, _v5.a)(["\n    color: ", ";\n    background: ", ";\n    border: 1px solid ", ";\n  "], ["\n    color: ", ";\n    background: ", ";\n    border: 1px solid ", ";\n  "])), _v4.color, _v7, _v8);
    }, function (_v0) {
      var _v1 = _v0.theme.content,
        _v2 = _v0.$loading,
        _v3 = _v0.selected,
        _v4 = (0, _v8.rgba)(_v1.color, .334);
      return !_v2 && !_v3 && (0, _v7.css)(_v4 || (_v4 = (0, _v5.a)(["\n      &:hover {\n        border: ", " solid ", ";\n\n        box-shadow: rgba(0, 0, 0, 0.16667) 0 0.5rem 1rem -0.5rem,\n          rgba(0, 0, 0, 0.3334) 0 0 0.25rem -0.0625rem;\n      }\n    "], ["\n      &:hover {\n        border: ", " solid ", ";\n\n        box-shadow: rgba(0, 0, 0, 0.16667) 0 0.5rem 1rem -0.5rem,\n          rgba(0, 0, 0, 0.3334) 0 0 0.25rem -0.0625rem;\n      }\n    "])), (0, _v8.rem)(1), _v4);
    }, function (_v0) {
      var _v1 = _v0.theme.formats,
        _v2 = _v0.$loading,
        _v3 = _v0.selected ? (0, _v8.rem)(3) + " " + _v1.primary : (0, _v8.rem)(8) + " 0 rgba(0, 0, 0, 0.1)";
      return !_v2 && (0, _v7.css)(_v3 || (_v3 = (0, _v5.a)(["\n      box-shadow: 0 0 0 ", ";\n    "], ["\n      box-shadow: 0 0 0 ", ";\n    "])), _v3);
    }),
    _v10 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1 = _v0.forwardRef,
        _v2 = _v0.loading,
        _v3 = (0, _v5.b)(_v0, ["forwardRef", "loading"]);
      return _v6.default.createElement(_v9, (0, _v5.c)({
        ref: _v1,
        $loading: _v2
      }, _v3));
    });
  _v0.s(["Card", 0, _v10], 0);
}