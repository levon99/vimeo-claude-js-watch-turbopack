{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["default", 0, ({
    width: _v0,
    picture: _v1,
    alt: _v2 = "",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Avatar, {
    ..._v3,
    alt: _v2,
    src: ((_v0, {
      sizes: _v1
    }) => _v1.reduce((_v0, _v1) => _v0.width < _v1.width ? _v0.width < _v0 ? _v1 : _v0 : _v1.width > _v0 ? _v1 : _v0).link)(_v0, _v1)
  })]);
}