{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "@VIMEO/VIEWER_READY",
    _v5 = "@VIMEO/VIEWER_CONTEXT_QUERY";
  _v0.s(["VIMEO_VIEWER_CONTEXT_QUERY", 0, _v5, "VIMEO_VIEWER_READY_CONTEXT_SIGNAL", 0, _v4, "queryCurrentViewerSync", 0, function (_v0) {
    let _v1 = _v0.queryDataSync({
      type: _v5
    });
    return _v1?.data;
  }, "queryOptionalViewerSync", 0, function (_v0) {
    let _v1 = _v0.queryDataSync({
      type: _v5
    });
    return _v1?.data;
  }, "useScopeViewerEmitting", 0, function () {
    let {
        emitSignal: _v0
      } = (0, _v1.useScope)(),
      _v1 = (0, _v2.useContext)(_v3.ViewerContext);
    (0, _v2.useEffect)(() => {
      _v1 && _v0({
        type: _v4,
        data: _v1
      });
    }, [_v0, _v1?.user]);
  }, "useScopeViewerProvision", 0, function () {
    let _v0 = (0, _v1.useScope)(),
      _v1 = (0, _v2.useContext)(_v3.ViewerContext);
    (0, _v2.useLayoutEffect)(() => _v0.registerQueryProvider(_v5, () => _v1), [_v0, _v1]);
  }]);
}