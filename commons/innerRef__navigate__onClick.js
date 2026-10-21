{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v2.default.Component, _v2.default.Component;
  var _v7 = function (_v0, _v1) {
      return "function" == typeof _v0 ? _v0(_v1) : _v0;
    },
    _v8 = function (_v0, _v1) {
      return "string" == typeof _v0 ? (0, _v3.createLocation)(_v0, null, null, _v1) : _v0;
    },
    _v9 = function (_v0) {
      return _v0;
    },
    _v10 = _v2.default.forwardRef;
  void 0 === _v10 && (_v10 = _v9);
  var _v11 = _v10(function (_v0, _v1) {
      var _v2 = _v0.innerRef,
        _v3 = _v0.navigate,
        _v4 = _v0.onClick,
        _v5 = (0, _v5.default)(_v0, ["innerRef", "navigate", "onClick"]),
        _v6 = _v5.target,
        _v7 = (0, _v4.default)({}, _v5, {
          onClick: function (_v0) {
            try {
              _v4 && _v4(_v0);
            } catch (_v0) {
              throw _v0.preventDefault(), _v0;
            }
            _v0.defaultPrevented || 0 !== _v0.button || _v6 && "_self" !== _v6 || _v0.metaKey || _v0.altKey || _v0.ctrlKey || _v0.shiftKey || (_v0.preventDefault(), _v3());
          }
        });
      return _v9 !== _v10 ? _v7.ref = _v1 || _v2 : _v7.ref = _v2, _v2.default.createElement("a", _v7);
    }),
    _v12 = _v10(function (_v0, _v1) {
      var _v2 = _v0.component,
        _v3 = void 0 === _v2 ? _v11 : _v2,
        _v4 = _v0.replace,
        _v5 = _v0.to,
        _v6 = _v0.innerRef,
        _v7 = (0, _v5.default)(_v0, ["component", "replace", "to", "innerRef"]);
      return _v2.default.createElement(_v1.__RouterContext.Consumer, null, function (_v0) {
        _v0 || (0, _v6.default)(!1);
        var _v1 = _v0.history,
          _v2 = _v8(_v7(_v5, _v0.location), _v0.location),
          _v3 = _v2 ? _v1.createHref(_v2) : "",
          _v4 = (0, _v4.default)({}, _v7, {
            href: _v3,
            navigate: function () {
              var _v0 = _v7(_v5, _v0.location);
              (_v4 ? _v1.replace : _v1.push)(_v0);
            }
          });
        return _v9 !== _v10 ? _v4.ref = _v1 || _v6 : _v4.innerRef = _v6, _v2.default.createElement(_v3, _v4);
      });
    }),
    _v13 = function (_v0) {
      return _v0;
    },
    _v14 = _v2.default.forwardRef;
  void 0 === _v14 && (_v14 = _v13);
  var _v15 = _v14(function (_v0, _v1) {
    var _v2 = _v0["aria-current"],
      _v3 = void 0 === _v2 ? "page" : _v2,
      _v4 = _v0.activeClassName,
      _v5 = void 0 === _v4 ? "active" : _v4,
      _v6 = _v0.activeStyle,
      _v7 = _v0.className,
      _v8 = _v0.exact,
      _v9 = _v0.isActive,
      _v10 = _v0.location,
      _v11 = _v0.sensitive,
      _v12 = _v0.strict,
      _v13 = _v0.style,
      _v14 = _v0.to,
      _v15 = _v0.innerRef,
      _v16 = (0, _v5.default)(_v0, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
    return _v2.default.createElement(_v1.__RouterContext.Consumer, null, function (_v0) {
      _v0 || (0, _v6.default)(!1);
      var _v1 = _v10 || _v0.location,
        _v2 = _v8(_v7(_v14, _v1), _v1),
        _v3 = _v2.pathname,
        _v4 = _v3 && _v3.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
        _v5 = _v4 ? (0, _v1.matchPath)(_v1.pathname, {
          path: _v4,
          exact: _v8,
          sensitive: _v11,
          strict: _v12
        }) : null,
        _v6 = !!(_v9 ? _v9(_v5, _v1) : _v5),
        _v7 = _v6 ? function () {
          for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
          return _v1.filter(function (_v0) {
            return _v0;
          }).join(" ");
        }(_v7, _v5) : _v7,
        _v8 = _v6 ? (0, _v4.default)({}, _v13, {}, _v6) : _v13,
        _v9 = (0, _v4.default)({
          "aria-current": _v6 && _v3 || null,
          className: _v7,
          style: _v8,
          to: _v2
        }, _v16);
      return _v13 !== _v14 ? _v9.ref = _v1 || _v15 : _v9.innerRef = _v15, _v2.default.createElement(_v12, _v9);
    });
  });
  _v0.s(["Link", 0, _v12, "NavLink", 0, _v15]);
}