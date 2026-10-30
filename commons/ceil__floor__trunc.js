{
  "use strict";

  var _v3 = Math.ceil,
    _v4 = Math.floor;
  _v1.exports = Math.trunc || function (_v0) {
    var _v1 = +_v0;
    return (_v1 > 0 ? _v4 : _v3)(_v1);
  };
}