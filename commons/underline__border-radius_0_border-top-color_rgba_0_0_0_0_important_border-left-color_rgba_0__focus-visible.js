{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v7.default.div(_v4 || (_v4 = (0, _v6.a)(["\n  ", "\n"], ["\n  ", "\n"])), function (_v0) {
      var _v1 = _v0.parent,
        _v2 = _v0.focused,
        _v3 = _v0.variant,
        _v4 = _v0.radius,
        _v5 = _v0.distance,
        _v6 = void 0 === _v5 ? 4 : _v5,
        _v7 = _v0.isKeyboardOnly,
        _v8 = "underline" === _v3 && (0, _v7.css)(_v1 || (_v1 = (0, _v6.a)(["\n        border-radius: 0;\n        border-top-color: rgba(0, 0, 0, 0) !important;\n        border-left-color: rgba(0, 0, 0, 0) !important;\n        border-right-color: rgba(0, 0, 0, 0) !important;\n      "], ["\n        border-radius: 0;\n        border-top-color: rgba(0, 0, 0, 0) !important;\n        border-left-color: rgba(0, 0, 0, 0) !important;\n        border-right-color: rgba(0, 0, 0, 0) !important;\n      "]))),
        _v9 = void 0 !== _v7 && _v7 ? ":focus-visible" : ":focus";
      return (0, _v7.css)(_v3 || (_v3 = (0, _v6.a)(["\n      z-index: 1;\n      top: ", ";\n      left: ", ";\n      position: absolute;\n      width: calc(100% + ", ");\n      height: calc(100% + ", ");\n      pointer-events: none;\n      border-radius: ", ";\n      border: ", " solid ", ";\n      opacity: 0;\n      transition: 150ms ease-in-out;\n\n      ", "", " > &,\n      ", "", " ~ &,\n      ", "", " ~ div > & {\n        opacity: 1;\n      }\n\n      ", "\n\n      ", ";\n    "], ["\n      z-index: 1;\n      top: ", ";\n      left: ", ";\n      position: absolute;\n      width: calc(100% + ", ");\n      height: calc(100% + ", ");\n      pointer-events: none;\n      border-radius: ", ";\n      border: ", " solid ", ";\n      opacity: 0;\n      transition: 150ms ease-in-out;\n\n      ", "", " > &,\n      ", "", " ~ &,\n      ", "", " ~ div > & {\n        opacity: 1;\n      }\n\n      ", "\n\n      ", ";\n    "])), (0, _v8.rem)(-1 * _v6), (0, _v8.rem)(-1 * _v6), (0, _v8.rem)(2 * _v6), (0, _v8.rem)(2 * _v6), (0, _v8.rem)(void 0 === _v4 ? 6 : _v4), (0, _v8.rem)(2), (0, _v9.blue)(500), _v1, _v9, _v1, _v9, _v1, _v9, _v2 && (0, _v7.css)(_v2 || (_v2 = (0, _v6.a)(["\n        opacity: 1;\n      "], ["\n        opacity: 1;\n      "]))), _v8);
    }),
    _v11 = "'Helvetica Neue', Helvetica, Arial, sans-serif;";
  (0, _v7.createGlobalStyle)(_v5 || (_v5 = (0, _v6.a)(["\n\n  :root {\n    color-scheme: ", "\n  }\n\n  html {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n    font-family: ", ";\n    min-height: 100%;\n    color: ", ";\n    background: ", ";\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    min-height: 100%;\n    overflow-x: hidden;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit\n  }\n\n  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {\n    margin: 0;\n    padding: 0;\n  }\n\n  input {\n    font-family: ", ";\n  }\n\n  button {\n    background: transparent;\n    border-color: transparent;\n    padding: 0;\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"], ["\n\n  :root {\n    color-scheme: ", "\n  }\n\n  html {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n    font-family: ", ";\n    min-height: 100%;\n    color: ", ";\n    background: ", ";\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    min-height: 100%;\n    overflow-x: hidden;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit\n  }\n\n  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {\n    margin: 0;\n    padding: 0;\n  }\n\n  input {\n    font-family: ", ";\n  }\n\n  button {\n    background: transparent;\n    border-color: transparent;\n    padding: 0;\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"])), function (_v0) {
    return _v0.theme.name;
  }, _v11, function (_v0) {
    return _v0.theme.content.color2;
  }, function (_v0) {
    return _v0.theme.content.background;
  }, _v11), _v0.s(["Focus", 0, _v10, "centered", 0, {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }]);
}