{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = -10,
    _v10 = (0, _v4.rem)(17.23);
  _v0.s(["TiltedTileCluster", 0, ({
    tileSize: _v0,
    clusterTiles: _v1,
    otherProductsCount: _v2,
    rotation: _v3 = _v9,
    tileOverlap: _v4,
    infoTooltip: _v5
  }) => {
    let _v6 = Math.abs(_v3) * Math.PI / 180,
      _v7 = _v0 * (Math.cos(_v6) + Math.sin(_v6)),
      _v8 = _v4 ?? `-${(0, _v4.rem)(.42 * _v0)}`,
      _v9 = {
        transform: `rotate(${_v3}deg)`
      };
    return (0, _v1.jsxs)(_v3.Flex, {
      alignItems: "center",
      flexShrink: 0,
      children: [_v1.map((_v0, _v1) => {
        let _v2 = _v1 === _v1.length - 1 && void 0 === _v2;
        return (0, _v1.jsx)(_v3.Flex, {
          width: (0, _v4.rem)(_v7),
          height: (0, _v4.rem)(_v7),
          marginRight: _v2 ? void 0 : _v8,
          zIndex: _v1,
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          children: (0, _v1.jsx)(_v2.Box, {
            width: (0, _v4.rem)(_v0),
            height: (0, _v4.rem)(_v0),
            sx: _v9,
            children: (0, _v1.jsx)(_v8.ProductTileView, {
              productId: _v0.productId,
              size: _v0
            })
          })
        }, _v0.productId);
      }), void 0 !== _v2 && (0, _v1.jsx)(_v3.Flex, {
        width: (0, _v4.rem)(_v7),
        height: (0, _v4.rem)(_v7),
        zIndex: _v1.length,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        children: (0, _v1.jsx)(_v3.Flex, {
          sx: _v9,
          children: (0, _v1.jsx)(_v7.CounterTile, {
            size: _v0,
            count: _v2
          })
        })
      }), void 0 !== _v5 && (0, _v1.jsx)(_v2.Box, {
        alignSelf: "flex-start",
        flexShrink: 0,
        children: (0, _v1.jsx)(_v5.Tooltip, {
          label: _v5,
          placement: "top",
          hasArrow: !0,
          shouldWrapChildren: !0,
          children: (0, _v1.jsx)(_v6.InfoCircle, {
            color: "text-primary",
            width: _v10,
            height: _v10,
            marginRight: `-${(0, _v4.rem)(.0587 * _v0)}`
          })
        })
      })]
    });
  }]);
}