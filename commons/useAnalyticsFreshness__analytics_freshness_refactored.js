{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useAnalyticsFreshness", 0, function () {
    let _v0 = (0, _v3.useOrionSetting)("analytics_freshness_refactored");
    return {
      isOrionLoading: (0, _v2.useOrionLoading)(),
      queryParam: (0, _v1.useMemo)(() => _v0 ? {
        analytics_freshness_refactored: "1"
      } : {}, [_v0])
    };
  }]);
}