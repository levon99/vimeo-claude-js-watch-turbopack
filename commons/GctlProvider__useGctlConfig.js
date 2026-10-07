{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v2.createContext)({});
  _v0.s(["GctlProvider", 0, function ({
    children: _v0,
    jwt: _v1,
    baseUrl: _v2,
    xVimeoPage: _v3,
    locale: _v4
  }) {
    let _v5 = (0, _v2.useMemo)(() => ({
      jwt: _v1,
      baseUrl: _v2,
      xVimeoPage: _v3,
      locale: _v4
    }), [_v1, _v2, _v3, _v4]);
    return (0, _v1.jsx)(_v3.Provider, {
      value: _v5,
      children: _v0
    });
  }, "useGctlConfig", 0, function () {
    return (0, _v2.useContext)(_v3);
  }]);
}