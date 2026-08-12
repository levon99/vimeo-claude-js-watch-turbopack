{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useTheme", 0, function () {
    let _v0 = (0, _v2.useContext)(_v1.ThemeContext);
    if (!_v0) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
    return _v0;
  }]);
}