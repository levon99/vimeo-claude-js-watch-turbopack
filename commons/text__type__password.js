{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.i(0);
  var _v7 = (0, _v5.withIris)(function (_v0) {
    var _v1 = _v0.type,
      _v2 = void 0 === _v1 ? "text" : _v1,
      _v3 = (0, _v1.b)(_v0, ["type"]),
      _v4 = (0, _v2.useMemo)(function () {
        return (0, _v6.generateUID)();
      }, []);
    switch (!_v3.name && (_v3.name = _v4), !_v3.id && (_v3.id = _v4), _v2) {
      case "text":
      case "password":
      case "email":
      case "url":
        return _v2.default.createElement(_v3.Text, (0, _v1.c)({
          type: _v2
        }, _v3));
      default:
        return _v3.value || (_v3.value = _v4), _v2.default.createElement(_v4.Mark, (0, _v1.c)({
          type: _v2
        }, _v3));
    }
  });
  _v0.s(["Input", 0, _v7]);
}