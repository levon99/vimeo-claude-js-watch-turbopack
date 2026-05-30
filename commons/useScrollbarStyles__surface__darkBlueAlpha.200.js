{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useScrollbarStyles", 0, function ({
    width: _v0 = (0, _v2.rem)(16),
    scrollbarColor: _v1 = "surface",
    thumbColor: _v2 = (0, _v1.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.200")
  } = {}) {
    let [_v3, _v4] = (0, _v3.useToken)("colors", [_v2, _v1], [_v2, _v1]);
    return {
      "&::-webkit-scrollbar": {
        width: _v0
      },
      "&::-webkit-resizer, &::-webkit-scrollbar-corner, &::-webkit-scrollbar-track": {
        backgroundColor: _v1
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: _v2,
        borderRadius: _v0,
        border: `${(0, _v2.rem)(4)} solid`,
        borderColor: _v1
      },
      "&::-webkit-scrollbar-button": {
        display: "none"
      },
      "@supports (-moz-appearance: none)": {
        scrollbarWidth: "thin",
        scrollbarColor: `${_v3} ${_v4}`
      }
    };
  }]);
}