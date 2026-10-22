{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useIsRepackOrCreator", 0, () => {
    let _v0 = (0, _v2.useViewer)(),
      {
        isRepackagedFree: _v1,
        isLoading: _v2
      } = (0, _v3.useIsRepackagedFree)();
    return {
      isRepackOrCreator: _v0?.user?.account === _v1.AccountType.Creator || _v1,
      isLoading: _v2
    };
  }]);
}