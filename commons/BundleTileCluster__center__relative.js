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
    _v9 = _v0.i(0);
  let _v10 = 11.489 / 67.5,
    _v11 = 2.872 / 67.5,
    _v12 = 5.745 / 67.5,
    _v13 = 17.23 / 67.5,
    _v14 = 10.9 / 67.5,
    _v15 = 40.876 / 67.5,
    _v16 = 17.23 / 67.5,
    _v17 = 2.872 / 67.5,
    _v18 = 50.28 / 94,
    _v19 = 74 / 94,
    _v20 = 28 / 94,
    _v21 = 8 / 94,
    _v22 = 14 / 94,
    _v23 = 10 / 94;
  _v0.s(["BundleTileCluster", 0, ({
    hostTileSize: _v0,
    partnerTileSizes: _v1,
    clusterTiles: _v2,
    otherProductsCount: _v3,
    planLabel: _v4,
    infoTooltip: _v5
  }) => (0, _v1.jsxs)(_v3.Flex, {
    alignItems: "center",
    gap: (0, _v4.rem)(_v0 * _v10),
    flexShrink: 0,
    children: [(0, _v1.jsxs)(_v2.Box, {
      position: "relative",
      flexShrink: 0,
      children: [(0, _v1.jsx)(_v9.ProductTileView, {
        productId: "vimeo",
        size: _v0,
        logoScale: 36.65 / _v0
      }), void 0 !== _v4 && (0, _v1.jsx)(_v3.Flex, {
        position: "absolute",
        top: (0, _v4.rem)(_v0 * _v19),
        left: (0, _v4.rem)(_v0 * _v18),
        height: (0, _v4.rem)(_v0 * _v20),
        borderRadius: (0, _v4.rem)(_v0 * _v21),
        paddingX: (0, _v4.rem)(_v0 * _v23),
        background: "upsell-primary",
        color: "text-button-inverted",
        fontFamily: "heading",
        fontSize: (0, _v4.rem)(_v0 * _v22),
        lineHeight: "1",
        alignItems: "center",
        whiteSpace: "nowrap",
        children: _v4
      })]
    }), (0, _v1.jsx)(_v3.Flex, {
      background: "rgba(26, 54, 93, 0.08)",
      borderRadius: (0, _v4.rem)(_v0 * _v12),
      padding: (0, _v4.rem)(_v0 * _v11),
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      children: (0, _v1.jsx)(_v7.Plus, {
        color: "text-primary",
        width: (0, _v4.rem)(_v0 * _v13),
        height: (0, _v4.rem)(_v0 * _v13)
      })
    }), (0, _v1.jsxs)(_v3.Flex, {
      alignItems: "center",
      children: [_v2.map((_v0, _v1) => {
        let _v2 = _v1 === _v2.length - 1 && void 0 === _v3;
        return (0, _v1.jsx)(_v2.Box, {
          marginRight: _v2 ? void 0 : `-${(0, _v4.rem)(_v0 * _v14)}`,
          zIndex: _v2.length - _v1,
          position: "relative",
          flexShrink: 0,
          children: (0, _v1.jsx)(_v9.ProductTileView, {
            productId: _v0.productId,
            size: _v1[_v1] ?? _v1[_v1.length - 1]
          })
        }, _v0.productId);
      }), void 0 !== _v3 && (0, _v1.jsx)(_v3.Flex, {
        width: (0, _v4.rem)(_v0 * _v15),
        height: (0, _v4.rem)(_v0 * _v15),
        zIndex: 0,
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v8.CounterTile, {
          size: _v0 * _v15,
          count: _v3
        })
      }), void 0 !== _v5 && (0, _v1.jsx)(_v5.Tooltip, {
        label: _v5,
        placement: "top",
        hasArrow: !0,
        shouldWrapChildren: !0,
        children: (0, _v1.jsx)(_v6.InfoCircle, {
          color: "text-primary",
          width: (0, _v4.rem)(_v0 * _v16),
          height: (0, _v4.rem)(_v0 * _v16),
          marginLeft: (0, _v4.rem)(_v0 * _v17),
          alignSelf: "flex-start"
        })
      })]
    })]
  })]);
}