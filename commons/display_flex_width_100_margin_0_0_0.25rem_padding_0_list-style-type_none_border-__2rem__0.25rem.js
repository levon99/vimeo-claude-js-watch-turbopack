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
    _v11 = _v8.default.ol(_v1 || (_v1 = (0, _v6.a)(["\n  display: flex;\n  width: 100%;\n  margin: 0 0 0.25rem;\n  padding: 0;\n  list-style-type: none;\n  border-radius: ", ";\n\n  ", ";\n"], ["\n  display: flex;\n  width: 100%;\n  margin: 0 0 0.25rem;\n  padding: 0;\n  list-style-type: none;\n  border-radius: ", ";\n\n  ", ";\n"])), function (_v0) {
      return _v0.pill ? "2rem" : "0.25rem";
    }, function (_v0) {
      var _v1 = _v0.variant;
      return "inlay" === (void 0 === _v1 ? "minimalTransparent" : _v1) && (0, _v8.css)(_v2 || (_v2 = (0, _v6.a)(["\n      background: ", ";\n      padding: 0.334rem 0;\n    "], ["\n      background: ", ";\n      padding: 0.334rem 0;\n    "])), function (_v0) {
        return _v0.theme.formats.secondary;
      });
    }),
    _v12 = _v8.default.div(_v3 || (_v3 = (0, _v6.a)(["\n  width: 100%;\n  background: ", ";\n\n  &:after {\n    content: '';\n    display: block;\n    width: ", "%;\n    height: ", ";\n    background-color: ", ";\n    transform: translateX(", "%);\n    transition: 120ms ease-in-out;\n  }\n"], ["\n  width: 100%;\n  background: ", ";\n\n  &:after {\n    content: '';\n    display: block;\n    width: ", "%;\n    height: ", ";\n    background-color: ", ";\n    transform: translateX(", "%);\n    transition: 120ms ease-in-out;\n  }\n"])), function (_v0) {
      return (0, _v9.rgba)(_v0.theme.content.color, .1);
    }, function (_v0) {
      return 100 / _v0.width;
    }, (0, _v9.rem)(2), (0, _v10.blue)(500), function (_v0) {
      return 100 * _v0.position;
    }),
    _v13 = _v8.default.div(_v4 || (_v4 = (0, _v6.a)(["\n  position: relative;\n  padding: 0.5rem 0;\n"], ["\n  position: relative;\n  padding: 0.5rem 0;\n"]))),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  function _v16(_v0) {
    var _v1 = _v0.format,
      _v2 = _v0.index,
      _v3 = _v0.label,
      _v4 = _v0.selected,
      _v5 = _v0.variant,
      _v6 = (0, _v6.b)(_v0, ["format", "index", "label", "selected", "variant"]),
      _v7 = "tab" + _v2;
    return _v6 = (0, _v6.c)({
      ariaSelected: _v4,
      children: _v3,
      element: "a",
      href: "#" + _v7,
      id: _v7,
      onClick: function (_v0) {
        return _v0.preventDefault();
      },
      size: "md",
      target: "_self"
    }, _v6), "inlay" === _v5 ? _v7.default.createElement(_v17, (0, _v6.c)({
      selected: _v4
    }, _v6)) : _v7.default.createElement(_v14.Button, (0, _v6.c)({
      format: _v1,
      variant: "minimalTransparent"
    }, _v6));
  }
  function _v17(_v0) {
    var _v1 = _v0.selected,
      _v2 = (0, _v6.b)(_v0, ["selected"]),
      _v3 = (0, _v7.useContext)(_v8.ThemeContext);
    return _v7.default.createElement(_v18, (0, _v6.c)({
      format: "basic",
      selected: _v1,
      theme: _v1 ? _v19(_v3) : _v3,
      variant: _v1 ? "solid" : "minimalTransparent"
    }, _v2));
  }
  var _v18 = (0, _v8.default)(_v14.Button)(_v5 || (_v5 = (0, _v6.a)(["\n  width: calc(100% - 0.667rem);\n  margin: 0 0.334rem;\n  box-shadow: ", ";\n"], ["\n  width: calc(100% - 0.667rem);\n  margin: 0 0.334rem;\n  box-shadow: ", ";\n"])), function (_v0) {
      return _v0.selected ? "0 ".concat((0, _v9.rem)(3), " ").concat((0, _v9.rem)(6), " 0 ").concat((0, _v9.rgba)(_v10.black, .125)) : "none";
    }),
    _v19 = function (_v0) {
      var _v1 = _v0.name;
      return "dark" === _v1 ? _v15.themes.light : "light" === _v1 ? _v15.themes.dark : void 0;
    },
    _v20 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.forwardRef,
        _v3 = _v0.format,
        _v4 = void 0 === _v3 ? "soft" : _v3,
        _v5 = _v0.variant,
        _v6 = void 0 === _v5 ? "minimalTransparent" : _v5,
        _v7 = _v0.pill,
        _v8 = void 0 !== _v7 && _v7,
        _v9 = (0, _v6.b)(_v0, ["children", "forwardRef", "format", "variant", "pill"]),
        _v10 = (0, _v6._)((0, _v7.useState)(-1), 2),
        _v11 = _v10[0],
        _v12 = _v10[1];
      function _v13(_v0) {
        var _v1 = _v0.key,
          _v2 = _v1.length;
        "ArrowRight" === _v1 && _v12(_v11 === _v2 - 1 ? 0 : _v11 + 1), "ArrowLeft" === _v1 && _v12(0 === _v11 ? _v2 - 1 : _v11 - 1);
      }
      (0, _v7.useLayoutEffect)(function () {
        var _v0 = _v1.map(function (_v0, _v1) {
          return _v0.props.active && _v1;
        }).filter(function (_v0) {
          return "number" == typeof _v0 && _v0 >= 0;
        });
        if (0 === _v0.length) return _v12(0);
        if (1 === _v0.length) return _v12(_v0[0]);
        var _v1 = _v0[_v0.length - 1];
        _v21(_v0, _v1), _v12(_v1);
      }, [_v1]);
      var _v14 = _v1.map(function (_v0, _v1) {
          var _v2 = _v0.props;
          return _v7.default.createElement("li", {
            key: _v1,
            onClick: function () {
              return _v12(_v1);
            },
            "data-id": _v2.dataId,
            style: {
              flex: "1 0 0"
            }
          }, _v7.default.createElement(_v16, {
            onKeyUp: _v13,
            format: _v4,
            index: _v1,
            label: _v2.label,
            selected: _v11 === _v1,
            variant: _v6,
            pill: _v8
          }));
        }),
        _v15 = _v1.map(function (_v0, _v1) {
          return _v11 === _v1 && (0, _v7.cloneElement)(_v0, {
            id: "#tab-".concat(_v1),
            key: _v1
          });
        });
      return _v7.default.createElement("div", (0, _v6.c)({
        ref: _v2
      }, _v9), _v7.default.createElement(_v11, {
        variant: _v6,
        pill: _v8
      }, _v14), "inlay" !== _v6 && _v7.default.createElement(_v12, {
        width: _v1.length,
        position: _v11
      }), _v15);
    });
  _v20.Panel = function (_v0) {
    var _v1 = _v0.children;
    _v0.active;
    var _v2 = _v0.onActivate,
      _v3 = _v0.onOpen,
      _v4 = (0, _v6.b)(_v0, ["children", "active", "onActivate", "onOpen"]);
    _v2 && (_v3 = _v2);
    var _v5 = (0, _v7.useRef)(!1);
    return (0, _v7.useEffect)(function () {
      _v5.current || (_v5.current = !0, null == _v3 || _v3());
    }, [_v3]), _v7.default.createElement(_v13, (0, _v6.c)({}, _v4), _v1);
  };
  var _v21 = function (_v0, _v1) {
    return console.error("@vimeo/iris:", "Multiple tabs were specified as the intial active tab! Tabs: [".concat(_v0.toString(), "]. Using last 'active' tab: ").concat(_v1, "."), "\n\n");
  };
  _v0.s(["Tabs", 0, _v20], 0);
}