{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      xs: 320,
      xsm: 375,
      xmd: 480,
      altsm: 600,
      sm: 768,
      altmd: 960,
      md: 0,
      lg: 0,
      hd: 0,
      xhd: 0
    },
    _v3 = Object.keys(_v2).reduce((_v0, _v1) => {
      let _v2 = _v2[_v1];
      return _v0[_v1] = (_v0, ..._v1) => _v1.css`
    @media (min-width: ${_v2}px) {
      ${(0, _v1.css)(_v0, ..._v1)};
    }
  `, _v0;
    }, {});
  _v0.s(["media", 0, _v3]);
}