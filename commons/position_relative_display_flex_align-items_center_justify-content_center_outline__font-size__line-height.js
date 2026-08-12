{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Button = void 0;
  var _v3,
    _v4,
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v5.__importStar(_v0.r(0));
  _v2.Button = _v8.default.button(_v4 || (_v4 = _v5.__makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  border: none;\n  text-decoration: none;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n\n  padding: ", " ", ";\n  font-size: ", ";\n  line-height: ", ";\n  height: ", ";\n  min-width: ", ";\n  border-radius: ", ";\n  font-weight: 700;\n\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n    user-select: none;\n  }\n\n  ", ";\n  > span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  border: none;\n  text-decoration: none;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n\n  padding: ", " ", ";\n  font-size: ", ";\n  line-height: ", ";\n  height: ", ";\n  min-width: ", ";\n  border-radius: ", ";\n  font-weight: 700;\n\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n    user-select: none;\n  }\n\n  ", ";\n  > span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"])), _v6.rem(8), _v6.rem(24), _v6.rem(14), _v6.rem(24), _v6.rem(40), _v6.rem(40), _v6.rem(8), function (_v0) {
    var _v1,
      _v2 = _v0.theme,
      _v3 = _v0.format,
      _v4 = void 0 === _v3 ? "primary" : _v3,
      _v5 = (null == (_v1 = null == _v2 ? void 0 : _v2.formats) ? void 0 : _v1[_v4]) || _v7.formats[_v4],
      _v6 = (null == _v2 ? void 0 : _v2.formats) ? .15 : .85,
      _v7 = _v6.shade(_v6, _v5),
      _v8 = _v6.tint(_v6, _v5);
    return _v8.css(_v3 || (_v3 = _v5.__makeTemplateObject(["\n      border: 1px solid ", ";\n      background: ", ";\n      color: ", ";\n      &:active {\n        background: ", ";\n        transform: scale(0.98);\n        color: ", ";\n      }\n      &:hover:not(:active) {\n        background: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n      }\n    "], ["\n      border: 1px solid ", ";\n      background: ", ";\n      color: ", ";\n      &:active {\n        background: ", ";\n        transform: scale(0.98);\n        color: ", ";\n      }\n      &:hover:not(:active) {\n        background: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n      }\n    "])), _v5, _v5, _v7.a11yColor(_v5), _v7, _v7.a11yColor(_v7), _v8, _v8, _v7.a11yColor(_v8));
  });
}