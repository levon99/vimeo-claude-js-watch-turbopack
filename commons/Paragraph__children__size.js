{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["Paragraph", 0, ({
    children: _v0,
    size: _v1 = "lg",
    ..._v2
  }) => (0, _v1.jsx)(_v2.Text, {
    as: "p",
    variant: (_v0 => {
      if ("object" != typeof _v0) return `body-${_v0 + ""}`;
      {
        let _v0 = {};
        if (Array.isArray(_v0)) _v0 = _v0.map(_v0 => `body-${_v0 + ""}`);else if ("object" == typeof _v0) for (let [_v0, _v1] of Object.entries(_v0)) _v0[_v0] = `body-${_v1 + ""}`;
        return _v0;
      }
    })(_v1),
    ..._v2,
    children: _v0
  })]);
}