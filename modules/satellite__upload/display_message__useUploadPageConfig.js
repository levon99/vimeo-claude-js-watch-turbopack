{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => "object" == typeof _v0 && null !== _v0 && "display_message" in _v0;
  _v0.s(["useUploadPageConfig", 0, (_v0, _v1) => {
    let _v2 = (0, _v1.useContext)(_v2.CacheContext),
      [_v3, _v4] = (0, _v1.useReducer)(_v3.configReducer, _v3.initialConfigFetchState);
    return (0, _v1.useEffect)(() => {
      (0, _v3.loadUploadPageConfig)({
        userId: _v0,
        folderId: _v1,
        cache: _v2,
        dispatch: _v4,
        isWebControllerError: _v4
      });
    }, [_v2, _v1, _v0]), _v3;
  }]);
}