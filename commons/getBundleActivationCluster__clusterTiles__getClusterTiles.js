{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["getBundleActivationCluster", 0, _v0 => ({
    clusterTiles: (0, _v2.getClusterTiles)(_v0),
    otherProductsCount: (0, _v2.getOtherProductsCount)(_v0),
    infoTooltip: (0, _v1.getBundleIncludesTooltip)((0, _v2.getBundleProductOrder)(_v0))
  })]);
}