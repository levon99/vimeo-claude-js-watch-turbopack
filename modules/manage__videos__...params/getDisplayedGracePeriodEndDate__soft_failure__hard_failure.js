{
  "use strict";

  let _v1 = {
    soft_failure: 28,
    hard_failure: 7
  };
  function _v2(_v0) {
    if (!_v0) return null;
    let _v1 = _v0.match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2}))?(?:\.\d+)?(?:Z)?$/);
    if (_v1) {
      let [, _v0, _v1, _v2, _v3 = "00", _v4 = "00", _v5 = "00"] = _v1;
      return {
        date: new Date(Date.UTC(Number(_v0), Number(_v1) - 1, Number(_v2), Number(_v3), Number(_v4), Number(_v5))),
        hasTime: void 0 !== _v1[4]
      };
    }
    let _v2 = new Date(_v0);
    return Number.isNaN(_v2.getTime()) ? null : {
      date: _v2,
      hasTime: _v0.includes(":")
    };
  }
  function _v3(_v0) {
    let _v1 = _v2(_v0);
    return _v1 ? _v1.date.getTime() : null;
  }
  _v0.s(["getDisplayedGracePeriodEndDate", 0, function (_v0, _v1, _v2) {
    let _v3,
      _v4 = _v0 && _v0 in _v1 ? _v1[_v0] : null;
    if (!_v4 || !_v1) return _v2 ?? void 0;
    let _v5 = (_v3 = _v2(_v1)) ? (_v3.date.setUTCDate(_v3.date.getUTCDate() + _v4), function (_v0, _v1) {
      let _v2 = _v0.getUTCFullYear(),
        _v3 = `${_v0.getUTCMonth() + 1}`.padStart(2, "0"),
        _v4 = `${_v0.getUTCDate()}`.padStart(2, "0");
      if (!_v1) return `${_v2}-${_v3}-${_v4}`;
      let _v5 = `${_v0.getUTCHours()}`.padStart(2, "0"),
        _v6 = `${_v0.getUTCMinutes()}`.padStart(2, "0"),
        _v7 = `${_v0.getUTCSeconds()}`.padStart(2, "0");
      return `${_v2}-${_v3}-${_v4} ${_v5}:${_v6}:${_v7}`;
    }(_v3.date, _v3.hasTime)) : null;
    if (!_v5) return _v2 ?? void 0;
    let _v6 = _v3(_v5),
      _v7 = _v3(_v2);
    return null === _v6 ? _v2 ?? void 0 : null === _v7 || _v6 <= _v7 ? _v5 : _v2 ?? void 0;
  }]);
}