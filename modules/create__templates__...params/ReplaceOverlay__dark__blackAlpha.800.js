{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["ReplaceOverlay", 0, _v0 => {
    let _v1 = (0, _v6.useAppDispatch)(),
      {
        isReplacing: _v2
      } = (0, _v4.useReplaceElement)(),
      {
        colorMode: _v3
      } = (0, _v3.useColorMode)();
    return _v2 ? (0, _v1.jsx)(_v2.Box, {
      backgroundColor: "dark" === _v3 ? "blackAlpha.800" : "fill-page-overlay",
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      onClick: () => _v1((0, _v5.resetSelectionAction)()),
      ..._v0
    }) : null;
  }]);
}