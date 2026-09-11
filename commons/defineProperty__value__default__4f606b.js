{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    default: function () {
      return _v11;
    },
    noSSR: function () {
      return _v10;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  _v0.r(0);
  let _v7 = _v5._(_v0.r(0)),
    _v8 = "u" < typeof window;
  function _v9(_v0) {
    return {
      default: _v0?.default || _v0
    };
  }
  function _v10(_v0, _v1) {
    if (delete _v1.webpack, delete _v1.modules, !_v8) return _v0(_v1);
    let _v2 = _v1.loading;
    return () => (0, _v6.jsx)(_v2, {
      error: null,
      isLoading: !0,
      pastDelay: !1,
      timedOut: !1
    });
  }
  function _v11(_v0, _v1) {
    let _v2 = _v7.default,
      _v3 = {
        loading: ({
          error: _v0,
          isLoading: _v1,
          pastDelay: _v2
        }) => null
      };
    _v0 instanceof Promise ? _v3.loader = () => _v0 : "function" == typeof _v0 ? _v3.loader = _v0 : "object" == typeof _v0 && (_v3 = {
      ..._v3,
      ..._v0
    });
    let _v4 = (_v3 = {
      ..._v3,
      ..._v1
    }).loader;
    return (_v3.loadableGenerated && (_v3 = {
      ..._v3,
      ..._v3.loadableGenerated
    }, delete _v3.loadableGenerated), "boolean" != typeof _v3.ssr || _v3.ssr) ? _v2({
      ..._v3,
      loader: () => null != _v4 ? _v4().then(_v9) : Promise.resolve(_v9(() => null))
    }) : (delete _v3.webpack, delete _v3.modules, _v10(_v2, _v3));
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}