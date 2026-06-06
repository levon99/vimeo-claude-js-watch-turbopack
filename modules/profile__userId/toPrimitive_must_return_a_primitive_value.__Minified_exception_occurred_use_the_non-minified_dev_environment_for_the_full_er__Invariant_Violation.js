{
  "use strict";

  let _v1;
  var _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12 = _v0.i(0);
  _v0.i(0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  function _v15(_v0) {
    return (_v15 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v16(_v0, _v1, _v2) {
    var _v3;
    return (_v3 = function (_v0, _v1) {
      if ("object" != _v15(_v0) || !_v0) return _v0;
      var _v2 = _v0[Symbol.toPrimitive];
      if (void 0 !== _v2) {
        var _v3 = _v2.call(_v0, _v1 || "default");
        if ("object" != _v15(_v3)) return _v3;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === _v1 ? String : Number)(_v0);
    }(_v1, "string"), (_v1 = "symbol" == _v15(_v3) ? _v3 : _v3 + "") in _v0) ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  function _v17(_v0) {
    return _v0 && _v0.__esModule && Object.prototype.hasOwnProperty.call(_v0, "default") ? _v0.default : _v0;
  }
  var _v18 = _v17(_v6 ? _v5 : (_v6 = 1, _v5 = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
      if (!_v0) {
        var _v8;
        if (void 0 === _v1) _v8 = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
          var _v9 = [_v2, _v3, _v4, _v5, _v6, _v7],
            _v10 = 0;
          (_v8 = Error(_v1.replace(/%s/g, function () {
            return _v9[_v10++];
          }))).name = "Invariant Violation";
        }
        throw _v8.framesToPop = 1, _v8;
      }
    })),
    _v19 = (0, _v13.createContext)(null);
  function _v20(_v0) {
    google.maps.event.removeListener(_v0);
  }
  function _v21() {
    var _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    _v0.forEach(_v20);
  }
  function _v22(_v0) {
    var _v1,
      _v2,
      _v3,
      _v4,
      {
        updaterMap: _v5,
        eventMap: _v6,
        prevProps: _v7,
        nextProps: _v8,
        instance: _v9
      } = _v0,
      _v10 = (_v1 = function (_v0, _v1, _v2) {
        return "function" == typeof _v8[_v2] && _v0.push(google.maps.event.addListener(_v9, _v1, _v8[_v2])), _v0;
      }, _v2 = [], Object.keys(_v6).reduce(function (_v0, _v1) {
        return _v1(_v0, _v6[_v1], _v1);
      }, _v2));
    return _v3 = {}, _v4 = (_v0, _v1) => {
      var _v2 = _v8[_v1];
      _v2 !== _v7[_v1] && (_v3[_v1] = _v2, _v0(_v9, _v2));
    }, Object.keys(_v5).forEach(_v0 => _v4(_v5[_v0], _v0)), _v10;
  }
  function _v23(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    try {
      var _v7 = _v0[_v5](_v6),
        _v8 = _v7.value;
    } catch (_v0) {
      return void _v2(_v0);
    }
    _v7.done ? _v1(_v8) : Promise.resolve(_v8).then(_v3, _v4);
  }
  function _v24(_v0) {
    return function () {
      var _v0 = this,
        _v1 = arguments;
      return new Promise(function (_v0, _v1) {
        var _v2 = _v0.apply(_v0, _v1);
        function _v3(_v0) {
          _v23(_v2, _v0, _v1, _v3, _v4, "next", _v0);
        }
        function _v4(_v0) {
          _v23(_v2, _v0, _v1, _v3, _v4, "throw", _v0);
        }
        _v3(void 0);
      });
    };
  }
  function _v25(_v0) {
    var {
        googleMapsApiKey: _v1,
        googleMapsClientId: _v2,
        version: _v3 = "weekly",
        language: _v4,
        region: _v5,
        libraries: _v6,
        channel: _v7,
        mapIds: _v8,
        authReferrerPolicy: _v9,
        apiUrl: _v10 = "https://maps.googleapis.com"
      } = _v0,
      _v11 = [];
    return _v18(_v1 && _v2 || !(_v1 && _v2), "You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."), _v1 ? _v11.push("key=".concat(_v1)) : _v2 && _v11.push("client=".concat(_v2)), _v3 && _v11.push("v=".concat(_v3)), _v4 && _v11.push("language=".concat(_v4)), _v5 && _v11.push("region=".concat(_v5)), _v6 && _v6.length && _v11.push("libraries=".concat(_v6.sort().join(","))), _v7 && _v11.push("channel=".concat(_v7)), _v8 && _v8.length && _v11.push("map_ids=".concat(_v8.join(","))), _v9 && _v11.push("auth_referrer_policy=".concat(_v9)), _v11.push("loading=async"), _v11.push("callback=initMap"), "".concat(_v10, "/maps/api/js?").concat(_v11.join("&"));
  }
  (0, _v13.memo)(function (_v0) {
    var {
        children: _v1,
        options: _v2,
        id: _v3,
        mapContainerStyle: _v4,
        mapContainerClassName: _v5,
        center: _v6,
        onClick: _v7,
        onDblClick: _v8,
        onDrag: _v9,
        onDragEnd: _v10,
        onDragStart: _v11,
        onMouseMove: _v12,
        onMouseOut: _v13,
        onMouseOver: _v14,
        onMouseDown: _v15,
        onMouseUp: _v16,
        onRightClick: _v17,
        onCenterChanged: _v18,
        onLoad: _v19,
        onUnmount: _v20
      } = _v0,
      [_v21, _v22] = (0, _v13.useState)(null),
      _v23 = (0, _v13.useRef)(null),
      [_v24, _v25] = (0, _v13.useState)(null),
      [_v26, _v27] = (0, _v13.useState)(null),
      [_v28, _v29] = (0, _v13.useState)(null),
      [_v30, _v31] = (0, _v13.useState)(null),
      [_v32, _v33] = (0, _v13.useState)(null),
      [_v34, _v35] = (0, _v13.useState)(null),
      [_v36, _v37] = (0, _v13.useState)(null),
      [_v38, _v39] = (0, _v13.useState)(null),
      [_v40, _v41] = (0, _v13.useState)(null),
      [_v42, _v43] = (0, _v13.useState)(null),
      [_v44, _v45] = (0, _v13.useState)(null),
      [_v46, _v47] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      _v2 && null !== _v21 && _v21.setOptions(_v2);
    }, [_v21, _v2]), (0, _v13.useEffect)(() => {
      null !== _v21 && void 0 !== _v6 && _v21.setCenter(_v6);
    }, [_v21, _v6]), (0, _v13.useEffect)(() => {
      _v21 && _v8 && (null !== _v26 && google.maps.event.removeListener(_v26), _v27(google.maps.event.addListener(_v21, "dblclick", _v8)));
    }, [_v8]), (0, _v13.useEffect)(() => {
      _v21 && _v10 && (null !== _v28 && google.maps.event.removeListener(_v28), _v29(google.maps.event.addListener(_v21, "dragend", _v10)));
    }, [_v10]), (0, _v13.useEffect)(() => {
      _v21 && _v11 && (null !== _v30 && google.maps.event.removeListener(_v30), _v31(google.maps.event.addListener(_v21, "dragstart", _v11)));
    }, [_v11]), (0, _v13.useEffect)(() => {
      _v21 && _v15 && (null !== _v32 && google.maps.event.removeListener(_v32), _v33(google.maps.event.addListener(_v21, "mousedown", _v15)));
    }, [_v15]), (0, _v13.useEffect)(() => {
      _v21 && _v12 && (null !== _v34 && google.maps.event.removeListener(_v34), _v35(google.maps.event.addListener(_v21, "mousemove", _v12)));
    }, [_v12]), (0, _v13.useEffect)(() => {
      _v21 && _v13 && (null !== _v36 && google.maps.event.removeListener(_v36), _v37(google.maps.event.addListener(_v21, "mouseout", _v13)));
    }, [_v13]), (0, _v13.useEffect)(() => {
      _v21 && _v14 && (null !== _v38 && google.maps.event.removeListener(_v38), _v39(google.maps.event.addListener(_v21, "mouseover", _v14)));
    }, [_v14]), (0, _v13.useEffect)(() => {
      _v21 && _v16 && (null !== _v40 && google.maps.event.removeListener(_v40), _v41(google.maps.event.addListener(_v21, "mouseup", _v16)));
    }, [_v16]), (0, _v13.useEffect)(() => {
      _v21 && _v17 && (null !== _v42 && google.maps.event.removeListener(_v42), _v43(google.maps.event.addListener(_v21, "rightclick", _v17)));
    }, [_v17]), (0, _v13.useEffect)(() => {
      _v21 && _v7 && (null !== _v44 && google.maps.event.removeListener(_v44), _v45(google.maps.event.addListener(_v21, "click", _v7)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      _v21 && _v9 && (null !== _v46 && google.maps.event.removeListener(_v46), _v47(google.maps.event.addListener(_v21, "drag", _v9)));
    }, [_v9]), (0, _v13.useEffect)(() => {
      _v21 && _v18 && (null !== _v24 && google.maps.event.removeListener(_v24), _v25(google.maps.event.addListener(_v21, "center_changed", _v18)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      var _v0 = null === _v23.current ? null : new google.maps.Map(_v23.current, _v2);
      return _v22(_v0), null !== _v0 && _v19 && _v19(_v0), () => {
        null !== _v0 && _v20 && _v20(_v0);
      };
    }, []), (0, _v12.jsx)("div", {
      id: _v3,
      ref: _v23,
      style: _v4,
      className: _v5,
      children: (0, _v12.jsx)(_v19.Provider, {
        value: _v21,
        children: null !== _v21 ? _v1 : null
      })
    });
  }), _v13.PureComponent;
  var _v26 = "u" > typeof document;
  function _v27(_v0) {
    var {
      url: _v1,
      id: _v2,
      nonce: _v3
    } = _v0;
    return _v26 ? new Promise(function (_v0, _v1) {
      var _v2 = document.getElementById(_v2),
        _v3 = window;
      if (_v2) {
        var _v4 = _v2.getAttribute("data-state");
        if (_v2.src === _v1 && "error" !== _v4) if ("ready" === _v4) return _v0(_v2);else {
          var _v5 = _v3.initMap,
            _v6 = _v2.onerror;
          _v3.initMap = function () {
            _v5 && _v5(), _v0(_v2);
          }, _v2.onerror = function (_v0) {
            _v6 && _v6(_v0), _v1(_v0);
          };
          return;
        }
        _v2.remove();
      }
      var _v7 = document.createElement("script");
      _v7.type = "text/javascript", _v7.src = _v1, _v7.id = _v2, _v7.async = !0, _v7.nonce = _v3 || "", _v7.onerror = function (_v0) {
        _v7.setAttribute("data-state", "error"), _v1(_v0);
      }, _v3.initMap = function () {
        _v7.setAttribute("data-state", "ready"), _v0(_v2);
      }, document.head.appendChild(_v7);
    }).catch(_v0 => {
      throw console.error("injectScript error: ", _v0), _v0;
    }) : Promise.reject(Error("document is undefined"));
  }
  function _v28(_v0) {
    var _v1 = _v0.href;
    return !!_v1 && (0 === _v1.indexOf("https://fonts.googleapis.com/css?family=Roboto") || 0 === _v1.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text")) || ("style" === _v0.tagName.toLowerCase() && _v0.styleSheet && _v0.styleSheet.cssText && 0 === _v0.styleSheet.cssText.replace("\r\n", "").indexOf(".gm-style") ? (_v0.styleSheet.cssText = "", !0) : "style" === _v0.tagName.toLowerCase() && _v0.innerHTML && 0 === _v0.innerHTML.replace("\r\n", "").indexOf(".gm-style") ? (_v0.innerHTML = "", !0) : "style" === _v0.tagName.toLowerCase() && !_v0.styleSheet && !_v0.innerHTML);
  }
  function _v29() {
    var _v0 = document.getElementsByTagName("head")[0];
    if (_v0) {
      var _v1 = _v0.insertBefore.bind(_v0);
      _v0.insertBefore = function (_v0, _v1) {
        return _v28(_v0) || Reflect.apply(_v1, _v0, [_v0, _v1]), _v0;
      };
      var _v2 = _v0.appendChild.bind(_v0);
      _v0.appendChild = function (_v0) {
        return _v28(_v0) || Reflect.apply(_v2, _v0, [_v0]), _v0;
      };
    }
  }
  var _v30 = !1;
  function _v31() {
    return (0, _v12.jsx)("div", {
      children: "Loading..."
    });
  }
  var _v32 = {
    id: "script-loader",
    version: "weekly"
  };
  class _v33 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "check", null), _v16(this, "state", {
        loaded: !1
      }), _v16(this, "cleanupCallback", () => {
        delete window.google.maps, this.injectScript();
      }), _v16(this, "isCleaningUp", _v24(function* () {
        return new Promise(function (_v0) {
          if (_v30) {
            if (_v26) var _v1 = window.setInterval(function () {
              _v30 || (window.clearInterval(_v1), _v0());
            }, 1);
          } else _v0();
        });
      })), _v16(this, "cleanup", () => {
        _v30 = !0;
        var _v0 = document.getElementById(this.props.id);
        _v0 && _v0.parentNode && _v0.parentNode.removeChild(_v0), Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function (_v0) {
          return "string" == typeof _v0.src && _v0.src.includes("maps.googleapis");
        }).forEach(function (_v0) {
          _v0.parentNode && _v0.parentNode.removeChild(_v0);
        }), Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function (_v0) {
          return "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans" === _v0.href;
        }).forEach(function (_v0) {
          _v0.parentNode && _v0.parentNode.removeChild(_v0);
        }), Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function (_v0) {
          return void 0 !== _v0.innerText && _v0.innerText.length > 0 && _v0.innerText.includes(".gm-");
        }).forEach(function (_v0) {
          _v0.parentNode && _v0.parentNode.removeChild(_v0);
        });
      }), _v16(this, "injectScript", () => {
        this.props.preventGoogleFontsLoading && _v29(), _v18(!!this.props.id, 'LoadScript requires "id" prop to be a string: %s', this.props.id), _v27({
          id: this.props.id,
          nonce: this.props.nonce,
          url: _v25(this.props)
        }).then(() => {
          this.props.onLoad && this.props.onLoad(), this.setState(function () {
            return {
              loaded: !0
            };
          });
        }).catch(_v0 => {
          this.props.onError && this.props.onError(_v0), console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(this.props.googleMapsApiKey || "-", ") or Client ID (").concat(this.props.googleMapsClientId || "-", ") to <LoadScript />\n          Otherwise it is a Network issue.\n        "));
        });
      }), _v16(this, "getRef", _v0 => {
        this.check = _v0;
      });
    }
    componentDidMount() {
      if (_v26) {
        if (window.google && window.google.maps && !_v30) return void console.error("google api is already presented");
        this.isCleaningUp().then(this.injectScript).catch(function (_v0) {
          console.error("Error at injecting script after cleaning up: ", _v0);
        });
      }
    }
    componentDidUpdate(_v0) {
      this.props.libraries !== _v0.libraries && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"), _v26 && _v0.language !== this.props.language && (this.cleanup(), this.setState(function () {
        return {
          loaded: !1
        };
      }, this.cleanupCallback));
    }
    componentWillUnmount() {
      if (_v26) {
        this.cleanup();
        var _v0 = () => {
          this.check || (delete window.google, _v30 = !1);
        };
        window.setTimeout(_v0, 1), this.props.onUnmount && this.props.onUnmount();
      }
    }
    render() {
      return (0, _v12.jsxs)(_v12.Fragment, {
        children: [(0, _v12.jsx)("div", {
          ref: this.getRef
        }), this.state.loaded ? this.props.children : this.props.loadingElement || (0, _v12.jsx)(_v31, {})]
      });
    }
  }
  function _v34(_v0, _v1) {
    if (null == _v0) return {};
    var _v2,
      _v3,
      _v4 = function (_v0, _v1) {
        if (null == _v0) return {};
        var _v2 = {};
        for (var _v3 in _v0) if ({}.hasOwnProperty.call(_v0, _v3)) {
          if (_v1.includes(_v3)) continue;
          _v2[_v3] = _v0[_v3];
        }
        return _v2;
      }(_v0, _v1);
    if (Object.getOwnPropertySymbols) {
      var _v5 = Object.getOwnPropertySymbols(_v0);
      for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], _v1.includes(_v2) || {}.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
    }
    return _v4;
  }
  function _v35(_v0) {
    var {
        id: _v1 = _v32.id,
        version: _v2 = _v32.version,
        nonce: _v3,
        googleMapsApiKey: _v4,
        googleMapsClientId: _v5,
        language: _v6,
        region: _v7,
        libraries: _v8,
        preventGoogleFontsLoading: _v9,
        channel: _v10,
        mapIds: _v11,
        authReferrerPolicy: _v12,
        apiUrl: _v13 = "https://maps.googleapis.com"
      } = _v0,
      _v14 = (0, _v13.useRef)(!1),
      [_v15, _v16] = (0, _v13.useState)(!1),
      [_v17, _v18] = (0, _v13.useState)(void 0);
    (0, _v13.useEffect)(function () {
      return _v14.current = !0, () => {
        _v14.current = !1;
      };
    }, []), (0, _v13.useEffect)(function () {
      _v26 && _v9 && _v29();
    }, [_v9]), (0, _v13.useEffect)(function () {
      _v15 && _v18(!!window.google, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.");
    }, [_v15]);
    var _v19 = _v25({
      version: _v2,
      googleMapsApiKey: _v4,
      googleMapsClientId: _v5,
      language: _v6,
      region: _v7,
      libraries: _v8,
      channel: _v10,
      mapIds: _v11,
      authReferrerPolicy: _v12,
      apiUrl: _v13
    });
    (0, _v13.useEffect)(function () {
      if (_v26) {
        if (window.google && window.google.maps && _v7 === _v19) return void _v0();
        _v27({
          id: _v1,
          url: _v19,
          nonce: _v3
        }).then(_v0).catch(function (_v0) {
          _v14.current && _v18(_v0), console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(_v4 || "-", ") or Client ID (").concat(_v5 || "-", ")\n        Otherwise it is a Network issue.\n      ")), console.error(_v0);
        });
      }
      function _v0() {
        _v14.current && (_v16(!0), _v7 = _v19);
      }
    }, [_v1, _v19, _v3]);
    var _v20 = (0, _v13.useRef)(void 0);
    return (0, _v13.useEffect)(function () {
      _v20.current && _v8 !== _v20.current && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"), _v20.current = _v8;
    }, [_v8]), {
      isLoaded: _v15,
      loadError: _v17,
      url: _v19
    };
  }
  _v16(_v33, "defaultProps", _v32);
  var _v36 = ["loadingElement", "onLoad", "onError", "onUnmount", "children"],
    _v37 = (0, _v12.jsx)(_v31, {});
  function _v38(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v39(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v38(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v38(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  (0, _v13.memo)(function (_v0) {
    var {
        loadingElement: _v1,
        onLoad: _v2,
        onError: _v3,
        onUnmount: _v4,
        children: _v5
      } = _v0,
      {
        isLoaded: _v6,
        loadError: _v7
      } = _v35(_v34(_v0, _v36));
    return (0, _v13.useEffect)(function () {
      _v6 && "function" == typeof _v2 && _v2();
    }, [_v6, _v2]), (0, _v13.useEffect)(function () {
      _v7 && "function" == typeof _v3 && _v3(_v7);
    }, [_v7, _v3]), (0, _v13.useEffect)(function () {
      return () => {
        _v4 && _v4();
      };
    }, [_v4]), _v6 ? _v5 : _v1 || _v37;
  }), "function" == typeof SuppressedError && SuppressedError, (_v2 = _v8 || (_v8 = {}))[_v2.INITIALIZED = 0] = "INITIALIZED", _v2[_v2.LOADING = 1] = "LOADING", _v2[_v2.SUCCESS = 2] = "SUCCESS", _v2[_v2.FAILURE = 3] = "FAILURE";
  var _v40 = {},
    _v41 = {
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      }
    };
  (0, _v13.memo)(function (_v0) {
    var {
        options: _v1,
        onLoad: _v2,
        onUnmount: _v3
      } = _v0,
      _v4 = (0, _v13.useContext)(_v19),
      [_v5, _v6] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v5 && _v5.setMap(_v4);
    }, [_v4]), (0, _v13.useEffect)(() => {
      _v1 && null !== _v5 && _v5.setOptions(_v1);
    }, [_v5, _v1]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.TrafficLayer(_v39(_v39({}, _v1), {}, {
        map: _v4
      }));
      return _v6(_v0), _v2 && _v2(_v0), () => {
        null !== _v5 && (_v3 && _v3(_v5), _v5.setMap(null));
      };
    }, []), null;
  });
  class _v42 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "state", {
        trafficLayer: null
      }), _v16(this, "setTrafficLayerCallback", () => {
        null !== this.state.trafficLayer && this.props.onLoad && this.props.onLoad(this.state.trafficLayer);
      }), _v16(this, "registeredEvents", []);
    }
    componentDidMount() {
      var _v0 = new google.maps.TrafficLayer(_v39(_v39({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = _v22({
        updaterMap: _v41,
        eventMap: _v40,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          trafficLayer: _v0
        };
      }, this.setTrafficLayerCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.trafficLayer && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v41,
        eventMap: _v40,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.trafficLayer
      }));
    }
    componentWillUnmount() {
      null !== this.state.trafficLayer && (this.props.onUnmount && this.props.onUnmount(this.state.trafficLayer), _v21(this.registeredEvents), this.state.trafficLayer.setMap(null));
    }
    render() {
      return null;
    }
  }
  _v16(_v42, "contextType", _v19), (0, _v13.memo)(function (_v0) {
    var {
        onLoad: _v1,
        onUnmount: _v2
      } = _v0,
      _v3 = (0, _v13.useContext)(_v19),
      [_v4, _v5] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v4 && _v4.setMap(_v3);
    }, [_v3]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.BicyclingLayer();
      return _v5(_v0), _v0.setMap(_v3), _v1 && _v1(_v0), () => {
        null !== _v0 && (_v2 && _v2(_v0), _v0.setMap(null));
      };
    }, []), null;
  });
  class _v43 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "state", {
        bicyclingLayer: null
      }), _v16(this, "setBicyclingLayerCallback", () => {
        null !== this.state.bicyclingLayer && (this.state.bicyclingLayer.setMap(this.context), this.props.onLoad && this.props.onLoad(this.state.bicyclingLayer));
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.BicyclingLayer();
      this.setState(() => ({
        bicyclingLayer: _v0
      }), this.setBicyclingLayerCallback);
    }
    componentWillUnmount() {
      null !== this.state.bicyclingLayer && (this.props.onUnmount && this.props.onUnmount(this.state.bicyclingLayer), this.state.bicyclingLayer.setMap(null));
    }
    render() {
      return null;
    }
  }
  _v16(_v43, "contextType", _v19), (0, _v13.memo)(function (_v0) {
    var {
        onLoad: _v1,
        onUnmount: _v2
      } = _v0,
      _v3 = (0, _v13.useContext)(_v19),
      [_v4, _v5] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v4 && _v4.setMap(_v3);
    }, [_v3]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.TransitLayer();
      return _v5(_v0), _v0.setMap(_v3), _v1 && _v1(_v0), () => {
        null !== _v4 && (_v2 && _v2(_v4), _v4.setMap(null));
      };
    }, []), null;
  });
  class _v44 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "state", {
        transitLayer: null
      }), _v16(this, "setTransitLayerCallback", () => {
        null !== this.state.transitLayer && (this.state.transitLayer.setMap(this.context), this.props.onLoad && this.props.onLoad(this.state.transitLayer));
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.TransitLayer();
      this.setState(function () {
        return {
          transitLayer: _v0
        };
      }, this.setTransitLayerCallback);
    }
    componentWillUnmount() {
      null !== this.state.transitLayer && (this.props.onUnmount && this.props.onUnmount(this.state.transitLayer), this.state.transitLayer.setMap(null));
    }
    render() {
      return null;
    }
  }
  function _v45(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v46(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v45(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v45(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v44, "contextType", _v19);
  var _v47 = {
      onCircleComplete: "circlecomplete",
      onMarkerComplete: "markercomplete",
      onOverlayComplete: "overlaycomplete",
      onPolygonComplete: "polygoncomplete",
      onPolylineComplete: "polylinecomplete",
      onRectangleComplete: "rectanglecomplete"
    },
    _v48 = {
      drawingMode(_v0, _v1) {
        _v0.setDrawingMode(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      }
    };
  (0, _v13.memo)(function (_v0) {
    var {
        options: _v1,
        drawingMode: _v2,
        onCircleComplete: _v3,
        onMarkerComplete: _v4,
        onOverlayComplete: _v5,
        onPolygonComplete: _v6,
        onPolylineComplete: _v7,
        onRectangleComplete: _v8,
        onLoad: _v9,
        onUnmount: _v10
      } = _v0,
      _v11 = (0, _v13.useContext)(_v19),
      [_v12, _v13] = (0, _v13.useState)(null),
      [_v14, _v15] = (0, _v13.useState)(null),
      [_v16, _v17] = (0, _v13.useState)(null),
      [_v18, _v19] = (0, _v13.useState)(null),
      [_v20, _v21] = (0, _v13.useState)(null),
      [_v22, _v23] = (0, _v13.useState)(null),
      [_v24, _v25] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v12 && _v12.setMap(_v11);
    }, [_v11]), (0, _v13.useEffect)(() => {
      _v1 && null !== _v12 && _v12.setOptions(_v1);
    }, [_v12, _v1]), (0, _v13.useEffect)(() => {
      null !== _v12 && _v12.setDrawingMode(null != _v2 ? _v2 : null);
    }, [_v12, _v2]), (0, _v13.useEffect)(() => {
      _v12 && _v3 && (null !== _v14 && google.maps.event.removeListener(_v14), _v15(google.maps.event.addListener(_v12, "circlecomplete", _v3)));
    }, [_v12, _v3]), (0, _v13.useEffect)(() => {
      _v12 && _v4 && (null !== _v16 && google.maps.event.removeListener(_v16), _v17(google.maps.event.addListener(_v12, "markercomplete", _v4)));
    }, [_v12, _v4]), (0, _v13.useEffect)(() => {
      _v12 && _v5 && (null !== _v18 && google.maps.event.removeListener(_v18), _v19(google.maps.event.addListener(_v12, "overlaycomplete", _v5)));
    }, [_v12, _v5]), (0, _v13.useEffect)(() => {
      _v12 && _v6 && (null !== _v20 && google.maps.event.removeListener(_v20), _v21(google.maps.event.addListener(_v12, "polygoncomplete", _v6)));
    }, [_v12, _v6]), (0, _v13.useEffect)(() => {
      _v12 && _v7 && (null !== _v22 && google.maps.event.removeListener(_v22), _v23(google.maps.event.addListener(_v12, "polylinecomplete", _v7)));
    }, [_v12, _v7]), (0, _v13.useEffect)(() => {
      _v12 && _v8 && (null !== _v24 && google.maps.event.removeListener(_v24), _v25(google.maps.event.addListener(_v12, "rectanglecomplete", _v8)));
    }, [_v12, _v8]), (0, _v13.useEffect)(() => {
      _v18(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
      var _v0 = new google.maps.drawing.DrawingManager(_v46(_v46({}, _v1), {}, {
        map: _v11
      }));
      return _v2 && _v0.setDrawingMode(_v2), _v3 && _v15(google.maps.event.addListener(_v0, "circlecomplete", _v3)), _v4 && _v17(google.maps.event.addListener(_v0, "markercomplete", _v4)), _v5 && _v19(google.maps.event.addListener(_v0, "overlaycomplete", _v5)), _v6 && _v21(google.maps.event.addListener(_v0, "polygoncomplete", _v6)), _v7 && _v23(google.maps.event.addListener(_v0, "polylinecomplete", _v7)), _v8 && _v25(google.maps.event.addListener(_v0, "rectanglecomplete", _v8)), _v13(_v0), _v9 && _v9(_v0), () => {
        null !== _v12 && (_v14 && google.maps.event.removeListener(_v14), _v16 && google.maps.event.removeListener(_v16), _v18 && google.maps.event.removeListener(_v18), _v20 && google.maps.event.removeListener(_v20), _v22 && google.maps.event.removeListener(_v22), _v24 && google.maps.event.removeListener(_v24), _v10 && _v10(_v12), _v12.setMap(null));
      };
    }, []), null;
  });
  class _v49 extends _v13.PureComponent {
    constructor(_v0) {
      super(_v0), _v16(this, "registeredEvents", []), _v16(this, "state", {
        drawingManager: null
      }), _v16(this, "setDrawingManagerCallback", () => {
        null !== this.state.drawingManager && this.props.onLoad && this.props.onLoad(this.state.drawingManager);
      }), _v18(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
    }
    componentDidMount() {
      var _v0 = new google.maps.drawing.DrawingManager(_v46(_v46({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = _v22({
        updaterMap: _v48,
        eventMap: _v47,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          drawingManager: _v0
        };
      }, this.setDrawingManagerCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.drawingManager && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v48,
        eventMap: _v47,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.drawingManager
      }));
    }
    componentWillUnmount() {
      null !== this.state.drawingManager && (this.props.onUnmount && this.props.onUnmount(this.state.drawingManager), _v21(this.registeredEvents), this.state.drawingManager.setMap(null));
    }
    render() {
      return null;
    }
  }
  function _v50(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v51(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v50(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v50(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v49, "contextType", _v19);
  var _v52 = {
      onAnimationChanged: "animation_changed",
      onClick: "click",
      onClickableChanged: "clickable_changed",
      onCursorChanged: "cursor_changed",
      onDblClick: "dblclick",
      onDrag: "drag",
      onDragEnd: "dragend",
      onDraggableChanged: "draggable_changed",
      onDragStart: "dragstart",
      onFlatChanged: "flat_changed",
      onIconChanged: "icon_changed",
      onMouseDown: "mousedown",
      onMouseOut: "mouseout",
      onMouseOver: "mouseover",
      onMouseUp: "mouseup",
      onPositionChanged: "position_changed",
      onRightClick: "rightclick",
      onShapeChanged: "shape_changed",
      onTitleChanged: "title_changed",
      onVisibleChanged: "visible_changed",
      onZindexChanged: "zindex_changed"
    },
    _v53 = {
      animation(_v0, _v1) {
        _v0.setAnimation(_v1);
      },
      clickable(_v0, _v1) {
        _v0.setClickable(_v1);
      },
      cursor(_v0, _v1) {
        _v0.setCursor(_v1);
      },
      draggable(_v0, _v1) {
        _v0.setDraggable(_v1);
      },
      icon(_v0, _v1) {
        _v0.setIcon(_v1);
      },
      label(_v0, _v1) {
        _v0.setLabel(_v1);
      },
      map(_v0, _v1) {
        _v0.setMap(_v1);
      },
      opacity(_v0, _v1) {
        _v0.setOpacity(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      position(_v0, _v1) {
        _v0.setPosition(_v1);
      },
      shape(_v0, _v1) {
        _v0.setShape(_v1);
      },
      title(_v0, _v1) {
        _v0.setTitle(_v1);
      },
      visible(_v0, _v1) {
        _v0.setVisible(_v1);
      },
      zIndex(_v0, _v1) {
        _v0.setZIndex(_v1);
      }
    },
    _v54 = {};
  (0, _v13.memo)(function (_v0) {
    var {
        position: _v1,
        options: _v2,
        clusterer: _v3,
        noClustererRedraw: _v4,
        children: _v5,
        draggable: _v6,
        visible: _v7,
        animation: _v8,
        clickable: _v9,
        cursor: _v10,
        icon: _v11,
        label: _v12,
        opacity: _v13,
        shape: _v14,
        title: _v15,
        zIndex: _v16,
        onClick: _v17,
        onDblClick: _v18,
        onDrag: _v19,
        onDragEnd: _v20,
        onDragStart: _v21,
        onMouseOut: _v22,
        onMouseOver: _v23,
        onMouseUp: _v24,
        onMouseDown: _v25,
        onRightClick: _v26,
        onClickableChanged: _v27,
        onCursorChanged: _v28,
        onAnimationChanged: _v29,
        onDraggableChanged: _v30,
        onFlatChanged: _v31,
        onIconChanged: _v32,
        onPositionChanged: _v33,
        onShapeChanged: _v34,
        onTitleChanged: _v35,
        onVisibleChanged: _v36,
        onZindexChanged: _v37,
        onLoad: _v38,
        onUnmount: _v39
      } = _v0,
      _v40 = (0, _v13.useContext)(_v19),
      [_v41, _v42] = (0, _v13.useState)(null),
      [_v43, _v44] = (0, _v13.useState)(null),
      [_v45, _v46] = (0, _v13.useState)(null),
      [_v47, _v48] = (0, _v13.useState)(null),
      [_v49, _v50] = (0, _v13.useState)(null),
      [_v51, _v52] = (0, _v13.useState)(null),
      [_v53, _v54] = (0, _v13.useState)(null),
      [_v55, _v56] = (0, _v13.useState)(null),
      [_v57, _v58] = (0, _v13.useState)(null),
      [_v59, _v60] = (0, _v13.useState)(null),
      [_v61, _v62] = (0, _v13.useState)(null),
      [_v63, _v64] = (0, _v13.useState)(null),
      [_v65, _v66] = (0, _v13.useState)(null),
      [_v67, _v68] = (0, _v13.useState)(null),
      [_v69, _v70] = (0, _v13.useState)(null),
      [_v71, _v72] = (0, _v13.useState)(null),
      [_v73, _v74] = (0, _v13.useState)(null),
      [_v75, _v76] = (0, _v13.useState)(null),
      [_v77, _v78] = (0, _v13.useState)(null),
      [_v79, _v80] = (0, _v13.useState)(null),
      [_v81, _v82] = (0, _v13.useState)(null),
      [_v83, _v84] = (0, _v13.useState)(null);
    (0, _v13.useEffect)(() => {
      null !== _v41 && _v41.setMap(_v40);
    }, [_v40]), (0, _v13.useEffect)(() => {
      void 0 !== _v2 && null !== _v41 && _v41.setOptions(_v2);
    }, [_v41, _v2]), (0, _v13.useEffect)(() => {
      void 0 !== _v6 && null !== _v41 && _v41.setDraggable(_v6);
    }, [_v41, _v6]), (0, _v13.useEffect)(() => {
      _v1 && null !== _v41 && _v41.setPosition(_v1);
    }, [_v41, _v1]), (0, _v13.useEffect)(() => {
      void 0 !== _v7 && null !== _v41 && _v41.setVisible(_v7);
    }, [_v41, _v7]), (0, _v13.useEffect)(() => {
      null == _v41 || _v41.setAnimation(_v8);
    }, [_v41, _v8]), (0, _v13.useEffect)(() => {
      _v41 && void 0 !== _v9 && _v41.setClickable(_v9);
    }, [_v41, _v9]), (0, _v13.useEffect)(() => {
      _v41 && void 0 !== _v10 && _v41.setCursor(_v10);
    }, [_v41, _v10]), (0, _v13.useEffect)(() => {
      _v41 && void 0 !== _v11 && _v41.setIcon(_v11);
    }, [_v41, _v11]), (0, _v13.useEffect)(() => {
      _v41 && void 0 !== _v12 && _v41.setLabel(_v12);
    }, [_v41, _v12]), (0, _v13.useEffect)(() => {
      _v41 && void 0 !== _v13 && _v41.setOpacity(_v13);
    }, [_v41, _v13]), (0, _v13.useEffect)(() => {
      _v41 && void 0 !== _v14 && _v41.setShape(_v14);
    }, [_v41, _v14]), (0, _v13.useEffect)(() => {
      _v41 && void 0 !== _v15 && _v41.setTitle(_v15);
    }, [_v41, _v15]), (0, _v13.useEffect)(() => {
      _v41 && void 0 !== _v16 && _v41.setZIndex(_v16);
    }, [_v41, _v16]), (0, _v13.useEffect)(() => {
      _v41 && _v18 && (null !== _v43 && google.maps.event.removeListener(_v43), _v44(google.maps.event.addListener(_v41, "dblclick", _v18)));
    }, [_v18]), (0, _v13.useEffect)(() => {
      _v41 && _v20 && (null !== _v45 && google.maps.event.removeListener(_v45), _v46(google.maps.event.addListener(_v41, "dragend", _v20)));
    }, [_v20]), (0, _v13.useEffect)(() => {
      _v41 && _v21 && (null !== _v47 && google.maps.event.removeListener(_v47), _v48(google.maps.event.addListener(_v41, "dragstart", _v21)));
    }, [_v21]), (0, _v13.useEffect)(() => {
      _v41 && _v25 && (null !== _v49 && google.maps.event.removeListener(_v49), _v50(google.maps.event.addListener(_v41, "mousedown", _v25)));
    }, [_v25]), (0, _v13.useEffect)(() => {
      _v41 && _v22 && (null !== _v51 && google.maps.event.removeListener(_v51), _v52(google.maps.event.addListener(_v41, "mouseout", _v22)));
    }, [_v22]), (0, _v13.useEffect)(() => {
      _v41 && _v23 && (null !== _v53 && google.maps.event.removeListener(_v53), _v54(google.maps.event.addListener(_v41, "mouseover", _v23)));
    }, [_v23]), (0, _v13.useEffect)(() => {
      _v41 && _v24 && (null !== _v55 && google.maps.event.removeListener(_v55), _v56(google.maps.event.addListener(_v41, "mouseup", _v24)));
    }, [_v24]), (0, _v13.useEffect)(() => {
      _v41 && _v26 && (null !== _v57 && google.maps.event.removeListener(_v57), _v58(google.maps.event.addListener(_v41, "rightclick", _v26)));
    }, [_v26]), (0, _v13.useEffect)(() => {
      _v41 && _v17 && (null !== _v59 && google.maps.event.removeListener(_v59), _v60(google.maps.event.addListener(_v41, "click", _v17)));
    }, [_v17]), (0, _v13.useEffect)(() => {
      _v41 && _v19 && (null !== _v61 && google.maps.event.removeListener(_v61), _v62(google.maps.event.addListener(_v41, "drag", _v19)));
    }, [_v19]), (0, _v13.useEffect)(() => {
      _v41 && _v27 && (null !== _v63 && google.maps.event.removeListener(_v63), _v64(google.maps.event.addListener(_v41, "clickable_changed", _v27)));
    }, [_v27]), (0, _v13.useEffect)(() => {
      _v41 && _v28 && (null !== _v65 && google.maps.event.removeListener(_v65), _v66(google.maps.event.addListener(_v41, "cursor_changed", _v28)));
    }, [_v28]), (0, _v13.useEffect)(() => {
      _v41 && _v29 && (null !== _v67 && google.maps.event.removeListener(_v67), _v68(google.maps.event.addListener(_v41, "animation_changed", _v29)));
    }, [_v29]), (0, _v13.useEffect)(() => {
      _v41 && _v30 && (null !== _v69 && google.maps.event.removeListener(_v69), _v70(google.maps.event.addListener(_v41, "draggable_changed", _v30)));
    }, [_v30]), (0, _v13.useEffect)(() => {
      _v41 && _v31 && (null !== _v71 && google.maps.event.removeListener(_v71), _v72(google.maps.event.addListener(_v41, "flat_changed", _v31)));
    }, [_v31]), (0, _v13.useEffect)(() => {
      _v41 && _v32 && (null !== _v73 && google.maps.event.removeListener(_v73), _v74(google.maps.event.addListener(_v41, "icon_changed", _v32)));
    }, [_v32]), (0, _v13.useEffect)(() => {
      _v41 && _v33 && (null !== _v75 && google.maps.event.removeListener(_v75), _v76(google.maps.event.addListener(_v41, "position_changed", _v33)));
    }, [_v33]), (0, _v13.useEffect)(() => {
      _v41 && _v34 && (null !== _v77 && google.maps.event.removeListener(_v77), _v78(google.maps.event.addListener(_v41, "shape_changed", _v34)));
    }, [_v34]), (0, _v13.useEffect)(() => {
      _v41 && _v35 && (null !== _v79 && google.maps.event.removeListener(_v79), _v80(google.maps.event.addListener(_v41, "title_changed", _v35)));
    }, [_v35]), (0, _v13.useEffect)(() => {
      _v41 && _v36 && (null !== _v81 && google.maps.event.removeListener(_v81), _v82(google.maps.event.addListener(_v41, "visible_changed", _v36)));
    }, [_v36]), (0, _v13.useEffect)(() => {
      _v41 && _v37 && (null !== _v83 && google.maps.event.removeListener(_v83), _v84(google.maps.event.addListener(_v41, "zindex_changed", _v37)));
    }, [_v37]), (0, _v13.useEffect)(() => {
      var _v0 = _v51(_v51(_v51({}, _v2 || _v54), _v3 ? _v54 : {
          map: _v40
        }), {}, {
          position: _v1
        }),
        _v1 = new google.maps.Marker(_v0);
      return _v3 ? _v3.addMarker(_v1, !!_v4) : _v1.setMap(_v40), _v1 && _v1.setPosition(_v1), void 0 !== _v7 && _v1.setVisible(_v7), void 0 !== _v6 && _v1.setDraggable(_v6), void 0 !== _v9 && _v1.setClickable(_v9), "string" == typeof _v10 && _v1.setCursor(_v10), _v11 && _v1.setIcon(_v11), void 0 !== _v12 && _v1.setLabel(_v12), void 0 !== _v13 && _v1.setOpacity(_v13), _v14 && _v1.setShape(_v14), "string" == typeof _v15 && _v1.setTitle(_v15), "number" == typeof _v16 && _v1.setZIndex(_v16), _v18 && _v44(google.maps.event.addListener(_v1, "dblclick", _v18)), _v20 && _v46(google.maps.event.addListener(_v1, "dragend", _v20)), _v21 && _v48(google.maps.event.addListener(_v1, "dragstart", _v21)), _v25 && _v50(google.maps.event.addListener(_v1, "mousedown", _v25)), _v22 && _v52(google.maps.event.addListener(_v1, "mouseout", _v22)), _v23 && _v54(google.maps.event.addListener(_v1, "mouseover", _v23)), _v24 && _v56(google.maps.event.addListener(_v1, "mouseup", _v24)), _v26 && _v58(google.maps.event.addListener(_v1, "rightclick", _v26)), _v17 && _v60(google.maps.event.addListener(_v1, "click", _v17)), _v19 && _v62(google.maps.event.addListener(_v1, "drag", _v19)), _v27 && _v64(google.maps.event.addListener(_v1, "clickable_changed", _v27)), _v28 && _v66(google.maps.event.addListener(_v1, "cursor_changed", _v28)), _v29 && _v68(google.maps.event.addListener(_v1, "animation_changed", _v29)), _v30 && _v70(google.maps.event.addListener(_v1, "draggable_changed", _v30)), _v31 && _v72(google.maps.event.addListener(_v1, "flat_changed", _v31)), _v32 && _v74(google.maps.event.addListener(_v1, "icon_changed", _v32)), _v33 && _v76(google.maps.event.addListener(_v1, "position_changed", _v33)), _v34 && _v78(google.maps.event.addListener(_v1, "shape_changed", _v34)), _v35 && _v80(google.maps.event.addListener(_v1, "title_changed", _v35)), _v36 && _v82(google.maps.event.addListener(_v1, "visible_changed", _v36)), _v37 && _v84(google.maps.event.addListener(_v1, "zindex_changed", _v37)), _v42(_v1), _v38 && _v38(_v1), () => {
        null !== _v43 && google.maps.event.removeListener(_v43), null !== _v45 && google.maps.event.removeListener(_v45), null !== _v47 && google.maps.event.removeListener(_v47), null !== _v49 && google.maps.event.removeListener(_v49), null !== _v51 && google.maps.event.removeListener(_v51), null !== _v53 && google.maps.event.removeListener(_v53), null !== _v55 && google.maps.event.removeListener(_v55), null !== _v57 && google.maps.event.removeListener(_v57), null !== _v59 && google.maps.event.removeListener(_v59), null !== _v63 && google.maps.event.removeListener(_v63), null !== _v65 && google.maps.event.removeListener(_v65), null !== _v67 && google.maps.event.removeListener(_v67), null !== _v69 && google.maps.event.removeListener(_v69), null !== _v71 && google.maps.event.removeListener(_v71), null !== _v73 && google.maps.event.removeListener(_v73), null !== _v75 && google.maps.event.removeListener(_v75), null !== _v79 && google.maps.event.removeListener(_v79), null !== _v81 && google.maps.event.removeListener(_v81), null !== _v83 && google.maps.event.removeListener(_v83), _v39 && _v39(_v1), _v3 ? _v3.removeMarker(_v1, !!_v4) : _v1 && _v1.setMap(null);
      };
    }, []);
    var _v85 = (0, _v13.useMemo)(() => _v5 ? _v13.Children.map(_v5, _v0 => (0, _v13.isValidElement)(_v0) ? (0, _v13.cloneElement)(_v0, {
      anchor: _v41
    }) : _v0) : null, [_v5, _v41]);
    return (0, _v12.jsx)(_v12.Fragment, {
      children: _v85
    }) || null;
  });
  class _v55 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []);
    }
    componentDidMount() {
      var _v0 = this;
      return _v24(function* () {
        var _v0 = _v51(_v51(_v51({}, _v0.props.options || _v54), _v0.props.clusterer ? _v54 : {
          map: _v0.context
        }), {}, {
          position: _v0.props.position
        });
        _v0.marker = new google.maps.Marker(_v0), _v0.props.clusterer ? _v0.props.clusterer.addMarker(_v0.marker, !!_v0.props.noClustererRedraw) : _v0.marker.setMap(_v0.context), _v0.registeredEvents = _v22({
          updaterMap: _v53,
          eventMap: _v52,
          prevProps: {},
          nextProps: _v0.props,
          instance: _v0.marker
        }), _v0.props.onLoad && _v0.props.onLoad(_v0.marker);
      })();
    }
    componentDidUpdate(_v0) {
      this.marker && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v53,
        eventMap: _v52,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.marker
      }));
    }
    componentWillUnmount() {
      this.marker && (this.props.onUnmount && this.props.onUnmount(this.marker), _v21(this.registeredEvents), this.props.clusterer ? this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw) : this.marker && this.marker.setMap(null));
    }
    render() {
      return (this.props.children ? _v13.Children.map(this.props.children, _v0 => (0, _v13.isValidElement)(_v0) ? (0, _v13.cloneElement)(_v0, {
        anchor: this.marker
      }) : _v0) : null) || null;
    }
  }
  _v16(_v55, "contextType", _v19);
  var _v56 = function () {
      function _v0(_v0, _v1) {
        _v0.getClusterer().extend(_v0, google.maps.OverlayView), this.cluster = _v0, this.clusterClassName = this.cluster.getClusterer().getClusterClass(), this.className = this.clusterClassName, this.styles = _v1, this.center = void 0, this.div = null, this.sums = null, this.visible = !1, this.boundsChangedListener = null, this.url = "", this.height = 0, this.width = 0, this.anchorText = [0, 0], this.anchorIcon = [0, 0], this.textColor = "black", this.textSize = 11, this.textDecoration = "none", this.fontWeight = "bold", this.fontStyle = "normal", this.fontFamily = "Arial,sans-serif", this.backgroundPosition = "0 0", this.cMouseDownInCluster = null, this.cDraggingMapByCluster = null, this.timeOut = null, this.setMap(_v0.getMap()), this.onBoundsChanged = this.onBoundsChanged.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onClick = this.onClick.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onAdd = this.onAdd.bind(this), this.onRemove = this.onRemove.bind(this), this.draw = this.draw.bind(this), this.hide = this.hide.bind(this), this.show = this.show.bind(this), this.useStyle = this.useStyle.bind(this), this.setCenter = this.setCenter.bind(this), this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
      }
      return _v0.prototype.onBoundsChanged = function () {
        this.cDraggingMapByCluster = this.cMouseDownInCluster;
      }, _v0.prototype.onMouseDown = function () {
        this.cMouseDownInCluster = !0, this.cDraggingMapByCluster = !1;
      }, _v0.prototype.onClick = function (_v0) {
        if (this.cMouseDownInCluster = !1, !this.cDraggingMapByCluster) {
          var _v1 = this.cluster.getClusterer();
          if (google.maps.event.trigger(_v1, "click", this.cluster), google.maps.event.trigger(_v1, "clusterclick", this.cluster), _v1.getZoomOnClick()) {
            var _v2 = _v1.getMaxZoom(),
              _v3 = this.cluster.getBounds(),
              _v4 = _v1.getMap();
            null !== _v4 && "fitBounds" in _v4 && _v4.fitBounds(_v3), this.timeOut = window.setTimeout(function () {
              var _v0 = _v1.getMap();
              if (null !== _v0) {
                "fitBounds" in _v0 && _v0.fitBounds(_v3);
                var _v1 = _v0.getZoom() || 0;
                null !== _v2 && _v1 > _v2 && _v0.setZoom(_v2 + 1);
              }
            }, 100);
          }
          _v0.cancelBubble = !0, _v0.stopPropagation && _v0.stopPropagation();
        }
      }, _v0.prototype.onMouseOver = function () {
        google.maps.event.trigger(this.cluster.getClusterer(), "mouseover", this.cluster);
      }, _v0.prototype.onMouseOut = function () {
        google.maps.event.trigger(this.cluster.getClusterer(), "mouseout", this.cluster);
      }, _v0.prototype.onAdd = function () {
        this.div = document.createElement("div"), this.div.className = this.className, this.visible && this.show(), null == (_v0 = this.getPanes()) || _v0.overlayMouseTarget.appendChild(this.div);
        var _v0,
          _v1 = this.getMap();
        null !== _v1 && (this.boundsChangedListener = google.maps.event.addListener(_v1, "bounds_changed", this.onBoundsChanged), this.div.addEventListener("mousedown", this.onMouseDown), this.div.addEventListener("click", this.onClick), this.div.addEventListener("mouseover", this.onMouseOver), this.div.addEventListener("mouseout", this.onMouseOut));
      }, _v0.prototype.onRemove = function () {
        this.div && this.div.parentNode && (this.hide(), null !== this.boundsChangedListener && google.maps.event.removeListener(this.boundsChangedListener), this.div.removeEventListener("mousedown", this.onMouseDown), this.div.removeEventListener("click", this.onClick), this.div.removeEventListener("mouseover", this.onMouseOver), this.div.removeEventListener("mouseout", this.onMouseOut), this.div.parentNode.removeChild(this.div), null !== this.timeOut && (window.clearTimeout(this.timeOut), this.timeOut = null), this.div = null);
      }, _v0.prototype.draw = function () {
        if (this.visible && null !== this.div && this.center) {
          var _v0 = this.getPosFromLatLng(this.center);
          this.div.style.top = null !== _v0 ? "".concat(_v0.y, "px") : "0", this.div.style.left = null !== _v0 ? "".concat(_v0.x, "px") : "0";
        }
      }, _v0.prototype.hide = function () {
        this.div && (this.div.style.display = "none"), this.visible = !1;
      }, _v0.prototype.show = function () {
        var _v0, _v1, _v2, _v3, _v4, _v5;
        if (this.div && this.center) {
          var _v6 = null === this.sums || void 0 === this.sums.title || "" === this.sums.title ? this.cluster.getClusterer().getTitle() : this.sums.title,
            _v7 = this.backgroundPosition.split(" "),
            _v8 = parseInt((null == (_v0 = _v7[0]) ? void 0 : _v0.replace(/^\s+|\s+$/g, "")) || "0", 10),
            _v9 = parseInt((null == (_v1 = _v7[1]) ? void 0 : _v1.replace(/^\s+|\s+$/g, "")) || "0", 10),
            _v10 = this.getPosFromLatLng(this.center);
          this.div.className = this.className, this.div.setAttribute("style", "cursor: pointer; position: absolute; top: ".concat(null !== _v10 ? "".concat(_v10.y, "px") : "0", "; left: ").concat(null !== _v10 ? "".concat(_v10.x, "px") : "0", "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
          var _v11 = document.createElement("img");
          _v11.alt = _v6, _v11.src = this.url, _v11.width = this.width, _v11.height = this.height, _v11.setAttribute("style", "position: absolute; top: ".concat(_v9, "px; left: ").concat(_v8, "px")), this.cluster.getClusterer().enableRetinaIcons || (_v11.style.clip = "rect(-".concat(_v9, "px, -").concat(_v8 + this.width, "px, -").concat(_v9 + this.height, ", -").concat(_v8, ")"));
          var _v12 = document.createElement("div");
          _v12.setAttribute("style", "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px")), (null == (_v2 = this.sums) ? void 0 : _v2.text) && (_v12.innerText = "".concat(null == (_v3 = this.sums) ? void 0 : _v3.text)), (null == (_v4 = this.sums) ? void 0 : _v4.html) && (_v12.innerHTML = "".concat(null == (_v5 = this.sums) ? void 0 : _v5.html)), this.div.innerHTML = "", this.div.appendChild(_v11), this.div.appendChild(_v12), this.div.title = _v6, this.div.style.display = "";
        }
        this.visible = !0;
      }, _v0.prototype.useStyle = function (_v0) {
        this.sums = _v0;
        var _v1 = this.cluster.getClusterer().getStyles(),
          _v2 = _v1[Math.min(_v1.length - 1, Math.max(0, _v0.index - 1))];
        _v2 && (this.url = _v2.url, this.height = _v2.height, this.width = _v2.width, _v2.className && (this.className = "".concat(this.clusterClassName, " ").concat(_v2.className)), this.anchorText = _v2.anchorText || [0, 0], this.anchorIcon = _v2.anchorIcon || [this.height / 2, this.width / 2], this.textColor = _v2.textColor || "black", this.textSize = _v2.textSize || 11, this.textDecoration = _v2.textDecoration || "none", this.fontWeight = _v2.fontWeight || "bold", this.fontStyle = _v2.fontStyle || "normal", this.fontFamily = _v2.fontFamily || "Arial,sans-serif", this.backgroundPosition = _v2.backgroundPosition || "0 0");
      }, _v0.prototype.setCenter = function (_v0) {
        this.center = _v0;
      }, _v0.prototype.getPosFromLatLng = function (_v0) {
        var _v1 = this.getProjection().fromLatLngToDivPixel(_v0);
        return null !== _v1 && (_v1.x -= this.anchorIcon[1], _v1.y -= this.anchorIcon[0]), _v1;
      }, _v0;
    }(),
    _v57 = function () {
      function _v0(_v0) {
        this.markerClusterer = _v0, this.map = this.markerClusterer.getMap(), this.gridSize = this.markerClusterer.getGridSize(), this.minClusterSize = this.markerClusterer.getMinimumClusterSize(), this.averageCenter = this.markerClusterer.getAverageCenter(), this.markers = [], this.center = void 0, this.bounds = null, this.clusterIcon = new _v56(this, this.markerClusterer.getStyles()), this.getSize = this.getSize.bind(this), this.getMarkers = this.getMarkers.bind(this), this.getCenter = this.getCenter.bind(this), this.getMap = this.getMap.bind(this), this.getClusterer = this.getClusterer.bind(this), this.getBounds = this.getBounds.bind(this), this.remove = this.remove.bind(this), this.addMarker = this.addMarker.bind(this), this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this), this.calculateBounds = this.calculateBounds.bind(this), this.updateIcon = this.updateIcon.bind(this), this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
      }
      return _v0.prototype.getSize = function () {
        return this.markers.length;
      }, _v0.prototype.getMarkers = function () {
        return this.markers;
      }, _v0.prototype.getCenter = function () {
        return this.center;
      }, _v0.prototype.getMap = function () {
        return this.map;
      }, _v0.prototype.getClusterer = function () {
        return this.markerClusterer;
      }, _v0.prototype.getBounds = function () {
        for (var _v0 = new google.maps.LatLngBounds(this.center, this.center), _v1 = this.getMarkers(), _v2 = 0; _v2 < _v1.length; _v2++) {
          var _v3 = _v1[_v2].getPosition();
          _v3 && _v0.extend(_v3);
        }
        return _v0;
      }, _v0.prototype.remove = function () {
        this.clusterIcon.setMap(null), this.markers = [], delete this.markers;
      }, _v0.prototype.addMarker = function (_v0) {
        if (this.isMarkerAlreadyAdded(_v0)) return !1;
        if (this.center) {
          if (this.averageCenter) {
            var _v1 = _v0.getPosition();
            if (_v1) {
              var _v2 = this.markers.length + 1;
              this.center = new google.maps.LatLng((this.center.lat() * (_v2 - 1) + _v1.lat()) / _v2, (this.center.lng() * (_v2 - 1) + _v1.lng()) / _v2), this.calculateBounds();
            }
          }
        } else {
          var _v3,
            _v1 = _v0.getPosition();
          _v1 && (this.center = _v1, this.calculateBounds());
        }
        _v0.isAdded = !0, this.markers.push(_v0);
        var _v4 = this.markers.length,
          _v5 = this.markerClusterer.getMaxZoom(),
          _v6 = null == (_v3 = this.map) ? void 0 : _v3.getZoom();
        if (null !== _v5 && void 0 !== _v6 && _v6 > _v5) _v0.getMap() !== this.map && _v0.setMap(this.map);else if (_v4 < this.minClusterSize) _v0.getMap() !== this.map && _v0.setMap(this.map);else if (_v4 === this.minClusterSize) for (var _v7 = 0, _v8 = this.markers; _v7 < _v8.length; _v7++) _v8[_v7].setMap(null);else _v0.setMap(null);
        return !0;
      }, _v0.prototype.isMarkerInClusterBounds = function (_v0) {
        if (null !== this.bounds) {
          var _v1 = _v0.getPosition();
          if (_v1) return this.bounds.contains(_v1);
        }
        return !1;
      }, _v0.prototype.calculateBounds = function () {
        this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
      }, _v0.prototype.updateIcon = function () {
        var _v0,
          _v1 = this.markers.length,
          _v2 = this.markerClusterer.getMaxZoom(),
          _v3 = null == (_v0 = this.map) ? void 0 : _v0.getZoom();
        null !== _v2 && void 0 !== _v3 && _v3 > _v2 || _v1 < this.minClusterSize ? this.clusterIcon.hide() : (this.center && this.clusterIcon.setCenter(this.center), this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length)), this.clusterIcon.show());
      }, _v0.prototype.isMarkerAlreadyAdded = function (_v0) {
        if (this.markers.includes) return this.markers.includes(_v0);
        for (var _v1 = 0; _v1 < this.markers.length; _v1++) if (_v0 === this.markers[_v1]) return !0;
        return !1;
      }, _v0;
    }();
  function _v58(_v0, _v1) {
    var _v2 = _v0.length,
      _v3 = Math.min(_v2.toString().length, _v1);
    return {
      text: _v2.toString(),
      index: _v3,
      title: ""
    };
  }
  var _v59 = [53, 56, 66, 78, 90],
    _v60 = function () {
      function _v0(_v0, _v1, _v2) {
        void 0 === _v1 && (_v1 = []), void 0 === _v2 && (_v2 = {}), this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this), this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this), this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this), this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this), this.addToClosestCluster = this.addToClosestCluster.bind(this), this.getImageExtension = this.getImageExtension.bind(this), this.setImageExtension = this.setImageExtension.bind(this), this.getExtendedBounds = this.getExtendedBounds.bind(this), this.getAverageCenter = this.getAverageCenter.bind(this), this.setAverageCenter = this.setAverageCenter.bind(this), this.getTotalClusters = this.getTotalClusters.bind(this), this.fitMapToMarkers = this.fitMapToMarkers.bind(this), this.getIgnoreHidden = this.getIgnoreHidden.bind(this), this.setIgnoreHidden = this.setIgnoreHidden.bind(this), this.getClusterClass = this.getClusterClass.bind(this), this.setClusterClass = this.setClusterClass.bind(this), this.getTotalMarkers = this.getTotalMarkers.bind(this), this.getZoomOnClick = this.getZoomOnClick.bind(this), this.setZoomOnClick = this.setZoomOnClick.bind(this), this.getBatchSizeIE = this.getBatchSizeIE.bind(this), this.setBatchSizeIE = this.setBatchSizeIE.bind(this), this.createClusters = this.createClusters.bind(this), this.onZoomChanged = this.onZoomChanged.bind(this), this.getImageSizes = this.getImageSizes.bind(this), this.setImageSizes = this.setImageSizes.bind(this), this.getCalculator = this.getCalculator.bind(this), this.setCalculator = this.setCalculator.bind(this), this.removeMarkers = this.removeMarkers.bind(this), this.resetViewport = this.resetViewport.bind(this), this.getImagePath = this.getImagePath.bind(this), this.setImagePath = this.setImagePath.bind(this), this.pushMarkerTo = this.pushMarkerTo.bind(this), this.removeMarker = this.removeMarker.bind(this), this.clearMarkers = this.clearMarkers.bind(this), this.setupStyles = this.setupStyles.bind(this), this.getGridSize = this.getGridSize.bind(this), this.setGridSize = this.setGridSize.bind(this), this.getClusters = this.getClusters.bind(this), this.getMaxZoom = this.getMaxZoom.bind(this), this.setMaxZoom = this.setMaxZoom.bind(this), this.getMarkers = this.getMarkers.bind(this), this.addMarkers = this.addMarkers.bind(this), this.getStyles = this.getStyles.bind(this), this.setStyles = this.setStyles.bind(this), this.addMarker = this.addMarker.bind(this), this.onRemove = this.onRemove.bind(this), this.getTitle = this.getTitle.bind(this), this.setTitle = this.setTitle.bind(this), this.repaint = this.repaint.bind(this), this.onIdle = this.onIdle.bind(this), this.redraw = this.redraw.bind(this), this.onAdd = this.onAdd.bind(this), this.draw = this.draw.bind(this), this.extend = this.extend.bind(this), this.extend(_v0, google.maps.OverlayView), this.markers = [], this.clusters = [], this.listeners = [], this.activeMap = null, this.ready = !1, this.gridSize = _v2.gridSize || 60, this.minClusterSize = _v2.minimumClusterSize || 2, this.maxZoom = _v2.maxZoom || null, this.styles = _v2.styles || [], this.title = _v2.title || "", this.zoomOnClick = !0, void 0 !== _v2.zoomOnClick && (this.zoomOnClick = _v2.zoomOnClick), this.averageCenter = !1, void 0 !== _v2.averageCenter && (this.averageCenter = _v2.averageCenter), this.ignoreHidden = !1, void 0 !== _v2.ignoreHidden && (this.ignoreHidden = _v2.ignoreHidden), this.enableRetinaIcons = !1, void 0 !== _v2.enableRetinaIcons && (this.enableRetinaIcons = _v2.enableRetinaIcons), this.imagePath = _v2.imagePath || "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", this.imageExtension = _v2.imageExtension || "png", this.imageSizes = _v2.imageSizes || _v59, this.calculator = _v2.calculator || _v58, this.batchSize = _v2.batchSize || 0, this.batchSizeIE = _v2.batchSizeIE || 500, this.clusterClass = _v2.clusterClass || "cluster", -1 !== navigator.userAgent.toLowerCase().indexOf("msie") && (this.batchSize = this.batchSizeIE), this.timerRefStatic = null, this.setupStyles(), this.addMarkers(_v1, !0), this.setMap(_v0);
      }
      return _v0.prototype.onZoomChanged = function () {
        var _v0, _v1;
        this.resetViewport(!1), ((null == (_v0 = this.getMap()) ? void 0 : _v0.getZoom()) === (this.get("minZoom") || 0) || (null == (_v1 = this.getMap()) ? void 0 : _v1.getZoom()) === this.get("maxZoom")) && google.maps.event.trigger(this, "idle");
      }, _v0.prototype.onIdle = function () {
        this.redraw();
      }, _v0.prototype.onAdd = function () {
        var _v0 = this.getMap();
        this.activeMap = _v0, this.ready = !0, this.repaint(), null !== _v0 && (this.listeners = [google.maps.event.addListener(_v0, "zoom_changed", this.onZoomChanged), google.maps.event.addListener(_v0, "idle", this.onIdle)]);
      }, _v0.prototype.onRemove = function () {
        for (var _v0 = 0, _v1 = this.markers; _v0 < _v1.length; _v0++) {
          var _v2 = _v1[_v0];
          _v2.getMap() !== this.activeMap && _v2.setMap(this.activeMap);
        }
        for (var _v3 = 0, _v4 = this.clusters; _v3 < _v4.length; _v3++) _v4[_v3].remove();
        this.clusters = [];
        for (var _v5 = 0, _v6 = this.listeners; _v5 < _v6.length; _v5++) {
          var _v7 = _v6[_v5];
          google.maps.event.removeListener(_v7);
        }
        this.listeners = [], this.activeMap = null, this.ready = !1;
      }, _v0.prototype.draw = function () {}, _v0.prototype.getMap = function () {
        return null;
      }, _v0.prototype.getPanes = function () {
        return null;
      }, _v0.prototype.getProjection = function () {
        return {
          fromContainerPixelToLatLng: function () {
            return null;
          },
          fromDivPixelToLatLng: function () {
            return null;
          },
          fromLatLngToContainerPixel: function () {
            return null;
          },
          fromLatLngToDivPixel: function () {
            return null;
          },
          getVisibleRegion: function () {
            return null;
          },
          getWorldWidth: function () {
            return 0;
          }
        };
      }, _v0.prototype.setMap = function () {}, _v0.prototype.addListener = function () {
        return {
          remove: function () {}
        };
      }, _v0.prototype.bindTo = function () {}, _v0.prototype.get = function () {}, _v0.prototype.notify = function () {}, _v0.prototype.set = function () {}, _v0.prototype.setValues = function () {}, _v0.prototype.unbind = function () {}, _v0.prototype.unbindAll = function () {}, _v0.prototype.setupStyles = function () {
        if (!(this.styles.length > 0)) for (var _v0 = 0; _v0 < this.imageSizes.length; _v0++) this.styles.push({
          url: "".concat(this.imagePath + (_v0 + 1), ".").concat(this.imageExtension),
          height: this.imageSizes[_v0] || 0,
          width: this.imageSizes[_v0] || 0
        });
      }, _v0.prototype.fitMapToMarkers = function () {
        for (var _v0 = this.getMarkers(), _v1 = new google.maps.LatLngBounds(), _v2 = 0; _v2 < _v0.length; _v2++) {
          var _v3 = _v0[_v2].getPosition();
          _v3 && _v1.extend(_v3);
        }
        var _v4 = this.getMap();
        null !== _v4 && "fitBounds" in _v4 && _v4.fitBounds(_v1);
      }, _v0.prototype.getGridSize = function () {
        return this.gridSize;
      }, _v0.prototype.setGridSize = function (_v0) {
        this.gridSize = _v0;
      }, _v0.prototype.getMinimumClusterSize = function () {
        return this.minClusterSize;
      }, _v0.prototype.setMinimumClusterSize = function (_v0) {
        this.minClusterSize = _v0;
      }, _v0.prototype.getMaxZoom = function () {
        return this.maxZoom;
      }, _v0.prototype.setMaxZoom = function (_v0) {
        this.maxZoom = _v0;
      }, _v0.prototype.getStyles = function () {
        return this.styles;
      }, _v0.prototype.setStyles = function (_v0) {
        this.styles = _v0;
      }, _v0.prototype.getTitle = function () {
        return this.title;
      }, _v0.prototype.setTitle = function (_v0) {
        this.title = _v0;
      }, _v0.prototype.getZoomOnClick = function () {
        return this.zoomOnClick;
      }, _v0.prototype.setZoomOnClick = function (_v0) {
        this.zoomOnClick = _v0;
      }, _v0.prototype.getAverageCenter = function () {
        return this.averageCenter;
      }, _v0.prototype.setAverageCenter = function (_v0) {
        this.averageCenter = _v0;
      }, _v0.prototype.getIgnoreHidden = function () {
        return this.ignoreHidden;
      }, _v0.prototype.setIgnoreHidden = function (_v0) {
        this.ignoreHidden = _v0;
      }, _v0.prototype.getEnableRetinaIcons = function () {
        return this.enableRetinaIcons;
      }, _v0.prototype.setEnableRetinaIcons = function (_v0) {
        this.enableRetinaIcons = _v0;
      }, _v0.prototype.getImageExtension = function () {
        return this.imageExtension;
      }, _v0.prototype.setImageExtension = function (_v0) {
        this.imageExtension = _v0;
      }, _v0.prototype.getImagePath = function () {
        return this.imagePath;
      }, _v0.prototype.setImagePath = function (_v0) {
        this.imagePath = _v0;
      }, _v0.prototype.getImageSizes = function () {
        return this.imageSizes;
      }, _v0.prototype.setImageSizes = function (_v0) {
        this.imageSizes = _v0;
      }, _v0.prototype.getCalculator = function () {
        return this.calculator;
      }, _v0.prototype.setCalculator = function (_v0) {
        this.calculator = _v0;
      }, _v0.prototype.getBatchSizeIE = function () {
        return this.batchSizeIE;
      }, _v0.prototype.setBatchSizeIE = function (_v0) {
        this.batchSizeIE = _v0;
      }, _v0.prototype.getClusterClass = function () {
        return this.clusterClass;
      }, _v0.prototype.setClusterClass = function (_v0) {
        this.clusterClass = _v0;
      }, _v0.prototype.getMarkers = function () {
        return this.markers;
      }, _v0.prototype.getTotalMarkers = function () {
        return this.markers.length;
      }, _v0.prototype.getClusters = function () {
        return this.clusters;
      }, _v0.prototype.getTotalClusters = function () {
        return this.clusters.length;
      }, _v0.prototype.addMarker = function (_v0, _v1) {
        this.pushMarkerTo(_v0), _v1 || this.redraw();
      }, _v0.prototype.addMarkers = function (_v0, _v1) {
        for (var _v2 in _v0) if (Object.prototype.hasOwnProperty.call(_v0, _v2)) {
          var _v3 = _v0[_v2];
          _v3 && this.pushMarkerTo(_v3);
        }
        _v1 || this.redraw();
      }, _v0.prototype.pushMarkerTo = function (_v0) {
        var _v1 = this;
        _v0.getDraggable() && google.maps.event.addListener(_v0, "dragend", function () {
          _v1.ready && (_v0.isAdded = !1, _v1.repaint());
        }), _v0.isAdded = !1, this.markers.push(_v0);
      }, _v0.prototype.removeMarker_ = function (_v0) {
        var _v1 = -1;
        if (this.markers.indexOf) _v1 = this.markers.indexOf(_v0);else for (var _v2 = 0; _v2 < this.markers.length; _v2++) if (_v0 === this.markers[_v2]) {
          _v1 = _v2;
          break;
        }
        return -1 !== _v1 && (_v0.setMap(null), this.markers.splice(_v1, 1), !0);
      }, _v0.prototype.removeMarker = function (_v0, _v1) {
        var _v2 = this.removeMarker_(_v0);
        return !_v1 && _v2 && this.repaint(), _v2;
      }, _v0.prototype.removeMarkers = function (_v0, _v1) {
        for (var _v2 = !1, _v3 = 0; _v3 < _v0.length; _v3++) {
          var _v4 = _v0[_v3];
          _v2 = _v2 || this.removeMarker_(_v4);
        }
        return !_v1 && _v2 && this.repaint(), _v2;
      }, _v0.prototype.clearMarkers = function () {
        this.resetViewport(!0), this.markers = [];
      }, _v0.prototype.repaint = function () {
        var _v0 = this.clusters.slice();
        this.clusters = [], this.resetViewport(!1), this.redraw(), setTimeout(function () {
          for (var _v0 = 0; _v0 < _v0.length; _v0++) _v0[_v0].remove();
        }, 0);
      }, _v0.prototype.getExtendedBounds = function (_v0) {
        var _v1 = this.getProjection(),
          _v2 = _v1.fromLatLngToDivPixel(new google.maps.LatLng(_v0.getNorthEast().lat(), _v0.getNorthEast().lng()));
        null !== _v2 && (_v2.x += this.gridSize, _v2.y -= this.gridSize);
        var _v3 = _v1.fromLatLngToDivPixel(new google.maps.LatLng(_v0.getSouthWest().lat(), _v0.getSouthWest().lng()));
        if (null !== _v3 && (_v3.x -= this.gridSize, _v3.y += this.gridSize), null !== _v2) {
          var _v4 = _v1.fromDivPixelToLatLng(_v2);
          null !== _v4 && _v0.extend(_v4);
        }
        if (null !== _v3) {
          var _v5 = _v1.fromDivPixelToLatLng(_v3);
          null !== _v5 && _v0.extend(_v5);
        }
        return _v0;
      }, _v0.prototype.redraw = function () {
        this.createClusters(0);
      }, _v0.prototype.resetViewport = function (_v0) {
        for (var _v1 = 0, _v2 = this.clusters; _v1 < _v2.length; _v1++) _v2[_v1].remove();
        this.clusters = [];
        for (var _v3 = 0, _v4 = this.markers; _v3 < _v4.length; _v3++) {
          var _v5 = _v4[_v3];
          _v5.isAdded = !1, _v0 && _v5.setMap(null);
        }
      }, _v0.prototype.distanceBetweenPoints = function (_v0, _v1) {
        var _v2 = (_v1.lat() - _v0.lat()) * Math.PI / 180,
          _v3 = (_v1.lng() - _v0.lng()) * Math.PI / 180,
          _v4 = Math.sin(_v2 / 2) * Math.sin(_v2 / 2) + Math.cos(_v0.lat() * Math.PI / 180) * Math.cos(_v1.lat() * Math.PI / 180) * Math.sin(_v3 / 2) * Math.sin(_v3 / 2);
        return 2 * Math.atan2(Math.sqrt(_v4), Math.sqrt(1 - _v4)) * 0;
      }, _v0.prototype.isMarkerInBounds = function (_v0, _v1) {
        var _v2 = _v0.getPosition();
        return !!_v2 && _v1.contains(_v2);
      }, _v0.prototype.addToClosestCluster = function (_v0) {
        for (var _v1, _v2 = 0, _v3 = null, _v4 = 0, _v5 = this.clusters; _v4 < _v5.length; _v4++) {
          var _v6 = (_v1 = _v5[_v4]).getCenter(),
            _v7 = _v0.getPosition();
          if (_v6 && _v7) {
            var _v8 = this.distanceBetweenPoints(_v6, _v7);
            _v8 < _v2 && (_v2 = _v8, _v3 = _v1);
          }
        }
        _v3 && _v3.isMarkerInClusterBounds(_v0) ? _v3.addMarker(_v0) : ((_v1 = new _v57(this)).addMarker(_v0), this.clusters.push(_v1));
      }, _v0.prototype.createClusters = function (_v0) {
        var _v1 = this;
        if (this.ready) {
          0 === _v0 && (google.maps.event.trigger(this, "clusteringbegin", this), null !== this.timerRefStatic && (window.clearTimeout(this.timerRefStatic), delete this.timerRefStatic));
          for (var _v2 = this.getMap(), _v3 = null !== _v2 && ("getBounds" in _v2) ? _v2.getBounds() : null, _v4 = ((null == _v2 ? void 0 : _v2.getZoom()) || 0) > 3 ? new google.maps.LatLngBounds(null == _v3 ? void 0 : _v3.getSouthWest(), null == _v3 ? void 0 : _v3.getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625)), _v5 = this.getExtendedBounds(_v4), _v6 = Math.min(_v0 + this.batchSize, this.markers.length), _v7 = _v0; _v7 < _v6; _v7++) {
            var _v8 = this.markers[_v7];
            _v8 && !_v8.isAdded && this.isMarkerInBounds(_v8, _v5) && (!this.ignoreHidden || this.ignoreHidden && _v8.getVisible()) && this.addToClosestCluster(_v8);
          }
          if (_v6 < this.markers.length) this.timerRefStatic = window.setTimeout(function () {
            _v1.createClusters(_v6);
          }, 0);else {
            this.timerRefStatic = null, google.maps.event.trigger(this, "clusteringend", this);
            for (var _v9 = 0, _v10 = this.clusters; _v9 < _v10.length; _v9++) _v10[_v9].updateIcon();
          }
        }
      }, _v0.prototype.extend = function (_v0, _v1) {
        return function (_v0) {
          for (var _v1 in _v0.prototype) this.prototype[_v1] = _v0.prototype[_v1];
          return this;
        }.apply(_v0, [_v1]);
      }, _v0;
    }();
  function _v61(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  var _v62 = {
      onClick: "click",
      onClusteringBegin: "clusteringbegin",
      onClusteringEnd: "clusteringend",
      onMouseOut: "mouseout",
      onMouseOver: "mouseover"
    },
    _v63 = {
      averageCenter(_v0, _v1) {
        _v0.setAverageCenter(_v1);
      },
      batchSizeIE(_v0, _v1) {
        _v0.setBatchSizeIE(_v1);
      },
      calculator(_v0, _v1) {
        _v0.setCalculator(_v1);
      },
      clusterClass(_v0, _v1) {
        _v0.setClusterClass(_v1);
      },
      enableRetinaIcons(_v0, _v1) {
        _v0.setEnableRetinaIcons(_v1);
      },
      gridSize(_v0, _v1) {
        _v0.setGridSize(_v1);
      },
      ignoreHidden(_v0, _v1) {
        _v0.setIgnoreHidden(_v1);
      },
      imageExtension(_v0, _v1) {
        _v0.setImageExtension(_v1);
      },
      imagePath(_v0, _v1) {
        _v0.setImagePath(_v1);
      },
      imageSizes(_v0, _v1) {
        _v0.setImageSizes(_v1);
      },
      maxZoom(_v0, _v1) {
        _v0.setMaxZoom(_v1);
      },
      minimumClusterSize(_v0, _v1) {
        _v0.setMinimumClusterSize(_v1);
      },
      styles(_v0, _v1) {
        _v0.setStyles(_v1);
      },
      title(_v0, _v1) {
        _v0.setTitle(_v1);
      },
      zoomOnClick(_v0, _v1) {
        _v0.setZoomOnClick(_v1);
      }
    },
    _v64 = {};
  (0, _v13.memo)(function (_v0) {
    var {
        children: _v1,
        options: _v2,
        averageCenter: _v3,
        batchSizeIE: _v4,
        calculator: _v5,
        clusterClass: _v6,
        enableRetinaIcons: _v7,
        gridSize: _v8,
        ignoreHidden: _v9,
        imageExtension: _v10,
        imagePath: _v11,
        imageSizes: _v12,
        maxZoom: _v13,
        minimumClusterSize: _v14,
        styles: _v15,
        title: _v16,
        zoomOnClick: _v17,
        onClick: _v18,
        onClusteringBegin: _v19,
        onClusteringEnd: _v20,
        onMouseOver: _v21,
        onMouseOut: _v22,
        onLoad: _v23,
        onUnmount: _v24
      } = _v0,
      [_v25, _v26] = (0, _v13.useState)(null),
      _v27 = (0, _v13.useContext)(_v19),
      [_v28, _v29] = (0, _v13.useState)(null),
      [_v30, _v31] = (0, _v13.useState)(null),
      [_v32, _v33] = (0, _v13.useState)(null),
      [_v34, _v35] = (0, _v13.useState)(null),
      [_v36, _v37] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      _v25 && _v22 && (null !== _v34 && google.maps.event.removeListener(_v34), _v35(google.maps.event.addListener(_v25, _v62.onMouseOut, _v22)));
    }, [_v22]), (0, _v13.useEffect)(() => {
      _v25 && _v21 && (null !== _v36 && google.maps.event.removeListener(_v36), _v37(google.maps.event.addListener(_v25, _v62.onMouseOver, _v21)));
    }, [_v21]), (0, _v13.useEffect)(() => {
      _v25 && _v18 && (null !== _v28 && google.maps.event.removeListener(_v28), _v29(google.maps.event.addListener(_v25, _v62.onClick, _v18)));
    }, [_v18]), (0, _v13.useEffect)(() => {
      _v25 && _v19 && (null !== _v30 && google.maps.event.removeListener(_v30), _v31(google.maps.event.addListener(_v25, _v62.onClusteringBegin, _v19)));
    }, [_v19]), (0, _v13.useEffect)(() => {
      _v25 && _v20 && (null !== _v32 && google.maps.event.removeListener(_v32), _v31(google.maps.event.addListener(_v25, _v62.onClusteringEnd, _v20)));
    }, [_v20]), (0, _v13.useEffect)(() => {
      void 0 !== _v3 && null !== _v25 && _v63.averageCenter(_v25, _v3);
    }, [_v25, _v3]), (0, _v13.useEffect)(() => {
      void 0 !== _v4 && null !== _v25 && _v63.batchSizeIE(_v25, _v4);
    }, [_v25, _v4]), (0, _v13.useEffect)(() => {
      void 0 !== _v5 && null !== _v25 && _v63.calculator(_v25, _v5);
    }, [_v25, _v5]), (0, _v13.useEffect)(() => {
      void 0 !== _v6 && null !== _v25 && _v63.clusterClass(_v25, _v6);
    }, [_v25, _v6]), (0, _v13.useEffect)(() => {
      void 0 !== _v7 && null !== _v25 && _v63.enableRetinaIcons(_v25, _v7);
    }, [_v25, _v7]), (0, _v13.useEffect)(() => {
      void 0 !== _v8 && null !== _v25 && _v63.gridSize(_v25, _v8);
    }, [_v25, _v8]), (0, _v13.useEffect)(() => {
      void 0 !== _v9 && null !== _v25 && _v63.ignoreHidden(_v25, _v9);
    }, [_v25, _v9]), (0, _v13.useEffect)(() => {
      void 0 !== _v10 && null !== _v25 && _v63.imageExtension(_v25, _v10);
    }, [_v25, _v10]), (0, _v13.useEffect)(() => {
      void 0 !== _v11 && null !== _v25 && _v63.imagePath(_v25, _v11);
    }, [_v25, _v11]), (0, _v13.useEffect)(() => {
      void 0 !== _v12 && null !== _v25 && _v63.imageSizes(_v25, _v12);
    }, [_v25, _v12]), (0, _v13.useEffect)(() => {
      void 0 !== _v13 && null !== _v25 && _v63.maxZoom(_v25, _v13);
    }, [_v25, _v13]), (0, _v13.useEffect)(() => {
      void 0 !== _v14 && null !== _v25 && _v63.minimumClusterSize(_v25, _v14);
    }, [_v25, _v14]), (0, _v13.useEffect)(() => {
      void 0 !== _v15 && null !== _v25 && _v63.styles(_v25, _v15);
    }, [_v25, _v15]), (0, _v13.useEffect)(() => {
      void 0 !== _v16 && null !== _v25 && _v63.title(_v25, _v16);
    }, [_v25, _v16]), (0, _v13.useEffect)(() => {
      void 0 !== _v17 && null !== _v25 && _v63.zoomOnClick(_v25, _v17);
    }, [_v25, _v17]), (0, _v13.useEffect)(() => {
      if (_v27) {
        var _v0 = new _v60(_v27, [], function (_v0) {
          for (var _v1 = 1; _v1 < arguments.length; _v1++) {
            var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
            _v1 % 2 ? _v61(Object(_v2), !0).forEach(function (_v0) {
              _v16(_v0, _v0, _v2[_v0]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v61(Object(_v2)).forEach(function (_v0) {
              Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
            });
          }
          return _v0;
        }({}, _v2 || _v64));
        return _v3 && _v63.averageCenter(_v0, _v3), _v4 && _v63.batchSizeIE(_v0, _v4), _v5 && _v63.calculator(_v0, _v5), _v6 && _v63.clusterClass(_v0, _v6), _v7 && _v63.enableRetinaIcons(_v0, _v7), _v8 && _v63.gridSize(_v0, _v8), _v9 && _v63.ignoreHidden(_v0, _v9), _v10 && _v63.imageExtension(_v0, _v10), _v11 && _v63.imagePath(_v0, _v11), _v12 && _v63.imageSizes(_v0, _v12), _v13 && _v63.maxZoom(_v0, _v13), _v14 && _v63.minimumClusterSize(_v0, _v14), _v15 && _v63.styles(_v0, _v15), _v16 && _v63.title(_v0, _v16), _v17 && _v63.zoomOnClick(_v0, _v17), _v22 && _v35(google.maps.event.addListener(_v0, _v62.onMouseOut, _v22)), _v21 && _v37(google.maps.event.addListener(_v0, _v62.onMouseOver, _v21)), _v18 && _v29(google.maps.event.addListener(_v0, _v62.onClick, _v18)), _v19 && _v31(google.maps.event.addListener(_v0, _v62.onClusteringBegin, _v19)), _v20 && _v33(google.maps.event.addListener(_v0, _v62.onClusteringEnd, _v20)), _v26(_v0), _v23 && _v23(_v0), () => {
          null !== _v34 && google.maps.event.removeListener(_v34), null !== _v36 && google.maps.event.removeListener(_v36), null !== _v28 && google.maps.event.removeListener(_v28), null !== _v30 && google.maps.event.removeListener(_v30), null !== _v32 && google.maps.event.removeListener(_v32), _v24 && _v24(_v0);
        };
      }
    }, []), null !== _v25 && _v1(_v25) || null;
  });
  class _v65 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        markerClusterer: null
      }), _v16(this, "setClustererCallback", () => {
        null !== this.state.markerClusterer && this.props.onLoad && this.props.onLoad(this.state.markerClusterer);
      });
    }
    componentDidMount() {
      if (this.context) {
        var _v0 = new _v60(this.context, [], this.props.options);
        this.registeredEvents = _v22({
          updaterMap: _v63,
          eventMap: _v62,
          prevProps: {},
          nextProps: this.props,
          instance: _v0
        }), this.setState(() => ({
          markerClusterer: _v0
        }), this.setClustererCallback);
      }
    }
    componentDidUpdate(_v0) {
      this.state.markerClusterer && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v63,
        eventMap: _v62,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.markerClusterer
      }));
    }
    componentWillUnmount() {
      null !== this.state.markerClusterer && (this.props.onUnmount && this.props.onUnmount(this.state.markerClusterer), _v21(this.registeredEvents), this.state.markerClusterer.setMap(null));
    }
    render() {
      return null !== this.state.markerClusterer ? this.props.children(this.state.markerClusterer) : null;
    }
  }
  function _v66(_v0) {
    _v0.cancelBubble = !0, _v0.stopPropagation && _v0.stopPropagation();
  }
  _v16(_v65, "contextType", _v19);
  var _v67 = function () {
      function _v0(_v0) {
        void 0 === _v0 && (_v0 = {}), this.getCloseClickHandler = this.getCloseClickHandler.bind(this), this.closeClickHandler = this.closeClickHandler.bind(this), this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this), this.addClickHandler = this.addClickHandler.bind(this), this.getCloseBoxImg = this.getCloseBoxImg.bind(this), this.getBoxWidths = this.getBoxWidths.bind(this), this.setBoxStyle = this.setBoxStyle.bind(this), this.setPosition = this.setPosition.bind(this), this.getPosition = this.getPosition.bind(this), this.setOptions = this.setOptions.bind(this), this.setContent = this.setContent.bind(this), this.setVisible = this.setVisible.bind(this), this.getContent = this.getContent.bind(this), this.getVisible = this.getVisible.bind(this), this.setZIndex = this.setZIndex.bind(this), this.getZIndex = this.getZIndex.bind(this), this.onRemove = this.onRemove.bind(this), this.panBox = this.panBox.bind(this), this.extend = this.extend.bind(this), this.close = this.close.bind(this), this.draw = this.draw.bind(this), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.open = this.open.bind(this), this.extend(_v0, google.maps.OverlayView), this.content = _v0.content || "", this.disableAutoPan = _v0.disableAutoPan || !1, this.maxWidth = _v0.maxWidth || 0, this.pixelOffset = _v0.pixelOffset || new google.maps.Size(0, 0), this.position = _v0.position || new google.maps.LatLng(0, 0), this.zIndex = _v0.zIndex || null, this.boxClass = _v0.boxClass || "infoBox", this.boxStyle = _v0.boxStyle || {}, this.closeBoxMargin = _v0.closeBoxMargin || "2px", this.closeBoxURL = _v0.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", "" === _v0.closeBoxURL && (this.closeBoxURL = ""), this.infoBoxClearance = _v0.infoBoxClearance || new google.maps.Size(1, 1), void 0 === _v0.visible && (void 0 === _v0.isHidden ? _v0.visible = !0 : _v0.visible = !_v0.isHidden), this.isHidden = !_v0.visible, this.alignBottom = _v0.alignBottom || !1, this.pane = _v0.pane || "floatPane", this.enableEventPropagation = _v0.enableEventPropagation || !1, this.div = null, this.closeListener = null, this.moveListener = null, this.mapListener = null, this.contextListener = null, this.eventListeners = null, this.fixedWidthSet = null;
      }
      return _v0.prototype.createInfoBoxDiv = function () {
        var _v0 = this;
        if (!this.div) {
          this.div = document.createElement("div"), this.setBoxStyle(), "string" == typeof this.content ? this.div.innerHTML = this.getCloseBoxImg() + this.content : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(this.content));
          var _v1 = this.getPanes();
          if (null !== _v1 && _v1[this.pane].appendChild(this.div), this.addClickHandler(), this.div.style.width) this.fixedWidthSet = !0;else if (0 !== this.maxWidth && this.div.offsetWidth > this.maxWidth) this.div.style.width = this.maxWidth + "px", this.fixedWidthSet = !0;else {
            var _v2 = this.getBoxWidths();
            this.div.style.width = this.div.offsetWidth - _v2.left - _v2.right + "px", this.fixedWidthSet = !1;
          }
          if (this.panBox(this.disableAutoPan), !this.enableEventPropagation) {
            this.eventListeners = [];
            for (var _v3 = 0, _v4 = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"]; _v3 < _v4.length; _v3++) {
              var _v5 = _v4[_v3];
              this.eventListeners.push(google.maps.event.addListener(this.div, _v5, _v66));
            }
            this.eventListeners.push(google.maps.event.addListener(this.div, "mouseover", function () {
              _v0.div && (_v0.div.style.cursor = "default");
            }));
          }
          this.contextListener = google.maps.event.addListener(this.div, "contextmenu", function (_v0) {
            _v0.returnValue = !1, _v0.preventDefault && _v0.preventDefault(), _v0.enableEventPropagation || _v66(_v0);
          }), google.maps.event.trigger(this, "domready");
        }
      }, _v0.prototype.getCloseBoxImg = function () {
        var _v0 = "";
        return "" !== this.closeBoxURL && (_v0 = '<img alt="" aria-hidden="true" src=\'' + this.closeBoxURL + "' align=right style=' position: relative; cursor: pointer;" + (" margin: " + this.closeBoxMargin) + ";'>"), _v0;
      }, _v0.prototype.addClickHandler = function () {
        this.closeListener = this.div && this.div.firstChild && "" !== this.closeBoxURL ? google.maps.event.addListener(this.div.firstChild, "click", this.getCloseClickHandler()) : null;
      }, _v0.prototype.closeClickHandler = function (_v0) {
        _v0.cancelBubble = !0, _v0.stopPropagation && _v0.stopPropagation(), google.maps.event.trigger(this, "closeclick"), this.close();
      }, _v0.prototype.getCloseClickHandler = function () {
        return this.closeClickHandler;
      }, _v0.prototype.panBox = function (_v0) {
        if (this.div && !_v0) {
          var _v1 = this.getMap();
          if (_v1 instanceof google.maps.Map) {
            var _v2 = 0,
              _v3 = 0,
              _v4 = _v1.getBounds();
            _v4 && !_v4.contains(this.position) && _v1.setCenter(this.position);
            var _v5 = _v1.getDiv(),
              _v6 = _v5.offsetWidth,
              _v7 = _v5.offsetHeight,
              _v8 = this.pixelOffset.width,
              _v9 = this.pixelOffset.height,
              _v10 = this.div.offsetWidth,
              _v11 = this.div.offsetHeight,
              _v12 = this.infoBoxClearance.width,
              _v13 = this.infoBoxClearance.height,
              _v14 = this.getProjection().fromLatLngToContainerPixel(this.position);
            null !== _v14 && (_v14.x < -_v8 + _v12 ? _v2 = _v14.x + _v8 - _v12 : _v14.x + _v10 + _v8 + _v12 > _v6 && (_v2 = _v14.x + _v10 + _v8 + _v12 - _v6), this.alignBottom ? _v14.y < -_v9 + _v13 + _v11 ? _v3 = _v14.y + _v9 - _v13 - _v11 : _v14.y + _v9 + _v13 > _v7 && (_v3 = _v14.y + _v9 + _v13 - _v7) : _v14.y < -_v9 + _v13 ? _v3 = _v14.y + _v9 - _v13 : _v14.y + _v11 + _v9 + _v13 > _v7 && (_v3 = _v14.y + _v11 + _v9 + _v13 - _v7)), (0 !== _v2 || 0 !== _v3) && _v1.panBy(_v2, _v3);
          }
        }
      }, _v0.prototype.setBoxStyle = function () {
        if (this.div) {
          this.div.className = this.boxClass, this.div.style.cssText = "";
          var _v0 = this.boxStyle;
          for (var _v1 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v1) && (this.div.style[_v1] = _v0[_v1]);
          if (this.div.style.webkitTransform = "translateZ(0)", void 0 !== this.div.style.opacity && "" !== this.div.style.opacity) {
            var _v2 = parseFloat(this.div.style.opacity || "");
            this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + 100 * _v2 + ')"', this.div.style.filter = "alpha(opacity=" + 100 * _v2 + ")";
          }
          this.div.style.position = "absolute", this.div.style.visibility = "hidden", null !== this.zIndex && (this.div.style.zIndex = this.zIndex + ""), this.div.style.overflow || (this.div.style.overflow = "auto");
        }
      }, _v0.prototype.getBoxWidths = function () {
        var _v0 = {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        };
        if (!this.div) return _v0;
        if (document.defaultView) {
          var _v1 = this.div.ownerDocument,
            _v2 = _v1 && _v1.defaultView ? _v1.defaultView.getComputedStyle(this.div, "") : null;
          _v2 && (_v0.top = parseInt(_v2.borderTopWidth || "", 10) || 0, _v0.bottom = parseInt(_v2.borderBottomWidth || "", 10) || 0, _v0.left = parseInt(_v2.borderLeftWidth || "", 10) || 0, _v0.right = parseInt(_v2.borderRightWidth || "", 10) || 0);
        } else if (document.documentElement.currentStyle) {
          var _v3 = this.div.currentStyle;
          _v3 && (_v0.top = parseInt(_v3.borderTopWidth || "", 10) || 0, _v0.bottom = parseInt(_v3.borderBottomWidth || "", 10) || 0, _v0.left = parseInt(_v3.borderLeftWidth || "", 10) || 0, _v0.right = parseInt(_v3.borderRightWidth || "", 10) || 0);
        }
        return _v0;
      }, _v0.prototype.onRemove = function () {
        this.div && this.div.parentNode && (this.div.parentNode.removeChild(this.div), this.div = null);
      }, _v0.prototype.draw = function () {
        if (this.createInfoBoxDiv(), this.div) {
          var _v0 = this.getProjection().fromLatLngToDivPixel(this.position);
          null !== _v0 && (this.div.style.left = _v0.x + this.pixelOffset.width + "px", this.alignBottom ? this.div.style.bottom = -(_v0.y + this.pixelOffset.height) + "px" : this.div.style.top = _v0.y + this.pixelOffset.height + "px"), this.isHidden ? this.div.style.visibility = "hidden" : this.div.style.visibility = "visible";
        }
      }, _v0.prototype.setOptions = function (_v0) {
        void 0 === _v0 && (_v0 = {}), void 0 !== _v0.boxClass && (this.boxClass = _v0.boxClass, this.setBoxStyle()), void 0 !== _v0.boxStyle && (this.boxStyle = _v0.boxStyle, this.setBoxStyle()), void 0 !== _v0.content && this.setContent(_v0.content), void 0 !== _v0.disableAutoPan && (this.disableAutoPan = _v0.disableAutoPan), void 0 !== _v0.maxWidth && (this.maxWidth = _v0.maxWidth), void 0 !== _v0.pixelOffset && (this.pixelOffset = _v0.pixelOffset), void 0 !== _v0.alignBottom && (this.alignBottom = _v0.alignBottom), void 0 !== _v0.position && this.setPosition(_v0.position), void 0 !== _v0.zIndex && this.setZIndex(_v0.zIndex), void 0 !== _v0.closeBoxMargin && (this.closeBoxMargin = _v0.closeBoxMargin), void 0 !== _v0.closeBoxURL && (this.closeBoxURL = _v0.closeBoxURL), void 0 !== _v0.infoBoxClearance && (this.infoBoxClearance = _v0.infoBoxClearance), void 0 !== _v0.isHidden && (this.isHidden = _v0.isHidden), void 0 !== _v0.visible && (this.isHidden = !_v0.visible), void 0 !== _v0.enableEventPropagation && (this.enableEventPropagation = _v0.enableEventPropagation), this.div && this.draw();
      }, _v0.prototype.setContent = function (_v0) {
        this.content = _v0, this.div && (this.closeListener && (google.maps.event.removeListener(this.closeListener), this.closeListener = null), this.fixedWidthSet || (this.div.style.width = ""), "string" == typeof _v0 ? this.div.innerHTML = this.getCloseBoxImg() + _v0 : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(_v0)), this.fixedWidthSet || (this.div.style.width = this.div.offsetWidth + "px", "string" == typeof _v0 ? this.div.innerHTML = this.getCloseBoxImg() + _v0 : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(_v0))), this.addClickHandler()), google.maps.event.trigger(this, "content_changed");
      }, _v0.prototype.setPosition = function (_v0) {
        this.position = _v0, this.div && this.draw(), google.maps.event.trigger(this, "position_changed");
      }, _v0.prototype.setVisible = function (_v0) {
        this.isHidden = !_v0, this.div && (this.div.style.visibility = this.isHidden ? "hidden" : "visible");
      }, _v0.prototype.setZIndex = function (_v0) {
        this.zIndex = _v0, this.div && (this.div.style.zIndex = _v0 + ""), google.maps.event.trigger(this, "zindex_changed");
      }, _v0.prototype.getContent = function () {
        return this.content;
      }, _v0.prototype.getPosition = function () {
        return this.position;
      }, _v0.prototype.getZIndex = function () {
        return this.zIndex;
      }, _v0.prototype.getVisible = function () {
        return null != this.getMap() && !this.isHidden;
      }, _v0.prototype.show = function () {
        this.isHidden = !1, this.div && (this.div.style.visibility = "visible");
      }, _v0.prototype.hide = function () {
        this.isHidden = !0, this.div && (this.div.style.visibility = "hidden");
      }, _v0.prototype.open = function (_v0, _v1) {
        var _v2 = this;
        _v1 && (this.position = _v1.getPosition(), this.moveListener = google.maps.event.addListener(_v1, "position_changed", function () {
          var _v0 = _v1.getPosition();
          _v2.setPosition(_v0);
        }), this.mapListener = google.maps.event.addListener(_v1, "map_changed", function () {
          _v2.setMap(_v1.map);
        })), this.setMap(_v0), this.div && this.panBox();
      }, _v0.prototype.close = function () {
        if (this.closeListener && (google.maps.event.removeListener(this.closeListener), this.closeListener = null), this.eventListeners) {
          for (var _v0 = 0, _v1 = this.eventListeners; _v0 < _v1.length; _v0++) {
            var _v2 = _v1[_v0];
            google.maps.event.removeListener(_v2);
          }
          this.eventListeners = null;
        }
        this.moveListener && (google.maps.event.removeListener(this.moveListener), this.moveListener = null), this.mapListener && (google.maps.event.removeListener(this.mapListener), this.mapListener = null), this.contextListener && (google.maps.event.removeListener(this.contextListener), this.contextListener = null), this.setMap(null);
      }, _v0.prototype.extend = function (_v0, _v1) {
        return function (_v0) {
          for (var _v1 in _v0.prototype) Object.prototype.hasOwnProperty.call(this, _v1) || (this.prototype[_v1] = _v0.prototype[_v1]);
          return this;
        }.apply(_v0, [_v1]);
      }, _v0;
    }(),
    _v68 = ["position"],
    _v69 = ["position"];
  function _v70(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v71(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v70(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v70(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  var _v72 = {
      onCloseClick: "closeclick",
      onContentChanged: "content_changed",
      onDomReady: "domready",
      onPositionChanged: "position_changed",
      onZindexChanged: "zindex_changed"
    },
    _v73 = {
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      position(_v0, _v1) {
        _v1 instanceof google.maps.LatLng ? _v0.setPosition(_v1) : _v0.setPosition(new google.maps.LatLng(_v1.lat, _v1.lng));
      },
      visible(_v0, _v1) {
        _v0.setVisible(_v1);
      },
      zIndex(_v0, _v1) {
        _v0.setZIndex(_v1);
      }
    },
    _v74 = {};
  (0, _v13.memo)(function (_v0) {
    var {
        children: _v1,
        anchor: _v2,
        options: _v3,
        position: _v4,
        zIndex: _v5,
        onCloseClick: _v6,
        onDomReady: _v7,
        onContentChanged: _v8,
        onPositionChanged: _v9,
        onZindexChanged: _v10,
        onLoad: _v11,
        onUnmount: _v12
      } = _v0,
      _v13 = (0, _v13.useContext)(_v19),
      [_v14, _v15] = (0, _v13.useState)(null),
      [_v16, _v17] = (0, _v13.useState)(null),
      [_v18, _v19] = (0, _v13.useState)(null),
      [_v20, _v21] = (0, _v13.useState)(null),
      [_v22, _v23] = (0, _v13.useState)(null),
      [_v24, _v25] = (0, _v13.useState)(null),
      _v26 = (0, _v13.useRef)(null);
    return (0, _v13.useEffect)(() => {
      _v13 && null !== _v14 && (_v14.close(), _v2 ? _v14.open(_v13, _v2) : _v14.getPosition() && _v14.open(_v13));
    }, [_v13, _v14, _v2]), (0, _v13.useEffect)(() => {
      _v3 && null !== _v14 && _v14.setOptions(_v3);
    }, [_v14, _v3]), (0, _v13.useEffect)(() => {
      if (_v4 && null !== _v14) {
        var _v0 = _v4 instanceof google.maps.LatLng ? _v4 : new google.maps.LatLng(_v4.lat, _v4.lng);
        _v14.setPosition(_v0);
      }
    }, [_v4]), (0, _v13.useEffect)(() => {
      "number" == typeof _v5 && null !== _v14 && _v14.setZIndex(_v5);
    }, [_v5]), (0, _v13.useEffect)(() => {
      _v14 && _v6 && (null !== _v16 && google.maps.event.removeListener(_v16), _v17(google.maps.event.addListener(_v14, "closeclick", _v6)));
    }, [_v6]), (0, _v13.useEffect)(() => {
      _v14 && _v7 && (null !== _v18 && google.maps.event.removeListener(_v18), _v19(google.maps.event.addListener(_v14, "domready", _v7)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      _v14 && _v8 && (null !== _v20 && google.maps.event.removeListener(_v20), _v21(google.maps.event.addListener(_v14, "content_changed", _v8)));
    }, [_v8]), (0, _v13.useEffect)(() => {
      _v14 && _v9 && (null !== _v22 && google.maps.event.removeListener(_v22), _v23(google.maps.event.addListener(_v14, "position_changed", _v9)));
    }, [_v9]), (0, _v13.useEffect)(() => {
      _v14 && _v10 && (null !== _v24 && google.maps.event.removeListener(_v24), _v25(google.maps.event.addListener(_v14, "zindex_changed", _v10)));
    }, [_v10]), (0, _v13.useEffect)(() => {
      if (_v13) {
        var _v0,
          _v1 = _v3 || _v74,
          {
            position: _v2
          } = _v1,
          _v3 = _v34(_v1, _v68);
        !_v2 || _v2 instanceof google.maps.LatLng || (_v0 = new google.maps.LatLng(_v2.lat, _v2.lng));
        var _v4 = new _v67(_v71(_v71({}, _v3), _v0 ? {
          position: _v0
        } : {}));
        _v26.current = document.createElement("div"), _v15(_v4), _v6 && _v17(google.maps.event.addListener(_v4, "closeclick", _v6)), _v7 && _v19(google.maps.event.addListener(_v4, "domready", _v7)), _v8 && _v21(google.maps.event.addListener(_v4, "content_changed", _v8)), _v9 && _v23(google.maps.event.addListener(_v4, "position_changed", _v9)), _v10 && _v25(google.maps.event.addListener(_v4, "zindex_changed", _v10)), _v4.setContent(_v26.current), _v2 ? _v4.open(_v13, _v2) : _v4.getPosition() ? _v4.open(_v13) : _v18(!1, "You must provide either an anchor or a position prop for <InfoBox>."), _v11 && _v11(_v4);
      }
      return () => {
        null !== _v14 && (_v16 && google.maps.event.removeListener(_v16), _v20 && google.maps.event.removeListener(_v20), _v18 && google.maps.event.removeListener(_v18), _v22 && google.maps.event.removeListener(_v22), _v24 && google.maps.event.removeListener(_v24), _v12 && _v12(_v14), _v14.close());
      };
    }, []), _v26.current ? (0, _v14.createPortal)(_v13.Children.only(_v1), _v26.current) : null;
  });
  class _v75 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "containerElement", null), _v16(this, "state", {
        infoBox: null
      }), _v16(this, "open", (_v0, _v1) => {
        _v1 ? null !== this.context && _v0.open(this.context, _v1) : _v0.getPosition() ? null !== this.context && _v0.open(this.context) : _v18(!1, "You must provide either an anchor or a position prop for <InfoBox>.");
      }), _v16(this, "setInfoBoxCallback", () => {
        null !== this.state.infoBox && null !== this.containerElement && (this.state.infoBox.setContent(this.containerElement), this.open(this.state.infoBox, this.props.anchor), this.props.onLoad && this.props.onLoad(this.state.infoBox));
      });
    }
    componentDidMount() {
      var _v0,
        _v1 = this.props.options || {},
        {
          position: _v2
        } = _v1,
        _v3 = _v34(_v1, _v69);
      !_v2 || _v2 instanceof google.maps.LatLng || (_v0 = new google.maps.LatLng(_v2.lat, _v2.lng));
      var _v4 = new _v67(_v71(_v71({}, _v3), _v0 ? {
        position: _v0
      } : {}));
      this.containerElement = document.createElement("div"), this.registeredEvents = _v22({
        updaterMap: _v73,
        eventMap: _v72,
        prevProps: {},
        nextProps: this.props,
        instance: _v4
      }), this.setState({
        infoBox: _v4
      }, this.setInfoBoxCallback);
    }
    componentDidUpdate(_v0) {
      var {
        infoBox: _v1
      } = this.state;
      null !== _v1 && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v73,
        eventMap: _v72,
        prevProps: _v0,
        nextProps: this.props,
        instance: _v1
      }));
    }
    componentWillUnmount() {
      var {
          onUnmount: _v0
        } = this.props,
        {
          infoBox: _v1
        } = this.state;
      null !== _v1 && (_v0 && _v0(_v1), _v21(this.registeredEvents), _v1.close());
    }
    render() {
      return this.containerElement ? (0, _v14.createPortal)(_v13.Children.only(this.props.children), this.containerElement) : null;
    }
  }
  _v16(_v75, "contextType", _v19);
  var _v76 = _v17(_v10 ? _v9 : (_v10 = 1, _v9 = function _v0(_v1, _v2) {
      if (_v1 === _v2) return !0;
      if (_v1 && _v2 && "object" == typeof _v1 && "object" == typeof _v2) {
        if (_v1.constructor !== _v2.constructor) return !1;
        if (Array.isArray(_v1)) {
          if ((_v3 = _v1.length) != _v2.length) return !1;
          for (_v4 = _v3; 0 != _v4--;) if (!_v0(_v1[_v4], _v2[_v4])) return !1;
          return !0;
        }
        if (_v1.constructor === RegExp) return _v1.source === _v2.source && _v1.flags === _v2.flags;
        if (_v1.valueOf !== Object.prototype.valueOf) return _v1.valueOf() === _v2.valueOf();
        if (_v1.toString !== Object.prototype.toString) return _v1.toString() === _v2.toString();
        if ((_v3 = (_v5 = Object.keys(_v1)).length) !== Object.keys(_v2).length) return !1;
        for (_v4 = _v3; 0 != _v4--;) if (!Object.prototype.hasOwnProperty.call(_v2, _v5[_v4])) return !1;
        for (_v4 = _v3; 0 != _v4--;) {
          var _v3,
            _v4,
            _v5,
            _v6 = _v5[_v4];
          if (!_v0(_v1[_v6], _v2[_v6])) return !1;
        }
        return !0;
      }
      return _v1 != _v1 && _v2 != _v2;
    })),
    _v77 = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
  class _v78 {
    static from(_v0) {
      if (!(_v0 instanceof ArrayBuffer)) throw Error("Data must be an instance of ArrayBuffer.");
      var [_v1, _v2] = new Uint8Array(_v0, 0, 2);
      if (219 !== _v1) throw Error("Data does not appear to be in a KDBush format.");
      var _v3 = _v2 >> 4;
      if (1 !== _v3) throw Error("Got v".concat(_v3, " data when expected v").concat(1, "."));
      var _v4 = _v77[15 & _v2];
      if (!_v4) throw Error("Unrecognized array type.");
      var [_v5] = new Uint16Array(_v0, 2, 1),
        [_v6] = new Uint32Array(_v0, 4, 1);
      return new _v78(_v6, _v5, _v4, _v0);
    }
    constructor(_v0) {
      var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64,
        _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Float64Array,
        _v3 = arguments.length > 3 ? arguments[3] : void 0;
      if (isNaN(_v0) || _v0 < 0) throw Error("Unpexpected numItems value: ".concat(_v0, "."));
      this.numItems = +_v0, this.nodeSize = Math.min(Math.max(+_v1, 2), 0), this.ArrayType = _v2, this.IndexArrayType = _v0 < 0 ? Uint16Array : Uint32Array;
      var _v4 = _v77.indexOf(this.ArrayType),
        _v5 = 2 * _v0 * this.ArrayType.BYTES_PER_ELEMENT,
        _v6 = _v0 * this.IndexArrayType.BYTES_PER_ELEMENT,
        _v7 = (8 - _v6 % 8) % 8;
      if (_v4 < 0) throw Error("Unexpected typed array class: ".concat(_v2, "."));
      _v3 && _v3 instanceof ArrayBuffer ? (this.data = _v3, this.ids = new this.IndexArrayType(this.data, 8, _v0), this.coords = new this.ArrayType(this.data, 8 + _v6 + _v7, 2 * _v0), this._pos = 2 * _v0, this._finished = !0) : (this.data = new ArrayBuffer(8 + _v5 + _v6 + _v7), this.ids = new this.IndexArrayType(this.data, 8, _v0), this.coords = new this.ArrayType(this.data, 8 + _v6 + _v7, 2 * _v0), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, 16 + _v4]), new Uint16Array(this.data, 2, 1)[0] = _v1, new Uint32Array(this.data, 4, 1)[0] = _v0);
    }
    add(_v0, _v1) {
      var _v2 = this._pos >> 1;
      return this.ids[_v2] = _v2, this.coords[this._pos++] = _v0, this.coords[this._pos++] = _v1, _v2;
    }
    finish() {
      var _v0 = this._pos >> 1;
      if (_v0 !== this.numItems) throw Error("Added ".concat(_v0, " items when expected ").concat(this.numItems, "."));
      return function _v0(_v1, _v2, _v3, _v4, _v5, _v6) {
        if (!(_v5 - _v4 <= _v3)) {
          var _v7 = _v4 + _v5 >> 1;
          (function _v0(_v1, _v2, _v3, _v4, _v5, _v6) {
            for (; _v5 > _v4;) {
              if (_v5 - _v4 > 600) {
                var _v7 = _v5 - _v4 + 1,
                  _v8 = _v3 - _v4 + 1,
                  _v9 = Math.log(_v7),
                  _v10 = .5 * Math.exp(2 * _v9 / 3),
                  _v11 = .5 * Math.sqrt(_v9 * _v10 * (_v7 - _v10) / _v7) * (_v8 - _v7 / 2 < 0 ? -1 : 1),
                  _v12 = Math.max(_v4, Math.floor(_v3 - _v8 * _v10 / _v7 + _v11)),
                  _v13 = Math.min(_v5, Math.floor(_v3 + (_v7 - _v8) * _v10 / _v7 + _v11));
                _v0(_v1, _v2, _v3, _v12, _v13, _v6);
              }
              var _v14 = _v2[2 * _v3 + _v6],
                _v15 = _v4,
                _v16 = _v5;
              for (_v79(_v1, _v2, _v4, _v3), _v2[2 * _v5 + _v6] > _v14 && _v79(_v1, _v2, _v4, _v5); _v15 < _v16;) {
                for (_v79(_v1, _v2, _v15, _v16), _v15++, _v16--; _v2[2 * _v15 + _v6] < _v14;) _v15++;
                for (; _v2[2 * _v16 + _v6] > _v14;) _v16--;
              }
              _v2[2 * _v4 + _v6] === _v14 ? _v79(_v1, _v2, _v4, _v16) : _v79(_v1, _v2, ++_v16, _v5), _v16 <= _v3 && (_v4 = _v16 + 1), _v3 <= _v16 && (_v5 = _v16 - 1);
            }
          })(_v1, _v2, _v7, _v4, _v5, _v6), _v0(_v1, _v2, _v3, _v4, _v7 - 1, 1 - _v6), _v0(_v1, _v2, _v3, _v7 + 1, _v5, 1 - _v6);
        }
      }(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
    }
    range(_v0, _v1, _v2, _v3) {
      if (!this._finished) throw Error("Data not yet indexed - call index.finish().");
      for (var {
          ids: _v4,
          coords: _v5,
          nodeSize: _v6
        } = this, _v7 = [0, _v4.length - 1, 0], _v8 = []; _v7.length;) {
        var _v9 = _v7.pop() || 0,
          _v10 = _v7.pop() || 0,
          _v11 = _v7.pop() || 0;
        if (_v10 - _v11 <= _v6) {
          for (var _v12 = _v11; _v12 <= _v10; _v12++) {
            var _v13 = _v5[2 * _v12],
              _v14 = _v5[2 * _v12 + 1];
            _v13 >= _v0 && _v13 <= _v2 && _v14 >= _v1 && _v14 <= _v3 && _v8.push(_v4[_v12]);
          }
          continue;
        }
        var _v15 = _v11 + _v10 >> 1,
          _v16 = _v5[2 * _v15],
          _v17 = _v5[2 * _v15 + 1];
        _v16 >= _v0 && _v16 <= _v2 && _v17 >= _v1 && _v17 <= _v3 && _v8.push(_v4[_v15]), (0 === _v9 ? _v0 <= _v16 : _v1 <= _v17) && (_v7.push(_v11), _v7.push(_v15 - 1), _v7.push(1 - _v9)), (0 === _v9 ? _v2 >= _v16 : _v3 >= _v17) && (_v7.push(_v15 + 1), _v7.push(_v10), _v7.push(1 - _v9));
      }
      return _v8;
    }
    within(_v0, _v1, _v2) {
      if (!this._finished) throw Error("Data not yet indexed - call index.finish().");
      for (var {
          ids: _v3,
          coords: _v4,
          nodeSize: _v5
        } = this, _v6 = [0, _v3.length - 1, 0], _v7 = [], _v8 = _v2 * _v2; _v6.length;) {
        var _v9 = _v6.pop() || 0,
          _v10 = _v6.pop() || 0,
          _v11 = _v6.pop() || 0;
        if (_v10 - _v11 <= _v5) {
          for (var _v12 = _v11; _v12 <= _v10; _v12++) _v81(_v4[2 * _v12], _v4[2 * _v12 + 1], _v0, _v1) <= _v8 && _v7.push(_v3[_v12]);
          continue;
        }
        var _v13 = _v11 + _v10 >> 1,
          _v14 = _v4[2 * _v13],
          _v15 = _v4[2 * _v13 + 1];
        _v81(_v14, _v15, _v0, _v1) <= _v8 && _v7.push(_v3[_v13]), (0 === _v9 ? _v0 - _v2 <= _v14 : _v1 - _v2 <= _v15) && (_v6.push(_v11), _v6.push(_v13 - 1), _v6.push(1 - _v9)), (0 === _v9 ? _v0 + _v2 >= _v14 : _v1 + _v2 >= _v15) && (_v6.push(_v13 + 1), _v6.push(_v10), _v6.push(1 - _v9));
      }
      return _v7;
    }
  }
  function _v79(_v0, _v1, _v2, _v3) {
    _v80(_v0, _v2, _v3), _v80(_v1, 2 * _v2, 2 * _v3), _v80(_v1, 2 * _v2 + 1, 2 * _v3 + 1);
  }
  function _v80(_v0, _v1, _v2) {
    var _v3 = _v0[_v1];
    _v0[_v1] = _v0[_v2], _v0[_v2] = _v3;
  }
  function _v81(_v0, _v1, _v2, _v3) {
    var _v4 = _v0 - _v2,
      _v5 = _v1 - _v3;
    return _v4 * _v4 + _v5 * _v5;
  }
  var _v82 = {
      minZoom: 0,
      maxZoom: 16,
      minPoints: 2,
      radius: 40,
      extent: 512,
      nodeSize: 64,
      log: !1,
      generateId: !1,
      reduce: null,
      map: _v0 => _v0
    },
    _v83 = Math.fround || (_v1 = new Float32Array(1), _v0 => (_v1[0] = +_v0, _v1[0]));
  class _v84 {
    constructor(_v0) {
      this.options = Object.assign(Object.create(_v82), _v0), this.trees = Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
    }
    load(_v0) {
      var {
        log: _v1,
        minZoom: _v2,
        maxZoom: _v3
      } = this.options;
      _v1 && console.time("total time");
      var _v4 = "prepare ".concat(_v0.length, " points");
      _v1 && console.time(_v4), this.points = _v0;
      for (var _v5 = [], _v6 = 0; _v6 < _v0.length; _v6++) {
        var _v7 = _v0[_v6];
        if (_v7.geometry) {
          var [_v8, _v9] = _v7.geometry.coordinates,
            _v10 = _v83(_v87(_v8)),
            _v11 = _v83(_v88(_v9));
          _v5.push(_v10, _v11, 1 / 0, _v6, -1, 1), this.options.reduce && _v5.push(0);
        }
      }
      var _v12 = this.trees[_v3 + 1] = this._createTree(_v5);
      _v1 && console.timeEnd(_v4);
      for (var _v13 = _v3; _v13 >= _v2; _v13--) {
        var _v14 = +Date.now();
        _v12 = this.trees[_v13] = this._createTree(this._cluster(_v12, _v13)), _v1 && console.log("z%d: %d clusters in %dms", _v13, _v12.numItems, Date.now() - _v14);
      }
      return _v1 && console.timeEnd("total time"), this;
    }
    getClusters(_v0, _v1) {
      var _v2 = ((_v0[0] + 180) % 360 + 360) % 360 - 180,
        _v3 = Math.max(-90, Math.min(90, _v0[1])),
        _v4 = 180 === _v0[2] ? 180 : ((_v0[2] + 180) % 360 + 360) % 360 - 180,
        _v5 = Math.max(-90, Math.min(90, _v0[3]));
      if (_v0[2] - _v0[0] >= 360) _v2 = -180, _v4 = 180;else if (_v2 > _v4) {
        var _v6 = this.getClusters([_v2, _v3, 180, _v5], _v1),
          _v7 = this.getClusters([-180, _v3, _v4, _v5], _v1);
        return _v6.concat(_v7);
      }
      var _v8 = this.trees[this._limitZoom(_v1)],
        _v9 = _v8.range(_v87(_v2), _v88(_v5), _v87(_v4), _v88(_v3)),
        _v10 = _v8.data,
        _v11 = [];
      for (var _v12 of _v9) {
        var _v13 = this.stride * _v12;
        _v11.push(_v10[_v13 + 5] > 1 ? _v85(_v10, _v13, this.clusterProps) : this.points[_v10[_v13 + 3]]);
      }
      return _v11;
    }
    getChildren(_v0) {
      var _v1 = this._getOriginId(_v0),
        _v2 = this._getOriginZoom(_v0),
        _v3 = "No cluster with the specified id.",
        _v4 = this.trees[_v2];
      if (!_v4) throw Error(_v3);
      var _v5 = _v4.data;
      if (_v1 * this.stride >= _v5.length) throw Error(_v3);
      var _v6 = this.options.radius / (this.options.extent * Math.pow(2, _v2 - 1)),
        _v7 = _v5[_v1 * this.stride],
        _v8 = _v5[_v1 * this.stride + 1],
        _v9 = _v4.within(_v7, _v8, _v6),
        _v10 = [];
      for (var _v11 of _v9) {
        var _v12 = _v11 * this.stride;
        _v5[_v12 + 4] === _v0 && _v10.push(_v5[_v12 + 5] > 1 ? _v85(_v5, _v12, this.clusterProps) : this.points[_v5[_v12 + 3]]);
      }
      if (0 === _v10.length) throw Error(_v3);
      return _v10;
    }
    getLeaves(_v0, _v1, _v2) {
      _v1 = _v1 || 10, _v2 = _v2 || 0;
      var _v3 = [];
      return this._appendLeaves(_v3, _v0, _v1, _v2, 0), _v3;
    }
    getTile(_v0, _v1, _v2) {
      var _v3 = this.trees[this._limitZoom(_v0)],
        _v4 = Math.pow(2, _v0),
        {
          extent: _v5,
          radius: _v6
        } = this.options,
        _v7 = _v6 / _v5,
        _v8 = (_v2 - _v7) / _v4,
        _v9 = (_v2 + 1 + _v7) / _v4,
        _v10 = {
          features: []
        };
      return this._addTileFeatures(_v3.range((_v1 - _v7) / _v4, _v8, (_v1 + 1 + _v7) / _v4, _v9), _v3.data, _v1, _v2, _v4, _v10), 0 === _v1 && this._addTileFeatures(_v3.range(1 - _v7 / _v4, _v8, 1, _v9), _v3.data, _v4, _v2, _v4, _v10), _v1 === _v4 - 1 && this._addTileFeatures(_v3.range(0, _v8, _v7 / _v4, _v9), _v3.data, -1, _v2, _v4, _v10), _v10.features.length ? _v10 : null;
    }
    getClusterExpansionZoom(_v0) {
      for (var _v1 = this._getOriginZoom(_v0) - 1; _v1 <= this.options.maxZoom;) {
        var _v2 = this.getChildren(_v0);
        if (_v1++, 1 !== _v2.length) break;
        _v0 = _v2[0].properties.cluster_id;
      }
      return _v1;
    }
    _appendLeaves(_v0, _v1, _v2, _v3, _v4) {
      for (var _v5 of this.getChildren(_v1)) {
        var _v6 = _v5.properties;
        if (_v6 && _v6.cluster ? _v4 + _v6.point_count <= _v3 ? _v4 += _v6.point_count : _v4 = this._appendLeaves(_v0, _v6.cluster_id, _v2, _v3, _v4) : _v4 < _v3 ? _v4++ : _v0.push(_v5), _v0.length === _v2) break;
      }
      return _v4;
    }
    _createTree(_v0) {
      for (var _v1 = new _v78(_v0.length / this.stride | 0, this.options.nodeSize, Float32Array), _v2 = 0; _v2 < _v0.length; _v2 += this.stride) _v1.add(_v0[_v2], _v0[_v2 + 1]);
      return _v1.finish(), _v1.data = _v0, _v1;
    }
    _addTileFeatures(_v0, _v1, _v2, _v3, _v4, _v5) {
      for (var _v6 of _v0) {
        var _v7 = _v6 * this.stride,
          _v8 = _v1[_v7 + 5] > 1,
          _v9 = void 0,
          _v10 = void 0,
          _v11 = void 0;
        if (_v8) _v9 = _v86(_v1, _v7, this.clusterProps), _v10 = _v1[_v7], _v11 = _v1[_v7 + 1];else {
          var _v12 = this.points[_v1[_v7 + 3]];
          _v9 = _v12.properties;
          var [_v13, _v14] = _v12.geometry.coordinates;
          _v10 = _v87(_v13), _v11 = _v88(_v14);
        }
        var _v15 = {
            type: 1,
            geometry: [[Math.round(this.options.extent * (_v10 * _v4 - _v2)), Math.round(this.options.extent * (_v11 * _v4 - _v3))]],
            tags: _v9
          },
          _v16 = void 0;
        void 0 !== (_v16 = _v8 || this.options.generateId ? _v1[_v7 + 3] : this.points[_v1[_v7 + 3]].id) && (_v15.id = _v16), _v5.features.push(_v15);
      }
    }
    _limitZoom(_v0) {
      return Math.max(this.options.minZoom, Math.min(Math.floor(+_v0), this.options.maxZoom + 1));
    }
    _cluster(_v0, _v1) {
      for (var {
          radius: _v2,
          extent: _v3,
          reduce: _v4,
          minPoints: _v5
        } = this.options, _v6 = _v2 / (_v3 * Math.pow(2, _v1)), _v7 = _v0.data, _v8 = [], _v9 = this.stride, _v10 = 0; _v10 < _v7.length; _v10 += _v9) if (!(_v7[_v10 + 2] <= _v1)) {
        _v7[_v10 + 2] = _v1;
        var _v11 = _v7[_v10],
          _v12 = _v7[_v10 + 1],
          _v13 = _v0.within(_v7[_v10], _v7[_v10 + 1], _v6),
          _v14 = _v7[_v10 + 5],
          _v15 = _v14;
        for (var _v16 of _v13) {
          var _v17 = _v16 * _v9;
          _v7[_v17 + 2] > _v1 && (_v15 += _v7[_v17 + 5]);
        }
        if (_v15 > _v14 && _v15 >= _v5) {
          var _v18 = _v11 * _v14,
            _v19 = _v12 * _v14,
            _v20 = void 0,
            _v21 = -1,
            _v22 = (_v10 / _v9 << 5) + (_v1 + 1) + this.points.length;
          for (var _v23 of _v13) {
            var _v24 = _v23 * _v9;
            if (!(_v7[_v24 + 2] <= _v1)) {
              _v7[_v24 + 2] = _v1;
              var _v25 = _v7[_v24 + 5];
              _v18 += _v7[_v24] * _v25, _v19 += _v7[_v24 + 1] * _v25, _v7[_v24 + 4] = _v22, _v4 && (_v20 || (_v20 = this._map(_v7, _v10, !0), _v21 = this.clusterProps.length, this.clusterProps.push(_v20)), _v4(_v20, this._map(_v7, _v24)));
            }
          }
          _v7[_v10 + 4] = _v22, _v8.push(_v18 / _v15, _v19 / _v15, 1 / 0, _v22, -1, _v15), _v4 && _v8.push(_v21);
        } else {
          for (var _v26 = 0; _v26 < _v9; _v26++) _v8.push(_v7[_v10 + _v26]);
          if (_v15 > 1) for (var _v27 of _v13) {
            var _v28 = _v27 * _v9;
            if (!(_v7[_v28 + 2] <= _v1)) {
              _v7[_v28 + 2] = _v1;
              for (var _v29 = 0; _v29 < _v9; _v29++) _v8.push(_v7[_v28 + _v29]);
            }
          }
        }
      }
      return _v8;
    }
    _getOriginId(_v0) {
      return _v0 - this.points.length >> 5;
    }
    _getOriginZoom(_v0) {
      return (_v0 - this.points.length) % 32;
    }
    _map(_v0, _v1, _v2) {
      if (_v0[_v1 + 5] > 1) {
        var _v3 = this.clusterProps[_v0[_v1 + 6]];
        return _v2 ? Object.assign({}, _v3) : _v3;
      }
      var _v4 = this.points[_v0[_v1 + 3]].properties,
        _v5 = this.options.map(_v4);
      return _v2 && _v5 === _v4 ? Object.assign({}, _v5) : _v5;
    }
  }
  function _v85(_v0, _v1, _v2) {
    return {
      type: "Feature",
      id: _v0[_v1 + 3],
      properties: _v86(_v0, _v1, _v2),
      geometry: {
        type: "Point",
        coordinates: [(_v0[_v1] - .5) * 360, 360 * Math.atan(Math.exp((180 - 360 * _v0[_v1 + 1]) * Math.PI / 180)) / Math.PI - 90]
      }
    };
  }
  function _v86(_v0, _v1, _v2) {
    var _v3 = _v0[_v1 + 5],
      _v4 = _v3 >= 0 ? "".concat(Math.round(_v3 / 0), "k") : _v3 >= 0 ? "".concat(Math.round(_v3 / 100) / 10, "k") : _v3,
      _v5 = _v0[_v1 + 6];
    return Object.assign(-1 === _v5 ? {} : Object.assign({}, _v2[_v5]), {
      cluster: !0,
      cluster_id: _v0[_v1 + 3],
      point_count: _v3,
      point_count_abbreviated: _v4
    });
  }
  function _v87(_v0) {
    return _v0 / 360 + .5;
  }
  function _v88(_v0) {
    var _v1 = Math.sin(_v0 * Math.PI / 180),
      _v2 = .5 - .25 * Math.log((1 + _v1) / (1 - _v1)) / Math.PI;
    return _v2 < 0 ? 0 : _v2 > 1 ? 1 : _v2;
  }
  function _v89(_v0, _v1) {
    var _v2 = {};
    for (var _v3 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v3) && 0 > _v1.indexOf(_v3) && (_v2[_v3] = _v0[_v3]);
    if (null != _v0 && "function" == typeof Object.getOwnPropertySymbols) for (var _v4 = 0, _v3 = Object.getOwnPropertySymbols(_v0); _v4 < _v3.length; _v4++) 0 > _v1.indexOf(_v3[_v4]) && Object.prototype.propertyIsEnumerable.call(_v0, _v3[_v4]) && (_v2[_v3[_v4]] = _v0[_v3[_v4]]);
    return _v2;
  }
  class _v90 {
    static isAdvancedMarkerAvailable(_v0) {
      return google.maps.marker && !0 === _v0.getMapCapabilities().isAdvancedMarkersAvailable;
    }
    static isAdvancedMarker(_v0) {
      return google.maps.marker && _v0 instanceof google.maps.marker.AdvancedMarkerElement;
    }
    static setMap(_v0, _v1) {
      this.isAdvancedMarker(_v0) ? _v0.map = _v1 : _v0.setMap(_v1);
    }
    static getPosition(_v0) {
      if (this.isAdvancedMarker(_v0)) {
        if (_v0.position) {
          if (_v0.position instanceof google.maps.LatLng) return _v0.position;
          if (_v0.position.lat && _v0.position.lng) return new google.maps.LatLng(_v0.position.lat, _v0.position.lng);
        }
        return new google.maps.LatLng(null);
      }
      return _v0.getPosition();
    }
    static getVisible(_v0) {
      return !!this.isAdvancedMarker(_v0) || _v0.getVisible();
    }
  }
  class _v91 {
    constructor(_v0) {
      var {
        markers: _v1,
        position: _v2
      } = _v0;
      this.markers = _v1, _v2 && (_v2 instanceof google.maps.LatLng ? this._position = _v2 : this._position = new google.maps.LatLng(_v2));
    }
    get bounds() {
      if (0 !== this.markers.length || this._position) {
        var _v0 = new google.maps.LatLngBounds(this._position, this._position);
        for (var _v1 of this.markers) _v0.extend(_v90.getPosition(_v1));
        return _v0;
      }
    }
    get position() {
      return this._position || this.bounds.getCenter();
    }
    get count() {
      return this.markers.filter(_v0 => _v90.getVisible(_v0)).length;
    }
    push(_v0) {
      this.markers.push(_v0);
    }
    delete() {
      this.marker && (_v90.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
    }
  }
  class _v92 {
    constructor(_v0) {
      var {
        maxZoom: _v1 = 16
      } = _v0;
      this.maxZoom = _v1;
    }
    noop(_v0) {
      var {
        markers: _v1
      } = _v0;
      return _v93(_v1);
    }
  }
  var _v93 = _v0 => _v0.map(_v0 => new _v91({
    position: _v90.getPosition(_v0),
    markers: [_v0]
  }));
  class _v94 extends _v92 {
    constructor(_v0) {
      var {
          maxZoom: _v1,
          radius: _v2 = 60
        } = _v0,
        _v3 = _v89(_v0, ["maxZoom", "radius"]);
      super({
        maxZoom: _v1
      }), this.state = {
        zoom: -1
      }, this.superCluster = new _v84(Object.assign({
        maxZoom: this.maxZoom,
        radius: _v2
      }, _v3));
    }
    calculate(_v0) {
      var _v1 = !1,
        _v2 = {
          zoom: _v0.map.getZoom()
        };
      if (!_v76(_v0.markers, this.markers)) {
        _v1 = !0, this.markers = [..._v0.markers];
        var _v3 = this.markers.map(_v0 => {
          var _v1 = _v90.getPosition(_v0);
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [_v1.lng(), _v1.lat()]
            },
            properties: {
              marker: _v0
            }
          };
        });
        this.superCluster.load(_v3);
      }
      return !_v1 && (this.state.zoom <= this.maxZoom || _v2.zoom <= this.maxZoom) && (_v1 = !_v76(this.state, _v2)), this.state = _v2, _v1 && (this.clusters = this.cluster(_v0)), {
        clusters: this.clusters,
        changed: _v1
      };
    }
    cluster(_v0) {
      var {
        map: _v1
      } = _v0;
      return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(_v1.getZoom())).map(_v0 => this.transformCluster(_v0));
    }
    transformCluster(_v0) {
      var {
        geometry: {
          coordinates: [_v1, _v2]
        },
        properties: _v3
      } = _v0;
      if (_v3.cluster) return new _v91({
        markers: this.superCluster.getLeaves(_v3.cluster_id, 1 / 0).map(_v0 => _v0.properties.marker),
        position: {
          lat: _v2,
          lng: _v1
        }
      });
      var _v4 = _v3.marker;
      return new _v91({
        markers: [_v4],
        position: _v90.getPosition(_v4)
      });
    }
  }
  class _v95 {
    constructor(_v0, _v1) {
      this.markers = {
        sum: _v0.length
      };
      var _v2 = _v1.map(_v0 => _v0.count),
        _v3 = _v2.reduce((_v0, _v1) => _v0 + _v1, 0);
      this.clusters = {
        count: _v1.length,
        markers: {
          mean: _v3 / _v1.length,
          sum: _v3,
          min: Math.min(..._v2),
          max: Math.max(..._v2)
        }
      };
    }
  }
  class _v96 {
    render(_v0, _v1, _v2) {
      var {
          count: _v3,
          position: _v4
        } = _v0,
        _v5 = _v3 > Math.max(10, _v1.clusters.markers.mean) ? "#ff0000" : "#0000ff",
        _v6 = '<svg fill="'.concat(_v5, '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">\n<circle cx="120" cy="120" opacity=".6" r="70" />\n<circle cx="120" cy="120" opacity=".3" r="90" />\n<circle cx="120" cy="120" opacity=".2" r="110" />\n<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">').concat(_v3, "</text>\n</svg>"),
        _v7 = "Cluster of ".concat(_v3, " markers"),
        _v8 = Number(google.maps.Marker.MAX_ZINDEX) + _v3;
      if (_v90.isAdvancedMarkerAvailable(_v2)) {
        var _v9 = new DOMParser().parseFromString(_v6, "image/svg+xml").documentElement;
        return _v9.setAttribute("transform", "translate(0 25)"), new google.maps.marker.AdvancedMarkerElement({
          map: _v2,
          position: _v4,
          zIndex: _v8,
          title: _v7,
          content: _v9
        });
      }
      var _v10 = {
        position: _v4,
        zIndex: _v8,
        title: _v7,
        icon: {
          url: "data:image/svg+xml;base64,".concat(btoa(_v6)),
          anchor: new google.maps.Point(25, 25)
        }
      };
      return new google.maps.Marker(_v10);
    }
  }
  class _v97 {
    constructor() {
      !function (_v0, _v1) {
        for (var _v2 in _v1.prototype) _v0.prototype[_v2] = _v1.prototype[_v2];
      }(_v97, google.maps.OverlayView);
    }
  }
  (_v3 = _v11 || (_v11 = {})).CLUSTERING_BEGIN = "clusteringbegin", _v3.CLUSTERING_END = "clusteringend", _v3.CLUSTER_CLICK = "click";
  var _v98 = (_v0, _v1, _v2) => {
    _v2.fitBounds(_v1.bounds);
  };
  class _v99 extends _v97 {
    constructor(_v0) {
      var {
        map: _v1,
        markers: _v2 = [],
        algorithmOptions: _v3 = {},
        algorithm: _v4 = new _v94(_v3),
        renderer: _v5 = new _v96(),
        onClusterClick: _v6 = _v98
      } = _v0;
      super(), this.markers = [..._v2], this.clusters = [], this.algorithm = _v4, this.renderer = _v5, this.onClusterClick = _v6, _v1 && this.setMap(_v1);
    }
    addMarker(_v0, _v1) {
      !this.markers.includes(_v0) && (this.markers.push(_v0), _v1 || this.render());
    }
    addMarkers(_v0, _v1) {
      _v0.forEach(_v0 => {
        this.addMarker(_v0, !0);
      }), _v1 || this.render();
    }
    removeMarker(_v0, _v1) {
      var _v2 = this.markers.indexOf(_v0);
      return -1 !== _v2 && (_v90.setMap(_v0, null), this.markers.splice(_v2, 1), _v1 || this.render(), !0);
    }
    removeMarkers(_v0, _v1) {
      var _v2 = !1;
      return _v0.forEach(_v0 => {
        _v2 = this.removeMarker(_v0, !0) || _v2;
      }), _v2 && !_v1 && this.render(), _v2;
    }
    clearMarkers(_v0) {
      this.markers.length = 0, _v0 || this.render();
    }
    render() {
      var _v0 = this.getMap();
      if (_v0 instanceof google.maps.Map && _v0.getProjection()) {
        google.maps.event.trigger(this, _v11.CLUSTERING_BEGIN, this);
        var {
          clusters: _v1,
          changed: _v2
        } = this.algorithm.calculate({
          markers: this.markers,
          map: _v0,
          mapCanvasProjection: this.getProjection()
        });
        if (_v2 || void 0 == _v2) {
          var _v3 = new Set();
          for (var _v4 of _v1) 1 == _v4.markers.length && _v3.add(_v4.markers[0]);
          var _v5 = [];
          for (var _v6 of this.clusters) null != _v6.marker && (1 == _v6.markers.length ? _v3.has(_v6.marker) || _v90.setMap(_v6.marker, null) : _v5.push(_v6.marker));
          this.clusters = _v1, this.renderClusters(), requestAnimationFrame(() => _v5.forEach(_v0 => _v90.setMap(_v0, null)));
        }
        google.maps.event.trigger(this, _v11.CLUSTERING_END, this);
      }
    }
    onAdd() {
      this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
    }
    onRemove() {
      google.maps.event.removeListener(this.idleListener), this.reset();
    }
    reset() {
      this.markers.forEach(_v0 => _v90.setMap(_v0, null)), this.clusters.forEach(_v0 => _v0.delete()), this.clusters = [];
    }
    renderClusters() {
      var _v0 = new _v95(this.markers, this.clusters),
        _v1 = this.getMap();
      this.clusters.forEach(_v0 => {
        1 === _v0.markers.length ? _v0.marker = _v0.markers[0] : (_v0.marker = this.renderer.render(_v0, _v0, _v1), _v0.markers.forEach(_v0 => _v90.setMap(_v0, null)), this.onClusterClick && _v0.marker.addListener("click", _v0 => {
          google.maps.event.trigger(this, _v11.CLUSTER_CLICK, _v0), this.onClusterClick(_v0, _v0, _v1);
        })), _v90.setMap(_v0.marker, _v1);
      });
    }
  }
  function _v100(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v101(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v100(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v100(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  (0, _v13.memo)(function (_v0) {
    var {
        children: _v1,
        options: _v2
      } = _v0,
      _v3 = function (_v0) {
        var _v1,
          _v2 = (_v18(!!_v13.useContext, "useGoogleMap is React hook and requires React version 16.8+"), _v18(!!(_v1 = (0, _v13.useContext)(_v19)), "useGoogleMap needs a GoogleMap available up in the tree"), _v1),
          [_v3, _v4] = (0, _v13.useState)(null);
        return (0, _v13.useEffect)(() => {
          _v2 && null === _v3 && _v4(new _v99(_v101(_v101({}, _v0), {}, {
            map: _v2
          })));
        }, [_v2]), _v3;
      }(_v2);
    return null !== _v3 ? _v1(_v3) : null;
  });
  var _v102 = {
      onCloseClick: "closeclick",
      onContentChanged: "content_changed",
      onDomReady: "domready",
      onPositionChanged: "position_changed",
      onZindexChanged: "zindex_changed"
    },
    _v103 = {
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      position(_v0, _v1) {
        _v0.setPosition(_v1);
      },
      zIndex(_v0, _v1) {
        _v0.setZIndex(_v1);
      }
    };
  (0, _v13.memo)(function (_v0) {
    var {
        children: _v1,
        anchor: _v2,
        options: _v3,
        position: _v4,
        zIndex: _v5,
        onCloseClick: _v6,
        onDomReady: _v7,
        onContentChanged: _v8,
        onPositionChanged: _v9,
        onZindexChanged: _v10,
        onLoad: _v11,
        onUnmount: _v12
      } = _v0,
      _v13 = (0, _v13.useContext)(_v19),
      [_v14, _v15] = (0, _v13.useState)(null),
      [_v16, _v17] = (0, _v13.useState)(null),
      [_v18, _v19] = (0, _v13.useState)(null),
      [_v20, _v21] = (0, _v13.useState)(null),
      [_v22, _v23] = (0, _v13.useState)(null),
      [_v24, _v25] = (0, _v13.useState)(null),
      _v26 = (0, _v13.useRef)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v14 && (_v14.close(), _v2 ? _v14.open(_v13, _v2) : _v14.getPosition() && _v14.open(_v13));
    }, [_v13, _v14, _v2]), (0, _v13.useEffect)(() => {
      _v3 && null !== _v14 && _v14.setOptions(_v3);
    }, [_v14, _v3]), (0, _v13.useEffect)(() => {
      _v4 && null !== _v14 && _v14.setPosition(_v4);
    }, [_v4]), (0, _v13.useEffect)(() => {
      "number" == typeof _v5 && null !== _v14 && _v14.setZIndex(_v5);
    }, [_v5]), (0, _v13.useEffect)(() => {
      _v14 && _v6 && (null !== _v16 && google.maps.event.removeListener(_v16), _v17(google.maps.event.addListener(_v14, "closeclick", _v6)));
    }, [_v6]), (0, _v13.useEffect)(() => {
      _v14 && _v7 && (null !== _v18 && google.maps.event.removeListener(_v18), _v19(google.maps.event.addListener(_v14, "domready", _v7)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      _v14 && _v8 && (null !== _v20 && google.maps.event.removeListener(_v20), _v21(google.maps.event.addListener(_v14, "content_changed", _v8)));
    }, [_v8]), (0, _v13.useEffect)(() => {
      _v14 && _v9 && (null !== _v22 && google.maps.event.removeListener(_v22), _v23(google.maps.event.addListener(_v14, "position_changed", _v9)));
    }, [_v9]), (0, _v13.useEffect)(() => {
      _v14 && _v10 && (null !== _v24 && google.maps.event.removeListener(_v24), _v25(google.maps.event.addListener(_v14, "zindex_changed", _v10)));
    }, [_v10]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.InfoWindow(_v3);
      return _v15(_v0), _v26.current = document.createElement("div"), _v6 && _v17(google.maps.event.addListener(_v0, "closeclick", _v6)), _v7 && _v19(google.maps.event.addListener(_v0, "domready", _v7)), _v8 && _v21(google.maps.event.addListener(_v0, "content_changed", _v8)), _v9 && _v23(google.maps.event.addListener(_v0, "position_changed", _v9)), _v10 && _v25(google.maps.event.addListener(_v0, "zindex_changed", _v10)), _v0.setContent(_v26.current), _v4 && _v0.setPosition(_v4), _v5 && _v0.setZIndex(_v5), _v2 ? _v0.open(_v13, _v2) : _v0.getPosition() ? _v0.open(_v13) : _v18(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."), _v11 && _v11(_v0), () => {
        _v16 && google.maps.event.removeListener(_v16), _v20 && google.maps.event.removeListener(_v20), _v18 && google.maps.event.removeListener(_v18), _v22 && google.maps.event.removeListener(_v22), _v24 && google.maps.event.removeListener(_v24), _v12 && _v12(_v0), _v0.close();
      };
    }, []), _v26.current ? (0, _v14.createPortal)(_v13.Children.only(_v1), _v26.current) : null;
  });
  class _v104 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "containerElement", null), _v16(this, "state", {
        infoWindow: null
      }), _v16(this, "open", (_v0, _v1) => {
        _v1 ? _v0.open(this.context, _v1) : _v0.getPosition() ? _v0.open(this.context) : _v18(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
      }), _v16(this, "setInfoWindowCallback", () => {
        null !== this.state.infoWindow && null !== this.containerElement && (this.state.infoWindow.setContent(this.containerElement), this.open(this.state.infoWindow, this.props.anchor), this.props.onLoad && this.props.onLoad(this.state.infoWindow));
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.InfoWindow(this.props.options);
      this.containerElement = document.createElement("div"), this.registeredEvents = _v22({
        updaterMap: _v103,
        eventMap: _v102,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(() => ({
        infoWindow: _v0
      }), this.setInfoWindowCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.infoWindow && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v103,
        eventMap: _v102,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.infoWindow
      }));
    }
    componentWillUnmount() {
      null !== this.state.infoWindow && (_v21(this.registeredEvents), this.props.onUnmount && this.props.onUnmount(this.state.infoWindow), this.state.infoWindow.close());
    }
    render() {
      return this.containerElement ? (0, _v14.createPortal)(_v13.Children.only(this.props.children), this.containerElement) : null;
    }
  }
  function _v105(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v106(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v105(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v105(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v104, "contextType", _v19);
  var _v107 = {
      onClick: "click",
      onDblClick: "dblclick",
      onDrag: "drag",
      onDragEnd: "dragend",
      onDragStart: "dragstart",
      onMouseDown: "mousedown",
      onMouseMove: "mousemove",
      onMouseOut: "mouseout",
      onMouseOver: "mouseover",
      onMouseUp: "mouseup",
      onRightClick: "rightclick"
    },
    _v108 = {
      draggable(_v0, _v1) {
        _v0.setDraggable(_v1);
      },
      editable(_v0, _v1) {
        _v0.setEditable(_v1);
      },
      map(_v0, _v1) {
        _v0.setMap(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      path(_v0, _v1) {
        _v0.setPath(_v1);
      },
      visible(_v0, _v1) {
        _v0.setVisible(_v1);
      }
    },
    _v109 = {};
  (0, _v13.memo)(function (_v0) {
    var {
        options: _v1,
        draggable: _v2,
        editable: _v3,
        visible: _v4,
        path: _v5,
        onDblClick: _v6,
        onDragEnd: _v7,
        onDragStart: _v8,
        onMouseDown: _v9,
        onMouseMove: _v10,
        onMouseOut: _v11,
        onMouseOver: _v12,
        onMouseUp: _v13,
        onRightClick: _v14,
        onClick: _v15,
        onDrag: _v16,
        onLoad: _v17,
        onUnmount: _v18
      } = _v0,
      _v19 = (0, _v13.useContext)(_v19),
      [_v20, _v21] = (0, _v13.useState)(null),
      [_v22, _v23] = (0, _v13.useState)(null),
      [_v24, _v25] = (0, _v13.useState)(null),
      [_v26, _v27] = (0, _v13.useState)(null),
      [_v28, _v29] = (0, _v13.useState)(null),
      [_v30, _v31] = (0, _v13.useState)(null),
      [_v32, _v33] = (0, _v13.useState)(null),
      [_v34, _v35] = (0, _v13.useState)(null),
      [_v36, _v37] = (0, _v13.useState)(null),
      [_v38, _v39] = (0, _v13.useState)(null),
      [_v40, _v41] = (0, _v13.useState)(null),
      [_v42, _v43] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v20 && _v20.setMap(_v19);
    }, [_v19]), (0, _v13.useEffect)(() => {
      void 0 !== _v1 && null !== _v20 && _v20.setOptions(_v1);
    }, [_v20, _v1]), (0, _v13.useEffect)(() => {
      void 0 !== _v2 && null !== _v20 && _v20.setDraggable(_v2);
    }, [_v20, _v2]), (0, _v13.useEffect)(() => {
      void 0 !== _v3 && null !== _v20 && _v20.setEditable(_v3);
    }, [_v20, _v3]), (0, _v13.useEffect)(() => {
      void 0 !== _v4 && null !== _v20 && _v20.setVisible(_v4);
    }, [_v20, _v4]), (0, _v13.useEffect)(() => {
      void 0 !== _v5 && null !== _v20 && _v20.setPath(_v5);
    }, [_v20, _v5]), (0, _v13.useEffect)(() => {
      _v20 && _v6 && (null !== _v22 && google.maps.event.removeListener(_v22), _v23(google.maps.event.addListener(_v20, "dblclick", _v6)));
    }, [_v6]), (0, _v13.useEffect)(() => {
      _v20 && _v7 && (null !== _v24 && google.maps.event.removeListener(_v24), _v25(google.maps.event.addListener(_v20, "dragend", _v7)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      _v20 && _v8 && (null !== _v26 && google.maps.event.removeListener(_v26), _v27(google.maps.event.addListener(_v20, "dragstart", _v8)));
    }, [_v8]), (0, _v13.useEffect)(() => {
      _v20 && _v9 && (null !== _v28 && google.maps.event.removeListener(_v28), _v29(google.maps.event.addListener(_v20, "mousedown", _v9)));
    }, [_v9]), (0, _v13.useEffect)(() => {
      _v20 && _v10 && (null !== _v30 && google.maps.event.removeListener(_v30), _v31(google.maps.event.addListener(_v20, "mousemove", _v10)));
    }, [_v10]), (0, _v13.useEffect)(() => {
      _v20 && _v11 && (null !== _v32 && google.maps.event.removeListener(_v32), _v33(google.maps.event.addListener(_v20, "mouseout", _v11)));
    }, [_v11]), (0, _v13.useEffect)(() => {
      _v20 && _v12 && (null !== _v34 && google.maps.event.removeListener(_v34), _v35(google.maps.event.addListener(_v20, "mouseover", _v12)));
    }, [_v12]), (0, _v13.useEffect)(() => {
      _v20 && _v13 && (null !== _v36 && google.maps.event.removeListener(_v36), _v37(google.maps.event.addListener(_v20, "mouseup", _v13)));
    }, [_v13]), (0, _v13.useEffect)(() => {
      _v20 && _v14 && (null !== _v38 && google.maps.event.removeListener(_v38), _v39(google.maps.event.addListener(_v20, "rightclick", _v14)));
    }, [_v14]), (0, _v13.useEffect)(() => {
      _v20 && _v15 && (null !== _v40 && google.maps.event.removeListener(_v40), _v41(google.maps.event.addListener(_v20, "click", _v15)));
    }, [_v15]), (0, _v13.useEffect)(() => {
      _v20 && _v16 && (null !== _v42 && google.maps.event.removeListener(_v42), _v43(google.maps.event.addListener(_v20, "drag", _v16)));
    }, [_v16]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.Polyline(_v106(_v106({}, _v1 || _v109), {}, {
        map: _v19
      }));
      return _v5 && _v0.setPath(_v5), void 0 !== _v4 && _v0.setVisible(_v4), void 0 !== _v3 && _v0.setEditable(_v3), void 0 !== _v2 && _v0.setDraggable(_v2), _v6 && _v23(google.maps.event.addListener(_v0, "dblclick", _v6)), _v7 && _v25(google.maps.event.addListener(_v0, "dragend", _v7)), _v8 && _v27(google.maps.event.addListener(_v0, "dragstart", _v8)), _v9 && _v29(google.maps.event.addListener(_v0, "mousedown", _v9)), _v10 && _v31(google.maps.event.addListener(_v0, "mousemove", _v10)), _v11 && _v33(google.maps.event.addListener(_v0, "mouseout", _v11)), _v12 && _v35(google.maps.event.addListener(_v0, "mouseover", _v12)), _v13 && _v37(google.maps.event.addListener(_v0, "mouseup", _v13)), _v14 && _v39(google.maps.event.addListener(_v0, "rightclick", _v14)), _v15 && _v41(google.maps.event.addListener(_v0, "click", _v15)), _v16 && _v43(google.maps.event.addListener(_v0, "drag", _v16)), _v21(_v0), _v17 && _v17(_v0), () => {
        null !== _v22 && google.maps.event.removeListener(_v22), null !== _v24 && google.maps.event.removeListener(_v24), null !== _v26 && google.maps.event.removeListener(_v26), null !== _v28 && google.maps.event.removeListener(_v28), null !== _v30 && google.maps.event.removeListener(_v30), null !== _v32 && google.maps.event.removeListener(_v32), null !== _v34 && google.maps.event.removeListener(_v34), null !== _v36 && google.maps.event.removeListener(_v36), null !== _v38 && google.maps.event.removeListener(_v38), null !== _v40 && google.maps.event.removeListener(_v40), _v18 && _v18(_v0), _v0.setMap(null);
      };
    }, []), null;
  });
  class _v110 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        polyline: null
      }), _v16(this, "setPolylineCallback", () => {
        null !== this.state.polyline && this.props.onLoad && this.props.onLoad(this.state.polyline);
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.Polyline(_v106(_v106({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = _v22({
        updaterMap: _v108,
        eventMap: _v107,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          polyline: _v0
        };
      }, this.setPolylineCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.polyline && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v108,
        eventMap: _v107,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.polyline
      }));
    }
    componentWillUnmount() {
      null !== this.state.polyline && (this.props.onUnmount && this.props.onUnmount(this.state.polyline), _v21(this.registeredEvents), this.state.polyline.setMap(null));
    }
    render() {
      return null;
    }
  }
  function _v111(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v112(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v111(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v111(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v110, "contextType", _v19);
  var _v113 = {
      onClick: "click",
      onDblClick: "dblclick",
      onDrag: "drag",
      onDragEnd: "dragend",
      onDragStart: "dragstart",
      onMouseDown: "mousedown",
      onMouseMove: "mousemove",
      onMouseOut: "mouseout",
      onMouseOver: "mouseover",
      onMouseUp: "mouseup",
      onRightClick: "rightclick"
    },
    _v114 = {
      draggable(_v0, _v1) {
        _v0.setDraggable(_v1);
      },
      editable(_v0, _v1) {
        _v0.setEditable(_v1);
      },
      map(_v0, _v1) {
        _v0.setMap(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      path(_v0, _v1) {
        _v0.setPath(_v1);
      },
      paths(_v0, _v1) {
        _v0.setPaths(_v1);
      },
      visible(_v0, _v1) {
        _v0.setVisible(_v1);
      }
    };
  (0, _v13.memo)(function (_v0) {
    var {
        options: _v1,
        draggable: _v2,
        editable: _v3,
        visible: _v4,
        path: _v5,
        paths: _v6,
        onDblClick: _v7,
        onDragEnd: _v8,
        onDragStart: _v9,
        onMouseDown: _v10,
        onMouseMove: _v11,
        onMouseOut: _v12,
        onMouseOver: _v13,
        onMouseUp: _v14,
        onRightClick: _v15,
        onClick: _v16,
        onDrag: _v17,
        onLoad: _v18,
        onUnmount: _v19,
        onEdit: _v20
      } = _v0,
      _v21 = (0, _v13.useContext)(_v19),
      [_v22, _v23] = (0, _v13.useState)(null),
      [_v24, _v25] = (0, _v13.useState)(null),
      [_v26, _v27] = (0, _v13.useState)(null),
      [_v28, _v29] = (0, _v13.useState)(null),
      [_v30, _v31] = (0, _v13.useState)(null),
      [_v32, _v33] = (0, _v13.useState)(null),
      [_v34, _v35] = (0, _v13.useState)(null),
      [_v36, _v37] = (0, _v13.useState)(null),
      [_v38, _v39] = (0, _v13.useState)(null),
      [_v40, _v41] = (0, _v13.useState)(null),
      [_v42, _v43] = (0, _v13.useState)(null),
      [_v44, _v45] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v22 && _v22.setMap(_v21);
    }, [_v21]), (0, _v13.useEffect)(() => {
      void 0 !== _v1 && null !== _v22 && _v22.setOptions(_v1);
    }, [_v22, _v1]), (0, _v13.useEffect)(() => {
      void 0 !== _v2 && null !== _v22 && _v22.setDraggable(_v2);
    }, [_v22, _v2]), (0, _v13.useEffect)(() => {
      void 0 !== _v3 && null !== _v22 && _v22.setEditable(_v3);
    }, [_v22, _v3]), (0, _v13.useEffect)(() => {
      void 0 !== _v4 && null !== _v22 && _v22.setVisible(_v4);
    }, [_v22, _v4]), (0, _v13.useEffect)(() => {
      void 0 !== _v5 && null !== _v22 && _v22.setPath(_v5);
    }, [_v22, _v5]), (0, _v13.useEffect)(() => {
      void 0 !== _v6 && null !== _v22 && _v22.setPaths(_v6);
    }, [_v22, _v6]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v7 && (null !== _v24 && google.maps.event.removeListener(_v24), _v25(google.maps.event.addListener(_v22, "dblclick", _v7)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      _v22 && (google.maps.event.addListener(_v22.getPath(), "insert_at", () => {
        null == _v20 || _v20(_v22);
      }), google.maps.event.addListener(_v22.getPath(), "set_at", () => {
        null == _v20 || _v20(_v22);
      }), google.maps.event.addListener(_v22.getPath(), "remove_at", () => {
        null == _v20 || _v20(_v22);
      }));
    }, [_v22, _v20]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v8 && (null !== _v26 && google.maps.event.removeListener(_v26), _v27(google.maps.event.addListener(_v22, "dragend", _v8)));
    }, [_v8]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v9 && (null !== _v28 && google.maps.event.removeListener(_v28), _v29(google.maps.event.addListener(_v22, "dragstart", _v9)));
    }, [_v9]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v10 && (null !== _v30 && google.maps.event.removeListener(_v30), _v31(google.maps.event.addListener(_v22, "mousedown", _v10)));
    }, [_v10]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v11 && (null !== _v32 && google.maps.event.removeListener(_v32), _v33(google.maps.event.addListener(_v22, "mousemove", _v11)));
    }, [_v11]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v12 && (null !== _v34 && google.maps.event.removeListener(_v34), _v35(google.maps.event.addListener(_v22, "mouseout", _v12)));
    }, [_v12]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v13 && (null !== _v36 && google.maps.event.removeListener(_v36), _v37(google.maps.event.addListener(_v22, "mouseover", _v13)));
    }, [_v13]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v14 && (null !== _v38 && google.maps.event.removeListener(_v38), _v39(google.maps.event.addListener(_v22, "mouseup", _v14)));
    }, [_v14]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v15 && (null !== _v40 && google.maps.event.removeListener(_v40), _v41(google.maps.event.addListener(_v22, "rightclick", _v15)));
    }, [_v15]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v16 && (null !== _v42 && google.maps.event.removeListener(_v42), _v43(google.maps.event.addListener(_v22, "click", _v16)));
    }, [_v16]), (0, _v13.useEffect)(() => {
      _v22 && "function" == typeof _v17 && (null !== _v44 && google.maps.event.removeListener(_v44), _v45(google.maps.event.addListener(_v22, "drag", _v17)));
    }, [_v17]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.Polygon(_v112(_v112({}, _v1), {}, {
        map: _v21
      }));
      return _v5 && _v0.setPath(_v5), _v6 && _v0.setPaths(_v6), void 0 !== _v4 && _v0.setVisible(_v4), void 0 !== _v3 && _v0.setEditable(_v3), void 0 !== _v2 && _v0.setDraggable(_v2), _v7 && _v25(google.maps.event.addListener(_v0, "dblclick", _v7)), _v8 && _v27(google.maps.event.addListener(_v0, "dragend", _v8)), _v9 && _v29(google.maps.event.addListener(_v0, "dragstart", _v9)), _v10 && _v31(google.maps.event.addListener(_v0, "mousedown", _v10)), _v11 && _v33(google.maps.event.addListener(_v0, "mousemove", _v11)), _v12 && _v35(google.maps.event.addListener(_v0, "mouseout", _v12)), _v13 && _v37(google.maps.event.addListener(_v0, "mouseover", _v13)), _v14 && _v39(google.maps.event.addListener(_v0, "mouseup", _v14)), _v15 && _v41(google.maps.event.addListener(_v0, "rightclick", _v15)), _v16 && _v43(google.maps.event.addListener(_v0, "click", _v16)), _v17 && _v45(google.maps.event.addListener(_v0, "drag", _v17)), _v23(_v0), _v18 && _v18(_v0), () => {
        null !== _v24 && google.maps.event.removeListener(_v24), null !== _v26 && google.maps.event.removeListener(_v26), null !== _v28 && google.maps.event.removeListener(_v28), null !== _v30 && google.maps.event.removeListener(_v30), null !== _v32 && google.maps.event.removeListener(_v32), null !== _v34 && google.maps.event.removeListener(_v34), null !== _v36 && google.maps.event.removeListener(_v36), null !== _v38 && google.maps.event.removeListener(_v38), null !== _v40 && google.maps.event.removeListener(_v40), null !== _v42 && google.maps.event.removeListener(_v42), _v19 && _v19(_v0), _v0.setMap(null);
      };
    }, []), null;
  });
  class _v115 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []);
    }
    componentDidMount() {
      var _v0 = this.props.options || {};
      this.polygon = new google.maps.Polygon(_v0), this.polygon.setMap(this.context), this.registeredEvents = _v22({
        updaterMap: _v114,
        eventMap: _v113,
        prevProps: {},
        nextProps: this.props,
        instance: this.polygon
      }), this.props.onLoad && this.props.onLoad(this.polygon);
    }
    componentDidUpdate(_v0) {
      this.polygon && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v114,
        eventMap: _v113,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.polygon
      }));
    }
    componentWillUnmount() {
      this.polygon && (this.props.onUnmount && this.props.onUnmount(this.polygon), _v21(this.registeredEvents), this.polygon && this.polygon.setMap(null));
    }
    render() {
      return null;
    }
  }
  function _v116(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v117(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v116(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v116(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v115, "contextType", _v19);
  var _v118 = {
      onBoundsChanged: "bounds_changed",
      onClick: "click",
      onDblClick: "dblclick",
      onDrag: "drag",
      onDragEnd: "dragend",
      onDragStart: "dragstart",
      onMouseDown: "mousedown",
      onMouseMove: "mousemove",
      onMouseOut: "mouseout",
      onMouseOver: "mouseover",
      onMouseUp: "mouseup",
      onRightClick: "rightclick"
    },
    _v119 = {
      bounds(_v0, _v1) {
        _v0.setBounds(_v1);
      },
      draggable(_v0, _v1) {
        _v0.setDraggable(_v1);
      },
      editable(_v0, _v1) {
        _v0.setEditable(_v1);
      },
      map(_v0, _v1) {
        _v0.setMap(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      visible(_v0, _v1) {
        _v0.setVisible(_v1);
      }
    };
  (0, _v13.memo)(function (_v0) {
    var {
        options: _v1,
        bounds: _v2,
        draggable: _v3,
        editable: _v4,
        visible: _v5,
        onDblClick: _v6,
        onDragEnd: _v7,
        onDragStart: _v8,
        onMouseDown: _v9,
        onMouseMove: _v10,
        onMouseOut: _v11,
        onMouseOver: _v12,
        onMouseUp: _v13,
        onRightClick: _v14,
        onClick: _v15,
        onDrag: _v16,
        onBoundsChanged: _v17,
        onLoad: _v18,
        onUnmount: _v19
      } = _v0,
      _v20 = (0, _v13.useContext)(_v19),
      [_v21, _v22] = (0, _v13.useState)(null),
      [_v23, _v24] = (0, _v13.useState)(null),
      [_v25, _v26] = (0, _v13.useState)(null),
      [_v27, _v28] = (0, _v13.useState)(null),
      [_v29, _v30] = (0, _v13.useState)(null),
      [_v31, _v32] = (0, _v13.useState)(null),
      [_v33, _v34] = (0, _v13.useState)(null),
      [_v35, _v36] = (0, _v13.useState)(null),
      [_v37, _v38] = (0, _v13.useState)(null),
      [_v39, _v40] = (0, _v13.useState)(null),
      [_v41, _v42] = (0, _v13.useState)(null),
      [_v43, _v44] = (0, _v13.useState)(null),
      [_v45, _v46] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v21 && _v21.setMap(_v20);
    }, [_v20]), (0, _v13.useEffect)(() => {
      void 0 !== _v1 && null !== _v21 && _v21.setOptions(_v1);
    }, [_v21, _v1]), (0, _v13.useEffect)(() => {
      void 0 !== _v3 && null !== _v21 && _v21.setDraggable(_v3);
    }, [_v21, _v3]), (0, _v13.useEffect)(() => {
      void 0 !== _v4 && null !== _v21 && _v21.setEditable(_v4);
    }, [_v21, _v4]), (0, _v13.useEffect)(() => {
      void 0 !== _v5 && null !== _v21 && _v21.setVisible(_v5);
    }, [_v21, _v5]), (0, _v13.useEffect)(() => {
      void 0 !== _v2 && null !== _v21 && _v21.setBounds(_v2);
    }, [_v21, _v2]), (0, _v13.useEffect)(() => {
      _v21 && _v6 && (null !== _v23 && google.maps.event.removeListener(_v23), _v24(google.maps.event.addListener(_v21, "dblclick", _v6)));
    }, [_v6]), (0, _v13.useEffect)(() => {
      _v21 && _v7 && (null !== _v25 && google.maps.event.removeListener(_v25), _v26(google.maps.event.addListener(_v21, "dragend", _v7)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      _v21 && _v8 && (null !== _v27 && google.maps.event.removeListener(_v27), _v28(google.maps.event.addListener(_v21, "dragstart", _v8)));
    }, [_v8]), (0, _v13.useEffect)(() => {
      _v21 && _v9 && (null !== _v29 && google.maps.event.removeListener(_v29), _v30(google.maps.event.addListener(_v21, "mousedown", _v9)));
    }, [_v9]), (0, _v13.useEffect)(() => {
      _v21 && _v10 && (null !== _v31 && google.maps.event.removeListener(_v31), _v32(google.maps.event.addListener(_v21, "mousemove", _v10)));
    }, [_v10]), (0, _v13.useEffect)(() => {
      _v21 && _v11 && (null !== _v33 && google.maps.event.removeListener(_v33), _v34(google.maps.event.addListener(_v21, "mouseout", _v11)));
    }, [_v11]), (0, _v13.useEffect)(() => {
      _v21 && _v12 && (null !== _v35 && google.maps.event.removeListener(_v35), _v36(google.maps.event.addListener(_v21, "mouseover", _v12)));
    }, [_v12]), (0, _v13.useEffect)(() => {
      _v21 && _v13 && (null !== _v37 && google.maps.event.removeListener(_v37), _v38(google.maps.event.addListener(_v21, "mouseup", _v13)));
    }, [_v13]), (0, _v13.useEffect)(() => {
      _v21 && _v14 && (null !== _v39 && google.maps.event.removeListener(_v39), _v40(google.maps.event.addListener(_v21, "rightclick", _v14)));
    }, [_v14]), (0, _v13.useEffect)(() => {
      _v21 && _v15 && (null !== _v41 && google.maps.event.removeListener(_v41), _v42(google.maps.event.addListener(_v21, "click", _v15)));
    }, [_v15]), (0, _v13.useEffect)(() => {
      _v21 && _v16 && (null !== _v43 && google.maps.event.removeListener(_v43), _v44(google.maps.event.addListener(_v21, "drag", _v16)));
    }, [_v16]), (0, _v13.useEffect)(() => {
      _v21 && _v17 && (null !== _v45 && google.maps.event.removeListener(_v45), _v46(google.maps.event.addListener(_v21, "bounds_changed", _v17)));
    }, [_v17]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.Rectangle(_v117(_v117({}, _v1), {}, {
        map: _v20
      }));
      return void 0 !== _v5 && _v0.setVisible(_v5), void 0 !== _v4 && _v0.setEditable(_v4), void 0 !== _v3 && _v0.setDraggable(_v3), void 0 !== _v2 && _v0.setBounds(_v2), _v6 && _v24(google.maps.event.addListener(_v0, "dblclick", _v6)), _v7 && _v26(google.maps.event.addListener(_v0, "dragend", _v7)), _v8 && _v28(google.maps.event.addListener(_v0, "dragstart", _v8)), _v9 && _v30(google.maps.event.addListener(_v0, "mousedown", _v9)), _v10 && _v32(google.maps.event.addListener(_v0, "mousemove", _v10)), _v11 && _v34(google.maps.event.addListener(_v0, "mouseout", _v11)), _v12 && _v36(google.maps.event.addListener(_v0, "mouseover", _v12)), _v13 && _v38(google.maps.event.addListener(_v0, "mouseup", _v13)), _v14 && _v40(google.maps.event.addListener(_v0, "rightclick", _v14)), _v15 && _v42(google.maps.event.addListener(_v0, "click", _v15)), _v16 && _v44(google.maps.event.addListener(_v0, "drag", _v16)), _v17 && _v46(google.maps.event.addListener(_v0, "bounds_changed", _v17)), _v22(_v0), _v18 && _v18(_v0), () => {
        null !== _v23 && google.maps.event.removeListener(_v23), null !== _v25 && google.maps.event.removeListener(_v25), null !== _v27 && google.maps.event.removeListener(_v27), null !== _v29 && google.maps.event.removeListener(_v29), null !== _v31 && google.maps.event.removeListener(_v31), null !== _v33 && google.maps.event.removeListener(_v33), null !== _v35 && google.maps.event.removeListener(_v35), null !== _v37 && google.maps.event.removeListener(_v37), null !== _v39 && google.maps.event.removeListener(_v39), null !== _v41 && google.maps.event.removeListener(_v41), null !== _v43 && google.maps.event.removeListener(_v43), null !== _v45 && google.maps.event.removeListener(_v45), _v19 && _v19(_v0), _v0.setMap(null);
      };
    }, []), null;
  });
  class _v120 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        rectangle: null
      }), _v16(this, "setRectangleCallback", () => {
        null !== this.state.rectangle && this.props.onLoad && this.props.onLoad(this.state.rectangle);
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.Rectangle(_v117(_v117({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = _v22({
        updaterMap: _v119,
        eventMap: _v118,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          rectangle: _v0
        };
      }, this.setRectangleCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.rectangle && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v119,
        eventMap: _v118,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.rectangle
      }));
    }
    componentWillUnmount() {
      null !== this.state.rectangle && (this.props.onUnmount && this.props.onUnmount(this.state.rectangle), _v21(this.registeredEvents), this.state.rectangle.setMap(null));
    }
    render() {
      return null;
    }
  }
  function _v121(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v122(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v121(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v121(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v120, "contextType", _v19);
  var _v123 = {
      onCenterChanged: "center_changed",
      onRadiusChanged: "radius_changed",
      onClick: "click",
      onDblClick: "dblclick",
      onDrag: "drag",
      onDragEnd: "dragend",
      onDragStart: "dragstart",
      onMouseDown: "mousedown",
      onMouseMove: "mousemove",
      onMouseOut: "mouseout",
      onMouseOver: "mouseover",
      onMouseUp: "mouseup",
      onRightClick: "rightclick"
    },
    _v124 = {
      center(_v0, _v1) {
        _v0.setCenter(_v1);
      },
      draggable(_v0, _v1) {
        _v0.setDraggable(_v1);
      },
      editable(_v0, _v1) {
        _v0.setEditable(_v1);
      },
      map(_v0, _v1) {
        _v0.setMap(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      radius(_v0, _v1) {
        _v0.setRadius(_v1);
      },
      visible(_v0, _v1) {
        _v0.setVisible(_v1);
      }
    },
    _v125 = {};
  (0, _v13.memo)(function (_v0) {
    var {
        options: _v1,
        center: _v2,
        radius: _v3,
        draggable: _v4,
        editable: _v5,
        visible: _v6,
        onDblClick: _v7,
        onDragEnd: _v8,
        onDragStart: _v9,
        onMouseDown: _v10,
        onMouseMove: _v11,
        onMouseOut: _v12,
        onMouseOver: _v13,
        onMouseUp: _v14,
        onRightClick: _v15,
        onClick: _v16,
        onDrag: _v17,
        onCenterChanged: _v18,
        onRadiusChanged: _v19,
        onLoad: _v20,
        onUnmount: _v21
      } = _v0,
      _v22 = (0, _v13.useContext)(_v19),
      [_v23, _v24] = (0, _v13.useState)(null),
      [_v25, _v26] = (0, _v13.useState)(null),
      [_v27, _v28] = (0, _v13.useState)(null),
      [_v29, _v30] = (0, _v13.useState)(null),
      [_v31, _v32] = (0, _v13.useState)(null),
      [_v33, _v34] = (0, _v13.useState)(null),
      [_v35, _v36] = (0, _v13.useState)(null),
      [_v37, _v38] = (0, _v13.useState)(null),
      [_v39, _v40] = (0, _v13.useState)(null),
      [_v41, _v42] = (0, _v13.useState)(null),
      [_v43, _v44] = (0, _v13.useState)(null),
      [_v45, _v46] = (0, _v13.useState)(null),
      [_v47, _v48] = (0, _v13.useState)(null),
      [_v49, _v50] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v23 && _v23.setMap(_v22);
    }, [_v22]), (0, _v13.useEffect)(() => {
      void 0 !== _v1 && null !== _v23 && _v23.setOptions(_v1);
    }, [_v23, _v1]), (0, _v13.useEffect)(() => {
      void 0 !== _v4 && null !== _v23 && _v23.setDraggable(_v4);
    }, [_v23, _v4]), (0, _v13.useEffect)(() => {
      void 0 !== _v5 && null !== _v23 && _v23.setEditable(_v5);
    }, [_v23, _v5]), (0, _v13.useEffect)(() => {
      void 0 !== _v6 && null !== _v23 && _v23.setVisible(_v6);
    }, [_v23, _v6]), (0, _v13.useEffect)(() => {
      "number" == typeof _v3 && null !== _v23 && _v23.setRadius(_v3);
    }, [_v23, _v3]), (0, _v13.useEffect)(() => {
      void 0 !== _v2 && null !== _v23 && _v23.setCenter(_v2);
    }, [_v23, _v2]), (0, _v13.useEffect)(() => {
      _v23 && _v7 && (null !== _v25 && google.maps.event.removeListener(_v25), _v26(google.maps.event.addListener(_v23, "dblclick", _v7)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      _v23 && _v8 && (null !== _v27 && google.maps.event.removeListener(_v27), _v28(google.maps.event.addListener(_v23, "dragend", _v8)));
    }, [_v8]), (0, _v13.useEffect)(() => {
      _v23 && _v9 && (null !== _v29 && google.maps.event.removeListener(_v29), _v30(google.maps.event.addListener(_v23, "dragstart", _v9)));
    }, [_v9]), (0, _v13.useEffect)(() => {
      _v23 && _v10 && (null !== _v31 && google.maps.event.removeListener(_v31), _v32(google.maps.event.addListener(_v23, "mousedown", _v10)));
    }, [_v10]), (0, _v13.useEffect)(() => {
      _v23 && _v11 && (null !== _v33 && google.maps.event.removeListener(_v33), _v34(google.maps.event.addListener(_v23, "mousemove", _v11)));
    }, [_v11]), (0, _v13.useEffect)(() => {
      _v23 && _v12 && (null !== _v35 && google.maps.event.removeListener(_v35), _v36(google.maps.event.addListener(_v23, "mouseout", _v12)));
    }, [_v12]), (0, _v13.useEffect)(() => {
      _v23 && _v13 && (null !== _v37 && google.maps.event.removeListener(_v37), _v38(google.maps.event.addListener(_v23, "mouseover", _v13)));
    }, [_v13]), (0, _v13.useEffect)(() => {
      _v23 && _v14 && (null !== _v39 && google.maps.event.removeListener(_v39), _v40(google.maps.event.addListener(_v23, "mouseup", _v14)));
    }, [_v14]), (0, _v13.useEffect)(() => {
      _v23 && _v15 && (null !== _v41 && google.maps.event.removeListener(_v41), _v42(google.maps.event.addListener(_v23, "rightclick", _v15)));
    }, [_v15]), (0, _v13.useEffect)(() => {
      _v23 && _v16 && (null !== _v43 && google.maps.event.removeListener(_v43), _v44(google.maps.event.addListener(_v23, "click", _v16)));
    }, [_v16]), (0, _v13.useEffect)(() => {
      _v23 && _v17 && (null !== _v45 && google.maps.event.removeListener(_v45), _v46(google.maps.event.addListener(_v23, "drag", _v17)));
    }, [_v17]), (0, _v13.useEffect)(() => {
      _v23 && _v18 && (null !== _v47 && google.maps.event.removeListener(_v47), _v48(google.maps.event.addListener(_v23, "center_changed", _v18)));
    }, [_v16]), (0, _v13.useEffect)(() => {
      _v23 && _v19 && (null !== _v49 && google.maps.event.removeListener(_v49), _v50(google.maps.event.addListener(_v23, "radius_changed", _v19)));
    }, [_v19]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.Circle(_v122(_v122({}, _v1 || _v125), {}, {
        map: _v22
      }));
      return "number" == typeof _v3 && _v0.setRadius(_v3), void 0 !== _v2 && _v0.setCenter(_v2), "number" == typeof _v3 && _v0.setRadius(_v3), void 0 !== _v6 && _v0.setVisible(_v6), void 0 !== _v5 && _v0.setEditable(_v5), void 0 !== _v4 && _v0.setDraggable(_v4), _v7 && _v26(google.maps.event.addListener(_v0, "dblclick", _v7)), _v8 && _v28(google.maps.event.addListener(_v0, "dragend", _v8)), _v9 && _v30(google.maps.event.addListener(_v0, "dragstart", _v9)), _v10 && _v32(google.maps.event.addListener(_v0, "mousedown", _v10)), _v11 && _v34(google.maps.event.addListener(_v0, "mousemove", _v11)), _v12 && _v36(google.maps.event.addListener(_v0, "mouseout", _v12)), _v13 && _v38(google.maps.event.addListener(_v0, "mouseover", _v13)), _v14 && _v40(google.maps.event.addListener(_v0, "mouseup", _v14)), _v15 && _v42(google.maps.event.addListener(_v0, "rightclick", _v15)), _v16 && _v44(google.maps.event.addListener(_v0, "click", _v16)), _v17 && _v46(google.maps.event.addListener(_v0, "drag", _v17)), _v18 && _v48(google.maps.event.addListener(_v0, "center_changed", _v18)), _v19 && _v50(google.maps.event.addListener(_v0, "radius_changed", _v19)), _v24(_v0), _v20 && _v20(_v0), () => {
        null !== _v25 && google.maps.event.removeListener(_v25), null !== _v27 && google.maps.event.removeListener(_v27), null !== _v29 && google.maps.event.removeListener(_v29), null !== _v31 && google.maps.event.removeListener(_v31), null !== _v33 && google.maps.event.removeListener(_v33), null !== _v35 && google.maps.event.removeListener(_v35), null !== _v37 && google.maps.event.removeListener(_v37), null !== _v39 && google.maps.event.removeListener(_v39), null !== _v41 && google.maps.event.removeListener(_v41), null !== _v43 && google.maps.event.removeListener(_v43), null !== _v47 && google.maps.event.removeListener(_v47), null !== _v49 && google.maps.event.removeListener(_v49), _v21 && _v21(_v0), _v0.setMap(null);
      };
    }, []), null;
  });
  class _v126 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        circle: null
      }), _v16(this, "setCircleCallback", () => {
        null !== this.state.circle && this.props.onLoad && this.props.onLoad(this.state.circle);
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.Circle(_v122(_v122({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = _v22({
        updaterMap: _v124,
        eventMap: _v123,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          circle: _v0
        };
      }, this.setCircleCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.circle && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v124,
        eventMap: _v123,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.circle
      }));
    }
    componentWillUnmount() {
      if (null !== this.state.circle) {
        var _v0;
        this.props.onUnmount && this.props.onUnmount(this.state.circle), _v21(this.registeredEvents), null == (_v0 = this.state.circle) || _v0.setMap(null);
      }
    }
    render() {
      return null;
    }
  }
  function _v127(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v128(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v127(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v127(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v126, "contextType", _v19);
  var _v129 = {
      onClick: "click",
      onDblClick: "dblclick",
      onMouseDown: "mousedown",
      onMouseOut: "mouseout",
      onMouseOver: "mouseover",
      onMouseUp: "mouseup",
      onRightClick: "rightclick",
      onAddFeature: "addfeature",
      onRemoveFeature: "removefeature",
      onRemoveProperty: "removeproperty",
      onSetGeometry: "setgeometry",
      onSetProperty: "setproperty"
    },
    _v130 = {
      add(_v0, _v1) {
        _v0.add(_v1);
      },
      addgeojson(_v0, _v1, _v2) {
        _v0.addGeoJson(_v1, _v2);
      },
      contains(_v0, _v1) {
        _v0.contains(_v1);
      },
      foreach(_v0, _v1) {
        _v0.forEach(_v1);
      },
      loadgeojson(_v0, _v1, _v2, _v3) {
        _v0.loadGeoJson(_v1, _v2, _v3);
      },
      overridestyle(_v0, _v1, _v2) {
        _v0.overrideStyle(_v1, _v2);
      },
      remove(_v0, _v1) {
        _v0.remove(_v1);
      },
      revertstyle(_v0, _v1) {
        _v0.revertStyle(_v1);
      },
      controlposition(_v0, _v1) {
        _v0.setControlPosition(_v1);
      },
      controls(_v0, _v1) {
        _v0.setControls(_v1);
      },
      drawingmode(_v0, _v1) {
        _v0.setDrawingMode(_v1);
      },
      map(_v0, _v1) {
        _v0.setMap(_v1);
      },
      style(_v0, _v1) {
        _v0.setStyle(_v1);
      },
      togeojson(_v0, _v1) {
        _v0.toGeoJson(_v1);
      }
    };
  (0, _v13.memo)(function (_v0) {
    var {
        options: _v1,
        onClick: _v2,
        onDblClick: _v3,
        onMouseDown: _v4,
        onMouseMove: _v5,
        onMouseOut: _v6,
        onMouseOver: _v7,
        onMouseUp: _v8,
        onRightClick: _v9,
        onAddFeature: _v10,
        onRemoveFeature: _v11,
        onRemoveProperty: _v12,
        onSetGeometry: _v13,
        onSetProperty: _v14,
        onLoad: _v15,
        onUnmount: _v16
      } = _v0,
      _v17 = (0, _v13.useContext)(_v19),
      [_v18, _v19] = (0, _v13.useState)(null),
      [_v20, _v21] = (0, _v13.useState)(null),
      [_v22, _v23] = (0, _v13.useState)(null),
      [_v24, _v25] = (0, _v13.useState)(null),
      [_v26, _v27] = (0, _v13.useState)(null),
      [_v28, _v29] = (0, _v13.useState)(null),
      [_v30, _v31] = (0, _v13.useState)(null),
      [_v32, _v33] = (0, _v13.useState)(null),
      [_v34, _v35] = (0, _v13.useState)(null),
      [_v36, _v37] = (0, _v13.useState)(null),
      [_v38, _v39] = (0, _v13.useState)(null),
      [_v40, _v41] = (0, _v13.useState)(null),
      [_v42, _v43] = (0, _v13.useState)(null),
      [_v44, _v45] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      null !== _v18 && _v18.setMap(_v17);
    }, [_v17]), (0, _v13.useEffect)(() => {
      _v18 && _v3 && (null !== _v20 && google.maps.event.removeListener(_v20), _v21(google.maps.event.addListener(_v18, "dblclick", _v3)));
    }, [_v3]), (0, _v13.useEffect)(() => {
      _v18 && _v4 && (null !== _v22 && google.maps.event.removeListener(_v22), _v23(google.maps.event.addListener(_v18, "mousedown", _v4)));
    }, [_v4]), (0, _v13.useEffect)(() => {
      _v18 && _v5 && (null !== _v24 && google.maps.event.removeListener(_v24), _v25(google.maps.event.addListener(_v18, "mousemove", _v5)));
    }, [_v5]), (0, _v13.useEffect)(() => {
      _v18 && _v6 && (null !== _v26 && google.maps.event.removeListener(_v26), _v27(google.maps.event.addListener(_v18, "mouseout", _v6)));
    }, [_v6]), (0, _v13.useEffect)(() => {
      _v18 && _v7 && (null !== _v28 && google.maps.event.removeListener(_v28), _v29(google.maps.event.addListener(_v18, "mouseover", _v7)));
    }, [_v7]), (0, _v13.useEffect)(() => {
      _v18 && _v8 && (null !== _v30 && google.maps.event.removeListener(_v30), _v31(google.maps.event.addListener(_v18, "mouseup", _v8)));
    }, [_v8]), (0, _v13.useEffect)(() => {
      _v18 && _v9 && (null !== _v32 && google.maps.event.removeListener(_v32), _v33(google.maps.event.addListener(_v18, "rightclick", _v9)));
    }, [_v9]), (0, _v13.useEffect)(() => {
      _v18 && _v2 && (null !== _v34 && google.maps.event.removeListener(_v34), _v35(google.maps.event.addListener(_v18, "click", _v2)));
    }, [_v2]), (0, _v13.useEffect)(() => {
      _v18 && _v10 && (null !== _v36 && google.maps.event.removeListener(_v36), _v37(google.maps.event.addListener(_v18, "addfeature", _v10)));
    }, [_v10]), (0, _v13.useEffect)(() => {
      _v18 && _v11 && (null !== _v38 && google.maps.event.removeListener(_v38), _v39(google.maps.event.addListener(_v18, "removefeature", _v11)));
    }, [_v11]), (0, _v13.useEffect)(() => {
      _v18 && _v12 && (null !== _v40 && google.maps.event.removeListener(_v40), _v41(google.maps.event.addListener(_v18, "removeproperty", _v12)));
    }, [_v12]), (0, _v13.useEffect)(() => {
      _v18 && _v13 && (null !== _v42 && google.maps.event.removeListener(_v42), _v43(google.maps.event.addListener(_v18, "setgeometry", _v13)));
    }, [_v13]), (0, _v13.useEffect)(() => {
      _v18 && _v14 && (null !== _v44 && google.maps.event.removeListener(_v44), _v45(google.maps.event.addListener(_v18, "setproperty", _v14)));
    }, [_v14]), (0, _v13.useEffect)(() => {
      if (null !== _v17) {
        var _v0 = new google.maps.Data(_v128(_v128({}, _v1), {}, {
          map: _v17
        }));
        _v3 && _v21(google.maps.event.addListener(_v0, "dblclick", _v3)), _v4 && _v23(google.maps.event.addListener(_v0, "mousedown", _v4)), _v5 && _v25(google.maps.event.addListener(_v0, "mousemove", _v5)), _v6 && _v27(google.maps.event.addListener(_v0, "mouseout", _v6)), _v7 && _v29(google.maps.event.addListener(_v0, "mouseover", _v7)), _v8 && _v31(google.maps.event.addListener(_v0, "mouseup", _v8)), _v9 && _v33(google.maps.event.addListener(_v0, "rightclick", _v9)), _v2 && _v35(google.maps.event.addListener(_v0, "click", _v2)), _v10 && _v37(google.maps.event.addListener(_v0, "addfeature", _v10)), _v11 && _v39(google.maps.event.addListener(_v0, "removefeature", _v11)), _v12 && _v41(google.maps.event.addListener(_v0, "removeproperty", _v12)), _v13 && _v43(google.maps.event.addListener(_v0, "setgeometry", _v13)), _v14 && _v45(google.maps.event.addListener(_v0, "setproperty", _v14)), _v19(_v0), _v15 && _v15(_v0);
      }
      return () => {
        _v18 && (null !== _v20 && google.maps.event.removeListener(_v20), null !== _v22 && google.maps.event.removeListener(_v22), null !== _v24 && google.maps.event.removeListener(_v24), null !== _v26 && google.maps.event.removeListener(_v26), null !== _v28 && google.maps.event.removeListener(_v28), null !== _v30 && google.maps.event.removeListener(_v30), null !== _v32 && google.maps.event.removeListener(_v32), null !== _v34 && google.maps.event.removeListener(_v34), null !== _v36 && google.maps.event.removeListener(_v36), null !== _v38 && google.maps.event.removeListener(_v38), null !== _v40 && google.maps.event.removeListener(_v40), null !== _v42 && google.maps.event.removeListener(_v42), null !== _v44 && google.maps.event.removeListener(_v44), _v16 && _v16(_v18), _v18.setMap(null));
      };
    }, []), null;
  });
  class _v131 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        data: null
      }), _v16(this, "setDataCallback", () => {
        null !== this.state.data && this.props.onLoad && this.props.onLoad(this.state.data);
      });
    }
    componentDidMount() {
      if (null !== this.context) {
        var _v0 = new google.maps.Data(_v128(_v128({}, this.props.options), {}, {
          map: this.context
        }));
        this.registeredEvents = _v22({
          updaterMap: _v130,
          eventMap: _v129,
          prevProps: {},
          nextProps: this.props,
          instance: _v0
        }), this.setState(() => ({
          data: _v0
        }), this.setDataCallback);
      }
    }
    componentDidUpdate(_v0) {
      null !== this.state.data && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v130,
        eventMap: _v129,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.data
      }));
    }
    componentWillUnmount() {
      null !== this.state.data && (this.props.onUnmount && this.props.onUnmount(this.state.data), _v21(this.registeredEvents), this.state.data && this.state.data.setMap(null));
    }
    render() {
      return null;
    }
  }
  function _v132(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v133(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v132(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v132(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v131, "contextType", _v19);
  var _v134 = {
      onClick: "click",
      onDefaultViewportChanged: "defaultviewport_changed",
      onStatusChanged: "status_changed"
    },
    _v135 = {
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      url(_v0, _v1) {
        _v0.setUrl(_v1);
      },
      zIndex(_v0, _v1) {
        _v0.setZIndex(_v1);
      }
    };
  class _v136 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        kmlLayer: null
      }), _v16(this, "setKmlLayerCallback", () => {
        null !== this.state.kmlLayer && this.props.onLoad && this.props.onLoad(this.state.kmlLayer);
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.KmlLayer(_v133(_v133({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = _v22({
        updaterMap: _v135,
        eventMap: _v134,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          kmlLayer: _v0
        };
      }, this.setKmlLayerCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.kmlLayer && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v135,
        eventMap: _v134,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.kmlLayer
      }));
    }
    componentWillUnmount() {
      null !== this.state.kmlLayer && (this.props.onUnmount && this.props.onUnmount(this.state.kmlLayer), _v21(this.registeredEvents), this.state.kmlLayer.setMap(null));
    }
    render() {
      return null;
    }
  }
  function _v137(_v0, _v1) {
    return "function" == typeof _v1 ? _v1(_v0.offsetWidth, _v0.offsetHeight) : {
      x: 0,
      y: 0
    };
  }
  function _v138(_v0, _v1) {
    return new _v1(_v0.lat, _v0.lng);
  }
  function _v139(_v0, _v1) {
    return new _v1(new google.maps.LatLng(_v0.ne.lat, _v0.ne.lng), new google.maps.LatLng(_v0.sw.lat, _v0.sw.lng));
  }
  function _v140(_v0, _v1, _v2, _v3) {
    var _v4, _v5, _v6, _v7, _v8;
    return void 0 !== _v2 ? (_v4 = google.maps.LatLngBounds, _v5 = _v2 instanceof _v4 ? _v2 : _v139(_v2, _v4), _v6 = _v0 && _v0.fromLatLngToDivPixel(_v5.getNorthEast()), _v7 = _v0 && _v0.fromLatLngToDivPixel(_v5.getSouthWest()), _v6 && _v7 ? {
      left: "".concat(_v7.x + _v1.x, "px"),
      top: "".concat(_v6.y + _v1.y, "px"),
      width: "".concat(_v6.x - _v7.x - _v1.x, "px"),
      height: "".concat(_v7.y - _v6.y - _v1.y, "px")
    } : {
      left: "-9999px",
      top: "-9999px"
    }) : function (_v0, _v1, _v2) {
      var _v3 = _v0 && _v0.fromLatLngToDivPixel(_v2);
      if (_v3) {
        var {
          x: _v4,
          y: _v5
        } = _v3;
        return {
          left: "".concat(_v4 + _v1.x, "px"),
          top: "".concat(_v5 + _v1.y, "px")
        };
      }
      return {
        left: "-9999px",
        top: "-9999px"
      };
    }(_v0, _v1, (_v8 = google.maps.LatLng, _v3 instanceof _v8 ? _v3 : _v138(_v3, _v8)));
  }
  function _v141(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v142(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v143(_v0) {
    return _v0 ? (_v0 instanceof google.maps.LatLng ? _v0 : new google.maps.LatLng(_v0.lat, _v0.lng)) + "" : "";
  }
  function _v144(_v0) {
    return _v0 ? (_v0 instanceof google.maps.LatLngBounds ? _v0 : new google.maps.LatLngBounds(new google.maps.LatLng(_v0.south, _v0.east), new google.maps.LatLng(_v0.north, _v0.west))) + "" : "";
  }
  _v16(_v136, "contextType", _v19), (0, _v13.memo)(function (_v0) {
    var {
        position: _v1,
        bounds: _v2,
        mapPaneName: _v3,
        zIndex: _v4,
        onLoad: _v5,
        onUnmount: _v6,
        getPixelPositionOffset: _v7,
        children: _v8
      } = _v0,
      _v9 = (0, _v13.useContext)(_v19),
      _v10 = (0, _v13.useMemo)(() => {
        var _v0 = document.createElement("div");
        return _v0.style.position = "absolute", _v0;
      }, []),
      _v11 = (0, _v13.useMemo)(() => function (_v0, _v1, _v2, _v3, _v4) {
        class _v5 extends google.maps.OverlayView {
          constructor(_v0, _v1, _v2, _v3) {
            super(), this.container = _v0, this.pane = _v1, this.position = _v2, this.bounds = _v3;
          }
          onAdd() {
            var _v0,
              _v1 = null == (_v0 = this.getPanes()) ? void 0 : _v0[this.pane];
            null == _v1 || _v1.appendChild(this.container);
          }
          draw() {
            for (var [_v0, _v1] of Object.entries(_v140(this.getProjection(), function (_v0) {
              for (var _v1 = 1; _v1 < arguments.length; _v1++) {
                var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
                _v1 % 2 ? _v141(Object(_v2), !0).forEach(function (_v0) {
                  _v16(_v0, _v0, _v2[_v0]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v141(Object(_v2)).forEach(function (_v0) {
                  Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
                });
              }
              return _v0;
            }({}, this.container ? _v137(this.container, _v4) : {
              x: 0,
              y: 0
            }), this.bounds, this.position))) this.container.style[_v0] = _v1;
          }
          onRemove() {
            null !== this.container.parentNode && this.container.parentNode.removeChild(this.container);
          }
        }
        return new _v5(_v0, _v1, _v2, _v3);
      }(_v10, _v3, _v1, _v2, _v7), [_v10, _v3, _v1, _v2]);
    return (0, _v13.useEffect)(() => (null == _v5 || _v5(_v11), null == _v11 || _v11.setMap(_v9), () => {
      null == _v6 || _v6(_v11), null == _v11 || _v11.setMap(null);
    }), [_v9, _v11]), (0, _v13.useEffect)(() => {
      _v10.style.zIndex = "".concat(_v4);
    }, [_v4, _v10]), _v14.createPortal(_v8, _v10);
  });
  class _v145 extends _v13.PureComponent {
    constructor(_v0) {
      super(_v0), _v16(this, "state", {
        paneEl: null,
        containerStyle: {
          position: "absolute"
        }
      }), _v16(this, "updatePane", () => {
        var _v0 = this.props.mapPaneName,
          _v1 = this.overlayView.getPanes();
        _v18(!!_v0, "OverlayView requires props.mapPaneName but got %s", _v0), _v1 ? this.setState({
          paneEl: _v1[_v0]
        }) : this.setState({
          paneEl: null
        });
      }), _v16(this, "onAdd", () => {
        var _v0, _v1;
        this.updatePane(), null == (_v0 = (_v1 = this.props).onLoad) || _v0.call(_v1, this.overlayView);
      }), _v16(this, "onPositionElement", () => {
        var _v0,
          _v1,
          _v2,
          _v3,
          _v4,
          _v5 = _v140(this.overlayView.getProjection(), function (_v0) {
            for (var _v1 = 1; _v1 < arguments.length; _v1++) {
              var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
              _v1 % 2 ? _v142(Object(_v2), !0).forEach(function (_v0) {
                _v16(_v0, _v0, _v2[_v0]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v142(Object(_v2)).forEach(function (_v0) {
                Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
              });
            }
            return _v0;
          }({
            x: 0,
            y: 0
          }, this.containerRef.current ? _v137(this.containerRef.current, this.props.getPixelPositionOffset) : {}), this.props.bounds, this.props.position);
        _v4 = {
          left: this.state.containerStyle.left,
          top: this.state.containerStyle.top,
          width: this.state.containerStyle.width,
          height: this.state.containerStyle.height
        }, (_v5.left !== _v4.left || _v5.top !== _v4.top || _v5.width !== _v4.height || _v5.height !== _v4.height) && this.setState({
          containerStyle: {
            top: null != (_v0 = _v5.top) ? _v0 : 0,
            left: null != (_v1 = _v5.left) ? _v1 : 0,
            width: null != (_v2 = _v5.width) ? _v2 : 0,
            height: null != (_v3 = _v5.height) ? _v3 : 0,
            position: "absolute"
          }
        });
      }), _v16(this, "draw", () => {
        this.onPositionElement();
      }), _v16(this, "onRemove", () => {
        var _v0, _v1;
        this.setState(() => ({
          paneEl: null
        })), null == (_v0 = (_v1 = this.props).onUnmount) || _v0.call(_v1, this.overlayView);
      }), this.containerRef = (0, _v13.createRef)();
      var _v1 = new google.maps.OverlayView();
      _v1.onAdd = this.onAdd, _v1.draw = this.draw, _v1.onRemove = this.onRemove, this.overlayView = _v1;
    }
    componentDidMount() {
      this.overlayView.setMap(this.context);
    }
    componentDidUpdate(_v0) {
      var _v1 = _v143(_v0.position),
        _v2 = _v143(this.props.position),
        _v3 = _v144(_v0.bounds),
        _v4 = _v144(this.props.bounds);
      (_v1 !== _v2 || _v3 !== _v4) && this.overlayView.draw(), _v0.mapPaneName !== this.props.mapPaneName && this.updatePane();
    }
    componentWillUnmount() {
      this.overlayView.setMap(null);
    }
    render() {
      var _v0 = this.state.paneEl;
      return _v0 ? _v14.createPortal((0, _v12.jsx)("div", {
        ref: this.containerRef,
        style: this.state.containerStyle,
        children: _v13.Children.only(this.props.children)
      }), _v0) : null;
    }
  }
  function _v146(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v147(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v146(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v146(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v145, "FLOAT_PANE", "floatPane"), _v16(_v145, "MAP_PANE", "mapPane"), _v16(_v145, "MARKER_LAYER", "markerLayer"), _v16(_v145, "OVERLAY_LAYER", "overlayLayer"), _v16(_v145, "OVERLAY_MOUSE_TARGET", "overlayMouseTarget"), _v16(_v145, "contextType", _v19);
  var _v148 = {
      onDblClick: "dblclick",
      onClick: "click"
    },
    _v149 = {
      opacity(_v0, _v1) {
        _v0.setOpacity(_v1);
      }
    };
  (0, _v13.memo)(function (_v0) {
    var {
        url: _v1,
        bounds: _v2,
        options: _v3,
        visible: _v4
      } = _v0,
      _v5 = (0, _v13.useContext)(_v19),
      _v6 = new google.maps.LatLngBounds(new google.maps.LatLng(_v2.south, _v2.west), new google.maps.LatLng(_v2.north, _v2.east)),
      _v7 = (0, _v13.useMemo)(() => new google.maps.GroundOverlay(_v1, _v6, _v3), []);
    return (0, _v13.useEffect)(() => {
      null !== _v7 && _v7.setMap(_v5);
    }, [_v5]), (0, _v13.useEffect)(() => {
      void 0 !== _v1 && null !== _v7 && (_v7.set("url", _v1), _v7.setMap(_v5));
    }, [_v7, _v1]), (0, _v13.useEffect)(() => {
      void 0 !== _v4 && null !== _v7 && _v7.setOpacity(+!!_v4);
    }, [_v7, _v4]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.LatLngBounds(new google.maps.LatLng(_v2.south, _v2.west), new google.maps.LatLng(_v2.north, _v2.east));
      void 0 !== _v2 && null !== _v7 && (_v7.set("bounds", _v0), _v7.setMap(_v5));
    }, [_v7, _v2]), null;
  });
  class _v150 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        groundOverlay: null
      }), _v16(this, "setGroundOverlayCallback", () => {
        null !== this.state.groundOverlay && this.props.onLoad && this.props.onLoad(this.state.groundOverlay);
      });
    }
    componentDidMount() {
      _v18(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
      var _v0 = new google.maps.GroundOverlay(this.props.url, this.props.bounds, _v147(_v147({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = _v22({
        updaterMap: _v149,
        eventMap: _v148,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          groundOverlay: _v0
        };
      }, this.setGroundOverlayCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.groundOverlay && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v149,
        eventMap: _v148,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.groundOverlay
      }));
    }
    componentWillUnmount() {
      this.state.groundOverlay && (this.props.onUnmount && this.props.onUnmount(this.state.groundOverlay), this.state.groundOverlay.setMap(null));
    }
    render() {
      return null;
    }
  }
  function _v151(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v152(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v151(Object(_v2), !0).forEach(function (_v0) {
        _v16(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v151(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  _v16(_v150, "defaultProps", {
    onLoad: function () {}
  }), _v16(_v150, "contextType", _v19);
  var _v153 = {},
    _v154 = {
      data(_v0, _v1) {
        _v0.setData(_v1);
      },
      map(_v0, _v1) {
        _v0.setMap(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      }
    };
  (0, _v13.memo)(function (_v0) {
    var {
        data: _v1,
        onLoad: _v2,
        onUnmount: _v3,
        options: _v4
      } = _v0,
      _v5 = (0, _v13.useContext)(_v19),
      [_v6, _v7] = (0, _v13.useState)(null);
    return (0, _v13.useEffect)(() => {
      google.maps.visualization || _v18(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
    }, []), (0, _v13.useEffect)(() => {
      _v18(!!_v1, "data property is required in HeatmapLayer %s", _v1);
    }, [_v1]), (0, _v13.useEffect)(() => {
      null !== _v6 && _v6.setMap(_v5);
    }, [_v5]), (0, _v13.useEffect)(() => {
      _v4 && null !== _v6 && _v6.setOptions(_v4);
    }, [_v6, _v4]), (0, _v13.useEffect)(() => {
      var _v0 = new google.maps.visualization.HeatmapLayer(_v152(_v152({}, _v4), {}, {
        data: _v1,
        map: _v5
      }));
      return _v7(_v0), _v2 && _v2(_v0), () => {
        null !== _v6 && (_v3 && _v3(_v6), _v6.setMap(null));
      };
    }, []), null;
  });
  class _v155 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        heatmapLayer: null
      }), _v16(this, "setHeatmapLayerCallback", () => {
        null !== this.state.heatmapLayer && this.props.onLoad && this.props.onLoad(this.state.heatmapLayer);
      });
    }
    componentDidMount() {
      _v18(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization), _v18(!!this.props.data, "data property is required in HeatmapLayer %s", this.props.data);
      var _v0 = new google.maps.visualization.HeatmapLayer(_v152(_v152({}, this.props.options), {}, {
        data: this.props.data,
        map: this.context
      }));
      this.registeredEvents = _v22({
        updaterMap: _v154,
        eventMap: _v153,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          heatmapLayer: _v0
        };
      }, this.setHeatmapLayerCallback);
    }
    componentDidUpdate(_v0) {
      _v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v154,
        eventMap: _v153,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.heatmapLayer
      });
    }
    componentWillUnmount() {
      null !== this.state.heatmapLayer && (this.props.onUnmount && this.props.onUnmount(this.state.heatmapLayer), _v21(this.registeredEvents), this.state.heatmapLayer.setMap(null));
    }
    render() {
      return null;
    }
  }
  _v16(_v155, "contextType", _v19);
  var _v156 = {
      onCloseClick: "closeclick",
      onPanoChanged: "pano_changed",
      onPositionChanged: "position_changed",
      onPovChanged: "pov_changed",
      onResize: "resize",
      onStatusChanged: "status_changed",
      onVisibleChanged: "visible_changed",
      onZoomChanged: "zoom_changed"
    },
    _v157 = {
      register(_v0, _v1, _v2) {
        _v0.registerPanoProvider(_v1, _v2);
      },
      links(_v0, _v1) {
        _v0.setLinks(_v1);
      },
      motionTracking(_v0, _v1) {
        _v0.setMotionTracking(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      pano(_v0, _v1) {
        _v0.setPano(_v1);
      },
      position(_v0, _v1) {
        _v0.setPosition(_v1);
      },
      pov(_v0, _v1) {
        _v0.setPov(_v1);
      },
      visible(_v0, _v1) {
        _v0.setVisible(_v1);
      },
      zoom(_v0, _v1) {
        _v0.setZoom(_v1);
      }
    };
  class _v158 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        streetViewPanorama: null
      }), _v16(this, "setStreetViewPanoramaCallback", () => {
        null !== this.state.streetViewPanorama && this.props.onLoad && this.props.onLoad(this.state.streetViewPanorama);
      });
    }
    componentDidMount() {
      var _v0,
        _v1,
        _v2 = null != (_v0 = null == (_v1 = this.context) ? void 0 : _v1.getStreetView()) ? _v0 : null;
      this.registeredEvents = _v22({
        updaterMap: _v157,
        eventMap: _v156,
        prevProps: {},
        nextProps: this.props,
        instance: _v2
      }), this.setState(() => ({
        streetViewPanorama: _v2
      }), this.setStreetViewPanoramaCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.streetViewPanorama && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v157,
        eventMap: _v156,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.streetViewPanorama
      }));
    }
    componentWillUnmount() {
      null !== this.state.streetViewPanorama && (this.props.onUnmount && this.props.onUnmount(this.state.streetViewPanorama), _v21(this.registeredEvents), this.state.streetViewPanorama.setVisible(!1));
    }
    render() {
      return null;
    }
  }
  _v16(_v158, "contextType", _v19);
  class _v159 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "state", {
        streetViewService: null
      }), _v16(this, "setStreetViewServiceCallback", () => {
        null !== this.state.streetViewService && this.props.onLoad && this.props.onLoad(this.state.streetViewService);
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.StreetViewService();
      this.setState(function () {
        return {
          streetViewService: _v0
        };
      }, this.setStreetViewServiceCallback);
    }
    componentWillUnmount() {
      null !== this.state.streetViewService && this.props.onUnmount && this.props.onUnmount(this.state.streetViewService);
    }
    render() {
      return null;
    }
  }
  _v16(_v159, "contextType", _v19), _v13.PureComponent;
  var _v160 = {
      onDirectionsChanged: "directions_changed"
    },
    _v161 = {
      directions(_v0, _v1) {
        _v0.setDirections(_v1);
      },
      map(_v0, _v1) {
        _v0.setMap(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      panel(_v0, _v1) {
        _v0.setPanel(_v1);
      },
      routeIndex(_v0, _v1) {
        _v0.setRouteIndex(_v1);
      }
    };
  class _v162 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "state", {
        directionsRenderer: null
      }), _v16(this, "setDirectionsRendererCallback", () => {
        null !== this.state.directionsRenderer && (this.state.directionsRenderer.setMap(this.context), this.props.onLoad && this.props.onLoad(this.state.directionsRenderer));
      });
    }
    componentDidMount() {
      var _v0 = new google.maps.DirectionsRenderer(this.props.options);
      this.registeredEvents = _v22({
        updaterMap: _v161,
        eventMap: _v160,
        prevProps: {},
        nextProps: this.props,
        instance: _v0
      }), this.setState(function () {
        return {
          directionsRenderer: _v0
        };
      }, this.setDirectionsRendererCallback);
    }
    componentDidUpdate(_v0) {
      null !== this.state.directionsRenderer && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v161,
        eventMap: _v160,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.directionsRenderer
      }));
    }
    componentWillUnmount() {
      null !== this.state.directionsRenderer && (this.props.onUnmount && this.props.onUnmount(this.state.directionsRenderer), _v21(this.registeredEvents), this.state.directionsRenderer && this.state.directionsRenderer.setMap(null));
    }
    render() {
      return null;
    }
  }
  _v16(_v162, "contextType", _v19), _v13.PureComponent;
  var _v163 = {
      onPlacesChanged: "places_changed"
    },
    _v164 = {
      bounds(_v0, _v1) {
        _v0.setBounds(_v1);
      }
    };
  class _v165 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "containerElement", (0, _v13.createRef)()), _v16(this, "state", {
        searchBox: null
      }), _v16(this, "setSearchBoxCallback", () => {
        null !== this.state.searchBox && this.props.onLoad && this.props.onLoad(this.state.searchBox);
      });
    }
    componentDidMount() {
      if (_v18(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places), null !== this.containerElement && null !== this.containerElement.current) {
        var _v0 = this.containerElement.current.querySelector("input");
        if (null !== _v0) {
          var _v1 = new google.maps.places.SearchBox(_v0, this.props.options);
          this.registeredEvents = _v22({
            updaterMap: _v164,
            eventMap: _v163,
            prevProps: {},
            nextProps: this.props,
            instance: _v1
          }), this.setState(function () {
            return {
              searchBox: _v1
            };
          }, this.setSearchBoxCallback);
        }
      }
    }
    componentDidUpdate(_v0) {
      null !== this.state.searchBox && (_v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v164,
        eventMap: _v163,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.searchBox
      }));
    }
    componentWillUnmount() {
      null !== this.state.searchBox && (this.props.onUnmount && this.props.onUnmount(this.state.searchBox), _v21(this.registeredEvents));
    }
    render() {
      return (0, _v12.jsx)("div", {
        ref: this.containerElement,
        children: _v13.Children.only(this.props.children)
      });
    }
  }
  _v16(_v165, "contextType", _v19);
  var _v166 = {
      onPlaceChanged: "place_changed"
    },
    _v167 = {
      bounds(_v0, _v1) {
        _v0.setBounds(_v1);
      },
      restrictions(_v0, _v1) {
        _v0.setComponentRestrictions(_v1);
      },
      fields(_v0, _v1) {
        _v0.setFields(_v1);
      },
      options(_v0, _v1) {
        _v0.setOptions(_v1);
      },
      types(_v0, _v1) {
        _v0.setTypes(_v1);
      }
    };
  class _v168 extends _v13.PureComponent {
    constructor() {
      super(...arguments), _v16(this, "registeredEvents", []), _v16(this, "containerElement", (0, _v13.createRef)()), _v16(this, "state", {
        autocomplete: null
      }), _v16(this, "setAutocompleteCallback", () => {
        null !== this.state.autocomplete && this.props.onLoad && this.props.onLoad(this.state.autocomplete);
      });
    }
    componentDidMount() {
      _v18(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
      var _v0,
        _v1 = null == (_v0 = this.containerElement.current) ? void 0 : _v0.querySelector("input");
      if (_v1) {
        var _v2 = new google.maps.places.Autocomplete(_v1, this.props.options);
        this.registeredEvents = _v22({
          updaterMap: _v167,
          eventMap: _v166,
          prevProps: {},
          nextProps: this.props,
          instance: _v2
        }), this.setState(() => ({
          autocomplete: _v2
        }), this.setAutocompleteCallback);
      }
    }
    componentDidUpdate(_v0) {
      _v21(this.registeredEvents), this.registeredEvents = _v22({
        updaterMap: _v167,
        eventMap: _v166,
        prevProps: _v0,
        nextProps: this.props,
        instance: this.state.autocomplete
      });
    }
    componentWillUnmount() {
      null !== this.state.autocomplete && _v21(this.registeredEvents);
    }
    render() {
      return (0, _v12.jsx)("div", {
        ref: this.containerElement,
        className: this.props.className,
        children: _v13.Children.only(this.props.children)
      });
    }
  }
  _v16(_v168, "defaultProps", {
    className: ""
  }), _v16(_v168, "contextType", _v19);
  let _v169 = _v13.default.createContext({});
  _v0.s(["GoogleMapContext", 0, _v169, "default", 0, function ({
    children: _v0,
    googleApiKey: _v1
  }) {
    let {
        isLoaded: _v2
      } = _v35({
        id: "google-maps-places-script",
        googleMapsApiKey: _v1,
        libraries: ["places"]
      }),
      _v3 = (0, _v13.useRef)({}),
      _v4 = (0, _v13.useCallback)(() => {
        if (_v2) {
          let _v0 = window.google?.maps.places;
          _v0 && (_v3.current = {
            googleAutoComplete: new _v0.AutocompleteService(),
            googlePlaces: new _v0.PlacesService(document.createElement("div")),
            googleObj: _v0
          });
        }
        return _v3.current;
      }, [_v2]);
    return (0, _v12.jsx)(_v169.Provider, {
      value: _v4(),
      children: _v0
    });
  }], 0);
  var _v170 = ((_v4 = {}).ERROR = "ERROR", _v4.INVALID_REQUEST = "INVALID_REQUEST", _v4.OK = "OK", _v4.NOT_FOUND = "NOT_FOUND", _v4.ZERO_RESULTS = "ZERO_RESULTS", _v4);
  _v0.s(["PlacesServiceStatus", () => _v170], 0);
  class _v171 {
    static interval = null;
    static _token = null;
    static initialize() {
      null == _v171._token && _v171.triggerReset();
    }
    static triggerReset() {
      _v171.clearToken(), _v171.resetToken(), _v171.interval = setInterval(_v171.resetToken, 0);
    }
    static resetToken = () => {
      _v171._token = new window.google.maps.places.AutocompleteSessionToken();
    };
    static get token() {
      return _v171.initialize(), _v171._token;
    }
    static clearToken() {
      _v171.interval && clearInterval(_v171.interval), _v171._token && (_v171._token = void 0);
    }
  }
  _v0.s(["default", () => _v171], 0);
  class _v172 {
    googleAutoComplete;
    constructor(_v0) {
      this.googleAutoComplete = _v0;
    }
    loadAllLocations(_v0, _v1 = ["geocode"]) {
      return new Promise((_v0, _v1) => {
        if (_v0 && this.googleAutoComplete) {
          let _v0 = {
            types: _v1,
            input: _v0,
            sessionToken: _v171.token
          };
          this.googleAutoComplete.getPlacePredictions(_v0, (_v0, _v1) => {
            _v0(this.loadLocationsCallback(_v0, _v1));
          });
        } else _v1(this.googleAutoComplete ? "Query text is needed for getting location details" : "Autocomplete Service is missing in constructor or is not set properly in context");
      });
    }
    loadLocationsCallback(_v0, _v1) {
      let _v2 = [];
      return _v1 === _v170.OK && (_v2 = (_v0 || []).filter(_v0 => _v0.types.includes("locality") || _v0.types.includes("neighborhood") || _v0.types.includes("sublocality_level_1"))), _v2;
    }
  }
  _v0.s(["default", 0, function (_v0) {
    let {
        googleAutoComplete: _v1
      } = (0, _v13.useContext)(_v169),
      [_v2, _v3] = (0, _v13.useState)([]),
      _v4 = _v0 => {
        _v3((_v0 || []).map(_v0 => ({
          placeId: _v0.place_id,
          formattedAddress: _v0.description
        })));
      };
    return (0, _v13.useEffect)(() => {
      _v1 && new _v172(_v1).loadAllLocations(_v0).then(_v4).catch(() => _v3([]));
    }, [_v0, _v1]), _v2;
  }], 0), _v0.s(["default", 0, ({
    input: _v0,
    suggestion: _v1
  }) => {
    let _v2 = _v0.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&"),
      _v3 = RegExp(`(${_v2})`, "ig");
    return (0, _v12.jsx)(_v12.Fragment, {
      children: _v1.split(_v3).map(_v0 => _v0.toLowerCase() === _v0.toLowerCase() ? (0, _v12.jsx)("b", {
        children: _v0
      }) : _v0)
    });
  }], 0);
}