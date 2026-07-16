{
  "use strict";

  let _v3 = _v0.r(0);
  _v1.exports = (_v0, _v1) => {
    let _v2 = _v3(_v0.trim().replace(/^[=v]+/, ""), _v1);
    return _v2 ? _v2.version : null;
  };
}