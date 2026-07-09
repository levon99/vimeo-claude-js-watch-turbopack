{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useDashboardColors", 0, () => {
    let [_v0, _v1, _v2, _v3, _v4, _v5, _v6] = (0, _v2.useToken)("colors", ["vimeoBlue.200", "vimeoBlue.300", "vimeoBlue.400", "vimeoBlue.500", "vimeoBlue.600", "vimeoBlue.700", "vimeoBlue.800"]);
    return {
      0: (0, _v1.useColorModeValue)(_v4, _v2),
      1: (0, _v1.useColorModeValue)(_v3, _v3),
      2: (0, _v1.useColorModeValue)(_v2, _v4),
      3: (0, _v1.useColorModeValue)(_v1, _v5),
      4: (0, _v1.useColorModeValue)(_v0, _v6)
    };
  }], 0), _v0.s(["useOtherColor", 0, () => {
    let [_v0, _v1] = (0, _v2.useToken)("colors", ["gray.200", "lightBlueAlpha.200"]);
    return (0, _v1.useColorModeValue)(_v0, _v1);
  }], 0);
}