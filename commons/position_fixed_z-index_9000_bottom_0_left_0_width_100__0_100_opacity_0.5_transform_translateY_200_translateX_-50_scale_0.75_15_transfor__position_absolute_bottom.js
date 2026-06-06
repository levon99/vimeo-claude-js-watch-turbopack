{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v10.default.div(_v1 || (_v1 = (0, _v8.a)(["\n  position: fixed;\n  z-index: 9000;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n"], ["\n  position: fixed;\n  z-index: 9000;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n"]))),
    _v17 = (0, _v10.keyframes)(_v2 || (_v2 = (0, _v8.a)(["\n    0%, 100% {\n      opacity: 0.5;\n      transform: translateY(200%) translateX(-50%) scale(0.75);\n    }\n\n    15% {\n      transform: translateY(0) translateX(-50%) scale(1.05);\n    }\n\n    10%, 20%, 90% {\n      opacity: 1;\n      transform: translateY(0) translateX(-50%) scale(1);\n    }\n\n"], ["\n    0%, 100% {\n      opacity: 0.5;\n      transform: translateY(200%) translateX(-50%) scale(0.75);\n    }\n\n    15% {\n      transform: translateY(0) translateX(-50%) scale(1.05);\n    }\n\n    10%, 20%, 90% {\n      opacity: 1;\n      transform: translateY(0) translateX(-50%) scale(1);\n    }\n\n"]))),
    _v18 = _v10.default.div(_v4 || (_v4 = (0, _v8.a)(["\n  position: absolute;\n  bottom: ", ";\n  left: 50%;\n  min-width: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  background: rgba(0, 0, 0, 0.9);\n  box-shadow: 0 ", " ", " 0 rgba(0, 0, 0, 0.12);\n  transform: translateX(-50%);\n  text-align: center;\n  transform-origin: 50 50;\n  animation: ", "ms ", " ease-in-out both;\n  border: 1px solid\n    ", ";\n\n  ", "\n"], ["\n  position: absolute;\n  bottom: ", ";\n  left: 50%;\n  min-width: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  background: rgba(0, 0, 0, 0.9);\n  box-shadow: 0 ", " ", " 0 rgba(0, 0, 0, 0.12);\n  transform: translateX(-50%);\n  text-align: center;\n  transform-origin: 50 50;\n  animation: ", "ms ", " ease-in-out both;\n  border: 1px solid\n    ", ";\n\n  ", "\n"])), (0, _v11.rem)(28), (0, _v11.rem)(140), (0, _v11.rem)(11), (0, _v11.rem)(20), (0, _v11.rem)(3), (0, _v11.rem)(6), (0, _v11.rem)(10), function (_v0) {
      return _v0.duration;
    }, _v17, function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v11.rgba)(_v13.white, .25 * ("dark" === _v1.name));
    }, function (_v0) {
      return _v0.icon && (0, _v10.css)(_v3 || (_v3 = (0, _v8.a)(["\n      padding-left: ", ";\n      text-align: left;\n    "], ["\n      padding-left: ", ";\n      text-align: left;\n    "])), (0, _v11.rem)(42));
    }),
    _v19 = {
      size: "2",
      theme: _v12.themes.dark
    },
    _v20 = (0, _v10.default)(_v14.Paragraph).attrs(_v19)(_v5 || (_v5 = (0, _v8.a)(["\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n"], ["\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n"]))),
    _v21 = (0, _v10.default)(_v15.CircleInfo)(_v6 || (_v6 = (0, _v8.a)(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  width: ", ";\n  height: auto;\n\n  * {\n    fill: ", ";\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  width: ", ";\n  height: auto;\n\n  * {\n    fill: ", ";\n  }\n"])), (0, _v11.rem)(10), (0, _v11.rem)(16), (0, _v11.rem)(18), _v13.white),
    _v22 = _v10.default.a(_v7 || (_v7 = (0, _v8.a)(["\n  color: ", ";\n  text-decoration: underline;\n\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  color: ", ";\n  text-decoration: underline;\n\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n"])), _v13.white, _v13.white),
    _v23 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1 = _v0.automatic,
        _v2 = void 0 !== _v1 && _v1,
        _v3 = _v0.action,
        _v4 = _v0.actionLabel,
        _v5 = _v0.children,
        _v6 = void 0 === _v5 ? null : _v5,
        _v7 = _v0.status,
        _v8 = void 0 === _v7 ? "negative" : _v7,
        _v9 = _v0.forwardRef,
        _v10 = _v0.duration,
        _v11 = void 0 === _v10 ? 0 : _v10,
        _v12 = _v0.content,
        _v13 = _v0.onComplete,
        _v14 = (0, _v8.b)(_v0, ["automatic", "action", "actionLabel", "children", "status", "forwardRef", "duration", "content", "onComplete"]),
        _v15 = void 0 !== _v14.showing;
      (0, _v9.useEffect)(function () {
        _v15 && (_v21(_v14.showing ? "SHOW" : "HIDE"), _v21(_v14.showing ? "RESUME" : "PAUSE"), _v21("RESET"));
      }, [_v15, _v14.showing]);
      var _v16 = (0, _v8._)((0, _v9.useReducer)(function (_v0, _v1) {
          switch (_v1) {
            case "PAUSE":
              return (0, _v8.c)((0, _v8.c)({}, _v0), {
                active: !1
              });
            case "RESUME":
              return (0, _v8.c)((0, _v8.c)({}, _v0), {
                active: !0
              });
            case "RESET":
              return (0, _v8.c)((0, _v8.c)({}, _v0), {
                time: _v11
              });
            case "TICK":
              return (0, _v8.c)((0, _v8.c)({}, _v0), {
                time: _v0.time - 100
              });
            case "HIDE":
              return (0, _v8.c)((0, _v8.c)({}, _v0), {
                showing: !1
              });
            case "SHOW":
              return (0, _v8.c)((0, _v8.c)({}, _v0), {
                showing: !0
              });
          }
        }, {
          active: _v2,
          showing: _v2,
          time: _v11
        }), 2),
        _v17 = _v16[0],
        _v18 = _v17.showing,
        _v19 = _v17.time,
        _v20 = _v17.active,
        _v21 = _v16[1],
        _v22 = (0, _v9.useCallback)(function () {
          _v20 && _v21("PAUSE"), _v20 || _v21("RESUME"), _v18 && _v21("HIDE"), _v18 || _v21("SHOW"), _v21("RESET");
        }, [_v20, _v18]),
        _v23 = (0, _v9.useCallback)(function () {
          _v21("PAUSE"), _v21("HIDE"), _v13 && _v13();
        }, [_v13]);
      (0, _v9.useEffect)(function () {
        var _v0 = setInterval(function () {
          return _v21("TICK");
        }, 100);
        return _v19 <= 0 && _v23(), _v20 || clearInterval(_v0), function () {
          return clearInterval(_v0);
        };
      }, [_v20, _v19, _v23]);
      var _v24 = "negative" === _v8 && "string" == typeof _v12 && _v9.default.createElement("span", null, _v9.default.createElement(_v21, null));
      return _v9.default.createElement(_v9.default.Fragment, null, _v6 && _v9.default.createElement("div", {
        onClick: _v22
      }, _v6), (_v18 || _v14.showing) && _v9.default.createElement(_v16, null, _v9.default.createElement(_v18, (0, _v8.c)({
        icon: _v24,
        status: _v8,
        duration: _v11,
        actionLabel: _v4,
        onMouseEnter: function () {
          return _v21("PAUSE");
        },
        onMouseLeave: function () {
          return _v21("RESUME");
        },
        ref: _v9
      }, _v14), _v9.default.createElement(_v20, null, _v24, _v12, _v4 && _v9.default.createElement("span", null, " ", _v9.default.createElement(_v22, {
        href: "#",
        onClick: _v3.onClick
      }, _v4))))));
    });
  _v0.s(["Notification", 0, _v23], 0);
}