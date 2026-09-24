{
  "use strict";

  _v0.i(0);
  var _v1 = _v0.i(0);
  let _v2 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(`${_v0.slice(0, 10)}T00:00:00`);
      return Number.isNaN(_v1.getTime()) ? null : _v1;
    },
    _v3 = _v0 => new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(_v0);
  _v0.s(["formatHeroDateRange", 0, (_v0, _v1) => {
    let _v2 = _v2(_v0),
      _v3 = _v2(_v1);
    if (!_v2 && !_v3) return null;
    if (_v2 && !_v3) return _v3(_v2);
    if (!_v2 && _v3) return _v3(_v3);
    if (_v2 && _v3) {
      if (_v2.getFullYear() === _v3.getFullYear()) return `${new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric"
      }).format(_v2)} — ${_v3(_v3)}`;
      return `${_v3(_v2)} — ${_v3(_v3)}`;
    }
    return null;
  }, "formatTimeZoneLabel", 0, _v0 => {
    if (!_v0) return null;
    let _v1 = _v0 => {
        try {
          return new Intl.DateTimeFormat("en-US", {
            timeZone: _v0,
            timeZoneName: _v0
          }).formatToParts(new Date()).find(_v0 => "timeZoneName" === _v0.type)?.value;
        } catch {
          return;
        }
      },
      _v2 = _v1("longGeneric"),
      _v3 = _v1("short");
    return _v2 ? _v3 && _v3 !== _v2 ? `${_v2} (${_v3})` : _v2 : _v0;
  }, "toDateTime", 0, _v0 => {
    if (!_v0) return;
    let _v1 = _v1.DateTime.fromISO(_v0);
    return _v1.isValid ? _v1 : void 0;
  }, "toDateValue", 0, _v0 => {
    let _v1 = _v0.getFullYear(),
      _v2 = String(_v0.getMonth() + 1).padStart(2, "0"),
      _v3 = String(_v0.getDate()).padStart(2, "0");
    return `${_v1}-${_v2}-${_v3}`;
  }]);
}