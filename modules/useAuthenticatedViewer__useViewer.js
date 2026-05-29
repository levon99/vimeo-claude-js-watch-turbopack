{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useAuthenticatedViewer", 0, function () {
    let _v0 = (0, _v1.useContext)(_v2.ViewerContext),
      _v1 = !!_v0?.user;
    return _v0 && _v1 ? _v0 : null;
  }, "useViewer", 0, function () {
    return (0, _v1.useContext)(_v2.ViewerContext);
  }]);
}