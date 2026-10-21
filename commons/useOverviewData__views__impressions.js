{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (_v0, _v1) => {
    if (!_v0 || !_v1) return 0;
    let _v2 = ((_v0 - _v1) / _v1).toFixed(2);
    return "0.00" === _v2 || "-0.00" === _v2 ? 0 : Number(_v2);
  };
  _v0.s(["useOverviewData", 0, (_v0, _v1) => {
    let {
        startDate: _v2,
        endDate: _v3,
        filterLists: _v4
      } = _v1,
      {
        previousStartDate: _v5,
        previousEndDate: _v6
      } = (0, _v1.useMemo)(() => (0, _v5.getEqualPreviousTimeRange)(_v2, _v3), [_v2, _v3]),
      _v7 = (0, _v1.useMemo)(() => (0, _v6.getFiltersObject)(_v4), [_v4]),
      {
        isOrionLoading: _v8,
        queryParam: _v9
      } = (0, _v3.useAnalyticsFreshness)(),
      {
        data: _v10,
        isLoading: _v11,
        error: _v12
      } = (0, _v2.useGetUserAnalytics)(() => _v8 ? null : {
        select: ["views", "impressions", "uniqueViewers"],
        where: {
          userId: _v0
        },
        query: {
          from: _v2.toISO(),
          to: _v3.toISO(),
          dimension: "total",
          ..._v7,
          ..._v9
        }
      }, {
        revalidateOnFocus: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      }),
      {
        data: _v13,
        isLoading: _v14,
        error: _v15
      } = (0, _v2.useGetUserAnalytics)(() => _v8 ? null : {
        select: ["views", "impressions", "uniqueViewers"],
        where: {
          userId: _v0
        },
        query: {
          from: _v5.toISO(),
          to: _v6.toISO(),
          dimension: "total",
          ..._v7,
          ..._v9
        }
      }, {
        revalidateOnFocus: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      }),
      {
        data: _v16,
        isLoading: _v17,
        error: _v18
      } = (0, _v2.useGetUserAnalytics)(() => _v8 ? null : {
        select: ["views", "impressions", "uniqueViewers", "startDate", "endDate"],
        where: {
          userId: _v0
        },
        query: {
          from: _v2.toISO(),
          to: _v3.toISO(),
          dimension: "total",
          timeInterval: (0, _v7.getGroupByTimeLiteral)(_v2, _v3),
          direction: "asc",
          ..._v7,
          ..._v9
        }
      }, {
        revalidateOnFocus: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      }),
      _v19 = _v10?.data?.[0],
      _v20 = _v13?.data?.[0],
      _v21 = (0, _v1.useMemo)(() => _v8(_v19?.impressions, _v20?.impressions), [_v19, _v20]),
      _v22 = (0, _v1.useMemo)(() => _v8(_v19?.uniqueViewers, _v20?.uniqueViewers), [_v19, _v20]),
      _v23 = (0, _v1.useMemo)(() => _v8(_v19?.views, _v20?.views), [_v19, _v20]),
      _v24 = _v12 || _v15,
      _v25 = (0, _v1.useCallback)(() => {
        let _v0 = [_v12 && _v4.translations.overviewDataError, _v18 && _v4.translations.graphError, _v24 && _v4.translations.trendError].filter(_v0 => _v0);
        return _v0.length ? 1 === _v0.length ? _v0[0] : _v4.translations.overviewDataError : "";
      }, [_v12, _v24, _v18]);
    return {
      data: {
        graphData: _v16,
        numbersData: _v19,
        trends: {
          impressions: _v21,
          uniqueViewers: _v22,
          views: _v23
        }
      },
      isNumbersDataLoading: _v11 || _v14,
      isGraphDataLoading: _v17,
      error: {
        numbersDataError: _v12,
        trendsDataError: _v24,
        graphDataError: _v18,
        errorMessage: _v25()
      }
    };
  }]);
}