{
  "use strict";

  _v0.s(["DEFAULT_OPTIONS", () => _v85, "Days", () => _v84, "RRule", () => _v87, "defaultKeys", () => _v86], 0);
  var _v1,
    _v2,
    _v3 = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
    _v4 = function () {
      function _v0(_v0, _v1) {
        if (0 === _v1) throw Error("Can't create weekday with n == 0");
        this.weekday = _v0, this.n = _v1;
      }
      return _v0.fromStr = function (_v0) {
        return new _v0(_v3.indexOf(_v0));
      }, _v0.prototype.nth = function (_v0) {
        return this.n === _v0 ? this : new _v0(this.weekday, _v0);
      }, _v0.prototype.equals = function (_v0) {
        return this.weekday === _v0.weekday && this.n === _v0.n;
      }, _v0.prototype.toString = function () {
        var _v0 = _v3[this.weekday];
        return this.n && (_v0 = (this.n > 0 ? "+" : "") + String(this.n) + _v0), _v0;
      }, _v0.prototype.getJsWeekday = function () {
        return 6 === this.weekday ? 0 : this.weekday + 1;
      }, _v0;
    }(),
    _v5 = function (_v0) {
      return null != _v0;
    },
    _v6 = function (_v0) {
      return "number" == typeof _v0;
    },
    _v7 = function (_v0) {
      return "string" == typeof _v0 && _v3.includes(_v0);
    },
    _v8 = Array.isArray,
    _v9 = function (_v0, _v1) {
      void 0 === _v1 && (_v1 = _v0), 1 == arguments.length && (_v1 = _v0, _v0 = 0);
      for (var _v2 = [], _v3 = _v0; _v3 < _v1; _v3++) _v2.push(_v3);
      return _v2;
    },
    _v10 = function (_v0, _v1) {
      var _v2 = 0,
        _v3 = [];
      if (_v8(_v0)) for (; _v2 < _v1; _v2++) _v3[_v2] = [].concat(_v0);else for (; _v2 < _v1; _v2++) _v3[_v2] = _v0;
      return _v3;
    };
  function _v11(_v0, _v1, _v2) {
    void 0 === _v2 && (_v2 = " ");
    var _v3 = String(_v0);
    return (_v1 |= 0, _v3.length > _v1) ? String(_v3) : ((_v1 -= _v3.length) > _v2.length && (_v2 += _v10(_v2, _v1 / _v2.length)), _v2.slice(0, _v1) + String(_v3));
  }
  var _v12 = function (_v0, _v1, _v2) {
      var _v3 = _v0.split(_v1);
      return _v2 ? _v3.slice(0, _v2).concat([_v3.slice(_v2).join(_v1)]) : _v3;
    },
    _v13 = function (_v0, _v1) {
      var _v2 = _v0 % _v1;
      return _v2 * _v1 < 0 ? _v2 + _v1 : _v2;
    },
    _v14 = function (_v0, _v1) {
      return {
        div: Math.floor(_v0 / _v1),
        mod: _v13(_v0, _v1)
      };
    },
    _v15 = function (_v0) {
      return !_v5(_v0) || 0 === _v0.length;
    },
    _v16 = function (_v0) {
      return !_v15(_v0);
    },
    _v17 = function (_v0, _v1) {
      return _v16(_v0) && -1 !== _v0.indexOf(_v1);
    },
    _v18 = function (_v0, _v1, _v2, _v3, _v4, _v5) {
      return void 0 === _v3 && (_v3 = 0), void 0 === _v4 && (_v4 = 0), void 0 === _v5 && (_v5 = 0), new Date(Date.UTC(_v0, _v1 - 1, _v2, _v3, _v4, _v5));
    },
    _v19 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    _v20 = _v18(0, 1, 1),
    _v21 = [6, 0, 1, 2, 3, 4, 5],
    _v22 = function (_v0) {
      return _v0 % 4 == 0 && _v0 % 100 != 0 || _v0 % 400 == 0;
    },
    _v23 = function (_v0) {
      return _v0 instanceof Date;
    },
    _v24 = function (_v0) {
      return _v23(_v0) && !isNaN(_v0.getTime());
    },
    _v25 = function (_v0) {
      return 60 * _v0.getTimezoneOffset() * 0;
    },
    _v26 = function (_v0) {
      var _v1, _v2;
      return _v1 = _v0, _v2 = _v20, Math.round((_v1.getTime() - _v25(_v1) - (_v2.getTime() - _v25(_v2))) / 0);
    },
    _v27 = function (_v0) {
      return new Date(_v20.getTime() + 0 * _v0);
    },
    _v28 = function (_v0) {
      var _v1 = _v0.getUTCMonth();
      return 1 === _v1 && _v22(_v0.getUTCFullYear()) ? 29 : _v19[_v1];
    },
    _v29 = function (_v0) {
      return _v21[_v0.getUTCDay()];
    },
    _v30 = function (_v0, _v1) {
      var _v2 = _v18(_v0, _v1 + 1, 1);
      return [_v29(_v2), _v28(_v2)];
    },
    _v31 = function (_v0, _v1) {
      return _v1 = _v1 || _v0, new Date(Date.UTC(_v0.getUTCFullYear(), _v0.getUTCMonth(), _v0.getUTCDate(), _v1.getHours(), _v1.getMinutes(), _v1.getSeconds(), _v1.getMilliseconds()));
    },
    _v32 = function (_v0) {
      return new Date(_v0.getTime());
    },
    _v33 = function (_v0) {
      for (var _v1 = [], _v2 = 0; _v2 < _v0.length; _v2++) _v1.push(_v32(_v0[_v2]));
      return _v1;
    },
    _v34 = function (_v0) {
      _v0.sort(function (_v0, _v1) {
        return _v0.getTime() - _v1.getTime();
      });
    },
    _v35 = function (_v0, _v1) {
      void 0 === _v1 && (_v1 = !0);
      var _v2 = new Date(_v0);
      return "" + _v11(_v2.getUTCFullYear().toString(), 4, "0") + _v11(_v2.getUTCMonth() + 1, 2, "0") + _v11(_v2.getUTCDate(), 2, "0") + "T" + _v11(_v2.getUTCHours(), 2, "0") + _v11(_v2.getUTCMinutes(), 2, "0") + _v11(_v2.getUTCSeconds(), 2, "0") + (_v1 ? "Z" : "");
    },
    _v36 = function (_v0) {
      var _v1 = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(_v0);
      if (!_v1) throw Error("Invalid UNTIL value: ".concat(_v0));
      return new Date(Date.UTC(parseInt(_v1[1], 10), parseInt(_v1[2], 10) - 1, parseInt(_v1[3], 10), parseInt(_v1[5], 10) || 0, parseInt(_v1[6], 10) || 0, parseInt(_v1[7], 10) || 0));
    },
    _v37 = function (_v0, _v1) {
      return _v0.toLocaleString("sv-SE", {
        timeZone: _v1
      }).replace(" ", "T") + "Z";
    },
    _v38 = function (_v0, _v1) {
      var _v2 = new Date(_v37(_v0, Intl.DateTimeFormat().resolvedOptions().timeZone)),
        _v3 = new Date(_v37(_v0, null != _v1 ? _v1 : "UTC")).getTime() - _v2.getTime();
      return new Date(_v0.getTime() - _v3);
    },
    _v39 = function () {
      function _v0(_v0, _v1) {
        this.minDate = null, this.maxDate = null, this._result = [], this.total = 0, this.method = _v0, this.args = _v1, "between" === _v0 ? (this.maxDate = _v1.inc ? _v1.before : new Date(_v1.before.getTime() - 1), this.minDate = _v1.inc ? _v1.after : new Date(_v1.after.getTime() + 1)) : "before" === _v0 ? this.maxDate = _v1.inc ? _v1.dt : new Date(_v1.dt.getTime() - 1) : "after" === _v0 && (this.minDate = _v1.inc ? _v1.dt : new Date(_v1.dt.getTime() + 1));
      }
      return _v0.prototype.accept = function (_v0) {
        ++this.total;
        var _v1 = this.minDate && _v0 < this.minDate,
          _v2 = this.maxDate && _v0 > this.maxDate;
        if ("between" === this.method) {
          if (_v1) return !0;
          if (_v2) return !1;
        } else if ("before" === this.method) {
          if (_v2) return !1;
        } else if ("after" === this.method) return !!_v1 || (this.add(_v0), !1);
        return this.add(_v0);
      }, _v0.prototype.add = function (_v0) {
        return this._result.push(_v0), !0;
      }, _v0.prototype.getValue = function () {
        var _v0 = this._result;
        switch (this.method) {
          case "all":
          case "between":
            return _v0;
          default:
            return _v0.length ? _v0[_v0.length - 1] : null;
        }
      }, _v0.prototype.clone = function () {
        return new _v0(this.method, this.args);
      }, _v0;
    }(),
    _v40 = _v0.i(0),
    _v41 = function (_v0) {
      function _v1(_v0, _v1, _v2) {
        var _v3 = _v0.call(this, _v0, _v1) || this;
        return _v3.iterator = _v2, _v3;
      }
      return (0, _v40.__extends)(_v1, _v0), _v1.prototype.add = function (_v0) {
        return !!this.iterator(_v0, this._result.length) && (this._result.push(_v0), !0);
      }, _v1;
    }(_v39);
  let _v42 = {
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    tokens: {
      SKIP: /^[ \r\n\t]+|^\.$/,
      number: /^[1-9][0-9]*/,
      numberAsText: /^(one|two|three)/i,
      every: /^every/i,
      "day(s)": /^days?/i,
      "weekday(s)": /^weekdays?/i,
      "week(s)": /^weeks?/i,
      "hour(s)": /^hours?/i,
      "minute(s)": /^minutes?/i,
      "month(s)": /^months?/i,
      "year(s)": /^years?/i,
      on: /^(on|in)/i,
      at: /^(at)/i,
      the: /^the/i,
      first: /^first/i,
      second: /^second/i,
      third: /^third/i,
      nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
      last: /^last/i,
      for: /^for/i,
      "time(s)": /^times?/i,
      until: /^(un)?til/i,
      monday: /^mo(n(day)?)?/i,
      tuesday: /^tu(e(s(day)?)?)?/i,
      wednesday: /^we(d(n(esday)?)?)?/i,
      thursday: /^th(u(r(sday)?)?)?/i,
      friday: /^fr(i(day)?)?/i,
      saturday: /^sa(t(urday)?)?/i,
      sunday: /^su(n(day)?)?/i,
      january: /^jan(uary)?/i,
      february: /^feb(ruary)?/i,
      march: /^mar(ch)?/i,
      april: /^apr(il)?/i,
      may: /^may/i,
      june: /^june?/i,
      july: /^july?/i,
      august: /^aug(ust)?/i,
      september: /^sep(t(ember)?)?/i,
      october: /^oct(ober)?/i,
      november: /^nov(ember)?/i,
      december: /^dec(ember)?/i,
      comma: /^(,\s*|(and|or)\s*)+/i
    }
  };
  var _v43 = function (_v0, _v1) {
      return -1 !== _v0.indexOf(_v1);
    },
    _v44 = function (_v0) {
      return _v0.toString();
    },
    _v45 = function (_v0, _v1, _v2) {
      return "".concat(_v1, " ").concat(_v2, ", ").concat(_v0);
    },
    _v46 = function () {
      function _v0(_v0, _v1, _v2, _v3) {
        if (void 0 === _v1 && (_v1 = _v44), void 0 === _v2 && (_v2 = _v42), void 0 === _v3 && (_v3 = _v45), this.text = [], this.language = _v2 || _v42, this.gettext = _v1, this.dateFormatter = _v3, this.rrule = _v0, this.options = _v0.options, this.origOptions = _v0.origOptions, this.origOptions.bymonthday) {
          var _v4 = [].concat(this.options.bymonthday),
            _v5 = [].concat(this.options.bynmonthday);
          _v4.sort(function (_v0, _v1) {
            return _v0 - _v1;
          }), _v5.sort(function (_v0, _v1) {
            return _v1 - _v0;
          }), this.bymonthday = _v4.concat(_v5), this.bymonthday.length || (this.bymonthday = null);
        }
        if (_v5(this.origOptions.byweekday)) {
          var _v6 = _v8(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
            _v7 = String(_v6);
          this.byweekday = {
            allWeeks: _v6.filter(function (_v0) {
              return !_v0.n;
            }),
            someWeeks: _v6.filter(function (_v0) {
              return !!_v0.n;
            }),
            isWeekdays: -1 !== _v7.indexOf("MO") && -1 !== _v7.indexOf("TU") && -1 !== _v7.indexOf("WE") && -1 !== _v7.indexOf("TH") && -1 !== _v7.indexOf("FR") && -1 === _v7.indexOf("SA") && -1 === _v7.indexOf("SU"),
            isEveryDay: -1 !== _v7.indexOf("MO") && -1 !== _v7.indexOf("TU") && -1 !== _v7.indexOf("WE") && -1 !== _v7.indexOf("TH") && -1 !== _v7.indexOf("FR") && -1 !== _v7.indexOf("SA") && -1 !== _v7.indexOf("SU")
          };
          var _v8 = function (_v0, _v1) {
            return _v0.weekday - _v1.weekday;
          };
          this.byweekday.allWeeks.sort(_v8), this.byweekday.someWeeks.sort(_v8), this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null), this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
        } else this.byweekday = null;
      }
      return _v0.isFullyConvertible = function (_v0) {
        if (!(_v0.options.freq in _v0.IMPLEMENTED) || _v0.origOptions.until && _v0.origOptions.count) return !1;
        for (var _v1 in _v0.origOptions) {
          if (_v43(["dtstart", "wkst", "freq"], _v1)) break;
          if (!_v43(_v0.IMPLEMENTED[_v0.options.freq], _v1)) return !1;
        }
        return !0;
      }, _v0.prototype.isFullyConvertible = function () {
        return _v0.isFullyConvertible(this.rrule);
      }, _v0.prototype.toString = function () {
        var _v0 = this.gettext;
        if (!(this.options.freq in _v0.IMPLEMENTED)) return _v0("RRule error: Unable to fully convert this rrule to text");
        if (this.text = [_v0("every")], this[_v87.FREQUENCIES[this.options.freq]](), this.options.until) {
          this.add(_v0("until"));
          var _v1 = this.options.until;
          this.add(this.dateFormatter(_v1.getUTCFullYear(), this.language.monthNames[_v1.getUTCMonth()], _v1.getUTCDate()));
        } else this.options.count && this.add(_v0("for")).add(this.options.count.toString()).add(_v0(this.plural(this.options.count) ? "times" : "time"));
        return this.isFullyConvertible() || this.add(_v0("(~ approximate)")), this.text.join("");
      }, _v0.prototype.HOURLY = function () {
        var _v0 = this.gettext;
        1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(_v0(this.plural(this.options.interval) ? "hours" : "hour"));
      }, _v0.prototype.MINUTELY = function () {
        var _v0 = this.gettext;
        1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(_v0(this.plural(this.options.interval) ? "minutes" : "minute"));
      }, _v0.prototype.DAILY = function () {
        var _v0 = this.gettext;
        1 !== this.options.interval && this.add(this.options.interval.toString()), this.byweekday && this.byweekday.isWeekdays ? this.add(_v0(this.plural(this.options.interval) ? "weekdays" : "weekday")) : this.add(_v0(this.plural(this.options.interval) ? "days" : "day")), this.origOptions.bymonth && (this.add(_v0("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday ? this._byweekday() : this.origOptions.byhour && this._byhour();
      }, _v0.prototype.WEEKLY = function () {
        var _v0 = this.gettext;
        1 !== this.options.interval && this.add(this.options.interval.toString()).add(_v0(this.plural(this.options.interval) ? "weeks" : "week")), this.byweekday && this.byweekday.isWeekdays ? 1 === this.options.interval ? this.add(_v0(this.plural(this.options.interval) ? "weekdays" : "weekday")) : this.add(_v0("on")).add(_v0("weekdays")) : this.byweekday && this.byweekday.isEveryDay ? this.add(_v0(this.plural(this.options.interval) ? "days" : "day")) : (1 === this.options.interval && this.add(_v0("week")), this.origOptions.bymonth && (this.add(_v0("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday());
      }, _v0.prototype.MONTHLY = function () {
        var _v0 = this.gettext;
        this.origOptions.bymonth ? (1 !== this.options.interval && (this.add(this.options.interval.toString()).add(_v0("months")), this.plural(this.options.interval) && this.add(_v0("in"))), this._bymonth()) : (1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(_v0(this.plural(this.options.interval) ? "months" : "month"))), this.bymonthday ? this._bymonthday() : this.byweekday && this.byweekday.isWeekdays ? this.add(_v0("on")).add(_v0("weekdays")) : this.byweekday && this._byweekday();
      }, _v0.prototype.YEARLY = function () {
        var _v0 = this.gettext;
        this.origOptions.bymonth ? (1 !== this.options.interval && (this.add(this.options.interval.toString()), this.add(_v0("years"))), this._bymonth()) : (1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(_v0(this.plural(this.options.interval) ? "years" : "year"))), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.options.byyearday && this.add(_v0("on the")).add(this.list(this.options.byyearday, this.nth, _v0("and"))).add(_v0("day")), this.options.byweekno && this.add(_v0("in")).add(_v0(this.plural(this.options.byweekno.length) ? "weeks" : "week")).add(this.list(this.options.byweekno, void 0, _v0("and")));
      }, _v0.prototype._bymonthday = function () {
        var _v0 = this.gettext;
        this.byweekday && this.byweekday.allWeeks ? this.add(_v0("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, _v0("or"))).add(_v0("the")).add(this.list(this.bymonthday, this.nth, _v0("or"))) : this.add(_v0("on the")).add(this.list(this.bymonthday, this.nth, _v0("and")));
      }, _v0.prototype._byweekday = function () {
        var _v0 = this.gettext;
        this.byweekday.allWeeks && !this.byweekday.isWeekdays && this.add(_v0("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)), this.byweekday.someWeeks && (this.byweekday.allWeeks && this.add(_v0("and")), this.add(_v0("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, _v0("and"))));
      }, _v0.prototype._byhour = function () {
        var _v0 = this.gettext;
        this.add(_v0("at")).add(this.list(this.origOptions.byhour, void 0, _v0("and")));
      }, _v0.prototype._bymonth = function () {
        this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
      }, _v0.prototype.nth = function (_v0) {
        _v0 = parseInt(_v0.toString(), 10);
        var _v1,
          _v2 = this.gettext;
        if (-1 === _v0) return _v2("last");
        var _v3 = Math.abs(_v0);
        switch (_v3) {
          case 1:
          case 21:
          case 31:
            _v1 = _v3 + _v2("st");
            break;
          case 2:
          case 22:
            _v1 = _v3 + _v2("nd");
            break;
          case 3:
          case 23:
            _v1 = _v3 + _v2("rd");
            break;
          default:
            _v1 = _v3 + _v2("th");
        }
        return _v0 < 0 ? _v1 + " " + _v2("last") : _v1;
      }, _v0.prototype.monthtext = function (_v0) {
        return this.language.monthNames[_v0 - 1];
      }, _v0.prototype.weekdaytext = function (_v0) {
        var _v1 = _v6(_v0) ? (_v0 + 1) % 7 : _v0.getJsWeekday();
        return (_v0.n ? this.nth(_v0.n) + " " : "") + this.language.dayNames[_v1];
      }, _v0.prototype.plural = function (_v0) {
        return _v0 % 100 != 1;
      }, _v0.prototype.add = function (_v0) {
        return this.text.push(" "), this.text.push(_v0), this;
      }, _v0.prototype.list = function (_v0, _v1, _v2, _v3) {
        var _v4 = this;
        void 0 === _v3 && (_v3 = ","), _v8(_v0) || (_v0 = [_v0]), _v1 = _v1 || function (_v0) {
          return _v0.toString();
        };
        var _v5 = function (_v0) {
          return _v1 && _v1.call(_v4, _v0);
        };
        if (!_v2) return _v0.map(_v5).join(_v3 + " ");
        for (var _v6 = _v0.map(_v5), _v7 = _v3, _v8 = "", _v9 = 0; _v9 < _v6.length; _v9++) 0 !== _v9 && (_v9 === _v6.length - 1 ? _v8 += " " + _v2 + " " : _v8 += _v7 + " "), _v8 += _v6[_v9];
        return _v8;
      }, _v0;
    }(),
    _v47 = function () {
      function _v0(_v0) {
        this.done = !0, this.rules = _v0;
      }
      return _v0.prototype.start = function (_v0) {
        return this.text = _v0, this.done = !1, this.nextSymbol();
      }, _v0.prototype.isDone = function () {
        return this.done && null === this.symbol;
      }, _v0.prototype.nextSymbol = function () {
        this.symbol = null, this.value = null;
        do {
          if (this.done) return !1;
          for (var _v0 in _v1 = null, this.rules) {
            var _v1,
              _v2,
              _v3 = this.rules[_v0].exec(this.text);
            _v3 && (null === _v1 || _v3[0].length > _v1[0].length) && (_v1 = _v3, _v2 = _v0);
          }
          if (null != _v1 && (this.text = this.text.substr(_v1[0].length), "" === this.text && (this.done = !0)), null == _v1) {
            this.done = !0, this.symbol = null, this.value = null;
            return;
          }
        } while ("SKIP" === _v2);
        return this.symbol = _v2, this.value = _v1, !0;
      }, _v0.prototype.accept = function (_v0) {
        if (this.symbol === _v0) {
          if (this.value) {
            var _v1 = this.value;
            return this.nextSymbol(), _v1;
          }
          return this.nextSymbol(), !0;
        }
        return !1;
      }, _v0.prototype.acceptNumber = function () {
        return this.accept("number");
      }, _v0.prototype.expect = function (_v0) {
        if (this.accept(_v0)) return !0;
        throw Error("expected " + _v0 + " but found " + this.symbol);
      }, _v0;
    }();
  function _v48(_v0, _v1) {
    void 0 === _v1 && (_v1 = _v42);
    var _v2 = {},
      _v3 = new _v47(_v1.tokens);
    if (!_v3.start(_v0)) return null;
    return function () {
      _v3.expect("every");
      var _v0 = _v3.acceptNumber();
      if (_v0 && (_v2.interval = parseInt(_v0[0], 10)), _v3.isDone()) throw Error("Unexpected end");
      switch (_v3.symbol) {
        case "day(s)":
          _v2.freq = _v87.DAILY, _v3.nextSymbol() && (function () {
            if (_v3.accept("at")) do {
              var _v0 = _v3.acceptNumber();
              if (!_v0) throw Error("Unexpected symbol " + _v3.symbol + ", expected hour");
              for (_v2.byhour = [parseInt(_v0[0], 10)]; _v3.accept("comma");) {
                if (!(_v0 = _v3.acceptNumber())) throw Error("Unexpected symbol " + _v3.symbol + "; expected hour");
                _v2.byhour.push(parseInt(_v0[0], 10));
              }
            } while (_v3.accept("comma") || _v3.accept("at"));
          }(), _v8());
          break;
        case "weekday(s)":
          _v2.freq = _v87.WEEKLY, _v2.byweekday = [_v87.MO, _v87.TU, _v87.WE, _v87.TH, _v87.FR], _v3.nextSymbol(), _v8();
          break;
        case "week(s)":
          _v2.freq = _v87.WEEKLY, _v3.nextSymbol() && (_v4(), _v8());
          break;
        case "hour(s)":
          _v2.freq = _v87.HOURLY, _v3.nextSymbol() && (_v4(), _v8());
          break;
        case "minute(s)":
          _v2.freq = _v87.MINUTELY, _v3.nextSymbol() && (_v4(), _v8());
          break;
        case "month(s)":
          _v2.freq = _v87.MONTHLY, _v3.nextSymbol() && (_v4(), _v8());
          break;
        case "year(s)":
          _v2.freq = _v87.YEARLY, _v3.nextSymbol() && (_v4(), _v8());
          break;
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
        case "saturday":
        case "sunday":
          if (_v2.freq = _v87.WEEKLY, _v2.byweekday = [_v87[_v3.symbol.substr(0, 2).toUpperCase()]], !_v3.nextSymbol()) return;
          for (; _v3.accept("comma");) {
            if (_v3.isDone()) throw Error("Unexpected end");
            var _v1 = _v6();
            if (!_v1) throw Error("Unexpected symbol " + _v3.symbol + ", expected weekday");
            _v2.byweekday.push(_v87[_v1]), _v3.nextSymbol();
          }
          (function () {
            _v3.accept("on"), _v3.accept("the");
            var _v0 = _v7();
            if (_v0) for (_v2.bymonthday = [_v0], _v3.nextSymbol(); _v3.accept("comma");) {
              if (!(_v0 = _v7())) throw Error("Unexpected symbol " + _v3.symbol + "; expected monthday");
              _v2.bymonthday.push(_v0), _v3.nextSymbol();
            }
          })(), _v8();
          break;
        case "january":
        case "february":
        case "march":
        case "april":
        case "may":
        case "june":
        case "july":
        case "august":
        case "september":
        case "october":
        case "november":
        case "december":
          if (_v2.freq = _v87.YEARLY, _v2.bymonth = [_v5()], !_v3.nextSymbol()) return;
          for (; _v3.accept("comma");) {
            if (_v3.isDone()) throw Error("Unexpected end");
            var _v2 = _v5();
            if (!_v2) throw Error("Unexpected symbol " + _v3.symbol + ", expected month");
            _v2.bymonth.push(_v2), _v3.nextSymbol();
          }
          _v4(), _v8();
          break;
        default:
          throw Error("Unknown symbol");
      }
    }(), _v2;
    function _v4() {
      var _v0 = _v3.accept("on"),
        _v1 = _v3.accept("the");
      if (_v0 || _v1) do {
        var _v2 = _v7(),
          _v3 = _v6(),
          _v4 = _v5();
        if (_v2) _v3 ? (_v3.nextSymbol(), _v2.byweekday || (_v2.byweekday = []), _v2.byweekday.push(_v87[_v3].nth(_v2))) : (_v2.bymonthday || (_v2.bymonthday = []), _v2.bymonthday.push(_v2), _v3.accept("day(s)"));else if (_v3) _v3.nextSymbol(), _v2.byweekday || (_v2.byweekday = []), _v2.byweekday.push(_v87[_v3]);else if ("weekday(s)" === _v3.symbol) _v3.nextSymbol(), _v2.byweekday || (_v2.byweekday = [_v87.MO, _v87.TU, _v87.WE, _v87.TH, _v87.FR]);else if ("week(s)" === _v3.symbol) {
          _v3.nextSymbol();
          var _v5 = _v3.acceptNumber();
          if (!_v5) throw Error("Unexpected symbol " + _v3.symbol + ", expected week number");
          for (_v2.byweekno = [parseInt(_v5[0], 10)]; _v3.accept("comma");) {
            if (!(_v5 = _v3.acceptNumber())) throw Error("Unexpected symbol " + _v3.symbol + "; expected monthday");
            _v2.byweekno.push(parseInt(_v5[0], 10));
          }
        } else {
          if (!_v4) return;
          _v3.nextSymbol(), _v2.bymonth || (_v2.bymonth = []), _v2.bymonth.push(_v4);
        }
      } while (_v3.accept("comma") || _v3.accept("the") || _v3.accept("on"));
    }
    function _v5() {
      switch (_v3.symbol) {
        case "january":
          return 1;
        case "february":
          return 2;
        case "march":
          return 3;
        case "april":
          return 4;
        case "may":
          return 5;
        case "june":
          return 6;
        case "july":
          return 7;
        case "august":
          return 8;
        case "september":
          return 9;
        case "october":
          return 10;
        case "november":
          return 11;
        case "december":
          return 12;
        default:
          return !1;
      }
    }
    function _v6() {
      switch (_v3.symbol) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
        case "saturday":
        case "sunday":
          return _v3.symbol.substr(0, 2).toUpperCase();
        default:
          return !1;
      }
    }
    function _v7() {
      switch (_v3.symbol) {
        case "last":
          return _v3.nextSymbol(), -1;
        case "first":
          return _v3.nextSymbol(), 1;
        case "second":
          return _v3.nextSymbol(), _v3.accept("last") ? -2 : 2;
        case "third":
          return _v3.nextSymbol(), _v3.accept("last") ? -3 : 3;
        case "nth":
          var _v0 = parseInt(_v3.value[1], 10);
          if (_v0 < -366 || _v0 > 366) throw Error("Nth out of range: " + _v0);
          return _v3.nextSymbol(), _v3.accept("last") ? -_v0 : _v0;
        default:
          return !1;
      }
    }
    function _v8() {
      if ("until" === _v3.symbol) {
        var _v0 = Date.parse(_v3.text);
        if (!_v0) throw Error("Cannot parse until date:" + _v3.text);
        _v2.until = new Date(_v0);
      } else _v3.accept("for") && (_v2.count = parseInt(_v3.value[0], 10), _v3.expect("number"));
    }
  }
  function _v49(_v0) {
    return _v0 < _v2.HOURLY;
  }
  (_v1 = _v2 || (_v2 = {}))[_v1.YEARLY = 0] = "YEARLY", _v1[_v1.MONTHLY = 1] = "MONTHLY", _v1[_v1.WEEKLY = 2] = "WEEKLY", _v1[_v1.DAILY = 3] = "DAILY", _v1[_v1.HOURLY = 4] = "HOURLY", _v1[_v1.MINUTELY = 5] = "MINUTELY", _v1[_v1.SECONDLY = 6] = "SECONDLY";
  var _v50 = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
  _v46.IMPLEMENTED = [], _v46.IMPLEMENTED[_v2.HOURLY] = _v50, _v46.IMPLEMENTED[_v2.MINUTELY] = _v50, _v46.IMPLEMENTED[_v2.DAILY] = ["byhour"].concat(_v50), _v46.IMPLEMENTED[_v2.WEEKLY] = _v50, _v46.IMPLEMENTED[_v2.MONTHLY] = _v50, _v46.IMPLEMENTED[_v2.YEARLY] = ["byweekno", "byyearday"].concat(_v50);
  var _v51 = _v46.isFullyConvertible,
    _v52 = function () {
      function _v0(_v0, _v1, _v2, _v3) {
        this.hour = _v0, this.minute = _v1, this.second = _v2, this.millisecond = _v3 || 0;
      }
      return _v0.prototype.getHours = function () {
        return this.hour;
      }, _v0.prototype.getMinutes = function () {
        return this.minute;
      }, _v0.prototype.getSeconds = function () {
        return this.second;
      }, _v0.prototype.getMilliseconds = function () {
        return this.millisecond;
      }, _v0.prototype.getTime = function () {
        return (60 * this.hour * 60 + 60 * this.minute + this.second) * 0 + this.millisecond;
      }, _v0;
    }(),
    _v53 = function (_v0) {
      function _v1(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
        var _v7 = _v0.call(this, _v3, _v4, _v5, _v6) || this;
        return _v7.year = _v0, _v7.month = _v1, _v7.day = _v2, _v7;
      }
      return (0, _v40.__extends)(_v1, _v0), _v1.fromDate = function (_v0) {
        return new this(_v0.getUTCFullYear(), _v0.getUTCMonth() + 1, _v0.getUTCDate(), _v0.getUTCHours(), _v0.getUTCMinutes(), _v0.getUTCSeconds(), _v0.valueOf() % 0);
      }, _v1.prototype.getWeekday = function () {
        return _v29(new Date(this.getTime()));
      }, _v1.prototype.getTime = function () {
        return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
      }, _v1.prototype.getDay = function () {
        return this.day;
      }, _v1.prototype.getMonth = function () {
        return this.month;
      }, _v1.prototype.getYear = function () {
        return this.year;
      }, _v1.prototype.addYears = function (_v0) {
        this.year += _v0;
      }, _v1.prototype.addMonths = function (_v0) {
        if (this.month += _v0, this.month > 12) {
          var _v1 = Math.floor(this.month / 12),
            _v2 = _v13(this.month, 12);
          this.month = _v2, this.year += _v1, 0 === this.month && (this.month = 12, --this.year);
        }
      }, _v1.prototype.addWeekly = function (_v0, _v1) {
        _v1 > this.getWeekday() ? this.day += -(this.getWeekday() + 1 + (6 - _v1)) + 7 * _v0 : this.day += -(this.getWeekday() - _v1) + 7 * _v0, this.fixDay();
      }, _v1.prototype.addDaily = function (_v0) {
        this.day += _v0, this.fixDay();
      }, _v1.prototype.addHours = function (_v0, _v1, _v2) {
        for (_v1 && (this.hour += Math.floor((23 - this.hour) / _v0) * _v0);;) {
          this.hour += _v0;
          var _v3 = _v14(this.hour, 24),
            _v4 = _v3.div,
            _v5 = _v3.mod;
          if (_v4 && (this.hour = _v5, this.addDaily(_v4)), _v15(_v2) || _v17(_v2, this.hour)) break;
        }
      }, _v1.prototype.addMinutes = function (_v0, _v1, _v2, _v3) {
        for (_v1 && (this.minute += Math.floor((0 - (60 * this.hour + this.minute)) / _v0) * _v0);;) {
          this.minute += _v0;
          var _v4 = _v14(this.minute, 60),
            _v5 = _v4.div,
            _v6 = _v4.mod;
          if (_v5 && (this.minute = _v6, this.addHours(_v5, !1, _v2)), (_v15(_v2) || _v17(_v2, this.hour)) && (_v15(_v3) || _v17(_v3, this.minute))) break;
        }
      }, _v1.prototype.addSeconds = function (_v0, _v1, _v2, _v3, _v4) {
        for (_v1 && (this.second += Math.floor((0 - (0 * this.hour + 60 * this.minute + this.second)) / _v0) * _v0);;) {
          this.second += _v0;
          var _v5 = _v14(this.second, 60),
            _v6 = _v5.div,
            _v7 = _v5.mod;
          if (_v6 && (this.second = _v7, this.addMinutes(_v6, !1, _v2, _v3)), (_v15(_v2) || _v17(_v2, this.hour)) && (_v15(_v3) || _v17(_v3, this.minute)) && (_v15(_v4) || _v17(_v4, this.second))) break;
        }
      }, _v1.prototype.fixDay = function () {
        if (!(this.day <= 28)) {
          var _v0 = _v30(this.year, this.month - 1)[1];
          if (!(this.day <= _v0)) for (; this.day > _v0;) {
            if (this.day -= _v0, ++this.month, 13 === this.month && (this.month = 1, ++this.year, this.year > 0)) return;
            _v0 = _v30(this.year, this.month - 1)[1];
          }
        }
      }, _v1.prototype.add = function (_v0, _v1) {
        var _v2 = _v0.freq,
          _v3 = _v0.interval,
          _v4 = _v0.wkst,
          _v5 = _v0.byhour,
          _v6 = _v0.byminute,
          _v7 = _v0.bysecond;
        switch (_v2) {
          case _v2.YEARLY:
            return this.addYears(_v3);
          case _v2.MONTHLY:
            return this.addMonths(_v3);
          case _v2.WEEKLY:
            return this.addWeekly(_v3, _v4);
          case _v2.DAILY:
            return this.addDaily(_v3);
          case _v2.HOURLY:
            return this.addHours(_v3, _v1, _v5);
          case _v2.MINUTELY:
            return this.addMinutes(_v3, _v1, _v5, _v6);
          case _v2.SECONDLY:
            return this.addSeconds(_v3, _v1, _v5, _v6, _v7);
        }
      }, _v1;
    }(_v52);
  function _v54(_v0) {
    for (var _v1 = [], _v2 = Object.keys(_v0), _v3 = 0; _v3 < _v2.length; _v3++) {
      var _v4 = _v2[_v3];
      _v17(_v86, _v4) || _v1.push(_v4), _v23(_v0[_v4]) && !_v24(_v0[_v4]) && _v1.push(_v4);
    }
    if (_v1.length) throw Error("Invalid options: " + _v1.join(", "));
    return (0, _v40.__assign)({}, _v0);
  }
  function _v55(_v0) {
    var _v1 = _v0.split("\n").map(_v57).filter(function (_v0) {
      return null !== _v0;
    });
    return (0, _v40.__assign)((0, _v40.__assign)({}, _v1[0]), _v1[1]);
  }
  function _v56(_v0) {
    var _v1 = {},
      _v2 = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(_v0);
    if (!_v2) return _v1;
    var _v3 = _v2[1],
      _v4 = _v2[2];
    return _v3 && (_v1.tzid = _v3), _v1.dtstart = _v36(_v4), _v1;
  }
  function _v57(_v0) {
    if (!(_v0 = _v0.replace(/^\s+|\s+$/, "")).length) return null;
    var _v1 = /^([A-Z]+?)[:;]/.exec(_v0.toUpperCase());
    if (!_v1) return _v58(_v0);
    var _v2 = _v1[1];
    switch (_v2.toUpperCase()) {
      case "RRULE":
      case "EXRULE":
        return _v58(_v0);
      case "DTSTART":
        return _v56(_v0);
      default:
        throw Error("Unsupported RFC prop ".concat(_v2, " in ").concat(_v0));
    }
  }
  function _v58(_v0) {
    var _v1 = _v56(_v0.replace(/^RRULE:/i, ""));
    return _v0.replace(/^(?:RRULE|EXRULE):/i, "").split(";").forEach(function (_v0) {
      var _v1 = _v0.split("="),
        _v2 = _v1[0],
        _v3 = _v1[1];
      switch (_v2.toUpperCase()) {
        case "FREQ":
          _v1.freq = _v2[_v3.toUpperCase()];
          break;
        case "WKST":
          _v1.wkst = _v84[_v3.toUpperCase()];
          break;
        case "COUNT":
        case "INTERVAL":
        case "BYSETPOS":
        case "BYMONTH":
        case "BYMONTHDAY":
        case "BYYEARDAY":
        case "BYWEEKNO":
        case "BYHOUR":
        case "BYMINUTE":
        case "BYSECOND":
          var _v4,
            _v5 = -1 !== (_v4 = _v3).indexOf(",") ? _v4.split(",").map(_v59) : _v59(_v4);
          _v1[_v2.toLowerCase()] = _v5;
          break;
        case "BYWEEKDAY":
        case "BYDAY":
          _v1.byweekday = _v3.split(",").map(function (_v0) {
            if (2 === _v0.length) return _v84[_v0];
            var _v1 = _v0.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
            if (!_v1 || _v1.length < 3) throw SyntaxError("Invalid weekday string: ".concat(_v0));
            var _v2 = Number(_v1[1]);
            return new _v4(_v84[_v1[2]].weekday, _v2);
          });
          break;
        case "DTSTART":
        case "TZID":
          var _v6 = _v56(_v0);
          _v1.tzid = _v6.tzid, _v1.dtstart = _v6.dtstart;
          break;
        case "UNTIL":
          _v1.until = _v36(_v3);
          break;
        case "BYEASTER":
          _v1.byeaster = Number(_v3);
          break;
        default:
          throw Error("Unknown RRULE property '" + _v2 + "'");
      }
    }), _v1;
  }
  function _v59(_v0) {
    return /^[+-]?\d+$/.test(_v0) ? Number(_v0) : _v0;
  }
  var _v60 = function () {
    function _v0(_v0, _v1) {
      if (isNaN(_v0.getTime())) throw RangeError("Invalid date passed to DateWithZone");
      this.date = _v0, this.tzid = _v1;
    }
    return Object.defineProperty(_v0.prototype, "isUTC", {
      get: function () {
        return !this.tzid || "UTC" === this.tzid.toUpperCase();
      },
      enumerable: !1,
      configurable: !0
    }), _v0.prototype.toString = function () {
      var _v0 = _v35(this.date.getTime(), this.isUTC);
      return this.isUTC ? ":".concat(_v0) : ";TZID=".concat(this.tzid, ":").concat(_v0);
    }, _v0.prototype.getTime = function () {
      return this.date.getTime();
    }, _v0.prototype.rezonedDate = function () {
      return this.isUTC ? this.date : _v38(this.date, this.tzid);
    }, _v0;
  }();
  function _v61(_v0) {
    for (var _v1 = [], _v2 = "", _v3 = Object.keys(_v0), _v4 = Object.keys(_v85), _v5 = 0; _v5 < _v3.length; _v5++) if ("tzid" !== _v3[_v5] && _v17(_v4, _v3[_v5])) {
      var _v6,
        _v7,
        _v8 = _v3[_v5].toUpperCase(),
        _v9 = _v0[_v3[_v5]],
        _v10 = "";
      if (!(!_v5(_v9) || _v8(_v9) && !_v9.length)) {
        switch (_v8) {
          case "FREQ":
            _v10 = _v87.FREQUENCIES[_v0.freq];
            break;
          case "WKST":
            _v10 = _v6(_v9) ? new _v4(_v9).toString() : _v9.toString();
            break;
          case "BYWEEKDAY":
            _v8 = "BYDAY", _v10 = (_v8(_v9) ? _v9 : [_v9]).map(function (_v0) {
              return _v0 instanceof _v4 ? _v0 : _v8(_v0) ? new _v4(_v0[0], _v0[1]) : new _v4(_v0);
            }).toString();
            break;
          case "DTSTART":
            _v6 = _v9, _v7 = _v0.tzid, _v2 = _v6 ? "DTSTART" + new _v60(new Date(_v6), _v7).toString() : "";
            break;
          case "UNTIL":
            _v10 = _v35(_v9, !_v0.tzid);
            break;
          default:
            if (_v8(_v9)) {
              for (var _v11 = [], _v12 = 0; _v12 < _v9.length; _v12++) _v11[_v12] = String(_v9[_v12]);
              _v10 = _v11.toString();
            } else _v10 = String(_v9);
        }
        _v10 && _v1.push([_v8, _v10]);
      }
    }
    var _v13 = _v1.map(function (_v0) {
        var _v1 = _v0[0],
          _v2 = _v0[1];
        return "".concat(_v1, "=").concat(_v2.toString());
      }).join(";"),
      _v14 = "";
    return "" !== _v13 && (_v14 = "RRULE:".concat(_v13)), [_v2, _v14].filter(function (_v0) {
      return !!_v0;
    }).join("\n");
  }
  var _v62 = function () {
      function _v0() {
        this.all = !1, this.before = [], this.after = [], this.between = [];
      }
      return _v0.prototype._cacheAdd = function (_v0, _v1, _v2) {
        _v1 && (_v1 = _v1 instanceof Date ? _v32(_v1) : _v33(_v1)), "all" === _v0 ? this.all = _v1 : (_v2._value = _v1, this[_v0].push(_v2));
      }, _v0.prototype._cacheGet = function (_v0, _v1) {
        var _v2 = !1,
          _v3 = _v1 ? Object.keys(_v1) : [],
          _v4 = this[_v0];
        if ("all" === _v0) _v2 = this.all;else if (_v8(_v4)) for (var _v5 = 0; _v5 < _v4.length; _v5++) {
          var _v6 = _v4[_v5];
          if (!(_v3.length && function (_v0) {
            for (var _v1 = 0; _v1 < _v3.length; _v1++) {
              var _v2 = _v3[_v1];
              if (!function (_v0, _v1) {
                return Array.isArray(_v0) ? !!Array.isArray(_v1) && _v0.length === _v1.length && _v0.every(function (_v0, _v1) {
                  return _v0.getTime() === _v1[_v1].getTime();
                }) : _v0 instanceof Date ? _v1 instanceof Date && _v0.getTime() === _v1.getTime() : _v0 === _v1;
              }(_v1[_v2], _v0[_v2])) return !0;
            }
            return !1;
          }(_v6))) {
            _v2 = _v6._value;
            break;
          }
        }
        if (!_v2 && this.all) {
          for (var _v7 = new _v39(_v0, _v1), _v5 = 0; _v5 < this.all.length && _v7.accept(this.all[_v5]); _v5++);
          _v2 = _v7.getValue(), this._cacheAdd(_v0, _v2, _v1);
        }
        return _v8(_v2) ? _v33(_v2) : _v2 instanceof Date ? _v32(_v2) : _v2;
      }, _v0;
    }(),
    _v63 = (0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)([], _v10(1, 31), !0), _v10(2, 28), !0), _v10(3, 31), !0), _v10(4, 30), !0), _v10(5, 31), !0), _v10(6, 30), !0), _v10(7, 31), !0), _v10(8, 31), !0), _v10(9, 30), !0), _v10(10, 31), !0), _v10(11, 30), !0), _v10(12, 31), !0), _v10(1, 7), !0),
    _v64 = (0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)([], _v10(1, 31), !0), _v10(2, 29), !0), _v10(3, 31), !0), _v10(4, 30), !0), _v10(5, 31), !0), _v10(6, 30), !0), _v10(7, 31), !0), _v10(8, 31), !0), _v10(9, 30), !0), _v10(10, 31), !0), _v10(11, 30), !0), _v10(12, 31), !0), _v10(1, 7), !0),
    _v65 = _v9(1, 29),
    _v66 = _v9(1, 30),
    _v67 = _v9(1, 31),
    _v68 = _v9(1, 32),
    _v69 = (0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)([], _v68, !0), _v66, !0), _v68, !0), _v67, !0), _v68, !0), _v67, !0), _v68, !0), _v68, !0), _v67, !0), _v68, !0), _v67, !0), _v68, !0), _v68.slice(0, 7), !0),
    _v70 = (0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)([], _v68, !0), _v65, !0), _v68, !0), _v67, !0), _v68, !0), _v67, !0), _v68, !0), _v68, !0), _v67, !0), _v68, !0), _v67, !0), _v68, !0), _v68.slice(0, 7), !0),
    _v71 = _v9(-28, 0),
    _v72 = _v9(-29, 0),
    _v73 = _v9(-30, 0),
    _v74 = _v9(-31, 0),
    _v75 = (0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)([], _v74, !0), _v72, !0), _v74, !0), _v73, !0), _v74, !0), _v73, !0), _v74, !0), _v74, !0), _v73, !0), _v74, !0), _v73, !0), _v74, !0), _v74.slice(0, 7), !0),
    _v76 = (0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)((0, _v40.__spreadArray)([], _v74, !0), _v71, !0), _v74, !0), _v73, !0), _v74, !0), _v73, !0), _v74, !0), _v74, !0), _v73, !0), _v74, !0), _v73, !0), _v74, !0), _v74.slice(0, 7), !0),
    _v77 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366],
    _v78 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
    _v79 = function () {
      for (var _v0 = [], _v1 = 0; _v1 < 55; _v1++) _v0 = _v0.concat(_v9(7));
      return _v0;
    }(),
    _v80 = function () {
      function _v0(_v0) {
        this.options = _v0;
      }
      return _v0.prototype.rebuild = function (_v0, _v1) {
        var _v2,
          _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8,
          _v9,
          _v10,
          _v11,
          _v12 = this.options;
        if (_v0 !== this.lastyear && (this.yearinfo = function (_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7 = _v18(_v0, 1, 1),
            _v8 = _v22(_v0) ? 366 : 365,
            _v9 = _v22(_v0 + 1) ? 366 : 365,
            _v10 = _v26(_v7),
            _v11 = _v29(_v7),
            _v12 = (0, _v40.__assign)((0, _v40.__assign)({
              yearlen: _v8,
              nextyearlen: _v9,
              yearordinal: _v10,
              yearweekday: _v11
            }, (_v3 = _v22(_v2 = _v0) ? 366 : 365, _v4 = _v29(_v18(_v2, 1, 1)), 365 === _v3 ? {
              mmask: _v63,
              mdaymask: _v70,
              nmdaymask: _v76,
              wdaymask: _v79.slice(_v4),
              mrange: _v78
            } : {
              mmask: _v64,
              mdaymask: _v69,
              nmdaymask: _v75,
              wdaymask: _v79.slice(_v4),
              mrange: _v77
            })), {
              wnomask: null
            });
          if (_v15(_v1.byweekno)) return _v12;
          _v12.wnomask = _v10(0, _v8 + 7);
          var _v13 = _v5 = _v13(7 - _v11 + _v1.wkst, 7);
          _v13 >= 4 ? (_v13 = 0, _v6 = _v12.yearlen + _v13(_v11 - _v1.wkst, 7)) : _v6 = _v8 - _v13;
          for (var _v14 = Math.floor(Math.floor(_v6 / 7) + _v13(_v6, 7) / 4), _v15 = 0; _v15 < _v1.byweekno.length; _v15++) {
            var _v16 = _v1.byweekno[_v15];
            if (_v16 < 0 && (_v16 += _v14 + 1), _v16 > 0 && _v16 <= _v14) {
              var _v17 = void 0;
              _v16 > 1 ? (_v17 = _v13 + (_v16 - 1) * 7, _v13 !== _v5 && (_v17 -= 7 - _v5)) : _v17 = _v13;
              for (var _v18 = 0; _v18 < 7 && (_v12.wnomask[_v17] = 1, _v17++, _v12.wdaymask[_v17] !== _v1.wkst); _v18++);
            }
          }
          if (_v17(_v1.byweekno, 1)) {
            var _v17 = _v13 + 7 * _v14;
            if (_v13 !== _v5 && (_v17 -= 7 - _v5), _v17 < _v8) for (var _v15 = 0; _v15 < 7 && (_v12.wnomask[_v17] = 1, _v17 += 1, _v12.wdaymask[_v17] !== _v1.wkst); _v15++);
          }
          if (_v13) {
            var _v19 = void 0;
            if (_v17(_v1.byweekno, -1)) _v19 = -1;else {
              var _v20 = _v29(_v18(_v0 - 1, 1, 1)),
                _v21 = _v13(7 - _v20.valueOf() + _v1.wkst, 7),
                _v22 = _v22(_v0 - 1) ? 366 : 365,
                _v23 = void 0;
              _v21 >= 4 ? (_v21 = 0, _v23 = _v22 + _v13(_v20 - _v1.wkst, 7)) : _v23 = _v8 - _v13, _v19 = Math.floor(52 + _v13(_v23, 7) / 4);
            }
            if (_v17(_v1.byweekno, _v19)) for (var _v17 = 0; _v17 < _v13; _v17++) _v12.wnomask[_v17] = 1;
          }
          return _v12;
        }(_v0, _v12)), _v16(_v12.bynweekday) && (_v1 !== this.lastmonth || _v0 !== this.lastyear)) {
          var _v13 = this.yearinfo,
            _v14 = _v13.yearlen,
            _v15 = _v13.mrange,
            _v16 = _v13.wdaymask;
          this.monthinfo = function (_v0, _v1, _v2, _v3, _v4, _v5) {
            var _v6 = {
                lastyear: _v0,
                lastmonth: _v1,
                nwdaymask: []
              },
              _v7 = [];
            if (_v5.freq === _v87.YEARLY) {
              if (_v15(_v5.bymonth)) _v7 = [[0, _v2]];else for (var _v8 = 0; _v8 < _v5.bymonth.length; _v8++) _v1 = _v5.bymonth[_v8], _v7.push(_v3.slice(_v1 - 1, _v1 + 1));
            } else _v5.freq === _v87.MONTHLY && (_v7 = [_v3.slice(_v1 - 1, _v1 + 1)]);
            if (_v15(_v7)) return _v6;
            _v6.nwdaymask = _v10(0, _v2);
            for (var _v8 = 0; _v8 < _v7.length; _v8++) for (var _v9 = _v7[_v8], _v10 = _v9[0], _v11 = _v9[1] - 1, _v12 = 0; _v12 < _v5.bynweekday.length; _v12++) {
              var _v13 = void 0,
                _v14 = _v5.bynweekday[_v12],
                _v15 = _v14[0],
                _v16 = _v14[1];
              _v16 < 0 ? (_v13 = _v11 + (_v16 + 1) * 7, _v13 -= _v13(_v4[_v13] - _v15, 7)) : (_v13 = _v10 + (_v16 - 1) * 7, _v13 += _v13(7 - _v4[_v13] + _v15, 7)), _v10 <= _v13 && _v13 <= _v11 && (_v6.nwdaymask[_v13] = 1);
            }
            return _v6;
          }(_v0, _v1, _v14, _v15, _v16, _v12);
        }
        _v5(_v12.byeaster) && (this.eastermask = (void 0 === (_v2 = _v12.byeaster) && (_v2 = 0), _v3 = _v0 % 19, _v4 = Math.floor(_v0 / 100), _v5 = _v0 % 100, _v6 = Math.floor(_v4 / 4), _v7 = Math.floor((_v4 + 8) / 25), _v8 = Math.floor((_v4 - _v7 + 1) / 3), _v9 = Math.floor(19 * _v3 + _v4 - _v6 - _v8 + 15) % 30, _v10 = Math.floor(32 + _v4 % 4 * 2 + 2 * Math.floor(_v5 / 4) - _v9 - _v5 % 4) % 7, _v11 = Math.floor((_v3 + 11 * _v9 + 22 * _v10) / 451), [Math.ceil((Date.UTC(_v0, Math.floor((_v9 + _v10 - 7 * _v11 + 114) / 31) - 1, (_v9 + _v10 - 7 * _v11 + 114) % 31 + 1 + _v2) - Date.UTC(_v0, 0, 1)) / 0)]));
      }, Object.defineProperty(_v0.prototype, "lastyear", {
        get: function () {
          return this.monthinfo ? this.monthinfo.lastyear : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "lastmonth", {
        get: function () {
          return this.monthinfo ? this.monthinfo.lastmonth : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "yearlen", {
        get: function () {
          return this.yearinfo.yearlen;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "yearordinal", {
        get: function () {
          return this.yearinfo.yearordinal;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "mrange", {
        get: function () {
          return this.yearinfo.mrange;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "wdaymask", {
        get: function () {
          return this.yearinfo.wdaymask;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "mmask", {
        get: function () {
          return this.yearinfo.mmask;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "wnomask", {
        get: function () {
          return this.yearinfo.wnomask;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "nwdaymask", {
        get: function () {
          return this.monthinfo ? this.monthinfo.nwdaymask : [];
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "nextyearlen", {
        get: function () {
          return this.yearinfo.nextyearlen;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "mdaymask", {
        get: function () {
          return this.yearinfo.mdaymask;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v0.prototype, "nmdaymask", {
        get: function () {
          return this.yearinfo.nmdaymask;
        },
        enumerable: !1,
        configurable: !0
      }), _v0.prototype.ydayset = function () {
        return [_v9(this.yearlen), 0, this.yearlen];
      }, _v0.prototype.mdayset = function (_v0, _v1) {
        for (var _v2 = this.mrange[_v1 - 1], _v3 = this.mrange[_v1], _v4 = _v10(null, this.yearlen), _v5 = _v2; _v5 < _v3; _v5++) _v4[_v5] = _v5;
        return [_v4, _v2, _v3];
      }, _v0.prototype.wdayset = function (_v0, _v1, _v2) {
        for (var _v3 = _v10(null, this.yearlen + 7), _v4 = _v26(_v18(_v0, _v1, _v2)) - this.yearordinal, _v5 = _v4, _v6 = 0; _v6 < 7 && (_v3[_v4] = _v4, ++_v4, this.wdaymask[_v4] !== this.options.wkst); _v6++);
        return [_v3, _v5, _v4];
      }, _v0.prototype.ddayset = function (_v0, _v1, _v2) {
        var _v3 = _v10(null, this.yearlen),
          _v4 = _v26(_v18(_v0, _v1, _v2)) - this.yearordinal;
        return _v3[_v4] = _v4, [_v3, _v4, _v4 + 1];
      }, _v0.prototype.htimeset = function (_v0, _v1, _v2, _v3) {
        var _v4 = this,
          _v5 = [];
        return this.options.byminute.forEach(function (_v0) {
          _v5 = _v5.concat(_v4.mtimeset(_v0, _v0, _v2, _v3));
        }), _v34(_v5), _v5;
      }, _v0.prototype.mtimeset = function (_v0, _v1, _v2, _v3) {
        var _v4 = this.options.bysecond.map(function (_v0) {
          return new _v52(_v0, _v1, _v0, _v3);
        });
        return _v34(_v4), _v4;
      }, _v0.prototype.stimeset = function (_v0, _v1, _v2, _v3) {
        return [new _v52(_v0, _v1, _v2, _v3)];
      }, _v0.prototype.getdayset = function (_v0) {
        switch (_v0) {
          case _v2.YEARLY:
            return this.ydayset.bind(this);
          case _v2.MONTHLY:
            return this.mdayset.bind(this);
          case _v2.WEEKLY:
            return this.wdayset.bind(this);
          case _v2.DAILY:
          default:
            return this.ddayset.bind(this);
        }
      }, _v0.prototype.gettimeset = function (_v0) {
        switch (_v0) {
          case _v2.HOURLY:
            return this.htimeset.bind(this);
          case _v2.MINUTELY:
            return this.mtimeset.bind(this);
          case _v2.SECONDLY:
            return this.stimeset.bind(this);
        }
      }, _v0;
    }();
  function _v81(_v0, _v1) {
    var _v2 = _v1.dtstart,
      _v3 = _v1.freq,
      _v4 = _v1.interval,
      _v5 = _v1.until,
      _v6 = _v1.bysetpos,
      _v7 = _v1.count;
    if (0 === _v7 || 0 === _v4) return _v83(_v0);
    var _v8 = _v53.fromDate(_v2),
      _v9 = new _v80(_v1);
    _v9.rebuild(_v8.year, _v8.month);
    for (var _v10 = function (_v0, _v1, _v2) {
      var _v3 = _v2.freq,
        _v4 = _v2.byhour,
        _v5 = _v2.byminute,
        _v6 = _v2.bysecond;
      if (_v49(_v3)) {
        var _v7 = _v2.dtstart.getTime() % 0;
        if (!_v49(_v2.freq)) return [];
        var _v8 = [];
        return _v2.byhour.forEach(function (_v0) {
          _v2.byminute.forEach(function (_v0) {
            _v2.bysecond.forEach(function (_v0) {
              _v8.push(new _v52(_v0, _v0, _v0, _v7));
            });
          });
        }), _v8;
      }
      return _v3 >= _v87.HOURLY && _v16(_v4) && !_v17(_v4, _v1.hour) || _v3 >= _v87.MINUTELY && _v16(_v5) && !_v17(_v5, _v1.minute) || _v3 >= _v87.SECONDLY && _v16(_v6) && !_v17(_v6, _v1.second) ? [] : _v0.gettimeset(_v3)(_v1.hour, _v1.minute, _v1.second, _v1.millisecond);
    }(_v9, _v8, _v1);;) {
      var _v11 = _v9.getdayset(_v3)(_v8.year, _v8.month, _v8.day),
        _v12 = _v11[0],
        _v13 = _v11[1],
        _v14 = _v11[2],
        _v15 = function (_v0, _v1, _v2, _v3, _v4) {
          for (var _v5 = !1, _v6 = _v1; _v6 < _v2; _v6++) {
            var _v7 = _v0[_v6];
            (_v5 = function (_v0, _v1, _v2) {
              var _v3 = _v2.bymonth,
                _v4 = _v2.byweekno,
                _v5 = _v2.byweekday,
                _v6 = _v2.byeaster,
                _v7 = _v2.bymonthday,
                _v8 = _v2.bynmonthday,
                _v9 = _v2.byyearday;
              return _v16(_v3) && !_v17(_v3, _v0.mmask[_v1]) || _v16(_v4) && !_v0.wnomask[_v1] || _v16(_v5) && !_v17(_v5, _v0.wdaymask[_v1]) || _v16(_v0.nwdaymask) && !_v0.nwdaymask[_v1] || null !== _v6 && !_v17(_v0.eastermask, _v1) || (_v16(_v7) || _v16(_v8)) && !_v17(_v7, _v0.mdaymask[_v1]) && !_v17(_v8, _v0.nmdaymask[_v1]) || _v16(_v9) && (_v1 < _v0.yearlen && !_v17(_v9, _v1 + 1) && !_v17(_v9, -_v0.yearlen + _v1) || _v1 >= _v0.yearlen && !_v17(_v9, _v1 + 1 - _v0.yearlen) && !_v17(_v9, -_v0.nextyearlen + _v1 - _v0.yearlen));
            }(_v3, _v7, _v4)) && (_v0[_v7] = null);
          }
          return _v5;
        }(_v12, _v13, _v14, _v9, _v1);
      if (_v16(_v6)) for (var _v16 = function (_v0, _v1, _v2, _v3, _v4, _v5) {
          for (var _v6 = [], _v7 = 0; _v7 < _v0.length; _v7++) {
            var _v8 = void 0,
              _v9 = void 0,
              _v10 = _v0[_v7];
            _v10 < 0 ? (_v8 = Math.floor(_v10 / _v1.length), _v9 = _v13(_v10, _v1.length)) : (_v8 = Math.floor((_v10 - 1) / _v1.length), _v9 = _v13(_v10 - 1, _v1.length));
            for (var _v11 = [], _v12 = _v2; _v12 < _v3; _v12++) {
              var _v13 = _v5[_v12];
              _v5(_v13) && _v11.push(_v13);
            }
            var _v14 = void 0;
            _v14 = _v8 < 0 ? _v11.slice(_v8)[0] : _v11[_v8];
            var _v15 = _v1[_v9],
              _v16 = _v31(_v27(_v4.yearordinal + _v14), _v15);
            _v17(_v6, _v16) || _v6.push(_v16);
          }
          return _v34(_v6), _v6;
        }(_v6, _v10, _v13, _v14, _v9, _v12), _v17 = 0; _v17 < _v16.length; _v17++) {
        var _v18 = _v16[_v17];
        if (_v5 && _v18 > _v5) return _v83(_v0);
        if (_v18 >= _v2) {
          var _v19 = _v82(_v18, _v1);
          if (!_v0.accept(_v19) || _v7 && ! --_v7) return _v83(_v0);
        }
      } else for (var _v17 = _v13; _v17 < _v14; _v17++) {
        var _v20 = _v12[_v17];
        if (_v5(_v20)) for (var _v21 = _v27(_v9.yearordinal + _v20), _v22 = 0; _v22 < _v10.length; _v22++) {
          var _v18 = _v31(_v21, _v10[_v22]);
          if (_v5 && _v18 > _v5) return _v83(_v0);
          if (_v18 >= _v2) {
            var _v19 = _v82(_v18, _v1);
            if (!_v0.accept(_v19) || _v7 && ! --_v7) return _v83(_v0);
          }
        }
      }
      if (0 === _v1.interval || (_v8.add(_v1, _v15), _v8.year > 0)) return _v83(_v0);
      _v49(_v3) || (_v10 = _v9.gettimeset(_v3)(_v8.hour, _v8.minute, _v8.second, 0)), _v9.rebuild(_v8.year, _v8.month);
    }
  }
  function _v82(_v0, _v1) {
    return new _v60(_v0, _v1.tzid).rezonedDate();
  }
  function _v83(_v0) {
    return _v0.getValue();
  }
  var _v84 = {
      MO: new _v4(0),
      TU: new _v4(1),
      WE: new _v4(2),
      TH: new _v4(3),
      FR: new _v4(4),
      SA: new _v4(5),
      SU: new _v4(6)
    },
    _v85 = {
      freq: _v2.YEARLY,
      dtstart: null,
      interval: 1,
      wkst: _v84.MO,
      count: null,
      until: null,
      tzid: null,
      bysetpos: null,
      bymonth: null,
      bymonthday: null,
      bynmonthday: null,
      byyearday: null,
      byweekno: null,
      byweekday: null,
      bynweekday: null,
      byhour: null,
      byminute: null,
      bysecond: null,
      byeaster: null
    },
    _v86 = Object.keys(_v85),
    _v87 = function () {
      function _v0(_v0, _v1) {
        void 0 === _v0 && (_v0 = {}), void 0 === _v1 && (_v1 = !1), this._cache = _v1 ? null : new _v62(), this.origOptions = _v54(_v0);
        var _v2 = function (_v0) {
          var _v1 = (0, _v40.__assign)((0, _v40.__assign)({}, _v85), _v54(_v0));
          if (_v5(_v1.byeaster) && (_v1.freq = _v87.YEARLY), !(_v5(_v1.freq) && _v87.FREQUENCIES[_v1.freq])) throw Error("Invalid frequency: ".concat(_v1.freq, " ").concat(_v0.freq));
          if (_v1.dtstart || (_v1.dtstart = new Date(new Date().setMilliseconds(0))), _v5(_v1.wkst) ? _v6(_v1.wkst) || (_v1.wkst = _v1.wkst.weekday) : _v1.wkst = _v87.MO.weekday, _v5(_v1.bysetpos)) {
            _v6(_v1.bysetpos) && (_v1.bysetpos = [_v1.bysetpos]);
            for (var _v2 = 0; _v2 < _v1.bysetpos.length; _v2++) {
              var _v3 = _v1.bysetpos[_v2];
              if (0 === _v3 || !(_v3 >= -366 && _v3 <= 366)) throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
            }
          }
          if (!(_v1.byweekno || _v16(_v1.byweekno) || _v16(_v1.byyearday) || _v1.bymonthday || _v16(_v1.bymonthday) || _v5(_v1.byweekday) || _v5(_v1.byeaster))) switch (_v1.freq) {
            case _v87.YEARLY:
              _v1.bymonth || (_v1.bymonth = _v1.dtstart.getUTCMonth() + 1), _v1.bymonthday = _v1.dtstart.getUTCDate();
              break;
            case _v87.MONTHLY:
              _v1.bymonthday = _v1.dtstart.getUTCDate();
              break;
            case _v87.WEEKLY:
              _v1.byweekday = [_v29(_v1.dtstart)];
          }
          if (_v5(_v1.bymonth) && !_v8(_v1.bymonth) && (_v1.bymonth = [_v1.bymonth]), _v5(_v1.byyearday) && !_v8(_v1.byyearday) && _v6(_v1.byyearday) && (_v1.byyearday = [_v1.byyearday]), _v5(_v1.bymonthday)) {
            if (_v8(_v1.bymonthday)) {
              for (var _v4 = [], _v5 = [], _v2 = 0; _v2 < _v1.bymonthday.length; _v2++) {
                var _v3 = _v1.bymonthday[_v2];
                _v3 > 0 ? _v4.push(_v3) : _v3 < 0 && _v5.push(_v3);
              }
              _v1.bymonthday = _v4, _v1.bynmonthday = _v5;
            } else _v1.bymonthday < 0 ? (_v1.bynmonthday = [_v1.bymonthday], _v1.bymonthday = []) : (_v1.bynmonthday = [], _v1.bymonthday = [_v1.bymonthday]);
          } else _v1.bymonthday = [], _v1.bynmonthday = [];
          if (_v5(_v1.byweekno) && !_v8(_v1.byweekno) && (_v1.byweekno = [_v1.byweekno]), _v5(_v1.byweekday)) {
            if (_v6(_v1.byweekday)) _v1.byweekday = [_v1.byweekday], _v1.bynweekday = null;else if (_v7(_v1.byweekday)) _v1.byweekday = [_v4.fromStr(_v1.byweekday).weekday], _v1.bynweekday = null;else if (_v1.byweekday instanceof _v4) !_v1.byweekday.n || _v1.freq > _v87.MONTHLY ? (_v1.byweekday = [_v1.byweekday.weekday], _v1.bynweekday = null) : (_v1.bynweekday = [[_v1.byweekday.weekday, _v1.byweekday.n]], _v1.byweekday = null);else {
              for (var _v6 = [], _v7 = [], _v2 = 0; _v2 < _v1.byweekday.length; _v2++) {
                var _v8 = _v1.byweekday[_v2];
                if (_v6(_v8)) {
                  _v6.push(_v8);
                  continue;
                }
                if (_v7(_v8)) {
                  _v6.push(_v4.fromStr(_v8).weekday);
                  continue;
                }
                !_v8.n || _v1.freq > _v87.MONTHLY ? _v6.push(_v8.weekday) : _v7.push([_v8.weekday, _v8.n]);
              }
              _v1.byweekday = _v16(_v6) ? _v6 : null, _v1.bynweekday = _v16(_v7) ? _v7 : null;
            }
          } else _v1.bynweekday = null;
          return _v5(_v1.byhour) ? _v6(_v1.byhour) && (_v1.byhour = [_v1.byhour]) : _v1.byhour = _v1.freq < _v87.HOURLY ? [_v1.dtstart.getUTCHours()] : null, _v5(_v1.byminute) ? _v6(_v1.byminute) && (_v1.byminute = [_v1.byminute]) : _v1.byminute = _v1.freq < _v87.MINUTELY ? [_v1.dtstart.getUTCMinutes()] : null, _v5(_v1.bysecond) ? _v6(_v1.bysecond) && (_v1.bysecond = [_v1.bysecond]) : _v1.bysecond = _v1.freq < _v87.SECONDLY ? [_v1.dtstart.getUTCSeconds()] : null, {
            parsedOptions: _v1
          };
        }(_v0).parsedOptions;
        this.options = _v2;
      }
      return _v0.parseText = function (_v0, _v1) {
        return _v48(_v0, _v1);
      }, _v0.fromText = function (_v0, _v1) {
        var _v2;
        return void 0 === (_v2 = _v1) && (_v2 = _v42), new _v87(_v48(_v0, _v2) || void 0);
      }, _v0.fromString = function (_v0) {
        return new _v0(_v0.parseString(_v0) || void 0);
      }, _v0.prototype._iter = function (_v0) {
        return _v81(_v0, this.options);
      }, _v0.prototype._cacheGet = function (_v0, _v1) {
        return !!this._cache && this._cache._cacheGet(_v0, _v1);
      }, _v0.prototype._cacheAdd = function (_v0, _v1, _v2) {
        if (this._cache) return this._cache._cacheAdd(_v0, _v1, _v2);
      }, _v0.prototype.all = function (_v0) {
        if (_v0) return this._iter(new _v41("all", {}, _v0));
        var _v1 = this._cacheGet("all");
        return !1 === _v1 && (_v1 = this._iter(new _v39("all", {})), this._cacheAdd("all", _v1)), _v1;
      }, _v0.prototype.between = function (_v0, _v1, _v2, _v3) {
        if (void 0 === _v2 && (_v2 = !1), !_v24(_v0) || !_v24(_v1)) throw Error("Invalid date passed in to RRule.between");
        var _v4 = {
          before: _v1,
          after: _v0,
          inc: _v2
        };
        if (_v3) return this._iter(new _v41("between", _v4, _v3));
        var _v5 = this._cacheGet("between", _v4);
        return !1 === _v5 && (_v5 = this._iter(new _v39("between", _v4)), this._cacheAdd("between", _v5, _v4)), _v5;
      }, _v0.prototype.before = function (_v0, _v1) {
        if (void 0 === _v1 && (_v1 = !1), !_v24(_v0)) throw Error("Invalid date passed in to RRule.before");
        var _v2 = {
            dt: _v0,
            inc: _v1
          },
          _v3 = this._cacheGet("before", _v2);
        return !1 === _v3 && (_v3 = this._iter(new _v39("before", _v2)), this._cacheAdd("before", _v3, _v2)), _v3;
      }, _v0.prototype.after = function (_v0, _v1) {
        if (void 0 === _v1 && (_v1 = !1), !_v24(_v0)) throw Error("Invalid date passed in to RRule.after");
        var _v2 = {
            dt: _v0,
            inc: _v1
          },
          _v3 = this._cacheGet("after", _v2);
        return !1 === _v3 && (_v3 = this._iter(new _v39("after", _v2)), this._cacheAdd("after", _v3, _v2)), _v3;
      }, _v0.prototype.count = function () {
        return this.all().length;
      }, _v0.prototype.toString = function () {
        return _v61(this.origOptions);
      }, _v0.prototype.toText = function (_v0, _v1, _v2) {
        return new _v46(this, _v0, _v1, _v2).toString();
      }, _v0.prototype.isFullyConvertibleToText = function () {
        return _v51(this);
      }, _v0.prototype.clone = function () {
        return new _v0(this.origOptions);
      }, _v0.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"], _v0.YEARLY = _v2.YEARLY, _v0.MONTHLY = _v2.MONTHLY, _v0.WEEKLY = _v2.WEEKLY, _v0.DAILY = _v2.DAILY, _v0.HOURLY = _v2.HOURLY, _v0.MINUTELY = _v2.MINUTELY, _v0.SECONDLY = _v2.SECONDLY, _v0.MO = _v84.MO, _v0.TU = _v84.TU, _v0.WE = _v84.WE, _v0.TH = _v84.TH, _v0.FR = _v84.FR, _v0.SA = _v84.SA, _v0.SU = _v84.SU, _v0.parseString = _v55, _v0.optionsToString = _v61, _v0;
    }(),
    _v88 = {
      dtstart: null,
      cache: !1,
      unfold: !1,
      forceset: !1,
      compatible: !1,
      tzid: null
    };
  function _v89(_v0, _v1) {
    return void 0 === _v1 && (_v1 = {}), function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9 = (_v2 = [], _v3 = [], _v4 = [], _v5 = [], _v7 = (_v6 = _v56(_v0)).dtstart, _v8 = _v6.tzid, function (_v0, _v1) {
          if (void 0 === _v1 && (_v1 = !1), !(_v0 = _v0 && _v0.trim())) throw Error("Invalid empty string");
          if (!_v1) return _v0.split(/\s/);
          for (var _v2 = _v0.split("\n"), _v3 = 0; _v3 < _v2.length;) {
            var _v4 = _v2[_v3] = _v2[_v3].replace(/\s+$/g, "");
            _v4 ? _v3 > 0 && " " === _v4[0] ? (_v2[_v3 - 1] += _v4.slice(1), _v2.splice(_v3, 1)) : _v3 += 1 : _v2.splice(_v3, 1);
          }
          return _v2;
        }(_v0, _v1.unfold).forEach(function (_v0) {
          if (_v0) {
            var _v1,
              _v2 = function (_v0) {
                var _v1 = function (_v0) {
                    if (-1 === _v0.indexOf(":")) return {
                      name: "RRULE",
                      value: _v0
                    };
                    var _v1 = _v12(_v0, ":", 1);
                    return {
                      name: _v1[0],
                      value: _v1[1]
                    };
                  }(_v0),
                  _v2 = _v1.name,
                  _v3 = _v1.value,
                  _v4 = _v2.split(";");
                if (!_v4) throw Error("empty property name");
                return {
                  name: _v4[0].toUpperCase(),
                  parms: _v4.slice(1),
                  value: _v3
                };
              }(_v0),
              _v3 = _v2.name,
              _v4 = _v2.parms,
              _v5 = _v2.value;
            switch (_v3.toUpperCase()) {
              case "RRULE":
                if (_v4.length) throw Error("unsupported RRULE parm: ".concat(_v4.join(",")));
                _v2.push(_v55(_v0));
                break;
              case "RDATE":
                var _v6 = (null != (_v1 = /RDATE(?:;TZID=([^:=]+))?/i.exec(_v0)) ? _v1 : [])[1];
                _v6 && !_v8 && (_v8 = _v6), _v3 = _v3.concat(_v91(_v5, _v4));
                break;
              case "EXRULE":
                if (_v4.length) throw Error("unsupported EXRULE parm: ".concat(_v4.join(",")));
                _v4.push(_v55(_v5));
                break;
              case "EXDATE":
                _v5 = _v5.concat(_v91(_v5, _v4));
                break;
              case "DTSTART":
                break;
              default:
                throw Error("unsupported property: " + _v3);
            }
          }
        }), {
          dtstart: _v7,
          tzid: _v8,
          rrulevals: _v2,
          rdatevals: _v3,
          exrulevals: _v4,
          exdatevals: _v5
        }),
        _v10 = _v9.rrulevals,
        _v11 = _v9.rdatevals,
        _v12 = _v9.exrulevals,
        _v13 = _v9.exdatevals,
        _v14 = _v9.dtstart,
        _v15 = _v9.tzid,
        _v16 = !1 === _v1.cache;
      if (_v1.compatible && (_v1.forceset = !0, _v1.unfold = !0), _v1.forceset || _v10.length > 1 || _v11.length || _v12.length || _v13.length) {
        var _v17 = new _v93(_v16);
        return _v17.dtstart(_v14), _v17.tzid(_v15 || void 0), _v10.forEach(function (_v0) {
          _v17.rrule(new _v87(_v90(_v0, _v14, _v15), _v16));
        }), _v11.forEach(function (_v0) {
          _v17.rdate(_v0);
        }), _v12.forEach(function (_v0) {
          _v17.exrule(new _v87(_v90(_v0, _v14, _v15), _v16));
        }), _v13.forEach(function (_v0) {
          _v17.exdate(_v0);
        }), _v1.compatible && _v1.dtstart && _v17.rdate(_v14), _v17;
      }
      var _v18 = _v10[0] || {};
      return new _v87(_v90(_v18, _v18.dtstart || _v1.dtstart || _v14, _v18.tzid || _v1.tzid || _v15), _v16);
    }(_v0, function (_v0) {
      var _v1 = [],
        _v2 = Object.keys(_v0),
        _v3 = Object.keys(_v88);
      if (_v2.forEach(function (_v0) {
        _v17(_v3, _v0) || _v1.push(_v0);
      }), _v1.length) throw Error("Invalid options: " + _v1.join(", "));
      return (0, _v40.__assign)((0, _v40.__assign)({}, _v88), _v0);
    }(_v1));
  }
  function _v90(_v0, _v1, _v2) {
    return (0, _v40.__assign)((0, _v40.__assign)({}, _v0), {
      dtstart: _v1,
      tzid: _v2
    });
  }
  function _v91(_v0, _v1) {
    return _v1.forEach(function (_v0) {
      if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(_v0)) throw Error("unsupported RDATE/EXDATE parm: " + _v0);
    }), _v0.split(",").map(function (_v0) {
      return _v36(_v0);
    });
  }
  function _v92(_v0) {
    var _v1 = this;
    return function (_v0) {
      if (void 0 !== _v0 && (_v1["_".concat(_v0)] = _v0), void 0 !== _v1["_".concat(_v0)]) return _v1["_".concat(_v0)];
      for (var _v1 = 0; _v1 < _v1._rrule.length; _v1++) {
        var _v2 = _v1._rrule[_v1].origOptions[_v0];
        if (_v2) return _v2;
      }
    };
  }
  var _v93 = function (_v0) {
    function _v1(_v0) {
      void 0 === _v0 && (_v0 = !1);
      var _v1 = _v0.call(this, {}, _v0) || this;
      return _v1.dtstart = _v92.apply(_v1, ["dtstart"]), _v1.tzid = _v92.apply(_v1, ["tzid"]), _v1._rrule = [], _v1._rdate = [], _v1._exrule = [], _v1._exdate = [], _v1;
    }
    return (0, _v40.__extends)(_v1, _v0), _v1.prototype._iter = function (_v0) {
      return function (_v0, _v1, _v2, _v3, _v4, _v5) {
        var _v6 = {},
          _v7 = _v0.accept;
        function _v8(_v0, _v1) {
          _v2.forEach(function (_v0) {
            _v0.between(_v0, _v1, !0).forEach(function (_v0) {
              _v6[Number(_v0)] = !0;
            });
          });
        }
        _v4.forEach(function (_v0) {
          _v6[Number(new _v60(_v0, _v5).rezonedDate())] = !0;
        }), _v0.accept = function (_v0) {
          var _v1 = Number(_v0);
          return isNaN(_v1) ? _v7.call(this, _v0) : !!_v6[_v1] || (_v8(new Date(_v1 - 1), new Date(_v1 + 1)), !!_v6[_v1]) || (_v6[_v1] = !0, _v7.call(this, _v0));
        }, "between" === _v0.method && (_v8(_v0.args.after, _v0.args.before), _v0.accept = function (_v0) {
          var _v1 = Number(_v0);
          return !!_v6[_v1] || (_v6[_v1] = !0, _v7.call(this, _v0));
        });
        for (var _v9 = 0; _v9 < _v3.length; _v9++) {
          var _v10 = new _v60(_v3[_v9], _v5).rezonedDate();
          if (!_v0.accept(new Date(_v10.getTime()))) break;
        }
        _v1.forEach(function (_v0) {
          _v81(_v0, _v0.options);
        });
        var _v11 = _v0._result;
        switch (_v34(_v11), _v0.method) {
          case "all":
          case "between":
            return _v11;
          case "before":
            return _v11.length && _v11[_v11.length - 1] || null;
          default:
            return _v11.length && _v11[0] || null;
        }
      }(_v0, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
    }, _v1.prototype.rrule = function (_v0) {
      _v94(_v0, this._rrule);
    }, _v1.prototype.exrule = function (_v0) {
      _v94(_v0, this._exrule);
    }, _v1.prototype.rdate = function (_v0) {
      _v95(_v0, this._rdate);
    }, _v1.prototype.exdate = function (_v0) {
      _v95(_v0, this._exdate);
    }, _v1.prototype.rrules = function () {
      return this._rrule.map(function (_v0) {
        return _v89(_v0.toString());
      });
    }, _v1.prototype.exrules = function () {
      return this._exrule.map(function (_v0) {
        return _v89(_v0.toString());
      });
    }, _v1.prototype.rdates = function () {
      return this._rdate.map(function (_v0) {
        return new Date(_v0.getTime());
      });
    }, _v1.prototype.exdates = function () {
      return this._exdate.map(function (_v0) {
        return new Date(_v0.getTime());
      });
    }, _v1.prototype.valueOf = function () {
      var _v0 = [];
      return !this._rrule.length && this._dtstart && (_v0 = _v0.concat(_v61({
        dtstart: this._dtstart
      }))), this._rrule.forEach(function (_v0) {
        _v0 = _v0.concat(_v0.toString().split("\n"));
      }), this._exrule.forEach(function (_v0) {
        _v0 = _v0.concat(_v0.toString().split("\n").map(function (_v0) {
          return _v0.replace(/^RRULE:/, "EXRULE:");
        }).filter(function (_v0) {
          return !/^DTSTART/.test(_v0);
        }));
      }), this._rdate.length && _v0.push(_v96("RDATE", this._rdate, this.tzid())), this._exdate.length && _v0.push(_v96("EXDATE", this._exdate, this.tzid())), _v0;
    }, _v1.prototype.toString = function () {
      return this.valueOf().join("\n");
    }, _v1.prototype.clone = function () {
      var _v0 = new _v1(!!this._cache);
      return this._rrule.forEach(function (_v0) {
        return _v0.rrule(_v0.clone());
      }), this._exrule.forEach(function (_v0) {
        return _v0.exrule(_v0.clone());
      }), this._rdate.forEach(function (_v0) {
        return _v0.rdate(new Date(_v0.getTime()));
      }), this._exdate.forEach(function (_v0) {
        return _v0.exdate(new Date(_v0.getTime()));
      }), _v0;
    }, _v1;
  }(_v87);
  function _v94(_v0, _v1) {
    if (!(_v0 instanceof _v87)) throw TypeError(String(_v0) + " is not RRule instance");
    _v17(_v1.map(String), String(_v0)) || _v1.push(_v0);
  }
  function _v95(_v0, _v1) {
    if (!(_v0 instanceof Date)) throw TypeError(String(_v0) + " is not Date instance");
    _v17(_v1.map(Number), Number(_v0)) || (_v1.push(_v0), _v34(_v1));
  }
  function _v96(_v0, _v1, _v2) {
    var _v3 = !_v2 || "UTC" === _v2.toUpperCase(),
      _v4 = _v3 ? "".concat(_v0, ":") : "".concat(_v0, ";TZID=").concat(_v2, ":"),
      _v5 = _v1.map(function (_v0) {
        return _v35(_v0.valueOf(), _v3);
      }).join(",");
    return "".concat(_v4).concat(_v5);
  }
  _v0.s([], 0);
  var _v97 = _v0.i(0);
  _v0.i(0);
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0);
  function _v107(_v0) {
    if (!_v0) return !1;
    try {
      return !!_v87.parseString(_v0).until;
    } catch {
      return !1;
    }
  }
  function _v108(_v0, _v1, _v2) {
    let _v3 = _v0.setZone(_v2).startOf("day");
    return Math.max(0, Math.round(_v1.setZone(_v2).startOf("day").diff(_v3, "days").as("days")));
  }
  function _v109(_v0, _v1) {
    let _v2 = _v87.parseString(_v0);
    return _v1(_v2), _v87.optionsToString(_v2);
  }
  function _v110(_v0, _v1, _v2, _v3, _v4) {
    return _v109(_v0, _v0 => {
      let _v1,
        _v2 = _v1.setZone(_v2, {
          keepLocalTime: !0
        }).startOf("day"),
        _v3 = _v2;
      if (_v3 && _v4) {
        let _v0 = _v108(_v4, _v3, _v2);
        _v3 = _v2.plus({
          days: _v0
        });
      }
      if (_v3) {
        let _v0 = _v3.setZone(_v2);
        _v1 = _v3.set({
          hour: _v0.hour,
          minute: _v0.minute,
          second: _v0.second,
          millisecond: _v0.millisecond
        });
      } else _v1 = _v2.endOf("day");
      _v0.until = _v1.toUTC().toJSDate(), null != _v0.count && delete _v0.count;
    });
  }
  let _v111 = "never",
    _v112 = "on_date";
  _v0.s(["RecurrenceEnd", 0, function ({
    rrule: _v0,
    timeZone: _v1,
    startTime: _v2,
    endTime: _v3,
    isDisabled: _v4,
    isLoading: _v5,
    isVertical: _v6 = !1,
    onRruleChange: _v7
  }) {
    let _v8 = _v107(_v0) ? _v112 : _v111,
      _v9 = (0, _v99.useMemo)(() => function (_v0, _v1, _v2, _v3) {
        if (_v107(_v0) && _v0) try {
          let _v0 = _v87.parseString(_v0);
          if (!_v0.until) return;
          let _v1 = _v98.DateTime.fromJSDate(_v0.until).setZone(_v1);
          if (void 0 === _v2 || void 0 === _v3) return _v1;
          let _v2 = _v108(_v3, _v2, _v1),
            _v3 = _v1.startOf("day").minus({
              days: _v2
            }),
            _v4 = _v110(_v0, _v3, _v1, _v2, _v3),
            _v5 = _v87.parseString(_v4).until?.getTime(),
            _v6 = _v0.until.getTime();
          if (void 0 !== _v5 && _v5 === _v6) return _v3;
          return _v1;
        } catch {
          return;
        }
      }(_v0, _v1, _v3, _v2), [_v0, _v1, _v3, _v2]),
      _v10 = (0, _v99.useMemo)(() => _v2 ? _v2.setZone(_v1).startOf("day") : _v98.DateTime.utc().setZone(_v1).startOf("day"), [_v2, _v1]),
      _v11 = (0, _v99.useMemo)(() => [{
        value: _v111,
        label: (0, _v105.translate)({
          singular: "Never",
          dictionary: {
            es: {
              singular: "Nunca"
            },
            "de-DE": {
              singular: "Nie"
            },
            "fr-FR": {
              singular: "Jamais"
            },
            "ja-JP": {
              singular: "なし"
            },
            "ko-KR": {
              singular: "절대 안 함"
            },
            "pt-BR": {
              singular: "Nunca"
            },
            "zh-CN": {
              singular: "从不"
            }
          }
        })
      }, {
        value: _v112,
        label: (0, _v105.translate)({
          singular: "Custom date",
          dictionary: {
            es: {
              singular: "Fecha personalizada"
            },
            "de-DE": {
              singular: "Benutzerdefiniertes Datum"
            },
            "fr-FR": {
              singular: "Date personnalisée"
            },
            "ja-JP": {
              singular: "カスタム日付"
            },
            "ko-KR": {
              singular: "사용자 지정 날짜"
            },
            "pt-BR": {
              singular: "Data personalizada"
            },
            "zh-CN": {
              singular: "自定义日期"
            }
          }
        })
      }], []),
      _v12 = (0, _v99.useCallback)(_v0 => {
        if (_v0 === _v111) return void _v7(_v109(_v0, _v0 => {
          delete _v0.until, null != _v0.count && delete _v0.count;
        }));
        let _v1 = _v98.DateTime.utc().setZone(_v1).startOf("day");
        _v7(_v110(_v0, _v98.DateTime.max(_v1, _v10), _v1, _v3, _v2));
      }, [_v0, _v7, _v1, _v10, _v3, _v2]),
      _v13 = (0, _v99.useCallback)(_v0 => {
        (_v0 === _v111 || _v0 === _v112) && _v12(_v0);
      }, [_v12]),
      _v14 = (0, _v99.useCallback)(_v0 => {
        _v7(_v110(_v0, _v98.DateTime.fromJSDate(_v0).setZone(_v1, {
          keepLocalTime: !0
        }), _v1, _v3, _v2));
      }, [_v0, _v7, _v1, _v3, _v2]);
    return (0, _v97.jsxs)(_v101.Flex, {
      direction: "column",
      gap: (0, _v103.rem)(8),
      width: "100%",
      "data-testid": "recurrence-end",
      children: [(0, _v97.jsx)(_v102.Header, {
        size: "xs",
        color: "text-primary",
        children: (0, _v105.translate)({
          singular: "Recurrence End",
          dictionary: {
            es: {
              singular: "Fin de recurrencia"
            },
            "de-DE": {
              singular: "Ende der Wiederholung"
            },
            "fr-FR": {
              singular: "Fin de récurrence"
            },
            "ja-JP": {
              singular: "繰り返し終了"
            },
            "ko-KR": {
              singular: "반복 종료"
            },
            "pt-BR": {
              singular: "Fim da recorrência"
            },
            "zh-CN": {
              singular: "重复结束"
            }
          }
        })
      }), (0, _v97.jsxs)(_v101.Flex, {
        direction: _v6 ? "column" : "row",
        gap: (0, _v103.rem)(8),
        width: "100%",
        children: [(0, _v97.jsx)(_v100.Box, {
          flex: _v6 ? void 0 : "1 1 0",
          minWidth: 0,
          position: "relative",
          width: _v6 ? "100%" : void 0,
          children: (0, _v97.jsx)(_v104.Select, {
            withPortal: !1,
            disabled: _v4 || _v5,
            onValueChange: _v0 => {
              let _v1 = _v0.value[0];
              "string" == typeof _v1 && _v13(_v1);
            },
            items: _v11,
            value: [_v8],
            size: "sm",
            variant: "withCheck"
          })
        }), _v6 ? _v8 === _v112 ? (0, _v97.jsx)(_v100.Box, {
          width: "100%",
          minWidth: 0,
          "data-testid": "recurrence-end-date-input",
          children: (0, _v97.jsx)(_v106.DatePicker, {
            id: "recurrence-end-date",
            className: "recurrence-end-date-picker",
            isDisabled: _v4,
            isLoading: _v5,
            size: "sm",
            date: _v9?.startOf("day"),
            minDate: _v10,
            onSelect: _v14
          })
        }) : null : (0, _v97.jsx)(_v100.Box, {
          flex: "1 1 0",
          minWidth: 0,
          "data-testid": "recurrence-end-date-input",
          children: _v8 === _v112 ? (0, _v97.jsx)(_v106.DatePicker, {
            id: "recurrence-end-date",
            className: "recurrence-end-date-picker",
            isDisabled: _v4,
            isLoading: _v5,
            size: "sm",
            date: _v9?.startOf("day"),
            minDate: _v10,
            onSelect: _v14
          }) : null
        })]
      })]
    });
  }], 0);
  var _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0);
  function _v116(_v0, _v1 = "en") {
    let _v2 = _v0.setLocale(_v1).toLocaleString({
        weekday: "long"
      }),
      {
        day: _v3
      } = _v0,
      _v4 = _v0.plus({
        weeks: 1
      }).day,
      _v5 = (0, _v105.translate)({
        singular: "last",
        dictionary: {
          es: {
            singular: "último"
          },
          "de-DE": {
            singular: "letzte"
          },
          "fr-FR": {
            singular: "dernier"
          },
          "ja-JP": {
            singular: "最後"
          },
          "ko-KR": {
            singular: "마지막"
          },
          "pt-BR": {
            singular: "último"
          },
          "zh-CN": {
            singular: "最后"
          }
        }
      });
    return _v4 > _v3 && (_v5 = [(0, _v105.translate)({
      singular: "first",
      dictionary: {
        es: {
          singular: "primero"
        },
        "de-DE": {
          singular: "erste"
        },
        "fr-FR": {
          singular: "premier"
        },
        "ja-JP": {
          singular: "最初"
        },
        "ko-KR": {
          singular: "첫번째"
        },
        "pt-BR": {
          singular: "primeiro"
        },
        "zh-CN": {
          singular: "第一"
        }
      }
    }), (0, _v105.translate)({
      singular: "second",
      dictionary: {
        es: {
          singular: "segundo"
        },
        "de-DE": {
          singular: "zweite"
        },
        "fr-FR": {
          singular: "deuxième"
        },
        "ja-JP": {
          singular: "2番目"
        },
        "ko-KR": {
          singular: "두번째"
        },
        "pt-BR": {
          singular: "segundo"
        },
        "zh-CN": {
          singular: "第二"
        }
      }
    }), (0, _v105.translate)({
      singular: "third",
      dictionary: {
        es: {
          singular: "tercero"
        },
        "de-DE": {
          singular: "dritte"
        },
        "fr-FR": {
          singular: "troisième"
        },
        "ja-JP": {
          singular: "3番目"
        },
        "ko-KR": {
          singular: "세번째"
        },
        "pt-BR": {
          singular: "terceiro"
        },
        "zh-CN": {
          singular: "第三"
        }
      }
    })][((Math.ceil(_v3 / 7) + 90) % 100 - 10) % 10 - 1] || (0, _v105.translate)({
      singular: "fourth",
      dictionary: {
        es: {
          singular: "cuarto"
        },
        "de-DE": {
          singular: "vierte"
        },
        "fr-FR": {
          singular: "quatrième"
        },
        "ja-JP": {
          singular: "4番目"
        },
        "ko-KR": {
          singular: "네번째"
        },
        "pt-BR": {
          singular: "quarto"
        },
        "zh-CN": {
          singular: "第四"
        }
      }
    })), `${_v5} ${_v2}`;
  }
  function _v117(_v0) {
    let {
        day: _v1,
        weekday: _v2
      } = _v0,
      _v3 = _v0.plus({
        weeks: 1
      }).day,
      _v4 = -1;
    return _v3 > _v1 && (_v4 = [1, 2, 3][((Math.ceil(_v1 / 7) + 90) % 100 - 10) % 10 - 1] || 4), new _v4(_v2 - 1, _v4);
  }
  function _v118(_v0) {
    return (Array.isArray(_v0) ? _v0 : [_v0]).map(_v0 => _v0 instanceof _v4 ? _v0.weekday : Number.isInteger(_v0) ? Number(_v0) : _v4.fromStr(_v0).weekday);
  }
  _v0.s(["getNthDateStringByTime", 0, _v116, "getNthWeekday", 0, _v117], 0), _v0.s(["convertMonthDaysToTimeZone", 0, function (_v0, _v1, _v2) {
    return Array.isArray(_v0) ? _v0.map(_v0 => _v1.toUTC().set({
      day: _v0
    }).setZone(_v2).day) : _v1.toUTC().set({
      day: _v0
    }).setZone(_v2).day;
  }, "convertWeekdaysToTimeZone", 0, function (_v0 = [], _v1, _v2) {
    return _v118(_v0).map(_v0 => Number(_v1.toUTC().set({
      weekday: _v0 + 1
    }).setZone(_v2).toFormat("c")) - 1);
  }, "rruleWeekDaysToArray", 0, _v118], 0);
  let _v119 = [{
      value: "6",
      label: "Su"
    }, {
      value: "0",
      label: "M"
    }, {
      value: "1",
      label: "T"
    }, {
      value: "2",
      label: "W"
    }, {
      value: "3",
      label: "Th"
    }, {
      value: "4",
      label: "F"
    }, {
      value: "5",
      label: "Sa"
    }],
    _v120 = [{
      label: _v0 => (0, _v105.translate)({
        singular: "Day",
        plural: "Days",
        count: _v0,
        dictionary: {
          es: {
            singular: "Día",
            plural: "Días"
          },
          "de-DE": {
            singular: "Tag",
            plural: "Tage"
          },
          "fr-FR": {
            singular: "Jour",
            plural: "Jours"
          },
          "ja-JP": {
            singular: "日",
            plural: "日"
          },
          "ko-KR": {
            singular: "일",
            plural: "일"
          },
          "pt-BR": {
            singular: "Dia",
            plural: "Dias"
          },
          "zh-CN": {
            singular: "天",
            plural: "天"
          }
        }
      }),
      value: _v87.DAILY
    }, {
      label: _v0 => (0, _v105.translate)({
        singular: "Week",
        plural: "Weeks",
        count: _v0,
        dictionary: {
          es: {
            singular: "Semana",
            plural: "Semanas"
          },
          "de-DE": {
            singular: "Woche",
            plural: "Wochen"
          },
          "fr-FR": {
            singular: "Semaine",
            plural: "Semaines"
          },
          "ja-JP": {
            singular: "週",
            plural: "週間"
          },
          "ko-KR": {
            singular: "주",
            plural: "주"
          },
          "pt-BR": {
            singular: "Semana",
            plural: "Semanas"
          },
          "zh-CN": {
            singular: "周",
            plural: "周"
          }
        }
      }),
      value: _v87.WEEKLY
    }, {
      label: _v0 => (0, _v105.translate)({
        singular: "Month",
        plural: "Months",
        count: _v0,
        dictionary: {
          es: {
            singular: "Mes",
            plural: "Meses"
          },
          "de-DE": {
            singular: "Monat",
            plural: "Monate"
          },
          "fr-FR": {
            singular: "Mois",
            plural: "Mois"
          },
          "ja-JP": {
            singular: "か月",
            plural: "か月"
          },
          "ko-KR": {
            singular: "개월",
            plural: "개월"
          },
          "pt-BR": {
            singular: "Mês",
            plural: "Meses"
          },
          "zh-CN": {
            singular: "月",
            plural: "月"
          }
        }
      }),
      value: _v87.MONTHLY
    }, {
      label: _v0 => (0, _v105.translate)({
        singular: "Year",
        plural: "Years",
        count: _v0,
        dictionary: {
          es: {
            singular: "Año",
            plural: "Años"
          },
          "de-DE": {
            singular: "Jahr",
            plural: "Jahre"
          },
          "fr-FR": {
            singular: "An",
            plural: "Ans"
          },
          "ja-JP": {
            singular: "年",
            plural: "年"
          },
          "ko-KR": {
            singular: "년",
            plural: "년"
          },
          "pt-BR": {
            singular: "Ano",
            plural: "Anos"
          },
          "zh-CN": {
            singular: "年",
            plural: "年"
          }
        }
      }),
      value: _v87.YEARLY
    }],
    _v121 = "mday",
    _v122 = "wday";
  _v0.s(["RecurringOptions", 0, function ({
    rrule: _v0,
    startTime: _v1,
    isVertical: _v2 = !1,
    onChange: _v3
  }) {
    let [_v4, _v5] = (0, _v99.useState)(1),
      _v6 = (0, _v99.useMemo)(() => _v0 ? _v87.parseString(_v0) : {
        freq: _v87.WEEKLY,
        interval: 1,
        byweekday: []
      }, [_v0]),
      _v7 = (0, _v99.useMemo)(() => _v6.freq === _v87.WEEKLY && _v6.byweekday ? _v118(_v6.byweekday) : [], [_v6.freq, _v6.byweekday]),
      _v8 = (0, _v99.useMemo)(() => [{
        value: _v121,
        label: (0, _v105.translate)({
          singular: "Monthly on day {Day}",
          replacements: {
            Day: _v1.day
          },
          dictionary: {
            es: {
              singular: "Mensual el día {Day}"
            },
            "de-DE": {
              singular: "Monatlich am Tag {Day}"
            },
            "fr-FR": {
              singular: "Chaque mois le jour {Day}"
            },
            "ja-JP": {
              singular: "毎月 {Day} 日"
            },
            "ko-KR": {
              singular: "매월 {Day}일"
            },
            "pt-BR": {
              singular: "Mensalmente no dia {Day}"
            },
            "zh-CN": {
              singular: "每月的第 {Day} 日"
            }
          }
        })
      }, {
        value: _v122,
        label: (0, _v105.translate)({
          singular: "Monthly on the {DayName}",
          replacements: {
            DayName: _v116(_v1, (0, _v105.getCurrentLocale)())
          },
          dictionary: {
            es: {
              singular: "Mensual el {DayName}"
            },
            "de-DE": {
              singular: "Monatlich am {DayName}"
            },
            "fr-FR": {
              singular: "Chaque mois le {DayName}"
            },
            "ja-JP": {
              singular: "毎月の {DayName}"
            },
            "ko-KR": {
              singular: "매월 {DayName}"
            },
            "pt-BR": {
              singular: "Mensalmente na {DayName}"
            },
            "zh-CN": {
              singular: "每月的 {DayName}"
            }
          }
        })
      }], [_v1]);
    (0, _v99.useEffect)(() => {
      _v6?.interval && _v6.interval > 0 && _v5(_v6.interval);
    }, [_v6?.interval]);
    let _v9 = (0, _v99.useCallback)(_v0 => {
        _v5(_v0.target.value);
        let _v1 = Number(_v0.target.value);
        _v1 <= 0 ? delete _v6.interval : _v6.interval = _v1, _v3(_v87.optionsToString(_v6));
      }, [_v6, _v3]),
      _v10 = (0, _v99.useCallback)(_v0 => {
        _v6.freq !== _v0 && (_v6.freq = _v0, _v6.byweekday = [], _v6.bymonthday = null, _v0 === _v87.MONTHLY && (_v6.bymonthday = _v1.day), _v0 === _v87.YEARLY && _v6?.interval && (_v6.interval %= 0), _v3(_v87.optionsToString(_v6)));
      }, [_v6, _v1, _v3]),
      _v11 = (0, _v99.useCallback)(_v0 => {
        let _v1 = Number(_v0.target.value),
          _v2 = _v7;
        _v7.includes(_v1) ? _v2 = _v7.filter(_v0 => _v0 !== _v1) : _v2.push(_v1), _v6.byweekday = _v2, _v3(_v87.optionsToString(_v6));
      }, [_v7, _v6, _v3]),
      _v12 = (0, _v99.useCallback)(_v0 => {
        _v0 === _v121 && (_v6.bymonthday = _v1.day, _v6.byweekday = []), _v0 === _v122 && (_v6.bymonthday = null, _v6.byweekday = _v117(_v1)), _v3(_v87.optionsToString(_v6));
      }, [_v6, _v1, _v3]),
      _v13 = (0, _v99.useMemo)(() => _v120.map(_v0 => ({
        value: _v0.value,
        label: _v0.label(_v4)
      })), [_v4]),
      _v14 = (0, _v99.useMemo)(() => _v6.freq !== _v87.MONTHLY || _v6.bymonthday ? [_v121] : [_v6.byweekday?.[0]?.n ? _v122 : _v121], [_v6]),
      _v15 = _v6?.freq === _v87.YEARLY ? 3 : 4,
      _v16 = [_v13.find(_v0 => _v0.value === _v6?.freq)?.value];
    return (0, _v97.jsxs)(_v97.Fragment, {
      children: [(0, _v97.jsx)(_v102.Header, {
        size: "xs",
        marginBottom: (0, _v103.rem)(8),
        color: "text-primary",
        children: (0, _v105.translate)({
          singular: "Repeat every",
          dictionary: {
            es: {
              singular: "Repetir cada"
            },
            "de-DE": {
              singular: "Wiederholen alle"
            },
            "fr-FR": {
              singular: "Répéter toutes les"
            },
            "ja-JP": {
              singular: "次の間隔で繰り返す"
            },
            "ko-KR": {
              singular: "반복 주기"
            },
            "pt-BR": {
              singular: "Repetir a cada"
            },
            "zh-CN": {
              singular: "重复间隔"
            }
          }
        })
      }), (0, _v97.jsxs)(_v101.Flex, {
        width: "100%",
        direction: _v2 ? "column" : "row",
        gap: (0, _v103.rem)(8),
        children: [(0, _v97.jsxs)(_v101.Flex, {
          gap: (0, _v103.rem)(8),
          justifyContent: _v2 ? "center" : "unset",
          children: [(0, _v97.jsx)(_v115.Input, {
            flexShrink: 4,
            size: "sm",
            value: _v4,
            maxLength: _v15,
            minWidth: (0, _v103.rem)(60),
            onKeyPress: _v0 => {
              /[0-9]/.test(_v0.key) || _v0.preventDefault();
            },
            onChange: _v9,
            onBlur: () => {
              _v4 || _v5(1);
            }
          }), (0, _v97.jsx)(_v100.Box, {
            width: "100%",
            position: "relative",
            children: (0, _v97.jsx)(_v104.Select, {
              withPortal: !1,
              onValueChange: _v0 => _v10(_v0.value[0]),
              items: _v13,
              defaultValue: [_v13[1].value],
              value: _v16,
              size: "sm",
              variant: "withCheck"
            })
          })]
        }), (0, _v97.jsxs)("div", {
          children: [_v6?.freq === _v87.WEEKLY && (0, _v97.jsx)(_v101.Flex, {
            gap: (0, _v103.rem)(8),
            justifyContent: "space-between",
            marginLeft: _v2 ? 0 : (0, _v103.rem)(8),
            children: _v119.map(_v0 => (0, _v97.jsxs)(_v100.Box, {
              width: (0, _v103.rem)(20),
              textAlign: "center",
              children: [(0, _v97.jsx)(_v114.Checkbox, {
                value: _v0.value,
                isChecked: _v7.includes(Number(_v0.value)),
                onChange: _v11
              }), (0, _v97.jsx)(_v113.Paragraph, {
                size: "md",
                children: _v0.label
              })]
            }, _v0.value))
          }), _v6?.freq === _v87.MONTHLY ? (0, _v97.jsx)(_v100.Box, {
            width: "100%",
            position: "relative",
            children: (0, _v97.jsx)(_v104.Select, {
              withPortal: !1,
              onValueChange: _v0 => {
                _v12(_v0.value[0]);
              },
              items: _v8,
              value: _v14,
              size: "sm",
              variant: "withCheck"
            })
          }) : null]
        })]
      })]
    });
  }], 0);
}