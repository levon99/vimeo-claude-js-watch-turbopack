{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = (0, _v1.createContext)({});
  function _v3() {
    let _v0 = (0, _v1.useContext)(_v2);
    if (void 0 === _v0) throw Error("useColorMode must be used within a ColorModeProvider");
    return _v0;
  }
  _v2.displayName = "ColorModeContext", _v0.s(["ColorModeContext", 0, _v2, "useColorMode", 0, _v3, "useColorModeValue", 0, function (_v0, _v1) {
    let {
      colorMode: _v2
    } = _v3();
    return "dark" === _v2 ? _v1 : _v0;
  }]);
}