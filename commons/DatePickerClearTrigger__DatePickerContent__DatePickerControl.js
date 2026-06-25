{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getClearTriggerProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v6.displayName = "DatePickerClearTrigger";
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v8.usePresenceContext)(),
      _v4 = (0, _v2.mergeProps)(_v2.getContentProps(), _v3.getPresenceProps(), _v0);
    return _v3.unmounted ? null : (0, _v1.jsx)(_v4.ark.div, {
      ..._v4,
      ref: (0, _v7.composeRefs)(_v3.ref, _v1)
    });
  });
  _v9.displayName = "DatePickerContent";
  let _v10 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getControlProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v10.displayName = "DatePickerControl";
  var _v11 = _v0.i(0);
  let _v12 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v11.createSplitProps)()(_v0, ["index", "fixOnBlur"]),
      _v4 = (0, _v5.useDatePickerContext)(),
      _v5 = (0, _v2.mergeProps)(_v4.getInputProps(_v2), _v3);
    return (0, _v1.jsx)(_v4.ark.input, {
      ..._v5,
      ref: _v1
    });
  });
  _v12.displayName = "DatePickerInput";
  let _v13 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getLabelProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.label, {
      ..._v3,
      ref: _v1
    });
  });
  _v13.displayName = "DatePickerLabel";
  let _v14 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getMonthSelectProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.select, {
      ..._v3,
      ref: _v1,
      children: _v2.getMonths().map((_v0, _v1) => (0, _v1.jsx)("option", {
        value: _v0.value,
        children: _v0.label
      }, _v1))
    });
  });
  _v14.displayName = "DatePickerMonthSelect";
  var _v15 = _v0.i(0);
  let [_v16, _v17] = (0, _v15.createContext)({
      name: "DatePickerViewContext",
      hookName: "useDatePickerViewContext",
      providerName: "<DatePickerViewProvider />",
      strict: !1,
      defaultValue: {
        view: "day"
      }
    }),
    _v18 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v5.useDatePickerContext)(),
        _v3 = _v17(),
        _v4 = (0, _v2.mergeProps)(_v2.getNextTriggerProps(_v3), _v0);
      return (0, _v1.jsx)(_v4.ark.button, {
        ..._v4,
        ref: _v1
      });
    });
  _v18.displayName = "DatePickerNextTrigger";
  let _v19 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getPositionerProps(), _v0);
    return (0, _v8.usePresenceContext)().unmounted ? null : (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v19.displayName = "DatePickerPositioner";
  let _v20 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v11.createSplitProps)()(_v0, ["value"]),
      _v4 = (0, _v5.useDatePickerContext)(),
      _v5 = (0, _v2.mergeProps)(_v4.getPresetTriggerProps(_v2), _v3);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v5,
      ref: _v1
    });
  });
  _v20.displayName = "DatePickerPresetTrigger";
  let _v21 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = _v17(),
      _v4 = (0, _v2.mergeProps)(_v2.getPrevTriggerProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v4,
      ref: _v1
    });
  });
  _v21.displayName = "DatePickerPrevTrigger";
  let _v22 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getRangeTextProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1,
      children: _v2.visibleRangeText.start
    });
  });
  _v22.displayName = "DatePickerRangeText";
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  _v0.i(0);
  var _v29 = _v0.i(0);
  function _v30(_v0, _v1, _v2, _v3, _v4) {
    let _v5 = _v0;
    return _v1.years ? _v5 = (0, _v27.startOfYear)(_v0) : _v1.months ? _v5 = (0, _v27.startOfMonth)(_v0) : _v1.weeks && (_v5 = (0, _v27.startOfWeek)(_v0, _v2)), _v32(_v0, _v5, _v1, _v2, _v3, _v4);
  }
  function _v31(_v0, _v1, _v2, _v3, _v4) {
    let _v5 = {
      ..._v1
    };
    _v5.days ? _v5.days-- : _v5.weeks ? _v5.weeks-- : _v5.months ? _v5.months-- : _v5.years && _v5.years--;
    let _v6 = _v30(_v0, _v1, _v2).subtract(_v5);
    return _v32(_v0, _v6, _v1, _v2, _v3, _v4);
  }
  function _v32(_v0, _v1, _v2, _v3, _v4, _v5) {
    return _v4 && _v0.compare(_v4) >= 0 && (_v1 = (0, _v27.maxDate)(_v1, _v30((0, _v29.toCalendarDate)(_v4), _v2, _v3))), _v5 && 0 >= _v0.compare(_v5) && (_v1 = (0, _v27.minDate)(_v1, _v31((0, _v29.toCalendarDate)(_v5), _v2, _v3))), _v1;
  }
  function _v33(_v0, _v1, _v2) {
    return _v1 && (_v0 = (0, _v27.maxDate)(_v0, (0, _v29.toCalendarDate)(_v1))), _v2 && (_v0 = (0, _v27.minDate)(_v0, (0, _v29.toCalendarDate)(_v2))), _v0;
  }
  function _v34(_v0, _v1, _v2, _v3, _v4, _v5) {
    switch (_v1) {
      case "start":
        return _v30(_v0, _v2, _v3, _v4, _v5);
      case "end":
        return _v31(_v0, _v2, _v3, _v4, _v5);
      default:
        let _v0 = {};
        for (let _v0 in _v2) {
          let _v0 = _v2[_v0];
          null != _v0 && (_v0[_v0] = Math.floor(_v0 / 2), _v0[_v0] > 0 && _v0 % 2 == 0 && _v0[_v0]--);
        }
        let _v1 = _v30(_v0, _v2, _v3).subtract(_v0);
        return _v32(_v0, _v1, _v2, _v3, _v4, _v5);
    }
  }
  function _v35(_v0, _v1) {
    return null != _v1 && (0, _v27.isSameDay)(_v0, _v1);
  }
  function _v36(_v0, _v1, _v2, _v3, _v4) {
    return !!_v0 && (!!_v1?.(_v0, _v2) || _v37(_v0, _v3, _v4));
  }
  function _v37(_v0, _v1, _v2) {
    return null != _v1 && 0 > _v0.compare(_v1) || null != _v2 && _v0.compare(_v2) > 0;
  }
  function _v38(_v0) {
    let _v1 = {
      ..._v0
    };
    for (let _v0 in _v1) _v1[_v0] = 1;
    return _v1;
  }
  function _v39(_v0, _v1) {
    let _v2 = {
      ..._v1
    };
    return _v2.days ? _v2.days-- : _v2.days = -1, _v0.add(_v2);
  }
  function _v40(_v0) {
    return _v0?.calendar.identifier === "gregory" && "BC" === _v0.era ? "short" : void 0;
  }
  function _v41(_v0, _v1) {
    let _v2 = (0, _v29.toCalendarDateTime)((0, _v27.today)(_v1));
    return new _v26.DateFormatter(_v0, {
      weekday: "long",
      month: "long",
      year: "numeric",
      day: "numeric",
      era: _v40(_v2),
      timeZone: _v1
    });
  }
  function _v42(_v0, _v1) {
    let _v2 = (0, _v29.toCalendarDate)((0, _v27.today)(_v1));
    return new _v26.DateFormatter(_v0, {
      month: "long",
      year: "numeric",
      era: _v40(_v2),
      calendar: _v2?.calendar.identifier,
      timeZone: _v1
    });
  }
  var _v43 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  function _v44(_v0) {
    return null != _v0 ? _v43[_v0] : void 0;
  }
  function _v45(_v0, _v1, _v2) {
    let _v3 = _v44(_v2);
    return (0, _v27.startOfWeek)(_v0, _v1, _v3);
  }
  function _v46(_v0, _v1, _v2, _v3) {
    let _v4 = _v1.add({
        weeks: _v0
      }),
      _v5 = [],
      _v6 = _v45(_v4, _v2, _v3);
    for (; _v5.length < 7;) {
      _v5.push(_v6);
      let _v0 = _v6.add({
        days: 1
      });
      if ((0, _v27.isSameDay)(_v6, _v0)) break;
      _v6 = _v0;
    }
    return _v5;
  }
  function _v47(_v0) {
    let _v1 = _v0 - _v0 % 10 - 1,
      _v2 = [];
    for (let _v0 = 0; _v0 < 12; _v0 += 1) {
      let _v0 = _v1 + _v0;
      _v2.push(_v0);
    }
    return _v2;
  }
  function _v48(_v0) {
    return (0, _v27.today)(_v0 ?? (0, _v27.getLocalTimeZone)());
  }
  function _v49(_v0, _v1, _v2, _v3) {
    return function (_v0) {
      let {
          startDate: _v1,
          focusedDate: _v2
        } = _v0,
        _v3 = _v39(_v1, _v0);
      return _v37(_v2, _v2, _v3) ? {
        startDate: _v1,
        focusedDate: _v33(_v2, _v2, _v3),
        endDate: _v3
      } : 0 > _v2.compare(_v1) ? {
        startDate: _v31(_v2, _v0, _v1, _v2, _v3),
        focusedDate: _v33(_v2, _v2, _v3),
        endDate: _v3
      } : _v2.compare(_v3) > 0 ? {
        startDate: _v30(_v2, _v0, _v1, _v2, _v3),
        endDate: _v3,
        focusedDate: _v33(_v2, _v2, _v3)
      } : {
        startDate: _v1,
        endDate: _v3,
        focusedDate: _v33(_v2, _v2, _v3)
      };
    };
  }
  function _v50(_v0, _v1, _v2, _v3, _v4, _v5) {
    let _v6 = _v49(_v2, _v3, _v4, _v5),
      _v7 = _v1.add(_v2);
    return _v6({
      focusedDate: _v0.add(_v2),
      startDate: _v30(_v32(_v0, _v7, _v2, _v3, _v4, _v5), _v2, _v3)
    });
  }
  function _v51(_v0, _v1, _v2, _v3, _v4, _v5) {
    let _v6 = _v49(_v2, _v3, _v4, _v5),
      _v7 = _v1.subtract(_v2);
    return _v6({
      focusedDate: _v0.subtract(_v2),
      startDate: _v30(_v32(_v0, _v7, _v2, _v3, _v4, _v5), _v2, _v3)
    });
  }
  var _v52 = _v0 => null != _v0 && 4 === _v0.length;
  function _v53(_v0, _v1, _v2) {
    let _v3 = (0, _v27.now)(_v2);
    switch (_v0) {
      case "thisWeek":
        return [(0, _v27.startOfWeek)(_v3, _v1), (0, _v27.endOfWeek)(_v3, _v1)];
      case "thisMonth":
        return [(0, _v27.startOfMonth)(_v3), _v3];
      case "thisQuarter":
        return [(0, _v27.startOfMonth)(_v3).add({
          months: -_v3.month % 3
        }), _v3];
      case "thisYear":
        return [(0, _v27.startOfYear)(_v3), _v3];
      case "last3Days":
        return [_v3.add({
          days: -2
        }), _v3];
      case "last7Days":
        return [_v3.add({
          days: -6
        }), _v3];
      case "last14Days":
        return [_v3.add({
          days: -13
        }), _v3];
      case "last30Days":
        return [_v3.add({
          days: -29
        }), _v3];
      case "last90Days":
        return [_v3.add({
          days: -89
        }), _v3];
      case "lastMonth":
        return [(0, _v27.startOfMonth)(_v3.add({
          months: -1
        })), (0, _v27.endOfMonth)(_v3.add({
          months: -1
        }))];
      case "lastQuarter":
        return [(0, _v27.startOfMonth)(_v3.add({
          months: -_v3.month % 3 - 3
        })), (0, _v27.endOfMonth)(_v3.add({
          months: -_v3.month % 3 - 1
        }))];
      case "lastWeek":
        return [(0, _v27.startOfWeek)(_v3, _v1).add({
          weeks: -1
        }), (0, _v27.endOfWeek)(_v3, _v1).add({
          weeks: -1
        })];
      case "lastYear":
        return [(0, _v27.startOfYear)(_v3.add({
          years: -1
        })), (0, _v27.endOfYear)(_v3.add({
          years: -1
        }))];
      default:
        throw Error(`Invalid date range preset: ${_v0}`);
    }
  }
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = "__live-region__",
    _v59 = _v0.i(0),
    _v60 = (0, _v25.createAnatomy)("date-picker").parts("clearTrigger", "content", "control", "input", "label", "monthSelect", "nextTrigger", "positioner", "presetTrigger", "prevTrigger", "rangeText", "root", "table", "tableBody", "tableCell", "tableCellTrigger", "tableHead", "tableHeader", "tableRow", "trigger", "view", "viewControl", "viewTrigger", "yearSelect"),
    _v61 = _v60.build(),
    _v62 = _v0 => _v0.ids?.content ?? `datepicker:${_v0.id}:content`,
    _v63 = (_v0, _v1) => _v0.ids?.cellTrigger?.(_v1) ?? `datepicker:${_v0.id}:cell-trigger:${_v1}`,
    _v64 = _v0 => _v0.ids?.clearTrigger ?? `datepicker:${_v0.id}:clear`,
    _v65 = _v0 => _v0.ids?.control ?? `datepicker:${_v0.id}:control`,
    _v66 = (_v0, _v1) => _v0.ids?.input?.(_v1) ?? `datepicker:${_v0.id}:input:${_v1}`,
    _v67 = _v0 => _v0.ids?.trigger ?? `datepicker:${_v0.id}:trigger`,
    _v68 = _v0 => _v0.ids?.positioner ?? `datepicker:${_v0.id}:positioner`,
    _v69 = _v0 => _v0.ids?.monthSelect ?? `datepicker:${_v0.id}:month-select`,
    _v70 = _v0 => _v0.ids?.yearSelect ?? `datepicker:${_v0.id}:year-select`,
    _v71 = (_v0, _v1) => (0, _v54.query)(_v73(_v0), `[data-part=table-cell-trigger][data-view=${_v1}][data-focus]:not([data-outside-range])`),
    _v72 = _v0 => _v0.getById(_v67(_v0)),
    _v73 = _v0 => _v0.getById(_v62(_v0)),
    _v74 = _v0 => (0, _v54.queryAll)(_v75(_v0), "[data-part=input]"),
    _v75 = _v0 => _v0.getById(_v65(_v0));
  function _v76(_v0) {
    let [_v1, _v2] = _v0;
    return _v1 && _v2 ? 0 >= _v1.compare(_v2) ? _v0 : [_v2, _v1] : _v0;
  }
  function _v77(_v0, _v1) {
    let [_v2, _v3] = _v1;
    return !!_v2 && !!_v3 && 0 >= _v2.compare(_v0) && _v3.compare(_v0) >= 0;
  }
  function _v78(_v0) {
    return _v0.slice().sort((_v0, _v1) => _v0.compare(_v1));
  }
  var _v79 = {
      day: "dd",
      month: "mm",
      year: "yyyy"
    },
    _v80 = (_v0, _v1) => !_v0 || /\d/.test(_v0) || _v0 === _v1 || 1 !== _v0.length,
    _v81 = _v0 => !Number.isNaN(_v0.day) && !Number.isNaN(_v0.month) && !Number.isNaN(_v0.year),
    _v82 = {
      dayCell: _v0 => _v0.unavailable ? `Not available. ${_v0.formattedDate}` : _v0.selected ? `Selected date. ${_v0.formattedDate}` : `Choose ${_v0.formattedDate}`,
      trigger: _v0 => _v0 ? "Close calendar" : "Open calendar",
      viewTrigger: _v0 => (0, _v56.match)(_v0, {
        year: "Switch to month view",
        month: "Switch to day view",
        day: "Switch to year view"
      }),
      presetTrigger: _v0 => Array.isArray(_v0) ? `select ${_v0[0].toString()} to ${_v0[1].toString()}` : `select ${_v0}`,
      prevTrigger: _v0 => (0, _v56.match)(_v0, {
        year: "Switch to previous decade",
        month: "Switch to previous year",
        day: "Switch to previous month"
      }),
      nextTrigger: _v0 => (0, _v56.match)(_v0, {
        year: "Switch to next decade",
        month: "Switch to next year",
        day: "Switch to next month"
      }),
      placeholder: () => ({
        day: "dd",
        month: "mm",
        year: "yyyy"
      }),
      content: "calendar",
      monthSelect: "Select month",
      yearSelect: "Select year",
      clearTrigger: "Clear selected dates"
    };
  function _v83(_v0, _v1) {
    return _v0 ? "day" === _v0 ? 0 : "month" === _v0 ? 1 : 2 : _v1 || 0;
  }
  function _v84(_v0) {
    return 0 === _v0 ? "day" : 1 === _v0 ? "month" : "year";
  }
  function _v85(_v0, _v1, _v2) {
    return _v84((0, _v56.clampValue)(_v83(_v0, 0), _v83(_v1, 0), _v83(_v2, 2)));
  }
  var _v86 = ["day", "month", "year"],
    {
      and: _v87
    } = (0, _v2.createGuards)();
  function _v88(_v0, _v1) {
    if (_v0?.length !== _v1?.length) return !1;
    let _v2 = Math.max(_v0.length, _v1.length);
    for (let _v0 = 0; _v0 < _v2; _v0++) if (!_v35(_v0[_v0], _v1[_v0])) return !1;
    return !0;
  }
  var _v89 = (0, _v2.createMachine)({
      props({
        props: _v0
      }) {
        let _v1 = _v0.locale || "en-US",
          _v2 = _v0.timeZone || "UTC",
          _v3 = _v0.selectionMode || "single",
          _v4 = _v0.numOfMonths || 1,
          _v5 = _v0.defaultValue ? _v78(_v0.defaultValue).map(_v0 => _v33(_v0, _v0.min, _v0.max)) : void 0,
          _v6 = _v0.value ? _v78(_v0.value).map(_v0 => _v33(_v0, _v0.min, _v0.max)) : void 0,
          _v7 = _v0.focusedValue || _v6?.[0] || _v5?.[0] || _v48(_v2);
        _v7 = _v33(_v7, _v0.min, _v0.max);
        let _v8 = "year";
        return {
          locale: _v1,
          numOfMonths: _v4,
          timeZone: _v2,
          selectionMode: _v3,
          defaultView: _v85(_v0.view || "day", "day", _v8),
          minView: "day",
          maxView: _v8,
          outsideDaySelectable: !1,
          closeOnSelect: !0,
          format: (_v0, {
            locale: _v1,
            timeZone: _v2
          }) => new _v26.DateFormatter(_v1, {
            timeZone: _v2,
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          }).format(_v0.toDate(_v2)),
          parse: (_v0, {
            locale: _v1,
            timeZone: _v2
          }) => function (_v0, _v1, _v2) {
            var _v3, _v4, _v5;
            let _v6,
              _v7,
              _v8,
              {
                year: _v9,
                month: _v10,
                day: _v11
              } = (_v5 = (_v3 = _v1, _v4 = _v2, new _v26.DateFormatter(_v3, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
                timeZone: _v4
              }).formatToParts(new Date(0, 11, 25)).map(({
                type: _v0,
                value: _v1
              }) => "literal" === _v0 ? `${_v1}?` : `((?!=<${_v0}>)\\d+)?`).join("")), _v6 = _v0.match(_v5), _v5.toString().match(/<(.+?)>/g)?.map(_v0 => {
                let _v1 = _v0.match(/<(.+)>/);
                return !_v1 || _v1.length <= 0 ? null : _v0.match(/<(.+)>/)?.[1];
              }).reduce((_v0, _v1, _v2) => (_v1 && (_v6 && _v6.length > _v2 ? _v0[_v1] = _v6[_v2 + 1] : _v0[_v1] = null), _v0), {}) ?? {});
            if (null != _v9 || null != _v10 || null != _v11) {
              let _v0 = new Date();
              _v9 || (_v9 = _v0.getFullYear().toString()), _v10 || (_v10 = (_v0.getMonth() + 1).toString()), _v11 || (_v11 = _v0.getDate().toString());
            }
            if (_v52(_v9) || (_v9 = function (_v0) {
              if (_v0) {
                if (3 === _v0.length) return _v0.padEnd(4, "0");
                if (2 === _v0.length) {
                  let _v0 = new Date().getFullYear(),
                    _v1 = 100 * Math.floor(_v0 / 100) + parseInt(_v0.slice(-2), 10);
                  return _v1 > _v0 + 10 ? (_v1 - 100).toString() : _v1.toString();
                }
                return _v0;
              }
            }(_v9)), _v52(_v9) && null != (_v7 = _v10) && 12 >= parseFloat(_v7) && null != (_v8 = _v11) && 31 >= parseFloat(_v8)) return new _v28.CalendarDate(+_v9, +_v10, +_v11);
            let _v12 = Date.parse(_v0);
            if (!isNaN(_v12)) {
              let _v0 = new Date(_v12);
              return new _v28.CalendarDate(_v0.getFullYear(), _v0.getMonth() + 1, _v0.getDate());
            }
          }(_v0, _v1, _v2),
          ..._v0,
          focusedValue: _v7,
          value: _v6,
          defaultValue: _v5 ?? [],
          positioning: {
            placement: "bottom",
            ..._v0.positioning
          }
        };
      },
      initialState: ({
        prop: _v0
      }) => _v0("open") || _v0("defaultOpen") ? "open" : "idle",
      refs: () => ({
        announcer: void 0
      }),
      context: ({
        prop: _v0,
        bindable: _v1,
        getContext: _v2,
        getComputed: _v3
      }) => ({
        focusedValue: _v1(() => ({
          defaultValue: _v0("focusedValue"),
          isEqual: _v35,
          hash: _v0 => _v0.toString(),
          sync: !0,
          onChange(_v0) {
            let _v1 = _v2(),
              _v2 = _v3();
            _v0("onFocusChange")?.({
              value: _v1.get("value"),
              valueAsString: _v2("valueAsString"),
              view: _v1.get("view"),
              focusedValue: _v0
            });
          }
        })),
        value: _v1(() => ({
          defaultValue: _v0("defaultValue"),
          value: _v0("value"),
          isEqual: _v88,
          hash: _v0 => _v0.map(_v0 => _v0.toString()).join(","),
          onChange(_v0) {
            let _v1 = _v2(),
              _v2 = _v0.map(_v0 => _v0("format")(_v0, {
                locale: _v0("locale"),
                timeZone: _v0("timeZone")
              }));
            _v0("onValueChange")?.({
              value: _v0,
              valueAsString: _v2,
              view: _v1.get("view")
            });
          }
        })),
        inputValue: _v1(() => ({
          defaultValue: ""
        })),
        activeIndex: _v1(() => ({
          defaultValue: 0,
          sync: !0
        })),
        hoveredValue: _v1(() => ({
          defaultValue: null,
          isEqual: (_v0, _v1) => null !== _v1 && null !== _v0 && _v35(_v0, _v1)
        })),
        view: _v1(() => ({
          defaultValue: _v0("defaultView"),
          value: _v0("view"),
          onChange(_v0) {
            _v0("onViewChange")?.({
              view: _v0
            });
          }
        })),
        startValue: _v1(() => ({
          defaultValue: _v34(_v0("focusedValue"), "start", {
            months: _v0("numOfMonths")
          }, _v0("locale")),
          isEqual: _v35
        })),
        currentPlacement: _v1(() => ({
          defaultValue: void 0
        })),
        restoreFocus: _v1(() => ({
          defaultValue: !1
        }))
      }),
      computed: {
        isInteractive: ({
          prop: _v0
        }) => !_v0("disabled") && !_v0("readOnly"),
        visibleDuration: ({
          prop: _v0
        }) => ({
          months: _v0("numOfMonths")
        }),
        endValue: ({
          context: _v0,
          computed: _v1
        }) => _v39(_v0.get("startValue"), _v1("visibleDuration")),
        visibleRange: ({
          context: _v0,
          computed: _v1
        }) => ({
          start: _v0.get("startValue"),
          end: _v1("endValue")
        }),
        visibleRangeText({
          context: _v0,
          prop: _v1,
          computed: _v2
        }) {
          let _v3 = _v1("timeZone"),
            _v4 = new _v26.DateFormatter(_v1("locale"), {
              month: "long",
              year: "numeric",
              timeZone: _v3
            }),
            _v5 = _v4.format(_v0.get("startValue").toDate(_v3)),
            _v6 = _v4.format(_v2("endValue").toDate(_v3)),
            _v7 = "range" === _v1("selectionMode") ? `${_v5} - ${_v6}` : _v5;
          return {
            start: _v5,
            end: _v6,
            formatted: _v7
          };
        },
        isPrevVisibleRangeValid: ({
          context: _v0,
          prop: _v1
        }) => {
          var _v2, _v3, _v4;
          let _v5;
          return _v2 = _v0.get("startValue"), _v3 = _v1("min"), _v4 = _v1("max"), _v5 = _v2.subtract({
            days: 1
          }), !((0, _v27.isSameDay)(_v5, _v2) || _v37(_v5, _v3, _v4));
        },
        isNextVisibleRangeValid: ({
          prop: _v0,
          computed: _v1
        }) => {
          var _v2, _v3, _v4;
          let _v5;
          return _v2 = _v1("endValue"), _v3 = _v0("min"), _v4 = _v0("max"), _v5 = _v2.add({
            days: 1
          }), !((0, _v27.isSameDay)(_v5, _v2) || _v37(_v5, _v3, _v4));
        },
        valueAsString: ({
          context: _v0,
          prop: _v1
        }) => _v0.get("value").map(_v0 => _v1("format")(_v0, {
          locale: _v1("locale"),
          timeZone: _v1("timeZone")
        }))
      },
      effects: ["setupLiveRegion"],
      watch({
        track: _v0,
        prop: _v1,
        context: _v2,
        action: _v3,
        computed: _v4
      }) {
        _v0([() => _v1("locale")], () => {
          _v3(["setStartValue"]);
        }), _v0([() => _v2.hash("focusedValue")], () => {
          _v3(["setStartValue", "syncMonthSelectElement", "syncYearSelectElement", "focusActiveCellIfNeeded", "setHoveredValueIfKeyboard"]);
        }), _v0([() => _v2.get("inputValue")], () => {
          _v3(["syncInputValue"]);
        }), _v0([() => _v2.hash("value")], () => {
          _v3(["syncInputElement"]);
        }), _v0([() => _v4("valueAsString").toString()], () => {
          _v3(["announceValueText"]);
        }), _v0([() => _v2.get("view")], () => {
          _v3(["focusActiveCell"]);
        }), _v0([() => _v1("open")], () => {
          _v3(["toggleVisibility"]);
        });
      },
      on: {
        "VALUE.SET": {
          actions: ["setDateValue", "setFocusedDate"]
        },
        "VIEW.SET": {
          actions: ["setView"]
        },
        "FOCUS.SET": {
          actions: ["setFocusedDate"]
        },
        "VALUE.CLEAR": {
          actions: ["clearDateValue", "clearFocusedDate", "focusFirstInputElement"]
        },
        "INPUT.CHANGE": [{
          guard: "isInputValueEmpty",
          actions: ["setInputValue", "clearDateValue", "clearFocusedDate"]
        }, {
          actions: ["setInputValue", "focusParsedDate"]
        }],
        "INPUT.ENTER": {
          actions: ["focusParsedDate", "selectFocusedDate"]
        },
        "INPUT.FOCUS": {
          actions: ["setActiveIndex"]
        },
        "INPUT.BLUR": [{
          guard: "shouldFixOnBlur",
          actions: ["setActiveIndexToStart", "selectParsedDate"]
        }, {
          actions: ["setActiveIndexToStart"]
        }],
        "PRESET.CLICK": [{
          guard: "isOpenControlled",
          actions: ["setDateValue", "setFocusedDate", "invokeOnClose"]
        }, {
          target: "focused",
          actions: ["setDateValue", "setFocusedDate", "focusInputElement"]
        }],
        "GOTO.NEXT": [{
          guard: "isYearView",
          actions: ["focusNextDecade", "announceVisibleRange"]
        }, {
          guard: "isMonthView",
          actions: ["focusNextYear", "announceVisibleRange"]
        }, {
          actions: ["focusNextPage"]
        }],
        "GOTO.PREV": [{
          guard: "isYearView",
          actions: ["focusPreviousDecade", "announceVisibleRange"]
        }, {
          guard: "isMonthView",
          actions: ["focusPreviousYear", "announceVisibleRange"]
        }, {
          actions: ["focusPreviousPage"]
        }]
      },
      states: {
        idle: {
          tags: ["closed"],
          on: {
            "CONTROLLED.OPEN": {
              target: "open",
              actions: ["focusFirstSelectedDate", "focusActiveCell"]
            },
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["focusFirstSelectedDate", "focusActiveCell", "invokeOnOpen"]
            }],
            OPEN: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["focusFirstSelectedDate", "focusActiveCell", "invokeOnOpen"]
            }]
          }
        },
        focused: {
          tags: ["closed"],
          on: {
            "CONTROLLED.OPEN": {
              target: "open",
              actions: ["focusFirstSelectedDate", "focusActiveCell"]
            },
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["focusFirstSelectedDate", "focusActiveCell", "invokeOnOpen"]
            }],
            OPEN: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["focusFirstSelectedDate", "focusActiveCell", "invokeOnOpen"]
            }]
          }
        },
        open: {
          tags: ["open"],
          effects: ["trackDismissableElement", "trackPositioning"],
          exit: ["clearHoveredDate", "resetView"],
          on: {
            "CONTROLLED.CLOSE": [{
              guard: _v87("shouldRestoreFocus", "isInteractOutsideEvent"),
              target: "focused",
              actions: ["focusTriggerElement"]
            }, {
              guard: "shouldRestoreFocus",
              target: "focused",
              actions: ["focusInputElement"]
            }, {
              target: "idle"
            }],
            "CELL.CLICK": [{
              guard: "isAboveMinView",
              actions: ["setFocusedValueForView", "setPreviousView"]
            }, {
              guard: _v87("isRangePicker", "hasSelectedRange"),
              actions: ["setActiveIndexToStart", "resetSelection", "setActiveIndexToEnd"]
            }, {
              guard: _v87("isRangePicker", "isSelectingEndDate", "closeOnSelect", "isOpenControlled"),
              actions: ["setFocusedDate", "setSelectedDate", "setActiveIndexToStart", "invokeOnClose", "setRestoreFocus"]
            }, {
              guard: _v87("isRangePicker", "isSelectingEndDate", "closeOnSelect"),
              target: "focused",
              actions: ["setFocusedDate", "setSelectedDate", "setActiveIndexToStart", "invokeOnClose", "focusInputElement"]
            }, {
              guard: _v87("isRangePicker", "isSelectingEndDate"),
              actions: ["setFocusedDate", "setSelectedDate", "setActiveIndexToStart", "clearHoveredDate"]
            }, {
              guard: "isRangePicker",
              actions: ["setFocusedDate", "setSelectedDate", "setActiveIndexToEnd"]
            }, {
              guard: "isMultiPicker",
              actions: ["setFocusedDate", "toggleSelectedDate"]
            }, {
              guard: _v87("closeOnSelect", "isOpenControlled"),
              actions: ["setFocusedDate", "setSelectedDate", "invokeOnClose"]
            }, {
              guard: "closeOnSelect",
              target: "focused",
              actions: ["setFocusedDate", "setSelectedDate", "invokeOnClose", "focusInputElement"]
            }, {
              actions: ["setFocusedDate", "setSelectedDate"]
            }],
            "CELL.POINTER_MOVE": {
              guard: _v87("isRangePicker", "isSelectingEndDate"),
              actions: ["setHoveredDate", "setFocusedDate"]
            },
            "TABLE.POINTER_LEAVE": {
              guard: "isRangePicker",
              actions: ["clearHoveredDate"]
            },
            "TABLE.POINTER_DOWN": {
              actions: ["disableTextSelection"]
            },
            "TABLE.POINTER_UP": {
              actions: ["enableTextSelection"]
            },
            "TABLE.ESCAPE": [{
              guard: "isOpenControlled",
              actions: ["focusFirstSelectedDate", "invokeOnClose"]
            }, {
              target: "focused",
              actions: ["focusFirstSelectedDate", "invokeOnClose", "focusTriggerElement"]
            }],
            "TABLE.ENTER": [{
              guard: "isAboveMinView",
              actions: ["setPreviousView"]
            }, {
              guard: _v87("isRangePicker", "hasSelectedRange"),
              actions: ["setActiveIndexToStart", "clearDateValue", "setSelectedDate", "setActiveIndexToEnd"]
            }, {
              guard: _v87("isRangePicker", "isSelectingEndDate", "closeOnSelect", "isOpenControlled"),
              actions: ["setSelectedDate", "setActiveIndexToStart", "invokeOnClose"]
            }, {
              guard: _v87("isRangePicker", "isSelectingEndDate", "closeOnSelect"),
              target: "focused",
              actions: ["setSelectedDate", "setActiveIndexToStart", "invokeOnClose", "focusInputElement"]
            }, {
              guard: _v87("isRangePicker", "isSelectingEndDate"),
              actions: ["setSelectedDate", "setActiveIndexToStart"]
            }, {
              guard: "isRangePicker",
              actions: ["setSelectedDate", "setActiveIndexToEnd", "focusNextDay"]
            }, {
              guard: "isMultiPicker",
              actions: ["toggleSelectedDate"]
            }, {
              guard: _v87("closeOnSelect", "isOpenControlled"),
              actions: ["selectFocusedDate", "invokeOnClose"]
            }, {
              guard: "closeOnSelect",
              target: "focused",
              actions: ["selectFocusedDate", "invokeOnClose", "focusInputElement"]
            }, {
              actions: ["selectFocusedDate"]
            }],
            "TABLE.ARROW_RIGHT": [{
              guard: "isMonthView",
              actions: ["focusNextMonth"]
            }, {
              guard: "isYearView",
              actions: ["focusNextYear"]
            }, {
              actions: ["focusNextDay", "setHoveredDate"]
            }],
            "TABLE.ARROW_LEFT": [{
              guard: "isMonthView",
              actions: ["focusPreviousMonth"]
            }, {
              guard: "isYearView",
              actions: ["focusPreviousYear"]
            }, {
              actions: ["focusPreviousDay"]
            }],
            "TABLE.ARROW_UP": [{
              guard: "isMonthView",
              actions: ["focusPreviousMonthColumn"]
            }, {
              guard: "isYearView",
              actions: ["focusPreviousYearColumn"]
            }, {
              actions: ["focusPreviousWeek"]
            }],
            "TABLE.ARROW_DOWN": [{
              guard: "isMonthView",
              actions: ["focusNextMonthColumn"]
            }, {
              guard: "isYearView",
              actions: ["focusNextYearColumn"]
            }, {
              actions: ["focusNextWeek"]
            }],
            "TABLE.PAGE_UP": {
              actions: ["focusPreviousSection"]
            },
            "TABLE.PAGE_DOWN": {
              actions: ["focusNextSection"]
            },
            "TABLE.HOME": [{
              guard: "isMonthView",
              actions: ["focusFirstMonth"]
            }, {
              guard: "isYearView",
              actions: ["focusFirstYear"]
            }, {
              actions: ["focusSectionStart"]
            }],
            "TABLE.END": [{
              guard: "isMonthView",
              actions: ["focusLastMonth"]
            }, {
              guard: "isYearView",
              actions: ["focusLastYear"]
            }, {
              actions: ["focusSectionEnd"]
            }],
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "focused",
              actions: ["invokeOnClose"]
            }],
            "VIEW.TOGGLE": {
              actions: ["setNextView"]
            },
            INTERACT_OUTSIDE: [{
              guard: "isOpenControlled",
              actions: ["setActiveIndexToStart", "invokeOnClose"]
            }, {
              guard: "shouldRestoreFocus",
              target: "focused",
              actions: ["setActiveIndexToStart", "invokeOnClose", "focusTriggerElement"]
            }, {
              target: "idle",
              actions: ["setActiveIndexToStart", "invokeOnClose"]
            }],
            CLOSE: [{
              guard: "isOpenControlled",
              actions: ["setActiveIndexToStart", "invokeOnClose"]
            }, {
              target: "idle",
              actions: ["setActiveIndexToStart", "invokeOnClose"]
            }]
          }
        }
      },
      implementations: {
        guards: {
          isAboveMinView: ({
            context: _v0,
            prop: _v1
          }) => {
            var _v2, _v3;
            return _v2 = _v0.get("view"), _v3 = _v1("minView"), _v83(_v2, 0) > _v83(_v3, 0);
          },
          isDayView: ({
            context: _v0,
            event: _v1
          }) => "day" === (_v1.view || _v0.get("view")),
          isMonthView: ({
            context: _v0,
            event: _v1
          }) => "month" === (_v1.view || _v0.get("view")),
          isYearView: ({
            context: _v0,
            event: _v1
          }) => "year" === (_v1.view || _v0.get("view")),
          isRangePicker: ({
            prop: _v0
          }) => "range" === _v0("selectionMode"),
          hasSelectedRange: ({
            context: _v0
          }) => 2 === _v0.get("value").length,
          isMultiPicker: ({
            prop: _v0
          }) => "multiple" === _v0("selectionMode"),
          shouldRestoreFocus: ({
            context: _v0
          }) => !!_v0.get("restoreFocus"),
          isSelectingEndDate: ({
            context: _v0
          }) => 1 === _v0.get("activeIndex"),
          closeOnSelect: ({
            prop: _v0
          }) => !!_v0("closeOnSelect"),
          isOpenControlled: ({
            prop: _v0
          }) => void 0 != _v0("open"),
          isInteractOutsideEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "INTERACT_OUTSIDE",
          isInputValueEmpty: ({
            event: _v0
          }) => "" === _v0.value.trim(),
          shouldFixOnBlur: ({
            event: _v0
          }) => !!_v0.fixOnBlur
        },
        effects: {
          trackPositioning({
            context: _v0,
            prop: _v1,
            scope: _v2
          }) {
            _v0.get("currentPlacement") || _v0.set("currentPlacement", _v1("positioning").placement);
            let _v3 = _v75(_v2);
            return (0, _v55.getPlacement)(_v3, () => _v2.getById(_v68(_v2)), {
              ..._v1("positioning"),
              defer: !0,
              onComplete(_v0) {
                _v0.set("currentPlacement", _v0.placement);
              }
            });
          },
          setupLiveRegion({
            scope: _v0,
            refs: _v1
          }) {
            let _v2 = _v0.getDoc();
            return _v1.set("announcer", function (_v0 = {}) {
              let {
                  level: _v1 = "polite",
                  document: _v2 = document,
                  root: _v3,
                  delay: _v4 = 0
                } = _v0,
                _v5 = _v2.defaultView ?? window,
                _v6 = _v3 ?? _v2.body;
              return {
                announce: function (_v0, _v1) {
                  let _v2 = _v2.getElementById(_v58);
                  _v2?.remove(), _v1 = _v1 ?? _v4;
                  let _v3 = _v2.createElement("span");
                  _v3.id = _v58, _v3.dataset.liveAnnouncer = "true", _v3.setAttribute("aria-live", _v1), _v3.setAttribute("role", "assertive" !== _v1 ? "status" : "alert"), Object.assign(_v3.style, {
                    border: "0",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: "0",
                    position: "absolute",
                    width: "1px",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                  }), _v6.appendChild(_v3), _v5.setTimeout(() => {
                    _v3.textContent = _v0;
                  }, _v1);
                },
                destroy: function () {
                  let _v0 = _v2.getElementById(_v58);
                  _v0?.remove();
                },
                toJSON: () => _v58
              };
            }({
              level: "assertive",
              document: _v2
            })), () => _v1.get("announcer")?.destroy?.();
          },
          trackDismissableElement: ({
            scope: _v0,
            send: _v1,
            context: _v2
          }) => (0, _v57.trackDismissableElement)(() => _v73(_v0), {
            defer: !0,
            exclude: [..._v74(_v0), _v72(_v0), _v0.getById(_v64(_v0))],
            onInteractOutside(_v0) {
              _v2.set("restoreFocus", !_v0.detail.focusable);
            },
            onDismiss() {
              _v1({
                type: "INTERACT_OUTSIDE"
              });
            },
            onEscapeKeyDown(_v0) {
              _v0.preventDefault(), _v1({
                type: "TABLE.ESCAPE",
                src: "dismissable"
              });
            }
          })
        },
        actions: {
          setNextView({
            context: _v0,
            prop: _v1
          }) {
            var _v2, _v3, _v4;
            let _v5 = (_v2 = _v0.get("view"), _v3 = _v1("minView"), _v4 = _v1("maxView"), _v85(_v84(_v83(_v2, 0) + 1), _v3, _v4));
            _v0.set("view", _v5);
          },
          setPreviousView({
            context: _v0,
            prop: _v1
          }) {
            var _v2, _v3, _v4;
            let _v5 = (_v2 = _v0.get("view"), _v3 = _v1("minView"), _v4 = _v1("maxView"), _v85(_v84(_v83(_v2, 0) - 1), _v3, _v4));
            _v0.set("view", _v5);
          },
          setView({
            context: _v0,
            event: _v1
          }) {
            _v0.set("view", _v1.view);
          },
          setRestoreFocus({
            context: _v0
          }) {
            _v0.set("restoreFocus", !0);
          },
          announceValueText({
            context: _v0,
            prop: _v1,
            refs: _v2
          }) {
            let _v3 = _v0.get("value").map(_v0 => {
              var _v1, _v2;
              let _v3;
              return _v1 = _v1("locale"), _v2 = _v1("timeZone"), _v3 = _v41(_v1, _v2), (0, _v27.isSameDay)(_v0, _v0) ? _v3.format(_v0.toDate(_v2)) : function (_v0, _v1, _v2, _v3, _v4) {
                let _v5 = _v2.formatRangeToParts(_v0.toDate(_v4), _v1.toDate(_v4)),
                  _v6 = -1;
                for (let _v0 = 0; _v0 < _v5.length; _v0++) {
                  let _v0 = _v5[_v0];
                  if ("shared" === _v0.source && "literal" === _v0.type) _v6 = _v0;else if ("endRange" === _v0.source) break;
                }
                let _v7 = "",
                  _v8 = "";
                for (let _v0 = 0; _v0 < _v5.length; _v0++) _v0 < _v6 ? _v7 += _v5[_v0].value : _v0 > _v6 && (_v8 += _v5[_v0].value);
                return _v3(_v7, _v8);
              }(_v0, _v0, _v3, (_v0, _v1) => `${_v0} \u2013 ${_v1}`, _v2);
            });
            _v2.get("announcer")?.announce(_v3.join(","), 0);
          },
          announceVisibleRange({
            computed: _v0,
            refs: _v1
          }) {
            let {
              formatted: _v2
            } = _v0("visibleRangeText");
            _v1.get("announcer")?.announce(_v2);
          },
          disableTextSelection({
            scope: _v0
          }) {
            (0, _v54.disableTextSelection)({
              target: _v73(_v0),
              doc: _v0.getDoc()
            });
          },
          enableTextSelection({
            scope: _v0
          }) {
            (0, _v54.restoreTextSelection)({
              doc: _v0.getDoc(),
              target: _v73(_v0)
            });
          },
          focusFirstSelectedDate(_v0) {
            let {
              context: _v1
            } = _v0;
            _v1.get("value").length && _v91(_v0, _v1.get("value")[0]);
          },
          syncInputElement({
            scope: _v0,
            computed: _v1
          }) {
            (0, _v54.raf)(() => {
              _v74(_v0).forEach((_v0, _v1) => {
                (0, _v54.setElementValue)(_v0, _v1("valueAsString")[_v1] || "");
              });
            });
          },
          setFocusedDate(_v0) {
            let {
              event: _v1
            } = _v0;
            _v91(_v0, Array.isArray(_v1.value) ? _v1.value[0] : _v1.value);
          },
          setFocusedValueForView(_v0) {
            let {
              context: _v1,
              event: _v2
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").set({
              [_v1.get("view")]: _v2.value
            }));
          },
          focusNextMonth(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").add({
              months: 1
            }));
          },
          focusPreviousMonth(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").subtract({
              months: 1
            }));
          },
          setDateValue({
            context: _v0,
            event: _v1,
            prop: _v2
          }) {
            if (!Array.isArray(_v1.value)) return;
            let _v3 = _v1.value.map(_v0 => _v33(_v0, _v2("min"), _v2("max")));
            _v0.set("value", _v3);
          },
          clearDateValue({
            context: _v0
          }) {
            _v0.set("value", []);
          },
          setSelectedDate(_v0) {
            let {
                context: _v1,
                event: _v2
              } = _v0,
              _v3 = Array.from(_v1.get("value"));
            _v3[_v1.get("activeIndex")] = _v90(_v0, _v2.value ?? _v1.get("focusedValue")), _v1.set("value", _v76(_v3));
          },
          resetSelection(_v0) {
            let {
              context: _v1,
              event: _v2
            } = _v0;
            _v1.set("value", [_v2.value ?? _v1.get("focusedValue")]);
          },
          toggleSelectedDate(_v0) {
            let {
                context: _v1,
                event: _v2
              } = _v0,
              _v3 = _v90(_v0, _v2.value ?? _v1.get("focusedValue")),
              _v4 = _v1.get("value").findIndex(_v0 => _v35(_v0, _v3));
            if (-1 === _v4) {
              let _v0 = [..._v1.get("value"), _v3];
              _v1.set("value", _v78(_v0));
            } else {
              let _v0 = Array.from(_v1.get("value"));
              _v0.splice(_v4, 1), _v1.set("value", _v78(_v0));
            }
          },
          setHoveredDate({
            context: _v0,
            event: _v1
          }) {
            _v0.set("hoveredValue", _v1.value);
          },
          clearHoveredDate({
            context: _v0
          }) {
            _v0.set("hoveredValue", null);
          },
          selectFocusedDate({
            context: _v0,
            computed: _v1
          }) {
            let _v2 = Array.from(_v0.get("value")),
              _v3 = _v0.get("activeIndex");
            _v2[_v3] = _v0.get("focusedValue").copy(), _v0.set("value", _v76(_v2));
            let _v4 = _v1("valueAsString");
            _v0.set("inputValue", _v4[_v3]);
          },
          focusPreviousDay(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").subtract({
              days: 1
            }));
          },
          focusNextDay(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").add({
              days: 1
            }));
          },
          focusPreviousWeek(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").subtract({
              weeks: 1
            }));
          },
          focusNextWeek(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").add({
              weeks: 1
            }));
          },
          focusNextPage(_v0) {
            let {
              context: _v1,
              computed: _v2,
              prop: _v3
            } = _v0;
            _v92(_v0, _v50(_v1.get("focusedValue"), _v1.get("startValue"), _v2("visibleDuration"), _v3("locale"), _v3("min"), _v3("max")));
          },
          focusPreviousPage(_v0) {
            let {
              context: _v1,
              computed: _v2,
              prop: _v3
            } = _v0;
            _v92(_v0, _v51(_v1.get("focusedValue"), _v1.get("startValue"), _v2("visibleDuration"), _v3("locale"), _v3("min"), _v3("max")));
          },
          focusSectionStart(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("startValue").copy());
          },
          focusSectionEnd(_v0) {
            let {
              computed: _v1
            } = _v0;
            _v91(_v0, _v1("endValue").copy());
          },
          focusNextSection(_v0) {
            var _v1, _v2, _v3, _v4, _v5, _v6, _v7;
            let _v8,
              {
                context: _v9,
                event: _v10,
                computed: _v11,
                prop: _v12
              } = _v0,
              _v13 = (_v1 = _v9.get("focusedValue"), _v2 = _v9.get("startValue"), _v3 = _v10.larger, _v4 = _v11("visibleDuration"), _v5 = _v12("locale"), _v8 = _v49(_v4, _v5, _v6 = _v12("min"), _v7 = _v12("max")), _v3 || _v4.days ? _v4.days ? _v50(_v1, _v2, _v4, _v5, _v6, _v7) : _v4.weeks ? _v8({
                focusedDate: _v1.add({
                  months: 1
                }),
                startDate: _v2
              }) : _v4.months || _v4.years ? _v8({
                focusedDate: _v1.add({
                  years: 1
                }),
                startDate: _v2
              }) : void 0 : _v8({
                focusedDate: _v1.add(_v38(_v4)),
                startDate: _v2
              }));
            _v13 && _v92(_v0, _v13);
          },
          focusPreviousSection(_v0) {
            var _v1, _v2, _v3, _v4, _v5, _v6, _v7;
            let _v8,
              {
                context: _v9,
                event: _v10,
                computed: _v11,
                prop: _v12
              } = _v0,
              _v13 = (_v1 = _v9.get("focusedValue"), _v2 = _v9.get("startValue"), _v3 = _v10.larger, _v4 = _v11("visibleDuration"), _v5 = _v12("locale"), _v8 = _v49(_v4, _v5, _v6 = _v12("min"), _v7 = _v12("max")), _v3 || _v4.days ? _v4.days ? _v51(_v1, _v2, _v4, _v5, _v6, _v7) : _v4.weeks ? _v8({
                focusedDate: _v1.subtract({
                  months: 1
                }),
                startDate: _v2
              }) : _v4.months || _v4.years ? _v8({
                focusedDate: _v1.subtract({
                  years: 1
                }),
                startDate: _v2
              }) : void 0 : _v8({
                focusedDate: _v1.subtract(_v38(_v4)),
                startDate: _v2
              }));
            _v13 && _v92(_v0, _v13);
          },
          focusNextYear(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").add({
              years: 1
            }));
          },
          focusPreviousYear(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").subtract({
              years: 1
            }));
          },
          focusNextDecade(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").add({
              years: 10
            }));
          },
          focusPreviousDecade(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").subtract({
              years: 10
            }));
          },
          clearFocusedDate(_v0) {
            let {
              prop: _v1
            } = _v0;
            _v91(_v0, _v48(_v1("timeZone")));
          },
          focusPreviousMonthColumn(_v0) {
            let {
              context: _v1,
              event: _v2
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").subtract({
              months: _v2.columns
            }));
          },
          focusNextMonthColumn(_v0) {
            let {
              context: _v1,
              event: _v2
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").add({
              months: _v2.columns
            }));
          },
          focusPreviousYearColumn(_v0) {
            let {
              context: _v1,
              event: _v2
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").subtract({
              years: _v2.columns
            }));
          },
          focusNextYearColumn(_v0) {
            let {
              context: _v1,
              event: _v2
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").add({
              years: _v2.columns
            }));
          },
          focusFirstMonth(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").set({
              month: 0
            }));
          },
          focusLastMonth(_v0) {
            let {
              context: _v1
            } = _v0;
            _v91(_v0, _v1.get("focusedValue").set({
              month: 12
            }));
          },
          focusFirstYear(_v0) {
            let {
                context: _v1
              } = _v0,
              _v2 = _v47(_v1.get("focusedValue").year);
            _v91(_v0, _v1.get("focusedValue").set({
              year: _v2[0]
            }));
          },
          focusLastYear(_v0) {
            let {
                context: _v1
              } = _v0,
              _v2 = _v47(_v1.get("focusedValue").year);
            _v91(_v0, _v1.get("focusedValue").set({
              year: _v2[_v2.length - 1]
            }));
          },
          setActiveIndex({
            context: _v0,
            event: _v1
          }) {
            _v0.set("activeIndex", _v1.index);
          },
          setActiveIndexToEnd({
            context: _v0
          }) {
            _v0.set("activeIndex", 1);
          },
          setActiveIndexToStart({
            context: _v0
          }) {
            _v0.set("activeIndex", 0);
          },
          focusActiveCell({
            scope: _v0,
            context: _v1
          }) {
            (0, _v54.raf)(() => {
              let _v0 = _v1.get("view");
              _v71(_v0, _v0)?.focus({
                preventScroll: !0
              });
            });
          },
          focusActiveCellIfNeeded({
            scope: _v0,
            context: _v1,
            event: _v2
          }) {
            _v2.focus && (0, _v54.raf)(() => {
              let _v0 = _v1.get("view");
              _v71(_v0, _v0)?.focus({
                preventScroll: !0
              });
            });
          },
          setHoveredValueIfKeyboard({
            context: _v0,
            event: _v1,
            prop: _v2
          }) {
            _v1.type.startsWith("TABLE.ARROW") && "range" === _v2("selectionMode") && 0 !== _v0.get("activeIndex") && _v0.set("hoveredValue", _v0.get("focusedValue").copy());
          },
          focusTriggerElement({
            scope: _v0
          }) {
            (0, _v54.raf)(() => {
              _v72(_v0)?.focus({
                preventScroll: !0
              });
            });
          },
          focusFirstInputElement({
            scope: _v0
          }) {
            (0, _v54.raf)(() => {
              let [_v0] = _v74(_v0);
              _v0?.focus({
                preventScroll: !0
              });
            });
          },
          focusInputElement({
            scope: _v0
          }) {
            (0, _v54.raf)(() => {
              let _v0 = _v74(_v0),
                _v1 = Math.max(_v0.findLastIndex(_v0 => "" !== _v0.value), 0),
                _v2 = _v0[_v1];
              _v2?.focus({
                preventScroll: !0
              }), _v2?.setSelectionRange(_v2.value.length, _v2.value.length);
            });
          },
          syncMonthSelectElement({
            scope: _v0,
            context: _v1
          }) {
            let _v2 = _v0.getById(_v69(_v0));
            (0, _v54.setElementValue)(_v2, _v1.get("startValue").month.toString());
          },
          syncYearSelectElement({
            scope: _v0,
            context: _v1
          }) {
            let _v2 = _v0.getById(_v70(_v0));
            (0, _v54.setElementValue)(_v2, _v1.get("startValue").year.toString());
          },
          setInputValue({
            context: _v0,
            event: _v1
          }) {
            _v0.get("activeIndex") === _v1.index && _v0.set("inputValue", _v1.value);
          },
          syncInputValue({
            scope: _v0,
            context: _v1,
            event: _v2
          }) {
            queueMicrotask(() => {
              let _v0 = _v74(_v0),
                _v1 = _v2.index ?? _v1.get("activeIndex");
              (0, _v54.setElementValue)(_v0[_v1], _v1.get("inputValue"));
            });
          },
          focusParsedDate(_v0) {
            let {
              event: _v1,
              prop: _v2
            } = _v0;
            if (null == _v1.index) return;
            let _v3 = _v2("parse")(_v1.value, {
              locale: _v2("locale"),
              timeZone: _v2("timeZone")
            });
            _v3 && _v81(_v3) && _v91(_v0, _v3);
          },
          selectParsedDate({
            context: _v0,
            event: _v1,
            computed: _v2,
            prop: _v3
          }) {
            if (null == _v1.index) return;
            let _v4 = _v3("parse")(_v1.value, {
              locale: _v3("locale"),
              timeZone: _v3("timeZone")
            });
            if (_v4 && _v81(_v4) || !_v1.value || (_v4 = _v0.get("focusedValue").copy()), !_v4) return;
            let _v5 = Array.from(_v0.get("value"));
            _v5[_v1.index] = _v4, _v0.set("value", _v5), _v0.set("inputValue", _v2("valueAsString")[_v1.index]);
          },
          resetView({
            context: _v0
          }) {
            _v0.set("view", _v0.initial("view"));
          },
          setStartValue({
            context: _v0,
            computed: _v1,
            prop: _v2
          }) {
            let _v3 = _v0.get("focusedValue");
            if (!_v37(_v3, _v0.get("startValue"), _v1("endValue"))) return;
            let _v4 = _v34(_v3, "start", {
              months: _v2("numOfMonths")
            }, _v2("locale"));
            _v0.set("startValue", _v4);
          },
          invokeOnOpen({
            prop: _v0
          }) {
            _v0("onOpenChange")?.({
              open: !0
            });
          },
          invokeOnClose({
            prop: _v0
          }) {
            _v0("onOpenChange")?.({
              open: !1
            });
          },
          toggleVisibility({
            event: _v0,
            send: _v1,
            prop: _v2
          }) {
            _v1({
              type: _v2("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
              previousEvent: _v0
            });
          }
        }
      }
    }),
    _v90 = (_v0, _v1) => {
      var _v2;
      let {
          context: _v3,
          prop: _v4
        } = _v0,
        _v5 = _v3.get("view"),
        _v6 = "number" == typeof _v1 ? _v3.get("focusedValue").set({
          [_v5]: _v1
        }) : _v1;
      return _v2 = _v0 => {
        var _v1;
        _v1 = _v4("minView"), _v83(_v0, 0) < _v83(_v1, 0) && (_v6 = _v6.set({
          [_v0]: +("day" === _v0)
        }));
      }, _v86.forEach(_v0 => _v2(_v0)), _v6;
    };
  function _v91(_v0, _v1) {
    let {
      context: _v2,
      prop: _v3,
      computed: _v4
    } = _v0;
    if (!_v1) return;
    let _v5 = _v90(_v0, _v1);
    if (_v35(_v2.get("focusedValue"), _v5)) return;
    let _v6 = _v49(_v4("visibleDuration"), _v3("locale"), _v3("min"), _v3("max"))({
      focusedDate: _v5,
      startDate: _v2.get("startValue")
    });
    _v2.set("startValue", _v6.startDate), _v2.set("focusedValue", _v6.focusedDate);
  }
  function _v92(_v0, _v1) {
    let {
      context: _v2
    } = _v0;
    _v2.set("startValue", _v1.startDate), _v35(_v2.get("focusedValue"), _v1.focusedDate) || _v2.set("focusedValue", _v1.focusedDate);
  }
  var _v93 = (0, _v59.createProps)()(["closeOnSelect", "dir", "disabled", "fixedWeeks", "focusedValue", "format", "parse", "placeholder", "getRootNode", "id", "ids", "isDateUnavailable", "locale", "max", "min", "name", "numOfMonths", "onFocusChange", "onOpenChange", "onValueChange", "onViewChange", "open", "defaultOpen", "positioning", "readOnly", "selectionMode", "startOfWeek", "timeZone", "translations", "value", "defaultView", "defaultValue", "view", "defaultFocusedValue", "outsideDaySelectable", "minView", "maxView"]);
  (0, _v56.createSplitProps)(_v93);
  var _v94 = (0, _v59.createProps)()(["index", "fixOnBlur"]);
  (0, _v56.createSplitProps)(_v94);
  var _v95 = (0, _v59.createProps)()(["value"]);
  (0, _v56.createSplitProps)(_v95);
  var _v96 = (0, _v59.createProps)()(["columns", "id", "view"]);
  (0, _v56.createSplitProps)(_v96);
  var _v97 = (0, _v59.createProps)()(["disabled", "value", "columns"]);
  (0, _v56.createSplitProps)(_v97);
  var _v98 = (0, _v59.createProps)()(["view"]);
  (0, _v56.createSplitProps)(_v98);
  var _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0);
  let _v102 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v23.splitPresenceProps)(_v0),
      [_v4, _v5] = (0, _v11.createSplitProps)()(_v3, ["closeOnSelect", "defaultFocusedValue", "defaultOpen", "defaultValue", "defaultView", "disabled", "fixedWeeks", "focusedValue", "format", "id", "ids", "isDateUnavailable", "locale", "max", "maxView", "min", "minView", "name", "numOfMonths", "onFocusChange", "onOpenChange", "onValueChange", "onViewChange", "open", "outsideDaySelectable", "parse", "placeholder", "positioning", "readOnly", "selectionMode", "startOfWeek", "timeZone", "translations", "value", "view"]),
      _v6 = (_v0 => {
        let _v1 = (0, _v3.useId)(),
          {
            getRootNode: _v2
          } = (0, _v100.useEnvironmentContext)(),
          {
            dir: _v3,
            locale: _v4
          } = (0, _v101.useLocaleContext)(),
          _v5 = {
            id: _v1,
            dir: _v3,
            locale: _v4,
            getRootNode: _v2,
            ..._v0
          };
        return function (_v0, _v1) {
          var _v2;
          let _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            {
              state: _v10,
              context: _v11,
              prop: _v12,
              send: _v13,
              computed: _v14,
              scope: _v15
            } = _v0,
            _v16 = _v11.get("startValue"),
            _v17 = _v14("endValue"),
            _v18 = _v11.get("value"),
            _v19 = _v11.get("focusedValue"),
            _v20 = _v11.get("hoveredValue"),
            _v21 = _v20 ? _v76([_v18[0], _v20]) : [],
            _v22 = _v12("disabled"),
            _v23 = _v12("readOnly"),
            _v24 = _v14("isInteractive"),
            _v25 = _v12("min"),
            _v26 = _v12("max"),
            _v27 = _v12("locale"),
            _v28 = _v12("timeZone"),
            _v29 = _v12("startOfWeek"),
            _v30 = _v10.matches("focused"),
            _v31 = _v10.matches("open"),
            _v32 = "range" === _v12("selectionMode"),
            _v33 = _v12("isDateUnavailable"),
            _v34 = _v11.get("currentPlacement"),
            _v35 = (0, _v55.getPlacementStyles)({
              ..._v12("positioning"),
              placement: _v34
            }),
            _v36 = (_v3 = new Intl.DateTimeFormat(_v27).formatToParts(new Date()).find(_v0 => "literal" === _v0.type)) ? _v3.value : "/",
            _v37 = {
              ..._v82,
              ..._v12("translations")
            };
          function _v38(_v0 = _v16) {
            let _v1,
              _v2 = _v12("fixedWeeks") ? 6 : void 0;
            return _v1 = _v44(_v29), [...Array(_v2 ?? (0, _v27.getWeeksInMonth)(_v0, _v27, _v1)).keys()].map(_v0 => _v46(_v0, _v0, _v27, _v29));
          }
          function _v39(_v0 = {}) {
            let {
              format: _v1
            } = _v0;
            return function (_v0, _v1 = "long") {
              let _v2 = new Date(0, 0, 1),
                _v3 = [];
              for (let _v0 = 0; _v0 < 12; _v0++) _v3.push(_v2.toLocaleString(_v0, {
                month: _v1
              })), _v2.setMonth(_v2.getMonth() + 1);
              return _v3;
            }(_v27, _v1).map((_v0, _v1) => ({
              label: _v0,
              value: _v1 + 1
            }));
          }
          function _v40(_v0) {
            return _v36(_v0, _v33, _v27, _v25, _v26);
          }
          function _v41(_v0) {
            _v13({
              type: "FOCUS.SET",
              value: (_v16 ?? _v48(_v28)).set({
                month: _v0
              })
            });
          }
          function _v42(_v0) {
            _v13({
              type: "FOCUS.SET",
              value: (_v16 ?? _v48(_v28)).set({
                year: _v0
              })
            });
          }
          function _v43(_v0) {
            let {
                value: _v1,
                disabled: _v2
              } = _v0,
              _v3 = {
                focused: _v19.year === _v0.value,
                selectable: (0, _v56.isValueWithinRange)(_v1, _v25?.year ?? 0, _v26?.year ?? 0),
                selected: !!_v18.find(_v0 => _v0.year === _v1),
                valueText: _v1.toString(),
                get disabled() {
                  return _v2 || !_v3.selectable;
                }
              };
            return _v3;
          }
          function _v44(_v0) {
            let {
                value: _v1,
                disabled: _v2
              } = _v0,
              _v3 = _v19.set({
                month: _v1
              }),
              _v4 = _v42(_v27, _v28),
              _v5 = {
                focused: _v19.month === _v0.value,
                selectable: !_v37(_v3, _v25, _v26),
                selected: !!_v18.find(_v0 => _v0.month === _v1 && _v0.year === _v19.year),
                valueText: _v4.format(_v3.toDate(_v28)),
                get disabled() {
                  return _v2 || !_v5.selectable;
                }
              };
            return _v5;
          }
          function _v45(_v0) {
            let {
                value: _v1,
                disabled: _v2,
                visibleRange: _v3 = _v14("visibleRange")
              } = _v0,
              _v4 = _v41(_v27, _v28),
              _v5 = _v38(_v14("visibleDuration")),
              _v6 = _v12("outsideDaySelectable"),
              _v7 = _v3.start.add(_v5).subtract({
                days: 1
              }),
              _v8 = _v37(_v1, _v3.start, _v7),
              _v9 = {
                invalid: _v37(_v1, _v25, _v26),
                disabled: _v2 || !_v6 && _v8 || _v37(_v1, _v25, _v26),
                selected: _v18.some(_v0 => _v35(_v1, _v0)),
                unavailable: _v36(_v1, _v33, _v27, _v25, _v26) && !_v2,
                outsideRange: _v8,
                inRange: _v32 && (_v77(_v1, _v18) || _v77(_v1, _v21)),
                firstInRange: _v32 && _v35(_v1, _v18[0]),
                lastInRange: _v32 && _v35(_v1, _v18[1]),
                today: (0, _v27.isToday)(_v1, _v28),
                weekend: (0, _v27.isWeekend)(_v1, _v27),
                formattedDate: _v4.format(_v1.toDate(_v28)),
                get focused() {
                  return _v35(_v1, _v19) && (!_v9.outsideRange || _v6);
                },
                get ariaLabel() {
                  return _v37.dayCell(_v9);
                },
                get selectable() {
                  return !_v9.disabled && !_v9.unavailable;
                }
              };
            return _v9;
          }
          return {
            focused: _v30,
            open: _v31,
            view: _v11.get("view"),
            getRangePresetValue: _v0 => _v53(_v0, _v27, _v28),
            getDaysInWeek: (_v0, _v1 = _v16) => _v46(_v0, _v1, _v27, _v29),
            getOffset(_v0) {
              let _v1 = _v16.add(_v0),
                _v2 = _v17.add(_v0),
                _v3 = _v42(_v27, _v28);
              return {
                visibleRange: {
                  start: _v1,
                  end: _v2
                },
                weeks: _v38(_v1),
                visibleRangeText: {
                  start: _v3.format(_v1.toDate(_v28)),
                  end: _v3.format(_v2.toDate(_v28))
                }
              };
            },
            getMonthWeeks: _v38,
            isUnavailable: _v40,
            weeks: _v38(),
            weekDays: (_v2 = _v48(_v28), _v4 = _v45(_v2, _v27, _v29), _v5 = [...Array(7).keys()], _v6 = new _v26.DateFormatter(_v27, {
              weekday: "long",
              timeZone: _v28
            }), _v7 = new _v26.DateFormatter(_v27, {
              weekday: "short",
              timeZone: _v28
            }), _v8 = new _v26.DateFormatter(_v27, {
              weekday: "narrow",
              timeZone: _v28
            }), _v9 = _v0 => {
              let _v1 = _v0 instanceof Date ? _v0 : _v0.toDate(_v28);
              return {
                value: _v0,
                short: _v7.format(_v1),
                long: _v6.format(_v1),
                narrow: _v8.format(_v1)
              };
            }, _v5.map(_v0 => _v9(_v4.add({
              days: _v0
            })))),
            visibleRangeText: _v14("visibleRangeText"),
            value: _v18,
            valueAsDate: _v18.map(_v0 => _v0.toDate(_v28)),
            valueAsString: _v14("valueAsString"),
            focusedValue: _v19,
            focusedValueAsDate: _v19?.toDate(_v28),
            focusedValueAsString: _v12("format")(_v19, {
              locale: _v27,
              timeZone: _v28
            }),
            visibleRange: _v14("visibleRange"),
            selectToday() {
              _v13({
                type: "VALUE.SET",
                value: _v33(_v48(_v28), _v25, _v26)
              });
            },
            setValue(_v0) {
              _v13({
                type: "VALUE.SET",
                value: _v0.map(_v0 => _v33(_v0, _v25, _v26))
              });
            },
            clearValue() {
              _v13({
                type: "VALUE.CLEAR"
              });
            },
            setFocusedValue(_v0) {
              _v13({
                type: "FOCUS.SET",
                value: _v0
              });
            },
            setOpen(_v0) {
              _v10.matches("open") !== _v0 && _v13({
                type: _v0 ? "OPEN" : "CLOSE"
              });
            },
            focusMonth: _v41,
            focusYear: _v42,
            getYears: function () {
              return function (_v0) {
                let _v1 = [];
                for (let _v0 = _v0.from; _v0 <= _v0.to; _v0 += 1) _v1.push(_v0);
                return _v1;
              }({
                from: _v25?.year ?? 0,
                to: _v26?.year ?? 0
              }).map(_v0 => ({
                label: _v0.toString(),
                value: _v0
              }));
            },
            getMonths: _v39,
            getYearsGrid(_v0 = {}) {
              let {
                columns: _v1 = 1
              } = _v0;
              return (0, _v56.chunk)(_v47(_v19.year).map(_v0 => ({
                label: _v0.toString(),
                value: _v0
              })), _v1);
            },
            getDecade() {
              let _v0 = _v47(_v19.year);
              return {
                start: _v0.at(0),
                end: _v0.at(-1)
              };
            },
            getMonthsGrid(_v0 = {}) {
              let {
                columns: _v1 = 1,
                format: _v2
              } = _v0;
              return (0, _v56.chunk)(_v39({
                format: _v2
              }), _v1);
            },
            format: (_v0, _v1 = {
              month: "long",
              year: "numeric"
            }) => new _v26.DateFormatter(_v27, _v1).format(_v0.toDate(_v28)),
            setView(_v0) {
              _v13({
                type: "VIEW.SET",
                view: _v0
              });
            },
            goToNext() {
              _v13({
                type: "GOTO.NEXT",
                view: _v11.get("view")
              });
            },
            goToPrev() {
              _v13({
                type: "GOTO.PREV",
                view: _v11.get("view")
              });
            },
            getRootProps: () => _v1.element({
              ..._v61.root.attrs,
              dir: _v12("dir"),
              id: _v15.ids?.root ?? `datepicker:${_v15.id}`,
              "data-state": _v31 ? "open" : "closed",
              "data-disabled": (0, _v54.dataAttr)(_v22),
              "data-readonly": (0, _v54.dataAttr)(_v23)
            }),
            getLabelProps(_v0 = {}) {
              let {
                index: _v1 = 0
              } = _v0;
              return _v1.label({
                ..._v61.label.attrs,
                id: _v15.ids?.label?.(_v1) ?? `datepicker:${_v15.id}:label:${_v1}`,
                dir: _v12("dir"),
                htmlFor: _v66(_v15, _v1),
                "data-state": _v31 ? "open" : "closed",
                "data-index": _v1,
                "data-disabled": (0, _v54.dataAttr)(_v22),
                "data-readonly": (0, _v54.dataAttr)(_v23)
              });
            },
            getControlProps: () => _v1.element({
              ..._v61.control.attrs,
              dir: _v12("dir"),
              id: _v65(_v15),
              "data-disabled": (0, _v54.dataAttr)(_v22)
            }),
            getRangeTextProps: () => _v1.element({
              ..._v61.rangeText.attrs,
              dir: _v12("dir")
            }),
            getContentProps: () => _v1.element({
              ..._v61.content.attrs,
              hidden: !_v31,
              dir: _v12("dir"),
              "data-state": _v31 ? "open" : "closed",
              "data-placement": _v34,
              id: _v62(_v15),
              tabIndex: -1,
              role: "application",
              "aria-roledescription": "datepicker",
              "aria-label": _v37.content
            }),
            getTableProps(_v0 = {}) {
              let {
                  view: _v1 = "day",
                  columns: _v2 = "day" === _v1 ? 7 : 4
                } = _v0,
                _v3 = function (_v0) {
                  let {
                    view: _v1 = "day",
                    id: _v2
                  } = _v0;
                  return [_v1, _v2].filter(Boolean).join(" ");
                }(_v0);
              return _v1.element({
                ..._v61.table.attrs,
                role: "grid",
                "data-columns": _v2,
                "aria-roledescription": (0, _v56.match)(_v1, {
                  year: "calendar decade",
                  month: "calendar year",
                  day: "calendar month"
                }),
                id: _v15.ids?.table?.(_v3) ?? `datepicker:${_v15.id}:table:${_v3}`,
                "aria-readonly": (0, _v54.ariaAttr)(_v23),
                "aria-disabled": (0, _v54.ariaAttr)(_v22),
                "aria-multiselectable": (0, _v54.ariaAttr)("single" !== _v12("selectionMode")),
                "data-view": _v1,
                dir: _v12("dir"),
                tabIndex: -1,
                onKeyDown(_v0) {
                  if (_v0.defaultPrevented) return;
                  let _v1 = {
                    Enter() {
                      _v40(_v19) || _v13({
                        type: "TABLE.ENTER",
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    },
                    ArrowLeft() {
                      _v13({
                        type: "TABLE.ARROW_LEFT",
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    },
                    ArrowRight() {
                      _v13({
                        type: "TABLE.ARROW_RIGHT",
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    },
                    ArrowUp() {
                      _v13({
                        type: "TABLE.ARROW_UP",
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    },
                    ArrowDown() {
                      _v13({
                        type: "TABLE.ARROW_DOWN",
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    },
                    PageUp(_v0) {
                      _v13({
                        type: "TABLE.PAGE_UP",
                        larger: _v0.shiftKey,
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    },
                    PageDown(_v0) {
                      _v13({
                        type: "TABLE.PAGE_DOWN",
                        larger: _v0.shiftKey,
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    },
                    Home() {
                      _v13({
                        type: "TABLE.HOME",
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    },
                    End() {
                      _v13({
                        type: "TABLE.END",
                        view: _v1,
                        columns: _v2,
                        focus: !0
                      });
                    }
                  }[(0, _v54.getEventKey)(_v0, {
                    dir: _v12("dir")
                  })];
                  _v1 && (_v1(_v0), _v0.preventDefault(), _v0.stopPropagation());
                },
                onPointerLeave() {
                  _v13({
                    type: "TABLE.POINTER_LEAVE"
                  });
                },
                onPointerDown() {
                  _v13({
                    type: "TABLE.POINTER_DOWN",
                    view: _v1
                  });
                },
                onPointerUp() {
                  _v13({
                    type: "TABLE.POINTER_UP",
                    view: _v1
                  });
                }
              });
            },
            getTableHeadProps(_v0 = {}) {
              let {
                view: _v1 = "day"
              } = _v0;
              return _v1.element({
                ..._v61.tableHead.attrs,
                "aria-hidden": !0,
                dir: _v12("dir"),
                "data-view": _v1,
                "data-disabled": (0, _v54.dataAttr)(_v22)
              });
            },
            getTableHeaderProps(_v0 = {}) {
              let {
                view: _v1 = "day"
              } = _v0;
              return _v1.element({
                ..._v61.tableHeader.attrs,
                dir: _v12("dir"),
                "data-view": _v1,
                "data-disabled": (0, _v54.dataAttr)(_v22)
              });
            },
            getTableBodyProps(_v0 = {}) {
              let {
                view: _v1 = "day"
              } = _v0;
              return _v1.element({
                ..._v61.tableBody.attrs,
                "data-view": _v1,
                "data-disabled": (0, _v54.dataAttr)(_v22)
              });
            },
            getTableRowProps(_v0 = {}) {
              let {
                view: _v1 = "day"
              } = _v0;
              return _v1.element({
                ..._v61.tableRow.attrs,
                "aria-disabled": (0, _v54.ariaAttr)(_v22),
                "data-disabled": (0, _v54.dataAttr)(_v22),
                "data-view": _v1
              });
            },
            getDayTableCellState: _v45,
            getDayTableCellProps(_v0) {
              let {
                  value: _v1
                } = _v0,
                _v2 = _v45(_v0);
              return _v1.element({
                ..._v61.tableCell.attrs,
                role: "gridcell",
                "aria-disabled": (0, _v54.ariaAttr)(!_v2.selectable),
                "aria-selected": _v2.selected || _v2.inRange,
                "aria-invalid": (0, _v54.ariaAttr)(_v2.invalid),
                "aria-current": _v2.today ? "date" : void 0,
                "data-value": _v1.toString()
              });
            },
            getDayTableCellTriggerProps(_v0) {
              let {
                  value: _v1
                } = _v0,
                _v2 = _v45(_v0);
              return _v1.element({
                ..._v61.tableCellTrigger.attrs,
                id: _v63(_v15, _v1.toString()),
                role: "button",
                dir: _v12("dir"),
                tabIndex: _v2.focused ? 0 : -1,
                "aria-label": _v2.ariaLabel,
                "aria-disabled": (0, _v54.ariaAttr)(!_v2.selectable),
                "aria-invalid": (0, _v54.ariaAttr)(_v2.invalid),
                "data-disabled": (0, _v54.dataAttr)(!_v2.selectable),
                "data-selected": (0, _v54.dataAttr)(_v2.selected),
                "data-value": _v1.toString(),
                "data-view": "day",
                "data-today": (0, _v54.dataAttr)(_v2.today),
                "data-focus": (0, _v54.dataAttr)(_v2.focused),
                "data-unavailable": (0, _v54.dataAttr)(_v2.unavailable),
                "data-range-start": (0, _v54.dataAttr)(_v2.firstInRange),
                "data-range-end": (0, _v54.dataAttr)(_v2.lastInRange),
                "data-in-range": (0, _v54.dataAttr)(_v2.inRange),
                "data-outside-range": (0, _v54.dataAttr)(_v2.outsideRange),
                "data-weekend": (0, _v54.dataAttr)(_v2.weekend),
                onClick(_v0) {
                  _v0.defaultPrevented || _v2.selectable && _v13({
                    type: "CELL.CLICK",
                    cell: "day",
                    value: _v1
                  });
                },
                onPointerMove(_v0) {
                  if ("touch" === _v0.pointerType || !_v2.selectable) return;
                  let _v1 = _v0.currentTarget.ownerDocument.activeElement !== _v0.currentTarget;
                  _v20 && (0, _v27.isEqualDay)(_v1, _v20) || _v13({
                    type: "CELL.POINTER_MOVE",
                    cell: "day",
                    value: _v1,
                    focus: _v1
                  });
                }
              });
            },
            getMonthTableCellState: _v44,
            getMonthTableCellProps(_v0) {
              let {
                  value: _v1,
                  columns: _v2
                } = _v0,
                _v3 = _v44(_v0);
              return _v1.element({
                ..._v61.tableCell.attrs,
                dir: _v12("dir"),
                colSpan: _v2,
                role: "gridcell",
                "aria-selected": (0, _v54.ariaAttr)(_v3.selected),
                "data-selected": (0, _v54.dataAttr)(_v3.selected),
                "aria-disabled": (0, _v54.ariaAttr)(!_v3.selectable),
                "data-value": _v1
              });
            },
            getMonthTableCellTriggerProps(_v0) {
              let {
                  value: _v1
                } = _v0,
                _v2 = _v44(_v0);
              return _v1.element({
                ..._v61.tableCellTrigger.attrs,
                dir: _v12("dir"),
                role: "button",
                id: _v63(_v15, _v1.toString()),
                "data-selected": (0, _v54.dataAttr)(_v2.selected),
                "aria-disabled": (0, _v54.ariaAttr)(!_v2.selectable),
                "data-disabled": (0, _v54.dataAttr)(!_v2.selectable),
                "data-focus": (0, _v54.dataAttr)(_v2.focused),
                "aria-label": _v2.valueText,
                "data-view": "month",
                "data-value": _v1,
                tabIndex: _v2.focused ? 0 : -1,
                onClick(_v0) {
                  _v0.defaultPrevented || _v2.selectable && _v13({
                    type: "CELL.CLICK",
                    cell: "month",
                    value: _v1
                  });
                }
              });
            },
            getYearTableCellState: _v43,
            getYearTableCellProps(_v0) {
              let {
                  value: _v1,
                  columns: _v2
                } = _v0,
                _v3 = _v43(_v0);
              return _v1.element({
                ..._v61.tableCell.attrs,
                dir: _v12("dir"),
                colSpan: _v2,
                role: "gridcell",
                "aria-selected": (0, _v54.ariaAttr)(_v3.selected),
                "data-selected": (0, _v54.dataAttr)(_v3.selected),
                "aria-disabled": (0, _v54.ariaAttr)(!_v3.selectable),
                "data-value": _v1
              });
            },
            getYearTableCellTriggerProps(_v0) {
              let {
                  value: _v1
                } = _v0,
                _v2 = _v43(_v0);
              return _v1.element({
                ..._v61.tableCellTrigger.attrs,
                dir: _v12("dir"),
                role: "button",
                id: _v63(_v15, _v1.toString()),
                "data-selected": (0, _v54.dataAttr)(_v2.selected),
                "data-focus": (0, _v54.dataAttr)(_v2.focused),
                "aria-disabled": (0, _v54.ariaAttr)(!_v2.selectable),
                "data-disabled": (0, _v54.dataAttr)(!_v2.selectable),
                "aria-label": _v2.valueText,
                "data-value": _v1,
                "data-view": "year",
                tabIndex: _v2.focused ? 0 : -1,
                onClick(_v0) {
                  _v0.defaultPrevented || _v2.selectable && _v13({
                    type: "CELL.CLICK",
                    cell: "year",
                    value: _v1
                  });
                }
              });
            },
            getNextTriggerProps(_v0 = {}) {
              let {
                  view: _v1 = "day"
                } = _v0,
                _v2 = _v22 || !_v14("isNextVisibleRangeValid");
              return _v1.button({
                ..._v61.nextTrigger.attrs,
                dir: _v12("dir"),
                id: _v15.ids?.nextTrigger?.(_v1) ?? `datepicker:${_v15.id}:next:${_v1}`,
                type: "button",
                "aria-label": _v37.nextTrigger(_v1),
                disabled: _v2,
                "data-disabled": (0, _v54.dataAttr)(_v2),
                onClick(_v0) {
                  _v0.defaultPrevented || _v13({
                    type: "GOTO.NEXT",
                    view: _v1
                  });
                }
              });
            },
            getPrevTriggerProps(_v0 = {}) {
              let {
                  view: _v1 = "day"
                } = _v0,
                _v2 = _v22 || !_v14("isPrevVisibleRangeValid");
              return _v1.button({
                ..._v61.prevTrigger.attrs,
                dir: _v12("dir"),
                id: _v15.ids?.prevTrigger?.(_v1) ?? `datepicker:${_v15.id}:prev:${_v1}`,
                type: "button",
                "aria-label": _v37.prevTrigger(_v1),
                disabled: _v2,
                "data-disabled": (0, _v54.dataAttr)(_v2),
                onClick(_v0) {
                  _v0.defaultPrevented || _v13({
                    type: "GOTO.PREV",
                    view: _v1
                  });
                }
              });
            },
            getClearTriggerProps: () => _v1.button({
              ..._v61.clearTrigger.attrs,
              id: _v64(_v15),
              dir: _v12("dir"),
              type: "button",
              "aria-label": _v37.clearTrigger,
              hidden: !_v18.length,
              onClick(_v0) {
                _v0.defaultPrevented || _v13({
                  type: "VALUE.CLEAR"
                });
              }
            }),
            getTriggerProps: () => _v1.button({
              ..._v61.trigger.attrs,
              id: _v67(_v15),
              dir: _v12("dir"),
              type: "button",
              "data-placement": _v34,
              "aria-label": _v37.trigger(_v31),
              "aria-controls": _v62(_v15),
              "data-state": _v31 ? "open" : "closed",
              "aria-haspopup": "grid",
              disabled: _v22,
              onClick(_v0) {
                _v0.defaultPrevented || _v24 && _v13({
                  type: "TRIGGER.CLICK"
                });
              }
            }),
            getViewProps(_v0 = {}) {
              let {
                view: _v1 = "day"
              } = _v0;
              return _v1.element({
                ..._v61.view.attrs,
                "data-view": _v1,
                hidden: _v11.get("view") !== _v1
              });
            },
            getViewTriggerProps(_v0 = {}) {
              let {
                view: _v1 = "day"
              } = _v0;
              return _v1.button({
                ..._v61.viewTrigger.attrs,
                "data-view": _v1,
                dir: _v12("dir"),
                id: _v15.ids?.viewTrigger?.(_v1) ?? `datepicker:${_v15.id}:view:${_v1}`,
                type: "button",
                disabled: _v22,
                "aria-label": _v37.viewTrigger(_v1),
                onClick(_v0) {
                  _v0.defaultPrevented || _v24 && _v13({
                    type: "VIEW.TOGGLE",
                    src: "viewTrigger"
                  });
                }
              });
            },
            getViewControlProps(_v0 = {}) {
              let {
                view: _v1 = "day"
              } = _v0;
              return _v1.element({
                ..._v61.viewControl.attrs,
                "data-view": _v1,
                dir: _v12("dir")
              });
            },
            getInputProps(_v0 = {}) {
              let {
                index: _v1 = 0,
                fixOnBlur: _v2 = !0
              } = _v0;
              return _v1.input({
                ..._v61.input.attrs,
                id: _v66(_v15, _v1),
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                dir: _v12("dir"),
                name: _v12("name"),
                "data-index": _v1,
                "data-state": _v31 ? "open" : "closed",
                readOnly: _v23,
                disabled: _v22,
                placeholder: _v12("placeholder") || new _v26.DateFormatter(_v27).formatToParts(new Date()).map(_v0 => _v79[_v0.type] ?? _v0.value).join(""),
                defaultValue: _v14("valueAsString")[_v1],
                onBeforeInput(_v0) {
                  let {
                    data: _v1
                  } = (0, _v54.getNativeEvent)(_v0);
                  _v80(_v1, _v36) || _v0.preventDefault();
                },
                onFocus() {
                  _v13({
                    type: "INPUT.FOCUS",
                    index: _v1
                  });
                },
                onBlur(_v0) {
                  _v13({
                    type: "INPUT.BLUR",
                    value: _v0.currentTarget.value.trim(),
                    index: _v1,
                    fixOnBlur: _v2
                  });
                },
                onKeyDown(_v0) {
                  if (_v0.defaultPrevented || !_v24) return;
                  let _v1 = {
                    Enter(_v0) {
                      (0, _v54.isComposingEvent)(_v0) || _v40(_v19) || "" !== _v0.currentTarget.value.trim() && _v13({
                        type: "INPUT.ENTER",
                        value: _v0.currentTarget.value,
                        index: _v1
                      });
                    }
                  }[_v0.key];
                  _v1 && (_v1(_v0), _v0.preventDefault());
                },
                onInput(_v0) {
                  let _v1;
                  _v13({
                    type: "INPUT.CHANGE",
                    value: (_v1 = _v0.currentTarget.value, _v1.split("").filter(_v0 => _v80(_v0, _v36)).join("")),
                    index: _v1
                  });
                }
              });
            },
            getMonthSelectProps: () => _v1.select({
              ..._v61.monthSelect.attrs,
              id: _v69(_v15),
              "aria-label": _v37.monthSelect,
              disabled: _v22,
              dir: _v12("dir"),
              defaultValue: _v16.month,
              onChange(_v0) {
                _v41(Number(_v0.currentTarget.value));
              }
            }),
            getYearSelectProps: () => _v1.select({
              ..._v61.yearSelect.attrs,
              id: _v70(_v15),
              disabled: _v22,
              "aria-label": _v37.yearSelect,
              dir: _v12("dir"),
              defaultValue: _v16.year,
              onChange(_v0) {
                _v42(Number(_v0.currentTarget.value));
              }
            }),
            getPositionerProps: () => _v1.element({
              id: _v68(_v15),
              ..._v61.positioner.attrs,
              dir: _v12("dir"),
              style: _v35.floating
            }),
            getPresetTriggerProps(_v0) {
              let _v1 = Array.isArray(_v0.value) ? _v0.value : _v53(_v0.value, _v27, _v28),
                _v2 = _v1.map(_v0 => _v0.toDate(_v28).toDateString());
              return _v1.button({
                ..._v61.presetTrigger.attrs,
                "aria-label": _v37.presetTrigger(_v2),
                type: "button",
                onClick(_v0) {
                  _v0.defaultPrevented || _v13({
                    type: "PRESET.CLICK",
                    value: _v1
                  });
                }
              });
            }
          };
        }((0, _v99.useMachine)(_v89, _v5), _v99.normalizeProps);
      })(_v4),
      _v7 = (0, _v24.usePresence)((0, _v2.mergeProps)({
        present: _v6.open
      }, _v2)),
      _v8 = (0, _v2.mergeProps)(_v6.getRootProps(), _v5);
    return (0, _v1.jsx)(_v5.DatePickerProvider, {
      value: _v6,
      children: (0, _v1.jsx)(_v8.PresenceProvider, {
        value: _v7,
        children: (0, _v1.jsx)(_v4.ark.div, {
          ..._v8,
          ref: _v1
        })
      })
    });
  });
  _v102.displayName = "DatePickerRoot";
  let _v103 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v23.splitPresenceProps)(_v0),
      [{
        value: _v4
      }, _v5] = (0, _v11.createSplitProps)()(_v3, ["value"]),
      _v6 = (0, _v24.usePresence)((0, _v2.mergeProps)({
        present: _v4.open
      }, _v2)),
      _v7 = (0, _v2.mergeProps)(_v4.getRootProps(), _v5);
    return (0, _v1.jsx)(_v5.DatePickerProvider, {
      value: _v4,
      children: (0, _v1.jsx)(_v8.PresenceProvider, {
        value: _v6,
        children: (0, _v1.jsx)(_v4.ark.div, {
          ..._v7,
          ref: _v1
        })
      })
    });
  });
  _v103.displayName = "DatePickerRootProvider";
  let [_v104, _v105] = (0, _v15.createContext)({
      name: "DatePickerTableContext",
      hookName: "useDatePickerTableContext",
      providerName: "<DatePickerTableProvider />"
    }),
    _v106 = (0, _v3.forwardRef)((_v0, _v1) => {
      let [{
          columns: _v2
        }, _v3] = (0, _v11.createSplitProps)()(_v0, ["columns"]),
        _v4 = (0, _v5.useDatePickerContext)(),
        _v5 = _v17(),
        _v6 = {
          columns: _v2,
          id: (0, _v3.useId)(),
          ..._v5
        },
        _v7 = (0, _v2.mergeProps)(_v4.getTableProps(_v6), _v3);
      return (0, _v1.jsx)(_v104, {
        value: _v6,
        children: (0, _v1.jsx)(_v4.ark.table, {
          ..._v7,
          ref: _v1
        })
      });
    });
  _v106.displayName = "DatePickerTable";
  let _v107 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = _v105(),
      _v4 = (0, _v2.mergeProps)(_v2.getTableBodyProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.tbody, {
      ..._v4,
      ref: _v1
    });
  });
  _v107.displayName = "DatePickerTableBody";
  let [_v108, _v109] = (0, _v15.createContext)({
      name: "DatePickerTableCellContext",
      hookName: "useDatePickerTableCellContext",
      providerName: "<DatePickerTableCellProvider />"
    }),
    _v110 = (0, _v3.forwardRef)((_v0, _v1) => {
      let [_v2, _v3] = (0, _v11.createSplitProps)()(_v0, ["disabled", "value", "visibleRange", "columns"]),
        _v4 = (0, _v5.useDatePickerContext)(),
        _v5 = _v17(),
        _v6 = {
          day: _v4.getDayTableCellProps,
          month: _v4.getMonthTableCellProps,
          year: _v4.getYearTableCellProps
        }[_v5.view](_v2),
        _v7 = (0, _v2.mergeProps)(_v6, _v3);
      return (0, _v1.jsx)(_v108, {
        value: _v2,
        children: (0, _v1.jsx)(_v4.ark.td, {
          ref: _v1,
          ..._v7
        })
      });
    });
  _v110.displayName = "DatePickerTableCell";
  let _v111 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = _v109(),
      _v4 = _v17(),
      _v5 = (0, {
        day: _v2.getDayTableCellTriggerProps,
        month: _v2.getMonthTableCellTriggerProps,
        year: _v2.getYearTableCellTriggerProps
      }[_v4.view])(_v3),
      _v6 = (0, _v2.mergeProps)(_v5, _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ref: _v1,
      ..._v6
    });
  });
  _v111.displayName = "DatePickerTableCellTrigger";
  let _v112 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = _v105(),
      _v4 = (0, _v2.mergeProps)(_v2.getTableHeadProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.thead, {
      ..._v4,
      ref: _v1
    });
  });
  _v112.displayName = "DatePickerTableHead";
  let _v113 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = _v105(),
      _v4 = (0, _v2.mergeProps)(_v2.getTableHeaderProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.th, {
      ..._v4,
      ref: _v1
    });
  });
  _v113.displayName = "DatePickerTableHeader";
  let _v114 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = _v105(),
      _v4 = (0, _v2.mergeProps)(_v2.getTableRowProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.tr, {
      ..._v4,
      ref: _v1
    });
  });
  _v114.displayName = "DatePickerTableRow";
  let _v115 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getTriggerProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v115.displayName = "DatePickerTrigger";
  let _v116 = _v60.extendWith("view"),
    _v117 = (0, _v3.forwardRef)((_v0, _v1) => {
      let [_v2, _v3] = (0, _v11.createSplitProps)()(_v0, ["view"]),
        _v4 = (0, _v5.useDatePickerContext)();
      return (0, _v1.jsx)(_v16, {
        value: _v2,
        children: (0, _v1.jsx)(_v4.ark.div, {
          hidden: _v4.view !== _v2.view,
          ..._v116.build().view.attrs,
          ..._v3,
          ref: _v1
        })
      });
    });
  _v117.displayName = "DatePickerView";
  let _v118 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = _v17(),
      _v4 = (0, _v2.mergeProps)(_v2.getViewControlProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v4,
      ref: _v1
    });
  });
  _v118.displayName = "DatePickerViewControl";
  let _v119 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = _v17(),
      _v4 = (0, _v2.mergeProps)(_v2.getViewTriggerProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v4,
      ref: _v1
    });
  });
  _v119.displayName = "DatePickerViewTrigger";
  let _v120 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useDatePickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getYearSelectProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.select, {
      ..._v3,
      ref: _v1,
      children: _v2.getYears().map((_v0, _v1) => (0, _v1.jsx)("option", {
        value: _v0.value,
        children: _v0.label
      }, _v1))
    });
  });
  _v120.displayName = "DatePickerYearSelect", _v0.s(["ClearTrigger", 0, _v6, "Content", 0, _v9, "Context", 0, _v0 => _v0.children((0, _v5.useDatePickerContext)()), "Control", 0, _v10, "Input", 0, _v12, "Label", 0, _v13, "MonthSelect", 0, _v14, "NextTrigger", 0, _v18, "Positioner", 0, _v19, "PresetTrigger", 0, _v20, "PrevTrigger", 0, _v21, "RangeText", 0, _v22, "Root", 0, _v102, "RootProvider", 0, _v103, "Table", 0, _v106, "TableBody", 0, _v107, "TableCell", 0, _v110, "TableCellTrigger", 0, _v111, "TableHead", 0, _v112, "TableHeader", 0, _v113, "TableRow", 0, _v114, "Trigger", 0, _v115, "View", 0, _v117, "ViewControl", 0, _v118, "ViewTrigger", 0, _v119, "YearSelect", 0, _v120], 0);
  var _v121 = _v0.i(0),
    _v121 = _v121,
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0);
  let _v134 = _v0 => (0, _v1.jsx)(_v133.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsxs)("g", {
        fill: "currentColor",
        children: [(0, _v1.jsx)("path", {
          d: "M8 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM16 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8 15.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 15.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM16 15.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        }), (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.5 3.5a1 1 0 0 0-2 0V4H7a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-.5v-.5a1 1 0 1 0-2 0V4h-5v-.5ZM5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2H5Zm0 2h14v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7Z"
        })]
      })
    }),
    {
      Root: _v135,
      Label: _v136,
      Control: _v137,
      Input: _v138,
      Trigger: _v139,
      ClearTrigger: _v140,
      Positioner: _v141,
      Content: _v142,
      YearSelect: _v143,
      MonthSelect: _v144,
      View: _v145,
      ViewControl: _v146,
      ViewTrigger: _v147,
      PrevTrigger: _v148,
      NextTrigger: _v149,
      RangeText: _v150,
      Table: _v151,
      TableHead: _v152,
      TableRow: _v153,
      TableHeader: _v154,
      TableBody: _v155,
      TableCell: _v156,
      TableCellTrigger: _v157,
      PresetTrigger: _v158,
      Context: _v159
    } = _v121,
    [_v160, _v161] = (0, _v123.createStylesContext)("DatePicker"),
    _v162 = _v0 => {
      let {
        navButton: _v1,
        navIcon: _v2
      } = _v161();
      return (0, _v1.jsx)(_v148, {
        asChild: !0,
        children: (0, _v1.jsx)(_v124.Box, {
          as: "button",
          __css: _v1,
          ..._v0,
          children: (0, _v1.jsx)(_v131.ChevronLeft, {
            boxSize: "sm",
            __css: _v2
          })
        })
      });
    },
    _v163 = _v0 => {
      let {
        navButton: _v1,
        navIcon: _v2
      } = _v161();
      return (0, _v1.jsx)(_v149, {
        asChild: !0,
        children: (0, _v1.jsx)(_v124.Box, {
          as: "button",
          __css: _v1,
          ..._v0,
          children: (0, _v1.jsx)(_v132.ChevronRight, {
            boxSize: "sm",
            __css: _v2
          })
        })
      });
    },
    _v164 = () => {
      let {
        contentHeader: _v0
      } = _v161();
      return (0, _v1.jsx)(_v146, {
        asChild: !0,
        children: (0, _v1.jsxs)(_v124.Box, {
          __css: _v0,
          children: [(0, _v1.jsx)(_v150, {}), (0, _v1.jsxs)(_v124.Box, {
            children: [(0, _v1.jsx)(_v162, {}), (0, _v1.jsx)(_v163, {})]
          })]
        })
      });
    },
    _v165 = _v0 => {
      let {
        trigger: _v1
      } = _v161();
      return (0, _v1.jsx)(_v139, {
        asChild: !0,
        children: (0, _v1.jsx)(_v130.chakra.button, {
          __css: _v1,
          ..._v0,
          children: (0, _v1.jsx)(_v134, {})
        })
      });
    },
    _v166 = ({
      width: _v0,
      children: _v1,
      ..._v2
    }) => (0, _v1.jsx)(_v137, {
      ..._v2,
      style: {
        width: "max-content"
      },
      children: _v1 || (0, _v1.jsxs)(_v126.InputGroup, {
        width: _v0,
        children: [(0, _v1.jsx)(_v138, {
          asChild: !0,
          children: (0, _v1.jsx)(_v127.Input, {})
        }), (0, _v1.jsx)(_v128.InputRightElement, {
          children: (0, _v1.jsx)(_v165, {})
        })]
      })
    }),
    _v167 = ({
      children: _v0,
      ..._v1
    }) => {
      let {
          cell: _v2
        } = _v161(),
        _v3 = _v3.default.useRef(null),
        [_v4, _v5] = _v3.default.useState(0);
      return (0, _v3.useLayoutEffect)(() => {
        let _v0 = new ResizeObserver(() => {
          if (_v3.current) {
            let {
              width: _v0
            } = _v3.current.getBoundingClientRect();
            _v5(_v0);
          }
        });
        return _v3.current && _v0.observe(_v3.current), () => {
          _v0.disconnect();
        };
      }, []), (0, _v1.jsx)(_v156, {
        ..._v1,
        asChild: !0,
        children: (0, _v1.jsx)(_v157, {
          asChild: !0,
          children: (0, _v1.jsx)(_v124.Box, {
            as: "button",
            __css: _v2,
            ref: _v3,
            height: _v4,
            children: _v0
          })
        })
      });
    },
    _v168 = ({
      view: _v0 = "day",
      width: _v1 = "350px",
      ..._v2
    }) => {
      let {
        content: _v3,
        headerCell: _v4,
        row: _v5
      } = _v161();
      return (0, _v1.jsx)(_v124.Box, {
        __css: _v3,
        width: _v1,
        ..._v2,
        children: (0, _v1.jsx)(_v145, {
          view: _v0,
          children: (0, _v1.jsx)(_v159, {
            children: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v164, {}), (0, _v1.jsxs)(_v151, {
                width: "100%",
                children: [(0, _v1.jsx)(_v152, {
                  children: (0, _v1.jsx)(_v153, {
                    asChild: !0,
                    children: (0, _v1.jsx)(_v124.Box, {
                      __css: _v5,
                      children: _v0.weekDays.map((_v0, _v1) => (0, _v1.jsx)(_v154, {
                        asChild: !0,
                        children: (0, _v1.jsx)(_v124.Box, {
                          __css: _v4,
                          children: _v0.narrow
                        })
                      }, _v1))
                    })
                  })
                }), (0, _v1.jsx)(_v155, {
                  asChild: !0,
                  children: (0, _v1.jsx)(_v124.Box, {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                    children: _v0.weeks.map((_v0, _v1) => (0, _v1.jsx)(_v153, {
                      asChild: !0,
                      children: (0, _v1.jsx)(_v124.Box, {
                        __css: _v5,
                        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v167, {
                          value: _v0,
                          children: _v0.day
                        }, _v1))
                      })
                    }, _v1))
                  })
                })]
              })]
            })
          })
        })
      });
    };
  _v0.s(["Calendar", 0, _v168, "DatePicker", 0, ({
    width: _v0 = "calc(100% + 2.5rem)",
    children: _v1,
    ..._v2
  }) => {
    let _v3 = (0, _v125.useMultiStyleConfig)("DatePicker", {});
    return (0, _v1.jsx)(_v160, {
      value: _v3,
      children: (0, _v1.jsx)(_v135, {
        ..._v2,
        children: _v1 || (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v166, {
            width: _v0
          }), (0, _v1.jsx)(_v122.Portal, {
            children: (0, _v1.jsx)(_v141, {
              children: (0, _v1.jsx)(_v142, {
                children: (0, _v1.jsx)(_v168, {})
              })
            })
          })]
        })
      })
    });
  }, "DatePickerCalendarTrigger", 0, _v165, "DatePickerCell", 0, _v167, "DatePickerClearTrigger", 0, _v140, "DatePickerContent", 0, _v142, "DatePickerContext", 0, _v159, "DatePickerControl", 0, _v137, "DatePickerInput", 0, _v166, "DatePickerInputBase", 0, _v138, "DatePickerLabel", 0, _v136, "DatePickerMonthSelect", 0, _v144, "DatePickerNextTrigger", 0, _v163, "DatePickerNextTriggerBase", 0, _v149, "DatePickerPositioner", 0, _v141, "DatePickerPresetTrigger", 0, ({
    variant: _v0 = "tertiary",
    size: _v1 = "sm",
    value: _v2,
    label: _v3,
    ..._v4
  }) => (0, _v1.jsx)(_v158, {
    value: _v2,
    asChild: !0,
    children: (0, _v1.jsx)(_v129.Button, {
      variant: _v0,
      size: _v1,
      ..._v4,
      children: _v3
    })
  }), "DatePickerPresetTriggerBase", 0, _v158, "DatePickerPrevTrigger", 0, _v162, "DatePickerPrevTriggerBase", 0, _v148, "DatePickerRangeText", 0, _v150, "DatePickerRootBase", 0, _v135, "DatePickerTable", 0, _v151, "DatePickerTableBody", 0, _v155, "DatePickerTableCell", 0, _v156, "DatePickerTableCellTrigger", 0, _v157, "DatePickerTableHead", 0, _v152, "DatePickerTableHeader", 0, _v154, "DatePickerTableRow", 0, _v153, "DatePickerTrigger", 0, _v139, "DatePickerView", 0, _v145, "DatePickerViewControl", 0, _v146, "DatePickerViewTrigger", 0, _v147, "DatePickerYearSelect", 0, _v143], 0);
}