{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["Header", 0, ({
    children: _v0,
    as: _v1 = "h1",
    size: _v2 = "lg",
    ..._v3
  }) => (0, _v1.jsx)(_v2.Text, {
    as: _v1,
    variant: (_v0 => {
      if ("object" != typeof _v0) return `heading-${_v0 + ""}`;
      {
        let _v0 = {};
        if (Array.isArray(_v0)) _v0 = _v0.map(_v0 => `heading-${_v0 + ""}`);else if ("object" == typeof _v0) for (let [_v0, _v1] of Object.entries(_v0)) _v0[_v0] = `heading-${_v1 + ""}`;
        return _v0;
      }
    })(_v2),
    ..._v3,
    children: _v0
  })]);
}