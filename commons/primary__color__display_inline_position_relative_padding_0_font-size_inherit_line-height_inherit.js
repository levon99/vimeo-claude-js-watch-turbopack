{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v6.default.span(_v3 || (_v3 = (0, _v4.a)(["\n  ", "\n"], ["\n  ", "\n"])), function (_v0) {
      var _v1 = _v0.variant,
        _v2 = _v0.theme,
        _v3 = _v0.format;
      _v3 && _v2.formats[_v3] || (_v3 = "primary");
      var _v4 = _v2.formats[_v3],
        _v5 = (0, _v7.tint)(.15, _v4);
      return (0, _v6.css)(_v2 || (_v2 = (0, _v4.a)(["\n      color: ", ";\n      display: inline;\n      position: relative;\n      padding: 0;\n      font-size: inherit;\n      line-height: inherit;\n      text-decoration: none;\n      border: 0;\n      background-color: transparent;\n      transition: all 0.1s ease-in-out;\n      appearance: none;\n      cursor: pointer;\n\n      &:hover {\n        color: ", ";\n      }\n\n      &::-moz-focus-inner {\n        margin: 0;\n        padding: 0;\n        border: 0;\n      }\n\n      &:active {\n        cursor: wait;\n      }\n\n      ", "\n    "], ["\n      color: ", ";\n      display: inline;\n      position: relative;\n      padding: 0;\n      font-size: inherit;\n      line-height: inherit;\n      text-decoration: none;\n      border: 0;\n      background-color: transparent;\n      transition: all 0.1s ease-in-out;\n      appearance: none;\n      cursor: pointer;\n\n      &:hover {\n        color: ", ";\n      }\n\n      &::-moz-focus-inner {\n        margin: 0;\n        padding: 0;\n        border: 0;\n      }\n\n      &:active {\n        cursor: wait;\n      }\n\n      ", "\n    "])), _v4, _v5, "minimal" !== _v1 && (0, _v6.css)(_v1 || (_v1 = (0, _v4.a)(["\n        &::after {\n          display: block;\n          position: absolute;\n          bottom: ", ";\n          left: 0;\n          width: 100%;\n          height: 1em;\n          margin-top: ", ";\n          border-bottom: ", " solid currentColor;\n          content: '';\n        }\n      "], ["\n        &::after {\n          display: block;\n          position: absolute;\n          bottom: ", ";\n          left: 0;\n          width: 100%;\n          height: 1em;\n          margin-top: ", ";\n          border-bottom: ", " solid currentColor;\n          content: '';\n        }\n      "])), (0, _v7.rem)(-2), (0, _v7.rem)(10), (0, _v7.rem)(1)));
    }),
    _v9 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.variant,
        _v3 = _v0.element,
        _v4 = _v0.format,
        _v5 = _v0.href,
        _v6 = (0, _v4.b)(_v0, ["children", "variant", "element", "format", "href"]);
      return _v5.default.createElement(_v8, (0, _v4.c)({
        as: void 0 === _v3 ? "a" : _v3,
        href: _v5,
        variant: _v2,
        format: void 0 === _v4 ? "primary" : _v4
      }, _v6), _v1);
    });
  _v0.s(["Link", 0, _v9], 0);
}