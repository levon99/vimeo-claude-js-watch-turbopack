{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useAnalyticsFreshness", 0, function () {
    let {
      settings: _v0,
      isLoadingResponse: _v1
    } = (0, _v2.useOrionSettings)();
    return {
      isOrionLoading: _v1,
      queryParam: (0, _v1.useMemo)(() => _v0.analytics_freshness_refactored ? {
        analytics_freshness_refactored: "1"
      } : {}, [_v0.analytics_freshness_refactored])
    };
  }]);
}