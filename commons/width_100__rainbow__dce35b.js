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
    _v9 = _v0.i(0),
    _v10 = _v7.default.div(_v1 || (_v1 = (0, _v5.a)(["\n  width: 100%;\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  width: 100%;\n  ", ";\n  ", ";\n  ", ";\n"])), function (_v0) {
      var _v1 = _v0.variant;
      switch (void 0 === _v1 ? "rainbow" : _v1) {
        case "mod":
          return _v11(["#dce35b", "#45b649"], "270deg");
        case "possessed":
          return _v11(["#7b4397", "#dc2430"]);
        case "rainbow":
          return _v11(["#45c3ff", "#0088cc", "#7fc400", "#ffc86c", "#ffb21e", "#ff4d4d", "#6447b6"]);
        case "primary":
          return _v11([(0, _v9.blue)(300), (0, _v8.saturate)(1, (0, _v9.blue)(650))]);
        case "success":
          return _v11([(0, _v9.green)(300), (0, _v8.saturate)(1, (0, _v9.green)(700))]);
      }
    }, function (_v0) {
      var _v1 = _v0.size;
      switch (void 0 === _v1 ? "md" : _v1) {
        case "xs":
          return {
            height: "0.375rem"
          };
        case "sm":
          return {
            height: "0.5rem"
          };
        case "md":
          return {
            height: "0.75rem"
          };
        case "lg":
          return {
            height: "1rem"
          };
        case "xl":
          return {
            height: "1.5rem"
          };
      }
    }, function (_v0) {
      var _v1 = _v0.animate;
      return (void 0 === _v1 || _v1) && (0, _v7.css)(_v4 || (_v4 = (0, _v5.a)(["\n      animation: ", " 5s linear infinite;\n      background-size: 200% !important;\n    "], ["\n      animation: ", " 5s linear infinite;\n      background-size: 200% !important;\n    "])), _v12);
    });
  function _v11(_v0, _v1) {
    return void 0 === _v1 && (_v1 = "to right"), function (_v0) {
      var _v1,
        _v2 = _v0.animate;
      if (void 0 === _v2 || _v2) {
        var _v3 = (0, _v5._)(_v0),
          _v4 = _v3[0],
          _v5 = _v3.slice(1);
        _v1 = (0, _v5.e)((0, _v5.e)([_v4], (0, _v5._)(_v5), !1), [_v4], !1).join(",");
      } else _v1 = _v0.join(",");
      return (0, _v7.css)(_v2 || (_v2 = (0, _v5.a)(["\n      background-image: linear-gradient(", ", ", ");\n    "], ["\n      background-image: linear-gradient(", ", ", ");\n    "])), _v1, _v1);
    };
  }
  var _v12 = (0, _v7.keyframes)(_v3 || (_v3 = (0, _v5.a)(["\n  0% { background-position: 0% 50%; }\n  100% { background-position: 200% 50%; }\n"], ["\n  0% { background-position: 0% 50%; }\n  100% { background-position: 200% 50%; }\n"]))),
    _v13 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1 = _v0.variant,
        _v2 = _v0.forwardRef,
        _v3 = _v0.animate,
        _v4 = _v0.size,
        _v5 = (0, _v5.b)(_v0, ["variant", "forwardRef", "animate", "size"]);
      return _v6.default.createElement(_v10, (0, _v5.c)({
        animate: void 0 === _v3 || _v3,
        size: void 0 === _v4 ? "md" : _v4,
        variant: void 0 === _v1 ? "rainbow" : _v1,
        ref: _v2
      }, _v5));
    });
  _v0.s(["Ribbon", 0, _v13], 0);
}