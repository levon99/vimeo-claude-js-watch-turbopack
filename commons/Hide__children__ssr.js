{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0) {
    let {
        children: _v1,
        ssr: _v2
      } = _v0,
      _v3 = (0, _v2.useQuery)(_v0);
    return (0, _v3.jsx)(_v1.Visibility, {
      breakpoint: _v3,
      hide: !0,
      ssr: _v2,
      children: _v1
    });
  }
  _v4.displayName = "Hide", _v0.s(["Hide", 0, _v4]);
}