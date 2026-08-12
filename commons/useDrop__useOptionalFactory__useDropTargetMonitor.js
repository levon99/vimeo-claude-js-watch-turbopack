{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useDrop", 0, function (_v0, _v1) {
    let _v2 = (0, _v2.useOptionalFactory)(_v0, _v1),
      _v3 = (0, _v3.useDropTargetMonitor)(),
      _v4 = (0, _v4.useDropTargetConnector)(_v2.options);
    return (0, _v1.useRegisteredDropTarget)(_v2, _v3, _v4), [(0, _v5.useCollectedProps)(_v2.collect, _v3, _v4), (0, _v6.useMemo)(() => _v4.hooks.dropTarget(), [_v4])];
  }], 0);
}