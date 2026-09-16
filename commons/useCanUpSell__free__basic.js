{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useCanUpSell", 0, (_v0 = ["free", "basic"]) => {
    let _v1 = (0, _v2.useViewer)(),
      _v2 = _v1?.teamUser?.accountType || _v1?.user?.account;
    return (0, _v1.useMemo)(() => _v0.includes(_v2), [_v2, _v0]);
  }]);
}