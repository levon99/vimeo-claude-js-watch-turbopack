{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = _v0.r(0),
    _v4 = _v3 && "object" == typeof _v3 && "default" in _v3 ? _v3.default : _v3,
    _v5 = _v0.r(0),
    _v6 = new _v5(),
    _v7 = _v6.getBrowser(),
    _v8 = _v6.getCPU(),
    _v9 = _v6.getDevice(),
    _v10 = _v6.getEngine(),
    _v11 = _v6.getOS(),
    _v12 = _v6.getUA(),
    _v13 = function (_v0) {
      return _v6.setUA(_v0);
    },
    _v14 = function (_v0) {
      if (!_v0) return void console.error("No userAgent string was provided");
      var _v1 = new _v5(_v0);
      return {
        UA: _v1,
        browser: _v1.getBrowser(),
        cpu: _v1.getCPU(),
        device: _v1.getDevice(),
        engine: _v1.getEngine(),
        os: _v1.getOS(),
        ua: _v1.getUA(),
        setUserAgent: function (_v0) {
          return _v1.setUA(_v0);
        }
      };
    },
    _v15 = Object.freeze({
      ClientUAInstance: _v6,
      browser: _v7,
      cpu: _v8,
      device: _v9,
      engine: _v10,
      os: _v11,
      ua: _v12,
      setUa: _v13,
      parseUserAgent: _v14
    });
  function _v16(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v17(_v0) {
    return (_v17 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v18() {
    return (_v18 = Object.assign || function (_v0) {
      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
        var _v2 = arguments[_v1];
        for (var _v3 in _v2) Object.prototype.hasOwnProperty.call(_v2, _v3) && (_v0[_v3] = _v2[_v3]);
      }
      return _v0;
    }).apply(this, arguments);
  }
  function _v19(_v0) {
    return (_v19 = Object.setPrototypeOf ? Object.getPrototypeOf : function (_v0) {
      return _v0.__proto__ || Object.getPrototypeOf(_v0);
    })(_v0);
  }
  function _v20(_v0, _v1) {
    return (_v20 = Object.setPrototypeOf || function (_v0, _v1) {
      return _v0.__proto__ = _v1, _v0;
    })(_v0, _v1);
  }
  function _v21(_v0, _v1) {
    if (null == _v0) return {};
    var _v2,
      _v3,
      _v4 = function (_v0, _v1) {
        if (null == _v0) return {};
        var _v2,
          _v3,
          _v4 = {},
          _v5 = Object.keys(_v0);
        for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], _v1.indexOf(_v2) >= 0 || (_v4[_v2] = _v0[_v2]);
        return _v4;
      }(_v0, _v1);
    if (Object.getOwnPropertySymbols) {
      var _v5 = Object.getOwnPropertySymbols(_v0);
      for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
    }
    return _v4;
  }
  function _v22(_v0) {
    if (void 0 === _v0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _v0;
  }
  function _v23(_v0, _v1) {
    (null == _v1 || _v1 > _v0.length) && (_v1 = _v0.length);
    for (var _v2 = 0, _v3 = Array(_v1); _v2 < _v1; _v2++) _v3[_v2] = _v0[_v2];
    return _v3;
  }
  var _v24 = "mobile",
    _v25 = "tablet",
    _v26 = "smarttv",
    _v27 = "console",
    _v28 = "wearable",
    _v29 = "embedded",
    _v30 = void 0,
    _v31 = {
      Chrome: "Chrome",
      Firefox: "Firefox",
      Opera: "Opera",
      Yandex: "Yandex",
      Safari: "Safari",
      InternetExplorer: "Internet Explorer",
      Edge: "Edge",
      Chromium: "Chromium",
      Ie: "IE",
      MobileSafari: "Mobile Safari",
      EdgeChromium: "Edge Chromium",
      MIUI: "MIUI Browser",
      SamsungBrowser: "Samsung Browser"
    },
    _v32 = {
      IOS: "iOS",
      Android: "Android",
      WindowsPhone: "Windows Phone",
      Windows: "Windows",
      MAC_OS: "Mac OS"
    },
    _v33 = {
      isMobile: !1,
      isTablet: !1,
      isBrowser: !1,
      isSmartTV: !1,
      isConsole: !1,
      isWearable: !1
    },
    _v34 = function (_v0) {
      switch (_v0) {
        case _v24:
          return {
            isMobile: !0
          };
        case _v25:
          return {
            isTablet: !0
          };
        case _v26:
          return {
            isSmartTV: !0
          };
        case _v27:
          return {
            isConsole: !0
          };
        case _v28:
          return {
            isWearable: !0
          };
        case _v30:
          return {
            isBrowser: !0
          };
        case _v29:
          return {
            isEmbedded: !0
          };
        default:
          return _v33;
      }
    },
    _v35 = function (_v0) {
      var _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
      return _v0 || _v1;
    },
    _v36 = function () {
      return !!("u" > typeof window && (window.navigator || navigator)) && (window.navigator || navigator);
    },
    _v37 = function (_v0) {
      var _v1 = _v36();
      return _v1 && _v1.platform && (-1 !== _v1.platform.indexOf(_v0) || "MacIntel" === _v1.platform && _v1.maxTouchPoints > 1 && !window.MSStream);
    },
    _v38 = function (_v0) {
      return _v0.type === _v24;
    },
    _v39 = function (_v0) {
      return _v0.type === _v25;
    },
    _v40 = function (_v0) {
      var _v1 = _v0.type;
      return _v1 === _v24 || _v1 === _v25;
    },
    _v41 = function (_v0) {
      return _v0.type === _v26;
    },
    _v42 = function (_v0) {
      return _v0.type === _v30;
    },
    _v43 = function (_v0) {
      return _v0.type === _v28;
    },
    _v44 = function (_v0) {
      return _v0.type === _v27;
    },
    _v45 = function (_v0) {
      return _v0.type === _v29;
    },
    _v46 = function (_v0) {
      return _v35(_v0.vendor);
    },
    _v47 = function (_v0) {
      return _v35(_v0.model);
    },
    _v48 = function (_v0) {
      return _v35(_v0.type, "browser");
    },
    _v49 = function (_v0) {
      return _v0.name === _v32.Android;
    },
    _v50 = function (_v0) {
      return _v0.name === _v32.Windows;
    },
    _v51 = function (_v0) {
      return _v0.name === _v32.MAC_OS;
    },
    _v52 = function (_v0) {
      return _v0.name === _v32.WindowsPhone;
    },
    _v53 = function (_v0) {
      return _v0.name === _v32.IOS;
    },
    _v54 = function (_v0) {
      return _v35(_v0.version);
    },
    _v55 = function (_v0) {
      return _v35(_v0.name);
    },
    _v56 = function (_v0) {
      return _v0.name === _v31.Chrome;
    },
    _v57 = function (_v0) {
      return _v0.name === _v31.Firefox;
    },
    _v58 = function (_v0) {
      return _v0.name === _v31.Chromium;
    },
    _v59 = function (_v0) {
      return _v0.name === _v31.Edge;
    },
    _v60 = function (_v0) {
      return _v0.name === _v31.Yandex;
    },
    _v61 = function (_v0) {
      var _v1 = _v0.name;
      return _v1 === _v31.Safari || _v1 === _v31.MobileSafari;
    },
    _v62 = function (_v0) {
      return _v0.name === _v31.MobileSafari;
    },
    _v63 = function (_v0) {
      return _v0.name === _v31.Opera;
    },
    _v64 = function (_v0) {
      var _v1 = _v0.name;
      return _v1 === _v31.InternetExplorer || _v1 === _v31.Ie;
    },
    _v65 = function (_v0) {
      return _v0.name === _v31.MIUI;
    },
    _v66 = function (_v0) {
      return _v0.name === _v31.SamsungBrowser;
    },
    _v67 = function (_v0) {
      return _v35(_v0.version);
    },
    _v68 = function (_v0) {
      return _v35(_v0.major);
    },
    _v69 = function (_v0) {
      return _v35(_v0.name);
    },
    _v70 = function (_v0) {
      return _v35(_v0.name);
    },
    _v71 = function (_v0) {
      return _v35(_v0.version);
    },
    _v72 = function () {
      var _v0 = _v36(),
        _v1 = _v0 && _v0.userAgent && _v0.userAgent.toLowerCase();
      return "string" == typeof _v1 && /electron/.test(_v1);
    },
    _v73 = function (_v0) {
      return "string" == typeof _v0 && -1 !== _v0.indexOf("Edg/");
    },
    _v74 = function () {
      var _v0 = _v36();
      return _v0 && (/iPad|iPhone|iPod/.test(_v0.platform) || "MacIntel" === _v0.platform && _v0.maxTouchPoints > 1) && !window.MSStream;
    },
    _v75 = function () {
      return _v37("iPad");
    },
    _v76 = function () {
      return _v37("iPhone");
    },
    _v77 = function () {
      return _v37("iPod");
    },
    _v78 = function (_v0) {
      return _v35(_v0);
    };
  function _v79(_v0) {
    var _v1 = _v0 || _v15,
      _v2 = _v1.device,
      _v3 = _v1.browser,
      _v4 = _v1.os,
      _v5 = _v1.engine,
      _v6 = _v1.ua;
    return {
      isSmartTV: _v41(_v2),
      isConsole: _v44(_v2),
      isWearable: _v43(_v2),
      isEmbedded: _v45(_v2),
      isMobileSafari: _v62(_v3) || _v75(),
      isChromium: _v58(_v3),
      isMobile: _v40(_v2) || _v75(),
      isMobileOnly: _v38(_v2),
      isTablet: _v39(_v2) || _v75(),
      isBrowser: _v42(_v2),
      isDesktop: _v42(_v2),
      isAndroid: _v49(_v4),
      isWinPhone: _v52(_v4),
      isIOS: _v53(_v4) || _v75(),
      isChrome: _v56(_v3),
      isFirefox: _v57(_v3),
      isSafari: _v61(_v3),
      isOpera: _v63(_v3),
      isIE: _v64(_v3),
      osVersion: _v54(_v4),
      osName: _v55(_v4),
      fullBrowserVersion: _v67(_v3),
      browserVersion: _v68(_v3),
      browserName: _v69(_v3),
      mobileVendor: _v46(_v2),
      mobileModel: _v47(_v2),
      engineName: _v70(_v5),
      engineVersion: _v71(_v5),
      getUA: _v78(_v6),
      isEdge: _v59(_v3) || _v73(_v6),
      isYandex: _v60(_v3),
      deviceType: _v48(_v2),
      isIOS13: _v74(),
      isIPad13: _v75(),
      isIPhone13: _v76(),
      isIPod13: _v77(),
      isElectron: _v72(),
      isEdgeChromium: _v73(_v6),
      isLegacyEdge: _v59(_v3) && !_v73(_v6),
      isWindows: _v50(_v4),
      isMacOs: _v51(_v4),
      isMIUI: _v65(_v3),
      isSamsungBrowser: _v66(_v3)
    };
  }
  var _v80 = _v41(_v9),
    _v81 = _v44(_v9),
    _v82 = _v43(_v9),
    _v83 = _v45(_v9),
    _v84 = _v62(_v7) || _v75(),
    _v85 = _v58(_v7),
    _v86 = _v40(_v9) || _v75(),
    _v87 = _v38(_v9),
    _v88 = _v39(_v9) || _v75(),
    _v89 = _v42(_v9),
    _v90 = _v42(_v9),
    _v91 = _v49(_v11),
    _v92 = _v52(_v11),
    _v93 = _v53(_v11) || _v75(),
    _v94 = _v56(_v7),
    _v95 = _v57(_v7),
    _v96 = _v61(_v7),
    _v97 = _v63(_v7),
    _v98 = _v64(_v7),
    _v99 = _v54(_v11),
    _v100 = _v55(_v11),
    _v101 = _v67(_v7),
    _v102 = _v68(_v7),
    _v103 = _v69(_v7),
    _v104 = _v46(_v9),
    _v105 = _v47(_v9),
    _v106 = _v70(_v10),
    _v107 = _v71(_v10),
    _v108 = _v78(_v12),
    _v109 = _v59(_v7) || _v73(_v12),
    _v110 = _v60(_v7),
    _v111 = _v48(_v9),
    _v112 = _v74(),
    _v113 = _v75(),
    _v114 = _v76(),
    _v115 = _v77(),
    _v116 = _v72(),
    _v117 = _v73(_v12),
    _v118 = _v59(_v7) && !_v73(_v12),
    _v119 = _v50(_v11),
    _v120 = _v51(_v11),
    _v121 = _v65(_v7),
    _v122 = _v66(_v7);
  function _v123(_v0) {
    return _v14(_v0 || window.navigator.userAgent);
  }
  _v2.AndroidView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v91 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.BrowserTypes = _v31, _v2.BrowserView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v89 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.ConsoleView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v81 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.CustomView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = (_v0.viewClassName, _v0.style, _v0.condition),
      _v4 = _v21(_v0, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
    return _v3 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v4, _v2) : null;
  }, _v2.IEView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v98 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.IOSView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v93 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.MobileOnlyView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = (_v0.viewClassName, _v0.style, _v21(_v0, ["renderWithFragment", "children", "viewClassName", "style"]));
    return _v87 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.MobileView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v86 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.OsTypes = _v32, _v2.SmartTVView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v80 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.TabletView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v88 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.WearableView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v82 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.WinPhoneView = function (_v0) {
    var _v1 = _v0.renderWithFragment,
      _v2 = _v0.children,
      _v3 = _v21(_v0, ["renderWithFragment", "children"]);
    return _v92 ? _v1 ? _v4.createElement(_v3.Fragment, null, _v2) : _v4.createElement("div", _v3, _v2) : null;
  }, _v2.browserName = _v103, _v2.browserVersion = _v102, _v2.deviceDetect = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4,
      _v5 = _v0 ? _v14(_v0) : _v15,
      _v6 = _v5.device,
      _v7 = _v5.browser,
      _v8 = _v5.engine,
      _v9 = _v5.os,
      _v10 = _v5.ua,
      _v11 = _v34(_v6.type),
      _v12 = _v11.isBrowser,
      _v13 = _v11.isMobile,
      _v14 = _v11.isTablet,
      _v15 = _v11.isSmartTV,
      _v16 = _v11.isConsole,
      _v17 = _v11.isWearable,
      _v18 = _v11.isEmbedded;
    if (_v12) return {
      isBrowser: _v12,
      browserMajorVersion: _v35(_v7.major),
      browserFullVersion: _v35(_v7.version),
      browserName: _v35(_v7.name),
      engineName: _v35(_v8.name),
      engineVersion: _v35(_v8.version),
      osName: _v35(_v9.name),
      osVersion: _v35(_v9.version),
      userAgent: _v35(_v10)
    };
    if (_v15) return {
      isSmartTV: _v15,
      engineName: _v35(_v8.name),
      engineVersion: _v35(_v8.version),
      osName: _v35(_v9.name),
      osVersion: _v35(_v9.version),
      userAgent: _v35(_v10)
    };
    if (_v16) return {
      isConsole: _v16,
      engineName: _v35(_v8.name),
      engineVersion: _v35(_v8.version),
      osName: _v35(_v9.name),
      osVersion: _v35(_v9.version),
      userAgent: _v35(_v10)
    };
    if (_v13 || _v14) {
      return _v1 = _v11, _v2 = _v6, _v3 = _v9, _v4 = _v10, function (_v0) {
        for (var _v1 = 1; _v1 < arguments.length; _v1++) {
          var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
          _v1 % 2 ? _v16(Object(_v2), !0).forEach(function (_v0) {
            var _v1, _v2, _v3;
            _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], _v2 in _v1 ? Object.defineProperty(_v1, _v2, {
              value: _v3,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : _v1[_v2] = _v3;
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v16(Object(_v2)).forEach(function (_v0) {
            Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
          });
        }
        return _v0;
      }({}, _v1, {
        vendor: _v35(_v2.vendor),
        model: _v35(_v2.model),
        os: _v35(_v3.name),
        osVersion: _v35(_v3.version),
        ua: _v35(_v4)
      });
    }
    return _v17 ? {
      isWearable: _v17,
      engineName: _v35(_v8.name),
      engineVersion: _v35(_v8.version),
      osName: _v35(_v9.name),
      osVersion: _v35(_v9.version),
      userAgent: _v35(_v10)
    } : _v18 ? {
      isEmbedded: _v18,
      vendor: _v35(_v6.vendor),
      model: _v35(_v6.model),
      engineName: _v35(_v8.name),
      engineVersion: _v35(_v8.version),
      osName: _v35(_v9.name),
      osVersion: _v35(_v9.version),
      userAgent: _v35(_v10)
    } : void 0;
  }, _v2.deviceType = _v111, _v2.engineName = _v106, _v2.engineVersion = _v107, _v2.fullBrowserVersion = _v101, _v2.getSelectorsByUserAgent = function (_v0) {
    if (!_v0 || "string" != typeof _v0) return void console.error("No valid user agent string was provided");
    var _v1 = _v14(_v0);
    return _v79({
      device: _v1.device,
      browser: _v1.browser,
      os: _v1.os,
      engine: _v1.engine,
      ua: _v1.ua
    });
  }, _v2.getUA = _v108, _v2.isAndroid = _v91, _v2.isBrowser = _v89, _v2.isChrome = _v94, _v2.isChromium = _v85, _v2.isConsole = _v81, _v2.isDesktop = _v90, _v2.isEdge = _v109, _v2.isEdgeChromium = _v117, _v2.isElectron = _v116, _v2.isEmbedded = _v83, _v2.isFirefox = _v95, _v2.isIE = _v98, _v2.isIOS = _v93, _v2.isIOS13 = _v112, _v2.isIPad13 = _v113, _v2.isIPhone13 = _v114, _v2.isIPod13 = _v115, _v2.isLegacyEdge = _v118, _v2.isMIUI = _v121, _v2.isMacOs = _v120, _v2.isMobile = _v86, _v2.isMobileOnly = _v87, _v2.isMobileSafari = _v84, _v2.isOpera = _v97, _v2.isSafari = _v96, _v2.isSamsungBrowser = _v122, _v2.isSmartTV = _v80, _v2.isTablet = _v88, _v2.isWearable = _v82, _v2.isWinPhone = _v92, _v2.isWindows = _v119, _v2.isYandex = _v110, _v2.mobileModel = _v105, _v2.mobileVendor = _v104, _v2.osName = _v100, _v2.osVersion = _v99, _v2.parseUserAgent = _v14, _v2.setUserAgent = function (_v0) {
    return _v13(_v0);
  }, _v2.useDeviceData = _v123, _v2.useDeviceSelectors = function (_v0) {
    var _v1 = _v123(_v0 || window.navigator.userAgent);
    return [_v79(_v1), _v1];
  }, _v2.useMobileOrientation = function () {
    var _v0,
      _v1 = function (_v0) {
        if (Array.isArray(_v0)) return _v0;
      }(_v0 = _v3.useState(function () {
        var _v0 = 90 * (window.innerWidth > window.innerHeight);
        return {
          isPortrait: 0 === _v0,
          isLandscape: 90 === _v0,
          orientation: 0 === _v0 ? "portrait" : "landscape"
        };
      })) || function (_v0) {
        var _v1,
          _v2,
          _v3 = null == _v0 ? null : "u" > typeof Symbol && _v0[Symbol.iterator] || _v0["@@iterator"];
        if (null != _v3) {
          var _v4 = [],
            _v5 = !0,
            _v6 = !1;
          try {
            for (_v3 = _v3.call(_v0); !(_v5 = (_v1 = _v3.next()).done) && (_v4.push(_v1.value), 2 !== _v4.length); _v5 = !0);
          } catch (_v0) {
            _v6 = !0, _v2 = _v0;
          } finally {
            try {
              _v5 || null == _v3.return || _v3.return();
            } finally {
              if (_v6) throw _v2;
            }
          }
          return _v4;
        }
      }(_v0) || function (_v0) {
        if (_v0) {
          if ("string" == typeof _v0) return _v23(_v0, 2);
          var _v1 = Object.prototype.toString.call(_v0).slice(8, -1);
          if ("Object" === _v1 && _v0.constructor && (_v1 = _v0.constructor.name), "Map" === _v1 || "Set" === _v1) return Array.from(_v0);
          if ("Arguments" === _v1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_v1)) return _v23(_v0, 2);
        }
      }(_v0) || function () {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }(),
      _v2 = _v1[0],
      _v3 = _v1[1],
      _v4 = _v3.useCallback(function () {
        var _v0 = 90 * (window.innerWidth > window.innerHeight),
          _v1 = {
            isPortrait: 0 === _v0,
            isLandscape: 90 === _v0,
            orientation: 0 === _v0 ? "portrait" : "landscape"
          };
        _v2.orientation !== _v1.orientation && _v3(_v1);
      }, [_v2.orientation]);
    return _v3.useEffect(function () {
      return ("u" < typeof window ? "undefined" : _v17(window)) !== void 0 && _v86 && (_v4(), window.addEventListener("load", _v4, !1), window.addEventListener("resize", _v4, !1)), function () {
        window.removeEventListener("resize", _v4, !1), window.removeEventListener("load", _v4, !1);
      };
    }, [_v4]), _v2;
  }, _v2.withOrientationChange = function (_v0) {
    return function (_v0) {
      var _v1;
      if ("function" != typeof _v0 && null !== _v0) throw TypeError("Super expression must either be null or a function");
      function _v2(_v0) {
        var _v1;
        if (!(this instanceof _v2)) throw TypeError("Cannot call a class as a function");
        return (_v1 = function (_v0, _v1) {
          if (_v1 && ("object" == typeof _v1 || "function" == typeof _v1)) return _v1;
          if (void 0 !== _v1) throw TypeError("Derived constructors may only return object or undefined");
          return _v22(_v0);
        }(this, _v19(_v2).call(this, _v0))).isEventListenerAdded = !1, _v1.handleOrientationChange = _v1.handleOrientationChange.bind(_v22(_v1)), _v1.onOrientationChange = _v1.onOrientationChange.bind(_v22(_v1)), _v1.onPageLoad = _v1.onPageLoad.bind(_v22(_v1)), _v1.state = {
          isLandscape: !1,
          isPortrait: !1
        }, _v1;
      }
      return _v2.prototype = Object.create(_v0 && _v0.prototype, {
        constructor: {
          value: _v2,
          writable: !0,
          configurable: !0
        }
      }), _v0 && _v20(_v2, _v0), _v1 = [{
        key: "handleOrientationChange",
        value: function () {
          this.isEventListenerAdded || (this.isEventListenerAdded = !0);
          var _v0 = 90 * (window.innerWidth > window.innerHeight);
          this.setState({
            isPortrait: 0 === _v0,
            isLandscape: 90 === _v0
          });
        }
      }, {
        key: "onOrientationChange",
        value: function () {
          this.handleOrientationChange();
        }
      }, {
        key: "onPageLoad",
        value: function () {
          this.handleOrientationChange();
        }
      }, {
        key: "componentDidMount",
        value: function () {
          ("u" < typeof window ? "undefined" : _v17(window)) !== void 0 && _v86 && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1));
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          window.removeEventListener("resize", this.onOrientationChange, !1);
        }
      }, {
        key: "render",
        value: function () {
          return _v4.createElement(_v0, _v18({}, this.props, {
            isLandscape: this.state.isLandscape,
            isPortrait: this.state.isPortrait
          }));
        }
      }], function (_v0, _v1) {
        for (var _v2 = 0; _v2 < _v1.length; _v2++) {
          var _v3 = _v1[_v2];
          _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
        }
      }(_v2.prototype, _v1), _v2;
    }(_v4.Component);
  };
}