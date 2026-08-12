{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useUploadLifecycle", 0, function (_v0, _v1 = []) {
    let {
        addUploadLifecycleListener: _v2
      } = (0, _v1.useContext)(_v2.UploadLifecycleContext),
      _v3 = (0, _v1.useCallback)(_v0, [_v0, _v1]);
    (0, _v1.useEffect)(() => _v2(_v3), [_v2, _v3, ..._v1]);
  }]);
}