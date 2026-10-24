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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v8.default.div(_v1 || (_v1 = (0, _v6.a)(["\n  position: relative;\n  width: 100%;\n  margin-bottom: ", ";\n  border-radius: ", ";\n  transition: 100ms ease-in-out;\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  p:last-of-type {\n    max-width: 44rem;\n    margin-bottom: 0 !important;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  margin-bottom: ", ";\n  border-radius: ", ";\n  transition: 100ms ease-in-out;\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  p:last-of-type {\n    max-width: 44rem;\n    margin-bottom: 0 !important;\n  }\n"])), (0, _v9.rem)(16), function (_v0) {
      return _v0.pill ? "2rem" : (0, _v9.rem)(3);
    }, _v10.core.color.text(0), function (_v0) {
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
        _v2 = _v14({
          theme: _v1,
          format: _v0.format
        }),
        _v3 = "dark" === _v1.name ? (0, _v9.rgba)(_v2, .3) : (0, _v9.rgba)(_v2, .15),
        _v4 = "dark" === _v1.name ? (0, _v9.rgba)(_v2, .4) : (0, _v9.rgba)(_v2, 0);
      return (0, _v8.css)(_v3 || (_v3 = (0, _v6.a)(["\n    border: 1px solid ", ";\n    background-color: ", ";\n  "], ["\n    border: 1px solid ", ";\n    background-color: ", ";\n  "])), _v4, _v3);
    }),
    _v13 = (0, _v8.default)(_v11.Text)(_v2 || (_v2 = (0, _v6.a)(["\n  line-height: 1.25rem;\n  letter-spacing: 0.01rem;\n  color: ", ";\n  color: white;\n"], ["\n  line-height: 1.25rem;\n  letter-spacing: 0.01rem;\n  color: ", ";\n  color: white;\n"])), _v10.core.color.text(0));
  function _v14(_v0, _v1) {
    var _v2 = _v0.theme,
      _v3 = _v0.format;
    return void 0 === _v1 && (_v1 = 1), (0, _v9.rgba)(_v2.formats[_v3], _v1);
  }
  var _v15 = _v8.default.span(_v4 || (_v4 = (0, _v6.a)(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n\n  svg {\n    width: ", ";\n    height: ", ";\n\n    * {\n      fill: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n\n  svg {\n    width: ", ";\n    height: ", ";\n\n    * {\n      fill: ", ";\n    }\n  }\n"])), function (_v0) {
      return _v0.header ? (0, _v9.rem)(14) : (0, _v9.rem)(12);
    }, function (_v0) {
      return _v0.pill ? "1.5rem" : "1rem";
    }, (0, _v9.rem)(20), (0, _v9.rem)(20), function (_v0) {
      return _v14(_v0);
    }),
    _v16 = _v8.default.div(_v5 || (_v5 = (0, _v6.a)(["\n  position: absolute;\n  top: ", ";\n  right: ", ";\n\n  svg * {\n    fill: ", " !important;\n  }\n\n  &:hover {\n    button {\n      background: ", " !important;\n    }\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  right: ", ";\n\n  svg * {\n    fill: ", " !important;\n  }\n\n  &:hover {\n    button {\n      background: ", " !important;\n    }\n  }\n"])), (0, _v9.rem)(4), function (_v0) {
      return _v0.pill ? "0.75rem" : "0.25rem";
    }, function (_v0) {
      return _v14(_v0);
    }, function (_v0) {
      return _v14(_v0, .1);
    }),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = (0, _v7.forwardRef)(function (_v0, _v1) {
      return _v7.default.createElement("svg", (0, _v6.c)({
        viewBox: "0 0 24 24",
        ref: _v1
      }, _v0), _v7.default.createElement("path", {
        fill: "#1a2e3b",
        d: "M11 7h2v6h-2zm1 10a1 1 0 0 1-.38-.08 1.15 1.15 0 0 1-.33-.21 1 1 0 0 1-.21-1.09 1 1 0 0 1 .21-.33A1 1 0 0 1 13 16a1 1 0 0 1-1 1z"
      }), _v7.default.createElement("path", {
        d: "M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z",
        fill: "#1a2e3b"
      }));
    });
  _v0.s(["CircleWarning", 0, _v21], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = (0, _v18.withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.format,
        _v3 = _v0.forwardRef,
        _v4 = _v0.header,
        _v5 = _v0.icon,
        _v6 = void 0 === _v5 ? _v26[_v2] : _v5,
        _v7 = _v0.onClose,
        _v8 = _v0.pill,
        _v9 = (0, _v6.b)(_v0, ["children", "format", "forwardRef", "header", "icon", "onClose", "pill"]),
        _v10 = function (_v0) {
          if (!_v0) return {};
          var _v1 = _v0.accept,
            _v2 = _v0.complete,
            _v3 = _v0.reject;
          return {
            accept: _v1,
            complete: "function" == typeof _v0 ? _v0 : _v2,
            reject: _v3
          };
        }(_v7),
        _v11 = _v10.reject,
        _v12 = _v10.complete;
      return _v7.default.createElement(_v12, (0, _v6.c)({
        format: _v2,
        icon: _v6,
        onClose: _v7,
        pill: _v8,
        ref: _v3
      }, _v9), _v6 && _v7.default.createElement(_v15, {
        header: _v4,
        format: _v2,
        pill: _v8
      }, _v6), _v4 && _v7.default.createElement(_v22.Header, {
        size: "5"
      }, _v4), "string" == typeof _v1 ? _v7.default.createElement(_v23.Paragraph, {
        size: "2"
      }, _v1) : _v7.default.createElement(_v13, null, _v1), _v7 && _v7.default.createElement(_v16, {
        format: _v2,
        pill: _v8
      }, _v7.default.createElement(_v17.Button, {
        title: "Dismiss this notification",
        variant: "minimal",
        format: "basic",
        size: "sm",
        icon: _v7.default.createElement(_v24.DismissX, null),
        onClick: function (_v0) {
          _v0.preventDefault(), _v11 && _v11(_v0), _v12 && _v12(_v0);
        }
      })));
    }),
    _v26 = {
      primary: _v7.default.createElement(_v19.CircleInfo, null),
      positive: _v7.default.createElement(_v20.Checkmark, null),
      negative: _v7.default.createElement(_v21, null)
    };
  _v0.s(["Notice", 0, _v25], 0);
}