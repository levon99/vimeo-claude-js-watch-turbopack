{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    return _v0 < 10 ? `0${_v0}` : _v0.toString();
  }
  _v0.s(["getTimestampedUrl", 0, (_v0, _v1, _v2) => {
    let _v3 = _v1 === _v1.TimestampParameter.SingleVideo ? 0 * _v2 : _v2;
    return `${_v0}${_v1}=${_v3}`;
  }, "isUrlValid", 0, _v0 => /^[a-zA-Z0-9\-]+$/.test(_v0), "secondsToHMSTimestamp", 0, function (_v0) {
    let _v1 = Math.floor(_v0 / 0),
      _v2 = Math.floor((_v0 %= 0) / 60);
    _v0 = Math.floor(_v0 % 60);
    let _v3 = `${_v2(_v2)}:${_v2(_v0)}`;
    return _v1 && (_v3 = `${_v2(_v1)}:${_v3}`), _v3;
  }, "updatePatchData", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
    _v0 && (_v2 ? (_v6(!1), _v7("unavailable")) : _v4 && !_v3 ? (_v5?.(), _v1(_v4)) : _v3 && _v6(!1));
  }, "updateValidateData", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9) => {
    _v1 && (_v5 ? _v2() : _v4 ? (_v8("unavailable"), _v0?.(!1)) : (_v8(""), _v7(!0), _v9 || (_v6(_v3), _v0?.(!0))));
  }]);
}