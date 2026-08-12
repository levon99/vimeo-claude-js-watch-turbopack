{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v2.createContext)(null);
  _v0.s(["LiveGlobalsContext", 0, _v3, "LiveGlobalsProvider", 0, function ({
    initialState: _v0,
    children: _v1,
    pageProps: _v2
  }) {
    let _v3 = (0, _v2.useMemo)(() => ({
      initialState: _v0,
      pageProps: _v2
    }), [_v0, _v2]);
    return (0, _v1.jsx)(_v3.Provider, {
      value: _v3,
      children: _v1
    });
  }, "useLiveGlobals", 0, function () {
    return (0, _v2.useContext)(_v3);
  }]);
}