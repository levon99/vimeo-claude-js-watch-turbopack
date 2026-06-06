{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = (0, _v2.createContext)({
      getDocument: () => document,
      getWindow: () => window
    });
  function _v5(_v0) {
    let {
        children: _v1,
        environment: _v2,
        disabled: _v3
      } = _v0,
      _v4 = (0, _v2.useRef)(null),
      _v5 = (0, _v2.useMemo)(() => _v2 || {
        getDocument: () => {
          var _v0, _v1;
          return null != (_v1 = null == (_v0 = _v4.current) ? void 0 : _v0.ownerDocument) ? _v1 : document;
        },
        getWindow: () => {
          var _v0, _v1;
          return null != (_v1 = null == (_v0 = _v4.current) ? void 0 : _v0.ownerDocument.defaultView) ? _v1 : window;
        }
      }, [_v2]),
      _v6 = !_v3 || !_v2;
    return (0, _v3.jsxs)(_v4.Provider, {
      value: _v5,
      children: [_v1, _v6 && (0, _v3.jsx)("span", {
        id: "__chakra_env",
        hidden: !0,
        ref: _v4
      })]
    });
  }
  _v4.displayName = "EnvironmentContext", _v5.displayName = "EnvironmentProvider", _v0.s(["EnvironmentProvider", 0, _v5, "useEnvironment", 0, function ({
    defer: _v0
  } = {}) {
    let [, _v1] = (0, _v2.useReducer)(_v0 => _v0 + 1, 0);
    return (0, _v1.useSafeLayoutEffect)(() => {
      _v0 && _v1();
    }, [_v0]), (0, _v2.useContext)(_v4);
  }]);
}