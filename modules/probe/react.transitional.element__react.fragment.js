{
  "use strict";

  var _v3 = Symbol.for("react.transitional.element");
  function _v4(_v0, _v1, _v2) {
    var _v3 = null;
    if (void 0 !== _v2 && (_v3 = "" + _v2), void 0 !== _v1.key && (_v3 = "" + _v1.key), "key" in _v1) for (var _v4 in _v2 = {}, _v1) "key" !== _v4 && (_v2[_v4] = _v1[_v4]);else _v2 = _v1;
    return {
      $$typeof: _v3,
      type: _v0,
      key: _v3,
      ref: void 0 !== (_v1 = _v2.ref) ? _v1 : null,
      props: _v2
    };
  }
  _v2.Fragment = Symbol.for("react.fragment"), _v2.jsx = _v4, _v2.jsxs = _v4;
}