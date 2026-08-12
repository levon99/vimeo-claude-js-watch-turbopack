{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["DatePicker", 0, function ({
    className: _v0 = "live-date-picker",
    isDisabled: _v1,
    isLoading: _v2,
    date: _v3,
    minDate: _v4,
    maxDate: _v5,
    onSelect: _v6,
    onClear: _v7,
    size: _v8
  }) {
    let _v9 = (0, _v2.useMemo)(() => {
        let _v0 = _v3?.setZone(Intl.DateTimeFormat().resolvedOptions().timeZone, {
          keepLocalTime: !0
        });
        return _v0 ? [new _v6.BokehDate.CalendarDate(_v0.year, _v0.month, _v0.day)] : [];
      }, [_v3]),
      _v10 = !!_v9[0],
      _v11 = (0, _v2.useMemo)(() => {
        if (_v4) return new _v6.BokehDate.CalendarDate(_v4.year, _v4.month, _v4.day);
        {
          let _v0 = new Date();
          return new _v6.BokehDate.CalendarDate(_v0.getFullYear(), _v0.getMonth() + 1, _v0.getDate());
        }
      }, [_v4]),
      _v12 = (0, _v2.useMemo)(() => _v5 ? new _v6.BokehDate.CalendarDate(_v5.year, _v5.month, _v5.day) : new _v6.BokehDate.CalendarDate(0, 1, 1), [_v5]),
      _v13 = (0, _v2.useCallback)(_v0 => {
        if (_v1 || _v2) return;
        let _v1 = _v0.value[0];
        _v1 ? _v6(new Date(_v1.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone))) : _v7?.();
      }, [_v1, _v2, _v7, _v6]);
    return (0, _v1.jsx)(_v5.Box, {
      className: _v0,
      sx: {
        "& *": {
          fontSize: `${(0, _v3.rem)("sm" === _v8 ? 14 : _v10 && _v7 ? 10 : 12)} !important`
        },
        "& > div > div": {
          width: "100% !important"
        }
      },
      children: (0, _v1.jsxs)(_v4.DatePicker, {
        disabled: _v1 || _v2,
        value: _v9,
        selectionMode: "single",
        width: "100%",
        min: _v11,
        max: _v12,
        onValueChange: _v13,
        children: [(0, _v1.jsx)(_v4.DatePickerControl, {
          children: (0, _v1.jsxs)(_v8.InputGroup, {
            ...(void 0 === _v8 ? {} : {
              size: _v8
            }),
            children: [_v7 ? (0, _v1.jsx)(_v10.InputLeftElement, {
              width: "sm" === _v8 ? (0, _v3.rem)(32) : void 0,
              children: (0, _v1.jsx)(_v4.DatePickerClearTrigger, {
                asChild: !0,
                children: (0, _v1.jsx)(_v11.IconButton, {
                  "aria-label": "clear-date",
                  isDisabled: _v1 || _v2,
                  variant: "tertiary",
                  size: "xs",
                  children: (0, _v1.jsx)(_v13.CloseX, {})
                })
              })
            }) : null, (0, _v1.jsx)(_v4.DatePickerInputBase, {
              asChild: !0,
              children: (0, _v1.jsx)(_v9.Input, {
                ...(void 0 === _v8 ? {} : {
                  size: _v8
                }),
                isDisabled: _v1 || _v2,
                background: "surface",
                padding: _v10 && _v7 ? "sm" === _v8 ? `0 ${(0, _v3.rem)(28)} 0 ${(0, _v3.rem)(32)}` : `0 ${(0, _v3.rem)(32)} 0 ${(0, _v3.rem)(34)}` : void 0
              })
            }), (0, _v1.jsx)(_v10.InputRightElement, {
              children: (0, _v1.jsx)(_v4.DatePickerTrigger, {
                asChild: !0,
                children: (0, _v1.jsx)(_v11.IconButton, {
                  "aria-label": "pick-date",
                  isDisabled: _v1 || _v2,
                  variant: "tertiary",
                  size: "xs",
                  children: (0, _v1.jsx)(_v12.Calendar, {})
                })
              })
            })]
          })
        }), (0, _v2.createElement)(_v7.DatePickerPortal, {}, (0, _v1.jsx)(_v4.DatePickerPositioner, {
          style: {
            zIndex: 0
          },
          children: (0, _v1.jsx)(_v4.DatePickerContent, {
            children: (0, _v1.jsx)(_v4.Calendar, {})
          })
        }))]
      }, _v4?.toString())
    });
  }]);
}