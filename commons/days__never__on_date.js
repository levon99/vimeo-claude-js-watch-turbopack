{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.i(0);
  var _v11 = _v0.i(0);
  function _v12(_v0) {
    if (!_v0) return !1;
    try {
      return !!_v11.RRule.parseString(_v0).until;
    } catch {
      return !1;
    }
  }
  function _v13(_v0, _v1, _v2) {
    let _v3 = _v0.setZone(_v2).startOf("day");
    return Math.max(0, Math.round(_v1.setZone(_v2).startOf("day").diff(_v3, "days").as("days")));
  }
  function _v14(_v0, _v1) {
    let _v2 = _v11.RRule.parseString(_v0);
    return _v1(_v2), _v11.RRule.optionsToString(_v2);
  }
  function _v15(_v0, _v1, _v2, _v3, _v4) {
    return _v14(_v0, _v0 => {
      let _v1,
        _v2 = _v1.setZone(_v2, {
          keepLocalTime: !0
        }).startOf("day"),
        _v3 = _v2;
      if (_v3 && _v4) {
        let _v0 = _v13(_v4, _v3, _v2);
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
  let _v16 = "never",
    _v17 = "on_date";
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
    let _v8 = _v12(_v0) ? _v17 : _v16,
      _v9 = (0, _v3.useMemo)(() => function (_v0, _v1, _v2, _v3) {
        if (_v12(_v0) && _v0) try {
          let _v0 = _v11.RRule.parseString(_v0);
          if (!_v0.until) return;
          let _v1 = _v2.DateTime.fromJSDate(_v0.until).setZone(_v1);
          if (void 0 === _v2 || void 0 === _v3) return _v1;
          let _v2 = _v13(_v3, _v2, _v1),
            _v3 = _v1.startOf("day").minus({
              days: _v2
            }),
            _v4 = _v15(_v0, _v3, _v1, _v2, _v3),
            _v5 = _v11.RRule.parseString(_v4).until?.getTime(),
            _v6 = _v0.until.getTime();
          if (void 0 !== _v5 && _v5 === _v6) return _v3;
          return _v1;
        } catch {
          return;
        }
      }(_v0, _v1, _v3, _v2), [_v0, _v1, _v3, _v2]),
      _v10 = (0, _v3.useMemo)(() => _v2 ? _v2.setZone(_v1).startOf("day") : _v2.DateTime.utc().setZone(_v1).startOf("day"), [_v2, _v1]),
      _v11 = (0, _v3.useMemo)(() => [{
        value: _v16,
        label: (0, _v9.translate)({
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
        value: _v17,
        label: (0, _v9.translate)({
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
      _v12 = (0, _v3.useCallback)(_v0 => {
        if (_v0 === _v16) return void _v7(_v14(_v0, _v0 => {
          delete _v0.until, null != _v0.count && delete _v0.count;
        }));
        let _v1 = _v2.DateTime.utc().setZone(_v1).startOf("day");
        _v7(_v15(_v0, _v2.DateTime.max(_v1, _v10), _v1, _v3, _v2));
      }, [_v0, _v7, _v1, _v10, _v3, _v2]),
      _v13 = (0, _v3.useCallback)(_v0 => {
        (_v0 === _v16 || _v0 === _v17) && _v12(_v0);
      }, [_v12]),
      _v14 = (0, _v3.useCallback)(_v0 => {
        _v7(_v15(_v0, _v2.DateTime.fromJSDate(_v0).setZone(_v1, {
          keepLocalTime: !0
        }), _v1, _v3, _v2));
      }, [_v0, _v7, _v1, _v3, _v2]);
    return (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      gap: (0, _v7.rem)(8),
      width: "100%",
      "data-testid": "recurrence-end",
      children: [(0, _v1.jsx)(_v6.Header, {
        size: "xs",
        color: "text-primary",
        children: (0, _v9.translate)({
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
      }), (0, _v1.jsxs)(_v5.Flex, {
        direction: _v6 ? "column" : "row",
        gap: (0, _v7.rem)(8),
        width: "100%",
        children: [(0, _v1.jsx)(_v4.Box, {
          flex: _v6 ? void 0 : "1 1 0",
          minWidth: 0,
          position: "relative",
          width: _v6 ? "100%" : void 0,
          children: (0, _v1.jsx)(_v8.Select, {
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
        }), _v6 ? _v8 === _v17 ? (0, _v1.jsx)(_v4.Box, {
          width: "100%",
          minWidth: 0,
          "data-testid": "recurrence-end-date-input",
          children: (0, _v1.jsx)(_v10.DatePicker, {
            id: "recurrence-end-date",
            className: "recurrence-end-date-picker",
            isDisabled: _v4,
            isLoading: _v5,
            size: "sm",
            date: _v9?.startOf("day"),
            minDate: _v10,
            onSelect: _v14
          })
        }) : null : (0, _v1.jsx)(_v4.Box, {
          flex: "1 1 0",
          minWidth: 0,
          "data-testid": "recurrence-end-date-input",
          children: _v8 === _v17 ? (0, _v1.jsx)(_v10.DatePicker, {
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
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  function _v22(_v0, _v1 = "en") {
    let _v2 = _v0.setLocale(_v1).toLocaleString({
        weekday: "long"
      }),
      {
        day: _v3
      } = _v0,
      _v4 = _v0.plus({
        weeks: 1
      }).day,
      _v5 = (0, _v9.translate)({
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
    return _v4 > _v3 && (_v5 = [(0, _v9.translate)({
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
    }), (0, _v9.translate)({
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
    }), (0, _v9.translate)({
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
    })][((Math.ceil(_v3 / 7) + 90) % 100 - 10) % 10 - 1] || (0, _v9.translate)({
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
  function _v23(_v0) {
    let {
        day: _v1,
        weekday: _v2
      } = _v0,
      _v3 = _v0.plus({
        weeks: 1
      }).day,
      _v4 = -1;
    return _v3 > _v1 && (_v4 = [1, 2, 3][((Math.ceil(_v1 / 7) + 90) % 100 - 10) % 10 - 1] || 4), new _v21.Weekday(_v2 - 1, _v4);
  }
  function _v24(_v0) {
    return (Array.isArray(_v0) ? _v0 : [_v0]).map(_v0 => _v0 instanceof _v21.Weekday ? _v0.weekday : Number.isInteger(_v0) ? Number(_v0) : _v21.Weekday.fromStr(_v0).weekday);
  }
  _v0.s(["getNthDateStringByTime", 0, _v22, "getNthWeekday", 0, _v23], 0), _v0.s(["convertMonthDaysToTimeZone", 0, function (_v0, _v1, _v2) {
    return Array.isArray(_v0) ? _v0.map(_v0 => _v1.toUTC().set({
      day: _v0
    }).setZone(_v2).day) : _v1.toUTC().set({
      day: _v0
    }).setZone(_v2).day;
  }, "convertWeekdaysToTimeZone", 0, function (_v0 = [], _v1, _v2) {
    return _v24(_v0).map(_v0 => Number(_v1.toUTC().set({
      weekday: _v0 + 1
    }).setZone(_v2).toFormat("c")) - 1);
  }, "rruleWeekDaysToArray", 0, _v24], 0);
  let _v25 = [{
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
    _v26 = [{
      label: _v0 => (0, _v9.translate)({
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
      value: _v11.RRule.DAILY
    }, {
      label: _v0 => (0, _v9.translate)({
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
      value: _v11.RRule.WEEKLY
    }, {
      label: _v0 => (0, _v9.translate)({
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
      value: _v11.RRule.MONTHLY
    }, {
      label: _v0 => (0, _v9.translate)({
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
      value: _v11.RRule.YEARLY
    }],
    _v27 = "mday",
    _v28 = "wday";
  _v0.s(["RecurringOptions", 0, function ({
    rrule: _v0,
    startTime: _v1,
    isVertical: _v2 = !1,
    onChange: _v3
  }) {
    let [_v4, _v5] = (0, _v3.useState)(1),
      _v6 = (0, _v3.useMemo)(() => _v0 ? _v11.RRule.parseString(_v0) : {
        freq: _v11.RRule.WEEKLY,
        interval: 1,
        byweekday: []
      }, [_v0]),
      _v7 = (0, _v3.useMemo)(() => _v6.freq === _v11.RRule.WEEKLY && _v6.byweekday ? _v24(_v6.byweekday) : [], [_v6.freq, _v6.byweekday]),
      _v8 = (0, _v3.useMemo)(() => [{
        value: _v27,
        label: (0, _v9.translate)({
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
        value: _v28,
        label: (0, _v9.translate)({
          singular: "Monthly on the {DayName}",
          replacements: {
            DayName: _v22(_v1, (0, _v9.getCurrentLocale)())
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
    (0, _v3.useEffect)(() => {
      _v6?.interval && _v6.interval > 0 && _v5(_v6.interval);
    }, [_v6?.interval]);
    let _v9 = (0, _v3.useCallback)(_v0 => {
        _v5(_v0.target.value);
        let _v1 = Number(_v0.target.value);
        _v1 <= 0 ? delete _v6.interval : _v6.interval = _v1, _v3(_v11.RRule.optionsToString(_v6));
      }, [_v6, _v3]),
      _v10 = (0, _v3.useCallback)(_v0 => {
        _v6.freq !== _v0 && (_v6.freq = _v0, _v6.byweekday = [], _v6.bymonthday = null, _v0 === _v11.RRule.MONTHLY && (_v6.bymonthday = _v1.day), _v0 === _v11.RRule.YEARLY && _v6?.interval && (_v6.interval %= 0), _v3(_v11.RRule.optionsToString(_v6)));
      }, [_v6, _v1, _v3]),
      _v11 = (0, _v3.useCallback)(_v0 => {
        let _v1 = Number(_v0.target.value),
          _v2 = _v7;
        _v7.includes(_v1) ? _v2 = _v7.filter(_v0 => _v0 !== _v1) : _v2.push(_v1), _v6.byweekday = _v2, _v3(_v11.RRule.optionsToString(_v6));
      }, [_v7, _v6, _v3]),
      _v12 = (0, _v3.useCallback)(_v0 => {
        _v0 === _v27 && (_v6.bymonthday = _v1.day, _v6.byweekday = []), _v0 === _v28 && (_v6.bymonthday = null, _v6.byweekday = _v23(_v1)), _v3(_v11.RRule.optionsToString(_v6));
      }, [_v6, _v1, _v3]),
      _v13 = (0, _v3.useMemo)(() => _v26.map(_v0 => ({
        value: _v0.value,
        label: _v0.label(_v4)
      })), [_v4]),
      _v14 = (0, _v3.useMemo)(() => _v6.freq !== _v11.RRule.MONTHLY || _v6.bymonthday ? [_v27] : [_v6.byweekday?.[0]?.n ? _v28 : _v27], [_v6]),
      _v15 = _v6?.freq === _v11.RRule.YEARLY ? 3 : 4,
      _v16 = [_v13.find(_v0 => _v0.value === _v6?.freq)?.value];
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.Header, {
        size: "xs",
        marginBottom: (0, _v7.rem)(8),
        color: "text-primary",
        children: (0, _v9.translate)({
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
      }), (0, _v1.jsxs)(_v5.Flex, {
        width: "100%",
        direction: _v2 ? "column" : "row",
        gap: (0, _v7.rem)(8),
        children: [(0, _v1.jsxs)(_v5.Flex, {
          gap: (0, _v7.rem)(8),
          justifyContent: _v2 ? "center" : "unset",
          children: [(0, _v1.jsx)(_v20.Input, {
            flexShrink: 4,
            size: "sm",
            value: _v4,
            maxLength: _v15,
            minWidth: (0, _v7.rem)(60),
            onKeyPress: _v0 => {
              /[0-9]/.test(_v0.key) || _v0.preventDefault();
            },
            onChange: _v9,
            onBlur: () => {
              _v4 || _v5(1);
            }
          }), (0, _v1.jsx)(_v4.Box, {
            width: "100%",
            position: "relative",
            children: (0, _v1.jsx)(_v8.Select, {
              withPortal: !1,
              onValueChange: _v0 => _v10(_v0.value[0]),
              items: _v13,
              defaultValue: [_v13[1].value],
              value: _v16,
              size: "sm",
              variant: "withCheck"
            })
          })]
        }), (0, _v1.jsxs)("div", {
          children: [_v6?.freq === _v11.RRule.WEEKLY && (0, _v1.jsx)(_v5.Flex, {
            gap: (0, _v7.rem)(8),
            justifyContent: "space-between",
            marginLeft: _v2 ? 0 : (0, _v7.rem)(8),
            children: _v25.map(_v0 => (0, _v1.jsxs)(_v4.Box, {
              width: (0, _v7.rem)(20),
              textAlign: "center",
              children: [(0, _v1.jsx)(_v19.Checkbox, {
                value: _v0.value,
                isChecked: _v7.includes(Number(_v0.value)),
                onChange: _v11
              }), (0, _v1.jsx)(_v18.Paragraph, {
                size: "md",
                children: _v0.label
              })]
            }, _v0.value))
          }), _v6?.freq === _v11.RRule.MONTHLY ? (0, _v1.jsx)(_v4.Box, {
            width: "100%",
            position: "relative",
            children: (0, _v1.jsx)(_v8.Select, {
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