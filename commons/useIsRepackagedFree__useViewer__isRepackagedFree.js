{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useIsRepackagedFree", 0, () => {
    let _v0 = (0, _v1.useViewer)();
    return {
      isRepackagedFree: _v0?.user?.productId === _v2.REPACK_FREE_PRODUCT_ID,
      isLoading: !1
    };
  }]);
}