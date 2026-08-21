{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    default: function () {
      return _v20;
    },
    handleClientScriptLoad: function () {
      return _v17;
    },
    initScriptLoader: function () {
      return _v18;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v5._(_v0.r(0)),
    _v9 = _v6._(_v0.r(0)),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = new Map(),
    _v15 = new Set(),
    _v16 = _v0 => {
      let {
          src: _v1,
          id: _v2,
          onLoad: _v3 = () => {},
          onReady: _v4 = null,
          dangerouslySetInnerHTML: _v5,
          children: _v6 = "",
          strategy: _v7 = "afterInteractive",
          onError: _v8,
          stylesheets: _v9
        } = _v0,
        _v10 = _v2 || _v1;
      if (_v10 && _v15.has(_v10)) return;
      if (_v14.has(_v1)) {
        _v15.add(_v10), _v14.get(_v1).then(_v3, _v8);
        return;
      }
      let _v11 = () => {
          _v4 && _v4(), _v15.add(_v10);
        },
        _v12 = document.createElement("script"),
        _v13 = new Promise((_v0, _v1) => {
          _v12.addEventListener("load", function (_v0) {
            _v0(), _v3 && _v3.call(this, _v0), _v11();
          }), _v12.addEventListener("error", function (_v0) {
            _v1(_v0);
          });
        }).catch(function (_v0) {
          _v8 && _v8(_v0);
        });
      _v5 ? (_v12.innerHTML = _v5.__html || "", _v11()) : _v6 ? (_v12.textContent = "string" == typeof _v6 ? _v6 : Array.isArray(_v6) ? _v6.join("") : "", _v11()) : _v1 && (_v12.src = _v1, _v14.set(_v1, _v13)), (0, _v11.setAttributesFromProps)(_v12, _v0), "worker" === _v7 && _v12.setAttribute("type", "text/partytown"), _v12.setAttribute("data-nscript", _v7), _v9 && (_v0 => {
        if (_v8.default.preinit) return _v0.forEach(_v0 => {
          _v8.default.preinit(_v0, {
            as: "style"
          });
        });
        if ("u" > typeof window) {
          let _v0 = document.head;
          _v0.forEach(_v0 => {
            let _v1 = document.createElement("link");
            _v1.type = "text/css", _v1.rel = "stylesheet", _v1.href = _v0, _v0.appendChild(_v1);
          });
        }
      })(_v9), document.body.appendChild(_v12);
    };
  function _v17(_v0) {
    let {
      strategy: _v1 = "afterInteractive"
    } = _v0;
    "lazyOnload" === _v1 ? window.addEventListener("load", () => {
      (0, _v12.requestIdleCallback)(() => _v16(_v0));
    }) : _v16(_v0);
  }
  function _v18(_v0) {
    _v0.forEach(_v17), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(_v0 => {
      let _v1 = _v0.id || _v0.getAttribute("src");
      _v15.add(_v1);
    });
  }
  function _v19(_v0) {
    let {
        id: _v1,
        src: _v2 = "",
        onLoad: _v3 = () => {},
        onReady: _v4 = null,
        strategy: _v5 = "afterInteractive",
        onError: _v6,
        stylesheets: _v7,
        ..._v8
      } = _v0,
      {
        updateScripts: _v9,
        scripts: _v10,
        getIsSsr: _v11,
        appDir: _v12,
        nonce: _v13
      } = (0, _v9.useContext)(_v10.HeadManagerContext);
    _v13 = _v8.nonce || _v13;
    let _v14 = (0, _v9.useRef)(!1);
    (0, _v9.useEffect)(() => {
      let _v0 = _v1 || _v2;
      _v14.current || (_v4 && _v0 && _v15.has(_v0) && _v4(), _v14.current = !0);
    }, [_v4, _v1, _v2]);
    let _v15 = (0, _v9.useRef)(!1);
    if ((0, _v9.useEffect)(() => {
      if (!_v15.current) {
        if ("afterInteractive" === _v5) _v16(_v0);else "lazyOnload" === _v5 && ("complete" === document.readyState ? (0, _v12.requestIdleCallback)(() => _v16(_v0)) : window.addEventListener("load", () => {
          (0, _v12.requestIdleCallback)(() => _v16(_v0));
        }));
        _v15.current = !0;
      }
    }, [_v0, _v5]), ("beforeInteractive" === _v5 || "worker" === _v5) && (_v9 ? (_v10[_v5] = (_v10[_v5] || []).concat([{
      id: _v1,
      src: _v2,
      onLoad: _v3,
      onReady: _v4,
      onError: _v6,
      ..._v8,
      nonce: _v13
    }]), _v9(_v10)) : _v11 && _v11() ? _v15.add(_v1 || _v2) : _v11 && !_v11() && _v16({
      ..._v0,
      nonce: _v13
    })), _v12) {
      if (_v7 && _v7.forEach(_v0 => {
        _v8.default.preinit(_v0, {
          as: "style"
        });
      }), "beforeInteractive" === _v5) if (!_v2) return _v8.dangerouslySetInnerHTML && (_v8.children = _v8.dangerouslySetInnerHTML.__html, delete _v8.dangerouslySetInnerHTML), (0, _v7.jsx)("script", {
        nonce: _v13,
        dangerouslySetInnerHTML: {
          __html: `(self.__next_s=self.__next_s||[]).push(${(0, _v13.htmlEscapeJsonString)(JSON.stringify([0, {
            ..._v8,
            id: _v1
          }]))})`
        }
      });else return _v8.default.preload(_v2, _v8.integrity ? {
        as: "script",
        integrity: _v8.integrity,
        nonce: _v13,
        crossOrigin: _v8.crossOrigin
      } : {
        as: "script",
        nonce: _v13,
        crossOrigin: _v8.crossOrigin
      }), (0, _v7.jsx)("script", {
        nonce: _v13,
        dangerouslySetInnerHTML: {
          __html: `(self.__next_s=self.__next_s||[]).push(${(0, _v13.htmlEscapeJsonString)(JSON.stringify([_v2, {
            ..._v8,
            id: _v1
          }]))})`
        }
      });
      "afterInteractive" === _v5 && _v2 && _v8.default.preload(_v2, _v8.integrity ? {
        as: "script",
        integrity: _v8.integrity,
        nonce: _v13,
        crossOrigin: _v8.crossOrigin
      } : {
        as: "script",
        nonce: _v13,
        crossOrigin: _v8.crossOrigin
      });
    }
    return null;
  }
  Object.defineProperty(_v19, "__nextScript", {
    value: !0
  });
  let _v20 = _v19;
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}