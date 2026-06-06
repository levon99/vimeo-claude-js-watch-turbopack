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
    _v11 = _v0.i(0);
  let _v12 = (_v0, _v1) => 0 > _v0.add({
      days: 364
    }).compare(_v1),
    _v13 = {
      padding: "0",
      boxShadow: "none",
      "&&&": {
        backgroundColor: "transparent"
      }
    };
  _v0.s(["RangePicker", 0, ({
    value: _v0,
    disabled: _v1,
    maxDate: _v2,
    minDate: _v3,
    presets: _v4,
    defaultButtonText: _v5 = "",
    onDateChange: _v6 = () => "",
    placement: _v7 = "bottom-end"
  }) => {
    let [_v8, _v9] = (0, _v2.useState)(!1),
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(null),
      _v12 = _v0 => _v0?.startDate && _v0.endDate ? [(0, _v11.jsDateToCalendarDate)(_v0.startDate), (0, _v11.jsDateToCalendarDate)(_v0.endDate)] : [],
      [_v13, _v14] = (0, _v2.useState)(() => _v12(_v0)),
      _v15 = (0, _v10.useViewer)(),
      [_v16, _v17] = (0, _v2.useState)(() => _v13),
      _v18 = (0, _v2.useRef)(null),
      _v19 = _v0?.startDate?.toISOString() ?? "",
      _v20 = _v0?.endDate?.toISOString() ?? "",
      [_v21, _v22] = (0, _v2.useState)(_v19),
      [_v23, _v24] = (0, _v2.useState)(_v20);
    if (_v21 !== _v19 || _v23 !== _v20) {
      _v22(_v19), _v24(_v20);
      let _v0 = _v12(_v0);
      _v14(_v0), _v17(_v0);
    }
    let _v25 = (0, _v2.useMemo)(() => _v3 ?? new Date(_v15?.user?.createdTime ?? "2004-11-01"), [_v3, _v15?.user?.createdTime]),
      _v26 = _v0?.startDate && _v0?.endDate ? `${_v0.startDate.toLocaleDateString()} - ${_v0.endDate.toLocaleDateString()}` : _v5;
    (0, _v7.useOutsideClick)({
      enabled: _v8,
      ref: _v10,
      handler: _v0 => {
        _v0.target !== _v11.current && _v9(!1);
      }
    });
    let _v27 = (0, _v2.useCallback)(_v0 => {
      if (2 === _v0.length) {
        let _v0 = _v0;
        if (_v18.current) {
          let _v0 = _v18.current,
            _v1 = _v0 === _v0[0] ? _v0[1] : _v0[0],
            _v2 = _v1.compare(_v0);
          _v2 < 0 ? _v12(_v1, _v0) && (_v0 = [_v1, _v1.add({
            days: 364
          })]) : _v2 > 0 && _v12(_v0, _v1) && (_v0 = [_v1.subtract({
            days: 364
          }), _v1]);
        }
        _v17(_v0);
      } else 1 === _v0.length ? _v18.current = _v0[0] : _v18.current = null, _v17(_v0);
    }, []);
    return (0, _v1.jsxs)(_v4.Popover, {
      placement: _v7,
      isOpen: _v8,
      children: [(0, _v1.jsx)(_v5.PopoverTrigger, {
        children: (0, _v1.jsx)(_v3.Button, {
          rightIcon: (0, _v1.jsx)(_v8.ChevronDownSmall, {}),
          isDisabled: _v1,
          variant: "secondary",
          onClick: () => _v9(!_v8),
          ref: _v11,
          children: _v26
        })
      }), (0, _v1.jsx)(_v6.PopoverContent, {
        sx: _v13,
        ref: _v10,
        children: (0, _v1.jsx)(_v9.DateRangePicker, {
          presetValues: _v4,
          minDate: (0, _v11.jsDateToCalendarDate)(_v25),
          maxDate: (0, _v11.jsDateToCalendarDate)(_v2),
          defaultRange: _v13,
          onValueChange: _v27,
          onApply: _v0 => {
            _v6({
              startDate: new Date(_v0[0].toString()),
              endDate: new Date(_v0[1].toString())
            }), _v9(!1);
          },
          presetsMultiline: !0,
          locale: _v15?.locale,
          value: _v16
        })
      })]
    });
  }]);
}