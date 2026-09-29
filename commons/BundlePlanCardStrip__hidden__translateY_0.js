{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["BundlePlanCardStrip", 0, ({
    bundleType: _v0,
    isVisible: _v1,
    price: _v2
  }) => {
    let _v3 = (0, _v7.useBundleSurfaceTokens)(),
      _v4 = (0, _v8.getBundleActivationCluster)(_v0);
    return (0, _v1.jsx)(_v3.Box, {
      width: "100%",
      height: _v1 ? (0, _v5.rem)(40) : 0,
      opacity: +!!_v1,
      overflow: "hidden",
      transform: _v1 ? "translateY(0)" : `translateY(${(0, _v5.rem)(-8)})`,
      transition: "height 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease, transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
      sx: {
        "@media (prefers-reduced-motion: reduce)": {
          transitionDuration: "1ms"
        }
      },
      "aria-hidden": !_v1,
      children: (0, _v1.jsxs)(_v4.Flex, {
        width: "100%",
        height: (0, _v5.rem)(40),
        background: _v3.background,
        border: _v3.border,
        borderRadius: (0, _v5.rem)(8),
        paddingX: (0, _v5.rem)(8),
        alignItems: "center",
        justifyContent: "space-between",
        gap: (0, _v5.rem)(8),
        children: [(0, _v1.jsx)(_v10.TiltedTileCluster, {
          tileSize: 24,
          clusterTiles: _v4.clusterTiles,
          infoTooltip: void 0
        }), (0, _v1.jsxs)(_v2.Badge, {
          variant: "info",
          size: "sm",
          gap: "4px",
          flexShrink: 0,
          children: [(0, _v1.jsx)(_v6.Gift, {
            boxSize: "12px"
          }), (0, _v9.getBundlePriceBadgeLabel)(_v2)]
        })]
      })
    });
  }]);
}