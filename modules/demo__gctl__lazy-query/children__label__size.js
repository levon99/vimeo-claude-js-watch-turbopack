{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = (0, _v5.withIris)(function (_v0) {
    var _v1 = _v0.children,
      _v2 = void 0 === _v1 ? _v2.default.createElement(_v6.Search, null) : _v1,
      _v3 = _v0.label,
      _v4 = _v0.size,
      _v5 = void 0 === _v4 ? "md" : _v4,
      _v6 = _v0.format,
      _v7 = _v0.forwardRef,
      _v8 = _v0.variant,
      _v9 = (0, _v1.b)(_v0, ["children", "label", "size", "format", "forwardRef", "variant"]),
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v1._)((0, _v2.useState)(0), 2),
      _v12 = _v11[0],
      _v13 = _v11[1];
    return (0, _v2.useImperativeHandle)(_v7, function () {
      return _v10.current;
    }), (0, _v2.useLayoutEffect)(function () {
      return _v13((0, _v7.geometry)(_v10.current).height);
    }, []), _v2.default.createElement(_v4.Input, (0, _v1.c)({}, _v9, {
      size: _v5,
      ref: _v10,
      label: _v3
    }), _v2.default.createElement(_v3.InnerButton, {
      format: void 0 === _v6 ? "primary" : _v6,
      variant: void 0 === _v8 ? "basic" : _v8,
      label: _v3,
      size: _v5,
      height: _v12
    }, _v2));
  });
  _v0.s(["Search", 0, _v8]);
}