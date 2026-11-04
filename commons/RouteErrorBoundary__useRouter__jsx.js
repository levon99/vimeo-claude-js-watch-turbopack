{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["RouteErrorBoundary", 0, function (_v0) {
    let _v1 = (0, _v2.useRouter)();
    return (0, _v1.jsx)(_v3.ErrorBoundary, {
      ..._v0,
      resetKey: _v1.asPath
    });
  }]);
}