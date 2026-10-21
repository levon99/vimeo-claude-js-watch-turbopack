{
  "use strict";

  _v0.s(["mockEmptyStateData", 0, [{
    endDate: "2023-11-01",
    startDate: "2023-11-01",
    views: 0,
    impressions: 0,
    uniqueViewers: 0
  }, {
    startDate: "2023-11-05",
    endDate: "2023-11-05",
    views: 0,
    impressions: 0,
    uniqueViewers: 0
  }, {
    startDate: "2023-11-10",
    endDate: "2023-11-10",
    views: 0,
    impressions: 0,
    uniqueViewers: 0
  }, {
    startDate: "2023-11-15",
    endDate: "2023-11-15",
    views: 0,
    impressions: 0,
    uniqueViewers: 0
  }, {
    startDate: "2023-11-20",
    endDate: "2023-11-20",
    views: 0,
    impressions: 0,
    uniqueViewers: 0
  }, {
    startDate: "2023-11-25",
    endDate: "2023-11-25",
    views: 0,
    impressions: 0,
    uniqueViewers: 0
  }, {
    startDate: "2023-12-01",
    endDate: "2023-11-30",
    views: 0,
    impressions: 0,
    uniqueViewers: 0
  }]], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = _v0 => (0, _v1.jsx)(_v8.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M21 11a1 1 0 0 0-1 1v2.59l-6.29-6.3a1 1 0 0 0-1.42 0L9 11.59l-5.29-5.3a1.004 1.004 0 0 0-1.42 1.42l6 6a.998.998 0 0 0 1.42 0l3.29-3.3L18.59 16H16a1 1 0 0 0 0 2h5a.997.997 0 0 0 .38-.08 1 1 0 0 0 .54-.54c.051-.12.079-.25.08-.38v-5a1 1 0 0 0-1-1Z",
      fill: "currentColor"
    })
  });
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = ({
    trendType: _v0,
    width: _v1
  }) => _v0 === _v11.TrendType.positive ? (0, _v1.jsx)(_v7.ChartUp, {
    fill: "text-primary",
    width: _v1
  }) : _v0 === _v11.TrendType.negative ? (0, _v1.jsx)(_v9, {
    fill: "text-primary",
    width: _v1
  }) : (0, _v1.jsx)(_v10.Minus, {
    fill: "text-primary",
    width: _v1
  });
  _v0.s(["TrendIcon", 0, _v12], 0);
  let _v13 = _v0 => 0 === _v0 ? _v11.TrendType.neutral : _v0 > 0 ? _v11.TrendType.positive : _v11.TrendType.negative;
  _v0.s(["getTrendSymbol", 0, _v0 => {
    switch (_v0) {
      case _v11.TrendType.positive:
        return "+";
      case _v11.TrendType.negative:
        return "-";
      default:
        return "";
    }
  }, "getTrendType", 0, _v13], 0), _v0.s(["EmptyNumberCard", 0, ({
    isActive: _v0,
    dataKey: _v1,
    trend: _v2
  }) => {
    let _v3 = _v13(_v2),
      _v4 = (0, _v3.useColorModeValue)("grayscale.400", "slate.50"),
      _v5 = (0, _v3.useColorModeValue)("slate.100", "grayscale.600"),
      _v6 = (0, _v3.useColorModeValue)("slate.50", "grayscale.800");
    return (0, _v1.jsxs)(_v2.Flex, {
      as: "button",
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "0.625rem",
      border: "none",
      width: "100%",
      minWidth: "11.688rem",
      position: "relative",
      borderRadius: "0.75rem",
      height: "4.375rem",
      padding: "0.75rem 1rem",
      cursor: "pointer",
      background: _v0 ? _v5 : _v6,
      _last: {
        marginBottom: 0
      },
      children: [(0, _v1.jsx)(_v5.Box, {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        children: (0, _v1.jsxs)(_v2.Flex, {
          position: "relative",
          zIndex: "1",
          children: [(0, _v1.jsx)(_v5.Box, {
            background: _v4,
            height: "0.375rem",
            width: "0.375rem",
            minWidth: "0.375rem",
            borderRadius: "50%",
            marginRight: "0.25rem",
            marginTop: "0.35rem"
          }), (0, _v1.jsx)(_v4.Header, {
            size: "xs",
            color: "text-primary",
            sx: {
              textWrap: "nowrap"
            },
            marginBottom: "0",
            children: _v6.translations[_v1]
          })]
        })
      }), (0, _v1.jsx)(_v5.Box, {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: "flex-end",
        width: "100%",
        alignSelf: "center",
        position: "relative",
        height: "100%",
        children: (0, _v1.jsx)(_v2.Flex, {
          className: "trend",
          height: {
            base: "2rem",
            lg: "3rem",
            xl: "3.5rem"
          },
          width: {
            base: "2rem",
            lg: "3rem",
            xl: "3.5rem"
          },
          justifyContent: "center",
          alignItems: "center",
          borderRadius: {
            base: "0.5rem",
            lg: "0.625rem",
            xl: "0.75rem"
          },
          alignSelf: "center",
          children: (0, _v1.jsx)(_v12, {
            trendType: _v3,
            width: "1.5rem"
          })
        })
      })]
    });
  }], 0);
}