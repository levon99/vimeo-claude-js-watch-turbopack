{
  "use strict";

  let _v3;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v4 = {
    createRouteLoader: function () {
      return _v18;
    },
    getClientBuildManifest: function () {
      return _v16;
    },
    isAssetError: function () {
      return _v14;
    },
    markAssetError: function () {
      return _v13;
    }
  };
  for (var _v5 in _v4) Object.defineProperty(_v2, _v5, {
    enumerable: !0,
    get: _v4[_v5]
  });
  _v0.r(0), _v0.r(0);
  let _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0);
  function _v11(_v0, _v1, _v2) {
    let _v3,
      _v4 = _v1.get(_v0);
    if (_v4) return "future" in _v4 ? _v4.future : Promise.resolve(_v4);
    let _v5 = new Promise(_v0 => {
      _v3 = _v0;
    });
    return _v1.set(_v0, {
      resolve: _v3,
      future: _v5
    }), _v2 ? _v2().then(_v0 => (_v3(_v0), _v0)).catch(_v0 => {
      throw _v1.delete(_v0), _v0;
    }) : _v5;
  }
  let _v12 = Symbol("ASSET_LOAD_ERROR");
  function _v13(_v0) {
    return Object.defineProperty(_v0, _v12, {});
  }
  function _v14(_v0) {
    return _v0 && _v12 in _v0;
  }
  let _v15 = function (_v0) {
    try {
      return _v0 = document.createElement("link"), !!window.MSInputMethodContext && !!document.documentMode || _v0.relList.supports("prefetch");
    } catch {
      return !1;
    }
  }();
  function _v16() {
    if (self.__BUILD_MANIFEST) return Promise.resolve(self.__BUILD_MANIFEST);
    let _v0 = new Promise(_v0 => {
      let _v1 = self.__BUILD_MANIFEST_CB;
      self.__BUILD_MANIFEST_CB = () => {
        _v0(self.__BUILD_MANIFEST), _v1 && _v1();
      };
    });
    return (0, _v10.resolvePromiseWithTimeout)(_v0, _v13(Object.defineProperty(Error("Failed to load client build manifest"), "__NEXT_ERROR_CODE", {
      value: "E273",
      enumerable: !1,
      configurable: !0
    })), _v3);
  }
  function _v17(_v0, _v1) {
    return _v16().then(_v0 => {
      if (!(_v1 in _v0)) throw _v13(Object.defineProperty(Error(`Failed to lookup route: ${_v1}`), "__NEXT_ERROR_CODE", {
        value: "E446",
        enumerable: !1,
        configurable: !0
      }));
      let _v1 = _v0[_v1].map(_v0 => _v0 + "/_next/" + (0, _v9.encodeURIPath)(_v0));
      return {
        scripts: _v1.filter(_v0 => _v0.endsWith(".js")).map(_v0 => (0, _v6.__unsafeCreateTrustedScriptURL)(_v0) + (0, _v8.getAssetTokenQuery)()),
        css: _v1.filter(_v0 => _v0.endsWith(".css")).map(_v0 => _v0 + (0, _v8.getAssetTokenQuery)())
      };
    });
  }
  function _v18(_v0) {
    let _v1 = new Map(),
      _v2 = new Map(),
      _v3 = new Map(),
      _v4 = new Map();
    function _v5(_v0) {
      {
        var _v1;
        let _v0 = _v2.get(_v0.toString());
        return _v0 ? _v0 : document.querySelector(`script[src^="${_v0}"]`) ? Promise.resolve() : (_v2.set(_v0.toString(), _v0 = new Promise((_v0, _v1) => {
          (_v1 = document.createElement("script")).onload = _v0, _v1.onerror = () => _v1(_v13(Object.defineProperty(Error(`Failed to load script: ${_v0}`), "__NEXT_ERROR_CODE", {
            value: "E74",
            enumerable: !1,
            configurable: !0
          }))), _v1.crossOrigin = void 0, _v1.src = _v0, document.body.appendChild(_v1);
        })), _v0);
      }
    }
    function _v6(_v0) {
      let _v1 = _v3.get(_v0);
      return _v1 || _v3.set(_v0, _v1 = fetch(_v0, {
        credentials: "same-origin"
      }).then(_v0 => {
        if (!_v0.ok) throw Object.defineProperty(Error(`Failed to load stylesheet: ${_v0}`), "__NEXT_ERROR_CODE", {
          value: "E189",
          enumerable: !1,
          configurable: !0
        });
        return _v0.text().then(_v0 => ({
          href: _v0,
          content: _v0
        }));
      }).catch(_v0 => {
        throw _v13(_v0);
      })), _v1;
    }
    return {
      whenEntrypoint: _v0 => _v11(_v0, _v1),
      onEntrypoint(_v0, _v1) {
        (_v1 ? Promise.resolve().then(() => _v1()).then(_v0 => ({
          component: _v0 && _v0.default || _v0,
          exports: _v0
        }), _v0 => ({
          error: _v0
        })) : Promise.resolve(void 0)).then(_v0 => {
          let _v1 = _v1.get(_v0);
          _v1 && "resolve" in _v1 ? _v0 && (_v1.set(_v0, _v0), _v1.resolve(_v0)) : (_v0 ? _v1.set(_v0, _v0) : _v1.delete(_v0), _v4.delete(_v0));
        });
      },
      loadRoute(_v0, _v1) {
        return _v11(_v0, _v4, () => {
          let _v0;
          return (0, _v10.resolvePromiseWithTimeout)(_v17(_v0, _v0).then(({
            scripts: _v0,
            css: _v1
          }) => Promise.all([_v1.has(_v0) ? [] : Promise.all(_v0.map(_v5)), Promise.all(_v1.map(_v6))])).then(_v0 => this.whenEntrypoint(_v0).then(_v0 => ({
            entrypoint: _v0,
            styles: _v0[1]
          }))), _v13(Object.defineProperty(Error(`Route did not complete loading: ${_v0}`), "__NEXT_ERROR_CODE", {
            value: "E12",
            enumerable: !1,
            configurable: !0
          })), _v3).then(({
            entrypoint: _v0,
            styles: _v1
          }) => {
            let _v2 = Object.assign({
              styles: _v1
            }, _v0);
            return "error" in _v0 ? _v0 : _v2;
          }).catch(_v0 => {
            if (_v1) throw _v0;
            return {
              error: _v0
            };
          }).finally(() => _v0?.());
        });
      },
      prefetch(_v0) {
        let _v1;
        return (_v1 = navigator.connection) && (_v1.saveData || /2g/.test(_v1.effectiveType)) ? Promise.resolve() : _v17(_v0, _v0).then(_v0 => Promise.all(_v15 ? _v0.scripts.map(_v0 => {
          var _v1, _v2, _v3;
          return _v1 = _v0.toString(), _v2 = "script", new Promise((_v0, _v1) => {
            let _v2 = `
      link[rel="prefetch"][href^="${_v1}"],
      link[rel="preload"][href^="${_v1}"],
      script[src^="${_v1}"]`;
            if (document.querySelector(_v2)) return _v0();
            _v3 = document.createElement("link"), _v2 && (_v3.as = _v2), _v3.rel = "prefetch", _v3.crossOrigin = void 0, _v3.onload = _v0, _v3.onerror = () => _v1(_v13(Object.defineProperty(Error(`Failed to prefetch: ${_v1}`), "__NEXT_ERROR_CODE", {
              value: "E268",
              enumerable: !1,
              configurable: !0
            }))), _v3.href = _v1, document.head.appendChild(_v3);
          });
        }) : [])).then(() => {
          (0, _v7.requestIdleCallback)(() => this.loadRoute(_v0, !0).catch(() => {}));
        }).catch(() => {});
      }
    };
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}