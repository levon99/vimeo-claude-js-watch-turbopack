{
  "use strict";

  var _v3,
    _v4,
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v5.process,
    _v8 = _v5.Deno,
    _v9 = _v7 && _v7.versions || _v8 && _v8.version,
    _v10 = _v9 && _v9.v8;
  _v10 && (_v4 = (_v3 = _v10.split("."))[0] > 0 && _v3[0] < 4 ? 1 : +(_v3[0] + _v3[1])), !_v4 && _v6 && (!(_v3 = _v6.match(/Edge\/(\d+)/)) || _v3[1] >= 74) && (_v3 = _v6.match(/Chrome\/(\d+)/)) && (_v4 = +_v3[1]), _v1.exports = _v4;
}