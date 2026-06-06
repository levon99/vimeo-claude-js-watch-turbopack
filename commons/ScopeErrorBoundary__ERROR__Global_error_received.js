{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["ScopeErrorBoundary", 0, function ({
    fallback: _v0,
    children: _v1
  }) {
    let [_v2, _v3] = (0, _v2.useState)(null),
      _v4 = (0, _v1.useScope)();
    return (0, _v2.useEffect)(() => {
      let _v0 = new _v3.Logger("ERROR");
      return _v4.subscribeToSignals(_v0 => {
        _v0.type === _v4.ELiveSignal.GLOBAL_ERROR && (_v0.error("Global error received:", _v0.data), (0, _v6.trackLiveError)(_v0.data, {
          component: "ScopeErrorBoundary",
          category: _v5.ELiveErrorCategory.GENERIC,
          data: _v0.data
        }), _v3(_v0.data));
      });
    }, [_v4]), _v2 ? (0, _v2.createElement)(_v0, {
      error: _v2
    }) : _v1;
  }]);
}