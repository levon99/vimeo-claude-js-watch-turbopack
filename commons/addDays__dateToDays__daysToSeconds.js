{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["addDays", 0, (_v0, _v1) => (_v0.setDate(_v0.getDate() + _v1), _v0), "dateToDays", 0, ({
    durationAmount: _v0,
    durationUnits: _v1
  }) => _v1 === _v2.DAYS ? _v0 : _v1 === _v2.MONTHS ? 30 * _v0 : _v1 === _v2.YEARS ? 365 * _v0 : _v0, "daysToSeconds", 0, _v0 => 0 * _v0, "formatDateForApi", 0, _v0 => {
    let _v1 = _v0 || new Date(),
      _v2 = "" + (_v1.getMonth() + 1),
      _v3 = "" + _v1.getDate(),
      _v4 = _v1.getFullYear();
    return _v2.length < 2 && (_v2 = "0" + _v2), _v3.length < 2 && (_v3 = "0" + _v3), [_v4, _v2, _v3].join("-");
  }, "formatDateForAuditLogExport", 0, _v0 => _v0.getFullYear() + "-" + ("0" + (_v0.getMonth() + 1)).slice(-2) + "-" + ("0" + _v0.getDate()).slice(-2), "formatDateToNeededLocale", 0, ({
    locale: _v0,
    date: _v1 = new Date()
  }) => new Intl.DateTimeFormat(_v0).format(_v1), "getDateMinusCurrent", 0, _v0 => {
    let _v1 = new Date();
    return _v1.setDate(_v1.getDate() - _v0), _v1;
  }, "jsDateToCalendarDate", 0, (_v0 = new Date()) => new _v1.BokehDate.CalendarDate(_v0.getFullYear(), _v0.getMonth() + 1, _v0.getDate())]);
}