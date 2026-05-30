{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["shouldFetchColdStorageVideoFallback", 0, function (_v0) {
    return !!_v0?.user?.id && "paid" !== (0, _v1.deriveViewerAuthStatus)(_v0);
  }]);
}