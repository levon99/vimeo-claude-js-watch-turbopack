{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useIsRepackagedFreeInPaidTeam", 0, () => {
    let _v0 = (0, _v1.useViewer)(),
      {
        isRepackagedFree: _v1
      } = (0, _v2.useIsRepackagedFree)();
    return {
      isRepackagedFreeInPaidTeam: _v1 && (_v0?.teamUser?.hasPaid ?? !1)
    };
  }]);
}