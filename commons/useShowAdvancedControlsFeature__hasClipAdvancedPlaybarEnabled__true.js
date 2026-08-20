{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useShowAdvancedControlsFeature", 0, function (_v0) {
    let _v1 = (0, _v3.useIsStaff)(),
      _v2 = function () {
        let _v0 = (0, _v4.useViewer)(),
          _v1 = _v0?.teamUser?.ownerId || _v0?.user?.id,
          {
            capabilities: {
              hasClipAdvancedPlaybarEnabled: _v2
            },
            ready: _v3
          } = (0, _v2.useCapability)(["hasClipAdvancedPlaybarEnabled"], _v1);
        if (_v1 && _v3) return _v2;
      }();
    return (0, _v1.useMemo)(() => !!_v1 && "true" === new URLSearchParams(window.location.search).get("use_player_advanced_controls"), [_v1]) || !!_v2 || !!_v0;
  }]);
}