{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useIsRepackagedFree", 0, () => {
    let _v0 = (0, _v1.useViewer)();
    return {
      isRepackagedFree: _v0?.user?.productId === 0,
      isLoading: !1
    };
  }]);
}