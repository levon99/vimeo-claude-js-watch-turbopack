{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v4.withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.className,
        _v3 = _v0.element,
        _v4 = _v0.format,
        _v5 = void 0 === _v4 ? "soft" : _v4,
        _v6 = _v0.forwardRef,
        _v7 = _v0.onBlur,
        _v8 = _v0.onChange,
        _v9 = _v0.onFocus,
        _v10 = _v0.onKeyUp,
        _v11 = _v0.placeholder,
        _v12 = _v0.size,
        _v13 = _v0.style,
        _v14 = (0, _v1.b)(_v0, ["children", "className", "element", "format", "forwardRef", "onBlur", "onChange", "onFocus", "onKeyUp", "placeholder", "size", "style"]),
        _v15 = (0, _v1._)((0, _v2.useReducer)(_v9, {
          text: _v1,
          width: 0,
          focus: !1
        }), 2),
        _v16 = _v15[0],
        _v17 = _v15[1],
        _v18 = _v16.text,
        _v19 = _v16.width,
        _v20 = _v16.focus,
        _v21 = (0, _v2.useRef)(null),
        _v22 = (0, _v2.useRef)(null),
        _v23 = (0, _v1._)((0, _v5.useLayoutStyles)(_v13), 2),
        _v24 = _v23[0],
        _v25 = _v23[1];
      function _v26(_v0) {
        var _v1;
        _v9 && _v9(_v0), _v17(["focusSet", !0]), null == (_v1 = null == _v22 ? void 0 : _v22.current) || _v1.focus();
      }
      return (0, _v2.useEffect)(function () {
        var _v0 = (0, _v6.geometry)(_v21.current).width;
        _v19 !== _v0 && _v17(["widthSet", _v0]);
      }, [_v18, _v19]), _v2.default.createElement("div", {
        style: (0, _v1.c)({
          position: "relative",
          display: "inline-block"
        }, _v24),
        className: _v2
      }, _v2.default.createElement(_v3.Text, (0, _v1.c)({
        as: void 0 === _v3 ? "span" : _v3,
        children: _v18.length > 0 ? _v18 : _v11,
        className: _v2,
        format: _v5,
        onClick: _v26,
        ref: _v21,
        size: _v12
      }, _v14, {
        style: (0, _v1.c)((0, _v1.c)({}, _v25), {
          opacity: +!_v20,
          margin: 0
        })
      })), _v2.default.createElement(_v3.Input, (0, _v1.c)({
        className: _v2,
        defaultValue: _v18,
        format: _v5,
        onBlur: function (_v0) {
          var _v1;
          _v7 && _v7(_v0), _v17(["focusSet", !1]), null == (_v1 = null == _v22 ? void 0 : _v22.current) || _v1.blur();
        },
        onChange: function (_v0) {
          _v8 && _v8(_v0), _v17(["textSet", _v0.target.value]);
        },
        onFocus: _v26,
        onKeyUp: function (_v0) {
          var _v1;
          _v10 && _v10(_v0), "Enter" === _v0.key && (null == (_v1 = null == _v22 ? void 0 : _v22.current) || _v1.blur());
        },
        ref: function () {
          for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
          return function (_v0) {
            var _v1, _v2;
            try {
              for (var _v3 = (0, _v1.d)(_v0), _v4 = _v3.next(); !_v4.done; _v4 = _v3.next()) {
                var _v5 = _v4.value;
                "function" == typeof _v5 ? _v5(_v0) : _v5 && (_v5.current = _v0);
              }
            } catch (_v0) {
              _v1 = {
                error: _v0
              };
            } finally {
              try {
                _v4 && !_v4.done && (_v2 = _v3.return) && _v2.call(_v3);
              } finally {
                if (_v1) throw _v1.error;
              }
            }
          };
        }(_v6, _v22),
        size: _v12,
        type: "text"
      }, _v14, {
        style: (0, _v1.c)((0, _v1.c)({}, _v25), {
          width: _v19,
          opacity: +!!_v20,
          margin: 0
        })
      })), _v2.default.createElement(_v7.Focus, {
        parent: _v3.Input
      }));
    });
  function _v9(_v0, _v1) {
    var _v2 = (0, _v1._)(_v1, 2),
      _v3 = _v2[0],
      _v4 = _v2[1];
    switch (_v3) {
      case "textSet":
        return (0, _v1.c)((0, _v1.c)({}, _v0), {
          text: _v10(_v4)
        });
      case "widthSet":
        return (0, _v1.c)((0, _v1.c)({}, _v0), {
          width: _v4
        });
      case "focusSet":
        return (0, _v1.c)((0, _v1.c)({}, _v0), {
          focus: _v4
        });
    }
  }
  var _v10 = function (_v0) {
      return _v0.replace(/ /g, " ");
    },
    _v11 = (0, _v4.withIris)(function (_v0) {
      var _v1 = _v0.contentEditable,
        _v2 = _v0.element,
        _v3 = _v0.format,
        _v4 = void 0 === _v3 ? "soft" : _v3,
        _v5 = _v0.size,
        _v6 = void 0 === _v5 ? 300 : _v5,
        _v7 = (0, _v1.b)(_v0, ["contentEditable", "element", "format", "size"]);
      return _v1 ? _v2.default.createElement(_v8, (0, _v1.c)({
        format: _v4,
        size: _v6
      }, _v7)) : _v2.default.createElement(_v3.Text, (0, _v1.c)({
        as: void 0 === _v2 ? "span" : _v2,
        format: _v4,
        size: _v6
      }, _v7));
    });
  _v0.s(["Text", 0, _v11], 0);
}