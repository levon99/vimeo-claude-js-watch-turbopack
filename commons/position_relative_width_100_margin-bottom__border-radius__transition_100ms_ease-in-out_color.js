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
    _v10 = _v0.i(0);
  _v0.i(0);
  var _v11 = _v7.default.div(_v1 || (_v1 = (0, _v6.a)(["\n  position: relative;\n  width: 100%;\n  margin-bottom: ", ";\n  border-radius: ", ";\n  transition: 100ms ease-in-out;\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  p:last-of-type {\n    max-width: 44rem;\n    margin-bottom: 0 !important;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  margin-bottom: ", ";\n  border-radius: ", ";\n  transition: 100ms ease-in-out;\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  p:last-of-type {\n    max-width: 44rem;\n    margin-bottom: 0 !important;\n  }\n"])), (0, _v8.rem)(16), function (_v0) {
      return _v0.pill ? "2rem" : (0, _v8.rem)(3);
    }, _v9.core.color.text(0), function (_v0) {
      var _v1 = _v0.icon,
        _v2 = _v0.onClose,
        _v3 = _v0.pill,
        _v4 = (void 0 === _v3 ? null : _v3) ? 1.5 : 1;
      return {
        paddingTop: "0.75rem",
        paddingRight: _v4 + 2.25 * !!(void 0 === _v2 ? null : _v2) + "rem",
        paddingBottom: "0.75rem",
        paddingLeft: _v4 + 2 * !!(void 0 === _v1 ? null : _v1) + "rem"
      };
    }, function (_v0) {
      var _v1 = _v0.theme,
        _v2 = _v13({
          theme: _v1,
          format: _v0.format
        }),
        _v3 = "dark" === _v1.name ? (0, _v8.rgba)(_v2, .3) : (0, _v8.rgba)(_v2, .15),
        _v4 = "dark" === _v1.name ? (0, _v8.rgba)(_v2, .4) : (0, _v8.rgba)(_v2, 0);
      return (0, _v7.css)(_v3 || (_v3 = (0, _v6.a)(["\n    border: 1px solid ", ";\n    background-color: ", ";\n  "], ["\n    border: 1px solid ", ";\n    background-color: ", ";\n  "])), _v4, _v3);
    }),
    _v12 = (0, _v7.default)(_v10.Text)(_v2 || (_v2 = (0, _v6.a)(["\n  line-height: 1.25rem;\n  letter-spacing: 0.01rem;\n  color: ", ";\n  color: white;\n"], ["\n  line-height: 1.25rem;\n  letter-spacing: 0.01rem;\n  color: ", ";\n  color: white;\n"])), _v9.core.color.text(0));
  function _v13(_v0, _v1) {
    var _v2 = _v0.theme,
      _v3 = _v0.format;
    return void 0 === _v1 && (_v1 = 1), (0, _v8.rgba)(_v2.formats[_v3], _v1);
  }
  var _v14 = _v7.default.span(_v4 || (_v4 = (0, _v6.a)(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n\n  svg {\n    width: ", ";\n    height: ", ";\n\n    * {\n      fill: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n\n  svg {\n    width: ", ";\n    height: ", ";\n\n    * {\n      fill: ", ";\n    }\n  }\n"])), function (_v0) {
      return _v0.header ? (0, _v8.rem)(14) : (0, _v8.rem)(12);
    }, function (_v0) {
      return _v0.pill ? "1.5rem" : "1rem";
    }, (0, _v8.rem)(20), (0, _v8.rem)(20), function (_v0) {
      return _v13(_v0);
    }),
    _v15 = _v7.default.div(_v5 || (_v5 = (0, _v6.a)(["\n  position: absolute;\n  top: ", ";\n  right: ", ";\n\n  svg * {\n    fill: ", " !important;\n  }\n\n  &:hover {\n    button {\n      background: ", " !important;\n    }\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  right: ", ";\n\n  svg * {\n    fill: ", " !important;\n  }\n\n  &:hover {\n    button {\n      background: ", " !important;\n    }\n  }\n"])), (0, _v8.rem)(4), function (_v0) {
      return _v0.pill ? "0.75rem" : "0.25rem";
    }, function (_v0) {
      return _v13(_v0);
    }, function (_v0) {
      return _v13(_v0, .1);
    });
  _v0.s(["Dismiss", 0, _v15, "Icon", 0, _v14, "NoticeChildren", 0, _v12, "NoticeStyled", 0, _v11]);
}