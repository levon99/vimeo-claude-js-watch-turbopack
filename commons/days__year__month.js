{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.i(0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = (_v0, _v1) => {
    let _v2 = _v1.diff(_v0, "days");
    return _v2.days < 50 ? "day" : _v2.days > 720 ? "year" : _v2.days > 180 ? "month" : "week";
  };
  _v0.s(["getGroupByTimeLiteral", 0, _v10], 0);
  let _v11 = (0, _v2.default)(async () => {
      let {
        AreaGraph: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v1.jsx)(_v4.Box, {
        width: "100%",
        height: "100%"
      })
    }),
    _v12 = (0, _v2.default)(async () => {
      let {
        EmptyGraph: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v1.jsx)(_v4.Box, {
        width: "100%",
        height: "100%"
      })
    }),
    _v13 = (0, _v2.default)(async () => {
      let {
        LineGraph: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v1.jsx)(_v4.Box, {
        width: "100%",
        height: "100%"
      })
    });
  _v0.s(["Graph", 0, ({
    data: _v0,
    hasError: _v1,
    isMobile: _v2,
    selectedDataKey: _v3,
    dateFilters: {
      startDate: _v4,
      endDate: _v5
    }
  }) => {
    let [_v6, _v7] = (0, _v3.useState)(0),
      {
        sendEvent: _v8
      } = (0, _v5.useAnalyticsEvents)(),
      _v9 = (0, _v6.useMetricColors)(),
      _v10 = (0, _v3.useCallback)(() => {
        _v7(Date.now());
      }, [_v7]),
      _v11 = (0, _v3.useCallback)(() => {
        let _v0 = Math.ceil((Date.now() - _v6) / 0);
        (0, _v7.sendOverviewGraphHoverEvent)(_v8, _v0);
      }, [_v8, _v6]),
      _v12 = (0, _v3.useMemo)(() => {
        let _v0, _v1, _v2, _v3, _v4, _v5, _v6;
        return _v0 = _v10(_v4, _v5), _v1 = _v0 ? [..._v0] : [], _v2 = _v4.startOf(_v0), _v3 = _v5.endOf(_v0), _v4 = _v1.some(_v0 => _v8.DateTime.fromISO(_v0?.startDate).setZone("utc").toISODate() === _v2.toISODate()), _v5 = _v1.some(_v0 => _v8.DateTime.fromISO(_v0.endDate).setZone("utc").toISODate() === _v3.toISODate()), _v4 || _v1?.unshift({
          ..._v9.ZERO_FILL_ANALYTICS_ITEM,
          startDate: _v4.setZone("utc").toISO(),
          endDate: _v4.endOf(_v0).toISO()
        }), _v5 || _v2.toISODate() === _v3.toISODate() || _v1?.push({
          ..._v9.ZERO_FILL_ANALYTICS_ITEM,
          startDate: _v3.startOf(_v0).toISO(),
          endDate: _v5.toISO()
        }), _v6 = [], _v1?.forEach((_v0, _v1) => {
          var _v2, _v3, _v4;
          let _v5,
            _v6,
            _v7 = _v1?.[_v1 - 1]?.endDate,
            _v8 = _v0?.startDate,
            _v9 = _v7 && _v8 ? (_v2 = _v8.DateTime.fromISO(_v7, {
              zone: "utc"
            }), _v3 = _v8.DateTime.fromISO(_v8, {
              zone: "utc"
            }), _v4 = _v0, _v5 = _v2.plus({
              [_v4]: 1
            }).startOf(_v4), _v6 = `${_v4}s`, Array.from({
              length: _v3.diff(_v5, _v6)[_v6]
            }, (_v0, _v1) => _v5.plus({
              [_v4]: _v1
            }))) : [],
            _v10 = _v9.length ? _v9.map(_v0 => ({
              ..._v9.ZERO_FILL_ANALYTICS_ITEM,
              startDate: _v0.toISO(),
              endDate: _v0.endOf(_v0).toISO()
            })) : [];
          _v10?.length && _v6.push(..._v10), _v6.push(_v0);
        }), _v6;
      }, [_v0, _v5, _v4]);
    return !_v1 && _v0 && _v0.length ? (0, _v1.jsx)(_v4.Box, {
      onMouseEnter: _v10,
      onMouseLeave: _v11,
      display: "contents",
      children: _v3 ? (0, _v1.jsx)(_v11, {
        color: _v9[_v3],
        data: _v12,
        isMobile: _v2,
        dataKey: _v3
      }) : (0, _v1.jsx)(_v13, {
        data: _v12
      })
    }) : (0, _v1.jsx)(_v12, {
      data: _v12,
      isMobile: _v2
    });
  }], 0), _v0.s(["getEqualPreviousTimeRange", 0, (_v0, _v1) => {
    let _v2 = _v1.diff(_v0, "days"),
      _v3 = _v0.minus({
        days: 1
      }).endOf("day");
    return {
      previousStartDate: _v3.minus({
        days: _v2.days
      }).startOf("day"),
      previousEndDate: _v3
    };
  }], 0);
}