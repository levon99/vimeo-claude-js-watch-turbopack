{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useMetricColors", 0, () => {
    let [_v0, _v1, _v2, _v3] = (0, _v2.useToken)("colors", ["vimeoBlue.200", "vimeoBlue.400", "vimeoBlue.600", "vimeoBlue.700"]);
    return {
      views: (0, _v1.useColorModeValue)(_v1, _v1),
      impressions: (0, _v1.useColorModeValue)(_v0, _v3),
      uniqueViewers: (0, _v1.useColorModeValue)(_v2, _v0)
    };
  }]);
}