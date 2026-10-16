{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7 = function (_v0, _v1) {
      for (var _v2 = 0, _v3 = _v1.length, _v4 = _v0.length; _v2 < _v3; _v2++, _v4++) _v0[_v4] = _v1[_v2];
      return _v0;
    };
  function _v8(_v0, _v1) {
    if (null == _v0) return _v0;
    if (0 === _v0.length && (!_v1 || _v1 && "" !== _v0)) return null;
    var _v2 = _v0 instanceof Array ? _v0[0] : _v0;
    return null == _v2 || _v1 || "" !== _v2 ? _v2 : null;
  }
  function _v9(_v0) {
    return null == _v0 ? _v0 : _v0 ? "1" : "0";
  }
  function _v10(_v0) {
    var _v1 = _v8(_v0);
    return null == _v1 ? _v1 : "1" === _v1 || "0" !== _v1 && null;
  }
  function _v11(_v0) {
    return null == _v0 ? _v0 : String(_v0);
  }
  function _v12(_v0) {
    var _v1 = _v8(_v0);
    return null == _v1 ? _v1 : "" === _v1 ? null : +_v1;
  }
  function _v13(_v0) {
    return null == _v0 ? _v0 : String(_v0);
  }
  function _v14(_v0) {
    var _v1 = _v8(_v0, !0);
    return null == _v1 ? _v1 : String(_v1);
  }
  function _v15(_v0, _v1) {
    var _v2 = _v14(_v0);
    return null == _v2 || _v1.includes(_v2) ? _v2 : void 0;
  }
  function _v16(_v0) {
    return null == _v0 ? _v0 : JSON.stringify(_v0);
  }
  function _v17(_v0) {
    var _v1 = _v8(_v0);
    if (null == _v1) return _v1;
    var _v2 = null;
    try {
      _v2 = JSON.parse(_v1);
    } catch (_v0) {}
    return _v2;
  }
  function _v18(_v0) {
    return null == _v0 || _v0 instanceof Array ? _v0 : "" === _v0 ? [] : [_v0];
  }
  function _v19(_v0, _v1) {
    return (void 0 === _v1 && (_v1 = "_"), null == _v0) ? _v0 : _v0.join(_v1);
  }
  function _v20(_v0, _v1) {
    void 0 === _v1 && (_v1 = "_");
    var _v2 = _v8(_v0, !0);
    return null == _v2 ? _v2 : "" === _v2 ? [] : _v2.split(_v1);
  }
  function _v21(_v0, _v1, _v2) {
    return (void 0 === _v1 && (_v1 = "-"), void 0 === _v2 && (_v2 = "_"), null == _v0) ? _v0 : Object.keys(_v0).length ? Object.keys(_v0).map(function (_v0) {
      return "" + _v0 + _v1 + _v0[_v0];
    }).join(_v2) : "";
  }
  function _v22(_v0, _v1, _v2) {
    void 0 === _v1 && (_v1 = "-"), void 0 === _v2 && (_v2 = "_");
    var _v3 = _v8(_v0, !0);
    if (null == _v3) return _v3;
    if ("" === _v3) return {};
    var _v4 = {},
      _v5 = RegExp(_v1 + "(.*)");
    return _v3.split(_v2).forEach(function (_v0) {
      var _v1 = _v0.split(_v5),
        _v2 = _v1[0],
        _v3 = _v1[1];
      _v4[_v2] = _v3;
    }), _v4;
  }
  _v0.s(["decodeArray", 0, _v18, "decodeBoolean", 0, _v10, "decodeDate", 0, function (_v0) {
    var _v1 = _v8(_v0);
    if (null == _v1) return _v1;
    var _v2 = _v1.split("-");
    null != _v2[1] ? _v2[1] -= 1 : (_v2[1] = 0, _v2[2] = 1);
    var _v3 = new (Date.bind.apply(Date, _v7([void 0], _v2)))();
    return isNaN(_v3.getTime()) ? null : _v3;
  }, "decodeDateTime", 0, function (_v0) {
    var _v1 = _v8(_v0);
    if (null == _v1) return _v1;
    var _v2 = new Date(_v1);
    return isNaN(_v2.getTime()) ? null : _v2;
  }, "decodeDelimitedArray", 0, _v20, "decodeDelimitedNumericArray", 0, function (_v0, _v1) {
    void 0 === _v1 && (_v1 = "_");
    var _v2 = _v20(_v0, _v1);
    return null == _v2 ? _v2 : _v2.map(function (_v0) {
      return "" === _v0 || null == _v0 ? null : +_v0;
    });
  }, "decodeEnum", 0, _v15, "decodeJson", 0, _v17, "decodeNumber", 0, _v12, "decodeNumericArray", 0, function (_v0) {
    var _v1 = _v18(_v0);
    return null == _v1 ? _v1 : _v1.map(function (_v0) {
      return "" === _v0 || null == _v0 ? null : +_v0;
    });
  }, "decodeNumericObject", 0, function (_v0, _v1, _v2) {
    void 0 === _v1 && (_v1 = "-"), void 0 === _v2 && (_v2 = "_");
    var _v3 = _v22(_v0, _v1, _v2);
    if (null == _v3) return _v3;
    for (var _v4 = {}, _v5 = 0, _v6 = Object.keys(_v3); _v5 < _v6.length; _v5++) {
      var _v7 = _v6[_v5];
      _v4[_v7] = _v12(_v3[_v7]);
    }
    return _v4;
  }, "decodeObject", 0, _v22, "decodeString", 0, _v14, "encodeArray", 0, function (_v0) {
    return _v0;
  }, "encodeBoolean", 0, _v9, "encodeDate", 0, function (_v0) {
    if (null == _v0) return _v0;
    var _v1 = _v0.getFullYear(),
      _v2 = _v0.getMonth() + 1,
      _v3 = _v0.getDate();
    return _v1 + "-" + (_v2 < 10 ? "0" + _v2 : _v2) + "-" + (_v3 < 10 ? "0" + _v3 : _v3);
  }, "encodeDateTime", 0, function (_v0) {
    return null == _v0 ? _v0 : _v0.toISOString();
  }, "encodeDelimitedArray", 0, _v19, "encodeDelimitedNumericArray", 0, _v19, "encodeJson", 0, _v16, "encodeNumber", 0, _v11, "encodeNumericArray", 0, function (_v0) {
    return null == _v0 ? _v0 : _v0.map(String);
  }, "encodeNumericObject", 0, _v21, "encodeObject", 0, _v21, "encodeString", 0, _v13], 0), _v0.s(["BooleanParam", 0, {
    encode: _v9,
    decode: _v10
  }, "JsonParam", 0, {
    encode: _v16,
    decode: _v17
  }, "NumberParam", 0, {
    encode: _v11,
    decode: _v12
  }, "StringParam", 0, {
    encode: _v13,
    decode: _v14
  }, "createEnumParam", 0, function (_v0) {
    return {
      encode: _v13,
      decode: function (_v0) {
        return _v15(_v0, _v0);
      }
    };
  }], 0);
  var _v23 = _v0.i(0),
    _v24 = function () {
      return (_v24 = Object.assign || function (_v0) {
        for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
        return _v0;
      }).apply(this, arguments);
    };
  function _v25(_v0, _v1, _v2) {
    var _v3 = (0, _v23.stringify)(_v0, _v2);
    _v2 && _v2.transformSearchString && (_v3 = _v2.transformSearchString(_v3));
    var _v4 = _v3.length ? "?" + _v3 : "",
      _v5 = (0, _v23.parseUrl)(_v1.href || "").url + _v4;
    return _v24(_v24({}, _v1), {
      key: "" + Date.now(),
      href: _v5,
      search: _v4,
      query: _v0
    });
  }
  '{}[],":'.split("").map(function (_v0) {
    return [_v0, encodeURIComponent(_v0)];
  });
  var _v26 = _v0.i(0),
    _v27 = Object.prototype.hasOwnProperty;
  function _v28(_v0, _v1) {
    return _v0 === _v1 ? 0 !== _v0 || 0 !== _v1 || 1 / _v0 == 1 / _v1 : _v0 != _v0 && _v1 != _v1;
  }
  function _v29(_v0, _v1, _v2) {
    if (_v28(_v0, _v1)) return !0;
    if ("object" != typeof _v0 || null === _v0 || "object" != typeof _v1 || null === _v1) return !1;
    var _v3,
      _v4,
      _v5 = Object.keys(_v0),
      _v6 = Object.keys(_v1);
    if (_v5.length !== _v6.length) return !1;
    for (var _v7 = 0; _v7 < _v5.length; _v7++) {
      var _v8 = null != (_v4 = null == (_v3 = null == _v2 ? void 0 : _v2[_v5[_v7]]) ? void 0 : _v3.equals) ? _v4 : _v28;
      if (!_v27.call(_v1, _v5[_v7]) || !_v8(_v0[_v5[_v7]], _v1[_v5[_v7]])) return !1;
    }
    return !0;
  }
  function _v30(_v0, _v1, _v2) {
    void 0 === _v2 && (_v2 = _v29);
    var _v3 = (null == _v0.current || null == _v1) && _v0.current === _v1 || !_v2(_v0.current, _v1);
    _v26.useEffect(function () {
      _v3 && (_v0.current = _v1);
    }, [_v0, _v1, _v3]);
  }
  function _v31(_v0) {
    if ("object" == typeof _v0) if ("u" > typeof window) return _v0.search;else return (0, _v23.extract)("" + _v0.pathname + (_v0.search ? _v0.search : ""));
    return "";
  }
  var _v32 = _v26.createContext({
    location: {},
    getLocation: function () {
      return {};
    },
    setLocation: function () {}
  });
  function _v33(_v0) {
    var _v1 = _v0.history,
      _v2 = _v0.location,
      _v3 = _v0.children,
      _v4 = _v0.stringifyOptions,
      _v5 = _v26.useRef(_v2);
    _v26.useEffect(function () {
      _v5.current = _v2;
    }, [_v2]);
    var _v6 = _v26.useCallback(function () {
        return _v5.current;
      }, [_v5]),
      _v7 = _v26.useCallback(function (_v0, _v1) {
        _v5.current = function (_v0, _v1, _v2, _v3) {
          switch (void 0 === _v2 && (_v2 = "pushIn"), _v2) {
            case "replace":
            case "push":
              return _v25(_v0, _v1, _v3);
            default:
              var _v4;
              return _v4 = (0, _v23.parse)(_v1.search, {
                parseNumbers: !1
              }), _v25(_v24(_v24({}, _v4), _v0), _v1, _v3);
          }
        }(_v0, null == _v1 || null == _v1.location ? _v5.current : _v1.location, _v1, _v4), _v1 && function (_v0, _v1, _v2) {
          switch (void 0 === _v2 && (_v2 = "pushIn"), _v2) {
            case "pushIn":
            case "push":
              _v0.push(_v1);
              break;
            default:
              _v0.replace(_v1);
          }
        }(_v1, _v5.current, _v1);
      }, [_v1, _v4]);
    return _v26.createElement(_v32.Provider, {
      value: {
        location: _v2,
        getLocation: _v6,
        setLocation: _v7
      }
    }, _v3);
  }
  var _v34 = (_v5 = void 0, _v6 = (0, _v23.parse)(_v5 || ""), function (_v0) {
    return _v5 !== _v0 && (_v5 = _v0, _v6 = (0, _v23.parse)(_v5)), _v6;
  });
  function _v35(_v0, _v1) {
    for (var _v2 = {}, _v3 = Object.keys(_v1), _v4 = 0; _v4 < _v3.length; _v4++) {
      var _v5 = _v3[_v4],
        _v6 = _v1[_v5];
      _v0[_v5] ? _v2[_v5] = _v0[_v5].encode(_v1[_v5]) : _v2[_v5] = null == _v6 ? _v6 : String(_v6);
    }
    return _v2;
  }
  function _v36(_v0, _v1, _v2, _v3, _v4, _v5) {
    var _v6 = !_v29(_v2.current, _v1),
      _v7 = _v34(_v31(_v0));
    if (_v3.current === _v7 && !_v6 && void 0 !== _v4.current) return {
      encodedValues: _v4.current,
      decodedValues: _v5.current
    };
    for (var _v8 = _v4.current || {}, _v9 = _v5.current || {}, _v10 = {}, _v11 = Object.keys(_v1), _v12 = {}, _v13 = 0; _v13 < _v11.length; _v13++) {
      var _v14 = _v11[_v13],
        _v15 = _v1[_v14],
        _v16 = !_v29(_v8[_v14], _v7[_v14]),
        _v17 = void 0,
        _v18 = void 0;
      _v16 || void 0 === _v8[_v14] && void 0 === _v9[_v14] ? (_v17 = _v7[_v14], _v18 = _v15.decode(_v17)) : (_v17 = _v8[_v14], _v18 = _v9[_v14]), _v10[_v14] = _v17, _v12[_v14] = _v18;
    }
    return {
      encodedValues: _v10,
      decodedValues: _v29(_v5.current, _v12, _v1) ? _v5.current : _v12
    };
  }
  var _v37 = function (_v0) {
    var _v1 = _v26.useContext(_v32),
      _v2 = _v1.location,
      _v3 = _v1.getLocation,
      _v4 = _v1.setLocation,
      _v5 = _v34(_v31(_v2)),
      _v6 = _v26.useRef(_v0),
      _v7 = _v26.useRef(_v5),
      _v8 = _v26.useRef(void 0),
      _v9 = _v26.useRef({}),
      _v10 = _v36(_v2, _v0 = _v29(_v0, _v6.current) ? _v6.current : _v0, _v6, _v7, _v8, _v9),
      _v11 = _v10.encodedValues,
      _v12 = _v10.decodedValues;
    _v30(_v7, _v5), _v30(_v6, _v0), _v30(_v8, _v11), _v30(_v9, _v12, function (_v0, _v1) {
      return _v29(_v0, _v1, _v0);
    });
    var _v13 = {
        paramConfigMap: _v0,
        setLocation: _v4,
        getLocation: _v3
      },
      _v14 = _v26.useRef(_v13);
    return _v14.current = _v13, [_v12, _v26.useCallback(function (_v0, _v1) {
      var _v2,
        _v3 = _v14.current;
      if ("function" == typeof _v0) {
        var _v4 = _v36(_v3.getLocation(), _v3.paramConfigMap, _v6, _v7, _v8, _v9).decodedValues;
        _v9.current = _v4, _v2 = _v35(_v3.paramConfigMap, _v0(_v4));
      } else _v2 = _v35(_v3.paramConfigMap, _v0);
      _v3.setLocation(_v2, _v1);
    }, [])];
  };
  _v0.s(["default", 0, _v37, "useQueryParams", 0, _v37], 0);
  var _v38 = function () {
    return (_v38 = Object.assign || function (_v0) {
      for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
      return _v0;
    }).apply(this, arguments);
  };
  function _v39(_v0) {
    var _v1 = void 0 === _v0 ? {} : _v0,
      _v2 = _v1.history,
      _v3 = _v1.location;
    if ("u" > typeof window && (_v2 || (_v2 = function (_v0) {
      if (_v0 === _v1 && null != _v2) return _v2;
      var _v1 = {
        replace: function (_v0) {
          _v0.replaceState(_v0.state, "", _v0.protocol + "//" + _v0.host + _v0.pathname + _v0.search);
        },
        push: function (_v0) {
          _v0.pushState(_v0.state, "", _v0.protocol + "//" + _v0.host + _v0.pathname + _v0.search);
        },
        get location() {
          return window.location;
        }
      };
      return _v1 = _v0, _v2 = _v1, _v1;
    }(window.history)), _v3 || (_v3 = window.location)), !_v3) throw Error("\n        Could not read the location. Is the router wired up correctly?\n      ");
    return {
      history: _v2,
      location: _v3
    };
  }
  _v0.s(["QueryParamProvider", 0, function (_v0) {
    var _v1 = _v0.children,
      _v2 = _v0.ReactRouterRoute,
      _v3 = _v0.reachHistory,
      _v4 = _v0.history,
      _v5 = _v0.location,
      _v6 = _v0.stringifyOptions,
      _v7 = _v26.useRef(_v6),
      _v8 = _v29(_v7.current, _v6) ? _v7.current : _v6;
    return (_v26.useEffect(function () {
      _v7.current = _v8;
    }, [_v8]), _v2) ? _v26.createElement(_v2, null, function (_v0) {
      return _v26.createElement(_v33, _v38({
        stringifyOptions: _v8
      }, _v39(_v0)), _v1);
    }) : _v3 ? _v26.createElement(_v33, _v38({
      stringifyOptions: _v8
    }, _v39({
      history: function (_v0) {
        if (_v0 === _v3 && null != _v4) return _v4;
        var _v1 = {
          replace: function (_v0) {
            _v0.navigate(_v0.protocol + "//" + _v0.host + _v0.pathname + _v0.search, {
              replace: !0
            });
          },
          push: function (_v0) {
            _v0.navigate(_v0.protocol + "//" + _v0.host + _v0.pathname + _v0.search, {
              replace: !1
            });
          },
          get location() {
            return _v0.location;
          }
        };
        return _v3 = _v0, _v4 = _v1, _v1;
      }(_v3),
      location: _v5
    })), _v1) : _v26.createElement(_v33, _v38({
      stringifyOptions: _v8
    }, _v39({
      history: _v4,
      location: _v5
    })), _v1);
  }], 0), _v0.s([], 0);
}