{
  "use strict";

  _v0.s(["CalendarDate", () => _v49, "CalendarDateTime", () => _v53, "Time", () => _v51, "ZonedDateTime", () => _v55], 0), _v0.s(["add", () => _v3, "addTime", () => _v15, "addZoned", () => _v20, "constrain", () => _v7, "constrainTime", () => _v12, "cycleDate", () => _v17, "cycleTime", () => _v18, "cycleZoned", () => _v22, "set", () => _v10, "setTime", () => _v11, "setZoned", () => _v23, "subtract", () => _v9, "subtractTime", () => _v16, "subtractZoned", () => _v21], 0), _v0.s(["dateTimeToString", () => _v42, "dateToString", () => _v41, "parseAbsolute", () => _v37, "parseAbsoluteToLocal", () => _v38, "parseDate", () => _v34, "parseDateTime", () => _v35, "parseDuration", () => _v45, "parseTime", () => _v33, "parseZonedDateTime", () => _v36, "timeToString", () => _v40, "zonedDateTimeToString", () => _v44], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0, _v1) {
    let _v2 = _v0.copy(),
      _v3 = "hour" in _v2 ? _v14(_v2, _v1) : 0;
    _v4(_v2, _v1.years || 0), _v2.calendar.balanceYearMonth && _v2.calendar.balanceYearMonth(_v2, _v0), _v2.month += _v1.months || 0, _v5(_v2), _v6(_v2), _v2.day += 7 * (_v1.weeks || 0), _v2.day += _v1.days || 0, _v2.day += _v3, function (_v0) {
      for (; _v0.day < 1;) _v0.month--, _v5(_v0), _v0.day += _v0.calendar.getDaysInMonth(_v0);
      for (; _v0.day > _v0.calendar.getDaysInMonth(_v0);) _v0.day -= _v0.calendar.getDaysInMonth(_v0), _v0.month++, _v5(_v0);
    }(_v2), _v2.calendar.balanceDate && _v2.calendar.balanceDate(_v2), _v2.year < 1 && (_v2.year = 1, _v2.month = 1, _v2.day = 1);
    let _v4 = _v2.calendar.getYearsInEra(_v2);
    if (_v2.year > _v4) {
      var _v5, _v6;
      let _v0 = null == (_v5 = (_v6 = _v2.calendar).isInverseEra) ? void 0 : _v5.call(_v6, _v2);
      _v2.year = _v4, _v2.month = _v0 ? 1 : _v2.calendar.getMonthsInYear(_v2), _v2.day = _v0 ? 1 : _v2.calendar.getDaysInMonth(_v2);
    }
    _v2.month < 1 && (_v2.month = 1, _v2.day = 1);
    let _v7 = _v2.calendar.getMonthsInYear(_v2);
    return _v2.month > _v7 && (_v2.month = _v7, _v2.day = _v2.calendar.getDaysInMonth(_v2)), _v2.day = Math.max(1, Math.min(_v2.calendar.getDaysInMonth(_v2), _v2.day)), _v2;
  }
  function _v4(_v0, _v1) {
    var _v2, _v3;
    (null == (_v2 = (_v3 = _v0.calendar).isInverseEra) ? void 0 : _v2.call(_v3, _v0)) && (_v1 = -_v1), _v0.year += _v1;
  }
  function _v5(_v0) {
    for (; _v0.month < 1;) _v4(_v0, -1), _v0.month += _v0.calendar.getMonthsInYear(_v0);
    let _v1 = 0;
    for (; _v0.month > (_v1 = _v0.calendar.getMonthsInYear(_v0));) _v0.month -= _v1, _v4(_v0, 1);
  }
  function _v6(_v0) {
    _v0.month = Math.max(1, Math.min(_v0.calendar.getMonthsInYear(_v0), _v0.month)), _v0.day = Math.max(1, Math.min(_v0.calendar.getDaysInMonth(_v0), _v0.day));
  }
  function _v7(_v0) {
    _v0.calendar.constrainDate && _v0.calendar.constrainDate(_v0), _v0.year = Math.max(1, Math.min(_v0.calendar.getYearsInEra(_v0), _v0.year)), _v6(_v0);
  }
  function _v8(_v0) {
    let _v1 = {};
    for (let _v0 in _v0) "number" == typeof _v0[_v0] && (_v1[_v0] = -_v0[_v0]);
    return _v1;
  }
  function _v9(_v0, _v1) {
    return _v3(_v0, _v8(_v1));
  }
  function _v10(_v0, _v1) {
    let _v2 = _v0.copy();
    return null != _v1.era && (_v2.era = _v1.era), null != _v1.year && (_v2.year = _v1.year), null != _v1.month && (_v2.month = _v1.month), null != _v1.day && (_v2.day = _v1.day), _v7(_v2), _v2;
  }
  function _v11(_v0, _v1) {
    let _v2 = _v0.copy();
    return null != _v1.hour && (_v2.hour = _v1.hour), null != _v1.minute && (_v2.minute = _v1.minute), null != _v1.second && (_v2.second = _v1.second), null != _v1.millisecond && (_v2.millisecond = _v1.millisecond), _v12(_v2), _v2;
  }
  function _v12(_v0) {
    _v0.millisecond = Math.max(0, Math.min(_v0.millisecond, 0)), _v0.second = Math.max(0, Math.min(_v0.second, 59)), _v0.minute = Math.max(0, Math.min(_v0.minute, 59)), _v0.hour = Math.max(0, Math.min(_v0.hour, 23));
  }
  function _v13(_v0, _v1) {
    let _v2 = _v0 % _v1;
    return _v2 < 0 && (_v2 += _v1), _v2;
  }
  function _v14(_v0, _v1) {
    let _v2;
    return _v0.hour += _v1.hours || 0, _v0.minute += _v1.minutes || 0, _v0.second += _v1.seconds || 0, _v0.millisecond += _v1.milliseconds || 0, _v0.second += Math.floor(_v0.millisecond / 0), _v0.millisecond = _v13(_v0.millisecond, 0), _v0.minute += Math.floor(_v0.second / 60), _v0.second = _v13(_v0.second, 60), _v0.hour += Math.floor(_v0.minute / 60), _v0.minute = _v13(_v0.minute, 60), _v2 = Math.floor(_v0.hour / 24), _v0.hour = _v13(_v0.hour, 24), _v2;
  }
  function _v15(_v0, _v1) {
    let _v2 = _v0.copy();
    return _v14(_v2, _v1), _v2;
  }
  function _v16(_v0, _v1) {
    return _v15(_v0, _v8(_v1));
  }
  function _v17(_v0, _v1, _v2, _v3) {
    let _v4 = _v0.copy();
    switch (_v1) {
      case "era":
        {
          let _v0 = _v0.calendar.getEras(),
            _v1 = _v0.indexOf(_v0.era);
          if (_v1 < 0) throw Error("Invalid era: " + _v0.era);
          _v1 = _v19(_v1, _v2, 0, _v0.length - 1, null == _v3 ? void 0 : _v3.round), _v4.era = _v0[_v1], _v7(_v4);
          break;
        }
      case "year":
        var _v5, _v6;
        (null == (_v5 = (_v6 = _v4.calendar).isInverseEra) ? void 0 : _v5.call(_v6, _v4)) && (_v2 = -_v2), _v4.year = _v19(_v0.year, _v2, -1 / 0, 0, null == _v3 ? void 0 : _v3.round), _v4.year === -1 / 0 && (_v4.year = 1), _v4.calendar.balanceYearMonth && _v4.calendar.balanceYearMonth(_v4, _v0);
        break;
      case "month":
        _v4.month = _v19(_v0.month, _v2, 1, _v0.calendar.getMonthsInYear(_v0), null == _v3 ? void 0 : _v3.round);
        break;
      case "day":
        _v4.day = _v19(_v0.day, _v2, 1, _v0.calendar.getDaysInMonth(_v0), null == _v3 ? void 0 : _v3.round);
        break;
      default:
        throw Error("Unsupported field " + _v1);
    }
    return _v0.calendar.balanceDate && _v0.calendar.balanceDate(_v4), _v7(_v4), _v4;
  }
  function _v18(_v0, _v1, _v2, _v3) {
    let _v4 = _v0.copy();
    switch (_v1) {
      case "hour":
        {
          let _v0 = _v0.hour,
            _v1 = 0,
            _v2 = 23;
          if ((null == _v3 ? void 0 : _v3.hourCycle) === 12) {
            let _v0 = _v0 >= 12;
            _v1 = 12 * !!_v0, _v2 = _v0 ? 23 : 11;
          }
          _v4.hour = _v19(_v0, _v2, _v1, _v2, null == _v3 ? void 0 : _v3.round);
          break;
        }
      case "minute":
        _v4.minute = _v19(_v0.minute, _v2, 0, 59, null == _v3 ? void 0 : _v3.round);
        break;
      case "second":
        _v4.second = _v19(_v0.second, _v2, 0, 59, null == _v3 ? void 0 : _v3.round);
        break;
      case "millisecond":
        _v4.millisecond = _v19(_v0.millisecond, _v2, 0, 999, null == _v3 ? void 0 : _v3.round);
        break;
      default:
        throw Error("Unsupported field " + _v1);
    }
    return _v4;
  }
  function _v19(_v0, _v1, _v2, _v3, _v4 = !1) {
    if (_v4) {
      (_v0 += Math.sign(_v1)) < _v2 && (_v0 = _v3);
      let _v0 = Math.abs(_v1);
      (_v0 = _v1 > 0 ? Math.ceil(_v0 / _v0) * _v0 : Math.floor(_v0 / _v0) * _v0) > _v3 && (_v0 = _v2);
    } else (_v0 += _v1) < _v2 ? _v0 = _v3 - (_v2 - _v0 - 1) : _v0 > _v3 && (_v0 = _v2 + (_v0 - _v3 - 1));
    return _v0;
  }
  function _v20(_v0, _v1) {
    let _v2;
    if (null != _v1.years && 0 !== _v1.years || null != _v1.months && 0 !== _v1.months || null != _v1.weeks && 0 !== _v1.weeks || null != _v1.days && 0 !== _v1.days) {
      let _v0 = _v3((0, _v1.toCalendarDateTime)(_v0), {
        years: _v1.years,
        months: _v1.months,
        weeks: _v1.weeks,
        days: _v1.days
      });
      _v2 = (0, _v1.toAbsolute)(_v0, _v0.timeZone);
    } else _v2 = (0, _v1.epochFromDate)(_v0) - _v0.offset;
    _v2 += _v1.milliseconds || 0, _v2 += 0 * (_v1.seconds || 0), _v2 += 0 * (_v1.minutes || 0), _v2 += 0 * (_v1.hours || 0);
    let _v3 = (0, _v1.fromAbsolute)(_v2, _v0.timeZone);
    return (0, _v1.toCalendar)(_v3, _v0.calendar);
  }
  function _v21(_v0, _v1) {
    return _v20(_v0, _v8(_v1));
  }
  function _v22(_v0, _v1, _v2, _v3) {
    switch (_v1) {
      case "hour":
        {
          let _v0 = 0,
            _v1 = 23;
          if ((null == _v3 ? void 0 : _v3.hourCycle) === 12) {
            let _v0 = _v0.hour >= 12;
            _v0 = 12 * !!_v0, _v1 = _v0 ? 23 : 11;
          }
          let _v2 = (0, _v1.toCalendarDateTime)(_v0),
            _v3 = (0, _v1.toCalendar)(_v11(_v2, {
              hour: _v0
            }), new (0, _v2.GregorianCalendar)()),
            _v4 = [(0, _v1.toAbsolute)(_v3, _v0.timeZone, "earlier"), (0, _v1.toAbsolute)(_v3, _v0.timeZone, "later")].filter(_v0 => (0, _v1.fromAbsolute)(_v0, _v0.timeZone).day === _v3.day)[0],
            _v5 = (0, _v1.toCalendar)(_v11(_v2, {
              hour: _v1
            }), new (0, _v2.GregorianCalendar)()),
            _v6 = [(0, _v1.toAbsolute)(_v5, _v0.timeZone, "earlier"), (0, _v1.toAbsolute)(_v5, _v0.timeZone, "later")].filter(_v0 => (0, _v1.fromAbsolute)(_v0, _v0.timeZone).day === _v5.day).pop(),
            _v7 = (0, _v1.epochFromDate)(_v0) - _v0.offset,
            _v8 = Math.floor(_v7 / 0),
            _v9 = _v7 % 0;
          return _v7 = 0 * _v19(_v8, _v2, Math.floor(_v4 / 0), Math.floor(_v6 / 0), null == _v3 ? void 0 : _v3.round) + _v9, (0, _v1.toCalendar)((0, _v1.fromAbsolute)(_v7, _v0.timeZone), _v0.calendar);
        }
      case "minute":
      case "second":
      case "millisecond":
        return _v18(_v0, _v1, _v2, _v3);
      case "era":
      case "year":
      case "month":
      case "day":
        {
          let _v0 = _v17((0, _v1.toCalendarDateTime)(_v0), _v1, _v2, _v3),
            _v1 = (0, _v1.toAbsolute)(_v0, _v0.timeZone);
          return (0, _v1.toCalendar)((0, _v1.fromAbsolute)(_v1, _v0.timeZone), _v0.calendar);
        }
      default:
        throw Error("Unsupported field " + _v1);
    }
  }
  function _v23(_v0, _v1, _v2) {
    let _v3 = (0, _v1.toCalendarDateTime)(_v0),
      _v4 = _v11(_v10(_v3, _v1), _v1);
    if (0 === _v4.compare(_v3)) return _v0;
    let _v5 = (0, _v1.toAbsolute)(_v4, _v0.timeZone, _v2);
    return (0, _v1.toCalendar)((0, _v1.fromAbsolute)(_v5, _v0.timeZone), _v0.calendar);
  }
  var _v24 = _v0.i(0);
  let _v25 = /^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    _v26 = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,
    _v27 = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    _v28 = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?)?\[(.*?)\]$/,
    _v29 = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/,
    _v30 = /^((?<negative>-)|\+)?P((?<years>\d*)Y)?((?<months>\d*)M)?((?<weeks>\d*)W)?((?<days>\d*)D)?((?<time>T)((?<hours>\d*[.,]?\d{1,9})H)?((?<minutes>\d*[.,]?\d{1,9})M)?((?<seconds>\d*[.,]?\d{1,9})S)?)?$/,
    _v31 = ["hours", "minutes", "seconds"],
    _v32 = ["years", "months", "weeks", "days", ..._v31];
  function _v33(_v0) {
    let _v1 = _v0.match(_v25);
    if (!_v1) throw Error("Invalid ISO 8601 time string: " + _v0);
    return new _v51(_v39(_v1[1], 0, 23), _v1[2] ? _v39(_v1[2], 0, 59) : 0, _v1[3] ? _v39(_v1[3], 0, 59) : 0, _v1[4] ? 0 * _v39(_v1[4], 0, 1 / 0) : 0);
  }
  function _v34(_v0) {
    let _v1 = _v0.match(_v26);
    if (!_v1) throw Error("Invalid ISO 8601 date string: " + _v0);
    let _v2 = new _v49(_v39(_v1[1], 0, 0), _v39(_v1[2], 1, 12), 1);
    return _v2.day = _v39(_v1[3], 1, _v2.calendar.getDaysInMonth(_v2)), _v2;
  }
  function _v35(_v0) {
    let _v1 = _v0.match(_v27);
    if (!_v1) throw Error("Invalid ISO 8601 date time string: " + _v0);
    let _v2 = _v39(_v1[1], 0, 0),
      _v3 = new _v53(_v2 < 1 ? "BC" : "AD", _v2 < 1 ? -_v2 + 1 : _v2, _v39(_v1[2], 1, 12), 1, _v1[4] ? _v39(_v1[4], 0, 23) : 0, _v1[5] ? _v39(_v1[5], 0, 59) : 0, _v1[6] ? _v39(_v1[6], 0, 59) : 0, _v1[7] ? 0 * _v39(_v1[7], 0, 1 / 0) : 0);
    return _v3.day = _v39(_v1[3], 0, _v3.calendar.getDaysInMonth(_v3)), _v3;
  }
  function _v36(_v0, _v1) {
    let _v2,
      _v3 = _v0.match(_v28);
    if (!_v3) throw Error("Invalid ISO 8601 date time string: " + _v0);
    let _v4 = _v39(_v3[1], 0, 0),
      _v5 = new _v55(_v4 < 1 ? "BC" : "AD", _v4 < 1 ? -_v4 + 1 : _v4, _v39(_v3[2], 1, 12), 1, _v3[10], 0, _v3[4] ? _v39(_v3[4], 0, 23) : 0, _v3[5] ? _v39(_v3[5], 0, 59) : 0, _v3[6] ? _v39(_v3[6], 0, 59) : 0, _v3[7] ? 0 * _v39(_v3[7], 0, 1 / 0) : 0);
    _v5.day = _v39(_v3[3], 0, _v5.calendar.getDaysInMonth(_v5));
    let _v6 = (0, _v1.toCalendarDateTime)(_v5);
    if (_v3[8]) {
      var _v7;
      if (_v5.offset = 0 * _v39(_v3[8], -23, 23) + 0 * _v39(null != (_v7 = _v3[9]) ? _v7 : "0", 0, 59), _v2 = (0, _v1.epochFromDate)(_v5) - _v5.offset, !(0, _v1.possibleAbsolutes)(_v6, _v5.timeZone).includes(_v2)) throw Error(`Offset ${_v43(_v5.offset)} is invalid for ${_v42(_v5)} in ${_v5.timeZone}`);
    } else _v2 = (0, _v1.toAbsolute)((0, _v1.toCalendarDateTime)(_v6), _v5.timeZone, _v1);
    return (0, _v1.fromAbsolute)(_v2, _v5.timeZone);
  }
  function _v37(_v0, _v1) {
    var _v2;
    let _v3 = _v0.match(_v29);
    if (!_v3) throw Error("Invalid ISO 8601 date time string: " + _v0);
    let _v4 = _v39(_v3[1], 0, 0),
      _v5 = new _v55(_v4 < 1 ? "BC" : "AD", _v4 < 1 ? -_v4 + 1 : _v4, _v39(_v3[2], 1, 12), 1, _v1, 0, _v3[4] ? _v39(_v3[4], 0, 23) : 0, _v3[5] ? _v39(_v3[5], 0, 59) : 0, _v3[6] ? _v39(_v3[6], 0, 59) : 0, _v3[7] ? 0 * _v39(_v3[7], 0, 1 / 0) : 0);
    return _v5.day = _v39(_v3[3], 0, _v5.calendar.getDaysInMonth(_v5)), _v3[8] && (_v5.offset = 0 * _v39(_v3[8], -23, 23) + 0 * _v39(null != (_v2 = _v3[9]) ? _v2 : "0", 0, 59)), (0, _v1.toTimeZone)(_v5, _v1);
  }
  function _v38(_v0) {
    return _v37(_v0, (0, _v24.getLocalTimeZone)());
  }
  function _v39(_v0, _v1, _v2) {
    let _v3 = Number(_v0);
    if (_v3 < _v1 || _v3 > _v2) throw RangeError(`Value out of range: ${_v1} <= ${_v3} <= ${_v2}`);
    return _v3;
  }
  function _v40(_v0) {
    return `${String(_v0.hour).padStart(2, "0")}:${String(_v0.minute).padStart(2, "0")}:${String(_v0.second).padStart(2, "0")}${_v0.millisecond ? String(_v0.millisecond / 0).slice(1) : ""}`;
  }
  function _v41(_v0) {
    let _v1,
      _v2 = (0, _v1.toCalendar)(_v0, new (0, _v2.GregorianCalendar)());
    return _v1 = "BC" === _v2.era ? 1 === _v2.year ? "0000" : "-" + String(Math.abs(1 - _v2.year)).padStart(6, "00") : String(_v2.year).padStart(4, "0"), `${_v1}-${String(_v2.month).padStart(2, "0")}-${String(_v2.day).padStart(2, "0")}`;
  }
  function _v42(_v0) {
    return `${_v41(_v0)}T${_v40(_v0)}`;
  }
  function _v43(_v0) {
    let _v1 = 0 > Math.sign(_v0) ? "-" : "+",
      _v2 = Math.floor((_v0 = Math.abs(_v0)) / 0),
      _v3 = _v0 % 0 / 0;
    return `${_v1}${String(_v2).padStart(2, "0")}:${String(_v3).padStart(2, "0")}`;
  }
  function _v44(_v0) {
    return `${_v42(_v0)}${_v43(_v0.offset)}[${_v0.timeZone}]`;
  }
  function _v45(_v0) {
    var _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9;
    let _v10 = _v0.match(_v30);
    if (!_v10) throw Error(`Invalid ISO 8601 Duration string: ${_v0}`);
    let _v11 = (_v0, _v1) => {
        if (!_v0) return 0;
        try {
          return (_v1 ? -1 : 1) * Number(_v0.replace(",", "."));
        } catch {
          throw Error(`Invalid ISO 8601 Duration string: ${_v0}`);
        }
      },
      _v12 = !!(null == (_v1 = _v10.groups) ? void 0 : _v1.negative);
    if (!_v32.some(_v0 => {
      var _v1;
      return null == (_v1 = _v10.groups) ? void 0 : _v1[_v0];
    }) || (null == (_v2 = _v10.groups) ? void 0 : _v2.time) && !_v31.some(_v0 => {
      var _v1;
      return null == (_v1 = _v10.groups) ? void 0 : _v1[_v0];
    })) throw Error(`Invalid ISO 8601 Duration string: ${_v0}`);
    let _v13 = {
      years: _v11(null == (_v3 = _v10.groups) ? void 0 : _v3.years, _v12),
      months: _v11(null == (_v4 = _v10.groups) ? void 0 : _v4.months, _v12),
      weeks: _v11(null == (_v5 = _v10.groups) ? void 0 : _v5.weeks, _v12),
      days: _v11(null == (_v6 = _v10.groups) ? void 0 : _v6.days, _v12),
      hours: _v11(null == (_v7 = _v10.groups) ? void 0 : _v7.hours, _v12),
      minutes: _v11(null == (_v8 = _v10.groups) ? void 0 : _v8.minutes, _v12),
      seconds: _v11(null == (_v9 = _v10.groups) ? void 0 : _v9.seconds, _v12)
    };
    if (void 0 !== _v13.hours && _v13.hours % 1 != 0 && (_v13.minutes || _v13.seconds) || void 0 !== _v13.minutes && _v13.minutes % 1 != 0 && _v13.seconds) throw Error(`Invalid ISO 8601 Duration string: ${_v0} - only the smallest unit can be fractional`);
    return _v13;
  }
  function _v46(_v0, _v1, _v2) {
    if (_v1.has(_v0)) throw TypeError("Cannot initialize the same private elements twice on an object");
    _v1.set(_v0, _v2);
  }
  function _v47(_v0) {
    let _v1,
      _v2 = "object" == typeof _v0[0] ? _v0.shift() : new (0, _v2.GregorianCalendar)();
    if ("string" == typeof _v0[0]) _v1 = _v0.shift();else {
      let _v0 = _v2.getEras();
      _v1 = _v0[_v0.length - 1];
    }
    return [_v2, _v1, _v0.shift(), _v0.shift(), _v0.shift()];
  }
  var _v48 = new WeakMap();
  class _v49 {
    copy() {
      return this.era ? new _v49(this.calendar, this.era, this.year, this.month, this.day) : new _v49(this.calendar, this.year, this.month, this.day);
    }
    add(_v0) {
      return _v3(this, _v0);
    }
    subtract(_v0) {
      return _v9(this, _v0);
    }
    set(_v0) {
      return _v10(this, _v0);
    }
    cycle(_v0, _v1, _v2) {
      return _v17(this, _v0, _v1, _v2);
    }
    toDate(_v0) {
      return (0, _v1.toDate)(this, _v0);
    }
    toString() {
      return _v41(this);
    }
    compare(_v0) {
      return (0, _v24.compareDate)(this, _v0);
    }
    constructor(..._v0) {
      _v46(this, _v48, {
        writable: !0,
        value: void 0
      });
      let [_v1, _v2, _v3, _v4, _v5] = _v47(_v0);
      this.calendar = _v1, this.era = _v2, this.year = _v3, this.month = _v4, this.day = _v5, _v7(this);
    }
  }
  var _v50 = new WeakMap();
  class _v51 {
    copy() {
      return new _v51(this.hour, this.minute, this.second, this.millisecond);
    }
    add(_v0) {
      return _v15(this, _v0);
    }
    subtract(_v0) {
      return _v16(this, _v0);
    }
    set(_v0) {
      return _v11(this, _v0);
    }
    cycle(_v0, _v1, _v2) {
      return _v18(this, _v0, _v1, _v2);
    }
    toString() {
      return _v40(this);
    }
    compare(_v0) {
      return (0, _v24.compareTime)(this, _v0);
    }
    constructor(_v0 = 0, _v1 = 0, _v2 = 0, _v3 = 0) {
      _v46(this, _v50, {
        writable: !0,
        value: void 0
      }), this.hour = _v0, this.minute = _v1, this.second = _v2, this.millisecond = _v3, _v12(this);
    }
  }
  var _v52 = new WeakMap();
  class _v53 {
    copy() {
      return this.era ? new _v53(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new _v53(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    add(_v0) {
      return _v3(this, _v0);
    }
    subtract(_v0) {
      return _v9(this, _v0);
    }
    set(_v0) {
      return _v10(_v11(this, _v0), _v0);
    }
    cycle(_v0, _v1, _v2) {
      switch (_v0) {
        case "era":
        case "year":
        case "month":
        case "day":
          return _v17(this, _v0, _v1, _v2);
        default:
          return _v18(this, _v0, _v1, _v2);
      }
    }
    toDate(_v0, _v1) {
      return (0, _v1.toDate)(this, _v0, _v1);
    }
    toString() {
      return _v42(this);
    }
    compare(_v0) {
      let _v1 = (0, _v24.compareDate)(this, _v0);
      return 0 === _v1 ? (0, _v24.compareTime)(this, (0, _v1.toCalendarDateTime)(_v0)) : _v1;
    }
    constructor(..._v0) {
      _v46(this, _v52, {
        writable: !0,
        value: void 0
      });
      let [_v1, _v2, _v3, _v4, _v5] = _v47(_v0);
      this.calendar = _v1, this.era = _v2, this.year = _v3, this.month = _v4, this.day = _v5, this.hour = _v0.shift() || 0, this.minute = _v0.shift() || 0, this.second = _v0.shift() || 0, this.millisecond = _v0.shift() || 0, _v7(this);
    }
  }
  var _v54 = new WeakMap();
  class _v55 {
    copy() {
      return this.era ? new _v55(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new _v55(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    add(_v0) {
      return _v20(this, _v0);
    }
    subtract(_v0) {
      return _v21(this, _v0);
    }
    set(_v0, _v1) {
      return _v23(this, _v0, _v1);
    }
    cycle(_v0, _v1, _v2) {
      return _v22(this, _v0, _v1, _v2);
    }
    toDate() {
      return (0, _v1.zonedToDate)(this);
    }
    toString() {
      return _v44(this);
    }
    toAbsoluteString() {
      return this.toDate().toISOString();
    }
    compare(_v0) {
      return this.toDate().getTime() - (0, _v1.toZoned)(_v0, this.timeZone).toDate().getTime();
    }
    constructor(..._v0) {
      _v46(this, _v54, {
        writable: !0,
        value: void 0
      });
      let [_v1, _v2, _v3, _v4, _v5] = _v47(_v0),
        _v6 = _v0.shift(),
        _v7 = _v0.shift();
      this.calendar = _v1, this.era = _v2, this.year = _v3, this.month = _v4, this.day = _v5, this.timeZone = _v6, this.offset = _v7, this.hour = _v0.shift() || 0, this.minute = _v0.shift() || 0, this.second = _v0.shift() || 0, this.millisecond = _v0.shift() || 0, _v7(this);
    }
  }
}