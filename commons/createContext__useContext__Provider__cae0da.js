{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["createContext", 0, function (_v0 = {}) {
    let {
        name: _v1,
        strict: _v2 = !0,
        hookName: _v3 = "useContext",
        providerName: _v4 = "Provider",
        errorMessage: _v5,
        defaultValue: _v6
      } = _v0,
      _v7 = (0, _v1.createContext)(_v6);
    return _v7.displayName = _v1, [_v7.Provider, function _v0() {
      let _v1 = (0, _v1.useContext)(_v7);
      if (!_v1 && _v2) {
        let _v0 = Error(_v5 ?? `${_v3} returned \`undefined\`. Seems you forgot to wrap component within ${_v4}`);
        throw _v0.name = "ContextError", Error.captureStackTrace?.(_v0, _v0), _v0;
      }
      return _v1;
    }, _v7];
  }]);
}