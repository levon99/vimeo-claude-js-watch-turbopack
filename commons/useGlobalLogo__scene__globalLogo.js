{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useGlobalLogo", 0, function ({
    scene: _v0,
    globalLogo: _v1,
    logoList: _v2
  }) {
    let _v3 = _v1 ? _v2[_v1.id || "-"] : null;
    return (0, _v1.useMemo)(() => !_v4.layoutsConfig.LOGO_DISABLED.includes(_v0.meta?.layoutType) && _v3 && _v1 ? {
      type: _v3.EGraphicsDescriptorType.LOGO,
      data: {
        sourceId: _v3.id,
        createdAt: _v3.createdAt,
        visibleAt: _v1.visibleAt ?? 0
      },
      position: {
        ..._v2.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v3.EGraphicsDescriptorType.LOGO),
        visible: _v1.visible ?? !1
      }
    } : null, [_v1, _v3, _v0.meta?.layoutType]);
  }]);
}