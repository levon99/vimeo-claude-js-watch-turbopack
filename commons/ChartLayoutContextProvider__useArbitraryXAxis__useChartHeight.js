{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = (0, _v0.i(0).default)(function (_v0) {
      return {
        x: _v0.left,
        y: _v0.top,
        width: _v0.width,
        height: _v0.height
      };
    }, function (_v0) {
      return ["l", _v0.left, "t", _v0.top, "w", _v0.width, "h", _v0.height].join("");
    }),
    _v6 = _v0.i(0),
    _v7 = (0, _v1.createContext)(void 0),
    _v8 = (0, _v1.createContext)(void 0),
    _v9 = (0, _v1.createContext)(void 0),
    _v10 = (0, _v1.createContext)({}),
    _v11 = (0, _v1.createContext)(void 0),
    _v12 = (0, _v1.createContext)(0),
    _v13 = (0, _v1.createContext)(0);
  _v0.s(["ChartLayoutContextProvider", 0, function (_v0) {
    var _v1 = _v0.state,
      _v2 = _v1.xAxisMap,
      _v3 = _v1.yAxisMap,
      _v4 = _v1.offset,
      _v5 = _v0.clipPathId,
      _v6 = _v0.children,
      _v7 = _v0.width,
      _v8 = _v0.height,
      _v9 = _v5(_v4);
    return _v1.default.createElement(_v7.Provider, {
      value: _v2
    }, _v1.default.createElement(_v8.Provider, {
      value: _v3
    }, _v1.default.createElement(_v10.Provider, {
      value: _v4
    }, _v1.default.createElement(_v9.Provider, {
      value: _v9
    }, _v1.default.createElement(_v11.Provider, {
      value: _v5
    }, _v1.default.createElement(_v12.Provider, {
      value: _v8
    }, _v1.default.createElement(_v13.Provider, {
      value: _v7
    }, _v6)))))));
  }, "useArbitraryXAxis", 0, function () {
    var _v0 = (0, _v1.useContext)(_v7);
    return (0, _v6.getAnyElementOfObject)(_v0);
  }, "useChartHeight", 0, function () {
    return (0, _v1.useContext)(_v12);
  }, "useChartWidth", 0, function () {
    return (0, _v1.useContext)(_v13);
  }, "useClipPathId", 0, function () {
    return (0, _v1.useContext)(_v11);
  }, "useOffset", 0, function () {
    return (0, _v1.useContext)(_v10);
  }, "useViewBox", 0, function () {
    return (0, _v1.useContext)(_v9);
  }, "useXAxisOrThrow", 0, function (_v0) {
    var _v1 = (0, _v1.useContext)(_v7);
    null == _v1 && (0, _v2.default)(!1);
    var _v2 = _v1[_v0];
    return null == _v2 && (0, _v2.default)(!1), _v2;
  }, "useYAxisOrThrow", 0, function (_v0) {
    var _v1 = (0, _v1.useContext)(_v8);
    null == _v1 && (0, _v2.default)(!1);
    var _v2 = _v1[_v0];
    return null == _v2 && (0, _v2.default)(!1), _v2;
  }, "useYAxisWithFiniteDomainOrRandom", 0, function () {
    var _v0 = (0, _v1.useContext)(_v8);
    return (0, _v3.default)(_v0, function (_v0) {
      return (0, _v4.default)(_v0.domain, Number.isFinite);
    }) || (0, _v6.getAnyElementOfObject)(_v0);
  }], 0);
}