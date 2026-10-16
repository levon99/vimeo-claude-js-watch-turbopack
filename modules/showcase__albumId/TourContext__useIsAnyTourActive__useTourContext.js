{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createContext)(null);
  _v0.s(["TourContext", 0, _v2, "useIsAnyTourActive", 0, function () {
    return (0, _v1.useContext)(_v2)?.isActive ?? !1;
  }, "useTourContext", 0, function () {
    let _v0 = (0, _v1.useContext)(_v2);
    if (!_v0) throw Error("useTour / <TourStep> must be used inside a <TourProvider>.");
    return _v0;
  }]);
}